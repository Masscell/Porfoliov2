export function inView(node: HTMLElement, options: IntersectionObserverInit = { threshold: 0.22 }) {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry?.isIntersecting) {
      node.dataset.inview = 'true';
      observer.unobserve(node);
    }
  }, options);

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
