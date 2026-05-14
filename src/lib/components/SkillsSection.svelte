<script lang="ts">
  import { Cpu, Gauge, Layers3, Sparkles } from 'lucide-svelte';
  import { inView } from '$lib/actions/inView';

  const systems = [
    {
      icon: Layers3,
      title: 'Component Architecture',
      text: 'Reusable primitives, section-level composition, typed content contracts, and scalable route boundaries.'
    },
    {
      icon: Sparkles,
      title: 'Motion Direction',
      text: 'Cohesive reveals, magnetic actions, reduced-motion fallbacks, and transform-first animation choices.'
    },
    {
      icon: Gauge,
      title: 'Performance Discipline',
      text: 'Static generation, lazy interaction layers, stable layout geometry, font restraint, and low-shift sections.'
    },
    {
      icon: Cpu,
      title: 'Product Engineering',
      text: 'Accessible forms, resilient feedback states, keyboard navigation, and polished microinteractions.'
    }
  ];
</script>

<section id="skills" class="systems-section section-pad" aria-labelledby="systems-title">
  <div class="section-kicker">Engineering Systems</div>
  <div class="systems-layout">
    <div class="systems-copy" use:inView>
      <h2 id="systems-title">Built to signal senior frontend judgment.</h2>
      <p>
        The portfolio uses SvelteKit’s strengths directly: isolated components, reactive stores, progressive
        enhancement, static output readiness, and careful browser-only interaction layers.
      </p>
    </div>

    <div class="systems-grid">
      {#each systems as item}
        <article class="system-card" use:inView>
          <svelte:component this={item.icon} size={22} />
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
