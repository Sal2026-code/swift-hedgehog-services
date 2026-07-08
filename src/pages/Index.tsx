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
      <Header onScrollTo={handleScrollTo} />

      {/* Hero Banner Area */}
      <Hero 
        onEstimateClick={() => handleScrollTo("contact")} 
        onCallClick={() => {
          window.location.href = "tel:1234567890";
        }} 
      />

      {/* Structured Services Grid */}
      <Services onSelectService={handleSelectService} />

      {/* Trust checklist points */}
      <WhyChooseUs />

      {/* Interactive Before & After sliders/gallery */}
      <Gallery />

      {/* Corporate Story Details */}
      <AboutUs />

      {/* Customer testimonials and reviews submission */}
      <Testimonials />

      {/* High-Fidelity contact options and Quote forms */}
      <ContactSection prefilledService={selectedService} />

      {/* Footer layout */}
      <Footer onScrollTo={handleScrollTo} />

    </div>
  );
};

export default Index;