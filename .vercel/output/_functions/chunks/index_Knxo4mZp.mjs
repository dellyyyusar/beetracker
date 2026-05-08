import { c as createSupabaseServerClient } from './supabase_DdFYfr7K.mjs';

const GET = async ({ request, cookies }) => {
  const supabase = createSupabaseServerClient(request, cookies);
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  const { data, error } = await supabase.from("babies").select("*").eq("user_id", user.id).order("created_at", { ascending: false });
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  return new Response(JSON.stringify(data), { status: 200 });
};
const POST = async ({ request, cookies }) => {
  const supabase = createSupabaseServerClient(request, cookies);
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  const body = await request.json();
  if (!body.name || !body.birth_date) {
    return new Response(JSON.stringify({ error: "Nama dan tanggal lahir wajib diisi" }), { status: 400 });
  }
  const { data, error } = await supabase.from("babies").insert({
    name: body.name,
    birth_date: body.birth_date,
    gender: body.gender || null,
    photo_url: body.photo_url || null,
    user_id: user.id
  }).select().single();
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  return new Response(JSON.stringify(data), { status: 201 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
