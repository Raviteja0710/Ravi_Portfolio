/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Calendar, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { SectionId } from '../types';
import { personalInfo } from '../data';

interface NavbarProps {
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
  season: 'SUMMER' | 'WINTER' | 'SPRING' | 'AUTUMN' | 'MONSOON';
  setSeason: (season: 'SUMMER' | 'WINTER' | 'SPRING' | 'AUTUMN' | 'MONSOON') => void;
  isAutoSeason: boolean;
  setIsAutoSeason: (val: boolean) => void;
}

const SEASON_CONFIG = {
  SUMMER: { label: 'Summer', icon: '☀️', textClass: 'text-orange-400 bg-orange-500/10' },
  WINTER: { label: 'Winter', icon: '❄️', textClass: 'text-sky-400 bg-sky-500/10' },
  SPRING: { label: 'Spring', icon: '🌸', textClass: 'text-emerald-400 bg-emerald-500/10' },
  AUTUMN: { label: 'Autumn', icon: '🍁', textClass: 'text-amber-500 bg-amber-500/10' },
  MONSOON: { label: 'Monsoon', icon: '🌧️', textClass: 'text-sky-400 bg-sky-500/10' },
};

function getSeasonByMonth(monthIndex: number): 'SUMMER' | 'WINTER' | 'SPRING' | 'AUTUMN' | 'MONSOON' {
  if (monthIndex >= 2 && monthIndex <= 4) return 'SPRING';
  if (monthIndex === 5) return 'SUMMER';
  if (monthIndex >= 6 && monthIndex <= 8) return 'MONSOON';
  if (monthIndex >= 9 && monthIndex <= 10) return 'AUTUMN';
  return 'WINTER';
}

