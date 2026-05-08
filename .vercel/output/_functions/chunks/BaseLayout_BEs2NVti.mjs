import { c as createComponent } from './astro-component_ChyAuDe0.mjs';
import 'piccolore';
import { bg as renderHead, C as renderSlot, Q as renderTemplate } from './params-and-props_Bdc0UXF-.mjs';
import 'clsx';

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="id"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description" content="Baby Tracker - Lacak aktivitas bayi Anda"><title>${title ? `${title} | BeeTracker` : "BeeTracker"}</title><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "D:/CODE/beetracker/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
