import type { APIRoute } from 'astro';
import { createSupabaseServerClient } from '../../../lib/supabase';

export const GET: APIRoute = async ({ request, cookies }) => {
  const supabase = createSupabaseServerClient(request, cookies);
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });

  const url = new URL(request.url);
  const babyId = url.searchParams.get('baby_id');
  const type = url.searchParams.get('type');
  const date = url.searchParams.get('date');
  const page = parseInt(url.searchParams.get('page') || '1', 10);
  const limit = parseInt(url.searchParams.get('limit') || '20', 10);
  const offset = (page - 1) * limit;

  let query = supabase
    .from('activities')
    .select('*, babies(name)', { count: 'exact' })
    .eq('user_id', user.id)
    .order('started_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (babyId) query = query.eq('baby_id', babyId);
  if (type) query = query.eq('type', type);
  if (date) {
    const start = new Date(date);
    start.setHours(0, 0, 0, 0);
    const end = new Date(date);
    end.setHours(23, 59, 59, 999);
    query = query.gte('started_at', start.toISOString()).lte('started_at', end.toISOString());
  }

  const { data, error, count } = await query;

  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  return new Response(JSON.stringify({ data, count, page, totalPages: count ? Math.ceil(count / limit) : 1 }), { status: 200 });
};

export const POST: APIRoute = async ({ request, cookies }) => {
  const supabase = createSupabaseServerClient(request, cookies);
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });

  const contentType = request.headers.get('content-type') || '';
  let body: Record<string, any>;

  if (contentType.includes('application/json')) {
    body = await request.json();
  } else {
    const formData = await request.formData();
    body = Object.fromEntries(formData.entries());
  }

  if (!body.baby_id || !body.type || !body.started_at) {
    return new Response(JSON.stringify({ error: 'baby_id, type, dan started_at wajib diisi' }), { status: 400 });
  }

  const validTypes = ['nursing', 'formula', 'sleep', 'diaper', 'solid', 'growth'];
  if (!validTypes.includes(body.type)) {
    return new Response(JSON.stringify({ error: 'Tipe aktivitas tidak valid' }), { status: 400 });
  }

  let metadata: Record<string, any> = {};
  if (typeof body.metadata === 'string') {
    try { metadata = JSON.parse(body.metadata); } catch { metadata = {}; }
  } else if (body.metadata && typeof body.metadata === 'object') {
    metadata = body.metadata;
  }

  const activityData = {
    baby_id: body.baby_id,
    user_id: user.id,
    type: body.type,
    started_at: new Date(body.started_at).toISOString(),
    ended_at: body.ended_at ? new Date(body.ended_at).toISOString() : null,
    notes: body.notes || null,
    metadata,
  };

  const { data, error } = await supabase
    .from('activities')
    .insert(activityData)
    .select('*, babies(name)')
    .single();

  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  return new Response(JSON.stringify(data), { status: 201 });
};