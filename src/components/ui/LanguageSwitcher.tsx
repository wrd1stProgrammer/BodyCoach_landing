"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { ChangeEvent, useTransition } from 'react';
import styles from './LanguageSwitcher.module.css';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
    const [isPending, startTransition] = useTransition();
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        const nextLocale = event.target.value;
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    }

    return (
        <div className={styles.wrapper}>
            <Globe className={styles.icon} size={18} />
            <select
                className={styles.select}
                defaultValue={locale}
                onChange={onSelectChange}
                disabled={isPending}
                aria-label="Select language"
            >
                <option value="en">English</option>
                <option value="ko">한국어</option>
                <option value="ja">日本語</option>
                <option value="zh">繁體中文</option>
                <option value="es">Español</option>
                <option value="es-MX">Español (MX)</option>
            </select>
        </div>
    );
}
