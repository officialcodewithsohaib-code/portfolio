"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaRocket, FaHeart } from "react-icons/fa";

export const AboutStory = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] dark:text-white mb-4">
            My <span className="text-[#0066CC] dark:text-[#4A90E2]">Journey</span>
          </h2>
          <p className="text-lg text-[#4B5563] dark:text-[#9CA3AF] max-w-2xl mx-auto">
            From curiosity to expertise, here's how I evolved into a full-stack developer and AI engineer
          </p>
        </motion.div>

        {/* Story Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaLightbulb className="text-5xl text-white" />,
              title: "The Beginning",
              description:
                "Started coding journey with curiosity about how websites work. Fell in love with problem-solving through code.",
              gradient: "from-[#F59E0B] to-[#10B981]",
            },
            {
              icon: <FaRocket className="text-5xl text-white" />,
              title: "Growth & Learning",
              description:
                "Mastered MERN stack, explored cloud technologies, and dived deep into AI/ML, constantly pushing boundaries.",
              gradient: "from-[#0066CC] to-[#4A90E2]",
            },
            {
              icon: <FaHeart className="text-5xl text-white" />,
              title: "Today",
              description:
                "Building intelligent solutions that merge full-stack expertise with AI, helping businesses transform digitally.",
              gradient: "from-[#10B981] to-[#0066CC]",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative cursor-pointer"
            >
              {/* Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500`}
              />

              {/* Card */}
              <div className="relative bg-white dark:bg-[#1F2937] rounded-2xl p-8 border border-[#E4E7EB] dark:border-[#4B5563] h-full">
                <div className={`inline-flex p-4 bg-gradient-to-br ${item.gradient} rounded-xl mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1F2937] dark:text-white mb-4 group-hover:text-[#0066CC] dark:group-hover:text-[#4A90E2] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#4B5563] dark:text-[#9CA3AF] leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
