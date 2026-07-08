"use client";

import React from "react";
import { Sparkles, Phone, Mail, Globe, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  language: "english" | "spanish";
  setLanguage: (lang: "english" | "spanish") => void;
  onScrollTo: (elementId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ language, setLanguage, onScrollTo }) => {
  const content = {
    english: {
      services: "Services",
      estimator: "Estimator",
      qa: "Q&A Forum",
      contact: "Contact",
      learnMore: "Learn More",
      email: "contacto@gbrosservices.com",
      phone: "+34 600 123 456"
    },
    spanish: {
      services: "Servicios",
      estimator: "Estimador",
      qa: "Foro de Q&A",
      contact: "Contacto",
      learnMore: "Saber Más",
      email: "contacto@gbrosservices.com",
      phone: "+34 600 123 456"
    }
  };

  const t = content[language];

  return (
    <div className="sticky top-0 z-50 w-full transition-all">
      {/* Thin Top Utility Bar */}
      <div className="bg-[#005f43] text-white py-2 px-4 text-xs font-semibold flex flex-col sm:flex-row justify-between items-center gap-2 border-b border-[#004732]">
        <div className="flex items-center gap-4">
          <a href={`tel:${t.phone}`} className="flex items-center gap-1.5 hover:text-[#00c853] transition-colors">
            <Phone className="w-3.5 h-3.5 text-[#00c853]" />
            <span>{t.phone}</span>
          </a>
          <span className="hidden sm:inline text-white/40">|</span>
          <a href={`mailto:${t.email}`} className="flex items-center gap-1.5 hover:text-[#00c853] transition-colors">
            <Mail className="w-3.5 h-3.5 text-[#00c853]" />
            <span>{t.email}</span>
          </a>
        </div>
        <div className="text-[10px] uppercase tracking-wider text-[#00c853] font-bold animate-pulse">
          {language === "english" ? "✨ G & Bros Premium Standard ✨" : "✨ Estándar Premium G & Bros ✨"}
        </div>
      </div>

      {/* Main Navbar */}
      <header className="w-full bg-white/95 backdrop-blur-md border-b border-gray-150 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Brand */}
            <div className="flex items-center gap-2.5 cursor-pointer group" onClick={() => onScrollTo("hero")}>
              <div className="p-2.5 bg-[#005f43] text-[#00c853] rounded-xl group-hover:rotate-12 transition-transform duration-300">
                <Sparkles className="w-6 h-6 fill-[#00c853]" />
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

            {/* Navigation links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#1e293b]">
              <button
                onClick={() => onScrollTo("services")}
                className="hover:text-[#005f43] transition-colors py-2 relative group"
              >
                {t.services}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#005f43] transition-all group-hover:w-full"></span>
              </button>
              <button
                onClick={() => onScrollTo("estimator")}
                className="hover:text-[#005f43] transition-colors py-2 relative group"
              >
                {t.estimator}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#005f43] transition-all group-hover:w-full"></span>
              </button>
              <button
                onClick={() => onScrollTo("qa")}
                className="hover:text-[#005f43] transition-colors py-2 relative group"
              >
                {t.qa}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#005f43] transition-all group-hover:w-full"></span>
              </button>
              <button
                onClick={() => onScrollTo("contact")}
                className="hover:text-[#005f43] transition-colors py-2 relative group"
              >
                {t.contact}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#005f43] transition-all group-hover:w-full"></span>
              </button>
            </nav>

            {/* Language Switcher & Highlighted CTA */}
            <div className="flex items-center gap-4">
              
              {/* Language Button Toggle */}
              <button
                onClick={() => setLanguage(language === "english" ? "spanish" : "english")}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border-2 border-[#005f43]/20 hover:border-[#005f43] text-[#005f43] hover:bg-[#005f43]/5 text-xs font-black uppercase tracking-wider transition-all"
                title={language === "english" ? "Switch to Spanish" : "Cambiar a Inglés"}
              >
                <Globe className="w-3.5 h-3.5 text-[#00c853]" />
                <span>{language === "english" ? "ES" : "EN"}</span>
              </button>

              {/* Learn More Highlighted CTA */}
              <Button
                onClick={() => onScrollTo("services")}
                className="bg-[#005f43] hover:bg-[#004732] text-white font-bold px-5 py-2.5 rounded-xl shadow-md transition-all text-sm hover:translate-y-[-1px]"
              >
                {t.learnMore}
              </Button>
            </div>

          </div>
        </div>
      </header>
    </div>
  );
};