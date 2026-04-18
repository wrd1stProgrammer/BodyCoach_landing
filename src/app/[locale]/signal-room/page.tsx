import type { Metadata } from 'next';
import { getLocalizedUrl } from '@/lib/site';
import { getMarketingDashboardData, type DashboardTableRow } from '@/lib/marketing-dashboard';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import AdminLogin from './AdminLogin';
import AdminLogoutButton from './AdminLogoutButton';
import styles from './SignalRoom.module.css';

export const metadata: Metadata = {
    title: 'Signal Room | BodyCoach',
    robots: {
        index: false,
        follow: false,
    },
};

function formatNumber(value: number) {
    return new Intl.NumberFormat('ko-KR').format(value);
}

function formatPercent(value: number) {
    return `${(value * 100).toFixed(1)}%`;
}

function formatDate(value: string) {
    return new Intl.DateTimeFormat('ko-KR', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }).format(new Date(value));
}

function bucketClassName(bucket: DashboardTableRow['bucket']) {
    switch (bucket) {
        case 'Threads':
            return styles.bucketThreads;
        case 'Organic Search':
            return styles.bucketOrganic;
        case 'External Referral':
            return styles.bucketReferral;
        case 'Tagged Campaign':
            return styles.bucketCampaign;
        default:
            return styles.bucketDirect;
    }
}

function SummaryCard({
    label,
    value,
    detail,
    wide = false,
}: {
    label: string;
    value: string;
    detail: string;
    wide?: boolean;
}) {
    return (
        <article className={`${styles.summaryCard} ${wide ? styles.summaryCardWide : ''}`}>
            <span className={styles.summaryLabel}>{label}</span>
            <strong className={styles.summaryValue}>{value}</strong>
            <p className={styles.summaryFoot}>{detail}</p>
        </article>
    );
}

