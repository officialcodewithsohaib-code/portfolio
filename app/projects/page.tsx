  "use client";

  import React, { useState } from "react";
  import { motion, AnimatePresence } from "framer-motion";
  import { ProjectCard } from "@/components/ui/ProjectCard";
  import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
  import MagicButton from "@/components/ui/MagicButton";
  import {
    FaReact,
    FaNodeJs,
    FaRobot,
    FaChartLine,
    FaShoppingCart,
    FaBrain,
    FaCode,
    FaLightbulb,
    FaDatabase,
    FaServer,
    FaLock,
  } from "react-icons/fa";
  import {
    SiNextdotjs,
    SiMongodb,
    SiOpenai,
    SiTailwindcss,
    SiTypescript,
    SiExpress,
    SiPython,
    SiDocker,
  } from "react-icons/si";
  import { PageLayout } from "@/components/layout/PageLayout";

  const Projects = () => {
    const [activeTab, setActiveTab] = useState<"mern" | "ai">("mern");

    // MERN Stack Projects
    const mernProjects = [
      {
        title: "E-Commerce Platform with Admin Dashboard",
        description:
          "Full-featured online store with product management, shopping cart, secure checkout, payment gateway integration (Stripe), order tracking, and comprehensive admin panel with analytics and inventory management.",
        tags: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe"],
        gradient: "from-[#0066CC] to-[#4A90E2]",
        icon: <FaShoppingCart />,
        link: "#",
        github: "#",
      },
      {
        title: "Real-Time Chat Application",
        description:
          "Scalable messaging platform with WebSocket connections using Socket.io, real-time notifications, user presence detection, typing indicators, group chats, file sharing, and end-to-end message encryption.",
        tags: ["React", "Node.js", "Socket.io", "MongoDB", "JWT", "Redis"],
        gradient: "from-[#10B981] to-[#0066CC]",
        icon: <FaCode />,
        link: "#",
        github: "#",
      },
      {
        title: "Social Media Dashboard",
        description:
          "Feature-rich social platform with user profiles, post creation, image uploads, likes/comments system, follow/unfollow functionality, news feed algorithm, and real-time notifications with responsive design.",
        tags: ["Next.js", "Express", "MongoDB", "Cloudinary", "JWT", "TailwindCSS"],
        gradient: "from-[#F59E0B] to-[#10B981]",
        icon: <FaChartLine />,
        link: "#",
        github: "#",
      },
      {
        title: "Task Management System",
        description:
          "Collaborative project management tool with kanban boards, drag-and-drop functionality, task assignments, deadline tracking, team collaboration features, activity logs, and progress analytics dashboard.",
        tags: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit", "DnD Kit"],
        gradient: "from-[#4A90E2] to-[#F59E0B]",
        icon: <FaServer />,
        link: "#",
        github: "#",
      },
      {
        title: "Blog CMS with SEO Optimization",
        description:
          "Content management system for bloggers with rich text editor, image optimization, category management, SEO-friendly URLs, sitemap generation, social media integration, and analytics tracking.",
        tags: ["Next.js 15", "TypeScript", "MongoDB", "NextAuth", "TailwindCSS", "MDX"],
        gradient: "from-[#0066CC] to-[#10B981]",
        icon: <SiNextdotjs />,
        link: "#",
        github: "#",
      },
      {
        title: "Authentication & Authorization System",
        description:
          "Robust user authentication system with JWT tokens, OAuth integration (Google, GitHub), email verification, password reset, role-based access control (RBAC), session management, and security middleware.",
        tags: ["Node.js", "Express", "MongoDB", "JWT", "Passport.js", "Nodemailer"],
        gradient: "from-[#10B981] to-[#4A90E2]",
        icon: <FaLock />,
        link: "#",
        github: "#",
      },
    ];

    // Agentic AI Projects
    const aiProjects = [
      {
        title: "AI-Powered LinkedIn Outreach Agent",
        description:
          "Intelligent automation platform using multi-agent systems (OpenAI, Claude, Groq) for lead generation, personalized messaging, campaign orchestration, response analysis, and comprehensive analytics with ROI tracking.",
        tags: ["Next.js", "TypeScript", "OpenAI", "LangChain", "n8n", "MongoDB"],
        gradient: "from-[#0066CC] to-[#4A90E2]",
        icon: <FaRobot />,
        link: "#",
        github: "#",
      },
      {
        title: "Multi-Agent Workflow Automation",
        description:
          "Enterprise workflow automation using agentic AI with LangChain, autonomous task delegation, decision-making trees, API integrations, process optimization, and real-time monitoring with custom agent orchestration.",
        tags: ["Python", "LangChain", "OpenAI", "FastAPI", "Celery", "PostgreSQL"],
        gradient: "from-[#10B981] to-[#0066CC]",
        icon: <FaBrain />,
        link: "#",
        github: "#",
      },
      {
        title: "AI Content Generation Platform",
        description:
          "Advanced content creation system with GPT-4 integration, blog post generation, SEO optimization, multi-language support, tone customization, plagiarism detection, and content scheduling with analytics.",
        tags: ["Next.js", "OpenAI GPT-4", "Pinecone", "TypeScript", "Vercel AI SDK"],
        gradient: "from-[#F59E0B] to-[#10B981]",
        icon: <SiOpenai />,
        link: "#",
        github: "#",
      },
      {
        title: "Intelligent Document Processing Agent",
        description:
          "AI-powered document analysis system with OCR, data extraction, entity recognition, sentiment analysis, document classification, automated workflows, and integration with business systems using RAG architecture.",
        tags: ["Python", "LangChain", "OpenAI", "FAISS", "Docker", "PostgreSQL"],
        gradient: "from-[#4A90E2] to-[#F59E0B]",
        icon: <FaDatabase />,
        link: "#",
        github: "#",
      },
      {
        title: "AI Customer Support Chatbot",
        description:
          "Conversational AI agent with natural language understanding, context awareness, multi-turn conversations, CRM integration, ticket creation, knowledge base search, and continuous learning from interactions.",
        tags: ["Next.js", "OpenAI", "LangChain", "Supabase", "Vercel", "Pinecone"],
        gradient: "from-[#0066CC] to-[#10B981]",
        icon: <FaRobot />,
        link: "#",
        github: "#",
      },
      {
        title: "Automated Code Review Agent",
        description:
          "AI-powered code analysis system that reviews pull requests, identifies bugs, suggests improvements, checks best practices, generates documentation, and provides security vulnerability scanning with GitHub integration.",
        tags: ["Python", "OpenAI", "GitHub API", "Docker", "FastAPI", "Redis"],
        gradient: "from-[#10B981] to-[#4A90E2]",
        icon: <FaCode />,
        link: "#",
        github: "#",
      },
    ];

    // Tech Stack Badges
    const mernStack = [
      { icon: <FaReact />, name: "React", color: "text-[#0066CC]" },
      { icon: <SiNextdotjs />, name: "Next.js", color: "text-[#1F2937] dark:text-[#4A90E2]" },
      { icon: <FaNodeJs />, name: "Node.js", color: "text-[#10B981]" },
      { icon: <SiMongodb />, name: "MongoDB", color: "text-[#10B981]" },
      { icon: <SiExpress />, name: "Express", color: "text-[#4B5563] dark:text-[#9CA3AF]" },
      { icon: <SiTypescript />, name: "TypeScript", color: "text-[#0066CC]" },
    ];

    const aiStack = [
      { icon: <SiOpenai />, name: "OpenAI", color: "text-[#0066CC]" },
      { icon: <FaBrain />, name: "LangChain", color: "text-[#10B981]" },
      { icon: <SiPython />, name: "Python", color: "text-[#F59E0B]" },
      { icon: <FaRobot />, name: "AI Agents", color: "text-[#4A90E2]" },
      { icon: <SiDocker />, name: "Docker", color: "text-[#0066CC]" },
      { icon: <FaDatabase />, name: "Vector DB", color: "text-[#10B981]" },
    ];

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    };

    const currentProjects = activeTab === "mern" ? mernProjects : aiProjects;
    const currentStack = activeTab === "mern" ? mernStack : aiStack;

    return (
      <>
      <PageLayout>
      <section id="projects" className="relative py-20 pt-36 dark:bg-gray-950 overflow-hidden">
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#0066CC]/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4A90E2]/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#10B981]/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Icon Badge */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-[#0066CC] to-[#4A90E2] rounded-2xl mb-6 shadow-xl"
            >
              <FaCode className="w-10 h-10 text-white" />
            </motion.div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-6xl font-bold text-[#1F2937] dark:text-white mb-6">
              Portfolio <span className="text-[#0066CC] dark:text-[#4A90E2]">Showcase</span>
            </h2>

            {/* Subtitle */}
            <TextGenerateEffect
              words="Full-Stack Development & Agentic AI Solutions"
              className="text-lg md:text-xl text-[#4B5563] dark:text-[#9CA3AF] max-w-3xl mx-auto mb-4"
            />

            {/* Decorative Underline */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#0066CC] to-[#4A90E2] mx-auto mt-6" />
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab("mern")}
              className={`relative px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 cursor-pointer ${
                activeTab === "mern"
                  ? "bg-gradient-to-r from-[#0066CC] to-[#4A90E2] text-white shadow-xl"
                  : "bg-white dark:bg-[#1F2937] text-[#4B5563] dark:text-[#9CA3AF] border-2 border-[#E4E7EB] dark:border-[#4B5563] hover:border-[#0066CC] dark:hover:border-[#4A90E2]"
              }`}
            >
              <FaReact className="inline-block mr-2 text-xl" />
              MERN Stack
              {activeTab === "mern" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-[#0066CC] to-[#4A90E2] rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab("ai")}
              className={`relative px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 cursor-pointer ${
                activeTab === "ai"
                  ? "bg-gradient-to-r from-[#10B981] to-[#0066CC] text-white shadow-xl"
                  : "bg-white dark:bg-[#1F2937] text-[#4B5563] dark:text-[#9CA3AF] border-2 border-[#E4E7EB] dark:border-[#4B5563] hover:border-[#10B981] dark:hover:border-[#0066CC]"
              }`}
            >
              <FaBrain className="inline-block mr-2 text-xl" />
              Agentic AI
              {activeTab === "ai" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-[#10B981] to-[#0066CC] rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          </motion.div>

          {/* Tech Stack Badges */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-3 mb-16"
            >
              {currentStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-[#1F2937] border border-[#E4E7EB] dark:border-[#4B5563] rounded-full shadow-sm hover:shadow-lg hover:border-[#0066CC] dark:hover:border-[#4A90E2] transition-all duration-300 cursor-pointer"
                >
                  <span className={`${tech.color} text-xl`}>{tech.icon}</span>
                  <span className="text-sm font-medium text-[#4B5563] dark:text-[#9CA3AF]">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            >
              {currentProjects.map((project, index) => (
                <ProjectCard key={`${activeTab}-${index}`} {...project} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { number: "4+", label: "Projects Completed" },
              { number: "4", label: "MERN Stack Apps" },
              { number: "1", label: "AI Agent (In Progress)" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-[#1F2937] rounded-2xl p-6 border border-[#E4E7EB] dark:border-[#4B5563] hover:border-[#0066CC] dark:hover:border-[#4A90E2] transition-all duration-300 text-center shadow-lg cursor-default"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-[#0066CC] to-[#4A90E2] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-[#4B5563] dark:text-[#9CA3AF]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call-to-Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <div className="inline-flex flex-col items-center gap-6 bg-white dark:bg-[#1F2937] rounded-2xl p-12 border border-[#E4E7EB] dark:border-[#4B5563] shadow-2xl max-w-3xl mx-auto">
              <FaLightbulb className="text-6xl text-[#F59E0B]" />
              <h3 className="text-3xl md:text-4xl font-bold text-[#1F2937] dark:text-white">
                Let's Build Together
              </h3>
              <p className="text-[#4B5563] dark:text-[#9CA3AF] text-lg leading-relaxed max-w-2xl">
                Need a full-stack web application or an intelligent AI agent? I deliver high-quality, scalable solutions from concept to deployment. Let's turn your ideas into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact">
                  <MagicButton title="Start a Project" icon={<FaCode />} position="right" />
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white dark:bg-[#374151] text-[#1F2937] dark:text-white border-2 border-[#E4E7EB] dark:border-[#4B5563] rounded-xl font-semibold hover:border-[#0066CC] dark:hover:border-[#4A90E2] transition-all duration-300 shadow-lg cursor-pointer"
                  >
                    View GitHub Profile
                  </motion.button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      </PageLayout>
      </>
    );
  };

  export default Projects;
