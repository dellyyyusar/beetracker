import { c as createComponent } from './astro-component_ChyAuDe0.mjs';
import 'piccolore';
import { Q as renderTemplate, z as maybeRenderHead, a3 as addAttribute } from './params-and-props_Bdc0UXF-.mjs';
import { r as renderComponent } from './entrypoint_D1LWb-ky.mjs';
import { $ as $$AppLayout } from './AppLayout_DL9iYJVE.mjs';
import { $ as $$DashboardStats } from './DashboardStats_Cl9YWl9x.mjs';
import { a as $$QuickLog, $ as $$ActivityCard } from './QuickLog_DQfuvMDK.mjs';
import { c as createSupabaseServerClient } from './supabase_DdFYfr7K.mjs';
import { c as calculateAge, f as formatDate } from './helpers_Bh5RLK0Y.mjs';
import { startOfDay, endOfDay, differenceInMinutes } from 'date-fns';

const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$id;
  const supabase = createSupabaseServerClient(Astro2.request, Astro2.cookies);
  const { data: { user } } = await supabase.auth.getUser();
  const babyId = Astro2.params.id;
  const { data: baby } = await supabase.from("babies").select("*").eq("id", babyId).eq("user_id", user.id).single();
  if (!baby) {
    return Astro2.redirect("/babies");
  }
  const todayStart = startOfDay(/* @__PURE__ */ new Date()).toISOString();
  const todayEnd = endOfDay(/* @__PURE__ */ new Date()).toISOString();
  const { data: todayActivities } = await supabase.from("activities").select("*, babies(name)").eq("baby_id", babyId).gte("started_at", todayStart).lte("started_at", todayEnd).order("started_at", { ascending: false });
  const totalNursing = todayActivities?.filter((a) => a.type === "nursing").length || 0;
  const totalFormula = todayActivities?.filter((a) => a.type === "formula").length || 0;
  const totalDiaper = todayActivities?.filter((a) => a.type === "diaper").length || 0;
  const totalSolid = todayActivities?.filter((a) => a.type === "solid").length || 0;
  let totalSleep = 0;
  todayActivities?.filter((a) => a.type === "sleep").forEach((a) => {
    if (a.ended_at) totalSleep += differenceInMinutes(new Date(a.ended_at), new Date(a.started_at));
  });
  return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, { "title": baby.name }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto space-y-6"> <!-- Back & Header --> <div class="flex items-center justify-between"> <a href="/babies" class="text-sm text-slate-baby hover:text-blush flex items-center gap-1"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg>
Kembali
</a> <form method="POST"${addAttribute(`/api/babies/${babyId}`, "action")} class="inline" onsubmit="return confirm('Hapus profil bayi ini? Semua aktivitas akan ikut terhapus.')"> <input type="hidden" name="_method" value="DELETE"> <button type="submit" class="text-sm text-red-400 hover:text-red-500">Hapus</button> </form> </div> <div class="card"> <div class="flex items-center gap-4"> <div class="w-20 h-20 rounded-3xl bg-blush flex items-center justify-center text-4xl"> ${baby.gender === "male" ? "👶" : "👧"} </div> <div> <h1 class="text-2xl font-heading font-bold text-gray-800">${baby.name}</h1> <p class="text-slate-baby">${calculateAge(baby.birth_date)}</p> <p class="text-xs text-gray-400">Lahir ${formatDate(baby.birth_date)}</p> </div> </div> </div> ${renderComponent($$result2, "DashboardStats", $$DashboardStats, { "totalNursing": totalNursing, "totalSleep": totalSleep, "totalDiaper": totalDiaper, "totalFormula": totalFormula, "totalSolid": totalSolid })} <div> <h2 class="font-heading font-semibold text-gray-800 mb-3">Catat Aktivitas</h2> ${baby && renderTemplate`${renderComponent($$result2, "QuickLog", $$QuickLog, { "babies": [baby], "selectedBabyId": babyId })}`} </div> <div> <div class="flex items-center justify-between mb-3"> <h2 class="font-heading font-semibold text-gray-800">Aktivitas Hari Ini</h2> <a href="/activities?baby_id={babyId}" class="text-sm text-blush font-semibold hover:underline">Lihat Semua</a> </div> <div class="space-y-3"> ${todayActivities && todayActivities.length > 0 ? todayActivities.map((activity) => renderTemplate`${renderComponent($$result2, "ActivityCard", $$ActivityCard, { "activity": activity })}`) : renderTemplate`<p class="text-center text-slate-baby py-8">Belum ada aktivitas hari ini</p>`} </div> </div> </div> ` })}`;
}, "D:/CODE/beetracker/src/pages/babies/[id].astro", void 0);

const $$file = "D:/CODE/beetracker/src/pages/babies/[id].astro";
const $$url = "/babies/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
