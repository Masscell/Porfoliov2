<script lang="ts">
  import '../styles/global.css';
  import { onMount } from 'svelte';
  import { theme, initTheme } from '$lib/stores/theme';

  onMount(initTheme);
</script>

<svelte:head>
  <title>Marcel Onoja | Frontend Developer & UI Engineer</title>
  <meta
    name="description"
    content="A cinematic SvelteKit portfolio for a frontend engineer specializing in product interfaces, motion systems, and immersive web experiences."
  />
  <meta property="og:title" content="Marcel Onoja | Frontend Developer & UI Engineer" />
  <meta
    property="og:description"
    content="Immersive portfolio showcasing advanced frontend engineering, SvelteKit mastery, animation craft, and product thinking."
  />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="/og.svg" />
  <link rel="icon" href="/favicon.svg" />
  <link rel="sitemap" href="/sitemap.xml" />
</svelte:head>

<div class="app-shell theme-{$theme}">
  <a class="skip-link" href="#main">Skip to content</a>
  <slot />
</div>
