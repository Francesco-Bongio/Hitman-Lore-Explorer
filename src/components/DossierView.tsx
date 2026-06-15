import { useState } from "react";
import { CharacterInfo } from "../data/hitmanDataset";
import { User, Shield, Compass, ArrowRight, Search, ExternalLink, Calendar, Download } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface DossierViewProps {
  characters: CharacterInfo[];
  onJumpToChapter: (chapterId: string) => void;
}

// Custom appearance mapping connecting characters to chapters in the timeline with specific explanations
const CHRONOLOGY_MAPPING: Record<string, { chapterId: string; title: string; year: string; role: string }[]> = {
  "Agente 47": [
    { chapterId: "genesic7", title: "La Genesi e l'Infanzia", year: "Anni '50 - 1999", role: "Soggetto biologico primario. Stringe un patto di sangue segreto con il Soggetto 6 e subisce il resettaggio artificiale della memoria." },
    { chapterId: "codename47", title: "Il Risveglio e la Ribellione", year: "2000", role: "Evaso da Satu Mare, viene reclutato dall'ICA ed elimina metodicamente i suoi padri genetici fino a spezzare il collo al Dr. Ort-Meyer." },
    { chapterId: "silentassassin", title: "La Ricerca di Redenzione", year: "2002", role: "Si rifugia in un monastero in Sicilia sotto l'ala di Padre Vittorio, ma ritorna a essere l'assassino spietato per salvarlo." },
    { chapterId: "bloodmoney_contracts", title: "Minaccia Esistenziale e Guerra tra Agenzie", year: "2004 - 2006", role: "Ferito gravemente a Parigi, combatte la caccia serrata del Franchise ed esegue l'annientamento totale della cabala nel capitolo conclusivo al suo funerale." },
    { chapterId: "absolution", title: "Il Collasso Etico", year: "2012", role: "Diserta dall'ICA corrotto per proteggere Victoria, l'adolescente geneticamente modificata da Benjamin Travis." },
    { chapterId: "worldofassassination", title: "La Trilogia del World of Assassination", year: "2019 - 2021", role: "Si ricongiunge con Diana e Lucas Grey per stanare e distruggere l'intera Providence e l'infrastruttura stessa dell'ICA." }
  ],
  "Diana Burnwood": [
    { chapterId: "genesic7", title: "La Genesi e l'Infanzia", year: "Anni '50 - 1999", role: "Subisce il trauma familiare supremo: i suoi genitori muoiono a causa di un'autobomba azionata da un giovane 47 condizionato." },
    { chapterId: "codename47", title: "Il Risveglio e la Ribellione", year: "2000", role: "Assume il ruolo di Handler strategico all'interno dell'ICA, guidando 47 attraverso i suoi primi e oscuri contratti di ascesa." },
    { chapterId: "silentassassin", title: "La Ricerca di Redenzione", year: "2002", role: "Broker di riferimento di 47 all'ICA, fornisce il tracking satellitare fondamentale per scovare Sergei Zavorotko." },
    { chapterId: "bloodmoney_contracts", title: "Minaccia Esistenziale e Guerra tra Agenzie", year: "2004 - 2006", role: "L'unica esponente ICA superstite della guerra col Franchise. Mette in scena la finta morte di 47 per colpire Cayne." },
    { chapterId: "absolution", title: "Il Collasso Etico", year: "2012", role: "Tradisce Benjamin Travis per salvare Victoria dai laboratori del super-sicario; chiede protezione a 47 simulando il proprio decesso." },
    { chapterId: "worldofassassination", title: "La Trilogia del World of Assassination", year: "2019 - 2021", role: "Sviluppa il 'Long Con' fingendo di allearsi con Arthur Edwards a Mendoza per distruggere Providence dal nucleo." }
  ],
  "Lucas Grey (Soggetto 6)": [
    { chapterId: "genesic7", title: "La Genesi e l'Infanzia", year: "Anni '50 - 1999", role: "Fratello clonale d'infanzia di 47 a Satu Mare. Stringe il patto di vendetta ed è l'unico dei due a fuggire con successo." },
    { chapterId: "worldofassassination", title: "La Trilogia del World of Assassination", year: "2019 - 2021", role: "Conosciuto inizialmente come il 'Cliente Ombra'. Si allea con 47 e si sacrifica a Dartmoor pur di sventare la sua cattura." }
  ],
  "Arthur Edwards (La Costante)": [
    { chapterId: "genesic7", title: "La Genesi e l'Infanzia", year: "Anni '50 - 1999", role: "Membro di spicco a bordo di Providence, autorizza i finanziamenti illeciti del manicomio rumeno guidato da Ort-Meyer." },
    { chapterId: "worldofassassination", title: "La Trilogia del World of Assassination", year: "2019 - 2021", role: "La mente machiavellica dietro Providence. Tenta di distruggere l'alleanza tra Diana e 47 prima di perdere la memoria sul treno." }
  ],
  "Dr. Otto Wolfgang Ort-Meyer": [
    { chapterId: "genesic7", title: "La Genesi e l'Infanzia", year: "Anni '50 - 1999", role: "Dirige i folli esperimenti eugenetici segreti nel manicomio di Satu Mare, cancellando la psiche dei cloni." },
    { chapterId: "codename47", title: "Il Risveglio e la Ribellione", year: "2000", role: "La nemesi principale. Manipola l'ICA per eliminare gli altri partner e viene giustiziato da 47 nel suo laboratorio sotterraneo." }
  ],
  "Victoria": [
    { chapterId: "absolution", title: "Il Collasso Etico", year: "2012", role: "Fulcro narrativo di Absolution, ideata come super-sicario e difesa a costo della vita da 47, riguadagnando una vita ordinaria." }
  ],
  "Alexander Leland Cayne": [
    { chapterId: "bloodmoney_contracts", title: "Minaccia Esistenziale e Guerra tra Agenzie", year: "2004 - 2006", role: "Ex capo FBI e leader del Franchise, ordina l'eliminazione dell'ICA per carpirne il sequenziamento genetico. Muore colpito da 47 al finto funerale." }
  ],
  "Lee Hong": [
    { chapterId: "codename47", title: "Il Risveglio e la Ribellione", year: "2000", role: "Padre biologico di 47. Assassinato all'interno del proprio ristorante fortificato a Hong Kong durante un blitz dell'agente." }
  ],
  "Pablo Belisario Ochoa": [
    { chapterId: "codename47", title: "Il Risveglio e la Ribellione", year: "2000", role: "Padre genetico e signore della droga. Eliminato da 47 nella fitta giungla colombiana nel corso di uno scontro frontale devastante." }
  ],
  "Frantz Fuchs": [
    { chapterId: "codename47", title: "Il Risveglio e la Ribellione", year: "2000", role: "Terrorista chimico austriaco e padre genetico. Neutralizzato da 47 all'Hotel Gellert a Budapest prima dell'esplosione." }
  ],
  "Arkadij Jegorov (Boris)": [
    { chapterId: "codename47", title: "Il Risveglio e la Ribellione", year: "2000", role: "Trafficante d'armi pesanti russo e donatore genetico. Intercettato ed eliminato sul cargo nel porto di Rotterdam." }
  ]
};

