/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Sparkles, MapPin, Calendar, Award, ChevronRight, CheckCircle2, Trophy, ArrowRight, Puzzle, Cpu, X, QrCode, FileCheck } from 'lucide-react';
import { activitiesList } from '../data';
import agentathonCertificate from '../Agentathon_Certificate.jpg';

interface MilestoneDetail {
  id: string;
  title: string;
  date: string;
  location: string;
  badge?: string;
  role: string;
  focus: string;
  highlights: string[];
  description: string;
}

const MILESTONES: MilestoneDetail[] = [
  {
    id: 'act-2',
    title: 'TECHNOSPLURGE 2K25',
    date: 'April 10–12, 2025',
    location: 'Malla Reddy University, Hyderabad',
    role: 'Data Competitor',
    focus: 'Analytical Logic & EDA Heuristics',
    description: 'Participated in the Emojencius logic and sequence challenge at the Department of Data Science tech fest.',
    highlights: [
      'Secured finalist ranking in department speed-reasoning and logic challenges.',
      'Developed computational heuristics to solve complex sequence riddles.',
      'Collaborated on data cleaning and features with data intelligence teams.'
    ]
  },
  {
    id: 'act-1',
    title: '{ AGENTATHON } 2025',
    date: 'December 20-21, 2025',
    location: 'Malla Reddy University, Hyderabad',
    badge: 'ID: GDG-236',
    role: 'AI Competitor & Agent Designer',
    focus: 'Agentic AI Architecture & LLM Orchestration',
    description: 'Attended Agentathon 2025, the Guinness World Record breaking Agentic AI hackathon hosted by GDG Hyderabad.',
    highlights: [
      'Designed multi-agent routing graphs using Vertex AI and Gemini APIs.',
      'Collaborated with over 2,000 developers under ID GDG-236 to break the record.',
      'Presented autonomous agent models to GDG leads and verified performance.'
    ]
  }
];

