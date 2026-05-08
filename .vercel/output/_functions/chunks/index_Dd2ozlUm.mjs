import { c as createComponent } from './astro-component_ChyAuDe0.mjs';
import 'piccolore';
import { Q as renderTemplate, z as maybeRenderHead, a3 as addAttribute } from './params-and-props_Bdc0UXF-.mjs';
import { r as renderComponent } from './entrypoint_D1LWb-ky.mjs';
import { $ as $$AppLayout } from './AppLayout_DL9iYJVE.mjs';
import { $ as $$ActivityCard, a as $$QuickLog } from './QuickLog_DQfuvMDK.mjs';
import { c as createSupabaseServerClient } from './supabase_DdFYfr7K.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const supabase = createSupabaseServerClient(Astro2.request, Astro2.cookies);
  const { data: { user } } = await supabase.auth.getUser();
  const url = new URL(Astro2.request.url);
  const filterType = url.searchParams.get("type");
  const filterBaby = url.searchParams.get("baby_id");
  const page = parseInt(url.searchParams.get("page") || "1", 10);
  const limit = 20;
  const offset = (page - 1) * limit;
  const { data: babies } = await supabase.from("babies").select("id, name").eq("user_id", user.id);
  let query = supabase.from("activities").select("*, babies(name)", { count: "exact" }).eq("user_id", user.id).order("started_at", { ascending: false }).range(offset, offset + limit - 1);
  if (filterType) query = query.eq("type", filterType);
  if (filterBaby) query = query.eq("baby_id", filterBaby);
  const { data: activities, count } = await query;
  const totalPages = count ? Math.ceil(count / limit) : 1;
  const activityTypes = [
    { value: "", label: "Semua" },
    { value: "nursing", label: "🍼 Menyusui" },
    { value: "formula", label: "🍶 Formula" },
    { value: "sleep", label: "💤 Tidur" },
    { value: "diaper", label: "🚼 Popok" },
    { value: "solid", label: "🥣 MPASI" },
    { value: "growth", label: "📏 Pertumbuhan" }
  ];
  return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, { "title": "Riwayat Aktivitas" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto space-y-6"> <h1 class="text-2xl font-heading font-bold text-gray-800">Riwayat Aktivitas</h1> <!-- Filters --> <div class="card"> <form class="flex flex-col sm:flex-row gap-3" method="GET"> <div class="flex-1"> <select name="type" class="input-field" onchange="this.form.submit()"> ${activityTypes.map((t) => renderTemplate`<option${addAttribute(t.value, "value")}${addAttribute(t.value === filterType, "selected")}>${t.label}</option>`)} </select> </div> <div class="flex-1"> <select name="baby_id" class="input-field" onchange="this.form.submit()"> <option value="">Semua Bayi</option> ${babies?.map((b) => renderTemplate`<option${addAttribute(b.id, "value")}${addAttribute(b.id === filterBaby, "selected")}>${b.name}</option>`)} </select> </div> ${(filterType || filterBaby) && renderTemplate`<a href="/activities" class="btn-secondary text-sm flex items-center">Reset</a>`} </form> </div> <!-- Activity List --> <div class="space-y-3"> ${activities && activities.length > 0 ? activities.map((activity) => renderTemplate`${renderComponent($$result2, "ActivityCard", $$ActivityCard, { "activity": activity })}`) : renderTemplate`<div class="card text-center py-12"> <div class="text-5xl mb-4">📝</div> <p class="text-slate-baby">Belum ada aktivitas</p> <button onclick="openActivityModal()" class="btn-primary inline-block mt-4 cursor-pointer">Catat Aktivitas</button> </div>`} </div> <!-- Pagination --> ${totalPages > 1 && renderTemplate`<div class="flex items-center justify-center gap-2"> ${page > 1 && renderTemplate`<a${addAttribute(`?page=${page - 1}${filterType ? `&type=${filterType}` : ""}${filterBaby ? `&baby_id=${filterBaby}` : ""}`, "href")} class="btn-secondary text-sm">
Sebelumnya
</a>`} <span class="text-sm text-slate-baby">Halaman ${page} dari ${totalPages}</span> ${page < totalPages && renderTemplate`<a${addAttribute(`?page=${page + 1}${filterType ? `&type=${filterType}` : ""}${filterBaby ? `&baby_id=${filterBaby}` : ""}`, "href")} class="btn-secondary text-sm">
Selanjutnya
</a>`} </div>`} </div> ${renderComponent($$result2, "QuickLog", $$QuickLog, { "babies": babies ?? [], "selectedBabyId": babies?.[0]?.id })} ` })}`;
}, "D:/CODE/beetracker/src/pages/activities/index.astro", void 0);

const $$file = "D:/CODE/beetracker/src/pages/activities/index.astro";
const $$url = "/activities";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
