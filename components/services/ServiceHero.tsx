"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaCode, FaReact, FaRobot } from "react-icons/fa";

interface ServiceHeroProps {
  activeCategory: "mern" | "ai";
  onCategoryChange: (category: "mern" | "ai") => void;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({ 
  activeCategory, 
  onCategoryChange 
}) => {
  return (
    <section className="relative py-34 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Icon Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-block mb-6"
        >
          <div className="p-4 bg-gradient-to-br from-[#0066CC]/20 to-[#10B981]/20 dark:from-[#0066CC]/30 dark:to-[#10B981]/30 rounded-2xl backdrop-blur-sm border border-[#0066CC]/30 dark:border-[#0066CC]/50">
            <FaCode className="text-4xl text-[#0066CC] dark:text-[#4A90E2]" />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#0066CC] via-[#4A90E2] to-[#10B981] bg-clip-text text-transparent"
        >
          Professional Services
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-[#4B5563] dark:text-[#9CA3AF] max-w-3xl mx-auto mb-12"
        >
          {activeCategory === "mern" 
            ? "Build scalable, high-performance web applications with modern MERN stack technologies. From frontend to backend, I deliver complete solutions."
            : "Develop intelligent AI agents that automate complex workflows, make decisions, and integrate seamlessly with your existing systems."}
        </motion.p>

        {/* Category Toggle Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
            <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onCategoryChange("mern")}
                        className={`relative px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 cursor-pointer ${
                          activeCategory === "mern"
                            ? "bg-gradient-to-r from-[#0066CC] to-[#4A90E2] text-white shadow-xl"
                            : "bg-white dark:bg-[#1F2937] text-[#4B5563] dark:text-[#9CA3AF] border-2 border-[#E4E7EB] dark:border-[#4B5563] hover:border-[#0066CC] dark:hover:border-[#4A90E2]"
                        }`}
                      >
                        <FaReact className="inline-block mr-2 text-xl" />
                        MERN Stack
                        {activeCategory === "mern" && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-gradient-to-r from-[#0066CC] to-[#4A90E2] rounded-xl -z-10"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </motion.button>
          <motion.button
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     onClick={() => onCategoryChange("ai")}
                     className={`relative px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 cursor-pointer ${
                       activeCategory === "ai"
                         ? "bg-gradient-to-r from-[#10B981] to-[#0066CC] text-white shadow-xl"
                         : "bg-white dark:bg-[#1F2937] text-[#4B5563] dark:text-[#9CA3AF] border-2 border-[#E4E7EB] dark:border-[#4B5563] hover:border-[#10B981] dark:hover:border-[#0066CC]"
                     }`}
                   >
                     <FaBrain className="inline-block mr-2 text-xl" />
                     Agentic AI
                     {activeCategory === "ai" && (
                       <motion.div
                         layoutId="activeTab"
                         className="absolute inset-0 bg-gradient-to-r from-[#10B981] to-[#0066CC] rounded-xl -z-10"
                         transition={{ type: "spring", stiffness: 380, damping: 30 }}
                       />
                     )}
                   </motion.button>
        </div>
      </div>
    </section>
  );
};
