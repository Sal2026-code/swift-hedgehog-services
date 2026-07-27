"use client";

import React from "react";
import { Check } from "lucide-react";
import { LOCALIZATION } from "@/utils/localization";

interface ServicesProps {
  language: "english" | "spanish";
  onScrollTo?: (elementId: string) => void;
  setCleaningTier?: (tier: "standard" | "deep" | "move") => void;
}

export const Services: React.FC<ServicesProps> = ({ language }) => {
  const t = LOCALIZATION[language].services;

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden" aria-label="Our Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-serif text-[#005f43]">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-[#00c853] mx-auto mt-6 rounded-full" />
        </div>

        {/* 3 Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.cards.map((card, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col justify-between bg-white rounded-3xl border-2 border-slate-100 p-6 sm:p-8 shadow-sm hover:shadow-2xl hover:scale-[1.03] active:scale-[0.99] transition-all duration-300 relative"
              >
                <div className="text-left space-y-4">
                  
                  {/* Service Tier Details */}
                  <h3 className="text-xl font-serif font-black text-[#005f43] leading-tight mt-2">
                    {card.title}
                  </h3>

                  <div className="w-12 h-1 bg-[#00c853] rounded-full" />

                  {/* Description Paragraph */}
                  {"description" in card && card.description && (
                    <p className="text-slate-700 font-semibold text-sm leading-relaxed pt-1">
                      {card.description}
                    </p>
                  )}

                  {/* Checklist Items */}
                  {card.bullets && card.bullets.length > 0 && (
                    <ul className="space-y-4 pt-2" aria-label={`${card.title} tasks checklist`}>
                      {card.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-sm hover:translate-x-1 transition-transform duration-200">
                          <div className="p-1 bg-[#005f43]/10 text-[#005f43] rounded-full mt-0.5 border border-[#005f43]/20" aria-hidden="true">
                            <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                          </div>
                          <span className="text-slate-700 font-semibold leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};