// Winstinct — shared interactions
(function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Mobile menu
  const burger = $('.burger');
  const overlay = $('#menu-overlay');
  if (burger && overlay) {
    const setOpen = (open) => {
      overlay.hidden = !open;
      burger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
      if (open) $('.menu-close', overlay).focus(); else burger.focus();
    };
    burger.addEventListener('click', () => setOpen(true));
    $('.menu-close', overlay).addEventListener('click', () => setOpen(false));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !overlay.hidden) setOpen(false); });
  }

  // Tabs (Worldwide / Capabilities)
  $$('[role="tablist"]').forEach((list) => {
    const tabs = $$('[role="tab"]', list);
    const globe = $('.globe');
    const select = (tab) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(t.getAttribute('aria-controls'));
        if (panel) panel.hidden = !on;
      });
      if (globe && tab.dataset.view) globe.dataset.view = tab.dataset.view;
    };
    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => select(tab));
      tab.addEventListener('keydown', (e) => {
        const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!dir) return;
        const next = tabs[(i + dir + tabs.length) % tabs.length];
        select(next); next.focus();
      });
    });
  });

  // Slider (Pillars / Highlights)
  $$('[data-slider]').forEach((slider) => {
    const slides = $$('.slide', slider);
    const count = $('.slider-count', slider.closest('section'));
    let i = 0;
    const pad = (n) => String(n).padStart(2, '0');
    const show = (n) => {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, k) => { s.hidden = k !== i; });
      if (count) count.textContent = pad(i + 1) + ' / ' + pad(slides.length);
    };
    const section = slider.closest('section');
    $('[data-prev]', section)?.addEventListener('click', () => show(i - 1));
    $('[data-next]', section)?.addEventListener('click', () => show(i + 1));
    show(0);
  });

  // Mixing desk (Digital Services): tap a channel to push it up or pull it down
  const desk = $('.console');
  if (desk) {
    const channels = $$('button.channel', desk);
    const count = $('[data-mix-count]');
    const update = () => { if (count) count.textContent = channels.filter((c) => c.getAttribute('aria-pressed') === 'true').length; };
    channels.forEach((c) => c.addEventListener('click', () => {
      c.setAttribute('aria-pressed', String(c.getAttribute('aria-pressed') !== 'true'));
      update();
    }));
    update();
    if (reduceMotion || !('IntersectionObserver' in window)) {
      desk.classList.remove('is-waiting');
    } else {
      const io = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) { desk.classList.remove('is-waiting'); io.disconnect(); }
      }, { threshold: 0.35 });
      io.observe(desk);
    }
  }

  // Filter groups (Artists & Labels roster + News categories)
  $$('.filters').forEach((group) => {
    const filterButtons = $$('.filter', group);
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
        const filterVal = btn.dataset.filter;
        // Filter roster cards and artist cards
        $$('.roster-card, .artist-card').forEach((card) => {
          if (!card.dataset.type) return;
          card.hidden = filterVal !== 'all' && card.dataset.type !== filterVal;
        });
        // Filter news post cards
        $$('.post-card').forEach((card) => {
          if (!card.dataset.cat) return;
          card.hidden = filterVal !== 'all' && card.dataset.cat !== filterVal;
        });
      });
    });
  });

  // Contact form submission handling
  const form = $('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const note = $('.form-note', form);
      if (note) {
        note.hidden = false;
        note.textContent = 'Thank you, ' + (form.elements.name?.value || 'partner') + '. Your inquiry has been received. Our team will review your submission and get back to you within 3 business days.';
      }
      form.reset();
    });
  }

  // Scroll animations (GSAP)
  if (reduceMotion || !window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.hero-word span', { yPercent: 18, duration: 1.1, ease: 'power3.out', stagger: 0.08 });

  if (window.matchMedia('(min-width: 961px)').matches) $$('.word-stack span').forEach((word, k) => {
    gsap.fromTo(word, { xPercent: k % 2 ? -8 : 0 }, {
      xPercent: k % 2 ? 0 : -8, ease: 'none',
      scrollTrigger: { trigger: '.word-stack', start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });

  $$('[data-rise]').forEach((el) => {
    gsap.from(el, { y: 40, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%' } });
  });
})();
