"use client";

import React from "react";
import { Sparkles, Phone, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LOCALIZATION } from "@/utils/localization";

interface HeaderProps {
  language: "english" | "spanish";
  setLanguage: (lang: "english" | "spanish") => void;
  onScrollTo: (elementId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ language, setLanguage, onScrollTo }) => {
  const t = LOCALIZATION[language].header;

  const handleKeyPress = (e: React.KeyboardEvent, sectionId: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onScrollTo(sectionId);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg transition-all">
      {/* Top Info Strip with High Contrast Text */}
      <div 
        className="bg-[#004732] text-white py-2.5 px-4 text-xs font-bold flex flex-col sm:flex-row justify-between items-center gap-2 border-b border-[#003324]"
        role="status"
        aria-label="Contact Information"
      >
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-emerald-100">
          <span className="flex items-center gap-2 hover:text-white transition-colors duration-200">
            <Phone className="w-4 h-4 text-[#00c853]" />
            <span className="font-mono tracking-wide">{t.phoneText.replace("Phone: ", "").replace("Teléfono: ", "")}</span>
          </span>
          <span className="hidden sm:inline text-emerald-800">|</span>
          <span className="flex items-center gap-2 hover:text-white transition-colors duration-200">
            <Mail className="w-4 h-4 text-[#00c853]" />
            <span>contacto@gbrosservices.com</span>
          </span>
        </div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-white bg-[#00c853]/20 px-3 py-1 rounded-full font-black border border-[#00c853]/30">
          {language === "english" ? "✨ G & Bros Premium Standard ✨" : "✨ Estándar Premium G & Bros ✨"}
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Brand */}
            <div 
              role="button"
              tabIndex={0}
              onClick={() => onScrollTo("hero")}
              onKeyDown={(e) => handleKeyPress(e, "hero")}
              className="flex items-center gap-3 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#005f43] rounded-2xl p-1.5 transition-all"
              aria-label="G & Bros Premium Services Logo, scroll to top"
            >
              <div className="p-2.5 bg-[#005f43] text-white rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md shadow-[#005f43]/10">
                <Sparkles className="w-6 h-6 fill-[#00c853] text-[#00c853]" />
              </div>
              <div className="text-left">
                <span className="text-xl font-black tracking-tight text-[#005f43] block font-serif leading-none">
                  G & Bros
                </span>
                <span className="text-[9px] tracking-[0.2em] text-[#00c853] font-black uppercase block mt-1.5">
                  Premium Services
                </span>
              </div>
            </div>

            {/* Navigation links with proper accessibility focus styling */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-700" aria-label="Main Navigation">
              {(["services", "estimator", "qa", "contact"] as const).map((item) => (
                <button
                  key={item}
                  onClick={() => onScrollTo(item)}
                  className="hover:text-[#005f43] focus:text-[#005f43] focus:outline-none transition-colors py-2 relative group font-sans tracking-wide"
                  aria-label={`Scroll to ${t[item]}`}
                >
                  {t[item]}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00c853] transition-all group-hover:w-full group-focus:w-full" />
                </button>
              ))}
            </nav>

            {/* Language Switcher & Highlighted CTA */}
            <div className="flex items-center gap-3">
              
              {/* Language Switcher toggle ES / EN */}
              <button
                onClick={() => setLanguage(language === "english" ? "spanish" : "english")}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 hover:border-[#005f43] text-[#005f43] hover:bg-[#FBF9F6] text-xs font-black tracking-wider transition-all focus:outline-none focus:ring-2 focus:ring-[#005f43]"
                aria-label="Toggle language"
              >
                <Globe className="w-4 h-4 text-[#00c853]" />
                <span className="font-mono">{language === "english" ? "ES" : "EN"}</span>
              </button>

              {/* Learn More primary highlighted CTA */}
              <Button
                onClick={() => onScrollTo("services")}
                className="bg-[#005f43] hover:bg-[#004732] text-white font-extrabold px-5 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm focus:ring-2 focus:ring-[#00c853]"
              >
                {t.learnMore}
              </Button>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};