<script lang="ts">
  import { Search, X } from 'lucide-svelte';
  import { commandOpen, terminalOpen } from '$lib/stores/navigation';
  import { scrollToId } from '$lib/utils/scroll';

  const commands = [
    { label: 'View projects', action: () => scrollToId('projects') },
    { label: 'Open terminal', action: () => terminalOpen.set(true) },
    { label: 'Read story', action: () => scrollToId('story') },
    { label: 'Engineering systems', action: () => scrollToId('skills') },
    { label: 'Contact Alex', action: () => scrollToId('contact') }
  ];

  let query = '';
  $: filtered = commands.filter((command) => command.label.toLowerCase().includes(query.toLowerCase()));

  function run(action: () => void) {
    action();
    query = '';
    commandOpen.set(false);
  }
</script>

{#if $commandOpen}
  <div class="palette-backdrop" role="presentation" on:click={() => commandOpen.set(false)}>
    <div
      class="command-palette"
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      tabindex="-1"
      on:click|stopPropagation
      on:keydown|stopPropagation
    >
      <div class="palette-search">
        <Search size={18} />
        <input bind:value={query} placeholder="Search actions" aria-label="Search commands" />
        <button type="button" aria-label="Close command palette" on:click={() => commandOpen.set(false)}>
          <X size={18} />
        </button>
      </div>
      <div class="palette-list">
        {#each filtered as command}
          <button type="button" on:click={() => run(command.action)}>{command.label}</button>
        {/each}
      </div>
    </div>
  </div>
{/if}
