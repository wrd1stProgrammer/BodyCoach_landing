import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StructuredData from '@/components/seo/StructuredData';
import StickyCTA from '@/components/ui/StickyCTA';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import MarketingTracker from '@/components/analytics/MarketingTracker';
import '../../styles/globals.css';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { buildOrganizationSchema, buildSiteMetadata, isSeoLocale } from '@/lib/seo';

export const metadata: Metadata = buildSiteMetadata();

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!isSeoLocale(locale)) {
        notFound();
    }

    setRequestLocale(locale);
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body>
                <StructuredData data={[buildOrganizationSchema()]} />
                <Suspense fallback={null}>
                    <GoogleAnalytics />
                </Suspense>
                <NextIntlClientProvider messages={messages}>
                    <Suspense fallback={null}>
                        <MarketingTracker />
                    </Suspense>
                    <Navbar locale={locale} />
                    {children}
                    <Footer locale={locale} />
                    <StickyCTA />
                </NextIntlClientProvider>
                <Analytics />
            </body>
        </html>
    );
}
