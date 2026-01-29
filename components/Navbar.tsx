"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import { IoClose } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { ThemeToggle } from "./ui/ThemeToggle";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/95 dark:bg-[#1F2937]/95 backdrop-blur-lg shadow-xl border-b border-[#E4E7EB] dark:border-[#4B5563]"
            : "bg-white/80 dark:bg-[#1F2937]/80 backdrop-blur-md"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex flex-col cursor-pointer"
              >
                <span className="text-2xl md:text-3xl font-bold text-[#0066CC] dark:text-[#4A90E2]">
                  Official.CodeWithSohaib
                </span>
                <span className="text-[10px] md:text-xs text-[#4B5563] dark:text-[#9CA3AF] tracking-[0.2em] uppercase">
                  MERN Stack Developer & Learning Agentic AI  
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link, index) => (
                <Link key={link.path} href={link.path}>
                  <motion.div
                    className="relative px-5 py-2.5 rounded-lg"
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                  >
                    {/* Hover Background */}
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.div
                          layoutId="navbar-hover"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 bg-[#F5F7FA] dark:bg-[#374151] rounded-lg"
                        />
                      )}
                    </AnimatePresence>

                    {/* Link Text */}
                    <span
                      className={cn(
                        "relative z-10 text-sm font-medium transition-colors duration-300",
                        pathname === link.path
                          ? "text-[#0066CC] dark:text-[#4A90E2] font-semibold"
                          : "text-[#4B5563] dark:text-[#D1D5DB] hover:text-[#0066CC] dark:hover:text-[#4A90E2]"
                      )}
                    >
                      {link.name}
                    </span>

                    {/* Active Indicator */}
                    {pathname === link.path && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-1 rounded-full"
                        style={{
                          background: "linear-gradient(90deg, #0066CC 0%, #4A90E2 100%)",
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 30 
                        }}
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              <ThemeToggle />

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-lg text-[#4B5563] dark:text-[#D1D5DB] hover:bg-[#F5F7FA] dark:hover:bg-[#374151] transition-colors"
              >
                {mobileMenuOpen ? (
                  <IoClose className="w-6 h-6" />
                ) : (
                  <HiMenuAlt3 className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[#1F2937]/70 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                type: "spring", 
                damping: 30, 
                stiffness: 300 
              }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white dark:bg-[#1F2937] shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Mobile Header */}
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#E4E7EB] dark:border-[#4B5563]">
                  <div>
                    <span className="text-xl font-bold text-[#0066CC] dark:text-[#4A90E2] block">
                      Official.CodeWithSohaib
                    </span>
                    <span className="text-xs text-[#4B5563] dark:text-[#9CA3AF] tracking-wider">
                      MENU
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-[#F5F7FA] dark:hover:bg-[#374151]"
                  >
                    <IoClose className="w-6 h-6 text-[#4B5563] dark:text-[#D1D5DB]" />
                  </motion.button>
                </div>

                {/* Mobile Links */}
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <Link key={link.path} href={link.path}>
                      <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.08 }}
                        onClick={handleLinkClick}
                        className={cn(
                          "block px-5 py-4 rounded-xl font-medium transition-all duration-300",
                          pathname === link.path
                            ? "bg-gradient-to-r from-[#0066CC] to-[#4A90E2] text-white shadow-lg"
                            : "text-[#4B5563] dark:text-[#D1D5DB] hover:bg-[#F5F7FA] dark:hover:bg-[#374151]"
                        )}
                      >
                        {link.name}
                      </motion.div>
                    </Link>
                  ))}
                </div>

                {/* Mobile Footer */}
                <div className="mt-8 pt-6 border-t border-[#E4E7EB] dark:border-[#4B5563]">
                  <p className="text-xs text-center text-[#4B5563] dark:text-[#9CA3AF] leading-relaxed">
                    Leading Provider of Premium<br />
                    Chemical & Industrial Solutions
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </>
  );
};

export default Navbar;
