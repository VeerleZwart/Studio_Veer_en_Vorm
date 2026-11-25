/* ============================================================
   BEWEGING – menu, scroll-animaties en kleine effecten
   Hier hoef je niets aan te passen.
   Tip: geef een blok in je HTML class="reveal" en het
   schuift netjes in beeld als je ernaartoe scrolt.
   ============================================================ */
(function () {
  document.documentElement.classList.add('js');
  const nav = document.querySelector('header.nav');
  const menuKnop = document.querySelector('.menu-knop');

  /* Menu wordt compacter zodra je scrolt */
  const opScroll = () => nav && nav.classList.toggle('gescrold', scrollY > 30);
  addEventListener('scroll', opScroll, { passive: true });
  opScroll();

  /* Hamburgermenu op telefoon */
  if (menuKnop) {
    menuKnop.addEventListener('click', () => {
      const open = nav.classList.toggle('menu-open');
      menuKnop.setAttribute('aria-expanded', open);
      menuKnop.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    });
    nav.querySelectorAll('nav.links a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('menu-open');
      menuKnop.setAttribute('aria-expanded', false);
    }));
  }

  /* Blokken laten inschuiven bij het scrollen */
  const blokken = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const kijker = new IntersectionObserver((items) => {
      items.forEach(item => {
        if (item.isIntersecting) {
          item.target.classList.add('zichtbaar');
          kijker.unobserve(item.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    blokken.forEach((b, i) => {
      // blokken die naast elkaar staan iets na elkaar laten komen
      const broertjes = [...b.parentElement.children].filter(c => c.classList.contains('reveal'));
      b.style.transitionDelay = (broertjes.indexOf(b) * 90) + 'ms';
      kijker.observe(b);
    });
  } else {
    blokken.forEach(b => b.classList.add('zichtbaar'));
  }

  /* Op de homepage: menu-link oplichten van het stuk waar je bent */
  const naam = (a) => a.dataset.sectie || a.hash.slice(1);
  const links = [...document.querySelectorAll('nav.links a')].filter(a => naam(a));
  const secties = links.map(a => document.getElementById(naam(a))).filter(Boolean);
  if (secties.length && 'IntersectionObserver' in window) {
    const kijker2 = new IntersectionObserver((items) => {
      items.forEach(item => {
        if (!item.isIntersecting) return;
        links.forEach(a => a.classList.toggle('active', naam(a) === item.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    secties.forEach(s => kijker2.observe(s));
  }

  /* Lopende band: tekst verdubbelen zodat hij naadloos doorloopt */
  document.querySelectorAll('.band-rij').forEach(rij => {
    rij.innerHTML += rij.innerHTML;
  });

  /* Hero-foto beweegt heel licht mee als je scrolt */
  const heroFoto = document.querySelector('.hero-photo img');
  if (heroFoto && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    addEventListener('scroll', () => {
      const y = Math.min(scrollY, 600);
      heroFoto.style.transform = `scale(1.06) translateY(${y * 0.06}px)`;
    }, { passive: true });
  }
  
  /* Logo's en foto's bij Ervaringen laden (lukt het niet, dan blijft de letter staan) */
  document.querySelectorAll('[data-logo]').forEach(vak => {
    const logo = new Image();
    logo.alt = '';
    logo.onload = () => { if (vak.classList.contains('logo')) { vak.prepend(logo); } else { vak.textContent=''; vak.append(logo); } vak.classList.add('met-logo'); };
    logo.src = vak.dataset.logo;
  });
  document.querySelectorAll('[data-afbeelding]').forEach(vak => {
    const foto = new Image();
    foto.alt = vak.textContent.trim();
    foto.onerror = () => vak.classList.add('geen-foto');
        foto.onload = () => { vak.style.flexGrow = Math.sqrt(foto.naturalWidth / foto.naturalHeight); };
    vak.prepend(foto);
    foto.src = vak.dataset.afbeelding;
  });
  
  /* Icoontje in het tabblad van de browser */
  const icoon = document.createElement('link');
  icoon.rel = 'icon';
  icoon.href = 'Afbeeldingen\\logos\\veer-en-vorm-logo-svg\\veer-en-vorm-icoon-02-negatief.svg';
  document.head.append(icoon);
})();
