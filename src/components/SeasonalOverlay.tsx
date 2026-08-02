/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';

interface Particle {
  id: number;
  char: string;
  left: string;
  size: string;
  duration: string;
  delay: string;
  swayDistance: string;
  rotation: string;
  opacity: string;
}

interface SeasonalOverlayProps {
  season: 'SUMMER' | 'WINTER' | 'SPRING' | 'AUTUMN' | 'MONSOON';
}

const SEASON_PARTICLES = {
  SPRING: ['🌸', '🍃', '💮', '🌱', '❀'],
  SUMMER: ['✨', '☀️', '🔸', '🟡', '🔆'],
  AUTUMN: ['🍁', '🍂', '🍁', '🍂', '🤎'],
  WINTER: ['❄️', '❄️', '❅', '❆', '✦'],
  MONSOON: ['💧', '🌧️', '⚡', '☔', '✨'],
};

export default function SeasonalOverlay({ season }: SeasonalOverlayProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate a list of particles with unique characteristics
    const pool = SEASON_PARTICLES[season] || SEASON_PARTICLES.SUMMER;
    const count = 22; // subtle, not overwhelming
    const newParticles: Particle[] = Array.from({ length: count }).map((_, i) => {
      const char = pool[Math.floor(Math.random() * pool.length)];
      const left = `${Math.random() * 100}%`;
      const size = `${0.6 + Math.random() * 1.0}rem`; // between 0.6rem and 1.6rem
      const duration = `${12 + Math.random() * 18}s`; // between 12s and 30s
      const delay = `${Math.random() * -20}s`; // negative delay so they start pre-cached/halfway down!
      const swayDistance = `${-100 + Math.random() * 200}px`;
      const rotation = `${180 + Math.random() * 360}deg`;
      const opacity = `${0.15 + Math.random() * 0.3}`; // subtle transparency

      return {
        id: i,
        char,
        left,
        size,
        duration,
        delay,
        swayDistance,
        rotation,
        opacity,
      };
    });

    setParticles(newParticles);
  }, [season]);

  return (
    <div
      id="seasonal-ambient-layer"
      className="fixed inset-0 pointer-events-none select-none overflow-hidden z-[4]"
    >
      {particles.map((p) => (
        <span
          key={`${season}-${p.id}`}
          className="absolute top-[-5vh] animate-fall-sway leading-none"
          style={{
            left: p.left,
            fontSize: p.size,
            '--fall-duration': p.duration,
            '--sway-distance': p.swayDistance,
            '--sway-rotation': p.rotation,
            '--float-opacity': p.opacity,
            animationDelay: p.delay,
          } as React.CSSProperties}
        >
          {p.char}
        </span>
      ))}
    </div>
  );
}
