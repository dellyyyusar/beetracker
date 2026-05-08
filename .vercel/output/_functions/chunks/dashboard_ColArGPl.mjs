import { c as createComponent } from './astro-component_ChyAuDe0.mjs';
import 'piccolore';
import { Q as renderTemplate, z as maybeRenderHead, F as Fragment, a3 as addAttribute } from './params-and-props_Bdc0UXF-.mjs';
import { r as renderComponent } from './entrypoint_D1LWb-ky.mjs';
import { $ as $$AppLayout } from './AppLayout_DL9iYJVE.mjs';
import { $ as $$DashboardStats } from './DashboardStats_Cl9YWl9x.mjs';
import { a as $$QuickLog, $ as $$ActivityCard } from './QuickLog_DQfuvMDK.mjs';
import { c as createSupabaseServerClient } from './supabase_DdFYfr7K.mjs';
import { startOfDay, endOfDay, differenceInMinutes, startOfWeek } from 'date-fns';

const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Dashboard;
  const supabase = createSupabaseServerClient(Astro2.request, Astro2.cookies);
  const { data: { user } } = await supabase.auth.getUser();
  const { data: babies } = await supabase.from("babies").select("*").eq("user_id", user.id).order("created_at", { ascending: false });
  const todayStart = startOfDay(/* @__PURE__ */ new Date()).toISOString();
  const todayEnd = endOfDay(/* @__PURE__ */ new Date()).toISOString();
  const { data: todayActivities } = await supabase.from("activities").select("*, babies(name)").eq("user_id", user.id).gte("started_at", todayStart).lte("started_at", todayEnd).order("started_at", { ascending: false });
  const totalNursing = todayActivities?.filter((a) => a.type === "nursing").length || 0;
  const totalFormula = todayActivities?.filter((a) => a.type === "formula").length || 0;
  const totalDiaper = todayActivities?.filter((a) => a.type === "diaper").length || 0;
  const totalSolid = todayActivities?.filter((a) => a.type === "solid").length || 0;
  let totalSleep = 0;
  todayActivities?.filter((a) => a.type === "sleep").forEach((a) => {
    if (a.ended_at) {
      totalSleep += differenceInMinutes(new Date(a.ended_at), new Date(a.started_at));
    }
  });
  const weekStart = startOfWeek(/* @__PURE__ */ new Date(), { weekStartsOn: 1 }).toISOString();
  const { data: weekActivities } = await supabase.from("activities").select("*").eq("user_id", user.id).gte("started_at", weekStart).lte("started_at", todayEnd).order("started_at", { ascending: true });
  const weekDays = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];
  const dayCount = {};
  weekDays.forEach((_, i) => {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() - (6 - i));
    const key = d.toLocaleDateString("id-ID", { weekday: "short" });
    dayCount[key] = weekActivities?.filter((a) => {
      const ad = new Date(a.started_at);
      return ad.toLocaleDateString("id-ID", { weekday: "short" }) === key;
    }).length || 0;
  });
  return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, { "title": "Dashboard" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto space-y-6"> <!-- Header --> <div> <h1 class="text-2xl lg:text-3xl font-heading font-bold text-gray-800">
Halo, <span class="text-blush">Orang Tua Hebat!</span> </h1> <p class="text-slate-baby">Ini ringkasan aktivitas hari ini</p> </div> ${!babies || babies.length === 0 ? renderTemplate`<!-- Belum ada bayi -->
      <div class="card text-center py-12"> <div class="text-6xl mb-4">👶</div> <h2 class="text-xl font-heading font-bold text-gray-800 mb-2">Belum ada profil bayi</h2> <p class="text-slate-baby mb-6">Tambahkan profil bayi untuk mulai mencatat</p> <a href="/babies/new" class="btn-primary inline-block">Tambah Bayi</a> </div>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`  ${renderComponent($$result3, "DashboardStats", $$DashboardStats, { "totalNursing": totalNursing, "totalSleep": totalSleep, "totalDiaper": totalDiaper, "totalFormula": totalFormula, "totalSolid": totalSolid })}  <div class="card"> <h2 class="font-heading font-semibold text-gray-800 mb-4">Aktivitas Minggu Ini</h2> <div class="flex items-end justify-between gap-2 h-32"> ${weekDays.map((day, i) => {
    const count = Object.values(dayCount)[i] || 0;
    const maxCount = Math.max(...Object.values(dayCount), 1);
    const height = Math.max(count / maxCount * 100, 5);
    return renderTemplate`<div class="flex-1 flex flex-col items-center gap-1"> <span class="text-xs text-gray-400">${count}</span> <div class="w-full bg-blush/20 rounded-lg relative" style="height: 120px;"> <div class="absolute bottom-0 left-0 right-0 bg-blush rounded-lg transition-all duration-500"${addAttribute(`height: ${height}%`, "style")}></div> </div> <span class="text-xs text-gray-500">${day}</span> </div>`;
  })} </div> </div>  <div> <div class="flex items-center justify-between mb-3"> <h2 class="font-heading font-semibold text-gray-800">Catat Aktivitas</h2> <button onclick="openActivityModal()" class="text-sm text-blush font-semibold hover:underline cursor-pointer">Semua &rarr;</button> </div> ${renderComponent($$result3, "QuickLog", $$QuickLog, { "babies": babies ?? [], "selectedBabyId": babies?.[0]?.id })} </div>  <div> <div class="flex items-center justify-between mb-3"> <h2 class="font-heading font-semibold text-gray-800">Aktivitas Terbaru</h2> <a href="/activities" class="text-sm text-blush font-semibold hover:underline">Lihat Semua</a> </div> <div class="space-y-3"> ${todayActivities && todayActivities.length > 0 ? todayActivities.slice(0, 5).map((activity) => renderTemplate`${renderComponent($$result3, "ActivityCard", $$ActivityCard, { "activity": activity })}`) : renderTemplate`<p class="text-center text-slate-baby py-8">Belum ada aktivitas hari ini</p>`} </div> </div> ` })}`} </div> ` })}`;
}, "D:/CODE/beetracker/src/pages/dashboard.astro", void 0);

const $$file = "D:/CODE/beetracker/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
