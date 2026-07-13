// Studio Maya — shared motion (CSS-cheap, reduced-motion aware)

// Scroll reveal
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var el = entry.target;
        var sibs = Array.prototype.slice.call(el.parentNode.children).filter(function (n) { return n.classList && n.classList.contains('reveal'); });
        var i = sibs.indexOf(el);
        el.style.transitionDelay = ((i % 3) * 0.08) + 's';
        el.classList.add('in');
        io.unobserve(el);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });
  els.forEach(function (el) { io.observe(el); });
})();

// Hero/sub-hero glow parallax
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var glows = document.querySelectorAll('.hero .glow, .subhero .glow');
  if (!glows.length) return;
  var ticking = false;
  function update() {
    var y = window.scrollY * 0.12;
    glows.forEach(function (g) { g.style.marginTop = y + 'px'; });
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
})();
