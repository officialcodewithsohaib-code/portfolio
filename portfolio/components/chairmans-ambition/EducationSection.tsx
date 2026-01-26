"use client";

import { motion } from "motion/react";
import { FaGraduationCap, FaBook, FaChartLine } from "react-icons/fa";

const EducationSection = () => {
  const educationPoints = [
    {
      icon: <FaGraduationCap className="w-10 h-10" />,
      title: "Academic Foundation",
      description:
        "Strong university education and specialized courses in business and industrial management.",
    },
    {
      icon: <FaBook className="w-10 h-10" />,
      title: "Professional Training",
      description:
        "Continuous learning through professional certifications and industry-specific programs.",
    },
    {
      icon: <FaChartLine className="w-10 h-10" />,
      title: "Industry Expertise",
      description:
        "Adapting to global industry trends and implementing best practices across operations.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F8FAFB]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
            Education & Professional Background
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#0066CC] to-[#4A90E2] mx-auto rounded-full mb-6" />
          <p className="text-[#4B5563] max-w-3xl mx-auto text-lg">
            Education has played a vital role in shaping this vision. A strong
            academic foundation, combined with professional training and
            university education, has helped transform ideas into structured,
            scalable businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {educationPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white border border-[#E4E7EB] rounded-xl p-8 h-full hover:border-[#0066CC] hover:shadow-xl transition-all duration-300">
                {/* Icon Circle */}
                <div className="w-20 h-20 bg-gradient-to-br from-[#0066CC]/10 to-[#4A90E2]/10 rounded-full flex items-center justify-center mb-6 text-[#0066CC] group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </div>

                <h3 className="text-xl font-semibold text-[#1F2937] mb-4">
                  {point.title}
                </h3>

                <p className="text-[#4B5563] leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
