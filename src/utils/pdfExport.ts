import { jsPDF } from "jspdf";

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
