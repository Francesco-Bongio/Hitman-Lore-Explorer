export interface TacticalLoadoutItem {
  id: string;
  name: string;
  category: 'firearm' | 'melee' | 'tool' | 'suit' | 'pickup';
  categoryLabel: string;
  concealment: 'Occultabile' | 'Visibile' | 'Non Rilevabile';
  silenced?: boolean;
  lethality: 'Letale' | 'Non Letale' | 'Supporto / Infiltrazione';
  description: string;
  tacticalTip: string;
}

export interface TacticalApproach {
  id: 'silent_assassin' | 'tactical_infiltrator' | 'precision_sniper';
  title: string;
  badge: string;
  description: string;
  recommendedSuit: string;
  loadout: TacticalLoadoutItem[];
}

export interface ContractObjective {
  id: string;
  targetOrTask: string;
  type: 'elimination' | 'intel' | 'sabotage' | 'extraction' | 'safeguard';
  typeLabel: string;
  priority: 'CRITICA' | 'PRIMARIA' | 'SECONDARIA' | 'OPZIONALE';
  location: string;
  recommendedMethod: string;
  intelNotes: string;
}

export interface ExtractionPoint {
  id: string;
  name: string;
  description: string;
  riskLevel: 'Basso' | 'Medio' | 'Alto';
  requiresItem?: string;
}

export interface MissionBriefingData {
  missionId: string;
  missionNumber: string;
  missionTitle: string;
  gameSubtitle: string;
  operationCodename: string;
  icaClassification: string;
  handler: string;
  threatAssessment: 'BASSO' | 'ALTO' | 'CRITICO' | 'ESTREMO' | 'MASSIMO';
  briefingTranscript: string;
  primaryLocation: string;
  targetsSummary: string[];
  approaches: TacticalApproach[];
  contractObjectives: ContractObjective[];
  silentAssassinRules: string[];
  extractionPoints: ExtractionPoint[];
}

export type ChapterMissionBriefing = MissionBriefingData;
