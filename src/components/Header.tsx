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
    <header className="sticky top-0 z-50 w-full transition-all shadow-md">
      {/* Thin Top Utility Bar */}
      <div 
        className="bg-[#005f43] text-white py-2 px-4 text-xs font-semibold flex flex-col sm:flex-row justify-between items-center gap-2 border-b border-[#004732]"
        role="status"
        aria-label="Contact Information and Premium Standard Badge"
      >
        <div className="flex items-center gap-4">
          <a 
            href={`tel:${t.phone}`} 
            className="flex items-center gap-1.5 hover:text-[#00c853] focus:outline-none focus:ring-2 focus:ring-[#00c853] rounded px-1 transition-colors"
            aria-label={`Call G & Bros Services at ${t.phone}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#00c853]" aria-hidden="true" />
            <span>{t.phone}</span>
          </a>
          <span className="hidden sm:inline text-white/40" aria-hidden="true">|</span>
          <a 
            href={`mailto:${t.email}`} 
            className="flex items-center gap-1.5 hover:text-[#00c853] focus:outline-none focus:ring-2 focus:ring-[#00c853] rounded px-1 transition-colors"
            aria-label={`Email G & Bros Services at ${t.email}`}
          >
            <Mail className="w-3.5 h-3.5 text-[#00c853]" aria-hidden="true" />
            <span>{t.email}</span>
          </a>
        </div>
        <div className="text-[10px] uppercase tracking-wider text-[#00c853] font-bold animate-pulse" aria-live="polite">
          {t.badgeText}
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full bg-white/95 backdrop-blur-md border-b border-gray-150">
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
              <div className="p-2.5 bg-[#005f43] text-[#00c853] rounded-xl group-hover:rotate-12 transition-transform duration-300">
                <Sparkles className="w-6 h-6 fill-[#00c853]" aria-hidden="true" />
              </div>
              <div className="text-left">
                <span className="text-xl font-extrabold tracking-tight text-[#005f43] block font-serif">
                  G & Bros
                </span>
                <span className="text-[10px] tracking-widest text-[#00c853] font-extrabold uppercase block -mt-1">
                  Premium Services
                </span>
              </div>
            </div>

            {/* Navigation links with proper a11y focus states */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#1e293b]" aria-label="Primary site navigation">
              {(["services", "estimator", "qa", "contact"] as const).map((item) => (
                <button
                  key={item}
                  onClick={() => onScrollTo(item)}
                  className="hover:text-[#005f43] focus:text-[#005f43] focus:outline-none focus:underline hover:underline transition-colors py-2 relative group"
                  aria-label={`Go to ${t[item]} section`}
                >
                  {t[item]}
                </button>
              ))}
            </nav>

            {/* Language Switcher & Highlighted CTA */}
            <div className="flex items-center gap-4">
              
              {/* Language Button Toggle with aria roles */}
              <button
                onClick={() => setLanguage(language === "english" ? "spanish" : "english")}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border-2 border-[#005f43]/20 hover:border-[#005f43] text-[#005f43] hover:bg-[#005f43]/5 text-xs font-black uppercase tracking-wider transition-all focus:outline-none focus:ring-2 focus:ring-[#005f43]"
                aria-label={language === "english" ? "Switch language to Spanish" : "Cambiar idioma a Inglés"}
                title={language === "english" ? "Switch to Spanish" : "Cambiar a Inglés"}
              >
                <Globe className="w-3.5 h-3.5 text-[#00c853]" aria-hidden="true" />
                <span>{language === "english" ? "ES" : "EN"}</span>
              </button>

              {/* Learn More Highlighted CTA */}
              <Button
                onClick={() => onScrollTo("services")}
                className="bg-[#005f43] hover:bg-[#004732] text-white font-bold px-5 py-2.5 rounded-xl shadow-md transition-all text-sm hover:translate-y-[-1px] focus:ring-2 focus:ring-offset-2 focus:ring-[#005f43]"
                aria-label="Learn more about our services"
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