/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Briefcase, Calendar, BarChart, ShieldCheck, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { experiences } from '../data';

export default function ExperienceSection() {
  return (
    <section id="experience" className="pt-6 md:pt-8 pb-16 md:pb-24 relative overflow-hidden bg-brand-bg select-none">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div id="experience-header" className="mb-8 text-left max-w-2xl">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase block mb-2">
            CAREER PIPELINE
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white tracking-tight">
            Work <span className="bg-gradient-to-r from-brand-cyan to-blue-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-16 h-[3px] bg-brand-cyan mt-3 mb-3" />
          <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed mt-1">
            A roadmap of my professional evolution, highlighting strategic contributions and technical growth.
          </p>
        </div>

        {/* Timeline Path Structure */}
        <div className="relative max-w-4xl mx-auto py-4">
          
          {/* Vertical core pipeline thread line running from up to down with top and bottom indicator circles */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1.5px] bg-slate-800/80 -translate-x-1/2 pointer-events-none">
            {/* Circle at the start of the line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#22d3ee] shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            {/* Circle at the end of the line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-[#22d3ee] shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          </div>

          <div className="space-y-6 md:space-y-8">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div 
                  key={exp.id} 
                  id={`experience-timeline-item-${exp.id}`} 
                  className={`relative w-full flex flex-col md:flex-row items-center ${
                    isLeft ? 'md:justify-start' : 'md:justify-end'
                  } group`}
                >
                  {/* Glowing Node on the vertical pipeline spine */}
                  <div 
                    className="absolute left-[20px] md:left-1/2 top-7 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#0a101f] border-2 border-[#22d3ee] shadow-[0_0_8px_rgba(34,211,238,0.8)] z-20 group-hover:scale-125 group-hover:border-white transition-all duration-300 pointer-events-none" 
                  />

                  {/* Horizontal branch connector line - Mobile */}
                  <div 
                    className="md:hidden absolute left-[20px] w-[28px] h-[1.5px] bg-sky-500/25 group-hover:bg-[#22d3ee]/60 top-7 -translate-y-1/2 z-10 transition-colors duration-300 pointer-events-none" 
                  />

                  {/* Horizontal branch connector line - Desktop */}
                  <div 
                    className={`hidden md:block absolute top-7 -translate-y-1/2 w-[28px] h-[1.5px] bg-sky-500/25 group-hover:bg-[#22d3ee]/60 z-10 transition-colors duration-300 pointer-events-none ${
                      isLeft ? 'left-[calc(50%-28px)]' : 'left-1/2'
                    }`} 
                  />

                  {/* The Experience Card container with reduced width and padding */}
                  <div className="w-full pl-[48px] pr-1 md:pl-0 md:pr-0 md:w-[calc(50%-28px)]">
                    <motion.div 
                      whileHover="hover"
                      whileTap={{ scale: 0.995 }}
                      variants={{
                        initial: { 
                          y: 0, 
                          scale: 1,
                          borderColor: 'rgba(12, 74, 110, 0.35)',
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
                        },
                        hover: { 
                          y: -4, 
                          scale: 1.01,
                          borderColor: 'rgba(34, 211, 238, 0.45)',
                          boxShadow: '0 12px 30px -8px rgba(34, 211, 238, 0.15)',
                          backgroundColor: 'rgba(15, 23, 42, 0.94)'
                        }
                      }}
                      initial="initial"
                      transition={{ type: "spring", stiffness: 350, damping: 20 }}
                      className="relative p-4 sm:p-5 rounded-xl bg-brand-card/80 border transition-all duration-300"
                    >
                      {/* Glowing background gradient inside card */}
                      <motion.div 
                        variants={{
                          hover: { 
                            scale: 1.4, 
                            opacity: 0.1,
                          }
                        }}
                        className="absolute -top-1 -right-1 w-20 h-20 bg-sky-500/5 rounded-full filter blur-lg pointer-events-none transition-all duration-500" 
                      />

                      {/* Interactive Animated Hover Sheen Sweep */}
                      <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none z-0">
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

                      {/* Floating Badge reacting on hover */}
                      <motion.div 
                        variants={{
                          hover: { 
                            scale: 1.2,
                            rotate: 12,
                            borderColor: 'rgba(34, 211, 238, 0.65)',
                            color: '#22d3ee'
                          }
                        }}
                        className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-md bg-[#0f172a] border border-sky-500/30 text-sky-400 flex items-center justify-center shadow-sm z-10 transition-colors ${
                          isLeft ? 'md:-left-3 -right-3' : '-right-3'
                        }`}
                      >
                        <BarChart className="w-3.5 h-3.5" />
                      </motion.div>

                      {/* Floating Bottom Verified Tick Badge */}
                      <motion.div 
                        variants={{
                          hover: { 
                            scale: 1.15,
                            borderColor: 'rgba(16, 185, 129, 0.65)',
                            boxShadow: '0 0 12px rgba(16, 185, 129, 0.35)'
                          }
                        }}
                        className={`absolute -bottom-3 w-6 h-6 rounded-md bg-[#064e3b] border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-sm z-10 transition-all duration-300 ${
                          isLeft ? 'md:left-8 right-8' : 'right-8'
                        }`}
                        title="Verified credential"
                      >
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </motion.div>

                      {/* Main Layout Card Header */}
                      <div className="flex items-start space-x-3 mb-2.5 relative z-10">
                        {/* Left side: Blue Briefcase Box */}
                        <motion.div 
                          variants={{
                            hover: { 
                              scale: 1.08, 
                              rotate: [0, -4, 4, 0],
                              backgroundColor: 'rgba(3, 105, 161, 0.2)',
                              borderColor: 'rgba(2, 132, 199, 0.6)'
                            }
                          }}
                          className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#0369a1]/10 border border-[#0284c7]/30 flex items-center justify-center text-[#38bdf8] shrink-0"
                        >
                          <Briefcase className="w-4 h-4 text-sky-400 stroke-[2]" />
                        </motion.div>

                        {/* Right details */}
                        <div className="space-y-0.5 text-left flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <span className="text-[9px] font-mono font-bold tracking-widest text-sky-400 uppercase">
                              POSITION
                            </span>
                            {exp.type && (
                              <span className="text-[8px] font-mono font-semibold px-1.5 py-0.5 rounded bg-sky-500/10 text-cyan-300 border border-sky-500/20">
                                {exp.type.toUpperCase()}
                              </span>
                            )}
                          </div>
                          <h3 className="font-display font-bold text-base sm:text-lg text-white tracking-tight leading-snug">
                            {exp.role}
                          </h3>
                          <p className="text-xs sm:text-sm font-medium text-sky-400">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      {exp.description && (
                        <p className="text-slate-300 text-xs leading-relaxed mb-2.5 text-left relative z-10 font-light">
                          {exp.description}
                        </p>
                      )}

                      {/* Skills pills */}
                      {exp.skills && exp.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-2.5 relative z-10">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-[9px] font-mono font-medium px-2 py-0.5 rounded bg-sky-950/70 border border-sky-500/20 text-sky-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Separator line */}
                      <div className="w-full h-[1px] bg-sky-500/10 my-2 relative z-10" />

                      {/* Date & Location Details footer */}
                      <div className="flex flex-wrap items-center justify-between gap-1.5 font-mono text-[11px] tracking-wider relative z-10">
                        <div className="flex items-center space-x-1.5">
                          <Calendar className="w-3.5 h-3.5 text-blue-400" />
                          <span className="font-semibold text-white">{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-slate-400 text-[10px]">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
