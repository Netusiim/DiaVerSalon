  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.matchMedia('(max-width: 860px)');

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  window.addEventListener('load', () => document.body.classList.add('loaded'));
  setTimeout(() => document.body.classList.add('loaded'), 1600);

  const nav = document.getElementById('nav');
  const progress = document.getElementById('progress');
  const toTop = document.getElementById('toTop');
  const heroBgs = document.querySelectorAll('.hero .bg');

  let ticking = false;
  function onScroll(){
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 40);
    document.body.classList.toggle('scrolled-past', y > 80);
    toTop.classList.toggle('show', y > window.innerHeight * 0.9);

    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';

    if (!reduceMotion && !isMobile.matches && y < window.innerHeight){
      heroBgs.forEach(b => { b.style.transform = `translateY(${y * 0.14}px) scale(1.04)`; });
    }
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking){ requestAnimationFrame(onScroll); ticking = true; }
  }, { passive:true });
  onScroll();

  toTop.addEventListener('click', () => window.scrollTo({ top:0, behavior: reduceMotion ? 'auto' : 'smooth' }));

  /* ---------- skok na kotvu ----------
     Reveal animace posouvají prvky přes `transform`, což zkresluje jejich měřenou
     pozici — nativní skok na kotvu pak končí až o 50 px výš, schovaný pod hlavičkou.
     Pozici proto počítáme přes `offsetTop`, kterého se transformace netýkají. */
  const NAV_OFFSET = 90;
  function offsetTopOf(el){
    let y = 0;
    for (let node = el; node; node = node.offsetParent) y += node.offsetTop;
    return y;
  }
  function goToAnchor(href){
    const target = document.querySelector(href);
    if (!target) return;
    window.scrollTo({ top: Math.max(0, offsetTopOf(target) - NAV_OFFSET),
                      behavior: reduceMotion ? 'auto' : 'smooth' });
    history.replaceState(null, '', href);
  }
  document.querySelectorAll('a[href^="#"]:not(.menu-panel a)').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href.length > 1 && document.querySelector(href)) { e.preventDefault(); goToAnchor(href); }
    });
  });

  const menuBtn = document.getElementById('menuBtn');
  const menuPanel = document.getElementById('menuPanel');
  function setMenu(open){
    document.body.classList.toggle('menu-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Zavřít menu' : 'Otevřít menu');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  menuBtn.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
  document.getElementById('menuClose').addEventListener('click', () => setMenu(false));
  menuPanel.querySelectorAll('a').forEach(a => a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      setMenu(false);
      requestAnimationFrame(() => goToAnchor(href));
    } else {
      setMenu(false);
    }
  }));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) setMenu(false);
  });

  if (!reduceMotion){
    const dust = document.getElementById('dust');
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 18; i++){
      const p = document.createElement('i');
      const size = (Math.random() * 2.4 + 1.4).toFixed(1);
      p.style.left = (Math.random() * 100).toFixed(1) + '%';
      p.style.width = p.style.height = size + 'px';
      p.style.setProperty('--dt', (Math.random() * 22 + 22).toFixed(0) + 's');
      p.style.setProperty('--dd', (-Math.random() * 30).toFixed(0) + 's');
      p.style.setProperty('--dx', (Math.random() * 120 - 60).toFixed(0) + 'px');
      frag.appendChild(p);
    }
    dust.appendChild(frag);
  }

  const obs = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); } }), { threshold:0, rootMargin:'0px 0px -80px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  const wmObs = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ e.target.querySelectorAll('.wm, .glow, .orbit, .sheen').forEach(w => w.classList.add('in')); wmObs.unobserve(e.target); } }), { threshold:0 });
  document.querySelectorAll('.sec').forEach(sec => wmObs.observe(sec));

  document.querySelectorAll('.deco').forEach(svg => {
    svg.querySelectorAll('path, circle').forEach(p => p.style.setProperty('--len', p.getTotalLength ? p.getTotalLength() : 200));
  });
  const decoObs = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); decoObs.unobserve(e.target); } }), { threshold:.2 });
  document.querySelectorAll('.deco').forEach(el => decoObs.observe(el));

  /* ---------- modály (GDPR, cookies) ---------- */
  let modalOpener = null;
  function openModal(id){
    const m = document.getElementById(id);
    if (!m) return;
    modalOpener = document.activeElement;
    m.classList.add('open');
    document.body.style.overflow = 'hidden';
    m.querySelector('.modal-close').focus();
  }
  function closeModal(m){
    m.classList.remove('open');
    if (!document.querySelector('.modal.open') && !document.body.classList.contains('menu-open')) document.body.style.overflow = '';
    if (modalOpener) modalOpener.focus();
  }
  document.querySelectorAll('[data-modal-open]').forEach(b =>
    b.addEventListener('click', () => openModal(b.dataset.modalOpen)));
  document.querySelectorAll('.modal').forEach(m => {
    m.querySelector('[data-modal-close]').addEventListener('click', () => closeModal(m));
    m.addEventListener('click', e => { if (e.target === m) closeModal(m); });
  });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    const open = document.querySelector('.modal.open');
    if (open) closeModal(open);
  });

  /* ---------- mapa na vyžádání (bez cookies do doby, než ji návštěvník chce) ---------- */
  const mapWrap = document.getElementById('contactMap');
  const mapLoadBtn = document.getElementById('mapLoad');

  function loadMap(){
    if (!mapWrap || mapWrap.querySelector('iframe')) return;
    const f = document.createElement('iframe');
    f.src = mapWrap.dataset.mapSrc;
    f.title = 'Mapa — DiaVer Salon, Jungmannova 245, Nové Strašecí';
    f.loading = 'lazy';
    f.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
    mapWrap.appendChild(f);
    const ph = document.getElementById('mapPlaceholder');
    if (ph) ph.remove();
  }
  if (mapLoadBtn) mapLoadBtn.addEventListener('click', loadMap);

  /* ---------- souhlas s cookies ----------
     Volba se záměrně nikam neukládá — lišta se objeví při každé návštěvě znovu.
     Platí tedy jen pro aktuální zobrazení stránky: „Přijmout“ načte mapu,
     „Odmítnout“ nechá náhled a mapu lze pořád zobrazit ručně tlačítkem. */
  const cookieBar = document.getElementById('cookieBar');
  if (cookieBar) {
    const hideBar = () => cookieBar.classList.remove('show');
    setTimeout(() => cookieBar.classList.add('show'), 1200);

    document.getElementById('cookieAccept').addEventListener('click', () => { hideBar(); loadMap(); });
    document.getElementById('cookieDecline').addEventListener('click', hideBar);

    const resetBtn = document.getElementById('cookieReset');
    if (resetBtn) resetBtn.addEventListener('click', () => cookieBar.classList.add('show'));
  }

  /* ---------- lightbox galerie týmu ---------- */
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbCaption = document.getElementById('lbCaption');
  let gallery = [];      // fotky aktuálně otevřené karty (plné rozlišení)
  let index = 0;
  let lastFocused = null;

  const fullSrc = src => src.replace(/([?&]w=)\d+/, '$11400');

  function show(i){
    index = (i + gallery.length) % gallery.length;
    lbImg.src = gallery[index].src;
    lbImg.alt = gallery[index].alt;
    lbCaption.textContent = `${index + 1} / ${gallery.length}`;
  }
  function openLightbox(card, startIndex){
    gallery = [...card.querySelectorAll('.team-thumbs img')].map(img => ({ src: fullSrc(img.src), alt: img.alt }));
    lastFocused = document.activeElement;
    show(startIndex);
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
    document.getElementById('lbClose').focus();
  }
  function closeLightbox(){
    lb.classList.remove('open');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll('.team-card').forEach(card => {
    card.querySelectorAll('.team-thumbs button').forEach((btn, i) => {
      btn.addEventListener('click', () => openLightbox(card, i));
    });
  });
  document.getElementById('lbClose').addEventListener('click', closeLightbox);
  document.getElementById('lbPrev').addEventListener('click', () => show(index - 1));
  document.getElementById('lbNext').addEventListener('click', () => show(index + 1));
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);

    if (e.key === 'Tab') {
      const focusable = lb.querySelectorAll('button');
      if (!focusable.length) return;
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
