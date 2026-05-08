import { c as createComponent } from './astro-component_ChyAuDe0.mjs';
import 'piccolore';
import { Q as renderTemplate, z as maybeRenderHead } from './params-and-props_Bdc0UXF-.mjs';
import { r as renderComponent } from './entrypoint_D1LWb-ky.mjs';
import { $ as $$BaseLayout } from './BaseLayout_BEs2NVti.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Selamat Datang" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen flex flex-col items-center justify-center px-4 py-12"> <div class="max-w-md w-full text-center"> <div class="text-7xl mb-6">🐝</div> <h1 class="text-4xl font-heading font-bold text-gray-800 mb-2">BeeTracker</h1> <p class="text-lg text-slate-baby mb-8">Lacak setiap momen berharga pertumbuhan si kecil</p> <div class="space-y-4 mb-12"> <div class="card flex items-center gap-4 text-left"> <div class="text-3xl">🍼</div> <div> <h3 class="font-semibold">Catat Aktivitas</h3> <p class="text-sm text-slate-baby">Menyusui, tidur, popok, dan lainnya</p> </div> </div> <div class="card flex items-center gap-4 text-left"> <div class="text-3xl">📊</div> <div> <h3 class="font-semibold">Pantau Pertumbuhan</h3> <p class="text-sm text-slate-baby">Berat badan, tinggi, dan perkembangan</p> </div> </div> <div class="card flex items-center gap-4 text-left"> <div class="text-3xl">👨‍👩‍👧‍👦</div> <div> <h3 class="font-semibold">Multi-Profil</h3> <p class="text-sm text-slate-baby">Pantau lebih dari satu bayi sekaligus</p> </div> </div> </div> <div class="space-y-3"> <a href="/register" class="btn-primary block text-center">Mulai Sekarang</a> <a href="/login" class="btn-secondary block text-center">Sudah punya akun? Masuk</a> </div> </div> </div> ` })}`;
}, "D:/CODE/beetracker/src/pages/index.astro", void 0);

const $$file = "D:/CODE/beetracker/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
