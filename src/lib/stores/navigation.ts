import { writable } from 'svelte/store';

export const activeSection = writable('home');
export const terminalOpen = writable(false);
export const commandOpen = writable(false);
