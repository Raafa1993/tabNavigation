import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  return console.log('HELLO API');
}
