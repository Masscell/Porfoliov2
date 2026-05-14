<script lang="ts">
  import { ExternalLink, Github, Maximize2, X } from 'lucide-svelte';
  import { filters, type Project } from '$lib/data/projects';
  import { inView } from '$lib/actions/inView';

  export let projects: Project[];

  let active = 'All';
  let selected: Project | null = null;

  $: visibleProjects = active === 'All' ? projects : projects.filter((project) => project.category === active);
</script>

<section id="projects" class="projects-section section-pad" aria-labelledby="projects-title">
  <div class="section-kicker">Selected Work</div>
  <div class="project-heading" use:inView>
    <h2 id="projects-title">Projects presented as launch surfaces, not thumbnails.</h2>
    <p>Filter by domain, expand a case study, and scan the engineering choices that made each product work.</p>
  </div>

  <div class="filter-bar" aria-label="Project filters">
    {#each filters as filter}
      <button type="button" class:active={active === filter} on:click={() => (active = filter)}>{filter}</button>
    {/each}
  </div>

  <div class="project-grid">
    {#each visibleProjects as project, index (project.slug)}
      <article class="project-card" style:--accent={project.accent} use:inView>
        <div class="project-preview">
          <div class="preview-grid" aria-hidden="true">
            <span></span><span></span><span></span><span></span>
          </div>
          <p>{project.preview}</p>
        </div>
        <div class="project-meta">
          <span>{project.category}</span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <div class="tech-row">
          {#each project.stack.slice(0, 4) as tech}
            <span>{tech}</span>
          {/each}
        </div>
        <div class="project-actions">
          <button type="button" on:click={() => (selected = project)}>
            <Maximize2 size={16} />
            Case Study
          </button>
          <a href={project.github} aria-label={`${project.title} GitHub`}><Github size={16} /></a>
          <a href={project.demo} aria-label={`${project.title} live demo`}><ExternalLink size={16} /></a>
        </div>
        <span class="project-index">0{index + 1}</span>
      </article>
    {/each}
  </div>
</section>

{#if selected}
  <div class="modal-backdrop" role="presentation" on:click={() => (selected = null)}>
    <div
      class="case-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-title"
      tabindex="-1"
      style:--accent={selected.accent}
      on:click|stopPropagation
      on:keydown|stopPropagation
    >
      <button class="modal-close" type="button" aria-label="Close case study" on:click={() => (selected = null)}>
        <X size={20} />
      </button>
      <p class="eyebrow">{selected.category} case study</p>
      <h2 id="case-title">{selected.title}</h2>
      <p>{selected.description}</p>
      <div class="impact-band">{selected.impact}</div>
      <div class="modal-columns">
        <div>
          <h3>Highlights</h3>
          {#each selected.highlights as highlight}
            <p class="check-line">{highlight}</p>
          {/each}
        </div>
        <div>
          <h3>Stack</h3>
          <div class="tech-row modal-tech">
            {#each selected.stack as tech}
              <span>{tech}</span>
            {/each}
          </div>
        </div>
      </div>
      <div class="project-actions modal-actions">
        <a href={selected.github}><Github size={16} /> GitHub</a>
        <a href={selected.demo}><ExternalLink size={16} /> Live Demo</a>
      </div>
    </div>
  </div>
{/if}
