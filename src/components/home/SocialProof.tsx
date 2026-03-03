"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import styles from './SocialProof.module.css';

export default function SocialProof() {
    const t = useTranslations('SocialProof');

    const reviews = [
        { text: t('review1'), name: t('review1Name') },
        { text: t('review2'), name: t('review2Name') },
        { text: t('review3'), name: t('review3Name') },
    ];

    return (
        <section className={styles.section}>
            <div className={`main-container ${styles.container}`}>

                <div className={styles.header}>
                    <div className={styles.badge}>{t('badge')}</div>
                    <h2 className={styles.title}>{t('title')}</h2>
                    <p className={styles.subtitle}>{t('subtitle')}</p>
                </div>

                <div className={styles.grid}>
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <div className={styles.stars}>
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className={styles.star} viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className={styles.reviewText}>{review.text}</p>
                            <p className={styles.reviewerName}>{review.name}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
