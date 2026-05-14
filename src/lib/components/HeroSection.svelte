<script lang="ts">
  import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-svelte';
  import { magnetic } from '$lib/actions/magnetic';
  import { terminalOpen } from '$lib/stores/navigation';
  import { scrollToId } from '$lib/utils/scroll';
</script>

<section id="home" class="hero-section section-pad" aria-labelledby="hero-title">
  <div class="hero-orbit" aria-hidden="true">
    <span></span><span></span><span></span>
  </div>

  <div class="hero-grid">
    <div class="hero-copy">
      <p class="eyebrow reveal-up">SvelteKit interface engineer / motion systems</p>
      <h1 id="hero-title" class="hero-title">
        Alex Morgan builds cinematic product interfaces that feel fast, clear, and alive.
      </h1>
      <p class="hero-intro reveal-up delay-1">
        I design and engineer immersive web experiences for teams that need frontend craft, performance discipline,
        and memorable interaction design in the same room.
      </p>

      <div class="hero-actions reveal-up delay-2">
        <button class="primary-action" use:magnetic on:click={() => scrollToId('projects')}>
          View Projects
          <ArrowDown size={18} />
        </button>
        <a class="secondary-action" href="/resume.pdf" aria-label="Download resume">
          <Download size={18} />
          Resume
        </a>
      </div>

      <div class="social-row reveal-up delay-3" aria-label="Social links">
        <a href="https://github.com/" aria-label="GitHub profile"><Github size={18} /> GitHub</a>
        <a href="https://linkedin.com/" aria-label="LinkedIn profile"><Linkedin size={18} /> LinkedIn</a>
        <a href="mailto:alex@example.com" aria-label="Email Alex"><Mail size={18} /> Email</a>
      </div>
    </div>

    <div class="hero-stage" aria-label="Interactive portfolio console preview">
      <div class="stage-light"></div>
      <div class="glass-panel signal-panel">
        <div class="panel-top">
          <span></span><span></span><span></span>
          <strong>interface.signal</strong>
        </div>
        <div class="signal-lines">
          <i style="--w: 74%"></i>
          <i style="--w: 48%"></i>
          <i style="--w: 86%"></i>
          <i style="--w: 60%"></i>
        </div>
      </div>
      <button class="terminal-card glass-panel" type="button" on:click={() => terminalOpen.set(true)}>
        <span class="terminal-label">interactive terminal</span>
        <code>$ explore --projects --motion --systems</code>
        <span class="terminal-hint">Open the developer console</span>
      </button>
      <div class="metric-card glass-panel">
        <strong>98</strong>
        <span>Motion score</span>
      </div>
    </div>
  </div>

  <div class="scroll-cue" aria-hidden="true">
    <span></span>
  </div>
</section>
