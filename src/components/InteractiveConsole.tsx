"use client";

import { useState, useRef, useEffect } from "react";
import { Shield, Sparkles, Send, RefreshCw, Cpu, Layers, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LogLine {
  text: string;
  type: "command" | "output" | "system" | "error";
  delay?: number;
}

export default function InteractiveConsole() {
  const [logs, setLogs] = useState<LogLine[]>([
    { text: "Initializing Nexavaro Global Uplink Core...", type: "system" },
    { text: "Connection established with 7 global edge nodes.", type: "system" },
    { text: "Type or click a command below to query our systems.", type: "system" },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const commands = [
    { name: "help", desc: "List all commands", icon: HelpCircle },
    { name: "services", desc: "Show core services", icon: Layers },
    { name: "stack", desc: "View technology stack", icon: Cpu },
    { name: "mission", desc: "Display company mission", icon: Sparkles },
    { name: "contact", desc: "Get direct contact link", icon: Send },
  ];

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [logs, isTyping]);

  const executeCommand = async (cmdName: string) => {
    if (isTyping) return;
    setIsTyping(true);

    // Append the command log
    setLogs((prev) => [...prev, { text: `guest@nexavaro:~$ run --action=${cmdName}`, type: "command" }]);

    await new Promise((resolve) => setTimeout(resolve, 600));

    let output: LogLine[] = [];

    switch (cmdName) {
      case "help":
        output = [
          { text: "Available CLI commands:", type: "output" },
          { text: "  services  - Print out active technology and ERP offerings.", type: "output" },
          { text: "  stack     - List our frontend, backend, and AI stacks.", type: "output" },
          { text: "  mission   - Print Nexavaro's remote-first founding core values.", type: "output" },
          { text: "  contact   - Display instant communication links and sales inbox.", type: "output" },
          { text: "  clear     - Wipe terminal logs.", type: "output" },
        ];
        break;
      case "services":
        output = [
          { text: "▶ ACTIVE PRACTICES & CAPABILITIES:", type: "system" },
          { text: "• Custom ERP Systems: Standardized dashboards, unified CRM & secure operations.", type: "output" },
          { text: "• Artificial Intelligence: Tailored LLM agents, semantic search (RAG) & predictive modeling.", type: "output" },
          { text: "• Web & Mobile Apps: Next-generation React/Next.js dynamic web engines & native apps.", type: "output" },
          { text: "• Cloud Infrastructure: Serverless orchestration, low-latency API layers & AES-256 databases.", type: "output" },
        ];
        break;
      case "stack":
        output = [
          { text: "▶ CURRENT NEXAVARO CORE TECH MATRIX:", type: "system" },
          { text: "• Frontend: React 19, Next.js, Framer Motion, Tailwind CSS v4", type: "output" },
          { text: "• Backend: FastAPI, Node.js, Express, Python", type: "output" },
          { text: "• Database: PostgreSQL, MongoDB, vector indexing (ChromaDB/Pinecone)", type: "output" },
          { text: "• Intelligence: OpenAI API, Llama models, MediaPipe, OpenCV", type: "output" },
        ];
        break;
      case "mission":
        output = [
          { text: "▶ NEXAVARO FOUNDING PRINCIPLES:", type: "system" },
          { text: "• 100% Remote-First: Sourcing the highest caliber engineers globally.", type: "output" },
          { text: "• Hyper-Performance: Zero bloat. We optimize core web vitals for 100% scores.", type: "output" },
          { text: "• Clean Architecture: Scalable, testable, and strictly audited enterprise code.", type: "output" },
        ];
        break;
      case "contact":
        output = [
          { text: "▶ OUTBOUND COMMUNICATIONS HUB:", type: "system" },
          { text: "• Primary Inbox: ceo.nexavora@gmail.com [Unlimited direct submissions]", type: "output" },
          { text: "• Direct Line: +91 91599 26553", type: "output" },
          { text: "• Global Workspace: remote.nexavaro.com [Operating Globally]", type: "output" },
        ];
        break;
      case "clear":
        setLogs([]);
        setIsTyping(false);
        return;
      default:
        output = [{ text: `Error: Command '${cmdName}' not found. Type 'help' for options.`, type: "error" }];
    }

    setLogs((prev) => [...prev, ...output]);
    setIsTyping(false);
  };

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col h-[320px] relative">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5 shrink-0">
        <div className="flex items-center gap-2">
          {/* OS Circle Buttons */}
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="text-[10px] text-text-secondary font-mono ml-2 tracking-wider uppercase font-semibold">
            Nexavaro Console v1.2
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[9px] text-emerald-400">
          <Shield className="w-3.5 h-3.5" />
          <span className="tracking-wide">SECURE LINK</span>
        </div>
      </div>

      {/* Terminal Display */}
      <div className="flex-grow p-4 overflow-y-auto font-mono text-[10px] sm:text-xs leading-relaxed space-y-2 scrollbar-thin select-text">
        <AnimatePresence initial={false}>
          {logs.map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className={`whitespace-pre-wrap ${
                log.type === "command"
                  ? "text-accent-cyan font-semibold"
                  : log.type === "system"
                  ? "text-accent-purple font-semibold"
                  : log.type === "error"
                  ? "text-rose-400 font-medium"
                  : "text-slate-300 font-light"
              }`}
            >
              {log.text}
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <div className="text-accent-cyan flex items-center gap-1.5 font-bold">
            <RefreshCw className="w-3 h-3 animate-spin" />
            <span>Simulating lookup...</span>
          </div>
        )}
        <div ref={terminalEndRef} />
      </div>

      {/* Command Shortcuts overlay */}
      <div className="p-3 border-t border-white/5 bg-white/5 flex flex-wrap gap-2 shrink-0 items-center justify-center">
        <span className="text-[8px] sm:text-[9px] text-text-secondary uppercase tracking-widest font-bold font-mono mr-1">
          Quick Queries:
        </span>
        {commands.map((cmd) => {
          const Icon = cmd.icon;
          return (
            <button
              key={cmd.name}
              onClick={() => executeCommand(cmd.name)}
              disabled={isTyping}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 hover:border-accent-cyan/30 hover:bg-accent-cyan/5 text-[9px] sm:text-[10px] text-white font-mono transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              <Icon className="w-3 h-3 text-accent-cyan" />
              <span>{cmd.name}</span>
            </button>
          );
        })}
        <button
          onClick={() => executeCommand("clear")}
          disabled={isTyping}
          className="px-2 py-1 rounded-lg bg-rose-500/10 border border-rose-500/20 hover:bg-rose-500/20 text-[9px] sm:text-[10px] text-rose-400 font-mono transition-all cursor-pointer"
        >
          clear
        </button>
      </div>
    </div>
  );
}
