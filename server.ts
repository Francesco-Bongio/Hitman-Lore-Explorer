import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, ThinkingLevel } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Content of Hitman lore used for context grounding (from user attached document)
const HITMAN_LORE_CONTEXT = `
L'Evoluzione Narrativa e l'Intrastoria della Saga di Hitman: Un'Analisi Esaustiva
1. Introduzione: Fenomenologia e Architettura Narrativa dell'Agente 47
La saga di Hitman rappresenta una delle narrazioni più complesse, longeve e stratificate nel panorama dell'intrattenimento interattivo moderno. Lontano dall'essere una semplice e lineare sequenza di incarichi su commissione, l'intrastoria del franchise delinea un profondo trattato sul determinismo genetico, sul libero arbitrio, sulla bioetica e sulle sovrastrutture di potere globale.
Al centro di questo oscuro universo si erge la figura monolitica dell'Agente 47, un costrutto biologico concepito in laboratorio per essere l'apice assoluto dell'evoluzione letale, teoricamente privo di legami affettivi, emozioni e rimorsi. Tuttavia, l'analisi longitudinale della narrazione, dal capitolo fondativo Hitman: Codename 47 (2000) fino alla maestosa conclusione della trilogia World of Assassination (WoA) con Hitman 3 (2021), rivela una traiettoria diametralmente opposta a quella del freddo automa: si assiste al lento, doloroso ma inesorabile affrancamento di una "macchina biologica" verso la propria umanità, consapevolezza e autonomia morale.
Il mondo in cui opera l'Agente 47 è un ecosistema spietato, governato da organizzazioni ombra, agenzie di intelligence deviate, corporazioni paramilitari e cabale elitarie. L'International Contract Agency (ICA), l'agenzia globale per cui 47 lavora per la maggior parte della sua esistenza operativa, si pone inizialmente come un ente rigorosamente neutrale, un fornitore di servizi letali privo di affiliazioni politiche. Eppure, le fondamenta stesse dell'esistenza di 47 affondano le radici in un complotto eugenetico ben più antico e radicato, orchestrato da un'alleanza di signori del crimine internazionale e finanziato da un'élite globale intangibile, nota in seguito come Providence.

2. La Genesi: Il Progetto Ort-Meyer e l'Eredità dei Cinque Padri
La genesi dell'Agente 47 risale agli anni '50, molti decenni prima del suo ingresso formale nell'ICA, ed è intrinsecamente legata agli esperimenti aberranti del Dr. Otto Wolfgang Ort-Meyer, uno scienziato visionario quanto sociopatico, ossessionato in modo febbrile dalla creazione del clone umano perfetto. Il suo obiettivo era ingegnerizzare un individuo fisicamente infallibile, cognitivamente superiore e psicologicamente malleabile. Per finanziare e fornire l'imprescindibile materiale genetico, Ort-Meyer si avvalse della collaborazione di quattro ex commilitoni della Legione Straniera Francese, noti come i "Cinque Padri" sotto il brutale motto "Sangue e Muscoli" ("Blood and Muscle"):
- Dr. Otto Wolfgang Ort-Meyer: Scienziato genetista. Direttore dell'Istituto per il Miglioramento Umano (Romania). Mente scientifica.
- Lee Hong: Leader supremo della Triade del Drago Rosso (Hong Kong). Finanziamenti massicci, armi, reti di contrabbando.
- Pablo Belisario Ochoa: Signore della droga paramilitare del Cartello di Ochoa (Colombia). Contributo genetico e finanziamenti.
- Frantz Fuchs: Estremista e terrorista internazionale di matrice politica (Austria). Accesso a reti militari ed esplosivi.
- Arkadij Jegorov (Boris): Trafficante d'armi su scala globale (Russia/Kazakistan). Contributo genetico e forniture nucleari/chimiche.
In cambio del loro capitale e DNA, Ort-Meyer forniva ai commilitoni organi compatibili raccolti dai cloni falliti per prolungare innaturalmente la loro longevità e vigore fisico. Questo progetto di ingegneria fu situato all'interno di un manicomio ad alta sicurezza a Satu Mare, Romania, finanziato discretamente dagli albori da Providence.
L'Infanzia, il Legame con il Soggetto 6 e la Cancellazione della Memoria:
Il giovane 47 sviluppò un lato compassionevole (un coniglio domestico, amicizia con un altro clone, il 'Soggetto 6'). Insieme, organizzarono un piano di fuga nella prima età adulta. Ma mentre il Soggetto 6 riuscì a fuggire svanendo nell'ombra (divenuto Lucas Grey), 47 fu ricatturato, torturato e sottoposto a sieri chimici amnesici appositi studiati da Ort-Meyer per cancellare la sua memoria episodica ed emotiva, venendo condizionato a credere di aver ucciso lui stesso il Subject 6. Da giovani, Providence li utilizzò in una missione segreta dove uccisero i genitori di Diana Burnwood.

3. Il Risveglio e la Ribellione: Hitman Codename 47 (2000)
Nel 1999/2000, 47 si sveglia in una cella, evade su direzione dell'interfono (messa in scena da Ort-Meyer) e viene reclutato dall'ICA. Gli viene assegnata Diana Burnwood come handler (che allora non conosce le origini di 47 o la sua connessione con la morte dei genitori).
Ort-Meyer manipola l'ICA per far assassinare gli altri 4 padri (Lee Hong a Hong Kong, Pablo Ochoa in Colombia, Frantz Fuchs a Budapest, Jegorov a Rotterdam) da 47, per non dividere l'opera d'arte e cancellare i testimoni. Scoperti indizi e ricollegati i puntini, 47 torna in Romania, affronta Dr. Kovacs, riceve aiuto da Carlton Smith (agente CIA), ed elimina l'armata di cloni inferiori (Agenti 48) inviatagli contro. Infine, spezza il collo o spara a Ort-Meyer, ribellandosi fermamente al creatore.

4. La Ricerca di Redenzione e il Disincanto: Hitman 2 Silent Assassin (2002)
Nel 2002, 47 si ritira in Sicilia lavorando come giardiniere nella chiesa di Gontranno sotto la guida spirituale di Padre Vittorio. Cerca redenzione donando tutti i patrimoni accumulati.
Sergei Zavorotko (boss russo, fratello di Boris Jegorov) in sinergia col 'Mystery Man' (figura enigmatica ed elusiva della saga), rapisce Padre Vittorio per stanarlo e manipolarlo. 47 si rimette in contatto con l'ICA e Diana: ottiene dati in cambio di contratti eseguiti globalmente a San Pietroburgo, Giappone, Malesia, Afghanistan, India.
Alla fine, 47 torna a Gontranno, stermina le truppe russa di Sergei e lo giustizia. Comprendendo che non troverà mai la pace, rifiuta l'assoluzione, appende il rosario regalatogli dal prete al cancello e torna stabilmente nell'ICA.

5. Frammentazione Psicologica e Minaccia Esistenziale: Contracts (2004) e Blood Money (2006)
In Contracts, 47 viene ferito all'addome a Parigi dall'ispettore corrotto Albert Fournier (associato al Franchise). In punto di morte in albergo, 47 rivive in deliri febbrili e flashback i suoi vecchi contratti. Medicato da un dottore ICA, elimina Fournier e fugge.
In Blood Money, l'ICA affronta la minaccia del 'Franchise' (sezione della cabala di Alpha Zerox), diretto dall'ex capo FBI Alexander Leland Cayne. Cayne coltiva super-sicari cloni (Mark Purayah, Mark Parchezzi III) che però muoiono entro 2 anni. Cayne vuole il DNA e il midollo di 47 per sbloccare la clonazione illimitata.
Il Franchise decima l'ICA. Diana Burnwood, finto traditrice, inietta a 47 un siero di morte simulata. Al funerale di 47 allestito per cremarlo e carpirne il midollo, Diana gli poggia le Silverballers e lo risveglia con un bacio e l'antidoto. 47 risorge e stermina tutti i testimoni (incluso Cayne, il prete, e i soldati), ricostituendo l'ICA.

6. Il Collasso Etico e la Deriva Solitaria: Hitman Absolution (2012)
Benjamin Travis, un dirigente deviato dell'ICA, crea in laboratorio una bambina geneticamente modificata (Victoria) per renderla un'arma letale dipendente da un isotopo radioattivo pendente al collo. Diana Burnwood si ribella e rapisce Victoria per risparmiarle il destino di 47.
Travis manda 47 a giustiziare Diana. 47 esita, la ferisce ma non l'uccide, accettando la supplica morale di proteggere Victoria. 47 va rogue; affronta il bieco industriale di armi Blake Dexter, elude lo sceriffo Clive Skurky e il detective Cosmo Faulkner, neutralizza l'alleato mercenario doppiogiochista Birdie e stermina le suore letali dell'ICA (The Saints) e i Pretoriani di Travis. Elimina infine Travis in Cornovaglia e Dexter a Chicago. Diana sopravvive e Victoria viene cresciuta normalmente.

7. Il Nuovo Ordine Mondiale: L'Inizio del World of Assassination (Hitman 2016)
Nel 2019/2020 l'ICA esegue compiti apparentemente slegati (Viktor Novikov, colpo di stato a Marrakesh, milizie in Colorado). Ma Diana capisce che sono orchestrati da un misterioso 'Shadow Client'.
Tutti i bersagli appartengono all'impero occulto di 'Providence', un'élite di oligarchi che governa il mondo. Lo Shadow Client usa l'imparzialità dell'ICA per attaccarli. Erich Soders, direttore supremo dell'ICA, si rivela un traditore al soldo di Providence, neutralizzato da 47 alla clinica GAMA a Hokkaido (Giappone). Providence ingaggia segretamente l'ICA per eliminare lo Shadow Client. Arthur Edwards ('La Costante') propone a Diana un fascicolo sulle origini passate di 47 in cambio dei servizi dell'ICA.

8. Rivelazioni e Alleanze: La Caduta delle Maschere (Hitman 2 - 2018)
Dando la caccia alla milizia (Alma Reynard, Robert & Sierra Knox, il Maelstrom a Mumbai), 47 trova il covo dello Shadow Client nel vecchio manicomio e scopre che è Lucas Grey (Soggetto 6), sopravvissuto. Grey cura l'amnesia di 47 con l'antidoto.
Insieme a Diana e Olivia Hall, formano una cabala ribelle. Catturano la Costante (Arthur Edwards) all'Isola di Sgàil e scoprono l'identità dei tre Partner fondatori (Carlisle, Ingram, Stuyvesant). Sgominano poi la banca fiduciaria a New York (Athena Savalas) e tracciano i Partner a Haven Island (Maldive). Edwards scappa, ma insinua a Diana che da giovane fu proprio un condizionato 47 a piazzare la bomba che uccise i suoi genitori.

9. Il Crepuscolo degli Dèi: Hitman 3 e la Fine dell'Egemonia (2021)
A Dubai, 47 edifica l'assassinio di Marcus Stuyvesant e Carl Ingram. Edwards usurpa le redini di Providence. A Dartmoor, mentre 47 recupera dati da Alexa Carlisle, Lucas Grey viene circondato dalle forze CICADA e si spara alla testa per non farsi catturare e salvare 47.
47 opera da solo: distrugge agenti ICA venuti a cercarlo a Berlino, distrugge il server dati principale ICA a Chongqing (Cina) con Olivia Hall, diffondendo i file secretati e dissolvendo l'ICA per sempre.
A Mendoza (Argentina), Diana mette in scena un secondo inganno ('Long Con'): finge di consegnare 47 a Edwards avvelenandolo con una neurotossina. È l'unico modo per infiltrare 47 oltre le linee di sicurezza. Sul treno blindato dei Carpazi in Romania, 47 si fa strada e inietta a Arthur Edwards il siero dell'amnesia, azzerandone l'intelletto. Diana dissolve le attività azionarie di Providence.

10. Conclusioni: La Sintesi del Libero Arbitrio e il Futuro dell'Assassino
Un anno dopo, un 47 emancipato e indipendente sorride lievemente in una cabina innevata, rinnovando liberamente il sodalizio con Diana. I due lavorano ora come liberi professionisti d'elite e giustizieri globali per sanare i poteri malvagi, dimostrando il trionfo del libero arbitrio sul destino biologico programmato.
`;

