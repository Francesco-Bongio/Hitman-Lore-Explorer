import { useState } from "react";
import { Sparkles, Play, Command, FileText } from "lucide-react";

export default function AnalyzerView() {
  const entities = [
    "Agente 47",
    "Diana Burnwood",
    "Lucas Grey (Soggetto 6)",
    "Arthur Edwards (La Costante)",
    "Dr. Otto Wolfgang Ort-Meyer",
    "Victoria (Absolution)",
    "Benjamin Travis (ICA corrotto)",
    "Alexander Leland Cayne (Franchise)",
    "Providence (Cabala Globale)",
    "ICA (International Contract Agency)"
  ];

  const [entityA, setEntityA] = useState(entities[0]);
  const [entityB, setEntityB] = useState(entities[1]);
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (entityA === entityB) {
      alert("Seleziona due entità differenti per comparare o studiare la loro relazione!");
      return;
    }

    setLoading(true);
    setReport(null);

    try {
      const response = await fetch("/api/gemini/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemA: entityA, itemB: entityB })
      });

      if (!response.ok) {
        throw new Error("La trasmissione con il Mainframe ICA è fallita.");
      }

      const data = await response.json();
      setReport(data.text);
    } catch (error: any) {
      console.error(error);
      setReport(`[ERRORE DI TRASMISSIONE] Mainframe offline o API non disponibile. \nCausa: ${error.message || "Errore sconosciuto."}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Control Selector Pane */}
      <div className="lg:col-span-4 bg-black/40 backdrop-blur-md p-5 rounded-sm border border-white/5 space-y-6">
        <div className="text-[10px] uppercase font-mono tracking-widest text-slate-500 border-b border-white/5 pb-2">
          SCAN PARAMETERS
        </div>

        {/* Selector A */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block">Soggetto Alfa (A):</label>
          <select
            value={entityA}
            onChange={(e) => setEntityA(e.target.value)}
            className="w-full bg-black/60 border border-white/10 rounded-sm p-3 text-white text-sm focus:outline-none focus:border-red-650 font-mono"
          >
            {entities.map((ent) => (
              <option key={ent} value={ent} disabled={ent === entityB}>
                {ent}
              </option>
            ))}
          </select>
        </div>

        {/* Separator / Vs marker */}
        <div className="flex justify-center">
          <div className="w-8 h-8 rounded-full bg-red-950/20 border border-red-900/40 font-mono text-red-500 text-xs flex items-center justify-center font-bold">
            VS
          </div>
        </div>

        {/* Selector B */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block">Soggetto Beta (B):</label>
          <select
            value={entityB}
            onChange={(e) => setEntityB(e.target.value)}
            className="w-full bg-black/60 border border-white/10 rounded-sm p-3 text-white text-sm focus:outline-none focus:border-red-650 font-mono"
          >
            {entities.map((ent) => (
              <option key={ent} value={ent} disabled={ent === entityA}>
                {ent}
              </option>
            ))}
          </select>
        </div>

        {/* Launch Button */}
        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="w-full bg-red-600 hover:bg-red-700 disabled:bg-white/5 disabled:text-slate-650 text-white font-bold py-3 px-4 rounded-sm flex items-center justify-center gap-2 transition-colors duration-200 border border-red-900/45 tracking-widest uppercase text-[10px]"
        >
          {loading ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>SCANNING MAINFRAME...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              <span>GENERATE INTEL SCAN</span>
            </>
          )}
        </button>
      </div>

      {/* Analysis Output Pane */}
      <div className="lg:col-span-8 space-y-4">
        {loading ? (
          <div className="bg-black/40 backdrop-blur-md border border-white/5 rounded-sm p-8 flex flex-col items-center justify-center min-h-[340px] text-center space-y-4">
            <div className="w-12 h-12 border-4 border-red-900/30 border-t-red-600 rounded-full animate-spin" />
            <div className="space-y-1">
              <h4 className="font-display font-medium text-white uppercase text-sm font-mono tracking-widest animate-pulse">
                SCANSIONE MAINFRAME IN CORSO...
              </h4>
              <p className="text-xs text-slate-500 font-mono max-w-sm mt-2">
                Connessione all'archivio biologico ICA. Correlazione clinica tra {entityA} e {entityB}.
              </p>
            </div>
          </div>
        ) : report ? (
          <div className="bg-black/30 backdrop-blur-md border border-white/5 rounded-sm overflow-hidden min-h-[340px]">
            {/* Header Document Tab */}
            <div className="bg-white/5 px-6 py-4 border-b border-white/5 flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-widest text-red-500 font-bold flex items-center gap-1.5 uppercase">
                <FileText className="w-3.5 h-3.5" />
                INTELLIGENCE DIAGNOSTICS GENERATED
              </span>
              <span className="text-[9px] font-mono uppercase bg-black/60 px-2 py-0.5 rounded-sm text-slate-400 border border-white/5 font-bold tracking-widest">
                STATUS: COMPILED
              </span>
            </div>
            
            {/* Text details content */}
            <div className="p-6 text-slate-300 text-xs leading-relaxed font-sans space-y-4 whitespace-pre-wrap max-h-[500px] overflow-y-auto">
              {report}
            </div>
          </div>
        ) : (
          <div className="bg-black/40 backdrop-blur-md border border-white/5 rounded-sm p-8 flex flex-col items-center justify-center min-h-[340px] text-center space-y-4">
            <Command className="w-10 h-10 text-slate-750" />
            <h4 className="font-display font-bold text-slate-400 text-xs font-mono uppercase tracking-widest">
              Awaiting Scan Request
            </h4>
            <p className="text-slate-500 text-xs max-w-sm leading-relaxed">
              Seleziona due soggetti o organizzazioni della saga di Hitman dal menu laterale e clicca per avviare il calcolo delle connessioni ed eventi correlati.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
