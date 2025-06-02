import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { supabaseAdmin } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { Webhook } from 'svix'

type SessionWebhookEvent = WebhookEvent & {
  data: {
    user_id: string;
    client_id: string;
    id: string;
    created_at: number;
    updated_at: number;
    last_active_at: number;
    expire_at: number;
    abandon_at: number;
    status: string;
    object: string;
  };
  event_attributes?: {
    http_request?: {
      client_ip?: string;
      user_agent?: string;
    };
  };
}

// Add a GET endpoint to test if the webhook is reachable
export async function GET() {
  console.log('=== WEBHOOK TEST ENDPOINT HIT ===');
  return NextResponse.json({ status: 'Webhook endpoint is reachable' });
}

export async function POST(req: Request) {
  try {
    console.log('=== WEBHOOK START ===');
    console.log('Webhook received at:', new Date().toISOString());
    
    // Get the headers
    const headerPayload = await headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    console.log('Headers:', { svix_id, svix_timestamp, svix_signature });

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
      console.error('Missing svix headers');
      return new Response('Error occured -- no svix headers', {
        status: 400
      })
    }

    // Get the body
    const payload = await req.json()
    const body = JSON.stringify(payload);
    console.log('Webhook payload:', JSON.stringify(payload, null, 2));

    // Create a new Svix instance with your webhook secret
    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET || '');
    let evt: WebhookEvent

    // Verify the payload with the headers
    try {
      evt = wh.verify(body, {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      }) as WebhookEvent
      console.log('Webhook verified successfully');
    } catch (err) {
      console.error('Error verifying webhook:', err);
      return new Response('Error occured', {
        status: 400
      })
    }

    // Get the ID and type
    const eventType = evt.type;
    console.log('Webhook event type:', eventType);

    if (eventType === 'user.created' || eventType === 'user.updated') {
      const { id, email_addresses, first_name, last_name, image_url } = evt.data;
      const primaryEmail = email_addresses?.[0]?.email_address;
      
      console.log('Processing user data:', {
        id,
        email: primaryEmail,
        first_name,
        last_name
      });

      const userData = {
        clerk_id: id,
        email: primaryEmail,
        first_name: first_name || '',
        last_name: last_name || '',
        profile_image: image_url || '',
        sign_in_count: 0,
        last_sign_in_at: new Date().toISOString(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      console.log('Attempting to upsert user with data:', userData);

      // Upsert user to Supabase
      const { data: insertedUser, error: userError } = await supabaseAdmin
        .from('users')
        .upsert(userData, {
          onConflict: 'clerk_id'
        })
        .select()
        .single();

      console.log('Supabase upsert response:', { insertedUser, userError });

      if (userError) {
        console.error('Error upserting user:', userError);
        return new Response('Error upserting user', {
          status: 500
        });
      }

      console.log('Successfully upserted user:', insertedUser);
    }

    // Handle session.created event for sign-ins
    if (eventType === 'session.created') {
      const sessionEvent = evt as SessionWebhookEvent;
      const { user_id } = sessionEvent.data;
      const clientIp = sessionEvent.event_attributes?.http_request?.client_ip;
      const userAgent = sessionEvent.event_attributes?.http_request?.user_agent;
      
      console.log('=== SESSION.CREATED EVENT ===');
      console.log('User ID:', user_id);
      console.log('Client IP:', clientIp);
      console.log('User Agent:', userAgent);

      try {
        // First, get the user from Supabase
        console.log('Attempting to find user in database...');
        const { data: user, error: userError } = await supabaseAdmin
          .from('users')
          .select('id, sign_in_count, last_sign_in_at')
          .eq('clerk_id', user_id)
          .single();

        console.log('User query result:', { user, userError });

        if (userError) {
          console.error('Error finding user:', userError);
          return new Response(JSON.stringify({ error: 'Error finding user', details: userError }), { 
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          });
        }

        if (!user) {
          console.error('User not found in database');
          return new Response(JSON.stringify({ error: 'User not found in database' }), { 
            status: 404,
            headers: { 'Content-Type': 'application/json' }
          });
        }

        // Update sign-in count and last sign-in time
        console.log('Updating sign-in count and last sign-in time...');
        const { error: updateError } = await supabaseAdmin
          .from('users')
          .update({
            sign_in_count: (user.sign_in_count || 0) + 1,
            last_sign_in_at: new Date().toISOString()
          })
          .eq('id', user.id);

        console.log('Update result:', { updateError });

        if (updateError) {
          console.error('Error updating sign-in count:', updateError);
          return new Response(JSON.stringify({ error: 'Error updating sign-in count', details: updateError }), { 
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          });
        }

        // Record sign-in in user_sign_ins table
        console.log('Recording sign-in in user_sign_ins table...');
        const { error: signInError } = await supabaseAdmin
          .from('user_sign_ins')
          .insert({
            user_id: user.id,
            ip_address: clientIp || null,
            user_agent: userAgent || null,
            created_at: new Date().toISOString()
          });

        console.log('Sign-in record result:', { signInError });

        if (signInError) {
          console.error('Error recording sign-in:', signInError);
          return new Response(JSON.stringify({ error: 'Error recording sign-in', details: signInError }), { 
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          });
        }

        console.log('=== SESSION.CREATED EVENT COMPLETED SUCCESSFULLY ===');
        return new Response(JSON.stringify({ message: 'Sign-in processed successfully' }), { 
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      } catch (error) {
        console.error('Unexpected error in session.created handler:', error);
        return new Response(JSON.stringify({ error: 'Internal server error', details: error }), { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    if (eventType === 'user.deleted') {
      const { id } = evt.data;
      console.log('Deleting user:', id);

      try {
        // Delete user from Supabase
        const { data, error } = await supabaseAdmin
          .from('users')
          .delete()
          .eq('clerk_id', id)
          .select();

        if (error) {
          console.error('Error deleting user from Supabase:', error);
          return NextResponse.json({ error: 'Error deleting user from Supabase' }, { status: 200 });
        }
        console.log('User deleted from Supabase successfully:', data);
      } catch (error) {
        console.error('Exception while deleting user:', error);
        return NextResponse.json({ error: 'Exception while deleting user' }, { status: 200 });
      }
    }

    console.log('=== WEBHOOK END ===');
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error);
    console.error('Error details:', JSON.stringify(error, null, 2));
    return new Response('Error occurred', {
      status: 500
    });
  }
}
    