import { defineMiddleware } from 'astro:middleware';
import { createSupabaseServerClient } from './lib/supabase';

const protectedRoutes = ['/dashboard', '/babies', '/activities'];

export const onRequest = defineMiddleware(async ({ request, cookies, redirect, url }, next) => {
  const supabase = createSupabaseServerClient(request, cookies);
  const { data: { user } } = await supabase.auth.getUser();

  const isProtected = protectedRoutes.some(route => url.pathname.startsWith(route));

  if (isProtected && !user) {
    return redirect('/login');
  }

  if ((url.pathname === '/login' || url.pathname === '/register') && user) {
    return redirect('/dashboard');
  }

  return next();
});