import { createHmac, timingSafeEqual } from 'crypto';
import { cookies } from 'next/headers';

const ADMIN_COOKIE_NAME = 'bodycoach_admin_session';
const ADMIN_COOKIE_MESSAGE = 'bodycoach-admin-v1';

function toBuffer(value: string) {
    return Buffer.from(value, 'utf8');
}

function buildAdminSessionToken() {
    const secret = process.env.ADMIN_DASHBOARD_SESSION_SECRET || process.env.ADMIN_DASHBOARD_PASSWORD || '';
    if (!secret) {
        return '';
    }

    return createHmac('sha256', secret).update(ADMIN_COOKIE_MESSAGE).digest('base64url');
}

export function isAdminAuthConfigured() {
    return Boolean(process.env.ADMIN_DASHBOARD_PASSWORD);
}

export function verifyAdminPassword(password: string) {
    const expected = process.env.ADMIN_DASHBOARD_PASSWORD || '';
    if (!expected) {
        return false;
    }

    const providedBuffer = toBuffer(password);
    const expectedBuffer = toBuffer(expected);
    if (providedBuffer.length !== expectedBuffer.length) {
        return false;
    }

    return timingSafeEqual(providedBuffer, expectedBuffer);
}

function verifyAdminSessionToken(candidate: string | undefined) {
    const expected = buildAdminSessionToken();
    if (!expected || !candidate) {
        return false;
    }

    const candidateBuffer = toBuffer(candidate);
    const expectedBuffer = toBuffer(expected);
    if (candidateBuffer.length !== expectedBuffer.length) {
        return false;
    }

    return timingSafeEqual(candidateBuffer, expectedBuffer);
}

export async function isAdminAuthenticated() {
    if (!isAdminAuthConfigured()) {
        return false;
    }

    const cookieStore = await cookies();
    return verifyAdminSessionToken(cookieStore.get(ADMIN_COOKIE_NAME)?.value);
}

export async function createAdminSession() {
    const cookieStore = await cookies();
    cookieStore.set(ADMIN_COOKIE_NAME, buildAdminSessionToken(), {
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: 60 * 60 * 8,
    });
}

export async function clearAdminSession() {
    const cookieStore = await cookies();
    cookieStore.delete(ADMIN_COOKIE_NAME);
}
