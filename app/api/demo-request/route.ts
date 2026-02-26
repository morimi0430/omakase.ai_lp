import { NextResponse } from 'next/server';

/**
 * デモリクエストフォーム送信を一手に受け、以下を行う:
 * 1. Zapier: 全項目を転送（Slack 通知など）
 * 2. HubSpot Booking API: カレンダーに実際の予約を登録（時間選択時のみ）
 * 3. HubSpot Contact Upsert: 会社名・部署など追加情報をコンタクトに保存
 * 環境変数: HUBSPOT_ACCESS_TOKEN, HUBSPOT_MEETING_SLUG（必須）
 */
const HUBSPOT_API_BASE = 'https://api.hubapi.com';
const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/10197272/uq94g1m/';

type DemoRequestBody = {
  lastName: string;
  firstName: string;
  company: string;
  department: string;
  position: string;
  email: string;
  phone: string;
  /** 希望日時（一択）YYYY-MM-DDTHH:mm JST */
  preferred_date?: string;
  /** 導入検討中のホームページ URL */
  website?: string;
  /** 選択スロットの UTC ミリ秒（Booking API 用） */
  startMillisUtc?: number;
  /** 空き担当者 ID リスト */
  availableUserIds?: string[];
  /** ミーティング時間（ミリ秒） */
  meetingDuration?: number;
};

/**
 * HubSpot に送るプロパティ。
 * first_preferred_date は HubSpot 側にカスタムプロパティを作成してから有効化する。
 * 作成前は email のみ送り、コンタクトの upsert だけ行う。
 */
function toHubSpotProperties(body: DemoRequestBody): Record<string, string> {
  const props: Record<string, string> = {
    email: body.email,
    firstname: body.firstName,
    lastname: body.lastName,
    company: body.company,
    jobtitle: body.position,
    phone: body.phone,
  };
  if (body.website) props.website = body.website;
  // HubSpot に "demo_mtg_preferred_date" プロパティを作成済みなので有効化
  if (body.preferred_date) props.demo_mtg_preferred_date = body.preferred_date;
  return props;
}

export async function POST(request: Request) {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  const slug = process.env.HUBSPOT_MEETING_SLUG;
  if (!token || !slug) {
    console.error('HUBSPOT_ACCESS_TOKEN or HUBSPOT_MEETING_SLUG is not set');
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }

  try {
    const body = (await request.json()) as DemoRequestBody;

    // 1. Zapier に転送（Slack 通知用）
    const mtgDateLabel = (() => {
      if (!body.preferred_date) return '未選択';
      const [datePart, timePart] = body.preferred_date.split('T');
      const [y, m, d] = datePart.split('-').map(Number);
      const dt = new Date(y, m - 1, d);
      const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
      return `${y}年${m}月${d}日(${weekdays[dt.getDay()]}) ${timePart}`;
    })();
    const zapierPayload = {
      lastName: body.lastName,
      firstName: body.firstName,
      company: body.company,
      department: body.department,
      position: body.position,
      email: body.email,
      phone: body.phone,
      website: body.website ?? '',
      mtg_datetime: mtgDateLabel,
      mtg_booked: body.startMillisUtc ? '予約済み' : '未予約',
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

    // 2. HubSpot Booking API: 時間が選択されていた場合のみカレンダーに予約を登録
    if (body.startMillisUtc && body.availableUserIds && body.availableUserIds.length > 0) {
      const bookingRes = await fetch(
        `${HUBSPOT_API_BASE}/scheduler/v3/meetings/meeting-links/book`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            slug,
            startTime: new Date(body.startMillisUtc).toISOString(),
            duration: body.meetingDuration ?? 1800000,
            email: body.email,
            firstName: body.firstName,
            lastName: body.lastName,
            formFields: [],
            legalConsentResponses: [],
            likelyAvailableUserIds: body.availableUserIds,
            timezone: 'Asia/Tokyo',
            locale: 'ja-JP',
          }),
        }
      );
      if (!bookingRes.ok) {
        const errText = await bookingRes.text();
        console.error('HubSpot booking error:', bookingRes.status, errText);
        return NextResponse.json(
          { error: 'Failed to book meeting', source: 'hubspot-booking', details: errText, status: bookingRes.status },
          { status: 502 }
        );
      }
      console.log('HubSpot meeting booked:', new Date(body.startMillisUtc).toISOString());
    }

    // 3. HubSpot Contact Upsert: 会社名・部署・役職など追加情報を保存
    const hubspotProps = toHubSpotProperties(body);
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
    console.error('demo-request API error:', error);
    return NextResponse.json(
      { error: 'Failed to process request', source: 'server', details: message },
      { status: 500 }
    );
  }
}
