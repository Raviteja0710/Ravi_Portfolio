/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Briefcase, Calendar, Search, BarChart, ShieldCheck, X, FileText, CheckCircle2, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { experiences } from '../data';

export default function ExperienceSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="experience" className="pt-6 md:pt-8 pb-20 md:pb-28 relative overflow-hidden bg-brand-bg select-none">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div id="experience-header" className="mb-6 text-left max-w-2xl">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase block mb-2">
            CAREER PIPELINE
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white tracking-tight">
            Work <span className="bg-gradient-to-r from-brand-cyan to-blue-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-16 h-[3px] bg-brand-cyan mt-4 mb-4" />
          <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed mt-2">
            A roadmap of my professional evolution, highlighting strategic contributions and technical growth.
          </p>
        </div>

        {/* Timeline Path Structure */}
        <div className="relative max-w-4xl mx-auto py-4">
          
          {/* Vertical core pipeline thread line running from up to down with top and bottom indicator circles */}
          <div className="absolute left-[30px] sm:left-[40%] md:left-[45%] top-0 bottom-0 w-[1.5px] bg-slate-800/80 pointer-events-none">
            {/* Circle at the start of the line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#22d3ee] shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
            {/* Circle at the end of the line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-[#22d3ee] shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
          </div>

          {experiences.map((exp) => {
            const isLetsUpgrade = exp.company.toLowerCase().includes('letsupgrade');
            return (
              <motion.div key={exp.id} id={`experience-timeline-item-${exp.id}`} className="relative w-full flex items-center min-h-[200px] mb-12 group">
                {/* 2. Horizontal branch connector line with high transparency, glowing on hover */}
                <div 
                  className="absolute left-[30px] sm:left-[40%] md:left-[45%] w-[46px] sm:w-[8%] md:w-[8%] h-[1.5px] bg-sky-500/10 group-hover:bg-[#22d3ee]/40 top-12 -translate-y-1/2 z-10 transition-all duration-300" 
                />

                {/* 4. The Experience Card container */}
                <div className="w-full pl-[76px] sm:pl-[48%] md:pl-[53%] pr-4">
                  <motion.div 
                    whileHover="hover"
                    whileTap={{ scale: 0.995 }}
                    variants={{
                      initial: { 
                        y: 0, 
                        scale: 1,
                        borderColor: 'rgba(12, 74, 110, 0.35)',
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)'
                      },
                      hover: { 
                        y: -6, 
                        scale: 1.015,
                        borderColor: 'rgba(34, 211, 238, 0.45)',
                        boxShadow: '0 20px 45px -12px rgba(34, 211, 238, 0.15)',
                        backgroundColor: 'rgba(15, 23, 42, 0.92)'
                      }
                    }}
                    initial="initial"
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    className="relative p-6 sm:p-7 rounded-2xl bg-brand-card/75 border transition-all duration-300"
                  >
                    
                    {/* Glowing background gradient inside card */}
                    <motion.div 
                      variants={{
                        hover: { 
                          scale: 1.5,
                          opacity: 0.12,
                        }
                      }}
                      className="absolute -top-1 -right-1 w-24 h-24 bg-sky-500/5 rounded-full filter blur-xl pointer-events-none transition-all duration-500" 
                    />

                    {/* Interactive Animated Hover Sheen Sweep */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-0">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full"
                        variants={{
                          hover: {
                            x: '200%',
                          }
                        }}
                        transition={{
                          duration: 1.4,
                          ease: "easeInOut",
                        }}
                      />
                    </div>

                    {/* Floating Right Badge (Line/Bar Chart) reacting on hover */}
                    <motion.div 
                      variants={{
                        hover: { 
                          scale: 1.25,
                          rotate: 15,
                          borderColor: 'rgba(34, 211, 238, 0.65)',
                          color: '#22d3ee'
                        }
                      }}
                      className="absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-[#0f172a] border border-sky-500/30 text-sky-400 flex items-center justify-center shadow-md z-10 transition-colors"
                    >
                      <BarChart className="w-4 h-4" />
                    </motion.div>

                    {/* Floating Bottom Verified Tick Badge reacting on hover */}
                    <motion.div 
                      variants={{
                        hover: { 
                          scale: 1.15,
                          borderColor: 'rgba(16, 185, 129, 0.65)',
                          boxShadow: '0 0 15px rgba(16, 185, 129, 0.35)'
                        }
                      }}
                      className="absolute right-12 -bottom-3.5 w-7 h-7 rounded-lg bg-[#064e3b] border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-md z-10 shadow-emerald-950/80 transition-all duration-300"
                      title="Verified credential"
                    >
                      <ShieldCheck className="w-4 h-4" />
                    </motion.div>

                    {/* Main Layout Card Header */}
                    <div className="flex items-start space-x-4 mb-4 relative z-10">
                      {/* Left side: Blue Briefcase Box with entry/hover micro-animations */}
                      <motion.div 
                        variants={{
                          hover: { 
                            scale: 1.1, 
                            rotate: [0, -5, 5, 0],
                            backgroundColor: 'rgba(3, 105, 161, 0.2)',
                            borderColor: 'rgba(2, 132, 199, 0.6)'
                          }
                        }}
                        transition={{ 
                          scale: { type: "spring", stiffness: 400, damping: 15 },
                          backgroundColor: { type: "spring", stiffness: 400, damping: 15 },
                          borderColor: { type: "spring", stiffness: 400, damping: 15 },
                          rotate: { duration: 0.4, ease: "easeInOut" }
                        }}
                        className="w-12 h-12 rounded-xl bg-[#0369a1]/10 border border-[#0284c7]/30 flex items-center justify-center text-[#38bdf8] shrink-0 shadow-[0_0_15px_rgba(14,165,233,0.05)]"
                      >
                        <Briefcase className="w-5 h-5 text-sky-400 stroke-[2]" />
                      </motion.div>

                      {/* Right details */}
                      <div className="space-y-1 text-left flex-1 min-w-0">
                        <span className="text-[10px] font-mono font-black tracking-widest text-sky-400 uppercase block">
                          POSITION DETAILS
                        </span>
                        <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-snug truncate">
                          {exp.role}
                        </h3>
                        <p className="text-sm sm:text-base font-semibold text-sky-400 truncate">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Key verification callout */}
                    {isLetsUpgrade && (
                      <div className="mb-4 p-3 rounded-lg bg-[#22d3ee]/5 border border-[#22d3ee]/20 flex items-center justify-between relative z-10">
                        <div className="flex items-center space-x-2">
                          <FileText className="w-4 h-4 text-[#22d3ee]" />
                          <span className="text-xs font-medium text-slate-300">Appointment Document Attached</span>
                        </div>
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsModalOpen(true);
                          }}
                          whileHover={{ scale: 1.05, backgroundColor: '#06b6d4' }}
                          whileTap={{ scale: 0.95 }}
                          className="text-[10px] font-mono font-bold bg-[#22d3ee] text-slate-950 px-2.5 py-1 rounded transition-colors duration-200 shadow-md cursor-pointer"
                        >
                          VIEW DOCUMENT
                        </motion.button>
                      </div>
                    )}

                    {/* Separator line */}
                    <div className="w-full h-[1px] bg-sky-500/10 my-4 relative z-10" />

                    {/* Date Details footer */}
                    <div className="flex items-center space-x-2 font-mono text-xs tracking-wider relative z-10">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span className="font-bold text-white">{exp.period}</span>
                    </div>

                  </motion.div>
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

      {/* High-Fidelity Verified Appointment Letter Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md transition-opacity duration-300">
          <div 
            className="relative w-full max-w-3xl max-h-[92vh] overflow-hidden rounded-2xl bg-[#0f172a] text-slate-900 shadow-2xl border border-slate-800 flex flex-col transform transition-transform duration-300 scale-100 animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Controls (Sticky to top) */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800/80 shrink-0">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/25">
                  LETSUPGRADE APPOINTMENT LETTER
                </span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 px-3 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors duration-200 font-mono text-xs font-bold focus:outline-none cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 inline mr-1" /> CLOSE
              </button>
            </div>

            {/* Document Viewer Viewport (Representing a real PDF workspace) */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#090e1a]/45 backdrop-blur-sm flex justify-center items-start">
              
              {/* The Physical Paper Document representation */}
              <div className="relative w-full max-w-2xl bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] rounded-sm border border-slate-200 p-8 sm:p-12 md:p-16 text-slate-800 font-sans leading-relaxed select-text text-left overflow-hidden">
                
                {/* 1. Diagonal Watermark Pattern matching the PDF scan background */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden select-none z-0 grid grid-cols-2 gap-y-24 gap-x-12 pt-16 rotate-[-25deg] scale-125">
                  {Array.from({ length: 12 }).map((_, idx) => (
                    <div key={idx} className="text-5xl font-black tracking-[0.25em] text-slate-900 uppercase">
                      LETSUPGRADE
                    </div>
                  ))}
                </div>

                {/* 2. Official Orange Verification Stamp */}
                <div className="absolute top-12 right-12 pointer-events-none opacity-85 border-2 border-emerald-500/80 text-emerald-600 bg-emerald-50/50 rounded-lg p-2.5 flex flex-col items-center justify-center rotate-6 select-none z-10 max-w-[130px]">
                  <ShieldCheck className="w-6 h-6 text-emerald-600 mb-1" />
                  <span className="text-[10px] font-mono font-black uppercase tracking-wider text-center">
                    CRT VERIFIED
                  </span>
                  <span className="text-[8px] font-sans font-bold text-slate-500 mt-0.5 text-center leading-none">
                    SECURE ID: LU-AMB-2025
                  </span>
                </div>

                {/* 3. Official Letterhead Logo */}
                <div id="document-letter-header" className="flex items-center space-x-3 mb-10 pb-6 border-b border-slate-100 relative z-10">
                  <div className="relative w-11 h-11 flex items-center justify-center bg-[#090e1a] rounded-lg shadow-inner">
                    <div className="grid grid-cols-2 gap-0.5 w-6 h-6">
                      <div className="w-2.5 h-2.5 bg-[#f97316] rounded-sm" />
                      <div className="w-2.5 h-2.5 bg-[#f97316]/85 rounded-sm" />
                      <div className="w-2.5 h-2.5 bg-[#f97316]/60 rounded-sm" />
                      <div className="w-2.5 h-2.5 bg-white rounded-sm" />
                    </div>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-sans font-black text-2xl tracking-tight text-[#090e1a] leading-none">
                      Lets<span className="text-[#f97316]">Upgrade</span>
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mt-1">
                      EdTech Pvt. Ltd.
                    </span>
                  </div>
                </div>

                {/* 4. Recipient Details */}
                <div className="mb-6 relative z-10">
                  <p className="text-base font-semibold text-slate-900">Dear Challa.Ravi Teja,</p>
                </div>

                {/* 5. Letter Content - EXACTLY matching the uploaded PDF text */}
                <div className="space-y-5 text-[14px] text-slate-700 leading-relaxed relative z-10 font-normal">
                  <p>
                    We are thrilled to offer you this <span className="font-semibold text-slate-900">Appointment Letter for the Student Ambassador Program</span> at <span className="font-semibold text-slate-900">LetsUpgrade EdTech Pvt Ltd</span>. Your dedication to education aligns perfectly with our mission, and your exceptional skills make you an ideal candidate.
                  </p>
                  
                  <p>
                    At LetsUpgrade, professionalism and confidentiality are of utmost importance. As a Student Ambassador, you must strictly adhere to our code of conduct, always maintaining professionalism and confidentiality.
                  </p>

                  <p className="font-semibold text-slate-900">
                    Your role as a Student Ambassador encompasses a wide range of responsibilities:
                  </p>

                  <ul className="list-none space-y-4 pl-2">
                    <li className="flex items-start">
                      <span className="text-[#f97316] text-xl mr-3 leading-none shrink-0">•</span>
                      <span className="text-slate-600 font-light">
                        Actively promote LetsUpgrade to increase website traffic through various channels, including social media, word of mouth, and other creative strategies.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#f97316] text-xl mr-3 leading-none shrink-0">•</span>
                      <span className="text-slate-600 font-light">
                        Engage in a concurrent activity specially designed for student ambassadors, providing an opportunity to showcase skills, collaborate, and earn exciting rewards.
                      </span>
                    </li>
                  </ul>

                  <p className="pt-2">
                    We eagerly anticipate your contributions as a Student Ambassador.
                  </p>

                  <p className="font-semibold text-slate-850">
                    The duration for this program is from <span className="font-bold text-slate-900 underline decoration-orange-500/30 decoration-2 underline-offset-4">03.11.2025 to 31.01.2026</span>
                  </p>

                  <p>
                    Thank you for joining us in our mission to enhance education.
                  </p>
                </div>

                {/* 6. Signature block */}
                <div className="mt-10 pt-6 border-t border-slate-100 flex flex-row items-end justify-between relative z-10">
                  <div className="text-sm space-y-1 text-slate-700 text-left">
                    <p className="font-semibold text-slate-800">Sincerely,</p>
                    <p className="font-black text-slate-900 mt-2">LetsUpgrade.in</p>
                  </div>

                  {/* Program Office Signature Seal */}
                  <div className="text-right flex flex-col items-end">
                    <div className="w-20 h-[1.5px] bg-slate-300 mb-2" />
                    <span className="text-[10px] font-mono font-bold text-slate-900 uppercase tracking-widest leading-none">
                      PROGRAM OFFICE
                    </span>
                    <span className="text-[9px] text-[#f97316] font-semibold uppercase tracking-wider mt-1">
                      LETSUPGRADE EDTECH
                    </span>
                  </div>
                </div>

                {/* 7. Corporate Metadata Footer */}
                <div className="mt-14 pt-6 border-t border-slate-150 text-[10px] text-slate-500 text-center space-y-2 relative z-10">
                  <p className="font-mono text-slate-800 font-bold text-xs tracking-wider">
                    CIN : U80902MH2020PTC346372
                  </p>
                  <p className="max-w-md mx-auto font-light leading-relaxed text-slate-500">
                    10th Floor, Platinum Technopark, Opp. Vashi Railway Station, InOrbit Bypass, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703
                  </p>
                  <p className="font-semibold text-slate-600 text-[11px] tracking-wide mt-1">
                    www.LetsUpgrade.in | support@letsupgrade.in
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
