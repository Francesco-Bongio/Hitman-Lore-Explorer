import { jsPDF } from "jspdf";
import { CHAPTER_MISSIONS_DB, MissionBriefingData, TacticalApproach } from "../data/missionBriefings";

export function exportDossierPDF(char: any, appearances: any[], activeDescription: string, activeDetails: string) {
  const doc = new jsPDF();
  
  // Set default font to Courier for that terminal look
  doc.setFont("courier", "normal");
  
  // --- HEADER ---
  doc.setFillColor(20, 20, 20);
  doc.rect(0, 0, 210, 30, "F");
  
  doc.setTextColor(220, 38, 38); // Red
  doc.setFontSize(16);
  doc.setFont("courier", "bold");
  doc.text("INTERNATIONAL CONTRACT AGENCY", 105, 14, { align: "center" });
  
  doc.setTextColor(150, 150, 150);
  doc.setFontSize(10);
  doc.text("SECURE DATABASE - LEVEL 5 (RESTRICTED)", 105, 22, { align: "center" });
  
  // --- SUB HEADER ---
  let y = 40;
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(14);
  doc.setFont("courier", "bold");
  doc.text(`FILE: DOSSIER RECORD`, 15, y);
  y += 8;
  
  doc.setFontSize(11);
  doc.setFont("courier", "normal");
  doc.text(`SUBJECT: ${char.name}`, 15, y); y += 6;
  doc.text(`ROLE: ${char.role}`, 15, y); y += 6;
  doc.text(`ALIGNMENT: ${char.actorType.toUpperCase()}`, 15, y); y += 6;
  doc.text(`DATE OF EXPORT: ${new Date().toISOString()}`, 15, y); y += 12;
  
  // Helper to draw section
  const drawSection = (title: string, text: string) => {
    // Check if we need a new page
    if (y > 250) {
      doc.addPage();
      y = 20;
    }
    
    doc.setFont("courier", "bold");
    doc.setTextColor(220, 38, 38);
    doc.text(`[+] ${title}`, 15, y);
    y += 4;
    
    doc.setDrawColor(220, 38, 38);
    doc.line(15, y, 195, y);
    y += 6;
    
    doc.setFont("courier", "normal");
    doc.setTextColor(30, 30, 30);
    doc.setFontSize(10);
    
    const lines = doc.splitTextToSize(text, 180);
    for (let i = 0; i < lines.length; i++) {
      if (y > 280) {
        doc.addPage();
        y = 20;
      }
      doc.text(lines[i], 15, y);
      y += 5;
    }
    y += 8;
  };

  drawSection("BIOGRAPHICAL DELINEATION & INTELLIGENCE", activeDescription);
  drawSection("OPERATIONAL LOGISTICS & CONFLICT", activeDetails);
  
  const timelineContent = appearances.length > 0 
    ? appearances.map(a => `[${a.year}] ${a.title}\nRole: ${a.role}`).join('\n\n')
    : 'No specific chronological records found.';
    
  drawSection("CHRONOLOGICAL RECORD", timelineContent);

  // --- FOOTER ---
  if (y > 270) { doc.addPage(); y = 20; }
  doc.setFont("courier", "bold");
  doc.setTextColor(150, 150, 150);
  doc.text("=================================================================", 105, y, { align: "center" });
  y += 5;
  doc.text("END OF FILE", 105, y, { align: "center" });
  y += 5;
  doc.text("=================================================================", 105, y, { align: "center" });

  doc.save(`ICA_DOSSIER_${char.name.replace(/\s+/g, '_').toUpperCase()}.pdf`);
}

