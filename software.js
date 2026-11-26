/* ============================================================
   SOFTWARE – strook met de programma's waar ik mee werk
   Wil je een programma toevoegen of weghalen?
   Pas dan alleen de lijst PROGRAMMAS hieronder aan.
   ============================================================ */
(function () {

  /* Adobe-achtig tegeltje: twee letters op een gekleurd vierkant */
  const tegel = (letters, achter, voor) => `
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect width="48" height="48" rx="10" fill="${achter}"/>
      <text x="24" y="31.5" text-anchor="middle" font-family="Poppins, sans-serif"
            font-weight="600" font-size="20" fill="${voor}">${letters}</text>
    </svg>`;

  const LOGOS = {
    figma: `
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <g transform="translate(14 6)">
          <path d="M5 0h5v12H5A6 6 0 0 1 5 0z" fill="#F24E1E"/>
          <path d="M10 0h5a6 6 0 0 1 0 12h-5z" fill="#FF7262"/>
          <path d="M5 12h5v12H5a6 6 0 0 1 0-12z" fill="#A259FF"/>
          <circle cx="15" cy="18" r="6" fill="#1ABCFE"/>
          <path d="M5 24h5v6a6 6 0 1 1-5-6z" fill="#0ACF83"/>
        </g>
      </svg>`,
    canva: `
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <defs>
          <linearGradient id="canva-kleur" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stop-color="#00C4CC"/><stop offset="1" stop-color="#7D2AE8"/>
          </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="22" fill="url(#canva-kleur)"/>
        <text x="24" y="32" text-anchor="middle" font-family="Poppins, sans-serif"
              font-weight="600" font-style="italic" font-size="23" fill="#fff">C</text>
      </svg>`,
    affinity: `
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect width="48" height="48" rx="10" fill="#1B1B2F"/>
        <path d="M24 9 39 37H9z" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linejoin="round"/>
        <path d="M24 9 31.5 23H16.5z" fill="#8B5CF6"/>
        <path d="M16.5 23H31.5L39 37H9z" fill="#22C1EE" opacity=".85"/>
      </svg>`
  };

  /* ---------- De lijst: naam + logo ----------
     Meer Adobe-programma's? Kopieer een regel, bv.:
     { naam:'Premiere Pro', logo: tegel('Pr', '#00005B', '#9999FF') },
     { naam:'After Effects', logo: tegel('Ae', '#00005B', '#9999FF') },
     { naam:'Lightroom',    logo: tegel('Lr', '#001E36', '#31A8FF') },  */
  const PROGRAMMAS = [
    { naam:'Photoshop',   logo: tegel('Ps', '#001E36', '#31A8FF') },
    { naam:'Illustrator', logo: tegel('Ai', '#330000', '#FF9A00') },
    { naam:'InDesign',    logo: tegel('Id', '#49021F', '#FF3366') },
    { naam:'Figma',       logo: LOGOS.figma },
    { naam:'Canva',       logo: LOGOS.canva },
    { naam:'Affinity',    logo: LOGOS.affinity }
  ];

  document.querySelectorAll('[data-software]').forEach(plek => {
    const rij = document.createElement('div');
    rij.className = 'software-rij';
    const maakItems = (verborgen) => PROGRAMMAS.forEach(p => {
      const item = document.createElement('div');
      item.className = 'software-item';
      if (verborgen) item.setAttribute('aria-hidden', 'true');
      item.innerHTML = p.logo + '<span>' + p.naam + '</span>';
      rij.appendChild(item);
    });
    maakItems(false);
    /* nog een keer erachter, zodat de strook naadloos doorloopt */
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) maakItems(true);
    plek.appendChild(rij);
  });
})();
