import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'dark' | 'dawn';

const storedTheme = browser ? (localStorage.getItem('portfolio-theme') as Theme | null) : null;
export const theme = writable<Theme>(storedTheme ?? 'dark');

export function initTheme() {
  if (!browser) return;

  const unsubscribe = theme.subscribe((value) => {
    document.documentElement.dataset.theme = value;
    localStorage.setItem('portfolio-theme', value);
  });

  return unsubscribe;
}

export function toggleTheme() {
  theme.update((value) => (value === 'dark' ? 'dawn' : 'dark'));
}
