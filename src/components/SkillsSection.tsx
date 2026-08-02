/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, BarChart3, Database, Brain, GitBranch, Sparkles } from 'lucide-react';
import { skillCategories } from '../data';
import { SkillCategory, SkillNode } from '../types';

export default function SkillsSection() {
  const [hoveredNode, setHoveredNode] = useState<{ catId: string; node: SkillNode } | null>(null);

  // Map icon strings to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-brand-cyan" />;
      case 'BarChart':
        return <BarChart3 className="w-5 h-5 text-brand-emerald" />;
      case 'Database':
        return <Database className="w-5 h-5 text-brand-purple" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-amber-500" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-rose-500" />;
      default:
        return <Cpu className="w-5 h-5" />;
    }
  };

  // Color mappings
  const getColorStyles = (color: string) => {
    switch (color) {
      case 'cyan':
        return {
          cardBorder: 'hover:border-brand-cyan/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]',
          text: 'text-brand-cyan',
          badgeBg: 'bg-brand-cyan/10 text-brand-cyan',
          nodeBorder: 'border-brand-cyan',
          nodeBg: 'bg-slate-950 border-brand-cyan',
          nodeGlow: 'bg-brand-cyan/20',
          pulse: 'bg-brand-cyan',
          svgLine: 'stroke-brand-cyan/40',
        };
      case 'emerald':
        return {
          cardBorder: 'hover:border-brand-emerald/40 hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]',
          text: 'text-brand-emerald',
          badgeBg: 'bg-brand-emerald/10 text-brand-emerald',
          nodeBorder: 'border-brand-emerald',
          nodeBg: 'bg-slate-950 border-brand-emerald',
          nodeGlow: 'bg-brand-emerald/20',
          pulse: 'bg-brand-emerald',
          svgLine: 'stroke-brand-emerald/40',
        };
      case 'purple':
        return {
          cardBorder: 'hover:border-brand-purple/40 hover:shadow-[0_0_20px_rgba(192,132,252,0.15)]',
          text: 'text-brand-purple',
          badgeBg: 'bg-brand-purple/10 text-brand-purple',
          nodeBorder: 'border-brand-purple',
          nodeBg: 'bg-slate-950 border-brand-purple',
          nodeGlow: 'bg-brand-purple/20',
          pulse: 'bg-brand-purple',
          svgLine: 'stroke-brand-purple/40',
        };
      case 'amber':
        return {
          cardBorder: 'hover:border-amber-500/40 hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]',
          text: 'text-amber-500',
          badgeBg: 'bg-amber-500/10 text-amber-500',
          nodeBorder: 'border-amber-500',
          nodeBg: 'bg-slate-950 border-amber-500',
          nodeGlow: 'bg-amber-500/20',
          pulse: 'bg-amber-500',
          svgLine: 'stroke-amber-500/40',
        };
      case 'rose':
        return {
          cardBorder: 'hover:border-rose-500/40 hover:shadow-[0_0_20px_rgba(244,63,94,0.15)]',
          text: 'text-rose-500',
          badgeBg: 'bg-rose-500/10 text-rose-500',
          nodeBorder: 'border-rose-500',
          nodeBg: 'bg-slate-950 border-rose-500',
          nodeGlow: 'bg-rose-500/20',
          pulse: 'bg-rose-500',
          svgLine: 'stroke-rose-500/40',
        };
      default:
        return {
          cardBorder: 'hover:border-slate-500',
          text: 'text-white',
          badgeBg: 'bg-white/10 text-white',
          nodeBorder: 'border-slate-400',
          nodeBg: 'bg-slate-950 border-slate-400',
          nodeGlow: 'bg-white/10',
          pulse: 'bg-white',
          svgLine: 'stroke-slate-400/40',
        };
    }
  };

  const getCategoryColorHex = (color: string) => {
    switch (color) {
      case 'cyan': return '#22d3ee';
      case 'emerald': return '#34d399';
      case 'purple': return '#c084fc';
      case 'amber': return '#fbbf24';
      default: return '#f43f5e';
    }
  };

  // Helper to connect points in SVG with smooth, elegant bezier curves
  const getSvgPath = (nodes: SkillNode[]) => {
    if (nodes.length < 2) return '';
    let path = `M ${nodes[0].x} ${nodes[0].y}`;
    for (let i = 0; i < nodes.length - 1; i++) {
      const curr = nodes[i];
      const next = nodes[i + 1];
      // Generate control points for a smooth horizontal Bezier curve
      const cp1x = curr.x + (next.x - curr.x) / 2;
      const cp1y = curr.y;
      const cp2x = curr.x + (next.x - curr.x) / 2;
      const cp2y = next.y;
      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${next.x} ${next.y}`;
    }
    return path;
  };

  // Helper to matching subtags to nodes cleanly
  const findMatchingNode = (category: SkillCategory, tag: string): SkillNode | undefined => {
    const cleanTag = tag.toUpperCase().replace(/[^A-Z0-9]/g, '');
    
    // First, try to find an exact match (ignoring case and special characters)
    const exactMatch = category.nodes.find(node => {
      const cleanLabel = node.label.toUpperCase().replace(/[^A-Z0-9]/g, '');
      return cleanLabel === cleanTag;
    });
    if (exactMatch) return exactMatch;

    // Fallback: substring matching
    return category.nodes.find(node => {
      const cleanLabel = node.label.toUpperCase().replace(/[^A-Z0-9]/g, '');
      return cleanLabel.includes(cleanTag) || cleanTag.includes(cleanLabel);
    });
  };

  return (
    <section id="skills" className="pt-6 md:pt-8 pb-20 md:pb-28 relative overflow-hidden bg-brand-bg">
      {/* Background elements */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-brand-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-72 h-72 bg-brand-purple/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div id="skills-header" className="mb-6 text-left max-w-3xl">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase block mb-2">
            TECHNICAL MATRIX
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white tracking-tight">
            Skills <span className="bg-gradient-to-r from-brand-cyan to-blue-400 bg-clip-text text-transparent">Galaxy</span>
          </h2>
          <div className="w-16 h-[3px] bg-brand-cyan mt-4 mb-6" />
          
          <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
            An interactive exploration of my technical skills mapped across a <strong className="text-white font-medium">Matrix Ecosystem</strong>. 
            Hover over nodes inside the cards to view specific proficiency levels and execution intelligence.
          </p>
        </div>

        {/* Categories Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
          {skillCategories.map((category, idx) => {
            const styles = getColorStyles(category.color);
            
            // Default active node for this category is either the hovered node, or null if nothing is hovered
            const activeNodeForCategory = 
              hoveredNode && hoveredNode.catId === category.id 
                ? hoveredNode.node 
                : null;

            const slideDirection = idx % 2 === 0 ? -30 : 30;

            return (
              <motion.div key={category.id} id={`skill-card-${category.id}`} className={`group rounded-2xl bg-brand-card/70 border border-white/5 p-6 shadow-xl transition-all duration-300 ${styles.cardBorder} flex flex-col relative overflow-hidden`}>
                {/* Header info */}
                <div className="flex items-center space-x-4 mb-5">
                  {/* Icon badge */}
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/5 flex flex-shrink-0 items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                    {getIcon(category.icon)}
                  </div>

                  <div className="space-y-1 text-left flex-1 min-w-0">
                    <h3 className="font-display font-bold text-lg md:text-xl text-white tracking-wide truncate">
                      {category.title}
                    </h3>
                    <div className="flex items-center space-x-1.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse"
                        style={{
                          backgroundColor:
                            category.color === 'cyan'
                              ? '#22d3ee'
                              : category.color === 'emerald'
                              ? '#34d399'
                              : category.color === 'purple'
                              ? '#c084fc'
                              : category.color === 'amber'
                              ? '#fbbf24'
                              : '#f43f5e',
                        }}
                      />
                      <span className={`text-[8.5px] leading-relaxed font-display font-bold tracking-[0.12em] block uppercase whitespace-normal break-words ${styles.text}`}>
                        {category.subtitle}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Relative map container */}
                <div className="relative w-full h-56 mb-5 flex items-center justify-center">
                  
                  {/* Grid overlay lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] rounded-xl overflow-hidden" />

                  {/* Connecting lines SVG */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id={`grad-${category.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={getCategoryColorHex(category.color)} stopOpacity="0.1" />
                        <stop offset="30%" stopColor={getCategoryColorHex(category.color)} stopOpacity="0.8" />
                        <stop offset="70%" stopColor={getCategoryColorHex(category.color)} stopOpacity="0.8" />
                        <stop offset="100%" stopColor={getCategoryColorHex(category.color)} stopOpacity="0.1" />
                      </linearGradient>
                    </defs>

                    {/* 1. Underlying low-opacity geometric grid track */}
                    <path
                      d={getSvgPath(category.nodes)}
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.04)"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />

                    {/* 2. Soft-color glow wire that lights up dynamically */}
                    <path
                      d={getSvgPath(category.nodes)}
                      fill="none"
                      stroke={getCategoryColorHex(category.color)}
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      className="transition-all duration-500 ease-out"
                      style={{
                        opacity: activeNodeForCategory ? 0.35 : 0.12,
                        filter: `blur(2.5px) drop-shadow(0 0 4px ${getCategoryColorHex(category.color)})`
                      }}
                    />

                    {/* 3. Refined core solid connecting line with linear gradient */}
                    <path
                      d={getSvgPath(category.nodes)}
                      fill="none"
                      stroke={`url(#grad-${category.id})`}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      className="transition-all duration-300 ease-out"
                      style={{
                        opacity: activeNodeForCategory ? 0.95 : 0.45,
                      }}
                    />

                    {/* 4. Elegant flowing network signal packet (The neon floating orb) */}
                    {category.nodes.length >= 2 && (
                      <circle
                        r="1.6"
                        fill="#ffffff"
                        style={{
                          filter: `drop-shadow(0 0 5px ${getCategoryColorHex(category.color)}) drop-shadow(0 0 2px #ffffff)`,
                          opacity: activeNodeForCategory ? 1 : 0.65,
                        }}
                      >
                        <animateMotion
                          dur="4s"
                          repeatCount="indefinite"
                          path={getSvgPath(category.nodes)}
                          keyTimes="0;1"
                          calcMode="linear"
                        />
                      </circle>
                    )}
                  </svg>

                  {/* Render Nodes */}
                  {category.nodes.map((node) => {
                    const isHovered = activeNodeForCategory && activeNodeForCategory.id === node.id;
                    return (
                      <div
                        key={node.id}
                        id={`skill-node-${category.id}-${node.id}`}
                        onMouseEnter={() => setHoveredNode({ catId: category.id, node })}
                        onMouseLeave={() => setHoveredNode(null)}
                        className="absolute cursor-pointer select-none z-10 hover:z-30"
                        style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
                      >
                        {/* Hexagonal Node handle visual */}
                        <div className="relative flex items-center justify-center">
                          <svg 
                            className={`w-6 h-6 transition-all duration-300 transform ${isHovered ? 'scale-125' : 'group-hover:scale-110'}`} 
                            viewBox="0 0 100 100" 
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ filter: `drop-shadow(0 0 5px ${category.color === 'cyan' ? '#22d3ee55' : category.color === 'emerald' ? '#34d39955' : category.color === 'purple' ? '#c084fc55' : category.color === 'amber' ? '#fbbf2455' : '#f43f5e55'})` }}
                          >
                            <polygon
                              points="50,5 90,28 90,72 50,95 10,72 10,28"
                              className="fill-slate-950 transition-colors duration-300"
                              stroke="currentColor"
                              strokeWidth="8"
                              style={{
                                color: category.color === 'cyan' ? '#22d3ee' : category.color === 'emerald' ? '#34d399' : category.color === 'purple' ? '#c084fc' : category.color === 'amber' ? '#fbbf24' : '#f43f5e'
                              }}
                            />
                            {/* Inner solid shape */}
                            <circle
                              cx="50"
                              cy="50"
                              r="15"
                              fill="currentColor"
                              style={{
                                color: category.color === 'cyan' ? '#22d3ee' : category.color === 'emerald' ? '#34d399' : category.color === 'purple' ? '#c084fc' : category.color === 'amber' ? '#fbbf24' : '#f43f5e'
                              }}
                            />
                          </svg>

                          {/* Pulsing Aura ring */}
                          <div 
                            className="absolute w-8 h-8 rounded-full animate-ping opacity-20" 
                            style={{
                              backgroundColor: category.color === 'cyan' ? '#22d3ee' : category.color === 'emerald' ? '#34d399' : category.color === 'purple' ? '#c084fc' : category.color === 'amber' ? '#fbbf24' : '#f43f5e'
                            }} 
                          />

                          {/* Extreme outer ring on active hover */}
                          {isHovered && (
                            <div className="absolute w-10 h-10 rounded-full border border-dashed border-white/30 animate-spin z-0" style={{ animationDuration: '6s' }} />
                          )}
                        </div>

                        {/* Point Tooltip */}
                        {isHovered && (
                          <div 
                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 z-40 bg-slate-950/95 backdrop-blur-md rounded-lg py-2 pl-3 pr-4 border border-white/10 border-r-[4px] shadow-2xl flex flex-col space-y-2 transition-all duration-300 animate-in fade-in zoom-in-95 pointer-events-none min-w-[170px]"
                            style={{
                              borderRightColor: 
                                category.color === 'cyan' ? '#22d3ee' :
                                category.color === 'emerald' ? '#34d399' :
                                category.color === 'purple' ? '#c084fc' :
                                category.color === 'amber' ? '#fbbf24' : '#f43f5e',
                              boxShadow: `0 4px 20px -2px rgba(0,0,0,0.8), 0 0 12px ${
                                category.color === 'cyan' ? 'rgba(34,211,238,0.2)' :
                                category.color === 'emerald' ? 'rgba(52,211,153,0.2)' :
                                category.color === 'purple' ? 'rgba(192,132,252,0.2)' :
                                category.color === 'amber' ? 'rgba(251,191,36,0.2)' : 'rgba(244,63,94,0.2)'
                              }`
                            }}
                          >
                            <div className="flex items-center justify-between space-x-3 w-full">
                              <span className="text-[11px] font-sans font-black text-white uppercase tracking-wider whitespace-nowrap">
                                {node.label}
                              </span>
                              <span 
                                className="text-[9px] font-mono font-bold whitespace-nowrap"
                                style={{
                                  color: 
                                    category.color === 'cyan' ? '#22d3ee' :
                                    category.color === 'emerald' ? '#34d399' :
                                    category.color === 'purple' ? '#c084fc' :
                                    category.color === 'amber' ? '#fbbf24' : '#f43f5e'
                                }}
                              >
                                Lv. {node.level === 100 ? '5/5' : `${Math.round(node.level / 20)}/5`}
                              </span>
                            </div>

                            {/* Segmented indicators (Exactly 5 distinct rectangles) */}
                            <div className="flex items-center justify-between space-x-[4px] w-full">
                              {Array.from({ length: 5 }).map((_, idx) => {
                                const filledCount = node.level === 100 ? 5 : Math.round(node.level / 20);
                                const isFilled = idx < filledCount;
                                return (
                                  <div 
                                    key={idx}
                                    className="h-1 flex-1 rounded-sm transition-all duration-300"
                                    style={{
                                      backgroundColor: isFilled 
                                        ? (category.color === 'cyan' ? '#22d3ee' :
                                           category.color === 'emerald' ? '#34d399' :
                                           category.color === 'purple' ? '#c084fc' :
                                           category.color === 'amber' ? '#fbbf24' : '#f43f5e')
                                        : 'rgba(255, 255, 255, 0.15)',
                                      boxShadow: isFilled 
                                        ? `0 0 6px ${
                                            category.color === 'cyan' ? 'rgba(34,211,238,0.7)' :
                                            category.color === 'emerald' ? 'rgba(52,211,153,0.7)' :
                                            category.color === 'purple' ? 'rgba(192,132,252,0.7)' :
                                            category.color === 'amber' ? 'rgba(251,191,36,0.7)' : 'rgba(244,63,94,0.7)'
                                          }`
                                        : 'none'
                                    }}
                                  />
                                );
                              })}
                            </div>

                            {/* Decorative pointer arrow */}
                            <div 
                              className="absolute top-full left-1/2 -not-sr-only -translate-x-1/2 -mt-[5px] w-2.5 h-2.5 rotate-45 border-r border-b border-white/10 bg-slate-950/95" 
                              style={{
                                borderRightColor: 'rgba(255, 255, 255, 0.1)',
                                borderBottomColor: 'rgba(255, 255, 255, 0.1)'
                              }}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}



                </div>

                {/* Subtag pills footer inside the card */}
                <div className="mt-auto flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {category.subTags.map((tag) => {
                    const matchedNode = findMatchingNode(category, tag);
                    const isTagActive = activeNodeForCategory && matchedNode && activeNodeForCategory.id === matchedNode.id;

                    return (
                      <div
                        key={tag}
                        onMouseEnter={() => {
                          if (matchedNode) {
                            setHoveredNode({ catId: category.id, node: matchedNode });
                          }
                        }}
                        onMouseLeave={() => setHoveredNode(null)}
                        className={`text-[9px] font-mono font-bold tracking-widest px-2.5 py-1.5 rounded-md border transition-all duration-300 cursor-pointer flex items-center space-x-2 ${
                          isTagActive 
                            ? `bg-slate-900 border-opacity-100 text-white` 
                            : 'bg-slate-950/40 border-white/5 text-slate-400 hover:border-white/10 hover:text-white'
                        }`}
                        style={{
                          borderColor: isTagActive
                            ? (category.color === 'cyan' ? '#22d3ee' :
                               category.color === 'emerald' ? '#34d399' :
                               category.color === 'purple' ? '#c084fc' :
                               category.color === 'amber' ? '#fbbf24' : '#f43f5e')
                            : undefined,
                          boxShadow: isTagActive
                            ? `0 0 10px ${
                                category.color === 'cyan' ? 'rgba(34,211,238,0.3)' :
                                category.color === 'emerald' ? 'rgba(52,211,153,0.3)' :
                                category.color === 'purple' ? 'rgba(192,132,252,0.3)' :
                                category.color === 'amber' ? 'rgba(251,191,36,0.3)' : 'rgba(244,63,94,0.3)'
                              }`
                            : 'none'
                        }}
                      >
                        <span className={isTagActive ? styles.text : ''}>{tag}</span>
                        
                        {/* Two lines beside each name (||) */}
                        <div className="flex items-center space-x-[2px] h-3 ml-2 pl-2 border-l border-white/10">
                          <div 
                            className="w-[2.5px] h-2.5 rounded-[1px] transition-all duration-300"
                            style={{
                              backgroundColor: isTagActive 
                                ? (category.color === 'cyan' ? '#22d3ee' :
                                   category.color === 'emerald' ? '#34d399' :
                                   category.color === 'purple' ? '#c084fc' :
                                   category.color === 'amber' ? '#fbbf24' : '#f43f5e')
                                : 'rgba(255, 255, 255, 0.2)',
                              boxShadow: isTagActive 
                                ? `0 0 6px ${
                                    category.color === 'cyan' ? 'rgba(34,211,238,0.7)' :
                                    category.color === 'emerald' ? 'rgba(52,211,153,0.7)' :
                                    category.color === 'purple' ? 'rgba(192,132,252,0.7)' :
                                    category.color === 'amber' ? 'rgba(251,191,36,0.7)' : 'rgba(244,63,94,0.7)'
                                  }`
                                : 'none'
                            }}
                          />
                          <div 
                            className="w-[2.5px] h-2.5 rounded-[1px] transition-all duration-300"
                            style={{
                              backgroundColor: isTagActive 
                                ? (category.color === 'cyan' ? '#22d3ee' :
                                   category.color === 'emerald' ? '#34d399' :
                                   category.color === 'purple' ? '#c084fc' :
                                   category.color === 'amber' ? '#fbbf24' : '#f43f5e')
                                : 'rgba(255, 255, 255, 0.2)',
                              boxShadow: isTagActive 
                                ? `0 0 6px ${
                                    category.color === 'cyan' ? 'rgba(34,211,238,0.7)' :
                                    category.color === 'emerald' ? 'rgba(52,211,153,0.7)' :
                                    category.color === 'purple' ? 'rgba(192,132,252,0.7)' :
                                    category.color === 'amber' ? 'rgba(251,191,36,0.7)' : 'rgba(244,63,94,0.7)'
                                  }`
                                : 'none'
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
