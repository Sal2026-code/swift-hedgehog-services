"use client";

import React from "react";
import { Check, Sparkles } from "lucide-react";
import { LOCALIZATION } from "@/utils/localization";

interface AddonsProps {
  language: "english" | "spanish";
}

export const Addons: React.FC<AddonsProps> = ({ language }) => {
  const t = LOCALIZATION[language]?.addons || LOCALIZATION.english.addons;

  return (
    <section id="addons" className="py-20 bg-gradient-to-b from-white to-[#FBF9F6] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#00c853]/10 border border-[#00c853]/30 px-4 py-1.5 rounded-full text-xs font-extrabold text-[#005f43]">
            <Sparkles className="w-4 h-4 text-[#00c853]" />
            <span>{t.subHeader}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800 font-serif">
            {t.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#005f43]/40 transition-all duration-300 flex items-center gap-4 text-left group"
            >
              <div className="p-2.5 bg-[#00c853]/10 text-[#005f43] rounded-xl group-hover:bg-[#005f43] group-hover:text-white transition-colors duration-300">
                <Check className="w-5 h-5 stroke-[3]" />
              </div>
              <div className="flex-1">
                <h3 className="font-extrabold text-slate-800 text-sm group-hover:text-[#005f43] transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};