"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { AboutUs } from "@/components/AboutUs";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [language, setLanguage] = useState<"en" | "es">("en");
  const [selectedService, setSelectedService] = useState<string>("");

  const handleScrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    handleScrollTo("contact");
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-teal-400 selection:text-slate-950 text-slate-100">
      
      {/* Navigation Header */}
      <Header 
        language={language} 
        setLanguage={setLanguage} 
        onScrollTo={handleScrollTo} 
      />

      {/* Hero Banner Area */}
      <Hero 
        language={language}
        onEstimateClick={() => handleScrollTo("contact")} 
        onCallClick={() => {
          window.location.href = "tel:1234567890";
        }} 
      />

      {/* Structured Services Grid */}
      <Services 
        language={language}
        onSelectService={handleSelectService} 
      />

      {/* Trust checklist points */}
      <WhyChooseUs language={language} />

      {/* Interactive Before & After sliders/gallery */}
      <Gallery language={language} />

      {/* Corporate Story Details */}
      <AboutUs language={language} />

      {/* Customer testimonials and reviews submission */}
      <Testimonials language={language} />

      {/* High-Fidelity contact options and Quote forms */}
      <ContactSection 
        language={language}
        prefilledService={selectedService} 
      />

      {/* Footer layout */}
      <Footer 
        language={language}
        onScrollTo={handleScrollTo} 
      />

    </div>
  );
};

export default Index;