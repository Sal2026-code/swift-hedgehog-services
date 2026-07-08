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
      insurance: "Fully Insured • 20+ Years of Experience",
      scrollUp: "Scroll Up",
      disclaimer: "Language Support Disclaimer: We currently offer support and cleaning services in English and Spanish only."
    },
    spanish: {
      insurance: "Totalmente Asegurado • Más de 20 Años de Experiencia",
      scrollUp: "Volver Arriba",
      disclaimer: "Aviso de Soporte de Idiomas: Actualmente ofrecemos soporte y servicios de limpieza únicamente en inglés y español."
    }
  };

  const t = content[language];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Foot top info grid */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          {/* Corporate logo details */}
          <div className="flex items-center space-x-3 cursor-pointer text-left" onClick={() => onScrollTo("hero")}>
            <div className="p-2.5 bg-gradient-to-br from-teal-400 to-emerald-600 rounded-xl text-slate-950">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-black tracking-wider text-white">
                G and Bros
              </span>
              <p className="text-[9px] tracking-widest text-teal-400 uppercase font-semibold">
                Services LLC
              </p>
            </div>
          </div>

          {/* Insured Note */}
          <div className="text-sm font-semibold text-slate-300">
            {t.insurance}
          </div>

          {/* Back to top button */}
          <button
            onClick={() => onScrollTo("hero")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-850 hover:border-teal-500/40 text-teal-400 hover:text-teal-300 transition-all text-xs"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>{t.scrollUp}</span>
          </button>
        </div>

        {/* Dynamic Language Support Disclaimer at the bottom of the page */}
        <div className="mb-6 bg-slate-900/40 border border-slate-800 rounded-xl p-3 max-w-2xl mx-auto text-center">
          <p className="text-[10px] tracking-wide font-light text-slate-500">
            {t.disclaimer}
          </p>
        </div>

        {/* Rights Row */}
        <div className="border-t border-slate-900 pt-8 text-center text-xs font-light">
          <p>© 2026 G and Bros Services LLC. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};