import { c as createSupabaseServerClient } from './supabase_DdFYfr7K.mjs';

const GET = async ({ request, cookies, params }) => {
  const supabase = createSupabaseServerClient(request, cookies);
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  const { data, error } = await supabase.from("activities").select("*, babies(name)").eq("id", params.id).eq("user_id", user.id).single();
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 404 });
  return new Response(JSON.stringify(data), { status: 200 });
};
const PUT = async ({ request, cookies, params }) => {
  const supabase = createSupabaseServerClient(request, cookies);
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  const body = await request.json();
  const updateData = {};
  if (body.started_at) updateData.started_at = new Date(body.started_at).toISOString();
  if (body.ended_at) updateData.ended_at = new Date(body.ended_at).toISOString();
  if (body.notes !== void 0) updateData.notes = body.notes;
  if (body.metadata !== void 0) updateData.metadata = body.metadata;
  const { data, error } = await supabase.from("activities").update(updateData).eq("id", params.id).eq("user_id", user.id).select("*, babies(name)").single();
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  return new Response(JSON.stringify(data), { status: 200 });
};
const DELETE = async ({ request, cookies, params }) => {
  const supabase = createSupabaseServerClient(request, cookies);
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  const { error } = await supabase.from("activities").delete().eq("id", params.id).eq("user_id", user.id);
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  return new Response(null, { status: 204 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
