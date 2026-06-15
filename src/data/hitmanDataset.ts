export interface ChapterInfo {
  id: string;
  title: string;
  year: string;
  gameTitle: string;
  summary: string;
  details: string[];
  keyTargets: string[];
  locations: string[];
  importance: string;
}

export interface CharacterInfo {
  name: string;
  role: string;
  actorType: 'protagonist' | 'ally' | 'antagonist' | 'neutral' | 'target';
  description: string;
  details: string;
}

export interface FatherInfo {
  name: string;
  role: string;
  contribution: string;
  fate: string;
}

export interface HitmanData {
  title: string;
  introduction: string;
  chapters: ChapterInfo[];
  characters: CharacterInfo[];
  fiveFathers: FatherInfo[];
  conclusion: string;
  fullContent: string;
}

export const hitmanDataset: HitmanData = {
  title: "L'Evoluzione Narrativa e l'Intrastoria della Saga di Hitman: Un'Analisi Esaustiva",
  introduction: "La saga di Hitman rappresenta una delle narrazioni più complesse, longeve e stratificate nel panorama dell'intrattenimento interattivo moderno. Lontano dall'essere una semplice sequenza di incarichi su commissione, l'intrastoria del franchise delinea un profondo trattato sul determinismo genetico, sul libero arbitrio, sulla bioetica e sulle sovrastrutture di potere globale. Al centro si erge l'Agente 47, un costrutto biologico concepito in laboratorio per essere l'apice assoluto dell'evoluzione letale, che intraprende un doloroso ma inesorabile affrancamento verso la propria umanità e autonomia morale.",
  chapters: [
    {
      id: "genesic7",
      title: "La Genesi e l'Infanzia",
      year: "Anni '50 - 1999",
      gameTitle: "Il Progetto Ort-Meyer e il Soggetto 6",
      summary: "I primi esperimenti aberranti di clonazione nel manicomio rumeno, il profondo legame con il Soggetto 6 e la successiva cancellazione artificiale della memoria.",
      keyTargets: [],
      locations: ["Romania (Satu Mare Asylum)"],
      importance: "Posa le basi biologiche ed emotive di tutta la saga. Nasce l'amicizia con Lucas Grey (Soggetto 6) e l'involontaria uccisione dei genitori di Diana Burnwood.",
      details: [
        "Negli anni '50, il dottor Otto Wolfgang Ort-Meyer istituisce il manicomio rumeno come copertura per produrre cloni umani avanzati.",
        "Il progetto è segretamente finanziato e assistito da altri quattro ex commilitoni della Legione Straniera (i Cinque Padri), che ottengono in cambio cloni compatibili per il traffico di organi, allungando innaturalmente la propria vita.",
        "A differenza della credenza popolare, il giovane 47 conserva dell'empatia: alleva un coniglietto fuggito e stringe un patto di sangue con il Soggetto 6 per distruggere l'istituto.",
        "Dopo una fuga asimmetrica in cui solo il Soggetto 6 riesce a scappare, 47 viene catturato e sottoposto a un siero chimico amnesico e un gaslighting psicologico che simula l'assassinioso tradimento del suo migliore amico.",
        "In questo periodo, un condizionato 47 elimina i genitori di Diana Burnwood per conto di una missione Providence/Ort-Meyer."
      ]
    },
    {
      id: "codename47",
      title: "Il Risveglio e la Ribellione",
      year: "2000",
      gameTitle: "Hitman: Codename 47",
      summary: "L'evasione controllata di 47, il suo reclutamento all'ICA con Diana Burnwood, l'annientamento dei suoi quattro padri biologici e l'uccisione finale di Ort-Meyer.",
      keyTargets: ["Red Dragon Negotiator", "Blue Lotus Negotiator", "Tzun", "Lee Hong", "Pablo Belisario Ochoa", "Frantz Fuchs", "Arkadij Jegorov (Boris)", "Odon Kovacs", "Dott. Otto Wolfgang Ort-Meyer", "Agenti 48"],
      locations: ["Hong Kong", "Colombia", "Budapest", "Rotterdam", "Romania"],
      importance: "Primo atto interattivo: 47 scopre la verità sulle sue origini, distrugge i suoi creatori e inizia ad operare come entità indipendente legata all'ICA.",
      details: [
        "Evaso dal manicomio per volere occulto di Ort-Meyer, 47 viene notato e assoldato dall'International Contract Agency (ICA). Gli viene assegnata Diana Burnwood come handler.",
        "Ort-Meyer usa l'ICA in segreto per commissionare a 47 l'assassinio degli altri quattro padri genetici (Lee Hong, Pablo Ochoa, Frantz Fuchs, Boris Jegorov) per non spartire il clone perfetto.",
        "47 scopre gli indizi che collegano i bersagli e viene attirato di nuovo in Romania nella trappola finale di Ort-Meyer (fiancheggiato da difese SWAT e cloni obbedienti della serie 48).",
        "47 stermina gli Agenti 48 e spezza il collo o spara al dottor Ort-Meyer, rivendicando per la prima volta il diritto alla propria esistenza."
      ]
    },
    {
      id: "silentassassin",
      title: "La Ricerca di Redenzione",
      year: "2002",
      gameTitle: "Hitman 2: Silent Assassin",
      summary: "Il ritiro spirituale in Sicilia, il rapimento di Padre Vittorio, il ricatto della mafia russa e di Sergei Zavorotko, e il disincantato ritorno al mestiere di sicario.",
      keyTargets: ["Giuseppe Guilliani", "Generale Makarov", "Generale Mikhail Bardachenko", "Masahiro Hayamoto Jr.", "Masahiro Hayamoto", "Charlie Sidjan", "Rutgert Van Leuven", "Dr. Von Kamprad", "Deewana Ji", "Abdul Bismillah Malik", "Tariq Abdul Lateef", "Mohammad Amin", "Sergei Zavorotko"],
      locations: ["Sicilia (Italia)", "San Pietroburgo (Russia)", "Giappone", "Malesia", "Afghanistan", "India"],
      importance: "Approfondisce il conflitto psicologico e religioso: la fede e l'isolamento monastico non possono sopprimere la natura genetica letale di 47.",
      details: [
        "In preda a una crisi esistenziale, 47 si rifugia a Gontranno in Sicilia come umile giardiniere sotto l'ala di Padre Vittorio, donando tutti i suoi milioni alla chiesa.",
        "Sergei Zavorotko (fratello di Jegorov) cospira con il misterioso 'Mystery Man' e ordina il rapimento di Vittorio per spingere 47 a uscire dal ritiro.",
        "47 contatta Diana e l'ICA: accetta una serie di difficilissimi contratti globali in cambio di informazioni satellitari sul prete.",
        "In una battaglia campale nella chiesa di Gontranno desecrata, 47 stermina le guardie e Sergei. Rifiuta l'assoluzione finale, appende il rosario al cancello e svanisce nella nebbia, accettando il suo destino."
      ]
    },
    {
      id: "bloodmoney_contracts",
      title: "Minaccia Esistenziale e Guerra tra Agenzie",
      year: "2004 - 2006",
      gameTitle: "Hitman: Contracts / Blood Money",
      summary: "I deliri febbrili di Parigi dopo essere stato ferito da Albert Fournier, e lo scontro mortale tra l'ICA e il Franchise (Alpha Zerox) di Leland Cayne.",
      keyTargets: [
        "Campbell Sturrock", "Richard Delahunt", "Alvaro D'Alvade", "Winston Beldingford", "Alistair Beldingford",
        "Richard Palmer", "Klaas Meier", "Frantz Fuchs", "Fritz Fuchs", "Fabian Fuchs", "Boris Jegorov", "Ispettore Albert Fournier",
        "Joseph Clarence", "Fernando Delgado", "Manuel Delgado", "Deanna Hansen", "Carmine DeSalvo", "Vinnie Sinistra",
        "Skip Muldoon", "Gator Boss", "Lorne de Havilland", "Chad Bingham Jr", "Hendrik Schmutz", "Mohammad Bin Shirao",
        "Sheikh Al-Khalifa", "Tariq Abdul Lateef", "Mark Purayah II", "Raymond Kulinsky", "Angelina Mason", "Mark Parchezzi III",
        "Alexander Leland Cayne", "Rick Henderson", "The Priest"
      ],
      locations: ["Parigi (Francia)", "Rotterdam", "Siberia", "New Orleans", "Rocky Mountains", "Washington D.C. (Casa Bianca)"],
      importance: "Alpice drammatico: Diana si rivela un'alleata assoluta, usando un finto veleno funerario per resuscitare 47 che decima l'intera cabala del Franchise.",
      details: [
        "Contracts si svolge nella mente di un 47 gravemente ferito a Parigi dall'ispettore corrotto Fournier (asset del Franchise). Ricorda vecchi traumi prima di guarire ed eliminare il poliziotto.",
        "Blood Money svela che 'The Franchise' (di Alpha Zerox), guidato dal machiavellico Leland Cayne, vuole eliminare l'ICA e ottenere il midollo di 47 per sbloccare la clonazione a vita illimitata.",
        "La guerra civile stermina l'ICA. Diana rimane l'unica superstite e mette in scena il finto avvelenamento clinico di 47 durante il drammatico incontro nel suo covo.",
        "Al funerale solenne allestito da Cayne per cremare il corpo, Diana posiziona le Silverballers e risveglia 47 con un bacio e l'antidoto. Segue una carneficina leggendaria senza testimoni."
      ]
    },
    {
      id: "absolution",
      title: "Il Collasso Etico",
      year: "2012",
      gameTitle: "Hitman: Absolution",
      summary: "La corruzione interna all'ICA perpetrata da Benjamin Travis, il finto assassinio di Diana e la missione solitaria per proteggere l'adolescente Victoria.",
      keyTargets: [
        "King of Chinatown", "Dom Osmond", "Wade", "Lenny Dexter", "Sanchez", "LaSalle", "Lasandra Dixon",
        "Heather McCarthy", "Diana Burnwood (falso bersaglio)", "Richard Strong Jr", "Frank Owens", "Gavin LeBlond",
        "Mason McCready", "Luke Wheeley", "John Keasey", "Raymond Luger", "Edward P.Smith",
        "Blake Dexter", "Benjamin Travis", "Jade Nguyen", "Clive Skurky"
      ],
      locations: ["Chicago", "Hope (South Dakota)", "Cornovaglia (Inghilterra)"],
      importance: "Un viaggio profondamente personale: Victoria rappresenta il surrogato dell'innocenza perduta di 47, spingendolo alla diserzione morale contro i vertici deviati dell'ICA.",
      details: [
        "Benjamin Travis (ICA) avvia un progetto illegale di super-sicario geneticamente modificato sulla giovane Victoria, tenuta sotto controllo tramite dipendenza da un isotopo radioattivo.",
        "Diana Burnwood si ribella e rapisce Victoria. Travis dichiara Diana traditrice e ordina a 47 di eliminarla. 47 esita, la ferisce ma accoglie la supplica di proteggere la bambina.",
        "47 diserta dall'ICA ('gone rogue'), affronta lo squallido trafficante di armi Blake Dexter, elude il detective Cosmo Faulkner e abbatte la squadra delle 'Saints' e delle guardie Pretoriane.",
        "Elimina Travis in un cimitero in Inghilterra dopo che questa ha profanato la tomba vuota di Diana, svelando nell'epilogo che Diana è sopravvissuta e Victoria è in salvo."
      ]
    },
    {
      id: "worldofassassination",
      title: "La Trilogia del World of Assassination",
      year: "2019 - 2021",
      gameTitle: "Hitman (2016) / Hitman 2 / Hitman 3",
      summary: "Lo scontro apocalittico contro Providence (una cabala segreta globale), l'alleanza con il Cliente Ombra (Lucas Grey) e la distruzione definitiva dell'ICA.",
      keyTargets: [
        "Viktor Novikov", "Dalia Margolis", "Silvio Caruso", "Francesca De Santis", "Claus Hugo Strandberg",
        "Reza Zaydan", "Jordan Cross", "Ken Morgan", "Ezra Berg", "Penelope Graves", "Sean Rose", "Maya Parvati",
        "Yuki Yamazaki", "Erich Soders",
        "Alma Reynard", "Robert Knox", "Sierra Knox", "Rico Delgado", "Andrea Martinez", "Jorge Franco",
        "Dawood Rangan", "Vanya Shah", "Wazir Kale", "Nolan Cassidy", "Janus", "Zoe Washington", "Sophia Washington",
        "Athena Savalas", "Tyson Williams", "Steven Bradley", "Ljudmila Vetrova",
        "Carl Ingram", "Marcus Stuyvesant", "Alexa Carlisle", "Agent Montgomery", "Agent Banner", "Agent Chamberlin",
        "Agent Thames", "Agent Tremaine", "Agent Green", "Agent Swan", "Agent Davenport", "Agent Lowenthal", "Agent Rhodes",
        "Hush", "Imogen Royce", "Don Yates", "Tamara Vidal", "Arthur Edwards"
      ],
      locations: ["Parigi", "Sapienza", "Marrakesh", "Hokkaido (Giappone)", "Miami", "Mumbai", "Maldive (Haven)", "Dubai", "Dartmoor", "Berlino", "Chongqing", "Mendoza", "Monti Carpazi"],
      importance: "Il climax narrativo: unione di tutti i fili. Lucas Grey compie il sacrificio supremo. 47 distrugge il nucleo ICA e neutralizza Arthur Edwards in Romania.",
      details: [
        "Un misterioso Cliente Ombra manipola l'ICA e 47 per colpire asset cruciali di 'Providence', una cabala occulta che governa l'economia e la geopolitica mondiale.",
        "47 scopre che il Cliente Ombra è Lucas Grey (suo fratello d'infanzia Soggetto 6) e si allea con lui e con Diana, tradendo Providence e l'ICA stessa dopo aver eliminato la talpa Erich Soders.",
        "Arthur Edwards (La Costante di Providence) contrattacca rivelando a Diana che 47 assassinò i suoi genitori con un'autobomba da ragazzino, tentando di dividerli.",
        "In Hitman 3, a Dartmoor, Lucas Grey si suicida per proteggere l'anonimato di 47. 47 affronta l'ICA a Berlino e ne cancella permanentemente l'infrastruttura a Chongqing.",
        "A Mendoza, Diana finge di allearsi con Edwards e somministra a 47 una neurotossina. È un astuto tranello ('Long Con') per portare 47 a bordo del treno corazzato blindato di Edwards nei Carpazi.",
        "Sul treno, 47 inietta a Edwards lo stesso siero dell'amnesia di Providence, riducendolo a un guscio vuoto. Diana dissolve Providence ed entrambi ripartono come duo freelance."
      ]
    }
  ],
  characters: [
    {
      name: "Agente 47",
      role: "Assassino d'Elite / Clonazione Perfetta",
      actorType: "protagonist",
      description: "Costrutto genetico perfetto creato dal DNA dei Cinque Padri. Ha trasceso la sua programmazione cellulare letale per trovare un'indipendenza morale e libero arbitrio.",
      details: "Caratterizzato dal codice a barre tatuato sulla nuca (640509-040147), abito nero sartoriale, camicia bianca e cravatta rossa, e l'uso delle inseparabili pistole Silverballers silenziate."
    },
    {
      name: "Diana Burnwood",
      role: "Handler ICA / Alleata ed Erede di Providence",
      actorType: "ally",
      description: "La guida strategica e broker di 47. Nonostante la scoperta shock che 47 uccise i suoi genitori da ragazzo sotto controllo mentale, mantiene una profonda complicità intellettuale con lui.",
      details: "Mente analitica aristocratica, in Hitman 3 assume momentaneamente il controllo apparente di Providence per smantellarla integralmente dall'interno, liberando definitivamente se stessa e il compagno."
    },
    {
      name: "Lucas Grey (Soggetto 6)",
      role: "Mercenario / Fratello d'Infanzia",
      actorType: "ally",
      description: "Amico d'infanzia di 47 e anch'egli clone sopravvissuto del progetto Ort-Meyer. Ha guidato la milizia come 'Shadow Client' per smantellare i tiranni globali.",
      details: "Si sacrifica gloriosamente nel maniero di Dartmoor in Hitman 3, suicidandosi pur di non far saltare la copertura di 47 e convincendo le truppe della CICADA di agire da solo."
    },
    {
      name: "Arthur Edwards (La Costante)",
      role: "Controller Supremo di Providence",
      actorType: "antagonist",
      description: "Il machiavellico mediatore finanziario e geopolitico di Providence. Manipolatore impareggiabile della mente altrui e della guerra asimmetrica.",
      details: "Sente vacillare il potere dei Partner e ne usurpa i troni in Hitman 3. Viene neutralizzato da 47 sui Monti Carpazi tramite l'iniezione del siero dell'amnesia chimica."
    },
    {
      name: "Dr. Otto Wolfgang Ort-Meyer",
      role: "Scienziato Genetista / Creatore",
      actorType: "antagonist",
      description: "La mente scientifica eugenetica ossessionata dalla clonazione perfetta. Ha cresciuto ed educato i cloni come macchine da guerra asettiche.",
      details: "Ha coordinato l'alleanza dei Cinque Padri dal manicomio rumeno. Viene freddamente giustiziato da 47 al termine di Codename 47, che distrugge anche gli Agenti 48 inferiori."
    },
    {
      name: "Victoria",
      role: "Progetto Sperimentale super-sicario",
      actorType: "neutral",
      description: "Adolescente ingegnerizzata geneticamente da Benjamin Travis per replicare le abilità di 47, ma protetta e curata da Diana e 47 stessa.",
      details: "Possiede spaventose doti latenti attivate da un isotopo radioattivo pendente al collo. Alla fine di Absolution svanisce nell'ombra per vivere una vita ordinaria."
    },
    {
      name: "Alexander Leland Cayne",
      role: "Ex Direttore FBI & Capo del Franchise",
      actorType: "antagonist",
      description: "Leader carismatico dell'organizzazione antagonista Alpha Zerox / The Franchise, ossessionato dall'ottenere il DNA di 47 per controllare la clonazione.",
      details: "Infiltrato in sedia a rotelle del complotto eugenetico presidenziale in Blood Money. Muore sterminato violentemente da 47 al termine del proprio ingannevole funerale."
    }
  ],
  fiveFathers: [
    {
      name: "Dr. Otto Wolfgang Ort-Meyer",
      role: "Direttore Medico (Germania/Romania)",
      contribution: "Mente scientifica primaria. Fornitore della struttura del Satu Mare Asylum in Romania e del progresso biogenetico.",
      fate: "Eliminato da 47 nel 2000 nel manicomio dopo aver sguinzagliato gli Agenti 48."
    },
    {
      name: "Lee Hong",
      role: "Leader della Triade del Drago Rosso",
      contribution: "Reti di contrabbando, attrezzature all'avanguardia per il manicomio e immense risorse monetarie da Hong Kong.",
      fate: "Ucciso da 47 nel suo lussuoso covo ristorante a Hong Kong dopo aver sventrato la pace tra le triadi."
    },
    {
      name: "Pablo Belisario Ochoa",
      role: "Signore della Droga del Cartello Colombiano",
      contribution: "Finanziamenti miliardari derivati dal traffico mondiale di cocaina e armamenti pesanti per la milizia privata.",
      fate: "Assassinato da 47 nella giungla colombiana nel suo quartier generale pesantemente sorvegliato."
    },
    {
      name: "Frantz Fuchs",
      role: "Terrorista Internazionale e Chimico",
      contribution: "Fornitura di esplosivi, formule nucleari/chimiche occulte ed eversione geopolitica in Austria ed Europa centrale.",
      fate: "Eliminato da 47 nell'hotel termale Gellert di Budapest prima che potesse innescare una bomba chimica."
    },
    {
      name: "Arkadij Jegorov (Boris)",
      role: "Trafficante d'Armi Globale",
      contribution: "Fornitura di armamenti pesanti, scorie nucleari dismesse, munizioni e testate teleguidate da Russia e Kazakistan.",
      fate: "Giustiziato da 47 a bordo di una nave merci nel porto di Rotterdam nel bel mezzo di una transazione atomica."
    }
  ],
  conclusion: "La conclusione semantica della saga di Hitman, illustrata nell'epilogo ambientato un anno dopo gli eventi dei monti Carpazi, certifica la totale emancipazione dell'Agente 47 e di Diana Burnwood. Svanite le istituzioni oppressive dell'ICA e della multinazionale di Providence, i due scelgono di ripartire da zero: un sodalizio freelance di impareggiabile efficacia, svincolato da logiche corporative, atto a colpire proattivamente i nuovi mali geopolitici ed eugenetici del pianeta. Un cammino di ascesa dal determinismo biologico originario alla libertà etica assoluta.",
  fullContent: `L'Evoluzione Narrativa e l'Intrastoria della Saga di Hitman: Un'Analisi Esaustiva...` // will represent full user input text for custom RAG or semantic reference
};

import { targetDetails } from "./targetDetails";
import { documentDescriptions } from "./documentDescriptions";

// Auto-populate characters with all keyTargets from chapters
hitmanDataset.chapters.forEach(chapter => {
  chapter.keyTargets.forEach(targetName => {
    // Check if it already exists in characters
    const exists = hitmanDataset.characters.some(c => c.name === targetName);
    const inFathers = hitmanDataset.fiveFathers.some(f => f.name === targetName);
    
    if (!exists && !inFathers) {
      const bioDetails = targetDetails[targetName] || {
        description: `[DELINEAMENTO BIOGRAFICO]\n${documentDescriptions[targetName] || 'Profilo biografico riservato.'}`,
        details: `[ANALISI OPERATIVA]\nIntercettato nel corso della campagna: ${chapter.gameTitle} (${chapter.year}).\n${documentDescriptions[targetName] ? 'Dettagli di missione estratti dai log generali ICA.' : 'Dati operativi frammentari o perduti, bersaglio eliminato con infallibilità del mestiere.'}`
      };

      hitmanDataset.characters.push({
        name: targetName,
        role: "Bersaglio ICA - Priority Target",
        actorType: "target",
        description: bioDetails.description,
        details: bioDetails.details
      });
    }
  });
});
