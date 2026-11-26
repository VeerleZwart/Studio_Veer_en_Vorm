/* ============================================================
   PROJECTEN – pop-up met meer info en foto's
   ------------------------------------------------------------
   Elk kaartje (.card) op je site wordt automatisch klikbaar.
   - Staat er data-project="..." op het kaartje, dan komt de
     info uit de lijst hieronder.
   - Zonder data-project gebruikt de pop-up gewoon de titel,
     tekst, tags, foto en downloadknop van het kaartje zelf.
   Foto's: losse naam = map Afbeeldingen/projecten/,
           met een / of ./ ervoor = dat pad precies zo.
   ============================================================ */

const PROJECTEN = {

  'poster-stickit': {
    titel: 'Samen kijken we omhoog',
    ondertitel: 'Poster Student Challenge 2026 · Stick it!',
    categorie: 'Graphic Design',
    jaar: '2026',
    uitgelicht: true,
    kaartTitel: 'Poster StickIt: Samen kijken we omhoog',
    kaartTekst: 'Eventposter voor de Student Challenge van Graphic Matters over de zonsverduistering van 12 augustus 2026, toen iedereen samen omhoog keek.',
    kaartFoto: 'poster-mockup-straat.jpg',
    fotoPositie: 'center 30%',
    meta: [
      ['Opleiding', 'CrossMedia Design · Artevelde Hogeschool'],
      ['Vak', 'Graphic Design 1 · opdracht 2'],
      ['Opdrachtgever', 'Graphic Matters (Breda)'],
      ['Periode', 'oktober 2026'],
      ['Formaat', 'A0-poster, staand'],
      ['Score', '14,2 / 20']
    ],
    tekst: [
      ['De opdracht', 'Graphic Matters vroeg om een eigenzinnige eventposter over een gebeurtenis uit 2026 die moet blijven hangen in ons geheugen, met de titel, datum en locatie erop. In de kick-off kwam ook de vraag of we nog wel echt kijken naar alle beelden om ons heen.'],
      ['Mijn keuze', 'Ik koos de zonsverduistering van 12 augustus 2026. In Spanje was hij helemaal te zien, in Breda een groot deel. Ik heb zelf met mijn familie in de tuin gekeken. Wat me het meest is bijgebleven, zijn de mensen: iedereen stond buiten en keek omhoog, jong en oud, en niemand keek naar zijn telefoon. Daarom gaat mijn poster over samen omhoog kijken.'],
      ['Het proces', 'Mijn eerste versies lieten vooral zien hoe een eclips eruitziet: een zwarte cirkel, een brilletje en de woorden ‘Solar Eclipse’. De feedback was dat dat te letterlijk was. Daarom ben ik opnieuw begonnen en heb ik gezocht naar vergelijkingen, zoals iets dat bedekt wordt of een lamp die uitgaat. Daar kwamen vijf richtingen uit. Ik koos voor mensen die omhoog kijken, omdat dat het best past bij de vraag hoe we kijken.'],
      ['Het ontwerp', 'De poster werkt vooral met pathos: je moet het gevoel van dat moment terugkrijgen. De grote donkere vorm is de schaduw van de verduistering die over iedereen valt. Elke figuur heeft een eigen felle kleur, als teken dat iedereen erbij hoort, en het enige detail is het witte eclipsbrilletje. Een warme sepia-achtergrond en papiertextuur maken de poster tastbaar, als een herinnering uit een fotoalbum.']
    ],
    tags: ['Poster', 'Graphic Matters', 'Beeldtaal', 'A0'],
    fotos: [
      ['poster-samen-omhoog.jpg', 'Eindresultaat: ‘Samen kijken we omhoog’, Breda 12 | 08 | 2026'],
      ['poster-mockup-straat.jpg', 'Mock-up: de poster op straat'],
      ['poster-mockup-gang.jpg', 'Mock-up: de poster in een gang'],
      ['poster-moodboard.jpg', 'Moodboard: sepia, regenboog en papiertextuur'],
      ['poster-inspiratie.jpg', 'Inspiration board'],
      ['poster-ideeschetsen.jpg', 'Ideeschetsen: de eerste, te letterlijke richtingen'],
      ['poster-voorstudie.jpg', 'Voorstudie: silhouetten en compositie'],
      ['poster-doorgedreven-studie.jpg', 'Doorgedreven studie: drie versies naast elkaar']
    ],
    bestanden: [
      ['Vraag het dossier aan', 'mailto:veerle.zwart@gmail.com?subject=Dossier%20StickIt%20aanvragen']
    ]
  },

  'collage': {
    titel: 'Today. In 10 years.',
    ondertitel: 'Collage · Mijn leven in 2036',
    categorie: 'Graphic Design',
    jaar: '2026',
    uitgelicht: true,
    kaartTitel: 'Collage: Today. In 10 years.',
    kaartTekst: 'Een collage over mijn leven in 2036: een wolk van gescheurde reisbeelden boven iemand die met open armen de wereld in kijkt.',
    kaartFoto: 'mockup-collage.png',
    meta: [
      ['Opleiding', 'CrossMedia Design · Artevelde Hogeschool'],
      ['Vak', 'Graphic Design 1 · opdracht 1'],
      ['Periode', 'september – oktober 2026'],
      ['Formaat', 'A3-collage, knip- en plakwerk'],
      ['Score', '14,2 / 20']
    ],
    tekst: [
      ['De opdracht', 'Maak een creatieve collage over hoe jij jezelf en je omgeving ziet over tien jaar, in 2036. Met knip- en plakwerk, tekeningen, kleuren en andere technieken moest ik laten zien hoe ik het thema interpreteer. Het doel: verbeeldingskracht gebruiken, de techniek van collage leren en beeldend vertellen.'],
      ['Mijn toekomstvisie', 'Over tien jaar zie ik mezelf vooral onderweg. Onderaan staat iemand met een rugzak en de armen wijd open, klaar voor de wereld. Daarboven groeit een wolk van beelden die bij die toekomst horen: een luchtballon, een vliegtuig, zeilboten, bergen, bossen, postzegels, een paspoort en een ansichtkaart.'],
      ['Werkwijze', 'Ik heb eerst beelden gezocht en verzameld die bij mijn thema pasten. Daarna heb ik verschillende composities uitgeprobeerd op het papier voordat ik iets vastplakte. De gescheurde randen en het bruine kraftpapier maken de collage tastbaar en speels, als een bladzijde uit een reisdagboek.']
    ],
    tags: ['Collage', 'Knip- en plakwerk', 'Beeldend vertellen', 'A3'],
    fotos: [
      ['mockup-collage.png', 'Mock-up: de collage ingelijst'],
      ['collage-mockup.jpg', 'Mock-up: de collage ingelijst'],
      ['collage-2036.jpg', 'De collage ‘Today. In 10 years.’']
    ],
  }
    ,

      'turf': {
    categorie: 'Propedeuse Communicatie',
    jaar: '2026',
    uitgelicht: true,
    kaartTitel: 'Doelgroepanalyse TURF',
    kaartTekst: 'Onderzoek voor festival TURF in Breda: hoe bereik en enthousiasmeer je studenten? Met deskresearch, zes interviews, een persona en een customer journey.',
    kaartFoto: 'turf-cover.jpg',
    fotoPositie: 'center 70%',
    titel: 'Omgevings- en doelgroepanalyse TURF',
    ondertitel: 'Onderzoeksrapport · Stichting TURF',
    meta: [
      ['Opleiding', 'Communicatie · Avans Hogeschool'],
      ['Opdrachtgever', 'Stichting TURF (Breda)'],
      ['Project', 'Gouden Kans'],
      ['Periode', 'juli 2026']
    ],
    tekst: [
      ['De opdracht', 'TURF is een stadsbreed festival in Breda dat elektronische muziek, technologie en kunst samenbrengt. Het wil uitgroeien tot hét jaarlijkse evenement van Breda, maar weet nog weinig over een grote groep vlak om de hoek: de bijna 18.000 Nederlandstalige studenten in Breda. Mijn onderzoeksvraag: hoe kan TURF deze studenten het beste bereiken en enthousiasmeren?'],
      ['Mijn aanpak', 'Met deskresearch bracht ik de omgeving in kaart: een DESTEP, het vijfkrachtenmodel van Porter, een SWOT, een positioneringsmatrix en een web- en keywordanalyse. Daarnaast hield ik zes interviews met studenten, gespreid op opleiding, leeftijd en uitgaanstype. Die vertaalde ik naar persona Lara en een customer journey.'],
      ['Wat ik ontdekte', 'Vijf van de zes studenten kenden TURF niet. De meesten gaan alleen als hun vrienden meegaan, en prijs, locatie en line-up moeten vooraf duidelijk zijn. TURF heeft in zijn eigen niche geen directe concurrent, maar het woord ‘student’ komt nergens op de homepage voor.'],
      ['Conclusie', 'TURF bereikt studenten het best via Instagram en TikTok, gericht op vriendengroepen in plaats van losse personen, met heldere praktische informatie en het toegankelijke feestgedeelte als ingang.']
    ],
    tags: ['Onderzoek', 'Doelgroepanalyse', 'Persona', 'Customer journey'],
    fotos: [
      ['turf-cover.jpg', 'Voorkant van het onderzoeksrapport'],
      ['turf-persona.jpg', 'Persona Lara, gebaseerd op zes interviews'],
      ['turf-customer-journey.jpg', 'Customer journey: van bewustwording tot loyaliteit'],
      ['turf-positioneringsmatrix.jpg', 'Positioneringsmatrix: TURF tegenover het Bredase uitgaansaanbod']
    ],
    bestanden: [
      ['Bekijk rapport (PDF)', 'bestanden/Doelgroepanalyse-TURF-Veerle-Zwart.pdf']
    ]
  },


'workwalk': {
    categorie: 'Propedeuse Communicatie',
    jaar: '2026',
    uitgelicht: true,
    kaartTitel: 'WorkWalk: Stop sitting, start walking',
    kaartTekst: 'Gedragsinterventie voor Tilburg University: een kartonnen boompje op de vergadertafel dat medewerkers verleidt om wandelend te vergaderen.',
    kaartFoto: 'workwalk-mockup.png',
    titel: 'WorkWalk',
    ondertitel: 'Gedragsverandering · Tilburg University',
    meta: [
      ['Opleiding', 'Communicatie · Avans Hogeschool'],
      ['Opdrachtgever', 'Tilburg University · Health & Lifestyle Program'],
      ['Bureau', 'LOOP'],
      ['Score', '8,0 / 10']
    ],
    tekst: [
      ['De opdracht', 'Tilburg University heeft de WorkWalk: een wandelroute om wandelend te vergaderen. Toch gebruikten medewerkers die nauwelijks. De vraag van het Health & Lifestyle Program: hoe zorg je dat medewerkers de WorkWalk vaker en structureel gebruiken?'],
      ['Wat we deden', 'Met ons bureau LOOP ontdekten we dat zittend vergaderen een gewoonte is: medewerkers boeken een zaal zonder aan de WorkWalk te denken. We bedachten een keten van vijf interventies, van wegwijzers op de campus tot een Strava-challenge en een gratis koffie als beloning.'],
      ['Mijn interventie', 'Ik ontwierp een kartonnen boompje voor op de vergadertafel. Zo herinnert het boompje medewerkers op het moment van kiezen aan de WorkWalk. Op de vier kanten staan de slogan “Stop Sitting, Start Walking”, onderbouwde feiten zoals “60% more creativity when walking your meeting”, een QR-code naar de Strava-challenge en de logo’s van het programma.'],
      ['Testen en verbeteren', 'Ik testte het boompje in twee rondes met in totaal tien medewerkers, die hardop vertelden wat ze dachten. Op basis van hun feedback paste ik de kleuren aan naar de huisstijl van Tilburg University, legde ik de percentages duidelijker uit en zette ik een gewone link naast de QR-code, omdat sommige medewerkers geen QR-codes scannen.'],
      ['Het resultaat', 'Een printklaar ontwerp met een stappenplan voor de invoering: 50 boompjes, verspreid door 32 ambassadeurs en elke twee weken gewisseld tussen de vergaderzalen.']
    ],
    tags: ['Gedragsverandering', 'Interventie', 'Testen', 'Printontwerp'],
        fotos: [
      ['workwalk-mockup.png', 'Een boompje dat de gewoonte doorbreekt'],
      ['workwalk-1.jpg', 'Een boompje dat de gewoonte doorbreekt'],
      ['workwalk-visualisatie.png', 'Het boompje: alle vier de kanten'],
      ['workwalk-3.jpg', 'Het boompje in de vergaderzaal'],
      ['workwalk-4.jpg', 'De gedragsketen van vijf interventies'],
      ['workwalk-5.jpg', 'Opties voor het WorkWalk-logo'],
      ['workwalk-loop.png', 'Verantwoordingsverslag WorkWalk · LOOP']
    ],
    bestanden: [
      ['Vraag het verslag aan', 'mailto:veerle.zwart@gmail.com?subject=Verslag%20WorkWalk%20aanvragen']
    ]
  },


  'lorenz': {
    categorie: 'Propedeuse Communicatie',
    jaar: '2025',
    uitgelicht: true,
    kaartTitel: 'Netwerkkracht Lorenz',
    kaartTekst: 'MarCom-advies voor Netwerkkracht Start: positionering en een middelenmix van LinkedIn-campagne, drieluikfolder en aanwezigheid op ZZP-beurzen.',
    kaartFoto: 'FotoLorenz1.png',
    titel: 'Netwerkkracht Lorenz',
    ondertitel: 'MarCom-advies · Netwerkkracht Start',
    meta: [
      ['Opleiding', 'Communicatie · Avans Hogeschool'],
      ['Opdrachtgever', 'Lorenz Organiseren B.V.'],
      ['Bureau', 'Praatstof'],
      ['Score', 'n.v.t.']
    ],
    tekst: [
      ['De opdracht', 'Lorenz lanceert in maart 2026 Netwerkkracht Start, een platform dat professionals uit de zorg, het sociaal domein en het veiligheidsdomein met elkaar verbindt. De vraag aan ons: hoe zorg je dat drukbezette professionals zich al voor de lancering aanmelden?'],
['Wat ik deed', 'In een team van vier deden we deskresearch met onder andere een DESTEP-analyse, het Vijfkrachtenmodel en een SWOT-analyse, en fieldresearch met een enquête en interviews. De grootste drempel bleek de vraag “Wat levert dit mij op, en kost het mij extra tijd?”.'],
['Het resultaat', 'Een MarCom-advies met het concept “Een netwerk om op te bouwen” en de belofte dat het platform samenwerken simpeler en sneller maakt. Met een LinkedIn-campagne met korte video, een drieluikfolder en een stand op de Dag van de ZZP’er willen we 1500 professionals bereiken en 45 aanmeldingen voor de gratis proefmaand halen.']
    ],
    tags: ['MarCom', 'LinkedIn campagne', 'Conceptontwikkeling'],
        fotos: [
      ['FotoLorenz1.png', 'Netwerkkracht Lorenz'],
      ['lorenz-1.jpg', 'Slidedeck: Een netwerk om op te bouwen'],
      ['lorenz-2.jpg', 'Het concept'],
      ['lorenz-3.jpg', 'LinkedIn-campagne'],
      ['lorenz-4.jpg', 'Drieluikfolder'],
      ['lorenz-5.jpg', 'Stand op de Dag van de ZZP’er']      
    ],
    bestanden: [
      ['Vraag het rapport aan', 'mailto:veerle.zwart@gmail.com?subject=Rapport%20Lorenz%20aanvragen']
    ]
  },

 'heusdenhout': {
    categorie: 'Propedeuse Communicatie',
    jaar: '2025',
    uitgelicht: true,
    kaartTitel: 'Samen maken wij Heusdenhout',
    kaartTekst: 'Communicatieadvies voor Wijkraad Heusdenhout: onderzoek naar bekendheid en betrokkenheid, uitgewerkt tot een wijkkrant, poster en vernieuwde website.',
    kaartFoto: 'FotoHeusdenhout.png',
    titel: 'Samen maken wij Heusdenhout',
    ondertitel: 'Adviesrapport · Wijkraad Heusdenhout',
    meta: [
      ['Opleiding', 'Communicatie · Avans Hogeschool'],
      ['Bureau', 'Praatstof'],
      ['Opdrachtgever', 'Wijkraad Heusdenhout'],
      ['Periode', 'september - oktober 2025'],
      ['Formaat', 'Dossier, website, poster en wijkkrant'],
      ['Score', '7,6 / 10']
    ],
    tekst: [
      ['De opdracht', 'De wijkraad van Heusdenhout in Breda had te weinig leden. Na het vertrek van de voorzitter haakten veel vrijwilligers af en wisten bewoners vaak niet eens dat de wijkraad bestond. Met ons communicatiebureau Praatstof zochten we uit: wat houdt bewoners van 45 jaar en ouder tegen om mee te doen?'],
['Wat ik deed', 'We deden deskresearch naar de wijk en interviewden twaalf bewoners, onder wie een oud-voorzitter. Daaruit bleek dat de wijkraad weinig bekend is en dat mensen afhaken door hun leeftijd, tijdgebrek en het gevoel dat toch niemand meedoet. Ook bleek dat deze doelgroep papier en persoonlijk contact veel beter vindt werken dan sociale media.'],
['Het resultaat', 'Een adviesrapport met het concept “Samen maken wij Heusdenhout”: warm, uitnodigend en gericht op verbinding. Daarbij hoort een middelenmix van een wijkkrant, een poster met QR-code en een vernieuwde, overzichtelijke website. Het advies presenteerden we aan de wijkraad tijdens een Show & Tell.']
    ],
    tags: ['Praatstof', 'Adviesrapport', 'Communicatiemiddelen'],
    fotos: [
      ['heusdenhout-1.jpg', 'Voorkant adviesrapport Samen maken wij Heusdenhout'],
      ['heusdenhout-2.jpg', 'Poster voor de wijkraad'],
      ['heusdenhout-3.jpg', 'Vernieuwde website en wijkkrant'],
      ['heusdenhout-4.jpg', 'Customer journey van de doelgroep'],
      ['FotoHeusdenhout.png', 'Samen maken wij Heusdenhout']
    ],
    bestanden: [
      ['Vraag het rapport aan', 'mailto:veerle.zwart@gmail.com?subject=Rapport%20Heusdenhout%20aanvragen']
    ]
  },

  'praatstof': {
    categorie: 'Propedeuse Communicatie',
    jaar: '2025',
    uitgelicht: true,
    kaartTitel: 'Huisstijlhandboek Praatstof',
    kaartTekst: 'Eigen huisstijl voor communicatiebureau Praatstof: logo, kleuren, typografie en toepassingen zoals visitekaartje en briefsjabloon.',
    kaartFoto: 'HuisstijlPS.png',
    titel: 'Huisstijlhandboek Praatstof',
    ondertitel: 'Huisstijl · Communicatiebureau Praatstof',
    meta: [
      ['Opleiding', 'Communicatie · Avans Hogeschool'],
      ['Bureau', 'Praatstof (eigen studentenbureau)'],
      ['Score', '8,0 / 10'],
    ],
    tekst: [
      ['De opdracht', 'Voor de propedeuse Communicatie richtten we ons eigen communicatiebureau op: Praatstof. Een bureau heeft een herkenbaar gezicht nodig, dus ontwikkelden we een complete huisstijl die betrouwbaar, duidelijk en rustig overkomt en mensen van alle leeftijden aanspreekt.'],
['Het idee', 'Alles draait om het spreekwolkje: het symbool voor dialoog en communicatie, de kern van wat een communicatiebureau doet. Het woordlogo “praatstof” heeft een wolkje op de f, en het beeldlogo is een wolkje met de letters ps. Donkerblauw staat voor betrouwbaarheid en professionaliteit, lichtgroen voor rust en evenwicht.'],
['Wat we maakten', 'Een huisstijlhandboek met een woord- en beeldlogo, een logo-animatie, kleurcombinaties en logovariaties, regels voor de typografie (Helvetica Now Display en Cerebri Sans) en toepassingen zoals Instagram, de website, een visitekaartje, een e-mailhandtekening, een briefsjabloon en sjablonen voor documenten en presentaties.']
    ],
    tags: ['Huisstijl', 'Branding', 'Vormgeving'],
    fotos: [
      ['HuisstijlPS.png', 'Huisstijlhandboek Praatstof']

    ],
    bestanden: [
      ['Vraag het handboek aan', 'mailto:veerle.zwart@gmail.com?subject=Huisstijlhandboek%20Praatstof%20aanvragen']
    ]
  },

    

  'pi-portfolio': {
    categorie: 'Professionele identiteit',
    jaar: '2026',
    uitgelicht: false,
    kaartTitel: 'Portfolio Professionele Identiteit',
    kaartTekst: 'Wie ben ik als professional? Mijn kernkwaliteiten, leerstijl, teamrol en ontmoetingen met het werkveld, van snuffelstage tot expertinterview.',
    kaartFoto: 'pi-portfolio.jpg',
    titel: 'Portfolio Professionele Identiteit',
    ondertitel: 'Propedeuse Communicatie · Avans Hogeschool',
    meta: [
      ['Opleiding', 'Communicatie · Avans Hogeschool'],
      ['Opdrachtgever', 'Avans Hogeschool'],
      ['Bureau', 'Veerle Zwart (eigen werk)'],
      ['Score', '9,0 / 10'],
      ['Periode', 'september 2025 – juni 2026']
    ],
    tekst: [
      ['Over dit project', 'Een jaar lang onderzocht ik wie ik ben als (toekomstig) communicatieprofessional. In dit portfolio staan mijn reflecties, onderzoeken en gesprekken met het werkveld bij elkaar.'],
['Wie ik ben', 'Mijn kernkwaliteiten zijn nauwkeurig, optimistisch en vriendelijk. Mijn valkuil: ik help anderen zo graag dat ik soms mijn eigen grenzen vergeet, en daar werk ik aan. Ik leer het best door te doen (leerstijl: de Doener), en in een team ben ik vooral de Brononderzoeker: sociaal, enthousiast en altijd op zoek naar nieuwe ideeën en contacten.'],
['Het werkveld in', 'Ik liep een snuffelstage bij Muziekgebouw Eindhoven en schreef daar een Instagram- en Facebookpost voor de theatertour van MEAU. Ook interviewde ik een marketing- en publiciteitsmedewerker van Theater De Kring, had ik gesprekken met een werkveldbuddy, bezocht ik Beeld & Geluid in Hilversum en verdiepte ik me in branding via Jos Burgers.'],
['Wat het me opleverde', 'Ik ontdekte dat ik het meest tot mijn recht kom waar communicatie en vormgeving samenkomen. Daarom koos ik na mijn propedeuse voor CrossMedia Design aan Artevelde Hogeschool.']
    ],
    tags: ['Zelfreflectie', 'Werkveldoriëntatie', 'Teamrollen', 'Kernkwaliteiten'],
        fotos: [
      ['pi-portfolio.jpg', 'Voorkant portfolio Professionele Identiteit'],
      ['pi-portfolio-2.jpg', 'Kernkwadrant van Ofman: optimistisch'],
      ['pi-portfolio-3.jpg', 'Werkveldoriëntatie bij Beeld & Geluid']
    ],
    bestanden: [
      ['Vraag het portfolio aan', 'mailto:veerle.zwart@gmail.com?subject=PI-portfolio%20aanvragen']
    ]
  }
};


