"use client";

import React, { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ServiceBenefits } from "@/components/services/ServiceBenefits";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import {
  FaReact,
  FaNodeJs,
  FaRobot,
  FaDatabase,
  FaShoppingCart,
  FaBrain,
} from "react-icons/fa";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<"mern" | "ai">("mern");

  const mernServices = [
    {
      title: "Full-Stack Web Applications",
      description: "Complete MERN stack solutions with React, Node.js, Express, and MongoDB",
      features: [
        "Responsive UI with React/Next.js",
        "RESTful API development",
        "Database design & optimization",
        "Authentication & authorization",
      ],
      gradient: "from-[#0066CC] to-[#4A90E2]",
      icon: <FaReact />,
    },
    {
      title: "E-Commerce Platforms",
      description: "Build scalable online stores with payment integration and inventory management",
      features: [
        "Product catalog management",
        "Stripe/PayPal integration",
        "Shopping cart & checkout",
        "Admin dashboard",
      ],
      gradient: "from-[#10B981] to-[#0066CC]",
      icon: <FaShoppingCart />,
    },
    {
      title: "API Development",
      description: "Robust backend APIs with Node.js, Express, and database integration",
      features: [
        "RESTful API design",
        "JWT authentication",
        "Database modeling",
        "API documentation",
      ],
      gradient: "from-[#4A90E2] to-[#10B981]",
      icon: <FaDatabase />,
    },
  ];

  const aiServices = [
    {
      title: "AI Agent Development",
      description: "Custom AI agents using LangChain, OpenAI, and multi-agent systems",
      features: [
        "Autonomous task execution",
        "Decision-making systems",
        "API integrations",
        "Workflow automation",
      ],
      gradient: "from-[#0066CC] to-[#4A90E2]",
      icon: <FaRobot />,
    },
    {
      title: "LinkedIn Automation",
      description: "Intelligent lead generation and outreach automation for LinkedIn",
      features: [
        "Personalized messaging",
        "Lead scraping & enrichment",
        "Campaign management",
        "Analytics & reporting",
      ],
      gradient: "from-[#10B981] to-[#0066CC]",
      icon: <FaBrain />,
    },
    {
      title: "AI Integration",
      description: "Integrate AI capabilities into existing applications",
      features: [
        "GPT-4 integration",
        "Custom AI workflows",
        "Vector databases",
        "RAG implementation",
      ],
      gradient: "from-[#4A90E2] to-[#10B981]",
      icon: <FaNodeJs />,
    },
  ];

  const currentServices = activeCategory === "mern" ? mernServices : aiServices;

  return (
    <PageLayout>
      <ServiceHero
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentServices.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </section>

      <ServiceBenefits />
      <ServiceCTA />
    </PageLayout>
  );
}
