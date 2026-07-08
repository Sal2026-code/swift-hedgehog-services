"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ApartmentFilter } from "@/components/ApartmentFilter";
import { Amenities } from "@/components/Amenities";
import { InvestmentCalculator } from "@/components/InvestmentCalculator";
import { BrochureViewer } from "@/components/BrochureViewer";
import { InquiryForm } from "@/components/InquiryForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [prefilledModel, setPrefilledModel] = useState<string>("");

  const handleScrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectApartment = (modelName: string) => {
    setPrefilledModel(modelName);
    handleScrollTo("contact");
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-amber-500 selection:text-slate-950 text-slate-100">
      
      {/* Premium Navigation Header */}
      <Header
        language={language}
        setLanguage={setLanguage}
        onScrollTo={handleScrollTo}
      />

      {/* Cinematic Cover Banner Hero */}
      <Hero
        language={language}
        onExplore={() => handleScrollTo("models")}
      />

      {/* Interactive Apartment Model Filter & Viewers */}
      <ApartmentFilter
        language={language}
        onSelectApartment={handleSelectApartment}
      />

      {/* Ultra-Premium Shared Amenities showcase */}
      <Amenities
        language={language}
      />

      {/* Interactive ROI / Mortgage calculator */}
      <InvestmentCalculator
        language={language}
      />

      {/* Presentation slide-deck & brochure */}
      <BrochureViewer
        language={language}
      />

      {/* High-Fidelity Booking Slot Scheduling Form */}
      <InquiryForm
        language={language}
        prefilledModel={prefilledModel}
      />

      {/* Structured elegant Footer layout */}
      <Footer
        language={language}
        onScrollTo={handleScrollTo}
      />

    </div>
  );
};

export default Index;