"use client";

import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { FaUser, FaCode, FaBrain } from "react-icons/fa";

export const AboutHero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 pt-32 pb-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Icon Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-[#0066CC] to-[#4A90E2] rounded-full shadow-2xl"
        >
          <FaUser className="text-4xl text-white" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-[#1F2937] dark:text-white mb-6"
        >
          About <span className="bg-gradient-to-r from-[#0066CC] to-[#4A90E2] bg-clip-text text-transparent">Me</span>
        </motion.h1>

        {/* Subtitle */}
        <div className="mb-8">
          <TextGenerateEffect
            words="Passionate developer crafting innovative solutions at the intersection of full-stack development and artificial intelligence"
            className="text-xl md:text-2xl text-[#4B5563] dark:text-[#9CA3AF] max-w-4xl mx-auto"
            duration={0.8}
          />
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          {[
            { icon: <FaCode />, text: "1+ Years Experience" },
            { icon: <FaBrain />, text: "Agentic AI (Learning)" },
            { icon: <FaUser />, text: "5+ Projects" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-[#1F2937] border border-[#E4E7EB] dark:border-[#4B5563] rounded-xl shadow-lg cursor-pointer"
            >
              <span className="text-2xl text-[#0066CC]">{item.icon}</span>
              <span className="font-semibold text-[#1F2937] dark:text-white">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
