import { useState } from "react";
import { ChapterInfo } from "../data/hitmanDataset";
import { Calendar, MapPin, Target, Eye, ChevronRight, Award, FolderOpen, Shield, Dna, Lock, Terminal, Download } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import InteractiveWorldMap from "./InteractiveWorldMap";

interface TimelineViewProps {
  chapters: ChapterInfo[];
  selectedId: string;
  onSelectId: (id: string) => void;
}

interface AdditionalLore {
  interceptTitle: string;
  interceptMeta: string;
  interceptContent: string;
  philosophyTitle: string;
  philosophyContent: string;
  secretCodexId: string;
}

const ADDITIONAL_LORE_DB: Record<string, AdditionalLore> = {
  "genesic7": {
    interceptTitle: "DECRIPTATO // MEMO INTERNO DEL DR. ORT-MEYER",
    interceptMeta: "Data: 14 Agosto 1989 | Protocollo: S-PAREME-09",
    interceptContent: "La serie dei clones serie 4 è eccezionale, in particolare il Soggetto 47 mostra tassi di apprendimento cognitivo e di precisione balistica fuori scala. Tuttavia, rilevo una propensione eccessiva all'attaccamento nei confronti di piccoli animali (ha adottato clandestinamente un coniglietto). È inaudito. Ho già programmato la somministrazione forzata di bloccanti chimici dell'amigdala e un siero per l'eliminazione dei ricordi d'infanzia per salvaguardare la purezza letale del soldato.",
    philosophyTitle: "LA GENESI DEL CONFLITTO TRA GENETICA E LIBERO ARBITRIO",
    philosophyContent: "Ort-Meyer concepisce 47 come l'arma biocinetica definitiva, un ammasso cellulare deterministico privo di identità. Ma il libero arbitrio non è sradicabile dal nucleo dell'autocoscienza: il patto di sangue infantile con il Soggetto 6 (Lucas Grey) dimostra che l'empatia e la cooperazione precedono l'addestramento letale. La tabula rasa forzata chimicamente è solo un velo momentaneo.",
    secretCodexId: "PROJECT_ASYLUM-047"
  },
  "codename47": {
    interceptTitle: "INTERCETTAZIONE ICA // RAPPORTO SULL'ALLINEAMENTO SOGGETTO",
    interceptMeta: "Data: 10 Novembre 2000 | Canale: SECURE_COM_GREEN",
    interceptContent: "Il Soggetto 47 ha neutralizzato Lee Hong a Hong Kong e riallineato il controllo territoriale a favore dell'ICA. Il file di intelligence mostra che il mandante segreto di questi contratti è lo stesso Dr. Ort-Meyer, il quale intende utilizzare la nostra agenzia professionale per liquidare gli altri co-investitori della clonazione (I Cinque Padri). L'agguato finale è allestito nel manicomio rumeno, stiamo monitorando il comportamento di 47.",
    philosophyTitle: "IL PATRICIDIO COME SVINCOLO DEL DETERMINISMO",
    philosophyContent: "Eliminando individualmente i padri genetici e infine il suo creatore Ort-Meyer, 47 compie un rito di passaggio catartico. Rompe letteralmente il circolo cibernetico che lo legava ai suoi donatori e uccide la sua progenie scientifica. È un rifiuto assoluto del vincolo riproduttivo e la prima affermazione violenta del proprio diritto di esistere a prescindere dai registri di nascita.",
    secretCodexId: "PATRICIDE_2000_REPORT"
  },
  "silentassassin": {
    interceptTitle: "FILE CRITTOGRAFATO // DOSSIER COMPLOTTO SERGEI ZAVOROTKO",
    interceptMeta: "Data: 12 Aprile 2002 | Intercettato da: ICA-EUROPE",
    interceptContent: "I sensori hanno rilevato l'attività di Sergei Zavorotko in associazione con un operatore coperto classificato come 'Mystery Man'. Il rapimento di Padre Vittorio dal santuario di Gontranno è stato calcolato per costringere l'assurto killer 47 a uscire dallo stato latente di ascesi giardiniera. Vogliono testarne le capacità letali contro forze russe e dirottarne l'uso per fini geopolitici ed atomici in Kazakistan.",
    philosophyTitle: "LA TRAPPOLA DELLA REDENZIONE ASCETICA",
    philosophyContent: "L'Agente 47 si illude di poter scambiare la propria redenzione con il giardinaggio umile e le donazioni monetarie alla Chiesa cattolica siciliana. Ma la morale di un biocostruito non si purifica per sottrazione o fuga ascetica. Quando stermina i rapitori all'interno della cattedrale dissacrata di Gontranno, 47 appende il rosario al cancello: accetta che la sua natura è distruttiva, ma sceglie di governare questa forza come un operatore etico conscio.",
    secretCodexId: "GONTRANNO_SACRED_ASSET"
  },
  "bloodmoney_contracts": {
    interceptTitle: "COMUNICAZIONE INTERCETTATA // CABINET INTERIOR SECRETS",
    interceptMeta: "Data: 19 Maggio 2006 | Canale: ALPHA_ZEROX_SECURE",
    interceptContent: "Il direttore Alexander Leland Cayne sta abusando dell'infrastruttura FBI per assediare l'ICA. L'eliminazione sistematica di tutti gli agenti ICA ha costretto Diana Burnwood a isolarsi. Il prototipo del midollo spinale di 47 è l'unica chiave genetica in grado di sbloccare la rigenerazione tissutale ad allungamento infinito della vita. Il funerale solenne è stato pianificato sotto scorta federale armata.",
    philosophyTitle: "NEMESI DELLA CLINICA BIOLOGICA DEL POTERE",
    philosophyContent: "Il Franchise rappresenta il capitalismo eugenetico che vuole brevettare e colonizzare il genoma di 47 per l'oligarchia politica mondiale (Providence, Alpha Zerox). Il risveglio teatrale di 47 sul catafalco, armato delle leggendarie pistole Silverballers passategli con un bacio e l'antidoto di Diana, simboleggia la resurrezione della coscienza morale contro la mortificazione biologica mercantilista.",
    secretCodexId: "FUNERAL_CARNAGE_RSA"
  },
  "absolution": {
    interceptTitle: "NOTIFICA INTERCETTAZIONE // RELAZIONE MEDICA SU VICTORIA",
    interceptMeta: "Data: 18 Gennaio 2012 | Destinatario: Benjamin Travis",
    interceptContent: "La stabilizzazione cellulare del soggetto Victoria risponde correttamente alle iniezioni d'isotopo chimico. La ragazza dimostra una forza muscolare cardiaca e tempi di reazione uguali o superiori di circa il 12% rispetto alle misurazioni registrate sull'Agente 47 all'età corrispondente. La ditta appaltatrice CICADA ha garantito la difesa militare totale dell'istituto Hope sino al completamento del condizionamento mentale.",
    philosophyTitle: "LA DISERZIONE ETICA DEL SICARIO PROFESSIONALIZZATO",
    philosophyContent: "L'ingaggio solitario di 47 per proteggere Victoria rappresenta il crollo morale dell'alienazione professionale corporativa dell'ICA. Per tutta la vita 47 ha eseguito ordini per conto di agenzie intermediarie, ma davanti a una bambina abusata per gli stessi esperimenti eugenetici subiti da lui in fasce, 47 si frammenta, diserta, e imbraccia l'illegalità etica. Egli protegge Victoria per sanare retroattivamente l'innocenza perduta del suo stesso essere.",
    secretCodexId: "VICTORIA_PROTECT_DOC"
  },
  "worldofassassination": {
    interceptTitle: "ARCHIVIO DECRIPTATO // CONGIURA DI PROVIDENCE CONTRO I PARTNER",
    interceptMeta: "Data: 11 Luglio 2020 | Trasmissione: THE_CONSTANT_PRIMARY",
    interceptContent: "I tre storici Partner di Providence (Ingram, Stuyvesant e Carlisle) credono di potersi nascondere dietro navette offshore, ma i conti sono stati intercettati dal Cliente Ombra. Arthur Edwards ha completato il travaso occulto delle azioni societarie fiduciarie. Ci serve solo che l'Agente 47 decimi i Partner in modo da eliminare la vecchia guardia nobiliare, dopodiché l'ICA sarà digitalizzata e cancellata permanentemente.",
    philosophyTitle: "LA TRASCENDENZA E LA LIBERAZIONE FREELANCE DEL DUO INTERSTIZIALE",
    philosophyContent: "Nella trilogia moderna, 47 supera definitivamente il proprio ruolo di pedina geopolitica. Il tragico sacrificio di Lucas Grey gli riconsegna la determinazione emotiva della sua fratellanza; la complicità di Diana (che fa il doppio gioco con la Costante per annientare la multinazionale Providence dal vertice) sancisce un legame non più basato su contratti, bensì su un'etica condivisa. Insieme distruggono Providence e si svincolano dalle corporazioni di morte, offrendo una violenza chirurgica autogestita e diretta contro i dominatori planetari.",
    secretCodexId: "PROVIDENCE_CONSPIRACY_RECORDS"
  }
};

