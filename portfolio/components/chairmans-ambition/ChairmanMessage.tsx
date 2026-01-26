"use client";

import { motion } from "motion/react";
import { FaQuoteLeft } from "react-icons/fa";

const ChairmanMessage = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 border-4 border-[#0066CC] rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-[#4A90E2] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
            Chairman&apos;s Message
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#0066CC] to-[#4A90E2] mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#F8FAFB] to-white border border-[#E4E7EB] rounded-2xl p-8 md:p-12 shadow-lg relative">
            {/* Quote Icon */}
            <FaQuoteLeft className="absolute top-6 left-6 w-12 h-12 text-[#0066CC]/20" />

            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-[#0066CC] mb-6">
                Vision & Motivation
              </h3>

              <p className="text-[#4B5563] leading-relaxed mb-6 text-lg">
                The ambition behind creating this group is driven by a strong
                belief in self-reliance, quality, and long-term value creation.
                Our goal has always been to build organizations that people can
                trust — organizations that grow responsibly while creating
                opportunities for employees, partners, and communities.
              </p>

              <p className="text-[#4B5563] leading-relaxed text-lg">
                Through Ibrahim Chemicals and Universe LED, we strive to set new
                benchmarks in quality, service, and customer satisfaction. Every
                decision we make is guided by the principles of innovation,
                integrity, and excellence.
              </p>

              {/* Decorative Line */}
              <div className="mt-8 pt-8 border-t border-[#E4E7EB]">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-1 bg-gradient-to-b from-[#0066CC] to-[#4A90E2] rounded-full" />
                  <p className="text-[#0066CC] font-medium italic">
                    &quot;Building trust through quality, innovation, and
                    excellence.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ChairmanMessage;
