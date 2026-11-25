import { MissionBriefingData } from "../briefingTypes";

export const CONTRACTS_BLOOD_MONEY_MISSIONS: MissionBriefingData[] = [
  // ================= HITMAN: CONTRACTS (2004) =================
  {
    missionId: "con-asylum-aftermath",
    missionNumber: "01",
    missionTitle: "Asylum Aftermath",
    gameSubtitle: "Hitman: Contracts",
    operationCodename: "OP-CONTRACTS-01 // Incubo a Satu Mare",
    icaClassification: "FEVER DREAM // FLASHBACK 2000",
    handler: "Delirio Febbrile di 47 (Parigi)",
    threatAssessment: "CRITICO",
    primaryLocation: "Manicomio di Satu Mare, Romania",
    targetsSummary: ["Squadre Speciali SWAT", "Uscita Perimetrale"],
    briefingTranscript: "Ferito gravemente nella tua stanza d'albergo a Parigi, ripercorri nei ricordi febbrili gli istanti immediatamente successivi all'uccisione del dottor Ort-Meyer. La polizia speciale SWAT rumena ha circondato il manicomio e sta ripulendo i sotterranei. Travestiti da agente SWAT, trova la chiave dell'auto di fuga e lasciati l'orrore alle spalle.",
    approaches: [
      {
        id: "tactical_infiltrator",
        title: "Infiltrato SWAT (Senza Spari)",
        badge: "STEALTH ESCAPE // ZERO SCONTRI",
        description: "Prendi le armi dai laboratori, evita le pattuglie SWAT ai piani superiori usando il travestimento di un agente isolato e fuggi in auto.",
        recommendedSuit: "Uniforme SWAT Rumena / Abito Nero Classico",
        loadout: [
          {
            id: "con-01-syringe",
            name: "Siringa di Veleno / Sedativo (Laboratorio)",
            category: "tool",
            categoryLabel: "Iniezione Silenziosa",
            concealment: "Non Rilevabile",
            lethality: "Non Letale",
            description: "Neutralizza senza far rumore il primo ufficiale SWAT che scende le scale.",
            tacticalTip: "Rubagli l'uniforme per attraversare il cortile sotto la pioggia battente."
          },
          {
            id: "con-01-minigun",
            name: "SPAS-12 / Armeria Sotterranea Cloni",
            category: "firearm",
            categoryLabel: "Arma d'Assalto",
            concealment: "Visibile",
            lethality: "Letale",
            description: "Custodita nella sala delle capsule di clonazione.",
            tacticalTip: "Usala solo se la copertura SWAT viene compromessa al cancello."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-con-01-1",
        targetOrTask: "Risali dal Laboratorio Sotterraneo al Cortile",
        type: "intel",
        typeLabel: "Fuga",
        priority: "CRITICA",
        location: "Ala Sotterranea Manicomio",
        recommendedMethod: "Sfrutta l'ascensore o le scale esterne evitando il gas nervino",
        intelNotes: "Le chiavi dell'auto di fuga si trovano nella guardiola all'ingresso."
      },
      {
        id: "obj-con-01-2",
        targetOrTask: "Eludi l'Assedio SWAT e Fuggi con l'Auto",
        type: "extraction",
        typeLabel: "Esfiltrazione",
        priority: "CRITICA",
        location: "Cancello Principale Satu Mare",
        recommendedMethod: "Indossa la tenuta SWAT o striscia lungo il muro perimetrale ovest",
        intelNotes: "Non dimenticare di raccogliere la chiave della vettura."
      }
    ],
    silentAssassinRules: [
      "Nessun paziente o ostaggio eliminato",
      "Uscita senza allertare le squadre d'assalto esterne"
    ],
    extractionPoints: [
      {
        id: "ext-con-01-car",
        name: "Berlina Parcheggiata fuori dal Cancello",
        description: "Fuga immediata nella notte rumena.",
        riskLevel: "Medio"
      }
    ]
  },
  {
    missionId: "con-meat-king",
    missionNumber: "02",
    missionTitle: "The Meat King's Party",
    gameSubtitle: "Hitman: Contracts",
    operationCodename: "OP-CONTRACTS-02 // Il Mattatoio di Bucarest",
    icaClassification: "ICA CONTRACT // EXTREME GRAPHIC",
    handler: "Diana Burnwood",
    threatAssessment: "CRITICO",
    primaryLocation: "Mattatoio Industriale di Bucarest, Romania",
    targetsSummary: ["Campbell Sturrock ('Meat King')", "Andrei Puscus", "Ragazza Rapita"],
    briefingTranscript: "Un cliente facoltoso ci chiede di verificare la sorte della figlia rapita da Campbell Sturrock, noto come 'The Meat King', e dal suo avvocato corrotto Andrei Puscus. I due tengono un macabro party privato all'interno di un mattatoio industriale convertito in club. Elimina entrambi e porta via prove definitive sulla sorte della ragazza.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Oppio & Mannaia da Macellaio)",
        badge: "ZERO WITNESS // BUTCHER DISGUISE",
        description: "Usa l'abito da macellaio, droga Sturrock con la pipa all'oppio nella sua stanza privata e neutralizza l'avvocato Puscus nei bagni o nel suo ufficio.",
        recommendedSuit: "Camice da Macellaio Insanguinato / Cameriere",
        loadout: [
          {
            id: "con-02-opium",
            name: "Pipa d'Oppio & Veleno (Cucine)",
            category: "tool",
            categoryLabel: "Sedazione",
            concealment: "Occultabile",
            lethality: "Non Letale",
            description: "Sturrock ordina regolarmente pollo arrosto e oppio nella sua alcova al piano superiore.",
            tacticalTip: "Porta personalmente il piatto da cameriere per far allontanare le guardie."
          },
          {
            id: "con-02-cleaver",
            name: "Mannaia da Macellaio / Gancio per Carni",
            category: "melee",
            categoryLabel: "Arma Bianca",
            concealment: "Visibile",
            lethality: "Letale",
            description: "Portabile apertamente se si indossa la tenuta da macellaio.",
            tacticalTip: "Attento al fratello psicopatico di Sturrock nella stanza delle celle frigorifere."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-con-02-1",
        targetOrTask: "Elimina Campbell Sturrock ('The Meat King')",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Alcova Privata Piano Superiore",
        recommendedMethod: "Soffocamento con cuscino o corda mentre è sotto effetto dell'oppio",
        intelNotes: "Sfrutta la consegna del vassoio dalle cucine."
      },
      {
        id: "obj-con-02-2",
        targetOrTask: "Elimina Andrei Puscus e Trova le Prove sulla Ragazza",
        type: "elimination",
        typeLabel: "Eliminazione & Intel",
        priority: "CRITICA",
        location: "Celle Frigorifere & Uffici Est",
        recommendedMethod: "Strangolamento nei corridoi appartati e recupero del braccialetto nella cella",
        intelNotes: "Fai attenzione al macellaio gigante che custodisce la cella macabra."
      }
    ],
    silentAssassinRules: [
      "Nessun ospite civile del party colpito",
      "Recupera la prova dell'omicidio della ragazza prima di uscire"
    ],
    extractionPoints: [
      {
        id: "ext-con-02-van",
        name: "Furgone delle Consegne sul Piazzale",
        description: "Uscita posteriore del mattatoio.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "con-bjarkhov-bomb",
    missionNumber: "03",
    missionTitle: "The Bjarkhov Bomb",
    gameSubtitle: "Hitman: Contracts",
    operationCodename: "OP-CONTRACTS-03 // Sottomarino della Kamchatka",
    icaClassification: "ICA CRITICAL // NUCLEAR THREAT",
    handler: "Diana Burnwood",
    threatAssessment: "MASSIMO",
    primaryLocation: "Base Navale Artica, Kamchatka, Siberia",
    targetsSummary: ["Fabian Fuchs", "Comandante Sergei Bjarkhov", "Sottomarino Nucleare"],
    briefingTranscript: "Nella gelida base militare di Kamchatka, il terrorista Fabian Fuchs sta trattando l'acquisto di una bomba sporca dal comandante Sergei Bjarkhov a bordo di un sottomarino sovietico in disuso. Elimina entrambi e piazza tre cariche esplosive sullo scafo del sottomarino per affondare definitivamente il carico radioattivo.",
    approaches: [
      {
        id: "tactical_infiltrator",
        title: "Sabotaggio Subacqueo & Lassativo",
        badge: "SIBERIAN GHOST // SUBMARINE WIPE",
        description: "Inserisci il lassativo nel pasto di Fabian Fuchs alla mensa per isolarlo nei bagni chimici, poi indossa la tuta antiradiazioni per piazzare le bombe sul sottomarino.",
        recommendedSuit: "Uniforme Soldato Artico / Tuta Antiradiazioni",
        loadout: [
          {
            id: "con-03-laxative",
            name: "Lassativo da Mensa Militare",
            category: "tool",
            categoryLabel: "Diversivo Biologico",
            concealment: "Non Rilevabile",
            lethality: "Non Letale",
            description: "Versalo nella zuppa destinata a Fabian Fuchs alla base.",
            tacticalTip: "Costringe Fuchs ad allontanarsi dalle guardie verso le latrine esterne."
          },
          {
            id: "con-03-bombs",
            name: "Cariche C4 Subacquee (x3)",
            category: "tool",
            categoryLabel: "Esplosivo Navale",
            concealment: "Occultabile",
            lethality: "Letale",
            description: "Custodite nei magazzini della base insieme alle tute protettive.",
            tacticalTip: "Piazzale nei tre punti di giunzione lungo la fiancata del sottomarino."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-con-03-1",
        targetOrTask: "Elimina Fabian Fuchs (Fratello di Frantz)",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Mensa & Bagni Esterni della Base",
        recommendedMethod: "Avvelenamento lassativo o strangolamento isolato nei servizi",
        intelNotes: "Fuchs indossa un cappotto militare e ha una scorta ridotta a mensa."
      },
      {
        id: "obj-con-03-2",
        targetOrTask: "Elimina Sergei Bjarkhov e Affonda il Sottomarino",
        type: "sabotage",
        typeLabel: "Eliminazione & Demolizione",
        priority: "CRITICA",
        location: "Cabina Nave & Bacino Sottomarino",
        recommendedMethod: "Silenziatore sulla nave e 3 cariche C4 sullo scafo del sottomarino",
        intelNotes: "Detona le cariche solo dopo essere tornato all'aereo di fuga."
      }
    ],
    silentAssassinRules: [
      "Nessun marinaio o operatore innocente ferito",
      "Usa l'abito antiradiazioni per avvicinarti al sottomarino senza farti riconoscere"
    ],
    extractionPoints: [
      {
        id: "ext-con-03-plane",
        name: "Aereo Cargo sulla Pista Ghiacciata",
        description: "Punto di fuga finale oltre il ponte ferroviario.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "con-beldingford",
    missionNumber: "04",
    missionTitle: "Beldingford Manor",
    gameSubtitle: "Hitman: Contracts",
    operationCodename: "OP-CONTRACTS-04 // Caccia al Maniero Inglese",
    icaClassification: "ICA CLASSIC // UNITED KINGDOM",
    handler: "Diana Burnwood",
    threatAssessment: "CRITICO",
    primaryLocation: "Tenuta Beldingford, Campagna Inglese",
    targetsSummary: ["Lord Winston Beldingford", "Alistair Beldingford", "Giles Northcott (Ostaggio)"],
    briefingTranscript: "Gli aristocratici Winston e Alistair Beldingford usano la loro immensa tenuta di campagna per organizzare battute di caccia all'uomo. Hanno appena rapito il giovane Giles Northcott e lo libereranno all'alba per dargli la caccia coi segugi. Infiltrati nella villa durante la notte, elimina entrambi i nobili e metti in salvo l'ostaggio prima del sorgere del sole.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Cuscino & Veleno nel Latte)",
        badge: "MASTERPIECE // ZERO BULLETS",
        description: "Sfrutta i passaggi segreti dietro i caminetti della tenuta. Soffoca Lord Winston nel sonno con il cuscino e avvelena il bicchiere di whisky/latte caldo destinato ad Alistair.",
        recommendedSuit: "Abito Nero / Divisa Guardiacaccia",
        loadout: [
          {
            id: "con-04-poison",
            name: "Veleno Letale (Sostituzione Caldaia / Cucina)",
            category: "tool",
            categoryLabel: "Tossina",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Inseribile sia nella tanica d'olio della caldaia per stordire i cani, sia nel drink di Alistair.",
            tacticalTip: "Avvelena la cisterna d'acqua dei cani o il latte caldo di Winston prima di salire."
          },
          {
            id: "con-04-pillow",
            name: "Soffocamento Silenzioso con Cuscino",
            category: "melee",
            categoryLabel: "Incidente Domestico",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Metodo canonico e privo di tracce nella camera padronale di Winston Beldingford.",
            tacticalTip: "Accedi alla camera tramite lo specchio a due vie nel passaggio segreto dietro i camini."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-con-04-1",
        targetOrTask: "Elimina Lord Winston Beldingford",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Camera da Letto Padronale (Piano 2)",
        recommendedMethod: "Soffocamento con cuscino nel sonno attraverso il passaggio segreto",
        intelNotes: "Non accendere le luci della stanza per non svegliarlo."
      },
      {
        id: "obj-con-04-2",
        targetOrTask: "Elimina Alistair Beldingford",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Salotto / Sala Trofei",
        recommendedMethod: "Whisky avvelenato o fucile da caccia nella stanza delle trofei",
        intelNotes: "Alistair beve regolarmente al piano terra prima di andare a dormire."
      },
      {
        id: "obj-con-04-3",
        targetOrTask: "Libera l'Ostaggio Giles Northcott ed Esfiltra",
        type: "safeguard",
        typeLabel: "Salvataggio",
        priority: "CRITICA",
        location: "Stalle Est della Tenuta",
        recommendedMethod: "Prendi le chiavi dalle stalle, silenzia i cani e scorta Giles alla barca",
        intelNotes: "L'allarme delle stalle risveglia tutti i cacciatori."
      }
    ],
    silentAssassinRules: [
      "Nessun cacciatore o domestico eliminato",
      "Usa i passaggi segreti nei muri per evitare le ronde interne",
      "Giles Northcott deve raggiungere la barca sano e salvo"
    ],
    extractionPoints: [
      {
        id: "ext-con-04-boat",
        name: "Barca a Remi sul Fiume Est",
        description: "Ormeggiata oltre la serra e le stalle.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "con-rotterdam-bikers",
    missionNumber: "05",
    missionTitle: "Rendezvous in Rotterdam",
    gameSubtitle: "Hitman: Contracts",
    operationCodename: "OP-CONTRACTS-05 // I Motociclisti del Porto",
    icaClassification: "ICA CONTRACT // ROTTERDAM",
    handler: "Diana Burnwood",
    threatAssessment: "ALTO",
    primaryLocation: "Club Motociclisti, Rotterdam, Paesi Bassi",
    targetsSummary: ["Rutgert Van Leuven", "Klaas Teller", "Foto Compromettenti"],
    briefingTranscript: "Il magnate politico di Rotterdam ci ha assoldati per recuperare delle fotografie compromettenti custodite nella cassaforte del boss biker Rutgert Van Leuven, e per eliminare sia Van Leuven che il traditore Klaas Teller, attualmente torturato nei sotterranei del club.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Veleno nei Drink & Scasso)",
        badge: "NIGHT CLUB // ZERO GUNSHOTS",
        description: "Travestiti da reporter o biker del club, avvelena il bicchiere di Van Leuven nel suo ufficio al primo piano ed elimina silenziosamente Teller nelle segrete.",
        recommendedSuit: "Abito Nero / Giacca di Pelle Biker",
        loadout: [
          {
            id: "con-05-syringe",
            name: "Siringa di Veleno Letale",
            category: "tool",
            categoryLabel: "Tossina",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Neutralizza senza lasciare tracce balistiche sia Van Leuven che il prigioniero Teller.",
            tacticalTip: "Recupera sempre la combinazione della cassaforte per ottenere le fotografie."
          },
          {
            id: "con-05-wire",
            name: "Fiber Wire ICA",
            category: "melee",
            categoryLabel: "Garrota",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Ideale per eliminare il torturatore nei sotterranei se necessario.",
            tacticalTip: "Passa dal retro delle cucine per scendere nelle cantine senza allerta."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-con-05-1",
        targetOrTask: "Elimina Rutgert Van Leuven e Recupera le Fotografie",
        type: "elimination",
        typeLabel: "Eliminazione & Recupero",
        priority: "CRITICA",
        location: "Ufficio Superiore del Club",
        recommendedMethod: "Strangolamento alle spalle e apertura cassaforte",
        intelNotes: "Le foto si trovano dentro la cassaforte dietro la scrivania."
      },
      {
        id: "obj-con-05-2",
        targetOrTask: "Elimina Klaas Teller nei Sotterranei",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Sala Torture Cantina",
        recommendedMethod: "Elettrocuzione tramite leva o siringa silenziosa",
        intelNotes: "Teller è legato a una sedia nella stanza degli interrogatori."
      }
    ],
    silentAssassinRules: [
      "Nessun biker innocente o cliente ucciso",
      "Recupera la busta fotografica prima di uscire dal cancello"
    ],
    extractionPoints: [
      {
        id: "ext-con-05-gate",
        name: "Cancello Principale sul Viale",
        description: "Uscita rapida oltre il piazzale dei motocicli.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "con-deadly-cargo",
    missionNumber: "06",
    missionTitle: "Deadly Cargo",
    gameSubtitle: "Hitman: Contracts",
    operationCodename: "OP-CONTRACTS-06 // Assedio SWAT al Molo",
    icaClassification: "ICA CRITICAL // NUCLEAR STANDOFF",
    handler: "Diana Burnwood",
    threatAssessment: "MASSIMO",
    primaryLocation: "Molo di Rotterdam & Cargo di Boris",
    targetsSummary: ["Arkadij 'Boris' Jegorov", "Testata Nucleare"],
    briefingTranscript: "Rielaborazione della notte di Rotterdam: la polizia olandese e le squadre SWAT hanno già circondato la banchina dove è ormeggiato Boris Jegorov. Devi sfruttare l'irruzione della polizia a tuo vantaggio o infiltrarti prima che la SWAT faccia scattare la bomba nucleare di Boris.",
    approaches: [
      {
        id: "tactical_infiltrator",
        title: "Infiltrazione Polizia / SWAT (Irruzione Coordinata)",
        badge: "TIMED STEALTH // NO NUKE",
        description: "Assumi l'uniforme di un ispettore di polizia sul perimetro esterno e sali a bordo del cargo prima dell'assalto SWAT per sorprendere Boris sottocoperta.",
        recommendedSuit: "Uniforme Polizia / SWAT Olandese",
        loadout: [
          {
            id: "con-06-ballers",
            name: "Silverballer Silenziate (.45 ACP)",
            category: "firearm",
            categoryLabel: "Pistola Furtiva",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Neutralizza rapidamente Boris sul ponte prima che corra verso la stiva nucleare.",
            tacticalTip: "Usa il passaggio delle cabine laterali per evitare i cani da guardia al molo."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-con-06-1",
        targetOrTask: "Elimina Boris Jegorov sul Cargo",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Ponte Comando Nave Cargo",
        recommendedMethod: "Eliminazione silenziata prima dell'irruzione SWAT",
        intelNotes: "Se Boris raggiunge l'innesco nella stiva, il timer nucleare parte immediatamente."
      },
      {
        id: "obj-con-06-2",
        targetOrTask: "Disattiva la Testata ed Esci dal Molo",
        type: "sabotage",
        typeLabel: "Disinnesco",
        priority: "CRITICA",
        location: "Stiva Centrale Nave",
        recommendedMethod: "Disinnesco manuale ed esfiltrazione verso l'uscita nord",
        intelNotes: "Usa l'uniforme SWAT per passare oltre i posti di blocco della polizia."
      }
    ],
    silentAssassinRules: [
      "Nessun agente di polizia o SWAT ucciso",
      "Disinnesco atomico completato senza far partire l'allarme nave"
    ],
    extractionPoints: [
      {
        id: "ext-con-06-gate",
        name: "Blocco Stradale Polizia (Uscita Nord)",
        description: "Attraversabile indenni con abito civile o uniforme polizia.",
        riskLevel: "Medio"
      }
    ]
  },
  {
    missionId: "con-hunter-hunted",
    missionNumber: "07",
    missionTitle: "Hunter and Hunted",
    gameSubtitle: "Hitman: Contracts",
    operationCodename: "OP-CONTRACTS-07 // Fuga da Parigi",
    icaClassification: "PROTOCOL ZERO // FRANCHISE AMBUSH",
    handler: "Contatto Medico Clandestino ICA",
    threatAssessment: "MASSIMO",
    primaryLocation: "Albergo e Tetti di Parigi, Francia",
    targetsSummary: ["Ispettore Albert Fournier (GIGN / Franchise)"],
    briefingTranscript: "Sei tornato alla realtà presente, 47. Sei ferito ma lucido. L'ispettore corrotto Albert Fournier, affiliato al misterioso Franchise, ha circondato il tuo palazzo a Parigi con decine di agenti GIGN pronti a giustiziarti. Usa i cornicioni dei tetti, elimina Fournier in strada sotto la pioggia e raggiungi l'auto di Diana verso l'aeroporto.",
    approaches: [
      {
        id: "precision_sniper",
        title: "Cecchino dai Tetti Parigini",
        badge: "CANONICA // GIGN EVASION",
        description: "Usa i cornicioni del tuo appartamento per passare sul palazzo adiacente, raggiungi il punto di osservazione e colpisci Fournier con il fucile silenziato in strada.",
        recommendedSuit: "Abito Nero da Sicario (Bende Visibili)",
        loadout: [
          {
            id: "con-07-w2000",
            name: "Walther W2000 Silenziato (Stanza 203)",
            category: "firearm",
            categoryLabel: "Fucile Precisione",
            concealment: "Visibile",
            silenced: true,
            lethality: "Letale",
            description: "Recuperabile nell'appartamento vicino attraversando i balconi.",
            tacticalTip: "Elimina Fournier dietro la sua auto di pattuglia davanti all'ingresso dell'hotel."
          },
          {
            id: "con-07-silverballer",
            name: "Silverballer Silenziata (.45 ACP)",
            category: "firearm",
            categoryLabel: "Pistola Furtiva",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Indispensabile per aprirsi la strada tra i vicoli verso la zona d'estrazione.",
            tacticalTip: "Usa i travestimenti da pompiere o agente GIGN per attraversare i posti di blocco in strada."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-con-07-1",
        targetOrTask: "Evadi dall'Albergo Circondato dal GIGN",
        type: "intel",
        typeLabel: "Sopravvivenza",
        priority: "PRIMARIA",
        location: "Tetti di Parigi",
        recommendedMethod: "Passaggio sui cornicioni prima che la squadra sfondi la porta della stanza",
        intelNotes: "Non aspettare nel corridoio: i cecchini ti tengono sotto tiro dalle finestre opposte."
      },
      {
        id: "obj-con-07-2",
        targetOrTask: "Elimina l'Ispettore Albert Fournier e Fuggi",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Viale Principale davanti all'Hotel",
        recommendedMethod: "Colpo di precisione dai tetti o imboscata sul lato opposto del viale",
        intelNotes: "Fournier dirige l'assedio dalla radio della volante di comando."
      }
    ],
    silentAssassinRules: [
      "Nessun agente GIGN innocente ucciso oltre a Fournier",
      "Esfiltrazione verso l'ambulanza / auto all'uscita est"
    ],
    extractionPoints: [
      {
        id: "ext-con-07-car",
        name: "Auto d'Estrazione ICA al Termine del Viale",
        description: "Conduce 47 verso gli Stati Uniti per la campagna Blood Money.",
        riskLevel: "Basso"
      }
    ]
  },

  // ================= HITMAN: BLOOD MONEY (2006) =================
  {
    missionId: "bm-death-showman",
    missionNumber: "08",
    missionTitle: "Death of a Showman",
    gameSubtitle: "Hitman: Blood Money",
    operationCodename: "OP-BM-01 // Morte al Luna Park di Baltimora",
    icaClassification: "ICA CONTRACT // TUTORIAL CONTRACT",
    handler: "Diana Burnwood",
    threatAssessment: "ALTO",
    primaryLocation: "Parco Divertimenti Abbandonato, Baltimora, USA",
    targetsSummary: ["Joseph 'Swing King' Clarence"],
    briefingTranscript: "Un padre distrutto dal dolore ha commissionato questo contratto dopo che un incidente alla ruota panoramica ha ucciso suo figlio. Il proprietario corrotto, Joseph Clarence ('Swing King'), è stato assolto ed è ora barricato nel parco abbandonato sotto la protezione di spacciatori locali. Mostragli la fotografia di suo figlio prima di eseguire la sentenza.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Infiltrazione Stealth & Silverballer",
        badge: "CLEAN CONTRACT // PHOTO DELIVERY",
        description: "Aggira le bande armate nel teatro abbandonato, supera i laboratori di droga e confronta Clarence nel suo ufficio al piano superiore.",
        recommendedSuit: "Abito Classico Nero ICA",
        loadout: [
          {
            id: "bm-08-silverballer",
            name: "Custom Silverballer Silenziata (.45 ACP)",
            category: "firearm",
            categoryLabel: "Pistola Firma",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Arma perfetta per eliminare Clarence dopo avergli mostrato la foto del ragazzo.",
            tacticalTip: "Lancia una moneta per distrarre i due scagnozzi fuori dal laboratorio chimico."
          },
          {
            id: "bm-08-wire",
            name: "Fiber Wire ICA",
            category: "melee",
            categoryLabel: "Garrota",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Eliminazione rapida e silenziosa.",
            tacticalTip: "Occulta sempre i corpi nei cassonetti dell'area."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-bm-08-1",
        targetOrTask: "Elimina Joseph Clarence ('Swing King')",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Ufficio Direzionale del Parco",
        recommendedMethod: "Confronto finale nell'ufficio ed eliminazione silenziata",
        intelNotes: "Clarence tenterà di comprarti offrendo denaro appena ti vedrà."
      }
    ],
    silentAssassinRules: [
      "Nessun allarme di sparatoria generale",
      "Esfiltrazione verso i cancelli del luna park"
    ],
    extractionPoints: [
      {
        id: "ext-bm-08-gate",
        name: "Cancello Principale del Luna Park",
        description: "Uscita sicura verso la strada di Baltimora.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "bm-vintage-year",
    missionNumber: "09",
    missionTitle: "A Vintage Year",
    gameSubtitle: "Hitman: Blood Money",
    operationCodename: "OP-BM-02 // Vendetta tra i Vigneti Cileni",
    icaClassification: "ICA CONTRACT // CHILE",
    handler: "Diana Burnwood",
    threatAssessment: "ALTO",
    primaryLocation: "Vigneti & Hacienda Delgado, Cile",
    targetsSummary: ["Don Fernando Delgado", "Manuel Delgado"],
    briefingTranscript: "I signori della droga cileni Don Fernando Delgado e suo figlio Manuel gestiscono un immenso traffico di cocaina mascherato da tenuta vinicola d'alta classe. Elimina Don Fernando nella sua villa e Manuel nei laboratori sotterranei delle botti di vino, poi fuggi con l'idrovolante sul molo.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Caduta Botte & Violoncello)",
        badge: "ZERO WITNESS // ACCIDENT KILLS",
        description: "Fai cadere la cassa sospesa su Manuel nei sotterranei e strangola Don Fernando mentre suona il violoncello sulla terrazza panoramica.",
        recommendedSuit: "Abito Classico / Tenuta Operaio Vigneto",
        loadout: [
          {
            id: "bm-09-mine",
            name: "Mina RU-AP (Per Cassa Sospesa / Verricello)",
            category: "tool",
            categoryLabel: "Esplosivo Tattico",
            concealment: "Occultabile",
            lethality: "Letale",
            description: "Fissa la carica sull'argano del montacarichi sopra i laboratori di Manuel.",
            tacticalTip: "La caduta del carico di vino schiaccia Manuel simulando un incidente di lavoro perfetto."
          },
          {
            id: "bm-09-wire",
            name: "Fiber Wire ICA",
            category: "melee",
            categoryLabel: "Garrota",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Strangolamento silenzioso di Don Fernando al violoncello.",
            tacticalTip: "Passa dalla porta sul retro del giardino evitando le guardie armate all'ingresso."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-bm-09-1",
        targetOrTask: "Elimina Don Fernando Delgado",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Salone Terrazza Villa",
        recommendedMethod: "Strangolamento alle spalle mentre suona o spinta giù dalla scogliera",
        intelNotes: "Don Fernando è anziano e resta spesso solo nella sala della musica."
      },
      {
        id: "obj-bm-09-2",
        targetOrTask: "Elimina Manuel Delgado",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Cantine e Raffineria Sotterranea",
        recommendedMethod: "Caduta accidentale della botte di vino o avvelenamento cocaina",
        intelNotes: "Manuel controlla costantemente le botti nel laboratorio segreto."
      }
    ],
    silentAssassinRules: [
      "Nessun turista o operaio agricolo ferito",
      "Usa l'idrovolante al molo sotterraneo per esfiltrare"
    ],
    extractionPoints: [
      {
        id: "ext-bm-09-plane",
        name: "Idrovolante nella Grotta del Molo",
        description: "Accessibile attraverso l'ascensore delle cantine.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "bm-curtains-down",
    missionNumber: "10",
    missionTitle: "Curtains Down",
    gameSubtitle: "Hitman: Blood Money",
    operationCodename: "OP-BM-03 // Tragedia all'Opera di Parigi",
    icaClassification: "ICA MASTERWORK // PALAIS GARNIER",
    handler: "Diana Burnwood",
    threatAssessment: "CRITICO",
    primaryLocation: "Palais Garnier (Teatro dell'Opera), Parigi",
    targetsSummary: ["Alvaro D'Alvade (Tenore)", "Richard Delahunt (Ambasciatore)"],
    briefingTranscript: "Al Palais Garnier di Parigi si provano le scene finali della 'Tosca'. Il tenore Alvaro D'Alvade e l'ambasciatore statunitense Richard Delahunt gestiscono un giro internazionale di traffico minorile. Sostituisci la pistola a salve dell'attore con una Mauser autentica per uccidere D'Alvade sul palco, e fai crollare il lampadario di cristallo su Delahunt.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Scambio Mauser & Crollo Lampadario)",
        badge: "DOUBLE ACCIDENT // SIGNATURE BLOOD MONEY",
        description: "Recupera la vera pistola Mauser al guardaroba, scambiala nel camerino dell'attore e piazza una carica sull'argano del lampadario sopra la platea.",
        recommendedSuit: "Abito Classico / Divisa Operaio Scenografia",
        loadout: [
          {
            id: "bm-10-mauser",
            name: "Pistola Storica Mauser WWI (Scambio di Scena)",
            category: "firearm",
            categoryLabel: "Arma di Scena Letale",
            concealment: "Occultabile",
            lethality: "Letale",
            description: "Deposita al guardaroba o scambiabile direttamente nel camerino dell'attore al piano terra.",
            tacticalTip: "Durante la prova d'esecuzione nella Tosca, l'attore sparerà un colpo vero a D'Alvade!"
          },
          {
            id: "bm-10-mine",
            name: "Mina RU-AP (Argano del Lampadario)",
            category: "tool",
            categoryLabel: "Esplosivo di Scena",
            concealment: "Occultabile",
            lethality: "Letale",
            description: "Piazzala sulla catena portante del grande lampadario nelle passerelle superiori.",
            tacticalTip: "Quando Delahunt corre sul palco disperato per la morte del tenore, attiva il detonatore."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-bm-10-1",
        targetOrTask: "Elimina il Tenore Alvaro D'Alvade sul Palco",
        type: "elimination",
        typeLabel: "Incidente Scenico",
        priority: "CRITICA",
        location: "Palcoscenico & Camerini",
        recommendedMethod: "Scambio della pistola a salve con la vera Mauser durante le prove",
        intelNotes: "L'intera platea crederà a un tragico errore di scena."
      },
      {
        id: "obj-bm-10-2",
        targetOrTask: "Elimina l'Ambasciatore Richard Delahunt",
        type: "elimination",
        typeLabel: "Incidente Strutturale",
        priority: "CRITICA",
        location: "Palco Reale / Platea Centrale",
        recommendedMethod: "Caduta del lampadario di cristallo mentre accorre in scena",
        intelNotes: "Controlla che non vi siano operai sotto il lampadario al momento del crollo."
      }
    ],
    silentAssassinRules: [
      "Entrambe le morti devono avvenire come incidenti di scena",
      "Nessun attore o spettatore innocente coinvolto"
    ],
    extractionPoints: [
      {
        id: "ext-bm-10-exit",
        name: "Ingresso Principale del Teatro",
        description: "Mescolati tra lo staff in uscita dopo l'interruzione delle prove.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "bm-flatline",
    missionNumber: "11",
    missionTitle: "Flatline",
    gameSubtitle: "Hitman: Blood Money",
    operationCodename: "OP-BM-04 // Salvataggio alla Clinica Riabilitativa",
    icaClassification: "ICA CRITICAL // AGENT SMITH RESCUE",
    handler: "Diana Burnwood",
    threatAssessment: "ALTO",
    primaryLocation: "Clinica Privata di Riabilitazione, California",
    targetsSummary: ["Carmine DeSalvo", "Lorenzo Lombardo", "Rudy Menzana", "Agente Smith"],
    briefingTranscript: "Un nostro informatore chiave, l'Agente Smith della CIA, è stato rinchiuso sotto sedativi nell'ala psichiatrica di una clinica per vip in California. Infiltrati come paziente ricoverato, libera Smith iniettandogli il siero per simulare la morte clinica ed elimina i tre boss mafiosi nascosti sotto falsa identità nella clinica.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Incidenti in Palestra, Sauna & Gas)",
        badge: "ZERO BULLETS // 3 ACCIDENTS + RESCUE",
        description: "Sfrutta le debolezze di ogni bersaglio: sabotaggio del bilanciere in palestra per DeSalvo, valvola della stufa a gas per Lombardo e chiusura della sauna per Menzana.",
        recommendedSuit: "Veste Paziente VIP / Camice Medico",
        loadout: [
          {
            id: "bm-11-serum",
            name: "Siero Morte Apparente + Antidoto (Fornitura ICA)",
            category: "tool",
            categoryLabel: "Chimica Medica",
            concealment: "Non Rilevabile",
            lethality: "Non Letale",
            description: "Indispensabile per far trasferire l'Agente Smith in obitorio e rianimarlo all'uscita.",
            tacticalTip: "Rianima Smith nell'obitorio privato prima di uscire dal cancello principale."
          },
          {
            id: "bm-11-lockpick",
            name: "Grimaldello ICA",
            category: "tool",
            categoryLabel: "Scasso",
            concealment: "Non Rilevabile",
            lethality: "Supporto / Infiltrazione",
            description: "Apre l'ala medica riservata e la sala sorveglianza VHS.",
            tacticalTip: "Ruba la cassetta di sicurezza se ti riprendono le telecamere."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-bm-11-1",
        targetOrTask: "Trova ed Estrai l'Agente Smith (Morte Apparente + Rianimazione)",
        type: "safeguard",
        typeLabel: "Salvataggio Segreto",
        priority: "CRITICA",
        location: "Ala Psichiatrica & Obitorio",
        recommendedMethod: "Iniezione del siero finto veleno e risveglio in obitorio",
        intelNotes: "Smith ti svelerà i tre nomi dei bersagli nascosti tra i pazienti."
      },
      {
        id: "obj-bm-11-2",
        targetOrTask: "Elimina Carmine DeSalvo, Lorenzo Lombardo e Rudy Menzana",
        type: "elimination",
        typeLabel: "Triplice Eliminazione",
        priority: "CRITICA",
        location: "Palestra / Cucina / Sauna della Clinica",
        recommendedMethod: "Sabotaggio pesi palestra, fuga gas fornelli e lampadario/sauna",
        intelNotes: "Ogni bersaglio ha una routine ricorrente che consente un incidente pulito."
      }
    ],
    silentAssassinRules: [
      "Tutti i tre boss devono morire tramite incidente o silenziosamente",
      "L'Agente Smith deve essere risvegliato nell'obitorio prima dell'esfiltrazione"
    ],
    extractionPoints: [
      {
        id: "ext-bm-11-gate",
        name: "Cancello d'Uscita della Clinica",
        description: "Accanto all'obitorio esterno.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "bm-new-life",
    missionNumber: "12",
    missionTitle: "A New Life",
    gameSubtitle: "Hitman: Blood Money",
    operationCodename: "OP-BM-05 // Festa di Compleanno nel Sobborgo",
    icaClassification: "ICA CLASSIC // WITNESS PROTECTION",
    handler: "Diana Burnwood",
    threatAssessment: "ALTO",
    primaryLocation: "Quartiere Residenziale di San Diego, California",
    targetsSummary: ["Vinnie Sinistra", "Microfilm (Collana Moglie)"],
    briefingTranscript: "L'ex mafioso cubano Vinnie Sinistra vive sotto protezione testimoni dell'FBI in un tranquillo quartiere suburbano, proprio mentre si festeggia il compleanno del figlio. Elimina Sinistra e recupera il prezioso microfilm custodito nella collana della moglie, facendo attenzione agli agenti FBI appostati nel furgone di sorveglianza.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Ciambelle Sedate & Gas Barbecue)",
        badge: "SUBURBAN MASTER // ACCIDENT & SEDATIVE",
        description: "Seda le ciambelle destinate agli agenti FBI nel furgone, usa l'etere sulla moglie di Sinistra o sabotale il barbecue in giardino.",
        recommendedSuit: "Abito Classico / Uniforme Clown o Disinfestatore",
        loadout: [
          {
            id: "bm-12-sedative",
            name: "Siringhe Sedative (x2) + Fluido Accendigas",
            category: "tool",
            categoryLabel: "Infiltrazione",
            concealment: "Non Rilevabile",
            lethality: "Non Letale",
            description: "Seda gli agenti FBI nel furgone di sorveglianza per ottenere l'abito federale e rubare i nastri VHS.",
            tacticalTip: "Indossa l'uniforme del disinfestatore di insetti o del clown per entrare in casa senza controlli."
          },
          {
            id: "bm-12-wire",
            name: "Fiber Wire ICA",
            category: "melee",
            categoryLabel: "Garrota",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Eliminazione pulita di Vinnie mentre guarda la TV in salotto.",
            tacticalTip: "Recupera il microfilm dalla collana della moglie addormentandola con l'anestetico nella piscina o con l'etere."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-bm-12-1",
        targetOrTask: "Elimina Vinnie Sinistra",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Salotto / Giardino Villa Sinistra",
        recommendedMethod: "Strangolamento mentre guarda la TV o incidente in piscina",
        intelNotes: "Non avvicinarti armato agli invitati della festa."
      },
      {
        id: "obj-bm-12-2",
        targetOrTask: "Recupera il Microfilm dalla Collana della Moglie",
        type: "intel",
        typeLabel: "Recupero Dati",
        priority: "CRITICA",
        location: "Piscina / Bagno Piano Terra",
        recommendedMethod: "Sedazione della moglie con etere o incidente al barbecue (se preferisci un approccio estremo)",
        intelNotes: "Senza il microfilm la missione non può terminare."
      }
    ],
    silentAssassinRules: [
      "Zero agenti FBI o invitati civili uccisi",
      "Ruba la cassetta di sorveglianza nel furgone FBI dopo aver sedato gli agenti"
    ],
    extractionPoints: [
      {
        id: "ext-bm-12-street",
        name: "Strada Principale del Quartiere",
        description: "Oltre il furgone FBI e i cassonetti.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "bm-murder-crows",
    missionNumber: "13",
    missionTitle: "The Murder of Crows",
    gameSubtitle: "Hitman: Blood Money",
    operationCodename: "OP-BM-06 // Caccia ai Corvi al Mardi Gras",
    icaClassification: "ICA EMERGENCY // RIVAL ASSASSINS",
    handler: "Diana Burnwood",
    threatAssessment: "CRITICO",
    primaryLocation: "Quartiere Francese (Mardi Gras), New Orleans",
    targetsSummary: ["Mark Purayah II", "Raymond Kulinsky", "Angelina Mason"],
    briefingTranscript: "Il Franchise ha inviato una squadra di tre assassini travestiti da corvi rossi per uccidere il politico Jim Hall tra la folla del Mardi Gras. Intercetta i loro walkie-talkie: elimina Mark Purayah II nel covo, oltre a Raymond Kulinsky e Angelina Mason, e recupera la valigetta dei diamanti prima che colpiscano il loro bersaglio.",
    approaches: [
      {
        id: "tactical_infiltrator",
        title: "Contro-Spionaggio al Mardi Gras (Travestimento Corvo)",
        badge: "COUNTER-ASSASSIN // SILENT KILL",
        description: "Intercetta il corriere nel vicolo per vestirti da Corvo Rosso, consegna i diamanti al capo nel suo covo per eliminarlo e usa il walkie-talkie per localizzare Kulinsky e Mason nei bar.",
        recommendedSuit: "Costume da Corvo Rosso / Abito Classico",
        loadout: [
          {
            id: "bm-13-silverballer",
            name: "Silverballer Silenziata (.45 ACP)",
            category: "firearm",
            categoryLabel: "Pistola Furtiva",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Neutralizza il cecchino Kulinsky al piano superiore del bar prima che apra il fuoco sulla parata.",
            tacticalTip: "Mason si sposta tra la folla comunicando via radio: seguila nel vicolo sul retro."
          },
          {
            id: "bm-13-wire",
            name: "Fiber Wire ICA",
            category: "melee",
            categoryLabel: "Garrota",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Elimina Mark Purayah II nel covo senza attirare le guardie esterne.",
            tacticalTip: "Recupera sempre la valigetta dei diamanti prima di lasciare New Orleans."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-bm-13-1",
        targetOrTask: "Elimina Mark Purayah II (Capo dei Corvi)",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Ufficio Covo Piano 2",
        recommendedMethod: "Consegna della valigetta in costume da Corvo ed eliminazione silenziosa",
        intelNotes: "Purayah è il clone/leader operativo dell'attacco del Franchise."
      },
      {
        id: "obj-bm-13-2",
        targetOrTask: "Elimina Raymond Kulinsky e Angelina Mason + Proteggi il Politico",
        type: "elimination",
        typeLabel: "Contro-Eliminazione",
        priority: "CRITICA",
        location: "Bar Jazz / Salsa Club sulla Piazza",
        recommendedMethod: "Insegui i segnali radio sui piani superiori e neutralizza entrambi prima dello sparo",
        intelNotes: "Il politico sfila lungo il viale principale del carnevale."
      }
    ],
    silentAssassinRules: [
      "Zero civili feriti nella folla del Mardi Gras",
      "Il politico deve sopravvivere indenne",
      "Recupera la valigetta dei diamanti"
    ],
    extractionPoints: [
      {
        id: "ext-bm-13-exit",
        name: "Vicolo Nord del Quartiere Francese",
        description: "Uscita con valigetta dei diamanti in mano.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "bm-watch-out",
    missionNumber: "14",
    missionTitle: "You Better Watch Out...",
    gameSubtitle: "Hitman: Blood Money",
    operationCodename: "OP-BM-07 // Festa sulla Neve alle Montagne Rocciose",
    icaClassification: "ICA CONTRACT // ROCKY MOUNTAINS",
    handler: "Diana Burnwood",
    threatAssessment: "ALTO",
    primaryLocation: "Villa Scavata nella Roccia, Montagne Rocciose, USA",
    targetsSummary: ["Lorne de Havilland", "Chad Bingham Jr.", "Video Compromettente"],
    briefingTranscript: "Il magnate dell'intrattenimento Lorne de Havilland tiene una festa esclusiva nella sua villa alpina per ricattare il figlio di un senatore, Chad Bingham Jr., tramite una videocassetta compromettente. Elimina entrambi in incidenti glaciali sulla neve o nell'idromassaggio, e recupera il nastro video.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Vetro Idromassaggio & Balcone)",
        badge: "ICE COLD // DOUBLE ACCIDENT",
        description: "Spara al fondo in vetro dell'idromassaggio sospeso per far precipitare Chad Bingham Jr. nel vuoto, e spingi Lorne de Havilland dalla ringhiera innevata.",
        recommendedSuit: "Abito Classico / Uniforme Babbo Natale o Guardia",
        loadout: [
          {
            id: "bm-14-silverballer",
            name: "Silverballer Silenziata (.45 ACP)",
            category: "firearm",
            categoryLabel: "Pistola Furtiva",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Un colpo dal livello sottostante frantuma il fondo in vetro della piscina sospesa su Chad.",
            tacticalTip: "Assicurati che le ragazze escano dalla vasca con una distrazione o un afrodisiaco prima di rompere il vetro."
          },
          {
            id: "bm-14-sausage",
            name: "Cibo Sedato per il Cane di Lorne",
            category: "tool",
            categoryLabel: "Diversivo Animale",
            concealment: "Occultabile",
            lethality: "Non Letale",
            description: "Mantiene calmo il cane che segue ovunque il vecchio de Havilland.",
            tacticalTip: "Preleva la videocassetta nello studio privato e distruggi il registratore VHS."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-bm-14-1",
        targetOrTask: "Elimina Chad Bingham Jr.",
        type: "elimination",
        typeLabel: "Incidente Idromassaggio",
        priority: "CRITICA",
        location: "Terrazza Vasca Sospesa",
        recommendedMethod: "Rottura del fondo in vetro dalla grotta sottostante o avvelenamento drink",
        intelNotes: "Non danneggiare le ragazze presenti se punti al punteggio perfetto."
      },
      {
        id: "obj-bm-14-2",
        targetOrTask: "Elimina Lorne de Havilland e Recupera la Videocassetta",
        type: "elimination",
        typeLabel: "Eliminazione & Recupero",
        priority: "CRITICA",
        location: "Studio & Terrazza Principale",
        recommendedMethod: "Spinta giù dalla balaustra nevosa mentre osserva il panorama",
        intelNotes: "La cassetta video si trova nell'ufficio dell'attico."
      }
    ],
    silentAssassinRules: [
      "Nessuna ospite o cameriera uccisa",
      "Esfiltrazione con l'elicottero o lo motoscafo nella grotta sotto la villa"
    ],
    extractionPoints: [
      {
        id: "ext-bm-14-heli",
        name: "Eliporto Alpino della Villa",
        description: "Oppure motoscafo nella grotta dell'ascensore inferiore.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "bm-mississippi",
    missionNumber: "15",
    missionTitle: "Death on the Mississippi",
    gameSubtitle: "Hitman: Blood Money",
    operationCodename: "OP-BM-08 // Massacro sul Battello a Vapore",
    icaClassification: "ICA CONTRACT // MISSISSIPPI RIVER",
    handler: "Diana Burnwood",
    threatAssessment: "CRITICO",
    primaryLocation: "Battello Fluviale 'Emily', Fiume Mississippi",
    targetsSummary: ["Capitano Skip Muldoon", "I 6 Gator Boys", "Foto del Cliente"],
    briefingTranscript: "Un incidente sul Mississippi nasconde un traffico illegale orchestrato dal capitano Skip Muldoon e dalla sua banda armata, i sei 'Gator Boys'. Devi eliminare il capitano, tutti e sei i membri della gang e recuperare delle foto compromettenti nella cassaforte della cabina di comando.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Torta Avvelenata & Spinte in Acqua)",
        badge: "7 TARGETS // ZERO WITNESSES",
        description: "Usa il travestimento da membro dell'equipaggio o cameriere VIP, avvelena la torta destinata al capitano Skip Muldoon ed elimina i Gator Boys spingendoli silenziosamente oltre il parapetto.",
        recommendedSuit: "Divisa Cameriere VIP / Marinaio Battello",
        loadout: [
          {
            id: "bm-15-poison",
            name: "Veleno Letale (Sulla Torta della Cabina)",
            category: "tool",
            categoryLabel: "Tossina",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Inserita sulla torta che il capitano ordina in cabina.",
            tacticalTip: "Prepara la torta in cucina in abito da cameriere VIP."
          },
          {
            id: "bm-15-wire",
            name: "Fiber Wire ICA",
            category: "melee",
            categoryLabel: "Garrota",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Perfetta per i Gator Boys appostati nella sala motori o ai ponti superiori.",
            tacticalTip: "Spingere un bersaglio isolato nel fiume conta come morte silenziosa senza corpo da nascondere."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-bm-15-1",
        targetOrTask: "Elimina il Capitano Skip Muldoon e Recupera le Foto",
        type: "elimination",
        typeLabel: "Eliminazione & Intel",
        priority: "CRITICA",
        location: "Cabina del Capitano (Ponte Superiore)",
        recommendedMethod: "Torta avvelenata servita in cabina e apertura cassaforte",
        intelNotes: "Fai attenzione alle due guardie che sorvegliano il corridoio VIP."
      },
      {
        id: "obj-bm-15-2",
        targetOrTask: "Elimina Tutti i Sei 'Gator Boys' sul Battello",
        type: "elimination",
        typeLabel: "Eliminazione Multipla",
        priority: "CRITICA",
        location: "Ponti Principale, Inferiore e Sala Macchine",
        recommendedMethod: "Spinte nel fiume Mississippi o strangolamenti isolati nei bagni",
        intelNotes: "Ogni membro pattuglia una sezione distinta del battello."
      }
    ],
    silentAssassinRules: [
      "Nessun passeggero o marinaio innocente colpito",
      "Esfiltra con la scialuppa di salvataggio a poppa"
    ],
    extractionPoints: [
      {
        id: "ext-bm-15-boat",
        name: "Scialuppa di Salvataggio a Poppa",
        description: "Calata sul fiume al termine delle eliminazioni.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "bm-till-death",
    missionNumber: "16",
    missionTitle: "Till Death Do Us Part",
    gameSubtitle: "Hitman: Blood Money",
    operationCodename: "OP-BM-09 // Matrimonio nelle Paludi della Louisiana",
    icaClassification: "ICA CONTRACT // LOUISIANA BAYOU",
    handler: "Diana Burnwood",
    threatAssessment: "ALTO",
    primaryLocation: "Piantagione nelle Paludi, Louisiana, USA",
    targetsSummary: ["Buddy Muldoon (Sposo)", "Pappy John LeBlanc"],
    briefingTranscript: "La faida familiare tra i Muldoon e i LeBlanc si celebra in un matrimonio paludoso. La sposa in persona ha assoldato l'ICA: elimina il padre Pappy John LeBlanc e il futuro sposo Buddy Muldoon prima che la cerimonia concluda l'alleanza criminale. Attento ai coccodrilli e agli invitati ubriachi armati di doppietta.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Torta Nuziale & Tomba nella Palude)",
        badge: "ZERO BULLETS // SWAMP ACCIDENT",
        description: "Avvelena la torta nuziale di Buddy o sabotane la bottiglia, poi spingi Pappy John nella tomba aperta nel cimitero paludoso.",
        recommendedSuit: "Abito Classico / Vestito Invitato o Prete",
        loadout: [
          {
            id: "bm-16-poison",
            name: "Veleno Letale (Torta o Bottiglia di Whiskey)",
            category: "tool",
            categoryLabel: "Tossina",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Neutralizza lo sposo Buddy Muldoon senza spari durante il ricevimento.",
            tacticalTip: "Puoi anche far cadere il lampadario nella sala nuziale."
          },
          {
            id: "bm-16-mine",
            name: "Mina RU-AP (Lampadario / Tomba)",
            category: "tool",
            categoryLabel: "Incidente",
            concealment: "Occultabile",
            lethality: "Letale",
            description: "Perfetta per un'eliminazione a distanza pulita.",
            tacticalTip: "Spingi Pappy John dentro la fossa scavata quando visita il cimitero di famiglia."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-bm-16-1",
        targetOrTask: "Elimina lo Sposo Buddy Muldoon",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Salone Ricevimento & Giardino",
        recommendedMethod: "Torta avvelenata o caduta del lampadario al piano terra",
        intelNotes: "Buddy girovaga tra la cucina e l'altare prima delle nozze."
      },
      {
        id: "obj-bm-16-2",
        targetOrTask: "Elimina Pappy John LeBlanc",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Veranda & Cimitero Paludoso",
        recommendedMethod: "Spinta nella fossa aperta o annegamento nella palude degli alligatori",
        intelNotes: "Non mostrare armi in presenza del prete o degli invitati."
      }
    ],
    silentAssassinRules: [
      "La sposa (cliente) deve restare illesa",
      "Nessun invitato ubriaco ucciso"
    ],
    extractionPoints: [
      {
        id: "ext-bm-16-airboat",
        name: "Idroscivolante (Airboat) sul Molo della Palude",
        description: "Ormeggiato dietro la capanna iniziale.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "bm-house-cards",
    missionNumber: "17",
    missionTitle: "A House of Cards",
    gameSubtitle: "Hitman: Blood Money",
    operationCodename: "OP-BM-10 // Scambio Genetico a Las Vegas",
    icaClassification: "ICA CRITICAL // LAS VEGAS CASINO",
    handler: "Diana Burnwood",
    threatAssessment: "CRITICO",
    primaryLocation: "Shamal Hotel & Casinò, Las Vegas, USA",
    targetsSummary: ["Hendrik Schmutz", "Tariq Abdul Lateef", "Sceicco Mohammad Al-Khalifa"],
    briefingTranscript: "Al casinò Shamal di Las Vegas sta per avvenire una transazione letale sul mercato genetico: il trafficante sudafricano Hendrik Schmutz vende una valigetta con campioni di DNA allo sceicco Al-Khalifa tramite l'intermediario Tariq Abdul Lateef. Elimina tutti e tre i protagonisti e impossessati della valigetta del DNA prima che il Franchise li intercetti.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Ascensore & Valigetta Bomba/Cecchino)",
        badge: "VEGAS MASTER // PENTHOUSE WIRE",
        description: "Strangola Hendrik Schmutz nella sua camera o tramite botola dell'ascensore, rubagli l'identità, incontra lo sceicco per lo scambio e colpisci entrambi senza allarmi.",
        recommendedSuit: "Abito Nero Classico / Abito Hendrik Schmutz",
        loadout: [
          {
            id: "bm-17-wire",
            name: "Fiber Wire ICA",
            category: "melee",
            categoryLabel: "Garrota",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Elimina Schmutz e Lateef dalla botola sul tetto dell'ascensore al 7°/8° piano.",
            tacticalTip: "La botola sul tetto dell'ascensore ti permette di strangolare i bersagli che viaggiano da soli senza essere visto!"
          },
          {
            id: "bm-17-sniper",
            name: "Walther WA2000 Silenziato (Dalla Finestra)",
            category: "firearm",
            categoryLabel: "Fucile Precisione",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Colpisci lo sceicco Al-Khalifa al bar esterno dal balcone della tua suite all'8° piano.",
            tacticalTip: "Chiama lo sceicco sul telefono cellulare o attendi che esca a parlare al telefono."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-bm-17-1",
        targetOrTask: "Elimina Hendrik Schmutz e Tariq Abdul Lateef",
        type: "elimination",
        typeLabel: "Doppia Eliminazione",
        priority: "CRITICA",
        location: "Camere Piano 7-8 & Ascensore Casinò",
        recommendedMethod: "Strangolamento dalla botola dell'ascensore o dentro le suite",
        intelNotes: "Schmutz porta la valigetta di scambio con i campioni biologici."
      },
      {
        id: "obj-bm-17-2",
        targetOrTask: "Elimina lo Sceicco Al-Khalifa e Recupera la Valigetta DNA",
        type: "elimination",
        typeLabel: "Eliminazione & Recupero",
        priority: "CRITICA",
        location: "Lounge Bar Esterno / Casinò",
        recommendedMethod: "Colpo di cecchino dal balcone della suite quando riceve la telefonata",
        intelNotes: "Recupera sempre la valigetta dei diamanti/DNA al tavolo prima di uscire."
      }
    ],
    silentAssassinRules: [
      "Zero giocatori del casinò o guardie armate uccise",
      "Ruba la registrazione VHS di sicurezza nella stanza del casinò"
    ],
    extractionPoints: [
      {
        id: "ext-bm-17-taxi",
        name: "Ingresso Principale Casinò Shamal",
        description: "Uscita con valigetta verso la Strip di Las Vegas.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "bm-dance-devil",
    missionNumber: "18",
    missionTitle: "A Dance with the Devil",
    gameSubtitle: "Hitman: Blood Money",
    operationCodename: "OP-BM-11 // Inferno e Paradiso a Vegas",
    icaClassification: "ICA CRITICAL // FRANCHISE HIT SQUAD",
    handler: "Diana Burnwood",
    threatAssessment: "MASSIMO",
    primaryLocation: "Torre Shark Club ('Paradiso' & 'Inferno'), Las Vegas",
    targetsSummary: ["Anthony Martinez", "Vaana Ketlyn", "Eve", "Maynard John"],
    briefingTranscript: "È una guerra aperta con il Franchise, 47. Quattro letali assassini rivali — l'agente CIA Anthony Martinez, la spia Vaana Ketlyn, Eve e Maynard John — hanno preparato un agguato durante una sfarzosa festa a tema 'Paradiso e Inferno' in un grattacielo di Las Vegas. Scopri i nomi sul computer dell'Inferno, eliminali tutti e quattro e fuggi prima che chiudano gli ascensori.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Duelli Separati: Paradiso & Inferno)",
        badge: "4 ASSASSINS // CLEAN EXECUTION",
        description: "Affronta Eve e Martinez ai piani del Paradiso (incendio di scena o veleno), poi scendi all'Inferno per duellare con Maynard John nella stanza privata e sabotare i giochi pirotecnici di Vaana.",
        recommendedSuit: "Abito Classico / Costume da Diavolo o Cameriere",
        loadout: [
          {
            id: "bm-18-silverballer",
            name: "Silverballer Silenziata (.45 ACP)",
            category: "firearm",
            categoryLabel: "Pistola Furtiva",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Indispensabile per battere Maynard John nel suo duello privato al piano Inferno.",
            tacticalTip: "Accetta la sfida di Maynard John nella sala delle torture e colpiscilo subito dopo il via."
          },
          {
            id: "bm-18-mine",
            name: "Mina RU-AP (Pirotecnia Palco Inferno)",
            category: "tool",
            categoryLabel: "Incidente",
            concealment: "Occultabile",
            lethality: "Letale",
            description: "Sabota gli effetti di fiamma durante lo spettacolo di Vaana Ketlyn.",
            tacticalTip: "Ricordati di recuperare l'identità dei bersagli dal laptop al piano inferiore prima di uscire."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-bm-18-1",
        targetOrTask: "Elimina Anthony Martinez ed Eve (Piano Paradiso)",
        type: "elimination",
        typeLabel: "Doppia Eliminazione",
        priority: "CRITICA",
        location: "Attico Festa Paradiso",
        recommendedMethod: "Strangolamento nella stanza privata di Martinez / spinta oltre la balaustra",
        intelNotes: "Eve ti adescherà per portarti nella sala isolata: ribalta l'imboscata."
      },
      {
        id: "obj-bm-18-2",
        targetOrTask: "Elimina Vaana Ketlyn e Maynard John (Piano Inferno)",
        type: "elimination",
        typeLabel: "Doppia Eliminazione",
        priority: "CRITICA",
        location: "Sotterranei Festa Inferno",
        recommendedMethod: "Sabotaggio fuoco su Vaana e duello silenzioso con Maynard John",
        intelNotes: "Scarica i file dal portatile dietro il palco dell'Inferno."
      }
    ],
    silentAssassinRules: [
      "Zero invitati civili coinvolti",
      "Scarica sempre i dati dal computer del Franchise"
    ],
    extractionPoints: [
      {
        id: "ext-bm-18-garage",
        name: "Garage Sotterraneo della Torre",
        description: "Uscita dal parcheggio blindato sotto l'Inferno.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "bm-amendment-xxv",
    missionNumber: "19",
    missionTitle: "Amendment XXV",
    gameSubtitle: "Hitman: Blood Money",
    operationCodename: "OP-BM-12 // Assalto alla Casa Bianca",
    icaClassification: "PROTOCOL ZERO // WHITE HOUSE",
    handler: "Diana Burnwood (Ultimo Contatto Operativo)",
    threatAssessment: "MASSIMO",
    primaryLocation: "Casa Bianca, Washington D.C., USA",
    targetsSummary: ["Vicepresidente Daniel Morris", "Mark Parchezzi III (Clone Albino)"],
    briefingTranscript: "Il Franchise ha quasi completato il colpo di stato. Il Vicepresidente Daniel Morris intende assassinare il Presidente degli Stati Uniti per usurparne i poteri e legalizzare la clonazione militare. Il loro miglior sicario, il clone albino Mark Parchezzi III, è già all'interno della Casa Bianca. Elimina entrambi prima che il complotto abbia compimento.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Ala Ovest & Duello sul Tetto)",
        badge: "PRESIDENTIAL SAVE // CLONE DUEL",
        description: "Aggira i metal detector con il travestimento dei Servizi Segreti, elimina Daniel Morris nei corridoi dell'Ala Ovest e affronta Mark Parchezzi III sul tetto dello Studio Ovale sotto la pioggia.",
        recommendedSuit: "Abito Classico / Uniforme Servizi Segreti",
        loadout: [
          {
            id: "bm-19-silverballer",
            name: "Custom Silverballer Silenziata (.45 ACP)",
            category: "firearm",
            categoryLabel: "Pistola Firma",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Occultala nella valigetta dei turisti oltre il metal detector all'ingresso.",
            tacticalTip: "Lascia la valigetta sul nastro trasportatore per recuperarla immediatamente dopo il varco!"
          },
          {
            id: "bm-19-wire",
            name: "Fiber Wire ICA",
            category: "melee",
            categoryLabel: "Garrota",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Elimina il Vicepresidente Morris mentre porta a spasso il cane nel cortile o nei bagni privati.",
            tacticalTip: "Parchezzi fuggirà sul tetto appena entri nello Studio Ovale: sii pronto a rispondere al fuoco."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-bm-19-1",
        targetOrTask: "Elimina il Vicepresidente Daniel Morris",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Ala Ovest / Giardino delle Rose",
        recommendedMethod: "Strangolamento nei corridoi riservati o vicino alle scale dell'Ala Ovest",
        intelNotes: "Morris è sempre scortato da una guardia armata personale."
      },
      {
        id: "obj-bm-19-2",
        targetOrTask: "Elimina Mark Parchezzi III (Clone Albino del Franchise)",
        type: "elimination",
        typeLabel: "Duello tra Cloni",
        priority: "CRITICA",
        location: "Tetto dello Studio Ovale",
        recommendedMethod: "Colpi di precisione alla testa mentre tenta la fuga tra le coperture del tetto",
        intelNotes: "Parchezzi è agile quanto te e impugna armi d'assalto ad alta cadenza."
      }
    ],
    silentAssassinRules: [
      "Zero turisti o agenti dei Servizi Segreti innocenti uccisi",
      "Ruba sempre il nastro VHS di sicurezza della Casa Bianca"
    ],
    extractionPoints: [
      {
        id: "ext-bm-19-gate",
        name: "Ingresso Principale Ala Est",
        description: "Uscita con la valigetta tra i visitatori ignari.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "bm-requiem",
    missionNumber: "20",
    missionTitle: "Requiem",
    gameSubtitle: "Hitman: Blood Money",
    operationCodename: "OP-BM-13 // Resurrezione al Funerale (Epilogo)",
    icaClassification: "NO WITNESSES // AVE MARIA",
    handler: "Diana Burnwood (Iniezione Antidoto & Bacio)",
    threatAssessment: "MASSIMO",
    primaryLocation: "Cappella Funeraria Privata del Franchise",
    targetsSummary: ["Alexander Leland Cayne", "Rick Henderson (Giornalista)", "Il Prete", "Guardie del Franchise"],
    briefingTranscript: "Diana ti ha somministrato il finto veleno clinico e ha posato le tue Silverballers sul petto nella bara della cappella funeraria, baciandoti con l'antidoto sulle labbra. Al segnale dell'Ave Maria, risorgi dal catafalco: non può restare alcun testimone vivente dell'esistenza di 47. Stermina Alexander Leland Cayne, il giornalista, il prete e tutta la scorta.",
    approaches: [
      {
        id: "tactical_infiltrator",
        title: "Ave Maria Carnage (Risveglio & Silverballers Gemelle)",
        badge: "ZERO SURVIVORS // REQUIEM SUIT",
        description: "Alzati dalla bara sfruttando subito la copertura dell'altare, abbatti le guardie con colpi alla testa e termina Cayne sulla sua sedia a rotelle prima che fugga oltre i cancelli.",
        recommendedSuit: "Abito Requiem Bianco con Cravatta Cremisi",
        loadout: [
          {
            id: "bm-20-ballers",
            name: "Dual Custom Silverballers (.45 ACP)",
            category: "firearm",
            categoryLabel: "Doppia Pistola Firma",
            concealment: "Occultabile",
            silenced: false,
            lethality: "Letale",
            description: "Riposte da Diana direttamente sulle tue mani dentro la bara funeraria.",
            tacticalTip: "Usa i pilastri della cappella come copertura e fai attenzione alle guardie dietro i banchi."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-bm-20-1",
        targetOrTask: "Elimina Alexander Leland Cayne (Direttore del Franchise)",
        type: "elimination",
        typeLabel: "Esecuzione Finale",
        priority: "CRITICA",
        location: "Navata della Cappella Funeraria",
        recommendedMethod: "Fuoco incrociato immediato mentre usa il giornalista come scudo umano",
        intelNotes: "Cayne dirige la distruzione dell'ICA dalla sua sedia a rotelle."
      },
      {
        id: "obj-bm-20-2",
        targetOrTask: "Nessun Testimone: Elimina Giornalista, Prete e Tutte le Guardie",
        type: "elimination",
        typeLabel: "Pulizia Totale",
        priority: "CRITICA",
        location: "Cappella e Cimitero Esterno",
        recommendedMethod: "Eliminazione sistematica di tutti i presenti prima della fuga",
        intelNotes: "Controlla i cancelli laterali: alcune guardie e il prete tentano la fuga all'esterno."
      }
    ],
    silentAssassinRules: [
      "Zero testimoni rimasti in vita nell'intera area (100% eliminazione)"
    ],
    extractionPoints: [
      {
        id: "ext-bm-20-hearse",
        name: "Uscita dal Cimitero Privato",
        description: "Fine della guerra contro il Franchise e rinascita dell'ICA.",
        riskLevel: "Basso"
      }
    ]
  }
];
