export * from "./briefingTypes";

import { MissionBriefingData } from "./briefingTypes";
import { GENESIS_MISSIONS, CODENAME47_MISSIONS } from "./briefings/genesisAndCodename47";
import { SILENT_ASSASSIN_MISSIONS } from "./briefings/silentAssassin";
import { CONTRACTS_BLOOD_MONEY_MISSIONS } from "./briefings/contractsAndBloodMoney";
import { ABSOLUTION_MISSIONS } from "./briefings/absolution";
import { WORLD_OF_ASSASSINATION_MISSIONS } from "./briefings/worldOfAssassination";

export const CHAPTER_MISSIONS_DB: Record<string, MissionBriefingData[]> = {
  genesic7: GENESIS_MISSIONS,
  codename47: CODENAME47_MISSIONS,
  silentassassin: SILENT_ASSASSIN_MISSIONS,
  bloodmoney_contracts: CONTRACTS_BLOOD_MONEY_MISSIONS,
  absolution: ABSOLUTION_MISSIONS,
  worldofassassination: WORLD_OF_ASSASSINATION_MISSIONS,
};

// Backwards compatibility helper mapping chapterId to its primary/first mission briefing
export const MISSION_BRIEFINGS_DB: Record<string, MissionBriefingData> = Object.fromEntries(
  Object.entries(CHAPTER_MISSIONS_DB).map(([chapterId, missions]) => [chapterId, missions[0]])
);
