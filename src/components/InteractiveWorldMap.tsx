import { useState, useMemo } from "react";
import { ChapterInfo } from "../data/hitmanDataset";
import { MapPin, Target, Eye, Shield, Radio, Layers, Search, Compass, Info, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface InteractiveWorldMapProps {
  chapters: ChapterInfo[];
  selectedChapterId: string;
  onSelectChapterId: (id: string) => void;
}

interface MapLocationPin {
  id: string;
  name: string;
  x: number; // Percent or coordinate in absolute viewbox width = 800
  y: number; // Coordinate in absolute viewbox height = 400
  countryCode: string;
  description: string;
}

// Preset precision coordinates for core locations
const LOCATION_PINS: MapLocationPin[] = [
  { id: "romania", name: "Satu Mare (Romania)", x: 460, y: 125, countryCode: "RO", description: "Sito sotterraneo del Manicomio di Satu Mare e dei Monti Carpazi. Sede centrale della clonazione genetica di Ort-Meyer." },
  { id: "hong_kong", name: "Hong Kong", x: 645, y: 185, countryCode: "HK", description: "Distretto fortificato della Triade Red Dragon controllata da Lee Hong." },
  { id: "colombia", name: "Colombia", x: 180, y: 275, countryCode: "CO", description: "Fitta giungla amazzonica e fattoria fortificata del barone della droga Pablo Belisario Ochoa." },
  { id: "budapest", name: "Budapest (Ungheria)", x: 450, y: 120, countryCode: "HU", description: "Hotel Gellert di lusso. Teatro del tentato attentato atomico indotto da Frantz Fuchs." },
  { id: "rotterdam", name: "Rotterdam (Paesi Bassi)", x: 410, y: 110, countryCode: "NL", description: "Banchine portuali e cargo container legati alle operazioni d'armi pesanti di Arkadij Jegorov." },
  { id: "sicilia_sapienza", name: "Sicilia / Sapienza (Italia)", x: 435, y: 145, countryCode: "IT", description: "Monastero della redenzione e laboratori biologici sotterranei costieri di contenimento genetico." },
  { id: "san_pietroburgo", name: "San Pietroburgo (Russia)", x: 480, y: 92, countryCode: "RU", description: "Punto di incontro militare ad alta scorta. Caccia al colonnello in cospirazione con Sergei Zavorotko." },
  { id: "giappone", name: "Giappone (Hokkaido)", x: 710, y: 140, countryCode: "JP", description: "Clinica iper-tecnologica GAMA di chirurgia rigenerativa d'elite." },
  { id: "malesia", name: "Malesia (Kuala Lumpur)", x: 650, y: 228, countryCode: "MY", description: "Torri Petrona con server hacker sotterranei protetti da crittografia simmetrica." },
  { id: "afghanistan", name: "Afghanistan", x: 550, y: 155, countryCode: "AF", description: "Presidi militari desertici e negoziazioni sotterranee di armamenti." },
  { id: "india", name: "Mumbai (India)", x: 585, y: 185, countryCode: "IN", description: "Slum e set cinematografici controllati da fazioni del boss criminale della malavita indiana." },
  { id: "parigi", name: "Parigi (Francia)", x: 405, y: 122, countryCode: "FR", description: "Palais de Walewska. Sfilate di moda e database operativi segreti spia del network IAGO." },
  { id: "siberia", name: "Siberia (Russia)", x: 590, y: 80, countryCode: "RU", description: "Prigione militare russa e base d'estrazione in condizioni atmosferiche ostili." },
  { id: "new_orleans", name: "New Orleans (Louisiana)", x: 155, y: 155, countryCode: "US", description: "Affollato Carnevale di New Orleans. Terreno operativo contro i corvi del Franchise." },
  { id: "rockies", name: "Rocky Mountains (USA)", x: 115, y: 135, countryCode: "US", description: "Studio di ripresa e quartier generale privato di sicurezza difensiva." },
  { id: "washington_chicago", name: "Washington D.C. / Chicago (USA)", x: 155, y: 135, countryCode: "US", description: "La Casa Bianca, distretto di Hope (South Dakota) e l'edificio vetrato a Chicago." },
  { id: "dartmoor", name: "Dartmoor (Inghilterra)", x: 395, y: 110, countryCode: "GB", description: "Maniero storico Thornbridge. Sede di Alexa Carlisle e tragica scomparsa di Lucas Grey." },
  { id: "marrakesh", name: "Marrakesh (Marocco)", x: 380, y: 172, countryCode: "MA", description: "Mercati affollati e consolato svedese barricato durante tentativi di colpo di stato militare." },
  { id: "miami", name: "Miami (Florida)", x: 165, y: 168, countryCode: "US", description: "Pista ad alta velocità del Gran Premio di automobilismo e laboratori di robotica di Kronstadt." },
  { id: "maldive", name: "Maldive (Haven)", x: 630, y: 250, countryCode: "MV", description: "Resort esclusivo Haven Island di sanificazione d'identità per magnati latitanti." },
  { id: "dubai", name: "Dubai (EAU)", x: 535, y: 175, countryCode: "AE", description: "Il grattacielo più alto del mondo Scepter. Santuario di lusso per i Partner fondatori di Providence." },
  { id: "berlino", name: "Berlino (Germania)", x: 430, y: 112, countryCode: "DE", description: "Club underground sconsacrato nella foresta berlinese. Scontro mortale contro 11 agenti ICA." },
  { id: "chongqing", name: "Chongqing (Cina)", x: 640, y: 170, countryCode: "CN", description: "Metropoli sotterranea cibernetica ricoperta di luci al neon. Archivio dati ICA centrale." },
  { id: "mendoza", name: "Mendoza (Argentina)", x: 200, y: 340, countryCode: "AR", description: "Vigneto di lusso e cantina blindata della società segreta Herald di Providence." }
];

// Connection mapper matching chapters based on location substrings
function getChapterLocations(chapter: ChapterInfo): MapLocationPin[] {
  const result: MapLocationPin[] = [];
  chapter.locations.forEach((locName) => {
    const searchString = locName.toLowerCase();
    
    if (searchString.includes("romania") || searchString.includes("carpazi")) {
      const pin = LOCATION_PINS.find(p => p.id === "romania");
      if (pin) result.push(pin);
    }
    if (searchString.includes("hong kong")) {
      const pin = LOCATION_PINS.find(p => p.id === "hong_kong");
      if (pin) result.push(pin);
    }
    if (searchString.includes("colombia")) {
      const pin = LOCATION_PINS.find(p => p.id === "colombia");
      if (pin) result.push(pin);
    }
    if (searchString.includes("budapest")) {
      const pin = LOCATION_PINS.find(p => p.id === "budapest");
      if (pin) result.push(pin);
    }
    if (searchString.includes("rotterdam")) {
      const pin = LOCATION_PINS.find(p => p.id === "rotterdam");
      if (pin) result.push(pin);
    }
    if (searchString.includes("sicilia") || searchString.includes("italia") || searchString.includes("sapienza")) {
      const pin = LOCATION_PINS.find(p => p.id === "sicilia_sapienza");
      if (pin) result.push(pin);
    }
    if (searchString.includes("pietroburgo") || searchString.includes("russia")) {
      const pin = LOCATION_PINS.find(p => p.id === "san_pietroburgo");
      if (pin) result.push(pin);
    }
    if (searchString.includes("giappone") || searchString.includes("hokkaido")) {
      const pin = LOCATION_PINS.find(p => p.id === "giappone");
      if (pin) result.push(pin);
    }
    if (searchString.includes("malesia")) {
      const pin = LOCATION_PINS.find(p => p.id === "malesia");
      if (pin) result.push(pin);
    }
    if (searchString.includes("afghanistan") || searchString.includes("india") || searchString.includes("mumbai")) {
      const pinName = searchString.includes("mumbai") || searchString.includes("india") ? "india" : "afghanistan";
      const pin = LOCATION_PINS.find(p => p.id === pinName);
      if (pin) result.push(pin);
    }
    if (searchString.includes("parigi") || searchString.includes("francia")) {
      const pin = LOCATION_PINS.find(p => p.id === "parigi");
      if (pin) result.push(pin);
    }
    if (searchString.includes("siberia")) {
      const pin = LOCATION_PINS.find(p => p.id === "siberia");
      if (pin) result.push(pin);
    }
    if (searchString.includes("new orleans")) {
      const pin = LOCATION_PINS.find(p => p.id === "new_orleans");
      if (pin) result.push(pin);
    }
    if (searchString.includes("rocky") || searchString.includes("mountains")) {
      const pin = LOCATION_PINS.find(p => p.id === "rockies");
      if (pin) result.push(pin);
    }
    if (searchString.includes("washington") || searchString.includes("chicago") || searchString.includes("dakota") || searchString.includes("hope") || searchString.includes("casa bianca")) {
      const pin = LOCATION_PINS.find(p => p.id === "washington_chicago");
      if (pin) result.push(pin);
    }
    if (searchString.includes("dartmoor") || searchString.includes("cornovaglia") || searchString.includes("inghilterra")) {
      const pin = LOCATION_PINS.find(p => p.id === "dartmoor");
      if (pin) result.push(pin);
    }
    if (searchString.includes("marrakesh") || searchString.includes("marocco")) {
      const pin = LOCATION_PINS.find(p => p.id === "marrakesh");
      if (pin) result.push(pin);
    }
    if (searchString.includes("miami")) {
      const pin = LOCATION_PINS.find(p => p.id === "miami");
      if (pin) result.push(pin);
    }
    if (searchString.includes("maldive") || searchString.includes("haven")) {
      const pin = LOCATION_PINS.find(p => p.id === "maldive");
      if (pin) result.push(pin);
    }
    if (searchString.includes("dubai")) {
      const pin = LOCATION_PINS.find(p => p.id === "dubai");
      if (pin) result.push(pin);
    }
    if (searchString.includes("berlino") || searchString.includes("germania")) {
      const pin = LOCATION_PINS.find(p => p.id === "berlino");
      if (pin) result.push(pin);
    }
    if (searchString.includes("chongqing") || searchString.includes("cina")) {
      const pin = LOCATION_PINS.find(p => p.id === "chongqing");
      if (pin) result.push(pin);
    }
    if (searchString.includes("mendoza") || searchString.includes("argentina")) {
      const pin = LOCATION_PINS.find(p => p.id === "mendoza");
      if (pin) result.push(pin);
    }
  });

  // Deduplicate pins
  return Array.from(new Set(result.map(r => r.id)))
    .map(id => LOCATION_PINS.find(p => p.id === id)!)
    .filter(Boolean);
}

// Map a location pin to chapters that contain it
function getChaptersForPin(pinId: string, chapters: ChapterInfo[]): ChapterInfo[] {
  return chapters.filter((chapter) => {
    const pinsInCh = getChapterLocations(chapter);
    return pinsInCh.some((p) => p.id === pinId);
  });
}

export default function InteractiveWorldMap({ chapters, selectedChapterId, onSelectChapterId }: InteractiveWorldMapProps) {
  const [hoveredPin, setHoveredPin] = useState<MapLocationPin | null>(null);
  const [selectedPin, setSelectedPin] = useState<MapLocationPin | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const activeChapter = useMemo(() => {
    return chapters.find((c) => c.id === selectedChapterId) || chapters[0];
  }, [chapters, selectedChapterId]);

  // All active pins for the selected chapter
  const activeChapterPins = useMemo(() => {
    return getChapterLocations(activeChapter);
  }, [activeChapter]);

  // Handle pin click
  const handlePinClick = (pin: MapLocationPin) => {
    setSelectedPin(pin);
    const linkedChapters = getChaptersForPin(pin.id, chapters);
    if (linkedChapters.length > 0) {
      // Auto transition to the first linked chapter if not currently selected
      const isAlreadySelected = linkedChapters.some(c => c.id === selectedChapterId);
      if (!isAlreadySelected) {
        onSelectChapterId(linkedChapters[0].id);
      }
    }
  };

  // Search through location database
  const filteredPins = useMemo(() => {
    if (!searchTerm) return LOCATION_PINS;
    const query = searchTerm.toLowerCase();
    return LOCATION_PINS.filter(
      pin => pin.name.toLowerCase().includes(query) || pin.description.toLowerCase().includes(query)
    );
  }, [searchTerm]);

  return (
    <div className="bg-black/40 backdrop-blur-md p-6 rounded-sm border border-white/5 space-y-6 animate-fade-in" id="interactive-world-map-root">
      
      {/* Top Header Panel */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/5 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setSelectedPin(null);
                setSearchTerm("");
              }}
              className={`p-1 rounded-sm border cursor-pointer transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-1 ${
                selectedPin || searchTerm
                  ? "bg-amber-950/40 border-amber-600/80 text-amber-500 hover:bg-amber-900/40 hover:border-amber-400 animate-pulse"
                  : "bg-red-950/40 border-red-900/40 text-red-500 hover:bg-red-900/40 hover:border-red-500"
              }`}
              title="Azzera selezione e ricerca della mappa"
              id="reset-satellite-compass"
            >
              <Compass className="w-4 h-4 animate-spin-slow" />
            </button>
            <span className="text-[10px] font-mono tracking-widest text-slate-550 uppercase font-bold flex items-center gap-2">
              <span>SYSTEM SATELLITE INTERCEPT // WORLD RECON</span>
              {(selectedPin || searchTerm) && (
                <span className="text-[8px] bg-amber-950/30 text-amber-500 border border-amber-900/30 px-1 py-0.5 rounded-sm animate-pulse font-normal">
                  FILTRO ATTIVO (FARE CLIC PER RESETTARE)
                </span>
              )}
            </span>
          </div>
          <h3 className="font-display text-lg font-black text-white uppercase tracking-tight mt-1">
            Visualizzatore Geopolitico dei Bersagli
          </h3>
          <p className="text-xs text-slate-400 font-mono mt-0.5">
            Mappa radar interattiva. Fai clic sui punti di interesse o seleziona un capitolo per tracciare le coordinate e gli obiettivi ICA.
          </p>
        </div>

        {/* Location Search Bar */}
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Cerca area operativa..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-black/60 border border-white/10 rounded-sm py-1.5 pl-8 pr-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-600 transition-colors font-mono"
            id="map-location-search"
          />
          <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Interactive SVG Radar Screen */}
        <div className="lg:col-span-8 bg-[#040609] border border-white/5 rounded-sm overflow-hidden relative group/map p-2">
          
          {/* Tactical Overlay Details */}
          <div className="absolute top-4 left-4 z-10 pointer-events-none font-mono text-[9px] text-[#475569] space-y-0.5 select-none">
            <div className="flex items-center gap-1.5">
              <Radio className="w-2.5 h-2.5 text-red-600 animate-pulse" />
              <span className="text-slate-400 font-bold uppercase tracking-widest">SATELLITE ACC-TRACK // ACTIVE</span>
            </div>
            <div>RADAR RANGE: 12,000KM</div>
            <div>LAT/LONG: AUTO_CALIBRATION_ICA</div>
          </div>

          <div className="absolute top-4 right-4 z-10 pointer-events-none font-mono text-[9px] text-red-500 font-extrabold select-none bg-red-950/20 border border-red-900/30 px-2 py-0.5 rounded-sm">
            ERA ATTUALE: {activeChapter.year}
          </div>

          {/* SVG Map Container */}
          <div className="relative w-full aspect-[2/1] bg-black/40 overflow-hidden">
            <svg 
              viewBox="0 0 800 400" 
              className="w-full h-full text-slate-800"
              style={{ filter: "drop-shadow(0px 0px 8px rgba(0,0,0,0.5))" }}
            >
              {/* Grid System Background */}
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
                </pattern>
                <radialGradient id="satelliteGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(239, 68, 68, 0.15)" />
                  <stop offset="100%" stopColor="rgba(239, 68, 68, 0)" />
                </radialGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Grid Coordinate Indexes */}
              <line x1="100" y1="0" x2="100" y2="400" stroke="rgba(255, 255, 255, 0.05)" strokeDasharray="3,3" />
              <line x1="200" y1="0" x2="200" y2="400" stroke="rgba(255, 255, 255, 0.05)" strokeDasharray="3,3" />
              <line x1="300" y1="0" x2="300" y2="400" stroke="rgba(255, 255, 255, 0.05)" strokeDasharray="3,3" />
              <line x1="400" y1="0" x2="400" y2="400" stroke="rgba(255, 255, 255, 0.07)" strokeWidth="1" />
              <line x1="500" y1="0" x2="500" y2="400" stroke="rgba(255, 255, 255, 0.05)" strokeDasharray="3,3" />
              <line x1="600" y1="0" x2="600" y2="400" stroke="rgba(255, 255, 255, 0.05)" strokeDasharray="3,3" />
              <line x1="700" y1="0" x2="700" y2="400" stroke="rgba(255, 255, 255, 0.05)" strokeDasharray="3,3" />

              <line x1="0" y1="100" x2="800" y2="100" stroke="rgba(255, 255, 255, 0.05)" strokeDasharray="3,3" />
              <line x1="0" y1="200" x2="800" y2="200" stroke="rgba(255, 255, 255, 0.07)" strokeWidth="1" />
              <line x1="0" y1="300" x2="800" y2="300" stroke="rgba(255, 255, 255, 0.05)" strokeDasharray="3,3" />

              {/* Stylized Tech Continents Wireframe Vectors */}
              <g className="fill-none stroke-slate-800/60" strokeWidth="1.5">
                {/* North America */}
                <path d="M 25,65 Q 35,50 45,55 L 60,62 L 80,58 L 100,45 L 115,48 L 135,35 L 160,38 L 175,50 L 178,65 L 160,68 L 155,75 L 185,82 L 200,90 L 215,88 L 225,100 L 220,118 L 208,122 L 212,138 L 218,154 L 212,168 L 192,165 L 180,182 L 170,205 L 158,215 L 148,225 L 142,242 L 135,232 L 136,220 L 128,210 L 126,198 L 115,195 L 110,182 L 100,165 L 94,142 L 80,135 L 75,120 L 62,118 L 54,95 L 35,88 Z" fill="rgba(255, 255, 255, 0.015)" />
                {/* South America */}
                <path d="M 142,242 Q 150,240 168,240 L 185,248 L 205,255 L 222,268 L 235,285 L 238,300 L 228,320 L 218,342 L 205,365 L 195,385 L 182,395 L 175,390 L 178,375 L 175,360 L 162,342 L 155,320 L 150,295 L 138,280 L 132,268 L 136,255 Z" fill="rgba(255, 255, 255, 0.015)" />
                {/* Greenland */}
                <path d="M 215,35 L 235,25 L 255,22 L 268,32 L 265,45 L 255,52 L 242,50 L 225,48 Z" fill="rgba(255, 255, 255, 0.01)" />
                {/* Eurasia (Europe + Asia) */}
                <path d="M 365,148 L 362,132 L 380,120 L 392,118 L 400,105 L 395,95 L 402,88 L 412,80 L 418,65 L 428,52 L 442,55 L 448,72 L 442,88 L 455,85 L 470,92 L 485,82 L 500,85 L 535,72 L 575,68 L 610,65 L 660,68 L 710,75 L 755,85 L 778,98 L 782,112 L 768,125 L 755,142 L 748,165 L 735,182 L 702,198 L 682,215 L 668,235 L 648,245 L 638,230 L 642,218 L 638,205 L 648,195 L 630,190 L 610,195 L 595,215 L 585,218 L 578,202 L 572,188 L 555,185 L 542,205 L 522,218 L 512,210 L 516,195 L 502,185 L 472,175 L 454,170 L 450,158 L 455,148 L 435,142 L 420,148 L 412,142 L 398,155 L 382,150 Z" fill="rgba(255, 255, 255, 0.02)" />
                {/* Africa */}
                <path d="M 365,150 L 390,152 L 420,158 L 442,168 L 452,175 L 455,188 L 470,195 L 485,212 L 505,225 L 512,242 L 498,272 L 490,298 L 482,328 L 472,345 L 458,358 L 445,348 L 448,332 L 438,318 L 425,305 L 418,285 L 410,270 L 398,252 L 388,235 L 382,218 L 366,212 L 358,198 L 345,188 L 348,175 L 358,162 Z" fill="rgba(255, 255, 255, 0.015)" />
                {/* Australia */}
                <path d="M 665,295 L 690,285 L 712,282 L 735,278 L 748,288 L 758,305 L 750,328 L 732,335 L 712,332 L 692,328 L 672,318 Z" fill="rgba(255, 255, 255, 0.015)" />
                
                {/* Auxiliary Key Islands for Visual Enrichment */}
                {/* British Isles */}
                <path d="M 385,100 L 392,92 L 398,96 L 394,105 L 388,104 Z" fill="rgba(255, 255, 255, 0.015)" />
                {/* Japan */}
                <path d="M 718,128 L 725,134 L 728,145 L 725,154 L 715,148 L 712,136 Z" fill="rgba(255, 255, 255, 0.015)" />
                {/* Madagascar */}
                <path d="M 505,302 L 512,312 L 508,328 L 498,322 Z" fill="rgba(255, 255, 255, 0.015)" />
                {/* Iceland */}
                <path d="M 315,62 L 325,58 L 332,64 L 324,68 Z" fill="rgba(255, 255, 255, 0.015)" />
              </g>

              {/* Selected Chapter Operational Area Connections (Pulsing Center Circles) */}
              {activeChapterPins.map((pin) => (
                <g key={`glow-${pin.id}`}>
                  {/* Subtle Radar Ring sweep to active targets */}
                  <circle 
                    cx={pin.x} 
                    cy={pin.y} 
                    r="35" 
                    fill="url(#satelliteGlow)" 
                    className="animate-pulse"
                  />
                  <circle 
                    cx={pin.x} 
                    cy={pin.y} 
                    r="16" 
                    fill="none" 
                    stroke="rgba(239,68,68,0.2)" 
                    strokeWidth="1" 
                    className="animate-ping"
                    style={{ animationDuration: "3s" }}
                  />
                </g>
              ))}

              {/* Dynamic Coordinate Target Connection Lines (Visual Grid Tracking) */}
              {selectedPin && (
                <g>
                  <line 
                    x1="0" y1={selectedPin.y} x2="800" y2={selectedPin.y} 
                    stroke="rgba(239, 68, 68, 0.15)" strokeWidth="0.8" strokeDasharray="4,4" 
                  />
                  <line 
                    x1={selectedPin.x} y1="0" x2={selectedPin.x} y2="400" 
                    stroke="rgba(239, 68, 68, 0.15)" strokeWidth="0.8" strokeDasharray="4,4" 
                  />
                </g>
              )}

              {/* Render Location Pins */}
              {filteredPins.map((pin) => {
                const isActiveInChapter = activeChapterPins.some((activePin) => activePin.id === pin.id);
                const isSelected = selectedPin?.id === pin.id;
                
                let pinColor = "rgba(100, 116, 139, 0.6)"; // Slate non-active
                let size = 4;
                let ringColor = "rgba(100, 116, 139, 0.2)";

                if (isActiveInChapter) {
                  pinColor = "rgb(239, 68, 68)"; // Bright neon red
                  size = 6.5;
                  ringColor = "rgba(239, 68, 68, 0.4)";
                } else if (isSelected) {
                  pinColor = "rgb(244, 180, 26)"; // Amber gold selection
                  size = 6;
                  ringColor = "rgba(244, 180, 26, 0.4)";
                }

                return (
                  <g 
                    key={pin.id}
                    className="cursor-pointer transition-transform duration-300"
                    onClick={() => handlePinClick(pin)}
                    onMouseEnter={() => setHoveredPin(pin)}
                    onMouseLeave={() => setHoveredPin(null)}
                  >
                    {/* Ring background */}
                    <circle 
                      cx={pin.x} 
                      cy={pin.y} 
                      r={size + 5} 
                      fill="none" 
                      stroke={ringColor} 
                      strokeWidth="1" 
                      className={`transition-all ${isActiveInChapter ? "animate-pulse" : ""}`}
                    />

                    {/* Outer core circle indicator */}
                    <circle 
                      cx={pin.x} 
                      cy={pin.y} 
                      r={size} 
                      fill={pinColor} 
                      className="transition-all"
                      style={{ filter: isSelected || isActiveInChapter ? "drop-shadow(0px 0px 4px rgb(239, 68, 68))" : "none" }}
                    />

                    {/* Tiny Center Dot */}
                    <circle cx={pin.x} cy={pin.y} r="1.5" fill="white" />

                    {/* Tooltip text anchor label for active / hovered locations */}
                    {(isActiveInChapter || isSelected || hoveredPin?.id === pin.id) && (
                      <g>
                        {/* Background panel */}
                        <rect 
                          x={pin.x + 10} 
                          y={pin.y - 12} 
                          width={140} 
                          height="20" 
                          rx="2" 
                          fill="rgba(4, 6, 9, 0.9)" 
                          stroke={isActiveInChapter ? "rgba(239, 68, 68, 0.4)" : "rgba(255,255,255,0.1)"} 
                          strokeWidth="1" 
                        />
                        <text 
                          x={pin.x + 16} 
                          y={pin.y + 1} 
                          fill="white" 
                          fontSize="9" 
                          fontFamily="Inter, sans-serif" 
                          fontWeight="bold"
                        >
                          {pin.name.split(" (")[0]}
                        </text>
                        {/* Interactive mini arrow */}
                        <polyline 
                          points={`${pin.x + 6},${pin.y} ${pin.x + 10},${pin.y - 3} ${pin.x + 10},${pin.y + 3}`} 
                          fill="rgba(4, 6, 9, 0.9)"
                        />
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Glowing sweep horizontal scanning laser overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-650/5 to-transparent h-1.5 w-full -translate-y-full group-hover/map:animate-scanner pointer-events-none z-10" />
          </div>
        </div>

        {/* Right Target / Mission Dossier Card Column */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Active Location Detail Panel */}
          <div className="bg-black/60 border border-white/5 rounded-sm p-4 relative overflow-hidden">
            <h5 className="text-[10px] uppercase font-mono tracking-widest text-slate-500 mb-2 border-b border-white/5 pb-1 flex items-center justify-between">
              <span>SELECTED THEATRE COORDINATES</span>
              <span className="text-zinc-500 font-bold">INFO_BOX</span>
            </h5>

            <AnimatePresence mode="wait">
              {selectedPin ? (
                <motion.div
                  key={selectedPin.id}
                  initial={{ opacity: 0, x: 5 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -5 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-4"
                >
                  <div className="flex gap-2.5 items-center">
                    <span className="text-[10px] font-mono font-bold bg-amber-950/20 text-amber-500 border border-amber-900/40 px-2 py-0.5 rounded-sm">
                      {selectedPin.countryCode}
                    </span>
                    <h4 className="font-display font-black text-white text-sm uppercase tracking-wide">
                      {selectedPin.name}
                    </h4>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {selectedPin.description}
                  </p>

                  {/* Linked saga chapters from database */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#94a3b8]/60 block font-bold">
                      CAPITOLI CORRELATI NELLA STORIA:
                    </span>
                    {getChaptersForPin(selectedPin.id, chapters).map((ch) => (
                      <button
                        key={ch.id}
                        onClick={() => {
                          onSelectChapterId(ch.id);
                          // Scroll to the top of the timeline to see the result
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`w-full cursor-pointer text-left p-2 rounded-sm border text-xs font-mono transition-all flex items-center justify-between ${
                          ch.id === selectedChapterId
                            ? "bg-red-950/20 border-red-950 text-red-400"
                            : "bg-black/40 border-white/5 text-slate-400 hover:text-white hover:border-white/10"
                        }`}
                        id={`linked-ch-[${ch.id}]`}
                      >
                        <div className="truncate pr-2">
                          <span className="text-[10px] text-slate-500 pr-1">{ch.year}:</span>
                          <span>{ch.gameTitle}</span>
                        </div>
                        <span className="p-0.5 bg-white/5 rounded text-[8px] uppercase tracking-wider font-extrabold text-slate-400">Vedi</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <div className="py-12 text-center text-slate-500 font-mono text-xs space-y-3">
                  <Info className="w-8 h-8 text-slate-600 mx-auto opacity-55 animate-pulse" />
                  <p>Fai clic su un indicatore o su un bersaglio della mappa per caricare l'analisi geografica delle operazioni d'epoca.</p>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* List of active targets inside the active chapter */}
          <div className="bg-black/60 border border-white/5 rounded-sm p-4">
            <h5 className="text-[10px] uppercase font-mono tracking-widest text-red-500 mb-3 border-b border-white/5 pb-1.5 flex items-center justify-between font-bold">
              <span>BERSAGLI CHIAVE IN QUESTO CAPITOLO</span>
              <span className="text-[9px] bg-red-950/30 font-bold border border-red-900/40 px-1.5 rounded-sm">{activeChapter.keyTargets.length} TARGETS</span>
            </h5>

            {activeChapter.keyTargets.length > 0 ? (
              <div className="space-y-1.5 max-h-[180px] overflow-y-auto no-scrollbar">
                {activeChapter.keyTargets.map((target, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 p-2 bg-gradient-to-r from-red-950/10 to-transparent border-l border-red-900/30 text-xs font-mono text-slate-300"
                  >
                    <Target className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                    <span className="text-white font-bold">{target}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 text-slate-500 font-mono text-xs italic">
                Nessun target registrato per questo capitolo d'origine. Operazioni segrete d'infanzia o fughe.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
