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
      <p class="eyebrow reveal-up">Frontend Developer / UI Engineer</p>
      <h1 id="hero-title" class="hero-title">
        Marcel builds responsive web experiences with creative interaction design.
      </h1>
      <p class="hero-intro reveal-up delay-1">
        Computer Science graduate with practical experience in web development, digital operations, and product design.
        Skilled in React, Next.js, and modern frontend technologies. Passionate about building secure, user-friendly
        solutions and driving digital transformation.
      </p>

      <div class="hero-actions reveal-up delay-2">
        <button class="primary-action" use:magnetic on:click={() => scrollToId('projects')}>
          View Projects
          <ArrowDown size={18} />
        </button>
        <a class="secondary-action" href="tel:+234-810-708-5529" aria-label="Call Marcelinus">
          <Download size={18} />
          +234 810-708-5529
        </a>
      </div>

      <div class="social-row reveal-up delay-3" aria-label="Social links">
        <a href="https://github.com/marcellonoja" aria-label="GitHub profile"><Github size={18} /> GitHub</a>
        <a href="https://linkedin.com/in/marcelinus-onoja" aria-label="LinkedIn profile"><Linkedin size={18} /> LinkedIn</a>
        <a href="mailto:Marcellonoja7@gmail.com" aria-label="Email Marcelinus"><Mail size={18} /> Email</a>
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
