/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, ExternalLink, TrendingUp, Compass, Table, Sparkles, PieChart, Database, Activity } from 'lucide-react';
import { motion } from 'motion/react';
import { projectsList, personalInfo } from '../data';

export default function ProjectsSection() {
  
  // Render high-tech live dynamic visualizations inside each card's preview area!
  const renderDashboardPreview = (type: 'excel' | 'python' | 'powerbi' | 'finsight' | 'uber') => {
    switch (type) {
      case 'excel':
        return (
          <div className="w-full h-full bg-white relative overflow-hidden select-none flex items-center justify-center">
            <img 
              src="Swiggy.png" 
              alt="Swiggy Sales Dashboard"
              className="w-full h-full object-cover object-top group-hover:scale-105 group-hover:translate-y-[-2px] transition-all duration-500 ease-out"
              referrerPolicy="no-referrer"
            />
          </div>
        );

      case 'finsight':
        return (
          <div className="w-full h-full bg-brand-card/90 relative overflow-hidden select-none flex items-center justify-center border-b border-white/5">
            <img 
              src="FinSight.png" 
              alt="FinSight Financial Analysis Dashboard"
              className="w-full h-full object-cover group-hover:scale-105 group-hover:translate-y-[-2px] transition-all duration-500 ease-out"
              referrerPolicy="no-referrer"
            />
          </div>
        );

      case 'uber':
        return (
          <div className="w-full h-full bg-brand-card/90 relative overflow-hidden select-none flex items-center justify-center border-b border-white/5">
            <img 
              src="Uber.png" 
              alt="Uber Trip Analysis Dashboard"
              className="w-full h-full object-cover object-top group-hover:scale-105 group-hover:translate-y-[-2px] transition-all duration-500 ease-out"
              referrerPolicy="no-referrer"
            />
          </div>
        );

      case 'python':
        // Mock financial stock analysis multi line trend lines
        return (
          <div className="w-full h-full bg-brand-card/85 p-4 flex flex-col justify-between border-b border-white/5 relative overflow-hidden group-hover:bg-brand-card transition-colors duration-300">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-brand-cyan/25 pb-2">
              <span className="font-display font-bold text-[10px] tracking-wide text-brand-cyan flex items-center space-x-1">
                <TrendingUp className="w-3 h-3" />
                <span>AI Financial Market Analysis (Python)</span>
              </span>
              <span className="text-[8px] font-mono bg-brand-cyan/10 text-brand-cyan px-1.5 py-0.5 rounded uppercase">PyPlot / Pandas</span>
            </div>

            {/* Charts with line metrics */}
            <div className="relative h-24 my-2 flex items-center justify-center p-1 bg-slate-950/80 rounded border border-white/5">
              
              {/* Backgrid columns */}
              <svg className="absolute inset-0 w-full h-full text-slate-900/60" xmlns="http://www.w3.org/2000/svg">
                <line x1="25%" y1="0" x2="25%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                <line x1="50%" y1="0" x2="50%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                <line x1="75%" y1="0" x2="75%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
              </svg>

              {/* Trendlines SVG */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                {/* Google line (blue) */}
                <path d="M 5 35 Q 25 15, 50 20 T 95 5" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
                {/* Meta line (teal) */}
                <path d="M 5 28 Q 30 35, 55 15 T 95 10" fill="none" stroke="#10b981" strokeWidth="1.2" />
                {/* Dot markers */}
                <circle cx="50" cy="20" r="1.5" fill="#38bdf8" />
                <circle cx="95" cy="5" r="1.5" fill="#38bdf8" />
              </svg>

              {/* Float values labels */}
              <div className="absolute top-1 left-2 text-[6px] font-mono text-brand-cyan uppercase">GOOG +2.4%</div>
              <div className="absolute bottom-1 right-2 text-[6px] font-mono text-brand-emerald uppercase">META +1.8%</div>
            </div>

            {/* Legend row */}
            <div className="flex justify-between items-center text-[7px] font-mono text-slate-500">
              <span>Numpy Matrix Corr: 0.84</span>
              <span>Dataset size: 12,450 rows</span>
            </div>
          </div>
        );

      case 'powerbi':
        // Mock IPL stats interactive BI dashboard
        return (
          <div className="w-full h-full bg-brand-card/85 p-4 flex flex-col justify-between border-b border-white/5 relative overflow-hidden group-hover:bg-brand-card transition-colors duration-300">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-brand-purple/25 pb-2">
              <span className="font-display font-bold text-[10px] tracking-wide text-brand-purple flex items-center space-x-1">
                <PieChart className="w-3 h-3" />
                <span>IPL Dashboard (Power BI Suite)</span>
              </span>
              <span className="text-[8px] font-mono bg-brand-purple/10 text-brand-purple px-1.5 py-0.5 rounded uppercase">Power Query DAX</span>
            </div>

            {/* Split metrics panel */}
            <div className="grid grid-cols-2 gap-2 my-2 items-center">
              
              {/* Pie/Radial design */}
              <div className="relative h-14 flex items-center justify-center">
                <svg className="w-12 h-12 transform -rotate-90">
                  <circle cx="24" cy="24" r="18" fill="transparent" stroke="#1e293b" strokeWidth="8" />
                  <circle cx="24" cy="24" r="18" fill="transparent" stroke="#8b5cf6" strokeWidth="8" strokeDasharray="113" strokeDashoffset="45" />
                  <circle cx="24" cy="24" r="18" fill="transparent" stroke="#0ea5e9" strokeWidth="8" strokeDasharray="113" strokeDashoffset="90" />
                </svg>
                <div className="absolute text-[6px] font-mono text-white text-center">RCB / MI</div>
              </div>

              {/* KPIs list */}
              <div className="flex flex-col space-y-1.5 text-left pl-1">
                <div className="text-[6.5px] font-mono text-slate-400 leading-none">Orange Cap runs: <span className="text-amber-500 font-bold">1,296</span></div>
                <div className="text-[6.5px] font-mono text-slate-400 leading-none">Purple Cap wkts: <span className="text-brand-purple font-bold">34</span></div>
                <div className="text-[6.5px] font-mono text-slate-400 leading-none">Fours / Sixes: <span className="text-brand-cyan font-bold">2.2K / 943</span></div>
              </div>
            </div>

            {/* Footer filter */}
            <div className="flex justify-between items-center text-[7px] font-mono text-slate-500 pt-1.5 border-t border-white/5">
              <span>Season: 2008 – 2025</span>
              <span className="px-1 bg-brand-purple/15 text-brand-purple rounded">Slicers Active</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="pt-6 md:pt-8 pb-20 md:pb-28 relative overflow-hidden bg-brand-bg">
      <div className="absolute top-[30%] left-0 w-80 h-80 bg-brand-cyan/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div id="projects-header" className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase block mb-2">
              PROJECT HUB
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white tracking-tight">
              Analytics <span className="bg-gradient-to-r from-brand-cyan to-indigo-400 bg-clip-text text-transparent">Showcase</span>
            </h2>
            <div className="w-16 h-[3px] bg-brand-cyan mt-4" />
            <p className="text-slate-400 text-sm font-light mt-4 max-w-2xl leading-relaxed">
              Highlighting end-to-end data lifecycle management, from complex raw extraction to elegant dashboard visualizations.
            </p>
          </div>

          <a
            id="explore-github-button"
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-end px-5 py-3 rounded-xl bg-slate-900 border-2 border-white/10 hover:border-brand-cyan/60 text-slate-300 hover:text-white font-display text-xs font-semibold tracking-wide transition-all shadow-sm flex items-center space-x-2 group cursor-pointer focus:outline-none"
          >
            <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Explore GitHub Repo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
          {projectsList.map((project, idx) => {
            const initialX = idx === 0 ? -30 : idx === 2 ? 30 : 0;
            const initialY = idx === 1 ? 30 : 0;
            return (
              <motion.div key={project.id} id={`project-card-${project.id}`} className="group flex flex-col rounded-2xl bg-brand-card border border-white/5 hover:border-white/10 overflow-hidden shadow-xl hover:shadow-[0_4px_30px_rgba(12,19,34,0.6)] hover:-translate-y-1 transition-all duration-300">
              {/* Dynamic Interactive Preview Canvas Container */}
              <div 
                className="w-full relative overflow-hidden bg-slate-950"
                style={{ aspectRatio: 1.5 }}
              >
                {renderDashboardPreview(project.thumbnailType)}
              </div>

              {/* Projects descriptive body text */}
              <div className="p-6 flex flex-col flex-grow text-left">
                <h3 className="font-display font-extrabold text-lg text-white mb-3 group-hover:text-brand-cyan transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-xs font-light leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Sub-Tags chips box */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 font-mono text-[9px] font-bold tracking-wider rounded bg-slate-950 border border-slate-900 text-slate-400 hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Button footer links */}
                <div className="mt-auto">
                  <a
                    id={`project-source-link-${project.id}`}
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border-2 border-slate-900 hover:border-brand-cyan/40 font-mono text-[9px] font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-all text-center flex items-center justify-center space-x-1.5 shadow-inner"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>




      </div>
    </section>
  );
}
