/* ============================================================
   SOFTWARE – strook met de programma's waar ik mee werk
   Logo's staan in de map Afbeeldingen/logos/
   Programma toevoegen of weghalen? Pas alleen de lijst
   PROGRAMMAS hieronder aan (naam + bestandsnaam van het logo).
   ============================================================ */
(function () {
  const MAP = 'Afbeeldingen/logos/';

  const PROGRAMMAS = [
    { naam:'Photoshop',          logo:'logo-photoshop.webp' },
    { naam:'Illustrator',        logo:'logo-illustrator.webp' },
    { naam:'InDesign',           logo:'logo-indesign.webp' },
    { naam:'Adobe Express',      logo:'logo-adobe-express.webp' },
    { naam:'Creative Cloud',     logo:'logo-adobe-creative-studio.webp' },
    { naam:'Figma',              logo:'logo-figma.avif' },
    { naam:'Canva',              logo:'logo-canva.png' },
    { naam:'Affinity',           logo:'logo-affinity.webp' },
    { naam:'Visual Studio Code', logo:'logo-visual-studio-code.webp' }
  ];

  const geenBeweging = matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('[data-software]').forEach(plek => {
    const rij = document.createElement('div');
    rij.className = 'software-rij';

    const maakItems = (verborgen) => PROGRAMMAS.forEach(p => {
      const item = document.createElement('div');
      item.className = 'software-item';
      if (verborgen) item.setAttribute('aria-hidden', 'true');

      const foto = document.createElement('img');
      foto.src = MAP + p.logo;
      foto.alt = '';
      foto.loading = 'lazy';
      foto.onerror = () => foto.remove();   // logo niet gevonden? dan alleen de naam

      const naam = document.createElement('span');
      naam.textContent = p.naam;

      item.append(foto, naam);
      rij.appendChild(item);
    });

    maakItems(false);
    /* nog een keer erachter, zodat de strook naadloos doorloopt */
    if (!geenBeweging) maakItems(true);
    plek.appendChild(rij);
  });
})();
