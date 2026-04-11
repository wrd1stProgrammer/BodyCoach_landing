export const siteConfig = {
    name: 'BodyCoach',
    url: 'https://www.bodycoachai.app',
    defaultLocale: 'en',
    locales: ['en', 'ko', 'ja', 'zh', 'es', 'es-MX'],
} as const;

export function getLocalizedUrl(locale: string, pathname = ''): string {
    const normalizedPathname = pathname
        ? pathname.startsWith('/')
            ? pathname
            : `/${pathname}`
        : '';

    return `${siteConfig.url}/${locale}${normalizedPathname}`;
}
