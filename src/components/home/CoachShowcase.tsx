"use client";

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import styles from './CoachShowcase.module.css';
import coachDataJson from '../../../coach_data_top17.json';

type CoachData = typeof coachDataJson[0];
const coachData = coachDataJson as CoachData[];
type LocalizedCoachField = Partial<Record<'en' | 'es' | 'ja' | 'ko' | 'zh', string>>;

export default function CoachShowcase() {
    const t = useTranslations('CoachShowcase');
    const locale = useLocale() as 'en' | 'es' | 'ja' | 'ko' | 'zh' | 'es-MX';

    // Helper to fallback to English if the specific locale translation is missing
    const getLoc = (obj: LocalizedCoachField | undefined) => {
        if (!obj) return '';
        // map es-MX to es for UI translation parsing
        const normalizedLocale = locale === 'es-MX' ? 'es' : locale;
        return obj[normalizedLocale] || obj['en'];
    };

    return (
        <section className={styles.section}>
            <div className={`main-container ${styles.container}`}>

                <div className={styles.header}>
                    <div className={styles.badge}>{t('badge')}</div>
                    <h2 className={styles.title}>{t('title')}</h2>
                    <p className={styles.subtitle}>{t('subtitle')}</p>
                </div>

                <motion.div
                    className={styles.carouselContainer}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        speed={450}
                        threshold={8}
                        touchRatio={1}
                        touchStartPreventDefault={false}
                        touchReleaseOnEdges={true}
                        watchSlidesProgress={true}
                        autoplay={{
                            delay: 3200,
                            disableOnInteraction: true,
                            waitForTransition: false,
                        }}
                        cardsEffect={{
                            slideShadows: false,
                            rotate: false,
                            perSlideOffset: 10,
                        }}
                        modules={[EffectCards, Autoplay]}
                        className={styles.swiper}
                    >
                        {coachData.map((coach) => (
                            <SwiperSlide key={coach.id} className={styles.slide}>
                                <div className={styles.card}>
                                    <div className={styles.imageWrapper}>
                                        <img
                                            src={coach.image_url}
                                            alt={getLoc(coach.name)}
                                            className={styles.coachImage}
                                            loading="lazy"
                                            decoding="async"
                                            draggable={false}
                                        />
                                    </div>
                                    <div className={styles.cardContent}>
                                        <h3 className={styles.coachName}>{getLoc(coach.name)}</h3>
                                        <div className={styles.coachTitle}>{getLoc(coach.title)}</div>
                                        <p className={styles.coachQuote}>&ldquo;{getLoc(coach.quote)}&rdquo;</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

            </div>
        </section>
    );
}
