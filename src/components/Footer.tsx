/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SectionId } from '../types';
import { personalInfo } from '../data';

interface FooterProps {
  onNavigate: (sectionId: SectionId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer id="portfolio-footer" className="bg-slate-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Core Footer Horizontal Layout */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-left">
          
          {/* Left panel info */}
          <div className="space-y-2">
            <button
              onClick={() => onNavigate(SectionId.HOME)}
              className="font-display font-black text-xl tracking-wider text-white hover:text-brand-cyan transition-colors focus:outline-none cursor-pointer text-left"
            >
              CH<span className="text-brand-cyan font-bold leading-none animate-pulse">.</span>RT
            </button>
            <p className="text-xs text-slate-400 font-light max-w-sm">
              Advanced Data Analyst | Building Data-Driven Futures and enterprise computational structures.
            </p>
          </div>

          {/* Right panel credits */}
          <div className="md:text-right space-y-1.5 shrink-0">
            <span className="font-mono text-[10px] font-bold text-slate-500 tracking-widest uppercase block">
              OPTIMIZED FOR MNC SCREENING
            </span>
            <p className="text-[10px] font-mono text-slate-600">
              © 2026 CH. Ravi Teja. Technical Portfolio v2.5
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
