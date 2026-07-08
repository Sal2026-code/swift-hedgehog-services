"use client";

import React from "react";
import { Sparkles, Phone, Calendar, Globe } from "lucide-react";
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
      whyChooseUs: "Why Choose Us",
      gallery: "Our Gallery",
      about: "About Us",
      testimonials: "Testimonials",
      callNow: "Call Now",
      getEstimate: "Get Free Estimate",
    },
    spanish: {
      services: "Servicios",
      whyChooseUs: "Por qué elegirnos",
      gallery: "Nuestra Galería",
      about: "Nosotros",
      testimonials: "Testimonios",
      callNow: "Llamar ahora",
      getEstimate: "Presupuesto gratis",
    }
  };

  const t = content[language];

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900/95 backdrop-blur-md border-b border-teal-500/20 shadow-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand/Logo */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => onScrollTo("hero")}>
            <div className="p-2.5 bg-gradient-to-br from-teal-400 to-emerald-600 rounded-xl text-slate-950 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-teal-500/10">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-black tracking-wide text-white">
                G and Bros
              </span>
              <p className="text-[10px] tracking-widest text-teal-400 font-bold uppercase">
                Services LLC
              </p>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-semibold">
            <button
              onClick={() => onScrollTo("services")}
              className="text-slate-300 hover:text-teal-400 transition-colors py-2 relative group"
            >
              {t.services}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => onScrollTo("why-choose-us")}
              className="text-slate-300 hover:text-teal-400 transition-colors py-2 relative group"
            >
              {t.whyChooseUs}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => onScrollTo("gallery")}
              className="text-slate-300 hover:text-teal-400 transition-colors py-2 relative group"
            >
              {t.gallery}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => onScrollTo("about")}
              className="text-slate-300 hover:text-teal-400 transition-colors py-2 relative group"
            >
              {t.about}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => onScrollTo("testimonials")}
              className="text-slate-300 hover:text-teal-400 transition-colors py-2 relative group"
            >
              {t.testimonials}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Controls & CTA */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            
            {/* Language Selector */}
            <button
              onClick={() => setLanguage(language === "english" ? "spanish" : "english")}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-teal-500/30 text-teal-400 hover:bg-teal-500/10 text-xs font-bold uppercase tracking-wider transition-all duration-300"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === "english" ? "Spanish" : "English"}</span>
            </button>

            <a
              href="tel:8134567890"
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/30 text-teal-400 hover:bg-teal-500/10 text-xs font-semibold tracking-wider transition-all duration-300"
            >
              <Phone className="w-3.5 h-3.5" />
              {t.callNow}
            </a>

            {/* CTA Button */}
            <Button
              onClick={() => onScrollTo("contact")}
              className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-extrabold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm shadow-lg hover:shadow-teal-500/20 transform hover:-translate-y-0.5 transition-all duration-300 border border-teal-300/20"
            >
              <Calendar className="w-4 h-4 mr-1.5" />
              {t.getEstimate}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};