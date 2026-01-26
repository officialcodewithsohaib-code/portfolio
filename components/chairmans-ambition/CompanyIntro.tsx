"use client";

import { motion } from "motion/react";
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import { FaFlask, FaLightbulb, FaHandshake } from "react-icons/fa";

const CompanyIntro = () => {
 const companies = [
  {
    title: "Ibrahim Chemicals",
    description:
      "Ibrahim Chemicals was founded with a clear vision to contribute to industrial growth through quality, reliability, and innovation. From the very beginning, our focus has been on delivering high-standard chemical products that meet international safety and performance benchmarks. By combining technical expertise with ethical business practices, Ibrahim Chemicals has built long-term relationships with clients across multiple industries. Our ambition is to continuously improve, adapt to modern technologies, and play a responsible role in supporting the nation's industrial development.",
    icon: <FaFlask className="w-8 h-8 text-[#0066CC]" />,
    gradient: "from-[#0066CC]/10 to-[#4A90E2]/10",
  },
  {
    title: "Universe LED",
    description:
      "With the same forward-thinking mindset, Universe LED was established to meet the growing demand for energy-efficient and reliable electronic lighting solutions. From LED bulbs and lights to icelights, breakers, and modern electrical accessories, Universe LED represents our commitment to innovation and sustainability. We aim to provide products that not only enhance everyday living but also contribute to energy conservation and a smarter future. By integrating advanced technology with strict quality control, Universe LED reflects our vision of progress through innovation.",
    icon: <FaLightbulb className="w-8 h-8 text-[#F59E0B]" />,
    gradient: "from-[#F59E0B]/10 to-[#10B981]/10",
  },
  {
    title: "Our Group Commitment",
    description:
      "The AL-IBRAHIM GROUP represents a unified commitment to excellence across chemical and electronics industries. Through Ibrahim Chemicals and Universe LED, we deliver integrated solutions that combine industrial strength with technological innovation. Our group vision focuses on sustainable growth, customer satisfaction, and contributing to Pakistan's industrial advancement. By maintaining the highest quality standards and fostering long-term partnerships, we aim to be the trusted choice for businesses seeking reliable, innovative, and ethically produced industrial and electronic solutions.",
    icon: <FaHandshake className="w-8 h-8 text-[#10B981]" />,
    gradient: "from-[#10B981]/10 to-[#0066CC]/10",
  },
];

  return (
      <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F2937] mb-4">
          Our Foundations
        </h2>
        <div className="h-1 w-16 bg-gradient-to-r from-[#0066CC] to-[#4A90E2] mx-auto rounded-full mb-12" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {companies.map((company, index) => (
          <motion.div
            key={company.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="border border-[#E4E7EB] hover:border-[#0066CC] transition-all duration-300 hover:shadow-xl rounded-xl bg-white overflow-hidden group"
          >
            {/* Header Section with Icon */}
            <div
              className={`h-48 bg-gradient-to-br ${company.gradient} flex items-center justify-center relative overflow-hidden`}
            >
              {/* Decorative Pattern */}
              <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
              <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                {company.icon}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 group-hover:translate-x-2 transition-transform duration-200">
              <h3 className="text-xl font-semibold text-[#1F2937] mb-3 group-hover:text-[#0066CC] transition-colors duration-300">
                {company.title}
              </h3>
              <p className="text-[#4B5563] leading-relaxed text-sm">
                {company.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CompanyIntro;
