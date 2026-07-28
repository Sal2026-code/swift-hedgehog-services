"use client";

import React, { useState, useEffect, useRef } from "react";
import { Phone, Mail, Globe, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LOCALIZATION } from "@/utils/localization";
import { getFullEmail, CONTACT_INFO } from "@/utils/security";

interface HeaderProps {
  language: "english" | "spanish";
  setLanguage: (lang: "english" | "spanish") => void;
  onScrollTo: (elementId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ language, setLanguage, onScrollTo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrolled = useRef(false);

  const t = LOCALIZATION[language].header;

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      // Hysteresis: only toggle when crossing clear thresholds
      if (!lastScrolled.current && current > 180) {
        setIsScrolled(true);
        lastScrolled.current = true;
      } else if (lastScrolled.current && current < 40) {
        setIsScrolled(false);
        lastScrolled.current = false;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent, sectionId: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onScrollTo(sectionId);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg transition-all duration-300">
      {/* Top Banner Bar */}
      <div
        className={`bg-[#004732] text-white px-4 font-bold flex flex-col sm:flex-row justify-between items-center gap-2 border-b border-[#003324] transition-all duration-300 ease-in-out overflow-hidden ${
          isScrolled ? "max-h-0 py-0 opacity-0 pointer-events-none border-0" : "max-h-24 py-2.5 opacity-100 text-xs"
        }`}
        role="status"
        aria-label="Contact Information"
      >
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-emerald-100">
          <a href={`tel:${CONTACT_INFO.phone.raw}`} className="flex items-center gap-2 hover:text-white transition-colors duration-200">
            <Phone className="w-4 h-4 text-[#00c853]" />
            <span className="font-mono tracking-wide">{CONTACT_INFO.phone.display}</span>
          </a>
          <span className="hidden sm:inline text-emerald-800">|</span>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#00c853]" />
            <a href={`mailto:${getFullEmail()}`} className="flex items-center gap-2 hover:text-white transition-colors duration-200">
              <span className="font-mono tracking-wide">{getFullEmail()}</span>
            </a>
          </div>
        </div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-white bg-[#00c853]/20 px-3 py-1 rounded-full font-black border border-[#00c853]/30">
          {language === "english" ? "✨ G & Bros Premium Standard ✨" : "✨ Estándar Premium G & Bros ✨"}
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <div className="w-full bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ease-in-out ${
              isScrolled ? "py-2 min-h-[4.5rem]" : "py-3 min-h-[14rem]"
            }`}
          >
            <div
              role="button"
              tabIndex={0}
              onClick={() => onScrollTo("hero")}
              onKeyDown={(e) => handleKeyPress(e, "hero")}
              className="flex items-center gap-3 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#005f43] rounded-2xl p-1 transition-all"
              aria-label="G & Bros Premium Services Logo, scroll to top"
            >
              <img
                src="/logo.png"
                alt="G & Bros Services Logo"
                className={`w-auto object-contain transition-all duration-300 ease-in-out ${
                  isScrolled ? "h-14 sm:h-16" : "h-52 sm:h-64"
                }`}
              />
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-700" aria-label="Main Navigation">
              {(["services", "qa", "contact"] as const).map((item) => (
                <button
                  key={item}
                  onClick={() => onScrollTo(item)}
                  className="hover:text-[#005f43] focus:text-[#005f43] focus:outline-none transition-colors py-2 relative group font-sans tracking-wide text-base"
                  aria-label={`Scroll to ${t[item]}`}
                >
                  {t[item]}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00c853] transition-all group-hover:w-full group-focus:w-full" />
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setLanguage(language === "english" ? "spanish" : "english")}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 hover:border-[#005f43] text-[#005f43] hover:bg-[#FBF9F6] text-xs font-black tracking-wider transition-all focus:outline-none focus:ring-2 focus:ring-[#005f43]"
                aria-label="Toggle language"
              >
                <Globe className="w-4 h-4 text-[#00c853]" />
                <span className="font-mono">{language === "english" ? "ES" : "EN"}</span>
              </button>

              <Button
                onClick={() => onScrollTo("contact")}
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