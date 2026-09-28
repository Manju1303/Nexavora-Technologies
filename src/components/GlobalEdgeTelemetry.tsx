"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Globe2,
  ShieldCheck,
  Zap,
  Activity,
  Server,
  Wifi,
  Radio,
  Lock,
} from "lucide-react";

interface EdgeNode {
  id: string;
  name: string;
  code: string;
  latency: number;
  status: "optimal" | "active";
  region: string;
  throughput: string;
  coords: { x: number; y: number };
}

const edgeNodes: EdgeNode[] = [
  { id: "maa", name: "Chennai (South Asia Core)", code: "MAA-01", latency: 4, status: "optimal", region: "India", throughput: "14.8 Gbps", coords: { x: 71, y: 55 } },
  { id: "sin", name: "Singapore (AP-SE)", code: "SIN-02", latency: 14, status: "optimal", region: "Asia Pacific", throughput: "22.4 Gbps", coords: { x: 78, y: 62 } },
  { id: "nrt", name: "Tokyo (AP-NE)", code: "NRT-01", latency: 24, status: "optimal", region: "East Asia", throughput: "18.1 Gbps", coords: { x: 86, y: 40 } },
  { id: "fra", name: "Frankfurt (EU-Central)", code: "FRA-01", latency: 18, status: "optimal", region: "Europe", throughput: "31.2 Gbps", coords: { x: 51, y: 32 } },
  { id: "lhr", name: "London (EU-West)", code: "LHR-02", latency: 19, status: "optimal", region: "United Kingdom", throughput: "27.5 Gbps", coords: { x: 47, y: 30 } },
  { id: "sfo", name: "San Francisco (US-West)", code: "SFO-01", latency: 28, status: "optimal", region: "North America", throughput: "34.0 Gbps", coords: { x: 19, y: 38 } },
];

