'use client';

import { track } from '@vercel/analytics';
import { extractAttributionFromUrl, type MarketingEventPayload, type StorePlatform } from '@/lib/marketing';

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

const SESSION_COOKIE_NAME = 'bodycoach_mkt_sid';
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 30;

function readCookie(name: string) {
    if (typeof document === 'undefined') {
        return null;
    }

    const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]+)`));
    return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name: string, value: string) {
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${SESSION_TTL_SECONDS}; samesite=lax`;
}

function getSessionId() {
    const existing = readCookie(SESSION_COOKIE_NAME);
    if (existing) {
        return existing;
    }

    const generated = crypto.randomUUID();
    writeCookie(SESSION_COOKIE_NAME, generated);
    return generated;
}

function sendMarketingEvent(payload: MarketingEventPayload) {
    const body = JSON.stringify(payload);

    if (navigator.sendBeacon) {
        const sent = navigator.sendBeacon('/api/marketing/track', new Blob([body], { type: 'application/json' }));
        if (sent) {
            return;
        }
    }

    fetch('/api/marketing/track', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body,
        keepalive: true,
    }).catch(() => {
        // Ignore tracking failures to avoid interrupting the user flow.
    });
}

export function trackPageView(locale?: string | null) {
    if (typeof window === 'undefined') {
        return;
    }

    sendMarketingEvent({
        eventType: 'page_view',
        sessionId: getSessionId(),
        pageUrl: window.location.href,
        pagePath: window.location.pathname,
        locale: locale || document.documentElement.lang,
        referrer: document.referrer || null,
    });
}

export function trackStoreClick({
    platform,
    location,
}: {
    platform: StorePlatform;
    location: string;
}) {
    if (typeof window === 'undefined') {
        return;
    }

    const attribution = extractAttributionFromUrl(window.location.href);
    const eventName = platform === 'app_store' ? 'App_Store_Clicked' : 'Google_Play_Clicked';

    track(eventName, {
        location,
        platform,
        path: window.location.pathname,
        utm_source: attribution.utm_source || 'direct',
        utm_campaign: attribution.utm_campaign || 'none',
        utm_content: attribution.utm_content || 'none',
    });

    if (typeof window.gtag === 'function') {
        window.gtag('event', 'store_click', {
            store_platform: platform,
            store_location: location,
            utm_source: attribution.utm_source,
            utm_medium: attribution.utm_medium,
            utm_campaign: attribution.utm_campaign,
            utm_content: attribution.utm_content,
            page_location: window.location.href,
        });
    }

    sendMarketingEvent({
        eventType: 'store_click',
        sessionId: getSessionId(),
        pageUrl: window.location.href,
        pagePath: window.location.pathname,
        locale: document.documentElement.lang,
        referrer: document.referrer || null,
        storePlatform: platform,
        storeLocation: location,
    });
}
