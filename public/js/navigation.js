// Keep anchor destinations below the navigation, including when it wraps.
(() => {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const update = () => document.documentElement.style.setProperty(
    '--site-header-height', `${Math.ceil(header.getBoundingClientRect().height)}px`
  );
  update();
  if ('ResizeObserver' in window) new ResizeObserver(update).observe(header);
  else window.addEventListener('resize', update);
})();
