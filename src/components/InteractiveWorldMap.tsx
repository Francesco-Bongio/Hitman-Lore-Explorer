import { useState, useMemo, useRef, MouseEvent, WheelEvent } from "react";
import { ChapterInfo } from "../data/hitmanDataset";
import { 
  Target, 
  Radio, 
  Search, 
  Compass, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Crosshair, 
  Globe2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { 
  WORLD_LAND_PATH, 
  WORLD_BORDERS_PATH, 
  WORLD_GRATICULE_PATH, 
  COUNTRIES_LIST, 
  projectCoordinates, 
  invertCoordinates, 
  formatCoordinates, 
  createFlightArc,
  MAP_WIDTH, 
  MAP_HEIGHT 
} from "../utils/worldGeoData";

interface InteractiveWorldMapProps {
  chapters: ChapterInfo[];
  selectedChapterId: string;
  onSelectChapterId: (id: string) => void;
}

export interface MapLocationPin {
  id: string;
  name: string;
  countryCode: string;
  countryName: string;
  lon: number;
  lat: number;
  x: number;
  y: number;
  latLonStr: string;
  description: string;
  threatLevel: "CRITICO" | "ELEVATO" | "CLASSIFICATO" | "NEUTRALIZZATO";
  tacticalCode: string;
}

// Preset precision coordinates for core Hitman saga locations across the world
const RAW_PINS: Omit<MapLocationPin, "x" | "y" | "latLonStr">[] = [
  { 
    id: "romania", 
    name: "Satu Mare (Romania)", 
    countryCode: "RO", 
    countryName: "Romania", 
    lon: 22.88, 
    lat: 47.79, 
    description: "Sito sotterraneo del Sanatorio di Satu Mare. Laboratori genetici segreti del Dr. Ort-Meyer dove venne concepito e clonato l'Agente 47.",
    threatLevel: "CLASSIFICATO",
    tacticalCode: "ICA-ZONE // ORIGIN-01"
  },
  { 
    id: "carpazi", 
    name: "Monti Carpazi (Romania)", 
    countryCode: "RO", 
    countryName: "Romania", 
    lon: 25.50, 
    lat: 46.50, 
    description: "Treno blindato di Providence in transito lungo le cime innevate dei Monti Carpazi. Atto conclusivo contro Arthur Edwards (La Costante).",
    threatLevel: "CRITICO",
    tacticalCode: "ICA-ZONE // TRAIN-FINALE"
  },
  { 
    id: "hong_kong", 
    name: "Hong Kong", 
    countryCode: "HK", 
    countryName: "Hong Kong", 
    lon: 114.17, 
    lat: 22.32, 
    description: "Quartieri fortificati della Triade Red Dragon, ristorante galleggiante e quartier generale del boss mafioso Lee Hong.",
    threatLevel: "CRITICO",
    tacticalCode: "ICA-ZONE // TRIAD-HK"
  },
  { 
    id: "colombia", 
    name: "Santa Maria (Colombia)", 
    countryCode: "CO", 
    countryName: "Colombia", 
    lon: -74.29, 
    lat: 4.57, 
    description: "Fitta giungla pluviale, piantagioni di coca e laboratori fortificati del cartello criminale Delgado / Pablo Belisario Ochoa.",
    threatLevel: "CRITICO",
    tacticalCode: "ICA-ZONE // DELGADO-CO"
  },
  { 
    id: "budapest", 
    name: "Budapest (Ungheria)", 
    countryCode: "HU", 
    countryName: "Ungheria", 
    lon: 19.04, 
    lat: 47.50, 
    description: "Hotel Gellért di lusso sul Danubio. Teatro dell'attentato terroristico chimico/nucleare sventato contro il terrorista Frantz Fuchs.",
    threatLevel: "ELEVATO",
    tacticalCode: "ICA-ZONE // GELLERT-HU"
  },
  { 
    id: "rotterdam", 
    name: "Rotterdam (Paesi Bassi)", 
    countryCode: "NL", 
    countryName: "Paesi Bassi", 
    lon: 4.48, 
    lat: 51.92, 
    description: "Banchine industriali portuali e cargo mercantile militare. Rete del contrabbando di testate nucleari di Arkadij Jegorov.",
    threatLevel: "CRITICO",
    tacticalCode: "ICA-ZONE // DOCKS-NL"
  },
  { 
    id: "sicilia_sapienza", 
    name: "Sicilia / Sapienza (Italia)", 
    countryCode: "IT", 
    countryName: "Italia", 
    lon: 14.30, 
    lat: 38.60, 
    description: "Santuario di Gontranno e borgo costiero di Sapienza. Villa Caruso e biolaboratorio sotterraneo di Ether Biotech per il DNA-virus.",
    threatLevel: "CRITICO",
    tacticalCode: "ICA-ZONE // ETHER-MED"
  },
  { 
    id: "san_pietroburgo", 
    name: "San Pietroburgo (Russia)", 
    countryCode: "RU", 
    countryName: "Russia", 
    lon: 30.36, 
    lat: 59.93, 
    description: "Piazza del Palazzo d'Inverno e complessi militari scortati. Rete di generali corrotti in cospirazione con il boss mafioso Sergei Zavorotko.",
    threatLevel: "CRITICO",
    tacticalCode: "ICA-ZONE // BALTIC-RU"
  },
  { 
    id: "giappone", 
    name: "Hokkaido (Giappone)", 
    countryCode: "JP", 
    countryName: "Giappone", 
    lon: 141.35, 
    lat: 43.06, 
    description: "Clinica iper-tecnologica privata GAMA e castello montano di Hayamoto. Chirurgia robotica guidata da IA e intrighi di Erich Soders.",
    threatLevel: "CRITICO",
    tacticalCode: "ICA-ZONE // GAMA-HOKK"
  },
  { 
    id: "malesia", 
    name: "Kuala Lumpur (Malesia)", 
    countryCode: "MY", 
    countryName: "Malesia", 
    lon: 101.69, 
    lat: 3.14, 
    description: "Torri Petronas. Centri informatici di cyber-hacker e furto di algoritmi crittografici di Charlie Sidjan.",
    threatLevel: "ELEVATO",
    tacticalCode: "ICA-ZONE // PETRONAS-KL"
  },
  { 
    id: "afghanistan", 
    name: "Nuristan (Afghanistan)", 
    countryCode: "AF", 
    countryName: "Afghanistan", 
    lon: 69.21, 
    lat: 34.56, 
    description: "Basi fortificate nel deserto montuoso e commercio illecito di armamenti atomici e mercenari.",
    threatLevel: "ELEVATO",
    tacticalCode: "ICA-ZONE // NURISTAN-AF"
  },
  { 
    id: "india", 
    name: "Mumbai (India)", 
    countryCode: "IN", 
    countryName: "India", 
    lon: 72.88, 
    lat: 19.08, 
    description: "Slum sovraffollati, lavanderie industriali e grattacielo cinematografico di Dawood Rangan, la regina dei treni Vanya Shah e il Corvo del Maelstrom.",
    threatLevel: "CRITICO",
    tacticalCode: "ICA-ZONE // MAELSTROM-IN"
  },
  { 
    id: "parigi", 
    name: "Parigi (Francia)", 
    countryCode: "FR", 
    countryName: "Francia", 
    lon: 2.35, 
    lat: 48.86, 
    description: "Palais de Walewska. Sfilata di moda Sanguine e asta segreta spia del network IAGO guidato da Viktor Novikov e Dalia Margolis.",
    threatLevel: "CRITICO",
    tacticalCode: "ICA-ZONE // IAGO-PARIS"
  },
  { 
    id: "siberia", 
    name: "Siberia (Russia)", 
    countryCode: "RU", 
    countryName: "Russia", 
    lon: 105.32, 
    lat: 61.52, 
    description: "Complesso penitenziario militare Perm-14 in condizioni climatiche estreme nell'inverno artico.",
    threatLevel: "ELEVATO",
    tacticalCode: "ICA-ZONE // PERM-SIB"
  },
  { 
    id: "new_orleans", 
    name: "New Orleans (USA)", 
    countryCode: "US", 
    countryName: "Stati Uniti", 
    lon: -90.07, 
    lat: 29.95, 
    description: "Parata del Carnevale Mardi Gras nelle strade del quartiere francese. Caccia alla cellula di sicari 'I Corvi' del Franchise.",
    threatLevel: "CRITICO",
    tacticalCode: "ICA-ZONE // CROWS-NOLA"
  },
  { 
    id: "rockies", 
    name: "Rocky Mountains / Colorado (USA)", 
    countryCode: "US", 
    countryName: "Stati Uniti", 
    lon: -104.99, 
    lat: 39.74, 
    description: "Fattoria-milizia paramilitare addestrata da Sean Rose e Maya Parvati. Avamposto di guerriglia della Shadow Client.",
    threatLevel: "CRITICO",
    tacticalCode: "ICA-ZONE // MILITIA-CO"
  },
  { 
    id: "washington_chicago", 
    name: "Washington D.C. / Chicago (USA)", 
    countryCode: "US", 
    countryName: "Stati Uniti", 
    lon: -77.04, 
    lat: 38.91, 
    description: "Sedi federali, Casa Bianca contro Mark Parchezzi III, e complessi di Dexter Industries nel Midwest americano.",
    threatLevel: "CRITICO",
    tacticalCode: "ICA-ZONE // WHITEHOUSE-DC"
  },
  { 
    id: "dartmoor", 
    name: "Dartmoor (Inghilterra)", 
    countryCode: "GB", 
    countryName: "Regno Unito", 
    lon: -3.92, 
    lat: 50.57, 
    description: "Tenuta aristocratica Thornbridge Manor. Ritiro segreto di Alexa Carlisle e tragica scomparsa di Lucas Grey.",
    threatLevel: "CRITICO",
    tacticalCode: "ICA-ZONE // CARLISLE-UK"
  },
  { 
    id: "marrakesh", 
    name: "Marrakesh (Marocco)", 
    countryCode: "MA", 
    countryName: "Marocco", 
    lon: -7.98, 
    lat: 31.63, 
    description: "Piazze della Medina gremite e Consolato svedese assediato. Tentato golpe militare del Generale Reza Zaydan e banchiere Claus Strandberg.",
    threatLevel: "CRITICO",
    tacticalCode: "ICA-ZONE // GOLPE-MARR"
  },
  { 
    id: "miami", 
    name: "Miami (USA)", 
    countryCode: "US", 
    countryName: "Stati Uniti", 
    lon: -80.19, 
    lat: 25.76, 
    description: "Autodromo ad alta velocità del Global Innovation Race e laboratori di intelligenza artificiale militare della Kronstadt di Robert e Sierra Knox.",
    threatLevel: "CRITICO",
    tacticalCode: "ICA-ZONE // KRONSTADT-FL"
  },
  { 
    id: "maldive", 
    name: "Maldive (Haven Island)", 
    countryCode: "MV", 
    countryName: "Maldive", 
    lon: 73.51, 
    lat: 4.18, 
    description: "Arcipelago tropicale e resort ultra-esclusivo per la cancellazione e alterazione biografica di magnati e criminali latitanti.",
    threatLevel: "CLASSIFICATO",
    tacticalCode: "ICA-ZONE // HAVEN-DATA"
  },
  { 
    id: "dubai", 
    name: "Dubai (EAU)", 
    countryCode: "AE", 
    countryName: "Emirati Arabi Uniti", 
    lon: 55.27, 
    lat: 25.20, 
    description: "Inaugurazione nei piani più alti del grattacielo 'The Scepter'. Infiltrazione per neutralizzare Marcus Stuyvesant e Carl Ingram.",
    threatLevel: "CRITICO",
    tacticalCode: "ICA-ZONE // SCEPTER-DXB"
  },
  { 
    id: "berlino", 
    name: "Berlino (Germania)", 
    countryCode: "DE", 
    countryName: "Germania", 
    lon: 13.41, 
    lat: 52.52, 
    description: "Centrale elettrica sconsacrata convertita nel rave-club 'Club Hölle'. Imboscata di 11 sicari dell'agenzia ICA sulle tracce dell'Agente 47.",
    threatLevel: "CRITICO",
    tacticalCode: "ICA-ZONE // HOLLE-BER"
  },
  { 
    id: "chongqing", 
    name: "Chongqing (Cina)", 
    countryCode: "CN", 
    countryName: "Cina", 
    lon: 106.91, 
    lat: 29.43, 
    description: "Metropoli pluviale illuminata da insegne al neon. Centro archivio dati e calcolo cognitivo segreto dell'ICA controllato da Hush e Imogen Royce.",
    threatLevel: "CLASSIFICATO",
    tacticalCode: "ICA-ZONE // ARCHIVE-CQ"
  },
  { 
    id: "mendoza", 
    name: "Mendoza (Argentina)", 
    countryCode: "AR", 
    countryName: "Argentina", 
    lon: -68.85, 
    lat: -32.89, 
    description: "Vigneto di lusso e cantina blindata della famiglia Yates. Summit degli Araldi di Providence e ballo con Diana Burnwood.",
    threatLevel: "CRITICO",
    tacticalCode: "ICA-ZONE // HERALD-MDZ"
  },
  { 
    id: "bangkok", 
    name: "Bangkok (Thailandia)", 
    countryCode: "TH", 
    countryName: "Thailandia", 
    lon: 100.50, 
    lat: 13.76, 
    description: "Lussuoso Himmapan Hotel sul fiume Chao Phraya. Studio di registrazione del musicista Jordan Cross e avvocato Ken Morgan.",
    threatLevel: "ELEVATO",
    tacticalCode: "ICA-ZONE // HIMMAPAN-BKK"
  },
  { 
    id: "hawkes_bay", 
    name: "Hawke's Bay (Nuova Zelanda)", 
    countryCode: "NZ", 
    countryName: "Nuova Zelanda", 
    lon: 176.91, 
    lat: -39.49, 
    description: "Residenza balneare isolata e protetta da sistemi di allarme laser di Alma Reynard.",
    threatLevel: "ELEVATO",
    tacticalCode: "ICA-ZONE // REYNARD-NZ"
  },
  { 
    id: "isle_of_sgail", 
    name: "Isle of Sgàil (Nord Atlantico)", 
    countryCode: "GB", 
    countryName: "Regno Unito", 
    lon: -5.00, 
    lat: 58.50, 
    description: "Castello fortificato in mezzo all'oceano artico. Raduno massonico dell'Ark Society e sorelle Washington.",
    threatLevel: "CRITICO",
    tacticalCode: "ICA-ZONE // SQAIL-ATL"
  }
];

// Computed list with accurate SVG projected coordinates and formatted DMS strings
export const LOCATION_PINS: MapLocationPin[] = RAW_PINS.map((pin) => {
  const [x, y] = projectCoordinates(pin.lon, pin.lat);
  const { latStr, lonStr } = formatCoordinates(pin.lon, pin.lat);
  return {
    ...pin,
    x: Number(x.toFixed(1)),
    y: Number(y.toFixed(1)),
    latLonStr: `${latStr}, ${lonStr}`
  };
});

// Match chapter locations from dataset text to pins
function getChapterLocations(chapter: ChapterInfo): MapLocationPin[] {
  const matched = new Set<string>();

  (chapter.locations || []).forEach((loc) => {
    const s = loc.toLowerCase();
    if (s.includes("romania") || s.includes("satu mare") || s.includes("asylum")) matched.add("romania");
    if (s.includes("carpazi")) matched.add("carpazi");
    if (s.includes("hong kong")) matched.add("hong_kong");
    if (s.includes("colombia")) matched.add("colombia");
    if (s.includes("budapest") || s.includes("ungheria")) matched.add("budapest");
    if (s.includes("rotterdam") || s.includes("paesi bassi")) matched.add("rotterdam");
    if (s.includes("sicilia") || s.includes("sapienza") || s.includes("italia")) matched.add("sicilia_sapienza");
    if (s.includes("pietroburgo") || s.includes("russia")) matched.add("san_pietroburgo");
    if (s.includes("giappone") || s.includes("hokkaido")) matched.add("giappone");
    if (s.includes("malesia") || s.includes("kuala lumpur")) matched.add("malesia");
    if (s.includes("afghanistan") || s.includes("nuristan")) matched.add("afghanistan");
    if (s.includes("india") || s.includes("mumbai")) matched.add("india");
    if (s.includes("parigi") || s.includes("francia")) matched.add("parigi");
    if (s.includes("siberia")) matched.add("siberia");
    if (s.includes("new orleans") || s.includes("louisiana")) matched.add("new_orleans");
    if (s.includes("rocky") || s.includes("colorado")) matched.add("rockies");
    if (s.includes("washington") || s.includes("casa bianca") || s.includes("chicago") || s.includes("hope") || s.includes("dakota")) {
      matched.add("washington_chicago");
    }
    if (s.includes("dartmoor") || s.includes("cornovaglia") || s.includes("inghilterra")) matched.add("dartmoor");
    if (s.includes("marrakesh") || s.includes("marocco")) matched.add("marrakesh");
    if (s.includes("miami") || s.includes("florida")) matched.add("miami");
    if (s.includes("maldive") || s.includes("haven")) matched.add("maldive");
    if (s.includes("dubai") || s.includes("eau")) matched.add("dubai");
    if (s.includes("berlino") || s.includes("germania")) matched.add("berlino");
    if (s.includes("chongqing") || s.includes("cina")) matched.add("chongqing");
    if (s.includes("mendoza") || s.includes("argentina")) matched.add("mendoza");
    if (s.includes("bangkok") || s.includes("thailandia")) matched.add("bangkok");
    if (s.includes("hawke") || s.includes("zelanda")) matched.add("hawkes_bay");
    if (s.includes("sgàil") || s.includes("sgail")) matched.add("isle_of_sgail");
  });

  return Array.from(matched)
    .map((id) => LOCATION_PINS.find((p) => p.id === id)!)
    .filter(Boolean);
}

// Find chapters containing a pin
function getChaptersForPin(pinId: string, chapters: ChapterInfo[]): ChapterInfo[] {
  return chapters.filter((chapter) => {
    const pinsInCh = getChapterLocations(chapter);
    return pinsInCh.some((p) => p.id === pinId);
  });
}

// Tactical Theater Presets for Quick Zoom
interface TheaterPreset {
  id: string;
  name: string;
  zoom: number;
  panX: number;
  panY: number;
}

const THEATER_PRESETS: TheaterPreset[] = [
  { id: "world", name: "GLOBALE", zoom: 1, panX: 0, panY: 0 },
  { id: "europe", name: "EUROPA", zoom: 2.8, panX: -360, panY: -65 },
  { id: "americas", name: "AMERICHE", zoom: 2.0, panX: 80, panY: -90 },
  { id: "asia", name: "ASIA / PACIFICO", zoom: 2.3, panX: -540, panY: -110 },
  { id: "mideast", name: "MEDIO ORIENTE", zoom: 2.7, panX: -420, panY: -125 }
];

type MapVisualTheme = "ica_crimson" | "tactical_green" | "cyber_matrix";

export default function InteractiveWorldMap({
  chapters,
  selectedChapterId,
  onSelectChapterId
}: InteractiveWorldMapProps) {
  const [hoveredPin, setHoveredPin] = useState<MapLocationPin | null>(null);
  const [selectedPin, setSelectedPin] = useState<MapLocationPin | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTheater, setActiveTheater] = useState<string>("world");
  const [visualTheme, setVisualTheme] = useState<MapVisualTheme>("ica_crimson");
  const [showFlightArcs, setShowFlightArcs] = useState(true);
  const [showRadarSweep, setShowRadarSweep] = useState(true);
  const [showGraticule, setShowGraticule] = useState(true);

  // Zoom and Pan states
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ mouseX: number; mouseY: number; panX: number; panY: number }>({
    mouseX: 0,
    mouseY: 0,
    panX: 0,
    panY: 0
  });

  // Live mouse coordinate telemetry
  const [mouseTelemetry, setMouseTelemetry] = useState<{
    x: number;
    y: number;
    latStr: string;
    lonStr: string;
  }>({
    x: 400,
    y: 200,
    latStr: "00°00' N",
    lonStr: "000°00' E"
  });

  const svgContainerRef = useRef<HTMLDivElement>(null);

  // Active chapter
  const activeChapter = useMemo(() => {
    return chapters.find((c) => c.id === selectedChapterId) || chapters[0];
  }, [chapters, selectedChapterId]);

  // Pins belonging to the currently selected chapter
  const activeChapterPins = useMemo(() => {
    return getChapterLocations(activeChapter);
  }, [activeChapter]);

  // Flight arcs connecting mission locations within the active chapter
  const flightArcs = useMemo(() => {
    if (activeChapterPins.length < 2) return [];
    const arcs: { id: string; path: string; from: string; to: string }[] = [];
    for (let i = 0; i < activeChapterPins.length - 1; i++) {
      const p1 = activeChapterPins[i];
      const p2 = activeChapterPins[i + 1];
      const arcPath = createFlightArc(p1.lon, p1.lat, p2.lon, p2.lat);
      arcs.push({
        id: `arc-${p1.id}-${p2.id}`,
        path: arcPath,
        from: p1.name.split(" (")[0],
        to: p2.name.split(" (")[0]
      });
    }
    return arcs;
  }, [activeChapterPins]);

  // Filtered pins based on search
  const filteredPins = useMemo(() => {
    if (!searchTerm) return LOCATION_PINS;
    const q = searchTerm.toLowerCase();
    return LOCATION_PINS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.countryName.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tacticalCode.toLowerCase().includes(q)
    );
  }, [searchTerm]);

  // Set Theater preset
  const handleSelectTheater = (preset: TheaterPreset) => {
    setActiveTheater(preset.id);
    setZoom(preset.zoom);
    setPan({ x: preset.panX, y: preset.panY });
  };

  // Zoom controls
  const handleZoomIn = () => {
    setZoom((prev) => Math.min(5, Number((prev + 0.4).toFixed(2))));
  };

  const handleZoomOut = () => {
    setZoom((prev) => {
      const next = Math.max(1, Number((prev - 0.4).toFixed(2)));
      if (next === 1) setPan({ x: 0, y: 0 });
      return next;
    });
  };

  const handleResetZoom = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setActiveTheater("world");
  };

  // Focus and center on a pin
  const handleFocusPin = (pin: MapLocationPin) => {
    setSelectedPin(pin);
    const targetZoom = 3.2;
    // Calculate pan so that (pin.x, pin.y) is near center of view
    const targetPanX = -pin.x * (targetZoom - 1);
    const targetPanY = -pin.y * (targetZoom - 1);
    setZoom(targetZoom);
    setPan({ 
      x: Math.max(-MAP_WIDTH * (targetZoom - 1), Math.min(0, targetPanX)), 
      y: Math.max(-MAP_HEIGHT * (targetZoom - 1), Math.min(0, targetPanY)) 
    });

    const linked = getChaptersForPin(pin.id, chapters);
    if (linked.length > 0 && !linked.some((c) => c.id === selectedChapterId)) {
      onSelectChapterId(linked[0].id);
    }
  };

  // Drag handlers
  const handleMouseDown = (e: MouseEvent) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    dragStartRef.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      panX: pan.x,
      panY: pan.y
    };
  };

  const handleMouseMove = (e: MouseEvent) => {
    // Calculate inverted SVG coordinates for HUD telemetry
    if (svgContainerRef.current) {
      const rect = svgContainerRef.current.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      
      const svgX = (clientX / rect.width) * MAP_WIDTH;
      const svgY = (clientY / rect.height) * MAP_HEIGHT;
      
      // Account for pan and zoom in SVG space
      const realX = (svgX - pan.x) / zoom;
      const realY = (svgY - pan.y) / zoom;
      
      const [lon, lat] = invertCoordinates(realX, realY);
      const { latStr, lonStr } = formatCoordinates(lon, lat);
      
      setMouseTelemetry({
        x: Number(realX.toFixed(1)),
        y: Number(realY.toFixed(1)),
        latStr,
        lonStr
      });
    }

    if (!isDragging || zoom <= 1) return;
    const dx = e.clientX - dragStartRef.current.mouseX;
    const dy = e.clientY - dragStartRef.current.mouseY;

    const maxPanX = 0;
    const minPanX = -MAP_WIDTH * (zoom - 1);
    const maxPanY = 0;
    const minPanY = -MAP_HEIGHT * (zoom - 1);

    setPan({
      x: Math.max(minPanX, Math.min(maxPanX, dragStartRef.current.panX + dx)),
      y: Math.max(minPanY, Math.min(maxPanY, dragStartRef.current.panY + dy))
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.15 : 0.87;
    setZoom((prev) => {
      const next = Math.max(1, Math.min(5, Number((prev * zoomFactor).toFixed(2))));
      if (next === 1) setPan({ x: 0, y: 0 });
      return next;
    });
  };

  // Color scheme variants based on selected visualTheme
  const themeColors = useMemo(() => {
    switch (visualTheme) {
      case "tactical_green":
        return {
          ocean: "#020904",
          land: "#071a0e",
          landStroke: "#166534",
          borders: "rgba(74, 222, 128, 0.2)",
          graticule: "rgba(34, 197, 94, 0.08)",
          activePin: "#22c55e"
        };
      case "cyber_matrix":
        return {
          ocean: "#020714",
          land: "#081b33",
          landStroke: "#1e3a8a",
          borders: "rgba(96, 165, 250, 0.22)",
          graticule: "rgba(59, 130, 246, 0.09)",
          activePin: "#38bdf8"
        };
      case "ica_crimson":
      default:
        return {
          ocean: "#04060a",
          land: "#0f172a",
          landStroke: "#334155",
          borders: "rgba(226, 232, 240, 0.18)",
          graticule: "rgba(255, 255, 255, 0.06)",
          activePin: "#ef4444"
        };
    }
  }, [visualTheme]);

  return (
    <div
      className="bg-black/60 backdrop-blur-md p-5 sm:p-6 rounded-sm border border-white/10 space-y-5 animate-fade-in shadow-2xl relative"
      id="interactive-world-map-root"
    >
      {/* Top Header Panel */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setSelectedPin(null);
                setSearchTerm("");
                handleResetZoom();
              }}
              className={`p-1.5 rounded-sm border cursor-pointer transition-all duration-300 flex items-center justify-center focus:outline-none ${
                selectedPin || searchTerm || zoom > 1
                  ? "bg-amber-950/40 border-amber-600/80 text-amber-500 hover:bg-amber-900/40 animate-pulse"
                  : "bg-red-950/40 border-red-900/40 text-red-500 hover:bg-red-900/40"
              }`}
              title="Azzera zoom, selezione e filtri"
              id="reset-satellite-compass"
            >
              <Compass className="w-4 h-4" />
            </button>
            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold flex items-center gap-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-ping inline-block" />
                ICA HIGH-DEF GLOBAL SURVEILLANCE
              </span>
              <span className="text-white/20">|</span>
              <span className="text-slate-500">MGRS GEODETIC SATELLITE</span>
              {(selectedPin || searchTerm || zoom > 1) && (
                <span className="text-[9px] bg-amber-950/40 text-amber-400 border border-amber-900/50 px-1.5 py-0.5 rounded-sm font-mono font-medium">
                  FILTRO ATTIVO
                </span>
              )}
            </span>
          </div>
          <h3 className="font-display text-xl font-black text-white uppercase tracking-tight mt-1 flex items-center gap-2">
            <span>Mappa Geopolitica Globale delle Operazioni</span>
            <span className="text-xs px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400 font-mono font-normal">
              PROIEZIONE NATURALE HD
            </span>
          </h3>
          <p className="text-xs text-slate-400 font-mono mt-0.5 max-w-3xl">
            Tracciamento cartografico ad alta definizione con coste continentali reali, confini nazionali, coordinate geodetiche e vettori di transito dell'Agente 47.
          </p>
        </div>

        {/* Controls Toolbar: Search, Themes, View Presets */}
        <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
          {/* Quick Theaters Filter */}
          <div className="flex items-center bg-white/5 border border-white/10 rounded-sm p-0.5 text-[10px] font-mono">
            {THEATER_PRESETS.map((theater) => (
              <button
                key={theater.id}
                onClick={() => handleSelectTheater(theater)}
                className={`px-2 py-1 rounded-xs transition-colors cursor-pointer font-bold ${
                  activeTheater === theater.id && zoom === theater.zoom
                    ? "bg-red-600 text-white shadow-xs"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {theater.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative flex-1 sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Cerca teatro, città, bersaglio..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-black/60 border border-white/10 rounded-sm pl-8 pr-3 py-1 text-xs font-mono text-white placeholder-slate-600 focus:outline-none focus:border-red-600/80 transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs"
              >
                ×
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Grid: Interactive Map Screen + Side Tactical Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Map Display Column (Target for focus-mode CSS selector) */}
        <div className="lg:col-span-8 bg-[#03060c] border border-white/10 rounded-sm overflow-hidden relative group/map p-1.5 shadow-inner">
          
          {/* HUD Top Bar: Telemetry & Status */}
          <div className="flex items-center justify-between px-3 py-1.5 bg-black/80 border-b border-white/5 text-[10px] font-mono text-slate-400 select-none">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 font-bold text-red-500">
                <Radio className="w-3 h-3 animate-pulse" />
                UPLINK // KH-11 RECON
              </span>
              <span className="hidden sm:inline text-slate-600">|</span>
              <span className="hidden sm:inline">
                LAT/LON PUNTATORE: <span className="text-white font-bold">{mouseTelemetry.latStr}</span> / <span className="text-white font-bold">{mouseTelemetry.lonStr}</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-slate-500 hidden md:inline">ERA ATTUALE:</span>
              <span className="text-red-400 font-bold bg-red-950/40 border border-red-900/50 px-2 py-0.5 rounded-sm">
                {activeChapter.year}
              </span>
            </div>
          </div>

          {/* SVG Map Container */}
          <div
            ref={svgContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
            className={`relative w-full aspect-[2/1] overflow-hidden select-none ${
              isDragging ? "cursor-grabbing" : zoom > 1 ? "cursor-grab" : "cursor-crosshair"
            }`}
            style={{ backgroundColor: themeColors.ocean }}
          >
            {/* SVG Elements */}
            <svg
              viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
              className="w-full h-full block"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Tactical Dot Matrix Pattern */}
                <pattern id="tacticalDots" width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="8" cy="8" r="0.6" fill="rgba(255, 255, 255, 0.05)" />
                </pattern>

                {/* Satellite Radar Halo Gradient */}
                <radialGradient id="targetHaloGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(239, 68, 68, 0.45)" />
                  <stop offset="50%" stopColor="rgba(239, 68, 68, 0.15)" />
                  <stop offset="100%" stopColor="rgba(239, 68, 68, 0)" />
                </radialGradient>

                {/* Ocean Vignette */}
                <radialGradient id="oceanVignette" cx="50%" cy="50%" r="75%">
                  <stop offset="0%" stopColor="rgba(15, 23, 42, 0.2)" />
                  <stop offset="100%" stopColor="rgba(0, 0, 0, 0.85)" />
                </radialGradient>
              </defs>

              {/* Background Grid & Vignette */}
              <rect width="100%" height="100%" fill="url(#tacticalDots)" />
              <rect width="100%" height="100%" fill="url(#oceanVignette)" />

              {/* Pan & Zoom Master Group */}
              <g transform={`translate(${pan.x}, ${pan.y}) scale(${zoom})`}>
                
                {/* Military Geodetic Graticule Lines (10-degree grid) */}
                {showGraticule && (
                  <g className="graticule-grid">
                    <path
                      d={WORLD_GRATICULE_PATH}
                      fill="none"
                      stroke={themeColors.graticule}
                      strokeWidth={0.5 / zoom}
                    />
                    {/* Equator Line */}
                    <line
                      x1="0"
                      y1="200"
                      x2={MAP_WIDTH}
                      y2="200"
                      stroke="rgba(239, 68, 68, 0.25)"
                      strokeWidth={0.8 / zoom}
                      strokeDasharray={`${4 / zoom},${3 / zoom}`}
                    />
                    {/* Prime Meridian Line */}
                    <line
                      x1="400"
                      y1="0"
                      x2="400"
                      y2={MAP_HEIGHT}
                      stroke="rgba(239, 68, 68, 0.25)"
                      strokeWidth={0.8 / zoom}
                      strokeDasharray={`${4 / zoom},${3 / zoom}`}
                    />
                  </g>
                )}

                {/* High-Definition Continental Landmasses */}
                <g className="world-landmasses">
                  <path
                    d={WORLD_LAND_PATH}
                    fill={themeColors.land}
                    stroke={themeColors.landStroke}
                    strokeWidth={0.75 / zoom}
                    style={{
                      filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.6))"
                    }}
                  />
                </g>

                {/* Sovereign National Borders Mesh */}
                <g className="world-borders">
                  <path
                    d={WORLD_BORDERS_PATH}
                    fill="none"
                    stroke={themeColors.borders}
                    strokeWidth={0.45 / zoom}
                    strokeDasharray={`${1.5 / zoom},${1.5 / zoom}`}
                  />
                </g>

                {/* Country polygon highlights on hover or pin focus */}
                {selectedPin && (
                  <g className="selected-country-highlight">
                    {COUNTRIES_LIST.filter((c) => {
                      const cName = c.name.toLowerCase();
                      const pCountry = selectedPin.countryName.toLowerCase();
                      return cName.includes(pCountry) || pCountry.includes(cName);
                    }).map((c) => (
                      <path
                        key={`highlight-${c.id}`}
                        d={c.path}
                        fill="rgba(239, 68, 68, 0.12)"
                        stroke="rgba(239, 68, 68, 0.75)"
                        strokeWidth={1 / zoom}
                      />
                    ))}
                  </g>
                )}

                {/* Flight Trajectory Arcs between active chapter locations */}
                {showFlightArcs && flightArcs.length > 0 && (
                  <g className="flight-arcs">
                    {flightArcs.map((arc) => (
                      <g key={arc.id}>
                        {/* Shadow arc */}
                        <path
                          d={arc.path}
                          fill="none"
                          stroke="rgba(0, 0, 0, 0.7)"
                          strokeWidth={2.5 / zoom}
                        />
                        {/* Glowing core arc with animated dashes */}
                        <path
                          d={arc.path}
                          fill="none"
                          stroke="rgba(239, 68, 68, 0.75)"
                          strokeWidth={1.2 / zoom}
                          strokeDasharray={`${4 / zoom},${3 / zoom}`}
                          className="animate-pulse"
                        />
                      </g>
                    ))}
                  </g>
                )}

                {/* Dynamic Coordinate Crosshairs for Selected Pin */}
                {selectedPin && (
                  <g className="target-crosshairs pointer-events-none">
                    <line
                      x1="0"
                      y1={selectedPin.y}
                      x2={MAP_WIDTH}
                      y2={selectedPin.y}
                      stroke="rgba(239, 68, 68, 0.35)"
                      strokeWidth={0.7 / zoom}
                      strokeDasharray={`${3 / zoom},${3 / zoom}`}
                    />
                    <line
                      x1={selectedPin.x}
                      y1="0"
                      x2={selectedPin.x}
                      y2={MAP_HEIGHT}
                      stroke="rgba(239, 68, 68, 0.35)"
                      strokeWidth={0.7 / zoom}
                      strokeDasharray={`${3 / zoom},${3 / zoom}`}
                    />
                    {/* Targeting Brackets */}
                    <circle
                      cx={selectedPin.x}
                      cy={selectedPin.y}
                      r={14 / zoom}
                      fill="none"
                      stroke="rgba(239, 68, 68, 0.85)"
                      strokeWidth={1 / zoom}
                    />
                  </g>
                )}

                {/* Location Pins & Markers */}
                <g className="location-pins">
                  {filteredPins.map((pin) => {
                    const isActive = activeChapterPins.some((p) => p.id === pin.id);
                    const isSelected = selectedPin?.id === pin.id;
                    const isHovered = hoveredPin?.id === pin.id;

                    const pinRadius = (isActive ? 5.5 : isSelected ? 5.5 : 3.5) / Math.sqrt(zoom);
                    const ringRadius = pinRadius * 2.2;

                    return (
                      <g
                        key={pin.id}
                        className="cursor-pointer transition-transform duration-150"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFocusPin(pin);
                        }}
                        onMouseEnter={() => setHoveredPin(pin)}
                        onMouseLeave={() => setHoveredPin(null)}
                      >
                        {/* Active Radar Glow */}
                        {isActive && (
                          <>
                            <circle
                              cx={pin.x}
                              cy={pin.y}
                              r={30 / zoom}
                              fill="url(#targetHaloGlow)"
                              className="animate-pulse"
                            />
                            <circle
                              cx={pin.x}
                              cy={pin.y}
                              r={ringRadius * 1.5}
                              fill="none"
                              stroke="rgba(239, 68, 68, 0.4)"
                              strokeWidth={0.8 / zoom}
                              className="animate-ping"
                              style={{ animationDuration: "2.8s" }}
                            />
                          </>
                        )}

                        {/* Outer Precision Ring */}
                        <circle
                          cx={pin.x}
                          cy={pin.y}
                          r={ringRadius}
                          fill="none"
                          stroke={
                            isSelected
                              ? "#f59e0b"
                              : isActive
                              ? themeColors.activePin
                              : "rgba(148, 163, 184, 0.45)"
                          }
                          strokeWidth={1 / zoom}
                        />

                        {/* Center Pin Node */}
                        <circle
                          cx={pin.x}
                          cy={pin.y}
                          r={pinRadius}
                          fill={
                            isSelected
                              ? "#f59e0b"
                              : isActive
                              ? themeColors.activePin
                              : "rgba(148, 163, 184, 0.8)"
                          }
                          style={{
                            filter:
                              isActive || isSelected
                                ? "drop-shadow(0px 0px 3px rgba(239, 68, 68, 0.8))"
                                : "none"
                          }}
                        />

                        {/* Tiny White Core Dot */}
                        <circle cx={pin.x} cy={pin.y} r={1.2 / zoom} fill="#ffffff" />

                        {/* Tactical HUD Label on Hover or Active */}
                        {(isActive || isSelected || isHovered) && (
                          <g className="pointer-events-none">
                            <rect
                              x={pin.x + 8 / zoom}
                              y={pin.y - 12 / zoom}
                              width={125 / zoom}
                              height={19 / zoom}
                              rx={2 / zoom}
                              fill="rgba(3, 7, 18, 0.92)"
                              stroke={
                                isSelected
                                  ? "rgba(245, 158, 11, 0.8)"
                                  : isActive
                                  ? "rgba(239, 68, 68, 0.75)"
                                  : "rgba(255, 255, 255, 0.2)"
                              }
                              strokeWidth={0.8 / zoom}
                            />
                            {/* Pin Indicator Tick */}
                            <polyline
                              points={`${pin.x + 4 / zoom},${pin.y} ${pin.x + 8 / zoom},${
                                pin.y - 3 / zoom
                              } ${pin.x + 8 / zoom},${pin.y + 3 / zoom}`}
                              fill="rgba(3, 7, 18, 0.92)"
                            />
                            <text
                              x={pin.x + 13 / zoom}
                              y={pin.y + 1 / zoom}
                              fill="#ffffff"
                              fontSize={8 / zoom}
                              fontFamily="monospace"
                              fontWeight="bold"
                            >
                              {pin.name.split(" (")[0]}
                            </text>
                          </g>
                        )}
                      </g>
                    );
                  })}
                </g>
              </g>

              {/* Fixed Tactical Frame Overlay Coordinates (Viewport corners) */}
              <g className="tactical-frame-labels pointer-events-none select-none" fill="rgba(148, 163, 184, 0.5)" fontSize="8" fontFamily="monospace">
                <text x="12" y="16">60°N</text>
                <text x="12" y="105">30°N</text>
                <text x="12" y="204" fill="rgba(239,68,68,0.7)">00° EQ</text>
                <text x="12" y="305">30°S</text>
                <text x="12" y="392">60°S</text>

                <text x="135" y="392">120°W</text>
                <text x="268" y="392">60°W</text>
                <text x="390" y="392" fill="rgba(239,68,68,0.7)">00° GMT</text>
                <text x="530" y="392">60°E</text>
                <text x="660" y="392">120°E</text>
              </g>
            </svg>

            {/* Radar Sweep Effect Overlay */}
            {showRadarSweep && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                  className="w-full h-full opacity-20"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(239, 68, 68, 0.08) 50%, rgba(239, 68, 68, 0.25) 100%)",
                    animation: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite"
                  }}
                />
              </div>
            )}

            {/* Tactical Laser Scanning Line */}
            <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-red-500/30 to-transparent pointer-events-none animate-bounce" style={{ top: "45%" }} />

            {/* Floating Zoom & Map Controls in Bottom Left */}
            <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5 bg-black/85 backdrop-blur-md border border-white/10 p-1 rounded-sm shadow-lg text-white">
              <button
                onClick={handleZoomIn}
                className="p-1 hover:bg-white/10 rounded-xs text-slate-300 hover:text-white cursor-pointer transition-colors"
                title="Ingrandisci mappa (+)"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleZoomOut}
                className="p-1 hover:bg-white/10 rounded-xs text-slate-300 hover:text-white cursor-pointer transition-colors"
                title="Riduci mappa (-)"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleResetZoom}
                className="p-1 hover:bg-white/10 rounded-xs text-slate-300 hover:text-white cursor-pointer transition-colors"
                title="Ripristina vista 100%"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <span className="text-[10px] font-mono font-bold text-red-500 px-1.5 border-l border-white/10">
                {zoom.toFixed(1)}x
              </span>
            </div>

            {/* Floating Display Options in Bottom Right */}
            <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2 bg-black/85 backdrop-blur-md border border-white/10 px-2 py-1 rounded-sm text-[10px] font-mono text-slate-400">
              <label className="flex items-center gap-1 cursor-pointer hover:text-white select-none">
                <input
                  type="checkbox"
                  checked={showFlightArcs}
                  onChange={(e) => setShowFlightArcs(e.target.checked)}
                  className="rounded-xs text-red-600 focus:ring-0 w-3 h-3 cursor-pointer"
                />
                <span>VETTORI VOLO</span>
              </label>
              <span className="text-white/20">|</span>
              <label className="flex items-center gap-1 cursor-pointer hover:text-white select-none">
                <input
                  type="checkbox"
                  checked={showGraticule}
                  onChange={(e) => setShowGraticule(e.target.checked)}
                  className="rounded-xs text-red-600 focus:ring-0 w-3 h-3 cursor-pointer"
                />
                <span>GRIGLIA MGRS</span>
              </label>
            </div>
          </div>

          {/* Sub-bar with Theme Selector & Active Coordinates */}
          <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 bg-black/60 border-t border-white/5 text-[10px] font-mono text-slate-400">
            <div className="flex items-center gap-3">
              <span className="text-slate-500">TEMA OTTICO:</span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setVisualTheme("ica_crimson")}
                  className={`px-2 py-0.5 rounded-xs transition-colors cursor-pointer ${
                    visualTheme === "ica_crimson"
                      ? "bg-red-950/60 text-red-400 border border-red-800/60 font-bold"
                      : "hover:text-white text-slate-500"
                  }`}
                >
                  ICA CRIMSON
                </button>
                <button
                  onClick={() => setVisualTheme("tactical_green")}
                  className={`px-2 py-0.5 rounded-xs transition-colors cursor-pointer ${
                    visualTheme === "tactical_green"
                      ? "bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 font-bold"
                      : "hover:text-white text-slate-500"
                  }`}
                >
                  NIGHT OPS
                </button>
                <button
                  onClick={() => setVisualTheme("cyber_matrix")}
                  className={`px-2 py-0.5 rounded-xs transition-colors cursor-pointer ${
                    visualTheme === "cyber_matrix"
                      ? "bg-sky-950/60 text-sky-400 border border-sky-800/60 font-bold"
                      : "hover:text-white text-slate-500"
                  }`}
                >
                  CYBER MATRIX
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-slate-500">PRESENZA BERSAGLI:</span>
              <span className="text-white font-bold">{filteredPins.length} BASI REGISTRATE</span>
              <span className="text-slate-600">|</span>
              <span className="text-red-500 font-bold">{activeChapterPins.length} IN QUESTO CAPITOLO</span>
            </div>
          </div>
        </div>

        {/* Right Target / Mission Dossier Card Column */}
        <div className="lg:col-span-4 space-y-4">
          {/* Active Location Detail Panel */}
          <div className="bg-black/60 border border-white/10 rounded-sm p-4 relative overflow-hidden shadow-xl">
            <h5 className="text-[10px] uppercase font-mono tracking-widest text-slate-400 mb-3 border-b border-white/5 pb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Crosshair className="w-3 h-3 text-red-500" />
                DOSSIER TEATRO OPERATIVO
              </span>
              <span className="text-red-500 font-bold font-mono">LIVE_FEED</span>
            </h5>

            <AnimatePresence mode="wait">
              {selectedPin ? (
                <motion.div
                  key={selectedPin.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-3.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[9px] font-mono font-bold bg-red-950/40 text-red-400 border border-red-900/40 px-1.5 py-0.5 rounded-sm">
                          {selectedPin.countryCode}
                        </span>
                        <span className="text-[9px] font-mono text-slate-500">
                          {selectedPin.tacticalCode}
                        </span>
                      </div>
                      <h4 className="font-display font-black text-white text-base uppercase tracking-tight">
                        {selectedPin.name}
                      </h4>
                    </div>

                    <span
                      className={`text-[9px] font-mono px-2 py-0.5 rounded-sm font-bold border ${
                        selectedPin.threatLevel === "CRITICO"
                          ? "bg-red-950/40 text-red-400 border-red-900/60"
                          : "bg-amber-950/40 text-amber-400 border-amber-900/60"
                      }`}
                    >
                      {selectedPin.threatLevel}
                    </span>
                  </div>

                  {/* Real Geodetic Coordinates Grid */}
                  <div className="bg-white/5 border border-white/5 rounded-sm p-2 text-[10px] font-mono text-slate-300 flex justify-between items-center">
                    <div>
                      <span className="text-slate-500 block text-[8px] uppercase">COORDINATE GPS MGRS</span>
                      <span className="font-bold text-white">{selectedPin.latLonStr}</span>
                    </div>
                    <button
                      onClick={() => handleFocusPin(selectedPin)}
                      className="px-2 py-1 bg-red-600 hover:bg-red-500 text-white font-bold text-[9px] rounded-xs cursor-pointer transition-colors"
                      title="Centra e ingrandisci su questo bersaglio"
                    >
                      CENTRA
                    </button>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {selectedPin.description}
                  </p>

                  {/* Linked saga chapters from database */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400 block font-bold">
                      CAPITOLI CORRELATI NELLA SAGA:
                    </span>
                    <div className="space-y-1.5 max-h-[160px] overflow-y-auto no-scrollbar">
                      {getChaptersForPin(selectedPin.id, chapters).map((ch) => (
                        <button
                          key={ch.id}
                          onClick={() => {
                            onSelectChapterId(ch.id);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className={`w-full cursor-pointer text-left p-2 rounded-sm border text-xs font-mono transition-all flex items-center justify-between ${
                            ch.id === selectedChapterId
                              ? "bg-red-950/30 border-red-900/60 text-red-400"
                              : "bg-black/40 border-white/5 text-slate-400 hover:text-white hover:border-white/10"
                          }`}
                          id={`linked-ch-[${ch.id}]`}
                        >
                          <div className="truncate pr-2">
                            <span className="text-[10px] text-slate-500 pr-1">{ch.year}:</span>
                            <span className="font-semibold">{ch.gameTitle}</span>
                          </div>
                          <span className="p-0.5 bg-white/5 rounded text-[8px] uppercase tracking-wider font-extrabold text-slate-400">
                            Vedi
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="py-10 text-center text-slate-400 font-mono text-xs space-y-3">
                  <Globe2 className="w-9 h-9 text-slate-600 mx-auto opacity-60 animate-pulse" />
                  <p className="max-w-xs mx-auto">
                    Fai clic su un indicatore geografico o seleziona un capitolo della cronologia per caricare l'intercettazione satellitare del teatro operativo.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* List of active targets inside the active chapter */}
          <div className="bg-black/60 border border-white/10 rounded-sm p-4 shadow-xl">
            <h5 className="text-[10px] uppercase font-mono tracking-widest text-red-500 mb-3 border-b border-white/5 pb-1.5 flex items-center justify-between font-bold">
              <span className="flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" />
                BERSAGLI PRINCIPALI IN QUESTO CAPITOLO
              </span>
              <span className="text-[9px] bg-red-950/40 font-bold border border-red-900/50 px-1.5 py-0.5 rounded-sm">
                {activeChapter.keyTargets.length} TARGETS
              </span>
            </h5>

            {activeChapter.keyTargets.length > 0 ? (
              <div className="space-y-1.5 max-h-[170px] overflow-y-auto no-scrollbar">
                {activeChapter.keyTargets.map((target, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 bg-gradient-to-r from-red-950/15 to-transparent border-l-2 border-red-600 text-xs font-mono text-slate-200"
                  >
                    <Target className="w-3 h-3 text-red-500 flex-shrink-0" />
                    <span className="font-semibold">{target}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-5 text-slate-500 font-mono text-xs italic">
                Nessun bersaglio registrato per questo capitolo. Operazioni d'infanzia o fughe clandestine.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
