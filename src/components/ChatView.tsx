import { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, Bot, Shield, HelpCircle, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  role: "user" | "model";
  content: string;
}

export default function ChatView() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      content: "Connessione sicura stabilita con l'Archivio Centrale. Sono a tua completa disposizione, Agente, per analizzare l'intrastoria della nostra saga biologica. \n\nScegli il mio ruolo e ponimi qualsiasi quesito."
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [persona, setPersona] = useState<"mainframe" | "diana" | "grey">("mainframe");

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim() || loading) return;

    const userMessage: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput("");
    loadingChat(text, userMessage);
  };

  const loadingChat = async (text: string, userMessage: Message) => {
    setLoading(true);
    try {
      const chatHistory = [...messages, userMessage];
      const response = await fetch("/api/gemini/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: chatHistory,
          userRoleSelection: persona
        })
      });

      if (!response.ok) {
        throw new Error("Connessione interrotta con l'archivio strategico.");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "model", content: data.text }]);
    } catch (error: any) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          content: `[ERRORE TRASMISSIONE] Impossibile contattare la rete. Assicurati che il server sia attivo e la chiave API sia registrata. \nCausa: ${error.message || "Errore sconosciuto."}`
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    let initialGreeting = "";
    if (persona === "diana") {
      initialGreeting = "Saluti, 47. Ho completato l'analisi del database sulle nostre passate operazioni. Sono qui per guidarti nella ricostruzione dei fatti e pianificare i prossimi passi. Cosa desideri approfondire?";
    } else if (persona === "grey") {
      initialGreeting = "Fratello. Sono Lucas Grey. Abbiamo fatto un patto di sangue da bambini per distruggere Providence. Chiedimi qualunque cosa sui nostri primi anni o sulla crociata che abbiamo portato a termine.";
    } else {
      initialGreeting = "ICA-9000 Online. Archivio biogenetico e cronologico dell'Agente 47 attivo. Immettere la richiesta tattica per ottenere dati in tempo reale.";
    }
    setMessages([{ role: "model", content: initialGreeting }]);
  };

  // Trigger initial greeting when persona changes
  useEffect(() => {
    clearChat();
  }, [persona]);

  const suggestions = [
    "Chi sono i Cinque Padri?",
    "Cosa accadde nel finale di Blood Money?",
    "Qual è il destino di Victoria in Absolution?",
    "Come si conclude la saga nei Carpazi?"
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch min-h-[580px]">
      {/* Persona Selector Panel */}
      <div className="lg:col-span-3 bg-black/40 backdrop-blur-md p-5 rounded-sm border border-white/5 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="text-[10px] uppercase font-mono tracking-widest text-slate-500 border-b border-white/5 pb-2 flex items-center justify-between">
            <span>ROLES & INTEL SENDER</span>
            <Bot className="w-3.5 h-3.5 text-red-500" />
          </div>

          <div className="space-y-3">
            {/* Mainframe */}
            <button
              onClick={() => setPersona("mainframe")}
              className={`w-full text-left p-3 rounded-sm border transition-all text-xs font-mono relative ${
                persona === "mainframe"
                  ? "bg-white/5 border-l-2 border-red-600 border-t-white/10 border-b-transparent border-r-transparent text-white"
                  : "bg-transparent border-transparent text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className="block font-bold uppercase tracking-wider">ICA-9000 MAINFRAME</span>
              <span className="text-[10px] text-slate-555 mt-1 block font-sans italic">Freddo, analitico, orientato ai file biologici.</span>
            </button>

            {/* Diana */}
            <button
              onClick={() => setPersona("diana")}
              className={`w-full text-left p-3 rounded-sm border transition-all text-xs font-mono relative ${
                persona === "diana"
                  ? "bg-white/5 border-l-2 border-red-600 border-t-white/10 border-b-transparent border-r-transparent text-white"
                  : "bg-transparent border-transparent text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className="block font-bold uppercase tracking-wider">DIANA BURNWOOD</span>
              <span className="text-[10px] text-slate-555 mt-1 block font-sans italic">Aristocratica, protettiva, strategica ed elegante.</span>
            </button>

            {/* Lucas Grey */}
            <button
              onClick={() => setPersona("grey")}
              className={`w-full text-left p-3 rounded-sm border transition-all text-xs font-mono relative ${
                persona === "grey"
                  ? "bg-white/5 border-l-2 border-red-600 border-t-white/10 border-b-transparent border-r-transparent text-white"
                  : "bg-transparent border-transparent text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className="block font-bold uppercase tracking-wider">LUCAS GREY (SOGGETTO 06)</span>
              <span className="text-[10px] text-slate-555 mt-1 block font-sans italic">Fraterno, risoluto, grintoso e focalizzato sulla vendetta.</span>
            </button>
          </div>
        </div>

        {/* Clear and Status Block */}
        <div className="mt-6 pt-4 border-t border-white/5 space-y-3">
          <button
            onClick={clearChat}
            className="w-full bg-white/5 hover:bg-white/10 text-slate-450 hover:text-white transition-colors duration-200 p-2.5 rounded-sm border border-white/10 text-[10px] font-mono tracking-widest uppercase flex items-center justify-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>RESET TERMINAL CHAT</span>
          </button>
          
          <div className="bg-black/40 p-3 rounded-sm border border-white/5 text-[10px] font-mono text-slate-500">
            <span className="text-red-500 font-bold block uppercase tracking-wider">CRITTOGRAFIA SECURE</span>
            Sincronizzazione bi-turno attiva con modello Gemini-3.5.
          </div>
        </div>
      </div>

      {/* Main Chat Conversation area */}
      <div className="lg:col-span-9 bg-black/30 backdrop-blur-md rounded-sm border border-white/5 flex flex-col justify-between overflow-hidden">
        {/* Chat Header */}
        <div className="bg-white/5 px-4 py-3 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-slate-300">
              {persona === "diana"
                ? "Canale Diana Burnwood"
                : persona === "grey"
                ? "Canale Lucas Grey (Soggetto 6)"
                : "Terminale ICA-9000"}
            </span>
          </div>
          <HelpCircle className="w-4 h-4 text-slate-500 hover:text-slate-300 cursor-pointer" />
        </div>

        {/* Scrollable messages container */}
        <div className="p-4 flex-1 overflow-y-auto space-y-4 max-h-[400px]">
          <AnimatePresence initial={false}>
            {messages.map((msg, index) => {
              const isModel = msg.role === "model";
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start gap-3 ${
                    isModel ? "justify-start" : "justify-end"
                  }`}
                >
                  {isModel && (
                    <div className="p-2 rounded-sm bg-red-950/20 border border-red-900/40 text-red-500 mt-1 flex-shrink-0">
                      <Shield className="w-4 h-4" />
                    </div>
                  )}
                  
                  <div
                    className={`p-3.5 rounded-sm text-xs max-w-[80%] leading-relaxed whitespace-pre-wrap shadow-md ${
                      isModel
                        ? "bg-white/5 border border-white/10 text-slate-300 rounded-tl-none"
                        : "bg-red-600 border border-red-700 text-white rounded-tr-none font-medium"
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
          
          {loading && (
            <div className="flex items-start gap-3 justify-start">
              <div className="p-2 rounded-sm bg-red-950/20 border border-red-900/40 text-red-500 mt-1 flex-shrink-0 animate-pulse">
                <Shield className="w-4 h-4" />
              </div>
              <div className="p-3 bg-white/5 border border-white/10 rounded-sm rounded-tl-none text-slate-500 text-xs font-mono flex items-center gap-2">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
                <span>INTERFACING...</span>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Pre-filled Suggestions Block */}
        <div className="px-4 py-2 bg-black/45 border-t border-white/5 flex items-center gap-2 overflow-x-auto select-none no-scrollbar">
          <span className="text-[9px] font-mono text-slate-500 flex-shrink-0 font-bold uppercase tracking-wider">PROMPTS:</span>
          {suggestions.map((sug) => (
            <button
              key={sug}
              onClick={() => handleSend(sug)}
              disabled={loading}
              className="text-[10px] whitespace-nowrap bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5 px-2.5 py-1 rounded-sm font-mono transition-all disabled:opacity-50"
            >
              {sug}
            </button>
          ))}
        </div>

        {/* Input area */}
        <div className="p-3 bg-white/5 border-t border-white/5 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            disabled={loading}
            placeholder={
              persona === "diana"
                ? "Scrivi un messaggio a Diana..."
                : persona === "grey"
                ? "Invia un canale a Lucas..."
                : "Inserisci richiesta per Mainframe..."
            }
            className="flex-1 bg-black/40 border border-white/10 rounded-sm py-2.5 px-4 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-red-650 transition-colors font-mono"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || loading}
            className="bg-red-600 hover:bg-red-700 disabled:bg-white/5 disabled:text-slate-650 border border-red-900/40 text-white p-2.5 rounded-sm transition-all"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
