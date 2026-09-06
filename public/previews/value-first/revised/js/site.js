// Scroll-reveal + the "coming soon" beta dialog. No analytics, no third-party requests — ever.
document.documentElement.classList.add('js');

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const seen = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        seen.unobserve(e.target);
      }
    }
  }, { rootMargin: '0px 0px -8% 0px' });

  document.querySelectorAll('.reveal').forEach((el) => seen.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
}

// Beta CTAs: invites are private for now, so pressing any beta button
// shows a "coming soon" note instead of a signup path.
function betaDialog() {
  let d = document.getElementById('beta-dialog');
  if (!d) {
    d = document.createElement('dialog');
    d.id = 'beta-dialog';
    d.innerHTML =
      '<img src="img/brain-192.png" alt="">' +
      '<h3>Coming soon.</h3>' +
      '<p>Max is in testing with a small, invited group right now. Wider access is on the way — check back before long.</p>' +
      '<button type="button" class="btn btn-cta">Got it</button>';
    d.querySelector('button').addEventListener('click', () => d.close());
    d.addEventListener('click', (e) => { if (e.target === d) d.close(); });
    document.body.appendChild(d);
  }
  d.showModal();
}

document.querySelectorAll('a[data-beta]').forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    betaDialog();
  });
});
