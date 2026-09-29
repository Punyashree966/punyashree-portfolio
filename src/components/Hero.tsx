import React from 'react';
import { ArrowRight, Mail, Github, Linkedin, Sparkles, MapPin, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  isDarkMode: boolean;
  githubHandle: string;
  linkedinHandle: string;
  onOpenSocialModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  isDarkMode,
  githubHandle,
  linkedinHandle,
  onOpenSocialModal,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] bg-gradient-to-tr from-purple-600/20 via-indigo-600/15 to-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Academic focus kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium mb-6 border transition-colors bg-purple-950/40 border-purple-500/30 text-purple-300">
          <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
          <span>Undergraduate Engineering Portfolio</span>
          <span className="text-slate-500">·</span>
          <span>REVA University</span>
        </div>

        {/* Primary Name Display */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 text-balance">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
            {PERSONAL_INFO.name}
          </span>
        </h1>

        {/* Title & Subheading */}
        <div className="flex items-center justify-center gap-2 text-lg sm:text-2xl font-semibold mb-6 text-purple-400">
          <GraduationCap className="w-6 h-6 text-indigo-400 inline" />
          <h2>{PERSONAL_INFO.role}</h2>
        </div>

        {/* Narrative Introduction */}
        <p
          className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-balance ${
            isDarkMode ? 'text-slate-300' : 'text-slate-700'
          }`}
        >
          Passionate about exploring the frontiers of{' '}
          <span className="text-white font-medium">Artificial Intelligence</span>,{' '}
          <span className="text-white font-medium">Machine Learning</span>, and{' '}
          <span className="text-white font-medium">Data Science</span>. Dedicated to transforming
          complex datasets into intelligent algorithms and engineering innovative technological solutions
          that create practical real-world impact.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm transition-all border ${
              isDarkMode
                ? 'bg-slate-900/80 hover:bg-slate-800 text-slate-200 border-slate-700/80 hover:border-purple-500/40 shadow-sm'
                : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300 shadow-sm'
            }`}
          >
            <span>Contact Me</span>
            <Mail className="w-4 h-4 text-purple-400" />
          </a>
        </div>

        {/* Social Icons & Quick Connect */}
        <div className="pt-6 border-t border-slate-800/60 max-w-md mx-auto flex flex-col items-center gap-3">
          <div className="flex items-center justify-center gap-4">
            <a
              href={`https://github.com/${githubHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className={`p-2.5 rounded-lg border transition-all ${
                isDarkMode
                  ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white hover:border-purple-500/40 hover:bg-purple-950/20'
                  : 'border-slate-200 bg-white text-slate-700 hover:text-slate-950 hover:border-slate-300'
              }`}
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href={`https://linkedin.com/in/${linkedinHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className={`p-2.5 rounded-lg border transition-all ${
                isDarkMode
                  ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white hover:border-purple-500/40 hover:bg-purple-950/20'
                  : 'border-slate-200 bg-white text-slate-700 hover:text-slate-950 hover:border-slate-300'
              }`}
            >
              <Linkedin className="w-5 h-5 text-blue-400" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Send direct email"
              className={`p-2.5 rounded-lg border transition-all ${
                isDarkMode
                  ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white hover:border-purple-500/40 hover:bg-purple-950/20'
                  : 'border-slate-200 bg-white text-slate-700 hover:text-slate-950 hover:border-slate-300'
              }`}
            >
              <Mail className="w-5 h-5 text-emerald-400" />
            </a>

            <button
              onClick={onOpenSocialModal}
              title="Edit social usernames"
              className="text-xs text-slate-400 hover:text-purple-300 underline underline-offset-4 ml-1 transition-colors"
            >
              Configure Handles
            </button>
          </div>

          {/* Location indicator */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-rose-400" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
