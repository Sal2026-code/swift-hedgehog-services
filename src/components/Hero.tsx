"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, MapPin, Sparkles, Building, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  language: "es" | "en";
  onExplore: () => void;
}

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80", // Modern High-Rise Exterior
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80", // Luxury Penthouse Living Room
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80"  // Sky pool overlook
];

export const Hero: React.FC<HeroProps> = ({ language, onExplore }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = {
    es: {
      tag: "Lanzamiento Exclusivo - Fase de Preventa",
      titlePre: "VIVE EN LA",
      titleAccent: "CÚSPIDE DEL LUJO",
      desc: "Apartamentos diseñados para los gustos más exigentes. Interiores suntuosos, vistas panorámicas inigualables y un club privado exclusivo.",
      stat1Title: "Ubicación",
      stat1Val: "San Rafael, Escazú",
      stat2Title: "Modelos Disponibles",
      stat2Val: "De 1, 2 y 3 Habitaciones",
      stat3Title: "Precio de Lanzamiento",
      stat3Val: "Desde $195,000",
      ctaMain: "Ver Modelos Disponibles",
      ctaSub: "Descargar Folleto PDF",
    },
    en: {
      tag: "Exclusive Launch - Presale Phase",
      titlePre: "LIVE AT THE",
      titleAccent: "PINNACLE OF LUXURY",
      desc: "Apartments meticulously crafted for the most demanding tastes. Sumptuous interiors, unparalleled panoramic views, and an ultra-exclusive private club.",
      stat1Title: "Location",
      stat1Val: "San Rafael, Escazu",
      stat2Title: "Available Units",
      stat2Val: "1, 2 & 3 Bedrooms",
      stat3Title: "Introductory Price",
      stat3Val: "Starting at $195,000",
      ctaMain: "Explore Available Units",
      ctaSub: "Download PDF Brochure",
    }
  };

  const t = content[language];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Dynamic Background Slideshow */}
      {HERO_IMAGES.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
            index === currentSlide ? "opacity-40 scale-100" : "opacity-0 scale-105"
          }`}
          style={{
            backgroundImage: `url('${img}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Modern Radial Gradient Overlay for beautiful premium contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-950/45" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Launch Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-sm font-semibold mb-6 animate-pulse">
          <Sparkles className="w-4 h-4 text-amber-400" />
          {t.tag}
        </div>

        {/* Cinematic Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 max-w-5xl">
          <span className="block text-slate-300 text-2xl sm:text-3xl font-medium tracking-widest mb-2">
            {t.titlePre}
          </span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 drop-shadow-sm font-serif">
            {t.titleAccent}
          </span>
        </h1>

        {/* Subtitle description */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-light">
          {t.desc}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full max-w-md justify-center">
          <Button
            onClick={onExplore}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-8 py-4 rounded-full text-md shadow-xl hover:shadow-amber-500/20 transform hover:-translate-y-0.5 transition-all duration-300 group flex items-center justify-center gap-2"
          >
            {t.ctaMain}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <a
            href="#brochure"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("brochure-section");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-slate-500/40 bg-slate-900/40 text-slate-200 hover:text-amber-400 hover:bg-slate-900/80 hover:border-amber-500/30 font-semibold transition-all duration-300 text-md"
          >
            {t.ctaSub}
          </a>
        </div>

        {/* Carousel controls indicator dots */}
        <div className="flex items-center gap-2 mb-12">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-8 bg-amber-400" : "w-2 bg-slate-500"
              }`}
            />
          ))}
        </div>

        {/* Bottom Key Stats Banner */}
        <div className="w-full bg-slate-900/80 backdrop-blur-md rounded-3xl border border-amber-500/20 p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600" />
          
          {/* Stat 1 */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-400">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">
                {t.stat1Title}
              </p>
              <p className="text-lg font-bold text-white">
                {t.stat1Val}
              </p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-start gap-4 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
            <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-400">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">
                {t.stat2Title}
              </p>
              <p className="text-lg font-bold text-white">
                {t.stat2Val}
              </p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-start gap-4 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
            <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">
                {t.stat3Title}
              </p>
              <p className="text-lg font-extrabold text-amber-400">
                {t.stat3Val}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};