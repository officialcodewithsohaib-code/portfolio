"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import { IoClose } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Chairman's Ambition", path: "/chairmans-ambition" },
    { name: "Company Details", path: "/company-details" },
    { name: "Universe LED", path: "/universe-led" },
    { name: "Contact", path: "/contact" },
  ];

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo with Blue Gradient */}
            <Link
              href="/"
              className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] to-[#4A90E2] hover:opacity-80 transition-opacity"
            >
              AL-IBRAHIM GROUP
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    pathname === link.path
                      ? "bg-[#0066CC] text-white shadow-md"
                      : "text-[#4B5563] hover:bg-[#F5F7FA] hover:text-[#0066CC]"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#1F2937] hover:bg-[#F5F7FA] transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <IoClose className="w-6 h-6" />
              ) : (
                <HiMenuAlt3 className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-72 bg-white border-l border-gray-200 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gradient-to-r from-[#F8FAFB] to-white">
            <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] to-[#4A90E2]">
              Menu
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-[#1F2937] hover:bg-[#F5F7FA] transition-colors"
              aria-label="Close mobile menu"
            >
              <IoClose className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col p-4 space-y-2 overflow-y-auto bg-gradient-to-b from-white to-[#F8FAFB]">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={handleLinkClick}
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                  pathname === link.path
                    ? "bg-[#0066CC] text-white shadow-md"
                    : "text-[#4B5563] hover:bg-[#F5F7FA] hover:text-[#0066CC] border border-transparent hover:border-[#E4E7EB]"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Footer - Optional Company Info */}
          <div className="mt-auto p-4 border-t border-gray-200 bg-[#F8FAFB]">
            <p className="text-xs text-[#4B5563] text-center">
              Chemical & Industrial Solutions
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
