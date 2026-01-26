"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CardSpotlight } from "@/components/ui/CardSpotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { Spotlight } from "@/components/ui/Spotlight";
import MagicButton from "@/components/ui/MagicButton";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaLock,
  FaChartLine,
  FaPlug,
  FaRobot,
  FaBrain,
  FaMemory,
  FaCogs,
  FaGraduationCap,
  FaChartBar,
  FaServer,
  FaCode,
  FaPalette,
  FaShieldAlt,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiOpenai } from "react-icons/si";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<"mern" | "ai">("mern");
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const mernServices = [
    {
      icon: <FaCode />,
      title: "Full Stack Web Development",
      description: "End-to-end MERN applications with scalable architecture, responsive UI, and optimized performance for production-ready solutions.",
      features: ["React + Next.js", "Node.js + Express", "MongoDB Database", "RESTful APIs"],
      gradient: "from-[#0066CC] to-[#4A90E2]",
      price: "Starting at $1,500",
    },
    {
      icon: <FaPalette />,
      title: "Frontend Development",
      description: "Modern React interfaces with stunning animations, responsive design, and pixel-perfect implementation using latest web technologies.",
      features: ["React/Next.js", "TailwindCSS", "Framer Motion", "Mobile First"],
      gradient: "from-[#4A90E2] to-[#10B981]",
      price: "Starting at $800",
    },
    {
      icon: <FaServer />,
      title: "Backend APIs & Databases",
      description: "Robust Node.js backends with Express, MongoDB integration, data modeling, and high-performance API architecture.",
      features: ["Node.js + Express", "MongoDB/PostgreSQL", "RESTful/GraphQL", "Redis Caching"],
      gradient: "from-[#10B981] to-[#F59E0B]",
      price: "Starting at $1,000",
    },
    {
      icon: <FaLock />,
      title: "Authentication & Authorization",
      description: "Secure user authentication with JWT, OAuth integration, role-based access control, and session management systems.",
      features: ["JWT Tokens", "OAuth (Google/GitHub)", "RBAC", "Password Encryption"],
      gradient: "from-[#F59E0B] to-[#0066CC]",
      price: "Starting at $600",
    },
    {
      icon: <FaChartLine />,
      title: "Project Management Tools",
      description: "Custom dashboards with real-time analytics, admin panels, data visualization, and comprehensive reporting features.",
      features: ["Analytics Dashboard", "Admin Panel", "Data Visualization", "Reports"],
      gradient: "from-[#0066CC] to-[#10B981]",
      price: "Starting at $1,200",
    },
    {
      icon: <FaPlug />,
      title: "Integration Services",
      description: "Seamless integration with payment gateways (Stripe, PayPal), third-party APIs, email services, and cloud platforms.",
      features: ["Payment Gateways", "Third-party APIs", "Email/SMS", "Cloud Services"],
      gradient: "from-[#10B981] to-[#4A90E2]",
      price: "Starting at $700",
    },
  ];

  const aiServices = [
    {
      icon: <FaRobot />,
      title: "Autonomous Agent Development",
      description: "Build intelligent AI agents that perform complex tasks autonomously using LangChain, OpenAI, and custom orchestration systems.",
      features: ["Multi-Agent Systems", "Task Automation", "LangChain Framework", "Custom AI Models"],
      gradient: "from-[#0066CC] to-[#4A90E2]",
      price: "Starting at $2,500",
    },
    {
      icon: <FaBrain />,
      title: "Task Planning & Reasoning",
      description: "Smart decision-making agents with advanced reasoning capabilities, goal decomposition, and intelligent task orchestration.",
      features: ["Goal-Oriented AI", "Decision Trees", "Reasoning Engines", "Task Decomposition"],
      gradient: "from-[#4A90E2] to-[#10B981]",
      price: "Starting at $2,000",
    },
    {
      icon: <FaMemory />,
      title: "Memory & Knowledge Base",
      description: "Context-aware agents with long-term memory, vector databases (Pinecone, FAISS), and intelligent information retrieval.",
      features: ["Vector Databases", "RAG Architecture", "Context Awareness", "Knowledge Graphs"],
      gradient: "from-[#10B981] to-[#F59E0B]",
      price: "Starting at $1,800",
    },
    {
      icon: <FaCogs />,
      title: "API & Tool Integration",
      description: "Connect AI agents to Slack, Google Docs, CRMs, and 100+ tools with custom function calling and workflow automation.",
      features: ["Slack/Discord Bots", "Google Workspace", "CRM Integration", "Custom Tools"],
      gradient: "from-[#F59E0B] to-[#0066CC]",
      price: "Starting at $1,500",
    },
    {
      icon: <FaGraduationCap />,
      title: "Learning & Feedback Systems",
      description: "Self-improving AI agents with reinforcement learning, feedback loops, and continuous optimization from user interactions.",
      features: ["Reinforcement Learning", "Feedback Loops", "Model Fine-tuning", "Performance Optimization"],
      gradient: "from-[#0066CC] to-[#10B981]",
      price: "Starting at $2,200",
    },
    {
      icon: <FaChartBar />,
      title: "Analytics & Reporting",
      description: "Track agent performance with comprehensive dashboards, output analysis, cost monitoring, and detailed performance metrics.",
      features: ["Performance Dashboard", "Cost Tracking", "Output Analysis", "Custom Reports"],
      gradient: "from-[#10B981] to-[#4A90E2]",
      price: "Starting at $1,300",
    },
  ];

  const currentServices = activeCategory === "mern" ? mernServices : aiServices;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

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
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <FaCogs className="w-10 h-10 text-white" />
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-[#1F2937] dark:text-white mb-6">
            Professional <span className="text-[#0066CC] dark:text-[#4A90E2]">Services</span>
          </h1>

          {/* Subtitle */}
          <TextGenerateEffect
            words="Full-Stack Development & Intelligent AI Automation Solutions"
            className="text-lg md:text-xl text-[#4B5563] dark:text-[#9CA3AF] max-w-3xl mx-auto"
          />

          {/* Decorative Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#0066CC] to-[#4A90E2] mx-auto mt-6" />
        </motion.div>

        {/* Category Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory("mern")}
            className={`relative px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 ${
              activeCategory === "mern"
                ? "bg-gradient-to-r from-[#0066CC] to-[#4A90E2] text-white shadow-2xl shadow-[#0066CC]/30"
                : "bg-white dark:bg-[#1F2937] text-[#4B5563] dark:text-[#9CA3AF] border-2 border-[#E4E7EB] dark:border-[#4B5563] hover:border-[#0066CC] dark:hover:border-[#4A90E2]"
            }`}
          >
            <div className="flex items-center gap-3">
              <FaReact className="text-2xl" />
              <span>MERN Stack</span>
            </div>
            {activeCategory === "mern" && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 bg-gradient-to-r from-[#0066CC] to-[#4A90E2] rounded-2xl -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory("ai")}
            className={`relative px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 ${
              activeCategory === "ai"
                ? "bg-gradient-to-r from-[#10B981] to-[#0066CC] text-white shadow-2xl shadow-[#10B981]/30"
                : "bg-white dark:bg-[#1F2937] text-[#4B5563] dark:text-[#9CA3AF] border-2 border-[#E4E7EB] dark:border-[#4B5563] hover:border-[#10B981] dark:hover:border-[#0066CC]"
            }`}
          >
            <div className="flex items-center gap-3">
              <FaBrain className="text-2xl" />
              <span>Agentic AI</span>
            </div>
            {activeCategory === "ai" && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 bg-gradient-to-r from-[#10B981] to-[#0066CC] rounded-2xl -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </motion.button>
        </motion.div>

        {/* Category Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-white dark:bg-[#1F2937] rounded-2xl px-8 py-6 border border-[#E4E7EB] dark:border-[#4B5563] shadow-lg">
              <p className="text-[#4B5563] dark:text-[#9CA3AF] text-lg max-w-3xl">
                {activeCategory === "mern"
                  ? "Build scalable, high-performance web applications with modern MERN stack technologies. From frontend to backend, I deliver complete solutions."
                  : "Develop intelligent AI agents that automate complex workflows, make decisions, and integrate seamlessly with your existing systems."}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {currentServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
                className="group relative h-full"
              >
                {/* Glow Effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-75 blur-lg transition-all duration-500`}
                />

                {/* Service Card */}
                <div className="relative h-full bg-white dark:bg-[#1F2937] rounded-2xl border border-[#E4E7EB] dark:border-[#4B5563] hover:border-transparent transition-all duration-300 overflow-hidden">
                  {/* Icon Header */}
                  <div className={`relative p-6 bg-gradient-to-br ${service.gradient} overflow-hidden`}>
                    {/* Animated Background Circles */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />

                    {/* Icon */}
                    <motion.div
                      animate={{
                        scale: hoveredService === index ? 1.1 : 1,
                        rotate: hoveredService === index ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="relative text-5xl text-white mb-4"
                    >
                      {service.icon}
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white relative z-10">
                      {service.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-[#4B5563] dark:text-[#9CA3AF] mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <FaCheckCircle className="text-[#10B981] flex-shrink-0" />
                          <span className="text-sm text-[#1F2937] dark:text-white font-medium">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Price & CTA */}
                    <div className="border-t border-[#E4E7EB] dark:border-[#4B5563] pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-[#0066CC] dark:text-[#4A90E2]">
                          {service.price}
                        </span>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r ${service.gradient} shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group`}
                      >
                        Get Started
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Shimmer Effect */}
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: hoveredService === index ? "100%" : "-100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Why Choose Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center text-[#1F2937] dark:text-white mb-12">
            Why Choose <span className="text-[#0066CC] dark:text-[#4A90E2]">My Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaRocket />, title: "Fast Delivery", desc: "Quick turnaround times" },
              { icon: <FaShieldAlt />, title: "Quality Assured", desc: "Industry best practices" },
              { icon: <FaCogs />, title: "Scalable Solutions", desc: "Built for growth" },
              { icon: <FaCheckCircle />, title: "24/7 Support", desc: "Always available" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-[#1F2937] rounded-2xl p-6 border border-[#E4E7EB] dark:border-[#4B5563] hover:border-[#0066CC] dark:hover:border-[#4A90E2] transition-all duration-300 text-center shadow-lg"
              >
                <div className="text-4xl text-[#0066CC] dark:text-[#4A90E2] mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-[#1F2937] dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-[#4B5563] dark:text-[#9CA3AF]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0066CC] via-[#4A90E2] to-[#10B981] opacity-95" />
            <div className="relative p-12 md:p-16 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your requirements and build something amazing together. Get a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact">
                  <MagicButton title="Get Free Consultation" icon={<FaRocket />} position="right" />
                </a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-[#0066CC] rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg"
                >
                  View Pricing Details
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
