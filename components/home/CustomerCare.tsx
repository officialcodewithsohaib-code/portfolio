"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaArrowRight } from "react-icons/fa";
import MagicButton from "@/components/ui/MagicButton";
import { useRouter } from "next/navigation";

export const CustomerCare = () => {
  const router = useRouter();

  return (
    <section className="py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow Background */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#0066CC] via-[#4A90E2] to-[#10B981] rounded-3xl opacity-20 blur-2xl" />

          {/* Content */}
          <div className="relative bg-white dark:bg-[#1F2937] rounded-3xl p-12 border border-[#E4E7EB] dark:border-[#4B5563] shadow-2xl">
            <FaRocket className="text-6xl text-[#0066CC] mx-auto mb-6" />

            <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] dark:text-white mb-6">
              Ready to Build Something <span className="text-[#0066CC] dark:text-[#4A90E2]">Amazing?</span>
            </h2>

            <p className="text-lg text-[#4B5563] dark:text-[#9CA3AF] mb-8 max-w-2xl mx-auto">
              Let's transform your vision into reality with cutting-edge web development and AI-powered solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact">
                <MagicButton title="Get Started" icon={<FaArrowRight />} position="right" />
              </a>

              <motion.button
                onClick={() => router.push("/projects")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white dark:bg-[#374151] text-[#1F2937] dark:text-white border-2 border-[#E4E7EB] dark:border-[#4B5563] rounded-xl font-semibold hover:border-[#0066CC] dark:hover:border-[#4A90E2] transition-all duration-300 shadow-lg cursor-pointer"
              >
                View My Work
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
