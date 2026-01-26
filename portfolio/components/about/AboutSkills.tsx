"use client";

import React from "react";
import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiPython, SiDocker, SiOpenai } from "react-icons/si";
import { FaBrain, FaDatabase, FaCode } from "react-icons/fa";

export const AboutSkills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode className="text-3xl" />,
      skills: [
        { name: "React", icon: <SiReact />, level: 95 },
        { name: "Next.js", icon: <SiNextdotjs />, level: 90 },
        { name: "TypeScript", icon: <FaCode />, level: 85 },
      ],
      gradient: "from-[#0066CC] to-[#4A90E2]",
    },
    {
      title: "Backend Development",
      icon: <FaDatabase className="text-3xl" />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, level: 90 },
        { name: "MongoDB", icon: <SiMongodb />, level: 85 },
        { name: "Python", icon: <SiPython />, level: 80 },
      ],
      gradient: "from-[#10B981] to-[#0066CC]",
    },
    {
      title: "AI & DevOps",
      icon: <FaBrain className="text-3xl" />,
      skills: [
        { name: "OpenAI", icon: <SiOpenai />, level: 88 },
        { name: "LangChain", icon: <FaBrain />, level: 85 },
        { name: "Docker", icon: <SiDocker />, level: 75 },
      ],
      gradient: "from-[#F59E0B] to-[#10B981]",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-[#1F2937]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] dark:text-white mb-4">
            Technical <span className="text-[#0066CC] dark:text-[#4A90E2]">Expertise</span>
          </h2>
          <p className="text-lg text-[#4B5563] dark:text-[#9CA3AF]">
            Technologies and tools I work with daily
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              className="group"
            >
              {/* Category Card */}
              <div className="relative bg-[#F8FAFB] dark:bg-gray-950 rounded-2xl p-6 border border-[#E4E7EB] dark:border-[#4B5563] h-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 bg-gradient-to-br ${category.gradient} rounded-xl text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2937] dark:text-white">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + skillIndex * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="cursor-pointer"
                    >
                      {/* Skill Name */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xl text-[#0066CC]">{skill.icon}</span>
                          <span className="font-medium text-[#4B5563] dark:text-[#9CA3AF]">{skill.name}</span>
                        </div>
                        <span className="text-sm font-semibold text-[#0066CC]">{skill.level}%</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2 bg-[#E4E7EB] dark:bg-[#4B5563] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.1 + 0.3 }}
                          className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