// Initialize the GoogleGenAI SDK safely
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("ATTENZIONE: GEMINI_API_KEY non configurata. Il bot risponderà con un fallback.");
    return null;
  }
  return new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
};

// ==========================================
// OFFLINE BACKUP COGNITIVE DATABASES & HELPERS
// ==========================================

const ENTITY_DOSSIERS: Record<string, { role: string; details: string; facts: string[] }> = {
  "Agente 47": {
    role: "L'assassino finale e costrutto biologico primario",
    details: "Prodotto d'alta ingegneria eugenetica del Dr. Ort-Meyer a Satu Mare, con i geni dei Cinque Padri. Ha affrontato innumerevoli minacce fino a distruggere la Providence e ritirarsi come giustiziere indipendente con Diana Burnwood.",
    facts: [
      "Ha il codice a barre 640509-040147 tatuato sulla nuca.",
      "Inizialmente condizionato mentalmente, spezza il controllo dei suoi creatori uno ad uno.",
      "Condivide un'infanzia segnata da memorie represse con Lucas Grey (Soggetto 6).",
      "Rappresenta l'emancipazione assoluta del libero arbitrio rispetto al determinismo biologico di laboratorio."
    ]
  },
  "Diana Burnwood": {
    role: "La storica Handler e alleata d'eccellenza dell'Agente 47",
    details: "La mente tattica dell'ICA e successivamente della cabala ribelle. I suoi genitori furono uccisi da un giovane 47 sotto condizionamento, ma ha scelto di allearsi con lui per abbattere le vere eminenze grigie del pianeta.",
    facts: [
      "Ha guidato 47 per oltre vent'anni attraverso le sfide dell'ICA, di Alpha Zerox, di Travis e del Franchise.",
      "Ha messo in scena finti tradimenti (in Blood Money con la morte finta e in Mendoza con la neurotossina) per infiltrare 47.",
      "Rappresenta la bussola morale e l'architetto strategico dietro ogni mossa dell'Agente 47."
    ]
  },
  "Lucas Grey (Soggetto 6)": {
    role: "Il fratello d'infanzia di 47 e leader della milizia ribelle",
    details: "Clone sopravvissuto del progetto Ort-Meyer. Ha fondato la milizia ribelle per dichiarare guerra fredda alla Providence, unificando le proprie forze con 47 e Diana prima del suo tragico sacrificio a Dartmoor.",
    facts: [
      "Sopravvissuto alla finta morte indotta da Ort-Meyer, è fuggito diventando un soldato mercenario d'elite.",
      "Fornisce a 47 il siero specifico in grado di dissolvere l'amnesia forzata.",
      "Ha preferito suicidarsi a Dartmoor piuttosto che farsi catturare dalla CICADA, salvaguardando l'operazione di 47."
    ]
  },
  "Arthur Edwards (La Costante)": {
    role: "Il secondo in comando e poi despota supremo della Providence",
    details: "Uomo d'affari machiavellico, guardiano delle chiavi della Providence. Dopo aver rubato il controllo della cabala ai Partner fondatori, tenta di catturare 47 per restituirgli il suo ruolo di automa smemorato.",
    facts: [
      "Manipola le fazioni politiche ed economiche con impeccabile cinismo burocratico.",
      "Rivela a Diana la verità sull'assassinio dei suoi genitori per indurre sfiducia tra lei e 47.",
      "Viene neutralizzato da 47 sul treno dei Carpazi mediante l'iniezione dello stesso siero dell'amnesia."
    ]
  },
  "Dr. Otto Wolfgang Ort-Meyer": {
    role: "Il folle genetista creatore del progetto eugenetico",
    details: "Direttore dell'Istituto a Satu Mare, Romania. Ha orchestrato il sodoalizio 'Sangue e Muscoli' con i Cinque Padri per assemblare i cloni letali della serie 47 e 48.",
    facts: [
      "Sfrutta l'ICA mandando 47 a eliminare gli altri quattro padri per consolidare l'esclusività del brevetto.",
      "Soggioga 47 con farmaci e sieri d'amnesia ad ogni tentativo di empatia o ribellione.",
      "Viene infine affrontato e giustiziato da 47, il quale gli spezza il collo nel suo stesso laboratorio sotterraneo."
    ]
  },
  "Victoria (Absolution)": {
    role: "La ragazza geneticamente modificata creata dall'ICA deviata",
    details: "Progettata da Benjamin Travis come arma vivente, la sua vitalità dipende da un atomo radioattivo (isotopo). Diana e 47 si ribellano per garantirle una vita libera ed esente da condizionamenti.",
    facts: [
      "Rappresenta una seconda possibilità di redenzione per 47, che ha giurato a Diana di proteggerla.",
      "Possiede abilità fisiche eccezionali quando entra in contatto con il suo isotopo, ma le rifiuta per un'esistenza normale.",
      "Riesce ad affrancarsi dalla violenza grazie agli sforzi congiunti di Diana e 47."
    ]
  },
  "Benjamin Travis (ICA corrotto)": {
    role: "Dirigente deviato e spietato dell'ICA",
    details: "Responsabile del dipartimento scientifico illecito dell'ICA. Ha tentato di sopprimere Diana Burnwood e catturare Victoria per addestrare un'armata di cloni asserviti.",
    facts: [
      "Utilizza truppe speciali come le 'Assassine in abito da suora' (The Saints) per dare la caccia a 47.",
      "Viene infine inseguito nell'ombra da 47 fino in Inghilterra e neutralizzato definitivamente.",
      "Rappresenta la decadenza morale e la corruzione del network neutrale dell'ICA."
    ]
  },
  "Alexander Leland Cayne (Franchise)": {
    role: "Ex direttore dell'FBI e capo occulto della cabala Alpha Zerox",
    details: "Leader dell'organizzazione concorrente dell'ICA (il Franchise), focalizzata sul monopolio tecnologico della clonazione umana. Desidera decodificare il sistema genetico di 47.",
    facts: [
      "Ha diffuso cloni difettosi con stabilità biologica limitata a soli due anni di vita.",
      "Orchestra la caccia serrata contro l'ICA fino al finto funerale di 47.",
      "Viene sterminato da un risorto 47 nella cattedrale davanti ai suoi stessi alleati politici e di stampa."
    ]
  },
  "Providence (Cabala Globale)": {
    role: "Il consorzio occulto dei partner supremi dell'oligarchia mondiale",
    details: "Cabala secolare che controlla i flussi finanziari, i governi e la stabilità globale dal dopoguerra. Ha inizialmente finanziato i progetti eugenetici del manicomio di Satu Mare.",
    facts: [
      "Composta originariamente dalle famiglie Carlisle, Stuyvesant e Ingram.",
      "Si avvale dei servizi della Costante e di consorzi di sicurezza ad altissimo livello (CICADA).",
      "Viene gradualmente epurata dall'interno e smantellata da 47, Diana, e Lucas Grey."
    ]
  },
  "ICA (International Contract Agency)": {
    role: "L'agenzia multinazionale neutrale per contratti d'assassinio d'elite",
    details: "Ente globale impermeabile alla politica ordinaria. Per anni fa da schermo operativo all'Agente 47, prima di essere infiltrata da potenze nemiche ed essere infine cancellata da Chongqing.",
    facts: [
      "Opera sotto la rigida egida dei contratti segreti approvati dal consiglio amministrativo.",
      "Viene travolta dal Franchise, da Travis e dalle mire egemoniche di Erich Soders.",
      "La sua intera infrastruttura di spionaggio globale viene esposta pubblicamente sul web da 47 e Olivia Hall."
    ]
  }
};