export default function ActivitiesSection() {
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string>('act-1');
  const [showCertificate, setShowCertificate] = useState<boolean>(false);

  const activeMilestone = MILESTONES.find(m => m.id === selectedMilestoneId) || MILESTONES[1];

  return (
    <section id="activities" className="pt-6 md:pt-8 pb-20 md:pb-28 relative overflow-hidden bg-brand-bg">
      <div className="absolute top-[20%] right-[-5%] w-96 h-96 bg-brand-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div id="activities-header" className="mb-6 text-left max-w-2xl">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-emerald uppercase block mb-2">
            BEYOND ACADEMICS
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white tracking-tight">
            Extracurricular <span className="bg-gradient-to-r from-brand-emerald to-teal-400 bg-clip-text text-transparent">Sparks</span>
          </h2>
          <div className="w-16 h-[3px] bg-brand-emerald mt-4 mb-4" />
          <p className="text-slate-400 text-sm font-light mt-2">
            Active community participation, developer hackathons, and scientific logical challenges.
          </p>
        </div>

        {/* Main Timeline Card Layout */}
        <div className="max-w-5xl mx-auto">
          
          {/* Card 1: Interactive Timeline & Logging Hub */}
          <motion.div className="group rounded-3xl bg-slate-950 border border-white/5 p-4 flex flex-col justify-between shadow-xl relative overflow-hidden min-h-[360px]">
            {/* Background grid watermark */}
            <div className="absolute inset-0 bg-grid-white/2 pointer-events-none opacity-20" />

            {/* Premium Hover Radial Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--season-primary),transparent_65%)] opacity-0 group-hover:opacity-[0.06] transition-opacity duration-700 pointer-events-none z-10" />

            {/* Animated Border Beam */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-3xl z-20" xmlns="http://www.w3.org/2000/svg">
              {/* First Line */}
              <rect
                className="border-beam-rect animate-border-flow-1"
                pathLength="100"
                fill="none"
                stroke="#ec4899"
                strokeWidth="2"
              />
              {/* Second Line (Delayed by CSS delay to run opposite to the first) */}
              <rect
                className="border-beam-rect animate-border-flow-2"
                pathLength="100"
                fill="none"
                stroke="#ec4899"
                strokeWidth="2"
              />
              <defs>
                <linearGradient id="beam-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                  <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            
            <div className="relative z-10 flex flex-col md:grid md:grid-cols-12 gap-6 h-full flex-grow p-1 md:p-3">
              {/* Left Column: Interactive Timeline Navigation */}
              <div className="md:col-span-5 flex flex-col justify-center space-y-6 text-left">
                {/* Mobile Timeline Track (Horizontal) */}
                <div className="md:hidden relative flex items-start justify-between max-w-md mx-auto pt-4 pb-2 w-full">
                  {/* Connection Line */}
                  <div className="absolute left-0 right-0 h-[2px] bg-slate-800 top-[34px]" />
                  <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-teal-500/20 via-brand-emerald/50 to-transparent top-[34px]" />

                  {/* Milestone Node 1 (Technosplurge) */}
                  <button
                    onClick={() => {
                      setSelectedMilestoneId('act-2');
                      setShowCertificate(false);
                    }}
                    className="relative z-10 flex flex-col items-center focus:outline-none cursor-pointer group"
                  >
                    <motion.div
                      animate={{
                        scale: selectedMilestoneId === 'act-2' ? 1.15 : 1,
                        borderColor: selectedMilestoneId === 'act-2' ? '#10b981' : '#1e293b',
                        backgroundColor: selectedMilestoneId === 'act-2' ? '#070e20' : '#0f172a'
                      }}
                      className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-sm font-bold text-white shadow-lg transition-all"
                    >
                      <Puzzle className={`w-4.5 h-4.5 ${selectedMilestoneId === 'act-2' ? 'text-brand-emerald' : 'text-slate-500 group-hover:text-slate-350'}`} />
                    </motion.div>
                    <span className={`font-mono text-[9px] mt-2 tracking-wide font-bold uppercase transition-all ${selectedMilestoneId === 'act-2' ? 'text-brand-emerald' : 'text-slate-500 group-hover:text-slate-300'}`}>
                      APR 2025
                    </span>
                  </button>

                  {/* Milestone Node 2 (Agentathon) */}
                  <button
                    onClick={() => setSelectedMilestoneId('act-1')}
                    className="relative z-10 flex flex-col items-center focus:outline-none cursor-pointer group"
                  >
                    <motion.div
                      animate={{
                        scale: selectedMilestoneId === 'act-1' ? 1.15 : 1,
                        borderColor: selectedMilestoneId === 'act-1' ? '#10b981' : '#1e293b',
                        backgroundColor: selectedMilestoneId === 'act-1' ? '#070e20' : '#0f172a'
                      }}
                      className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-sm font-bold text-white shadow-lg transition-all"
                    >
                      <Cpu className={`w-4.5 h-4.5 ${selectedMilestoneId === 'act-1' ? 'text-brand-emerald' : 'text-slate-500 group-hover:text-slate-350'}`} />
                    </motion.div>
                    <span className={`font-mono text-[9px] mt-2 tracking-wide font-bold uppercase transition-all ${selectedMilestoneId === 'act-1' ? 'text-brand-emerald' : 'text-slate-500 group-hover:text-slate-300'}`}>
                      DEC 2025
                    </span>
                  </button>
                </div>

                {/* Desktop Timeline Track (Vertical) */}
                <div className="hidden md:flex flex-col space-y-6 relative pl-10">
                  {/* Vertical Connection Line */}
                  <div className="absolute left-[20px] top-2 bottom-2 w-[2px] bg-slate-800" />
                  <div className="absolute left-[20px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-teal-500/20 via-brand-emerald/50 to-transparent" />

                  {MILESTONES.map((milestone) => {
                    const isActive = selectedMilestoneId === milestone.id;
                    return (
                      <button
                        key={milestone.id}
                        onClick={() => {
                          setSelectedMilestoneId(milestone.id);
                          if (milestone.id !== 'act-1') setShowCertificate(false);
                        }}
                        className="flex items-start text-left focus:outline-none cursor-pointer group/node relative py-1"
                      >
                        {/* Circular Node bullet on the line */}
                        <div className="absolute left-[-38px] top-1 z-10">
                          <motion.div
                            animate={{
                              scale: isActive ? 1.15 : 1,
                              borderColor: isActive ? '#10b981' : '#1e293b',
                              backgroundColor: isActive ? '#070e20' : '#0f172a',
                            }}
                            className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-white shadow-lg transition-all"
                          >
                            {milestone.id === 'act-2' ? (
                              <Puzzle className={`w-4.5 h-4.5 ${isActive ? 'text-brand-emerald' : 'text-slate-500 group-hover/node:text-slate-350'}`} />
                            ) : (
                              <Cpu className={`w-4.5 h-4.5 ${isActive ? 'text-brand-emerald' : 'text-slate-500 group-hover/node:text-slate-350'}`} />
                            )}
                          </motion.div>
                        </div>

                        {/* Node Content */}
                        <div className="ml-4 pt-0.5">
                          <span className={`font-mono text-[9px] font-bold uppercase tracking-wider transition-colors ${isActive ? 'text-brand-emerald' : 'text-slate-500 group-hover/node:text-slate-300'}`}>
                            {milestone.date.split(',')[1]?.trim() || milestone.date}
                          </span>
                          <h4 className={`font-display font-bold text-sm tracking-wide mt-0.5 transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover/node:text-slate-300'}`}>
                            {milestone.title}
                          </h4>
                          <p className="text-[10px] text-slate-500 font-light mt-0.5">
                            {milestone.role}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Dynamic Console Panel */}
              <div className="md:col-span-7 flex flex-col justify-center text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMilestone.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="p-4 md:p-5 rounded-2xl bg-slate-950/60 border border-white/5 space-y-3.5 h-full flex flex-col justify-between font-display"
                  >
                    <div className="space-y-3">
                      {/* Event titles and action button header row */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-mono text-[8px] font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded uppercase">
                              {activeMilestone.role}
                            </span>
                            {activeMilestone.badge && (
                              <span className="font-mono text-[8.5px] font-bold text-slate-500 uppercase">
                                {activeMilestone.badge}
                              </span>
                            )}
                          </div>
                          <h3 className="font-display font-extrabold text-xl text-white tracking-tight mt-1">
                            {activeMilestone.title}
                          </h3>
                        </div>

                        {/* View Certificate option (Agentathon only) */}
                        {activeMilestone.id === 'act-1' && (
                          <button
                            onClick={() => setShowCertificate(true)}
                            className="px-3.5 py-1.5 rounded-xl bg-brand-emerald hover:bg-brand-emerald/90 text-brand-bg font-display font-semibold text-[10px] tracking-wider transition-all shadow-[0_4px_12px_rgba(16,185,129,0.2)] hover:shadow-[0_4px_20px_rgba(16,185,129,0.35)] transform hover:-translate-y-0.5 flex items-center justify-center space-x-1.5 cursor-pointer focus:outline-none shrink-0"
                          >
                            <FileCheck className="w-3.5 h-3.5" />
                            <span>VIEW CERTIFICATE</span>
                          </button>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-400 font-mono text-[10px]">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-brand-emerald" /> {activeMilestone.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-brand-cyan" /> {activeMilestone.location}
                        </span>
                      </div>

                      <p className="text-slate-300 text-[13px] font-normal leading-relaxed">
                        {activeMilestone.description}
                      </p>

                      {/* Highlights Bullet List */}
                      <div className="space-y-2 pt-2.5 border-t border-white/5">
                        <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest block">
                          Core Execution Highlights
                        </span>
                        <ul className="space-y-1.5">
                          {activeMilestone.highlights.map((hl, index) => (
                            <li key={index} className="flex items-start space-x-2 text-xs font-normal text-slate-350 leading-relaxed">
                              <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Official Agentathon Certificate of Participation Modal */}
      <AnimatePresence>
        {showCertificate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCertificate(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Certificate Paper Container */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 30 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative max-w-2xl w-full bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-white/10"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowCertificate(false)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors focus:outline-none z-30 cursor-pointer"
                title="Close Certificate"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-4 md:p-6">
                <img
                  src={agentathonCertificate}
                  alt="Agentathon 2025 Certificate of Participation"
                  className="w-full h-auto rounded-xl border border-white/5 shadow-lg object-contain"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
