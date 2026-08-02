/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Award, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import { educationList } from '../data';

export default function EducationSection() {
  return (
    <section id="education" className="pt-6 md:pt-8 pb-20 md:pb-28 relative overflow-hidden bg-brand-bg">
      <div className="absolute top-[15%] right-[10%] w-80 h-80 bg-brand-emerald/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div id="education-header" className="mb-6 text-left max-w-2xl">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-emerald uppercase block mb-2">
            ACADEMIC BACKGROUND
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white tracking-tight">
            Education <span className="bg-gradient-to-r from-brand-emerald to-green-400 bg-clip-text text-transparent">Profile</span>
          </h2>
          <div className="w-16 h-[3px] bg-brand-emerald mt-4 mb-4" />
          <p className="text-slate-400 text-sm font-light mt-2">
            Solid foundation in Computer Science, statistical computing, and analytical algorithm design.
          </p>
        </div>

        {/* Education Highlight Card */}
        {educationList.map((edu) => (
          <motion.div key={edu.id} id={`education-card-${edu.id}`} className="max-w-4xl mx-auto rounded-3xl bg-brand-card/75 border border-white/5 p-6 md:p-8 shadow-2xl relative overflow-hidden group hover:border-brand-emerald/30 transition-all duration-300">
            {/* Glowing top line accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-emerald/60 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 relative z-10 items-start">
              
              {/* Column 1: Core credentials */}
              <div className="md:col-span-9 space-y-4 text-left">
                
                {/* Degree and University */}
                <div className="space-y-1">
                  <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white tracking-tight leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-base font-bold text-sky-400">
                    {edu.institution}
                  </p>
                </div>

                {/* GPA Display bubble inline */}
                <div className="inline-flex items-center space-x-3.5 p-3 rounded-2xl bg-slate-950/40 border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center text-brand-emerald shrink-0">
                    <Award className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] font-bold text-slate-400 tracking-wider uppercase block leading-none">
                      {edu.gradeLabel}
                    </span>
                    <span className="font-display font-extrabold text-lg md:text-xl text-white mt-1 block tracking-tight">
                      {edu.grade}
                    </span>
                  </div>
                </div>

              </div>

              {/* Column 2: Date badge floated top right with background watermark */}
              <div className="md:col-span-3 flex md:justify-end justify-start relative items-center min-h-[80px]">
                {/* Background Graduation Cap Watermark behind the badge */}
                <div className="absolute right-[-10px] md:right-[-12px] top-1/2 -translate-y-1/2 text-sky-500/15 pointer-events-none select-none z-0">
                  <GraduationCap className="w-24 h-24 -rotate-12 transition-transform duration-500 group-hover:scale-105" />
                </div>

                {/* Year Badge */}
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-sky-500/10 border border-sky-500/20 font-mono text-xs font-bold tracking-widest text-sky-400 uppercase shadow-[0_0_15px_rgba(14,165,233,0.05)] relative z-10 backdrop-blur-[2px]">
                  <span>{edu.period}</span>
                </div>
              </div>

            </div>

            {/* Bottom Specializations section with vertical line */}
            <div className="mt-6 pt-5 border-t border-white/5 relative z-10 text-left">
              <span className="text-[10px] font-mono font-bold tracking-widest text-sky-400 uppercase block mb-2">
                KEY SPECIALIZATIONS
              </span>
              
              <div className="pl-4 border-l-2 border-sky-500/20">
                <p className="text-slate-300 font-sans italic text-sm md:text-base leading-relaxed">
                  {edu.specializations.reduce((acc, current, idx, arr) => {
                    if (idx === 0) return current;
                    if (idx === arr.length - 1) return acc + ', and ' + current;
                    return acc + ', ' + current;
                  }, '')}.
                </p>
              </div>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}
