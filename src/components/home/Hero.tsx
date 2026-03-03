"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { track } from '@vercel/analytics';
import styles from './Hero.module.css';

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
                        New App
                    </motion.div>
                    <h1 className={styles.title}>
                        {t('title')}
                    </h1>
                    <p className={styles.subtitle}>
                        {t('subtitle')}
                    </p>
                    <div className={styles.storeButtons}>
                        <a href="https://apps.apple.com/kr/app/bodycoach-ai-diet-workout-log/id6756229086?l=en-GB" target="_blank" rel="noopener noreferrer" className={styles.storeBtn} onClick={() => track('App_Store_Clicked', { location: 'Hero' })}>
                            <img src="/appstore.png" alt="Download on the App Store" className={`${styles.storeBadge} ${styles.appleBadge}`} />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.bodycode" target="_blank" rel="noopener noreferrer" className={styles.storeBtn} onClick={() => track('Google_Play_Clicked', { location: 'Hero' })}>
                            <img src="/playstore.png" alt="Get it on Google Play" className={`${styles.storeBadge} ${styles.googleBadge}`} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.visualContent}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                    <div className={styles.phonesWrapper}>
                        <div className={`${styles.phoneMockup} ${styles.phoneBack}`}>
                            <img src="/before.PNG" alt="Before Meal Tracking" className={styles.heroImg} />
                        </div>
                        <div className={`${styles.phoneMockup} ${styles.phoneFront}`}>
                            <img src="/after.PNG" alt="After Coach Feedback" className={styles.heroImg} />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
