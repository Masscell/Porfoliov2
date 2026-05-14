<script lang="ts">
  import { Menu, Moon, Sun, Terminal, X } from 'lucide-svelte';
  import { onMount } from 'svelte';
  import { commandOpen, terminalOpen } from '$lib/stores/navigation';
  import { theme, toggleTheme } from '$lib/stores/theme';
  import { scrollToId } from '$lib/utils/scroll';

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'story', label: 'Story' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Systems' },
    { id: 'contact', label: 'Contact' }
  ];

  let open = false;

  function go(id: string) {
    open = false;
    scrollToId(id);
  }

  onMount(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        commandOpen.update((value) => !value);
      }
      if (event.key === '`') {
        terminalOpen.update((value) => !value);
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });
</script>

<header class="nav-frame" aria-label="Primary navigation">
  <a class="brand" href="#home" on:click|preventDefault={() => go('home')}>
    <span class="brand-mark">AM</span>
    <span>Alex Morgan</span>
  </a>

  <nav class:open aria-label="Portfolio sections">
    {#each links as link}
      <button type="button" on:click={() => go(link.id)}>{link.label}</button>
    {/each}
  </nav>

  <div class="nav-actions">
    <button class="icon-button" type="button" aria-label="Open command palette" on:click={() => commandOpen.set(true)}>
      <Menu size={18} />
    </button>
    <button class="icon-button" type="button" aria-label="Toggle terminal" on:click={() => terminalOpen.update((value) => !value)}>
      <Terminal size={18} />
    </button>
    <button class="icon-button" type="button" aria-label="Toggle theme" on:click={toggleTheme}>
      {#if $theme === 'dark'}<Sun size={18} />{:else}<Moon size={18} />{/if}
    </button>
    <button class="mobile-menu" type="button" aria-label="Toggle mobile menu" on:click={() => (open = !open)}>
      {#if open}<X size={20} />{:else}<Menu size={20} />{/if}
    </button>
  </div>
</header>