function TableSection({
    title,
    copy,
    rows,
}: {
    title: string;
    copy: string;
    rows: DashboardTableRow[];
}) {
    return (
        <section className={styles.panel}>
            <div className={styles.panelHeader}>
                <div>
                    <h2 className={styles.panelTitle}>{title}</h2>
                    <p className={styles.panelCopy}>{copy}</p>
                </div>
            </div>

            {rows.length === 0 ? (
                <div className={styles.emptyState}>
                    <h3 className={styles.emptyTitle}>아직 쌓인 데이터가 없습니다.</h3>
                    <p className={styles.emptyCopy}>
                        링크에 UTM을 붙인 뒤 실제 방문과 스토어 클릭이 들어오면 이 표가 채워집니다.
                    </p>
                </div>
            ) : (
                <div className={styles.tableWrap}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>유입 구분</th>
                                <th>링크 / 소스</th>
                                <th>세션</th>
                                <th>스토어 클릭 세션</th>
                                <th>클릭 수</th>
                                <th>전환율</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row) => (
                                <tr key={`${row.bucket}-${row.label}-${row.landingPath}`}>
                                    <td>
                                        <span className={`${styles.bucketPill} ${bucketClassName(row.bucket)}`}>
                                            {row.bucket}
                                        </span>
                                    </td>
                                    <td>
                                        <span className={styles.metricStrong}>{row.label}</span>
                                        <span className={styles.mutedText}>{row.source} · {row.landingPath} · {formatDate(row.latestAt)}</span>
                                    </td>
                                    <td>{formatNumber(row.sessions)}</td>
                                    <td>{formatNumber(row.convertedSessions)}</td>
                                    <td>{formatNumber(row.totalStoreClicks)}</td>
                                    <td>{formatPercent(row.conversionRate)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
}

export default async function SignalRoomPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const authenticated = await isAdminAuthenticated();

    if (!authenticated) {
        return (
            <main className={styles.page}>
                <div className={`main-container ${styles.pageInner}`}>
                    <AdminLogin />
                </div>
            </main>
        );
    }

    const dashboard = await getMarketingDashboardData(30);
    const fromDate = new Intl.DateTimeFormat('ko-KR', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }).format(new Date(dashboard.fromISO));

    return (
        <main className={styles.page}>
            <div className={`main-container ${styles.pageInner}`}>
                <header className={styles.topbar}>
                    <div>
                        <span className={styles.eyebrow}>Signal Room</span>
                        <h1 className={styles.title}>유입과 스토어 클릭 전환을 한 번에 봅니다.</h1>
                        <p className={styles.subtitle}>
                            이 화면은 최근 30일 기준으로 방문 세션, 스토어 클릭 세션, 전환율을 집계합니다.
                            Threads 댓글 링크는 <span className={styles.inlineCode}>utm_content</span> 단위로 구분되고,
                            자연 유입과 외부 유입은 referrer 기준으로 자동 분류됩니다.
                        </p>
                    </div>

                    <div className={styles.topbarActions}>
                        <div className={styles.dateChip}>집계 시작일 {fromDate}</div>
                        <AdminLogoutButton />
                    </div>
                </header>

                {!dashboard.configured ? (
                    <section className={styles.setupState}>
                        <h2 className={styles.panelTitle}>먼저 환경을 연결해야 합니다.</h2>
                        <p className={styles.emptyCopy}>
                            이 대시보드는 Supabase와 관리자 비밀번호가 설정되어야 실제 데이터를 표시합니다.
                        </p>
                        <ul className={styles.setupList}>
                            <li><span className={styles.inlineCode}>NEXT_PUBLIC_SUPABASE_URL</span></li>
                            <li><span className={styles.inlineCode}>SUPABASE_SERVICE_ROLE_KEY</span></li>
                            <li><span className={styles.inlineCode}>ADMIN_DASHBOARD_PASSWORD</span></li>
                            <li>선택: <span className={styles.inlineCode}>NEXT_PUBLIC_GA_MEASUREMENT_ID</span></li>
                            <li>SQL 파일: <span className={styles.inlineCode}>supabase/marketing_events.sql</span></li>
                        </ul>
                    </section>
                ) : (
                    <>
                        <section className={styles.summaryGrid}>
                            <SummaryCard
                                wide
                                label="전체 유입 세션"
                                value={formatNumber(dashboard.all.sessions)}
                                detail={`스토어 클릭 세션 ${formatNumber(dashboard.all.convertedSessions)} · 전환율 ${formatPercent(dashboard.all.conversionRate)}`}
                            />
                            <SummaryCard
                                label="Threads 댓글 유입"
                                value={formatNumber(dashboard.threads.sessions)}
                                detail={`스토어 클릭 세션 ${formatNumber(dashboard.threads.convertedSessions)} · 전환율 ${formatPercent(dashboard.threads.conversionRate)}`}
                            />
                            <SummaryCard
                                label="자연 / 외부 / 직접 유입"
                                value={formatNumber(dashboard.other.sessions)}
                                detail={`스토어 클릭 세션 ${formatNumber(dashboard.other.convertedSessions)} · 전환율 ${formatPercent(dashboard.other.conversionRate)}`}
                            />
                        </section>

                        <section className={styles.sectionGrid}>
                            <TableSection
                                title="Threads 댓글 링크 성과"
                                copy="댓글마다 다른 UTM을 붙이면 어떤 댓글이 실제로 스토어 클릭을 만들었는지 바로 보입니다."
                                rows={dashboard.threadsRows.slice(0, 12)}
                            />
                            <TableSection
                                title="기타 유입 성과"
                                copy="자연 검색, 외부 추천, 직접 유입, 태그된 캠페인을 묶어서 봅니다."
                                rows={dashboard.otherRows.slice(0, 12)}
                            />
                        </section>

                        <section className={styles.panel}>
                            <div className={styles.panelHeader}>
                                <div>
                                    <h2 className={styles.panelTitle}>실전 운영 규칙</h2>
                                    <p className={styles.panelCopy}>
                                        이 규칙대로만 쓰면 대시보드와 GA4에서 같은 구조로 성과를 읽을 수 있습니다.
                                    </p>
                                </div>
                            </div>

                            <div className={styles.emptyState}>
                                <p className={styles.emptyCopy}>
                                    Threads 댓글에는
                                    {' '}<span className={styles.inlineCode}>utm_source=threads</span>,
                                    {' '}<span className={styles.inlineCode}>utm_medium=social</span>,
                                    {' '}<span className={styles.inlineCode}>utm_campaign=comment_outreach</span>,
                                    {' '}<span className={styles.inlineCode}>utm_content=reply_20260418_post07</span>
                                    {' '}형태로 붙이세요.
                                </p>
                                <p className={styles.emptyCopy}>
                                    예시 링크:
                                    {' '}
                                    <span className={styles.inlineCode}>
                                        {getLocalizedUrl(locale, '')}?utm_source=threads&utm_medium=social&utm_campaign=comment_outreach&utm_content=reply_20260418_post07
                                    </span>
                                </p>
                            </div>
                        </section>
                    </>
                )}
            </div>
        </main>
    );
}
