import { c as createSupabaseServerClient } from './supabase_DdFYfr7K.mjs';

const POST = async ({ request, cookies }) => {
  const supabase = createSupabaseServerClient(request, cookies);
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }
  const { email: rawEmail, password } = await request.json();
  const email = rawEmail?.toLowerCase().trim();
  if (!email || !password) {
    return new Response(JSON.stringify({ error: "Email dan password wajib diisi" }), { status: 400 });
  }
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: { emailRedirectTo: void 0 }
  });
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
  const { data: signInData } = await supabase.auth.signInWithPassword({ email, password });
  return new Response(JSON.stringify({ user: signInData?.user }), {
    status: 201,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
