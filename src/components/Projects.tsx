import React, { useState } from 'react';
import {
  Cpu,
  Droplets,
  Radio,
  CheckCircle2,
  Activity,
  Layers,
  Sparkles,
  Info,
  Maximize2,
  X,
  Play,
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';

interface ProjectsProps {
  isDarkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const project = PROJECTS_DATA[0];
  const innovexa = PROJECTS_DATA[1];

  // Interactive hardware simulation state
  const [soilMoisture, setSoilMoisture] = useState<number>(30);
  const [showSimModal, setShowSimModal] = useState<boolean>(false);
  const [selectedComponent, setSelectedComponent] = useState<number | null>(
    null
  );

  const moistureThreshold = 40;
  const isPumpActive = soilMoisture < moistureThreshold;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <div className="text-xs font-semibold tracking-wider uppercase text-purple-400 mb-2">
            04. Featured Engineering Projects
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Applied Engineering & Intelligent Systems
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-4" />

          <p
            className={`max-w-2xl mx-auto text-sm ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Developing technology-focused solutions across IoT, healthcare,
            emergency systems, automation, and intelligent applications.
          </p>
        </div>

        {/* ============================================================
            PROJECT 1 — SMART FARMING IoT
           ============================================================ */}

        <div
          className={`rounded-3xl border overflow-hidden transition-all shadow-xl ${
            isDarkMode
              ? 'bg-slate-900/60 border-purple-500/20 shadow-purple-950/20 backdrop-blur-xl'
              : 'bg-white border-slate-200 shadow-slate-200'
          }`}
        >
          {/* Top Banner Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-slate-800/80">

            {/* Project Image */}
            <div className="lg:col-span-6 relative aspect-video lg:aspect-auto min-h-[300px] overflow-hidden bg-slate-950">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';

                  const fallback = e.currentTarget.nextElementSibling;

                  if (fallback) {
                    (fallback as HTMLElement).style.display = 'flex';
                  }
                }}
              />

              {/* Fallback image frame */}
              <div
                style={{ display: 'none' }}
                className="w-full h-full flex-col items-center justify-center p-8 bg-gradient-to-br from-indigo-950 to-slate-950 text-center"
              >
                <Cpu className="w-14 h-14 text-purple-400 mb-3" />

                <span className="font-bold text-lg text-white">
                  Smart Farming Prototype
                </span>

                <span className="text-xs text-purple-300 mt-1">
                  NodeMCU ESP8266 & Sensors
                </span>
              </div>

              {/* Category */}
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-purple-500/30 px-3 py-1 rounded-lg text-xs font-semibold text-purple-300">
                {project.category}
              </div>

              {/* Simulator Button */}
              <button
                onClick={() => setShowSimModal(true)}
                className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-purple-600/90 hover:bg-purple-600 text-white backdrop-blur-md shadow-lg transition-all"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Open Circuit Simulator</span>
              </button>
            </div>

            {/* Project Info */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="text-xs font-medium text-emerald-400 flex items-center gap-1.5 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Hardware Prototyped & Verified</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-sm font-medium text-purple-300 mb-4 leading-snug">
                  {project.tagline}
                </p>

                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-md bg-purple-950/50 border border-purple-500/20 text-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setShowSimModal(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500 transition-all shadow-md shadow-purple-600/20 cursor-pointer"
                >
                  <Activity className="w-4 h-4" />
                  <span>Test Live IoT Interactive Demo</span>
                </button>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium border border-slate-700 text-slate-300 hover:text-white hover:border-purple-400 transition-all"
                >
                  <span>Discuss Architecture</span>
                </a>
              </div>
            </div>
          </div>

          {/* Project Deep Dive */}
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* System Overview */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-400" />
                <span>System Architecture & Operational Overview</span>
              </h4>

              <div className="space-y-3 text-xs leading-relaxed text-slate-300">
                {project.overview.map((paragraph, oIdx) => (
                  <div key={oIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{paragraph}</span>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="pt-4 mt-4 border-t border-slate-800/80">
                <div className="text-xs font-semibold text-purple-300 mb-2 uppercase tracking-wider">
                  Core Engineering Capabilities
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {project.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/80 text-slate-300 flex items-center gap-2"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hardware Components */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-indigo-400" />
                <span>Hardware Components Specification</span>
              </h4>

              <p className="text-xs text-slate-400">
                Click any hardware module below to inspect its operational role
                and specifications:
              </p>

              <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-1">
                {project.components.map((comp, cIdx) => (
                  <div
                    key={cIdx}
                    onClick={() =>
                      setSelectedComponent(
                        selectedComponent === cIdx ? null : cIdx
                      )
                    }
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                      selectedComponent === cIdx
                        ? 'bg-purple-950/40 border-purple-500/50'
                        : isDarkMode
                        ? 'bg-slate-950/50 border-slate-800/80 hover:border-slate-700'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono flex items-center justify-center">
                          {cIdx + 1}
                        </span>

                        <span className="font-semibold text-xs sm:text-sm text-slate-200">
                          {comp.name}
                        </span>
                      </div>

                      <span className="text-[11px] text-purple-300 font-medium">
                        {comp.role}
                      </span>
                    </div>

                    {selectedComponent === cIdx && (
                      <p className="mt-2.5 text-xs text-slate-300 bg-slate-900/80 p-2.5 rounded-lg border border-purple-500/20 leading-relaxed animate-in fade-in">
                        {comp.specs}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            PROJECT 2 — INNOVEXA
           ============================================================ */}

        {innovexa && (
          <div
            className={`mt-12 rounded-3xl border overflow-hidden transition-all shadow-xl ${
              isDarkMode
                ? 'bg-slate-900/60 border-cyan-500/20 shadow-cyan-950/20 backdrop-blur-xl'
                : 'bg-white border-slate-200 shadow-slate-200'
            }`}
          >
            {/* Innovexa Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-slate-800/80">

              {/* Innovexa Visual */}
<div className="lg:col-span-6 relative min-h-[320px] overflow-hidden bg-slate-950">
  <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950" />

  <div className="relative h-full min-h-[320px] flex flex-col justify-between p-8">
    <div className="flex items-center justify-between gap-4">
      <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-300">
        <Activity className="w-4 h-4" />
        INNOVEXA :: EMERGENCY DISPATCH
      </div>

      <div className="px-3 py-1 rounded-lg border border-rose-500/40 bg-rose-950/40 text-xs font-mono text-rose-300">
        ALERT STATUS: STANDBY
      </div>
    </div>

    <div className="my-8">
      <svg
        viewBox="0 0 800 120"
        className="w-full h-24"
        preserveAspectRatio="none"
      >
        <polyline
          points="0,60 100,60 125,60 145,20 165,100 185,60 300,60 330,60 350,25 375,95 395,60 520,60 550,60 575,15 600,105 625,60 720,60 760,60 800,60"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          className="text-rose-500"
        />
      </svg>
    </div>

    <div className="grid grid-cols-3 gap-3">
      <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/20">
        <div className="text-[10px] uppercase tracking-wider text-slate-400">
          Heart Rate
        </div>
        <div className="text-lg font-bold text-rose-400 mt-1">
          78 BPM
        </div>
      </div>

      <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/20">
        <div className="text-[10px] uppercase tracking-wider text-slate-400">
          SpO2
        </div>
        <div className="text-lg font-bold text-cyan-400 mt-1">
          98%
        </div>
      </div>

      <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/20">
        <div className="text-[10px] uppercase tracking-wider text-slate-400">
          Alert Protocol
        </div>
        <div className="text-lg font-bold text-emerald-400 mt-1">
          READY
        </div>
      </div>
    </div>
  </div>
</div>
            
             

              {/* Innovexa Info */}
              <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-medium text-cyan-400 flex items-center gap-1.5 mb-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span>Academic Laboratory Project</span>
                  </div>

                  <h3
                    className={`text-2xl sm:text-3xl font-bold tracking-tight mb-3 ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {innovexa.title}
                  </h3>

                  <p className="text-sm font-medium text-cyan-400 mb-4 leading-snug">
                    {innovexa.tagline}
                  </p>

                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      isDarkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {innovexa.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {innovexa.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/20 text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/60">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-500 hover:to-blue-500 transition-all shadow-md"
                  >
                    <Activity className="w-4 h-4" />
                    <span>Discuss Innovexa</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Innovexa Details */}
            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

              {/* Overview */}
              <div className="space-y-5">
                <div>
                  <h4
                    className={`text-lg font-bold flex items-center gap-2 mb-4 ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    <Layers className="w-5 h-5 text-cyan-400" />
                    <span>Project Overview</span>
                  </h4>

                  <div className="space-y-3">
                    {innovexa.overview.map((item, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-2.5 text-xs leading-relaxed ${
                          isDarkMode ? 'text-slate-300' : 'text-slate-600'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Components */}
                <div>
                  <h4
                    className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                      isDarkMode ? 'text-cyan-300' : 'text-cyan-700'
                    }`}
                  >
                    System Components
                  </h4>

                  <div className="space-y-2.5">
                    {innovexa.components.map((comp, idx) => (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-xl border ${
                          isDarkMode
                            ? 'bg-slate-950/40 border-slate-800'
                            : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3 mb-1">
                          <span
                            className={`text-xs font-semibold ${
                              isDarkMode
                                ? 'text-slate-200'
                                : 'text-slate-900'
                            }`}
                          >
                            {comp.name}
                          </span>

                          <span className="text-[10px] text-cyan-400">
                            {comp.role}
                          </span>
                        </div>

                        <p
                          className={`text-xs leading-relaxed ${
                            isDarkMode
                              ? 'text-slate-400'
                              : 'text-slate-600'
                          }`}
                        >
                          {comp.specs}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h4
                  className={`text-lg font-bold flex items-center gap-2 mb-4 ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <span>Key Features & Learnings</span>
                </h4>

                <div className="space-y-3">
                  {innovexa.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border flex items-start gap-3 ${
                        isDarkMode
                          ? 'bg-slate-950/40 border-slate-800 text-slate-300'
                          : 'bg-slate-50 border-slate-200 text-slate-600'
                      }`}
                    >
                      <span className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span className="text-xs leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  className={`mt-8 p-5 rounded-2xl border ${
                    isDarkMode
                      ? 'bg-slate-950/50 border-cyan-500/20'
                      : 'bg-cyan-50 border-cyan-200'
                  }`}
                >
                  <div
                    className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                      isDarkMode ? 'text-cyan-300' : 'text-cyan-700'
                    }`}
                  >
                    My Contribution
                  </div>

                  <p
                    className={`text-sm leading-relaxed ${
                      isDarkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Co-developed system architecture logic, alert dispatch
                    routines, and interface prototyping for seamless emergency
                    response simulation.
                  </p>
                </div>

                <div
                  className={`mt-5 p-5 rounded-2xl border ${
                    isDarkMode
                      ? 'bg-slate-950/50 border-slate-800'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div
                    className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                      isDarkMode ? 'text-cyan-300' : 'text-cyan-700'
                    }`}
                  >
                    Key Takeaways
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <span
                        className={
                          isDarkMode ? 'text-slate-300' : 'text-slate-600'
                        }
                      >
                        Understanding real-time trigger constraints in
                        mission-critical applications
                      </span>
                    </div>

                    <div className="text-xs flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <span
                        className={
                          isDarkMode ? 'text-slate-300' : 'text-slate-600'
                        }
                      >
                        Designing fault-tolerant notifications with fallback
                        mechanisms
                      </span>
                    </div>

                    <div className="text-xs flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <span
                        className={
                          isDarkMode ? 'text-slate-300' : 'text-slate-600'
                        }
                      >
                        Structuring modular user and contact records
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className={`mt-5 text-xs ${
                    isDarkMode ? 'text-slate-500' : 'text-slate-500'
                  }`}
                >
                  ● Academic Laboratory Project • Repository available upon
                  request
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================
            INTERACTIVE IoT CIRCUIT & CLOSED-LOOP SIMULATION MODAL
           ============================================================ */}

        {showSimModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
            <div
              className={`w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border p-6 sm:p-8 shadow-2xl relative ${
                isDarkMode
                  ? 'bg-slate-900 border-purple-500/30 text-white'
                  : 'bg-white border-slate-200 text-slate-900'
              }`}
            >
              <button
                onClick={() => setShowSimModal(false)}
                className="absolute top-5 right-5 p-2 rounded-xl border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1">
                  Interactive Testbench
                </div>

                <h3 className="text-2xl font-bold tracking-tight">
                  IoT Smart Farming Simulation & Circuit Telemetry
                </h3>

                <p className="text-xs text-slate-400 mt-1">
                  Simulate soil moisture levels to test the automated
                  closed-loop irrigation logic and remote Blynk cloud
                  telemetry.
                </p>
              </div>

              {/* Interactive Simulation Dashboard */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">

                {/* Control Panel */}
                <div className="md:col-span-5 p-5 rounded-2xl bg-slate-950/60 border border-purple-500/20 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Soil Moisture Level
                    </span>

                    <span className="text-sm font-mono font-bold text-purple-300">
                      {soilMoisture}%
                    </span>
                  </div>

                  <input
                    type="range"
                    min="10"
                    max="90"
                    value={soilMoisture}
                    onChange={(e) =>
                      setSoilMoisture(Number(e.target.value))
                    }
                    className="w-full accent-purple-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
                  />

                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span className="text-rose-400 font-medium">
                      10% (Critically Dry)
                    </span>

                    <span className="text-amber-400 font-medium">
                      Threshold: {moistureThreshold}%
                    </span>

                    <span className="text-emerald-400 font-medium">
                      90% (Saturated)
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setSoilMoisture(22)}
                      className="flex-1 py-1.5 px-2 rounded-lg text-xs bg-rose-950/40 border border-rose-500/30 text-rose-300 hover:bg-rose-900/40"
                    >
                      Trigger Dry (22%)
                    </button>

                    <button
                      onClick={() => setSoilMoisture(68)}
                      className="flex-1 py-1.5 px-2 rounded-lg text-xs bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/40"
                    >
                      Sufficient (68%)
                    </button>
                  </div>
                </div>

                {/* Microcontroller State */}
                <div className="md:col-span-7 grid grid-cols-2 gap-3">

                  {/* LCD Display */}
                  <div className="col-span-2 p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/40 font-mono">
                    <div className="text-[10px] text-emerald-400/80 uppercase tracking-widest mb-1 flex items-center justify-between">
                      <span>16x2 I2C LCD Display Screen</span>
                      <span className="text-[9px] text-emerald-500">
                        I2C Address: 0x27
                      </span>
                    </div>

                    <div className="bg-emerald-950/70 p-3 rounded border border-emerald-500/30 text-emerald-300 text-sm tracking-wider font-semibold space-y-1">
                      <div>
                        MOIST: {soilMoisture}% | SOIL:{' '}
                        {soilMoisture < moistureThreshold
                          ? 'DRY'
                          : 'OPTIMAL'}
                      </div>

                      <div className="text-xs text-emerald-400">
                        PUMP STATUS:{' '}
                        {isPumpActive ? '>> RUNNING <<' : 'STANDBY'}
                      </div>
                    </div>
                  </div>

                  {/* Relay */}
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <div className="text-[11px] text-slate-400 mb-1 flex items-center gap-1.5">
                      <Radio className="w-3.5 h-3.5 text-purple-400" />
                      <span>5V Relay Module</span>
                    </div>

                    <div className="text-sm font-bold">
                      {isPumpActive ? (
                        <span className="text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" />
                          ENERGIZED (ON)
                        </span>
                      ) : (
                        <span className="text-slate-400">
                          DE-ENERGIZED (OFF)
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Pump */}
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <div className="text-[11px] text-slate-400 mb-1 flex items-center gap-1.5">
                      <Droplets className="w-3.5 h-3.5 text-blue-400" />
                      <span>9V DC Water Pump</span>
                    </div>

                    <div className="text-sm font-bold">
                      {isPumpActive ? (
                        <span className="text-cyan-400 flex items-center gap-1 animate-pulse">
                          <Play className="w-4 h-4" />
                          PUMPING WATER
                        </span>
                      ) : (
                        <span className="text-slate-400">IDLE</span>
                      )}
                    </div>
                  </div>

                  {/* Blynk */}
                  <div className="col-span-2 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-purple-400" />

                      <div>
                        <div className="text-xs font-semibold text-slate-200">
                          Blynk Cloud Telemetry Stream
                        </div>

                        <div className="text-[11px] text-slate-400">
                          Virtual Pin V1: {soilMoisture}% · Virtual Pin V2
                          (Pump): {isPumpActive ? '1' : '0'}
                        </div>
                      </div>
                    </div>

                    <span className="text-[10px] text-emerald-400 font-mono bg-emerald-950/50 border border-emerald-500/30 px-2 py-0.5 rounded">
                      SYNCED
                    </span>
                  </div>
                </div>
              </div>

              {/* Pinout */}
              <div className="p-4 rounded-2xl bg-slate-950/40 border border-slate-800">
                <div className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Info className="w-4 h-4" />
                  <span>Pinout Connections Summary</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs text-slate-300">
                  <div className="p-2 bg-slate-900/60 rounded border border-slate-800">
                    <span className="text-purple-400 font-mono">
                      ESP8266 A0
                    </span>{' '}
                    → Soil Sensor Analog Out
                  </div>

                  <div className="p-2 bg-slate-900/60 rounded border border-slate-800">
                    <span className="text-purple-400 font-mono">
                      ESP8266 D1/D2
                    </span>{' '}
                    → LCD SCL & SDA (I2C)
                  </div>

                  <div className="p-2 bg-slate-900/60 rounded border border-slate-800">
                    <span className="text-purple-400 font-mono">
                      ESP8266 D5
                    </span>{' '}
                    → 5V Relay IN Signal
                  </div>

                  <div className="p-2 bg-slate-900/60 rounded border border-slate-800">
                    <span className="text-purple-400 font-mono">
                      Relay NO/COM
                    </span>{' '}
                    → 9V Pump + Battery
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
