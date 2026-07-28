"use client";

import React from "react";
import { ArrowRight, HelpCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LOCALIZATION } from "@/utils/localization";

interface HeroProps {
  language: "english" | "spanish";
  onScrollTo: (elementId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onScrollTo }) => {
  const t = LOCALIZATION[language]?.hero || LOCALIZATION.english.hero;
  const headlineText = t.headline || "Spotless Cleanliness with G & Bros Services, Zero Compromise.";

  return (
    <section 
      id="hero" 
      className="relative pt-16 pb-24 bg-gradient-to-br from-[#FBF9F6] via-white to-[#FBF9F6] border-b border-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header Badge */}
        <div className="flex justify-center mb-6 opacity-0 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-[#00c853]/10 border border-[#00c853]/30 px-5 py-2 rounded-full text-xs font-extrabold text-[#005f43] tracking-wider uppercase">
            <CheckCircle className="w-4 h-4 text-[#00c853]" />
            <span>{t.badgeText}</span>
          </div>
        </div>

        {/* Heading & CTAs - Expanded for Wide Display */}
        <div className="space-y-8 max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-wide text-slate-800 font-serif leading-tight sm:leading-none opacity-0 animate-fade-in-up delay-100">
            {headlineText.split("G & Bros Services").map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span className="text-[#005f43] inline-block px-2">
                    G & Bros Services
                  </span>
                )}
              </React.Fragment>
            ))}
          </h1>

          {/* Action Buttons Below Heading */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center opacity-0 animate-fade-in-up delay-300">
            <Button
              onClick={() => onScrollTo("services")}
              className="bg-[#005f43] hover:bg-[#004732] text-white font-extrabold px-8 py-6 rounded-xl text-base shadow-lg shadow-[#005f43]/10 flex items-center justify-center gap-2 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            >
              <span>{t.viewServices}</span>
              <ArrowRight className="w-5 h-5 text-[#00c853]" />
            </Button>

            <Button
              onClick={() => onScrollTo("qa")}
              variant="outline"
              className="border-2 border-[#005f43] text-[#005f43] hover:bg-[#005f43]/5 font-extrabold px-8 py-6 rounded-xl text-base flex items-center justify-center gap-2 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            >
              <HelpCircle className="w-5 h-5" />
              <span>{t.askQuestion}</span>
            </Button>
          </div>
        </div>

        {/* Bottom Stats Ribbon */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#005f43] text-white rounded-3xl p-6 sm:p-8 shadow-xl opacity-0 animate-fade-in-up delay-500">
          <div className="text-center space-y-1.5 py-2 md:py-0 md:border-r border-white/10 last:border-0 hover:scale-[1.03] transition-transform duration-300">
            <span className="block text-4xl font-serif font-black text-[#00c853]">100%</span>
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-100">{t.trustMetric1}</span>
          </div>
          <div className="text-center space-y-1.5 py-2 md:py-0 md:border-r border-white/10 last:border-0 hover:scale-[1.03] transition-transform duration-300">
            <span className="block text-4xl font-serif font-black text-[#00c853]">4,800+</span>
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-100">{t.trustMetric2}</span>
          </div>
          <div className="text-center space-y-1.5 py-2 md:py-0 last:border-0 hover:scale-[1.03] transition-transform duration-300">
            <span className="block text-4xl font-serif font-black text-[#00c853]">100%</span>
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-100">{t.trustMetric3}</span>
          </div>
        </div>

      </div>
    </section>
  );
};