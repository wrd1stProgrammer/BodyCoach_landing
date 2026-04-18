'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function GoogleAnalytics() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const initialRouteRef = useRef<string | null>(null);

    useEffect(() => {
        if (!measurementId || typeof window.gtag !== 'function') {
            return;
        }

        const query = searchParams.toString();
        const routeKey = query ? `${pathname}?${query}` : pathname;

        if (initialRouteRef.current === null) {
            initialRouteRef.current = routeKey;
            return;
        }

        window.gtag('event', 'page_view', {
            page_path: routeKey,
            page_location: window.location.href,
            page_title: document.title,
        });
    }, [pathname, searchParams]);

    if (!measurementId) {
        return null;
    }

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
                strategy="afterInteractive"
            />
            <Script id="bodycoach-google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    window.gtag = gtag;
                    gtag('js', new Date());
                    gtag('config', '${measurementId}');
                `}
            </Script>
        </>
    );
}
