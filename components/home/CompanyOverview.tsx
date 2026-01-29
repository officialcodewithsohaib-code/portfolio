"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaBrain, FaChartLine, FaCog } from "react-icons/fa";

export const CompanyOverview = () => {
  const stats = [
    { number: "4+", label: "Projects Delivered", icon: <FaRocket />, color: "text-[#0066CC]" },
    { number: "1+", label: "AI Agents Built", icon: <FaBrain />, color: "text-[#10B981]" },
    { number: "100%", label: "Client Satisfaction", icon: <FaChartLine />, color: "text-[#F59E0B]" },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group cursor-pointer"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0066CC] to-[#4A90E2] rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />

              {/* Card */}
              <div className="relative bg-white dark:bg-[#1F2937] rounded-2xl p-8 border border-[#E4E7EB] dark:border-[#4B5563] text-center">
                <div className={`text-5xl mb-2 ${stat.color}`}>{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0066CC] to-[#4A90E2] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-[#4B5563] dark:text-[#9CA3AF]">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
