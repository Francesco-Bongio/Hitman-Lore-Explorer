import { useState } from "react";
import { hitmanDataset } from "./data/hitmanDataset";
import TimelineView from "./components/TimelineView";
import DossierView from "./components/DossierView";
import FathersView from "./components/FathersView";
import AnalyzerView from "./components/AnalyzerView";
import ChatView from "./components/ChatView";

import {
  BookOpen,
  Users,
  Compass,
  Cpu,
  MessageSquare,
  ShieldAlert,
  HelpCircle,
  Clock
} from "lucide-react";

type ActiveTab = "timeline" | "dossiers" | "fathers" | "analyzer" | "chat";

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("timeline");
  const [selectedTimelineId, setSelectedTimelineId] = useState<string>("genesic7");

  return (
    <div className="min-h-screen bg-[#050608] text-slate-300 font-sans flex flex-col justify-between relative overflow-hidden">
      {/* Immersive Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-red-900/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-slate-800/10 blur-[150px]" />
      </div>

      {/* Top Embedded Header */}
      <header className="h-20 border-b border-white/5 bg-black/40 backdrop-blur-md sticky top-0 z-50 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-5">
            {/* Immersive Crosshair Insignia */}
            <div className="w-10 h-10 border-2 border-red-600/80 flex items-center justify-center flex-shrink-0">
              <div className="w-6 h-6 border-t-2 border-l-2 border-red-600 rotate-45 transform translate-x-1 translate-y-1" />
            </div>
            <div>
              <h1 className="font-display font-medium text-lg leading-none tracking-[0.25em] text-white uppercase sm:text-xl">
                ICA ARCHIVE
              </h1>
              <p className="text-[10px] uppercase tracking-widest text-red-500 font-mono font-semibold opacity-90 mt-1">
                AGENT 47 // INTRASTORIA CHRONICLES
              </p>
            </div>
          </div>

          {/* Secure metadata display */}
          <div className="flex items-center gap-4 text-[10px] font-mono uppercase text-slate-500">
            <div className="flex items-center gap-2 bg-white/5 border border-white/5 px-2.5 py-1.5 rounded-sm">
              <Clock className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span>ENCRYPTION: RSA-4096</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/5 px-2.5 py-1.5 rounded-sm">
              <span>LOCATION: Satu Mare</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Body Grid */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-8 z-10 relative">
        {/* Navigation Tabs Menu */}
        <div className="flex flex-wrap gap-2 border-b border-white/5 pb-4">
          {/* Timeline Tab */}
          <button
            onClick={() => setActiveTab("timeline")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-mono font-semibold uppercase tracking-wider border transition-all ${
              activeTab === "timeline"
                ? "bg-white/5 border-l-2 border-red-600 border-t-white/10 border-b-transparent border-r-transparent text-white"
                : "bg-transparent border-transparent text-slate-500 hover:text-slate-300"
            }`}
          >
            <BookOpen className="w-4 h-4 text-red-500" />
            <span>Timeline</span>
          </button>

          {/* Dossiers Tab */}
          <button
            onClick={() => setActiveTab("dossiers")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-mono font-semibold uppercase tracking-wider border transition-all ${
              activeTab === "dossiers"
                ? "bg-white/5 border-l-2 border-red-600 border-t-white/10 border-b-transparent border-r-transparent text-white"
                : "bg-transparent border-transparent text-slate-500 hover:text-slate-300"
            }`}
          >
            <Users className="w-4 h-4 text-red-500" />
            <span>Targets</span>
          </button>

          {/* Five Fathers Tab */}
          <button
            onClick={() => setActiveTab("fathers")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-mono font-semibold uppercase tracking-wider border transition-all ${
              activeTab === "fathers"
                ? "bg-white/5 border-l-2 border-red-600 border-t-white/10 border-b-transparent border-r-transparent text-white"
                : "bg-transparent border-transparent text-slate-500 hover:text-slate-300"
            }`}
          >
            <Compass className="w-4 h-4 text-red-500" />
            <span>I Cinque Padri</span>
          </button>

          {/* Relational Analyzer Tab */}
          <button
            onClick={() => setActiveTab("analyzer")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-mono font-semibold uppercase tracking-wider border transition-all ${
              activeTab === "analyzer"
                ? "bg-white/5 border-l-2 border-red-600 border-t-white/10 border-b-transparent border-r-transparent text-white"
                : "bg-transparent border-transparent text-slate-500 hover:text-slate-300"
            }`}
          >
            <Cpu className="w-4 h-4 text-red-500" />
            <span>Analyzer</span>
          </button>

          {/* Gemini Chat Tab */}
          <button
            onClick={() => setActiveTab("chat")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-mono font-semibold uppercase tracking-wider border transition-all ${
              activeTab === "chat"
                ? "bg-white/5 border-l-2 border-red-600 border-t-white/10 border-b-transparent border-r-transparent text-white"
                : "bg-transparent border-transparent text-slate-500 hover:text-slate-300"
            }`}
          >
            <MessageSquare className="w-4 h-4 text-red-500" />
            <span>Intelligence Chat</span>
          </button>
        </div>

        {/* Conceptual Brief / Introduction panel */}
        {activeTab === "timeline" && (
          <div className="bg-white/5 border border-white/5 p-5 rounded-sm flex flex-col md:flex-row gap-6 items-start">
            <div className="p-3 bg-red-950/20 border border-red-900/30 rounded-sm text-red-500">
              <ShieldAlert className="w-7 h-7" />
            </div>
            <div className="space-y-1.5 flex-1">
              <h2 className="font-display font-bold text-white tracking-[0.1em] text-sm uppercase">
                Introduzione: Fenomenologia e Architettura Narrativa dell'Agente 47
              </h2>
              <p className="text-slate-400 text-xs leading-relaxed max-w-5xl">
                {hitmanDataset.introduction}
              </p>
            </div>
          </div>
        )}

        {/* View Component Switch Router */}
        <div>
          {activeTab === "timeline" && (
            <TimelineView 
              chapters={hitmanDataset.chapters} 
              selectedId={selectedTimelineId}
              onSelectId={setSelectedTimelineId}
            />
          )}
          {activeTab === "dossiers" && (
            <DossierView 
              characters={hitmanDataset.characters} 
              onJumpToChapter={(chapterId) => {
                setSelectedTimelineId(chapterId);
                setActiveTab("timeline");
              }}
            />
          )}
          {activeTab === "fathers" && (
            <FathersView fathers={hitmanDataset.fiveFathers} />
          )}
          {activeTab === "analyzer" && (
            <AnalyzerView />
          )}
          {activeTab === "chat" && (
            <ChatView />
          )}
        </div>
      </main>

      {/* Immersive Noir Footer */}
      <footer className="h-12 bg-black border-t border-white/5 flex items-center px-8 z-20 sticky bottom-0">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-[10px] uppercase tracking-widest text-[#94a3b8]/60 font-mono font-bold">
              Connection Secure - ICA Server 047-9
            </p>
          </div>
          <div className="hidden sm:flex gap-4 text-[9px] text-[#475569] font-mono">
            <span>Lat: 48.8566 N</span>
            <span>Lon: 2.3522 E</span>
            <span>Session: 04h 12m 09s</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
