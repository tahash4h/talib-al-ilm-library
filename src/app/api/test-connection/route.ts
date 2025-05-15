import { supabase } from '@/lib/supabaseClient'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Test the connection by getting the current time from the database
    const { data, error } = await supabase
      .from('books')
      .select('count')
      .limit(1)
      .single()

    if (error) {
      return NextResponse.json(
        { error: 'Database connection failed', details: error },
        { status: 500 }
      )
    }

    return NextResponse.json({
      status: 'success',
      message: 'Successfully connected to Supabase',
      data
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to connect to database', details: error },
      { status: 500 }
    )
  }
} 