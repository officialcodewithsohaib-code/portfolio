"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaHandshake, FaChartLine, FaShieldAlt } from "react-icons/fa";

export const AboutValues = () => {
  const values = [
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Constantly exploring new technologies and approaches to solve problems creatively",
    },
    {
      icon: <FaHandshake />,
      title: "Collaboration",
      description: "Believe in teamwork and open communication to achieve the best results",
    },
    {
      icon: <FaChartLine />,
      title: "Growth Mindset",
      description: "Committed to continuous learning and adapting to the evolving tech landscape",
    },
    {
      icon: <FaShieldAlt />,
      title: "Quality First",
      description: "Never compromise on code quality, security, and best practices",
    },
  ];

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
            Core <span className="text-[#0066CC] dark:text-[#4A90E2]">Values</span>
          </h2>
          <p className="text-lg text-[#4B5563] dark:text-[#9CA3AF]">
            Principles that guide my work and collaborations
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative cursor-pointer"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0066CC] to-[#4A90E2] rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />

              {/* Card */}
              <div className="relative bg-white dark:bg-[#1F2937] rounded-2xl p-8 border border-[#E4E7EB] dark:border-[#4B5563]">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-[#0066CC] to-[#4A90E2] rounded-xl text-white text-3xl shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F2937] dark:text-white mb-2 group-hover:text-[#0066CC] dark:group-hover:text-[#4A90E2] transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-[#4B5563] dark:text-[#9CA3AF] leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
