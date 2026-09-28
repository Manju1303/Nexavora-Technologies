"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Server,
  Layers,
  ShieldCheck,
  ArrowRight,
  Database,
  Cloud,
  CheckCircle2,
  Copy,
  Check,
  Terminal,
  Code2,
} from "lucide-react";

interface NodeDetail {
  id: string;
  name: string;
  type: string;
  latency: string;
  throughput: string;
  description: string;
  codeSnippet: string;
}

interface ArchitectureTrack {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  icon: typeof Cpu;
  color: string;
  nodes: NodeDetail[];
  highlights: string[];
}

const tracks: ArchitectureTrack[] = [
  {
    id: "ai",
    title: "AI & Neural Pipelines",
    badge: "GenAI & Automation",
    subtitle: "End-to-end vector embeddings, RAG pipelines, and sub-100ms LLM agent orchestration.",
    icon: Cpu,
    color: "violet",
    highlights: [
      "Sub-80ms Vector Similarity Search",
      "Context-Aware Hybrid RAG Retrieval",
      "Fine-tuned Domain Specific Models",
      "Enterprise Data Privacy Guarantee",
    ],
    nodes: [
      {
        id: "ingest",
        name: "Telemetry Ingestion",
        type: "Input Layer",
        latency: "1.2ms",
        throughput: "50k req/s",
        description: "Streams unstructured text, PDFs, audio, and database events into sanitization pipelines.",
        codeSnippet: `// 1. Ingest & Tokenize\nconst stream = await nexAi.ingest({\n  source: "enterprise_db",\n  format: "rag_chunk",\n  chunkSize: 512\n});`,
      },
      {
        id: "embed",
        name: "Vector Embedder (HNSW)",
        type: "AI Core",
        latency: "14.5ms",
        throughput: "12k chunks/s",
        description: "Generates high-dimensional semantic embeddings stored in distributed vector indexes.",
        codeSnippet: `// 2. Vector Indexing\nconst vectors = await nexAi.embed(stream, {\n  dimensions: 1536,\n  similarity: "cosine"\n});`,
      },
      {
        id: "rag",
        name: "Neural RAG Engine",
        type: "Agent Orchestration",
        latency: "42ms",
        throughput: "4k queries/s",
        description: "Retrieves top-k verified enterprise contexts with hallucination mitigation filters.",
        codeSnippet: `// 3. Contextual Synthesis\nconst answer = await nexAi.generate({\n  query: userPrompt,\n  context: vectors.top(5),\n  temperature: 0.2\n});`,
      },
      {
        id: "edge-out",
        name: "Secure Client Dispatch",
        type: "Egress Gateway",
        latency: "2.1ms",
        throughput: "60k resp/s",
        description: "Streams encrypted tokens back to users with real-time SSE protocols.",
        codeSnippet: `// 4. SSE Edge Streaming\nreturn new Response(answer.toReadableStream(), {\n  headers: { "Content-Type": "text/event-stream" }\n});`,
      },
    ],
  },
  {
    id: "erp",
    title: "Enterprise ERP & SaaS Core",
    badge: "Scalable Systems",
    subtitle: "Mission-critical multi-tenant databases, transaction ledgers, and automated business workflows.",
    icon: Server,
    color: "cyan",
    highlights: [
      "ACID Transaction Compliance",
      "Multi-Tenant Tenant Isolation",
      "Automated Role-Based Access Control",
      "Audit Trail & Ledger Verification",
    ],
    nodes: [
      {
        id: "gateway",
        name: "Enterprise Gateway",
        type: "API Proxy",
        latency: "0.8ms",
        throughput: "80k req/s",
        description: "Validates tenant JWT credentials, rate limits, and routes requests to microservices.",
        codeSnippet: `// 1. Tenant Authentication\nconst tenant = await nexErp.authenticate(req);\nif (!tenant.hasRole("FINANCE_ADMIN")) throw 403;`,
      },
      {
        id: "ledger",
        name: "Double-Entry Ledger",
        type: "Transaction Core",
        latency: "6.4ms",
        throughput: "15k tx/s",
        description: "Processes atomic financial debits, credits, and inventory ledger state updates.",
        codeSnippet: `// 2. Atomic Ledger Transaction\nawait db.transaction(async (tx) => {\n  await tx.debit(sender, amount);\n  await tx.credit(receiver, amount);\n});`,
      },
      {
        id: "sync",
        name: "Real-time Event Bus",
        type: "Messaging Queue",
        latency: "2.0ms",
        throughput: "100k events/s",
        description: "Publishes state change events to WebSockets, mobile push, and webhook listeners.",
        codeSnippet: `// 3. Event Fanout\nawait eventBus.publish("INVOICE_GENERATED", {\n  invoiceId: "INV-2026-992",\n  tenantId: tenant.id\n});`,
      },
      {
        id: "db",
        name: "Distributed Sharded DB",
        type: "Storage",
        latency: "3.2ms",
        throughput: "30k qps",
        description: "Replicated across primary and read-replicas with point-in-time recovery backup.",
        codeSnippet: `// 4. Encrypted Persistent Store\nawait db.tenants.upsert({\n  where: { id: tenant.id },\n  data: { status: "SYNCED", updated: Date.now() }\n});`,
      },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps Zero-Trust",
    badge: "High Availability",
    subtitle: "Automated Kubernetes orchestration, multi-region failover, and continuous delivery.",
    icon: Cloud,
    color: "pink",
    highlights: [
      "Zero-Downtime Rolling Deploys",
      "Multi-Region Active-Active Mesh",
      "DDoS & Web Application Firewall",
      "Continuous Compliance Audits",
    ],
    nodes: [
      {
        id: "waf",
        name: "Cloud Edge WAF",
        type: "Security Shield",
        latency: "0.5ms",
        throughput: "120k req/s",
        description: "Inspects incoming packets, mitigates L3/L4/L7 attacks, and terminates TLS 1.3.",
        codeSnippet: `// 1. Edge Shield Verification\nconst isSafe = await waf.inspect(request);\nif (!isSafe) return response.block("ANOMALY_DETECTED");`,
      },
      {
        id: "k8s",
        name: "K8s Microservice Mesh",
        type: "Container Cluster",
        latency: "4.8ms",
        throughput: "45k req/s",
        description: "Auto-scales container replicas based on CPU, memory, and queue pressure.",
        codeSnippet: `// 2. Autoscaler Target\napiVersion: autoscaling/v2\nspec:\n  maxReplicas: 100\n  metrics:\n  - type: Resource (targetCPU: 75%)`,
      },
      {
        id: "mesh",
        name: "Service-to-Service mTLS",
        type: "Internal Mesh",
        latency: "1.1ms",
        throughput: "90k req/s",
        description: "Every internal RPC call is authenticated via short-lived cryptographic certs.",
        codeSnippet: `// 3. Mutual TLS Link\nconst client = new GrpcClient({\n  cert: clientCert,\n  target: "billing.internal:50051"\n});`,
      },
      {
        id: "telemetry-out",
        name: "Live Observability Pod",
        type: "Telemetry Sink",
        latency: "1.5ms",
        throughput: "200k logs/s",
        description: "Aggregates OpenTelemetry traces, latency histograms, and alert triggers.",
        codeSnippet: `// 4. OpenTelemetry Trace\ntracer.startSpan("process_order", {\n  attributes: { "env": "production", "region": "MAA" }\n}).end();`,
      },
    ],
  },
];

export default function InteractiveArchitecture() {
  const [activeTrack, setActiveTrack] = useState<ArchitectureTrack>(tracks[0]);
  const [selectedNodeIndex, setSelectedNodeIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeNode = activeTrack.nodes[selectedNodeIndex] || activeTrack.nodes[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeNode.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-bg-dark">
      {/* Section Divider */}
      <div className="section-glow-divider absolute top-0 left-0 right-0" />

      {/* Radiant ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70rem] h-[35rem] bg-gradient-to-b from-accent-violet/10 via-accent-cyan/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-violet/10 border border-accent-violet/20 text-accent-violet text-xs font-semibold uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5 text-accent-violet" />
            Enterprise Architecture Visualizer
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered for Massive Scale. <br />
            <span className="text-gradient-primary">Interactive System Topology.</span>
          </h2>
          <p className="text-text-secondary text-sm sm:text-base mt-4 font-light">
            Click into our production architecture tracks below to inspect data flows, inspect microservice latencies, and review the actual code abstractions powering client platforms.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-violet to-accent-cyan mx-auto mt-6 rounded-full" />
        </div>

        {/* Pillar Switcher Tabs (Stripe / Datadog style) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {tracks.map((track) => {
            const Icon = track.icon;
            const isActive = activeTrack.id === track.id;
            return (
              <button
                key={track.id}
                onClick={() => {
                  setActiveTrack(track);
                  setSelectedNodeIndex(0);
                }}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-accent-violet/30 to-accent-cyan/20 border border-accent-violet/50 text-white shadow-xl shadow-accent-violet/15 scale-[1.02]"
                    : "glass-card border border-white/5 text-text-secondary hover:text-white hover:border-white/20"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                    isActive ? "bg-accent-violet text-white" : "bg-white/5 text-text-secondary"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span>{track.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Architecture Console Box */}
        <div className="rounded-3xl glass-card-premium border border-white/10 p-6 sm:p-10 relative overflow-hidden">
          {/* Track Summary Bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/5 pb-6 mb-8">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/20 text-accent-violet text-[10px] font-mono uppercase tracking-wider mb-2">
                {activeTrack.badge}
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                {activeTrack.title}
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm font-light mt-1">
                {activeTrack.subtitle}
              </p>
            </div>

            {/* Key Advantages Pills */}
            <div className="flex flex-wrap gap-2">
              {activeTrack.highlights.slice(0, 2).map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/5 text-[11px] text-text-secondary font-mono"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Pipeline Node Graph (Horizontal Flow) */}
          <div className="mb-10">
            <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest block mb-4">
              Click a node below to inspect execution telemetry:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
              {activeTrack.nodes.map((node, idx) => {
                const isSelected = selectedNodeIndex === idx;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeIndex(idx)}
                    className={`relative p-5 rounded-2xl text-left transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "bg-accent-violet/15 border-2 border-accent-violet shadow-lg shadow-accent-violet/20 -translate-y-1"
                        : "glass-card border border-white/5 hover:border-white/20 hover:bg-white/5"
                    }`}
                  >
                    {/* Node Step Counter */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono text-accent-cyan font-bold">
                        STAGE 0{idx + 1}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-text-secondary border border-white/5">
                        {node.latency}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white mb-1">
                      {node.name}
                    </h4>
                    <p className="text-[11px] text-text-secondary font-mono">
                      {node.type}
                    </p>

                    {/* Active Indicator Pulse */}
                    {isSelected && (
                      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-accent-violet animate-ping" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Node Deep Dive & Live Code Playground */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Node Explanation (Col 5) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/40 border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-accent-violet font-bold">
                    Node Diagnostics
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    ACTIVE
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white mb-2">
                  {activeNode.name}
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed font-light mb-6">
                  {activeNode.description}
                </p>

                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[9px] text-text-secondary block">PROCESSING LATENCY</span>
                    <span className="text-sm font-bold text-accent-cyan">{activeNode.latency}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[9px] text-text-secondary block">BURST CAPACITY</span>
                    <span className="text-sm font-bold text-white">{activeNode.throughput}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono text-text-secondary">
                  Protocol: TLS 1.3 / gRPC / JSON-RPC
                </span>
                <span className="text-[10px] text-accent-violet font-semibold">
                  Zero Trust Verified ✓
                </span>
              </div>
            </div>

            {/* Code Snippet Box (Col 7) */}
            <div className="lg:col-span-7 rounded-2xl bg-[#060b17] border border-white/10 overflow-hidden flex flex-col justify-between font-mono">
              {/* Code Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-xs text-text-secondary ml-2 font-mono">
                    pipeline.{activeTrack.id}.ts
                  </span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-[11px] text-text-secondary hover:text-white px-2 py-1 rounded bg-white/5 hover:bg-white/10 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Pre Block */}
              <div className="p-5 text-xs text-slate-300 overflow-x-auto leading-relaxed flex-grow">
                <pre>
                  <code>{activeNode.codeSnippet}</code>
                </pre>
              </div>

              {/* Terminal Footer Indicator */}
              <div className="px-4 py-2 bg-black/60 border-t border-white/5 flex items-center justify-between text-[10px] text-text-secondary">
                <span>TypeScript 5.x / Next.js Edge Runtime</span>
                <span className="text-accent-cyan">Deterministic 0-fail rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
