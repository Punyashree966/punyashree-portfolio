import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

interface EducationProps {
  isDarkMode: boolean;
}

export const Education: React.FC<EducationProps> = ({ isDarkMode }) => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <div className="text-xs font-semibold tracking-wider uppercase text-purple-400 mb-2">
            02. Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Timeline Structure */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 sm:before:left-1/2 before:w-0.5 before:-translate-x-1/2 before:bg-gradient-to-b before:from-purple-500/50 before:via-indigo-500/30 before:to-transparent">
          {EDUCATION_DATA.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className="relative flex flex-col sm:flex-row items-start group"
              >
                {/* Center Node / Dot */}
                <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-950 border-2 border-purple-500 flex items-center justify-center text-purple-400 z-10 shadow-md shadow-purple-500/20 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-4 h-4" />
                </div>

                {/* Content Card Container */}
                <div
                  className={`w-full sm:w-1/2 pl-14 sm:pl-0 ${
                    isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:ml-auto text-left'
                  }`}
                >
                  <div
                    className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 ${
                      isDarkMode
                        ? 'bg-slate-900/60 border-slate-800/80 backdrop-blur-md hover:border-purple-500/40 hover:bg-slate-900/80'
                        : 'bg-white border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-md'
                    }`}
                  >
                    {/* Header info */}
                    <div
                      className={`flex flex-wrap items-center gap-2 mb-2 text-xs font-medium text-purple-400 ${
                        isEven ? 'sm:justify-end' : 'justify-start'
                      }`}
                    >
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </span>
                      <span>·</span>
                      <span className="text-slate-400">{item.status}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-1">
                      {item.degree}
                    </h3>

                    <div
                      className={`text-base font-semibold text-indigo-400 mb-2 flex items-center gap-1.5 ${
                        isEven ? 'sm:justify-end' : 'justify-start'
                      }`}
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>{item.institution}</span>
                    </div>

                    <div
                      className={`flex items-center gap-1 text-xs text-slate-400 mb-4 ${
                        isEven ? 'sm:justify-end' : 'justify-start'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      <span>{item.location}</span>
                    </div>

                    {/* Academic focus highlights */}
                    <div
                      className={`space-y-1.5 text-xs text-left ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {item.highlights.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                          <span className="leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
