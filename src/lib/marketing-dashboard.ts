import {
    getAttributionLabel,
    getSourceLabel,
    getTrafficBucket,
    type MarketingEventRow,
    type TrafficBucket,
} from '@/lib/marketing';
import { getSupabaseAdmin, hasSupabaseAdminConfig } from '@/lib/supabase-admin';

type DashboardMetric = {
    sessions: number;
    convertedSessions: number;
    totalStoreClicks: number;
    conversionRate: number;
};

export type DashboardTableRow = {
    bucket: TrafficBucket;
    label: string;
    source: string;
    landingPath: string;
    sessions: number;
    convertedSessions: number;
    totalStoreClicks: number;
    conversionRate: number;
    latestAt: string;
};

export type MarketingDashboardData = {
    configured: boolean;
    fromISO: string;
    all: DashboardMetric;
    threads: DashboardMetric;
    other: DashboardMetric;
    threadsRows: DashboardTableRow[];
    otherRows: DashboardTableRow[];
};

type SessionSnapshot = {
    entry: MarketingEventRow | null;
    storeClicks: MarketingEventRow[];
};

type GroupAggregate = DashboardTableRow;

function createMetric(): DashboardMetric {
    return {
        sessions: 0,
        convertedSessions: 0,
        totalStoreClicks: 0,
        conversionRate: 0,
    };
}

function finalizeMetric(metric: DashboardMetric) {
    metric.conversionRate = metric.sessions === 0
        ? 0
        : metric.convertedSessions / metric.sessions;

    return metric;
}

function buildGroupKey(entry: MarketingEventRow) {
    return [
        getTrafficBucket(entry),
        getAttributionLabel(entry),
        entry.page_path || '/',
    ].join('::');
}

function createGroupAggregate(entry: MarketingEventRow): GroupAggregate {
    return {
        bucket: getTrafficBucket(entry),
        label: getAttributionLabel(entry),
        source: getSourceLabel(entry),
        landingPath: entry.page_path || '/',
        sessions: 0,
        convertedSessions: 0,
        totalStoreClicks: 0,
        conversionRate: 0,
        latestAt: entry.created_at,
    };
}

function sortRows(rows: DashboardTableRow[]) {
    return rows
        .map((row) => ({
            ...row,
            conversionRate: row.sessions === 0 ? 0 : row.convertedSessions / row.sessions,
        }))
        .sort((left, right) => {
            if (right.sessions !== left.sessions) {
                return right.sessions - left.sessions;
            }

            return new Date(right.latestAt).getTime() - new Date(left.latestAt).getTime();
        });
}

export async function getMarketingDashboardData(days = 30): Promise<MarketingDashboardData> {
    const fromISO = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();

    if (!hasSupabaseAdminConfig()) {
        return {
            configured: false,
            fromISO,
            all: createMetric(),
            threads: createMetric(),
            other: createMetric(),
            threadsRows: [],
            otherRows: [],
        };
    }

    const supabase = getSupabaseAdmin();
    if (!supabase) {
        return {
            configured: false,
            fromISO,
            all: createMetric(),
            threads: createMetric(),
            other: createMetric(),
            threadsRows: [],
            otherRows: [],
        };
    }

    const { data, error } = await supabase
        .from('marketing_events')
        .select('created_at,event_type,session_id,page_url,page_path,locale,referrer,referrer_host,utm_source,utm_medium,utm_campaign,utm_content,utm_term,utm_id,utm_source_platform,store_platform,store_location')
        .gte('created_at', fromISO)
        .order('created_at', { ascending: true })
        .limit(10000);

    if (error || !data) {
        return {
            configured: true,
            fromISO,
            all: createMetric(),
            threads: createMetric(),
            other: createMetric(),
            threadsRows: [],
            otherRows: [],
        };
    }

    const sessions = new Map<string, SessionSnapshot>();
    for (const row of data as MarketingEventRow[]) {
        const snapshot = sessions.get(row.session_id) || { entry: null, storeClicks: [] };

        if (row.event_type === 'page_view' && snapshot.entry === null) {
            snapshot.entry = row;
        }

        if (row.event_type === 'store_click') {
            snapshot.storeClicks.push(row);
            if (snapshot.entry === null) {
                snapshot.entry = row;
            }
        }

        sessions.set(row.session_id, snapshot);
    }

    const allMetric = createMetric();
    const threadsMetric = createMetric();
    const otherMetric = createMetric();

    const threadGroups = new Map<string, GroupAggregate>();
    const otherGroups = new Map<string, GroupAggregate>();

    for (const snapshot of sessions.values()) {
        const entry = snapshot.entry;
        if (!entry) {
            continue;
        }

        const bucket = getTrafficBucket(entry);
        const converted = snapshot.storeClicks.length > 0;
        const targetMetric = bucket === 'Threads' ? threadsMetric : otherMetric;
        const targetGroups = bucket === 'Threads' ? threadGroups : otherGroups;

        allMetric.sessions += 1;
        targetMetric.sessions += 1;

        if (converted) {
            allMetric.convertedSessions += 1;
            targetMetric.convertedSessions += 1;
        }

        allMetric.totalStoreClicks += snapshot.storeClicks.length;
        targetMetric.totalStoreClicks += snapshot.storeClicks.length;

        const groupKey = buildGroupKey(entry);
        const currentGroup = targetGroups.get(groupKey) || createGroupAggregate(entry);
        currentGroup.sessions += 1;
        currentGroup.totalStoreClicks += snapshot.storeClicks.length;
        if (converted) {
            currentGroup.convertedSessions += 1;
        }
        currentGroup.latestAt = entry.created_at > currentGroup.latestAt ? entry.created_at : currentGroup.latestAt;
        targetGroups.set(groupKey, currentGroup);
    }

    return {
        configured: true,
        fromISO,
        all: finalizeMetric(allMetric),
        threads: finalizeMetric(threadsMetric),
        other: finalizeMetric(otherMetric),
        threadsRows: sortRows(Array.from(threadGroups.values())),
        otherRows: sortRows(Array.from(otherGroups.values())),
    };
}
