import { c as createSupabaseServerClient } from './supabase_DdFYfr7K.mjs';

const POST = async ({ request, cookies }) => {
  const supabase = createSupabaseServerClient(request, cookies);
  const { email, password } = await request.json();
  if (!email || !password) {
    return new Response(JSON.stringify({ error: "Email dan password wajib diisi" }), { status: 400 });
  }
  if (password.length < 6) {
    return new Response(JSON.stringify({ error: "Password minimal 6 karakter" }), { status: 400 });
  }
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 401 });
  }
  return new Response(JSON.stringify({ user: data.user }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
