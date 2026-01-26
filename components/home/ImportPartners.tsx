"use client";

import React from "react";
import { motion } from "framer-motion";
import { SiNextdotjs, SiReact, SiTypescript, SiPython, SiOpenai, SiMongodb, SiDocker } from "react-icons/si";
import { FaBrain } from "react-icons/fa";

export const ImportPartners = () => {
  const techStack = [
    { icon: <SiReact />, name: "React", color: "text-[#0066CC]" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "text-[#1F2937] dark:text-[#4A90E2]" },
    { icon: <SiTypescript />, name: "TypeScript", color: "text-[#0066CC]" },
    { icon: <SiPython />, name: "Python", color: "text-[#F59E0B]" },
    { icon: <SiOpenai />, name: "OpenAI", color: "text-[#10B981]" },
    { icon: <SiMongodb />, name: "MongoDB", color: "text-[#10B981]" },
    { icon: <SiDocker />, name: "Docker", color: "text-[#0066CC]" },
    { icon: <FaBrain />, name: "LangChain", color: "text-[#4A90E2]" },
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-[#1F2937]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] dark:text-white mb-4">
            Powered By Modern <span className="text-[#0066CC] dark:text-[#4A90E2]">Technologies</span>
          </h2>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center gap-2 px-6 py-3 bg-[#F8FAFB] dark:bg-gray-950 border border-[#E4E7EB] dark:border-[#4B5563] rounded-full shadow-sm hover:shadow-lg hover:border-[#0066CC] dark:hover:border-[#4A90E2] transition-all duration-300 cursor-pointer"
            >
              <span className={`${tech.color} text-2xl`}>{tech.icon}</span>
              <span className="text-sm font-medium text-[#4B5563] dark:text-[#9CA3AF]">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
