import { c as createComponent } from './astro-component_ChyAuDe0.mjs';
import 'piccolore';
import { Q as renderTemplate, z as maybeRenderHead } from './params-and-props_Bdc0UXF-.mjs';
import { r as renderComponent } from './entrypoint_D1LWb-ky.mjs';
import { r as renderScript } from './script_BSuh81X6.mjs';
import { $ as $$AppLayout } from './AppLayout_DL9iYJVE.mjs';

const $$New = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, { "title": "Tambah Bayi" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-md mx-auto"> <div class="mb-6"> <a href="/babies" class="text-sm text-slate-baby hover:text-blush flex items-center gap-1"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg>
Kembali
</a> </div> <div class="card"> <h1 class="text-xl font-heading font-bold text-gray-800 mb-6">Tambah Profil Bayi</h1> <form id="babyForm" class="space-y-4"> <div class="space-y-1"> <label for="name" class="block text-sm font-medium text-gray-700">Nama Bayi</label> <input type="text" name="name" id="name" required placeholder="Nama lengkap" class="input-field"> </div> <div class="space-y-1"> <label for="birth_date" class="block text-sm font-medium text-gray-700">Tanggal Lahir</label> <input type="date" name="birth_date" id="birth_date" required class="input-field"> </div> <div class="space-y-1"> <label for="gender" class="block text-sm font-medium text-gray-700">Jenis Kelamin</label> <select name="gender" id="gender" class="input-field"> <option value="">-- Pilih --</option> <option value="male">Laki-laki 👶</option> <option value="female">Perempuan 👧</option> </select> </div> <button type="submit" class="btn-primary w-full">Simpan</button> <p id="error" class="text-sm text-red-500 text-center hidden"></p> </form> </div> </div> ${renderScript($$result2, "D:/CODE/beetracker/src/pages/babies/new.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "D:/CODE/beetracker/src/pages/babies/new.astro", void 0);

const $$file = "D:/CODE/beetracker/src/pages/babies/new.astro";
const $$url = "/babies/new";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$New,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
