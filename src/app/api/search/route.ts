import { supabaseAdmin } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { query, k = 4 } = await req.json()
    
    if (!query) {
      return NextResponse.json(
        { error: 'Query is required' },
        { status: 400 }
      )
    }

    const { data, error } = await supabaseAdmin
      .from('documents')
      .select('*')
      .textSearch('content', query)
      .limit(k)

    if (error) {
      return NextResponse.json(
        { error: 'Search failed', details: error },
        { status: 500 }
      )
    }

    return NextResponse.json({
      status: 'success',
      results: data
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process search', details: error },
      { status: 500 }
    )
  }
} 