import type { Language } from '../context/LanguageContext'

export interface HeritageTranslation {
  title: string
  subtitle: string
  originLabel: string
  quote: string
  p1: string
  p2: string
  p3: string
  p4: string
  footerNote: string
  archiveLabel: string
  archiveTitle: string
  heritageLine: string
  firstPieces: string
  originExists: string
}

export interface SeraphimTranslation {
  chapter: string
  title: string
  subtitle: string
  tagline: string
  loreLabel: string
  stanzas: string[]
  quote: string
  piecesLabel: string
  piecesSub: string
  taglineRise: string
  originCtaSubtitle: string
  originCtaTitle: string
  originCtaLink: string
}

export interface EssentialsTranslation {
  badge: string
  title: string
  desc: string
}

export interface HomeTranslation {
  hero: {
    luxuryStreetwear: string
    exploreBtn: string
    tagline: string
  }
  soulfull: {
    badge: string
    subtitle: string
    cardSub: string
  }
  essentials: {
    badge: string
    desc: string
    link: string
  }
  heritage: {
    badge: string
    desc: string
    link: string
  }
  seraphim: {
    badge: string
    desc: string
    link: string
  }
  newsletter: {
    badge: string
    title: string
    subtitle: string
    placeholder: string
    btn: string
    success: string
    privacy: string
  }
  originLink: string
}

export interface CollectionsData {
  heritage: HeritageTranslation
  seraphim: SeraphimTranslation
  essentials: EssentialsTranslation
  home: HomeTranslation
}

