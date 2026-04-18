"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import TrackedStoreLink from '@/components/analytics/TrackedStoreLink';
import { appStoreUrl, playStoreUrl } from '@/lib/site';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
    const t = useTranslations('FinalCTA');

    return (
        <section className={styles.section}>
            <div className={styles.bgGlow} />
            <div className={`main-container ${styles.container}`}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.iconRow}>
                        <img src="/app-icon.png" alt="BodyCoach" className={styles.appIcon} />
                    </div>
                    <h2 className={styles.title}>{t('title')}</h2>
                    <p className={styles.subtitle}>{t('subtitle')}</p>
                    <div className={styles.trustLine}>
                        <span className={styles.trustItem}>
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="#f59e0b"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            {t('rating')}
                        </span>
                        <span className={styles.divider}>·</span>
                        <span className={styles.trustItem}>{t('freeTrial')}</span>
                    </div>
                    <div className={styles.storeButtons}>
                        <TrackedStoreLink href={appStoreUrl} target="_blank" rel="noopener noreferrer" className={styles.storeBtn} platform="app_store" location="FinalCTA">
                            <img src="/appstore.png" alt="Download on the App Store" className={`${styles.storeBadge} ${styles.appleBadge}`} />
                        </TrackedStoreLink>
                        <TrackedStoreLink href={playStoreUrl} target="_blank" rel="noopener noreferrer" className={styles.storeBtn} platform="play_store" location="FinalCTA">
                            <img src="/playstore.png" alt="Get it on Google Play" className={`${styles.storeBadge} ${styles.googleBadge}`} />
                        </TrackedStoreLink>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
