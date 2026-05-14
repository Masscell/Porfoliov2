export function magnetic(node: HTMLElement, strength = 0.22) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function onPointerMove(event: PointerEvent) {
    if (reduceMotion) return;
    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * strength;
    const y = (event.clientY - rect.top - rect.height / 2) * strength;
    node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }

  function onPointerLeave() {
    node.style.transform = 'translate3d(0, 0, 0)';
  }

  node.addEventListener('pointermove', onPointerMove);
  node.addEventListener('pointerleave', onPointerLeave);

  return {
    destroy() {
      node.removeEventListener('pointermove', onPointerMove);
      node.removeEventListener('pointerleave', onPointerLeave);
    }
  };
}
