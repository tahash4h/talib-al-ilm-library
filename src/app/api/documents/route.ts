import { supabaseAdmin } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { content, metadata } = await req.json()
    
    if (!content) {
      return NextResponse.json(
        { error: 'Content is required' },
        { status: 400 }
      )
    }

    const { data, error } = await supabaseAdmin
      .from('documents')
      .insert({
        content,
        metadata
      })
      .select()
      .single()

    if (error) {
      return NextResponse.json(
        { error: 'Failed to add document', details: error },
        { status: 500 }
      )
    }

    return NextResponse.json({
      status: 'success',
      message: 'Document added successfully',
      data
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process document', details: error },
      { status: 500 }
    )
  }
} 