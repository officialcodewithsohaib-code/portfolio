"use client";

import { motion } from "motion/react";
import { FaHeart, FaHandshake, FaUsers } from "react-icons/fa";

const GratitudeSection = () => {
  const stakeholders = [
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Customers",
      message: "Thank you for trusting our products and services",
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Partners",
      message: "Thank you for your collaboration and support",
    },
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: "Team Members",
      message: "Thank you for your dedication and hard work",
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
            Appreciation & Gratitude
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#0066CC] to-[#4A90E2] mx-auto rounded-full mb-6" />
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0066CC]/5 via-white to-[#4A90E2]/5 border border-[#E4E7EB] rounded-2xl p-8 md:p-12 mb-12"
          >
            <p className="text-[#4B5563] text-lg leading-relaxed text-center mb-8">
              We sincerely thank our customers, partners, and team members for
              placing their trust in us. Your confidence motivates us to
              continuously improve, innovate, and deliver excellence across all
              our products and services.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stakeholders.map((stakeholder, index) => (
                <motion.div
                  key={stakeholder.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-[#E4E7EB]"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0066CC] to-[#4A90E2] rounded-full flex items-center justify-center mb-4 text-white">
                      {stakeholder.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-[#1F2937] mb-2">
                      {stakeholder.title}
                    </h3>
                    <p className="text-sm text-[#4B5563]">
                      {stakeholder.message}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default GratitudeSection;
