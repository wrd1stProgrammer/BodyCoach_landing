'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import { trackPageView } from '@/lib/marketing-client';

export default function MarketingTracker() {
    const locale = useLocale();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const lastTrackedRef = useRef<string>('');

    useEffect(() => {
        const query = searchParams.toString();
        const routeKey = query ? `${pathname}?${query}` : pathname;

        if (lastTrackedRef.current === routeKey) {
            return;
        }

        lastTrackedRef.current = routeKey;
        trackPageView(locale);
    }, [locale, pathname, searchParams]);

    return null;
}