function getLocalAnalysisResult(itemA: string, itemB: string): string {
  const dossierA = ENTITY_DOSSIERS[itemA] || { role: "Soggetto dell'archivio ICA", details: "Record ad accesso ristretto.", facts: ["Presenza radicata nell'intrastoria."] };
  const dossierB = ENTITY_DOSSIERS[itemB] || { role: "Soggetto dell'archivio ICA", details: "Record ad accesso ristretto.", facts: ["Presenza radicata nell'intrastoria."] };

  let relType = "Relazione Strategica Sconosciuta";
  let contactDetails = "";
  let conflictDetails = "";
  let destinyDetails = "";

  if ((itemA === "Agente 47" && itemB === "Diana Burnwood") || (itemB === "Agente 47" && itemA === "Diana Burnwood")) {
    relType = "Sodalizio Professionale ed Esistenziale Simbiotico";
    contactDetails = "Legati fin dal reclutamento di 47 nel 1999. Inizialmente basato su contratti d'affari intermediati dall'ICA, la loro unione trascende l'aspetto aziendale quando scoprono che i genitori di Diana furono assassinati da un giovane 47 sotto condizionamento mentale. Entrambi scelgono di non arrendersi al passato, ma di forgiare un nuovo corso basato sulla fiducia reciproca.";
    conflictDetails = "Hanno affrontato ripetuti teatri di scontro. Diana ferisce di proposito 47 per salvarlo in Hitman: Absolution ed inietta veleni di morte apparente sia in Blood Money (funerale) sia a Mendoza (neurotossina sul treno). Ogni apparente tradimento è in verità una tattica magistrale finalizzata all'infiltrazione e alla vittoria finale.";
    destinyDetails = "Il loro sodalizio rappresenta l'antitesi del determinismo biologico. 47 sceglie liberamente di fidarsi di Diana anziché ucciderla o scappare, mentre Diana concede a 47 la sua umanità e la redenzione spirituale. Alla fine della saga World of Assassination, i due continuano a depurare il mondo, legati dalla scelta autonoma del libero arbitrio.";
  } else if ((itemA === "Agente 47" && itemB === "Lucas Grey (Soggetto 6)") || (itemB === "Agente 47" && itemA === "Lucas Grey (Soggetto 6)")) {
    relType = "Fratellanza Eugenetica e Ribellione Comune";
    contactDetails = "Compagni d'infanzia e compagni di prigionia all'interno del manicomio di Satu Mare sotto il Dr. Ort-Meyer. Sebbene la mente di 47 sia stata cancellata dai farmaci mnemonici del creatore, il legame persistente ha spinto il Soggetto 6 (Lucas Grey) a rintracciarlo anni dopo per rivelargli la verità comune.";
    conflictDetails = "Hanno agito inizialmente su sponde opposte, con Grey nel ruolo di 'Ombra' che manipola i contratti dell'ICA e 47 come inconsapevole esecutore. Una volta che si sono ricongiunti nel manicomio abbandonato in Romania, l'antidoto mnemonico ha risvegliato 47, cementando la loro alleanza segreta per stanare i Partner fondatori della Providence.";
    destinyDetails = "Grey si sacrifica eroicamente a Dartmoor per consentire a 47 di avanzare nella sua crociata. Questo sacrificio infligge una profonda impronta emotiva su 47, spingendolo ulteriormente a rivendicare la propria libertà di scelta contro l'eredità genetica distruttiva imposta da Ort-Meyer.";
  } else if ((itemA === "Agente 47" && itemB === "Arthur Edwards (La Costante)") || (itemB === "Agente 47" && itemA === "Arthur Edwards (La Costante)")) {
    relType = "Scontro Totale tra Strumento Eugenetico e Monopolio di Potere";
    contactDetails = "Arthur Edwards controlla la Providence, l'organizzazione che originariamente finanziò Satu Mare. La Costante vede l'Agente 47 esclusivamente come il capolavoro biologico di Ort-Meyer, un'arma aziendale preziosa che deve essere tenuta sotto controllo, resettata ad ogni accenno di libero arbitrio.";
    conflictDetails = "Edwards tenta di usurpare il potere dei Partner e controlla la rete CICADA per stringere la morsa su 47. Cerca di seminare discordia rivelando a Diana che 47 è l'assassino dei suoi genitori, sperando di spingerla a consegnarglielo. Edwards fallisce proprio per non aver compreso la lealtà e la forza del loro legame biologico-morale.";
    destinyDetails = "Sul treno corazzato dei Carpazi, 47 si trova di fronte all'architetto del condizionamento. Invece di cedere alla rabbia repressa, inietta a Edwards lo stesso siero dell'amnesia studiato per i cloni. Questo ribalta drammaticamente i ruoli: colui che controllava i destini del mondo viene privato della propria stessa identità e dei propri ricordi.";
  } else if ((itemA === "Agente 47" && itemB === "Dr. Otto Wolfgang Ort-Meyer") || (itemB === "Agente 47" && itemA === "Dr. Otto Wolfgang Ort-Meyer")) {
    relType = "Scontro Edipico tra Creatura d'Elite e Creatore Folle";
    contactDetails = "Dr. Ort-Meyer è il padre biologico di 47, avendone orchestrato la nascita mescolando il genoma dei Cinque Padri. Ha spento ogni impulso emotivo del giovane 47 per addestrarlo come freddo automa sterminatore neutrale, ma non ha previsto la formidabile scintilla del libero arbitrio e della memoria profonda.";
    conflictDetails = "Dopo aver manipolato l'ICA per farsi proteggere e far assassinare gli altri padri (Hong, Ochoa, Fuchs, Boris) da 47, Ort-Meyer viene smascherato dalla sua stessa creatura. 47 fa irruzione nei laboratori di Satu Mare, combatte l'esercito artificiale degli Agenti 48 e affronta il suo artefice.";
    destinyDetails = "L'esecuzione di Ort-Meyer (a cui viene spezzato il collo) segna la prima vera rottura del determinismo genetico di 47. Pur essendo programmato per non ribellarsi mai al creatore, l'Agente 47 supera il condizionamento biologico e rivendica con la forza la propria prima indipendenza morale.";
  } else {
    relType = "Fattore di Correlazione ed Influenza Intrastorica";
    contactDetails = `Nell'archivio segretato dell'ICA, **${itemA}** (${dossierA.role}) e **${itemB}** (${dossierB.role}) condividono importanti connessioni nella rete criminale globale. \n\n${dossierA.details}\n\n${dossierB.details}`;
    conflictDetails = `Durante gli snodi cruciali della saga (dall'epoca dei Cinque Padri fino allo smantellamento di Providence), questi due soggetti si sono incrociati o hanno polarizzato l'operato delle rispettive organizzazioni. \nElenchiamo i dettagli estratti dai terminali:\n\n` + 
      `* **Riferimento ${itemA}**: ${dossierA.facts[0] || ""} ${dossierA.facts[1] || ""}\n` +
      `* **Riferimento ${itemB}**: ${dossierB.facts[0] || ""} ${dossierB.facts[1] || ""}`;
    destinyDetails = `La convergenza tattica di questi soggetti ha influenzato inevitabilmente lo scontro tra determinismo e libero arbitrio. Ognuna delle due forze ha tentato di assecondare o spezzare il legame sotterraneo di segretezza e potere occulto che tiene in ostaggio la civiltà, portando infine alla caduta delle vecchie strutture ICA e Providence.`;
  }

  return `⚠️ **[CONNESSIONE BACKUP ICA ATTIVA]**
*Sincronizzazione primaria interrotta per congestione satellitare. Elaborazione diagnostica locale in corso...*

### CORRELAZIONE TATTICA: ${itemA.toUpperCase()} vs ${itemB.toUpperCase()}
**Natura della relazione**: *${relType}*

---

#### 1. Punti di Contatto e Connessione Storica
${contactDetails}

#### 2. Attrito Tattico ed Eventi Chiave
${conflictDetails}

#### 3. Analisi del Destino e del Libero Arbitrio
${destinyDetails}

---
*Canale di comunicazione ridondante cifrato RSA-4096. Fine del report diagnostico locale.*`;
}

