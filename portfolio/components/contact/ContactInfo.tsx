import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

interface ContactInfoItem {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
  color: string;
  gradient: string;
}

export const ContactInfo = () => {
  const contactInfo: ContactInfoItem[] = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "sohaiburrehman65@gmail.com",
      link: "mailto:your.sohaiburrehman65@gmail.com",
      color: "text-[#0066CC]",
      gradient: "from-[#0066CC] to-[#4A90E2]",
    },
    {
      icon: <FaPhone className="scale-x-[-1]"/>,
      title: "Phone",
      value: "+92 337 3336474",
      link: "tel:+923373336474",
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

  return (
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
  );
};
