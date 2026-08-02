/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, FileDown, Github, Linkedin, Database, Code, BarChart3, Binary, Mail, Trophy, Code2, FileText } from 'lucide-react';
import { SectionId } from '../types';
import { personalInfo } from '../data';

interface HomeSectionProps {
  onNavigate: (sectionId: SectionId) => void;
}

export default function HomeSection({ onNavigate }: HomeSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-brand-bg"
    >
      {/* Dynamic Grid Background with digital vibe */}
      <div className="absolute inset-0 seasonal-grid-bg [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60" />

      {/* Floating Glowing Orbs */}
      <div className="absolute top-[25%] left-[20%] w-72 h-72 bg-brand-cyan/10 rounded-full filter blur-[100px] animate-pulse duration-[8s]" />
      <div className="absolute bottom-[20%] right-[15%] w-96 h-96 bg-brand-purple/10 rounded-full filter blur-[120px] animate-pulse duration-[12s]" />

      {/* Main Hero Container */}
      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        {/* Intro Tagline */}
        <motion.div className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-brand-cyan/10 border border-brand-cyan/15 rounded-full text-brand-cyan text-[9px] font-sans font-bold tracking-[0.18em] uppercase mb-6">
          <Binary className="w-3 h-3 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Data-Driven Decision Making</span>
        </motion.div>

        {/* Headline greeting */}
        <motion.div className="mb-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-white tracking-tight leading-none">
            Hi, I'm <span className="bg-gradient-to-r from-brand-cyan via-blue-400 to-indigo-400 bg-clip-text text-transparent">{personalInfo.name}</span>
          </h1>
          <div className="flex items-center justify-center p-3 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 animate-pulse">
            {/* SVG Pulse Heart-Beat line representation exactly like the logo screenshot */}
            <svg className="w-10 h-10 text-brand-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
        </motion.div>

        {/* Professional Role Title */}
        <motion.p className="font-display text-xl md:text-2xl font-light text-slate-300 mb-6 tracking-wide">
          Aspiring Data Analyst | Data Explorer @ <span className="text-brand-cyan font-medium border-b border-brand-cyan/30 pb-0.5 hover:border-brand-cyan transition-colors">Malla Reddy University</span>
        </motion.p>

        {/* Bio Subtitle */}
        <motion.p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-6 leading-relaxed font-light">
          {personalInfo.subtitle}
        </motion.p>

        {/* Floating gradient splitter line */}
        <div className="w-64 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent mx-auto mb-6 opacity-60" />

        {/* Interactive Social icons / profiles below subtitle */}
        <motion.div className="flex justify-center items-center space-x-12 md:space-x-14 mb-8 flex-wrap gap-y-6">
          {/* GitHub */}
          <motion.a
            id="hero-github-link"
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="group relative flex flex-col items-center pb-5 text-slate-400 hover:text-white transition-all duration-300"
          >
            <Github className="w-6 h-6 group-hover:scale-115 transition-transform" />
            <div className="absolute top-8 left-1/2 -translate-x-1/2 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-1 transition-all duration-300 pointer-events-none text-slate-200 text-[10px] font-sans font-bold tracking-wider uppercase whitespace-nowrap z-30">
              GitHub
            </div>
          </motion.a>
          
          {/* LinkedIn */}
          <motion.a
            id="hero-linkedin-link"
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            className="group relative flex flex-col items-center pb-5 text-slate-400 hover:text-sky-450 transition-all duration-300"
          >
            <Linkedin className="w-6 h-6 group-hover:scale-115 transition-transform group-hover:text-sky-400" />
            <div className="absolute top-8 left-1/2 -translate-x-1/2 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-1 transition-all duration-300 pointer-events-none text-sky-400 text-[10px] font-sans font-bold tracking-wider uppercase whitespace-nowrap z-30">
              LinkedIn
            </div>
          </motion.a>

          {/* LeetCode */}
          <motion.a
            id="hero-leetcode-link"
            href={personalInfo.leetcodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            className="group relative flex flex-col items-center pb-5 text-slate-400 hover:text-amber-500 transition-all duration-300"
          >
            <Code2 className="w-6 h-6 group-hover:scale-115 transition-transform" />
            <div className="absolute top-8 left-1/2 -translate-x-1/2 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-1 transition-all duration-300 pointer-events-none text-amber-500 text-[10px] font-sans font-bold tracking-wider uppercase whitespace-nowrap z-30">
              LeetCode
            </div>
          </motion.a>

          {/* HackerRank */}
          <motion.a
            id="hero-hackerrank-link"
            href={personalInfo.hackerrankUrl}
            target="_blank"
            rel="noopener noreferrer"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4.1, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
            className="group relative flex flex-col items-center pb-5 text-slate-400 hover:text-emerald-400 transition-all duration-300"
          >
            <Trophy className="w-6 h-6 group-hover:scale-115 transition-transform" />
            <div className="absolute top-8 left-1/2 -translate-x-1/2 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-1 transition-all duration-300 pointer-events-none text-emerald-400 text-[10px] font-sans font-bold tracking-wider uppercase whitespace-nowrap z-30">
              HackerRank
            </div>
          </motion.a>

          {/* Resume Link */}
          <motion.a
            id="hero-resume-link"
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
            className="group relative flex flex-col items-center pb-5 text-slate-400 hover:text-brand-cyan transition-all duration-300"
            title="My Resume"
          >
            <FileText className="w-6 h-6 group-hover:scale-115 transition-transform" />
            <div className="absolute top-8 left-1/2 -translate-x-1/2 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-1 transition-all duration-300 pointer-events-none text-brand-cyan text-[10px] font-sans font-bold tracking-wider uppercase whitespace-nowrap z-30">
              Resume
            </div>
          </motion.a>
        </motion.div>

        {/* Primaries & Action Call Button tags */}
        <motion.div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-5">
          <button
            id="hero-view-projects-btn"
            onClick={() => onNavigate(SectionId.PROJECTS)}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-cyan hover:bg-brand-cyan/90 text-brand-bg font-display font-bold tracking-wide transition-all shadow-[0_4px_20px_rgba(14,165,233,0.3)] hover:shadow-[0_4px_30px_rgba(14,165,233,0.5)] transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 group cursor-pointer focus:outline-none"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
          
          <a
            id="hero-download-resume-btn"
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-transparent hover:bg-white/5 border-2 border-slate-700 hover:border-slate-500 font-display font-medium text-slate-300 hover:text-white transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 cursor-pointer focus:outline-none"
          >
            <FileDown className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
