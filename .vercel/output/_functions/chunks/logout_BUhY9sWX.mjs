import { c as createSupabaseServerClient } from './supabase_DdFYfr7K.mjs';

const POST = async ({ request, cookies }) => {
  const supabase = createSupabaseServerClient(request, cookies);
  await supabase.auth.signOut({ scope: "local" });
  return new Response(null, {
    status: 302,
    headers: { Location: "/login" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
