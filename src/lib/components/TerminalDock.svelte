<script lang="ts">
  import { X } from 'lucide-svelte';
  import { tick } from 'svelte';
  import { terminalOpen } from '$lib/stores/navigation';
  import type { Project } from '$lib/data/projects';
  import { scrollToId } from '$lib/utils/scroll';

  export let projects: Project[];

  let input = '';
  let output: string[] = [
    'AlexOS portfolio terminal ready.',
    'Try: help, projects, skills, contact, resume, clear'
  ];
  let terminalBody: HTMLDivElement;

  const commands: Record<string, () => string[]> = {
    help: () => ['Available commands:', 'projects, skills, story, contact, resume, about, clear'],
    projects: () => projects.map((project) => `${project.title} :: ${project.impact}`),
    skills: () => ['SvelteKit, TypeScript, animation systems, accessibility, product UI, performance engineering.'],
    story: () => {
      scrollToId('story');
      return ['Navigating to cinematic story section.'];
    },
    contact: () => {
      scrollToId('contact');
      return ['Opening contact channel.'];
    },
    resume: () => {
      window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
      return ['Resume opened in a new tab.'];
    },
    about: () => ['Alex Morgan builds premium SvelteKit interfaces where motion, accessibility, and clarity meet.'],
    clear: () => []
  };

  async function runCommand() {
    const command = input.trim().toLowerCase();
    if (!command) return;

    if (command === 'clear') {
      output = [];
    } else {
      output = [...output, `$ ${command}`, ...(commands[command]?.() ?? [`Command not found: ${command}`])];
    }

    input = '';
    await tick();
    terminalBody?.scrollTo({ top: terminalBody.scrollHeight, behavior: 'smooth' });
  }
</script>

{#if $terminalOpen}
  <aside class="terminal-dock" aria-label="Interactive developer terminal">
    <div class="terminal-top">
      <span></span><span></span><span></span>
      <strong>alex-os</strong>
      <button type="button" aria-label="Close terminal" on:click={() => terminalOpen.set(false)}>
        <X size={18} />
      </button>
    </div>
    <div class="terminal-body" bind:this={terminalBody}>
      {#each output as line}
        <p>{line}</p>
      {/each}
    </div>
    <form class="terminal-input" on:submit|preventDefault={runCommand}>
      <span>$</span>
      <input bind:value={input} aria-label="Terminal command" autocomplete="off" />
    </form>
  </aside>
{/if}
