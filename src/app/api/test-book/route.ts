import { supabaseAdmin } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Insert a test book
    const { data, error } = await supabaseAdmin
      .from('books')
      .insert({
        title: 'Test Book',
        author: 'Test Author',
        description: 'This is a test book',
        category_id: '1', // You'll need to ensure this category exists
        language: 'en',
        is_available: true
      })
      .select()
      .single()

    if (error) {
      return NextResponse.json(
        { error: 'Failed to insert test book', details: error },
        { status: 500 }
      )
    }

    return NextResponse.json({
      status: 'success',
      message: 'Successfully inserted test book',
      data
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to insert test book', details: error },
      { status: 500 }
    )
  }
} 