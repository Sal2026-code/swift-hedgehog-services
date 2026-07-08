"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Estimator } from "@/components/Estimator";
import { AboutUs } from "@/components/AboutUs";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { showSuccess } from "@/utils/toast";

const Index = () => {
  const [language, setLanguage] = useState<"english" | "spanish">("english");
  const [selectedService, setSelectedService] = useState<string>("");
  const [estimateDetails, setEstimateDetails] = useState<string>("");

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

  const handleApplyEstimate = (details: string) => {
    setEstimateDetails(details);
    const msg = language === "english"
      ? "Estimate parameters applied! Please fill in your name and submit the quote form below."
      : "¡Parámetros de estimación aplicados! Complete su nombre y envíe el formulario de cotización abajo.";
    showSuccess(msg);
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
        onEstimateClick={() => handleScrollTo("estimator")} 
        onCallClick={() => {
          window.location.href = "tel:8134567890";
        }} 
      />

      {/* Structured Services Grid */}
      <Services 
        language={language}
        onSelectService={handleSelectService} 
      />

      {/* Trust checklist points */}
      <WhyChooseUs language={language} />

      {/* Interactive live pricing estimator */}
      <Estimator 
        language={language} 
        onApplyEstimate={handleApplyEstimate}
      />

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