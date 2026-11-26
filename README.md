# Hitman Lore Explorer — ICA Archive

Applicazione web interattiva dedicata all'esplorazione approfondita della trama, dei personaggi, delle missioni e dell'intrastoria della saga di **Hitman** (da *Codename 47* alla trilogia *World of Assassination*), presentata attraverso un terminale tattico ispirato all'archivio dell'**International Contract Agency (ICA)**.

---

## Funzionalità Principali

L'applicazione è organizzata in **5 sezioni principali** accessibili dalla barra di navigazione superiore:

### 1. Timeline & Cronologia Interattiva
- **Linea temporale navigabile** suddivisa in **6 capitoli storici** (dalla Genesi a Satu Mare fino all'epilogo di *Hitman 3*), con nodi interattivi e indicatore cronologico.
- **Mappa del Mondo Interattiva** (`d3-geo` + `world-atlas` / `topojson-client`): mappa vettoriale ad alta precisione con zoom, pan, graticola, rotte aeree tra i teatri operativi e pin geolocalizzati per i siti chiave della saga. Selezionando un'area sulla mappa è possibile saltare direttamente al capitolo corrispondente (e viceversa).
- **Quattro livelli di lettura** per ogni era selezionata:
  - **Mission Briefing**: archivio operativo con **86 briefing individuali**, uno per ciascuna missione di ogni capitolo/gioco. Include ricerca per missione o bersaglio, filtro per singolo titolo (es. *Contracts* vs *Blood Money* o *Hitman 1 / 2 / 3*), riproduzione audio tramite sintesi vocale del browser (`Web Speech API`), dottrine e loadout consigliati con schede espandibili, checklist interattiva degli obiettivi con calcolo del rating **Silent Assassin**, regole d'ingaggio e punti di esfiltrazione.
  - **Obiettivi & Eventi**: sintesi narrativa, eventi chiave e lista dei bersagli neutralizzati.
  - **Intercettazioni**: documenti e trascrizioni crittografate declassificate dell'ICA.
  - **Analisi Filosofica**: approfondimento tematico sul conflitto tra determinismo biologico e libero arbitrio.
- **Esportazione PDF**: generazione di report PDF strutturati sia per l'intera cronaca del capitolo sia per il dossier tattico della singola missione selezionata.

### 2. Targets (Dossier Personaggi)
- Archivio ricercabile di protagonisti, alleati, mandanti e bersagli chiave della saga (inclusi i Cinque Padri).
- Scheda dettagliata per ogni soggetto con livello di minaccia, allineamento, note biografiche e di intelligence, cronologia delle apparizioni collegata direttamente ai capitoli della Timeline ed esportazione del dossier in PDF.

### 3. I Cinque Padri
- Sezione dedicata al progetto eugenetico **Ort-Meyer** ("Blood and Muscle") e ai cinque donatori genetici (*Dr. Otto Wolfgang Ort-Meyer*, *Lee Hong*, *Pablo Belisario Ochoa*, *Frantz Fuchs*, *Arkadij Jegorov*), con analisi dei contributi genetici, finanziari e del destino di ciascuno.

### 4. Analyzer (Analisi Relazionale)
- Motore di correlazione tattica tra due entità o fazioni selezionate dall'utente (es. *Agente 47* vs *Diana Burnwood* o *Arthur Edwards*).
- Invia la richiesta al backend Express (`/api/gemini/analyze`) collegato a **Gemini** (`gemini-2.5-flash`) per generare un report strutturato su punti di contatto, attriti chiave e impatto narrativo. In assenza di API key o in caso di errore di rete, entra automaticamente in funzione un **database diagnostico locale di fallback**.

### 5. Intelligence Chat
- Terminale conversazionale basato su `/api/gemini/chat` con **tre profili selezionabili**:
  - **Diana Burnwood** (handler storica dell'ICA)
  - **Lucas Grey / Soggetto 6** (leader della milizia ribelle)
  - **ICA-9000** (sistema AI analitico dell'agenzia)
- Risponde in italiano restando coerente con la lore completa della saga e dispone di risposte locali di emergenza qualora `GEMINI_API_KEY` non sia configurata.

---

## Stack Tecnologico

| Ambito | Tecnologie utilizzate |
| :--- | :--- |
| **Frontend** | React 19, TypeScript, Vite, Tailwind CSS v4, Motion, Lucide React |
| **Cartografia** | `d3-geo`, `topojson-client`, `world-atlas` |
| **Esportazione PDF** | `jspdf` |
| **Backend & AI** | Node.js, Express, `@google/genai` (`gemini-2.5-flash`), `dotenv` |

---

## Struttura del Progetto

```text
├── server.ts                  # Server Express (API Gemini + fallback locale + middleware Vite)
├── src/
│   ├── App.tsx                # Layout principale, header ICA e routing tra le 5 viste
│   ├── components/
│   │   ├── TimelineView.tsx           # Cronologia, schede lore e integrazione mappa/briefing
│   │   ├── MissionBriefing.tsx        # Archivio per-missione (86 missioni), loadout e checklist
│   │   ├── InteractiveWorldMap.tsx    # Mappa vettoriale interattiva dei teatri operativi
│   │   ├── DossierView.tsx            # Dossier ricercabili dei personaggi e jump alla timeline
│   │   ├── FathersView.tsx            # Approfondimento sui Cinque Padri del progetto Ort-Meyer
│   │   ├── AnalyzerView.tsx           # Analisi relazionale tra due entità
│   │   └── ChatView.tsx               # Chat intelligente multi-persona
│   ├── data/
│   │   ├── hitmanDataset.ts           # Dataset principale (capitoli, personaggi, Cinque Padri)
│   │   ├── briefingTypes.ts           # Interfacce TypeScript per i briefing tattici
│   │   ├── missionBriefings.ts        # Aggregatore per capitolo di tutte le missioni
│   │   └── briefings/                 # Dati dettagliati divisi per era/gioco
│   └── utils/
│       ├── pdfExport.ts               # Generatori PDF (dossier, cronologia e singola missione)
│       └── worldGeoData.ts            # Proiezione geografica e geometrie TopoJSON
└── .env.example               # Variabili d'ambiente richieste
```

---

## Avvio in Locale

### Prerequisiti
- **Node.js** (consigliata versione 20 o superiore)
- **npm**

### Installazione e Configurazione

1. **Installa le dipendenze:**
   ```bash
   npm install
   ```

2. **Configura le variabili d'ambiente:**
   Crea un file `.env` (o `.env.local`) nella root del progetto basandoti su `.env.example` e inserisci la tua chiave API Gemini:
   ```env
   GEMINI_API_KEY="LA_TUA_API_KEY_GEMINI"
   ```
   > **Nota:** L'applicazione funziona anche senza `GEMINI_API_KEY`; le sezioni *Analyzer* e *Intelligence Chat* passeranno automaticamente ai protocolli di risposta locale di emergenza.

3. **Avvia il server di sviluppo:**
   ```bash
   npm run dev
   ```
   L'applicazione sarà raggiungibile su `http://localhost:3000`.

### Comandi Disponibili

- `npm run dev` — Avvia Express + Vite in modalità sviluppo sulla porta `3000`.
- `npm run lint` — Esegue la verifica dei tipi TypeScript (`tsc --noEmit`).
- `npm run build` — Compila il frontend Vite e il bundle server in `dist/`.
- `npm run start` — Avvia l'applicazione compilata in produzione (`node dist/server.cjs`).
