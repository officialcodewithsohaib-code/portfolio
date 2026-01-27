"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  gradient: string;
  icon: React.ReactNode;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  gradient,
  icon,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
    >
      <div className="h-full bg-white dark:bg-[#1F2937] rounded-2xl p-8 border-2 border-[#E4E7EB] dark:border-[#374151] hover:border-[#0066CC] dark:hover:border-[#4A90E2] transition-all duration-300 hover:shadow-2xl">
        {/* Icon */}
        <div className={`inline-block p-4 bg-gradient-to-r ${gradient} rounded-xl mb-6 text-white text-3xl`}>
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-[#1F2937] dark:text-white mb-4">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#4B5563] dark:text-[#9CA3AF] mb-6">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <FaCheckCircle className="text-[#10B981] mt-1 flex-shrink-0" />
              <span className="text-[#4B5563] dark:text-[#9CA3AF]">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
