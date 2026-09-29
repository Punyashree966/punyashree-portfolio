import React from 'react';
import { Cpu, Database, Network, Code2, Target, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  isDarkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  const pillars = [
    {
      icon: Cpu,
      title: 'Artificial Intelligence & Machine Learning',
      desc: 'Developing analytical intuition for predictive modeling, supervised/unsupervised algorithms, and machine intelligence.',
    },
    {
      icon: Database,
      title: 'Data Science & Statistical Analysis',
      desc: 'Transforming complex, raw datasets into clean structures and deriving quantitative insights using Python ecosystems.',
    },
    {
      icon: Network,
      title: 'IoT & Embedded Physical Systems',
      desc: 'Interfacing microcontrollers (ESP8266) with real-world sensor telemetry and wireless IoT dashboards for automation.',
    },
    {
      icon: Code2,
      title: 'Procedural & Object-Oriented Logic',
      desc: 'Writing structured, robust algorithms in C, C++, and Python with strong focus on time/space efficiency and memory awareness.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <div className="text-xs font-semibold tracking-wider uppercase text-purple-400 mb-2">
            01. Background & Perspective
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            About Punyashree M
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Narrative & Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Avatar / Portrait Box */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative group w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden p-1 bg-gradient-to-br from-purple-500/40 via-indigo-500/20 to-transparent">
              <div
                className={`w-full h-full rounded-2xl overflow-hidden relative ${
                  isDarkMode ? 'bg-slate-900' : 'bg-slate-100'
                }`}
              >
                <img
                  src="/src/assets/images/student_engineer_avatar_1790675217035.jpg"
                  alt="Punyashree M - AI & Data Science Engineering Student"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to stylized SVG avatar container if image fails
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) (fallback as HTMLElement).style.display = 'flex';
                  }}
                />
                {/* Fallback container */}
                <div
                  style={{ display: 'none' }}
                  className="w-full h-full flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-purple-950 to-indigo-950 text-white"
                >
                  <div className="w-16 h-16 rounded-full bg-purple-600/30 flex items-center justify-center mb-3">
                    <Target className="w-8 h-8 text-purple-300" />
                  </div>
                  <span className="font-semibold text-lg">Punyashree M</span>
                  <span className="text-xs text-purple-200 mt-1">REVA University</span>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <span className="text-sm font-semibold text-white block">Punyashree M</span>
              <span className="text-xs text-slate-400">B.Tech Student · REVA University</span>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-8 space-y-5">
            <div
              className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                isDarkMode
                  ? 'bg-slate-900/50 border-slate-800/80 backdrop-blur-md'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-purple-400">
                Engineering Solutions with Intelligence & Purpose
              </h3>

              <p
                className={`text-base leading-relaxed mb-4 ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                Punyashree M is a B.Tech student in Artificial Intelligence and Data Science at{' '}
                <strong className="text-white font-medium">REVA University, Bengaluru</strong>, with a
                growing foundation in programming, artificial intelligence, machine learning, and data
                analysis.
              </p>

              <p
                className={`text-base leading-relaxed mb-4 ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                Possessing a deep interest in developing innovative technological solutions, she actively
                synthesizes theoretical computational concepts with applied hardware-software integrations.
                From architecting IoT-based smart agricultural monitors to constructing exploratory data
                pipelines, her engineering trajectory is centered on translating data into meaningful real-world
                action.
              </p>

              <p
                className={`text-base leading-relaxed ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                Her overarching ambition is to become a forward-thinking{' '}
                <span className="text-indigo-400 font-semibold">AI/ML professional</span> capable of
                architecting scalable machine learning systems that address societal, agricultural, and
                computational challenges with technical precision.
              </p>

              {/* Key Values List */}
              <div className="pt-5 mt-5 border-t border-slate-800/60 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Analytical & algorithmic mindset</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Applied sensor & IoT integration</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Hands-on Python data pipelines</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Commitment to lifelong technical mastery</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-xl border transition-all hover:-translate-y-1 ${
                  isDarkMode
                    ? 'bg-slate-900/40 border-slate-800/80 hover:border-purple-500/30 hover:bg-slate-900/70'
                    : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md'
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-base mb-2 text-slate-100">
                  {item.title}
                </h4>
                <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
