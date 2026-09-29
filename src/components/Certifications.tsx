import React, { useState } from 'react';
import { Award, CheckCircle2, ExternalLink, ShieldCheck, Eye, X } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { CertificateItem } from '../types';

interface CertificationsProps {
  isDarkMode: boolean;
}

export const Certifications: React.FC<CertificationsProps> = ({ isDarkMode }) => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <div className="text-xs font-semibold tracking-wider uppercase text-purple-400 mb-2">
            05. Recognized Accreditations
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-4" />
          <p
            className={`max-w-xl mx-auto text-sm ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Verified credentials highlighting specialized competencies in Python data analysis
            and foundational professional employability.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              className={`rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                isDarkMode
                  ? 'bg-slate-900/60 border-slate-800/80 backdrop-blur-md hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-950/20'
                  : 'bg-white border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-md'
              }`}
            >
              {/* Image Frame or Stylized Credential Header */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 group">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling;
                      if (fallback) (fallback as HTMLElement).style.display = 'flex';
                    }}
                  />
                ) : null}

                {/* Styled CSS/SVG Credential Canvas Fallback & IBM badge */}
                <div
                  style={{ display: cert.image ? 'none' : 'flex' }}
                  className="w-full h-full flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950 relative border-b border-purple-500/20"
                >
                  {/* Subtle Guilloche / Geometric Pattern in Background */}
                  <div className="absolute inset-2 border border-purple-500/20 rounded-xl pointer-events-none" />
                  <div className="absolute inset-3 border border-dashed border-indigo-400/20 rounded-lg pointer-events-none" />

                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-600/30 mb-3 z-10">
                    <Award className="w-7 h-7 text-white" />
                  </div>

                  <span className="text-xs uppercase tracking-widest font-mono text-purple-300 z-10 font-bold">
                    {cert.issuer}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white mt-1 z-10">
                    {cert.title}
                  </h4>
                  <span className="text-[11px] text-slate-400 mt-1 z-10">
                    Verified Competency
                  </span>
                </div>

                {/* Floating Preview Button */}
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-950/80 hover:bg-purple-600 text-white backdrop-blur-md border border-purple-500/30 transition-all shadow-md"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview Certificate</span>
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-purple-400 tracking-wide">
                      {cert.issuer}
                    </span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Verified Completion</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {cert.title}
                  </h3>

                  <p
                    className={`text-xs leading-relaxed mb-5 ${
                      isDarkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {cert.summary}
                  </p>

                  {/* Skills Acquired List */}
                  <div className="mb-6">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                      Competencies Covered
                    </div>
                    <div className="space-y-1.5">
                      {cert.skillsAcquired.map((skill, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer with Credential Identifier */}
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <div className="text-[11px] font-mono text-slate-400">
                    ID: {cert.credentialId}
                  </div>
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 transition-colors font-medium cursor-pointer"
                  >
                    <span>View Credential Details</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal Lightbox */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
            <div
              className={`w-full max-w-2xl rounded-2xl border p-6 sm:p-8 shadow-2xl relative ${
                isDarkMode ? 'bg-slate-900 border-purple-500/30 text-white' : 'bg-white border-slate-200 text-slate-900'
              }`}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 rounded-xl border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-purple-400 font-semibold">
                    {selectedCert.issuer}
                  </span>
                  <h3 className="text-xl font-bold">{selectedCert.title}</h3>
                </div>
              </div>

              {/* Certificate Image or Styled Diploma Box */}
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 p-2 mb-6">
                {selectedCert.image ? (
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    referrerPolicy="no-referrer"
                    className="w-full max-h-[340px] object-contain mx-auto rounded"
                  />
                ) : (
                  <div className="py-12 px-6 text-center bg-gradient-to-br from-indigo-950 to-slate-950 rounded border border-purple-500/20">
                    <ShieldCheck className="w-16 h-16 text-purple-400 mx-auto mb-3" />
                    <h4 className="text-lg font-bold text-white">{selectedCert.title}</h4>
                    <p className="text-xs text-purple-300 mt-1">{selectedCert.credentialName}</p>
                    <div className="mt-4 inline-block text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded border border-slate-800">
                      Credential ID: {selectedCert.credentialId}
                    </div>
                  </div>
                )}
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {selectedCert.summary}
              </p>

              <div className="text-xs text-slate-400 flex items-center justify-between pt-3 border-t border-slate-800">
                <span>Issuing Organization: <strong className="text-white">{selectedCert.issuer}</strong></span>
                <span className="text-emerald-400 font-medium">Authenticity Verified</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
