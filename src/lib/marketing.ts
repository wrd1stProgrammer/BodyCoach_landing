export type MarketingEventType = 'page_view' | 'store_click';
export type StorePlatform = 'app_store' | 'play_store';
export type TrafficBucket = 'Threads' | 'Organic Search' | 'External Referral' | 'Tagged Campaign' | 'Direct';

export type MarketingEventPayload = {
    eventType: MarketingEventType;
    sessionId: string;
    pageUrl: string;
    pagePath: string;
    locale?: string | null;
    referrer?: string | null;
    storePlatform?: StorePlatform | null;
    storeLocation?: string | null;
};

export type MarketingEventRow = {
    id?: number;
    created_at: string;
    event_type: MarketingEventType;
    session_id: string;
    page_url: string;
    page_path: string | null;
    locale: string | null;
    referrer: string | null;
    referrer_host: string | null;
    utm_source: string | null;
    utm_medium: string | null;
    utm_campaign: string | null;
    utm_content: string | null;
    utm_term: string | null;
    utm_id: string | null;
    utm_source_platform: string | null;
    store_platform: StorePlatform | null;
    store_location: string | null;
    user_agent?: string | null;
};

type AttributionFields = Pick<
    MarketingEventRow,
    'utm_source' | 'utm_medium' | 'utm_campaign' | 'utm_content' | 'utm_term' | 'utm_id' | 'utm_source_platform'
>;

const SEARCH_ENGINE_HOSTS = [
    'google.',
    'bing.com',
    'search.naver.com',
    'naver.com',
    'daum.net',
    'search.daum.net',
    'yahoo.com',
    'duckduckgo.com',
    'ecosia.org',
    'yandex.',
];

function normalizeValue(value: string | null | undefined) {
    const trimmed = value?.trim();
    return trimmed ? trimmed : null;
}

export function safeParseUrl(value: string | null | undefined) {
    if (!value) {
        return null;
    }

    try {
        return new URL(value);
    } catch {
        return null;
    }
}

export function extractAttributionFromUrl(pageUrl: string): AttributionFields {
    const parsedUrl = safeParseUrl(pageUrl);
    const params = parsedUrl?.searchParams;

    return {
        utm_source: normalizeValue(params?.get('utm_source')),
        utm_medium: normalizeValue(params?.get('utm_medium')),
        utm_campaign: normalizeValue(params?.get('utm_campaign')),
        utm_content: normalizeValue(params?.get('utm_content')),
        utm_term: normalizeValue(params?.get('utm_term')),
        utm_id: normalizeValue(params?.get('utm_id')),
        utm_source_platform: normalizeValue(params?.get('utm_source_platform')),
    };
}

export function getReferrerHost(referrer: string | null | undefined) {
    const parsedUrl = safeParseUrl(referrer);
    if (!parsedUrl) {
        return null;
    }

    return parsedUrl.host.replace(/^www\./, '');
}

export function getTrafficBucket(event: Partial<MarketingEventRow>): TrafficBucket {
    const utmSource = event.utm_source?.toLowerCase();
    const referrerHost = event.referrer_host?.toLowerCase() || '';

    if (utmSource === 'threads' || referrerHost.includes('threads.net')) {
        return 'Threads';
    }

    if (utmSource) {
        return 'Tagged Campaign';
    }

    if (SEARCH_ENGINE_HOSTS.some((host) => referrerHost.includes(host))) {
        return 'Organic Search';
    }

    if (referrerHost) {
        return 'External Referral';
    }

    return 'Direct';
}

export function getAttributionLabel(event: Partial<MarketingEventRow>) {
    const bucket = getTrafficBucket(event);

    if (bucket === 'Threads') {
        return event.utm_content || event.utm_campaign || event.referrer_host || 'threads / untagged';
    }

    if (event.utm_content) {
        return event.utm_content;
    }

    if (event.utm_campaign) {
        return event.utm_campaign;
    }

    if (event.referrer_host) {
        return event.referrer_host;
    }

    return 'direct / untagged';
}

export function getSourceLabel(event: Partial<MarketingEventRow>) {
    if (event.utm_source && event.utm_medium) {
        return `${event.utm_source} / ${event.utm_medium}`;
    }

    if (event.utm_source) {
        return event.utm_source;
    }

    if (event.referrer_host) {
        return event.referrer_host;
    }

    return 'direct';
}
