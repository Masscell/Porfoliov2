import { w as writable, h as head, d as attr_class, f as stringify, j as store_get, k as slot, l as unsubscribe_stores } from './index-CHTNWJoj.js';

const theme = writable("dark");

function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Marcel Onoja | Frontend Developer &amp; UI Engineer</title>`);
      });
      $$renderer3.push(`<meta name="description" content="A cinematic SvelteKit portfolio for a frontend engineer specializing in product interfaces, motion systems, and immersive web experiences."/> <meta property="og:title" content="Marcel Onoja | Frontend Developer &amp; UI Engineer"/> <meta property="og:description" content="Immersive portfolio showcasing advanced frontend engineering, SvelteKit mastery, animation craft, and product thinking."/> <meta property="og:type" content="website"/> <meta property="og:image" content="/og.svg"/> <link rel="icon" href="/favicon.svg"/> <link rel="sitemap" href="/sitemap.xml"/>`);
    });
    $$renderer2.push(`<div${attr_class(`app-shell theme-${stringify(store_get($$store_subs ??= {}, "$theme", theme))}`)}><a class="skip-link" href="#main">Skip to content</a> <!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-C32JqP04.js.map
