import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export default auth();

export async function GET() {
  const session = await auth();
  return NextResponse.json({ userId: session.userId });
}
