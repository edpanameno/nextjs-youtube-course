import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    return NextResponse.json({ message: 'Hello, world!' });
}

export async function POST(request: NextRequest) {
    const data = await request.json();
    const { name } = data;
    return NextResponse.json({ message: `Hello, ${name}! this was sent from the api route.`});
}
