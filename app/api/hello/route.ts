import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    return NextResponse.json({ message: 'Hello, world!' });
}

export async function POST(req: NextRequest) {
    const data = await req.json();
    const { name } = data;
    return NextResponse.json({ message: `Hello, ${name}! this was sent from the api route.`});
}
