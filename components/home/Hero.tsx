"use client";

import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "@/components/ui/MagicButton";
import { HoverBorderGradient } from "@/components/ui/HoverBorderGradient";
import {
  FaRobot,
  FaRocket,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPlay,
} from "react-icons/fa";

interface HeroProps {
  onWatchDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onWatchDemo }) => {
  const socialLinks = [
    {
      icon: <FaGithub className="text-xl" />,
      href: "https://github.com/yourusername",
      label: "GitHub",
      color: "hover:bg-transparent",
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
      color: "hover:bg-transparent",
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      href: "mailto:sohaiburrehman65@gmail.com",
      label: "Email",
      color: "hover:bg-transparent",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1F2937] border border-[#E4E7EB] dark:border-[#4B5563] rounded-full mb-6 shadow-lg"
        >
          <FaRobot className="text-[#0066CC] text-xl" />
          <span className="text-sm font-semibold text-[#4B5563] dark:text-[#9CA3AF]">
            Available for Hire
          </span>
          <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#1F2937] dark:text-white mb-6"
        >
          Full-Stack Developer
          <br />
          <span className="bg-gradient-to-r from-[#0066CC] via-[#4A90E2] to-[#10B981] bg-clip-text text-transparent">
            & AI Engineer
          </span>
        </motion.h1>

        {/* Subtitle */}
        <div className="mb-8">
          <TextGenerateEffect
            words="Building intelligent web applications and agentic AI systems that transform businesses through automation and innovation"
            className="text-lg md:text-xl text-[#4B5563] dark:text-[#9CA3AF] max-w-4xl mx-auto"
            duration={0.8}
          />
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <a href="#contact">
            <MagicButton
              title="Start a Project"
              icon={<FaRocket />}
              position="right"
            />
          </a>

          {/* ✅ FIX: Use as="div" to render div instead of button */}
          <HoverBorderGradient
            as="div"
            onClick={onWatchDemo}
            containerClassName="rounded-xl cursor-pointer"
            className="bg-white dark:bg-[#1F2937] text-[#1F2937] dark:text-white px-8 py-4 font-semibold flex items-center gap-2"
          >
            <FaPlay className="text-sm" />
            Watch Demo
          </HoverBorderGradient>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex gap-4 justify-center"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 flex items-center justify-center bg-white dark:bg-[#1F2937] border border-[#E4E7EB] dark:border-[#4B5563] rounded-full text-[#4B5563] dark:text-[#9CA3AF] hover:border-transparent transition-all duration-300 shadow-lg cursor-pointer group"
              aria-label={social.label}
            >
              <span className="group-hover:scale-110 transition-transform duration-300">
                {social.icon}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-[#4B5563] dark:border-[#9CA3AF] rounded-full flex justify-center pt-2 cursor-pointer"
          >
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-[#0066CC] rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
