"use client";

import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { Spotlight } from "@/components/ui/Spotlight";
import { FaPaperPlane } from "react-icons/fa";
import { PageLayout } from "@/components/layout/PageLayout";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { SocialLink } from "@/components/contact/SocialLink";
import { AvailabilityCard } from "@/components/contact/AvailabilityCard";

export default function Contact() {
  return (
    <PageLayout>
      <main className="min-h-screen dark:bg-gray-950 pt-28 pb-16 overflow-hidden">
        {/* Spotlight Effect */}
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#0066CC" />

        {/* Background Decorative Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#0066CC]/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4A90E2]/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#10B981]/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Animated Icon Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-[#0066CC] to-[#4A90E2] rounded-2xl mb-6 shadow-2xl"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              >
                <FaPaperPlane className="w-10 h-10 text-white" />
              </motion.div>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-[#1F2937] dark:text-white mb-6">
              Let's <span className="text-[#0066CC] dark:text-[#4A90E2]">Connect</span>
            </h1>

            {/* Subtitle */}
            <TextGenerateEffect
              words="Have a project in mind? Let's discuss how I can help bring your ideas to life."
              className="text-lg md:text-xl text-[#4B5563] dark:text-[#9CA3AF] max-w-3xl mx-auto"
            />

            {/* Decorative Line */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#0066CC] to-[#4A90E2] mx-auto mt-6" />
          </motion.div>

          {/* Contact Info Cards */}
          <ContactInfo />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Form - 3 Columns */}
            <ContactForm />

            {/* Social & Availability - 2 Columns */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-6"
            >
              <SocialLink />
              <AvailabilityCard />
            </motion.div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
