import type { Language } from '../context/LanguageContext'

export interface LocalizedProductCopy {
  tagline?: string
  description?: string
}

export const PRODUCT_TRANSLATIONS: Record<string, Partial<Record<Language, LocalizedProductCopy>>> = {
  'the-origin': {
    ro: {
      tagline: 'Capitolul 000 — Primul Semnal',
      description: 'Capitolul /000 este rezervat celor care ajung la capătul drumului. Un semnal discret că ai fost aici primul.\n\nBumbac greu de 255 GSM (7.5 oz), croială boxy asumată — punctul de origine al universului HeavenlyNova.',
    },
    de: {
      tagline: 'Kapitel 000 — Das Erste Signal',
      description: 'Kapitel /000 ist für diejenigen reserviert, die das Ende erreichen. Ein stilles Zeichen, dass du zuerst hier warst.\n\nSchwere 255 GSM (7.5 oz) Baumwolle, architektonischer Boxy-Schnitt – der Ursprungspunkt des HeavenlyNova-Universums.',
    },
    fr: {
      tagline: 'Chapitre 000 — Le Premier Signal',
      description: 'Le Chapitre /000 est réservé à ceux qui vont jusqu’au bout. La marque discrète de votre antériorité.\n\nCoton lourd 255 GSM (7.5 oz), coupe boxy sur mesure — le point d’origine de l’univers HeavenlyNova.',
    },
    es: {
      tagline: 'Capítulo 000 — La Primera Señal',
      description: 'El Capítulo /000 está reservado para quienes llegan al final. Una señal sutil de que estuviste aquí primero.\n\nAlgodón pesado de 255 GSM (7.5 oz), corte boxy característico: el punto de origen del universo HeavenlyNova.',
    },
    it: {
      tagline: 'Capitolo 000 — Il Primo Segnale',
      description: 'Il Capitolo /000 è riservato a chi compie il cammino fino in fondo. Un segnale discreto che eri qui per primo.\n\nCotone pesante da 255 GSM (7.5 oz), taglio boxy personalizzato — il punto di origine dell’universo HeavenlyNova.',
    },
    sv: {
      tagline: 'Kapitel 000 — Den Första Signalen',
      description: 'Kapitel /000 är reserverat för dem som når slutet. En tyst signal om att du var här först.\n\nKraftig 255 GSM (7.5 oz) bomull, boxy passform – utgångspunkten för HeavenlyNova universumet.',
    },
  },

  'soulfull-black': {
    ro: {
      tagline: 'Nu totul trebuie să fie strident pentru a fi simțit. Soulfull este o declarație tăcută — pentru cei care poartă mai mult decât arată.',
      description: '· PIESĂ DE IDENTITATE EMOȚIONALĂ\n· PARTE DIN LINIA HERITAGE\n· CONCEPUT PENTRU INTROSPECȚIE, NU PENTRU ATENȚIE\n\nCreat pentru cei care nu simt nevoia să explice ce simt.\nParte din universul HeavenlyNova.\n\nSoulfull este piesa originală cu care a început totul — fundamentul universului HVN, calm în prezență, puternic în identitate.\n\nCroială grea boxy oversized din bumbac de 255 GSM (7.5 oz), umeri căzuți, print de arhivă de lungă durată.',
    },
    de: {
      tagline: 'Nicht alles muss laut sein, um gefühlt zu werden. Soulfull ist ein stilles Statement – für diejenigen, die mehr in sich tragen, als sie zeigen.',
      description: '· EMOTIONALES IDENTITY PIECE\n· TEIL DER HERITAGE LINIE\n· FÜR INTROSPEKTION GESCHAFFEN\n\nGebaut für alle, die ihr Gefühl nicht erklären müssen.\nTeil des HeavenlyNova Universums.\n\nSoulfull ist das Ursprungsstück – das Fundament des HVN-Universums, ruhig in der Präsenz, stark in der Identität.\n\nSchwere, kastige Oversized-Passform aus 255 GSM (7.5 oz) Baumwolle, überschnittene Schultern, langlebiger Archival-Druck.',
    },
    fr: {
      tagline: 'Tout n’a pas besoin d’être bruyant pour être ressenti. Soulfull est une déclaration silencieuse.',
      description: '· PIÈCE D’IDENTITÉ ÉMOTIONNELLE\n· FAIT PARTIE DE LA LIGNE HERITAGE\n· CONÇU POUR L’INTROSPECTION\n\nCréé pour ceux qui n’ont pas besoin d’expliquer ce qu’ils ressentent.\n\nSoulfull est la pièce originelle — le fondement de l’univers HeavenlyNova.\n\nCoupe boxy oversize lourde en coton 255 GSM (7.5 oz), épaules tombantes, sérigraphie d’archive haute durabilité.',
    },
    es: {
      tagline: 'No todo necesita ser ruidoso para sentirse. Soulfull es una declaración silenciosa.',
      description: '· PIEZA DE IDENTIDAD EMOCIONAL\n· PARTE DE LA LÍNEA HERITAGE\n· DISEÑADO PARA LA INTROSPECCIÓN\n\nCreado para quienes no necesitan explicar lo que sienten.\nParte del universo HeavenlyNova.\n\nCorte boxy oversized de alto gramaje en algodón de 255 GSM (7.5 oz), hombros caídos, estampado de archivo prémium.',
    },
    it: {
      tagline: 'Non tutto deve essere rumoroso per essere sentito. Soulfull è un’affermazione silenziosa.',
      description: '· CAPO D’IDENTITÀ EMOZIONALE\n· PARTE DELLA LINEA HERITAGE\n\nCreato per chi non ha bisogno di spiegare ciò che prova.\nParte dell’universo HeavenlyNova.\n\nFit boxy oversize pesante in cotone 255 GSM (7.5 oz), spalle scese, stampa d’archivio a lunga durata.',
    },
    sv: {
      tagline: 'Allt behöver inte skrika för att kännas. Soulfull är ett tyst statement.',
      description: '· EMOTIONELLT IDENTITETSPLAGG\n· EN DEL AV HERITAGE-LINJEN\n\nSkapad för dem som inte behöver förklara vad de känner.\n\nKraftig boxy oversized passform i 255 GSM bomull, nedhasade axlar, högkvalitativt arkivtryck.',
    },
  },

  'soulfull-white': {
    ro: {
      tagline: 'Aripi de Înger Arhivistice în Lumină. Declarația tăcută, iluminată.',
      description: '· PIESĂ DE IDENTITATE EMOȚIONALĂ\n· PARTE DIN LINIA HERITAGE\n· DESIGN PENTRU INTROSPECȚIE, NU ATENȚIE\n\nConstruit pentru cei care nu simt nevoia să explice ce simt.\nParte din universul HeavenlyNova.\n\nSoulfull pe alb pur — aripile de înger desenate pe spate în tuș negru de arhivă de înaltă densitate, completate de insigna Nova pe piept.\n\nBumbac greu de 255 GSM (7.5 oz), croială boxy oversized cu umeri căzuți, print de durată garantată.',
    },
    de: {
      tagline: 'Archivalische Engelsflügel im Licht. Das stille Statement, illuminiert.',
      description: '· EMOTIONALES IDENTITY PIECE\n· TEIL DER HERITAGE LINIE\n\nSoulfull in reinem Weiß – die Engelsflügel auf dem Rücken in hochdichter Archivtinte, gepaart mit dem dezenten Nova-Brustlogo.\n\nSchwere, kastige Oversized-Passform aus 255 GSM (7.5 oz) Baumwolle, überschnittene Schultern.',
    },
    fr: {
      tagline: 'Ailes d’Ange d’Archive dans la Lumière. La déclaration silencieuse, illuminée.',
      description: '· PIÈCE D’IDENTITÉ ÉMOTIONNELLE\n· FAIT PARTIE DE LA LIGNE HERITAGE\n\nSoulfull en blanc pur — les ailes d’ange au dos imprimées à l’encre noire haute densité d’archive, associées au logo Nova subtil sur la poitrine.\n\nCoton lourd 255 GSM (7.5 oz), coupe boxy oversize avec épaules tombantes.',
    },
    es: {
      tagline: 'Alas de Ángel de Archivo en la Luz. La declaración silenciosa, iluminada.',
      description: '· PIEZA DE IDENTIDAD EMOCIONAL\n· PARTE DE LA LÍNEA HERITAGE\n\nSoulfull en blanco puro: las alas de ángel en la espalda dibujadas con tinta negra de archivo de alta densidad, combinadas con la discreta insignia Nova en el pecho.\n\nAlgodón pesado de 255 GSM (7.5 oz), corte boxy oversized con hombros caídos.',
    },
    it: {
      tagline: 'Ali d’Angelo d’Archivio nella Luce. L’affermazione silenziosa, illuminata.',
      description: '· CAPO D’IDENTITÀ EMOZIONALE\n· PARTE DELLA LINEA HERITAGE\n\nSoulfull in bianco puro — ali d’angelo sul retro impresse con inchiostro d’archivio nero ad alta densità.\n\nCotone pesante da 255 GSM (7.5 oz), taglio boxy oversize con spalle scese.',
    },
    sv: {
      tagline: 'Änglavingar i Ljus. Det tysta budskapet, upplyst.',
      description: '· EMOTIONELLT IDENTITETSPLAGG\n· EN DEL AV HERITAGE-LINJEN\n\nSoulfull i rent vitt – änglavingarna på ryggen i högdensitets arkivbläck.\n\nKraftig 255 GSM bomull, boxy oversized passform.',
    },
  },

  'essentials-black': {
    ro: {
      tagline: 'Fundamentul Umbrei. O piesă pură, arhitecturală, făurită în liniște și adâncime.',
      description: 'Croială boxy oversized cu umeri căzuți și mâneci lejere.\n\nTăiat din bumbac greu 100% de 255 GSM (7.5 oz) — spălat enzimatic pentru o senzație plăcută la atingere și o cădere naturală de negru profund.\n\nInsignă HeavenlyNova minimalistă pe pieptul stâng, guler canelat robust cu cusături duble întărite.\n\nMărime standard pentru o croială lejeră oversized — alege o mărime mai mică pentru o potrivire clasică.',
    },
    de: {
      tagline: 'Das Fundament des Schattens. Ein reines, strukturiertes Essential geschmiedet in Stille und Tiefe.',
      description: 'Kastige Oversized-Passform mit überschnittenen Schultern und entspannten Ärmeln.\n\nAus 100% schwerer 255 GSM (7.5 oz) Baumwolle – gewaschen für weichen Griff und satten schwarzen Fall.\n\nDezente HeavenlyNova-Insignie auf der linken Brust, robuster Rippkragen mit doppelter Nahtverstärkung.\n\nFällt oversized aus – für reguläre Passform eine Größe kleiner wählen.',
    },
    fr: {
      tagline: 'Le Fondement de l’Ombre. Un essentiel architectural façonné dans le silence et la profondeur.',
      description: 'Coupe boxy oversize aux épaules tombantes et manches décontractées.\n\nConfectionné en 100% coton lourd 255 GSM (7.5 oz) — lavé pour un toucher doux et un tombé noir profond naturel.\n\nInsigne discret HeavenlyNova sur la poitrine gauche, col côtelé épais avec coutures doubles renforcées.',
    },
    es: {
      tagline: 'El Fundamento de la Sombra. Una prenda arquitectónica forjada en silencio y profundidad.',
      description: 'Corte boxy oversized con hombros caídos y mangas relajadas.\n\nCortado en 100% algodón pesado de 255 GSM (7.5 oz): lavado para un tacto suave y una caída negra profunda natural.\n\nInsignia sutil de HeavenlyNova en el pecho izquierdo, cuello acanalado grueso con costuras dobles reforzadas.',
    },
    it: {
      tagline: 'Il Fondamento dell’Ombra. Un capo puro e scultoreo forgiato nel silenzio e nella profondità.',
      description: 'Taglio boxy oversize con spalle scese e maniche rilassate.\n\n100% cotone pesante da 255 GSM (7.5 oz) — trattato per un tocco morbido e una caduta impeccabile del nero profondo.',
    },
    sv: {
      tagline: 'Skuggans Grundval. Ett rent, arkitektoniskt basplagg byggt i stillhet och djup.',
      description: 'Boxy oversized passform med nedhasade axlar.\n\n100% kraftig 255 GSM bomull, diskret insignie på bröstet, slitstark ribbad krage.',
    },
  },

  'essentials-white': {
    ro: {
      tagline: 'Fundamentul Luminii. O piesă structurală pură, construită pentru formă, drapaj și prezență de durată.',
      description: 'Croială boxy oversized cu umeri căzuți și mâneci lejere, din bumbac greu 100% de 255 GSM (7.5 oz) — spălat pentru atingere catifelată și o cădere structurală impecabilă.\n\nInsignă HeavenlyNova discretă pe pieptul stâng, guler canelat gros cu cusături duble întărite.\n\nMărime standard pentru croială oversized — alege o mărime mai mică pentru o potrivire clasică.',
    },
    de: {
      tagline: 'Das Fundament des Lichts. Ein reines, strukturiertes Essential für Form, Fall und dauerhafte Präsenz.',
      description: 'Kastige Oversized-Passform mit überschnittenen Schultern und entspannten Ärmeln aus 100% schwerer 255 GSM (7.5 oz) Baumwolle.\n\nMinimales HeavenlyNova-Logo auf der linken Brust, schwerer Rippkragen mit Doppelnähten.',
    },
    fr: {
      tagline: 'Le Fondement de la Lumière. Un essentiel pur pensé pour la structure et la présence.',
      description: 'Coupe boxy oversize aux épaules tombantes, taillée dans un coton lourd 255 GSM (7.5 oz).\n\nInsigne subtil HeavenlyNova sur le torse, col côtelé épais.',
    },
    es: {
      tagline: 'El Fundamento de la Luz. Una prenda estructural pura creada para brindar forma y presencia duradera.',
      description: 'Corte boxy oversized con hombros caídos, cortado en 100% algodón pesado de 255 GSM (7.5 oz).\n\nInsignia minimalista de HeavenlyNova en el pecho izquierdo, cuello acanalado reforzado.',
    },
    it: {
      tagline: 'Il Fondamento della Luce. Un capo essenziale e scultoreo costruito per durare.',
      description: 'Taglio boxy oversize con spalle scese in 100% cotone pesante 255 GSM (7.5 oz).\n\nInsignia HeavenlyNova sul petto sinistro, colletto a costine con doppie cuciture.',
    },
    sv: {
      tagline: 'Ljusets Grundval. Ett rent, strukturellt basplagg byggt för form och närvaro.',
      description: 'Boxy oversized passform i 100% kraftig 255 GSM bomull.\n\nMinimal HeavenlyNova-insignie på bröstet.',
    },
  },

  'broken-001': {
    ro: {
      tagline: 'Nu tot ce se rupe este menit să rămână distrus.',
      description: '· CAPITOLUL /001 — SERIA SERAPHIM\n· CROIALĂ BOXY DIN BUMBAC GREU 255 GSM\n· DESIGN REVERSE ARHIVISTIC\n\nO explorare a frângerii și a reconstrucției. Aripile fracturate desenate pe spate simbolizează transformarea prin suferință — nu degradare, ci renaștere.\n\nBumbac greu de 7.5 oz, cusături duble, finisaj de lux contemporan.',
    },
    de: {
      tagline: 'Nicht alles, was bricht, soll gebrochen bleiben.',
      description: '· KAPITEL /001 — SERAPHIM SERIE\n· 255 GSM SCHWERE BAUMWOLLE\n· ARCHIVALISCHER RÜCKENDRUCK\n\nEine Erkundung von Bruch und Wiederaufbau. Gebrochene Engelsflügel auf dem Rücken als Symbol der Transformation.',
    },
    fr: {
      tagline: 'Tout ce qui se brise n’est pas destiné à rester brisé.',
      description: '· CHAPITRE /001 — SÉRIE SÉRAPHIN\n· COTON LOURD 255 GSM COUPE BOXY\n· MOTIF D’ARCHIVE AU DOS\n\nUne exploration de la fracture et de la reconstruction. Les ailes brisées symbolisent la métamorphose et la renaissance.',
    },
    es: {
      tagline: 'No todo lo que se rompe está destinado a permanecer roto.',
      description: '· CAPÍTULO /001 — SERIE SERAPHIM\n· ALGODÓN PESADO 255 GSM CORTE BOXY\n· DISEÑO DE ARCHIVO EN LA ESPALDA\n\nUna exploración de la fractura y la sanación. Las alas quebradas en la espalda representan la fuerza que nace de la reconstrucción.',
    },
    it: {
      tagline: 'Non tutto ciò che si rompe è destinato a rimanere spezzato.',
      description: '· CAPITOLO /001 — SERIE SERAPHIM\n· COTONE PESANTE 255 GSM FIT BOXY\n\nLe ali fratturate sul retro simboleggiano la trasformazione e la rinascita interiore.',
    },
    sv: {
      tagline: 'Allt som brister är inte menat att förbli trasigt.',
      description: '· KAPITEL /001 — SERAPHIM-SERIEN\n· KRAFTIG 255 GSM BOMULL BOXY PASSFORM\n\nBrutna änglavingar på ryggen som symboliserar återfödelse och styrka.',
    },
  },

  'soulfull-hoodie': {
    ro: {
      tagline: 'Fleece Arhitectural Greu de 350 GSM // Piesă Semnătură',
      description: 'Din primele constelații. Fleece arhitectural de 350 GSM care poartă motivul nostru arhivistic semnătură pe spate, echilibrat de o insignă discretă pe piept.\n\n· Fleece greu 3-End de 350 GSM (10 oz)\n· Față din 100% bumbac pieptănat pentru o textură netedă și print impecabil\n· Glugă structurată în 3 panouri căptușită cu fleece\n· Hardware metalic asortat și cusături duble ranforsate\n· Siluetă streetwear lejeră cu umeri căzuți',
    },
    de: {
      tagline: '350 GSM Schwerer Architektonischer Fleece // Signature Piece',
      description: 'Aus den ersten Konstellationen. 350 GSM (10 oz) schwerer Fleece mit unserer Archiv-Signatur auf dem Rücken.\n\n· 350 GSM Heavyweight 3-End Fleece\n· 100% gekämmte Baumwolloberfläche für gestochen scharfen DTG-Druck\n· Dreiteilige gefütterte Strukturkapuze\n· Kängurutasche und Rippbündchen',
    },
    fr: {
      tagline: 'Molleton Lourd Architectural 350 GSM // Pièce Signature',
      description: 'Issu des premières constellations. Molleton 350 GSM portant notre motif d’archive sur le dos.\n\n· Molleton lourd 3-End 350 GSM (10 oz)\n· Capuche structurée à trois panneaux doublée\n· Finitions doubles coutures et détails métalliques haut de gamme',
    },
    es: {
      tagline: 'Felpa Pesada Arquitectónica de 350 GSM // Pieza Insignia',
      description: 'De las primeras constelaciones. Felpa arquitectónica pesada de 350 GSM con nuestro arte de archivo en la espalda.\n\n· Felpa pesada 3-End de 350 GSM (10 oz)\n· Capucha estructurada de tres paneles con forro polar interior\n· Silueta streetwear relajada con hombros caídos',
    },
    it: {
      tagline: 'Fleece Architetturale Pesante 350 GSM // Capo Iconico',
      description: 'Dalle prime costellazioni. Fleece da 350 GSM con grafica d’archivio sul retro.\n\n· Fleece pesante 3-End da 350 GSM (10 oz)\n· Cappuccio strutturato a tre pannelli',
    },
    sv: {
      tagline: 'Kraftig 350 GSM Arkitektonisk Fleece // Signaturplagg',
      description: 'Från de första konstellationerna. 350 GSM kraftig fleece med vårt arkivtryck på ryggen.\n\n· 350 GSM kraftig 3-End fleece\n· Strukturerad huva med tre paneler',
    },
  },

  'core-hoodie': {
    ro: {
      tagline: 'Fleece Greu 3-End de 340 GSM / 10 oz',
      description: 'Un element de bază relaxat și structural, făurit pentru permanență. Construit cu o față din 100% bumbac pieptănat pentru o textură remarcabilă, glugă structurată în trei panouri și feronerie asortată.\n\n· 10 oz / 340 GSM Heavyweight 3-End Fleece\n· Față din 100% bumbac pieptănat pentru un finisaj curat de arhivă\n· Glugă structurată în trei panouri cu căptușeală din fleece\n· Buzunar cangur și manșete canelate 1x1\n· Pre-shrunk sub 5% pentru un drapaj boxy durabil',
    },
    de: {
      tagline: '10 oz / 340 GSM Schwerer 3-End Fleece',
      description: 'Ein entspanntes, strukturiertes Essential für die Ewigkeit.\n\n· 10 oz / 340 GSM Heavyweight 3-End Fleece\n· 100% gekämmte Baumwoll-Außenseite für cleanen Look\n· Dreiteilige strukturierte Kapuze\n· Kängurutasche und Rippstrickbündchen',
    },
    fr: {
      tagline: 'Molleton Lourd 3-End 340 GSM / 10 oz',
      description: 'Un essentiel structuré et décontracté conçu pour durer.\n\n· Molleton lourd 3-End 340 GSM / 10 oz\n· Capuche structurée à trois panneaux\n· Poche kangourou et poignets côtelés 1x1',
    },
    es: {
      tagline: 'Felpa Pesada 3-End de 340 GSM / 10 oz',
      description: 'Un básico relajado y estructurado forjado para la permanencia.\n\n· Felpa pesada 3-End de 10 oz / 340 GSM\n· Capucha estructurada de tres paneles\n· Bolsillo canguro y puños acanalados 1x1',
    },
    it: {
      tagline: 'Fleece Pesante 3-End da 340 GSM / 10 oz',
      description: 'Un classico strutturato forgiato per durare nel tempo.\n\n· Fleece pesante 3-End da 340 GSM / 10 oz\n· Cappuccio strutturato a tre pannelli',
    },
    sv: {
      tagline: '10 oz / 340 GSM Kraftig 3-End Fleece',
      description: 'Ett avslappnat, strukturerat basplagg byggt för att hålla.\n\n· 10 oz / 340 GSM kraftig fleece\n· Strukturerad huva med tre paneler',
    },
  },

  'core-hoodie-white': {
    ro: {
      tagline: 'Fleece Greu 3-End de 340 GSM / 10 oz pe Alb Impecabil',
      description: 'Un element de bază relaxat și structural pe alb curat. Construit cu o față din 100% bumbac pieptănat pentru o textură remarcabilă, glugă structurată în trei panouri și feronerie asortată.\n\n· 10 oz / 340 GSM Heavyweight 3-End Fleece\n· Glugă structurată în trei panouri cu căptușeală din fleece\n· Buzunar cangur și manșete canelate 1x1\n· Pre-shrunk sub 5% pentru un drapaj boxy durabil',
    },
    de: {
      tagline: '10 oz / 340 GSM Schwerer 3-End Fleece in Reinweiß',
      description: 'Ein entspanntes, strukturiertes Essential in strahlendem Weiß.\n\n· 10 oz / 340 GSM Heavyweight 3-End Fleece\n· Dreiteilige strukturierte Kapuze\n· Kängurutasche und Rippstrickbündchen',
    },
    fr: {
      tagline: 'Molleton Lourd 3-End 340 GSM / 10 oz Blanc Pur',
      description: 'Un essentiel structuré et décontracté en blanc pur.\n\n· Molleton lourd 3-End 340 GSM / 10 oz\n· Capuche structurée à trois panneaux\n· Poche kangourou et poignets côtelés 1x1',
    },
    es: {
      tagline: 'Felpa Pesada 3-End de 340 GSM / 10 oz en Blanco Puro',
      description: 'Un básico relajado y estructurado en blanco puro.\n\n· Felpa pesada 3-End de 10 oz / 340 GSM\n· Capucha estructurada de tres paneles\n· Bolsillo canguro y puños acanalados 1x1',
    },
    it: {
      tagline: 'Fleece Pesante 3-End da 340 GSM / 10 oz Bianco Puro',
      description: 'Un classico strutturato in bianco puro forgiato per durare nel tempo.\n\n· Fleece pesante 3-End da 340 GSM / 10 oz\n· Cappuccio strutturato a tre pannelli',
    },
    sv: {
      tagline: '10 oz / 340 GSM Kraftig 3-End Fleece i Vitt',
      description: 'Ett avslappnat, strukturerat basplagg i rent vitt.\n\n· 10 oz / 340 GSM kraftig fleece\n· Strukturerad huva med tre paneler',
    },
  },
}

export function getLocalizedProduct(
  productId: string,
  lang: Language,
  fallbackTagline?: string,
  fallbackDescription?: string
): { tagline?: string; description?: string } {
  const item = PRODUCT_TRANSLATIONS[productId]?.[lang]
  return {
    tagline: item?.tagline || fallbackTagline,
    description: item?.description || fallbackDescription,
  }
}
