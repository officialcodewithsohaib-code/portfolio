"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaCode, FaRobot, FaBrain, FaDatabase, FaArrowRight } from "react-icons/fa";

export const ServiceLocations = () => {
  const expertise = [
    {
      title: "MERN Stack Development",
      description:
        "Full-stack web applications with React, Node.js, Express, and MongoDB. Scalable, secure, and performant solutions.",
      icon: <FaCode className="text-4xl text-white" />,
      gradient: "from-[#0066CC] to-[#4A90E2]",
    },
    {
      title: "Agentic AI Solutions",
      description:
        "Intelligent automation systems using OpenAI, LangChain, and multi-agent workflows for business optimization.",
      icon: <FaRobot className="text-4xl text-white" />,
      gradient: "from-[#10B981] to-[#0066CC]",
    },
    {
      title: "AI-Powered Automation",
      description:
        "LinkedIn outreach agents, document processing, chatbots, and workflow automation with cutting-edge AI technology.",
      icon: <FaBrain className="text-4xl text-white" />,
      gradient: "from-[#F59E0B] to-[#10B981]",
    },
    {
      title: "Cloud & DevOps",
      description:
        "Docker, Nginx, VPS deployment, CI/CD pipelines, and cloud infrastructure management for scalable applications.",
      icon: <FaDatabase className="text-4xl text-white" />,
      gradient: "from-[#4A90E2] to-[#F59E0B]",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-[#0066CC] to-[#4A90E2] rounded-2xl mb-4"
          >
            <FaLightbulb className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] dark:text-white mb-4">
            What I <span className="text-[#0066CC] dark:text-[#4A90E2]">Specialize</span> In
          </h2>

          <p className="text-lg text-[#4B5563] dark:text-[#9CA3AF] max-w-2xl mx-auto">
            Delivering cutting-edge solutions that combine modern web technologies with artificial intelligence
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="group relative cursor-pointer"
            >
              {/* Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500`}
              />

              {/* Card */}
              <div className="relative bg-white dark:bg-[#1F2937] rounded-2xl p-8 border border-[#E4E7EB] dark:border-[#4B5563] h-full">
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-gradient-to-br ${item.gradient} rounded-xl shrink-0`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#1F2937] dark:text-white mb-3 group-hover:text-[#0066CC] dark:group-hover:text-[#4A90E2] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#4B5563] dark:text-[#9CA3AF] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Arrow Icon */}
                <motion.div
                  className="absolute bottom-6 right-6 text-[#0066CC] dark:text-[#4A90E2] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <FaArrowRight />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