export default function DossierView({ characters, onJumpToChapter }: DossierViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Create unified searchable database combining original key characters and remaining Five Fathers
  const masterCharactersList: CharacterInfo[] = [
    ...characters,
    {
      name: "Lee Hong",
      role: "Leader Red Dragon / Padre Fondatore",
      actorType: "antagonist" as const,
      description: "Spietato leader carismatico della triade Red Dragon a Hong Kong. Uno dei Cinque Padri. Ha finanziato gli esperimenti biologici del manicomio rumeno fornendo coperture e risorse monetarie estese dal mercato asiatico.",
      details: "Ucciso da 47 nel suo lussuoso ristorante a Hong Kong al termine di un'infiltrazione impeccabile volta a deporre la sua dinastia criminale."
    },
    {
      name: "Pablo Belisario Ochoa",
      role: "Re del Cartello Colombiano / Padre Fondatore",
      actorType: "antagonist" as const,
      description: "Signore assoluto del traffico di cocaina in Colombia. Uno dei Cinque Padri. Ha supportato il progetto Ort-Meyer con flussi finanziari miliardari ed equipaggiamento tattico per la milizia di Satu Mare.",
      details: "Muore sotto i colpi di 47 nel suo stesso quartier generale fortificato nella giungla amazzonica dopo essere stato indotto a una crisi paranoica."
    },
    {
      name: "Frantz Fuchs",
      role: "Terrorista Chimico / Padre Fondatore",
      actorType: "antagonist" as const,
      description: "Pericoloso estremista ricercato a livello internazionale. Uno dei Cinque Padri. Fornitore di teorie eversive d'assetto politico e chimica bellica letale per gli scopi del manicomio rumeno.",
      details: "Eliminato silenziosamente da 47 all'Hotel Gellert di Budapest prima che potesse lanciare una devastante bomba chimica sul summit europeo."
    },
    {
      name: "Arkadij Jegorov (Boris)",
      role: "Trafficante d'Armi / Padre Fondatore",
      actorType: "antagonist" as const,
      description: "Ombroso fornitore d'armi ed elementi fissili dismessi provenienti dalle ex repubbliche sovietiche. Uno dei Cinque Padri. Ha dotato Ort-Meyer di materiali radiattivi e mine.",
      details: "Giustiziato da 47 a bordo di una nave cargo al porto di Rotterdam nel bel mezzo delle trattative per una testata nucleare tattica."
    }
  ];

  // Selected character state, default to first item
  const [selectedCharName, setSelectedCharName] = useState<string>(masterCharactersList[0].name);

  // Filter list based on search bar queries
  const filteredCharacters = masterCharactersList.filter((char) => {
    const query = searchQuery.toLowerCase();
    return (
      char.name.toLowerCase().includes(query) ||
      char.role.toLowerCase().includes(query) ||
      char.description.toLowerCase().includes(query)
    );
  });

  // Current selected character object derived from the master list
  const selectedChar = masterCharactersList.find((c) => c.name === selectedCharName) || masterCharactersList[0];
  const activeDescription = selectedChar.description;
  const activeDetails = selectedChar.details;
  
  let defaultRisk = "Alto";
  const extremeTargets = ["Arthur Edwards", "Dott. Otto Wolfgang Ort-Meyer", "Lee Hong", "Pablo Belisario Ochoa", "Benjamin Travis", "Blake Dexter"];
  if (extremeTargets.includes(selectedChar.name)) defaultRisk = "Estremo";
  else if (selectedChar.name.includes("Negotiator") || selectedChar.name.includes("Guilliani")) defaultRisk = "Medio";
  else if (selectedChar.name === "Odon Kovacs") defaultRisk = "Basso";
  
  const activeRisk = defaultRisk;

  // Map the active character's appearances
  const appearances = CHRONOLOGY_MAPPING[selectedChar.name] || [];

  const handleExportDossier = () => {
    const content = `=================================================================
             INTERNATIONAL CONTRACT AGENCY - SECURE DATABASE
=================================================================
FILE: DOSSIER RECORD
SUBJECT: ${selectedChar.name}
ROLE: ${selectedChar.role}
ALIGNMENT: ${selectedChar.actorType.toUpperCase()}
CLASSIFICATION: LEVEL 5 (ICA RESTRICTED)
DATE OF EXPORT: ${new Date().toISOString()}

-----------------------------------------------------------------
[+] BIOGRAPHICAL DELINEATION & INTELLIGENCE
-----------------------------------------------------------------
${activeDescription}

-----------------------------------------------------------------
[+] OPERATIONAL LOGISTICS & CONFLICT
-----------------------------------------------------------------
${activeDetails}

-----------------------------------------------------------------
[+] CHRONOLOGICAL RECORD
-----------------------------------------------------------------
${appearances.length > 0 
  ? appearances.map(a => `[${a.year}] ${a.title}\nRole: ${a.role}`).join('\n\n')
  : 'No specific chronological records found.'}

=================================================================
END OF FILE
=================================================================`;

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ICA_DOSSIER_${selectedChar.name.replace(/\s+/g, '_').toUpperCase()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Target Directory List with Advanced Search box */}
      <div className="lg:col-span-4 bg-black/40 backdrop-blur-md p-5 rounded-sm border border-white/5 space-y-4">
        
        {/* Search header container */}
        <div className="space-y-3">
          <div className="text-[10px] uppercase font-mono tracking-widest text-slate-500 pb-1 flex items-center justify-between border-b border-white/5">
            <span>INDEXED INTEL DIRECTORY</span>
            <span className="text-[9px] bg-red-950/20 text-red-500 border border-red-900/40 px-1.5 py-0.5 rounded-sm font-mono font-bold uppercase tracking-wider">
              {filteredCharacters.length} RECORDED
            </span>
          </div>

          {/* Interactive Input with Search Icon */}
          <div className="relative">
            <input
              type="text"
              placeholder="Cerca per nome, ruolo o fazione..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                // Auto-select first matching character to prevent blank state
                const nextMatches = masterCharactersList.filter((char) => {
                  const query = e.target.value.toLowerCase();
                  return (
                    char.name.toLowerCase().includes(query) ||
                    char.role.toLowerCase().includes(query) ||
                    char.description.toLowerCase().includes(query)
                  );
                });
                if (nextMatches.length > 0) {
                  setSelectedCharName(nextMatches[0].name);
                }
              }}
              className="w-full bg-black/60 border border-white/10 rounded-sm py-2.5 pl-9 pr-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-600 transition-colors font-mono"
              id="character-search-input"
            />
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
          </div>
        </div>

        {/* List items container */}
        <div className="space-y-2 max-h-[460px] overflow-y-auto no-scrollbar">
          {filteredCharacters.length > 0 ? (
            filteredCharacters.map((char) => {
              const isSelected = char.name === selectedChar.name;
              let alignmentColor = "text-slate-500";
              let alignmentBg = "bg-white/5 border-white/5";
              
              if (char.actorType === "protagonist") {
                alignmentColor = "text-red-500";
                alignmentBg = "bg-red-950/20 border-red-905/40";
              } else if (char.actorType === "ally") {
                alignmentColor = "text-emerald-500";
                alignmentBg = "bg-emerald-950/20 border-emerald-905/40";
              } else if (char.actorType === "antagonist") {
                alignmentColor = "text-amber-500";
                alignmentBg = "bg-amber-950/20 border-amber-905/40";
              } else if (char.actorType === "neutral") {
                alignmentColor = "text-cyan-500";
                alignmentBg = "bg-cyan-950/20 border-cyan-905/40";
              } else if (char.actorType === "target") {
                alignmentColor = "text-orange-500";
                alignmentBg = "bg-orange-950/20 border-orange-900/40";
              }

              return (
                <button
                  key={char.name}
                  onClick={() => setSelectedCharName(char.name)}
                  className={`w-full text-left p-3 rounded-sm transition-all duration-200 border flex items-center justify-between group ${
                    isSelected
                      ? "bg-white/5 border-l-2 border-red-600 border-t-white/10 border-b-transparent border-r-transparent text-white animate-fade-in"
                      : "bg-transparent border-transparent border-l-2 border-l-transparent text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                  id={`char-btn-${char.name.replace(/\s+/g, '-').toLowerCase()}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-sm ${alignmentBg}`}>
                      <User className={`w-4 h-4 ${alignmentColor}`} />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-200 group-hover:text-white transition-colors">
                        {char.name}
                      </h4>
                      <p className="text-[10px] text-slate-500 line-clamp-1 mt-0.5 font-mono">
                        {char.role}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className={`w-3.5 h-3.5 text-red-500 group-hover:translate-x-1 transition-all ${
                    isSelected ? "opacity-100" : "opacity-0"
                  }`} />
                </button>
              );
            })
          ) : (
            <div className="text-center py-8 text-slate-600 font-mono text-xs">
              Nessun record corrispondente nell'archivio.
            </div>
          )}
        </div>
      </div>

      {/* Target dossier card details info */}
      <div className="lg:col-span-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedChar.name}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="bg-black/30 backdrop-blur-md rounded-sm border border-white/5 overflow-hidden"
          >
            {/* Top Banner with Red/Dark Accent */}
            <div className="h-[2px] bg-gradient-to-r from-red-600 to-transparent" />

            {/* Core Profile Dossier Header */}
            <div className="p-6 border-b border-white/5 flex flex-col sm:flex-row justify-between items-start gap-4 bg-white/5">
              <div>
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-[9px] font-mono tracking-widest bg-black/40 border border-white/5 text-slate-500 px-2 py-0.5 rounded-sm uppercase font-bold">
                    PROFILE RECORD // ICA_DB_SECURE
                  </span>
                  
                  {/* Custom Alignment Tags */}
                  {selectedChar.actorType === "protagonist" && (
                    <span className="text-[9px] font-mono tracking-widest bg-red-650 text-white px-2 py-0.5 rounded-sm font-bold uppercase">
                      PROTAGONISTA
                    </span>
                  )}
                  {selectedChar.actorType === "ally" && (
                    <span className="text-[9px] font-mono tracking-widest bg-emerald-600 text-white px-2 py-0.5 rounded-sm font-bold uppercase">
                      ALLEATO CHIAVE
                    </span>
                  )}
                  {selectedChar.actorType === "antagonist" && (
                    <span className="text-[9px] font-mono tracking-widest bg-amber-600 text-white px-2 py-0.5 rounded-sm font-bold uppercase">
                      ANTAGONISTA CORE
                    </span>
                  )}
                  {selectedChar.actorType === "neutral" && (
                    <span className="text-[9px] font-mono tracking-widest bg-cyan-600 text-white px-2 py-0.5 rounded-sm font-bold uppercase">
                      SOGGETTO NEUTRALE
                    </span>
                  )}
                </div>
                
                <h3 className="font-display text-2xl font-black text-white mt-3 uppercase tracking-tight leading-none" id="selected-character-title">
                  {selectedChar.name}
                </h3>
                <p className="text-xs text-red-500 font-mono font-bold uppercase tracking-wider mt-1.5 flex flex-col sm:flex-row gap-2 sm:items-center">
                  <span>ROLE // {selectedChar.role}</span>
                  <span className="hidden sm:inline text-white/20">|</span>
                  <span className={`inline-flex items-center px-1.5 py-0.5 rounded border text-[10px] font-bold tracking-widest ${
                    activeRisk === "Estremo" ? "bg-red-500/10 text-red-500 border-red-500/20" :
                    activeRisk === "Alto" ? "bg-orange-500/10 text-orange-400 border-orange-500/20" :
                    activeRisk === "Medio" ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" :
                    activeRisk === "Basso" ? "bg-green-500/10 text-green-400 border-green-500/20" :
                    "bg-slate-500/10 text-slate-400 border-slate-500/20"
                  }`}>
                    RISCHIO: {activeRisk.toUpperCase()}
                  </span>
                </p>
              </div>
              <button 
                onClick={handleExportDossier} 
                className="flex items-center gap-2 bg-red-950/40 hover:bg-red-900/60 transition-colors border border-red-900/40 text-red-500 px-4 py-2 flex-shrink-0 rounded-sm text-[10px] font-mono tracking-widest uppercase font-bold group"
                title="Scarica Fascicolo ICA come Documento Sicuro"
              >
                <Download className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
                <span>Export Report</span>
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Dossier section 1: Biography summary */}
              <div className="bg-white/5 p-5 rounded-sm border-t border-white/10 relative">
                <div className="flex items-center justify-between mb-2.5">
                  <h5 className="text-[10px] uppercase font-mono tracking-widest text-red-400 flex items-center gap-1.5">
                    <Shield className="w-4 h-4" />
                    Delineamento Biografico & Intelligence
                  </h5>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap" id="dossier-biography-text">
                  {activeDescription}
                </p>
              </div>

              {/* Dossier section 2: Operational dossier details */}
              <div className="bg-white/5 p-5 rounded-sm border-t border-white/10">
                <h5 className="text-[10px] uppercase font-mono tracking-widest text-[#94a3b8]/60 mb-2.5 flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-red-500" />
                  LOGISTICA OPERATIVA & CONFLITTO
                </h5>
                <p className="text-slate-400 text-xs leading-relaxed font-mono whitespace-pre-line" id="dossier-conflict-text">
                  {activeDetails}
                </p>
              </div>

              {/* Character Appearance Chronology Interactive Tracker */}
              <div className="border-t border-white/5 pt-5 space-y-4">
                <h5 className="text-[10px] uppercase font-mono tracking-widest text-red-400 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-red-500" />
                  CRONOLOGIA APPARIZIONI & RUOLO NELLA STORIA
                </h5>
                
                {appearances.length > 0 ? (
                  <div className="space-y-3">
                    {appearances.map((app) => (
                      <div 
                        key={app.chapterId} 
                        className="bg-black/40 rounded-sm border border-white/5 p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-white/10 transition-colors"
                      >
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono font-bold text-red-500 px-1.5 py-0.5 bg-red-950/20 rounded-sm border border-red-900/30">
                              {app.year}
                            </span>
                            <span className="text-xs text-white font-display font-bold uppercase tracking-wide">
                              {app.title}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 leading-relaxed pt-1">
                            {app.role}
                          </p>
                        </div>

                        {/* Jump button to load this era on the timeline */}
                        <button
                          onClick={() => onJumpToChapter(app.chapterId)}
                          className="flex items-center gap-1 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 p-2 rounded-sm text-[10px] uppercase font-mono tracking-widest text-slate-400 transition-colors"
                          title="Naviga a questo capitolo nella Timeline"
                        >
                          <span>Esplora</span>
                          <ExternalLink className="w-3 h-3 text-red-500" />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-xs text-slate-500 italic font-mono bg-black/20 p-4 border border-white/5 rounded-sm">
                    Nessun record cronologico specifico collegato direttamente a questo soggetto. Presenza costante nell'ombra.
                  </div>
                )}
              </div>

              {/* Forensic security clearance status footer */}
              <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-5 text-[10px] font-mono">
                <div>
                  <span className="text-slate-500 block uppercase tracking-wider">CLASSIFICAZIONE SICUREZZA</span>
                  <span className="text-slate-300 uppercase tracking-wide">LIVELLO 5 (ICA RESTRICTED)</span>
                </div>
                <div>
                  <span className="text-slate-500 block uppercase tracking-wider">STATO ATTUALE FILE</span>
                  <span className="text-emerald-500 uppercase tracking-wide font-bold">● COGNITIVE REPORT GENERATED</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
