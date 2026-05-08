import { c as createComponent } from './astro-component_ChyAuDe0.mjs';
import 'piccolore';
import { Q as renderTemplate, z as maybeRenderHead } from './params-and-props_Bdc0UXF-.mjs';
import { r as renderComponent } from './entrypoint_D1LWb-ky.mjs';
import { r as renderScript } from './script_BSuh81X6.mjs';
import { $ as $$BaseLayout } from './BaseLayout_BEs2NVti.mjs';

const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Daftar" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen flex items-center justify-center px-4 py-12"> <div class="max-w-sm w-full"> <div class="text-center mb-8"> <a href="/" class="text-4xl">🐝</a> <h1 class="text-2xl font-heading font-bold text-gray-800 mt-2">Daftar Akun</h1> <p class="text-sm text-slate-baby">Mulai lacak aktivitas si kecil</p> </div> <div class="card"> <form id="registerForm" class="space-y-4"> <div class="space-y-1"> <label for="email" class="block text-sm font-medium text-gray-700">Email</label> <input type="email" name="email" id="email" required placeholder="nama@email.com" class="input-field"> </div> <div class="space-y-1"> <label for="password" class="block text-sm font-medium text-gray-700">Password</label> <input type="password" name="password" id="password" required placeholder="Min. 6 karakter" minlength="6" class="input-field"> </div> <div class="space-y-1"> <label for="confirm_password" class="block text-sm font-medium text-gray-700">Konfirmasi Password</label> <input type="password" name="confirm_password" id="confirm_password" required placeholder="Ulangi password" minlength="6" class="input-field"> </div> <button type="submit" class="btn-primary w-full">Daftar</button> <p id="error" class="text-sm text-red-500 text-center hidden"></p> </form> <p class="text-center text-sm text-slate-baby mt-4">
Sudah punya akun? <a href="/login" class="text-blush font-semibold hover:underline">Masuk</a> </p> </div> </div> </div> ${renderScript($$result2, "D:/CODE/beetracker/src/pages/register.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "D:/CODE/beetracker/src/pages/register.astro", void 0);

const $$file = "D:/CODE/beetracker/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
