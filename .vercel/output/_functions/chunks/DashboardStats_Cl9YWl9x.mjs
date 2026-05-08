import { c as createComponent } from './astro-component_ChyAuDe0.mjs';
import 'piccolore';
import { z as maybeRenderHead, Q as renderTemplate } from './params-and-props_Bdc0UXF-.mjs';
import 'clsx';
import { a as formatDuration } from './helpers_Bh5RLK0Y.mjs';

const $$DashboardStats = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$DashboardStats;
  const { totalNursing, totalSleep, totalDiaper, totalFormula, totalSolid } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-2 lg:grid-cols-3 gap-4"> <div class="card text-center hover:shadow-md transition-shadow"> <div class="text-3xl mb-1">🍼</div> <p class="text-2xl font-heading font-bold text-gray-800">${totalNursing}</p> <p class="text-xs text-slate-baby">Menyusui</p> </div> <div class="card text-center hover:shadow-md transition-shadow"> <div class="text-3xl mb-1">🍶</div> <p class="text-2xl font-heading font-bold text-gray-800">${totalFormula}</p> <p class="text-xs text-slate-baby">Formula</p> </div> <div class="card text-center hover:shadow-md transition-shadow"> <div class="text-3xl mb-1">💤</div> <p class="text-2xl font-heading font-bold text-gray-800">${formatDuration(totalSleep)}</p> <p class="text-xs text-slate-baby">Total Tidur</p> </div> <div class="card text-center hover:shadow-md transition-shadow"> <div class="text-3xl mb-1">🚼</div> <p class="text-2xl font-heading font-bold text-gray-800">${totalDiaper}</p> <p class="text-xs text-slate-baby">Ganti Popok</p> </div> <div class="card text-center hover:shadow-md transition-shadow"> <div class="text-3xl mb-1">🥣</div> <p class="text-2xl font-heading font-bold text-gray-800">${totalSolid}</p> <p class="text-xs text-slate-baby">MPASI</p> </div> </div>`;
}, "D:/CODE/beetracker/src/components/DashboardStats.astro", void 0);

export { $$DashboardStats as $ };
