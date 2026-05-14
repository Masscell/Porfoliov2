<script lang="ts">
  import { inView } from '$lib/actions/inView';

  const scenes = [
    ['01', 'Product thinking', 'Turn ambiguous ideas into interfaces that move users toward confident action.'],
    ['02', 'Animation systems', 'Build motion as a reusable language with hierarchy, restraint, and performance in mind.'],
    ['03', 'Engineering depth', 'Ship accessible SvelteKit products with route optimization, typed data, and resilient states.']
  ];
</script>

<section id="story" class="story-section section-pad" aria-labelledby="story-title">
  <div class="section-kicker">Cinematic Flow</div>
  <div class="story-header" use:inView>
    <h2 id="story-title">A portfolio built like a product narrative.</h2>
    <p>
      Every section carries a job: establish trust, make technical quality visible, and let motion reinforce meaning
      instead of decorating around it.
    </p>
  </div>

  <div class="story-timeline">
    {#each scenes as scene}
      <article class="timeline-card" use:inView>
        <span>{scene[0]}</span>
        <h3>{scene[1]}</h3>
        <p>{scene[2]}</p>
      </article>
    {/each}
  </div>
</section>
