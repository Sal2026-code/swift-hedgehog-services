"use client";

import React from "react";
import { Award, ShieldCheck, HeartHandshake, Clock } from "lucide-react";
import { LOCALIZATION } from "@/utils/localization";

interface WhyChooseUsProps {
  language: "english" | "spanish";
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ language }) => {
  const t = LOCALIZATION[language].whyChooseUs;

  const icons = [
    <Award key="award" className="w-6 h-6 text-[#00c853]" />,
    <ShieldCheck key="shield" className="w-6 h-6 text-[#00c853]" />,
    <HeartHandshake key="heart" className="w-6 h-6 text-[#00c853]" />,
    <Clock key="clock" className="w-6 h-6 text-[#00c853]" />,
  ];

  return (
    <section id="why-us" className="py-20 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-[0.25em] text-[#00c853] uppercase block mb-3">
            {t.subHeader}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-serif text-[#005f43] mb-6">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-[#00c853] mx-auto mb-8 rounded-full" />
          
          <p className="text-slate-700 font-semibold text-lg sm:text-xl leading-relaxed bg-[#FBF9F6] p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm">
            {t.description}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#FBF9F6] border border-slate-200/70 rounded-3xl p-6 hover:bg-white hover:border-[#005f43]/30 hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#005f43] flex items-center justify-center mb-5 shadow-sm">
                  {icons[idx]}
                </div>
                <h3 className="text-lg font-black text-[#005f43] mb-2 font-serif">
                  {feature.title}
                </h3>
                <p className="text-slate-600 font-medium text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};