export function exportTimelinePDF(chapter: any, activeLayer: string, lore: any) {
  const doc = new jsPDF();
  
  // Set default font to Courier for that terminal look
  doc.setFont("courier", "normal");
  
  // --- HEADER ---
  doc.setFillColor(20, 20, 20);
  doc.rect(0, 0, 210, 30, "F");
  
  doc.setTextColor(220, 38, 38); // Red
  doc.setFontSize(16);
  doc.setFont("courier", "bold");
  doc.text("INTERNATIONAL CONTRACT AGENCY", 105, 14, { align: "center" });
  
  doc.setTextColor(150, 150, 150);
  doc.setFontSize(10);
  doc.text("SECURE DATABASE - CHRONOLOGY SYSTEM", 105, 22, { align: "center" });
  
  // --- SUB HEADER ---
  let y = 40;
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(14);
  doc.setFont("courier", "bold");
  doc.text(`FILE: CHRONICLE RECONSTRUCTION`, 15, y);
  y += 8;
  
  doc.setFontSize(11);
  doc.setFont("courier", "normal");
  doc.text(`CHAPTER: ${chapter.gameTitle} (${chapter.year})`, 15, y); y += 6;
  doc.text(`TITLE: ${chapter.title}`, 15, y); y += 6;
  doc.text(`DATE OF EXPORT: ${new Date().toISOString()}`, 15, y); y += 12;
  
  // Helper to draw section
  const drawSection = (title: string, text: string) => {
    if (y > 250) {
      doc.addPage();
      y = 20;
    }
    
    doc.setFont("courier", "bold");
    doc.setTextColor(220, 38, 38);
    doc.text(`[+] ${title}`, 15, y);
    y += 4;
    
    doc.setDrawColor(220, 38, 38);
    doc.line(15, y, 195, y);
    y += 6;
    
    doc.setFont("courier", "normal");
    doc.setTextColor(30, 30, 30);
    doc.setFontSize(10);
    
    const lines = doc.splitTextToSize(text, 180);
    for (let i = 0; i < lines.length; i++) {
      if (y > 280) {
        doc.addPage();
        y = 20;
      }
      doc.text(lines[i], 15, y);
      y += 5;
    }
    y += 8;
  };

  drawSection("NARRATIVE SUMMARY", chapter.summary || "");
  
  const locs = chapter.locations && chapter.locations.length > 0 ? chapter.locations.join(', ') : 'None recorded';
  drawSection("OPERATIONAL THEATERS", locs);
  
  const targs = chapter.keyTargets && chapter.keyTargets.length > 0 ? chapter.keyTargets.join('\n') : 'None recorded';
  drawSection("KEY TARGETS NEUTRALIZED", targs);

  const evts = chapter.details ? chapter.details.map((d: string, i: number) => `[${String(i + 1).padStart(2, '0')}] ${d}`).join('\n') : '';
  if (evts) {
    drawSection("CHRONOLOGICAL EVENTS", evts);
  }
  
  drawSection(`DECRYPTED LORE: ${lore.interceptTitle || ''}`, `META: ${lore.interceptMeta || ''}\n${lore.interceptContent || ''}`);
  drawSection(`PHILOSOPHICAL SIGNIFICANCE: ${lore.philosophyTitle || ''}`, lore.philosophyContent || '');

  const chapterMissions = CHAPTER_MISSIONS_DB[chapter.id] || [];
  if (chapterMissions.length > 0) {
    let catalogStr = `TOTAL CATALOGUED MISSIONS: ${chapterMissions.length}\n\n`;
    chapterMissions.forEach((m: MissionBriefingData) => {
      const targetsLine = m.targetsSummary && m.targetsSummary.length > 0 ? m.targetsSummary.join(", ") : "Classified";
      const primaryApproach = m.approaches?.[0];
      const objNames = (m.contractObjectives || []).map((o) => `${o.targetOrTask} (${o.recommendedMethod})`).join(" | ");
      catalogStr += `[M${m.missionNumber}] ${m.missionTitle} — ${m.gameSubtitle}\n`;
      catalogStr += `   CODENAME: ${m.operationCodename} | LOCATION: ${m.primaryLocation} | THREAT: ${m.threatAssessment}\n`;
      catalogStr += `   TARGETS: ${targetsLine}\n`;
      if (primaryApproach) {
        catalogStr += `   LOADOUT (${primaryApproach.title}): ${primaryApproach.loadout.map(l => l.name).join(", ")}\n`;
      }
      if (objNames) {
        catalogStr += `   OBJECTIVES: ${objNames}\n`;
      }
      catalogStr += `\n`;
    });
    drawSection(`ICA MISSION BRIEFINGS CATALOG (${chapterMissions.length} MISSIONS)`, catalogStr.trim());
  }

  // --- FOOTER ---
  if (y > 270) { doc.addPage(); y = 20; }
  doc.setFont("courier", "bold");
  doc.setTextColor(150, 150, 150);
  doc.text("=================================================================", 105, y, { align: "center" });
  y += 5;
  doc.text("END OF FILE", 105, y, { align: "center" });
  y += 5;
  doc.text("=================================================================", 105, y, { align: "center" });

  doc.save(`ICA_CHRONICLE_${chapter.id.toUpperCase()}.pdf`);
}

