"use client";

import React from "react";
import { motion } from "framer-motion";
import MagicButton from "@/components/ui/MagicButton";
import { FaArrowRight } from "react-icons/fa";

export const ServiceCTA: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#0066CC]/10 to-[#10B981]/10 dark:from-[#0066CC]/20 dark:to-[#10B981]/20 rounded-3xl p-12 border-2 border-[#0066CC]/30 dark:border-[#0066CC]/50"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1F2937] dark:text-white">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-[#4B5563] dark:text-[#9CA3AF] mb-8">
          Let's discuss your requirements and build something amazing together. Get a free consultation today.
        </p>
        <MagicButton
          title="Get Started"
          icon={<FaArrowRight />}
          position="right"
        />
      </motion.div>
    </section>
  );
};