function getLocalChatResponse(userQuery: string, persona: string): string {
  const queryLower = userQuery.toLowerCase();
  let baseReply = "";

  if (persona === "diana") {
    if (queryLower.includes("47") || queryLower.includes("agente")) {
      baseReply = "47, rassicurati. Sto analizzando le tracce della Providence. Anche se i ponti satellitari sono sotto forte disturbo, la mia guida tattica rimane stabile. Continua con il profilo stabilito.";
    } else if (queryLower.includes("providence") || queryLower.includes("costante") || queryLower.includes("edwards")) {
      baseReply = "Arthur Edwards e i Partner fondatori della Providence credono di guidare le redini del pianeta, 47. Ma non capiscono che la loro fitta rete di controllo è anche la loro più grande vulnerabilità. Olivia Hall ci sta aiutando ad aprirci un varco.";
    } else if (queryLower.includes("padri") || queryLower.includes("padre") || queryLower.includes("ort-meyer") || queryLower.includes("satu mare")) {
      baseReply = "La vicenda di Satu Mare e del dottor Ort-Meyer è una macchia indelebile nella bioetica del secolo scorso. Quei cinque ex commilitoni hanno finanziato una mostruosità, ma tu ne sei uscito spezzando le loro catene. Ora dobbiamo completare l'opera.";
    } else if (queryLower.includes("lucas") || queryLower.includes("grey") || queryLower.includes("soggetto 6")) {
      baseReply = "Lucas Grey ha agito con amara determinazione per tutta la vita. Il suo legame con te, fin dall'infanzia, è stato l'unico elemento puro in quell'edificio di tortura. Non dimenticheremo il suo sacrificio a Dartmoor.";
    } else {
      baseReply = "Comprendo le tue perplessità, Agente. I canali dell'ICA sono instabili in questo momento a causa di un massiccio attacco d'interferenza dell'Alpha Zerox, ma sono al tuo fianco per finalizzare l'obiettivo. Rimaniamo concentrati sui dossier dei bersagli.";
    }
    return `⚠️ **[CANALE DI EMERGENZA BURNWOOD ATTIVO]**
*A causa di forti interferenze nei ponti satellitari primari, Diana Burnwood comunica attraverso questo canale audio analogico secondario rintracciato.*

"${baseReply}"`;
  } else if (persona === "grey") {
    if (queryLower.includes("47") || queryLower.includes("soggetto")) {
      baseReply = "Fratello mio... mi hanno dato la caccia per decenni, ma sapevo che ti avrei ritrovato. L'antidoto sta eliminando il veleno mnemonico di Ort-Meyer. Dobbiamo combattere fianco a fianco per sradicare la Providence una volta per tutte.";
    } else if (queryLower.includes("providence") || queryLower.includes("edwards") || queryLower.includes("costante")) {
      baseReply = "Quegli oligarchi pensano di possedere le nostre vite perché hanno firmato i conti del manicomio di Satu Mare. Ma le loro banche a New York e i loro server dati ad Haven Island bruceranno sotto i nostri occhi.";
    } else if (queryLower.includes("ort-meyer") || queryLower.includes("padri")) {
      baseReply = "Il Dr. Ort-Meyer e quel sodalizio 'Blood and Muscle' ci hanno marchiato come armi. Ma noi possediamo una volontà che loro non potevano calcolare nei loro sterili provini. Spezzeremo la loro eredità.";
    } else {
      baseReply = "Rilevo disturbi radio della CICADA qui in Colorado, fratello. Ma la milizia è pronta. Qualunque sia il tuo ostacolo, procedi con spietatezza. La vendetta rinasce dall'ombra.";
    }
    return `⚠️ **[PONTE RADIO DELLA MILIZIA ATTIVO]**
*Messaggio decentralizzato criptato trasmesso da Lucas Grey (Soggetto 06) attraverso nodi locali di riserva.*

"${baseReply}"`;
  } else {
    if (queryLower.includes("dati") || queryLower.includes("analisi") || queryLower.includes("connessione")) {
      baseReply = "DIAGNOSTI-STREAMS: Analisi locale caricata con successo nell'Eprom volatile. File eugenetici ricollegati a Satu Mare, Romania. Tasso di attrito tattico stabilizzato al 98.4%.";
    } else if (queryLower.includes("aiuto") || queryLower.includes("comandi")) {
      baseReply = "DIRETTIVE: È possibile consultare i Cinque Padri, i Record dei Profili o avviare scansioni comparative dal pannello analizzatore per attivare ricostruzioni offline dei dati d'intrastoria.";
    } else {
      baseReply = "STATUS: Connessione server primario interrotta [CODE_503_TEMPORARY_UNAVAILABLE]. Attivazione protocolli di contingenza ICA-9000. Tutti i dati locali rimangono ad accesso riservato Livello 5.";
    }
    return `⚠️ **[TERMINALE DI EMERGENZA ICA-9000]**
[SYSTEM_WARN] SATELLITE_LINK_OFFLINE - REDIRECTING TO SECURE VOLATILE STORAGE
----------------------------------------------------------------------
${baseReply}
----------------------------------------------------------------------`;
  }
}