export default function Navbar({
  activeSection,
  onNavigate,
  season,
  setSeason,
  isAutoSeason,
  setIsAutoSeason,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showSeasonDropdown, setShowSeasonDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!showSeasonDropdown) return;
    const clickOutsideListener = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#season-selector-btn') && !target.closest('#season-dropdown')) {
        setShowSeasonDropdown(false);
      }
    };
    window.addEventListener('click', clickOutsideListener);
    return () => window.removeEventListener('click', clickOutsideListener);
  }, [showSeasonDropdown]);

  const navItems = [
    { label: 'HOME', id: SectionId.HOME },
    { label: 'ABOUT', id: SectionId.ABOUT },
    { label: 'SKILLS', id: SectionId.SKILLS },
    { label: 'EXPERIENCE', id: SectionId.EXPERIENCE },
    { label: 'EDUCATION', id: SectionId.EDUCATION },
    { label: 'PROJECTS', id: SectionId.PROJECTS },
    { label: 'ACTIVITIES', id: SectionId.ACTIVITIES },
    { label: 'AWARDS', id: SectionId.AWARDS },
    { label: 'CONTACT', id: SectionId.CONTACT },
  ];

  const handleItemClick = (id: SectionId) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav
      id="portfolio-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-brand-bg/90 backdrop-blur-md border-white/15 py-4 shadow-lg'
          : 'bg-brand-bg/60 backdrop-blur-sm border-white/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo and auto season text indicator */}
        <div className="flex items-center space-x-3">
          <button
            id="nav-logo"
            onClick={() => handleItemClick(SectionId.HOME)}
            className="flex items-center group cursor-pointer text-left focus:outline-none"
          >
            <span className="font-display font-black text-2xl tracking-widest text-white transition-all duration-300">
              CRT
              <span className="text-brand-cyan select-none animate-pulse">.</span>
            </span>
          </button>
        </div>

        {/* Right Side: Nav items & season panel */}
        <div className="flex items-center space-x-4">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id.toLowerCase()}`}
                  onClick={() => handleItemClick(item.id)}
                  className={`relative px-3 py-1.5 rounded-md font-display text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer focus:outline-none ${
                    isActive
                      ? 'text-brand-cyan'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-underline"
                      transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-brand-cyan rounded-full z-20"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Interactive Season Picker Pill */}
          <div className="relative">
            <button
              id="season-selector-btn"
              onClick={() => setShowSeasonDropdown(!showSeasonDropdown)}
              className="flex items-center space-x-2 px-2.5 py-1.5 rounded-full border border-white/10 hover:border-brand-cyan/40 bg-white/5 hover:bg-white/10 transition-all text-xs font-semibold cursor-pointer text-white"
            >
              <span>{SEASON_CONFIG[season].icon}</span>
              <span className="hidden sm:inline-block pr-1 font-mono tracking-wide text-[11px]">
                {SEASON_CONFIG[season].label}
              </span>
              {isAutoSeason && (
                <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse" title="System Auto-Detect Mode" />
              )}
              <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${showSeasonDropdown ? 'rotate-180' : ''}`} />
            </button>

            {showSeasonDropdown && (
              <div
                id="season-dropdown"
                className="absolute right-0 mt-2.5 w-48 rounded-xl bg-brand-card/95 border border-white/10 shadow-2xl backdrop-blur-xl p-1.5 z-50 flex flex-col space-y-0.5 animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <div className="px-2.5 py-1 text-[9px] uppercase font-bold tracking-wider text-slate-500">
                  Select Season background
                </div>
                {Object.entries(SEASON_CONFIG).map(([key, value]) => {
                  const isSelected = season === key;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        setSeason(key as any);
                        setIsAutoSeason(false);
                        setShowSeasonDropdown(false);
                      }}
                      className={`flex items-center justify-between w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/20'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white border border-transparent'
                      }`}
                    >
                      <span className="flex items-center space-x-2">
                        <span>{value.icon}</span>
                        <span>{value.label}</span>
                      </span>
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />}
                    </button>
                  );
                })}

                <div className="h-[1px] bg-white/5 my-1" />

                <button
                  onClick={() => {
                    const autoSeason = getSeasonByMonth(new Date().getMonth());
                    setSeason(autoSeason);
                    setIsAutoSeason(true);
                    setShowSeasonDropdown(false);
                  }}
                  className={`flex items-center justify-between w-full text-left px-2.5 py-1.5 rounded-lg text-[10px] font-mono transition-all cursor-pointer border ${
                    isAutoSeason
                      ? 'text-brand-emerald bg-brand-emerald/10 border-brand-emerald/30'
                      : 'text-slate-400 hover:bg-white/5 border-transparent'
                  }`}
                >
                  <span className="flex items-center space-x-1.5">
                    <Calendar className="w-3 h-3" />
                    <span>Auto-Detect Season</span>
                  </span>
                  <span className={`w-1.5 h-1.5 rounded-full ${isAutoSeason ? 'bg-brand-emerald animate-pulse' : 'bg-slate-600'}`} />
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div id="mobile-nav-menu" className="lg:hidden absolute top-full left-0 w-full bg-brand-card/95 backdrop-blur-xl border-b border-white/5 shadow-2xl overflow-hidden py-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-6 flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-item-${item.id.toLowerCase()}`}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full text-left py-2 px-3 rounded-lg font-display text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    isActive
                      ? 'bg-brand-cyan/10 text-brand-cyan border-l-2 border-brand-cyan pl-2.5'
                      : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            
            <div className="h-[1px] bg-white/5 my-2" />
            
            {/* Mobile season quick toggles */}
            <div className="px-1 py-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block mb-2">
                Season Themes
              </span>
              <div className="grid grid-cols-5 gap-1.5">
                {Object.entries(SEASON_CONFIG).map(([key, value]) => {
                  const isSelected = season === key;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        setSeason(key as any);
                        setIsAutoSeason(false);
                      }}
                      className={`flex flex-col items-center justify-center py-2 rounded-lg text-center cursor-pointer border transition-all ${
                        isSelected
                          ? 'bg-brand-cyan/20 border-brand-cyan text-white'
                          : 'bg-white/5 border-transparent text-slate-400'
                      }`}
                    >
                      <span className="text-base">{value.icon}</span>
                      <span className="text-[9px] mt-1 font-mono font-bold tracking-tight">{value.label}</span>
                    </button>
                  );
                })}
              </div>
              
              <button
                onClick={() => {
                  const autoSeason = getSeasonByMonth(new Date().getMonth());
                  setSeason(autoSeason);
                  setIsAutoSeason(true);
                }}
                className={`w-full mt-3 flex items-center justify-between px-3 py-2 rounded-lg text-[10px] font-mono cursor-pointer border ${
                  isAutoSeason
                    ? 'text-brand-emerald bg-brand-emerald/10 border-brand-emerald/30'
                    : 'text-slate-400 bg-white/5 border-transparent'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Sync Automatic Season calendar</span>
                </div>
                <span className={`w-2 h-2 rounded-full ${isAutoSeason ? 'bg-brand-emerald animate-pulse' : 'bg-slate-600'}`} />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
