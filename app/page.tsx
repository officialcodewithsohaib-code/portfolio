"use client";

import React, { useState } from "react";
import { Hero } from "@/components/home/Hero";
import { CompanyOverview } from "@/components/home/CompanyOverview";
import { ServiceLocations } from "@/components/home/ServiceLocations";
import { ImportPartners } from "@/components/home/ImportPartners";
import { CustomerCare } from "@/components/home/CustomerCare";
import { NationalService } from "@/components/home/NationalService";
import { VideoModal } from "@/components/home/VideoModal";
import { PageLayout } from "@/components/layout/PageLayout";

export default function HomePage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Replace with your actual YouTube/Vimeo video embed URL
  const demoVideoUrl = "https://www.youtube.com/embed/8MyFDttUqbM?autoplay=1";

  return (
    <main className="relative min-h-screen bg-[#F8FAFB] dark:bg-gray-950 overflow-hidden">
      {/* Animated Background */}
       <PageLayout> 

      {/* Main Content */}
      <div className="relative z-10">
        <Hero onWatchDemo={() => setIsVideoModalOpen(true)} />
        <CompanyOverview />
        <ServiceLocations />
        <ImportPartners />
        <CustomerCare />
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={demoVideoUrl}
      />
      </PageLayout>
    </main>
  );
}
