import { c as createComponent } from './astro-component_ChyAuDe0.mjs';
import 'piccolore';
import { z as maybeRenderHead, a3 as addAttribute, Q as renderTemplate } from './params-and-props_Bdc0UXF-.mjs';
import { r as renderComponent } from './entrypoint_D1LWb-ky.mjs';
import { $ as $$AppLayout } from './AppLayout_DL9iYJVE.mjs';
import 'clsx';
import { c as calculateAge } from './helpers_Bh5RLK0Y.mjs';
import { c as createSupabaseServerClient } from './supabase_DdFYfr7K.mjs';

const $$BabyCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BabyCard;
  const { baby } = Astro2.props;
  const genderIcon = baby.gender === "male" ? "👶" : "👧";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/babies/${baby.id}`, "href")} class="card block hover:shadow-md hover:-translate-y-0.5 transition-all"> <div class="flex items-center gap-4"> <div class="w-16 h-16 rounded-3xl bg-blush flex items-center justify-center text-3xl flex-shrink-0"> ${baby.photo_url ? renderTemplate`<img${addAttribute(baby.photo_url, "src")}${addAttribute(baby.name, "alt")} class="w-full h-full rounded-3xl object-cover">` : genderIcon} </div> <div class="flex-1 min-w-0"> <h3 class="font-heading font-semibold text-lg text-gray-800 truncate">${baby.name}</h3> <p class="text-sm text-slate-baby">${calculateAge(baby.birth_date)}</p> <p class="text-xs text-gray-400">Lahir ${baby.birth_date}</p> </div> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </div> </a>`;
}, "D:/CODE/beetracker/src/components/BabyCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const supabase = createSupabaseServerClient(Astro2.request, Astro2.cookies);
  const { data: { user } } = await supabase.auth.getUser();
  const { data: babies } = await supabase.from("babies").select("*").eq("user_id", user.id).order("created_at", { ascending: false });
  return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, { "title": "Profil Bayi" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-2xl mx-auto space-y-6"> <div class="flex items-center justify-between"> <div> <h1 class="text-2xl font-heading font-bold text-gray-800">Profil Bayi</h1> <p class="text-sm text-slate-baby">Kelola profil bayi Anda</p> </div> <a href="/babies/new" class="btn-primary flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path> </svg>
Tambah Bayi
</a> </div> ${!babies || babies.length === 0 ? renderTemplate`<div class="card text-center py-12"> <div class="text-6xl mb-4">👶</div> <h2 class="text-xl font-heading font-bold text-gray-800 mb-2">Belum ada bayi</h2> <p class="text-slate-baby mb-6">Tambahkan profil bayi Anda</p> <a href="/babies/new" class="btn-primary inline-block">Tambah Bayi</a> </div>` : renderTemplate`<div class="grid gap-4"> ${babies.map((baby) => renderTemplate`${renderComponent($$result2, "BabyCard", $$BabyCard, { "baby": baby })}`)} </div>`} </div> ` })}`;
}, "D:/CODE/beetracker/src/pages/babies/index.astro", void 0);

const $$file = "D:/CODE/beetracker/src/pages/babies/index.astro";
const $$url = "/babies";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
