import React, { useState } from 'react';
import { X, Github, Linkedin, Check } from 'lucide-react';

interface SocialLinksModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentGithub: string;
  currentLinkedin: string;
  onSave: (github: string, linkedin: string) => void;
  isDarkMode: boolean;
}

export const SocialLinksModal: React.FC<SocialLinksModalProps> = ({
  isOpen,
  onClose,
  currentGithub,
  currentLinkedin,
  onSave,
  isDarkMode,
}) => {
  const [github, setGithub] = useState(currentGithub);
  const [linkedin, setLinkedin] = useState(currentLinkedin);
  const [savedNotice, setSavedNotice] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(github.trim(), linkedin.trim());
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
      <div
        className={`w-full max-w-md rounded-2xl border p-6 shadow-2xl relative ${
          isDarkMode ? 'bg-slate-900 border-purple-500/30 text-white' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg border border-slate-700 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 className="text-xl font-bold mb-2">Configure Social Placeholders</h3>
        <p className="text-xs text-slate-400 mb-6">
          Update the placeholder usernames for GitHub and LinkedIn to link directly to your accounts.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
              <Github className="w-3.5 h-3.5 text-slate-300" />
              <span>GitHub Username</span>
            </label>
            <div className="flex items-center rounded-xl border border-slate-700/80 bg-slate-950/50 px-3 py-2 text-xs">
              <span className="text-slate-500 mr-1">github.com/</span>
              <input
                type="text"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                placeholder="username"
                className="w-full bg-transparent text-white outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
              <Linkedin className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn Identifier</span>
            </label>
            <div className="flex items-center rounded-xl border border-slate-700/80 bg-slate-950/50 px-3 py-2 text-xs">
              <span className="text-slate-500 mr-1">linkedin.com/in/</span>
              <input
                type="text"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                placeholder="profile-slug"
                className="w-full bg-transparent text-white outline-none"
              />
            </div>
          </div>

          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500 shadow-md"
            >
              {savedNotice ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Saved!</span>
                </>
              ) : (
                <span>Save Links</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
