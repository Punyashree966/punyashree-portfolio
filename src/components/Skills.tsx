import React, { useState } from 'react';
import {
  Code,
  Terminal,
  Cpu,
  Brain,
  Database,
  Wifi,
  Users2,
  MessageSquare,
  Layers,
  Sparkles,
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types';

interface SkillsProps {
  isDarkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'programming', label: 'Core Programming & DSA' },
    { id: 'ai_data', label: 'AI & Data Science' },
    { id: 'systems', label: 'IoT & Systems' },
    { id: 'professional', label: 'Professional Skills' },
  ];

  const getIcon = (id: string) => {
    switch (id) {
      case 'python':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      case 'c-programming':
        return <Code className="w-5 h-5 text-blue-400" />;
      case 'cpp':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'dsa':
        return <Layers className="w-5 h-5 text-purple-400" />;
      case 'data-analysis':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'artificial-intelligence':
        return <Brain className="w-5 h-5 text-violet-400" />;
      case 'machine-learning':
        return <Sparkles className="w-5 h-5 text-pink-400" />;
      case 'iot':
        return <Wifi className="w-5 h-5 text-cyan-400" />;
      case 'communication':
        return <MessageSquare className="w-5 h-5 text-teal-400" />;
      case 'teamwork':
        return <Users2 className="w-5 h-5 text-orange-400" />;
      default:
        return <Code className="w-5 h-5 text-purple-400" />;
    }
  };

  const filteredSkills =
    activeCategory === 'all'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <div className="text-xs font-semibold tracking-wider uppercase text-purple-400 mb-2">
            03. Technical Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Technical & Professional Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-4" />
          <p
            className={`max-w-xl mx-auto text-sm ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            A curated overview of programming languages, computational foundations, analytical
            disciplines, and collaborative strengths developed throughout academic engineering studies.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/20'
                  : isDarkMode
                  ? 'bg-slate-900/60 text-slate-300 border border-slate-800 hover:border-purple-500/40 hover:text-white'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:text-slate-950'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill: SkillItem) => (
            <div
              key={skill.id}
              className={`group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                isDarkMode
                  ? 'bg-slate-900/50 border-slate-800/80 backdrop-blur-md hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-950/30'
                  : 'bg-white border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-md'
              }`}
            >
              {/* Card Header with Icon & Category indicator */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center transition-transform group-hover:scale-110">
                  {getIcon(skill.id)}
                </div>

                <span className="text-xs font-medium text-slate-400 bg-slate-800/50 border border-slate-700/50 px-2.5 py-1 rounded-md">
                  {skill.proficiencyLabel}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {skill.name}
              </h3>
              <p
                className={`text-xs leading-relaxed mb-5 ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                {skill.description}
              </p>

              {/* Topics Explored */}
              <div className="pt-4 border-t border-slate-800/50">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Key Topics & Applications
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skill.topics.map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className={`text-[11px] px-2 py-0.5 rounded transition-colors ${
                        isDarkMode
                          ? 'bg-slate-800/80 text-purple-200/90 border border-slate-700/40'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
