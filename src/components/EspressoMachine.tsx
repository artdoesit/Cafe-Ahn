import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function EspressoMachine() {
  const [isBrewing, setIsBrewing] = useState(false);

  return (
    <motion.div
      className="relative w-72 h-80 cursor-pointer group [perspective:1000px]"
      onHoverStart={() => setIsBrewing(true)}
      onHoverEnd={() => setIsBrewing(false)}
      animate={{ 
        y: [0, -10, 0],
        scale: isBrewing ? 1.05 : 1
      }}
      transition={{ 
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        scale: { duration: 0.4, ease: "easeOut" }
      }}
    >
      {/* Ambient Glow */}
      <div className={`absolute inset-0 blur-[50px] rounded-full transition-all duration-500 ${isBrewing ? 'bg-orange-500/40 scale-110' : 'bg-orange-500/10'}`}></div>

      {/* Hover Hint */}
      <motion.div 
        className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-[#3a3025] shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50"
        animate={{ y: isBrewing ? -5 : 0 }}
      >
        Brewing...
      </motion.div>

      {/* 3D Container */}
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d]"
        animate={{ 
          rotateY: isBrewing ? 12 : [-10, 10, -10], 
          rotateX: isBrewing ? 5 : [2, 8, 2] 
        }}
        transition={{ 
          rotateY: { duration: isBrewing ? 0.5 : 8, repeat: isBrewing ? 0 : Infinity, ease: "easeInOut" },
          rotateX: { duration: isBrewing ? 0.5 : 6, repeat: isBrewing ? 0 : Infinity, ease: "easeInOut" }
        }}
      >
        {/* Back Water Tank (Glass) */}
        <div className="absolute right-8 top-4 w-20 h-56 glass-panel-light rounded-2xl border border-white/60 shadow-inner overflow-hidden [transform:translateZ(-30px)]">
          {/* Water */}
          <motion.div
            className="absolute bottom-0 w-full bg-cyan-200/40 backdrop-blur-sm"
            animate={{ height: isBrewing ? ['75%', '65%'] : '75%' }}
            transition={{ duration: 10, ease: "linear" }}
          ></motion.div>
          {/* Bubbles */}
          {isBrewing && (
            <>
              <motion.div className="absolute bottom-4 left-4 w-2 h-2 bg-white/60 rounded-full" animate={{ y: [0, -150], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
              <motion.div className="absolute bottom-8 left-10 w-1.5 h-1.5 bg-white/60 rounded-full" animate={{ y: [0, -120], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} />
            </>
          )}
        </div>

        {/* Main Body (Heavy Glass / Chrome) */}
        <div className="absolute left-12 top-12 w-48 h-52 glass-panel-heavy rounded-[2rem] border border-white/80 shadow-2xl flex flex-col items-center p-5 [transform:translateZ(20px)] bg-gradient-to-br from-white/40 to-white/10">
          
          {/* Top Steam Animation */}
          {isBrewing && (
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-24 flex justify-center gap-4 z-0 pointer-events-none">
              <motion.div
                className="w-4 h-full bg-white/40 blur-md rounded-full"
                initial={{ y: 10, opacity: 0, scale: 0.8 }}
                animate={{ y: -40, opacity: [0, 0.6, 0], scale: 1.5, x: [0, -10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.div
                className="w-6 h-full bg-white/30 blur-lg rounded-full"
                initial={{ y: 20, opacity: 0, scale: 0.8 }}
                animate={{ y: -50, opacity: [0, 0.5, 0], scale: 1.8, x: [0, 15, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
              />
              <motion.div
                className="w-3 h-full bg-white/40 blur-md rounded-full"
                initial={{ y: 15, opacity: 0, scale: 0.8 }}
                animate={{ y: -35, opacity: [0, 0.7, 0], scale: 1.2, x: [0, -5, 5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1.2 }}
              />
            </div>
          )}

          {/* Top warmer plate */}
          <div className="w-36 h-3 bg-gradient-to-r from-gray-200 to-white rounded-full mb-5 shadow-sm border border-white/50"></div>

          {/* Control Panel */}
          <div className="relative w-full h-14 bg-black/5 rounded-2xl border border-white/50 flex items-center justify-between px-5 shadow-inner mb-5 backdrop-blur-md">
            {/* Status Indicator Light */}
            <div className="absolute -top-3 right-6 flex items-center gap-1.5 bg-white/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/50 shadow-sm z-10">
              <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isBrewing ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-red-400'}`}></div>
              <span className="text-[7px] font-bold uppercase tracking-wider text-gray-600">
                {isBrewing ? 'Brewing' : 'Ready'}
              </span>
            </div>

            {/* Pressure Gauge */}
            <div className="w-10 h-10 rounded-full bg-white/90 border-4 border-gray-200 flex items-center justify-center relative shadow-inner">
              <div className="w-1 h-1 bg-gray-800 rounded-full z-10"></div>
              <motion.div
                className="w-0.5 h-3.5 bg-orange-500 origin-bottom absolute bottom-1/2 rounded-full"
                animate={{ rotate: isBrewing ? [45, 130, 120, 140, 130] : 45 }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            </div>
            {/* Buttons */}
            <div className="flex gap-3">
              <div className={`w-4 h-4 rounded-full shadow-inner transition-all duration-300 border border-white/50 ${isBrewing ? 'bg-orange-500 shadow-[0_0_15px_#f97316]' : 'bg-gray-200'}`}></div>
              <div className="w-4 h-4 rounded-full bg-gray-200 shadow-inner border border-white/50"></div>
            </div>
          </div>

          {/* Group Head */}
          <div className="w-24 h-16 bg-gradient-to-b from-gray-100 to-gray-300 rounded-b-3xl border border-white shadow-[0_10px_20px_rgba(0,0,0,0.1)] relative z-10 flex justify-center">
            {/* Portafilter handle */}
            <div className="absolute -right-10 top-3 w-16 h-4 bg-gray-800 rounded-full rotate-[20deg] shadow-lg border border-gray-700">
              <div className="absolute right-1 top-1 w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
            {/* Spout */}
            <div className="absolute -bottom-2 w-8 h-4 bg-gray-400 rounded-b-lg border border-gray-300 flex justify-center">
              <div className="w-2 h-2 bg-gray-800 rounded-full mt-2"></div>
            </div>

            {/* Coffee Stream */}
            {isBrewing && (
              <motion.div
                className="absolute top-full mt-2 w-1.5 bg-gradient-to-b from-[#4a3f35] to-[#2a1f15] rounded-full blur-[0.5px] z-20"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 45, opacity: 1 }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            )}
          </div>
        </div>

        {/* Steam Wand */}
        <div className="absolute left-8 top-32 w-3 h-24 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full border border-white/50 shadow-md [transform:translateZ(25px)] rotate-12 origin-top">
           <div className="absolute bottom-0 w-4 h-4 -ml-0.5 bg-gray-400 rounded-full"></div>
        </div>

        {/* Drip Tray */}
        <div className="absolute left-6 bottom-6 w-60 h-10 glass-panel-heavy rounded-2xl border border-white/80 shadow-2xl [transform:translateZ(30px)] flex flex-col items-center justify-start pt-1.5 bg-gradient-to-b from-white/40 to-white/10">
          <div className="w-52 h-4 bg-gray-800/10 rounded-lg flex gap-1.5 px-2 items-center">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="flex-1 h-1.5 bg-gray-800/20 rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Cup */}
        <motion.div
          className="absolute left-[110px] bottom-16 w-14 h-12 bg-gradient-to-br from-white to-gray-100 rounded-b-2xl border border-white shadow-xl [transform:translateZ(35px)] flex justify-center z-10"
          animate={{ x: isBrewing ? [0, 1, -1, 0] : 0 }}
          transition={{ duration: 0.1, repeat: isBrewing ? Infinity : 0 }}
        >
          {/* Cup Handle */}
          <div className="absolute -right-4 top-2 w-6 h-7 border-4 border-white rounded-full shadow-sm"></div>

          {/* Steam */}
          {isBrewing && (
            <motion.svg className="absolute bottom-full w-20 h-24 -ml-3 overflow-visible z-30" viewBox="0 0 50 100">
              <motion.path
                d="M 20 100 Q 10 70 30 40 T 20 0"
                fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="4" strokeLinecap="round" filter="blur(3px)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 1], opacity: [0, 0.8, 0], y: [0, -20] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <motion.path
                d="M 30 100 Q 40 70 20 40 T 30 0"
                fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="5" strokeLinecap="round" filter="blur(4px)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 1], opacity: [0, 0.5, 0], y: [0, -30] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
              />
            </motion.svg>
          )}
        </motion.div>

      </motion.div>
    </motion.div>
  );
}
