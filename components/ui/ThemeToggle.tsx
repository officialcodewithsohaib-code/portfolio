"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse" />
    );
  }

  return (
    <motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
  className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#0066CC] to-[#4A90E2] dark:from-[#4A90E2] dark:to-[#10B981] p-[2px] overflow-hidden group cursor-pointer"
  aria-label="Toggle theme"
>
  {/* Hover Glow Effect */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#0066CC] to-[#10B981] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
  
  {/* Inner Circle */}
  <div className="relative w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
    {theme === "dark" ? (
      <FiSun className="w-5 h-5 text-[#F59E0B]" />  
    ) : (
      <FiMoon className="w-5 h-5 text-[#0066CC]" />
    )}
  </div>
</motion.button>

  );
}
