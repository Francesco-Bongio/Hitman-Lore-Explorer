import { MissionBriefingData } from "../briefingTypes";

export const GENESIS_MISSIONS: MissionBriefingData[] = [
  {
    missionId: "gen-asylum-escape",
    missionNumber: "01",
    missionTitle: "Satu Mare Asylum (La Fuga)",
    gameSubtitle: "Progetto Ort-Meyer (1989-1999)",
    operationCodename: "OP-GENESIS-01 // Evasione dal Blocco Omega",
    icaClassification: "UNSANCTIONED // ORT-MEYER LABS",
    handler: "Soggetto 6 (Lucas Grey) - Comunicazione Clandestina",
    threatAssessment: "MASSIMO",
    primaryLocation: "Satu Mare, Romania (Ala Psichiatrica Ipogea)",
    targetsSummary: ["Guardie di Contenimento", "Sistema Neurale Ort-Meyer"],
    briefingTranscript: "47, è la nostra unica finestra. Il Dottor Ort-Meyer ha ordinato il reset chimico della tua memoria dopo aver scoperto il nostro patto di sangue. Le guardie del settore Delta hanno ordine di sparare a vista. Raggiungi i condotti di aerazione dell'infermeria e distruggi i registri sinaptici prima di scendere verso le condotte fognarie.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Evasione Fantasma)",
        badge: "NO TRACE // ZERO ALLARMI",
        description: "Sguscia via dalle celle d'isolamento sfruttando i condotti di aerazione e bisturi chirurgici non rilevabili.",
        recommendedSuit: "Casacca da Degente / Camice Medico Sottratto",
        loadout: [
          {
            id: "gen-01-scalpel",
            name: "Bisturi in Ceramica da Dissezione",
            category: "melee",
            categoryLabel: "Lama Furtiva",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Bisturi medico sterile non rilevato dai metal detector di blocco.",
            tacticalTip: "Elimina silenziosamente l'infermiere di ronda prima che attivi la serratura magnetica."
          },
          {
            id: "gen-01-sedative",
            name: "Siringa di Ketamina Concentrata",
            category: "tool",
            categoryLabel: "Sedativo",
            concealment: "Occultabile",
            lethality: "Non Letale",
            description: "Prelevata dall'armadietto dell'ala psichiatrica.",
            tacticalTip: "Sedare i medici permette di ottenere il camice senza compromettere la fuga silenziosa."
          },
          {
            id: "gen-01-wire",
            name: "Cavo Elettromedicale Improvvisato",
            category: "melee",
            categoryLabel: "Garrota",
            concealment: "Occultabile",
            lethality: "Letale",
            description: "Cavo strappato dall'apparecchiatura per elettroshock.",
            tacticalTip: "Utile per neutralizzare le guardie armate nei corridoi ciechi."
          }
        ]
      },
      {
        id: "tactical_infiltrator",
        title: "Infiltrato in Uniforme (Travestimento Guardia)",
        badge: "DISGUISE // ACCESSO SETTORI",
        description: "Sottrai l'uniforme della vigilanza interna per attraversare i varchi del laboratorio senza destare allarme.",
        recommendedSuit: "Uniforme Sicurezza Manicomio Satu Mare",
        loadout: [
          {
            id: "gen-01-makarov",
            name: "Makarov 9mm con Silenziatore Artigianale",
            category: "firearm",
            categoryLabel: "Arma Furtiva",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Pistola sottratta al capoturno della sicurezza.",
            tacticalTip: "Distruggi le lampade nei corridoi per muoverti al buio."
          },
          {
            id: "gen-01-keycard",
            name: "Tessera Magnetica Settore Delta",
            category: "pickup",
            categoryLabel: "Accesso",
            concealment: "Non Rilevabile",
            lethality: "Supporto / Infiltrazione",
            description: "Nascosta dal Soggetto 6 dietro la caldaia del montacarichi.",
            tacticalTip: "Sblocca l'ascensore di servizio verso i livelli superiori."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-gen-01-1",
        targetOrTask: "Evadi dalla Cella d'Isolamento e Recupera il Camice Medico",
        type: "intel",
        typeLabel: "Evasione",
        priority: "CRITICA",
        location: "Blocco Degenze Livello -3",
        recommendedMethod: "Sedazione silenziosa dell'infermiere al cambio turno",
        intelNotes: "Non uscire in casacca da degente: verresti individuato istantaneamente."
      },
      {
        id: "obj-gen-01-2",
        targetOrTask: "Cancella i Tracciati Sinaptici dal Mainframe di Ort-Meyer",
        type: "sabotage",
        typeLabel: "Sabotaggio",
        priority: "PRIMARIA",
        location: "Sala Controllo Biogenetica",
        recommendedMethod: "Sovraccarico terminale tramite scheda d'accesso",
        intelNotes: "Protegge le memorie condivise con il Soggetto 6 prima della fuga."
      },
      {
        id: "obj-gen-01-3",
        targetOrTask: "Raggiungi la Condotta Fognaria Sud-Ovest",
        type: "extraction",
        typeLabel: "Esfiltrazione",
        priority: "CRITICA",
        location: "Sotterranei Esterni",
        recommendedMethod: "Uscita coordinata nei boschi dei Carpazi",
        intelNotes: "La fuga sarà asimmetrica: solo uno dei due riuscirà a far perdere le proprie tracce all'esterno."
      }
    ],
    silentAssassinRules: [
      "Nessun paziente o personale non ostile eliminato",
      "Occulta ogni corpo nei pozzi di aerazione",
      "Nessun allarme sonoro attivato nel perimetro"
    ],
    extractionPoints: [
      {
        id: "ext-gen-01-sewer",
        name: "Condotto Fognario dei Carpazi",
        description: "Sbocco nel torrente oltre la recinzione elettrificata.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "gen-freeform-training",
    missionNumber: "02",
    missionTitle: "Freeform Training (Simulazione Yacht)",
    gameSubtitle: "Prologo ICA Facility (1999)",
    operationCodename: "OP-INDUCTION-01 // Test di Valutazione Marina",
    icaClassification: "ICA TRAINING // CLASSIFIED EVALUATION",
    handler: "Diana Burnwood (Supervisore Reclute)",
    threatAssessment: "ALTO",
    primaryLocation: "Struttura Sotterranea ICA (Replica Yacht di Sydney)",
    targetsSummary: ["Kalvin Ritter ('Il Passero')"],
    briefingTranscript: "Benvenuto all'ICA Facility, 47. Questa ricostruzione in scala 1:1 riproduce il ponte dello yacht dove nel 1979 il ladro d'arte Kalvin Ritter incontrò un agente del KGB. Il tuo test consiste nell'infiltrarti al party a bordo, eliminare Ritter senza allertare i suoi mercenari e lasciare la simulazione senza lasciare tracce.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Incidente con Scialuppa)",
        badge: "ICA GOLD STANDARD // SUIT ONLY",
        description: "Sfrutta l'armeria di bordo o la meccanica della scialuppa di salvataggio per simulare un incidente perfetto.",
        recommendedSuit: "Abito da Addestramento Tattico ICA",
        loadout: [
          {
            id: "gen-02-ballers",
            name: "ICA19 Silverballer Silenziata da Addestramento",
            category: "firearm",
            categoryLabel: "Pistola Furtiva",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Arma standard dell'ICA a munizionamento subsonico.",
            tacticalTip: "Elimina le telecamere o recidi il cavo della scialuppa a distanza."
          },
          {
            id: "gen-02-wire",
            name: "Corda di Pianoforte ICA",
            category: "melee",
            categoryLabel: "Garrota",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Cavo metallico per eliminazioni silenziose nell'ufficio privato di Ritter.",
            tacticalTip: "Attendi che Ritter resti solo nell'ufficio del ponte superiore dopo l'incontro col KGB."
          },
          {
            id: "gen-02-coin",
            name: "Monete da Diversivo ICA (x3)",
            category: "tool",
            categoryLabel: "Diversivo Acustico",
            concealment: "Non Rilevabile",
            lethality: "Supporto / Infiltrazione",
            description: "Monete bilanciate per attirare le guardie fuori posizione.",
            tacticalTip: "Lanciala vicino alla scaletta della stiva per sottrarre la divisa da meccanico dello yacht."
          }
        ]
      },
      {
        id: "tactical_infiltrator",
        title: "Camaleonte (Infiltrazione Meccanico / Terry Norfolk)",
        badge: "OPPORTUNITY // VELENO & INCIDENTE",
        description: "Assumi il ruolo di Terry Norfolk o di un meccanico di bordo per accedere indisturbato al ponte privato.",
        recommendedSuit: "Divisa Meccanico dello Yacht / Abito Terry Norfolk",
        loadout: [
          {
            id: "gen-02-ratpoison",
            name: "Veleno Emetico per Roditori",
            category: "tool",
            categoryLabel: "Tossina Emetica",
            concealment: "Occultabile",
            lethality: "Non Letale",
            description: "Reperibile nella dispensa del ponte inferiore.",
            tacticalTip: "Avvelena il drink di Norfolk o di Ritter per isolarli nei bagni dello yacht."
          },
          {
            id: "gen-02-crowbar",
            name: "Piede di Porco Meccanico",
            category: "melee",
            categoryLabel: "Strumento Sabotaggio",
            concealment: "Visibile",
            lethality: "Non Letale",
            description: "Utensile pesante recuperato in sala macchine.",
            tacticalTip: "Manometti il verricello della scialuppa quando Ritter si affaccia sul ponte superiore."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-gen-02-1",
        targetOrTask: "Elimina Kalvin Ritter ('Il Passero')",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Ponte Superiore - Ufficio Privato dello Yacht",
        recommendedMethod: "Caduta della scialuppa di salvataggio o strangolamento dopo l'incontro con il KGB",
        intelNotes: "Ritter è costantemente affiancato da una guardia personale sul ponte."
      },
      {
        id: "obj-gen-02-2",
        targetOrTask: "Raggiungi la Passerella d'Uscita della Simulazione",
        type: "extraction",
        typeLabel: "Esfiltrazione",
        priority: "CRITICA",
        location: "Molo di Imbarco Simulato",
        recommendedMethod: "Uscita a piedi senza allarmi attivi",
        intelNotes: "Erich Soders osserva ogni tuo movimento dalla cabina di controllo."
      }
    ],
    silentAssassinRules: [
      "Elimina esclusivamente Kalvin Ritter",
      "Nessun corpo trovato dai membri dell'equipaggio o ospiti",
      "Non farti mai sorprendere in zone riservate"
    ],
    extractionPoints: [
      {
        id: "ext-gen-02-dock",
        name: "Passerella Principale del Molo ICA",
        description: "Punto di uscita a sud dello yacht simulato.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "gen-final-test",
    missionNumber: "03",
    missionTitle: "The Final Test (Base Militare Sovietica)",
    gameSubtitle: "Prologo ICA Facility (1999)",
    operationCodename: "OP-INDUCTION-02 // Esame Finale ICA",
    icaClassification: "ICA FINAL CLEARANCE // ERICH SODERS REVIEW",
    handler: "Diana Burnwood",
    threatAssessment: "CRITICO",
    primaryLocation: "Struttura ICA (Replica Base Aerea Cubana 1979)",
    targetsSummary: ["Jasper Knight"],
    briefingTranscript: "47, questo è l'esame finale che determinerà il tuo ingresso ufficiale nell'ICA. Erich Soders ritiene che tu sia un'incognita pericolosa e ha alzato al massimo il livello di sorveglianza della simulazione. Il bersaglio è Jasper Knight, maestro di scacchi e traditore rifugiato in una base sovietica presidiata da KGB e soldati cubani. Colpiscilo al cuore dell'hangar e sparisci.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Seggiolino Eiettabile)",
        badge: "CLASSIC ACCIDENT // MASTER EXAM",
        description: "Sabota il seggiolino eiettabile del caccia MiG nell'hangar e convinci Knight a salire a bordo per il test di sicurezza.",
        recommendedSuit: "Abito da Addestramento ICA / Divisa Meccanico Aereo",
        loadout: [
          {
            id: "gen-03-wrench",
            name: "Chiave Inglese Aeronautica",
            category: "tool",
            categoryLabel: "Sabotaggio Meccanico",
            concealment: "Occultabile",
            lethality: "Non Letale",
            description: "Strumento di manutenzione prelevato dai banchi dell'hangar.",
            tacticalTip: "Manometti i bulloni di sicurezza del sedile eiettabile del jet sovietico."
          },
          {
            id: "gen-03-lockpick",
            name: "Grimaldello ICA",
            category: "tool",
            categoryLabel: "Scasso",
            concealment: "Non Rilevabile",
            lethality: "Supporto / Infiltrazione",
            description: "Permette accesso silenzioso all'ufficio del colonnello del KGB.",
            tacticalTip: "Entra dalla porta sul retro dell'hangar evitando il checkpoint principale."
          },
          {
            id: "gen-03-poison",
            name: "Fiala di Veleno Letale",
            category: "tool",
            categoryLabel: "Tossina",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Alternativa letale da versare nella vodka durante la partita a scacchi di Knight.",
            tacticalTip: "Batti Knight a scacchi spostando la regina per costringerlo a bere."
          }
        ]
      },
      {
        id: "tactical_infiltrator",
        title: "Infiltrato KGB (Ufficiale Sovietico)",
        badge: "VIP ACCESS // PIANO SUPERIORE",
        description: "Sostituisciti all'ufficiale del KGB per accedere liberamente al laboratorio radio e alle stanze private di Knight.",
        recommendedSuit: "Uniforme Ufficiale del KGB",
        loadout: [
          {
            id: "gen-03-silverballer",
            name: "ICA19 Silverballer Silenziata",
            category: "firearm",
            categoryLabel: "Pistola Furtiva",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Arma compatta d'ordinanza per colpi precisi.",
            tacticalTip: "Abbatti le luci della sala proiezione per isolare Knight durante il briefing militare."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-gen-03-1",
        targetOrTask: "Elimina Jasper Knight",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Hangar Principale / Ufficio Ufficiale Piano 2",
        recommendedMethod: "Sabotaggio seggiolino eiettabile del MiG o vodka avvelenata dopo scacco matto",
        intelNotes: "Knight non lascia mai la base senza l'autorizzazione della scorta KGB."
      },
      {
        id: "obj-gen-03-2",
        targetOrTask: "Supera il Test ed Esci dalla Struttura ICA",
        type: "extraction",
        typeLabel: "Esfiltrazione",
        priority: "CRITICA",
        location: "Cancello Esterno dell'Hangar",
        recommendedMethod: "Uscita rapida al completamento del contratto",
        intelNotes: "Diana approverà il tuo fascicolo operativo ufficiale al termine della prova."
      }
    ],
    silentAssassinRules: [
      "Nessun soldato o ufficiale ucciso oltre a Jasper Knight",
      "Nessuna rilevazione nei varchi dell'hangar",
      "Eliminazione pulita catalogata come incidente aereo o arresto cardiaco"
    ],
    extractionPoints: [
      {
        id: "ext-gen-03-exit",
        name: "Uscita Perimetrale Sud",
        description: "Porta blindata dell'impianto di simulazione ICA.",
        riskLevel: "Basso"
      }
    ]
  }
];

export const CODENAME47_MISSIONS: MissionBriefingData[] = [
  {
    missionId: "c47-kowloon-triads",
    missionNumber: "01",
    missionTitle: "Kowloon Triads in Gang War",
    gameSubtitle: "Hitman: Codename 47",
    operationCodename: "OP-HK-01 // Scintilla nella Guerra tra Triadi",
    icaClassification: "ICA CONTRACT // HONG KONG CELL",
    handler: "Diana Burnwood",
    threatAssessment: "ALTO",
    primaryLocation: "Kowloon, Hong Kong (Parco Wan Chai)",
    targetsSummary: ["Negoziatore Red Dragon"],
    briefingTranscript: "Benvenuto sul campo, 47. Il tuo primo contratto reale per l'ICA si svolge a Kowloon. Il nostro cliente vuole scatenare una guerra aperta tra le triadi Red Dragon e Blue Lotus. Elimina il negoziatore della triade Red Dragon durante l'incontro nel parco cittadino e non lasciare che altri civili vengano colpiti.",
    approaches: [
      {
        id: "precision_sniper",
        title: "Precision Sniper (Tiro dall'Ascensore)",
        badge: "CANONICA // ZERO CONTATTO",
        description: "Raggiungi il tetto dell'edificio di fronte al parco con il fucile smontato nella valigetta e colpisci il bersaglio da 180 metri.",
        recommendedSuit: "Abito Classico ICA con Cravatta Rossa",
        loadout: [
          {
            id: "c47-m1-r93",
            name: "Blaser R93 Sniper in Valigetta",
            category: "firearm",
            categoryLabel: "Fucile di Precisione",
            concealment: "Occultabile",
            silenced: false,
            lethality: "Letale",
            description: "Fucile smontabile trasportabile nell'ascensore fino al tetto opposto al padiglione.",
            tacticalTip: "Assemblalo sul tetto prima che l'auto del negoziatore Blue Lotus arrivi al parco."
          },
          {
            id: "c47-m1-compass",
            name: "Mappa Tattica di Kowloon e Binocolo",
            category: "tool",
            categoryLabel: "Ricognizione",
            concealment: "Occultabile",
            lethality: "Supporto / Infiltrazione",
            description: "Consente di individuare il negoziatore vestito di rosso al centro del padiglione.",
            tacticalTip: "Dopo il colpo, smonta il fucile e scendi subito verso la metropolitana."
          }
        ]
      },
      {
        id: "silent_assassin",
        title: "Silent Assassin (Avvicinamento Urbano)",
        badge: "STEALTH // PISTOLA SILENZIATA",
        description: "Infiltrati nei giardini del parco, neutralizza il negoziatore con arma silenziata e dileguati tra i vicoli.",
        recommendedSuit: "Abito Classico ICA",
        loadout: [
          {
            id: "c47-m1-beretta",
            name: "Beretta 92FS Silenziata",
            category: "firearm",
            categoryLabel: "Pistola Silenziata",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Ideale per un colpo rapido e silenzioso alle spalle del gazebo.",
            tacticalTip: "Evita di sparare al negoziatore Blue Lotus: l'eliminazione sbagliata annulla il contratto."
          },
          {
            id: "c47-m1-wire",
            name: "Fiber Wire ICA",
            category: "melee",
            categoryLabel: "Garrota",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Strumento di strangolamento silenzioso.",
            tacticalTip: "Attacca solo quando le guardie della triade guardano verso la strada principale."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-c47-01-1",
        targetOrTask: "Elimina il Negoziatore della Triade Red Dragon",
        type: "elimination",
        typeLabel: "Eliminazione Selettiva",
        priority: "CRITICA",
        location: "Padiglione Centrale - Parco di Kowloon",
        recommendedMethod: "Colpo di fucile di precisione dal tetto dell'edificio a nord",
        intelNotes: "Non colpire l'emissario del Blue Lotus: deve sopravvivere per attribuire l'agguato ai rivali."
      },
      {
        id: "obj-c47-01-2",
        targetOrTask: "Raggiungi la Stazione di Esfiltrazione",
        type: "extraction",
        typeLabel: "Esfiltrazione",
        priority: "CRITICA",
        location: "Uscita Vicolo Est",
        recommendedMethod: "Ritirata immediata senza entrare in conflitto con le scorte armate",
        intelNotes: "La polizia locale interverrà entro 60 secondi dal primo colpo udito."
      }
    ],
    silentAssassinRules: [
      "Nessun membro della Triade Blue Lotus ferito o ucciso",
      "Zero civili coinvolti nello scontro",
      "Esfiltrazione completata prima della chiusura stradale"
    ],
    extractionPoints: [
      {
        id: "ext-c47-01-car",
        name: "Strada Laterale dell'Edificio Ascensore",
        description: "Punto di uscita sicuro a nord del parco.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "c47-wang-fou",
    missionNumber: "02",
    missionTitle: "Ambush at the Wang Fou Restaurant",
    gameSubtitle: "Hitman: Codename 47",
    operationCodename: "OP-HK-02 // Imboscata al Wang Fou",
    icaClassification: "ICA CONTRACT // HONG KONG CELL",
    handler: "Diana Burnwood",
    threatAssessment: "ALTO",
    primaryLocation: "Distretto Ristorazione Wang Fou, Hong Kong",
    targetsSummary: ["Emissario Blue Lotus", "Autista Limousine"],
    briefingTranscript: "La tensione tra le triadi è esplosa, 47. L'emissario del Blue Lotus si reca al ristorante Wang Fou scortato da una limousine blindata per chiedere spiegazioni a Lee Hong. Dobbiamo eliminare l'emissario e tutte le sue guardie del corpo, facendo ricadere la colpa sul Red Dragon.",
    approaches: [
      {
        id: "tactical_infiltrator",
        title: "Sabotaggio Esplosivo (Autobomba sulla Limousine)",
        badge: "CLEAN WIPE // ZERO SCONTRI",
        description: "Neutralizza l'autista nel vicolo durante la sosta fisiologica, piazza la bomba radiocomandata nella limousine e falla brillare all'arrivo del convoglio.",
        recommendedSuit: "Abito Classico / Uniforme Autista Blue Lotus",
        loadout: [
          {
            id: "c47-m2-bomb",
            name: "Carica Esplosiva Radiocomandata + Telecomando",
            category: "tool",
            categoryLabel: "Esplosivo C4",
            concealment: "Occultabile",
            lethality: "Letale",
            description: "Ordigno ad alto potenziale fornito dall'armeria ICA.",
            tacticalTip: "Piazzala sulla limousine mentre indossi i panni dell'autista Blue Lotus e detonala quando tutti i bersagli sono a bordo."
          },
          {
            id: "c47-m2-silenced",
            name: "Beretta 92FS Silenziata",
            category: "firearm",
            categoryLabel: "Pistola Furtiva",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Elimina silenziosamente l'autista isolato nel vicolo laterale.",
            tacticalTip: "Nascondi il corpo dell'autista nel tombino fognario per evitare che le pattuglie lo trovino."
          }
        ]
      },
      {
        id: "silent_assassin",
        title: "Infiltrato Silenzioso (Ristorante Wang Fou)",
        badge: "STEALTH // GARROTA & VELENO",
        description: "Raggiungi la sala privata del secondo piano prima del summit ed elimina i bersagli uno a uno.",
        recommendedSuit: "Uniforme Cameriere Wang Fou",
        loadout: [
          {
            id: "c47-m2-wire",
            name: "Corda di Pianoforte ICA",
            category: "melee",
            categoryLabel: "Garrota",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Strumento di strangolamento silenzioso.",
            tacticalTip: "Sfrutta la cucina per salire senza allertare i buttafuori all'ingresso."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-c47-02-1",
        targetOrTask: "Elimina l'Emissario del Blue Lotus e Tutte le Guardie di Scorta",
        type: "elimination",
        typeLabel: "Eliminazione Convoglio",
        priority: "CRITICA",
        location: "Ingresso e Limousine - Ristorante Wang Fou",
        recommendedMethod: "Autobomba radiocomandata piazzata nella limousine durante il carico",
        intelNotes: "L'autista si allontana verso il vicolo a est ogni 90 secondi: è il momento ideale per il travestimento."
      },
      {
        id: "obj-c47-02-2",
        targetOrTask: "Esfiltra dall'Area del Ristorante",
        type: "extraction",
        typeLabel: "Esfiltrazione",
        priority: "CRITICA",
        location: "Vicolo Sud del Quartiere",
        recommendedMethod: "Ritirata prima dell'arrivo delle pattuglie di polizia",
        intelNotes: "Non abbandonare il telecomando a vista dei civili."
      }
    ],
    silentAssassinRules: [
      "Nessun civile o cameriere del ristorante coinvolto",
      "Occultamento immediato del corpo dell'autista nel tombino",
      "Detonazione eseguita solo con il convoglio isolato dai passanti"
    ],
    extractionPoints: [
      {
        id: "ext-c47-02-alley",
        name: "Vicolo d'Uscita Sud-Ovest",
        description: "Accesso rapido alla rete stradale principale.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "c47-cheung-chau",
    missionNumber: "03",
    missionTitle: "The Massacre at Cheung Chau Fish Restaurant",
    gameSubtitle: "Hitman: Codename 47",
    operationCodename: "OP-HK-03 // Doppio Gioco al Cheung Chau",
    icaClassification: "ICA CONTRACT // HONG KONG CELL",
    handler: "Diana Burnwood",
    threatAssessment: "CRITICO",
    primaryLocation: "Cheung Chau Fish Restaurant, Hong Kong",
    targetsSummary: ["Emissario Red Dragon", "Capo della Polizia di Hong Kong"],
    briefingTranscript: "Lee Hong cerca di ricomporre la frattura tramite un incontro segreto mediato dal Capo della Polizia corrotto di Hong Kong. Devi assassinare l'emissario del Red Dragon prima che arrivi al ristorante, assumere la sua identità con l'amuleto del Drago e giustiziare il Capo della Polizia al tavolo, lasciando l'amuleto sul posto.",
    approaches: [
      {
        id: "tactical_infiltrator",
        title: "Impersonazione Totale (Protocollo Amuleto)",
        badge: "ICA SPEC // MASTER DISGUISE",
        description: "Intercetta l'emissario Red Dragon nel vicolo, sottrai abiti e amuleto, poi entra al ristorante per giustiziare il Capo della Polizia.",
        recommendedSuit: "Abito Emissario Red Dragon",
        loadout: [
          {
            id: "c47-m3-wire",
            name: "Corda di Pianoforte ICA",
            category: "melee",
            categoryLabel: "Garrota",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Perfetta per neutralizzare l'emissario nel vicolo dietro il ristorante senza spari.",
            tacticalTip: "L'emissario si ferma sempre a fumare vicino alle scale posteriori prima di entrare."
          },
          {
            id: "c47-m3-beretta",
            name: "Beretta 92FS Silenziata",
            category: "firearm",
            categoryLabel: "Pistola Furtiva",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Arma compatta occultabile durante la perquisizione al ristorante.",
            tacticalTip: "Lasciala nel bagno del ristorante prima della perquisizione o entra dal retro dopo aver preso l'amuleto."
          }
        ]
      },
      {
        id: "silent_assassin",
        title: "Silent Assassin (Veleno & Amuleto)",
        badge: "NO GUNSHOTS // CLEAN KILL",
        description: "Usa il passaggio di servizio e i servizi igienici del ristorante per colpire senza mai far scattare la guardia armata.",
        recommendedSuit: "Abito Emissario Red Dragon",
        loadout: [
          {
            id: "c47-m3-amulet",
            name: "Amuleto del Drago Rosso (Recupero sul Campo)",
            category: "pickup",
            categoryLabel: "Prova Falsificata",
            concealment: "Occultabile",
            lethality: "Supporto / Infiltrazione",
            description: "Pendente identificativo della triade Red Dragon.",
            tacticalTip: "Deponilo sul tavolo del Capo della Polizia dopo la sua eliminazione per incolpare ufficialmente la triade."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-c47-03-1",
        targetOrTask: "Elimina l'Emissario Red Dragon e Occulta il Corpo",
        type: "elimination",
        typeLabel: "Eliminazione & Furto Identità",
        priority: "CRITICA",
        location: "Vicoli Esterni al Ristorante",
        recommendedMethod: "Strangolamento alle spalle e occultamento immediato nel tombino",
        intelNotes: "Senza il suo abito e l'amuleto, il barista non ti consentirà l'ingresso alla sala privata."
      },
      {
        id: "obj-c47-03-2",
        targetOrTask: "Elimina il Capo della Polizia e Lascia l'Amuleto sul Tavolo",
        type: "elimination",
        typeLabel: "Eliminazione & Depistaggio",
        priority: "CRITICA",
        location: "Sala VIP Ristorante Cheung Chau",
        recommendedMethod: "Colpo silenziato in bagno o al tavolo prima che arrivino le guardie del Blue Lotus",
        intelNotes: "Ricorda assolutamente di posare l'amuleto al ristorante prima di esfiltrare."
      }
    ],
    silentAssassinRules: [
      "Il corpo dell'emissario deve essere gettato nel tombino prima che il negoziatore Blue Lotus arrivi",
      "L'amuleto del Red Dragon deve restare sul tavolo della sala VIP",
      "Zero vittime tra il personale del ristorante"
    ],
    extractionPoints: [
      {
        id: "ext-c47-03-pier",
        name: "Molo Sul Retro del Cheung Chau",
        description: "Uscita rapida lungo il canale di Kowloon.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "c47-lee-hong",
    missionNumber: "04",
    missionTitle: "The Lee Hong Assassination",
    gameSubtitle: "Hitman: Codename 47",
    operationCodename: "OP-HK-04 // Decapitazione del Drago Rosso",
    icaClassification: "ICA HIGH PRIORITY // FIRST FATHER CONTRACT",
    handler: "Diana Burnwood",
    threatAssessment: "MASSIMO",
    primaryLocation: "Fortezza Wang Fou & Ristorante Galleggiante di Lee Hong, Hong Kong",
    targetsSummary: ["Lee Hong", "Tzun (Guardia del Corpo)", "Statuetta di Giada"],
    briefingTranscript: "È il momento della verità, 47. Lee Hong si è asserragliato nel suo complesso fortificato insieme alla sua guardia del corpo Tzun. Oltre a eliminare Lee Hong, il cliente esige il recupero della preziosa Statuetta di Giada custodita in una delle quattro casseforti blindate della fortezza. Nei sotterranei è tenuto prigioniero un agente CIA che potrebbe conoscere l'esatta posizione della cassaforte.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Zuppa Avvelenata & Salvataggio CIA)",
        badge: "MASTER STRATEGY // ZERO ALLARMI",
        description: "Libera l'agente Carlton Smith per avere il codice cassaforte, usa la tenuta da cameriere e avvelena la zuppa per neutralizzare Tzun e aprire la strada a Lee Hong.",
        recommendedSuit: "Divisa Cameriere Ristorante / Abito Guardaspalle",
        loadout: [
          {
            id: "c47-m4-poison",
            name: "Fiala di Veleno Letale (Cianuro)",
            category: "tool",
            categoryLabel: "Tossina",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Versata nella zuppa d'uccello servita da Lei Ling in cucina.",
            tacticalTip: "Tzun assaggia sempre il piatto prima di Lee Hong: morirà sul colpo lasciando il boss senza scudo."
          },
          {
            id: "c47-m4-silverballer",
            name: "Silverballer Silenziata (.45 ACP)",
            category: "firearm",
            categoryLabel: "Pistola Furtiva",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Precisione letale per eliminare Lee Hong una volta isolato nel ristorante.",
            tacticalTip: "Occhio alle guardie con Uzi nei corridoi della villa."
          },
          {
            id: "c47-m4-wire",
            name: "Fiber Wire ICA",
            category: "melee",
            categoryLabel: "Garrota",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Silenziosa e rapida per eliminare le guardie delle segrete.",
            tacticalTip: "Sfruttala sui carcerieri prima di liberare Carlton Smith."
          }
        ]
      },
      {
        id: "tactical_infiltrator",
        title: "Infiltrato VIP (Fuga di Lei Ling)",
        badge: "OPPORTUNITY // CODICE CASSAFORTE",
        description: "Aiuta Lei Ling a fuggire dal bordello della fortezza in cambio della combinazione della cassaforte di Lee Hong.",
        recommendedSuit: "Uniforme Guardia Red Dragon",
        loadout: [
          {
            id: "c47-m4-uzi",
            name: "Mini-Uzi Silenziata",
            category: "firearm",
            categoryLabel: "Arma Compatta",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Alta cadenza di fuoco se lo scontro con la scorta di Lee Hong diventa inevitabile.",
            tacticalTip: "Tienila pronta nell'ascensore privato verso l'attico del boss."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-c47-04-1",
        targetOrTask: "Libera l'Agente CIA Carlton Smith nei Sotterranei",
        type: "safeguard",
        typeLabel: "Intelligence & Salvataggio",
        priority: "SECONDARIA",
        location: "Prigioni Ipogee della Villa",
        recommendedMethod: "Eliminazione silenziosa del torturatore ed estrazione della combinazione",
        intelNotes: "Smith rivela quale delle 4 casseforti ospita la Statuetta di Giada."
      },
      {
        id: "obj-c47-04-2",
        targetOrTask: "Recupera la Statuetta di Giada dalla Cassaforte",
        type: "intel",
        typeLabel: "Recupero Asset",
        priority: "PRIMARIA",
        location: "Appartamenti Privati di Lee Hong",
        recommendedMethod: "Sblocca la cassaforte indicata con la combinazione fornita",
        intelNotes: "Senza la statuetta non è possibile completare la consegna al molo."
      },
      {
        id: "obj-c47-04-3",
        targetOrTask: "Elimina Tzun e Lee Hong (Primo dei Cinque Padri)",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Ristorante Privato & Quartier Generale",
        recommendedMethod: "Zuppa avvelenata per Tzun + eliminazione silenziosa di Lee Hong in fuga",
        intelNotes: "Lee Hong impugna una potente spada cerimoniale se affrontato corpo a corpo."
      }
    ],
    silentAssassinRules: [
      "Salva Lei Ling o Carlton Smith senza allertare il complesso superiore",
      "Nessun civile del bordello o del ristorante ferito",
      "Esfiltrazione con la Statuetta di Giada in possesso"
    ],
    extractionPoints: [
      {
        id: "ext-c47-04-boat",
        name: "Motoscafo Privato sul Canale Posteriore",
        description: "Ormeggiato dietro le cucine del ristorante Wang Fou.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "c47-uwa-jungle",
    missionNumber: "05",
    missionTitle: "Find the U'wa Tribe & The Jungle God",
    gameSubtitle: "Hitman: Codename 47",
    operationCodename: "OP-COL-01 // Ricognizione Amazzonica",
    icaClassification: "ICA RECON // COLOMBIA JUNGLE",
    handler: "Diana Burnwood",
    threatAssessment: "ALTO",
    primaryLocation: "Bacino Amazzonico, Colombia",
    targetsSummary: ["Pattuglie Cartello Ochoa", "Idolo Sacro U'wa"],
    briefingTranscript: "47, la tua prossima destinazione è la giungla colombiana, regno del signore della droga Pablo Belisario Ochoa. La sua base è protetta da campi minati e fitte ronde militari. Prima di colpire Ochoa, conquista la fiducia della tribù indigena U'wa recuperando il loro idolo sacro dall'aereo precipitato e liberando il fratello del capo tribù.",
    approaches: [
      {
        id: "tactical_infiltrator",
        title: "Esploratore Furtivo (Alleanza U'wa)",
        badge: "RECON // PATHFINDER",
        description: "Evita le mine antiuomo nella giungla, elimina silenziosamente i sicari intorno al relitto e restituisci l'idolo d'oro allo sciamano.",
        recommendedSuit: "Tenuta Militare Mimetica da Giungla",
        loadout: [
          {
            id: "c47-m5-knife",
            name: "Coltello da Combattimento da Giungla",
            category: "melee",
            categoryLabel: "Lama Silenziosa",
            concealment: "Occultabile",
            lethality: "Letale",
            description: "Arma da taglio silenziosa per eliminare i soldati del cartello a guardia del relitto aereo.",
            tacticalTip: "Avvicinati accovacciato nella vegetazione fitta per non attirare il fuoco delle pattuglie."
          },
          {
            id: "c47-m5-mp5",
            name: "MP5 Silenziata con Ottica",
            category: "firearm",
            categoryLabel: "Mitraglietta Tattica",
            concealment: "Visibile",
            silenced: true,
            lethality: "Letale",
            description: "Utile per rispondere a imboscate nella giungla o superare l'area del Dio Giaguaro.",
            tacticalTip: "Sfrutta la modalità colpo singolo per risparmiare munizioni."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-c47-05-1",
        targetOrTask: "Recupera l'Idolo Dorato dall'Aereo Precipitato",
        type: "intel",
        typeLabel: "Recupero Reliquia",
        priority: "CRITICA",
        location: "Zona Schianto Nord",
        recommendedMethod: "Eliminazione silenziosa delle due guardie di scorta e recupero dal relitto",
        intelNotes: "L'area intorno allo schianto è pattugliata da soldati armati di AK-103."
      },
      {
        id: "obj-c47-05-2",
        targetOrTask: "Libera il Fratello del Capo Tribù U'wa e Consegna l'Idolo",
        type: "safeguard",
        typeLabel: "Alleanza Tribale",
        priority: "PRIMARIA",
        location: "Villaggio Indigeno U'wa",
        recommendedMethod: "Scorta il prigioniero al villaggio evitando i ponti presidiati",
        intelNotes: "Lo sciamano ti rivelerà il passaggio segreto attraverso il tempio del giaguaro verso il compound di Ochoa."
      }
    ],
    silentAssassinRules: [
      "Nessun membro della tribù U'wa ferito",
      "Supera il tempio evitando di allertare le pattuglie esterne del cartello",
      "Segui i sentieri segnati per evitare le mine"
    ],
    extractionPoints: [
      {
        id: "ext-c47-05-tunnel",
        name: "Passaggio Segreto delle Caverne verso la Base di Ochoa",
        description: "Tunnel naturale indicato dagli indigeni U'wa.",
        riskLevel: "Medio"
      }
    ]
  },
  {
    missionId: "c47-pablo-ochoa",
    missionNumber: "06",
    missionTitle: "Say Hello to My Little Friend",
    gameSubtitle: "Hitman: Codename 47",
    operationCodename: "OP-COL-02 // Caduta del Cartello Ochoa",
    icaClassification: "ICA HIGH PRIORITY // SECOND FATHER CONTRACT",
    handler: "Diana Burnwood",
    threatAssessment: "MASSIMO",
    primaryLocation: "Fortezza & Laboratorio Cocaina nella Giungla, Colombia",
    targetsSummary: ["Pablo Belisario Ochoa", "Laboratorio di Cocaina"],
    briefingTranscript: "Sei alle porte della fortezza di Pablo Ochoa, il secondo bersaglio chiave. Ochoa dirige un enorme laboratorio di raffinazione immerso nella giungla ed è protetto da centinaia di mercenari pesantemente armati. Devi eliminare Pablo Ochoa, piazzare una carica esplosiva nel laboratorio chimico e fuggire a bordo del suo aereo privato dalla pista d'atterraggio.",
    approaches: [
      {
        id: "precision_sniper",
        title: "Tiratore Scelto dalla Torre di Guardia",
        badge: "LONG RANGE // SAFE ELIMINATION",
        description: "Sfrutta il perimetro boschivo e la torre sud per colpire Ochoa attraverso la finestra del suo ufficio prima che imbracci l'M60.",
        recommendedSuit: "Uniforme Soldato del Cartello",
        loadout: [
          {
            id: "c47-m6-sniper",
            name: "Fucile di Precisione R93 / M60",
            category: "firearm",
            categoryLabel: "Arma ad Alto Calibro",
            concealment: "Visibile",
            lethality: "Letale",
            description: "Ochoa sotto l'effetto di cocaina resiste a diversi proiettili di pistola al torso: è richiesto un calibro pesante o un colpo preciso alla testa.",
            tacticalTip: "Mira sempre alla testa dalla finestra prima che attivi l'allarme del compound."
          },
          {
            id: "c47-m6-bomb",
            name: "Carica C4 a Timer per Laboratorio",
            category: "tool",
            categoryLabel: "Sabotaggio",
            concealment: "Occultabile",
            lethality: "Letale",
            description: "Fornita per demolire l'impianto di raffinazione.",
            tacticalTip: "Piazzala per ultima, poco prima di correre verso l'aereo sulla pista."
          }
        ]
      },
      {
        id: "tactical_infiltrator",
        title: "Infiltrato nel Compound (Travestimento Mercenario)",
        badge: "INFILTRATION // CLOSE QUARTERS",
        description: "Assumi l'uniforme di un mercenario sul perimetro, raggiungi l'ufficio di Ochoa al secondo piano ed eliminalo a bruciapelo.",
        recommendedSuit: "Uniforme Mercenario Cartello",
        loadout: [
          {
            id: "c47-m6-silverballer",
            name: "Silverballer Silenziata (.45 ACP)",
            category: "firearm",
            categoryLabel: "Pistola Tattica",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Efficace nei corridoi interni della villa se mirata al capo.",
            tacticalTip: "Sfrutta l'ingresso posteriore vicino alle cucine."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-c47-06-1",
        targetOrTask: "Elimina Pablo Belisario Ochoa (Secondo dei Cinque Padri)",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Ufficio Privato al Secondo Piano - Fortezza",
        recommendedMethod: "Colpo di precisione dalla torre di guardia o assalto diretto mirato alla testa",
        intelNotes: "Se allertato, Ochoa userà una mitragliatrice pesante M60 urlando frasi deliranti."
      },
      {
        id: "obj-c47-06-2",
        targetOrTask: "Distruggi il Laboratorio di Cocaina con la Bomba",
        type: "sabotage",
        typeLabel: "Demolizione Struttura",
        priority: "CRITICA",
        location: "Capannone Raffinazione Ovest",
        recommendedMethod: "Posiziona l'ordigno al centro delle vasche chimiche e allontanati entro 30 secondi",
        intelNotes: "L'esplosione richiamerà l'intero esercito verso la zona centrale."
      },
      {
        id: "obj-c47-06-3",
        targetOrTask: "Decolla con il Piper Privato dalla Pista di Atterraggio",
        type: "extraction",
        typeLabel: "Esfiltrazione Aerea",
        priority: "CRITICA",
        location: "Pista di Volo Sud",
        recommendedMethod: "Fuga immediata dopo la detonazione del laboratorio",
        intelNotes: "Assicurati di eliminare le due sentinelle all'hangar prima di avviare il motore."
      }
    ],
    silentAssassinRules: [
      "Neutralizza Ochoa prima che scatti la sirena del compound",
      "Detona il laboratorio solo quando il percorso verso la pista è sgombro"
    ],
    extractionPoints: [
      {
        id: "ext-c47-06-plane",
        name: "Aereo Leggero sulla Pista Privata",
        description: "Velivolo di fuga pronto al decollo a sud della fortezza.",
        riskLevel: "Medio"
      }
    ]
  },
  {
    missionId: "c47-traditions-trade",
    missionNumber: "07",
    missionTitle: "Traditions of the Trade",
    gameSubtitle: "Hitman: Codename 47",
    operationCodename: "OP-BUD-01 // Morte alle Terme di Budapest",
    icaClassification: "ICA HIGH PRIORITY // THIRD FATHER CONTRACT",
    handler: "Diana Burnwood",
    threatAssessment: "CRITICO",
    primaryLocation: "Hotel Gallárd (Gellért), Budapest, Ungheria",
    targetsSummary: ["Frantz Fuchs", "Bomba Chimica"],
    briefingTranscript: "Sei a Budapest, 47. Il noto terrorista chimico Frantz Fuchs alloggia all'Hotel Gallárd, sede di una conferenza internazionale di pace. Fuchs ha nascosto una valigetta con una bomba chimica letale nei pressi dell'ala ovest. Entra nell'hotel, neutralizza Frantz Fuchs senza far saltare l'allarme chimico e disinnesca o porta via la bomba.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Docce Termali & Silenziatore)",
        badge: "CLASSIC HITMAN // ZERO TESTIMONI",
        description: "Sottrai il pass delle terme al bagnino, entra nella piscina privata mentre Fuchs si fa la doccia, uccidilo silenziosamente e recupera la chiave della sua suite.",
        recommendedSuit: "Abito Classico / Costume da Bagno o Accappatoio Ospite",
        loadout: [
          {
            id: "c47-m7-beretta",
            name: "Beretta 92FS Silenziata",
            category: "firearm",
            categoryLabel: "Pistola Furtiva",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Occultabile sotto l'abito se eviti i metal detector passando dalle finestre laterali o dai condotti.",
            tacticalTip: "Non attraversare mai i metal detector della hall con armi metalliche addosso."
          },
          {
            id: "c47-m7-wire",
            name: "Corda di Pianoforte ICA",
            category: "melee",
            categoryLabel: "Garrota",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Perfetta per sorprendere Frantz Fuchs nelle docce a vapore dell'ala termale.",
            tacticalTip: "L'ambiente carico di vapore copre completamente ogni movimento."
          },
          {
            id: "c47-m7-bellboy",
            name: "Drop: Chiave Passepartout nella Stanza del Facchino",
            category: "pickup",
            categoryLabel: "Accesso Camere",
            concealment: "Non Rilevabile",
            lethality: "Supporto / Infiltrazione",
            description: "Appesa dietro la reception o nel ripostiglio di servizio al 1° piano.",
            tacticalTip: "Apre tutte le suite ospiti e i balconi comunicanti."
          }
        ]
      },
      {
        id: "tactical_infiltrator",
        title: "Infiltrato d'Hotel (Fioraio / Cameriere)",
        badge: "DISGUISE // VALIGETTA FIORI",
        description: "Sfrutta la cassa di rose presso il fioraio per aggirare i metal detector della hall con il fucile o la pistola nascosta.",
        recommendedSuit: "Divisa Fattorino / Cameriere dell'Hotel Gallárd",
        loadout: [
          {
            id: "c47-m7-flowers",
            name: "Scatola Lunga di Rose Bianche (Occultamento Arma)",
            category: "tool",
            categoryLabel: "Contenitore Occulto",
            concealment: "Occultabile",
            lethality: "Supporto / Infiltrazione",
            description: "Permette di trasportare armi fino alla suite di Fuchs senza destare sospetti.",
            tacticalTip: "Usa il segnale 'Do Not Disturb' o bussa travestito da cameriere."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-c47-07-1",
        targetOrTask: "Elimina Frantz Fuchs (Terzo dei Cinque Padri)",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Terme Sotterranee / Suite 202 dell'Hotel Gallárd",
        recommendedMethod: "Strangolamento alle docce termali mentre la guardia resta fuori",
        intelNotes: "Fuchs porta sempre con sé la chiave della camera dove custodisce la valigetta chimica."
      },
      {
        id: "obj-c47-07-2",
        targetOrTask: "Recupera la Bomba Chimica dall'Ala Ovest / Dentista",
        type: "sabotage",
        typeLabel: "Disinnesco / Recupero",
        priority: "CRITICA",
        location: "Studio Dentistico Chiuso / Suite di Fuchs",
        recommendedMethod: "Usa la chiave di Fuchs per prelevare la valigetta atomica/chimica e portala fuori",
        intelNotes: "Fai attenzione alle guardie armate dello studio dentistico al terzo piano."
      }
    ],
    silentAssassinRules: [
      "Non far scattare i metal detector dell'ingresso principale",
      "Nessun ospite dell'hotel o addetto alle pulizie ucciso",
      "Esfiltrazione dall'ingresso principale con la valigetta della bomba messa in sicurezza"
    ],
    extractionPoints: [
      {
        id: "ext-c47-07-lobby",
        name: "Uscita Principale sulla Piazza di Budapest",
        description: "Porte girevoli principali dell'Hotel Gallárd.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "c47-gunrunners",
    missionNumber: "08",
    missionTitle: "Gunrunner's Paradise",
    gameSubtitle: "Hitman: Codename 47",
    operationCodename: "OP-RTM-01 // Tracciamento al Porto",
    icaClassification: "ICA RECON // ROTTERDAM DOCKS",
    handler: "Diana Burnwood",
    threatAssessment: "ALTO",
    primaryLocation: "Magazzini Portuali di Rotterdam, Paesi Bassi",
    targetsSummary: ["Ivan Zilvanovitch", "Banda di Motociclisti"],
    briefingTranscript: "A Rotterdam operiamo contro Arkadij Jegorov, detto 'Boris', il quarto donatore genetico. Per localizzare la sua nave cargo carica di testate nucleari, infiltrati nel magazzino dei motociclisti locali e piazza un trasmettitore GPS nella valigetta di denaro destinata al trafficante Ivan Zilvanovitch.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Scambio Valigetta GPS)",
        badge: "ZERO SPARI // TRACKING PERFECT",
        description: "Assumi il travestimento di un tecnico del porto, piazza il localizzatore nella valigetta prima della consegna e osserva lo scambio.",
        recommendedSuit: "Tuta Lavoratore Portuale / Giacca Biker",
        loadout: [
          {
            id: "c47-m8-gps",
            name: "Trasmettitore GPS Satellitare ICA",
            category: "tool",
            categoryLabel: "Localizzatore",
            concealment: "Non Rilevabile",
            lethality: "Supporto / Infiltrazione",
            description: "Micro-tracciatore magnetico da nascondere nella valigetta del denaro.",
            tacticalTip: "Piazzalo prima che Ivan entri nel magazzino per la trattativa."
          },
          {
            id: "c47-m8-silenced",
            name: "Beretta 92FS Silenziata",
            category: "firearm",
            categoryLabel: "Pistola Furtiva",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Neutralizza eventuali cani da guardia o sentinelle isolate dietro i container.",
            tacticalTip: "Evita gli scontri aperti con i motociclisti armati di fucili a pompa."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-c47-08-1",
        targetOrTask: "Posiziona il Localizzatore GPS nella Valigetta del Denaro",
        type: "intel",
        typeLabel: "Tracciamento Segreto",
        priority: "CRITICA",
        location: "Magazzino Centrale Banchina",
        recommendedMethod: "Scambio furtivo della valigetta senza uccidere Ivan prima dello scambio",
        intelNotes: "Se Ivan muore prima che l'auto di Boris riparta, perderemo le tracce della nave."
      },
      {
        id: "obj-c47-08-2",
        targetOrTask: "Segui il Segnale ed Esfiltra dal Molo",
        type: "extraction",
        typeLabel: "Esfiltrazione",
        priority: "CRITICA",
        location: "Cancello Est del Porto",
        recommendedMethod: "Ritirata rapida dopo che la berlina di Boris ha lasciato il magazzino",
        intelNotes: "Il trasmettitore condurrà direttamente all'ormeggio del cargo nucleare."
      }
    ],
    silentAssassinRules: [
      "Nessun conflitto a fuoco prolungato con la gang",
      "Il segnale GPS deve restare attivo fino alla partenza di Ivan"
    ],
    extractionPoints: [
      {
        id: "ext-c47-08-gate",
        name: "Uscita Ferroviaria del Porto",
        description: "Sentiero lungo i binari industriali di Rotterdam.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "c47-plutonium",
    missionNumber: "09",
    missionTitle: "Plutonium Runs Loose",
    gameSubtitle: "Hitman: Codename 47",
    operationCodename: "OP-RTM-02 // Il Cargo Nucleare di Boris",
    icaClassification: "ICA CRITICAL // FOURTH FATHER CONTRACT",
    handler: "Diana Burnwood",
    threatAssessment: "MASSIMO",
    primaryLocation: "Molo 14 e Cargo Mercantile di Boris, Rotterdam",
    targetsSummary: ["Arkadij 'Boris' Jegorov", "Testata Nucleare"],
    briefingTranscript: "Il localizzatore ha individuato la nave di Arkadij Jegorov ormeggiata al Molo 14. Boris è estremamente paranoico: se scatterà l'allarme a bordo, fuggirà verso la sala macchine e attiverà la testata atomica. Raggiungi il ponte di comando, elimina Boris sul colpo, disinnesca l'ordigno nucleare e salpa con la nave.",
    approaches: [
      {
        id: "precision_sniper",
        title: "Tiratore Scelto & Sabotaggio Motore",
        badge: "ZERO DETONATION // SNIPER RUN",
        description: "Abbatti le sentinelle dei moli da lontano con il fucile silenziato, poi sali a bordo in divisa da marinaio per sorprendere Boris.",
        recommendedSuit: "Divisa Marinaio Cargo / Tuta Operaio Portuale",
        loadout: [
          {
            id: "c47-m9-sniper",
            name: "Blaser R93 Sniper",
            category: "firearm",
            categoryLabel: "Fucile Precisione",
            concealment: "Visibile",
            lethality: "Letale",
            description: "Ripulisce le torri di guardia e le passerelle lungo la banchina prima dell'arrembaggio.",
            tacticalTip: "Elimina prima i due cecchini sui container sopraelevati."
          },
          {
            id: "c47-m9-silverballer",
            name: "Silverballer Silenziata (.45 ACP)",
            category: "firearm",
            categoryLabel: "Pistola Furtiva",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Indispensabile nei corridoi stretti sottocoperta per fermare Boris prima che raggiunga il detonatore.",
            tacticalTip: "Disattiva l'interruttore della bomba nella stiva prima di affrontare il capitano."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-c47-09-1",
        targetOrTask: "Elimina Arkadij 'Boris' Jegorov (Quarto dei Cinque Padri)",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Ponte di Comando / Sala Macchine Cargo",
        recommendedMethod: "Eliminazione istantanea alla testa sul ponte prima della fuga sottocoperta",
        intelNotes: "Se Boris raggiunge la sala macchine avvierà il timer nucleare da 2 minuti."
      },
      {
        id: "obj-c47-09-2",
        targetOrTask: "Disinnesca la Testata Nucleare e Prendi il Controllo della Nave",
        type: "sabotage",
        typeLabel: "Disinnesco Atomico",
        priority: "CRITICA",
        location: "Stiva Nucleare Livello -2",
        recommendedMethod: "Disattiva il circuito di innesco dal pannello della stiva e avvia i motori",
        intelNotes: "Dopo il disinnesco, la nave diventa il mezzo di esfiltrazione stesso."
      }
    ],
    silentAssassinRules: [
      "Nessun allarme sulla nave prima dell'infiltrazione in stiva",
      "Bomba disinnescata senza attivazione del conto alla rovescia"
    ],
    extractionPoints: [
      {
        id: "ext-c47-09-ship",
        name: "Timone del Cargo Mercantile",
        description: "Salpa dal porto di Rotterdam al termine dell'operazione.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "c47-the-setup",
    missionNumber: "10",
    missionTitle: "The Setup",
    gameSubtitle: "Hitman: Codename 47",
    operationCodename: "OP-RO-01 // Ritorno a Satu Mare",
    icaClassification: "ICA EYES ONLY // TRAP WARNING",
    handler: "Diana Burnwood (Segnale Disturbato)",
    threatAssessment: "CRITICO",
    primaryLocation: "Manicomio di Satu Mare, Romania",
    targetsSummary: ["Dr. Odon Kovacs", "Forze Speciali SWAT Rumene"],
    briefingTranscript: "47, tutti gli indizi dei quattro contratti puntano a un solo nome: il tuo creatore, il dottor Ort-Meyer. L'ultimo incarico ti riporta al manicomio rumeno di Satu Mare dove tutto ebbe inizio. Sospettiamo una trappola mortale: le forze speciali SWAT stanno circondando l'edificio. Elimina il Dr. Odon Kovacs e scopri l'accesso al laboratorio sotterraneo.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Infiltrazione Psichiatrica)",
        badge: "STEALTH // SOTTOMISSIONE KOVACS",
        description: "Usa il travestimento da infermiere o medico per evitare la SWAT all'esterno ed elimina il Dr. Kovacs nel suo studio.",
        recommendedSuit: "Camice Medico / Uniforme Operatore SWAT",
        loadout: [
          {
            id: "c47-m10-syringe",
            name: "Siringa Letale / Antidoto (Recupero Infermeria)",
            category: "tool",
            categoryLabel: "Eliminazione Medica",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Neutralizza Odon Kovacs senza spargimenti di sangue o colpi d'arma da fuoco.",
            tacticalTip: "Kovacs custodisce la chiave dell'ascensore segreto verso il livello sotterraneo."
          },
          {
            id: "c47-m10-wire",
            name: "Fiber Wire ICA",
            category: "melee",
            categoryLabel: "Garrota",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Elimina silenziosamente gli inservienti ostili.",
            tacticalTip: "Salva gli agenti CIA o i degenti pacifici per evitare penalità."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-c47-10-1",
        targetOrTask: "Elimina il Dr. Odon Kovacs e Recupera i Codici Ascensore",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Ala Est - Studio Psichiatrico",
        recommendedMethod: "Eliminazione silenziosa con siringa o corda prima dell'irruzione SWAT",
        intelNotes: "Kovacs è il direttore corrotto che ti somministrava il siero amnesico."
      },
      {
        id: "obj-c47-10-2",
        targetOrTask: "Raggiungi l'Ascensore Segreto verso il Laboratorio",
        type: "extraction",
        typeLabel: "Discesa Sotterranea",
        priority: "CRITICA",
        location: "Blocco Centrale Sotterraneo",
        recommendedMethod: "Infiltrazione con uniforme medica o SWAT attraverso il cortile",
        intelNotes: "L'ascensore si attiva solo tramite il codice prelevato dallo studio di Kovacs."
      }
    ],
    silentAssassinRules: [
      "Nessun paziente psichiatrico innocente ferito",
      "Eludi le squadre SWAT evitando il fuoco incrociato nell'atrio"
    ],
    extractionPoints: [
      {
        id: "ext-c47-10-elev",
        name: "Ascensore Blindato del Laboratorio",
        description: "Conduce direttamente al livello inferiore per lo scontro finale con Ort-Meyer.",
        riskLevel: "Alto"
      }
    ]
  },
  {
    missionId: "c47-meet-brother",
    missionNumber: "11",
    missionTitle: "Meet Your Brother",
    gameSubtitle: "Hitman: Codename 47",
    operationCodename: "OP-RO-02 // Patricidio e Cloni 48",
    icaClassification: "PROTOCOL OMEGA // NO HANDLER",
    handler: "Comunicazione Interrotta (Autonomia Totale 47)",
    threatAssessment: "MASSIMO",
    primaryLocation: "Laboratorio Sotterraneo di Clonazione, Satu Mare",
    targetsSummary: ["Agenti 48 (Serie d'Élite)", "Dr. Otto Wolfgang Ort-Meyer"],
    briefingTranscript: "Nessun supporto esterno, 47. Ort-Meyer ha sigillato i sotterranei e ha sguinzagliato la serie superiore dei cloni: gli Agenti 48, privi di coscienza e programmati per obbedienza assoluta. Stermina i tuoi fratelli difettosi, raggiungi il sancta sanctorum e metti fine alla vita del tuo creatore una volta per tutte.",
    approaches: [
      {
        id: "tactical_infiltrator",
        title: "Sopravvivenza Tattica & Gas Letale",
        badge: "BOSS FIGHT // ROOM CLEAR",
        description: "Sfrutta i condotti laterali, usa un corpo della serie 48 per sbloccare il lettore codice a barre di Ort-Meyer e giustizia lo scienziato.",
        recommendedSuit: "Abito Classico / Uniforme Clone 48",
        loadout: [
          {
            id: "c47-m11-spas12",
            name: "Fucile a Pompa SPAS-12 / MP5 d'Assalto",
            category: "firearm",
            categoryLabel: "Potenza d'Arresto",
            concealment: "Visibile",
            lethality: "Letale",
            description: "Recuperabile nell'armeria del laboratorio sotterraneo.",
            tacticalTip: "Tieni d'occhio i corridoi ad angolo: gli Agenti 48 caricano in gruppo con estrema precisione."
          },
          {
            id: "c47-m11-silverballer",
            name: "Silverballer (.45 ACP)",
            category: "firearm",
            categoryLabel: "Pistola Firma",
            concealment: "Occultabile",
            lethality: "Letale",
            description: "L'arma simbolica per eseguire la condanna finale sul Dr. Ort-Meyer.",
            tacticalTip: "Trascina uno dei cloni 48 sotto lo scanner ottico della porta principale per sbloccare l'accesso al laboratorio finale."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-c47-11-1",
        targetOrTask: "Neutralizza tutti i Cloni della Serie 48",
        type: "elimination",
        typeLabel: "Scontro tra Cloni",
        priority: "CRITICA",
        location: "Corridoi di Clonazione Settore Gamma",
        recommendedMethod: "Copertura dietro i pilastri e utilizzo delle armi pesanti dell'armeria",
        intelNotes: "I cloni 48 non hanno libero arbitrio e sono addestrati all'attacco coordinato."
      },
      {
        id: "obj-c47-11-2",
        targetOrTask: "Elimina il Dr. Otto Wolfgang Ort-Meyer (Quinto Padre)",
        type: "elimination",
        typeLabel: "Patricidio Finale",
        priority: "CRITICA",
        location: "Nucleo Centrale del Laboratorio",
        recommendedMethod: "Sblocca la porta tramite scanner di un clone 48 e giustizia Ort-Meyer (sparo o spezzamento collo)",
        intelNotes: "Questo atto sancisce la nascita del libero arbitrio dell'Agente 47."
      }
    ],
    silentAssassinRules: [
      "Sopravvivi all'ondata dei cloni 48 senza rimanere intrappolato nella camera a gas",
      "Confronta Ort-Meyer entro i tempi dell'allarme di blocco"
    ],
    extractionPoints: [
      {
        id: "ext-c47-11-freedom",
        name: "Uscita dal Manicomio verso la Libertà",
        description: "Fine della programmazione di Ort-Meyer e nascita dell'Agente indipendente.",
        riskLevel: "Basso"
      }
    ]
  }
];
