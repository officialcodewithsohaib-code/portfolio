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