export const COLLECTION_TRANSLATIONS: Record<Language, CollectionsData> = {
  en: {
    heritage: {
      title: 'Heritage',
      subtitle: 'The First Constellations',
      originLabel: 'Origin',
      quote: 'HeavenlyNova began long before the first product ever existed.',
      p1: 'It emerged from raw, instinctive designs — sparks of light rising through a chaotic world. Playful, introspective, imperfect, yet deeply authentic, these early creations appeared when nothing else did, carrying meaning before the brand had a name.',
      p2: 'They were not artworks. They were signals — fragments of consciousness shaped by shadow and clarity, by struggle and awakening. These first symbols formed a language of their own, arriving naturally, without force or intention, guiding the identity that would follow.',
      p3: 'This is the essence of Heritage: the original expressions that set the foundation, the constellations that marked the beginning. Designs born from truth, not trend; from evolution, not urgency.',
      p4: 'HeavenlyNova continues to grow from that same source — a blend of darkness and starlight, always becoming, always rising.',
      footerNote: 'The collection preserves these first constellations',
      archiveLabel: 'The Archive',
      archiveTitle: 'Heritage Artifacts',
      heritageLine: 'Heritage Line',
      firstPieces: 'The First Pieces',
      originExists: '— THE ORIGIN EXISTS —',
    },
    seraphim: {
      chapter: 'Chapter /001',
      title: 'Seraphim',
      subtitle: 'The First Ascension',
      tagline: 'Where light fractures and something higher begins.',
      loreLabel: 'Lore',
      stanzas: [
        'Before form, there was silence.\nBefore silence, there was light.',
        "And when something in you breaks,\nthat light doesn't disappear.\nIt shifts.",
        'The Seraphim are not above you.\nThey are not beyond you.',
        'They are what appears\nwhen the fracture stops being resistance\nand becomes awareness.',
        'They burn —\nnot to destroy,\nbut to refine.',
        'They do not arrive.\nThey were always there.',
        'Quiet.\nPatient.\nWaiting for you to see.',
        "They rise with you\nthrough what breaks,\ncarrying nothing but clarity\nand what you're ready to release.",
        'SERAPHIM // 001 marks the first ascension —\nthe moment you stop fighting the fracture\nand begin to move through it.',
        'This is not a story of becoming something else.\n\nIt is a story of remembering\nwhat was always there.',
      ],
      quote: 'Ascension is not leaving what broke.\nIt is moving through it.',
      piecesLabel: 'The Collection',
      piecesSub: 'Explore pieces below.',
      taglineRise: 'The Ones Who Rise',
      originCtaSubtitle: 'Every ascension begins with a fracture.',
      originCtaTitle: 'Read the Origin',
      originCtaLink: 'Enter the Origin →',
    },
    essentials: {
      badge: 'Core Collection',
      title: 'Essentials',
      desc: 'Monochrome essentials forged for presence. Precise silhouettes, heavyweight comfort, and a calm intensity built for everyday rituals.',
    },
    home: {
      hero: {
        luxuryStreetwear: 'Luxury Streetwear',
        exploreBtn: 'Explore Collection',
        tagline: 'Luxury streetwear. Minimal silhouettes. Heavyweight feel.',
      },
      soulfull: {
        badge: 'Heritage Collection',
        subtitle: 'Some things are meant to be worn.',
        cardSub: 'Wear what you feel.',
      },
      essentials: {
        badge: 'Core Collection',
        desc: 'Monochrome essentials forged for presence. Precise silhouettes, heavyweight comfort, and a calm intensity built for everyday rituals.',
        link: '→ Explore Core Collection',
      },
      heritage: {
        badge: 'Active Collection',
        desc: 'HeavenlyNova began long before the first product. Born from instinctive designs that appeared like sparks in chaos, these early creations carried meaning before the brand had a name. Heritage preserves those first constellations.',
        link: '→ Read the Full Heritage Story',
      },
      seraphim: {
        badge: 'Flagship Collection // Chapter 001',
        desc: 'Where light fractures and something higher begins. The Seraphim burn not to destroy, but to refine — marking the first ascension through what was broken.',
        link: '→ Explore the Seraphim Ascension',
      },
      newsletter: {
        badge: 'The Universe Has Begun',
        title: 'Chapter /000\nis Live.',
        subtitle: 'Join the ascent for exclusive drops\nand lore fragments.',
        placeholder: 'your@email.com',
        btn: 'Initiate',
        success: 'You are now part of the universe.',
        privacy: 'We respect your privacy. Unsubscribe anytime.',
      },
      originLink: '— THE ORIGIN —',
    },
  },

  ro: {
    heritage: {
      title: 'Heritage',
      subtitle: 'Primele Constelații',
      originLabel: 'Origine',
      quote: 'HeavenlyNova a început cu mult înainte de primul produs creat fizic.',
      p1: 'S-a născut din creații brute, instinctive — scântei de lumină care răzbăteau printr-o lume haotică. Jucăușe, introspective, imperfecte, dar profund autentice, aceste prime piese au apărut când nimic altceva nu exista, purtând un sens înainte ca brandul să aibă un nume.',
      p2: 'Nu erau simple opere de artă. Erau semnale — fragmente de conștiință conturate de umbră și claritate, de luptă și trezire. Aceste prime simboluri au format un limbaj propriu, venind natural, fără forțare sau premeditare, ghidând identitatea ce avea să urmeze.',
      p3: 'Aceasta este esența colecției Heritage: expresiile originale care au pus temelia, constelațiile ce au marcat începutul. Modele născute din adevăr, nu din trend; din evoluție, nu din grabă.',
      p4: 'HeavenlyNova continuă să se dezvolte din aceeași sursă — o îmbinare de întuneric și lumină astrală, mereu în devenire, mereu în ascensiune.',
      footerNote: 'Colecția păstrează aceste prime constelații',
      archiveLabel: 'Arhiva',
      archiveTitle: 'Artefacte Heritage',
      heritageLine: 'Linia Heritage',
      firstPieces: 'Primele Piese',
      originExists: '— ORIGINEA EXISTĂ —',
    },
    seraphim: {
      chapter: 'Capitolul /001',
      title: 'Seraphim',
      subtitle: 'Prima Ascensiune',
      tagline: 'Unde lumina se fracturează și începe ceva superior.',
      loreLabel: 'Lore & Manifest',
      stanzas: [
        'Înainte de formă, a fost tăcerea.\nÎnainte de tăcere, a fost lumina.',
        'Iar când ceva din tine se rupe,\nacea lumină nu dispare.\nEa se metamorfozează.',
        'Serafimii nu sunt deasupra ta.\nNu sunt dincolo de tine.',
        'Ei sunt ceea ce apare\ncând fractura încetează să mai fie rezistență\nși devine conștientizare.',
        'Ei ard —\nnu pentru a distruge,\nci pentru a purifica.',
        'Ei nu sosesc din depărtare.\nAu fost întotdeauna acolo.',
        'Liniștiți.\nRăbdători.\nAșteptând ca tu să vezi.',
        'Se înalță odată cu tine\nprin ceea ce s-a rupt,\npurtând doar claritate\nși ceea ce ești pregătit să eliberezi.',
        'SERAPHIM // 001 marchează prima ascensiune —\nmomentul în care nu mai lupți împotriva fracturii,\nci începi să pășești prin ea.',
        'Aceasta nu este povestea de a deveni altcineva.\n\nEste povestea de a-ți aminti\nceea ce a fost mereu în tine.',
      ],
      quote: 'Ascensiunea nu înseamnă să abandonezi ce s-a frânt.\nÎnseamnă să treci dincolo de el.',
      piecesLabel: 'Colecția',
      piecesSub: 'Explorează piesele de mai jos.',
      taglineRise: 'Cei Care Se Înalță',
      originCtaSubtitle: 'Fiecare ascensiune începe printr-o fractură.',
      originCtaTitle: 'Citește Originea',
      originCtaLink: 'Pășește în Origine →',
    },
    essentials: {
      badge: 'Colecția de Bază',
      title: 'Essentials',
      desc: 'Piese esențiale monocrome făurite pentru o prezență impunătoare. Siluete precise, confort din bumbac greu și o intensitate calmă dedicată ritualurilor zilnice.',
    },
    home: {
      hero: {
        luxuryStreetwear: 'Streetwear de Lux',
        exploreBtn: 'Explorează Colecția',
        tagline: 'Streetwear de lux. Siluete minimaliste. Țesături dense de înaltă ținută.',
      },
      soulfull: {
        badge: 'Colecția Heritage',
        subtitle: 'Unele lucruri sunt create pentru a fi trăite.',
        cardSub: 'Poartă ceea ce simți.',
      },
      essentials: {
        badge: 'Colecția Core',
        desc: 'Piese esențiale monocrome făurite pentru prezență. Siluete precise, confort dens și intensitate calmă pentru ritualul de zi cu zi.',
        link: '→ Descoperă Colecția Core',
      },
      heritage: {
        badge: 'Colecție Activă',
        desc: 'HeavenlyNova a început cu mult înainte de primul produs fizic. Născute din schițe instinctive apărute ca scântei în haos, aceste creații purtau un sens înainte ca brandul să aibă un nume. Heritage păstrează acele prime constelații.',
        link: '→ Citește Întreaga Poveste Heritage',
      },
      seraphim: {
        badge: 'Colecția Flagship // Capitolul 001',
        desc: 'Acolo unde lumina se frânge și începe ascensiunea. Serafimii ard nu pentru a distruge, ci pentru a purifica — marcând prima înălțare prin ceea ce a fost rănit.',
        link: '→ Explorează Ascensiunea Seraphim',
      },
      newsletter: {
        badge: 'Universul a Început',
        title: 'Capitolul /000\nEste Lansat.',
        subtitle: 'Alătură-te ascensiunii pentru lansări exclusive\nși fragmente de univers.',
        placeholder: 'emailul.tau@exemplu.com',
        btn: 'Inițiază',
        success: 'Acum faci parte din univers.',
        privacy: 'Îți respectăm confidențialitatea. Te poți dezabona oricând.',
      },
      originLink: '— ORIGINEA —',
    },
  },

  es: {
    heritage: {
      title: 'Heritage',
      subtitle: 'Las Primeras Constelaciones',
      originLabel: 'Origen',
      quote: 'HeavenlyNova comenzó mucho antes de que existiera el primer producto físico.',
      p1: 'Surgió de diseños crudos e instintivos: chispas de luz que se elevaban a través de un mundo caótico. Lúdicas, introspectivas, imperfectas, pero profundamente auténticas, estas primeras creaciones aparecieron cuando nada más existía, con un propósito antes de que la marca tuviera nombre.',
      p2: 'No eran simples obras. Eran señales: fragmentos de conciencia moldeados por la sombra y la claridad, por la lucha y el despertar. Estos primeros símbolos formaron un lenguaje propio, surgiendo de forma natural, sin imposición, guiando la identidad venidera.',
      p3: 'Esta es la esencia de Heritage: las expresiones originales que establecieron los cimientos, las constelaciones que marcaron el inicio. Diseños nacidos de la verdad, no de la tendencia; de la evolución, no de la urgencia.',
      p4: 'HeavenlyNova sigue expandiéndose desde esa misma fuente: una fusión de oscuridad y luz astral, siempre en devenir, siempre en ascenso.',
      footerNote: 'La colección preserva estas primeras constelaciones',
      archiveLabel: 'El Archivo',
      archiveTitle: 'Artefactos Heritage',
      heritageLine: 'Línea Heritage',
      firstPieces: 'Las Primeras Piezas',
      originExists: '— EL ORIGEN EXISTE —',
    },
    seraphim: {
      chapter: 'Capítulo /001',
      title: 'Seraphim',
      subtitle: 'La Primera Ascensión',
      tagline: 'Donde la luz se fractura y comienza algo superior.',
      loreLabel: 'Lore y Manifiesto',
      stanzas: [
        'Antes de la forma, existió el silencio.\nAntes del silencio, existió la luz.',
        'Y cuando algo en ti se quiebra,\nesa luz no desaparece.\nSe transforma.',
        'Los Serafines no están por encima de ti.\nNo están más allá de ti.',
        'Son aquello que surge\ncuando la fractura deja de ser resistencia\ny se convierte en despertar.',
        'Arden —\nno para destruir,\nsino para purificar.',
        'No llegan desde fuera.\nSiempre estuvieron allí.',
        'Serenos.\nPacientes.\nEsperando a que puedas ver.',
        'Se elevan contigo\na través de lo que se quebró,\nportando solo claridad\ny aquello que estás listo para soltar.',
        'SERAPHIM // 001 marca la primera ascensión:\nel instante en que dejas de luchar contra la herida\ny comienzas a avanzar a través de ella.',
        'Esta no es una historia sobre convertirte en otro.\n\nEs la historia de recordar\nlo que siempre habitó en ti.',
      ],
      quote: 'La ascensión no es huir de lo que se quebró.\nEs atravesarlo.',
      piecesLabel: 'La Colección',
      piecesSub: 'Explora las piezas a continuación.',
      taglineRise: 'Aquellos Que Se Elevan',
      originCtaSubtitle: 'Toda ascensión comienza con una fractura.',
      originCtaTitle: 'Leer el Origen',
      originCtaLink: 'Entrar al Origen →',
    },
    essentials: {
      badge: 'Colección Esencial',
      title: 'Essentials',
      desc: 'Básicos monocromáticos forjados para imponer presencia. Siluetas estructuradas, peso generoso y una calma intensa creada para el ritual cotidiano.',
    },
    home: {
      hero: {
        luxuryStreetwear: 'Streetwear de Lujo',
        exploreBtn: 'Explorar Colección',
        tagline: 'Streetwear de lujo. Siluetas sobrias. Confort de gramaje pesado.',
      },
      soulfull: {
        badge: 'Colección Heritage',
        subtitle: 'Hay prendas creadas para sentirse en la piel.',
        cardSub: 'Viste lo que sientes.',
      },
      essentials: {
        badge: 'Colección Core',
        desc: 'Prendas monocromáticas forjadas para la presencia. Siluetas nítidas, confort denso y una calma serena pensada para cada jornada.',
        link: '→ Explorar Colección Core',
      },
      heritage: {
        badge: 'Colección Activa',
        desc: 'HeavenlyNova comenzó mucho antes del primer producto. Nacidas de trazos instintivos en el caos, estas piezas tempranas guardaban sentido antes de tener un nombre. Heritage resguarda esas primeras constelaciones.',
        link: '→ Leer la Historia Completa de Heritage',
      },
      seraphim: {
        badge: 'Colección Insignia // Capítulo 001',
        desc: 'Donde la luz se quiebra y da paso a algo mayor. Los Serafines arden no para destruir, sino para purificar, señalando el primer ascenso a través de la fractura.',
        link: '→ Explorar la Ascensión Seraphim',
      },
      newsletter: {
        badge: 'El Universo Ha Comenzado',
        title: 'Capítulo /000\nActivo.',
        subtitle: 'Únete al ascenso para acceder a drops exclusivos\ny fragmentos de lore.',
        placeholder: 'tu@correo.com',
        btn: 'Iniciar',
        success: 'Ahora formas parte del universo.',
        privacy: 'Respetamos tu privacidad. Date de baja cuando desees.',
      },
      originLink: '— EL ORIGEN —',
    },
  },

  de: {
    heritage: {
      title: 'Heritage',
      subtitle: 'Die ersten Konstellationen',
      originLabel: 'Ursprung',
      quote: 'HeavenlyNova begann lange bevor das erste physische Produkt existierte.',
      p1: 'Es entstand aus rohen, instinktiven Entwürfen — Lichtfunken, die in einer chaotischen Welt aufstiegen. Verspielt, introspektiv, unvollkommen, aber tief authentisch, erschienen diese ersten Schöpfungen, als sonst nichts da war, und trugen Bedeutung in sich, noch bevor die Marke einen Namen hatte.',
      p2: 'Es waren keine bloßen Kunstwerke. Es waren Signale — Bewusstseinsfragmente, geformt aus Schatten und Klarheit, aus Ringen und Erwachen. Diese ersten Symbole bildeten eine eigene Sprache, die sich natürlich und ohne Zwang entfaltete und die Identität wies.',
      p3: 'Das ist das Wesen von Heritage: die ursprünglichen Entwürfe, die das Fundament legten, die Sternbilder des Anfangs. Kreiert aus Wahrheit, nicht aus Trends; aus Evolution, nicht aus Eile.',
      p4: 'HeavenlyNova schöpft weiterhin aus dieser Quelle — eine Symbiose aus Dunkelheit und Sternenlicht, stets im Werden, stets im Aufstieg.',
      footerNote: 'Die Kollektion bewahrt diese ersten Konstellationen',
      archiveLabel: 'Das Archiv',
      archiveTitle: 'Heritage Artefakte',
      heritageLine: 'Heritage Linie',
      firstPieces: 'Die ersten Stücke',
      originExists: '— DER URSPRUNG EXISTIERT —',
    },
    seraphim: {
      chapter: 'Kapitel /001',
      title: 'Seraphim',
      subtitle: 'Der erste Aufstieg',
      tagline: 'Wo Licht bricht und etwas Höheres beginnt.',
      loreLabel: 'Lore & Mythos',
      stanzas: [
        'Vor der Form war die Stille.\nVor der Stille war das Licht.',
        'Und wenn etwas in dir zerbricht,\nverschwindet dieses Licht nicht.\nEs transformiert sich.',
        'Die Seraphim stehen nicht über dir.\nSie sind nicht unerreichbar.',
        'Sie treten hervor,\nwenn der Bruch aufhört, Widerstand zu sein,\nund zu Erkenntnis wird.',
        'Sie brennen —\nnicht um zu zerstören,\nsondern um zu veredeln.',
        'Sie erscheinen nicht von außen.\nSie waren schon immer da.',
        'Ruhig.\nGeduldig.\nDarauf wartend, dass du sie siehst.',
        'Sie steigen mit dir auf\ndurch das, was zerbrach,\ntragen nichts als Klarheit\nund das, was du bereit bist loszulassen.',
        'SERAPHIM // 001 markiert den ersten Aufstieg —\nden Moment, in dem du aufhörst gegen den Bruch zu kämpfen\nund beginnst, durch ihn hindurchzugehen.',
        'Dies ist keine Geschichte über das Werden von jemand anderem.\n\nEs ist die Geschichte der Erinnerung\nan das, was schon immer da war.',
      ],
      quote: 'Aufstieg bedeutet nicht, das Zerbrochene zu meiden.\nEs bedeutet, hindurchzuschreiten.',
      piecesLabel: 'Die Kollektion',
      piecesSub: 'Entdecke die Stücke unten.',
      taglineRise: 'Diejenigen, die aufsteigen',
      originCtaSubtitle: 'Jeder Aufstieg beginnt mit einem Bruch.',
      originCtaTitle: 'Lies den Ursprung',
      originCtaLink: 'Betritt den Ursprung →',
    },
    essentials: {
      badge: 'Core Kollektion',
      title: 'Essentials',
      desc: 'Monochrome Essentials für pure Präsenz. Präzise Schnitte, schwerer Baumwollkomfort und eine ruhige Intensität für tägliche Rituale.',
    },
    home: {
      hero: {
        luxuryStreetwear: 'Luxus Streetwear',
        exploreBtn: 'Kollektion Entdecken',
        tagline: 'Luxus Streetwear. Minimale Silhouetten. Schweres Tragegefühl.',
      },
      soulfull: {
        badge: 'Heritage Kollektion',
        subtitle: 'Manche Stücke sind geschaffen, um gefühlt zu werden.',
        cardSub: 'Trage, was du fühlst.',
      },
      essentials: {
        badge: 'Core Kollektion',
        desc: 'Monochrome Essentials für souveräne Präsenz. Klare Silhouetten, schwerer Komfort und dezente Intensität für den Alltag.',
        link: '→ Core Kollektion Entdecken',
      },
      heritage: {
        badge: 'Aktive Kollektion',
        desc: 'HeavenlyNova begann lange vor dem ersten Produkt. Entstanden aus instinktiven Entwürfen inmitten des Chaos, trugen diese frühen Kreationen Sinn, bevor die Marke einen Namen trug. Heritage bewahrt diese ersten Sternbilder.',
        link: '→ Die ganze Heritage Story lesen',
      },
      seraphim: {
        badge: 'Flaggschiff Kollektion // Kapitel 001',
        desc: 'Wo Licht sich bricht und der Aufstieg einsetzt. Die Seraphim brennen nicht um zu vernichten, sondern um zu läutern — der erste Aufstieg durch das Zerbrochene.',
        link: '→ Den Seraphim Aufstieg Entdecken',
      },
      newsletter: {
        badge: 'Das Universum Hat Begonnen',
        title: 'Kapitel /000\nist Live.',
        subtitle: 'Werde Teil des Aufstiegs für exklusive Drops\nund geheime Lore-Fragmente.',
        placeholder: 'deine@email.de',
        btn: 'Initialisieren',
        success: 'Du bist nun Teil des Universums.',
        privacy: 'Wir respektieren deine Privatsphäre. Jederzeit abbestellbar.',
      },
      originLink: '— DER URSPRUNG —',
    },
  },

  fr: {
    heritage: {
      title: 'Heritage',
      subtitle: 'Les Premières Constellations',
      originLabel: 'Origine',
      quote: "HeavenlyNova a commencé bien avant l'apparition de la première création matérielle.",
      p1: "C'est né d'esquisses brutes et instinctives — des éclats de lumière émergeant d'un monde chaotique. Introspectives, imparfaites, mais profondément authentiques, ces premières pièces ont surgi lorsque rien d'autre n'existait, incarnant un sens avant même que la marque n'ait un nom.",
      p2: "Ce n'étaient pas de simples œuvres. C'étaient des signaux — des fragments de conscience façonnés par l'ombre et la clarté, par la lutte et l'éveil. Ces premiers symboles ont créé leur propre langage, guidant naturellement l'identité future.",
      p3: "Telle est l'essence d'Heritage : les expressions fondatrices, les constellations marquant l'aube. Des créations nées de la vérité, loin des modes éphémères ; de l'évolution, loin de l'urgence.",
      p4: "HeavenlyNova continue d'émerger de cette même source — une fusion de ténèbres et d'éclat stellaire, en constante élévation.",
      footerNote: 'La collection préserve ces premières constellations',
      archiveLabel: "L'Archive",
      archiveTitle: 'Artefacts Heritage',
      heritageLine: 'Ligne Heritage',
      firstPieces: 'Les Premières Pièces',
      originExists: "— L'ORIGINE EXISTE —",
    },
    seraphim: {
      chapter: 'Chapitre /001',
      title: 'Seraphim',
      subtitle: 'La Première Ascension',
      tagline: 'Où la lumière se fracture et ouvre la voie vers le sublime.',
      loreLabel: 'Lore & Mythe',
      stanzas: [
        'Avant la forme, régnait le silence.\nAvant le silence, vibrait la lumière.',
        'Et quand une part de toi se brise,\ncette lumière ne disparaît point.\nElle se transmute.',
        'Les Séraphins ne te dominent pas.\nIls ne sont pas hors de portée.',
        "Ils se manifestent\nlorsque la blessure cesse d'être résistance\net devient conscience.",
        'Ils brûlent —\nnon pour anéantir,\nmais pour épurer.',
        "Ils ne viennent pas d'ailleurs.\nIls ont toujours été présents.",
        "Silencieux.\nPatients.\nAttendant que ton regard s'ouvre.",
        "Ils s'élèvent avec toi\nà travers ce qui s'est brisé,\nne portant que la clarté\net ce que tu consens à libérer.",
        "SERAPHIM // 001 marque la première ascension —\nl'instant où tu cesses de lutter contre la blessure\npour la traverser avec grâce.",
        "Il ne s'agit pas de devenir un autre.\n\nIl s'agit de te remémorer\nce qui a toujours résidé en toi.",
      ],
      quote: "L'ascension ne consiste pas à fuir la fracture.\nElle consiste à la transcender.",
      piecesLabel: 'La Collection',
      piecesSub: 'Découvrez les pièces ci-dessous.',
      taglineRise: 'Ceux Qui S’Élèvent',
      originCtaSubtitle: 'Chaque élévation commence par une fracture.',
      originCtaTitle: "Lire l'Origine",
      originCtaLink: "Pénétrer l'Origine →",
    },
    essentials: {
      badge: 'Collection Essentielle',
      title: 'Essentials',
      desc: 'Pièces maîtresses monochromes taillées pour la prestance. Silhouettes architecturales, densité du coton lourd et sérénité affirmée au quotidien.',
    },
    home: {
      hero: {
        luxuryStreetwear: 'Streetwear de Luxe',
        exploreBtn: 'Explorer la Collection',
        tagline: 'Streetwear de luxe. Lignes minimales. Coton lourd texturé.',
      },
      soulfull: {
        badge: 'Collection Heritage',
        subtitle: 'Certaines créations sont faites pour être vécues.',
        cardSub: 'Portez ce que vous ressentez.',
      },
      essentials: {
        badge: 'Collection Core',
        desc: 'Essentiels monochromes conçus pour une prestance sobre. Coupes affûtées, coton lourd et force tranquille pour vos rituels quotidiens.',
        link: '→ Découvrir la Collection Core',
      },
      heritage: {
        badge: 'Collection Active',
        desc: "HeavenlyNova est née bien avant son premier vêtement. Nées de fulgurances instinctives dans le tumulte, ces premières pièces portaient un message avant même d'avoir un nom. Heritage perpétue ces constellations d'origine.",
        link: "→ Découvrir l'Histoire Complète d'Heritage",
      },
      seraphim: {
        badge: 'Collection Phare // Chapitre 001',
        desc: "Là où la lumière se diffracte et l'élévation s'amorce. Les Séraphins consument sans détruire, purifiant chaque fracture pour révéler la première ascension.",
        link: "→ Explorer l'Ascension Seraphim",
      },
      newsletter: {
        badge: "L'Univers a Commencé",
        title: 'Chapitre /000\nest Disponible.',
        subtitle: "Prenez part à l'ascension pour des éditions limitées\net des fragments exclusifs.",
        placeholder: 'votre@email.fr',
        btn: 'Initier',
        success: "Vous faites désormais partie de l'univers.",
        privacy: 'Confidentialité absolue. Désinscription à tout moment.',
      },
      originLink: "— L'ORIGINE —",
    },
  },

  it: {
    heritage: {
      title: 'Heritage',
      subtitle: 'Le Prime Costellazioni',
      originLabel: 'Origine',
      quote: 'HeavenlyNova è iniziata molto prima che esistesse il primo prodotto fisico.',
      p1: 'È scaturita da disegni grezzi e istintivi: scintille di luce che fendevano un mondo caotico. Introspettive, imperfette ma profondamente autentiche, queste prime creazioni sono apparse quando non c’era nient’altro, cariche di significato prima ancora che il brand avesse un nome.',
      p2: 'Non erano mere opere. Erano segnali: frammenti di coscienza plasmati dall’ombra e dalla chiarezza, dalla prova e dal risveglio. Questi primi simboli hanno forgiato un loro linguaggio autentico, guidando l’identità a venire.',
      p3: 'Questa è l’anima di Heritage: le espressioni originali che hanno gettato le fondamenta, le costellazioni che hanno segnato l’alba. Capi nati dalla verità, non dalle mode; dall’evoluzione, non dalla fretta.',
      p4: 'HeavenlyNova continua a nutrirsi della stessa sorgente: un’armonia di oscurità e luce siderale, sempre in divenire, sempre in ascesa.',
      footerNote: 'La collezione custodisce queste prime costellazioni',
      archiveLabel: "L'Archivio",
      archiveTitle: 'Manufatti Heritage',
      heritageLine: 'Linea Heritage',
      firstPieces: 'I Primi Capi',
      originExists: '— L’ORIGINE ESISTE —',
    },
    seraphim: {
      chapter: 'Capitolo /001',
      title: 'Seraphim',
      subtitle: 'La Prima Ascensione',
      tagline: 'Dove la luce si infrange e ha inizio una dimensione superiore.',
      loreLabel: 'Lore & Manifesto',
      stanzas: [
        'Prima della forma, vi era il silenzio.\nPrima del silenzio, dimorava la luce.',
        'E quando qualcosa in te si infrange,\nquella luce non muore.\nTrascende.',
        'I Serafini non sono al di sopra di te.\nNon sono irraggiungibili.',
        'Sono ciò che si manifesta\nquando la frattura cessa di essere attrito\ne diviene consapevolezza.',
        'Ardono —\nnon per consumare,\nma per purificare.',
        'Non provengono da fuori.\nSono sempre stati qui.',
        'Placidi.\nPazienti.\nIn attesa che tu possa comprendere.',
        'Si ergono con te\nattraverso ciò che si è spezzato,\nrecando solo limpidezza\ne ciò che sei pronto a lasciare andare.',
        'SERAPHIM // 001 consacra la prima ascensione —\nil momento in cui smetti di respingere la cicatrice\ne cominci ad attraversarla.',
        'Questa non è la storia di diventare qualcun altro.\n\nÈ la riscoperta di ciò\nche è sempre stato dentro di te.',
      ],
      quote: 'L’ascensione non è fuggire dal dolore.\nÈ procedere attraverso di esso.',
      piecesLabel: 'La Collezione',
      piecesSub: 'Esplora i capi sottostanti.',
      taglineRise: 'Coloro Che Si Elevano',
      originCtaSubtitle: 'Ogni ascensione ha inizio da una frattura.',
      originCtaTitle: 'Leggi l’Origine',
      originCtaLink: 'Entra nell’Origine →',
    },
    essentials: {
      badge: 'Collezione Core',
      title: 'Essentials',
      desc: 'Capi essenziali monocromatici concepiti per distinguersi con autorevolezza. Tagli geometrici, grammatura consistente e una calma magnetica da indossare ogni giorno.',
    },
    home: {
      hero: {
        luxuryStreetwear: 'Streetwear di Lusso',
        exploreBtn: 'Esplora la Collezione',
        tagline: 'Streetwear d’alta gamma. Silhouette essenziali. Tessuti corposi e strutturati.',
      },
      soulfull: {
        badge: 'Collezione Heritage',
        subtitle: 'Alcuni capi nascono per essere sentiti sulla pelle.',
        cardSub: 'Indossa ciò che provi.',
      },
      essentials: {
        badge: 'Collezione Core',
        desc: 'Essenziali monocromatici per una presenza inconfondibile. Tagli netti, comfort ad alto peso e una calma profonda per la quotidianità.',
        link: '→ Scopri la Collezione Core',
      },
      heritage: {
        badge: 'Collezione Attiva',
        desc: 'HeavenlyNova ha preso vita ben prima del primo capo cucito. Nate da lampi d’istinto nel caos, queste creazioni avevano un’anima prima ancora che il brand avesse un nome. Heritage serba intatte quelle prime costellazioni.',
        link: '→ Leggi la Storia Completa di Heritage',
      },
      seraphim: {
        badge: 'Collezione Flagship // Capitolo 001',
        desc: 'Dove la luce si frange e comincia l’ascesa. I Serafini bruciano non per abbattere, ma per forgiare — segnando la prima rinascita attraverso le ferite.',
        link: '→ Esplora l’Ascensione Seraphim',
      },
      newsletter: {
        badge: 'L’Universo è Iniziato',
        title: 'Capitolo /000\nè Online.',
        subtitle: 'Unisciti all’ascesa per accedere a drop riservati\ne frammenti narrativi.',
        placeholder: 'tua@email.it',
        btn: 'Inizia',
        success: 'Ora fai parte dell’universo.',
        privacy: 'Rispettiamo la tua privacy. Cancellati in qualsiasi momento.',
      },
      originLink: '— L’ORIGINE —',
    },
  },

  sv: {
    heritage: {
      title: 'Heritage',
      subtitle: 'De Första Konstellationerna',
      originLabel: 'Ursprung',
      quote: 'HeavenlyNova började långt innan det första fysiska plagget skapades.',
      p1: 'Det växte fram ur råa, instinktiva mönster — ljusglimtar som trängde igenom en kaotisk tillvaro. Eftertänksamma, ofullkomliga men genuint autentiska, uppenbarade sig dessa tidiga skapelser när inget annat fanns och bar mening innan varumärket ens hade ett namn.',
      p2: 'De var inte bara konstverk. De var signaler — fragment av medvetande formade av skuggor och klarhet, av kamp och uppvaknande. Dessa första symboler skapade sitt eget språk och banade väg för den framtida identiteten.',
      p3: 'Detta är kärnan i Heritage: de ursprungliga uttrycken som lade grunden, stjärnbilderna som markerade begynnelsen. Plagg skapade ur sanning, inte trender; ur utveckling, inte brådska.',
      p4: 'HeavenlyNova fortsätter att växa ur samma källa — en fusion av mörker och stjärnljus, ständigt på väg uppåt.',
      footerNote: 'Kollektionen bevarar dessa första konstellationer',
      archiveLabel: 'Arkivet',
      archiveTitle: 'Heritage Artefakter',
      heritageLine: 'Heritage Linje',
      firstPieces: 'De Första Plaggen',
      originExists: '— URSPRUNGET EXISTERAR —',
    },
    seraphim: {
      chapter: 'Kapitel /001',
      title: 'Seraphim',
      subtitle: 'Den Första Upphöjelsen',
      tagline: 'Där ljuset bryts och något högre tar vid.',
      loreLabel: 'Lore & Mytologi',
      stanzas: [
        'Före formen rådde stillhet.\nFöre stillheten fanns ljuset.',
        'Och när något inom dig brister,\nförsvinner inte det ljuset.\nDet transformeras.',
        'Seraferna står inte över dig.\nDe är inte utom räckhåll.',
        'De är vad som framträder\nnär såret slutar vara motstånd\noch blir till insikt.',
        'De brinner —\ninte för att förgöra,\nutan för att förädla.',
        'De anländer inte utifrån.\nDe fanns alltid där.',
        'Stilla.\nTålmodiga.\nVäntande på att du ska se.',
        'De reser sig med dig\ngenom det som brustit,\nbärande ren klarhet\noch det du är redo att släppa taget om.',
        'SERAPHIM // 001 markerar den första upphöjelsen —\nögonblicket då du slutar bekämpa såret\noch börjar vandra rakt igenom det.',
        'Detta är inte en berättelse om att bli någon annan.\n\nDet är berättelsen om att minnas\ndet som alltid har funnits där.',
      ],
      quote: 'Upphöjelse handlar inte om att fly det som brast.\nDet handlar om att gå igenom det.',
      piecesLabel: 'Kollektionen',
      piecesSub: 'Utforska plaggen nedan.',
      taglineRise: 'De Som Reser Sig',
      originCtaSubtitle: 'Varje upphöjelse börjar med en bristning.',
      originCtaTitle: 'Läs Ursprunget',
      originCtaLink: 'Träd in i Ursprunget →',
    },
    essentials: {
      badge: 'Core Kollektion',
      title: 'Essentials',
      desc: 'Monokroma basplagg smidda för karaktär och närvaro. Rena snitt, tungviktskomfort och en lågmäld intensitet för dagliga rutiner.',
    },
    home: {
      hero: {
        luxuryStreetwear: 'Lyx Streetwear',
        exploreBtn: 'Utforska Kollektionen',
        tagline: 'Lyx streetwear. Minimalistiska silhuetter. Tung kvalitetskänsla.',
      },
      soulfull: {
        badge: 'Heritage Kollektion',
        subtitle: 'Vissa plagg är skapade för att kännas på djupet.',
        cardSub: 'Bär vad du känner.',
      },
      essentials: {
        badge: 'Core Kollektion',
        desc: 'Monokroma basplagg skapade för närvaro. Distinkta silhuetter, tungviktskomfort och ett lugnt fokus i vardagen.',
        link: '→ Utforska Core Kollektionen',
      },
      heritage: {
        badge: 'Aktiv Kollektion',
        desc: 'HeavenlyNova föddes långt innan det första plagget fanns. Ur instinktiva mönster formade i kaos bar dessa tidiga skapelser mening innan märket hade ett namn. Heritage bevarar dessa första stjärnbilder.',
        link: '→ Läs Hela Heritage Berättelsen',
      },
      seraphim: {
        badge: 'Flaggskeppskollektion // Kapitel 001',
        desc: 'Där ljuset bryts och upphöjelsen börjar. Seraferna brinner inte för att förstöra, utan för att förädla — den första upphöjelsen genom det som brustit.',
        link: '→ Utforska Seraphim Upphöjelsen',
      },
      newsletter: {
        badge: 'Universumet Har Börjat',
        title: 'Kapitel /000\nÄr Live.',
        subtitle: 'Följ med på resan för exklusiva släpp\noch mytologiska fragment.',
        placeholder: 'din@epost.se',
        btn: 'Initiera',
        success: 'Du är nu en del av universumet.',
        privacy: 'Vi respekterar din integritet. Avsluta prenumeration när du vill.',
      },
      originLink: '— URSPRUNGET —',
    },
  },
}
