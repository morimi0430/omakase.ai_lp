import { NextResponse } from 'next/server';

/**
 * HubSpot の予約ページの空き時間を取得する。
 * Private App に scheduler.meetings.meeting-link.read スコープが必要。
 * 環境変数: HUBSPOT_ACCESS_TOKEN, HUBSPOT_MEETING_SLUG（予約ページの slug。例: marino-kozaka）
 */
const HUBSPOT_API_BASE = 'https://api.hubapi.com';
const DEFAULT_TIMEZONE = 'Asia/Tokyo';

type HubSpotAvailabilityResponse = {
  linkAvailability?: {
    hasMore?: boolean;
    linkAvailabilityByDuration?: Record<
      string,
      {
        meetingDurationMillis?: number;
        availabilities?: { startMillisUtc: number; endMillisUtc: number }[];
        startTimes?: number[];
        startTime?: number[];
        slots?: { startTime: number }[];
      }
    >;
  };
  allUsersBusyTimes?: {
    meetingsUser?: { id: string; userId?: string };
  }[];
};

const JST_OFFSET_MS = 9 * 60 * 60 * 1000;

/** Unix ミリ秒を Asia/Tokyo の YYYY-MM-DDTHH:mm に変換 */
function toLocalISOString(ms: number): string {
  const d = new Date(ms + JST_OFFSET_MS);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}T${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}`;
}

/** 表示用ラベル（例: 3月10日(月) 14:30） */
function toLabel(ms: number): string {
  const d = new Date(ms + JST_OFFSET_MS);
  const pad = (n: number) => String(n).padStart(2, '0');
  const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
  const w = weekdays[d.getUTCDay()];
  return `${d.getUTCMonth() + 1}月${d.getUTCDate()}日(${w}) ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}`;
}

export async function GET(request: Request) {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  const slug = process.env.HUBSPOT_MEETING_SLUG;

  if (!token || !slug) {
    return NextResponse.json(
      { error: 'HUBSPOT_ACCESS_TOKEN or HUBSPOT_MEETING_SLUG is not set' },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(request.url);
  const timezone = searchParams.get('timezone') ?? DEFAULT_TIMEZONE;
  const monthOffset = searchParams.get('monthOffset') ?? '0';

  try {
    const url = `${HUBSPOT_API_BASE}/scheduler/v3/meetings/meeting-links/book/availability-page/${encodeURIComponent(slug)}?timezone=${encodeURIComponent(timezone)}&monthOffset=${monthOffset}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('HubSpot availability API error:', res.status, errText);
      return NextResponse.json(
        { error: 'Failed to fetch availability', details: errText },
        { status: res.status }
      );
    }

    const data = (await res.json()) as HubSpotAvailabilityResponse;
    const byDuration = data.linkAvailability?.linkAvailabilityByDuration ?? {};
    const collected: { value: string; label: string; startTime: number }[] = [];
    const seen = new Set<string>();

    for (const durationKey of Object.keys(byDuration)) {
      const block = byDuration[durationKey];
      const times: number[] =
        block?.availabilities?.map((a) => a.startMillisUtc) ??
        block?.startTimes ??
        block?.startTime ??
        block?.slots?.map((s) => s.startTime) ??
        [];
      for (const ms of times) {
        const value = toLocalISOString(ms);
        if (seen.has(value)) continue;
        seen.add(value);
        collected.push({ value, label: toLabel(ms), startTime: ms });
      }
    }

    collected.sort((a, b) => a.startTime - b.startTime);

    const durationKeys = Object.keys(byDuration);
    const duration = durationKeys.length > 0 ? Number(durationKeys[0]) : 1800000;
    const availableUserIds = (data.allUsersBusyTimes ?? [])
      .map((u) => u.meetingsUser?.id)
      .filter((id): id is string => !!id);

    return NextResponse.json({
      slots: collected.map(({ value, label, startTime }) => ({
        value,
        label,
        startMillisUtc: startTime,
      })),
      hasMore: data.linkAvailability?.hasMore ?? false,
      availableUserIds,
      duration,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('HubSpot availability error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch availability', details: message },
      { status: 500 }
    );
  }
}
