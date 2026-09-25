import type { Language } from '../context/LanguageContext'

export interface StoryTranslation {
  headerTitle: string
  originLabel: string
  introQuote: string
  para1: string
  para2: string
  para3: string
  chapterTitle: string
  chapterPara1: string
  chapterPara2: string
  chapterPara3: string
  chapterPara4: string
  signalLabel: string
  signalPara1: string
  signalPara2: string
  signalPara3: string
  signalFooter: string
  exclusiveSymbol: string
  exclusiveLabel: string
  exclusivePieceTitle: string
  exclusiveSeek: string
  exclusiveDesc: string
  claimBtn: string
}

export const STORY_TRANSLATIONS: Record<Language, StoryTranslation> = {
  en: {
    headerTitle: 'Between \nLight & Shadow',
    originLabel: 'The Origin Story',
    introQuote: 'Our story began in the stars, with a love so immense it brought a wounded dragon and a luminous angel together.',
    para1: "This wasn't a fight, but a beautiful, volatile dance of healing—a collision of light and shadow that birthed a new star: the HeavenlyNova.",
    para2: 'This is our inspiration. We take the threads of this cosmic union and weave them into designs that are both powerful and delicate. We believe that true strength lies in the balance between the rough and the refined, the darkness and the light.',
    para3: 'Each piece we create is an artifact of this union—forged for those who embrace their own shadows as much as their light.',
    chapterTitle: 'Chapter /000 — Origin Protocol',
    chapterPara1: 'Before the first drop, before the first stitch, there was a signal. Chapter /000 is not a product — it is a protocol. The moment that precedes everything: the instant before the collision, when light and shadow recognized each other for the first time and understood they were not opposites, but complements.',
    chapterPara2: 'The Origin Protocol marks the beginning of a language that HeavenlyNova speaks through fabric, weight, and design. It is not about what you wear. It is about what you carry — the fractures, the clarity, the quiet knowing that something in you has always been reaching toward the light.',
    chapterPara3: 'Those who find Chapter /000 are not looking for streetwear. They are looking for a signal that they are not alone in the void. This is that signal. The First Light. The original frequency from which everything else radiates.',
    chapterPara4: 'HeavenlyNova was built from this origin — raw, instinctive, and unapologetically present. Every piece that follows carries a fragment of this first moment, encoded in heavyweight cotton and quiet design.',
    signalLabel: 'The First Signal',
    signalPara1: 'Chapter /000 exists at the intersection of personal mythology and physical craft. It is the story of becoming something through the act of creating — of finding that the universe responds not to force, but to presence.',
    signalPara2: 'The wounded dragon and the luminous angel: two forces that, in their collision, produced not destruction but a new kind of light. A HeavenlyNova — a star born from the energy of two worlds merging.',
    signalPara3: 'This is why every piece we make is built to last. Not as a trend, but as an artifact. A quiet marker of a moment when something shifted — when you decided to carry the light instead of waiting for it to arrive.',
    signalFooter: 'Chapter /000 — The First Signal — Origin Protocol',
    exclusiveSymbol: 'Those who reach the end carry the first symbol.',
    exclusiveLabel: 'Exclusive Item',
    exclusivePieceTitle: 'THE ORIGIN PIECE',
    exclusiveSeek: 'Available only to those who seek.',
    exclusiveDesc: 'Origin Tee — Chapter 000 is reserved for those who reach the end. A quiet signal that you were here first.',
    claimBtn: 'Claim Design',
  },

  ro: {
    headerTitle: 'Între \nLumină & Umbră',
    originLabel: 'Povestea Originii',
    introQuote: 'Povestea noastră a început în stele, dintr-o conexiune atât de profundă încât a adus laolaltă un dragon rănit și un înger luminos.',
    para1: 'Nu a fost o luptă, ci un dans volatil și sublim al vindecării — o coliziune între lumină și întuneric care a dat naștere unei noi stele: HeavenlyNova.',
    para2: 'Aceasta este sursa noastră de creație. Preluăm firele acestei uniuni cosmice și le transpunem în piese vestimentare puternice și rafinate deopotrivă. Adevărata forță stă în echilibrul dintre brut și finisat, dintre umbră și claritate.',
    para3: 'Fiecare piesă pe care o creăm este un artefact al acestei uniuni — făurită pentru cei care își îmbrățișează propriile umbre la fel de demn ca propria lumină.',
    chapterTitle: 'Capitolul /000 — Protocolul Originii',
    chapterPara1: 'Înainte de primul drop, înainte de prima cusătură, a existat un semnal. Capitolul /000 nu este un simplu produs — este un protocol. Momentul primordial: clipa dinaintea coliziunii, când lumina și umbra s-au recunoscut pentru prima dată și au înțeles că nu sunt forțe opuse, ci complementare.',
    chapterPara2: 'Protocolul Originii marchează începutul unui limbaj pe care HeavenlyNova îl exprimă prin densitatea bumbacului, greutate și tăietură arhitecturală. Nu este vorba doar despre ceea ce porți. Este despre ceea ce porți în tine — cicatricile, claritatea și convingerea că ceva din tine caută neîncetat lumina.',
    chapterPara3: 'Cei care descoperă Capitolul /000 nu caută haine de serie. Caută un semnal că nu sunt singuri în vid. Acesta este acel semnal. Prima Lumină. Frecvența primordială din care radiază tot restul universului nostru.',
    chapterPara4: 'HeavenlyNova a fost clădit pe această origine — brută, instinctivă și profund asumată. Fiecare piesă care urmează poartă o fărâmă din acest prim moment, impregnată în bumbac greu de 255 GSM și design atemporal.',
    signalLabel: 'Primul Semnal',
    signalPara1: 'Capitolul /000 există la intersecția dintre mitologie personală și meșteșug textil autentic. Este călătoria devenirii prin actul creației — revelația că universul nu răspunde la forță brută, ci la prezență.',
    signalPara2: 'Dragonul rănit și îngerul de lumină: două energii care, în contopirea lor, nu au produs distrugere, ci o nouă formă de lumină. Un HeavenlyNova — o stea născută din fuziunea a două lumi.',
    signalPara3: 'De aceea, fiecare piesă este creată pentru permanență. Nu ca o modă trecătoare, ci ca un artefact de colecție. O mărturie tăcută a momentului în care ai ales să fii tu lumina, în loc să aștepți să apară din exterior.',
    signalFooter: 'Capitolul /000 — Primul Semnal — Protocolul Originii',
    exclusiveSymbol: 'Cei care ajung până la capăt poartă primul simbol.',
    exclusiveLabel: 'Piesă Exclusivă',
    exclusivePieceTitle: 'THE ORIGIN PIECE',
    exclusiveSeek: 'Disponibil doar pentru cei care știu să caute.',
    exclusiveDesc: 'Origin Tee — Capitolul 000 este rezervat celor care ajung la capătul drumului. Un semnal discret că ai fost aici primul.',
    claimBtn: 'Revendică Piesa',
  },

  de: {
    headerTitle: 'Zwischen \nLicht & Schatten',
    originLabel: 'Die Ursprungsgeschichte',
    introQuote: 'Unsere Geschichte begann in den Sternen, mit einer so tiefen Verbundenheit, dass sie einen verwundeten Drachen und einen leuchtenden Engel zusammenbrachte.',
    para1: 'Es war kein Kampf, sondern ein wunderschöner, flüchtiger Tanz der Heilung – eine Kollision aus Licht und Schatten, die einen neuen Stern hervorbrachte: HeavenlyNova.',
    para2: 'Das ist unsere Inspiration. Wir greifen die Fäden dieser kosmischen Vereinigung auf und weben sie in Entwürfe, die kraftvoll und präzise zugleich sind. Wir glauben, dass wahre Stärke im Gleichgewicht zwischen dem Rohen und dem Veredelten liegt.',
    para3: 'Jedes Stück, das wir erschaffen, ist ein Artefakt dieser Vereinigung – geschmiedet für diejenigen, die ihre eigenen Schatten genauso annehmen wie ihr Licht.',
    chapterTitle: 'Kapitel /000 — Ursprungsprotokoll',
    chapterPara1: 'Vor dem ersten Drop, vor dem ersten Stich gab es ein Signal. Kapitel /000 ist kein gewöhnliches Produkt – es ist ein Protokoll. Der Moment vor der Kollision, in dem Licht und Schatten erkannten, dass sie keine Gegensätze, sondern Ergänzungen sind.',
    chapterPara2: 'Das Ursprungsprotokoll markiert den Beginn einer Sprache, die HeavenlyNova durch schwere Stoffe, Haptik und architektonische Schnitte spricht. Es geht darum, was du in dir trägst – Klarheit, Tiefe und die stille Gewissheit des Lichts.',
    chapterPara3: 'Wer Kapitel /000 findet, sucht keine gewöhnliche Streetwear. Er sucht ein Signal, nicht allein in der Leere zu sein. Dies ist das Erste Licht.',
    chapterPara4: 'HeavenlyNova entstand aus diesem Ursprung – roh, instinktiv und kompromisslos präsent. Jedes nachfolgende Stück trägt ein Fragment dieses Moments in sich.',
    signalLabel: 'Das Erste Signal',
    signalPara1: 'Kapitel /000 existiert an der Schnittstelle von persönlicher Mythologie und physischer Handwerkskunst. Das Universum antwortet nicht auf Zwang, sondern auf Präsenz.',
    signalPara2: 'Der verwundete Drache und der leuchtende Engel: zwei Kräfte, deren Verschmelzung ein neues Licht erzeugte. Ein HeavenlyNova – ein Stern, geboren aus zwei Welten.',
    signalPara3: 'Deshalb ist jedes unserer Stücke für Beständigkeit gebaut. Nicht als Trend, sondern als Artefakt.',
    signalFooter: 'Kapitel /000 — Das Erste Signal — Ursprungsprotokoll',
    exclusiveSymbol: 'Wer das Ende erreicht, trägt das erste Symbol.',
    exclusiveLabel: 'Exklusives Stück',
    exclusivePieceTitle: 'THE ORIGIN PIECE',
    exclusiveSeek: 'Nur für diejenigen verfügbar, die wirklich suchen.',
    exclusiveDesc: 'Origin Tee — Kapitel 000 ist für diejenigen reserviert, die das Ziel erreichen. Ein stilles Signal, dass du zuerst hier warst.',
    claimBtn: 'Design sichern',
  },

  fr: {
    headerTitle: 'Entre \nLumière & Ombre',
    originLabel: 'L’Histoire des Origines',
    introQuote: 'Notre histoire a commencé dans les étoiles, avec un amour si immense qu’il a réuni un dragon blessé et un ange lumineux.',
    para1: 'Ce n’était pas un combat, mais une danse de guérison sublime et volatile — une collision d’ombre et de lumière qui a donné naissance à une nouvelle étoile : HeavenlyNova.',
    para2: 'C’est notre source d’inspiration. Nous tissons les fils de cette union cosmique dans des pièces à la fois puissantes et raffinées. La vraie force réside dans l’équilibre entre le brut et le précieux.',
    para3: 'Chaque pièce que nous créons est un artefact de cette union — façonnée pour ceux qui embrassent leurs ombres autant que leur lumière.',
    chapterTitle: 'Chapitre /000 — Protocole d’Origine',
    chapterPara1: 'Avant le premier drop, avant le premier point de couture, il y avait un signal. Le Chapitre /000 n’est pas un simple vêtement — c’est un protocole. L’instant avant la collision où la lumière et l’ombre ont compris qu’elles étaient complémentaires.',
    chapterPara2: 'Le Protocole d’Origine marque le début du langage qu’HeavenlyNova exprime à travers la matière, la densité du coton et une coupe architecturale lourde.',
    chapterPara3: 'Ceux qui découvrent le Chapitre /000 cherchent un signal dans le vide. C’est la Première Lumière. La fréquence originelle.',
    chapterPara4: 'HeavenlyNova a été forgé à partir de cette origine — brute, instinctive et résolument présente.',
    signalLabel: 'Le Premier Signal',
    signalPara1: 'Le Chapitre /000 existe à la croisée du mythe personnel et du savoir-faire textile de luxe.',
    signalPara2: 'Le dragon blessé et l’ange de lumière : deux forces qui, en fusionnant, ont donné naissance à une nouvelle étoile.',
    signalPara3: 'C’est pourquoi chaque pièce est conçue pour durer. Non pas comme une mode éphémère, mais comme un artefact intemporel.',
    signalFooter: 'Chapitre /000 — Le Premier Signal — Protocole d’Origine',
    exclusiveSymbol: 'Ceux qui atteignent la fin portent le premier symbole.',
    exclusiveLabel: 'Pièce Exclusive',
    exclusivePieceTitle: 'THE ORIGIN PIECE',
    exclusiveSeek: 'Disponible uniquement pour ceux qui cherchent.',
    exclusiveDesc: 'Origin Tee — Le Chapitre 000 est réservé à ceux qui vont jusqu’au bout. La marque discrète de votre antériorité.',
    claimBtn: 'Acquérir la Pièce',
  },

  es: {
    headerTitle: 'Entre \nLuz & Sombra',
    originLabel: 'La Historia del Origen',
    introQuote: 'Nuestra historia comenzó en las estrellas, con una unión tan inmensa que reunió a un dragón herido y a un ángel luminoso.',
    para1: 'No fue una lucha, sino una danza sublime de sanación: una colisión de luz y sombra que dio nacimiento a una nueva estrella: HeavenlyNova.',
    para2: 'Esta es nuestra inspiración. Tomamos los hilos de esta unión cósmica para crear prendas potentes y refinadas. La verdadera fuerza reside en el equilibrio entre lo crudo y lo sofisticado.',
    para3: 'Cada prenda que forjamos es un artefacto de esta unión, creada para quienes abrazan sus sombras con la misma dignidad que su luz.',
    chapterTitle: 'Capítulo /000 — Protocolo de Origen',
    chapterPara1: 'Antes del primer drop, antes de la primera costura, hubo una señal. El Capítulo /000 no es un producto: es un protocolo. El instante en que luz y sombra entendieron que eran complementarias.',
    chapterPara2: 'El Protocolo de Origen marca el lenguaje de HeavenlyNova a través de tejidos pesados y cortes arquitectónicos. Se trata de lo que llevas en tu interior.',
    chapterPara3: 'Quienes encuentran el Capítulo /000 buscan una señal en el vacío. Esta es la Primera Luz.',
    chapterPara4: 'HeavenlyNova nació de este origen: crudo, instintivo y rotundamente presente.',
    signalLabel: 'La Primera Señal',
    signalPara1: 'El Capítulo /000 une la mitología íntima con la artesanía física de la moda.',
    signalPara2: 'El dragón herido y el ángel luminoso: dos mundos que colisionaron para crear luz.',
    signalPara3: 'Por eso cada pieza está hecha para perdurar como un artefacto eterno.',
    signalFooter: 'Capítulo /000 — La Primera Señal — Protocolo de Origen',
    exclusiveSymbol: 'Quienes llegan al final portan el primer símbolo.',
    exclusiveLabel: 'Pieza Exclusiva',
    exclusivePieceTitle: 'THE ORIGIN PIECE',
    exclusiveSeek: 'Disponible únicamente para quienes buscan.',
    exclusiveDesc: 'Origin Tee — El Capítulo 000 está reservado para quienes llegan al final. Una señal discreta de que estuviste aquí primero.',
    claimBtn: 'Reclamar Diseño',
  },

  it: {
    headerTitle: 'Tra \nLuce & Ombra',
    originLabel: 'La Storia delle Origini',
    introQuote: 'La nostra storia è iniziata tra le stelle, con un legame così profondo da unire un drago ferito e un angelo luminoso.',
    para1: 'Non è stata una lotta, ma una danza sublime di guarigione: una collisione di luce e ombra che ha generato una nuova stella: HeavenlyNova.',
    para2: 'Questa è la nostra ispirazione. Intrecciamo i fili di questa unione cosmica in creazioni potenti e raffinate. La vera forza risiede nell’equilibrio tra l’arcaico e il rifinito.',
    para3: 'Ogni capo che forgiamo è un artefatto di questa unione, creato per coloro che accolgono le proprie ombre tanto quanto la propria luce.',
    chapterTitle: 'Capitolo /000 — Protocollo delle Origini',
    chapterPara1: 'Prima del primo drop, prima del primo punto di cucitura, c’è stato un segnale. Il Capitolo /000 è un protocollo. L’istante in cui luce e ombra hanno compreso di essere complementari.',
    chapterPara2: 'Il Protocollo segna l’inizio del linguaggio HeavenlyNova espresso tramite cotone ad alta grammatura e silhouette scultoree.',
    chapterPara3: 'Chi trova il Capitolo /000 cerca un segnale nel vuoto. Questa è la Prima Luce.',
    chapterPara4: 'HeavenlyNova è nata da questo principio: grezza, istintiva e profondamente presente.',
    signalLabel: 'Il Primo Segnale',
    signalPara1: 'Il Capitolo /000 esiste all’intersezione tra mitologia personale e alta manifattura.',
    signalPara2: 'Il drago ferito e l’angelo luminoso: due energie che hanno dato vita a una stella.',
    signalPara3: 'Ogni capo è costruito per durare nel tempo come un artefatto autentico.',
    signalFooter: 'Capitolo /000 — Il Primo Segnale — Protocollo delle Origini',
    exclusiveSymbol: 'Chi raggiunge la fine custodisce il primo simbolo.',
    exclusiveLabel: 'Capo Esclusivo',
    exclusivePieceTitle: 'THE ORIGIN PIECE',
    exclusiveSeek: 'Disponibile solo per coloro che sanno cercare.',
    exclusiveDesc: 'Origin Tee — Il Capitolo 000 è riservato a chi compie il cammino fino in fondo.',
    claimBtn: 'Richiedi il Capo',
  },

  sv: {
    headerTitle: 'Mellan \nLjus & Skugga',
    originLabel: 'Ursprungsberättelsen',
    introQuote: 'Vår historia började i stjärnorna, med en kärlek så stor att den förde samman en sårad drake och en lysande ängel.',
    para1: 'Det var ingen strid, utan en vacker och intensiv helandedans – en kollision av ljus och skugga som födde en ny stjärna: HeavenlyNova.',
    para2: 'Detta är vår inspiration. Vi väver denna kosmiska förening till kraftfulla och exklusiva plagg.',
    para3: 'Varje plagg vi skapar är en artefakt för dem som omfamnar både sina skuggor och sitt ljus.',
    chapterTitle: 'Kapitel /000 — Ursprungsprotokollet',
    chapterPara1: 'Innan första plagget fanns en signal. Kapitel /000 är ett protokoll som markerar ögonblicket då ljus och skugga förenades.',
    chapterPara2: 'Ursprungsprotokollet är språket HeavenlyNova talar genom kraftigt bomullstyg och arkitektonisk passform.',
    chapterPara3: 'För dem som söker en signal om att de inte är ensamma i tomrummet. Detta är Det Första Ljuset.',
    chapterPara4: 'HeavenlyNova byggdes på denna grund – rå, instinktiv och kompromisslös.',
    signalLabel: 'Den Första Signalen',
    signalPara1: 'Kapitel /000 förenar personlig mytologi med fysiskt hantverk.',
    signalPara2: 'Draken och ängeln: två krafter som skapade ett nytt ljus.',
    signalPara3: 'Därför är varje plagg byggt för att bestå som en tidlös artefakt.',
    signalFooter: 'Kapitel /000 — Den Första Signalen — Ursprungsprotokollet',
    exclusiveSymbol: 'De som når slutet bär den första symbolen.',
    exclusiveLabel: 'Exklusivt Plagg',
    exclusivePieceTitle: 'THE ORIGIN PIECE',
    exclusiveSeek: 'Endast tillgänglig för dem som söker.',
    exclusiveDesc: 'Origin Tee — Kapitel 000 är reserverat för dem som når slutet.',
    claimBtn: 'Säkra Designen',
  },
}
