import { h as head, a as attr_class, s as stringify, b as store_get, c as slot, u as unsubscribe_stores } from "../../chunks/renderer.js";
import { t as theme } from "../../chunks/theme.js";
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Alex Morgan | Creative Frontend Engineer</title>`);
      });
      $$renderer3.push(`<meta name="description" content="A cinematic SvelteKit portfolio for a frontend engineer specializing in product interfaces, motion systems, and immersive web experiences."/> <meta property="og:title" content="Alex Morgan | Creative Frontend Engineer"/> <meta property="og:description" content="Immersive portfolio showcasing advanced frontend engineering, SvelteKit mastery, animation craft, and product thinking."/> <meta property="og:type" content="website"/> <meta property="og:image" content="/og.svg"/> <link rel="icon" href="/favicon.svg"/> <link rel="sitemap" href="/sitemap.xml"/>`);
    });
    $$renderer2.push(`<div${attr_class(`app-shell theme-${stringify(store_get($$store_subs ??= {}, "$theme", theme))}`)}><a class="skip-link" href="#main">Skip to content</a> <!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _layout as default
};