export function exportMissionBriefingPDF(briefing: MissionBriefingData, chapter: any, activeApproach?: TacticalApproach) {
  const doc = new jsPDF();
  doc.setFont("courier", "normal");

  // --- HEADER ---
  doc.setFillColor(15, 10, 10);
  doc.rect(0, 0, 210, 32, "F");

  doc.setTextColor(220, 38, 38);
  doc.setFontSize(15);
  doc.setFont("courier", "bold");
  doc.text("INTERNATIONAL CONTRACT AGENCY", 105, 12, { align: "center" });

  doc.setTextColor(200, 200, 200);
  doc.setFontSize(10);
  doc.text(`TACTICAL MISSION DOSSIER // ${briefing.operationCodename || 'OPERATION'}`, 105, 20, { align: "center" });

  doc.setTextColor(150, 150, 150);
  doc.setFontSize(8);
  doc.text(`SECURITY CLEARANCE: ${briefing.icaClassification || 'LEVEL 5'}`, 105, 27, { align: "center" });

  let y = 42;
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10.5);
  doc.setFont("courier", "bold");
  doc.text(`MISSION: [M${briefing.missionNumber || '01'}] ${briefing.missionTitle} (${briefing.gameSubtitle || chapter.gameTitle})`, 15, y); y += 6;
  doc.text(`CHAPTER: ${chapter.gameTitle} (${chapter.year})`, 15, y); y += 6;
  doc.text(`HANDLER: ${briefing.handler} | THREAT: ${briefing.threatAssessment}`, 15, y); y += 6;
  doc.text(`PRIMARY LOCATION: ${briefing.primaryLocation}`, 15, y); y += 6;
  if (briefing.targetsSummary && briefing.targetsSummary.length > 0) {
    const targetLines = doc.splitTextToSize(`TARGETS: ${briefing.targetsSummary.join(', ')}`, 180);
    doc.text(targetLines, 15, y);
    y += targetLines.length * 5.5;
  }
  doc.text(`DATE OF EXPORT: ${new Date().toISOString()}`, 15, y); y += 10;

  const drawSection = (title: string, text: string) => {
    if (y > 250) {
      doc.addPage();
      y = 20;
    }

    doc.setFont("courier", "bold");
    doc.setTextColor(220, 38, 38);
    doc.text(`[+] ${title}`, 15, y);
    y += 4;

    doc.setDrawColor(220, 38, 38);
    doc.line(15, y, 195, y);
    y += 6;

    doc.setFont("courier", "normal");
    doc.setTextColor(30, 30, 30);
    doc.setFontSize(9.5);

    const lines = doc.splitTextToSize(text, 180);
    for (let i = 0; i < lines.length; i++) {
      if (y > 280) {
        doc.addPage();
        y = 20;
      }
      doc.text(lines[i], 15, y);
      y += 5;
    }
    y += 6;
  };

  // Briefing speech
  drawSection("HANDLER AUDIO BRIEFING TRANSCRIPT", briefing.briefingTranscript || "");

  // Loadout
  const approach = activeApproach || briefing.approaches?.[0];
  if (approach) {
    let loadoutText = `DOCTRINE: ${approach.title} [${approach.badge}]\n`;
    loadoutText += `RECOMMENDED SUIT: ${approach.recommendedSuit}\n\n`;
    approach.loadout.forEach((item: any, idx: number) => {
      loadoutText += `SLOT ${idx + 1}: ${item.name} (${item.categoryLabel})\n`;
      loadoutText += `   CONCEALMENT: ${item.concealment} | LETHALITY: ${item.lethality}${item.silenced ? ' | SILENCED' : ''}\n`;
      loadoutText += `   DESCRIPTION: ${item.description}\n`;
      loadoutText += `   TACTICAL ADVISORY: ${item.tacticalTip}\n\n`;
    });
    drawSection("RECOMMENDED TACTICAL LOADOUT", loadoutText.trim());
  }

  // Objectives
  if (briefing.contractObjectives && briefing.contractObjectives.length > 0) {
    let objText = "";
    briefing.contractObjectives.forEach((obj: any, idx: number) => {
      objText += `[${String(idx + 1).padStart(2, '0')}] [${obj.priority}] ${obj.targetOrTask}\n`;
      objText += `     TYPE: ${obj.typeLabel} | LOCATION: ${obj.location}\n`;
      objText += `     METHOD: ${obj.recommendedMethod}\n`;
      objText += `     INTEL: ${obj.intelNotes}\n\n`;
    });
    drawSection("CONTRACT OBJECTIVES & OPPORTUNITIES", objText.trim());
  }

  // Silent Assassin rules
  if (briefing.silentAssassinRules && briefing.silentAssassinRules.length > 0) {
    const rulesText = briefing.silentAssassinRules.map((r: string) => `• ${r}`).join('\n');
    drawSection("SILENT ASSASSIN PROTOCOLS (RULES OF ENGAGEMENT)", rulesText);
  }

  // Extraction
  if (briefing.extractionPoints && briefing.extractionPoints.length > 0) {
    let extText = "";
    briefing.extractionPoints.forEach((p: any) => {
      extText += `• ${p.name} (Risk: ${p.riskLevel})\n  ${p.description}${p.requiresItem ? ` [Requires: ${p.requiresItem}]` : ''}\n`;
    });
    drawSection("RECOMMENDED EXTRACTION ROUTES", extText.trim());
  }

  // Footer
  if (y > 270) { doc.addPage(); y = 20; }
  doc.setFont("courier", "bold");
  doc.setTextColor(150, 150, 150);
  doc.text("=================================================================", 105, y, { align: "center" });
  y += 5;
  doc.text("ICA SECURE DOSSIER COMPLETE - EYES ONLY", 105, y, { align: "center" });
  y += 5;
  doc.text("=================================================================", 105, y, { align: "center" });

  doc.save(`ICA_BRIEFING_${(briefing.missionId || chapter.id).toUpperCase()}.pdf`);
}

