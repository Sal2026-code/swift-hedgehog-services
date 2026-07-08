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
    <header className="sticky top-0 z-50 w-full shadow-md transition-all">
      {/* Top Info Strip */}
      <div 
        className="bg-[#005f43] text-white py-2 px-4 text-xs font-semibold flex flex-col sm:flex-row justify-between items-center gap-2 border-b border-[#004732]"
        role="status"
        aria-label="Contact Information"
      >
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
          <span className="flex items-center gap-1.5 hover:text-[#00c853] transition-colors">
            <Phone className="w-3.5 h-3.5 text-[#00c853]" />
            <span>{t.phoneText}</span>
          </span>
          <span className="hidden sm:inline text-white/30">|</span>
          <span className="flex items-center gap-1.5 hover:text-[#00c853] transition-colors">
            <Mail className="w-3.5 h-3.5 text-[#00c853]" />
            <span>{t.emailText}</span>
          </span>
        </div>
        <div className="text-[10px] uppercase tracking-wider text-[#00c853] font-black">
          {language === "english" ? "✨ G & Bros Premium Standard ✨" : "✨ Estándar Premium G & Bros ✨"}
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Brand / Fallback safe SVG wrapper */}
            <div 
              role="button"
              tabIndex={0}
              onClick={() => onScrollTo("hero")}
              onKeyDown={(e) => handleKeyPress(e, "hero")}
              className="flex items-center gap-2.5 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#005f43] rounded-xl p-1"
              aria-label="G & Bros Premium Services Logo, scroll to top"
            >
              <div className="p-2 bg-[#005f43] text-[#00c853] rounded-xl group-hover:rotate-12 transition-transform duration-300">
                <Sparkles className="w-6 h-6 fill-[#00c853]" />
              </div>
              <div className="text-left">
                <span className="text-lg font-black tracking-tight text-[#005f43] block font-serif leading-none">
                  G & Bros
                </span>
                <span className="text-[9px] tracking-widest text-[#00c853] font-black uppercase block mt-1">
                  Premium Services
                </span>
              </div>
            </div>

            {/* Navigation links with proper keyboard support */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-[#1e293b]" aria-label="Main Navigation">
              {(["services", "estimator", "qa", "contact"] as const).map((item) => (
                <button
                  key={item}
                  onClick={() => onScrollTo(item)}
                  className="hover:text-[#005f43] focus:text-[#005f43] focus:outline-none hover:underline focus:underline transition-colors py-2 relative group"
                  aria-label={`Scroll to ${t[item]}`}
                >
                  {t[item]}
                </button>
              ))}
            </nav>

            {/* Language Switcher & Highlighted CTA */}
            <div className="flex items-center gap-4">
              
              {/* Language Switcher pill toggle button ES / EN */}
              <button
                onClick={() => setLanguage(language === "english" ? "spanish" : "english")}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full border-2 border-[#005f43]/20 hover:border-[#005f43] text-[#005f43] hover:bg-[#005f43]/5 text-xs font-black tracking-wider transition-all focus:outline-none focus:ring-2 focus:ring-[#005f43]"
                aria-label="Toggle language"
              >
                <Globe className="w-3.5 h-3.5 text-[#00c853]" />
                <span>{language === "english" ? "ES | EN" : "EN | ES"}</span>
              </button>

              {/* Learn More primary highlighted CTA */}
              <Button
                onClick={() => onScrollTo("services")}
                className="bg-[#005f43] hover:bg-[#004732] text-white font-bold px-5 py-2 rounded-xl shadow-md transition-all text-sm hover:translate-y-[-1px] focus:ring-2 focus:ring-[#005f43]"
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