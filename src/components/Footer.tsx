"use client";

import React from "react";
import { Sparkles, ArrowUp } from "lucide-react";

interface FooterProps {
  language: "english" | "spanish";
  onScrollTo: (elementId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onScrollTo }) => {
  const content = {
    english: {
      insurance: "Vetted & Fully Insured Standard Liability Protection",
      scrollUp: "Scroll Up",
      desc: "Providing spotless apartment maintenance services for local residents."
    },
    spanish: {
      insurance: "Personal de Limpieza Evaluado y Totalmente Asegurado",
      scrollUp: "Volver Arriba",
      desc: "Brindando servicios de mantenimiento y limpieza impecable para residentes locales."
    }
  };

  const t = content[language];

  return (
    <footer className="bg-[#005f43] text-white/80 border-t border-[#004732] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Foot top info grid */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          {/* Corporate logo details */}
          <div className="flex items-center space-x-3 cursor-pointer text-left" onClick={() => onScrollTo("hero")}>
            <div className="p-2.5 bg-white/10 text-[#00c853] rounded-xl">
              <Sparkles className="w-5 h-5 fill-[#00c853]" />
            </div>
            <div>
              <span className="text-lg font-black tracking-wider text-white">
                G & Bros
              </span>
              <p className="text-[9px] tracking-widest text-[#00c853] uppercase font-semibold">
                Premium Services Inc.
              </p>
            </div>
          </div>

          {/* Vetted & Insured Badge info */}
          <div className="text-xs font-semibold text-slate-200">
            {t.insurance}
          </div>

          {/* Back to top button */}
          <button
            onClick={() => onScrollTo("hero")}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 hover:border-[#00c853] text-[#00c853] hover:text-white transition-all text-xs font-bold"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>{t.scrollUp}</span>
          </button>
        </div>

        {/* Dynamic Corporate description disclaimer */}
        <div className="mb-6 bg-white/5 border border-white/10 rounded-xl p-4 max-w-2xl mx-auto text-center">
          <p className="text-[10px] tracking-wide font-medium text-slate-200/70">
            {t.desc}
          </p>
        </div>

        {/* Rights Row */}
        <div className="border-t border-white/10 pt-8 text-center text-xs font-medium text-slate-300">
          <p>© 2026 G & Bros Premium Services Inc. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};