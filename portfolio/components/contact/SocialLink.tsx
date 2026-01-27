import React from "react";
import { motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/CardSpotlight";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

interface SocialLinkItem {
  icon: React.ReactNode;
  name: string;
  url: string;
  color: string;
  bgColor: string;
}

export const SocialLink = () => {
  const socialLinks: SocialLinkItem[] = [
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

  return (
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
  );
};
