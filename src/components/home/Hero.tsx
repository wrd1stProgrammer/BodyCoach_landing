"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import TrackedStoreLink from '@/components/analytics/TrackedStoreLink';
import { appStoreUrl, playStoreUrl } from '@/lib/site';
import styles from './Hero.module.css';

const StarIcon = () => (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="#f59e0b">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

export default function Hero() {
    const t = useTranslations('Index');

    return (
        <section className={styles.heroSection}>
            <div className={`main-container ${styles.heroContainer}`}>

                <motion.div
                    className={styles.textContent}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        className={styles.badge}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <StarIcon /> {t('badge')}
                    </motion.div>
                    <h1 className={styles.title}>
                        {t('title')}
                    </h1>
                    <p className={styles.subtitle}>
                        {t('subtitle')}
                    </p>
                    <div className={styles.storeButtons}>
                        <TrackedStoreLink href={appStoreUrl} target="_blank" rel="noopener noreferrer" className={styles.storeBtn} platform="app_store" location="Hero">
                            <img src="/appstore.png" alt="Download on the App Store" className={`${styles.storeBadge} ${styles.appleBadge}`} />
                        </TrackedStoreLink>
                        <TrackedStoreLink href={playStoreUrl} target="_blank" rel="noopener noreferrer" className={styles.storeBtn} platform="play_store" location="Hero">
                            <img src="/playstore.png" alt="Get it on Google Play" className={`${styles.storeBadge} ${styles.googleBadge}`} />
                        </TrackedStoreLink>
                    </div>
                    <p className={styles.trustLine}>{t('trustLine')}</p>
                </motion.div>

                <motion.div
                    className={styles.visualContent}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                    <motion.div
                        className={styles.phonesWrapper}
                        animate={{ y: [0, -12, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 6,
                            ease: "easeInOut"
                        }}
                    >
                        <div className={`${styles.phoneMockup} ${styles.phoneBack}`}>
                            <img src="/before.PNG" alt="Before Meal Tracking" className={styles.heroImg} />
                        </div>
                        <div className={`${styles.phoneMockup} ${styles.phoneFront}`}>
                            <img src="/after.PNG" alt="After Coach Feedback" className={styles.heroImg} />
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
