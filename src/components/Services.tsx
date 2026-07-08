"use client";

import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LOCALIZATION } from "@/utils/localization";

interface ServicesProps {
  language: "english" | "spanish";
  onScrollTo: (elementId: string) => void;
  setCleaningTier: (tier: "standard" | "deep" | "move") => void;
}

export const Services: React.FC<ServicesProps> = ({ language, onScrollTo, setCleaningTier }) => {
  const t = LOCALIZATION[language].services;

  const handleSelectService = (tier: "standard" | "deep" | "move") => {
    setCleaningTier(tier);
    onScrollTo("estimator");
  };

  return (
    <section id="services" className="py-20 bg-white relative" aria-label="Our Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[#00c853] uppercase block mb-3">
            {t.subHeader}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif text-[#005f43]">
            {t.title}
          </h2>
          <div className="w-16 h-1 bg-[#00c853] mx-auto mt-6 rounded-full" />
        </div>

        {/* 3 Tier Cards Grid: Flat style with ultra-subtle borders and crisp white background */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.cards.map((card, idx) => {
            const isPopular = card.id === "deep";
            return (
              <div
                key={idx}
                className={`flex flex-col justify-between bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all relative ${isPopular ? "ring-2 ring-[#00c853]" : ""}`}
              >
                
                {/* Popular Floating Badge Accent */}
                {isPopular && (
                  <span className="absolute -top-3 left-6 bg-[#00c853] text-[#005f43] text-[10px] uppercase font-black px-3 py-1 rounded-full tracking-wider shadow-sm">
                    {language === "english" ? "Popular" : "Popular"}
                  </span>
                )}

                <div className="text-left space-y-4">
                  
                  {/* Service Tier Details */}
                  <h3 className="text-xl font-serif font-black text-[#005f43] leading-tight mt-2">
                    {card.title}
                  </h3>

                  <div className="w-12 h-0.5 bg-[#00c853] rounded-full" />

                  {/* Checklist Items */}
                  <ul className="space-y-3.5 pt-2" aria-label={`${card.title} tasks checklist`}>
                    {card.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-sm">
                        <div className="p-1 bg-[#005f43]/5 text-[#00c853] rounded-full mt-0.5" aria-hidden="true">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-slate-700 font-medium leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                <div className="pt-8 text-left space-y-4">
                  {/* Bottom Gray Accent Label Tag */}
                  <div className="bg-[#FBF9F6] border border-gray-150 text-[11px] font-bold text-slate-500 py-2 px-3.5 rounded-xl text-center">
                    {card.bottomAccent}
                  </div>

                  {/* Pricing estimating selector button trigger */}
                  <Button
                    onClick={() => handleSelectService(card.id)}
                    className={`w-full font-bold py-3 rounded-xl shadow-sm transition-all focus:ring-2 focus:ring-[#005f43] ${isPopular ? "bg-[#005f43] hover:bg-[#004732] text-white" : "bg-white hover:bg-[#005f43]/5 text-[#005f43] border border-gray-200"}`}
                  >
                    {t.btn}
                  </Button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};