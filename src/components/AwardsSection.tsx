/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Trophy, Stars, Landmark, ChevronDown, FileCheck, X, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { awardsList } from '../data';

interface AwardDetail {
  metrics: { label: string; value: string }[];
  bulletPoints: string[];
  issuer: string;
  credentialId?: string;
}

const AWARD_DETAILS: Record<string, AwardDetail> = {
  'aw-1': {
    issuer: 'Malla Reddy University',
    credentialId: 'MRU-2024-AC-092',
    metrics: [
      { label: 'Cumulative GPA', value: '9.0/10' },
      { label: 'Batch Rank', value: 'Top 10%' },
      { label: 'Core Focus', value: 'Data Science' }
    ],
    bulletPoints: [
      'Ranked in the top 10% of the entire department for outstanding academic performance.',
      'Maintained consistent excellence across advanced courses in Statistical Modeling and Data Mining.',
      'Demonstrated high proficiency in database management (SQL) and predictive analytical algorithms.'
    ]
  },
  'aw-2': {
    issuer: 'Department of Data Science - Tech Fest',
    metrics: [
      { label: 'Competitors', value: '80+ Teams' },
      { label: 'Viz Score', value: '98/100' },
      { label: 'Duration', value: '24 Hours' }
    ],
    bulletPoints: [
      'Led ETL, data transformation, and visual modeling for the IPL (2008–2025) Dashboard.',
      'Utilized Excel for data staging and Power BI for building comprehensive season-wise player KPIs.',
      'Recognized as a finalist for design clarity, advanced DAX-based slices, and robust ETL logic.'
    ]
  }
};interface AwardCardProps {
  aw: typeof awardsList[0];
}

function AwardCard({ aw }: AwardCardProps) {
  const details = AWARD_DETAILS[aw.id];
  const [isHovered, setIsHovered] = useState(false);

  const isAcademic = aw.id === 'aw-1';
  const cardShapeOuter = isAcademic 
    ? "rounded-tl-[48px] rounded-br-[48px] rounded-tr-2xl rounded-bl-2xl" 
    : "rounded-tr-[48px] rounded-bl-[48px] rounded-tl-2xl rounded-br-2xl";

  const cardShapeInner = isAcademic 
    ? "rounded-tl-[46px] rounded-br-[46px] rounded-tr-[14px] rounded-bl-[14px]" 
    : "rounded-tr-[46px] rounded-bl-[46px] rounded-tl-[14px] rounded-br-[14px]";

  const iconShape = isAcademic 
    ? "rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md" 
    : "rounded-tr-2xl rounded-bl-2xl rounded-tl-md rounded-br-md";

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{ y: isHovered ? -6 : 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`relative p-[1.5px] ${cardShapeOuter} overflow-hidden transition-all duration-300 shadow-2xl group flex flex-col justify-between text-left cursor-default`}
    >
      {/* Outer Border Glow on hover */}
      <div
        className="absolute inset-0 bg-brand-emerald/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
      />

      {/* Static fall-back border when not hovered */}
      <div className={`absolute inset-0 border border-white/5 ${cardShapeOuter} z-0 pointer-events-none group-hover:border-transparent transition-colors duration-300`} />

      {/* Magical Spinning border beam of light */}
      <div className="absolute inset-[-60%] bg-[conic-gradient(from_0deg,transparent_35%,#10b981_50%,transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-border-spin pointer-events-none z-0" />

      {/* Main card body with bg-slate-950 to match ActivitiesSection */}
      <div className={`relative bg-slate-950 ${cardShapeInner} p-6 md:p-8 flex flex-col justify-between h-full w-full z-10 overflow-hidden`}>
        {/* Soft background glow on hover */}
        <div
          className="absolute inset-0 bg-brand-emerald/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        />

        {/* Holographic Sheen/Shine reflection overlay - simple and clean */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-all duration-500 pointer-events-none z-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0"
        />

        {/* Magical floating spark embers */}
        <div className={`absolute inset-0 pointer-events-none z-0 overflow-hidden ${cardShapeInner}`}>
          <div className="absolute left-[15%] bottom-0 w-1.5 h-1.5 bg-emerald-400 rounded-full blur-[0.5px] opacity-0 animate-spark-1" />
          <div className="absolute left-[75%] bottom-0 w-2 h-2 bg-teal-400 rounded-full blur-[1px] opacity-0 animate-spark-2" />
          <div className="absolute left-[45%] bottom-0 w-1 h-1 bg-green-400 rounded-full blur-[0.5px] opacity-0 animate-spark-3" />
        </div>

        <div className="relative z-10">
          {/* Top Badge & Icon Line */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <span className="font-mono text-[9px] font-bold text-emerald-400 bg-brand-emerald/10 border border-brand-emerald/20 px-3 py-1 rounded-full uppercase tracking-wider">
              {aw.year}
            </span>
            {/* Icon wrapper */}
            <div className={`w-12 h-12 ${iconShape} bg-slate-950 border border-slate-800/80 flex items-center justify-center shrink-0 relative overflow-hidden group-hover:border-brand-emerald/30 transition-colors duration-300`}>
              <div className="absolute inset-0 bg-radial from-brand-emerald/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {aw.iconType === 'academic' ? (
                <div className="relative">
                  <Stars className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-all duration-300" />
                  <Landmark className="absolute -bottom-1 -right-1 w-3 h-3 text-emerald-500 opacity-60" />
                </div>
              ) : (
                <div className="relative">
                  <Trophy className="w-5 h-5 text-emerald-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                </div>
              )}
            </div>
          </div>

          {/* Title & Description */}
          <div className="space-y-2 mb-6">
            <span className="font-mono text-[9px] font-bold tracking-widest text-slate-500 uppercase block">
              {aw.subtitle}
            </span>
            <h3 className="font-display font-black text-2xl text-white group-hover:text-brand-emerald transition-colors leading-tight">
              {aw.title}
            </h3>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              {aw.description}
            </p>
          </div>

          {/* Interactive Always-visible metrics sub-grid */}
          {details && (
            <div className="grid grid-cols-3 gap-2.5 mb-6">
              {details.metrics.map((met, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.06, y: -2 }}
                  transition={{ type: 'spring', stiffness: 450, damping: 14 }}
                  className="p-3.5 rounded-2xl bg-slate-950/60 border border-white/5 flex flex-col items-center justify-center text-center hover:bg-slate-950 hover:border-brand-emerald/20 hover:shadow-[0_0_15px_rgba(16,185,129,0.05)] transition-all duration-300 relative group/metric"
                >
                  <span className="text-[8px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    {met.label}
                  </span>
                  <span className="font-display font-black text-sm text-emerald-400 group-hover/metric:text-green-300 transition-colors">
                    {met.value}
                  </span>
                </motion.div>
              ))}
            </div>
          )}
        </div>


      </div>
    </motion.div>
  );
}

