"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Phone, CheckCircle2, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  language: "en" | "es";
  onEstimateClick: () => void;
  onCallClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onEstimateClick, onCallClick }) => {
  const content = {
    en: {
      insurance: "Fully Insured • Over 20 Years of Experience",
      speakLanguage: "We Speak Your Language! • English & Español",
      subBrand: "G and Bros Services LLC",
      slogan: "Professional Cleaning You Can Trust",
      desc: "We bring over two decades of expertise straight to your doorstep. Experience spotless kitchens, immaculate bathrooms, pristine offices, and premium customer care.",
      btnEstimate: "Get a Free Estimate",
      btnCall: "Call Us Today",
      badge1: "100% Satisfaction Guarantee",
      badge2: "Fully Insured & Bonded",
      badge3: "Eco-Friendly Supplies",
      badge4: "Flexible Scheduling"
    },
    es: {
      insurance: "Totalmente Asegurado • Más de 20 Años de Experiencia",
      speakLanguage: "¡Hablamos su Idioma! • English & Español",
      subBrand: "G and Bros Services LLC",
      slogan: "Limpieza Profesional en la que Puede Confiar",
      desc: "Llevamos más de dos décadas de experiencia directo a su puerta. Experimente cocinas impecables, baños relucientes, oficinas prístinas y atención al cliente premium.",
      btnEstimate: "Obtener Presupuesto Gratis",
      btnCall: "Llámenos Hoy",
      badge1: "Garantía de Satisfacción 100%",
      badge2: "Totalmente Asegurado y Fianzado",
      badge3: "Suministros Ecológicos",
      badge4: "Horarios Flexibles"
    }
  };

  const t = content[language];

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950 py-20">
      {/* Visual Background Pattern & Overlay */}
      <div 
        className="absolute inset-0 opacity-25 scale-100 transition-transform duration-1000 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80')`,
        }}
      />
      
      {/* Smooth Dark Gradient for Perfect Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950" />

      {/* Modern teal radial light source */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Verification and Bilingual Tags */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-400/30 text-teal-300 text-xs sm:text-sm font-bold tracking-wide uppercase">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            {t.insurance}
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-bold tracking-wide uppercase animate-pulse">
            <Languages className="w-4 h-4 text-amber-400" />
            {t.speakLanguage}
          </div>
        </div>

        {/* Big Trust Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 max-w-4xl">
          <span className="block text-slate-300 text-xl sm:text-2xl font-semibold tracking-widest mb-3 uppercase">
            {t.subBrand}
          </span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 via-teal-400 to-emerald-200 font-serif leading-tight">
            {t.slogan}
          </span>
        </h1>

        {/* Subtitle description */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-light">
          {t.desc}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full max-w-md justify-center">
          <Button
            onClick={onEstimateClick}
            className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-black px-8 py-6 rounded-full text-md shadow-xl hover:shadow-teal-500/20 transform hover:-translate-y-0.5 transition-all duration-300 group flex items-center justify-center gap-2"
          >
            {t.btnEstimate}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            onClick={onCallClick}
            className="flex items-center justify-center gap-2 px-8 py-6 rounded-full border border-slate-755 bg-slate-900/80 text-slate-200 hover:text-teal-300 hover:bg-slate-900 hover:border-teal-500/40 font-bold transition-all duration-300 text-md"
          >
            <Phone className="w-5 h-5" />
            {t.btnCall}
          </Button>
        </div>

        {/* Mini Trust Badges Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-400 text-xs sm:text-sm font-semibold max-w-3xl pt-8 border-t border-slate-800/60 w-full justify-center">
          <div className="flex items-center gap-2 justify-center">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            <span>{t.badge1}</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            <span>{t.badge2}</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            <span>{t.badge3}</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            <span>{t.badge4}</span>
          </div>
        </div>
      </div>
    </section>
  );
};