<script lang="ts">
  import CommandPalette from '$lib/components/CommandPalette.svelte';
  import ContactSection from '$lib/components/ContactSection.svelte';
  import HeroSection from '$lib/components/HeroSection.svelte';
  import Navigation from '$lib/components/Navigation.svelte';
  import ProjectShowcase from '$lib/components/ProjectShowcase.svelte';
  import SkillsSection from '$lib/components/SkillsSection.svelte';
  import StorySection from '$lib/components/StorySection.svelte';
  import TerminalDock from '$lib/components/TerminalDock.svelte';
  import type { Project } from '$lib/data/projects';

  export let data: { projects: Project[] };
</script>

<Navigation />
<CommandPalette />

<main id="main">
  <HeroSection />
  <StorySection />
  <ProjectShowcase projects={data.projects} />
  <SkillsSection />
  <ContactSection />
</main>

<TerminalDock projects={data.projects} />
