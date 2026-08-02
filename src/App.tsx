/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { SectionId } from './types';

// Importing Custom Sections
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import ActivitiesSection from './components/ActivitiesSection';
import AwardsSection from './components/AwardsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SeasonalOverlay from './components/SeasonalOverlay';

function getSeasonByMonth(monthIndex: number): 'SUMMER' | 'WINTER' | 'SPRING' | 'AUTUMN' | 'MONSOON' {
  if (monthIndex >= 2 && monthIndex <= 4) return 'SPRING';
  if (monthIndex === 5) return 'SUMMER';
  if (monthIndex >= 6 && monthIndex <= 8) return 'MONSOON';
  if (monthIndex >= 9 && monthIndex <= 10) return 'AUTUMN';
  return 'WINTER';
}

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.HOME);
  const [season, setSeason] = useState<'SUMMER' | 'WINTER' | 'SPRING' | 'AUTUMN' | 'MONSOON'>(() => {
    const currentMonth = new Date().getMonth();
    return getSeasonByMonth(currentMonth);
  });
  const [isAutoSeason, setIsAutoSeason] = useState(true);

  // Synchronize season CSS class to document.body so the main background variable transitions cleanly
  useEffect(() => {
    const seasons = ['season-summer', 'season-winter', 'season-spring', 'season-autumn', 'season-monsoon'];
    seasons.forEach((cls) => document.body.classList.remove(cls));
    document.body.classList.add(`season-${season.toLowerCase()}`);
  }, [season]);

  // Periodically check the calendar date to automatically update the season in real-time
  useEffect(() => {
    if (!isAutoSeason) return;

    const syncSeason = () => {
      const currentMonth = new Date().getMonth();
      const currentCalendarSeason = getSeasonByMonth(currentMonth);
      setSeason(currentCalendarSeason);
    };

    syncSeason(); // Run immediately

    const interval = setInterval(syncSeason, 1000); // Check every second for system clock changes
    return () => clearInterval(interval);
  }, [isAutoSeason]);

  // Automated Intersection Observer for Active Section highlighting
  useEffect(() => {
    const sections = Object.values(SectionId);
    const activeSectionsMap = new Map<string, boolean>();

    // Check if a section is in the top-middle focus band of the viewport (20% to 40% from top)
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -55% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        activeSectionsMap.set(entry.target.id, entry.isIntersecting);
      });

      // Check boundary conditions first
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollY < 50) {
        setActiveSection(SectionId.HOME);
        return;
      }

      if (scrollY + clientHeight >= scrollHeight - 50) {
        setActiveSection(SectionId.CONTACT);
        return;
      }

      // Find the first intersecting section in document order
      for (const section of sections) {
        if (activeSectionsMap.get(section.toLowerCase())) {
          setActiveSection(section);
          break;
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const el = document.getElementById(section.toLowerCase());
      if (el) {
        observer.observe(el);
      }
    });

    // Highly performant passive listener for scroll boundaries (top/bottom)
    const handleScrollBoundary = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollY < 50) {
        setActiveSection(SectionId.HOME);
      } else if (scrollY + clientHeight >= scrollHeight - 50) {
        setActiveSection(SectionId.CONTACT);
      }
    };

    window.addEventListener('scroll', handleScrollBoundary, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollBoundary);
    };
  }, []);

  // Navigation Click Handler
  const handleNavigate = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      // Find offset of element, scroll with offset to avoid header clipping
      const yOffset = -64; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div
      id="portfolio-app-root"
      className={`min-h-screen bg-brand-bg flex flex-col font-sans select-none antialiased season-${season.toLowerCase()}`}
    >


      {/* Floating Global Navbar with interactive season controls */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        season={season}
        setSeason={setSeason}
        isAutoSeason={isAutoSeason}
        setIsAutoSeason={setIsAutoSeason}
      />

      {/* Seasonal Ambient Overlay Layer (Snowfall, flower petals, solar glares, autumn leaves) */}
      <SeasonalOverlay season={season} />

      {/* Main Single-view Scroll Layout Container */}
      <main className="flex-grow">
        
        {/* Home Section */}
        <HomeSection onNavigate={handleNavigate} />

        {/* Floating gradient separator */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent max-w-7xl mx-auto" />

        {/* About Section */}
        <AboutSection />

        {/* Floating gradient separator */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent max-w-7xl mx-auto" />

        {/* Skills Section */}
        <SkillsSection />

        {/* Floating gradient separator */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent max-w-7xl mx-auto" />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Floating gradient separator */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent max-w-7xl mx-auto" />

        {/* Education Section */}
        <EducationSection />

        {/* Floating gradient separator */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent max-w-7xl mx-auto" />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Floating gradient separator */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent max-w-7xl mx-auto" />

        {/* Activities Section */}
        <ActivitiesSection />

        {/* Floating gradient separator */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent max-w-7xl mx-auto" />

        {/* Awards Section */}
        <AwardsSection />

        {/* Floating gradient separator */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent max-w-7xl mx-auto" />

        {/* Contact Section */}
        <ContactSection />

      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
