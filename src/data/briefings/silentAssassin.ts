import { MissionBriefingData } from "../briefingTypes";

export const SILENT_ASSASSIN_MISSIONS: MissionBriefingData[] = [
  {
    missionId: "sa-anathema",
    missionNumber: "01",
    missionTitle: "Anathema",
    gameSubtitle: "Hitman 2: Silent Assassin",
    operationCodename: "OP-SICILY-01 // Incursione a Villa Borghese",
    icaClassification: "PERSONAL CONTRACT // GONTRANNO RESCUE",
    handler: "Diana Burnwood (Contatto d'Emergenza ICA)",
    threatAssessment: "ALTO",
    primaryLocation: "Villa Borghese, Sicilia, Italia",
    targetsSummary: ["Don Giuseppe Guilliani"],
    briefingTranscript: "47, Padre Vittorio è stato rapito da uomini della mafia locale. Le nostre immagini satellitari indicano che potrebbe essere trattenuto nei sotterranei di Villa Borghese, residenza del boss Giuseppe Guilliani. Infiltrati nella tenuta, elimina il Don, ispeziona le cantine e trova ogni indizio utile su chi abbia davvero ordinato il sequestro.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Fattorino & Anestetico)",
        badge: "ZERO SPARI // MAZZA DA GOLF / GARROTA",
        description: "Usa il cloroformio sul fattorino dei fiori fuori dai cancelli per entrare alla villa, raggiungi lo studio al piano superiore ed elimina Don Guilliani silenziosamente.",
        recommendedSuit: "Divisa Fattorino / Abito Classico Nero",
        loadout: [
          {
            id: "sa-01-chloroform",
            name: "Bottiglietta di Cloroformio Anestetico",
            category: "tool",
            categoryLabel: "Anestetico",
            concealment: "Occultabile",
            lethality: "Non Letale",
            description: "Neutralizza senza uccidere il fattorino dei fiori o il fattorino della spesa.",
            tacticalTip: "Usa esattamente una dose alle spalle vicino alle mura per non sprecare scorte."
          },
          {
            id: "sa-01-wire",
            name: "Corda di Pianoforte ICA",
            category: "melee",
            categoryLabel: "Garrota",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Elimina il Don mentre pratica il putt sul balcone della sua camera.",
            tacticalTip: "Lancia l'anestetico o attendi che la guardia sul corridoio scenda in cucina."
          },
          {
            id: "sa-01-golfclub",
            name: "Mazza da Golf del Don (Recupero sul Balcone)",
            category: "melee",
            categoryLabel: "Contundente Letale",
            concealment: "Visibile",
            lethality: "Letale",
            description: "Disponibile direttamente sulla terrazza dello studio di Guilliani.",
            tacticalTip: "Recupera sempre la chiave della cantina dal corpo del boss."
          }
        ]
      },
      {
        id: "precision_sniper",
        title: "Cecchino dalla Collina Siciliana",
        badge: "OVERWATCH // COLPO DALLA GARITTA",
        description: "Posizionati sulla collina rocciosa a ovest della villa e colpisci Guilliani sul balcone del secondo piano.",
        recommendedSuit: "Abito Classico Nero",
        loadout: [
          {
            id: "sa-01-r93",
            name: "Fucile di Precisione R93 Sniper",
            category: "firearm",
            categoryLabel: "Fucile Precisione",
            concealment: "Visibile",
            lethality: "Letale",
            description: "Colpisce con precisione il balcone dalla collina opposta.",
            tacticalTip: "Scendi subito verso la cantina passando dall'orto mentre le guardie corrono al piano superiore."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-sa-01-1",
        targetOrTask: "Elimina Don Giuseppe Guilliani",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Studio e Balcone Secondo Piano - Villa Borghese",
        recommendedMethod: "Strangolamento alle spalle sul balcone da golf",
        intelNotes: "Guilliani custodisce la chiave della cella nei sotterranei."
      },
      {
        id: "obj-sa-01-2",
        targetOrTask: "Ispeziona la Cella Sotterranea e Trova Padre Vittorio",
        type: "intel",
        typeLabel: "Ricognizione",
        priority: "CRITICA",
        location: "Cantine della Villa",
        recommendedMethod: "Sblocca la porta sotterranea con la chiave del Don",
        intelNotes: "La cella è vuota: sul tavolo c'è solo un biglietto russo firmato dai rapitori."
      }
    ],
    silentAssassinRules: [
      "Nessun domestico, cuoco o guardia ucciso",
      "Usa solo il cloroformio sul personale di servizio se necessario",
      "Esfiltrazione verso l'auto ICA prima del rientro delle ronde"
    ],
    extractionPoints: [
      {
        id: "ext-sa-01-gate",
        name: "Cancello Principale della Villa",
        description: "Uscita verso la strada sterrata delle colline siciliane.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "sa-st-petersburg",
    missionNumber: "02",
    missionTitle: "St. Petersburg Stakeout",
    gameSubtitle: "Hitman 2: Silent Assassin",
    operationCodename: "OP-RUS-01 // Osservatorio su Pushkin",
    icaClassification: "ICA CONTRACT // ST. PETERSBURG",
    handler: "Diana Burnwood",
    threatAssessment: "ALTO",
    primaryLocation: "Piazza Pushkin, San Pietroburgo, Russia",
    targetsSummary: ["Generale Rinat Rumyantsev"],
    briefingTranscript: "In cambio delle nostre risorse satellitari, accetti i contratti dell'ICA in Russia. Quattro ex generali sovietici si incontrano nell'edificio governativo su Piazza Pushkin, ma solo uno è il bersaglio: quello che fuma e beve con la mano destra... verifica bene gli aggiornamenti in tempo reale prima di premere il grilletto dal palazzo abbandonato.",
    approaches: [
      {
        id: "precision_sniper",
        title: "Precision Sniper (Palazzo di Fronte)",
        badge: "CANONICA // UN SOLO COLPO",
        description: "Preleva l'SVD Dragunov dall'armadietto della metropolitana, raggiungi il secondo piano del palazzo abbandonato e colpisci il generale corretto.",
        recommendedSuit: "Abito Nero / Divisa Guardia Russa",
        loadout: [
          {
            id: "sa-02-svd",
            name: "Fucile Sniper Dragunov SVD (Armadietto 137)",
            category: "firearm",
            categoryLabel: "Fucile Precisione",
            concealment: "Visibile",
            lethality: "Letale",
            description: "Posizionato dall'ICA nell'armadietto della stazione metro.",
            tacticalTip: "Sparato un solo colpo alla testa attraverso la finestra socchiusa, abbandona l'edificio scendendo dalla scala sul retro."
          },
          {
            id: "sa-02-laptop",
            name: "Terminale ICA con Indizi Biometrici",
            category: "tool",
            categoryLabel: "Intelligence",
            concealment: "Non Rilevabile",
            lethality: "Supporto / Infiltrazione",
            description: "Diana invia 4 indizi progressivi sull'aspetto del bersaglio (calvo, non fuma, beve con destra, ecc.).",
            tacticalTip: "Attendi tutti e 4 gli indizi prima di sparare per non eliminare il generale sbagliato."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-sa-02-1",
        targetOrTask: "Identifica ed Elimina il Generale Corretto (Rinat Rumyantsev)",
        type: "elimination",
        typeLabel: "Eliminazione Selettiva",
        priority: "CRITICA",
        location: "Sala Riunioni Edificio Pushkin",
        recommendedMethod: "Unico colpo dalla finestra del palazzo opposto dopo aver ricevuto i 4 indizi di Diana",
        intelNotes: "Non usare la porta principale dell'edificio governativo: è sorvegliata da truppe armate."
      },
      {
        id: "obj-sa-02-2",
        targetOrTask: "Raggiungi la Metropolitana Kirov",
        type: "extraction",
        typeLabel: "Esfiltrazione",
        priority: "CRITICA",
        location: "Stazione Metro Pushkin",
        recommendedMethod: "Passa attraverso le fogne per evitare i posti di blocco militari",
        intelNotes: "Lascia il fucile nel palazzo se vuoi attraversare le strade senza destare sospetti."
      }
    ],
    silentAssassinRules: [
      "Un solo colpo sparato durante l'intera missione",
      "Nessun altro generale o guardia colpito",
      "Esfiltrazione alla metro senza allarme di stato"
    ],
    extractionPoints: [
      {
        id: "ext-sa-02-metro",
        name: "Banchina della Metropolitana di San Pietroburgo",
        description: "Treno sotterraneo diretto verso il distretto successivo.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "sa-kirov-park",
    missionNumber: "03",
    missionTitle: "Kirov Park Meeting",
    gameSubtitle: "Hitman 2: Silent Assassin",
    operationCodename: "OP-RUS-02 // Doppia Scintilla a Kirov Park",
    icaClassification: "ICA CONTRACT // ST. PETERSBURG",
    handler: "Diana Burnwood",
    threatAssessment: "ALTO",
    primaryLocation: "Parco Kirov, San Pietroburgo, Russia",
    targetsSummary: ["Generale Makarov", "Igor Kubasko"],
    briefingTranscript: "Il generale Makarov si incontrerà segretamente con il boss mafioso Igor Kubasko al centro del Parco Kirov. Entrambi devono morire. Le nostre squadre hanno depositato una valigetta con fucile di precisione e due cariche esplosive nelle fogne sotto il parco.",
    approaches: [
      {
        id: "tactical_infiltrator",
        title: "Sabotaggio Esplosivo sulle Limousine",
        badge: "ZERO WITNESS // AUTOBOMBA",
        description: "Raggiungi i due parcheggi delle auto di Makarov e Kubasko passando dai tombini, piazza le cariche C4 sulle vetture e falle brillare quando ripartono.",
        recommendedSuit: "Uniforme Soldato Russo",
        loadout: [
          {
            id: "sa-03-c4",
            name: "Cariche Esplosive Limousine (x2)",
            category: "tool",
            categoryLabel: "Esplosivo C4",
            concealment: "Occultabile",
            lethality: "Letale",
            description: "Depositate nell'armeria delle fogne ICA.",
            tacticalTip: "Piazza le bombe mentre gli autisti sono girati o distratti vicino al chiosco."
          },
          {
            id: "sa-03-svd",
            name: "Fucile SVD Dragunov (Alternativa Torre)",
            category: "firearm",
            categoryLabel: "Fucile Precisione",
            concealment: "Visibile",
            lethality: "Letale",
            description: "Consente di colpire entrambi i bersagli mentre si abbracciano al centro del parco.",
            tacticalTip: "Allineando i due bersagli in un unico istante è possibile eliminarli con un singolo proiettile perforante."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-sa-03-1",
        targetOrTask: "Elimina il Generale Makarov e Igor Kubasko",
        type: "elimination",
        typeLabel: "Doppia Eliminazione",
        priority: "CRITICA",
        location: "Parco Kirov (Statua Centrale)",
        recommendedMethod: "Autobombe sulle limousine o doppio colpo allineato dal campanile",
        intelNotes: "Se colpisci dal parco senza silenziatore, i cecchini sulle torri apriranno il fuoco."
      },
      {
        id: "obj-sa-03-2",
        targetOrTask: "Raggiungi l'Imbarcazione ICA sul Fiume Neva",
        type: "extraction",
        typeLabel: "Esfiltrazione",
        priority: "CRITICA",
        location: "Molo Sul Retro del Parco",
        recommendedMethod: "Fuga attraverso i tombini fognari verso il fiume",
        intelNotes: "Imbarcazione ormeggiata sul canale nord."
      }
    ],
    silentAssassinRules: [
      "Nessun autista o passante civile ucciso",
      "Usa le fogne per evitare i blocchi stradali Spetsnaz"
    ],
    extractionPoints: [
      {
        id: "ext-sa-03-boat",
        name: "Motoscafo sul Canale Neva",
        description: "Ormeggiato lungo il molo nord-ovest.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "sa-tubeway-torpedo",
    missionNumber: "04",
    missionTitle: "Tubeway Torpedo",
    gameSubtitle: "Hitman 2: Silent Assassin",
    operationCodename: "OP-RUS-03 // Cella Sotterranea",
    icaClassification: "ICA CRITICAL // MILITARY BASE",
    handler: "Diana Burnwood",
    threatAssessment: "CRITICO",
    primaryLocation: "Base Militare Sotterranea di San Pietroburgo",
    targetsSummary: ["Generale Mikhail Bardachenko", "Prigioniero da Salvare"],
    briefingTranscript: "Il generale Mikhail Bardachenko sta interrogando un nostro informatore nei sotterranei di una base militare collegata alla linea ferroviaria sotterranea. Infiltrati nella base a bordo del camion dei rifornimenti, elimina il generale nella sala interrogatori e libera il prigioniero facendo breccia nel muro delle fogne.",
    approaches: [
      {
        id: "tactical_infiltrator",
        title: "Infiltrato Militare (Uniforme Generale / Soldato)",
        badge: "STEALTH // SALVATAGGIO AGENT",
        description: "Nasconditi sul camion di rifornimento, indossa la divisa da soldato nelle docce ed elimina Bardachenko nella sala interrogatori.",
        recommendedSuit: "Uniforme Soldato Russo / Ufficiale",
        loadout: [
          {
            id: "sa-04-ballers",
            name: "Silverballer Silenziate (.45 ACP)",
            category: "firearm",
            categoryLabel: "Pistola Furtiva",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Neutralizza Bardachenko alle spalle durante la sessione di tortura.",
            tacticalTip: "Non colpire l'ostaggio legato alla sedia."
          },
          {
            id: "sa-04-bomb",
            name: "Carica Breccia & Cercapersone (Drop Base)",
            category: "tool",
            categoryLabel: "Esplosivo Tattico",
            concealment: "Occultabile",
            lethality: "Supporto / Infiltrazione",
            description: "Indispensabile per abbattere il muro di mattoni delle fogne e liberare la via di fuga.",
            tacticalTip: "Recupera bomba e telecomando dall'armadietto nel settore comando."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-sa-04-1",
        targetOrTask: "Elimina il Generale Mikhail Bardachenko",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Sala Interrogatori Livello -2",
        recommendedMethod: "Strangolamento o pistola silenziata dopo aver atteso l'allontanamento dell'aiutante",
        intelNotes: "La sala interrogatori ha un vetro unidirezionale: controlla prima di entrare."
      },
      {
        id: "obj-sa-04-2",
        targetOrTask: "Libera il Prigioniero ed Esci dal Tunnel Sotterraneo",
        type: "safeguard",
        typeLabel: "Salvataggio & Esfiltrazione",
        priority: "CRITICA",
        location: "Condotti Sotto la Base",
        recommendedMethod: "Fai saltare il muro debole con la carica esplosiva e scorta l'informatore",
        intelNotes: "Le telecamere del corridoio vanno evitate passando dai condotti laterali."
      }
    ],
    silentAssassinRules: [
      "L'informatore deve sopravvivere fino al punto d'uscita",
      "Nessun soldato ucciso oltre al Generale Bardachenko"
    ],
    extractionPoints: [
      {
        id: "ext-sa-04-tunnel",
        name: "Galleria Ferroviaria delle Fogne",
        description: "Oltre il muro demolito dalla carica esplosiva.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "sa-invitation-party",
    missionNumber: "05",
    missionTitle: "Invitation to a Party",
    gameSubtitle: "Hitman 2: Silent Assassin",
    operationCodename: "OP-RUS-04 // Gala all'Ambasciata Tedesca",
    icaClassification: "ICA CONTRACT // ST. PETERSBURG",
    handler: "Diana Burnwood",
    threatAssessment: "CRITICO",
    primaryLocation: "Ambasciata Tedesca, San Pietroburgo",
    targetsSummary: ["Generale Vladimir Zhupikov", "Valigetta Codici Nucleari"],
    briefingTranscript: "L'ultimo generale della lista, Vladimir Zhupikov, partecipa a un ricevimento diplomatico all'ambasciata. Devi eliminarlo e recuperare la valigetta contenente i codici di lancio dalla sua cassaforte privata. Attenzione: anche gli uomini dell'Agente Spetsnaz rivale stanno cercando la stessa valigetta.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Smoking & Veleno nel Cocktail)",
        badge: "DIPLOMATIC STEALTH // SUIT ONLY",
        description: "Usa il travestimento da cameriere per servire champagne avvelenato a Zhupikov e segui l'ambasciatore fino alla cassaforte nascosta dietro il quadro.",
        recommendedSuit: "Abito da Sera / Divisa Cameriere Ambasciata",
        loadout: [
          {
            id: "sa-05-poison",
            name: "Veleno Letale (Drop Cucine)",
            category: "tool",
            categoryLabel: "Tossina",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Neutralizza il generale nel salone principale senza colpi d'arma da fuoco.",
            tacticalTip: "Versalo nel bicchiere che il cameriere porta verso il generale o servilo personalmente."
          },
          {
            id: "sa-05-lockpick",
            name: "Grimaldello ICA",
            category: "tool",
            categoryLabel: "Scasso",
            concealment: "Non Rilevabile",
            lethality: "Supporto / Infiltrazione",
            description: "Sblocca le porte di servizio delle cucine e le stanze superiori dell'ambasciata.",
            tacticalTip: "Tieni d'occhio l'agente rivale vestito di nero: tenta di uccidere l'ambasciatore per aprire la cassaforte."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-sa-05-1",
        targetOrTask: "Elimina il Generale Vladimir Zhupikov",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Salone da Ballo / Bagni Ambasciata",
        recommendedMethod: "Strangolamento nei servizi o champagne avvelenato",
        intelNotes: "Non permettere all'assassino Spetsnaz rivale di rubarti il contratto."
      },
      {
        id: "obj-sa-05-2",
        targetOrTask: "Recupera la Valigetta dalla Cassaforte Segreta",
        type: "intel",
        typeLabel: "Recupero Dati",
        priority: "CRITICA",
        location: "Ufficio dell'Ambasciatore (Piano 2)",
        recommendedMethod: "Segui l'ambasciatore mentre apre il quadro o intercetta la valigetta dal rivale",
        intelNotes: "La valigetta è fondamentale per il completamento della missione."
      }
    ],
    silentAssassinRules: [
      "Nessun invitato o diplomatico ferito",
      "Supera i controlli all'ingresso senza armi visibili",
      "Esfiltrazione sul motoscafo sul retro con la valigetta"
    ],
    extractionPoints: [
      {
        id: "ext-sa-05-boat",
        name: "Motoscafo sul Molo dell'Ambasciata",
        description: "Ormeggiato dietro il giardino diplomatico.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "sa-tracking-hayamoto",
    missionNumber: "06",
    missionTitle: "Tracking Hayamoto",
    gameSubtitle: "Hitman 2: Silent Assassin",
    operationCodename: "OP-JPN-01 // Tracciamento GPS sul Pesce Palla",
    icaClassification: "ICA CONTRACT // JAPAN YAKUZA",
    handler: "Diana Burnwood",
    threatAssessment: "ALTO",
    primaryLocation: "Residenza di Masahiro Hayamoto Jr., Giappone",
    targetsSummary: ["Masahiro Hayamoto Jr."],
    briefingTranscript: "L'Agenzia ti assegna ora un contratto in Giappone. Il boss della Yakuza Masahiro Hayamoto è nascosto in una fortezza impenetrabile tra le montagne. Per localizzarlo, elimina suo figlio Masahiro Hayamoto Jr. nella sua residenza di Tokyo e piazza un trasmettitore GPS sul suo corpo in modo da seguire il convoglio funebre fino al castello del padre.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Veleno Fugu & Trasmettitore)",
        badge: "YAKUZA CLASSIC // PESCE PALLA",
        description: "Travestiti da fattorino del sushi, prepara il piatto di pesce palla letale nelle cucine (o inietta il veleno) e piazza il localizzatore mentre il bersaglio muore isolato.",
        recommendedSuit: "Divisa Cameriere Giapponese / Fattorino",
        loadout: [
          {
            id: "sa-06-fugu",
            name: "Fegato Velenoso di Pesce Palla (Fugu)",
            category: "tool",
            categoryLabel: "Tossina Naturale",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Estratto direttamente nelle cucine della villa Hayamoto.",
            tacticalTip: "Inseriscilo nel piatto servito al giovane Hayamoto: decesso istantaneo catalogato come intossicazione alimentare."
          },
          {
            id: "sa-06-gps",
            name: "Micro-Trasmettitore Satellitare GPS",
            category: "tool",
            categoryLabel: "Tracciamento",
            concealment: "Non Rilevabile",
            lethality: "Supporto / Infiltrazione",
            description: "Da piazzare sul corpo o negli abiti di Hayamoto Jr.",
            tacticalTip: "Se uccidi Hayamoto Jr. in sala da pranzo, attendi che i domestici escano prima di piazzare il GPS."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-sa-06-1",
        targetOrTask: "Elimina Masahiro Hayamoto Jr.",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Sala da Pranzo Villa Hayamoto",
        recommendedMethod: "Sashimi di pesce palla Fugu avvelenato",
        intelNotes: "La villa ha pavimenti in legno sonoro (usignolo) e sensori laser nel garage."
      },
      {
        id: "obj-sa-06-2",
        targetOrTask: "Posiziona il Localizzatore GPS sul Cadavere",
        type: "intel",
        typeLabel: "Tracciamento",
        priority: "CRITICA",
        location: "Villa Hayamoto",
        recommendedMethod: "Piazzamento furtivo prima dell'arrivo delle guardie Yakuza",
        intelNotes: "Il trasmettitore ci guiderà al castello di montagna del padre."
      }
    ],
    silentAssassinRules: [
      "Nessuna guardia Yakuza o domestica uccisa",
      "Non far scattare i sensori laser del garage"
    ],
    extractionPoints: [
      {
        id: "ext-sa-06-gate",
        name: "Cancello Principale della Villa",
        description: "Uscita rapida lungo la strada cittadina.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "sa-hidden-valley",
    missionNumber: "07",
    missionTitle: "Hidden Valley & At the Gates",
    gameSubtitle: "Hitman 2: Silent Assassin",
    operationCodename: "OP-JPN-02 // Infiltrazione nella Valle Innevata",
    icaClassification: "ICA RECON // SHOGUN CASTLE APPROACH",
    handler: "Diana Burnwood",
    threatAssessment: "CRITICO",
    primaryLocation: "Montagne Innevate di Nagano, Giappone",
    targetsSummary: ["Sistemi Generatori Castello", "Pattuglie Ninja"],
    briefingTranscript: "Il segnale GPS ci ha condotto a una fortezza isolata tra le nevi. Prima di raggiungere Masahiro Hayamoto al castello, attraversa la valle nascosta occultandoti sui convogli Yakuza e disabilita i tre generatori elettrici che alimentano le difese perimetrali e i cancelli esterni.",
    approaches: [
      {
        id: "tactical_infiltrator",
        title: "Infiltrato Silenzioso nella Tormenta (Balestra & Camion)",
        badge: "ZERO ALARM // GENERATOR SABOTAGE",
        description: "Sfrutta la balestra silenziata per eliminare i ninja sui ponti e i cecchini alle torrette, nascondendoti sul retro dei camion di rifornimento.",
        recommendedSuit: "Uniforme Ninja / Guardia Yakuza Invernale",
        loadout: [
          {
            id: "sa-07-crossbow",
            name: "Balestra Tattica Silenziata con Ottica",
            category: "firearm",
            categoryLabel: "Arma Silenziosa",
            concealment: "Visibile",
            silenced: true,
            lethality: "Letale",
            description: "Neutralizza le vedette Yakuza nei passaggi montani senza echi nella neve.",
            tacticalTip: "Colpisci sempre in mezzo alla tormenta per coprire i movimenti."
          },
          {
            id: "sa-07-silenced",
            name: "Silverballer Silenziate",
            category: "firearm",
            categoryLabel: "Pistola Furtiva",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Utile per sabotare le centraline dei generatori e i riflettori.",
            tacticalTip: "Non farti investire dai camion nei tunnel."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-sa-07-1",
        targetOrTask: "Attraversa i Tunnel e Disabilita i Generatori del Castello",
        type: "sabotage",
        typeLabel: "Sabotaggio Difese",
        priority: "CRITICA",
        location: "Valle Innevata & Torri Esterne",
        recommendedMethod: "Disattivazione manuale dei 3 generatori evitando i cecchini",
        intelNotes: "Ogni generatore spento disabilita le telecamere laser del cancello successivo."
      },
      {
        id: "obj-sa-07-2",
        targetOrTask: "Raggiungi la Base del Castello di Hayamoto",
        type: "extraction",
        typeLabel: "Infiltrazione",
        priority: "CRITICA",
        location: "Ingresso Sotterraneo del Castello",
        recommendedMethod: "Accesso furtivo al cortile interno del castello",
        intelNotes: "Preparati allo scontro con i ninja d'élite all'interno."
      }
    ],
    silentAssassinRules: [
      "Nessun allarme generale attivato nei checkpoint stradali",
      "Elimina solo le vedette strettamente indispensabili"
    ],
    extractionPoints: [
      {
        id: "ext-sa-07-castle",
        name: "Passaggio Sotterraneo del Castello",
        description: "Conduce direttamente all'interno della fortezza shogunale.",
        riskLevel: "Medio"
      }
    ]
  },
  {
    missionId: "sa-shogun-showdown",
    missionNumber: "08",
    missionTitle: "Shogun Showdown",
    gameSubtitle: "Hitman 2: Silent Assassin",
    operationCodename: "OP-JPN-03 // La Fine dello Shogun",
    icaClassification: "ICA HIGH PRIORITY // JAPAN FINALE",
    handler: "Diana Burnwood",
    threatAssessment: "MASSIMO",
    primaryLocation: "Castello Feudale di Masahiro Hayamoto, Giappone",
    targetsSummary: ["Masahiro Hayamoto", "Sistema Guida Missili"],
    briefingTranscript: "Sei all'interno della fortezza di Masahiro Hayamoto. Il boss Yakuza custodisce nel suo museo privato al sesto piano il sistema di guida militare rubato. Elimina Hayamoto e recupera il modulo missilistico prima di fuggire con l'elicottero o il passaggio sul lago.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Veleno / Katana & Disattivazione Laser)",
        badge: "MASTER NINJA // ZERO DETECTIONS",
        description: "Disattiva il server di sicurezza al piano seminterrato per spegnere i laser e i pavimenti sonori, poi raggiungi l'attico del 6° piano.",
        recommendedSuit: "Uniforme Ninja / Tenuta Geisha-Guardia",
        loadout: [
          {
            id: "sa-08-katana",
            name: "Katana Cerimoniale di Hayamoto (Recupero Museo)",
            category: "melee",
            categoryLabel: "Lama Bianca",
            concealment: "Visibile",
            lethality: "Letale",
            description: "Spada tradizionale custodita nelle teche del castello.",
            tacticalTip: "Usa la corda di pianoforte se preferisci mantenere l'invisibilità completa alle spalle di Hayamoto."
          },
          {
            id: "sa-08-bomb",
            name: "Bomba a Tempo / Sistema Guida Missili",
            category: "tool",
            categoryLabel: "Sabotaggio & Intel",
            concealment: "Occultabile",
            lethality: "Supporto / Infiltrazione",
            description: "Recupera il dispositivo elettronico dalla teca centrale al quinto piano.",
            tacticalTip: "La disattivazione dei laser al piano -1 ti evita di finire intrappolato con i ninja."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-sa-08-1",
        targetOrTask: "Recupera il Sistema di Guida Missili",
        type: "intel",
        typeLabel: "Recupero Hardware",
        priority: "CRITICA",
        location: "Sala Espositiva - Quinto Piano",
        recommendedMethod: "Disattiva prima il server di controllo dei sensori laser nel seminterrato",
        intelNotes: "Non camminare sui pavimenti scricchiolanti vicino alle guardie."
      },
      {
        id: "obj-sa-08-2",
        targetOrTask: "Elimina Masahiro Hayamoto",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Attico Privato - Sesto Piano",
        recommendedMethod: "Strangolamento silenzioso alle spalle o katana durante la meditazione",
        intelNotes: "Hayamoto possiede una katana letale e guardie ninja nascoste dietro i paraventi."
      }
    ],
    silentAssassinRules: [
      "Nessun allarme dei sensori di sicurezza attivato",
      "Salva o evita di uccidere l'ostaggio prigioniero nelle segrete",
      "Esfiltrazione verso l'eliporto privato sulla neve"
    ],
    extractionPoints: [
      {
        id: "ext-sa-08-heli",
        name: "Piazzola Elicottero del Castello",
        description: "Via di fuga aerea sulla cima della montagna.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "sa-basement-killing",
    missionNumber: "09",
    missionTitle: "Basement Killing",
    gameSubtitle: "Hitman 2: Silent Assassin",
    operationCodename: "OP-MAL-01 // Incursione alle Petronas Towers",
    icaClassification: "ICA CONTRACT // KUALA LUMPUR",
    handler: "Diana Burnwood",
    threatAssessment: "ALTO",
    primaryLocation: "Torri Petronas (Sotterranei), Kuala Lumpur, Malesia",
    targetsSummary: ["Charlie Sidjan"],
    briefingTranscript: "Nuova destinazione: Kuala Lumpur. Due fratelli hacker stanno creando un software militare letale per il mercato nero nei sotterranei delle Torri Petronas. Il primo bersaglio, Charlie Sidjan, lavora nel bunker informatico al livello -2. Devi entrare nella torre senza portare armi metalliche oltre i varchi, eliminare Charlie e disattivare le telecamere.",
    approaches: [
      {
        id: "tactical_infiltrator",
        title: "Infiltrazione Pompiere & Ascia Tattica",
        badge: "ZERO GUNS // METAL DETECTOR BYPASS",
        description: "Usa il fumo nel ripostiglio delle pulizie per far evacuare le guardie con l'allarme antincendio, indossa la tenuta da pompiere e scendi con l'ascia.",
        recommendedSuit: "Divisa Pompiere / Tecnico Server",
        loadout: [
          {
            id: "sa-09-axe",
            name: "Ascia Antincendio di Emergenza",
            category: "melee",
            categoryLabel: "Arma Contundente/Taglio",
            concealment: "Visibile",
            lethality: "Letale",
            description: "Portata apertamente senza destare sospetti se indossi l'uniforme da vigile del fuoco.",
            tacticalTip: "Attraversa la sala server centrale evitando i metal detector superiori."
          },
          {
            id: "sa-09-smoke",
            name: "Granata Fumogena ICA (Drop Lavanderia)",
            category: "tool",
            categoryLabel: "Diversivo",
            concealment: "Occultabile",
            lethality: "Non Letale",
            description: "Attiva l'allarme antincendio nei condotti per far aprire l'ascensore ai pompieri.",
            tacticalTip: "Lasciala nel cesto della biancheria prima di scendere nella zona tecnica."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-sa-09-1",
        targetOrTask: "Elimina Charlie Sidjan",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Bunker Informatico Livello -2",
        recommendedMethod: "Ascia antincendio o corda di pianoforte nella sala server",
        intelNotes: "Fai attenzione alle telecamere rotanti nel corridoio principale del seminterrato."
      },
      {
        id: "obj-sa-09-2",
        targetOrTask: "Disabilita il Sistema di Sicurezza Server ed Esci dall'Ascensore",
        type: "sabotage",
        typeLabel: "Sabotaggio & Fuga",
        priority: "PRIMARIA",
        location: "Sala Sorveglianza Sotterranea",
        recommendedMethod: "Spegni il registratore video prima di salire ai piani superiori",
        intelNotes: "L'ascensore di servizio ti porterà direttamente al piano del fratello gemello."
      }
    ],
    silentAssassinRules: [
      "Nessun civile o impiegato d'ufficio ferito",
      "Supera i metal detector della hall senza far suonare l'allarme",
      "Disabilita il terminale DVR prima della salita"
    ],
    extractionPoints: [
      {
        id: "ext-sa-09-elev",
        name: "Ascensore Diretto verso la Torre Superiore",
        description: "Conduce direttamente al piano dell'attico di Sidjan.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "sa-jacuzzi-job",
    missionNumber: "10",
    missionTitle: "The Graveyard Shift & The Jacuzzi Job",
    gameSubtitle: "Hitman 2: Silent Assassin",
    operationCodename: "OP-MAL-02 // Il Gemello nell'Attico",
    icaClassification: "ICA CONTRACT // KUALA LUMPUR",
    handler: "Diana Burnwood",
    threatAssessment: "CRITICO",
    primaryLocation: "Piani Alti & Attico Torri Petronas, Malesia",
    targetsSummary: ["Fratello Gemello di Charlie Sidjan", "Denaro & Software"],
    briefingTranscript: "Sei salito ai piani direzionali delle Torri Petronas. Dopo aver attraversato il ponte sospeso tra le due torri e recuperato il codice hacker negli uffici notturni, infiltrati nell'attico lussuoso del fratello di Charlie Sidjan, eliminalo nella vasca idromassaggio e sottrai denaro e dati dalla cassaforte dietro la cascata.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Blackout Luce & Silenziatore)",
        badge: "STEALTH // BLACKOUT KILL",
        description: "Taglia la corrente dal quadro elettrico esterno per far uscire le guardie armate dell'attico, poi colpisci Sidjan nella Jacuzzi al buio.",
        recommendedSuit: "Abito Nero con Visore Notturno / Tecnico",
        loadout: [
          {
            id: "sa-10-ballers",
            name: "Silverballer Silenziate (.45 ACP)",
            category: "firearm",
            categoryLabel: "Pistola Furtiva",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Neutralizza le luci o il bersaglio nell'oscurità totale dell'attico.",
            tacticalTip: "Usa i condotti esterni sul cornicione per aggirare le donne armate del servizio sicurezza."
          },
          {
            id: "sa-10-nvg",
            name: "Visore Notturno Tattico",
            category: "tool",
            categoryLabel: "Ottica Notturna",
            concealment: "Occultabile",
            lethality: "Supporto / Infiltrazione",
            description: "Indispensabile una volta staccato l'interruttore generale della suite.",
            tacticalTip: "Individua la cassaforte dietro il pannello scorrevole vicino alla parete d'acqua."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-sa-10-1",
        targetOrTask: "Elimina il Fratello di Charlie Sidjan nell'Attico",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Suite Jacuzzi - Ultimo Piano",
        recommendedMethod: "Sabotaggio quadro elettrico ed eliminazione silenziosa al buio",
        intelNotes: "Le guardie femminili dell'attico sono armatissime: evita lo scontro frontale."
      },
      {
        id: "obj-sa-10-2",
        targetOrTask: "Svuota la Cassaforte (Denaro e Microfilm Software)",
        type: "intel",
        typeLabel: "Recupero Dati",
        priority: "CRITICA",
        location: "Parete Cascata della Suite",
        recommendedMethod: "Recupero furtivo durante il blackout",
        intelNotes: "La statuetta/denaro deve essere prelevata prima di chiamare l'ascensore di fuga."
      }
    ],
    silentAssassinRules: [
      "Nessun impiegato notturno o guardia femmina uccisa",
      "Usa il cornicione esterno per non passare davanti alle telecamere dell'ingresso"
    ],
    extractionPoints: [
      {
        id: "ext-sa-10-elev",
        name: "Ascensore Privato dell'Attico",
        description: "Discesa diretta verso l'uscita cittadina di Kuala Lumpur.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "sa-murder-bazaar",
    missionNumber: "11",
    missionTitle: "Murder at the Bazaar",
    gameSubtitle: "Hitman 2: Silent Assassin",
    operationCodename: "OP-AFG-01 // Morte al Mercato di Nuristan",
    icaClassification: "ICA CONTRACT // AFGHANISTAN",
    handler: "Diana Burnwood",
    threatAssessment: "ALTO",
    primaryLocation: "Bazaar Cittadino di Nuristan, Afghanistan",
    targetsSummary: ["Tenente Ahmed Zahir", "Colonnello Mohammad Amin"],
    briefingTranscript: "L'Agenzia ha accettato un contratto sensibile in Afghanistan. Devi eliminare due ufficiali ribelli: il Tenente Ahmed Zahir, possessore della mappa strategica dei tunnel, e il Colonnello Mohammad Amin, custode delle chiavi d'accesso al convoglio. Colpisci nel caos del bazar evitando scontri armati tra la folla.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Sicario del Bazar)",
        badge: "LOW PROFILE // KNIFE & SILENCER",
        description: "Elimina Zahir nella sua casa vicino alla torre e segui il Colonnello Amin nei vicoli laterali per strappargli le chiavi in silenzio.",
        recommendedSuit: "Abito Nero / Tunica Locale",
        loadout: [
          {
            id: "sa-11-ballers",
            name: "Silverballer Silenziate (.45 ACP)",
            category: "firearm",
            categoryLabel: "Pistola Furtiva",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Eliminazione chirurgica nei cortili interni lontani dai mercanti.",
            tacticalTip: "Attendi che Amin finisca di mercanteggiare tappeti prima di seguirlo nel vicolo vuoto."
          },
          {
            id: "sa-11-wire",
            name: "Fiber Wire ICA",
            category: "melee",
            categoryLabel: "Garrota",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Silenziosa nelle stanze interne di Zahir.",
            tacticalTip: "Recupera sempre sia la mappa che le chiavi dai due bersagli."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-sa-11-1",
        targetOrTask: "Elimina il Tenente Ahmed Zahir e Recupera le Coordinate",
        type: "elimination",
        typeLabel: "Eliminazione & Intel",
        priority: "CRITICA",
        location: "Edificio Nord del Bazar",
        recommendedMethod: "Strangolamento al piano superiore dell'edificio",
        intelNotes: "Non mostrare mai armi in mano vicino alle pattuglie di strada."
      },
      {
        id: "obj-sa-11-2",
        targetOrTask: "Elimina il Colonnello Mohammad Amin e Prendi le Chiavi",
        type: "elimination",
        typeLabel: "Eliminazione & Intel",
        priority: "CRITICA",
        location: "Mercato Centrale & Vicoli Est",
        recommendedMethod: "Colpo silenzioso in un angolo appartato del bazar",
        intelNotes: "Le chiavi consentono di superare le porte dell'area successiva."
      }
    ],
    silentAssassinRules: [
      "Zero mercanti o civili afghani feriti",
      "Nessun allarme di quartiere lanciato dalle sentinelle"
    ],
    extractionPoints: [
      {
        id: "ext-sa-11-gate",
        name: "Cancello Orientale del Bazar",
        description: "Conduce verso la strada del passo montano.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "sa-motorcade",
    missionNumber: "12",
    missionTitle: "The Motorcade Interception",
    gameSubtitle: "Hitman 2: Silent Assassin",
    operationCodename: "OP-AFG-02 // Agguato al Convoglio ONU",
    icaClassification: "ICA CRITICAL // DESERT INTERCEPT",
    handler: "Diana Burnwood",
    threatAssessment: "CRITICO",
    primaryLocation: "Passo Montano & Villaggio Desertico, Afghanistan",
    targetsSummary: ["Abdul Bismillah Malik (Khan)"],
    briefingTranscript: "Un convoglio corazzato dell'ONU trasporta il signore della guerra Abdul Bismillah Malik attraverso il villaggio fortificato. Un nostro contatto locale ti ha lasciato un potente fucile antimateriale M195 nella moschea diroccata. Colpisci la limousine centrale del Khan senza abbattere i soldati delle Nazioni Unite.",
    approaches: [
      {
        id: "precision_sniper",
        title: "Cecchino Antimateriale dalla Moschea",
        badge: "ONE SHOT // M195 SNIPER",
        description: "Preleva l'M195 calibro .50 dal contatto nella moschea, sali sul tetto a nord e perfora il vetro blindato dell'auto di Malik quando il convoglio rallenta.",
        recommendedSuit: "Abito Locale / Tenuta Desertica",
        loadout: [
          {
            id: "sa-12-m195",
            name: "Fucile Antimateriale M195 Calibro .50",
            category: "firearm",
            categoryLabel: "Fucile Pesante Precisione",
            concealment: "Visibile",
            lethality: "Letale",
            description: "Unico fucile in grado di perforare i vetri blindati delle vetture ONU.",
            tacticalTip: "Piazzati sul tetto vicino alla curva a gomito dove il convoglio rallenta davanti ai civili."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-sa-12-1",
        targetOrTask: "Recupera il Fucile Antimateriale dal Contatto ICA",
        type: "intel",
        typeLabel: "Rifornimento",
        priority: "PRIMARIA",
        location: "Moschea Sud-Ovest",
        recommendedMethod: "Ritira l'arma prima che il convoglio raggiunga il villaggio",
        intelNotes: "Hai circa 3 minuti prima del passaggio della colonna corazzata."
      },
      {
        id: "obj-sa-12-2",
        targetOrTask: "Elimina Abdul Bismillah Malik nella Limousine Blindata",
        type: "elimination",
        typeLabel: "Intercettazione Mobile",
        priority: "CRITICA",
        location: "Strada Principale del Villaggio",
        recommendedMethod: "Colpo unico attraverso il parabrezza blindato del veicolo centrale",
        intelNotes: "Non danneggiare gli elicotteri o le jeep di scorta ONU se punti al Silent Assassin."
      }
    ],
    silentAssassinRules: [
      "Nessun casco blu ONU o civile locale ucciso",
      "Un solo colpo di M195 sparato sul veicolo bersaglio",
      "Ritirata rapida dietro le dune verso l'uscita ovest"
    ],
    extractionPoints: [
      {
        id: "ext-sa-12-exit",
        name: "Sentiero Roccioso del Passo Ovest",
        description: "Fuga verso il complesso sotterraneo.",
        riskLevel: "Medio"
      }
    ]
  },
  {
    missionId: "sa-tunnel-rat",
    missionNumber: "13",
    missionTitle: "Tunnel Rat",
    gameSubtitle: "Hitman 2: Silent Assassin",
    operationCodename: "OP-AFG-03 // Bunker della Testata",
    icaClassification: "ICA CRITICAL // SUBTERRANEAN BASE",
    handler: "Diana Burnwood",
    threatAssessment: "CRITICO",
    primaryLocation: "Bunker Sotterraneo nel Deserto, Afghanistan",
    targetsSummary: ["Yussef Hussein", "Cargo Nucleare"],
    briefingTranscript: "L'ultima operazione in Afghanistan ti porta nelle profondità di una base missilistica sotterranea. Il comandante Yussef Hussein sta per spedire l'ultima cassa con il materiale fissile. Elimina Hussein nel suo centro di comando, recupera la cassa atomica e fuggi risalendo con l'ascensore delle merci.",
    approaches: [
      {
        id: "tactical_infiltrator",
        title: "Infiltrazione Bunker (Divisa Guardia & Silenziatore)",
        badge: "STEALTH // CARGO EXTRACTION",
        description: "Scendi dal pozzo di aerazione con la fune, elimina silenziosamente una guardia isolata per il travestimento e raggiungi il centro comando.",
        recommendedSuit: "Uniforme Milizia Sotterranea",
        loadout: [
          {
            id: "sa-13-ballers",
            name: "Silverballer Silenziate (.45 ACP)",
            category: "firearm",
            categoryLabel: "Pistola Furtiva",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Neutralizza telecamere e sentinelle lungo i ponti metallici del bunker.",
            tacticalTip: "Elimina Yussef Hussein quando entra nell'ufficio privato."
          },
          {
            id: "sa-13-nvg",
            name: "Visore Notturno Tattico",
            category: "tool",
            categoryLabel: "Ricognizione",
            concealment: "Occultabile",
            lethality: "Supporto / Infiltrazione",
            description: "Essenziale nei condotti di scarico privi di illuminazione.",
            tacticalTip: "Puoi sabotare i generatori per avvicinarti al deposito missili al buio."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-sa-13-1",
        targetOrTask: "Elimina il Comandante Yussef Hussein",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Centro Comando Livello Inferiore",
        recommendedMethod: "Strangolamento o pistola silenziata dopo aver interrotto la corrente",
        intelNotes: "Hussein possiede i codici dell'ascensore di risalita del cargo."
      },
      {
        id: "obj-sa-13-2",
        targetOrTask: "Recupera la Cassa Atomica ed Esfiltra con l'Ascensore",
        type: "extraction",
        typeLabel: "Recupero & Fuga",
        priority: "CRITICA",
        location: "Deposito Carico Principale",
        recommendedMethod: "Carica la cassa sul montacarichi dopo aver liberato l'uscita",
        intelNotes: "Diana ha già pronto un volo diretto per il teatro successivo in India."
      }
    ],
    silentAssassinRules: [
      "Nessun allarme generale attivato nei livelli sotterranei",
      "Occulta i corpi fuori dalle linee di pattuglia"
    ],
    extractionPoints: [
      {
        id: "ext-sa-13-elev",
        name: "Montacarichi Principale Superficie",
        description: "Ascensore verso l'uscita nel deserto.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "sa-temple-city",
    missionNumber: "14",
    missionTitle: "Temple City Ambush",
    gameSubtitle: "Hitman 2: Silent Assassin",
    operationCodename: "OP-IND-01 // Imboscata nella Città Sacra",
    icaClassification: "ICA TRAP // INDIA",
    handler: "Agente Smith / Contatto ICA Locale",
    threatAssessment: "CRITICO",
    primaryLocation: "Bazaar e Vicoli della Città Sacra, India",
    targetsSummary: ["Sicari del Culto Indiano", "Operativo Misterioso (17?)"],
    briefingTranscript: "47, c'è un'anomalia critica sui satelliti: il nostro informatore locale è in pericolo mortale e almeno due sicari addestrati sono stati inviati in città per ucciderti prima che raggiunga l'isola della setta. Incontra il contatto presso il negozio di tappeti, scova ed elimina gli assassini appostati tra i tetti e la folla.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Contro-Spionaggio Urbano (Ricognizione & Silenziatore)",
        badge: "COUNTER-SNIPE // SURVIVAL",
        description: "Raccogli le fotografie degli assassini dal contatto ICA e neutralizzali prima che aprano il fuoco dalla folla o dai balconi.",
        recommendedSuit: "Abito Nero / Tunica Civile",
        loadout: [
          {
            id: "sa-14-ballers",
            name: "Silverballer Silenziate (.45 ACP)",
            category: "firearm",
            categoryLabel: "Pistola Furtiva",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Neutralizza rapidamente i sicari nascosti nelle botteghe superiori.",
            tacticalTip: "Il secondo assassino osserva dall'arco del mercato armato di fucile."
          },
          {
            id: "sa-14-map",
            name: "Fotografie di Riconoscimento Sicari",
            category: "tool",
            categoryLabel: "Intelligence",
            concealment: "Non Rilevabile",
            lethality: "Supporto / Infiltrazione",
            description: "Fornite dall'Agente Smith al negozio di stoffe.",
            tacticalTip: "Controlla i tetti sopra la piazza centrale prima di attraversare."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-sa-14-1",
        targetOrTask: "Incontra l'Agente Contatto e Identifica gli Assassini",
        type: "intel",
        typeLabel: "Ricognizione",
        priority: "PRIMARIA",
        location: "Bottega Tappeti Est",
        recommendedMethod: "Incontro furtivo evitando le pattuglie armate della setta",
        intelNotes: "Un sicario misterioso vestito come un tuo clone ti sta osservando."
      },
      {
        id: "obj-sa-14-2",
        targetOrTask: "Elimina Entrambi gli Assassini della Setta",
        type: "elimination",
        typeLabel: "Contro-Eliminazione",
        priority: "CRITICA",
        location: "Tetti del Mercato e Vicolo Sud",
        recommendedMethod: "Avvicinamento alle spalle lungo le scale interne",
        intelNotes: "Non colpire i cittadini o i mendicanti del mercato."
      }
    ],
    silentAssassinRules: [
      "Zero civili feriti nella sparatoria urbana",
      "L'informatore locale deve sopravvivere all'imboscata"
    ],
    extractionPoints: [
      {
        id: "ext-sa-14-boat",
        name: "Barca sul Fiume verso l'Isola",
        description: "Imbarcazione diretta all'ospedale del culto.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "sa-death-hannelore",
    missionNumber: "15",
    missionTitle: "The Death of Hannelore",
    gameSubtitle: "Hitman 2: Silent Assassin",
    operationCodename: "OP-IND-02 // Clinica Privata del Culto",
    icaClassification: "ICA CONTRACT // INDIA ISLAND",
    handler: "Diana Burnwood",
    threatAssessment: "ALTO",
    primaryLocation: "Clinica dell'Isola (Ala Ospedaliera), India",
    targetsSummary: ["Dr. Hannelore von Kamprad"],
    briefingTranscript: "Sei giunto sull'isola controllata dal culto. Prima di poter accedere al tempio principale del santone Deewana Ji, devi eliminare il medico capo della struttura: la dottoressa Hannelore von Kamprad, ricercata per esperimenti clinici illegali e copertura finanziaria per l'acquisto delle testate nucleari.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Veleno nella Bottiglia / Sostituzione Paziente)",
        badge: "ZERO ALARM // MEDICAL KILL",
        description: "Assumi le vesti di un paziente VIP della clinica o di un medico per avvicinarti allo studio di Hannelore e sostituire la sua medicina con veleno letale.",
        recommendedSuit: "Veste da Paziente VIP / Camice Medico",
        loadout: [
          {
            id: "sa-15-poison",
            name: "Veleno Letale (Recupero Farmacia)",
            category: "tool",
            categoryLabel: "Tossina",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Inseribile nel bicchiere o nella bottiglia d'acqua sulla scrivania della dottoressa.",
            tacticalTip: "Avvelena la caraffa mentre la dottoressa visita la sala operatoria."
          },
          {
            id: "sa-15-wire",
            name: "Fiber Wire ICA",
            category: "melee",
            categoryLabel: "Garrota",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Alternativa silenziosa quando rimane sola nello studio.",
            tacticalTip: "Nascondi il corpo dietro il paravento medico."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-sa-15-1",
        targetOrTask: "Elimina la Dr. Hannelore von Kamprad",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Ufficio Direzione Medica - Ala Nord",
        recommendedMethod: "Avvelenamento bevanda o strangolamento nel suo studio",
        intelNotes: "Recupera la chiave dell'edificio del culto sulla sua scrivania."
      },
      {
        id: "obj-sa-15-2",
        targetOrTask: "Occulta il Corpo e Accedi al Tempio Centrale",
        type: "extraction",
        typeLabel: "Avanzamento",
        priority: "CRITICA",
        location: "Molo di Collegamento Nord",
        recommendedMethod: "Passaggio furtivo con camice medico verso la zona ospedaliera principale",
        intelNotes: "Il corpo di Hannelore non deve essere scoperto dalle infermiere."
      }
    ],
    silentAssassinRules: [
      "Nessun paziente o infermiere della clinica ucciso",
      "Il cadavere della dottoressa deve essere nascosto fuori dalla vista"
    ],
    extractionPoints: [
      {
        id: "ext-sa-15-dock",
        name: "Pontile Nord verso l'Ospedale Principale",
        description: "Conduce direttamente al tempio di Deewana Ji.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "sa-terminal-hospitality",
    missionNumber: "16",
    missionTitle: "Terminal Hospitality",
    gameSubtitle: "Hitman 2: Silent Assassin",
    operationCodename: "OP-IND-03 // Fine del Culto (Deewana Ji)",
    icaClassification: "ICA CRITICAL // CLONE AMBUSH ALERT",
    handler: "Diana Burnwood",
    threatAssessment: "MASSIMO",
    primaryLocation: "Tempio Ospedaliero dell'Isola, India",
    targetsSummary: ["Deewana Ji (Capo del Culto)", "Agente 17 (Cecchino Rivale)"],
    briefingTranscript: "Deewana Ji si prepara a un'operazione chirurgica segreta nei sotterranei del tempio ospedaliero. Raggiungi la sala operatoria e metti fine al culto. Attento: il mandante russo ha assoldato un sicario d'élite identico a te, l'Agente 17, appostato sull'isola per eliminarti all'uscita.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Bisturi Chirurgico in Sala Operatoria)",
        badge: "ZERO WITNESS // SURGEON KILL",
        description: "Indossa il camice da chirurgo, entra in sala operatoria e usa il bisturi o disattiva il supporto vitale di Deewana Ji durante l'anestesia.",
        recommendedSuit: "Camice da Chirurgo / Abito Classico",
        loadout: [
          {
            id: "sa-16-scalpel",
            name: "Bisturi Chirurgico Sterile",
            category: "melee",
            categoryLabel: "Lama Medica",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Perfetto per concludere il contratto direttamente sul tavolo operatorio.",
            tacticalTip: "Puoi anche staccare la spina del macchinario vitale fingendo un guasto cardiaco."
          },
          {
            id: "sa-16-ballers",
            name: "Silverballer Silenziate (.45 ACP)",
            category: "firearm",
            categoryLabel: "Pistola Furtiva",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Indispensabili per neutralizzare l'Agente 17 appostato all'esterno del tempio.",
            tacticalTip: "L'Agente 17 indossa gli occhiali da sole e una cravatta arancione: colpisci per primo."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-sa-16-1",
        targetOrTask: "Elimina il Leader del Culto Deewana Ji",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Sala Operatoria Sotterranea",
        recommendedMethod: "Sabotaggio respiratore o eliminazione da chirurgo durante l'operazione",
        intelNotes: "Le guardie della setta sorvegliano tutte le scale d'accesso al sotterraneo."
      },
      {
        id: "obj-sa-16-2",
        targetOrTask: "Sopravvivi all'Agguato dell'Agente 17 ed Esfiltra",
        type: "elimination",
        typeLabel: "Duello tra Cloni",
        priority: "CRITICA",
        location: "Uscita Esterna / Molo della Barca",
        recommendedMethod: "Aggira il raggio di tiro del cecchino passando dai corridoi laterali e colpisci alle spalle",
        intelNotes: "Solo abbattendo o eludendo 17 scoprirai il collegamento con Sergei Zavorotko."
      }
    ],
    silentAssassinRules: [
      "Nessun medico o adepto pacifico ucciso",
      "Sconfiggi l'Agente 17 senza coinvolgere i civili"
    ],
    extractionPoints: [
      {
        id: "ext-sa-16-boat",
        name: "Motoscafo sulla Spiaggia Sud",
        description: "Rientro definitivo dall'India verso la resa dei conti finale.",
        riskLevel: "Medio"
      }
    ]
  },
  {
    missionId: "sa-redemption-gontranno",
    missionNumber: "17",
    missionTitle: "St. Petersburg Revisited & Redemption at Gontranno",
    gameSubtitle: "Hitman 2: Silent Assassin",
    operationCodename: "OP-FINALE-02 // Resa dei Conti al Santuario",
    icaClassification: "PROTOCOL ZERO // SERGEI ZAVOROTKO",
    handler: "Diana Burnwood (Ultima Trasmissione)",
    threatAssessment: "MASSIMO",
    primaryLocation: "San Pietroburgo & Santuario di Gontranno, Sicilia",
    targetsSummary: ["Agente 17 (Clone)", "Sergei Zavorotko", "Padre Vittorio (Ostaggio)"],
    briefingTranscript: "Tutta l'operazione era una messinscena di Sergei Zavorotko, fratello di Arkadij Jegorov, per usarti come sicario contro i suoi soci e poi ucciderti tramite il clone 17. Dopo l'imboscata di San Pietroburgo, Sergei ha portato Padre Vittorio nella tua chiesa di Gontranno in Sicilia. Prendi l'arsenale dal tuo capanno degli attrezzi, stermina i suoi uomini e salva Vittorio.",
    approaches: [
      {
        id: "tactical_infiltrator",
        title: "Assalto Totale al Santuario (Capanno Armi 47)",
        badge: "CLIMAX FINALE // ARSENAL UNLOCKED",
        description: "Recupera le tue Silverballer, l'M4 e il fucile di precisione dal capanno da giardiniere di Gontranno ed elimina Sergei al confessionale senza ferire Padre Vittorio.",
        recommendedSuit: "Abito Nero da Sicario con Cravatta Rossa",
        loadout: [
          {
            id: "sa-17-ballers",
            name: "Dual Silverballers (.45 ACP)",
            category: "firearm",
            categoryLabel: "Doppia Pistola Firma",
            concealment: "Occultabile",
            silenced: false,
            lethality: "Letale",
            description: "Le leggendarie pistole gemelle custodite nel capanno di Gontranno.",
            tacticalTip: "Elimina le guardie armate di fucile a pompa tra le colonne della navata."
          },
          {
            id: "sa-17-w2000",
            name: "Walther W2000 Sniper (Capanno Attrezzi)",
            category: "firearm",
            categoryLabel: "Fucile Precisione",
            concealment: "Visibile",
            lethality: "Letale",
            description: "Ideale per colpire Sergei attraverso la grata del confessionale o le vetrate superiori.",
            tacticalTip: "Sergei indossa un giubbotto antiproiettile e tiene in ostaggio Padre Vittorio: mira alla testa."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-sa-17-1",
        targetOrTask: "Neutralizza il Clone Agente 17 a San Pietroburgo e Recupera le Armi",
        type: "elimination",
        typeLabel: "Scontro tra Cloni",
        priority: "PRIMARIA",
        location: "Edificio Pushkin & Capanno Gontranno",
        recommendedMethod: "Aggiramento alle spalle del clone 17 ed equipaggiamento completo al santuario",
        intelNotes: "Le tue armi ti aspettano nel capanno degli attrezzi a Gontranno."
      },
      {
        id: "obj-sa-17-2",
        targetOrTask: "Elimina Sergei Zavorotko e Libera Padre Vittorio",
        type: "safeguard",
        typeLabel: "Salvataggio & Vendetta",
        priority: "CRITICA",
        location: "Navata e Abside - Chiesa di Gontranno",
        recommendedMethod: "Eliminazione chirurgica di Sergei dall'altare senza ferire il prete",
        intelNotes: "Al termine, 47 appende il rosario al cancello accettando la propria natura letale."
      }
    ],
    silentAssassinRules: [
      "Proteggi la vita di Padre Vittorio in ogni fase dello scontro",
      "Elimina Sergei Zavorotko con precisione millimetrica"
    ],
    extractionPoints: [
      {
        id: "ext-sa-17-gate",
        name: "Cancello in Ferro del Santuario di Gontranno",
        description: "Lascia il rosario sul cancello e svanisci nella nebbia siciliana.",
        riskLevel: "Basso"
      }
    ]
  }
];
