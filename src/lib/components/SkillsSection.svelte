<script lang="ts">
  import { Cpu, Gauge, Layers3, Sparkles } from 'lucide-svelte';
  import { inView } from '$lib/actions/inView';
  import { skills, softSkills } from '$lib/data/resume';
</script>

<section id="skills" class="systems-section section-pad" aria-labelledby="systems-title">
  <div class="section-kicker">Technical Skills</div>
  <div class="systems-layout">
    <div class="systems-copy" use:inView>
      <h2 id="systems-title">Equipped with modern frontend technologies and development practices.</h2>
      <p>
        Specialized in responsive design, performance optimization, and building user-friendly interfaces. Experienced
        with both traditional web development and emerging frontend frameworks, from React and Next.js to SvelteKit and
        modern CSS.
      </p>
    </div>

    <div class="systems-grid">
      {#each skills as category}
        <article class="system-card" use:inView>
          <Layers3 size={22} />
          <h3>{category.category}</h3>
          <p>{category.skills.join(', ')}</p>
        </article>
      {/each}
    </div>
  </div>

  <div class="soft-skills-section" use:inView>
    <h3>Soft Skills</h3>
    <div class="soft-skills-grid">
      {#each softSkills as skill}
        <span class="skill-badge">{skill}</span>
      {/each}
    </div>
  </div>
</section>
