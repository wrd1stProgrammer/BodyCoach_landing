import { createAdminSession, isAdminAuthConfigured, verifyAdminPassword } from '@/lib/admin-auth';

export async function POST(request: Request) {
    if (!isAdminAuthConfigured()) {
        return Response.json({ error: 'Admin auth is not configured' }, { status: 503 });
    }

    let password = '';
    try {
        const body = await request.json();
        password = typeof body.password === 'string' ? body.password : '';
    } catch {
        return Response.json({ error: 'Invalid login payload' }, { status: 400 });
    }

    if (!verifyAdminPassword(password)) {
        return Response.json({ error: '비밀번호가 맞지 않습니다.' }, { status: 401 });
    }

    await createAdminSession();
    return Response.json({ ok: true });
}
