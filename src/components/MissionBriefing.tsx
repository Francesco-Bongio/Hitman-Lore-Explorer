import { useState, useMemo, useEffect } from "react";
import { ChapterInfo } from "../data/hitmanDataset";
import { 
  CHAPTER_MISSIONS_DB, 
  MissionBriefingData,
  TacticalApproach, 
  TacticalLoadoutItem 
} from "../data/missionBriefings";
import { 
  Target, 
  Shield, 
  Crosshair, 
  CheckCircle2, 
  Circle, 
  Radio, 
  Volume2, 
  VolumeX, 
  Copy, 
  Check, 
  Download, 
  Eye, 
  Briefcase, 
  ChevronRight, 
  ChevronLeft,
  Lock,
  Compass,
  Search,
  MapPin,
  Layers
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { exportMissionBriefingPDF } from "../utils/pdfExport";

interface MissionBriefingProps {
  chapter: ChapterInfo;
  onExportPDF?: () => void;
}

export default function MissionBriefing({ chapter }: MissionBriefingProps) {
  const chapterMissions: MissionBriefingData[] = useMemo(() => {
    return CHAPTER_MISSIONS_DB[chapter.id] || CHAPTER_MISSIONS_DB["codename47"];
  }, [chapter.id]);

  // Distinct sub-games inside this chapter (e.g. Contracts vs Blood Money, or H1 / H2 / H3)
  const subGames = useMemo(() => {
    const unique = Array.from(new Set(chapterMissions.map(m => m.gameSubtitle)));
    return unique;
  }, [chapterMissions]);

  const [selectedSubGame, setSelectedSubGame] = useState<string>("ALL");
  const [missionSearch, setMissionSearch] = useState<string>("");
  const [selectedMissionId, setSelectedMissionId] = useState<string>(chapterMissions[0]?.missionId || "");
  const [selectedApproachId, setSelectedApproachId] = useState<string>("silent_assassin");
  const [completedObjectives, setCompletedObjectives] = useState<Record<string, boolean>>({});
  const [copiedCode, setCopiedCode] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeItemDetail, setActiveItemDetail] = useState<TacticalLoadoutItem | null>(null);

  // Reset mission selection and filters when chapter changes
  useEffect(() => {
    setSelectedSubGame("ALL");
    setMissionSearch("");
    if (chapterMissions.length > 0) {
      setSelectedMissionId(chapterMissions[0].missionId);
      setSelectedApproachId(chapterMissions[0].approaches[0]?.id || "silent_assassin");
    }
    setActiveItemDetail(null);
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    }
  }, [chapter.id, chapterMissions]);

  // Filtered missions by sub-game and search term
  const filteredMissions = useMemo(() => {
    return chapterMissions.filter(m => {
      const matchesGame = selectedSubGame === "ALL" || m.gameSubtitle === selectedSubGame;
      const q = missionSearch.trim().toLowerCase();
      if (!q) return matchesGame;
      const matchesQuery =
        m.missionTitle.toLowerCase().includes(q) ||
        m.primaryLocation.toLowerCase().includes(q) ||
        m.targetsSummary.some(t => t.toLowerCase().includes(q)) ||
        m.operationCodename.toLowerCase().includes(q);
      return matchesGame && matchesQuery;
    });
  }, [chapterMissions, selectedSubGame, missionSearch]);

  // Active selected mission
  const activeMission: MissionBriefingData = useMemo(() => {
    return (
      chapterMissions.find(m => m.missionId === selectedMissionId) ||
      filteredMissions[0] ||
      chapterMissions[0]
    );
  }, [chapterMissions, filteredMissions, selectedMissionId]);

  const activeMissionIndex = useMemo(() => {
    return chapterMissions.findIndex(m => m.missionId === activeMission.missionId);
  }, [chapterMissions, activeMission]);

  // Ensure selectedApproachId exists on activeMission
  const activeApproach: TacticalApproach = useMemo(() => {
    return (
      activeMission.approaches.find(a => a.id === selectedApproachId) ||
      activeMission.approaches[0]
    );
  }, [activeMission, selectedApproachId]);

  const handleSelectMission = (mission: MissionBriefingData) => {
    setSelectedMissionId(mission.missionId);
    setSelectedApproachId(mission.approaches[0]?.id || "silent_assassin");
    setActiveItemDetail(null);
    if (typeof window !== "undefined" && "speechSynthesis" in window && isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    }
  };

  const handlePrevMission = () => {
    if (activeMissionIndex > 0) {
      handleSelectMission(chapterMissions[activeMissionIndex - 1]);
    }
  };

  const handleNextMission = () => {
    if (activeMissionIndex < chapterMissions.length - 1) {
      handleSelectMission(chapterMissions[activeMissionIndex + 1]);
    }
  };

  // Toggle objective completed in interactive checklist
  const toggleObjective = (id: string) => {
    setCompletedObjectives(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Calculate Silent Assassin rating based on completed objectives for THIS mission
  const totalObjectives = activeMission.contractObjectives.length;
  const completedCount = activeMission.contractObjectives.filter(o => completedObjectives[o.id]).length;
  const completionPercentage = totalObjectives > 0 ? Math.round((completedCount / totalObjectives) * 100) : 0;

  // Copy operation code
  const handleCopyCode = () => {
    navigator.clipboard.writeText(
      `${activeMission.missionTitle} (${activeMission.operationCodename}) | ${activeMission.handler} | Location: ${activeMission.primaryLocation}`
    );
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Synthetic Audio Briefing Simulation using browser speech synthesis
  const toggleAudioBriefing = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(activeMission.briefingTranscript);
      utterance.rate = 0.95;
      utterance.pitch = 0.9;
      const voices = window.speechSynthesis.getVoices();
      const itVoice = voices.find(v => v.lang.startsWith("it"));
      if (itVoice) {
        utterance.voice = itVoice;
      }
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
    }
  };

  // Handle PDF Export for the specific selected mission
  const handleExportBriefingPDF = () => {
    exportMissionBriefingPDF(activeMission, chapter, activeApproach);
  };

  return (
    <div className="space-y-6" id={`mission-briefing-${chapter.id}`}>
      {/* MISSION SELECTOR PANEL (PER-MISSION NAVIGATION) */}
      <div className="bg-black/50 border border-white/10 rounded-sm p-4 space-y-3.5 backdrop-blur-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-red-500">
              <Layers className="w-4 h-4" />
              <span>ARCHIVIO CONTRATTI // MISSIONI DI "{chapter.gameTitle}"</span>
            </div>
            <p className="text-[11px] text-slate-400 font-serif italic mt-0.5">
              Seleziona la singola missione ({chapterMissions.length} missioni catalogate) per aprire il relativo briefing, loadout e obiettivi.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* Search missions */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={missionSearch}
                onChange={(e) => setMissionSearch(e.target.value)}
                placeholder="Cerca missione o target..."
                className="bg-black/60 border border-white/10 focus:border-red-600/60 rounded-sm pl-8 pr-3 py-1.5 text-[11px] font-mono text-white placeholder:text-slate-600 focus:outline-none w-48 sm:w-56"
              />
            </div>

            {/* Prev / Next mission arrows */}
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrevMission}
                disabled={activeMissionIndex <= 0}
                className="p-1.5 bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none border border-white/10 rounded-sm text-slate-300 transition-colors"
                title="Missione Precedente"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleNextMission}
                disabled={activeMissionIndex >= chapterMissions.length - 1}
                className="p-1.5 bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none border border-white/10 rounded-sm text-slate-300 transition-colors"
                title="Missione Successiva"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Sub-Game Filter Bar (shown when chapter spans multiple games, e.g. Contracts/Blood Money or WoA Trilogy) */}
        {subGames.length > 1 && (
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500 mr-1">
              FILTRA GIOCO:
            </span>
            <button
              onClick={() => setSelectedSubGame("ALL")}
              className={`px-2.5 py-1 rounded-sm text-[10px] font-mono uppercase transition-colors border ${
                selectedSubGame === "ALL"
                  ? "bg-red-650 text-white border-red-500 font-bold"
                  : "bg-black/50 text-slate-400 hover:text-white border-white/10"
              }`}
            >
              Tutti ({chapterMissions.length})
            </button>
            {subGames.map(sg => {
              const count = chapterMissions.filter(m => m.gameSubtitle === sg).length;
              const isSelected = selectedSubGame === sg;
              return (
                <button
                  key={sg}
                  onClick={() => setSelectedSubGame(sg)}
                  className={`px-2.5 py-1 rounded-sm text-[10px] font-mono uppercase transition-colors border ${
                    isSelected
                      ? "bg-red-650 text-white border-red-500 font-bold"
                      : "bg-black/50 text-slate-400 hover:text-white border-white/10"
                  }`}
                >
                  {sg} ({count})
                </button>
              );
            })}
          </div>
        )}

        {/* Scrollable Mission Grid */}
        {filteredMissions.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-64 overflow-y-auto pr-1 custom-scrollbar">
            {filteredMissions.map(mission => {
              const isSelected = mission.missionId === activeMission.missionId;
              const missionObjTotal = mission.contractObjectives.length;
              const missionObjDone = mission.contractObjectives.filter(o => completedObjectives[o.id]).length;
              const isMissionComplete = missionObjTotal > 0 && missionObjDone === missionObjTotal;

              return (
                <button
                  key={mission.missionId}
                  onClick={() => handleSelectMission(mission)}
                  id={`select-mission-${mission.missionId}`}
                  className={`text-left p-2.5 rounded-sm border transition-all duration-150 flex flex-col justify-between gap-1.5 group ${
                    isSelected
                      ? "bg-red-950/35 border-red-600 shadow-[0_0_12px_rgba(220,38,38,0.2)]"
                      : "bg-black/50 border-white/10 hover:border-white/25 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 w-full">
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-sm ${
                        isSelected ? "bg-red-650 text-white" : "bg-white/5 text-slate-400"
                      }`}>
                        M{mission.missionNumber}
                      </span>
                      {subGames.length > 1 && (
                        <span className="text-[8.5px] font-mono uppercase text-slate-500 truncate max-w-[115px]">
                          {mission.gameSubtitle.replace("Hitman: ", "").replace("Hitman ", "H")}
                        </span>
                      )}
                    </div>

                    {isMissionComplete ? (
                      <span className="text-[8.5px] font-mono text-emerald-400 flex items-center gap-0.5 font-bold">
                        <CheckCircle2 className="w-3 h-3" /> 100%
                      </span>
                    ) : (
                      <span className={`text-[8.5px] font-mono px-1 rounded-sm ${
                        mission.threatAssessment === "MASSIMO"
                          ? "text-red-400"
                          : mission.threatAssessment === "CRITICO"
                            ? "text-amber-400"
                            : "text-slate-500"
                      }`}>
                        {mission.targetsSummary.length} {mission.targetsSummary.length === 1 ? "Target" : "Target"}
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className={`font-display font-bold text-xs leading-tight line-clamp-1 ${
                      isSelected ? "text-white" : "text-slate-200 group-hover:text-white"
                    }`}>
                      {mission.missionTitle}
                    </h4>
                    <p className="text-[9.5px] font-mono text-slate-500 line-clamp-1 mt-0.5 flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5 text-red-500/80 flex-shrink-0" />
                      <span className="truncate">{mission.primaryLocation}</span>
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-6 text-xs font-mono text-slate-500 bg-black/30 rounded-sm border border-white/5">
            Nessuna missione trovata per "{missionSearch}".
          </div>
        )}
      </div>

      {/* ACTIVE MISSION BRIEFING DETAILS */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeMission.missionId}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18 }}
          className="space-y-6"
        >
          {/* TOP CLASSIFIED BANNER */}
          <div className="bg-[#080303]/90 border border-red-900/40 rounded-sm p-5 relative overflow-hidden backdrop-blur-md shadow-[0_4px_24px_rgba(220,38,38,0.06)]">
            <div className="absolute inset-0 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
            
            {/* High-tech top line */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-red-950/60 pb-3 relative z-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" />
                </span>
                <span className="font-mono text-[10px] tracking-widest uppercase font-bold text-red-500">
                  BRIEFING MISSIONE {activeMission.missionNumber}/{String(chapterMissions.length).padStart(2, '0')}
                </span>
                <span className="text-white/20 font-mono text-[10px]">|</span>
                <span className="font-mono text-[10px] tracking-wider text-slate-400 uppercase">
                  {activeMission.icaClassification}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 hover:bg-white/10 text-slate-300 text-[10px] font-mono rounded-sm border border-white/10 transition-colors"
                  title="Copia Dati Operativi"
                >
                  {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-400" />}
                  <span>{copiedCode ? "Copiato" : "Copia Codice"}</span>
                </button>

                <button
                  onClick={handleExportBriefingPDF}
                  className="flex items-center gap-1.5 px-3 py-1 bg-red-950/50 hover:bg-red-900/60 text-red-400 text-[10px] font-mono font-bold rounded-sm border border-red-900/50 transition-colors shadow-sm"
                  title="Esporta Dossier Tattico PDF di questa Missione"
                >
                  <Download className="w-3 h-3" />
                  <span>Esporta Briefing PDF</span>
                </button>
              </div>
            </div>

            {/* Mission Title, Codename & Handler Info */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-start relative z-10">
              <div className="md:col-span-8 space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono tracking-widest text-red-500/90 uppercase font-bold">
                    {activeMission.gameSubtitle} // {activeMission.operationCodename}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-red-950/40 text-red-400 border border-red-900/40 font-bold">
                    {activeMission.threatAssessment} THREAT
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-black tracking-wide uppercase text-white leading-tight">
                  {activeMission.missionTitle}
                </h3>
                <p className="text-xs text-slate-400 flex items-center gap-1.5 font-mono pt-1">
                  <Compass className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                  <span>Teatro Operativo: <strong className="text-white font-medium">{activeMission.primaryLocation}</strong></span>
                </p>

                {/* Primary Targets Summary */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1.5">
                  <span className="text-[9px] font-mono uppercase text-slate-500 mr-1">BERSAGLI CHIAVE:</span>
                  {activeMission.targetsSummary.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-red-950/30 text-red-300 border border-red-900/40 font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-4 bg-black/40 p-3 rounded-sm border border-white/5 space-y-1.5 font-mono text-[10px]">
                <div className="flex justify-between items-center text-slate-500 border-b border-white/5 pb-1 gap-2">
                  <span>HANDLER:</span>
                  <span className="text-red-400 font-bold text-right">{activeMission.handler}</span>
                </div>
                <div className="flex justify-between items-center text-slate-500 border-b border-white/5 pb-1">
                  <span>AGENTE ASSEGNATO:</span>
                  <span className="text-white font-bold">AGENT 47</span>
                </div>
                <div className="flex justify-between items-center text-slate-500">
                  <span>PROTOCOLLO SILENT:</span>
                  <span className="text-emerald-400 font-bold">ATTIVO (5/5 STARS)</span>
                </div>
              </div>
            </div>

            {/* Transcript with Audio Playback Simulation */}
            <div className="mt-4 pt-3 border-t border-red-950/40 relative z-10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                  <Radio className="w-3 h-3 text-red-500" />
                  BRIEFING OPERATIVO // TRASMISSIONE CRITTOGRAFATA
                </span>
                <button
                  onClick={toggleAudioBriefing}
                  className={`flex items-center gap-1.5 px-2 py-0.5 rounded text-[9px] font-mono transition-colors ${
                    isPlayingAudio 
                      ? "bg-red-650 text-white font-bold animate-pulse" 
                      : "bg-white/5 hover:bg-white/10 text-slate-400"
                  }`}
                >
                  {isPlayingAudio ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3 text-red-500" />}
                  <span>{isPlayingAudio ? "Interrompi Sintesi" : "Ascolta Briefing"}</span>
                </button>
              </div>
              <div className="bg-black/50 p-3.5 rounded-sm border border-white/5 border-l-2 border-l-red-600 font-mono text-xs leading-relaxed text-slate-300 italic">
                "{activeMission.briefingTranscript}"
              </div>
            </div>
          </div>

          {/* SECTION 1: LOADOUT SUGGESTIONS */}
          <div className="bg-black/40 backdrop-blur-md rounded-sm border border-white/5 p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-3">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-red-500">
                  <Briefcase className="w-4 h-4" />
                  <span>LOADOUT CONSIGLIATO // {activeMission.missionTitle}</span>
                </div>
                <p className="text-[11px] text-slate-400 font-serif italic mt-0.5">
                  Dotazione tattica ottimale per completare questa specifica missione con approccio Silent Assassin o Infiltrazione.
                </p>
              </div>

              {/* Tactical Doctrine Selector Buttons */}
              <div className="flex flex-wrap gap-1.5 bg-black/60 p-1 rounded-sm border border-white/10">
                {activeMission.approaches.map(approach => {
                  const isSelected = approach.id === activeApproach.id;
                  return (
                    <button
                      key={approach.id}
                      onClick={() => {
                        setSelectedApproachId(approach.id);
                        setActiveItemDetail(null);
                      }}
                      className={`px-3 py-1.5 rounded-sm text-[10px] font-mono tracking-wider uppercase transition-all duration-200 flex items-center gap-1.5 ${
                        isSelected
                          ? "bg-red-650 text-white font-bold shadow-sm"
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {approach.id === "silent_assassin" && <Shield className="w-3 h-3" />}
                      {approach.id === "tactical_infiltrator" && <Eye className="w-3 h-3" />}
                      {approach.id === "precision_sniper" && <Crosshair className="w-3 h-3" />}
                      <span>{approach.title.split(" (")[0]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Doctrine Sub-Header */}
            <div className="bg-white/5 p-3 rounded-sm border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-sm bg-red-950/60 text-red-400 border border-red-900/50 font-bold uppercase tracking-widest">
                  {activeApproach.badge}
                </span>
                <p className="text-xs text-slate-300 font-mono mt-1.5">
                  {activeApproach.description}
                </p>
              </div>
              <div className="text-right sm:flex-shrink-0">
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block">ABITO / TRAVESTIMENTO CHIAVE:</span>
                <span className="text-[11px] font-mono text-white font-semibold">{activeApproach.recommendedSuit}</span>
              </div>
            </div>

            {/* Loadout Slots Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
              {activeApproach.loadout.map((item, idx) => {
                const isDetailActive = activeItemDetail?.id === item.id;
                return (
                  <motion.div
                    key={item.id}
                    layout
                    onClick={() => setActiveItemDetail(isDetailActive ? null : item)}
                    className={`p-3.5 rounded-sm border transition-all duration-200 cursor-pointer relative group flex flex-col justify-between ${
                      isDetailActive 
                        ? "bg-red-950/20 border-red-600 shadow-[0_0_12px_rgba(220,38,38,0.2)]" 
                        : "bg-[#0b0c10]/80 border-white/10 hover:border-red-900/60 hover:bg-white/5"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[9px] font-mono uppercase tracking-wider text-red-500 font-bold">
                          SLOT {idx + 1} // {item.categoryLabel}
                        </span>
                        <span className={`text-[8.5px] font-mono px-1.5 py-0.5 rounded-sm uppercase font-semibold ${
                          item.concealment === "Non Rilevabile"
                            ? "bg-emerald-950/60 text-emerald-400 border border-emerald-900/50"
                            : item.concealment === "Occultabile"
                              ? "bg-amber-950/60 text-amber-400 border border-amber-900/50"
                              : "bg-red-950/60 text-red-400 border border-red-900/50"
                        }`}>
                          {item.concealment}
                        </span>
                      </div>

                      <h5 className="font-display font-bold text-sm text-white group-hover:text-red-400 transition-colors">
                        {item.name}
                      </h5>

                      <p className="text-slate-400 text-[11px] mt-1.5 font-mono line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-slate-500">
                      <div className="flex items-center gap-1.5">
                        {item.silenced && (
                          <span className="text-emerald-400 font-bold">SILENZIATA</span>
                        )}
                        <span>•</span>
                        <span className="text-slate-400">{item.lethality}</span>
                      </div>
                      <span className="text-red-500 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                        Consiglio Tattico <ChevronRight className="w-2.5 h-2.5" />
                      </span>
                    </div>

                    {isDetailActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 pt-2.5 border-t border-red-900/40 text-[11px] font-mono text-amber-200/90 bg-black/60 p-2 rounded-sm"
                      >
                        <strong className="text-red-400 block mb-0.5 uppercase text-[9px] tracking-wider">
                          CONSIGLIO DELL'HANDLER:
                        </strong>
                        {item.tacticalTip}
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* SECTION 2: CONTRACT OBJECTIVES & INTERACTIVE CHECKLIST */}
          <div className="bg-black/40 backdrop-blur-md rounded-sm border border-white/5 p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-3">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-red-500">
                  <Target className="w-4 h-4" />
                  <span>OBIETTIVI DI CONTRATTO // {activeMission.missionTitle}</span>
                </div>
                <p className="text-[11px] text-slate-400 font-serif italic mt-0.5">
                  Spunta ciascun obiettivo per tracciare il completamento della missione.
                </p>
              </div>

              {/* Rating Progress Pill */}
              <div className="flex items-center gap-3 bg-black/60 px-3 py-1.5 rounded-sm border border-white/10 font-mono text-[10px]">
                <span className="text-slate-400">RATING SILENT ASSASSIN:</span>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`text-xs ${i < Math.max(1, Math.round((completedCount / (totalObjectives || 1)) * 5)) ? "text-red-500 font-bold" : "text-slate-700"}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-white font-bold pl-1">
                  {completedCount}/{totalObjectives} ({completionPercentage}%)
                </span>
              </div>
            </div>

            {/* Objectives List */}
            <div className="space-y-3">
              {activeMission.contractObjectives.map((obj, i) => {
                const isCompleted = !!completedObjectives[obj.id];

                return (
                  <div
                    key={obj.id}
                    onClick={() => toggleObjective(obj.id)}
                    className={`p-4 rounded-sm border transition-all duration-200 cursor-pointer group ${
                      isCompleted
                        ? "bg-red-950/15 border-red-900/60 opacity-90"
                        : "bg-[#08090d]/80 border-white/10 hover:border-white/20 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleObjective(obj.id);
                        }}
                        className="mt-0.5 text-slate-500 group-hover:text-red-500 transition-colors focus:outline-none flex-shrink-0"
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-5 h-5 text-red-500 fill-red-950" />
                        ) : (
                          <Circle className="w-5 h-5 text-slate-600 group-hover:text-red-500" />
                        )}
                      </button>

                      <div className="flex-1 space-y-1.5">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-sm bg-black text-red-400 border border-red-900/40 uppercase">
                              OBJ {String(i + 1).padStart(2, '0')} // {obj.typeLabel}
                            </span>
                            <span className={`text-[8.5px] font-mono px-1.5 py-0.5 rounded-sm uppercase font-semibold ${
                              obj.priority === "CRITICA"
                                ? "bg-red-650 text-white"
                                : obj.priority === "PRIMARIA"
                                  ? "bg-red-950 text-red-300 border border-red-800"
                                  : "bg-slate-800 text-slate-300"
                            }`}>
                              PRIORITÀ: {obj.priority}
                            </span>
                          </div>

                          <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                            <Compass className="w-3 h-3 text-red-500" />
                            {obj.location}
                          </span>
                        </div>

                        <h4 className={`font-display font-bold text-sm tracking-wide ${isCompleted ? "line-through text-slate-500" : "text-white group-hover:text-red-400 transition-colors"}`}>
                          {obj.targetOrTask}
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
                          <div className="bg-black/40 p-2 rounded-sm border border-white/5 text-slate-300">
                            <span className="text-red-400 text-[9px] uppercase font-bold block mb-0.5">
                              METODO RACCOMANDATO / OPPORTUNITÀ:
                            </span>
                            {obj.recommendedMethod}
                          </div>

                          <div className="bg-black/40 p-2 rounded-sm border border-white/5 text-slate-400 italic">
                            <span className="text-slate-500 text-[9px] uppercase font-bold not-italic block mb-0.5">
                              NOTE DI INTELLIGENCE:
                            </span>
                            {obj.intelNotes}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION 3: SILENT ASSASSIN PROTOCOLS & EXTRACTION POINTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/40 backdrop-blur-md rounded-sm border border-white/5 p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-red-500 border-b border-white/5 pb-2">
                <Lock className="w-3.5 h-3.5" />
                <span>PARAMETRI SILENT ASSASSIN // REGOLE D'INGAGGIO</span>
              </div>
              <ul className="space-y-2 font-mono text-xs text-slate-300">
                {activeMission.silentAssassinRules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-white/5 p-2 rounded-sm border border-white/5">
                    <span className="text-red-500 font-bold select-none">•</span>
                    <span className="leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black/40 backdrop-blur-md rounded-sm border border-white/5 p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-red-500 border-b border-white/5 pb-2">
                <Compass className="w-3.5 h-3.5" />
                <span>PUNTI DI ESFILTRAZIONE RACCOMANDATI</span>
              </div>
              <div className="space-y-2.5">
                {activeMission.extractionPoints.map(point => (
                  <div key={point.id} className="bg-white/5 p-3 rounded-sm border border-white/5 space-y-1 font-mono text-xs">
                    <div className="flex items-center justify-between">
                      <h6 className="font-bold text-white flex items-center gap-1.5">
                        <ChevronRight className="w-3 h-3 text-red-500" />
                        {point.name}
                      </h6>
                      <span className={`text-[9px] px-1.5 py-0.5 rounded-sm uppercase font-bold ${
                        point.riskLevel === "Basso"
                          ? "bg-emerald-950/60 text-emerald-400 border border-emerald-900/40"
                          : "bg-amber-950/60 text-amber-400 border border-amber-900/40"
                      }`}>
                        Rischio: {point.riskLevel}
                      </span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      {point.description}
                    </p>
                    {point.requiresItem && (
                      <span className="text-[10px] text-amber-400 block pt-0.5">
                        Requisito: {point.requiresItem}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
