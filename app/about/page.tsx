// import AmbitionHero from "@/components/chairmans-ambition/AmbitionHero";
// import CompanyIntro from "@/components/chairmans-ambition/CompanyIntro";
// import ChairmanMessage from "@/components/chairmans-ambition/ChairmanMessage";
// import EducationSection from "@/components/chairmans-ambition/EducationSection";
// import GratitudeSection from "@/components/chairmans-ambition/GratitudeSection";
// import SignatureSection from "@/components/chairmans-ambition/SignatureSection";

// export default function ChairmansAmbition() {
//   return (
//     <main className="relative bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 mt-16">
//       <div className="max-w-7xl w-full">
//         <AmbitionHero />
//         <CompanyIntro />
//         <ChairmanMessage />
//         <EducationSection />
//         <GratitudeSection />
//         <SignatureSection />
//       </div>
//     </main>
//   );
// }
"use client";

import React from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutSkills } from "@/components/about/AboutSkills";
import { AboutValues } from "@/components/about/AboutValues";

const AboutPage = () => {
  return (
    <PageLayout>
      <AboutHero />
      <AboutStory />
      <AboutSkills />
      <AboutValues />
    </PageLayout>
  );
}
export default AboutPage;