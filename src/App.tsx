/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import LiquidGlassBackground from './components/LiquidGlassBackground';
import SidebarNav from './components/SidebarNav';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationAndInterestsSection from './components/EducationAndInterestsSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection, { ProjectData } from './components/ProjectsSection';
import ContactModal from './components/ContactModal';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <main
      className="relative min-h-screen text-[#D7E2EA] bg-[#05050A]"
      style={{ overflowX: 'clip' }}
    >
      {/* Fixed Dark Glossy Liquid-Metal / Iridescent Glass Background */}
      <LiquidGlassBackground />

      {/* Collapsible Glassmorphism Navigation Drawer */}
      <SidebarNav />

      {/* Foreground Content */}
      <div className="relative z-10">
        <HeroSection onContactClick={() => setIsContactOpen(true)} />
        {/* 01. About Me */}
        <AboutSection onContactClick={() => setIsContactOpen(true)} />
        {/* 02. Education & 03. Career Interests */}
        <EducationAndInterestsSection />
        {/* 04. Skills & 05. Languages */}
        <ServicesSection />
        {/* 06. Activities & Experience, 07. My Strengths, 08. My Career Goal, 09. Hobbies & Lifestyle, 10. What I Am Looking For, 11. Contact */}
        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
          onContactClick={() => setIsContactOpen(true)}
        />
      </div>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactClick={() => setIsContactOpen(true)}
      />
    </main>
  );
}
