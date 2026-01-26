"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  github?: string;
  gradient: string;
  icon: React.ReactNode;
}

export const ProjectCard = ({
  title,
  description,
  tags,
  image,
  link,
  github,
  gradient,
  icon,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative h-full cursor-pointer"
    >
      {/* Gradient Glow Effect */}
      <div
        className={cn(
          "absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500",
          `bg-gradient-to-r ${gradient}`
        )}
      />

      {/* Card Container */}
      <div className="relative h-full bg-white dark:bg-[#1F2937] rounded-2xl border border-[#E4E7EB] dark:border-[#4B5563] overflow-hidden transition-all duration-500 group-hover:border-[#0066CC] dark:group-hover:border-[#4A90E2] group-hover:shadow-2xl">
        {/* Image/Icon Section */}
        <div className={cn("relative h-48 overflow-hidden", `bg-gradient-to-br ${gradient}`)}>
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          </div>

          {/* Icon with Proper Hover Effect */}
          <motion.div
            animate={{
              scale: isHovered ? 1.15 : 1,
              rotate: isHovered ? 8 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative z-10 h-full flex items-center justify-center text-white drop-shadow-2xl"
          >
            <div className="text-7xl filter drop-shadow-2xl">{icon}</div>
          </motion.div>

          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent backdrop-blur-[2px] flex items-center justify-center z-20"
          >
            {/* Button Container - SMOOTH TRANSITION ADDED */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 10 }}
              animate={{
                scale: isHovered ? 1 : 0.8,
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 10,
              }}
              transition={{ 
                delay: 0.1, 
                duration: 0.3,
                ease: "easeInOut" // ⬅️ SMOOTH EASING ADDED
              }}
              className="flex gap-4"
            >
              {link && (
                <Link href={link} target="_blank" rel="noopener noreferrer">
                  {/* View Project Button - SMOOTH HOVER ADDED */}
                  <motion.button
                    whileHover={{ 
                      scale: 1.08, 
                      y: -2,
                      transition: { duration: 0.2, ease: "easeOut" } // ⬅️ SMOOTH HOVER
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }} // ⬅️ BASE TRANSITION
                    className="px-6 py-3 bg-white text-[#0066CC] rounded-xl font-semibold shadow-2xl hover:shadow-[#0066CC]/50 transition-all duration-300 cursor-pointer flex items-center gap-2 border-2 border-white/20"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    View Project
                  </motion.button>
                </Link>
              )}
              
              {github && (
                <Link href={github} target="_blank" rel="noopener noreferrer">
                  {/* GitHub Button - SMOOTH HOVER ADDED */}
                  <motion.button
                    whileHover={{ 
                      scale: 1.08, 
                      y: -2,
                      transition: { duration: 0.2, ease: "easeOut" } // ⬅️ SMOOTH HOVER
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }} // ⬅️ BASE TRANSITION
                    className="px-6 py-3 bg-[#1F2937] text-white rounded-xl font-semibold shadow-2xl hover:shadow-[#1F2937]/50 transition-all duration-300 cursor-pointer flex items-center gap-2 border-2 border-white/20"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    GitHub
                  </motion.button>
                </Link>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-bold text-[#1F2937] dark:text-white mb-3 group-hover:text-[#0066CC] dark:group-hover:text-[#4A90E2] transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-[#4B5563] dark:text-[#9CA3AF] text-sm leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 bg-[#F5F7FA] dark:bg-[#374151] text-[#0066CC] dark:text-[#4A90E2] text-xs font-semibold rounded-full hover:bg-[#0066CC]/10 dark:hover:bg-[#4A90E2]/10 transition-colors duration-200 cursor-default border border-[#E4E7EB] dark:border-[#4B5563]"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Shimmer Effect */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? "100%" : "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent pointer-events-none"
        />
      </div>
    </motion.div>
  );
};