/* ============================================================
   HIERONDER HOEF JE NIETS AAN TE PASSEN
   (kaartjes, carousel, filters en pop-up)
   ============================================================ */
(function () {
  const map = './Afbeeldingen/projecten/';
  const pad = (b) => (b.includes('/') ? b : map + b);
  const sleutels = Object.keys(PROJECTEN);
  const rustig = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Maakt een foto aan
  function foto(bron, alt, positie) {
    const f = document.createElement('img');
    f.src = pad(bron); f.alt = alt || ''; f.loading = 'lazy';
    if (positie) f.style.objectPosition = positie;
    return f;
  }
  // Zet de kaartfoto's in alle kaartjes binnen 'plek'
  function fotosPlaatsen(plek) {
    plek.querySelectorAll('.card-thumb[data-foto]').forEach(d => {
      d.append(foto(d.dataset.foto, d.dataset.alt, d.dataset.positie));
    });
  }

  /* ---------- 1. Kaartjes maken ---------- */
  function kaartHTML(sleutel, nr) {
    const p = PROJECTEN[sleutel];
    const thumb = p.kaartFoto
      ? `<div class="card-thumb" data-foto="${p.kaartFoto}" data-alt="${p.kaartTitel || p.titel}" data-positie="${p.fotoPositie || ''}"></div>`
      : `<div class="card-thumb"><span>Beeld volgt</span></div>`;
    const tags = (p.tags || []).slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('');
    return `
<article class="card klikbaar" data-project="${sleutel}" data-categorie="${p.categorie || ''}" tabindex="0" role="button" aria-label="Bekijk project: ${p.kaartTitel || p.titel}" style="--i:${nr}">
  ${thumb}
  <div class="card-body">
    <p class="card-cat">${p.categorie || ''}${p.jaar ? ' · ' + p.jaar : ''}</p>
    <h3>${p.kaartTitel || p.titel}</h3>
    <p>${p.kaartTekst || ''}</p>
    <div class="tags">${tags}</div>
    <span class="card-link">Bekijk project <span class="pijl" aria-hidden="true">&rarr;</span></span>
  </div>
</article>`;
  }

  // Carousel op de homepage
  const carousel = document.querySelector('[data-projecten="carousel"]');
  if (carousel) {
    carousel.innerHTML = sleutels.filter(s => PROJECTEN[s].uitgelicht)
      .map((s, i) => kaartHTML(s, i)).join('');
    fotosPlaatsen(carousel);
  }

  // Overzicht op projecten.html
  const grid = document.querySelector('[data-projecten="grid"]');
  if (grid) {
    grid.innerHTML = sleutels.map((s, i) => kaartHTML(s, i)).join('');
    fotosPlaatsen(grid);

    const filters = document.querySelector('.filters');
    const aantal = document.querySelector('.aantal');
    const categorieen = [...new Set(sleutels.map(s => PROJECTEN[s].categorie).filter(Boolean))];
    const telling = (c) => sleutels.filter(s => !c || PROJECTEN[s].categorie === c).length;

    filters.innerHTML = [['', 'Alles'], ...categorieen.map(c => [c, c])]
      .map(([waarde, label], i) =>
        `<button type="button" class="filter${i === 0 ? ' actief' : ''}" data-filter="${waarde}" aria-pressed="${i === 0}">${label} <span>${telling(waarde)}</span></button>`)
      .join('');

    function filter(waarde) {
      filters.querySelectorAll('.filter').forEach(b => {
        const aan = b.dataset.filter === waarde;
        b.classList.toggle('actief', aan);
        b.setAttribute('aria-pressed', aan);
      });
      let n = 0;
      grid.querySelectorAll('.card').forEach(k => {
        const past = !waarde || k.dataset.categorie === waarde;
        k.hidden = !past;
        if (past) {
          k.style.setProperty('--i', n++);
          k.classList.remove('kaart-in');
          void k.offsetWidth;          // animatie opnieuw starten
          k.classList.add('kaart-in');
        }
      });
      aantal.textContent = n + (n === 1 ? ' project' : ' projecten');
    }
    filters.addEventListener('click', (e) => {
      const knop = e.target.closest('.filter');
      if (knop) filter(knop.dataset.filter);
    });
    filter('');
  }

  /* ---------- 2. Carousel laten bewegen ---------- */
  if (carousel) {
    const sectie = carousel.closest('section');
    const vorige = sectie.querySelector('.carousel-knop.vorige');
    const volgende = sectie.querySelector('.carousel-knop.volgende');
    const puntjes = sectie.querySelector('.carousel-puntjes');
    const kaarten = [...carousel.querySelectorAll('.card')];
    const stap = () => kaarten[1] ? kaarten[1].offsetLeft - kaarten[0].offsetLeft : carousel.clientWidth;
    const opEinde = () => carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 8;

    puntjes.innerHTML = kaarten.map(() => '<span></span>').join('');
    function bijwerken() {
      const nr = Math.round(carousel.scrollLeft / stap());
      puntjes.querySelectorAll('span').forEach((p, i) =>
        p.classList.toggle('actief', opEinde() ? i === kaarten.length - 1 : i === nr));
      vorige.disabled = carousel.scrollLeft < 8;
      volgende.disabled = opEinde();
    }
    function schuif(richting) {
      if (richting > 0 && opEinde()) carousel.scrollTo({ left: 0, behavior: 'smooth' });
      else carousel.scrollBy({ left: richting * stap(), behavior: 'smooth' });
    }
    vorige.addEventListener('click', () => schuif(-1));
    volgende.addEventListener('click', () => schuif(1));
    carousel.addEventListener('scroll', () => requestAnimationFrame(bijwerken), { passive: true });
    window.addEventListener('resize', bijwerken);
    bijwerken();

    // Slepen met de muis (op telefoon swipe je gewoon)
    let sleept = false, startX = 0, startScroll = 0, bewogen = 0;
    carousel.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'mouse') return;
      sleept = true; bewogen = 0;
      startX = e.clientX; startScroll = carousel.scrollLeft;
    });
    window.addEventListener('pointermove', (e) => {
      if (!sleept) return;
      bewogen = Math.abs(e.clientX - startX);
      if (bewogen > 5) carousel.classList.add('sleept');
      carousel.scrollLeft = startScroll - (e.clientX - startX);
    });
    window.addEventListener('pointerup', () => {
      if (!sleept) return;
      sleept = false;
      carousel.classList.remove('sleept');
    });
    // Na slepen geen pop-up openen
    carousel.addEventListener('click', (e) => {
      if (bewogen > 5) { e.stopPropagation(); e.preventDefault(); bewogen = 0; }
    }, true);

    // Vanzelf doorschuiven, pauze bij muis erop, focus of als de pop-up open is
    let pauze = false;
    sectie.addEventListener('mouseenter', () => pauze = true);
    sectie.addEventListener('mouseleave', () => pauze = false);
    sectie.addEventListener('focusin', () => pauze = true);
    sectie.addEventListener('focusout', () => pauze = false);
    if (!rustig) {
      setInterval(() => {
        if (pauze || document.hidden || document.body.classList.contains('modal-open')) return;
        const r = carousel.getBoundingClientRect();
        if (r.bottom < 0 || r.top > innerHeight) return;
        schuif(1);
      }, 5000);
    }
  }

  /* ---------- 3. De pop-up ---------- */
  document.body.insertAdjacentHTML('beforeend', `
<dialog id="project-modal" class="project-modal" aria-labelledby="pm-titel">
  <button class="pm-sluit" type="button" aria-label="Sluiten">&times;</button>
  <div class="pm-inhoud">
    <div class="pm-galerij"></div>
    <div class="pm-info">
      <p class="pm-ondertitel"></p>
      <h2 class="pm-titel" id="pm-titel"></h2>
      <dl class="pm-meta"></dl>
      <div class="pm-tekst"></div>
      <div class="tags pm-tags"></div>
      <div class="pm-knoppen"></div>
      <div class="pm-bladeren">
        <button type="button" class="pm-ander" data-richting="-1">&larr; Vorig project</button>
        <button type="button" class="pm-ander" data-richting="1">Volgend project &rarr;</button>
      </div>
    </div>
  </div>
</dialog>
<dialog id="pm-zoom" class="pm-zoom" aria-label="Foto groot bekijken">
  <button class="pz-sluit" type="button" aria-label="Sluiten">&times;</button>
  <button class="pz-pijl pz-vorige" type="button" aria-label="Vorige foto">&#8249;</button>
  <figure class="pz-foto">
    <figcaption><span class="pz-onderschrift"></span><span class="pz-teller"></span></figcaption>
  </figure>
  <button class="pz-pijl pz-volgende" type="button" aria-label="Volgende foto">&#8250;</button>
</dialog>`);

  const dlg = document.getElementById('project-modal');
  const el = (sel) => dlg.querySelector(sel);
    const zoom = document.getElementById('pm-zoom');
  const zEl = (sel) => zoom.querySelector(sel);
  const zoomFoto = document.createElement('img');
  zEl('.pz-foto').prepend(zoomFoto);
  let fotos = [], huidige = 0, lijst = [], open_ = '';

  // Alle foto's onder elkaar: groot, dan twee naast elkaar, dan weer groot, ...
  // Twee naast elkaar worden even hoog; de breedte past zich aan de vorm van de foto aan.
  function galerijBouwen() {
    const galerij = el('.pm-galerij');
    galerij.innerHTML = '';
    let rij = null;
    fotos.forEach(([bestand, onderschrift], n) => {
      const alleenOver = n === fotos.length - 1 && n % 3 === 1;   // laatste foto zonder buurfoto
      if (n % 3 !== 2) {                                          // nieuwe rij beginnen
        rij = document.createElement('div');
        rij.className = 'pm-rij';
        galerij.append(rij);
      }
      const tegel = document.createElement('button');
      tegel.type = 'button';
      tegel.className = 'pm-tegel';
      tegel.setAttribute('aria-label', 'Foto ' + (n + 1) + ' groot bekijken: ' + onderschrift);
      const f = foto(bestand, onderschrift);
      f.loading = 'eager';
      const verhouding = () => { if (f.naturalWidth) tegel.style.flexGrow = Math.round(f.naturalWidth / f.naturalHeight * 1000); };
      f.addEventListener('load', verhouding);
      verhouding();
      tegel.append(f);
      const label = document.createElement('span');
      label.className = 'pm-tegel-tekst';
      label.textContent = onderschrift;
      tegel.append(label);
      tegel.addEventListener('click', () => zoomOpen(n));
      rij.append(tegel);
      if (n % 3 === 0 || alleenOver) rij = null;                  // grote foto = rij alleen
    });
  }

  // De foto schermvullend (lightbox)
  function toonFoto(i) {
    if (!fotos.length) return;
    huidige = (i + fotos.length) % fotos.length;
    const [bestand, onderschrift] = fotos[huidige];
    zoomFoto.classList.remove('wissel'); void zoomFoto.offsetWidth; zoomFoto.classList.add('wissel');
    zoomFoto.src = pad(bestand);
    zoomFoto.alt = onderschrift;
    zEl('.pz-onderschrift').textContent = onderschrift;
    zEl('.pz-teller').textContent = (huidige + 1) + ' / ' + fotos.length;
  }
  function zoomOpen(n) {
    zoom.querySelectorAll('.pz-pijl').forEach(b => b.hidden = fotos.length < 2);
    toonFoto(n);
    zoom.showModal();
  }
  zEl('.pz-sluit').addEventListener('click', () => zoom.close());
  zEl('.pz-vorige').addEventListener('click', () => toonFoto(huidige - 1));
  zEl('.pz-volgende').addEventListener('click', () => toonFoto(huidige + 1));
  zoom.addEventListener('click', (e) => {            // klik naast de foto = sluiten
    if (e.target === zoom || e.target.classList.contains('pz-foto')) zoom.close();
  });
  zoom.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') toonFoto(huidige - 1);
    if (e.key === 'ArrowRight') toonFoto(huidige + 1);
  });
  let veegStart = null;                              // vegen op telefoon
  zoom.addEventListener('touchstart', (e) => { veegStart = e.touches[0].clientX; }, { passive: true });
  zoom.addEventListener('touchend', (e) => {
    if (veegStart === null) return;
    const verschil = e.changedTouches[0].clientX - veegStart;
    if (Math.abs(verschil) > 50) toonFoto(huidige + (verschil < 0 ? 1 : -1));
    veegStart = null;
  });

  function openProject(sleutel) {
    const p = PROJECTEN[sleutel];
    if (!p) return;
    open_ = sleutel;
    fotos = (p.fotos || []).slice();
    if (!fotos.length && p.kaartFoto) fotos = [[p.kaartFoto, p.titel]];

    el('.pm-titel').textContent = p.titel;
    el('.pm-ondertitel').textContent = p.ondertitel || '';
    el('.pm-meta').innerHTML = (p.meta || []).map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('');
    el('.pm-tekst').innerHTML = (p.tekst || []).map(([kop, t]) => `<h4>${kop}</h4><p>${t}</p>`).join('');
    el('.pm-tags').innerHTML = (p.tags || []).map(t => `<span class="tag">${t}</span>`).join('');
    el('.pm-knoppen').innerHTML = (p.bestanden || []).map(([label, href]) =>
      `<a class="download-btn" href="${href}" target="_blank" rel="noopener">${label}</a>`).join('');

    const galerij = el('.pm-galerij');
    galerij.hidden = !fotos.length;
    if (fotos.length) galerijBouwen();
    el('.pm-bladeren').hidden = lijst.length < 2;
    if (!dlg.open) dlg.showModal();
    document.body.classList.add('modal-open');
    el('.pm-inhoud').scrollTop = 0;
    el('.pm-inhoud').classList.remove('wissel'); void dlg.offsetWidth; el('.pm-inhoud').classList.add('wissel');
  }

  dlg.addEventListener('close', () => document.body.classList.remove('modal-open'));
  el('.pm-sluit').addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
  dlg.querySelectorAll('.pm-ander').forEach(b => b.addEventListener('click', () => {
    const i = lijst.indexOf(open_);
    openProject(lijst[(i + Number(b.dataset.richting) + lijst.length) % lijst.length]);
  }));

  // Klikken op een kaartje (ook kaartjes die je zelf in de HTML zet, met data-project)
  function kaartOpenen(kaart) {
    const groep = kaart.parentElement;
    lijst = [...groep.querySelectorAll('.card[data-project]')]
      .filter(k => !k.hidden && PROJECTEN[k.dataset.project])
      .map(k => k.dataset.project);
    openProject(kaart.dataset.project);
  }
  document.addEventListener('click', (e) => {
    const kaart = e.target.closest('.card[data-project]');
    if (kaart && !e.target.closest('a') && !dlg.contains(kaart)) kaartOpenen(kaart);
  });
  document.addEventListener('keydown', (e) => {
    const kaart = e.target.closest && e.target.closest('.card[data-project]');
    if (kaart && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); kaartOpenen(kaart); }
  });
})();