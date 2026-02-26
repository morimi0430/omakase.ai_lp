import { NextResponse } from 'next/server';

/**
 * 資料請求フォーム送信を受け、以下を行う:
 * 1. Zapier: 全項目を転送（Slack 通知など）
 * 2. HubSpot Contact Upsert: 会社名・部署など追加情報をコンタクトに保存
 * 環境変数: HUBSPOT_ACCESS_TOKEN（必須）
 */
const HUBSPOT_API_BASE = 'https://api.hubapi.com';
const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/10197272/uq94g1m/';

type DocumentRequestBody = {
  lastName: string;
  firstName: string;
  company: string;
  department: string;
  position: string;
  email: string;
  phone: string;
};

export async function POST(request: Request) {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!token) {
    console.error('HUBSPOT_ACCESS_TOKEN is not set');
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }

  try {
    const body = (await request.json()) as DocumentRequestBody;

    // 1. Zapier に転送（Slack 通知用）
    const zapierPayload = {
      lastName: body.lastName,
      firstName: body.firstName,
      company: body.company,
      department: body.department,
      position: body.position,
      email: body.email,
      phone: body.phone,
      form_type: 'document_request',
    };
    const zapierRes = await fetch(ZAPIER_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(zapierPayload),
    });
    if (!zapierRes.ok) {
      const errText = await zapierRes.text();
      console.error('Zapier webhook error:', zapierRes.status, errText);
      return NextResponse.json(
        { error: 'Zapier webhook failed', source: 'zapier', details: errText, status: zapierRes.status },
        { status: 502 }
      );
    }

    // 2. HubSpot Contact Upsert
    const hubspotProps: Record<string, string> = {
      email: body.email,
      firstname: body.firstName,
      lastname: body.lastName,
      company: body.company,
      jobtitle: body.position,
      phone: body.phone,
    };

    const hubspotRes = await fetch(
      `${HUBSPOT_API_BASE}/crm/v3/objects/contacts/batch/upsert`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          inputs: [
            {
              idProperty: 'email',
              id: body.email,
              properties: hubspotProps,
            },
          ],
        }),
      }
    );

    if (!hubspotRes.ok) {
      const errText = await hubspotRes.text();
      console.error('HubSpot API error:', hubspotRes.status, errText);
      return NextResponse.json(
        { error: 'Failed to send to HubSpot', source: 'hubspot', details: errText, status: hubspotRes.status },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('document-request API error:', error);
    return NextResponse.json(
      { error: 'Failed to process request', source: 'server', details: message },
      { status: 500 }
    );
  }
}
