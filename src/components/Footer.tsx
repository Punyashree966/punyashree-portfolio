import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  isDarkMode: boolean;
  githubHandle: string;
  linkedinHandle: string;
}

export const Footer: React.FC<FooterProps> = ({
  isDarkMode,
  githubHandle,
  linkedinHandle,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t py-12 px-4 sm:px-6 lg:px-8 transition-colors ${
        isDarkMode
          ? 'bg-slate-950 border-slate-800/80 text-slate-400'
          : 'bg-slate-100 border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-base font-bold text-white tracking-tight flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            <span>Punyashree M</span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            AI & Data Science Engineering Student · REVA University, Bengaluru
          </p>
        </div>

        {/* Quiet Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-medium">
          <a href="#about" className="hover:text-purple-400 transition-colors">
            About
          </a>
          <a href="#education" className="hover:text-purple-400 transition-colors">
            Education
          </a>
          <a href="#skills" className="hover:text-purple-400 transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-purple-400 transition-colors">
            Projects
          </a>
          <a href="#certifications" className="hover:text-purple-400 transition-colors">
            Certifications
          </a>
          <a href="#journey" className="hover:text-purple-400 transition-colors">
            Journey
          </a>
        </div>

        {/* Social Icons & Back to top */}
        <div className="flex items-center gap-3">
          <a
            href={`https://github.com/${githubHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg border border-slate-800 hover:border-purple-500/40 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={`https://linkedin.com/in/${linkedinHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg border border-slate-800 hover:border-purple-500/40 hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Direct Email"
            className="p-2 rounded-lg border border-slate-800 hover:border-purple-500/40 hover:text-emerald-400 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2 rounded-lg border border-slate-800 hover:border-purple-500/40 hover:text-white transition-colors ml-2"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-800/50 text-center text-xs text-slate-400">
        © 2026 Punyashree M. All rights reserved.
      </div>
    </footer>
  );
};
