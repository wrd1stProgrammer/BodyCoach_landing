import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StructuredData from '@/components/seo/StructuredData';
import StickyCTA from '@/components/ui/StickyCTA';
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
                <NextIntlClientProvider messages={messages}>
                    <Navbar />
                    {children}
                    <Footer />
                    <StickyCTA />
                </NextIntlClientProvider>
                <Analytics />
            </body>
        </html>
    );
}
