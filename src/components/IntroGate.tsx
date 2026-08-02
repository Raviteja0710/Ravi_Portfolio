import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Power } from 'lucide-react';

interface IntroGateProps {
  onEnter: () => void;
}

export default function IntroGate({ onEnter }: IntroGateProps) {
  const [status, setStatus] = useState<'closed' | 'opening' | 'done'>('closed');

  // Prevent scroll while intro is active
  useEffect(() => {
    if (status !== 'done') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [status]);

  const handleOpen = () => {
    if (status !== 'closed') return;
    setStatus('opening');

    // After exactly 4.0 seconds, trigger the onEnter callback
    setTimeout(() => {
      setStatus('done');
      onEnter();
    }, 4000);
  };

  if (status === 'done') return null;

  return (
    <div 
      id="intro-gate-overlay"
      className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center select-none"
    >
      <AnimatePresence>
        {status !== 'done' && (
          <>
            {/* LEFT DOOR PANEL */}
            <motion.div
              id="intro-door-left"
              initial={{ x: 0 }}
              animate={{ x: status === 'opening' ? '-100%' : 0 }}
              transition={{
                duration: 2.0,
                ease: [0.77, 0, 0.175, 1], // cinematic cubic-bezier curve
                delay: 2.0
              }}
              className="absolute left-0 top-0 bottom-0 w-1/2 bg-slate-950 border-r border-[#22d3ee]/15 shadow-[15px_0_35px_rgba(0,0,0,0.9)] flex items-center justify-end overflow-hidden"
            >
              {/* Left Door Abstract Tech Details */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.015)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />
              <div className="absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-[#22d3ee]/25 to-transparent" />
              <div className="mr-8 opacity-10 text-right pr-4 border-r border-sky-500/20 hidden md:block">
                <span className="font-mono text-xs text-sky-400 block tracking-widest">SYSTEM INITIALIZATION</span>
                <span className="font-mono text-[9px] text-slate-500 block">SECURE PORTAL ENTRY // PORT 3000</span>
              </div>
            </motion.div>

            {/* RIGHT DOOR PANEL */}
            <motion.div
              id="intro-door-right"
              initial={{ x: 0 }}
              animate={{ x: status === 'opening' ? '100%' : 0 }}
              transition={{
                duration: 2.0,
                ease: [0.77, 0, 0.175, 1],
                delay: 2.0
              }}
              className="absolute right-0 top-0 bottom-0 w-1/2 bg-slate-950 border-l border-[#22d3ee]/15 shadow-[-15px_0_35px_rgba(0,0,0,0.9)] flex items-center justify-start overflow-hidden"
            >
              {/* Right Door Abstract Tech Details */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.015)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />
              <div className="absolute left-0 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-[#22d3ee]/25 to-transparent" />
              <div className="ml-8 opacity-10 text-left pl-4 border-l border-sky-500/20 hidden md:block">
                <span className="font-mono text-xs text-sky-400 block tracking-widest">PORTFOLIO ENGINE</span>
                <span className="font-mono text-[9px] text-slate-500 block">STATUS // READY TO ENGAGE</span>
              </div>
            </motion.div>

            {/* CENTRAL INTERACTIVE INTERACTION LAYER */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
              <motion.div
                id="intro-center-orb-container"
                animate={status === 'opening' ? {
                  opacity: [1, 1, 0],
                  scale: [1, 1.05, 0.8]
                } : {
                  opacity: 1,
                  scale: 1
                }}
                transition={{
                  duration: 3.2,
                  times: [0, 0.625, 1], // Stays fully visible for 2.0s, then fades out as doors open
                  ease: "easeInOut"
                }}
                className="flex flex-col items-center pointer-events-auto"
              >
                {/* Concentric Glow Rings */}
                <div className="relative flex items-center justify-center">
                  
                  {/* Ambient Pulsing Outer Ring */}
                  <motion.div
                    className="absolute rounded-full border border-sky-500/10 pointer-events-none"
                    initial={{ width: 140, height: 140, opacity: 0.3 }}
                    animate={status === 'opening' ? {
                      width: [140, 280],
                      height: [140, 280],
                      opacity: [0.3, 0],
                      borderColor: '#22d3ee'
                    } : {
                      width: [140, 180, 140],
                      height: [140, 180, 140],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                      duration: status === 'opening' ? 0.6 : 3,
                      repeat: status === 'opening' ? 0 : Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Mid Ring */}
                  <motion.div
                    className="absolute rounded-full border border-sky-400/20 pointer-events-none"
                    initial={{ width: 100, height: 100, opacity: 0.5 }}
                    animate={status === 'opening' ? {
                      width: [100, 220],
                      height: [100, 220],
                      opacity: [0.5, 0],
                      borderColor: '#22d3ee'
                    } : {
                      width: [100, 120, 100],
                      height: [100, 120, 100],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                      duration: status === 'opening' ? 0.5 : 2,
                      repeat: status === 'opening' ? 0 : Infinity,
                      ease: "easeInOut",
                      delay: 0.1
                    }}
                  />

                  {/* Active Interactive Glowing Button */}
                  <motion.button
                    id="intro-gate-action-btn"
                    onClick={handleOpen}
                    disabled={status === 'opening'}
                    className={`relative w-20 h-20 rounded-full flex items-center justify-center bg-slate-950 border-2 transition-colors duration-500 outline-none cursor-pointer z-20 ${
                      status === 'opening'
                        ? 'border-[#22d3ee] bg-[#22d3ee]/10 text-[#22d3ee]'
                        : 'border-sky-500/40 text-sky-400 hover:border-[#22d3ee] hover:text-[#22d3ee]'
                    }`}
                    whileHover={{
                      scale: 1.08,
                      boxShadow: '0 0 25px rgba(34, 211, 238, 0.4)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    animate={status === 'opening' ? {
                      boxShadow: [
                        '0 0 15px rgba(34, 211, 238, 0.3)',
                        '0 0 45px rgba(34, 211, 238, 0.8)',
                        '0 0 5px rgba(34, 211, 238, 0)'
                      ]
                    } : {
                      boxShadow: [
                        '0 0 12px rgba(14, 165, 233, 0.15)',
                        '0 0 22px rgba(14, 165, 233, 0.35)',
                        '0 0 12px rgba(14, 165, 233, 0.15)'
                      ]
                    }}
                    transition={{
                      boxShadow: {
                        repeat: status === 'opening' ? 0 : Infinity,
                        duration: 2.2,
                        ease: "easeInOut"
                      }
                    }}
                    aria-label="Enter website"
                  >
                    <motion.div
                      animate={status === 'opening' ? {
                        rotate: 360,
                        scale: [1, 1.2, 0.9]
                      } : {
                        rotate: 0
                      }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      <Power className="w-8 h-8 stroke-[1.5]" />
                    </motion.div>
                  </motion.button>
                </div>

                {/* Status Message Text */}
                <div className="mt-8 text-center min-h-[40px]">
                  <AnimatePresence mode="wait">
                    {status === 'opening' ? (
                      <motion.div
                        key="opening-text"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="flex flex-col items-center gap-1"
                      >
                        <span className="font-mono text-sm tracking-[0.2em] uppercase text-[#22d3ee] font-bold animate-pulse">
                          opening...
                        </span>
                        <span className="font-mono text-[9px] tracking-wider text-slate-500 uppercase">
                          Decrypting & parting portals
                        </span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="closed-text"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="flex flex-col items-center gap-1"
                      >
                        <span className="font-mono text-xs tracking-[0.25em] uppercase text-sky-400 font-medium">
                          Click to initiate
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
