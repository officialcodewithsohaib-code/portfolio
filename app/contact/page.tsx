"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CardSpotlight } from "@/components/ui/CardSpotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { Spotlight } from "@/components/ui/Spotlight";
import MagicButton from "@/components/ui/MagicButton";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaPaperPlane,
  FaCheckCircle,
  FaSpinner,
  FaUser,
  FaBriefcase,
  FaRegComments,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setIsSuccess(false), 5000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com",
      color: "text-[#0066CC]",
      gradient: "from-[#0066CC] to-[#4A90E2]",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+92 XXX XXXXXXX",
      link: "tel:+92XXXXXXXXXX",
      color: "text-[#10B981]",
      gradient: "from-[#10B981] to-[#0066CC]",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Karachi, Pakistan",
      link: "https://maps.google.com",
      color: "text-[#F59E0B]",
      gradient: "from-[#F59E0B] to-[#10B981]",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      color: "hover:text-[#0066CC]",
      bgColor: "hover:bg-[#0066CC]/10",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/yourusername",
      color: "hover:text-[#1F2937]",
      bgColor: "hover:bg-[#1F2937]/10",
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      color: "hover:text-[#4A90E2]",
      bgColor: "hover:bg-[#4A90E2]/10",
    },
  ];

  const formFields = [
    {
      name: "name",
      type: "text",
      placeholder: "Your Full Name",
      icon: <FaUser />,
      required: true,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      icon: <FaEnvelope />,
      required: true,
    },
    {
      name: "subject",
      type: "text",
      placeholder: "Subject",
      icon: <FaBriefcase />,
      required: true,
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFB] dark:bg-gray-950 pt-28 pb-16 overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${info.gradient} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500`}
              />

              {/* Card Content */}
              <div className="relative bg-white dark:bg-[#1F2937] rounded-2xl p-6 border border-[#E4E7EB] dark:border-[#4B5563] hover:border-transparent transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-4 rounded-xl bg-gradient-to-br ${info.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-2xl">{info.icon}</span>
                  </div>
                  <div>
                    <p className="text-sm text-[#4B5563] dark:text-[#9CA3AF] mb-1">
                      {info.title}
                    </p>
                    <p className="font-semibold text-[#1F2937] dark:text-white">
                      {info.value}
                    </p>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form - 3 Columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <CardSpotlight className="h-full">
              <h2 className="text-3xl font-bold text-[#1F2937] dark:text-white mb-2">
                Send a Message
              </h2>
              <p className="text-[#4B5563] dark:text-[#9CA3AF] mb-8">
                Fill out the form below and I'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Text Input Fields */}
                {formFields.map((field, index) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4B5563] dark:text-[#9CA3AF] z-10">
                      {field.icon}
                    </div>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      placeholder={field.placeholder}
                      required={field.required}
                      className={`w-full pl-12 pr-4 py-4 bg-[#F8FAFB] dark:bg-[#374151] border-2 rounded-xl text-[#1F2937] dark:text-white placeholder-[#9CA3AF] focus:outline-none transition-all duration-300 ${
                        focusedField === field.name
                          ? "border-[#0066CC] dark:border-[#4A90E2] shadow-lg shadow-[#0066CC]/20"
                          : "border-[#E4E7EB] dark:border-[#4B5563]"
                      }`}
                    />
                    <AnimatePresence>
                      {focusedField === field.name && (
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          exit={{ scaleX: 0 }}
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0066CC] to-[#4A90E2]"
                          style={{ originX: 0 }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}

                {/* Message Textarea */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="relative"
                >
                  <div className="absolute left-4 top-4 text-[#4B5563] dark:text-[#9CA3AF] z-10">
                    <FaRegComments />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Your Message"
                    required
                    rows={6}
                    className={`w-full pl-12 pr-4 py-4 bg-[#F8FAFB] dark:bg-[#374151] border-2 rounded-xl text-[#1F2937] dark:text-white placeholder-[#9CA3AF] focus:outline-none transition-all duration-300 resize-none ${
                      focusedField === "message"
                        ? "border-[#0066CC] dark:border-[#4A90E2] shadow-lg shadow-[#0066CC]/20"
                        : "border-[#E4E7EB] dark:border-[#4B5563]"
                    }`}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    whileHover={{ scale: isSubmitting || isSuccess ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting || isSuccess ? 1 : 0.98 }}
                    className={`w-full py-4 px-8 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg ${
                      isSuccess
                        ? "bg-gradient-to-r from-[#10B981] to-[#0066CC]"
                        : "bg-gradient-to-r from-[#0066CC] to-[#4A90E2] hover:shadow-2xl hover:shadow-[#0066CC]/30"
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <FaSpinner className="animate-spin" />
                        Sending...
                      </span>
                    ) : isSuccess ? (
                      <span className="flex items-center justify-center gap-2">
                        <FaCheckCircle />
                        Message Sent Successfully!
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <FaPaperPlane />
                        Send Message
                      </span>
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </CardSpotlight>
          </motion.div>

          {/* Social & Availability - 2 Columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Social Links Card */}
            <CardSpotlight>
              <h3 className="text-2xl font-bold text-[#1F2937] dark:text-white mb-6">
                Connect on Social
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, x: 5 }}
                    className={`flex items-center gap-4 p-4 rounded-xl bg-[#F8FAFB] dark:bg-[#374151] border border-[#E4E7EB] dark:border-[#4B5563] transition-all duration-300 ${social.bgColor}`}
                  >
                    <div
                      className={`text-2xl text-[#4B5563] dark:text-[#9CA3AF] transition-colors ${social.color}`}
                    >
                      {social.icon}
                    </div>
                    <span className="font-medium text-[#1F2937] dark:text-white">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </CardSpotlight>

            {/* Availability Status */}
            <CardSpotlight>
              <h3 className="text-2xl font-bold text-[#1F2937] dark:text-white mb-4">
                Availability
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-[#10B981] rounded-full"
                  />
                  <span className="text-[#4B5563] dark:text-[#9CA3AF]">
                    Available for freelance projects
                  </span>
                </div>
                <div className="p-4 bg-gradient-to-r from-[#0066CC]/10 to-[#4A90E2]/10 dark:from-[#0066CC]/20 dark:to-[#4A90E2]/20 rounded-xl border border-[#0066CC]/20">
                  <p className="text-sm text-[#1F2937] dark:text-white font-medium mb-2">
                    Response Time
                  </p>
                  <p className="text-[#4B5563] dark:text-[#9CA3AF] text-sm">
                    Usually responds within 24 hours
                  </p>
                </div>
              </div>
            </CardSpotlight>

            {/* Quick Action */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0066CC] to-[#4A90E2] opacity-90" />
              <div className="relative p-6 text-white">
                <h4 className="text-xl font-bold mb-2">Quick Chat</h4>
                <p className="text-sm text-white/80 mb-4">
                  Prefer a quick call? Schedule a 15-min conversation.
                </p>
                <MagicButton
                  title="Schedule Call"
                  icon={<FaPhone />}
                  position="right"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
