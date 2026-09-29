import React from 'react';
import { Compass, BookCheck, Terminal, Cpu, Database, Network, Brain } from 'lucide-react';
import { LEARNING_JOURNEY_DATA } from '../data/portfolioData';

interface LearningJourneyProps {
  isDarkMode: boolean;
}

export const LearningJourney: React.FC<LearningJourneyProps> = ({ isDarkMode }) => {
  const getMilestoneIcon = (id: string) => {
    switch (id) {
      case 'milestone-1':
        return <Terminal className="w-4 h-4 text-amber-400" />;
      case 'milestone-2':
        return <Cpu className="w-4 h-4 text-blue-400" />;
      case 'milestone-3':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'milestone-4':
        return <Network className="w-4 h-4 text-cyan-400" />;
      case 'milestone-5':
        return <Brain className="w-4 h-4 text-purple-400" />;
      default:
        return <Compass className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <div className="text-xs font-semibold tracking-wider uppercase text-purple-400 mb-2">
            06. Progressive Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Continuous Learning Journey
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-4" />
          <p
            className={`max-w-2xl mx-auto text-sm ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            A transparent view of self-directed study, academic coursework, and engineering
            explorations spanning procedural foundations to modern machine learning.
          </p>
        </div>

        {/* Vertical Stepper Roadmap */}
        <div className="relative border-l-2 border-purple-500/20 ml-4 sm:ml-8 md:ml-32 space-y-12 pb-4">
          {LEARNING_JOURNEY_DATA.map((milestone) => (
            <div key={milestone.id} className="relative pl-6 sm:pl-8 group">
              {/* Timeline marker with icon */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-purple-500/60 flex items-center justify-center shadow-md shadow-purple-500/20 group-hover:scale-110 group-hover:border-purple-400 transition-all">
                {getMilestoneIcon(milestone.id)}
              </div>

              {/* Phase tag outside on desktop */}
              <div className="hidden md:block absolute -left-32 top-2 text-right w-24">
                <span className="text-xs font-mono font-semibold text-purple-400">
                  {milestone.phase}
                </span>
                <span className="block text-[11px] text-slate-500">Milestone</span>
              </div>

              {/* Milestone Content Card */}
              <div
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-slate-900/50 border-slate-800/80 backdrop-blur-md hover:border-purple-500/40 hover:bg-slate-900/75'
                    : 'bg-white border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-md'
                }`}
              >
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="md:hidden text-xs font-mono font-semibold text-purple-400 bg-purple-950/40 px-2 py-0.5 rounded border border-purple-500/20">
                    {milestone.phase}
                  </span>
                  <span className="text-xs text-indigo-400 font-medium tracking-wide">
                    {milestone.domain}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {milestone.title}
                </h3>

                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {milestone.description}
                </p>

                {/* Key Takeaways */}
                <div className="mb-4 space-y-1.5">
                  {milestone.keyTakeaways.map((takeaway, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <BookCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies Explored in this phase */}
                <div className="pt-3 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                  {milestone.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2.5 py-0.5 rounded bg-slate-950/60 border border-slate-800 text-slate-300"
                    >
                      {tech}
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
