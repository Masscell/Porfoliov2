import { browser } from '$app/environment';

export function scrollToId(id: string) {
  if (!browser) return;
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