// API Endpoint to carry out conversational interactions using Gemini with the lore document
app.post("/api/gemini/chat", async (req, res) => {
  const { messages, userRoleSelection } = req.body;
  const lastUserMsg = messages[messages.length - 1];
  const userQuery = lastUserMsg ? lastUserMsg.content : "Ciao";

  try {
    // Default fallback in case API key is missing
    const ai = getGeminiClient();
    if (!ai) {
      console.warn("Nessun client Gemini, invocazione fallback locale per chat.");
      return res.json({
        text: getLocalChatResponse(userQuery, userRoleSelection)
      });
    }

    // Prepare system instructions depending on selected assistance persona
    let roleInstruction = "";
    if (userRoleSelection === "diana") {
      roleInstruction = `Agisci come DIANA BURNWOOD, storica handler dell'ICA dell'Agente 47. Il tuo tono è incredibilmente aristocratico, estremamente intelligente, analitico, calmo, sofisticato e protettivo. Rivolgiti all'interlocutore chiamandolo talvolta "47" o "Agente". Parla in lingua italiana fluente, con classe impeccabile.`;
    } else if (userRoleSelection === "grey") {
      roleInstruction = `Agisci come LUCAS GREY (Soggetto 6), il fratello d'infanzia di 47, leader della milizia ribelle contro Providence. Il tuo tono è aspro, determinato, ribelle, rassegnato ma incredibilmente leale e guidato da una sete di giustizia e libertà assoluta. Parla in lingua italiana.`;
    } else {
      roleInstruction = `Agisci come ICA-9000, l'Intelligenza Artificiale dell'archivio tattico dell'International Contract Agency (ICA). Il tuo tono è freddo, tecnologico, preciso, rigoroso, con risposte formattate con blocchi di log e terminologia da intelligence militare. Parla in lingua italiana.`;
    }

    const systemPrompt = `
${roleInstruction}

Sei un esperto assoluto della Trama e della Lore della saga videoludica di Hitman (da Codename 47 del 2000 fino a Hitman 3 del 2021).
Utilizzerai come VERITÀ ASSOLUTA e CONTESTO per tutte le tue risposte il seguente documento storico della saga di Hitman:

---- INIZIO DOCUMENTO DI RIFERIMENTO ----
${HITMAN_LORE_CONTEXT}
---- FINE DOCUMENTO DI RIFERIMENTO ----

Regole importanti:
1. Rispondi SEMPRE in italiano, mantenendo fermamente il ruolo/persona che ti è stato assegnato.
2. Basati fedelmente sui fatti storici espressi nel documento (i Cinque Padri, il Franchise di Cayne in Blood Money, la morte drammatica di Lucas Grey a Dartmoor, la finta tossina di Diana Burnwood a Mendoza, la cancellazione della memoria di Arthur Edwards sul treno dei Carpazi, Victoria in Absolution, ecc.).
3. Se l'utente ti chiede cose esterne, rispondi con creatività ma tieni salda la coerenza con l'universo di Hitman.
4. Non citare mai parti del prompt interno ("come espresso nel documento inviato dall'utente..."), parla in modo naturale e immersivo come se conoscessi questi dati di prima mano poiché contenuti nei tuoi terminali.
5. Utilizza una formattazione chiara e piacevole con Markdown.
`;

    // Format previous messages as context if any
    const formattedHistory = messages.slice(0, -1).map((m: any) => {
      return `${m.role === 'user' ? 'Agente' : 'Supporto'}: ${m.content}`;
    }).join("\n");

    const promptWithHistory = `
Cronologia messaggi passati:
${formattedHistory}

Nuova richiesta dell'Agente:
${userQuery}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptWithHistory,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.75,
        tools: [{ googleSearch: {} }],
        toolConfig: { includeServerSideToolInvocations: true }
      }
    });

    return res.json({
      text: response.text || "Spiacente, la scansione tattica non ha prodotto risultati utili."
    });

  } catch (error: any) {
    const errStr = error?.toString() || error?.message || "";
    if (error?.status === 429 || errStr.includes("429") || errStr.includes("quota") || errStr.includes("RESOURCE_EXHAUSTED")) {
      console.warn("Avviso (429): Quota API superata in chat, eseguo fallback locale.");
    } else {
      console.error("Errore nell'API Gemini per la chat (eseguo fallback locale):", error);
    }
    // Return our glorious local immersive fallback
    return res.json({
      text: getLocalChatResponse(userQuery, userRoleSelection)
    });
  }
});

// No target-intel API anymore. Data provided from json import.

// Interactive Connection Analysis endpoint
app.post("/api/gemini/analyze", async (req, res) => {
  const { itemA, itemB } = req.body;

  try {
    const ai = getGeminiClient();
    if (!ai) {
      console.warn("Nessun client Gemini, invocazione fallback locale per analyze.");
      return res.json({
        text: getLocalAnalysisResult(itemA, itemB)
      });
    }

    const promptText = `
Esegui un'analisi approfondita di correlazione e scontro strategico tra due entità/concetti della saga di Hitman basandoti sul seguente archivio:

${HITMAN_LORE_CONTEXT}

Entità A: ${itemA}
Entità B: ${itemB}

Fornisci una risposta strutturata in italiano contenente:
1. **Punti di Contatto e Connessione Storica** (Come si collegano questi due elementi della saga).
2. **Attrito Tattico ed Eventi Chiave** (Conflitti, alleanze, assassinii o tradimenti cruciali che li vedono protagonisti).
3. **Analisi del Destino e del Libero Arbitrio** (In che modo la loro relazione ha influenzato l'emancipazione o caduta finale dei soggetti nell'intrastoria).

Usa un tono freddo, professionale, degno di un report dell'ICA (International Contract Agency). Rispondi con markdown ben strutturato.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: promptText,
      config: {
        systemInstruction: "Sei l'algoritmo di intelligence analitica ICA Analyzer. Esprimi report logici freddi, spietati e accurati.",
        thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH },
      }
    });

    return res.json({
      text: response.text || "Impossibile calcolare il coefficiente di attrito tattico."
    });

  } catch (error: any) {
    const errStr = error?.toString() || error?.message || "";
    if (error?.status === 429 || errStr.includes("429") || errStr.includes("quota") || errStr.includes("RESOURCE_EXHAUSTED")) {
      console.warn("Avviso (429): Quota API superata in analyze, eseguo fallback locale.");
    } else {
      console.error("Errore nell'API Gemini per l'analisi (eseguo fallback locale):", error);
    }
    // Return our glorious local immersive fallback
    return res.json({
      text: getLocalAnalysisResult(itemA, itemB)
    });
  }
});

// Configure Vite or Static files serving
async function setupMainframe() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`====================================================`);
    console.log(`[MAIN FRAMEWORK ACTIVE] Port ${PORT}`);
    console.log(`[URL] http://localhost:${PORT}`);
    console.log(`====================================================`);
  });
}

setupMainframe();
