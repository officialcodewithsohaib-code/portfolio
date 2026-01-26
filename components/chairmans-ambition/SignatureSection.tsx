"use client";

import { motion } from "motion/react";
import { useState } from "react";

const SignatureSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-gradient-to-br from-[#F8FAFB] via-white to-[#F5F7FA] border-2 border-[#E4E7EB] rounded-2xl p-12 md:p-16 shadow-xl relative overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.1] bg-[size:30px_30px]" />
          </div>

          {/* Decorative Corner Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0066CC]/20 to-transparent rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#4A90E2]/20 to-transparent rounded-tr-full" />

          <div className="relative z-10 text-center">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold text-[#1F2937] mb-8"
            >
              Sincerely,
            </motion.h3>

            {/* Interactive Name Section */}
            <motion.div
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="relative inline-block cursor-pointer"
            >
              <motion.div
                animate={{
                  scale: isHovered ? 1.05 : 1,
                  rotateX: isHovered ? 5 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Signature-style Name */}
                <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0066CC] via-[#4A90E2] to-[#0066CC] mb-4 select-none">
                  Muhammad Ibrahim Peerzada
                </h2>

                {/* Animated Underline */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-1 bg-gradient-to-r from-transparent via-[#0066CC] to-transparent rounded-full mx-auto"
                />
              </motion.div>

              {/* Hover Effect Glow */}
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-r from-[#0066CC]/10 via-[#4A90E2]/10 to-[#0066CC]/10 blur-xl -z-10 rounded-lg"
                />
              )}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg md:text-xl text-[#4B5563] font-medium mt-8"
            >
              Chairman
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-md md:text-lg text-[#4B5563] mt-2"
            >
              Ibrahim Chemicals & Universe LED Group
            </motion.p>

            {/* Decorative Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0066CC] to-[#4A90E2] text-white rounded-full text-sm font-medium shadow-lg"
            >
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Leading Pakistan&apos;s Industrial Future
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SignatureSection;