export default function AwardsSection() {
  return (
    <section id="awards" className="pt-6 md:pt-8 pb-20 md:pb-28 relative overflow-hidden bg-brand-bg">
      <style>{`
        @keyframes spark-1 {
          0% { transform: translateY(20px) translateX(-40px) scale(0.5); opacity: 0; }
          15% { opacity: 0.9; }
          85% { opacity: 0.9; }
          100% { transform: translateY(-360px) translateX(20px) scale(1.2); opacity: 0; }
        }
        @keyframes spark-2 {
          0% { transform: translateY(20px) translateX(30px) scale(0.5); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.7; }
          100% { transform: translateY(-380px) translateX(-30px) scale(1.4); opacity: 0; }
        }
        @keyframes spark-3 {
          0% { transform: translateY(20px) translateX(-10px) scale(0.4); opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.8; }
          100% { transform: translateY(-370px) translateX(-5px) scale(1.0); opacity: 0; }
        }
        @keyframes border-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-border-spin {
          animation: border-spin 6s linear infinite;
        }
        .group:hover .animate-spark-1 {
          animation: spark-1 5s linear infinite;
        }
        .group:hover .animate-spark-2 {
          animation: spark-2 7s linear infinite;
          animation-delay: 1.5s;
        }
        .group:hover .animate-spark-3 {
          animation: spark-3 6s linear infinite;
          animation-delay: 3s;
        }
      `}</style>
      <div className="absolute top-[20%] left-[-10%] w-80 h-80 bg-brand-purple/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div id="awards-header" className="mb-6 text-left max-w-2xl">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-emerald uppercase block mb-2">
            ACCOLADES
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white tracking-tight">
            Awards & <span className="bg-gradient-to-r from-brand-emerald to-green-400 bg-clip-text text-transparent">Recognition</span>
          </h2>
          <div className="w-16 h-[3px] bg-brand-emerald mt-4 mb-4" />
          <p className="text-slate-400 text-sm font-light mt-2">
            Significant milestones, hackathons, and research accolades in my computational journey.
          </p>
        </div>

        {/* Awards list cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {awardsList.map((aw, idx) => {
            const slideDirection = idx % 2 === 0 ? -35 : 35;
            return (
              <motion.div key={aw.id} className="relative group/wrapper">
              {/* Volumetric background glow */}
              <div className="absolute inset-4 bg-brand-emerald/10 blur-[50px] opacity-0 group-hover/wrapper:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
              
              <AwardCard
                aw={aw}
              />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
