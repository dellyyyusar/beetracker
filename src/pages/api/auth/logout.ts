import type { APIRoute } from 'astro';
import { createSupabaseServerClient } from '../../../lib/supabase';

export const POST: APIRoute = async ({ request, cookies }) => {
  const supabase = createSupabaseServerClient(request, cookies);
  await supabase.auth.signOut({ scope: 'local' });

  return new Response(null, {
    status: 302,
    headers: { Location: '/login' },
  });
};