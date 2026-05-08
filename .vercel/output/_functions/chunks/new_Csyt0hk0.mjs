import { c as createComponent } from './astro-component_ChyAuDe0.mjs';
import 'piccolore';
import { Q as renderTemplate, z as maybeRenderHead, a3 as addAttribute } from './params-and-props_Bdc0UXF-.mjs';
import { r as renderComponent } from './entrypoint_D1LWb-ky.mjs';
import { r as renderScript } from './script_BSuh81X6.mjs';
import { $ as $$AppLayout } from './AppLayout_DL9iYJVE.mjs';
import { c as createSupabaseServerClient } from './supabase_DdFYfr7K.mjs';

const $$New = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$New;
  const supabase = createSupabaseServerClient(Astro2.request, Astro2.cookies);
  const { data: { user } } = await supabase.auth.getUser();
  const { data: babies } = await supabase.from("babies").select("id, name").eq("user_id", user.id);
  if (!babies || babies.length === 0) {
    return Astro2.redirect("/babies/new");
  }
  const url = new URL(Astro2.request.url);
  const selectedType = url.searchParams.get("type") || "nursing";
  return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, { "title": "Catat Aktivitas" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-lg mx-auto space-y-6"> <a href="/dashboard" class="text-sm text-slate-baby hover:text-blush flex items-center gap-1"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg>
Kembali
</a> <h1 class="text-2xl font-heading font-bold text-gray-800">Catat Aktivitas</h1> <div class="card"> <form id="activityForm" class="space-y-4"> <div class="space-y-1"> <label for="baby_id" class="block text-sm font-medium text-gray-700">Bayi</label> <select name="baby_id" id="baby_id" required class="input-field"> <option value="">-- Pilih Bayi --</option> ${babies.map((b) => renderTemplate`<option${addAttribute(b.id, "value")}>${b.name}</option>`)} </select> </div> <div class="space-y-1"> <label for="type" class="block text-sm font-medium text-gray-700">Jenis Aktivitas</label> <select name="type" id="type" required class="input-field" onchange="toggleFields(this.value)"> <option value="nursing"${addAttribute(selectedType === "nursing", "selected")}>🍼 Menyusui</option> <option value="formula"${addAttribute(selectedType === "formula", "selected")}>🍶 Susu Formula</option> <option value="sleep"${addAttribute(selectedType === "sleep", "selected")}>💤 Tidur</option> <option value="diaper"${addAttribute(selectedType === "diaper", "selected")}>🚼 Ganti Popok</option> <option value="solid"${addAttribute(selectedType === "solid", "selected")}>🥣 MPASI</option> <option value="growth"${addAttribute(selectedType === "growth", "selected")}>📏 Pertumbuhan</option> </select> </div> <div class="space-y-1"> <label for="started_at" class="block text-sm font-medium text-gray-700">Waktu Mulai</label> <input type="datetime-local" name="started_at" id="started_at" required class="input-field"> </div> <!-- Nursing Fields --> <div id="nursing_fields" class="space-y-4"> <div class="space-y-1"> <label for="nursing_duration" class="block text-sm font-medium text-gray-700">Durasi (menit)</label> <input type="number" name="nursing_duration" id="nursing_duration" min="1" max="120" class="input-field"> </div> <div class="space-y-1"> <label for="nursing_side" class="block text-sm font-medium text-gray-700">Sisi</label> <select name="nursing_side" id="nursing_side" class="input-field"> <option value="left">Kiri</option> <option value="right">Kanan</option> <option value="both">Keduanya</option> </select> </div> </div> <!-- Formula Fields --> <div id="formula_fields" class="space-y-4 hidden"> <div class="space-y-1"> <label for="formula_volume" class="block text-sm font-medium text-gray-700">Volume (ml)</label> <input type="number" name="formula_volume" id="formula_volume" min="1" max="500" class="input-field"> </div> </div> <!-- Sleep Fields --> <div id="sleep_fields" class="space-y-4 hidden"> <div class="space-y-1"> <label for="ended_at" class="block text-sm font-medium text-gray-700">Waktu Bangun</label> <input type="datetime-local" name="ended_at" id="ended_at" class="input-field"> </div> </div> <!-- Diaper Fields --> <div id="diaper_fields" class="space-y-4 hidden"> <div class="space-y-1"> <label for="diaper_type" class="block text-sm font-medium text-gray-700">Jenis</label> <select name="diaper_type" id="diaper_type" class="input-field"> <option value="wet">Pipis 💦</option> <option value="dirty">Pup 💩</option> <option value="both">Keduanya 💦💩</option> </select> </div> <div class="space-y-1"> <label for="diaper_color" class="block text-sm font-medium text-gray-700">Warna (opsional)</label> <input type="text" name="diaper_color" id="diaper_color" placeholder="Cth: kuning, hijau" class="input-field"> </div> </div> <!-- Solid Fields --> <div id="solid_fields" class="space-y-4 hidden"> <div class="space-y-1"> <label for="solid_food" class="block text-sm font-medium text-gray-700">Jenis Makanan</label> <input type="text" name="solid_food" id="solid_food" placeholder="Cth: bubur ayam, puree labu" class="input-field"> </div> <div class="space-y-1"> <label for="solid_portion" class="block text-sm font-medium text-gray-700">Porsi</label> <input type="number" name="solid_portion" id="solid_portion" min="1" step="0.5" class="input-field"> </div> <div class="space-y-1"> <label for="solid_unit" class="block text-sm font-medium text-gray-700">Satuan</label> <select name="solid_unit" id="solid_unit" class="input-field"> <option value="sendok">Sendok</option> <option value="gram">Gram</option> <option value="pcs">Potong</option> </select> </div> </div> <!-- Growth Fields --> <div id="growth_fields" class="space-y-4 hidden"> <div class="space-y-1"> <label for="growth_weight" class="block text-sm font-medium text-gray-700">Berat Badan (kg)</label> <input type="number" name="growth_weight" id="growth_weight" min="0.1" step="0.1" class="input-field"> </div> <div class="space-y-1"> <label for="growth_height" class="block text-sm font-medium text-gray-700">Tinggi (cm)</label> <input type="number" name="growth_height" id="growth_height" min="1" step="0.5" class="input-field"> </div> </div> <div class="space-y-1"> <label for="notes" class="block text-sm font-medium text-gray-700">Catatan (opsional)</label> <textarea name="notes" id="notes" rows="2" class="input-field" placeholder="Catatan tambahan..."></textarea> </div> <button type="submit" class="btn-primary w-full">Simpan</button> <p id="error" class="text-sm text-red-500 text-center hidden"></p> </form> </div> </div> ${renderScript($$result2, "D:/CODE/beetracker/src/pages/activities/new.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "D:/CODE/beetracker/src/pages/activities/new.astro", void 0);

const $$file = "D:/CODE/beetracker/src/pages/activities/new.astro";
const $$url = "/activities/new";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$New,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
