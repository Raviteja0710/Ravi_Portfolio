/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, GraduationCap, Building2, Target, CheckCircle2, TrendingUp, Sparkles, User, Briefcase, Brain, BarChart3, X, FileText, ExternalLink } from 'lucide-react';
import { personalInfo, competencies, certificatesList } from '../data';
import profileImg from '../Profile.png';

export default function AboutSection() {
  const [showCertModal, setShowCertModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState<any>(null);

  return (
    <section id="about" className="pt-6 md:pt-8 pb-20 md:pb-28 relative overflow-hidden bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div id="about-header" className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-emerald uppercase block mb-2">
            PROFILE OVERVIEW
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white tracking-tight">
            About <span className="bg-gradient-to-r from-brand-emerald to-teal-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 h-[3px] bg-brand-emerald mt-4" />
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start overflow-hidden">
          
          {/* Left Panel: Profile Picture Mock + Key Metric Small Cards */}
          <motion.div className="lg:col-span-5 space-y-4">
            
            {/* Elegant Profile Photo Card */}
            <div id="blueprint-picture-card" className="relative group overflow-hidden rounded-[1.5rem] bg-brand-card border border-white/5 shadow-2xl aspect-[4/4.2] w-full">
              {/* Profile Image filling the entire card */}
              <img 
                src={profileImg} 
                alt={personalInfo.name} 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    if (!parent.querySelector('.avatar-fallback')) {
                      const fallbackObj = document.createElement('div');
                      fallbackObj.className = "avatar-fallback absolute inset-0 flex flex-col items-center justify-center text-brand-emerald bg-brand-emerald/5";
                      fallbackObj.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-user mb-3"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span class="font-display font-semibold text-white text-base">${personalInfo.name}</span><span class="text-xs font-mono text-slate-400 mt-0.5 font-black tracking-wider">ASPIRING DATA ANALYST</span>`;
                      parent.appendChild(fallbackObj);
                    }
                  }
                }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Bottom Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent pointer-events-none" />
              
              {/* Top and side subtle ambient glows */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-full filter blur-xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-cyan/10 to-transparent opacity-60 pointer-events-none" />

              {/* Text overlays matching user screenshot exactly */}
              <div className="absolute bottom-4 left-5 right-5 text-left z-10 pointer-events-none">
                <h3 className="font-display font-medium text-lg text-white tracking-wide">
                  {personalInfo.name}
                </h3>
                <p className="text-xs font-sans font-black tracking-widest text-[#41c5eb] mt-0.5 uppercase">
                  ASPIRING DATA ANALYST
                </p>
              </div>

              {/* Mini active pulse dot */}
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_10px_rgba(65,197,235,0.8)] animate-pulse z-10" />
            </div>

            {/* Left Column Metric Grid: CGPA & Degree & Uni & Target */}
            <div className="grid grid-cols-4 gap-2">
              
              {/* CGPA Card */}
              <motion.div 
                whileHover={{ y: -5, scale: 1.02, boxShadow: '0 10px 20px -8px rgba(16, 185, 129, 0.4)' }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="flex flex-col items-center text-center p-2 rounded-xl bg-brand-card/70 border border-white/5 hover:border-brand-emerald/30 transition-colors duration-300 min-h-[96px] justify-center cursor-default group"
              >
                <div className="w-7 h-7 rounded-lg bg-brand-emerald/10 flex items-center justify-center text-brand-emerald mb-1.5 flex-shrink-0 group-hover:bg-brand-emerald/20 transition-colors duration-300">
                  <Award className="w-4 h-4" />
                </div>
                <span className="font-mono text-[9.5px] font-bold text-slate-500 tracking-wider block uppercase leading-none">
                  CGPA
                </span>
                <span className="font-display font-black text-lg text-white mt-1 block leading-none">
                  {personalInfo.gpa}
                </span>
              </motion.div>

              {/* Degree Card */}
              <motion.div 
                whileHover={{ y: -5, scale: 1.02, boxShadow: '0 10px 20px -8px rgba(45, 212, 191, 0.4)' }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="flex flex-col items-center text-center p-2 rounded-xl bg-brand-card/70 border border-white/5 hover:border-teal-400/30 transition-colors duration-300 min-h-[96px] justify-center cursor-default group"
              >
                <div className="w-7 h-7 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 mb-1.5 flex-shrink-0 group-hover:bg-teal-500/20 transition-colors duration-300">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span className="font-mono text-[9.5px] font-bold text-slate-500 tracking-wider block uppercase leading-none">
                  DEGREE
                </span>
                <span className="font-display font-bold text-xs leading-snug text-white mt-1 block line-clamp-2 max-w-full text-center px-0.5">
                  {personalInfo.degree}
                </span>
              </motion.div>

              {/* University Card */}
              <motion.div 
                whileHover={{ y: -5, scale: 1.02, boxShadow: '0 10px 20px -8px rgba(129, 140, 248, 0.4)' }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="flex flex-col items-center text-center p-2 rounded-xl bg-brand-card/70 border border-white/5 hover:border-indigo-400/30 transition-colors duration-300 min-h-[96px] justify-center cursor-default group"
              >
                <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-1.5 flex-shrink-0 group-hover:bg-indigo-500/20 transition-colors duration-300">
                  <Building2 className="w-4 h-4" />
                </div>
                <span className="font-mono text-[9.5px] font-bold text-slate-500 tracking-wider block uppercase leading-none">
                  UNIVERSITY
                </span>
                <span className="font-display font-semibold text-xs leading-snug text-white mt-1 block line-clamp-2 max-w-full text-center px-0.5">
                  Malla Reddy University
                </span>
              </motion.div>

              {/* Career Goal Card */}
              <motion.div 
                whileHover={{ y: -5, scale: 1.02, boxShadow: '0 10px 20px -8px rgba(245, 158, 11, 0.4)' }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="flex flex-col items-center text-center p-2 rounded-xl bg-brand-card/70 border border-white/5 hover:border-amber-400/30 transition-colors duration-300 min-h-[96px] justify-center cursor-default group"
              >
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 mb-1.5 flex-shrink-0 group-hover:bg-amber-500/20 transition-colors duration-300">
                  <Target className="w-4 h-4" />
                </div>
                <span className="font-mono text-[9.5px] font-bold text-slate-500 tracking-wider block uppercase leading-none">
                  CAREER GOAL
                </span>
                <span className="font-display font-medium text-xs leading-snug text-white mt-1 block line-clamp-2 max-w-full text-center px-0.5">
                  {personalInfo.careerGoal}
                </span>
              </motion.div>

            </div>

          </motion.div>

          {/* Right Panel: Content body + core competencies */}
          <motion.div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <h3 className="font-display font-bold text-2xl md:text-3.5xl text-white tracking-tight leading-tight">
                Transforming Data into <span className="text-brand-emerald">Business Intelligence.</span>
              </h3>
              
              {/* Highlight Quote Block */}
              <div className="pl-4 border-l-4 border-brand-emerald bg-slate-950/40 p-4 rounded-r-xl">
                <p className="text-base text-slate-300 italic font-medium">
                  {personalInfo.bioQuote}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-slate-350 font-normal leading-relaxed text-sm md:text-base text-left font-sans">
              <p>
                Currently pursuing Bachelor of Technology – <span className="text-emerald-400 font-bold inline-block whitespace-nowrap" style={{ textShadow: '0 0 6px rgba(52, 211, 153, 0.45)' }}>Computer Science & Engineering</span> <span className="text-emerald-400 font-bold inline-block whitespace-nowrap" style={{ textShadow: '0 0 6px rgba(52, 211, 153, 0.45)' }}>– Data Science</span> at <strong className="font-semibold text-white">Malla Reddy University, Hyderabad</strong>, I maintain a strong academic focus with a <span className="text-emerald-400 font-bold inline-block whitespace-nowrap" style={{ textShadow: '0 0 6px rgba(52, 211, 153, 0.45)' }}>9.0 CGPA</span>. My expertise lies in bridging the gap between raw data and executive strategy.
              </p>
              <p>{personalInfo.bioParagraph2}</p>
            </div>

            {/* Core Competencies chips */}
            <div>
              <h4 className="font-display font-bold text-xs tracking-widest text-slate-350 uppercase mb-4">
                CORE COMPETENCIES
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {competencies.map((comp, idx) => (
                  <span
                    key={idx}
                    id={`competency-tag-${idx}`}
                    className="px-4 py-2 text-xs font-mono font-medium rounded-full bg-slate-900 border border-white/5 hover:border-brand-emerald/30 text-emerald-400 hover:text-white transition-all cursor-default"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications Interactive Highlight Box */}
            <div className="pt-4">
              <motion.div
                whileHover={{ y: -3, scale: 1.005, boxShadow: '0 10px 20px -8px rgba(16, 185, 129, 0.25)' }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                onClick={() => {
                  setShowCertModal(true);
                  if (certificatesList.length > 0) {
                    setSelectedCert(certificatesList[0]);
                  }
                }}
                className="p-4 min-h-[96px] rounded-xl bg-gradient-to-br from-slate-950/80 to-slate-900/60 border border-white/5 hover:border-brand-emerald/30 hover:shadow-[0_0_15px_rgba(16,185,129,0.05)] cursor-pointer group flex items-center justify-between space-x-4 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background soft glow accent */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-emerald/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="flex items-center space-x-4 relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-brand-emerald/15 flex items-center justify-center text-brand-emerald shrink-0 group-hover:scale-105 group-hover:bg-brand-emerald/25 transition-all duration-300">
                    <Award className="w-5 h-5 text-brand-emerald" />
                  </div>
                  <div className="text-left">
                    <h5 className="font-display font-extrabold text-base text-white leading-snug group-hover:text-brand-emerald transition-colors">
                      Verified Technical Certifications
                    </h5>
                    <p className="text-[11px] text-slate-400 font-light max-w-xl leading-relaxed mt-0.5">
                      Explore bootcamps, courses, and credentials in Power BI, SQL, Python, and Fabric.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center shrink-0 w-8 h-8 rounded-full border border-white/10 text-slate-400 group-hover:border-brand-emerald/30 group-hover:text-brand-emerald transition-all duration-300">
                  <span className="text-[9px] font-mono font-bold leading-none tracking-widest uppercase ml-0.5">VIEW</span>
                </div>
              </motion.div>
            </div>

          </motion.div>

        </div>

      </div>

      {/* Certifications Modal */}
      <AnimatePresence>
        {showCertModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setShowCertModal(false);
                setSelectedCert(null);
              }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative max-w-5xl w-full bg-slate-950 border border-emerald-500/20 rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col md:flex-row gap-6 max-h-[85vh] overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setShowCertModal(false);
                  setSelectedCert(null);
                }}
                className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none z-20 cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Certifications List */}
              <div className="flex-1 flex flex-col pr-2 min-w-[280px]">
                <div className="mb-4">
                  <h4 className="font-display font-extrabold text-xl text-white">
                    Technical Credentials
                  </h4>
                  <p className="text-xs text-slate-400 font-light mt-1">
                    Select a credential to preview the verified certificate document.
                  </p>
                </div>

                <div className="space-y-3 overflow-y-auto max-h-[310px] pr-1.5 scrollbar-thin">
                  {certificatesList.map((cert) => {
                    const isSelected = selectedCert?.id === cert.id;
                    return (
                      <div
                        key={cert.id}
                        onClick={() => setSelectedCert(cert)}
                        className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer text-left ${
                          isSelected
                            ? 'bg-brand-emerald/10 border-brand-emerald text-white'
                            : 'bg-slate-900/60 border-white/5 hover:border-brand-emerald/30 text-slate-300'
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <FileText className={`w-5 h-5 shrink-0 mt-0.5 ${isSelected ? 'text-brand-emerald' : 'text-slate-400'}`} />
                          <div>
                            <h5 className="font-display font-semibold text-xs leading-snug md:text-sm">
                              {cert.title}
                            </h5>
                            <p className="text-[10px] text-slate-400 font-light mt-1">
                              {cert.issuer} • {cert.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: PDF Preview Viewport */}
              <div className="flex-1 flex flex-col bg-slate-900/40 border border-white/5 rounded-2xl p-4 justify-start self-start w-full relative overflow-hidden">
                {selectedCert ? (
                  <div className="w-full flex flex-col justify-start space-y-3">
                    <div className="flex items-center justify-between shrink-0">
                      <span className="font-mono text-[9px] text-brand-emerald bg-brand-emerald/10 border border-brand-emerald/20 px-2 py-0.5 rounded uppercase tracking-wider">
                        Document Preview
                      </span>
                      <a
                        href={`/certificates/${selectedCert.fileName}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] text-emerald-400 hover:text-white flex items-center space-x-1"
                      >
                        <span>Open full page</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    
                    {/* Interactive Frame wrapper */}
                    <div className="w-full aspect-[4/3] bg-slate-950/40 rounded-xl overflow-hidden border border-white/5 flex items-center justify-center relative">
                      {selectedCert.fileName.toLowerCase().endsWith('.pdf') ? (
                        /* Using iframe to load PDF natively */
                        <iframe
                          src={`/certificates/${selectedCert.fileName}#toolbar=0&navpanes=0`}
                          title={selectedCert.title}
                          className="w-full h-full border-0 rounded-xl"
                          onError={(e) => {
                            console.log("PDF loading error", e);
                          }}
                        />
                      ) : (
                        /* Using img to load images natively */
                        <img
                          src={`/certificates/${selectedCert.fileName}`}
                          alt={selectedCert.title}
                          className="w-full h-full object-contain rounded-xl"
                        />
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-3 p-6 max-w-sm">
                    <div className="w-12 h-12 rounded-full bg-slate-950 border border-white/5 flex items-center justify-center text-slate-500 mx-auto">
                      <FileText className="w-6 h-6 animate-pulse" />
                    </div>
                    <h5 className="font-display font-semibold text-sm text-white">
                      No Certificate Selected
                    </h5>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      Choose any certification card from the list on the left to display its full verified PDF document.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
