"use client";

import React from "react";
import { CheckCircle, ShieldCheck, Award, Heart, HelpCircle, Key } from "lucide-react";
import { LOCALIZATION } from "@/utils/localization";

interface TrustBadgesProps {
  language: "english" | "spanish";
}

export const TrustBadges: React.FC<TrustBadgesProps> = ({ language }) => {
  const t = LOCALIZATION[language].badges;

  const BADGE_ICONS = [
    <CheckCircle key="check" className="w-5 h-5" />,
    <ShieldCheck key="shield" className="w-5 h-5" />,
    <Award key="award" className="w-5 h-5" />,
    <Heart key="heart" className="w-5 h-5" />,
    <HelpCircle key="help" className="w-5 h-5" />,
    <Key key="key" className="w-5 h-5" />
  ];

  return (
    <section className="bg-white py-20 border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-extrabold tracking-[0.25em] text-[#00c853] uppercase block mb-3">
            {t.subHeader}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-serif text-[#005f43]">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-[#00c853] mx-auto mt-6 rounded-full" />
        </div>

        {/* 6 Circular Badge Icons with High Contrast */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center">
          {t.items.map((badgeName, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-5 bg-[#FBF9F6] border border-slate-200/60 rounded-2xl hover:border-[#005f43]/40 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-full bg-[#005f43] text-[#00c853] flex items-center justify-center mb-4 shadow-sm">
                {BADGE_ICONS[idx]}
              </div>
              <p className="text-xs font-bold text-slate-800 uppercase tracking-wide leading-tight min-h-[36px] flex items-center justify-center">
                {badgeName}
              </p>
              <span className="text-[9px] font-black text-[#004732] bg-[#00c853]/15 px-2.5 py-1 rounded-full uppercase tracking-wider mt-3">
                {language === "english" ? "Accredited" : "Acreditado"}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};