import type { Language } from '../context/LanguageContext'

export interface StoryTranslation {
  headerTitle: string
  originLabel: string
  introQuote: string
  paragraphs: string[]
  closingMantra: string
  chapterTitle: string
  signalLabel: string
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
    introQuote: 'It began in the silence before the first spark.',
    paragraphs: [
      'A dragon, heavy with the burns of its own fire, wandering the void with wings that had forgotten how to yield. And an angel, radiating a quiet, unsparing light that had never turned away from the dark.',
      'When they met, the universe braced for impact. The instinct of the world was collision, destruction, one force consuming the other to prove its own right to exist. But neither raised a defense. Neither drew blood. In that stillness, they did not fight — they recognized each other.',
      'The light did not break the dragon, and the shadow did not swallow the light. It was an alchemical collapse of boundaries. The flame entered the luminescence, the luminescence pierced the marrow of the beast, and what ignited was not a battle, but a threshold: HeavenlyNova. A star formed from the exact point where pain stops running and allows itself to be illuminated.',
      'That energy is not something that sits between two poles, negotiated or measured. It moves directly through. It tears through the ego, burns away the armor we build to hide our fractures, and leaves only what is essential: a quiet, unshakeable presence that has nothing left to defend.',
      'Every piece is cut to carry that stillness. Heavyweight cotton, structured drop shoulders, and a raw, boxy drape that gives the body a sanctuary. We do not make garments to show status; we forge them to anchor what has survived the fire.',
    ],
    closingMantra: 'Born from Light & Shadow.',
    chapterTitle: 'Chapter /000',
    signalLabel: 'The First Signal.',
    exclusiveSymbol: 'Those who reach the end carry the first symbol.',
    exclusiveLabel: 'Exclusive Item',
    exclusivePieceTitle: 'THE ORIGIN PIECE',
    exclusiveSeek: 'Reserved for those who reach the source.',
    exclusiveDesc: 'Origin Tee — Chapter /000 is reserved for those who reach the source. A quiet signal that you were here first.',
    claimBtn: 'Claim Design',
  },

  ro: {
    headerTitle: 'Între \nLumină & Umbră',
    originLabel: 'Povestea Originii',
    introQuote: 'Totul a început în tăcerea dinaintea primei scântei.',
    paragraphs: [
      'Un dragon, îngreunat de arsurile propriului foc, rătăcind prin vid cu aripi ce uitaseră să cedeze. Și un înger, radiind o lumină tăcută, necruțătoare, care nu a întors niciodată spatele întunericului.',
      'Când s-au întâlnit, universul s-a pregătit pentru impact. Instinctul lumii era coliziunea, distrugerea, o forță devorând-o pe cealaltă pentru a-și dovedi dreptul de a exista. Dar niciunul nu a ridicat o apărare. Niciunul nu a vărsat sânge. În acea nemișcare, nu s-au luptat — s-au recunoscut.',
      'Lumina nu a frânt dragonul, iar umbra nu a înghițit lumina. A fost o prăbușire alchimică a barierelor. Flacăra a pătruns în luminiscență, luminiscența a străpuns măduva fiarei, iar ceea ce s-a aprins nu a fost o bătălie, ci un prag: HeavenlyNova. O stea formată exact în punctul în care durerea încetează să mai fugă și acceptă să fie luminată.',
      'Acea energie nu stă suspendată între doi poli, negociată sau măsurată. Ea trece direct prin tine. Sfâșie egoul, arde armura pe care o construim pentru a ne ascunde fracturile și lasă în urmă doar ceea ce este esențial: o prezență tăcută, de neclintit, care nu mai are nimic de apărat.',
      'Fiecare piesă este tăiată pentru a purta acea liniște. Bumbac greu, umeri căzuți structurați și o croială boxy brută care oferă corpului un sanctuar. Nu creăm haine pentru a arăta un statut; le făurim pentru a ancora ceea ce a supraviețuit focului.',
    ],
    closingMantra: 'Născut din Lumină & Umbră.',
    chapterTitle: 'Capitolul /000',
    signalLabel: 'Primul Semnal.',
    exclusiveSymbol: 'Cei care ajung până la capăt poartă primul simbol.',
    exclusiveLabel: 'Piesă Exclusivă',
    exclusivePieceTitle: 'THE ORIGIN PIECE',
    exclusiveSeek: 'Rezervat celor care ajung la sursă.',
    exclusiveDesc: 'Origin Tee — Capitolul /000 este rezervat celor care ajung la sursă. Un semnal discret că ai fost aici primul.',
    claimBtn: 'Revendică Piesa',
  },

  de: {
    headerTitle: 'Zwischen \nLicht & Schatten',
    originLabel: 'Die Ursprungsgeschichte',
    introQuote: 'Es begann in der Stille vor dem ersten Funken.',
    paragraphs: [
      'Ein Drache, gezeichnet von den Brandwunden seines eigenen Feuers, der durch die Leere streifte, mit Flügeln, die verlernt hatten nachzugeben. Und ein Engel, der ein stilles, schonungsloses Licht ausstrahlte, das sich nie von der Dunkelheit abgewandt hatte.',
      'Als sie aufeinandertrafen, hielt das Universum den Atem an. Der Instinkt der Welt war Kollision, Zerstörung, eine Kraft, die die andere verzehrt, um ihr eigenes Dasein zu beweisen. Doch keiner erhob eine Verteidigung. Keiner vergoss Blut. In dieser Stille kämpften sie nicht — sie erkannten einander.',
      'Das Licht brach den Drachen nicht, und der Schatten verschlang das Licht nicht. Es war ein alchemistischer Zusammenbruch aller Grenzen. Die Flamme drang in das Leuchten ein, das Leuchten durchdrang das Mark der Bestie, und was entzündet wurde, war keine Schlacht, sondern eine Schwelle: HeavenlyNova. Ein Stern, geformt genau an dem Punkt, an dem der Schmerz aufhört zu fliehen und sich erleuchten lässt.',
      'Diese Energie steht nicht verhandelnd zwischen zwei Polen. Sie geht direkt hindurch. Sie zerreißt das Ego, verbrennt die Rüstung, die wir bauen, um unsere Brüche zu verbergen, und hinterlässt nur das Wesentliche: eine stille, unerschütterliche Präsenz, die nichts mehr zu verteidigen hat.',
      'Jedes Stück ist geschnitten, um diese Stille zu tragen. Schweres Baumwollgewebe, strukturierte überschnittene Schultern und ein roher, kastenförmiger Fall, der dem Körper eine Zuflucht bietet. Wir fertigen keine Kleidung für den Status; wir schmieden sie, um zu verankern, was das Feuer überlebt hat.',
    ],
    closingMantra: 'Geboren aus Licht & Schatten.',
    chapterTitle: 'Kapitel /000',
    signalLabel: 'Das Erste Signal.',
    exclusiveSymbol: 'Wer das Ende erreicht, trägt das erste Symbol.',
    exclusiveLabel: 'Exklusives Stück',
    exclusivePieceTitle: 'THE ORIGIN PIECE',
    exclusiveSeek: 'Reserviert für diejenigen, die die Quelle erreichen.',
    exclusiveDesc: 'Origin Tee — Kapitel /000 ist für diejenigen reserviert, die die Quelle erreichen. Ein stilles Zeichen dafür, dass du zuerst hier warst.',
    claimBtn: 'Design sichern',
  },

  fr: {
    headerTitle: 'Entre \nLumière & Ombre',
    originLabel: 'L’Histoire des Origines',
    introQuote: 'Tout a commencé dans le silence précédant la première étincelle.',
    paragraphs: [
      'Un dragon, alourdi par les brûlures de son propre feu, errant dans le vide avec des ailes qui avaient désappris à céder. Et un ange, rayonnant d’une lumière silencieuse et implacable qui ne s’était jamais détournée de l’obscurité.',
      'Lorsqu’ils se sont rencontrés, l’univers s’est préparé à l’impact. L’instinct du monde était la collision, la destruction, une force consumant l’autre pour prouver son droit d’exister. Mais aucun n’a levé de défense. Aucun n’a versé de sang. Dans ce silence, ils ne se sont pas battus — ils se sont reconnus.',
      'La lumière n’a pas brisé le dragon, et l’ombre n’a pas englouti la lumière. Ce fut un effondrement alchimique des frontières. La flamme a pénétré la luminescence, la luminescence a transpercé la moelle de la bête, et ce qui s’est allumé n’était pas un combat, mais un seuil : HeavenlyNova. Une étoile née à l’endroit précis où la douleur cesse de fuir et accepte d’être illuminée.',
      'Cette énergie ne se négocie pas entre deux pôles. Elle traverse directement. Elle déchire l’ego, consume l’armure que nous forgeons pour masquer nos fêlures, et ne laisse que l’essentiel : une présence calme et inébranlable qui n’a plus rien à défendre.',
      'Chaque pièce est taillée pour porter cette immobilité. Coton lourd, épaules tombantes structurées et un drapé brut et boxy qui offre un sanctuaire au corps. Nous ne créons pas de vêtements de statut ; nous les forgeons pour ancrer ce qui a survécu au feu.',
    ],
    closingMantra: 'Né de la Lumière & de l’Ombre.',
    chapterTitle: 'Chapitre /000',
    signalLabel: 'Le Premier Signal.',
    exclusiveSymbol: 'Ceux qui atteignent la fin portent le premier symbole.',
    exclusiveLabel: 'Pièce Exclusive',
    exclusivePieceTitle: 'THE ORIGIN PIECE',
    exclusiveSeek: 'Réservé à ceux qui atteignent la source.',
    exclusiveDesc: 'Origin Tee — Le Chapitre /000 est réservé à ceux qui atteignent la source. La marque silencieuse de votre présence originelle.',
    claimBtn: 'Acquérir la Pièce',
  },

  es: {
    headerTitle: 'Entre \nLuz & Sombra',
    originLabel: 'La Historia del Origen',
    introQuote: 'Comenzó en el silencio previo a la primera chispa.',
    paragraphs: [
      'Un dragón, cargado con las quemaduras de su propio fuego, vagando por el vacío con alas que habían olvidado cómo ceder. Y un ángel, irradiando una luz silenciosa e implacable que jamás se había apartado de la oscuridad.',
      'Cuando se encontraron, el universo se preparó para el impacto. El instinto del mundo era la colisión, la destrucción, una fuerza devorando a la otra para demostrar su derecho a existir. Pero ninguno levantó defensa. Ninguno derramó sangre. En esa quietud, no lucharon — se reconocieron.',
      'La luz no quebró al dragón, y la sombra no devoró la luz. Fue un colapso alquímico de las fronteras. La llama penetró en la luminiscencia, la luminiscencia atravesó la médula de la bestia, y lo que se encendió no fue una batalla, sino un umbral: HeavenlyNova. Una estrella formada en el punto exacto donde el dolor deja de huir y permite ser iluminado.',
      'Esa energía no se negocia entre dos polos. Atraviesa directamente. Desgarra el ego, calcina la armadura que construimos para ocultar nuestras fracturas y deja únicamente lo esencial: una presencia serena e inquebrantable que ya no tiene nada que defender.',
      'Cada prenda está cortada para portar esa quietud. Algodón pesado, hombros caídos estructurados y una caída boxy cruda que otorga un santuario al cuerpo. No hacemos prendas para ostentar estatus; las forjamos para anclar lo que ha sobrevivido al fuego.',
    ],
    closingMantra: 'Nacido de la Luz & la Sombra.',
    chapterTitle: 'Capítulo /000',
    signalLabel: 'La Primera Señal.',
    exclusiveSymbol: 'Quienes llegan al final portan el primer símbolo.',
    exclusiveLabel: 'Pieza Exclusiva',
    exclusivePieceTitle: 'THE ORIGIN PIECE',
    exclusiveSeek: 'Reservado para quienes alcanzan la fuente.',
    exclusiveDesc: 'Origin Tee — El Capítulo /000 está reservado para quienes llegan a la fuente. Una señal discreta de que estuviste aquí primero.',
    claimBtn: 'Reclamar Diseño',
  },

  it: {
    headerTitle: 'Tra \nLuce & Ombra',
    originLabel: 'La Storia delle Origini',
    introQuote: 'È iniziato nel silenzio prima della prima scintilla.',
    paragraphs: [
      'Un drago, segnato dalle bruciature del suo stesso fuoco, errante nel vuoto con ali che avevano disimparato a cedere. E un angelo, che irradiava una luce quieta e inflessibile che non si era mai sottratta al buio.',
      'Quando si sono incontrati, l’universo si è preparato all’impatto. L’istinto del mondo era lo scontro, la distruzione, una forza che divora l’altra per affermare il proprio diritto di esistere. Ma nessuno ha alzato una difesa. Nessuno ha versato sangue. In quella quiete, non hanno combattuto — si sono riconosciuti.',
      'La luce non ha spezzato il drago, e l’ombra non ha inghiottito la luce. È stato un collasso alchemico di ogni confine. La fiamma è entrata nella luminescenza, la luminescenza ha trafitto il midollo della bestia, e ciò che si è acceso non è stata una battaglia, ma una soglia: HeavenlyNova. Una stella nata nel punto esatto in cui il dolore cessa di fuggire e si lascia illuminare.',
      'Quell’energia non si ferma tra due poli a negoziare. Attraversa direttamente. Lacera l’ego, brucia l’armatura eretta per nascondere le nostre fratture e lascia solo ciò che è essenziale: una presenza calma, incrollabile, che non ha più nulla da difendere.',
      'Ogni capo è tagliato per custodire quella quiete. Cotone ad alta grammatura, spalle scese strutturate e un drappeggio boxy scultoreo che offre al corpo un rifugio. Non creiamo abiti per esibire uno status; li forgiamo per radicare ciò che è sopravvissuto al fuoco.',
    ],
    closingMantra: 'Nato da Luce & Ombra.',
    chapterTitle: 'Capitolo /000',
    signalLabel: 'Il Primo Segnale.',
    exclusiveSymbol: 'Chi raggiunge la fine custodisce il primo simbolo.',
    exclusiveLabel: 'Capo Esclusivo',
    exclusivePieceTitle: 'THE ORIGIN PIECE',
    exclusiveSeek: 'Riservato a coloro che raggiungono la fonte.',
    exclusiveDesc: 'Origin Tee — Il Capitolo /000 è riservato a chi raggiunge la sorgente. Un segnale discreto che eri qui per primo.',
    claimBtn: 'Richiedi il Capo',
  },

  sv: {
    headerTitle: 'Mellan \nLjus & Skugga',
    originLabel: 'Ursprungsberättelsen',
    introQuote: 'Det började i tystnaden före den första gnistan.',
    paragraphs: [
      'En drake, märkt av brännskadorna från sin egen eld, vandrande genom tomrummet med vingar som glömt hur man ger vika. Och en ängel, som utstrålade ett stilla, obevekligt ljus som aldrig vänt sig bort från mörkret.',
      'När de möttes förberedde sig universum på kollisionen. Världens instinkt var förstörelse, den ena kraften slukande den andra för att bevisa sin rätt att existera. Men ingen reste ett försvar. Ingen spillde blod. I den stillheten stred de inte — de kände igen varandra.',
      'Ljuset krossade inte draken, och skuggan slukade inte ljuset. Det var en alkemisk kollaps av alla gränser. Flamman trängde in i skenet, skenet genomborrade odjurets märg, och det som tändes var ingen strid, utan en tröskel: HeavenlyNova. En stjärna formad från den exakta punkt där smärtan slutar fly och låter sig belysas.',
      'Den energin förhandlar inte mellan två poler. Den rör sig rakt igenom. Den river igenom egot, bränner bort rustningen vi byggt för att dölja våra sprickor och lämnar bara det väsentliga: en stilla, orubblig närvaro som inte har något kvar att försvara.',
      'Varje plagg är skuret för att bära den stillheten. Kraftig bomull, strukturerade nedhasade axlar och ett rått boxy fall som ger kroppen en fristad. Vi skapar inte plagg för status; vi smider dem för att förankra det som överlevt elden.',
    ],
    closingMantra: 'Född ur Ljus & Skugga.',
    chapterTitle: 'Kapitel /000',
    signalLabel: 'Den Första Signalen.',
    exclusiveSymbol: 'De som når slutet bär den första symbolen.',
    exclusiveLabel: 'Exklusivt Plagg',
    exclusivePieceTitle: 'THE ORIGIN PIECE',
    exclusiveSeek: 'Reserverad för dem som når källan.',
    exclusiveDesc: 'Origin Tee — Kapitel /000 är reserverat för dem som når källan. En stilla signal om att du var här först.',
    claimBtn: 'Säkra Designen',
  },
}