export default function GlobalEdgeTelemetry() {
  const [selectedNode, setSelectedNode] = useState<EdgeNode>(edgeNodes[0]);
  const [requestCount, setRequestCount] = useState(2481920);
  const [liveLatency, setLiveLatency] = useState(selectedNode.latency);

  useEffect(() => {
    // Dynamic counter increment
    const interval = setInterval(() => {
      setRequestCount((prev) => prev + Math.floor(Math.random() * 7) + 3);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setLiveLatency(selectedNode.latency);
    const pingInterval = setInterval(() => {
      // Micro jitter simulation
      const jitter = (Math.random() * 1.6 - 0.8).toFixed(1);
      setLiveLatency(Math.max(2, parseFloat((selectedNode.latency + parseFloat(jitter)).toFixed(1))));
    }, 1800);
    return () => clearInterval(pingInterval);
  }, [selectedNode]);

  return (
    <section id="telemetry" className="py-24 relative overflow-hidden bg-bg-dark">
      {/* Section Divider */}
      <div className="section-glow-divider absolute top-0 left-0 right-0" />

      {/* Ambient background rays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[30rem] bg-gradient-to-r from-accent-cyan/10 via-accent-violet/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-semibold uppercase tracking-widest mb-4">
            <Radio className="w-3.5 h-3.5 animate-pulse text-accent-cyan" />
            Global Edge Telemetry & Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            High-Speed Infrastructure. <br />
            <span className="text-gradient-primary">Zero Downtime Resilience.</span>
          </h2>
          <p className="text-text-secondary text-sm sm:text-base mt-4 font-light">
            Every application, SaaS portal, and enterprise system engineered by Nexavora is deployed across globally distributed edge networks with automatic failover and millisecond responsiveness.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-cyan to-accent-violet mx-auto mt-6 rounded-full" />
        </div>

        {/* Global Monitor Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Visualizer: Interactive World Map & Nodes (Col 8) */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl glass-card-premium border border-white/10 relative overflow-hidden">
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-mono uppercase text-emerald-400 font-semibold tracking-wider">
                  Nexavora Mesh Uplink · All 6 Nodes Operational
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-text-secondary">
                <Lock className="w-3.5 h-3.5 text-accent-cyan" />
                <span>mTLS & HTTP/3 Verified</span>
              </div>
            </div>

            {/* Simulated Interactive World Grid Canvas */}
            <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl bg-[#060c18]/90 border border-white/5 overflow-hidden flex items-center justify-center">
              {/* Grid backdrop */}
              <div className="absolute inset-0 bg-grid-pattern opacity-40" />

              {/* Concentric radar rings centered on Chennai Hub */}
              <div className="absolute top-[55%] left-[71%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="w-40 h-40 rounded-full border border-accent-cyan/20 animate-ping" style={{ animationDuration: "3s" }} />
                <div className="w-80 h-80 rounded-full border border-accent-violet/10 animate-ping" style={{ animationDuration: "5s", animationDelay: "1s" }} />
              </div>

              {/* SVG connection mesh lines between nodes */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="pipelineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                {edgeNodes.map((target, idx) => {
                  if (target.id === "maa") return null;
                  const hub = edgeNodes[0];
                  return (
                    <g key={`mesh-${idx}`}>
                      <line
                        x1={`${hub.coords.x}%`}
                        y1={`${hub.coords.y}%`}
                        x2={`${target.coords.x}%`}
                        y2={`${target.coords.y}%`}
                        stroke="rgba(6, 182, 212, 0.2)"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                      {/* Animated traveling data packet */}
                      <circle r="2.5" fill="#06B6D4">
                        <animateMotion
                          path={`M ${hub.coords.x * 6} ${hub.coords.y * 3.5} L ${target.coords.x * 6} ${target.coords.y * 3.5}`}
                          dur={`${2 + idx * 0.4}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                    </g>
                  );
                })}
              </svg>

              {/* Node Hotspots */}
              {edgeNodes.map((node) => {
                const isSelected = selectedNode.id === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    style={{ left: `${node.coords.x}%`, top: `${node.coords.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20 cursor-pointer"
                  >
                    <div className="relative flex items-center justify-center">
                      {isSelected && (
                        <div className="absolute w-8 h-8 rounded-full bg-accent-cyan/30 animate-ping" />
                      )}
                      <div
                        className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                          isSelected
                            ? "bg-accent-cyan border-white scale-125 shadow-lg shadow-accent-cyan/50"
                            : "bg-bg-dark border-accent-violet hover:border-accent-cyan hover:scale-110"
                        }`}
                      />
                      {/* Tooltip Pill */}
                      <div
                        className={`absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold transition-all ${
                          isSelected
                            ? "bg-accent-cyan text-slate-950 opacity-100 shadow-md scale-100"
                            : "bg-black/80 text-white border border-white/10 opacity-70 group-hover:opacity-100 scale-95"
                        }`}
                      >
                        {node.code} · {node.latency}ms
                      </div>
                    </div>
                  </button>
                );
              })}

              {/* Global Latency Watermark */}
              <div className="absolute bottom-4 left-4 pointer-events-none">
                <span className="text-[10px] font-mono text-text-secondary uppercase">
                  Global Mesh Topology · Automated Failover Rerouting Active
                </span>
              </div>
            </div>

            {/* Region Selector Quick Pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {edgeNodes.map((node) => {
                const isSelected = selectedNode.id === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                      isSelected
                        ? "bg-accent-cyan/20 border border-accent-cyan text-white shadow-sm shadow-accent-cyan/30"
                        : "bg-white/5 border border-white/5 text-text-secondary hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {node.name.split(" ")[0]} ({node.latency}ms)
                  </button>
                );
              })}
            </div>
          </div>

          {/* Node Diagnostics & Real-time Metrics Column (Col 4) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Active Node Card */}
            <div className="p-6 rounded-3xl glass-card border border-accent-cyan/30 bg-accent-cyan/5 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent-cyan font-bold">
                  Active Edge Node
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                  HEALTH: 100%
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-white mb-1">
                {selectedNode.name}
              </h3>
              <p className="text-xs text-text-secondary font-mono mb-4">
                Region: {selectedNode.region} · {selectedNode.code}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 font-mono">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-[10px] text-text-secondary block">EDGE PING</span>
                  <span className="text-xl font-bold text-accent-cyan flex items-center gap-1">
                    {liveLatency} <span className="text-xs font-normal">ms</span>
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-[10px] text-text-secondary block">BANDWIDTH</span>
                  <span className="text-xl font-bold text-white">
                    {selectedNode.throughput}
                  </span>
                </div>
              </div>
            </div>

            {/* Global Key Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="p-5 rounded-2xl glass-card border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-violet/10 text-accent-violet flex items-center justify-center">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-text-secondary block font-medium">Enterprise SLA Uptime</span>
                    <span className="text-xl font-bold text-white font-mono">99.998%</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                  GUARANTEED
                </span>
              </div>

              <div className="p-5 rounded-2xl glass-card border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 text-accent-cyan flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-text-secondary block font-medium">Global Encrypted Requests</span>
                    <span className="text-xl font-bold text-accent-cyan font-mono">
                      {requestCount.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              </div>

              <div className="p-5 rounded-2xl glass-card border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-pink/10 text-accent-pink flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-text-secondary block font-medium">Threat Mitigation</span>
                    <span className="text-xl font-bold text-white font-mono">Zero Breach</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-accent-pink bg-accent-pink/10 px-2 py-1 rounded">
                  SOC-2 READY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
