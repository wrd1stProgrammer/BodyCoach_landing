import { headers } from 'next/headers';
import { extractAttributionFromUrl, getReferrerHost, safeParseUrl, type MarketingEventPayload } from '@/lib/marketing';
import { getSupabaseAdmin } from '@/lib/supabase-admin';

function truncate(value: string | null | undefined, length: number) {
    if (!value) {
        return null;
    }

    return value.slice(0, length);
}

function isValidPayload(payload: Partial<MarketingEventPayload>): payload is MarketingEventPayload {
    const validEventType = payload.eventType === 'page_view' || payload.eventType === 'store_click';
    const validSession = typeof payload.sessionId === 'string' && payload.sessionId.length > 0;
    const validPageUrl = typeof payload.pageUrl === 'string' && safeParseUrl(payload.pageUrl);
    const validPagePath = typeof payload.pagePath === 'string' && payload.pagePath.length > 0;

    return Boolean(validEventType && validSession && validPageUrl && validPagePath);
}

export async function POST(request: Request) {
    const supabase = getSupabaseAdmin();
    if (!supabase) {
        return new Response(null, { status: 202 });
    }

    let payload: Partial<MarketingEventPayload> = {};
    try {
        payload = await request.json();
    } catch {
        return Response.json({ error: 'Invalid JSON body' }, { status: 400 });
    }

    if (!isValidPayload(payload)) {
        return Response.json({ error: 'Invalid marketing payload' }, { status: 400 });
    }

    const requestHeaders = await headers();
    const attribution = extractAttributionFromUrl(payload.pageUrl);
    const referrer = truncate(payload.referrer, 1000);

    const { error } = await supabase.from('marketing_events').insert({
        event_type: payload.eventType,
        session_id: truncate(payload.sessionId, 120),
        page_url: truncate(payload.pageUrl, 1000),
        page_path: truncate(payload.pagePath, 255),
        locale: truncate(payload.locale, 16),
        referrer,
        referrer_host: getReferrerHost(referrer),
        utm_source: attribution.utm_source,
        utm_medium: attribution.utm_medium,
        utm_campaign: attribution.utm_campaign,
        utm_content: attribution.utm_content,
        utm_term: attribution.utm_term,
        utm_id: attribution.utm_id,
        utm_source_platform: attribution.utm_source_platform,
        store_platform: payload.storePlatform || null,
        store_location: truncate(payload.storeLocation, 120),
        user_agent: truncate(requestHeaders.get('user-agent'), 512),
    });

    if (error) {
        return Response.json({ error: 'Failed to store event' }, { status: 500 });
    }

    return new Response(null, { status: 204 });
}
