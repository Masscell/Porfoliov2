export type Project = {
  slug: string;
  title: string;
  category: 'Product' | 'AI' | 'Systems' | 'Commerce';
  description: string;
  impact: string;
  stack: string[];
  github: string;
  demo: string;
  accent: string;
  preview: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: 'orbit-command',
    title: 'Orbit Command',
    category: 'Product',
    description:
      'A real-time operations dashboard for distributed teams, blending command palette workflows with deeply instrumented product telemetry.',
    impact: 'Reduced incident triage time by 42% with role-aware views and animation-led attention routing.',
    stack: ['SvelteKit', 'TypeScript', 'WebSockets', 'Motion', 'Postgres'],
    github: 'https://github.com/',
    demo: 'https://vercel.com/',
    accent: '#7dd3fc',
    preview: 'Telemetry command surface with live health streams',
    highlights: ['Role-aware navigation', 'Optimistic realtime controls', 'Keyboard-first workflows']
  },
  {
    slug: 'neural-market',
    title: 'Neural Market',
    category: 'AI',
    description:
      'An AI-assisted ecommerce studio that converts merchandising intent into launch-ready pages, offers, and localized campaign variants.',
    impact: 'Helped teams publish campaign experiments 3.6x faster while improving creative consistency.',
    stack: ['SvelteKit', 'Edge APIs', 'LLM Tools', 'Tailwind', 'Workers'],
    github: 'https://github.com/',
    demo: 'https://netlify.com/',
    accent: '#f0abfc',
    preview: 'Generative campaign builder with live market signals',
    highlights: ['Structured generation', 'Variant comparison', 'Accessible editorial tooling']
  },
  {
    slug: 'atlas-labs',
    title: 'Atlas Labs',
    category: 'Systems',
    description:
      'A cinematic documentation and analytics layer for infrastructure teams managing deployments across regions and runtime providers.',
    impact: 'Improved deployment confidence with visual diffing, release trails, and failure-state choreography.',
    stack: ['Svelte', 'D3', 'Vite', 'Serverless', 'Playwright'],
    github: 'https://github.com/',
    demo: 'https://cloudflare.com/',
    accent: '#86efac',
    preview: 'Interactive deployment topology with release playback',
    highlights: ['Route-level code splitting', 'Scroll-driven explainers', 'Traceable release history']
  },
  {
    slug: 'luma-checkout',
    title: 'Luma Checkout',
    category: 'Commerce',
    description:
      'A premium checkout rebuild focused on trust, speed, and low-friction recovery paths across mobile and desktop purchase flows.',
    impact: 'Lifted checkout completion by 18% and reduced mobile form abandonment through progressive disclosure.',
    stack: ['SvelteKit', 'Stripe', 'Forms', 'A11y', 'Vitest'],
    github: 'https://github.com/',
    demo: 'https://stripe.com/',
    accent: '#fde68a',
    preview: 'Adaptive checkout flow with resilient validation states',
    highlights: ['Reduced-motion parity', 'Secure form states', 'Conversion-focused microinteractions']
  }
];

export const filters = ['All', 'Product', 'AI', 'Systems', 'Commerce'] as const;