type LoreLayerTab = "objectives" | "intercepts" | "philosophy";

export default function TimelineView({ chapters, selectedId, onSelectId }: TimelineViewProps) {
  const activeChapter = chapters.find((c) => c.id === selectedId) || chapters[0];
  const activeChapterIndex = chapters.findIndex((c) => c.id === selectedId);
  const [activeLayer, setActiveLayer] = useState<LoreLayerTab>("objectives");

  const lore = ADDITIONAL_LORE_DB[activeChapter.id] || {
    interceptTitle: "DECRIPTATO // ARCHIVIO SECUTOR",
    interceptMeta: "Data: Sconosciuta",
    interceptContent: "Nessuna intercettazione supplementare catalogata per questa coordinata temporale.",
    philosophyTitle: "INTELLIGENCE FILOSOFICA ASSENTE",
    philosophyContent: "Il soggetto opera al di fuori dei filtri bioetici documentati.",
    secretCodexId: "ICA_UNKNOWN_CODE"
  };

  const handleExportTimeline = () => {
    const content = `=================================================================
             INTERNATIONAL CONTRACT AGENCY - SECURE DATABASE
=================================================================
FILE: CHRONICLE RECONSTRUCTION
CHAPTER: ${activeChapter.gameTitle} (${activeChapter.year})
TITLE: ${activeChapter.title}
DATE OF EXPORT: ${new Date().toISOString()}

-----------------------------------------------------------------
[+] NARRATIVE SUMMARY
-----------------------------------------------------------------
${activeChapter.summary}

-----------------------------------------------------------------
[+] OPERATIONAL THEATERS
-----------------------------------------------------------------
${activeChapter.locations.length > 0 ? activeChapter.locations.join(', ') : 'None recorded'}

-----------------------------------------------------------------
[+] KEY TARGETS NEUTRALIZED
-----------------------------------------------------------------
${activeChapter.keyTargets.length > 0 ? activeChapter.keyTargets.join('\n') : 'None recorded'}

-----------------------------------------------------------------
[+] CHRONOLOGICAL EVENTS
-----------------------------------------------------------------
${activeChapter.details.map((d, i) => `[${String(i + 1).padStart(2, '0')}] ${d}`).join('\n')}

-----------------------------------------------------------------
[+] DECRYPTED LORE: ${lore.interceptTitle}
-----------------------------------------------------------------
META: ${lore.interceptMeta}
${lore.interceptContent}

-----------------------------------------------------------------
[+] PHILOSOPHICAL SIGNIFICANCE: ${lore.philosophyTitle}
-----------------------------------------------------------------
${lore.philosophyContent}

=================================================================
END OF FILE
=================================================================`;

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ICA_CHRONICLE_${activeChapter.id.toUpperCase()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Horizontally Clickable Premium Milestone Map Timeline Row */}
      <div className="bg-black/40 backdrop-blur-md p-5 rounded-sm border border-white/5 space-y-4">
        <div className="flex items-center justify-between text-[10px] uppercase font-mono tracking-widest text-slate-500 border-b border-white/5 pb-2">
          <span>INTERACTIVE CRONOLOGY MAP // GAUGE SECTOR</span>
          <span className="text-red-500 font-bold">{activeChapter.year} (EP. {String(activeChapterIndex + 1).padStart(2, '0')})</span>
        </div>

        {/* Visual node alignment map */}
        <div className="relative pt-6 pb-2 px-10">
          {/* Background horizontal line */}
          <div className="absolute top-[38px] left-[50px] right-[50px] h-[1px] bg-gradient-to-r from-red-950 via-red-650 to-red-950 z-0 opacity-40" />
          
          {/* Foreground progress indicator line */}
          <div 
            className="absolute top-[38px] left-[50px] h-[2px] bg-red-650 z-0 transition-all duration-300"
            style={{ width: `${(activeChapterIndex / (chapters.length - 1)) * 88}%` }}
          />

          <div className="flex justify-between items-center relative z-10 select-none">
            {chapters.map((chapter, i) => {
              const isActive = chapter.id === selectedId;
              const isPast = chapters.findIndex((c) => c.id === selectedId) >= i;

              return (
                <button
                  key={chapter.id}
                  onClick={() => onSelectId(chapter.id)}
                  className="flex flex-col items-center group focus:outline-none"
                  style={{ width: "60px" }}
                  id={`milestone-node-${chapter.id}`}
                >
                  {/* Floating Year Tag */}
                  <span className={`text-[9px] font-mono tracking-wider transition-colors duration-200 mb-2 ${
                    isActive ? "text-red-500 font-bold" : "text-slate-500 group-hover:text-slate-300"
                  }`}>
                    {chapter.year.includes("-") ? chapter.year.split(" - ")[1] : chapter.year}
                  </span>

                  {/* Pulsing Interconnected Dot */}
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    isActive 
                      ? "bg-red-650/40 border-red-500 shadow-[0_0_12px_rgba(239,68,68,0.4)]"
                      : isPast
                        ? "bg-red-950/20 border-red-800 group-hover:border-red-500"
                        : "bg-black border-slate-800 group-hover:border-slate-500"
                  }`}>
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      isActive 
                        ? "bg-red-500 scale-125" 
                        : isPast 
                          ? "bg-red-800" 
                          : "bg-slate-700"
                    }`} />
                  </div>

                  {/* Subtitle Game Reference */}
                  <span className="text-[7.5px] uppercase font-mono tracking-widest text-[#475569] text-center line-clamp-1 mt-1 z-10 transition-colors group-hover:text-slate-400">
                    {chapter.id === "genesic7" ? "GENESIS" : chapter.id === "worldofassassination" ? "WOA" : chapter.id.toUpperCase()}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <InteractiveWorldMap 
        chapters={chapters} 
        selectedChapterId={selectedId} 
        onSelectChapterId={onSelectId} 
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Traditional chronological sidebar picker */}
        <div className="lg:col-span-4 space-y-3 bg-black/40 backdrop-blur-md p-5 rounded-sm border border-white/5">
          <div className="text-[10px] uppercase font-mono tracking-widest text-slate-500 border-b border-white/5 pb-2 mb-4">
            SAGA CHRONOLOGY FILES
          </div>
          <div className="space-y-3">
            {chapters.map((chapter, i) => {
              const isActive = chapter.id === selectedId;
              return (
                <button
                  key={chapter.id}
                  onClick={() => onSelectId(chapter.id)}
                  className={`w-full text-left p-3 rounded-sm transition-all duration-200 border relative overflow-hidden group ${
                    isActive
                      ? "bg-white/5 border-l-2 border-red-600 border-t-white/10 border-b-transparent border-r-transparent text-white"
                      : "bg-transparent border-transparent border-l-2 border-l-transparent text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                  id={`timeline-picker-${chapter.id}`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-[10px] tracking-wider transition-colors ${isActive ? "text-red-500 font-bold" : "text-slate-500"}`}>
                      {chapter.year}
                    </span>
                    <span className="text-[9px] font-mono tracking-wider uppercase bg-black/60 px-2 py-0.5 rounded-sm text-slate-500 border border-white/5">
                      EP. {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <h4 className="font-display font-bold text-xs mt-1.5 uppercase tracking-wide leading-tight group-hover:text-white transition-colors">
                    {chapter.gameTitle}
                  </h4>
                  <p className="text-[10px] text-slate-500 line-clamp-1 mt-1 font-serif italic">
                    {chapter.title}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Tabbed Dynamic Content Area showing Further Story Lore */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChapter.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="bg-black/30 backdrop-blur-md rounded-sm border border-white/5 overflow-hidden"
            >
              {/* Active Chapter Header Info */}
              <div className="bg-white/5 px-6 py-5 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] tracking-widest uppercase text-white bg-red-600 font-bold px-2 py-0.5 rounded-sm">
                      <Calendar className="w-3 h-3" />
                      {activeChapter.year}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                      CLASSIFIED // CHRONICLE_DATA_0{activeChapterIndex + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-black text-white mt-3 uppercase tracking-tight leading-none" id="active-chapter-title">
                    {activeChapter.gameTitle}
                  </h3>
                  <p className="text-xs text-red-500 font-serif italic mt-1.5">
                    {activeChapter.title}
                  </p>
                </div>
                <button 
                  onClick={handleExportTimeline} 
                  className="flex items-center gap-2 bg-red-950/40 hover:bg-red-900/60 flex-shrink-0 transition-colors border border-red-900/40 text-red-500 px-4 py-2 rounded-sm text-[10px] font-mono tracking-widest uppercase font-bold group"
                  title="Scarica Evento Timeline come Documento Sicuro"
                >
                  <Download className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Export Report</span>
                </button>
              </div>

              {/* INTERACTIVE LORE SWITCHER BAR */}
              <div className="flex border-b border-white/5 bg-black/10 text-xs font-mono font-bold uppercase tracking-wider">
                <button
                  onClick={() => setActiveLayer("objectives")}
                  className={`flex-1 py-3 text-center border-b-2 transition-all flex items-center justify-center gap-2 ${
                    activeLayer === "objectives"
                      ? "text-red-500 border-red-600 bg-white/5 font-extrabold"
                      : "text-slate-500 border-transparent hover:text-slate-300"
                  }`}
                  id="tab-lore-objectives"
                >
                  <FolderOpen className="w-3.5 h-3.5" />
                  <span>Obiettivi & Missioni</span>
                </button>
                <button
                  onClick={() => setActiveLayer("intercepts")}
                  className={`flex-1 py-3 text-center border-b-2 transition-all flex items-center justify-center gap-2 ${
                    activeLayer === "intercepts"
                      ? "text-red-500 border-red-600 bg-white/5 font-extrabold"
                      : "text-slate-500 border-transparent hover:text-slate-300"
                  }`}
                  id="tab-lore-classified"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Cospirazioni & Spie</span>
                </button>
                <button
                  onClick={() => setActiveLayer("philosophy")}
                  className={`flex-1 py-3 text-center border-b-2 transition-all flex items-center justify-center gap-2 ${
                    activeLayer === "philosophy"
                      ? "text-red-500 border-red-600 bg-white/5 font-extrabold"
                      : "text-slate-500 border-transparent hover:text-slate-300"
                  }`}
                  id="tab-lore-theme"
                >
                  <Dna className="w-3.5 h-3.5" />
                  <span>Analisi Etica</span>
                </button>
              </div>

              {/* Layer Display Body */}
              <div className="p-6 space-y-6">
                <AnimatePresence mode="wait">
                  {activeLayer === "objectives" && (
                    <motion.div
                      key="objectives"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="space-y-6"
                    >
                      {/* Plot Narrative Summary */}
                      <div className="bg-white/5 p-5 rounded-sm border-t border-white/10">
                        <h5 className="text-[10px] uppercase font-mono tracking-widest text-red-400 mb-2.5 flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5" />
                          INQUADRAMENTO DELLA TRAMA
                        </h5>
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed" id="chapter-summary-text">
                          {activeChapter.summary}
                        </p>
                      </div>

                      {/* Geographic theatres and targets */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white/5 p-4 rounded-sm border-t border-white/10">
                          <h6 className="text-[10px] uppercase font-mono tracking-widest text-[#94a3b8]/60 mb-2.5 flex items-center gap-1.5 font-bold">
                            <MapPin className="w-3.5 h-3.5 text-red-500" />
                            TEATRI D'AZIONE OPERATIVI
                          </h6>
                          <div className="flex flex-wrap gap-1.5">
                            {activeChapter.locations.length > 0 ? (
                              activeChapter.locations.map((loc, i) => (
                                <span key={i} className="text-[10px] bg-black/60 text-slate-300 px-2.5 py-1 rounded-sm border border-white/5 font-mono">
                                  {loc}
                                </span>
                              ))
                            ) : (
                              <span className="text-xs text-slate-500 italic font-mono">Nessuna locazione in registro</span>
                            )}
                          </div>
                        </div>

                        <div className="bg-white/5 p-4 rounded-sm border-t border-white/10">
                          <h6 className="text-[10px] uppercase font-mono tracking-widest text-[#94a3b8]/60 mb-2.5 flex items-center gap-1.5 font-bold">
                            <Target className="w-3.5 h-3.5 text-red-500" />
                            OBIETTIVI NEUTRALIZZATI (KEY CONTRACTS)
                          </h6>
                          <div className="flex flex-wrap gap-1.5">
                            {activeChapter.keyTargets.length > 0 ? (
                              activeChapter.keyTargets.map((target, i) => (
                                <span key={i} className="text-[10px] bg-red-950/20 text-red-400 px-2.5 py-1 rounded-sm border border-red-900/40 font-mono font-bold">
                                  {target}
                                </span>
                              ))
                            ) : (
                              <span className="text-xs text-slate-500 italic font-mono">Nessun target diretto</span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Chronicle reconstruction list */}
                      <div className="border-t border-white/5 pt-5">
                        <h5 className="text-[10px] uppercase font-mono tracking-widest text-slate-400 mb-3.5 flex items-center gap-1.5 font-bold">
                          <ChevronRight className="w-3.5 h-3.5 text-red-500" />
                          FASE DI RICOSTRUZIONE CRONOLOGIA METODICA
                        </h5>
                        <ul className="space-y-3">
                          {activeChapter.details.map((detail, index) => (
                            <li key={index} className="flex gap-3 text-xs leading-relaxed text-slate-400">
                              <span className="text-red-500 font-mono select-none font-bold">[{String(index + 1).padStart(2, '0')}]</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}

                  {/* Classifed Intercept Intel */}
                  {activeLayer === "intercepts" && (
                    <motion.div
                      key="intercepts"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="space-y-4"
                    >
                      <div className="bg-[#020304] rounded-sm p-5 border border-red-950/40 font-mono space-y-4 relative overflow-hidden">
                        {/* Custom background grids */}
                        <div className="absolute top-0 right-0 p-10 opacity-[0.02] pointer-events-none">
                          <Terminal className="w-64 h-64 text-red-500" />
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-start gap-2 border-b border-white/5 pb-3">
                          <div className="space-y-0.5">
                            <h5 className="text-red-500 text-xs font-bold flex items-center gap-2">
                              <Lock className="w-3.5 h-3.5" />
                              {lore.interceptTitle}
                            </h5>
                            <p className="text-[10px] text-slate-500 italic">
                              {lore.interceptMeta}
                            </p>
                          </div>
                          <span className="text-[9px] bg-red-950/40 text-red-500 border border-red-900/50 px-2 py-0.5 rounded-sm font-bold uppercase">
                            CODEX // {lore.secretCodexId}
                          </span>
                        </div>

                        <p className="text-slate-300 text-xs leading-relaxed whitespace-pre-line border-l-2 border-red-900 pl-4 py-1 font-mono">
                          {lore.interceptContent}
                        </p>

                        <div className="pt-2 flex items-center justify-between text-[9px] text-[#475569]">
                          <span>DECRYPTION ENGINE: LORE_V2_ICA_GATE</span>
                          <span>STATUS: SECURE_VIEW</span>
                        </div>
                      </div>

                      {/* Decryption Warning */}
                      <div className="bg-red-900/5 rounded-sm p-4 border border-red-900/20 text-[10px] text-red-400/80 leading-relaxed font-mono">
                        ATTENZIONE: Le informazioni presenti in questo modulo derivano dalla decrittazione dei server di Providence custoditi nella fazione sotterranea Satu Mare. Non ridistribuire a operatori sul campo non autorizzati.
                      </div>
                    </motion.div>
                  )}

                  {/* Psycho-Philosophical theme layer */}
                  {activeLayer === "philosophy" && (
                    <motion.div
                      key="philosophy"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="space-y-5"
                    >
                      {/* Interactive free will visual banner */}
                      <div className="bg-[#110505]/40 rounded-sm p-5 border border-red-950/60 flex flex-col sm:flex-row items-start gap-4">
                        <div className="p-3 bg-red-950/40 border border-red-900/40 rounded-sm text-red-500 flex-shrink-0">
                          <Dna className="w-8 h-8 animate-pulse" />
                        </div>
                        <div className="space-y-2">
                          <h5 className="text-sm font-display font-black text-white uppercase tracking-wider">
                            {lore.philosophyTitle}
                          </h5>
                          <p className="text-slate-300 text-xs leading-relaxed whitespace-pre-line font-mono">
                            {lore.philosophyContent}
                          </p>
                        </div>
                      </div>

                      {/* Significance summary box */}
                      <div className="bg-red-950/20 p-5 border border-red-900/30">
                        <h6 className="text-[10px] uppercase font-mono tracking-widest text-red-400 mb-2 flex items-center gap-1.5 font-bold">
                          <Award className="w-3.5 h-3.5 text-red-500" />
                          SIGNIFICATO FILOSOFICO & LIBERO ARBITRIO
                        </h6>
                        <p className="text-red-200/80 text-xs leading-relaxed italic pr-4">
                          "{activeChapter.importance}"
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
