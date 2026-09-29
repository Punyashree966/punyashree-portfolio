/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { LearningJourney } from './components/LearningJourney';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { NeuralNetworkCanvas } from './components/NeuralNetworkCanvas';
import { SocialLinksModal } from './components/SocialLinksModal';
import { PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('punyashree_portfolio_theme');
    return saved !== null ? saved === 'dark' : true; // Default dark navy theme
  });

  const [githubHandle, setGithubHandle] = useState<string>(() => {
    return localStorage.getItem('punyashree_github') || PERSONAL_INFO.defaultGithub;
  });

  const [linkedinHandle, setLinkedinHandle] = useState<string>(() => {
    return localStorage.getItem('punyashree_linkedin') || PERSONAL_INFO.defaultLinkedin;
  });

  const [isSocialModalOpen, setIsSocialModalOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('punyashree_portfolio_theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleSaveSocial = (newGithub: string, newLinkedin: string) => {
    setGithubHandle(newGithub);
    setLinkedinHandle(newLinkedin);
    localStorage.setItem('punyashree_github', newGithub);
    localStorage.setItem('punyashree_linkedin', newLinkedin);
  };

  return (
    <div
      className={`min-h-screen relative selection:bg-purple-500/30 selection:text-purple-200 transition-colors duration-300 ${
        isDarkMode ? 'bg-[#050814] text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Background Interactive Neural Network Canvas */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <NeuralNetworkCanvas isDarkMode={isDarkMode} />
      </div>

      {/* Subtle Ambient Radial Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-indigo-600/12 rounded-full blur-[110px]" />
        <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Main App Content Stack */}
      <div className="relative z-10 flex flex-col">
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        <main>
          <Hero
            isDarkMode={isDarkMode}
            githubHandle={githubHandle}
            linkedinHandle={linkedinHandle}
            onOpenSocialModal={() => setIsSocialModalOpen(true)}
          />

          <About isDarkMode={isDarkMode} />

          <Education isDarkMode={isDarkMode} />

          <Skills isDarkMode={isDarkMode} />

          <Projects isDarkMode={isDarkMode} />

          <Certifications isDarkMode={isDarkMode} />

          <LearningJourney isDarkMode={isDarkMode} />

          <Contact
            isDarkMode={isDarkMode}
            githubHandle={githubHandle}
            linkedinHandle={linkedinHandle}
            onOpenSocialModal={() => setIsSocialModalOpen(true)}
          />
        </main>

        <Footer
          isDarkMode={isDarkMode}
          githubHandle={githubHandle}
          linkedinHandle={linkedinHandle}
        />
      </div>

      {/* Social Links Config Modal */}
      <SocialLinksModal
        isOpen={isSocialModalOpen}
        onClose={() => setIsSocialModalOpen(false)}
        currentGithub={githubHandle}
        currentLinkedin={linkedinHandle}
        onSave={handleSaveSocial}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
