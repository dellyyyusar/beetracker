import { d as defineMiddleware, ae as sequence } from './chunks/params-and-props_Bdc0UXF-.mjs';
import 'piccolore';
import 'clsx';
import { c as createSupabaseServerClient } from './chunks/supabase_DdFYfr7K.mjs';

const protectedRoutes = ["/dashboard", "/babies", "/activities"];
const onRequest$1 = defineMiddleware(async ({ request, cookies, redirect, url }, next) => {
  const supabase = createSupabaseServerClient(request, cookies);
  const { data: { user } } = await supabase.auth.getUser();
  const isProtected = protectedRoutes.some((route) => url.pathname.startsWith(route));
  if (isProtected && !user) {
    return redirect("/login");
  }
  if ((url.pathname === "/login" || url.pathname === "/register") && user) {
    return redirect("/dashboard");
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
