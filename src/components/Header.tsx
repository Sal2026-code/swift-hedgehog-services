"use client";

import React from "react";
import { Building, Phone, Globe, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  language: "es" | "en";
  setLanguage: (lang: "es" | "en") => void;
  onScrollTo: (elementId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ language, setLanguage, onScrollTo }) => {
  const content = {
    es: {
      brand: "AURA RESIDENCIAS",
      tagline: "Exclusividad & Altura",
      models: "Modelos",
      amenities: "Amenidades",
      calculator: "Inversión",
      contact: "Contacto",
      bookBtn: "Agendar Visita Privada",
    },
    en: {
      brand: "AURA RESIDENCE",
      tagline: "Exclusivity & Height",
      models: "Models",
      amenities: "Amenities",
      calculator: "Investment",
      contact: "Contact",
      bookBtn: "Book Private Tour",
    }
  };

  const t = content[language];

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900/90 backdrop-blur-md border-b border-amber-500/20 shadow-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand/Logo */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => onScrollTo("hero")}>
            <div className="p-2.5 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl text-slate-900 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-amber-500/10">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">
                {t.brand}
              </span>
              <p className="text-[10px] tracking-widest text-amber-500/80 font-semibold uppercase">
                {t.tagline}
              </p>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <button
              onClick={() => onScrollTo("models")}
              className="text-slate-200 hover:text-amber-400 transition-colors py-2 relative group"
            >
              {t.models}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => onScrollTo("amenities")}
              className="text-slate-200 hover:text-amber-400 transition-colors py-2 relative group"
            >
              {t.amenities}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => onScrollTo("calculator")}
              className="text-slate-200 hover:text-amber-400 transition-colors py-2 relative group"
            >
              {t.calculator}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => onScrollTo("contact")}
              className="text-slate-200 hover:text-amber-400 transition-colors py-2 relative group"
            >
              {t.contact}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Controls & CTA */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <button
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-amber-500/30 text-amber-400 hover:bg-amber-500/10 text-xs font-semibold uppercase tracking-wider transition-all duration-300"
            >
              <Globe className="w-3.5 h-3.5" />
              {language}
            </button>

            {/* CTA Button */}
            <Button
              onClick={() => onScrollTo("contact")}
              className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-5 py-2.5 rounded-full shadow-lg hover:shadow-amber-500/20 transform hover:-translate-y-0.5 transition-all duration-300 border border-amber-300/20"
            >
              <Calendar className="w-4 h-4" />
              {t.bookBtn}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};