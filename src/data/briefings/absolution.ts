import { MissionBriefingData } from "../briefingTypes";

export const ABSOLUTION_MISSIONS: MissionBriefingData[] = [
  {
    missionId: "ab-personal-contract",
    missionNumber: "01",
    missionTitle: "A Personal Contract",
    gameSubtitle: "Hitman: Absolution",
    operationCodename: "OP-AB-01 // Tradimento di Diana",
    icaClassification: "ICA DIRECT ORDER // BENJAMIN TRAVIS",
    handler: "Benjamin Travis (Nuovo Supervisore ICA)",
    threatAssessment: "CRITICO",
    primaryLocation: "Villa Costiera, Chicago, Illinois, USA",
    targetsSummary: ["Diana Burnwood (Ordine di Esecuzione)"],
    briefingTranscript: "47, questo è l'incarico più difficile della tua carriera. Diana Burnwood ha tradito l'Agenzia sabotando i nostri sistemi e rapendo una risorsa vitale di nome Victoria. È barricata nella sua villa privata di Chicago protetta da mercenari privati. Infiltrati, neutralizza la sua scorta ed esegui la sentenza. Quando l'avrai colpita, scoprirai la verità sul progetto segreto di Travis.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Infiltrazione Giardino & Serra)",
        badge: "ZERO DETECT // PISTOLA SILENZIATA",
        description: "Usa i sentieri sulla scogliera e la serra per superare le guardie di sicurezza esterne ed entrare nella villa dal piano superiore.",
        recommendedSuit: "Abito Classico Nero ICA",
        loadout: [
          {
            id: "ab-01-silverballer",
            name: "ICA19 Silverballer Silenziata (.45 ACP)",
            category: "firearm",
            categoryLabel: "Pistola Firma",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Arma personale d'ordinanza di 47.",
            tacticalTip: "Elimina le luci della veranda o distrai le guardie con un oggetto lanciato."
          },
          {
            id: "ab-01-wire",
            name: "Fiber Wire ICA",
            category: "melee",
            categoryLabel: "Garrota",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Neutralizza senza rumore le sentinelle isolate nei giardini.",
            tacticalTip: "Occulta sempre le guardie nei cespugli o nei contenitori."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-ab-01-1",
        targetOrTask: "Infiltrati nella Villa Privata di Diana Burnwood",
        type: "intel",
        typeLabel: "Infiltrazione",
        priority: "PRIMARIA",
        location: "Giardini & Ala Interna Villa",
        recommendedMethod: "Passaggio attraverso le serre e il cornicione superiore",
        intelNotes: "Sfrutta l'Istinto per prevedere i percorsi delle ronde."
      },
      {
        id: "obj-ab-01-2",
        targetOrTask: "Confronta Diana e Accogli la Promessa su Victoria",
        type: "safeguard",
        typeLabel: "Svolta Narrativa",
        priority: "CRITICA",
        location: "Bagno Padronale Villa",
        recommendedMethod: "Spara a Diana in modo non fatale e prendi in custodia la ragazza",
        intelNotes: "Segna l'inizio della diserzione di 47 dall'ICA corrotta di Benjamin Travis."
      }
    ],
    silentAssassinRules: [
      "Nessun personale domestico della villa ferito",
      "Evita gli scontri armati aperti nel salone centrale"
    ],
    extractionPoints: [
      {
        id: "ext-ab-01-car",
        name: "Fuga con Victoria dalla Villa",
        description: "Abbandono dell'ICA e copertura verso Chicago.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "ab-king-chinatown",
    missionNumber: "02",
    missionTitle: "The King of Chinatown",
    gameSubtitle: "Hitman: Absolution",
    operationCodename: "OP-AB-02 // Il Favore a Birdie",
    icaClassification: "ROGUE CONTRACT // BIRDIE INTEL",
    handler: "Accordo Clandestino con Birdie",
    threatAssessment: "ALTO",
    primaryLocation: "Piazza Mercato di Chinatown, Chicago",
    targetsSummary: ["Il Re di Chinatown (King)"],
    briefingTranscript: "Per rintracciare chi sta cercando Victoria, hai bisogno delle informazioni dell'informatore Birdie. Il suo prezzo è l'eliminazione del 'Re di Chinatown', uno spacciatore paranoico protetto da polizia corrotta nel mezzo di una piazza affollata. Usa la folla come scudo ed eliminalo senza farti notare.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Veleno Fugu / Caffè / Auto)",
        badge: "CHINATOWN GHOST // ACCIDENT KILL",
        description: "Ruba la tossina del pesce palla dalla bancarella del pesce, versa il veleno nella droga o nel caffè sul tavolo del gazebo, oppure attiralo alla sua auto sportiva sabotata.",
        recommendedSuit: "Abito Nero / Tenuta Spacciatore o Poliziotto",
        loadout: [
          {
            id: "ab-02-fugu",
            name: "Veleno di Pesce Palla Fugu (Bancarella Mercato)",
            category: "tool",
            categoryLabel: "Tossina Letale",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Inseribile sia nello spiedino al chiosco che nella polvere di cocaina nell'appartamento.",
            tacticalTip: "Il Re viene regolarmente a mangiare dal venditore di street food al centro della piazza."
          },
          {
            id: "ab-02-bomb",
            name: "Carica C4 sull'Auto Sportiva / Cecchino",
            category: "tool",
            categoryLabel: "Esplosivo / Diversivo",
            concealment: "Occultabile",
            lethality: "Letale",
            description: "Fai suonare l'allarme dell'auto sportiva per attirare il Re lontano dalle guardie.",
            tacticalTip: "Puoi spingerlo nella botola aperta nel vicolo dietro le bancarelle."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-ab-02-1",
        targetOrTask: "Elimina il Re di Chinatown",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Gazebo Centrale / Appartamento Spacciatore",
        recommendedMethod: "Avvelenamento del cibo di strada o caduta nella botola fognaria",
        intelNotes: "La piazza pullula di civili e agenti di polizia: agisci con massima discrezione."
      }
    ],
    silentAssassinRules: [
      "Zero civili o poliziotti feriti nella piazza",
      "Esfiltrazione dalla porta d'uscita nord-est"
    ],
    extractionPoints: [
      {
        id: "ext-ab-02-gate",
        name: "Arco d'Uscita di Chinatown",
        description: "Verso l'incontro con Birdie e l'Hotel Terminus.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "ab-terminus-run",
    missionNumber: "03",
    missionTitle: "Terminus & Run for Your Life",
    gameSubtitle: "Hitman: Absolution",
    operationCodename: "OP-AB-03 // Agguato all'Hotel Terminus",
    icaClassification: "ROGUE SURVIVAL // BLAKE DEXTER",
    handler: "Nessun Handler (In Fuga dalla Polizia)",
    threatAssessment: "CRITICO",
    primaryLocation: "Hotel Terminus & Tetti/Biblioteca di Chicago",
    targetsSummary: ["Blake Dexter (Ricognizione)", "Sanchez (Fuga)", "Forze Speciali Chicago"],
    briefingTranscript: "Birdie ti ha indirizzato verso l'Hotel Terminus, stanza 899, dove alloggia il magnate delle armi Blake Dexter. Ma Dexter e il suo colosso Sanchez ti tendono un'imboscata e incendiano l'hotel per incastrarti. Sfuggi alle fiamme, attraversa la biblioteca presidiata dalla polizia di Chicago e salta sul treno metropolitano in corsa.",
    approaches: [
      {
        id: "tactical_infiltrator",
        title: "Evasione Furtiva (Elettricista & Poliziotto)",
        badge: "ZERO SHOTS // CROWD BLEND",
        description: "Indossa gli abiti dell'elettricista al Terminus per salire al piano 8, poi nella biblioteca sfrutta l'Istinto tra i fumi dei lacrimogeni per eludere gli agenti SWAT.",
        recommendedSuit: "Uniforme Elettricista Terminus / Agente Chicago PD",
        loadout: [
          {
            id: "ab-03-wrench",
            name: "Chiave Inglese / Fusibile Terminus",
            category: "tool",
            categoryLabel: "Strumento Tecnico",
            concealment: "Occultabile",
            lethality: "Non Letale",
            description: "Utile per attirare e tramortire i mercenari di Dexter nei corridoi dell'albergo.",
            tacticalTip: "Usa i cornicioni esterni dell'Hotel Terminus per evitare le ronde principali."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-ab-03-1",
        targetOrTask: "Raggiungi la Suite 899 di Blake Dexter al Terminus",
        type: "intel",
        typeLabel: "Ricognizione",
        priority: "CRITICA",
        location: "Ottavo Piano Hotel Terminus",
        recommendedMethod: "Passaggio dai condotti di servizio e dai cornicioni esterni",
        intelNotes: "Dexter scoprirà Victoria grazie a Sanchez: preparati a fuggire dall'incendio."
      },
      {
        id: "obj-ab-03-2",
        targetOrTask: "Eludi la Polizia nella Biblioteca e Raggiungi il Treno",
        type: "extraction",
        typeLabel: "Fuga Urbana",
        priority: "CRITICA",
        location: "Biblioteca Storica & Stazione Sopraelevata",
        recommendedMethod: "Fuga silenziosa sfruttando le coperture e i treni in transito",
        intelNotes: "Evita la luce dei fari dell'elicottero sui tetti."
      }
    ],
    silentAssassinRules: [
      "Nessun agente di polizia o civile nella serra ucciso",
      "Mantieni la copertura senza attivare sparatorie nella stazione"
    ],
    extractionPoints: [
      {
        id: "ext-ab-03-train",
        name: "Treno della Metropolitana Sopraelevata",
        description: "Fuga verso il distretto di Vixen Club.",
        riskLevel: "Medio"
      }
    ]
  },
  {
    missionId: "ab-hunter-hunted",
    missionNumber: "04",
    missionTitle: "Hunter and Hunted (Chicago)",
    gameSubtitle: "Hitman: Absolution",
    operationCodename: "OP-AB-04 // Caccia ai Corrotti di Vixen",
    icaClassification: "ROGUE COUNTER-STRIKE // CHICAGO",
    handler: "Birdie (Contatto Telefonico)",
    threatAssessment: "CRITICO",
    primaryLocation: "Vixen Club, Negozi & Stazione Ferroviaria, Chicago",
    targetsSummary: ["Dom Osmond", "Bill Dole", "Larry Clay", "Frank Owens"],
    briefingTranscript: "Birdie è stato catturato dagli uomini di Blake Dexter. Il proprietario del Vixen Club, Dom Osmond, e tre scagnozzi corrotti (Bill Dole, Larry Clay, Frank Owens) stanno dando la caccia al tuo informatore a Chinatown. Elimina Dom Osmond nel suo club privato e liquida i tre sicari prima che scovino Birdie.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Specchio a Due Vie & Fuochi Chinatown)",
        badge: "4 TARGETS // ZERO COLLATERAL",
        description: "Spara a Dom Osmond attraverso lo specchio a due vie del suo ufficio o folgoralo nella cabina privata; elimina i 3 cacciatori a Chinatown con incidenti elettrici o veleno.",
        recommendedSuit: "Abito Nero / Divisa Buttafuori Vixen Club",
        loadout: [
          {
            id: "ab-04-silverballer",
            name: "Silverballer Silenziata (.45 ACP)",
            category: "firearm",
            categoryLabel: "Pistola Furtiva",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Neutralizza Dom Osmond attraverso il vetro unidirezionale e colpisce le pompe elettriche a Chinatown.",
            tacticalTip: "A Chinatown fai cadere il pallet sospeso sopra uno dei bersagli e usa l'elettricità sulla pozzanghera per l'altro."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-ab-04-1",
        targetOrTask: "Elimina Dom Osmond al Vixen Club",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Vixen Club - Sala Privata",
        recommendedMethod: "Colpo attraverso lo specchio segreto o strangolamento nel camerino",
        intelNotes: "Non dimenticare di distruggere le prove video nello spogliatoio."
      },
      {
        id: "obj-ab-04-2",
        targetOrTask: "Elimina Bill Dole, Larry Clay e Frank Owens",
        type: "elimination",
        typeLabel: "Triplice Eliminazione",
        priority: "CRITICA",
        location: "Distretto Mercato & Stazione",
        recommendedMethod: "Incidenti con gru, cavi elettrici o veleno nei vicoli",
        intelNotes: "Tutti e tre si trovano nei vicoli intorno a Chinatown cercando Birdie."
      }
    ],
    silentAssassinRules: [
      "Zero civili o ballerine del club feriti",
      "Usa l'uscita alla stazione ferroviaria"
    ],
    extractionPoints: [
      {
        id: "ext-ab-04-station",
        name: "Treno alla Stazione di Chicago",
        description: "Verso l'Orfanotrofio Rosewood.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "ab-rosewood",
    missionNumber: "05",
    missionTitle: "Rosewood",
    gameSubtitle: "Hitman: Absolution",
    operationCodename: "OP-AB-05 // Assedio all'Orfanotrofio",
    icaClassification: "PERSONAL PROTECT // VICTORIA",
    handler: "Nessun Handler (Difesa Diretta)",
    threatAssessment: "CRITICO",
    primaryLocation: "Orfanotrofio Rosewood, Chicago",
    targetsSummary: ["Edward Wade", "Mercenari di Wade"],
    briefingTranscript: "Birdie ha venduto la posizione di Victoria a Blake Dexter per salvarsi la pelle. Il mercenario Edward Wade e i suoi uomini hanno fatto irruzione nell'orfanotrofio Rosewood, giustiziando il personale per rapire la ragazza. Ripristina l'energia elettrica dell'ascensore con i fusibili, elimina Wade e salva Victoria.",
    approaches: [
      {
        id: "tactical_infiltrator",
        title: "Caccia Silenziosa nell'Orfanotrofio",
        badge: "HOSTAGE RESCUE // FUSES & STEAM",
        description: "Raccogli i 4 fusibili negli uffici e nei dormitori evitando i mercenari armati, poi libera l'accesso al riscaldamento centrale per soffocare o colpire Edward Wade nel vapore.",
        recommendedSuit: "Abito Nero da Sicario",
        loadout: [
          {
            id: "ab-05-wire",
            name: "Fiber Wire & Siringa",
            category: "melee",
            categoryLabel: "Eliminazione Silenziosa",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Neutralizza i mercenari nei corridoi bui prima che uccidano le suore rimaste.",
            tacticalTip: "Apri le valvole del vapore nella sala caldaie per accecare Wade nello scontro finale."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-ab-05-1",
        targetOrTask: "Trova i Fusibili e Ripristina l'Ascensore per il Seminterrato",
        type: "intel",
        typeLabel: "Riparazione",
        priority: "PRIMARIA",
        location: "Ala Principale Orfanotrofio",
        recommendedMethod: "Recupero silenzioso dei 4 fusibili evitando le pattuglie",
        intelNotes: "Ogni fusibile è segnalato dall'Istinto."
      },
      {
        id: "obj-ab-05-2",
        targetOrTask: "Elimina Edward Wade e i Suoi Mercenari",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Sala Caldaie Sotterranea",
        recommendedMethod: "Sfrutta le valvole del vapore e colpisci alle spalle o con Point Shooting",
        intelNotes: "Nonostante l'uccisione di Wade, Lenny Dexter riuscirà a fuggire portando via Victoria."
      }
    ],
    silentAssassinRules: [
      "Nessun membro del personale dell'orfanotrofio ferito da te",
      "Neutralizza i mercenari prima che completino la ricerca"
    ],
    extractionPoints: [
      {
        id: "ext-ab-05-exit",
        name: "Uscita Garage dell'Orfanotrofio",
        description: "Partenza immediata verso Hope, South Dakota.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "ab-welcome-hope",
    missionNumber: "06",
    missionTitle: "Welcome to Hope & Birdie's Gift",
    gameSubtitle: "Hitman: Absolution",
    operationCodename: "OP-AB-06 // Infiltrazione a Hope & Recupero Silverballers",
    icaClassification: "ROGUE INTEL // HOPE, SOUTH DAKOTA",
    handler: "Ricognizione Autonoma 47",
    threatAssessment: "ALTO",
    primaryLocation: "Great Balls of Fire Bar & Armeria di Hope, South Dakota",
    targetsSummary: ["Informazioni su Lenny Dexter", "Dual Silverballers"],
    briefingTranscript: "Sei giunto a Hope, South Dakota, feudo privato della famiglia Dexter. Prima di colpire la banda di Lenny Dexter, recupera informazioni al Great Balls of Fire Bar e riprenditi le tue leggendarie Silverballers custodite nel banco dei pegni di Hope (vincendo la sfida di tiro o rubando la chiave della teca).",
    approaches: [
      {
        id: "silent_assassin",
        title: "Sfida di Precisione al Poligono (Zero Crimini)",
        badge: "MASTER MARKSMAN // SILVERBALLERS RECLAIMED",
        description: "Accetta la gara di tiro contro il campione locale nel poligono dietro l'armeria per riconquistare legalmente e senza spari le tue pistole gemelle.",
        recommendedSuit: "Abito Classico Nero",
        loadout: [
          {
            id: "ab-06-ballers",
            name: "Dual Silverballers Recuperate (.45 ACP)",
            category: "firearm",
            categoryLabel: "Recupero Arma Firma",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Le pistole personali di 47 vendute da Birdie al proprietario dell'armeria.",
            tacticalTip: "Usa i fucili d'assalto o le pistole al poligono per superare i 471 punti richiesti!"
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-ab-06-1",
        targetOrTask: "Raccogli Informazioni al Bar di Hope",
        type: "intel",
        typeLabel: "Ricognizione",
        priority: "PRIMARIA",
        location: "Great Balls of Fire Bar",
        recommendedMethod: "Ascolta le conversazioni della gang o provoca la rissa diversivo",
        intelNotes: "Rivela la posizione della banda 'The Cougars' di Lenny Dexter."
      },
      {
        id: "obj-ab-06-2",
        targetOrTask: "Recupera le Dual Silverballers dal Banco dei Pegni",
        type: "intel",
        typeLabel: "Recupero Arsenale",
        priority: "CRITICA",
        location: "Armeria di Hope",
        recommendedMethod: "Vinci la gara al poligono o recupera la chiave dalla cassaforte sul retro",
        intelNotes: "Indispensabili per affrontare le missioni successive in South Dakota."
      }
    ],
    silentAssassinRules: [
      "Zero civili o poliziotti feriti durante il recupero delle armi"
    ],
    extractionPoints: [
      {
        id: "ext-ab-06-street",
        name: "Uscita sul Viale di Hope",
        description: "Conduce al quartiere officina di Lenny Dexter.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "ab-shaving-lenny",
    missionNumber: "07",
    missionTitle: "Shaving Lenny",
    gameSubtitle: "Hitman: Absolution",
    operationCodename: "OP-AB-07 // Smantellamento della Banda Cougars",
    icaClassification: "ROGUE STRIKE // HOPE",
    handler: "Ricognizione Autonoma 47",
    threatAssessment: "ALTO",
    primaryLocation: "Strade, Officina & Barbiere di Hope",
    targetsSummary: ["Tyler Colvin", "Gavin LeBlond", "Landon Metcalf", "Mason McCready", "Luke Wheeley"],
    briefingTranscript: "Lenny Dexter si nasconde nella bottega del barbiere mentre i suoi cinque sgherri spadroneggiano per le strade di Hope. Elimina Tyler Colvin, Gavin LeBlond, Landon Metcalf, Mason McCready e Luke Wheeley usando gli incidenti locali, poi cattura Lenny travestito da barbiere.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (5 Incidenti + Barbiere)",
        badge: "5 TARGETS // ACCIDENT CHAIN",
        description: "Fai esplodere la pompa di benzina o il cavo elettrico su LeBlond, sabota il motore sospeso nell'officina su McCready, avvelena la salsa piccante per Wheeley e spingi Metcalf nella fogna aperta.",
        recommendedSuit: "Divisa Barbiere / Meccanico / Poliziotto Hope",
        loadout: [
          {
            id: "ab-07-wrench",
            name: "Chiave Inglese & Veleno (Officina/Cucina)",
            category: "tool",
            categoryLabel: "Sabotaggio",
            concealment: "Occultabile",
            lethality: "Letale",
            description: "Consente di orchestrare cinque incidenti mortali indistinguibili dalla sfortuna.",
            tacticalTip: "Rivestiti da barbiere al termine per far accomodare Lenny Dexter sulla poltrona e rapirlo!"
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-ab-07-1",
        targetOrTask: "Elimina Tyler Colvin e Landon Metcalf",
        type: "elimination",
        typeLabel: "Doppia Eliminazione",
        priority: "CRITICA",
        location: "Minimarket & Strade di Hope",
        recommendedMethod: "Sabotaggio fuga di gas al negozio e cavo elettrico / tombino aperto",
        intelNotes: "Controlla i poliziotti in pattuglia intorno alle strade."
      },
      {
        id: "obj-ab-07-2",
        targetOrTask: "Elimina Gavin LeBlond, Mason McCready e Luke Wheeley",
        type: "elimination",
        typeLabel: "Triplice Eliminazione",
        priority: "CRITICA",
        location: "Officina Meccanica & Tavola Calda",
        recommendedMethod: "Caduta auto dal ponte sollevatore e salsa piccante / griglia avvelenata",
        intelNotes: "Una volta eliminati tutti i membri, entra dal barbiere per catturare Lenny."
      }
    ],
    silentAssassinRules: [
      "Zero poliziotti o cittadini di Hope feriti",
      "Cattura Lenny vivo dal barbiere per interrogarlo nel deserto"
    ],
    extractionPoints: [
      {
        id: "ext-ab-07-barber",
        name: "Poltrona del Barbiere (Interrogatorio)",
        description: "Conduce Lenny nel bagagliaio verso il deserto.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "ab-end-road",
    missionNumber: "08",
    missionTitle: "End of the Road",
    gameSubtitle: "Hitman: Absolution",
    operationCodename: "OP-AB-08 // Interrogatorio nel Deserto",
    icaClassification: "ROGUE INTERROGATION // DESERT",
    handler: "Agente 47",
    threatAssessment: "BASSO",
    primaryLocation: "Deserto del South Dakota",
    targetsSummary: ["Lenny Dexter (Scelta Morale)"],
    briefingTranscript: "Hai costretto Lenny a scavarsi la fossa nel deserto del South Dakota e hai estorto l'ultima informazione: Victoria si trova nei laboratori segreti della Dexter Industries. Decidi il destino finale di Lenny Dexter prima di ripartire.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Scelta Canonica (Abbandono nel Deserto o Esecuzione)",
        badge: "NO WITNESSES // MORAL CROSSROADS",
        description: "Puoi eseguire la sentenza con una delle armi presenti nel bagagliaio della tua auto o lasciarlo morire di sete nel deserto arido senza sprecare un proiettile.",
        recommendedSuit: "Abito Classico Nero",
        loadout: [
          {
            id: "ab-08-silverballer",
            name: "Silverballer Silenziata (.45 ACP)",
            category: "firearm",
            categoryLabel: "Pistola Firma",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Disponibile nel bagagliaio insieme al machete e al fucile a pompa.",
            tacticalTip: "Se lasci la scena guidando via senza ucciderlo direttamente, sblocchi comunque il proseguimento verso la fabbrica."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-ab-08-1",
        targetOrTask: "Risolvi la Sorte di Lenny Dexter",
        type: "elimination",
        typeLabel: "Esecuzione / Abbandono",
        priority: "CRITICA",
        location: "Canyon Desertico South Dakota",
        recommendedMethod: "Esecuzione silenziosa o abbandono nel deserto oltre l'auto",
        intelNotes: "Lenny ha già rivelato l'ubicazione della Death Factory."
      }
    ],
    silentAssassinRules: [
      "Nessuna prova o traccia lasciata indietro"
    ],
    extractionPoints: [
      {
        id: "ext-ab-08-car",
        name: "Auto Verso la Dexter Industries",
        description: "Direzione stabilimento di ricerca sotterraneo.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "ab-death-factory",
    missionNumber: "09",
    missionTitle: "Dexter Industries & Death Factory",
    gameSubtitle: "Hitman: Absolution",
    operationCodename: "OP-AB-09 // Laboratori Biologici Dexter",
    icaClassification: "ROGUE INFILTRATION // BIO-LAB",
    handler: "Ricognizione Autonoma 47",
    threatAssessment: "CRITICO",
    primaryLocation: "Fabbrica di Armi & Laboratori Sotterranei, South Dakota",
    targetsSummary: ["Dr. Marcus Green", "Dr. Raymond Valentine", "Dr. Warren Ashford"],
    briefingTranscript: "Nella fabbrica sotterranea di Dexter tre scienziati sadici stanno conducendo esperimenti disumani sul DNA di Victoria e testando armi letali su cavie umane. Infiltrati nei laboratori segreti, distruggi i dati delle ricerche ed elimina i tre dottori: Marcus Green, Raymond Valentine e Warren Ashford.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Test Mortali Ritornati)",
        badge: "LAB ACCIDENTS // ZERO SHOTS",
        description: "Indossa il camice da ricercatore: intrappola Ashford nella camera di decontaminazione a gas tossico, usa il braccio robotico su Green e sabota l'impianto elettrico su Valentine.",
        recommendedSuit: "Tuta Scienziato Bio-Lab / Guardia Dexter",
        loadout: [
          {
            id: "ab-09-keycard",
            name: "Tessera Magnetica Ricercatore",
            category: "pickup",
            categoryLabel: "Accesso Lab",
            concealment: "Non Rilevabile",
            lethality: "Supporto / Infiltrazione",
            description: "Permette l'ingresso nelle sale test e nell'archivio dei campioni di Victoria.",
            tacticalTip: "Recupera il ciondolo/ricerca prima di uscire verso il livello successivo."
          },
          {
            id: "ab-09-wire",
            name: "Fiber Wire ICA",
            category: "melee",
            categoryLabel: "Garrota",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Elimina silenziosamente gli scienziati nei corridoi isolati.",
            tacticalTip: "Sfrutta i macchinari di test per far risultare le uccisioni incidenti di laboratorio."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-ab-09-1",
        targetOrTask: "Elimina i Tre Scienziati (Green, Valentine, Ashford)",
        type: "elimination",
        typeLabel: "Triplice Eliminazione",
        priority: "CRITICA",
        location: "Sale Test Chimici & Silos",
        recommendedMethod: "Camera di decontaminazione tossica, braccio meccanico e scossa elettrica",
        intelNotes: "Ogni scienziato opera in una diversa ala del laboratorio di tortura."
      },
      {
        id: "obj-ab-09-2",
        targetOrTask: "Recupera i Dati su Victoria e Fuggi dal Complesso",
        type: "intel",
        typeLabel: "Recupero Dati",
        priority: "CRITICA",
        location: "Archivio Centrale R&D",
        recommendedMethod: "Sottrazione dati dal terminale e fuga verso l'ascensore di risalita",
        intelNotes: "I dati confermano che Sanchez tiene prigioniera Victoria nell'arena."
      }
    ],
    silentAssassinRules: [
      "Nessuna guardia di sicurezza o tecnico non bersaglio ucciso",
      "Usa le camere di prova come incidenti"
    ],
    extractionPoints: [
      {
        id: "ext-ab-09-elev",
        name: "Ascensore della Miniera",
        description: "Uscita verso il ring di Fight Night.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "ab-fight-night",
    missionNumber: "10",
    missionTitle: "Fight Night",
    gameSubtitle: "Hitman: Absolution",
    operationCodename: "OP-AB-10 // Il Gigante sul Ring",
    icaClassification: "ROGUE CLASH // SANCHEZ",
    handler: "Ricognizione Autonoma 47",
    threatAssessment: "CRITICO",
    primaryLocation: "Arena Clandestina di Hope, South Dakota",
    targetsSummary: ["Sanchez (Campione Geneticamente Potenziato)"],
    briefingTranscript: "Sanchez, il colossale guardaspalle geneticamente potenziato di Blake Dexter, si esibisce in incontri clandestini nell'arena sotterranea di Hope. Sostituisciti al suo sfidante mascherato ('El Patriot'), affrontalo sul ring davanti alla folla esaltata o fai crollare le pesanti luci dell'arena direttamente sul quadrato.",
    approaches: [
      {
        id: "tactical_infiltrator",
        title: "Duello Mascherato sul Ring ('The Patriot')",
        badge: "CANONICA // KNOCKOUT BLOW",
        description: "Metti ko 'El Patriot' negli spogliatoi, indossa la sua maschera da lottatore, sali sul ring ed esegui la sequenza letale contro Sanchez davanti al pubblico.",
        recommendedSuit: "Costume da Lottatore 'The Patriot'",
        loadout: [
          {
            id: "ab-10-mask",
            name: "Maschera & Cintura di The Patriot",
            category: "suit",
            categoryLabel: "Travestimento Ring",
            concealment: "Visibile",
            lethality: "Supporto / Infiltrazione",
            description: "Ti permette di salire sul ring senza che alcuna guardia ti fermi.",
            tacticalTip: "In alternativa, sali sulle passerelle superiori dell'arena e sgancia l'impianto luci su Sanchez."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-ab-10-1",
        targetOrTask: "Elimina Sanchez",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Ring Centrale dell'Arena",
        recommendedMethod: "Scontro corpo a corpo travestito da Patriot o crollo del traliccio luci",
        intelNotes: "Sanchez è troppo corpulento per la corda di pianoforte normale: usa il ring o l'impianto luci."
      }
    ],
    silentAssassinRules: [
      "Nessuno spettatore o lottatore negli spogliatoi ucciso",
      "Abbatti Sanchez in modo spettacolare o con incidente sul ring"
    ],
    extractionPoints: [
      {
        id: "ext-ab-10-exit",
        name: "Uscita Posteriore dell'Arena",
        description: "Verso il Motel Waikiki lungo l'autostrada.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "ab-attack-saints",
    missionNumber: "11",
    missionTitle: "Attack of the Saints",
    gameSubtitle: "Hitman: Absolution",
    operationCodename: "OP-AB-11 // La Squadra Assassina 'Le Sante'",
    icaClassification: "PROTOCOL ZERO // ICA HIT SQUAD",
    handler: "Nessun Handler (Attacco Diretto ICA)",
    threatAssessment: "MASSIMO",
    primaryLocation: "Motel Waikiki & Campo di Mais, South Dakota",
    targetsSummary: ["Lasandra Dixon", "Heather McCarthy", "Jennifer Paxton", "Sorelle Radoncic", "Louisa Cain", "Jaqueline Moorhead"],
    briefingTranscript: "Benjamin Travis ha perso la pazienza e ha inviato contro di te la sua squadra d'élite personale: 'Le Sante' (The Saints), sette letali assassine dell'ICA travestite da suore armate fino ai denti. Hanno raso al suolo metà del motel con un lanciarazzi. Usa la notte, il campo di mais e gli esplosivi per eliminarle tutte e sette silenziosamente.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Agguato nel Campo di Mais)",
        badge: "7 ELITE TARGETS // CORNFIELD STALKER",
        description: "Sfrutta l'alta vegetazione del campo di mais e gli spaventapasseri per nascondere i corpi, attirando le sette Sante una alla volta lontano dalle loro scorte ICA.",
        recommendedSuit: "Abito Strappato / Tenuta Spaventapasseri o Mercenario ICA",
        loadout: [
          {
            id: "ab-11-silverballer",
            name: "Dual Silverballers Silenziate (.45 ACP)",
            category: "firearm",
            categoryLabel: "Pistole Furtive",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Indispensabili per abbattere le cecchine sui tetti e nei silos del campo.",
            tacticalTip: "Fai esplodere la pompa di benzina al parcheggio per eliminarne due insieme."
          },
          {
            id: "ab-11-wire",
            name: "Fiber Wire ICA",
            category: "melee",
            categoryLabel: "Garrota",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Silenziosa tra le file di mais nella seconda e terza zona.",
            tacticalTip: "Non lasciare che i mercenari di supporto ti accerchino nella reception del motel."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-ab-11-1",
        targetOrTask: "Elimina Lasandra Dixon e il Primo Nucleo (Parcheggio Motel)",
        type: "elimination",
        typeLabel: "Eliminazione Squadra",
        priority: "CRITICA",
        location: "Parcheggio & Camere Motel",
        recommendedMethod: "Sabotaggio distributore carburante o eliminazioni silenziose alle spalle",
        intelNotes: "Le Sante sono addestrate al riconoscimento immediato dei travestimenti ICA."
      },
      {
        id: "obj-ab-11-2",
        targetOrTask: "Elimina i Restanti Membri de 'Le Sante' nel Campo di Mais",
        type: "elimination",
        typeLabel: "Eliminazione Squadra",
        priority: "CRITICA",
        location: "Reception & Campo di Mais",
        recommendedMethod: "Agguati tra il granturco, silenziatore e Point Shooting",
        intelNotes: "Usa l'abito da spaventapasseri per confonderti nel campo."
      }
    ],
    silentAssassinRules: [
      "Elimina tutte e sette le Sante senza farti scoprire dai rinforzi ICA",
      "Evita gli scontri frontali contro i fucili d'assalto"
    ],
    extractionPoints: [
      {
        id: "ext-ab-11-road",
        name: "Strada Principale verso il Tribunale di Hope",
        description: "Dopo aver annientato l'intera squadra di Travis.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "ab-skurky-law",
    missionNumber: "12",
    missionTitle: "Skurky's Law & Operation Sledgehammer",
    gameSubtitle: "Hitman: Absolution",
    operationCodename: "OP-AB-12 // Caccia allo Sceriffo Corrotto",
    icaClassification: "ROGUE JUSTICE // HOPE COURTHOUSE",
    handler: "Ricognizione Autonoma 47",
    threatAssessment: "CRITICO",
    primaryLocation: "Tribunale, Prigioni & Chiesa di Hope",
    targetsSummary: ["Sceriffo Clive Skurky"],
    briefingTranscript: "Lo sceriffo Clive Skurky, corrotto fino al midollo da Dexter, ti ha incastrato nel tribunale mentre l'ICA stessa invade la città di Hope con elicotteri e forze armate (Operazione Sledgehammer) pur di catturarti. Evadi dalle celle, sopravvivi all'assedio cittadino e giustizia Skurky nella chiesa sconsacrata.",
    approaches: [
      {
        id: "tactical_infiltrator",
        title: "Evasione dal Tribunale (Giudice / Avvocato) & Assedio",
        badge: "CITY UNDER SIEGE // COURT ESCAPE",
        description: "Travestiti da giudice o avvocato nel tribunale per liberare i passaggi verso le prigioni, poi sfrutta la confusione tra la polizia di Hope e i mercenari ICA per colpire Skurky in chiesa.",
        recommendedSuit: "Toga da Giudice / Uniforme Mercenario ICA",
        loadout: [
          {
            id: "ab-12-silverballer",
            name: "Silverballer Silenziata (.45 ACP)",
            category: "firearm",
            categoryLabel: "Pistola Furtiva",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Neutralizza i cecchini ICA lungo la strada principale in fiamme.",
            tacticalTip: "Skurky ferito si rifugia vicino all'altare della chiesa: raggiungilo prima che muoia dissanguato o scappi."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-ab-12-1",
        targetOrTask: "Evadi dal Tribunale e Attraversa Hope sotto Assedio",
        type: "intel",
        typeLabel: "Fuga Urbana",
        priority: "PRIMARIA",
        location: "Tribunale & Strade di Hope",
        recommendedMethod: "Passaggio attraverso le celle e i vicoli laterali evitando gli elicotteri",
        intelNotes: "Le truppe ICA e gli agenti di polizia sono ai ferri corti."
      },
      {
        id: "obj-ab-12-2",
        targetOrTask: "Elimina lo Sceriffo Clive Skurky",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Chiesa di Hope",
        recommendedMethod: "Estorci l'ubicazione di Victoria (Chicago - Blackwater Park) e finiscilo",
        intelNotes: "Skurky ti rivelerà dove Dexter sta portando Victoria."
      }
    ],
    silentAssassinRules: [
      "Zero civili di Hope coinvolti nella fuga",
      "Completa l'interrogatorio di Skurky nella chiesa"
    ],
    extractionPoints: [
      {
        id: "ext-ab-12-chicago",
        name: "Ritorno a Chicago (Sartoria Tommy)",
        description: "Direzione finale verso il grattacielo Blackwater Park.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "ab-blackwater-park",
    missionNumber: "13",
    missionTitle: "One of a Kind & Blackwater Park",
    gameSubtitle: "Hitman: Absolution",
    operationCodename: "OP-AB-13 // L'Attico di Blackwater Park",
    icaClassification: "ROGUE INFILTRATION // CHICAGO PENTHOUSE",
    handler: "Ricognizione Autonoma 47",
    threatAssessment: "MASSIMO",
    primaryLocation: "Sartoria & Grattacielo Blackwater Park, Chicago",
    targetsSummary: ["Layla Stockton (Assistente di Dexter)"],
    briefingTranscript: "Dopo aver confezionato un nuovo abito su misura dal sarto Tommy, infiltrati nel grattacielo ultra-sorvegliato di Blackwater Park a Chicago. Supera lo scanner biometrico della lobby grazie a un dipendente corrotto o un dirigente e raggiungi l'attico di Blake Dexter per eliminare la sua spietata assistente Layla Stockton.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Scanner Retinico & Sala Cinema)",
        badge: "PENTHOUSE STEALTH // LAYLA STOCKTON",
        description: "Entra nel garage, usa l'ascensore di servizio evitando le guardie Blackwater e neutralizza Layla Stockton nella sala trofei o con il veleno nel sushi.",
        recommendedSuit: "Abito Nuovo Su Misura / Uniforme Guardia Blackwater",
        loadout: [
          {
            id: "ab-13-sushi",
            name: "Veleno Letale (Piatto di Sushi all'Attico)",
            category: "tool",
            categoryLabel: "Tossina",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Inseribile nel cibo giapponese esposto nel salone centrale dell'attico.",
            tacticalTip: "In alternativa, aziona l'osso di balena sospeso al soffitto della stanza dei trofei quando Layla passa sotto!"
          },
          {
            id: "ab-13-wire",
            name: "Fiber Wire ICA",
            category: "melee",
            categoryLabel: "Garrota",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Perfetta nella stanza proiezioni buia o dietro le librerie segrete.",
            tacticalTip: "Controlla sempre i laser della sala centrale."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-ab-13-1",
        targetOrTask: "Supera i Controlli di Blackwater Park fino all'Attico",
        type: "intel",
        typeLabel: "Infiltrazione",
        priority: "PRIMARIA",
        location: "Lobby, Garage & Ascensore Sicurezza",
        recommendedMethod: "Scansione biometrica del capo sicurezza o passaggio dai condotti",
        intelNotes: "Non dimenticare di prelevare i file di controllo nell'ufficio del custode."
      },
      {
        id: "obj-ab-13-2",
        targetOrTask: "Elimina Layla Stockton",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Attico Blackwater Park",
        recommendedMethod: "Caduta scheletro di balena, sushi avvelenato o strangolamento nella stanza sicura",
        intelNotes: "Layla cercherà di attirarti in una trappola con la sua pistola d'oro."
      }
    ],
    silentAssassinRules: [
      "Nessun membro del personale civile o guardia non ostile ucciso",
      "Raggiungi le scale dell'eliporto senza allarme generale"
    ],
    extractionPoints: [
      {
        id: "ext-ab-13-roof",
        name: "Scale verso l'Eliporto Superiore",
        description: "Conduce direttamente al confronto finale con Blake Dexter.",
        riskLevel: "Medio"
      }
    ]
  },
  {
    missionId: "ab-countdown",
    missionNumber: "14",
    missionTitle: "Countdown",
    gameSubtitle: "Hitman: Absolution",
    operationCodename: "OP-AB-14 // Duello sull'Eliporto in Fiamme",
    icaClassification: "ROGUE CLIMAX // VICTORIA RESCUE",
    handler: "Nessun Handler",
    threatAssessment: "MASSIMO",
    primaryLocation: "Tetto & Eliporto di Blackwater Park, Chicago",
    targetsSummary: ["Blake Dexter", "Ordigni C4 sul Tetto"],
    briefingTranscript: "Blake Dexter sta per fuggire in elicottero portando con sé Victoria e ha disseminato l'intero tetto di mine e cariche C4 per far saltare in aria il palazzo. Hai pochi minuti per aggirare le mine nell'oscurità del fumo, abbattere la scorta e giustiziare Dexter prima che decolli.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Infiltrazione Furtiva sul Tetto & Colpo a Bruciapelo",
        badge: "TIMED RESCUE // BLAKE DEXTER DOWN",
        description: "Disinnesca o aggira i sensori delle cariche esplosive sul tetto usando i condotti laterali, raggiungi la piattaforma dell'elicottero e abbatti Dexter con la Silverballer.",
        recommendedSuit: "Abito Classico Nero",
        loadout: [
          {
            id: "ab-14-silverballer",
            name: "Dual Silverballers Silenziate (.45 ACP)",
            category: "firearm",
            categoryLabel: "Pistole Firma",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Indispensabili per interrompere la fuga in elicottero di Blake Dexter.",
            tacticalTip: "Restituisci infine il ciondolo isotopico o salva Victoria prima dell'esplosione finale."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-ab-14-1",
        targetOrTask: "Elimina Blake Dexter sull'Eliporto e Salva Victoria",
        type: "elimination",
        typeLabel: "Eliminazione & Salvataggio",
        priority: "CRITICA",
        location: "Piattaforma Elicottero Blackwater Park",
        recommendedMethod: "Aggiramento mine sul lato est e colpo preciso con Silverballer / Point Shooting",
        intelNotes: "Dexter muore circondato dalle sue banconote svolazzanti sotto la pioggia."
      }
    ],
    silentAssassinRules: [
      "Completa l'operazione prima dello scadere del timer C4",
      "Proteggi Victoria dopo aver abbattuto Dexter"
    ],
    extractionPoints: [
      {
        id: "ext-ab-14-cornwall",
        name: "Fuga da Chicago verso la Cornovaglia",
        description: "Victoria viene messa al sicuro prima dello scontro finale con Travis.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "ab-absolution",
    missionNumber: "15",
    missionTitle: "Absolution (Il Cimitero di Cornovaglia)",
    gameSubtitle: "Hitman: Absolution",
    operationCodename: "OP-AB-15 // Resa dei Conti Contro Benjamin Travis",
    icaClassification: "FINAL JUDGEMENT // BURNWOOD FAMILY GRAVE",
    handler: "Diana Burnwood (Sopravvissuta in Segreto)",
    threatAssessment: "MASSIMO",
    primaryLocation: "Cimitero Parrocchiale di Cornovaglia, Inghilterra",
    targetsSummary: ["Jade Nguyen", "I Pretoriani (Scorta d'Élite)", "Benjamin Travis"],
    briefingTranscript: "Benjamin Travis è arrivato in Inghilterra con un'intera divisione militare dell'ICA e i tre invincibili Pretoriani per profanare la tomba dei Burnwood e verificare se Diana è davvero morta. È ora di chiudere i conti per sempre. Elimina l'assistente Jade Nguyen, abbatti i Pretoriani tra le tombe nebbiose e giustizia Travis davanti alla cripta.",
    approaches: [
      {
        id: "precision_sniper",
        title: "Cecchino nella Nebbia (Kazo TRG & C4 Cimitero)",
        badge: "3-STAGE FINALE // ZERO WITNESSES",
        description: "Sfrutta le lapidi e le trincee del cimitero per eliminare silenziosamente Jade nella prima sezione, piazza mine di prossimità o usa il fucile di precisione sui tre Pretoriani nella seconda, e raggiungi Travis nel crematorio.",
        recommendedSuit: "Abito Classico Nero ICA",
        loadout: [
          {
            id: "ab-15-kazo",
            name: "Fucile di Precisione Kazo TRG / Silverballer",
            category: "firearm",
            categoryLabel: "Precisione Letale",
            concealment: "Visibile",
            silenced: false,
            lethality: "Letale",
            description: "Perforazione efficace contro le corazze pesanti dei tre Pretoriani (Aegis, Hoplon, Scutum).",
            tacticalTip: "Puoi anche far brillare le mine C4 sparse lungo i sentieri del cimitero quando i Pretoriani passano accanto!"
          },
          {
            id: "ab-15-wire",
            name: "Fiber Wire ICA",
            category: "melee",
            categoryLabel: "Garrota",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Perfetta per neutralizzare Jade Nguyen silenziosamente tra le rovine.",
            tacticalTip: "Travis ferito nella cripta chiederà un'ultima verità su Diana prima del colpo di grazia."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-ab-15-1",
        targetOrTask: "Elimina Jade Nguyen nella Prima Sezione del Cimitero",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Cimitero Est - Rovina",
        recommendedMethod: "Strangolamento alle spalle o spinta nella fossa / detonatore",
        intelNotes: "Jade coordina le comunicazioni di Travis sul campo."
      },
      {
        id: "obj-ab-15-2",
        targetOrTask: "Elimina i Tre Pretoriani (Jack Aegis, John Hoplon, Carey Scutum)",
        type: "elimination",
        typeLabel: "Scontro Élite",
        priority: "CRITICA",
        location: "Cimitero Centrale",
        recommendedMethod: "Agguati esplosivi C4 o colpi di precisione tra le tombe nella nebbia",
        intelNotes: "Indossano armature pesanti e hanno riflessi avanzati."
      },
      {
        id: "obj-ab-15-3",
        targetOrTask: "Giustizia Benjamin Travis alla Cripta",
        type: "elimination",
        typeLabel: "Esecuzione Finale",
        priority: "CRITICA",
        location: "Crematorio e Tomba Burnwood",
        recommendedMethod: "Confronto ravvicinato e colpo finale con la Silverballer",
        intelNotes: "Diana e Victoria osservano in salvo da lontano: l'ICA corrotta viene ripulita."
      }
    ],
    silentAssassinRules: [
      "Neutralizza Jade e i Pretoriani senza far scattare gli allarmi dell'elicottero",
      "Confronta Travis per l'epilogo finale"
    ],
    extractionPoints: [
      {
        id: "ext-ab-15-cliff",
        name: "Ritorno da Diana e Victoria in Inghilterra",
        description: "Fine della diserzione e preludio alla ricostruzione dell'ICA.",
        riskLevel: "Basso"
      }
    ]
  }
];
