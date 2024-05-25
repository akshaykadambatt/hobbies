import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';
import { ErrorProps } from 'next/error';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('sample_mflix')
        const data = await db.collection('comments').find({}).toArray();
        
        return new NextResponse(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            }
        })
    } catch (e) {
        const error = e as Error
        return new NextResponse(JSON.stringify({ error: error.message}), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}

export async function POST() {
  // Handle POST request
  return NextResponse.json({ message: 'Hello from POST' });
}
