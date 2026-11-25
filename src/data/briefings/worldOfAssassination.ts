import { MissionBriefingData } from "../briefingTypes";

export const WORLD_OF_ASSASSINATION_MISSIONS: MissionBriefingData[] = [
  // ================= HITMAN (2016) =================
  {
    missionId: "woa-showstopper",
    missionNumber: "01",
    missionTitle: "The Showstopper",
    gameSubtitle: "Hitman (2016)",
    operationCodename: "OP-WOA-01 // Sfilata Sanguine & Asta IAGO",
    icaClassification: "ICA CONTRACT // PARIS, FRANCE",
    handler: "Diana Burnwood",
    threatAssessment: "ALTO",
    primaryLocation: "Palais de Walewska, Parigi, Francia",
    targetsSummary: ["Viktor Novikov", "Dalia Margolis"],
    briefingTranscript: "Benvenuto a Parigi, 47. La sfilata di moda di Sanguine è una copertura per la pericolosa rete di spionaggio IAGO. Viktor Novikov presidia l'evento al piano terra, mentre la ex top model Dalia Margolis presiede l'asta segreta di intelligence al terzo piano. Neutralizza entrambi prima che il dossier sugli agenti sotto copertura dell'MI6 venga venduto.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Fuochi d'Artificio & Bare Knuckle Boxer)",
        badge: "MISSION STORIES // ZERO DETECT",
        description: "Usa il telecomando dei fuochi d'artificio o l'impalcatura luci sopra la passerella per colpire Novikov, e avvelena o spingi Dalia Margolis dal balcone durante l'asta.",
        recommendedSuit: "Smoking da Sera Signature / Travestimento Helmut Kruger",
        loadout: [
          {
            id: "woa-01-silverballer",
            name: "ICA19 Silverballer Silenziata (.45 ACP)",
            category: "firearm",
            categoryLabel: "Pistola Furtiva",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Perfetta per recidere i cavi del traliccio luci dalle passerelle superiori.",
            tacticalTip: "Fai coincidere la caduta delle luci con la presenza di Novikov sulla passerella."
          },
          {
            id: "woa-01-poison",
            name: "Veleno Letale / Cocktail 'Bare Knuckle Boxer'",
            category: "tool",
            categoryLabel: "Tossina",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Recuperabile o portabile da equipaggiamento per avvelenare Novikov al bar.",
            tacticalTip: "Recupera la ricetta segreta del cocktail nei sotterranei delle cucine."
          },
          {
            id: "woa-01-lockpick",
            name: "Grimaldello ICA Mk III",
            category: "tool",
            categoryLabel: "Scasso",
            concealment: "Non Rilevabile",
            lethality: "Supporto / Infiltrazione",
            description: "Sblocca le porte di servizio tra i giardini e l'asta IAGO.",
            tacticalTip: "Evita i controlli di sicurezza al terzo piano salendo dai tubi di scolo esterni."
          }
        ]
      },
      {
        id: "tactical_infiltrator",
        title: "Identità Helmut Kruger (Infiltrazione Privata IAGO)",
        badge: "DISGUISE // PRIVATE MEETING",
        description: "Assumi l'identità del modello somigliante Helmut Kruger nel giardino esterno, partecipa al trucco e ottieni un colloquio a tu per tu con Dalia Margolis.",
        recommendedSuit: "Abito Signature Helmut Kruger",
        loadout: [
          {
            id: "woa-01-wire",
            name: "Corda di Pianoforte ICA",
            category: "melee",
            categoryLabel: "Garrota",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Supera la perquisizione di ingresso all'ufficio privato di Dalia.",
            tacticalTip: "Dalia congederà le guardie per parlare in privato con Kruger."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-woa-01-1",
        targetOrTask: "Elimina Viktor Novikov",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Passerella Sanguine / Bar Piano Terra",
        recommendedMethod: "Caduta dell'impalcatura luci o cocktail avvelenato",
        intelNotes: "Novikov è sempre seguito dalla guardia personale Kurt Donovan."
      },
      {
        id: "obj-woa-01-2",
        targetOrTask: "Elimina Dalia Margolis",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Sala Asta & Bagno Privato Piano 3",
        recommendedMethod: "Incontro privato come Helmut Kruger o spinta dal balcone durante i fuochi d'artificio",
        intelNotes: "I fuochi d'artificio attirano sia Dalia che Viktor sui balconi."
      }
    ],
    silentAssassinRules: [
      "Nessun ospite VIP o modello ferito",
      "Disattiva il registratore DVR nella stanza di sorveglianza sotterranea o nell'ufficio del tecnico",
      "Uscita in elicottero o dal cancello nord-ovest"
    ],
    extractionPoints: [
      {
        id: "ext-woa-01-heli",
        name: "Elicottero sulla Terrazza Giardino",
        description: "Richiede la chiave o il travestimento adatto al prato ovest.",
        riskLevel: "Basso"
      },
      {
        id: "ext-woa-01-boat",
        name: "Motoscafo sulla Senna (Banchina Nord)",
        description: "Via di fuga fluviale discreta sul retro del palazzo.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "woa-world-tomorrow",
    missionNumber: "02",
    missionTitle: "World of Tomorrow",
    gameSubtitle: "Hitman (2016)",
    operationCodename: "OP-WOA-02 // Il Virus DNA di Sapienza",
    icaClassification: "ICA BIO-HAZARD // SAPIENZA, ITALY",
    handler: "Diana Burnwood",
    threatAssessment: "MASSIMO",
    primaryLocation: "Villa Caruso & Borgo Costiero di Sapienza, Italia",
    targetsSummary: ["Silvio Caruso", "Francesca De Santis", "Prototipo Virus DNA"],
    briefingTranscript: "Sotto l'idilliaca cittadina costiera di Sapienza si cela il laboratorio sotterraneo di bioingegneria della Ether Corp. Lo scienziato squilibrato Silvio Caruso e la supervisora Francesca De Santis stanno ultimando un virus letale programmabile su sequenze DNA specifiche. Elimina entrambi e distruggi il prototipo del virus nel laboratorio ipogeo.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Proiettore Nostalgia, Palla Esplosiva & Termodistruzione)",
        badge: "3-OBJECTIVE // LAB STEALTH",
        description: "Inquieta Silvio Caruso con il proiettore cinematografico d'infanzia nell'osservatorio, colpisci De Santis come detective privato o tramite campione DNA e distruggi il virus dal laptop.",
        recommendedSuit: "Abito Estivo Italiano / Camice Bio-Lab",
        loadout: [
          {
            id: "woa-02-keycard",
            name: "Dongle Distruzione Virus & Scrambler Elettronico",
            category: "tool",
            categoryLabel: "Bypass Laboratorio",
            concealment: "Non Rilevabile",
            lethality: "Supporto / Infiltrazione",
            description: "Permette di sabotare la camera di contenimento del virus senza entrare nella zona contaminata.",
            tacticalTip: "Recupera il dongle della scienziata nella chiesa o nel laboratorio, oppure spara alla stalattite sopra il virus!"
          },
          {
            id: "woa-02-sieker",
            name: "Pistola Emetica Sieker 1 / Veleno Cucina",
            category: "tool",
            categoryLabel: "Tossina",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Non Letale",
            description: "Ottima per isolare De Santis o Caruso nei servizi della villa.",
            tacticalTip: "Caruso adora gli spaghetti al ragù di sua madre preparati dallo chef in cucina."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-woa-02-1",
        targetOrTask: "Elimina Silvio Caruso",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Villa Caruso & Osservatorio",
        recommendedMethod: "Soffocamento durante la seduta dallo psicologo o proiettore nell'osservatorio",
        intelNotes: "Se Caruso scopre la fuga del virus tenterà di scappare sull'idrovolante."
      },
      {
        id: "obj-woa-02-2",
        targetOrTask: "Elimina Francesca De Santis",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Mansarda Villa & Molo Roccioso",
        recommendedMethod: "Incontro al molo nei panni di Roberto Vargas o trappola al virus DNA nel suo ufficio",
        intelNotes: "Porta con sé un campione di sicurezza del laboratorio."
      },
      {
        id: "obj-woa-02-3",
        targetOrTask: "Distruggi il Prototipo del Virus a DNA",
        type: "sabotage",
        typeLabel: "Neutralizzazione Bio-Arma",
        priority: "CRITICA",
        location: "Caverna Laboratorio Ipogeo Ether",
        recommendedMethod: "Surriscaldamento tramite dongle sul laptop di controllo o stalattite cadente sopra il contenitore",
        intelNotes: "Puoi anche colpire il contenitore dall'alto con il fucile di precisione silenziato!"
      }
    ],
    silentAssassinRules: [
      "Nessun residente di Sapienza o scienziato ucciso",
      "Distruggi le registrazioni video nella guardiola della chiesa o nel laboratorio sotterraneo"
    ],
    extractionPoints: [
      {
        id: "ext-woa-02-seaplane",
        name: "Idrovolante nella Grotta Sotterranea",
        description: "Richiede la chiave dell'aereo situata nel laboratorio.",
        riskLevel: "Basso"
      },
      {
        id: "ext-woa-02-car",
        name: "Auto Sportiva sulla Piazza di Sapienza",
        description: "Richiede le chiavi dell'auto.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "woa-gilded-cage",
    missionNumber: "03",
    missionTitle: "A Gilded Cage",
    gameSubtitle: "Hitman (2016)",
    operationCodename: "OP-WOA-03 // Colpo di Stato a Marrakesh",
    icaClassification: "ICA CRITICAL // MARRAKESH, MOROCCO",
    handler: "Diana Burnwood",
    threatAssessment: "CRITICO",
    primaryLocation: "Consolato Svedese & Scuola Abbandonata, Marrakesh",
    targetsSummary: ["Claus Hugo Strandberg", "Generale Reza Zaydan"],
    briefingTranscript: "Marrakesh è sull'orlo della guerra civile. Il banchiere disonesto Claus Hugo Strandberg, rifugiato nel Consolato Svedese dopo aver frodato miliardi ai cittadini, complotta con il generale Reza Zaydan (barricato nella vecchia scuola militare) per scatenare un colpo di stato. Elimina entrambi prima che la folla assalti il consolato.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Alce Sospeso & Massaggiatore)",
        badge: "ZERO RIOT // CONSULATE & SCHOOL",
        description: "Fai cadere l'alce dorato su Strandberg nei corridoi del consolato o prendi il posto del massaggiatore personale, poi usa il passaggio sotterraneo per colpire Zaydan nella scuola.",
        recommendedSuit: "Abito Estivo / Travestimento Massaggiatore o Ufficiale Militare",
        loadout: [
          {
            id: "woa-03-poison",
            name: "Veleno Emetico / Letale (Piatto del Prigioniero / Cibo)",
            category: "tool",
            categoryLabel: "Tossina",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Avvelena il piatto consegnato alla scuola o isola Zaydan durante l'interrogatorio.",
            tacticalTip: "Con il codice di evacuazione nell'ufficio di Zaydan, puoi far incontrare i due bersagli nel tunnel sotterraneo!"
          },
          {
            id: "woa-03-lockpick",
            name: "Grimaldello & Scrambler Tessere",
            category: "tool",
            categoryLabel: "Infiltrazione",
            concealment: "Non Rilevabile",
            lethality: "Supporto / Infiltrazione",
            description: "Sblocca il garage sotterraneo e il tunnel segreto che collega la scuola al consolato.",
            tacticalTip: "Il tunnel sotterraneo è la via più sicura per spostarsi tra i due edifici senza attraversare la protesta."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-woa-03-1",
        targetOrTask: "Elimina Claus Hugo Strandberg",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Consolato Svedese",
        recommendedMethod: "Caduta statua dell'alce nell'atrio o spezzamento collo come massaggiatore privato",
        intelNotes: "Strandberg gode di immunità diplomatica finché resta nel consolato."
      },
      {
        id: "obj-woa-03-2",
        targetOrTask: "Elimina il Generale Reza Zaydan",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Scuola Militare Abbandonata",
        recommendedMethod: "Sabotaggio toilet/WC sospeso al piano superiore o attivazione protocollo riunione nel tunnel",
        intelNotes: "Zaydan controlla i soldati che sorvegliano il perimetro del mercato."
      }
    ],
    silentAssassinRules: [
      "Nessun manifestante o impiegato del consolato ferito",
      "Cancella le registrazioni video nel garage del consolato"
    ],
    extractionPoints: [
      {
        id: "ext-woa-03-truck",
        name: "Camion Militare nel Tunnel Sotterraneo",
        description: "Richiede la chiave del camion situata nel parcheggio del consolato.",
        riskLevel: "Basso"
      },
      {
        id: "ext-woa-03-taxi",
        name: "Uscita Bazaar Nord",
        description: "Passaggio pedonale verso i vicoli di Marrakesh.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "woa-club-27",
    missionNumber: "04",
    missionTitle: "Club 27",
    gameSubtitle: "Hitman (2016)",
    operationCodename: "OP-WOA-04 // La Caduta di Jordan Cross",
    icaClassification: "ICA CONTRACT // BANGKOK, THAILAND",
    handler: "Diana Burnwood",
    threatAssessment: "ALTO",
    primaryLocation: "Hotel Himmapan, Bangkok, Thailandia",
    targetsSummary: ["Jordan Cross (Rockstar)", "Ken Morgan (Avvocato)"],
    briefingTranscript: "All'esclusivo Hotel Himmapan di Bangkok, la rockstar ventisettenne Jordan Cross sta registrando il nuovo album dopo essere stato scagionato dall'omicidio della fidanzata grazie al cinico avvocato corporativo Ken Morgan. Elimina entrambi su richiesta della famiglia della vittima, scoprendo intanto i legami di Cross con Providence.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Torta Compleanno & Disinfestazione)",
        badge: "ZERO BULLETS // BIRTHDAY CAKE & GAS",
        description: "Completa la torta di compleanno nelle cucine con il topper '27' per attirare Jordan Cross nella stanza isolata, e avvelena i piatti di Ken Morgan o innesca la disinfestazione nell'atrio.",
        recommendedSuit: "Abito Informale Bangkok / Divisa Tecnico Disinfestazione",
        loadout: [
          {
            id: "woa-04-poison",
            name: "Veleno Letale + Siringa Emetica",
            category: "tool",
            categoryLabel: "Tossina",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Avvelena la torta di Jordan o il buffet degustazione assaggiato da Ken Morgan al ristorante.",
            tacticalTip: "Per ottenere l'audio incriminante contro Jordan Cross, recupera la chiavetta USB nella camera di Dexy Barat o di Cross."
          },
          {
            id: "woa-04-scrambler",
            name: "Hacker Elettronico & Grimaldello",
            category: "tool",
            categoryLabel: "Infiltrazione",
            concealment: "Non Rilevabile",
            lethality: "Supporto / Infiltrazione",
            description: "Apre la suite dell'attico di Jordan Cross al 4° piano senza passare dalla reception.",
            tacticalTip: "Elimina il registratore DVR nella stanza sicurezza al piano interrato."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-woa-04-1",
        targetOrTask: "Elimina Jordan Cross",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Ala Ovest - Studio di Registrazione",
        recommendedMethod: "Confronto nella suite con l'audio di Hannah Highmoore o soffocamento sulla torta di compleanno",
        intelNotes: "Se metti l'audio incriminante sul suo computer, Cross manderà via tutti e potrai confrontarlo faccia a faccia!"
      },
      {
        id: "obj-woa-04-2",
        targetOrTask: "Elimina Ken 'The Brick' Morgan",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Ristorante Piano Terra & Suite Regina",
        recommendedMethod: "Cibo avvelenato al ristorante o caduta cocco/lampadario nell'atrio",
        intelNotes: "Morgan non sale nella sua suite a meno che non gli mostri il biglietto della reception."
      }
    ],
    silentAssassinRules: [
      "Nessun musicista della band o ospite dell'hotel colpito",
      "Disattiva il DVR nella stanza di sorveglianza sotterranea"
    ],
    extractionPoints: [
      {
        id: "ext-woa-04-boat",
        name: "Imbarcazione Privata sul Molo del Fiume",
        description: "Richiede chiave motoscafo o uscita dal molo ovest.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "woa-freedom-fighters",
    missionNumber: "05",
    missionTitle: "Freedom Fighters",
    gameSubtitle: "Hitman (2016)",
    operationCodename: "OP-WOA-05 // Il Covo della Milizia del Cliente Ombra",
    icaClassification: "ICA HOSTILE ZONE // COLORADO, USA",
    handler: "Diana Burnwood",
    threatAssessment: "MASSIMO",
    primaryLocation: "Fattoria Fortificata, Colorado, USA",
    targetsSummary: ["Sean Rose", "Penelope Graves", "Ezra Berg", "Maya Parvati"],
    briefingTranscript: "L'intera fattoria del Colorado è una zona ostile armata: la milizia del misterioso Cliente Ombra si sta preparando qui per un attacco su vasta scala. Devi infiltrarti nell'accampamento, eliminare i quattro comandanti — Sean Rose, Penelope Graves, Ezra Berg e Maya Parvati — e accedere al bunker sotterraneo del Cliente Ombra utilizzando la maschera biometrica di Sean Rose.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (4 Incidenti + Maschera 3D di Rose)",
        badge: "4 TARGETS // ALL HOSTILE ZONE",
        description: "Sabota l'orologio/bomba di Sean Rose al banco esplosivi, spingi Penelope Graves nella fossa dei liquami, fai esplodere l'ariete idraulico su Maya Parvati e sabota la bombola nel capanno di Ezra Berg.",
        recommendedSuit: "Tuta Tattica / Uniforme Hacker o Soldato d'Élite",
        loadout: [
          {
            id: "woa-05-sniper",
            name: "Sieger 300 Ghost (Torre dell'Acqua)",
            category: "firearm",
            categoryLabel: "Fucile Precisione",
            concealment: "Visibile",
            silenced: true,
            lethality: "Letale",
            description: "Dalla cima della torre idrica puoi orchestrare 4 uccisioni per incidente a distanza!",
            tacticalTip: "Colpisci i cavi del carro armato finto per Parvati e il barile di gas/fieno per i bersagli."
          },
          {
            id: "woa-05-scrambler",
            name: "Hacker Elettronico & Grimaldello",
            category: "tool",
            categoryLabel: "Infiltrazione",
            concealment: "Non Rilevabile",
            lethality: "Supporto / Infiltrazione",
            description: "Indispensabile per entrare nella casa principale senza allerta.",
            tacticalTip: "Usa la stampante 3D della casa principale per clonare il volto di Sean Rose ed entrare nel bunker sotterraneo senza trascinare il cadavere!"
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-woa-05-1",
        targetOrTask: "Elimina Sean Rose, Penelope Graves, Ezra Berg e Maya Parvati",
        type: "elimination",
        typeLabel: "Quadrupla Eliminazione",
        priority: "CRITICA",
        location: "Fattoria, Serra, Fienile & Campo Addestramento",
        recommendedMethod: "Sabotaggio esplosivo sul banco, ariete meccanico, cisterna liquami e bombola ossigeno",
        intelNotes: "Ogni angolo della mappa è sorvegliato da miliziani armati."
      },
      {
        id: "obj-woa-05-2",
        targetOrTask: "Accedi al Bunker del Cliente Ombra ed Esamina la Parete degli Indizi",
        type: "intel",
        typeLabel: "Intelligence Critica",
        priority: "CRITICA",
        location: "Cantina Blindata Casa Principale",
        recommendedMethod: "Usa la maschera 3D di Sean Rose sul lettore biometrico della porta del bunker",
        intelNotes: "All'interno scoprirai il collegamento tra Providence, il manicomio e la tua infanzia."
      }
    ],
    silentAssassinRules: [
      "Nessun miliziano o hacker non bersaglio ucciso",
      "Disattiva le telecamere della casa principale prima di scendere nel bunker"
    ],
    extractionPoints: [
      {
        id: "ext-woa-05-tornado",
        name: "Bunker Sotterraneo del Cliente Ombra",
        description: "Uscita canonica dalla botola di emergenza dopo aver ispezionato i file.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "woa-situs-inversus",
    missionNumber: "06",
    missionTitle: "Situs Inversus",
    gameSubtitle: "Hitman (2016)",
    operationCodename: "OP-WOA-06 // La Talpa di Providence ad Hokkaido",
    icaClassification: "APEX PROTOCOL // HOKKAIDO, JAPAN",
    handler: "Diana Burnwood",
    threatAssessment: "MASSIMO",
    primaryLocation: "Struttura Medica GAMA, Monti di Hokkaido, Giappone",
    targetsSummary: ["Erich Soders (Ex Direttore ICA)", "Yuki Yamazaki (Garante Yakuza)"],
    briefingTranscript: "Tradimento ai vertici massimi, 47. Il direttore operativo dell'ICA Erich Soders ha venduto i nostri archivi a Providence in cambio di un trapianto cardiaco illegale presso l'esclusiva clinica GAMA di Hokkaido. La sua intermediaria, l'avvocatessa Yakuza Yuki Yamazaki, è sul posto. Non sono consentite armi al check-in: entra a mani nude e chiudi per sempre l'affare.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Distruzione Cuore & Sauna Surriscaldata)",
        badge: "ZERO LOADOUT // GHOST MASTER",
        description: "Raggiungi i sotterranei dell'obitorio per distruggere il cuore di ricambio destinato a Soders (morte chirurgica senza spari) e intrappola Yuki Yamazaki nella sauna o avvelena il fugu.",
        recommendedSuit: "Veste VIP Paziente GAMA / Camice Chirurgo Capo",
        loadout: [
          {
            id: "woa-06-scrambler",
            name: "Chip RFID Direttore Ospedale / Scrambler (Stanza Drop)",
            category: "tool",
            categoryLabel: "Accesso Porte",
            concealment: "Non Rilevabile",
            lethality: "Supporto / Infiltrazione",
            description: "Nella clinica GAMA tutte le porte sono legate ai chip RFID cuciti nei vestiti.",
            tacticalTip: "Recupera il telecomando RFID universale dell'Agente Smith nella cella frigorifera dell'obitorio!"
          },
          {
            id: "woa-06-fugu",
            name: "Veleno Pesce Palla Fugu & Chiave Sauna",
            category: "tool",
            categoryLabel: "Incidente & Tossina",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Prepara il fugu in cucina o alza la temperatura della sauna bloccando la porta a Yamazaki.",
            tacticalTip: "Rivelarti a Soders con il tuo volto classico ICA nella sala operatoria causerà un infarto fatale immediato!"
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-woa-06-1",
        targetOrTask: "Elimina Erich Soders (La Talpa ICA)",
        type: "elimination",
        typeLabel: "Eliminazione Chirurgica",
        priority: "CRITICA",
        location: "Sala Operatoria & Deposito Organi",
        recommendedMethod: "Distruzione del cuore trapianto nella cella criogenica o sabotaggio robot KAI",
        intelNotes: "Soders è immobile sul tavolo operatorio affetto da situs inversus."
      },
      {
        id: "obj-woa-06-2",
        targetOrTask: "Elimina Yuki Yamazaki",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Spa Termale / Ristorante Sushi",
        recommendedMethod: "Blocco nella sauna surriscaldata o avvelenamento sigarette / fugu",
        intelNotes: "Yamazaki è protetta da due guardie del corpo che la seguono ovunque tranne in sauna."
      }
    ],
    silentAssassinRules: [
      "Nessun paziente o medico GAMA ucciso",
      "Disattiva il server video nella stanza delle guardie superiori"
    ],
    extractionPoints: [
      {
        id: "ext-woa-06-cable",
        name: "Funivia Innevata di Hokkaido",
        description: "Discesa attraverso i monti dopo l'operazione.",
        riskLevel: "Basso"
      },
      {
        id: "ext-woa-06-snow",
        name: "Motoslitta nel Piazzale Posteriore",
        description: "Richiede la chiave della motoslitta.",
        riskLevel: "Basso"
      }
    ]
  },

  // ================= HITMAN 2 (2018) =================
  {
    missionId: "woa-nightcall",
    missionNumber: "07",
    missionTitle: "Nightcall",
    gameSubtitle: "Hitman 2",
    operationCodename: "OP-WOA-07 // Infiltrazione Notturna in Nuova Zelanda",
    icaClassification: "SHADOW CLIENT HUNT // HAWKE'S BAY",
    handler: "Diana Burnwood",
    threatAssessment: "ALTO",
    primaryLocation: "Villa Costiera Isolata, Hawke's Bay, Nuova Zelanda",
    targetsSummary: ["Alma Reynard", "Computer Centrale Cliente Ombra"],
    briefingTranscript: "L'ICA ha tracciato il luogotenente del Cliente Ombra, Alma Reynard, fino a una villa ultramoderna isolata sulla spiaggia neozelandese. Infiltrati nella casa vuota, accedi al computer protetto da password nella panic room e poi prepara l'agguato quando Alma rientra con la sua squadra armata.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Veleno nel Tè o Soffocamento nel Sonno)",
        badge: "NIGHT STALKER // PANIC ROOM",
        description: "Avvelena lo zucchero/tè della cucina o nasconditi nell'armadio della camera padronale per eliminare Alma Reynard silenziosamente nel sonno, poi fuggi verso il gommone nella nebbia.",
        recommendedSuit: "Muta Tattica Notturna (Wetsuit)",
        loadout: [
          {
            id: "woa-07-lockpick",
            name: "Grimaldello ICA & Pillole Letali",
            category: "tool",
            categoryLabel: "Infiltrazione & Veleno",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Consente di aprire le casse dei rifornimenti in garage e avvelenare il tè prima del ritorno di Alma.",
            tacticalTip: "La squadra di Alma pattuglia la spiaggia con i visori notturni al termine della missione: usa l'erba alta per raggiungere il gommone."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-woa-07-1",
        targetOrTask: "Hackera il Terminale nella Panic Room Segreta",
        type: "intel",
        typeLabel: "Estrazione Dati",
        priority: "PRIMARIA",
        location: "Studio Segreto Piano 2",
        recommendedMethod: "Apri il passaggio segreto dietro la parete dello studio e sblocca il PC",
        intelNotes: "I dati rivelano il coinvolgimento della famiglia Knox."
      },
      {
        id: "obj-woa-07-2",
        targetOrTask: "Elimina Alma Reynard",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Camera Padronale / Cucina della Villa",
        recommendedMethod: "Tè avvelenato prima della notte o cuscino/strangolamento nel letto",
        intelNotes: "Alma non si separa quasi mai dal suo compagno Orson Mills."
      }
    ],
    silentAssassinRules: [
      "Nessun mercenario o Orson Mills ucciso",
      "Esfiltrazione sul gommone tra l'erba alta senza allerta"
    ],
    extractionPoints: [
      {
        id: "ext-woa-07-boat",
        name: "Gommone Tattico sulla Spiaggia",
        description: "Punto d'inserimento ed esfiltrazione sulla baia.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "woa-finish-line",
    missionNumber: "08",
    missionTitle: "The Finish Line",
    gameSubtitle: "Hitman 2",
    operationCodename: "OP-WOA-08 // Gran Premio di Miami",
    icaClassification: "PROVIDENCE ASSET // MIAMI, FLORIDA",
    handler: "Diana Burnwood",
    threatAssessment: "CRITICO",
    primaryLocation: "Autodromo & Edificio Kronstadt, Miami, USA",
    targetsSummary: ["Sierra Knox (Pilota)", "Robert Knox (Magnate Bellico)"],
    briefingTranscript: "I dati estratti in Nuova Zelanda ci portano a Miami durante il Global Innovation Race. Robert Knox, fondatore della Kronstadt Industries e traditore di Providence, sta presentando i suoi droni militari mentre sua figlia Sierra corre in pista. Elimina entrambi senza compromettere la gara.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Sabotaggio Box / Flebo & Droid Kill)",
        badge: "DOUBLE ACCIDENT // KRONSTADT",
        description: "Sabota la ruota della monoposto di Sierra ai box (o avvelena la flebo vitaminica nell'infermeria) e programma il droide da combattimento di Robert Knox affinché riconosca il volto stesso del suo creatore.",
        recommendedSuit: "Abito Estivo Florida / Divisa Meccanico Kronstadt",
        loadout: [
          {
            id: "woa-08-wrench",
            name: "Chiave Meccanica & Foto di Robert Knox",
            category: "tool",
            categoryLabel: "Sabotaggio AI",
            concealment: "Non Rilevabile",
            lethality: "Supporto / Infiltrazione",
            description: "Inserisci la foto di Robert Knox nello scanner dell'androide Pallas al piano alto del centro R&D.",
            tacticalTip: "Puoi anche far cadere Robert Knox dall'eliporto direttamente sull'auto da corsa della figlia in transito: doppia eliminazione simultanea!"
          },
          {
            id: "woa-08-silverballer",
            name: "ICA19 Silverballer Silenziata",
            category: "firearm",
            categoryLabel: "Pistola Furtiva",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Letale",
            description: "Spara alle ruote della vettura rosa di Sierra direttamente dal ponte pedonale sopra la pista.",
            tacticalTip: "Colpisci la monoposto rosa proprio prima del rettilineo finale."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-woa-08-1",
        targetOrTask: "Elimina Sierra Knox",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Pista di Corsa / Box Kronstadt / Infermeria",
        recommendedMethod: "Sabotaggio pneumatico ai box, flebo avvelenata o esplosione sul podio della vittoria",
        intelNotes: "Se vince la gara, festeggerà davanti a migliaia di spettatori sul podio."
      },
      {
        id: "obj-woa-08-2",
        targetOrTask: "Elimina Robert Knox",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Centro Ricerche Kronstadt",
        recommendedMethod: "Sostituzione foto nello scanner del droide assassino o spinta dall'eliporto",
        intelNotes: "Robert usa un ascensore privato accessibile con tessera dirigenziale."
      }
    ],
    silentAssassinRules: [
      "Nessun meccanico o spettatore ferito",
      "Cancella le registrazioni DVR nella sala sicurezza sotto la tribuna o al centro Kronstadt"
    ],
    extractionPoints: [
      {
        id: "ext-woa-08-heli",
        name: "Elicottero sul Tetto Kronstadt",
        description: "Richiede la chiave dell'elicottero.",
        riskLevel: "Basso"
      },
      {
        id: "ext-woa-08-gate",
        name: "Ingresso Principale dell'Autodromo",
        description: "Uscita rapida tra gli spettatori.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "woa-three-headed",
    missionNumber: "09",
    missionTitle: "Three-Headed Serpent",
    gameSubtitle: "Hitman 2",
    operationCodename: "OP-WOA-09 // Smantellamento Cartello Delgado",
    icaClassification: "PROVIDENCE ASSET // SANTA FORTUNA, COLOMBIA",
    handler: "Diana Burnwood",
    threatAssessment: "CRITICO",
    primaryLocation: "Villaggio, Giungla & Villa Delgado, Santa Fortuna, Colombia",
    targetsSummary: ["Rico Delgado", "Andrea Martinez", "Jorge Franco"],
    briefingTranscript: "Il potente Cartello Delgado di Santa Fortuna fornisce la rete logistica segreta per i mercenari del Cliente Ombra. Devi recidere tutte e tre le teste del serpente: il capo spietato Rico Delgado nella sua villa, la direttrice PR Andrea Martinez al villaggio e il chimico Jorge Franco nei laboratori della giungla.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Tatuaggio, Betoniere & Macchina Cocaina)",
        badge: "3 HEADS // UNIQUE ACCIDENTS",
        description: "Prendi il posto del tatuatore per uccidere Rico Delgado da solo, sabota la betoniera al cantiere di Andrea Martinez e spingi Jorge Franco nella tritatutto industriale della cocaina.",
        recommendedSuit: "Abito Lino / Travestimento Tatuatore P-Power",
        loadout: [
          {
            id: "woa-09-dart",
            name: "Sieker 1 (Dardi Emetici) + Grimaldello",
            category: "tool",
            categoryLabel: "Infiltrazione",
            concealment: "Occultabile",
            silenced: true,
            lethality: "Non Letale",
            description: "Perfetta per allontanare le guardie di scorta nei vicoli della villa e nei campi di coca.",
            tacticalTip: "Puoi anche far divorare Rico Delgado dal suo ippopotamo da compagnia nel recinto privato!"
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-woa-09-1",
        targetOrTask: "Elimina Rico Delgado",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Villa Delgado",
        recommendedMethod: "Seduta di tatuaggio mortale (P-Power) o caduta nella vasca dell'ippopotamo",
        intelNotes: "La statua d'oro in costruzione nel villaggio nasconde un altro possibile incidente."
      },
      {
        id: "obj-woa-09-2",
        targetOrTask: "Elimina Andrea Martinez e Jorge Franco",
        type: "elimination",
        typeLabel: "Doppia Eliminazione",
        priority: "CRITICA",
        location: "Ufficio Villaggio & Campi Coca nella Giungla",
        recommendedMethod: "Caduta nella betoniera sul cantiere e macchina tritatutto nei campi di coca",
        intelNotes: "Franco ispeziona frequentemente la macchina confezionatrice tra le serre."
      }
    ],
    silentAssassinRules: [
      "Nessun abitante del villaggio o operaio agricolo ucciso",
      "Distruggi il DVR nella villa o nella stazione di guardia"
    ],
    extractionPoints: [
      {
        id: "ext-woa-09-sub",
        name: "Sottomarino Privato nelle Grotte",
        description: "Richiede la chiave del sottomarino custodita da Rico.",
        riskLevel: "Basso"
      },
      {
        id: "ext-woa-09-bus",
        name: "Fermata Autobus del Villaggio",
        description: "Via di uscita terrestre verso la città.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "woa-chasing-ghost",
    missionNumber: "10",
    missionTitle: "Chasing a Ghost",
    gameSubtitle: "Hitman 2",
    operationCodename: "OP-WOA-10 // Caccia al Maelstrom a Mumbai",
    icaClassification: "SHADOW CLIENT NETWORK // MUMBAI, INDIA",
    handler: "Diana Burnwood",
    threatAssessment: "CRITICO",
    primaryLocation: "Bassifondi, Torre Rangan & Cantiere Navale, Mumbai",
    targetsSummary: ["Dawood Rangan", "Vanya Shah", "Wazir Kale ('Il Maelstrom')"],
    briefingTranscript: "A Mumbai si cela una potente triade criminale alleata del Cliente Ombra. Dawood Rangan, eccentrico produttore di Bollywood; Vanya Shah, autoproclamata regina degli slum nel vecchio deposito ferroviario; e l'inafferrabile Wazir Kale, detto 'Il Maelstrom', il cui volto nessuno conosce. Identifica il Maelstrom tra la folla ed elimina tutti e tre.",
    approaches: [
      {
        id: "tactical_infiltrator",
        title: "Il Kashmirian (Doppio Contratto Automatizzato)",
        badge: "MASTER STRATEGY // HIRE A RIVAL",
        description: "Aiuta il sicario rivale 'Il Kashmirian' nella lavanderia allineando i suoi fucili di precisione: eliminerà per te sia Dawood Rangan che Vanya Shah senza sporcarti le mani, poi spingi entrambi i superstiti all'incontro sul molo o uccidi il Maelstrom dal barbiere!",
        recommendedSuit: "Abito Classico / Divisa Barbiere di Mumbai",
        loadout: [
          {
            id: "woa-10-photo",
            name: "Dossier Fotografico del Maelstrom + Tubi Vernice",
            category: "tool",
            categoryLabel: "Ricognizione & Diversivo",
            concealment: "Non Rilevabile",
            lethality: "Supporto / Infiltrazione",
            description: "Raccogli la foto nella sala dei corvi o parla con il barbiere per identificare Kale.",
            tacticalTip: "Se prendi il posto del barbiere, il Maelstrom verrà da solo a farsi radere la barba: eliminazione più pulita del gioco!"
          },
          {
            id: "woa-10-fan",
            name: "Ventilatore Gigante del Set Cinematografico (Torre Rangan)",
            category: "tool",
            categoryLabel: "Incidente di Scena",
            concealment: "Occultabile",
            lethality: "Letale",
            description: "Aumenta al massimo la potenza della macchina del vento mentre Dawood Rangan posa sul bordo del grattacielo.",
            tacticalTip: "Verrà scaraventato nel vuoto davanti all'intera troupe."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-woa-10-1",
        targetOrTask: "Identifica ed Elimina Wazir Kale ('Il Maelstrom')",
        type: "elimination",
        typeLabel: "Ricerca & Eliminazione",
        priority: "CRITICA",
        location: "Bassifondi / Bottega del Barbiere",
        recommendedMethod: "Riconoscimento tramite fotografia/barbiere e taglio alla gola o segnale bandiera per il Kashmirian",
        intelNotes: "Il Maelstrom indossa vestiti comuni e gira tra i mercati dei bassifondi."
      },
      {
        id: "obj-woa-10-2",
        targetOrTask: "Elimina Dawood Rangan e Vanya Shah",
        type: "elimination",
        typeLabel: "Doppia Eliminazione",
        priority: "CRITICA",
        location: "Torre in Costruzione & Deposito Ferroviario",
        recommendedMethod: "Ventilatore gigante sul set, sarto reale per Vanya o allineamento fucile del Kashmirian",
        intelNotes: "Usa il treno fuori controllo nel deposito per un'eliminazione spettacolare."
      }
    ],
    silentAssassinRules: [
      "Zero civili o lavoratori dei bassifondi uccisi",
      "Usa le uscite dei treni o del molo"
    ],
    extractionPoints: [
      {
        id: "ext-woa-10-boat",
        name: "Barca sul Molo Sud di Mumbai",
        description: "Uscita rapida oltre il mercato delle spezie.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "woa-another-life",
    missionNumber: "11",
    missionTitle: "Another Life",
    gameSubtitle: "Hitman 2",
    operationCodename: "OP-WOA-11 // La Caduta del Primo Costante",
    icaClassification: "SHADOW CLIENT ALLIANCE // WHITTLETON CREEK",
    handler: "Diana Burnwood & Lucas Grey (Alleanza Attiva)",
    threatAssessment: "CRITICO",
    primaryLocation: "Sobborgo di Whittleton Creek, Vermont, USA",
    targetsSummary: ["Janus (Ex Costante)", "Nolan Cassidy", "3 Prove su Ark Society"],
    briefingTranscript: "47, la verità è svelata: il Cliente Ombra è il tuo fratello d'infanzia, Soggetto 6, ora noto come Lucas Grey. Abbiamo unito le forze per distruggere Providence. Il primo obiettivo è Janus, l'anziano fondatore ed ex Costante in ritiro nel tranquillo sobborgo di Whittleton Creek, protetto dal guardaspalle Nolan Cassidy. Elimina entrambi e trova 3 indizi sulla Ark Society.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Bombola Ossigeno & Venditore Immobiliare)",
        badge: "SUBURBAN MASTER // 2 KILLS + 3 CLUES",
        description: "Sabota la bombola d'ossigeno accanto alla poltrona di Janus (o soffocalo durante la visita medica) e mostra a Nolan Cassidy la casa in vendita piena di fughe di gas / laser letali.",
        recommendedSuit: "Abito Suburbano con Guanti / Travestimento Agente Immobiliare",
        loadout: [
          {
            id: "woa-11-lockpick",
            name: "Grimaldello ICA & Veleno per Muffin",
            category: "tool",
            categoryLabel: "Infiltrazione",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Sblocca i seminterrati delle villette di Whittleton Creek per cercare gli indizi sull'Ark Society.",
            tacticalTip: "Fai attenzione alle telecamere nascoste nella casa di Cassidy."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-woa-11-1",
        targetOrTask: "Elimina Janus e Nolan Cassidy",
        type: "elimination",
        typeLabel: "Doppia Eliminazione",
        priority: "CRITICA",
        location: "Residenza Janus & Casa Cassidy",
        recommendedMethod: "Visita infermieristica fatale / esplosione ossigeno per Janus; fuga di gas nella casa in vendita per Cassidy",
        intelNotes: "Janus custodisce la memoria storica della nascita di Providence."
      },
      {
        id: "obj-woa-11-2",
        targetOrTask: "Raccogli 3 Prove Sull'Ubicazione della Ark Society",
        type: "intel",
        typeLabel: "Ricognizione",
        priority: "CRITICA",
        location: "Sotterranei & Giardini del Sobborgo",
        recommendedMethod: "Recupera dossier, microfilmati o registrazioni dalla casa di Janus, Cassidy e dal garage Batty",
        intelNotes: "Gli indizi conducono all'Isola di Sgàil nel Mare del Nord."
      }
    ],
    silentAssassinRules: [
      "Nessun vicino curioso o guardia del corpo innocente ucciso",
      "Completa tutti e 3 gli indizi prima dell'uscita"
    ],
    extractionPoints: [
      {
        id: "ext-woa-11-bus",
        name: "Fermata Bus / Fogne di Whittleton Creek",
        description: "Verso l'Isola di Sgàil.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "woa-ark-society",
    missionNumber: "12",
    missionTitle: "The Ark Society",
    gameSubtitle: "Hitman 2",
    operationCodename: "OP-WOA-12 // Rapimento della Costante a Sgàil",
    icaClassification: "SHADOW CLIENT OP // ISLE OF SGÀIL",
    handler: "Diana Burnwood & Lucas Grey",
    threatAssessment: "MASSIMO",
    primaryLocation: "Castello sull'Isola di Sgàil, Atlantico del Nord",
    targetsSummary: ["Zoe Washington", "Sophia Washington", "Arthur Edwards (Cattura)"],
    briefingTranscript: "Sulla remota Isola di Sgàil si riunisce l'Ark Society, l'élite miliardaria guidata da Zoe e Sophia Washington. Mentre i ricchi brindano alla fine del mondo, tu devi eliminare le gemelle Washington, localizzare il nuovo Costante di Providence, Arthur Edwards, e scortarlo vivo fino al molo perché Lucas Grey lo interroghi.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Fenice Infuocata & Vergine di Ferro)",
        badge: "ISLAND STEALTH // CONSTANT CAPTURE",
        description: "Sostituisciti al maestro di cerimonie per intrappolare Zoe nella statua della Fenice di ferro infuocata e strangola Sophia durante l'incontro col Costante nella torre.",
        recommendedSuit: "Tuxedo con Maschera Sgàil / Cavaliere Medievale",
        loadout: [
          {
            id: "woa-12-lockpick",
            name: "Grimaldello & Scrambler Elettronico",
            category: "tool",
            categoryLabel: "Infiltrazione Castello",
            concealment: "Non Rilevabile",
            lethality: "Supporto / Infiltrazione",
            description: "Indispensabile per accedere ai laboratori segreti della torre centrale e alla sala dell'interruttore della Costante.",
            tacticalTip: "Non usare il detonatore sulla spilla esplosiva al collo di Edwards o morirà prima dell'interrogatorio!"
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-woa-12-1",
        targetOrTask: "Elimina Zoe e Sophia Washington",
        type: "elimination",
        typeLabel: "Doppia Eliminazione",
        priority: "CRITICA",
        location: "Piazza della Fenice & Torre dell'Architetto",
        recommendedMethod: "Rito della Fenice in fiamme per Zoe; caduta nella Vergine di Ferro o collana per Sophia",
        intelNotes: "Le gemelle possiedono l'interruttore di emergenza del chip avvelenato nel collo del Costante."
      },
      {
        id: "obj-woa-12-2",
        targetOrTask: "Neutralizza la Sicurezza e Scorta Arthur Edwards al Molo",
        type: "safeguard",
        typeLabel: "Cattura VIP",
        priority: "CRITICA",
        location: "Torre di Guardia -> Molo Nord",
        recommendedMethod: "Convinci Edwards a seguirti travestito da guardia o con la prova dei Partner",
        intelNotes: "Edwards si consegnerà volontariamente per svelare i nomi dei tre Partner in cambio della libertà futura."
      }
    ],
    silentAssassinRules: [
      "Arthur Edwards non deve essere ucciso o ferito",
      "Zero invitati dell'Ark Society colpiti"
    ],
    extractionPoints: [
      {
        id: "ext-woa-12-boat",
        name: "Motoscafo di Lucas Grey al Molo del Castello",
        description: "Trasporto immediato del Costante prigioniero.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "woa-new-york",
    missionNumber: "13",
    missionTitle: "Golden Handshake (DLC)",
    gameSubtitle: "Hitman 2",
    operationCodename: "OP-WOA-13 // Rapina alla Banca Milton-Fitzpatrick",
    icaClassification: "PROVIDENCE FINANCES // NEW YORK, USA",
    handler: "Diana Burnwood & Lucas Grey",
    threatAssessment: "CRITICO",
    primaryLocation: "Banca Milton-Fitzpatrick, Wall Street, New York",
    targetsSummary: ["Athena Savalas (Direttrice)", "Dati Caveau Providence"],
    briefingTranscript: "Per rintracciare i tre Partner fuggiti dopo l'interrogatorio di Edwards, dobbiamo accedere ai registri bancari segreti di Providence custoditi nella filiale newyorkese di Milton-Fitzpatrick. Elimina la spietata direttrice Athena Savalas e svuota il caveau blindato dei dischi rigidi cifrati.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Orologio di Vetro & Cloroformio nel Caveau)",
        badge: "BANK HEIST // ZERO ALARM",
        description: "Usa il cloroformio sul condotto di ventilazione della sicurezza per addormentare le guardie del caveau senza spari, ruba i dati dei Partner e spingi Athena Savalas attraverso il grande orologio di vetro del suo ufficio.",
        recommendedSuit: "Soprabito Newyorkese / Uniforme Sicurezza d'Élite",
        loadout: [
          {
            id: "woa-13-chloroform",
            name: "Bottiglia di Cloroformio (Cassaforte / Armadietto)",
            category: "tool",
            categoryLabel: "Gas Anestetico",
            concealment: "Occultabile",
            lethality: "Non Letale",
            description: "Inseriscilo nell'unità di aerazione della sala controllo davanti al caveau: addormenta istantaneamente 4 guardie armate.",
            tacticalTip: "Recupera la chiave della cassaforte dal direttore IT o dal caveau stesso."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-woa-13-1",
        targetOrTask: "Elimina Athena Savalas",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Ufficio Direzione - Ultimo Piano",
        recommendedMethod: "Spinta attraverso il grande orologio di vetro panoramico o premio pesante",
        intelNotes: "Athena possiede una delle tre chiavi di backup del caveau."
      },
      {
        id: "obj-woa-13-2",
        targetOrTask: "Svuota il Caveau e Recupera i Dischi Dati di Providence",
        type: "intel",
        typeLabel: "Rapina Dati",
        priority: "CRITICA",
        location: "Caveau Sotterraneo della Banca",
        recommendedMethod: "Disattiva i laser e preleva il server portatile centrale",
        intelNotes: "I file rivelano il coinvolgimento del resort Haven Island alle Maldive."
      }
    ],
    silentAssassinRules: [
      "Nessun banchiere, cliente o guardia giurata uccisa",
      "Disabilita il terminale di sicurezza nel caveau o nell'ufficio IT"
    ],
    extractionPoints: [
      {
        id: "ext-woa-13-truck",
        name: "Furgone Blindato nel Garage Sotterraneo",
        description: "Richiede la chiave del furgone situata vicino all'uscita.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "woa-haven-island",
    missionNumber: "14",
    missionTitle: "The Last Resort (DLC)",
    gameSubtitle: "Hitman 2",
    operationCodename: "OP-WOA-14 // Smantellamento di Haven alle Maldive",
    icaClassification: "PROVIDENCE TRACKING // HAVEN ISLAND, MALDIVES",
    handler: "Diana Burnwood & Lucas Grey",
    threatAssessment: "CRITICO",
    primaryLocation: "Resort Privato Haven Island, Maldive",
    targetsSummary: ["Tyson Williams", "Steven Bradley", "Ljudmila Vetrova"],
    briefingTranscript: "I tre Partner di Providence hanno comprato nuove identità digitali dalla società 'Haven' alle Maldive per sparire dai radar mondiali. Elimina i tre fondatori — Tyson Williams, Steven Bradley e Ljudmila Vetrova — e accedi al server sotterraneo sotto la villa per scaricare la loro posizione reale.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Tempesta Tropicale, Moto d'Acqua & Spa)",
        badge: "3 TARGETS // PARADISE WIPE",
        description: "Sabota la moto d'acqua di Steven Bradley, soffoca o folgora Ljudmila Vetrova nella spa e colpisci Tyson Williams nel suo bunker sulla scogliera sfruttando l'uragano in arrivo.",
        recommendedSuit: "Abito Tropicale Estivo / Istruttore Subacqueo",
        loadout: [
          {
            id: "woa-14-taser",
            name: "Micro Taser + Chiave Server Villa",
            category: "tool",
            categoryLabel: "Incidente Elettrico",
            concealment: "Non Rilevabile",
            lethality: "Letale",
            description: "Perfetto nelle pozzanghere della spa sotto la pioggia battente o accanto alla vasca idromassaggio di Williams.",
            tacticalTip: "Accedi al laboratorio sotterraneo tramite la botola nello studio di Tyson Williams."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-woa-14-1",
        targetOrTask: "Elimina Tyson Williams, Steven Bradley e Ljudmila Vetrova",
        type: "elimination",
        typeLabel: "Triplice Eliminazione",
        priority: "CRITICA",
        location: "Villa Williams, Spiaggia & Centro Spa",
        recommendedMethod: "Esplosione moto d'acqua per Bradley, trappola spa per Vetrova e veleno/elettrocuzione per Williams",
        intelNotes: "Ogni bersaglio protegge una chiave d'accesso al server sotterraneo."
      },
      {
        id: "obj-woa-14-2",
        targetOrTask: "Accedi al Server Sotterraneo e Traccia i Partner",
        type: "intel",
        typeLabel: "Decrittazione Finale",
        priority: "CRITICA",
        location: "Bunker Server sotto Villa Williams",
        recommendedMethod: "Inserimento delle schede di accesso sul mainframe Haven",
        intelNotes: "Scoprirai che i Partner si trovano a Dubai, mentre Edwards è fuggito a sorpresa dalla prigionia."
      }
    ],
    silentAssassinRules: [
      "Nessun ospite in vacanza o staff del resort ucciso",
      "Usa l'idrovolante o il motoscafo sul molo dopo aver hackerato i server"
    ],
    extractionPoints: [
      {
        id: "ext-woa-14-boat",
        name: "Motoscafo Privato sul Molo Ovest",
        description: "Rotta verso Dubai per Hitman 3.",
        riskLevel: "Basso"
      }
    ]
  },

  // ================= HITMAN 3 (2021) =================
  {
    missionId: "woa-dubai",
    missionNumber: "15",
    missionTitle: "On Top of the World",
    gameSubtitle: "Hitman 3",
    operationCodename: "OP-WOA-15 // I Partner tra le Nuvole di Dubai",
    icaClassification: "APEX HUNT // BURJ AL-GHAZALI, DUBAI",
    handler: "Lucas Grey (Supporto Operativo sul Campo)",
    threatAssessment: "MASSIMO",
    primaryLocation: "Grattacielo The Scepter, Dubai, EAU",
    targetsSummary: ["Carl Ingram", "Marcus Stuyvesant"],
    briefingTranscript: "Siamo in cima al mondo, 47. Dopo la fuga di Edwards, i primi due Partner di Providence — Carl Ingram e Marcus Stuyvesant — si nascondono all'inaugurazione del grattacielo più alto della Terra a Dubai. Lanciati con la tuta alare sui ponteggi esterni, infiltrati nell'attico e giustiziali entrambi.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Paracaduti Manomessi & Evacuazione d'Emergenza)",
        badge: "DOUBLE SKYDIVE ACCIDENT // APEX GHOST",
        description: "Attiva il protocollo di evacuazione d'emergenza sulla console dei server al piano tecnico dopo aver tagliato con il coltello i cavi di entrambi i paracaduti all'eliporto: Ingram e Stuyvesant si lanceranno nel vuoto verso la morte!",
        recommendedSuit: "Tuta da Paracadutista / Abito Ashen",
        loadout: [
          {
            id: "woa-15-knife",
            name: "Coltello Tattico / Cacciavite + Hacker Keycard",
            category: "tool",
            categoryLabel: "Sabotaggio Paracadute",
            concealment: "Occultabile",
            lethality: "Supporto / Infiltrazione",
            description: "Indispensabile per tagliare le imbracature dei due paracaduti sulla terrazza elicottero.",
            tacticalTip: "Recupera le due schede chiave nella stanza controllo e inseriscile nello sportello di evacuazione nella lounge VIP."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-woa-15-1",
        targetOrTask: "Elimina Carl Ingram e Marcus Stuyvesant",
        type: "elimination",
        typeLabel: "Eliminazione dei Partner",
        priority: "CRITICA",
        location: "Attico & Terrazze del The Scepter",
        recommendedMethod: "Sabotaggio paracadute con evacuazione d'emergenza o palla da golf esplosiva per Ingram",
        intelNotes: "Ingram odia i rumori forti nell'attico; Stuyvesant visita la galleria d'arte privata."
      }
    ],
    silentAssassinRules: [
      "Zero invitati dell'inaugurazione feriti",
      "Esfiltrazione gettandosi con il paracadute dalla terrazza est"
    ],
    extractionPoints: [
      {
        id: "ext-woa-15-skydive",
        name: "Lancio col Paracadute dalla Terrazza Est",
        description: "Discesa spettacolare attraverso le nuvole di Dubai.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "woa-dartmoor",
    missionNumber: "16",
    missionTitle: "Death in the Family",
    gameSubtitle: "Hitman 3",
    operationCodename: "OP-WOA-16 // Il Mistero di Thornbridge Manor",
    icaClassification: "APEX HUNT // DARTMOOR, UK",
    handler: "Lucas Grey (Ultime Comunicazioni)",
    threatAssessment: "CRITICO",
    primaryLocation: "Thornbridge Manor, Dartmoor, Inghilterra",
    targetsSummary: ["Alexa Carlisle", "File di Arthur Edwards"],
    briefingTranscript: "L'ultima dei Partner, la spietata matriarca Alexa Carlisle, ha finto la propria morte per ritirarsi nella sua gotica tenuta di famiglia a Dartmoor. Sotto gli occhi dei parenti riuniti per il falso funerale, si è verificato un vero omicidio in famiglia. Assumi il ruolo dell'investigatore privato, risolvi il caso, elimina Alexa e recupera il dossier su Arthur Edwards.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Investigatore Privato & Suicidio Indotto)",
        badge: "MURDER MYSTERY // ZERO TOUCH KILL",
        description: "Sostituisciti all'investigatore Phineas Whitmer all'ingresso della tenuta, esamina la scena del crimine nella stanza di Zachary Carlisle, accusa Zachary/Emma davanti ad Alexa e chiedi il fascicolo come compenso: se le mostri la lettera del suicidio di Zachary, Alexa si getterà dal balcone da sola!",
        recommendedSuit: "Soprabito Detective / Cappotto Classico Dartmoor",
        loadout: [
          {
            id: "woa-16-camera",
            name: "Macchina Fotografica Digitale ICA",
            category: "tool",
            categoryLabel: "Indagine Forense",
            concealment: "Non Rilevabile",
            lethality: "Supporto / Infiltrazione",
            description: "Scansiona gli indizi della scena del crimine e hackera le serrature elettroniche.",
            tacticalTip: "Puoi anche spingere Alexa nella fossa aperta del cimitero o farle cadere il lampadario nell'ufficio."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-woa-16-1",
        targetOrTask: "Elimina Alexa Carlisle",
        type: "elimination",
        typeLabel: "Eliminazione Partner",
        priority: "CRITICA",
        location: "Studio Padronale & Balcone Thornbridge",
        recommendedMethod: "Risoluzione indagine come detective ed esposizione del suicidio o spinta dal balcone",
        intelNotes: "Alexa ha già predisposto la combinazione della cassaforte dietro la poltrona."
      },
      {
        id: "obj-woa-16-2",
        targetOrTask: "Recupera il Fascicolo su Arthur Edwards",
        type: "intel",
        typeLabel: "Recupero Dati",
        priority: "CRITICA",
        location: "Cassaforte Ufficio Carlisle",
        recommendedMethod: "Ritira il fascicolo direttamente dalle mani di Alexa o sblocca la cassaforte",
        intelNotes: "Subito fuori dal maniero ti attende la tragica imboscata a Lucas Grey."
      }
    ],
    silentAssassinRules: [
      "Nessun familiare dei Carlisle o domestico ferito",
      "Esfiltrazione dalla motocicletta sul ponte di pietra"
    ],
    extractionPoints: [
      {
        id: "ext-woa-16-bike",
        name: "Motocicletta sul Ponte di Pietra",
        description: "Fuga sotto la pioggia dopo il sacrificio di Lucas Grey.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "woa-berlin",
    missionNumber: "17",
    missionTitle: "Apex Predator",
    gameSubtitle: "Hitman 3",
    operationCodename: "OP-WOA-17 // I Predatori dell'ICA a Berlino",
    icaClassification: "DISAVOWED // BERLIN NIGHTCLUB",
    handler: "Nessun Handler (47 Contro l'ICA)",
    threatAssessment: "MASSIMO",
    primaryLocation: "Ex Centrale Elettrica (Rave Club Hölle), Berlino, Germania",
    targetsSummary: ["5 Agenti ICA (su 10 Operativi inviati a Ucciderti)"],
    briefingTranscript: "Con la morte di Lucas Grey e l'ICA passata agli ordini di Arthur Edwards, una squadra d'élite di dieci sicari ICA sotto copertura ti sta dando la caccia all'interno di un caotico rave illegale in una vecchia centrale di Berlino. Capovolgi la caccia: scova ed elimina almeno cinque agenti operativi ICA per costringere i superstiti alla fuga.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Incontro nell'Ufficio del Capo & Incidenti Rave)",
        badge: "5 OF 10 AGENTS // APEX HUNTER",
        description: "Travestiti da proprietario del club (Rolf Hirschmüller), chiama l'agente Montgomery e i suoi 4 colleghi nella tua stanza sul retro per eliminarli con la fuga di gas / esplosivo di scena, oppure usa la gru e l'impianto luci.",
        recommendedSuit: "Giacca Urbana Berlino / Abito Proprietario Club",
        loadout: [
          {
            id: "woa-17-earpiece",
            name: "Auricolare Tattico ICA (Sottratto al Primo Agente)",
            category: "tool",
            categoryLabel: "Intercettazione Radio",
            concealment: "Non Rilevabile",
            lethality: "Supporto / Infiltrazione",
            description: "Neutralizza il primo agente isolato vicino alla stazione di servizio per sentire tutte le comunicazioni radio del team ICA.",
            tacticalTip: "Ogni agente ha un proprio ruolo: cecchino Tremaine sui tetti dei biker, Montgomery e Davenport nel club, Swan fuori all'ingresso."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-woa-17-1",
        targetOrTask: "Elimina Almeno 5 Agenti Operativi ICA (es. Montgomery, Tremaine, Thames, Banner, Rhodes)",
        type: "elimination",
        typeLabel: "Caccia Inversa",
        priority: "CRITICA",
        location: "Club Hölle & Covo Biker di Berlino",
        recommendedMethod: "Agguato nell'ufficio di Hirschmüller, gru industriale o cecchinaggio sul tetto di Tremaine",
        intelNotes: "Eliminati 5 agenti, i rimanenti verranno richiamati dal panico dell'handler Jiao."
      }
    ],
    silentAssassinRules: [
      "Zero partecipanti al rave o membri dello staff feriti",
      "Esfiltrazione verso la foresta dopo il richiamo radio dell'ICA"
    ],
    extractionPoints: [
      {
        id: "ext-woa-17-bike",
        name: "Bici / Sentiero nella Foresta di Berlino",
        description: "Uscita notturna verso la distruzione definitiva dell'ICA.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "woa-chongqing",
    missionNumber: "18",
    missionTitle: "End of an Era",
    gameSubtitle: "Hitman 3",
    operationCodename: "OP-WOA-18 // Cancellazione del Data Core ICA",
    icaClassification: "SYSTEM TERMINATION // CHONGQING, CHINA",
    handler: "Olivia Hall (Supporto Hacker Clandestino)",
    threatAssessment: "MASSIMO",
    primaryLocation: "Struttura Sotterranea ICA & Laboratori Hush, Chongqing, Cina",
    targetsSummary: ["Hush", "Imogen Royce", "Data Core Principale ICA"],
    briefingTranscript: "È il colpo finale contro l'agenzia che ti ha creato, 47. Nei sotterranei iper-tecnologici di Chongqing si trova il Data Core centrale dell'ICA. Per ottenere i permessi di accesso al nucleo, devi eliminare i due supervisori — lo sperimentatore neurale Hush e l'analista Imogen Royce — e poi lanciare la fuga di dati pubblica tramite Olivia Hall.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Sovraccarico Neurale & Camera Pulita Royce)",
        badge: "ICA SHUTDOWN // DATA CORE PURGE",
        description: "Sostituisciti al soggetto di test nel laboratorio di Hush per mandare in sovraccarico letale il suo caschetto neurale, poi manipola i protocolli di licenziamento di Imogen Royce nella base per intrappolarla nella camera di sterilizzazione infuocata.",
        recommendedSuit: "Trench Impermeabile Neon City / Camice Analista ICA",
        loadout: [
          {
            id: "woa-18-camera",
            name: "Macchina Fotografica Hacker & Scrambler Dongle",
            category: "tool",
            categoryLabel: "Bypass Biometrico",
            concealment: "Non Rilevabile",
            lethality: "Supporto / Infiltrazione",
            description: "Usa la fotocamera ICA per hackerare tutte le finestre elettroniche, le porte a codice e le valvole di sicurezza nel centro dati.",
            tacticalTip: "Il codice dell'appartamento iniziale e delle porte di servizio è 0118."
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-woa-18-1",
        targetOrTask: "Elimina Hush",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Edificio Fatiscente (Block) - Laboratorio Neurale",
        recommendedMethod: "Sovraccarico della sedia neurale o cecchinaggio dalla lavanderia con il fucile drone",
        intelNotes: "Hush riposa periodicamente accanto al tetto."
      },
      {
        id: "obj-woa-18-2",
        targetOrTask: "Elimina Imogen Royce e Sabota il Data Core ICA",
        type: "sabotage",
        typeLabel: "Eliminazione & Demolizione Dati",
        priority: "CRITICA",
        location: "Data Facility Sotterranea Livello -3",
        recommendedMethod: "Incidente nella camera di pulizia per Royce e upload dei file ICA con fuga dall'ascensore d'emergenza",
        intelNotes: "Una volta avviata la cancellazione, l'intero complesso entrerà in blocco armato."
      }
    ],
    silentAssassinRules: [
      "Nessun senzatetto, guardia o analista innocente ucciso",
      "Evita i laser del tunnel d'emergenza durante la fuga finale"
    ],
    extractionPoints: [
      {
        id: "ext-woa-18-alley",
        name: "Uscita Vicoli Piovosi di Chongqing",
        description: "L'ICA cessa ufficialmente di esistere.",
        riskLevel: "Medio"
      }
    ]
  },
  {
    missionId: "woa-mendoza",
    missionNumber: "19",
    missionTitle: "The Farewell",
    gameSubtitle: "Hitman 3",
    operationCodename: "OP-WOA-19 // Il Ballo Finale a Mendoza",
    icaClassification: "LONG CON // MENDOZA, ARGENTINA",
    handler: "Diana Burnwood (Infiltrata con Edwards)",
    threatAssessment: "CRITICO",
    primaryLocation: "Tenuta Vinicola Viña Yates, Mendoza, Argentina",
    targetsSummary: ["Don Archibald Yates", "Tamara Vidal"],
    briefingTranscript: "Ultimo atto prima di raggiungere Arthur Edwards, 47. Diana sta giocando una partita rischiosissima fingendo di voler succedere alla Costante. Qui a Mendoza l'araldo di Providence Don Yates e l'ex CIA Tamara Vidal vogliono far fuori Diana al ricevimento vinicolo. Eliminali entrambi in sintonia con Diana e preparati al 'Long Con'.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Sommelier & Pressa per l'Uva)",
        badge: "DIANA'S LONG CON // TANGO EXTRACT",
        description: "Assisti Diana nei vigneti spingendo Tamara Vidal nella pressa vinicola o durante la visita guidata, poi consegna il rarissimo vino d'annata 1945 Grand Paladin a Don Yates per colpirlo nella sua villa mentre la moglie affronta i suoi segreti.",
        recommendedSuit: "Abito Classico Requiem / Smoking Nero con Guanti",
        loadout: [
          {
            id: "woa-19-wine",
            name: "Vino d'Annata 1945 Grand Paladin + Veleno",
            category: "tool",
            categoryLabel: "Tossina & Opportunità",
            concealment: "Occultabile",
            lethality: "Letale",
            description: "Apre la riunione segreta degli araldi di Providence nei sotterranei di Don Yates.",
            tacticalTip: "Puoi aiutare Diana direttamente liberandola prima che Yates ordini la sua esecuzione in cantina!"
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-woa-19-1",
        targetOrTask: "Elimina Tamara Vidal",
        type: "elimination",
        typeLabel: "Eliminazione Bersaglio",
        priority: "CRITICA",
        location: "Vigneti & Sale Degustazione",
        recommendedMethod: "Caduta nella pressa vinicola industriale o eliminazione coordinata durante il tour",
        intelNotes: "Tamara pedina costantemente Diana per scoprire un suo tradimento."
      },
      {
        id: "obj-woa-19-2",
        targetOrTask: "Elimina Don Archibald Yates e Balla il Tango con Diana",
        type: "elimination",
        typeLabel: "Eliminazione & Scena Finale",
        priority: "CRITICA",
        location: "Villa Yates - Salone & Cantine",
        recommendedMethod: "Vino avvelenato alla riunione degli araldi o spinta dalla moglie sul balcone dopo la rivelazione del dossier",
        intelNotes: "Al termine, balla il tango con Diana per innescare il finto tradimento con la neurotossina."
      }
    ],
    silentAssassinRules: [
      "Nessun ospite della tenuta o operaio vinicolo ucciso",
      "Diana deve restare protetta in ogni fase"
    ],
    extractionPoints: [
      {
        id: "ext-woa-19-dance",
        name: "Pista da Ballo del Tango con Diana Burnwood",
        description: "Conduce 47 prigioniero sul treno corazzato dei Carpazi per l'atto finale.",
        riskLevel: "Basso"
      }
    ]
  },
  {
    missionId: "woa-untouchable",
    missionNumber: "20",
    missionTitle: "Untouchable",
    gameSubtitle: "Hitman 3",
    operationCodename: "OP-WOA-20 // Il Treno nei Carpazi (La Fine)",
    icaClassification: "FINAL ACT // CARPATHIAN MOUNTAINS, ROMANIA",
    handler: "Diana Burnwood (Il Piano Perfetto)",
    threatAssessment: "MASSIMO",
    primaryLocation: "Treno Corazzato di Providence, Monti Carpazi, Romania",
    targetsSummary: ["Arthur Edwards ('La Costante')", "Siero dell'Amnesia"],
    briefingTranscript: "Il trucco di Diana ha funzionato alla perfezione: ti trovi a bordo del treno blindato di Arthur Edwards attraverso le montagne della Romania, proprio dove la tua storia è iniziata. Edwards è isolato nella carrozza di testa con la sua scorta d'élite. Fatti strada lungo i vagoni nella tormenta, raggiungi La Costante e scegli la sua punizione definitiva.",
    approaches: [
      {
        id: "silent_assassin",
        title: "Silent Assassin (Nessun Morto + Siero dell'Amnesia su Edwards)",
        badge: "CANON ENDING // ZERO KILLS POSSIBLE",
        description: "Sguscia lungo i vagoni esterni e i tetti innevati del treno usando lattine e stordimenti silenziosi senza uccidere una sola guardia, raggiungi l'ufficio di Edwards e iniettagli il suo stesso siero della memoria per ridurlo al nulla.",
        recommendedSuit: "Veste Degente Laboratorio / Tuta Tattica Ferroviaria",
        loadout: [
          {
            id: "woa-20-serum",
            name: "Siringa del Siero dell'Amnesia Providence",
            category: "tool",
            categoryLabel: "Scelta Canonica",
            concealment: "Non Rilevabile",
            lethality: "Non Letale",
            description: "Riposta sul tavolo dell'ultima carrozza da Arthur Edwards stesso.",
            tacticalTip: "Puoi sparargli, strangolarlo o iniettargli il siero dell'amnesia: la scelta canonica cancella per sempre l'identità del burattinaio senza sparare un colpo!"
          }
        ]
      }
    ],
    contractObjectives: [
      {
        id: "obj-woa-20-1",
        targetOrTask: "Attraversa i Vagoni Blindati del Treno di Providence",
        type: "intel",
        typeLabel: "Infiltrazione Lineare",
        priority: "PRIMARIA",
        location: "Vagoni Merci, Militari & Laboratorio",
        recommendedMethod: "Passaggio sui fianchi esterni e tetti delle carrozze evitando le squadre corazzate",
        intelNotes: "Le regole della missione ti consentono eccezionalmente di stordire o eliminare le guardie ostili Providence, ma l'approccio zero-vittime è il vero trionfo."
      },
      {
        id: "obj-woa-20-2",
        targetOrTask: "Neutralizza Arthur Edwards (La Costante) con il Siero o Arma",
        type: "elimination",
        typeLabel: "Chiusura Saga",
        priority: "CRITICA",
        location: "Carrozza di Testa (Ufficio Privato Edwards)",
        recommendedMethod: "Iniezione del siero dell'oblio nella giugulare per annientarne per sempre la mente",
        intelNotes: "Segna la definitiva liberazione dell'Agente 47 e di Diana Burnwood."
      }
    ],
    silentAssassinRules: [
      "Nessun personale medico non ostile ucciso",
      "Sgancia la carrozza di coda o raggiungi la piattaforma finale nella neve"
    ],
    extractionPoints: [
      {
        id: "ext-woa-20-train",
        name: "Sganciamento Vagone verso le Montagne dei Carpazi",
        description: "Fine della Trilogia World of Assassination.",
        riskLevel: "Basso"
      }
    ]
  }
];
