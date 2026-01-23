import { NextResponse } from 'next/server';

const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/10197272/uq94g1m/';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const response = await fetch(ZAPIER_WEBHOOK_URL, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorText = await response.text();
      return NextResponse.json(
        { error: 'Zapier webhook failed', details: errorText },
        { status: response.status }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send webhook' },
      { status: 500 }
    );
  }
}