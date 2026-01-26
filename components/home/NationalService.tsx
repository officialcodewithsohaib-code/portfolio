"use client";

import React from "react";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/Spotlight";

export const NationalService = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Spotlights - Enhanced visibility */}
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen opacity-30" fill="#0066CC" />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw] opacity-30" fill="#4A90E2" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw] opacity-30" fill="#10B981" />

      {/* Animated Blobs - Enhanced for visibility */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0066CC]/20 dark:bg-[#0066CC]/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4A90E2]/20 dark:bg-[#4A90E2]/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-[#10B981]/20 dark:bg-[#10B981]/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-4000" />

      {/* Grid Pattern - Enhanced */}
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0066CC 1px, transparent 1px),
            linear-gradient(to bottom, #0066CC 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#0066CC]/40 dark:bg-[#0066CC]/60 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};
