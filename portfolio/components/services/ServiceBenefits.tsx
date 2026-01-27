"use client";

import React from "react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Scalable Architecture",
    desc: "Built with growth in mind, ensuring your application can handle increasing demands",
  },
  {
    title: "Modern Tech Stack",
    desc: "Using industry-leading technologies for optimal performance and maintainability",
  },
  {
    title: "Clean Code",
    desc: "Well-documented, maintainable code following best practices and design patterns",
  },
  {
    title: "Fast Delivery",
    desc: "Agile development approach with regular updates and quick turnaround times",
  },
];

export const ServiceBenefits: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#1F2937] dark:text-white"
        >
          Why Choose My Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-[#1F2937] p-8 rounded-2xl border-2 border-[#E4E7EB] dark:border-[#374151] hover:border-[#0066CC] dark:hover:border-[#4A90E2] transition-all duration-300"
            >
              <h4 className="text-2xl font-bold text-[#1F2937] dark:text-white mb-4">
                {item.title}
              </h4>
              <p className="text-[#4B5563] dark:text-[#9CA3AF]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
