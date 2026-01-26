"use client";

import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";

const AmbitionHero = () => {
  return (
    <section className="relative h-[50vh] md:h-[60vh] w-full flex items-center justify-center overflow-hidden">
      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="#0066CC"
      />
      <Spotlight
        className="top-10 left-full h-[80vh] w-[50vw]"
        fill="#4A90E2"
      />
      
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFB] via-white to-[#E4E7EB]" />
      
      {/* Animated Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#0066CC]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-[#4A90E2]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-[#10B981]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <TextGenerateEffect
          words="Chairman's Ambition"
          className="text-4xl md:text-6xl font-bold text-[#1F2937] mb-4"
        />
        <p className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto">
          Ibrahim Chemicals & Universe LED Group
        </p>
        <div className="mt-6 h-1 w-24 bg-gradient-to-r from-[#0066CC] to-[#4A90E2] mx-auto rounded-full" />
      </div>
    </section>
  );
};

export default AmbitionHero;
