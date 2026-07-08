"use client";

import React, { useState } from "react";
import { Sparkles, Eye, Download, CheckCircle, ChevronLeft, ChevronRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface BrochureViewerProps {
  language: "es" | "en";
}

interface BrochureSlide {
  id: number;
  titleEs: string;
  titleEn: string;
  detailEs: string;
  detailEn: string;
  image: string;
}

const BROCHURE_SLIDES: BrochureSlide[] = [
  {
    id: 1,
    titleEs: "Diseño Sostenible con Certificación EDGE®",
    titleEn: "EDGE® Certified Sustainable Living",
    detailEs: "Construido bajo estrictos lineamientos de ahorro de agua y energía. Cuenta con paneles fotovoltaicos para reducir el costo eléctrico de áreas comunes y grifería inteligente de ultra bajo flujo.",
    detailEn: "Built under strict water and energy-saving standards. Features photovoltaic solar panels to minimize electric billing for social spaces and smart low-flow high-end faucets.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    titleEs: "Acabados Exclusivos de Nivel Mundial",
    titleEn: "World-Class Exclusive Finishes",
    detailEs: "Cocinas de origen italiano Euromobil®, grifería alemana Hansgrohe®, sobres de cuarzo de alta resistencia y ventanales térmicos que garantizan absoluto aislamiento acústico contra ruidos exteriores.",
    detailEn: "Euromobil® Italian kitchen cabinets, Hansgrohe® German bathroom fixtures, high-durability quartz countertops, and thermal dual-pane windows offering complete acoustic insulation.",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    titleEs: "Ubicación Premium de Alta Plusvalía",
    titleEn: "High Capital Gain Premium Location",
    detailEs: "Estratégicamente ubicado en San Rafael de Escazú. Facilidad de acceso directo a centros gastronómicos, Avenida Escazú, Multiplaza, Hospital CIMA y los colegios privados de mayor nivel en Costa Rica.",
    detailEn: "Strategically located in San Rafael, Escazu. Offers direct premium access to culinary hotspots, Avenida Escazu, Multiplaza mall, CIMA Hospital, and the most prestigious private schools in Costa Rica.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
  }
];

export const BrochureViewer: React.FC<BrochureViewerProps> = ({ language }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const content = {
    es: {
      tag: "DOSSIER EXCLUSIVO",
      title: "Especificaciones Técnicas del Proyecto",
      subtitle: "Descubre los pilares ecológicos de construcción, la selección de acabados importados y el folleto técnico completo de Aura.",
      downloadBtn: "Descargar Folleto PDF Completo",
      slideLabel: "Capítulo",
      downloadToast: "¡Folleto técnico del proyecto descargado con éxito!"
    },
    en: {
      tag: "EXCLUSIVE BROCHURE",
      title: "Technical Project Specifications",
      subtitle: "Discover eco-friendly construction pillars, premium imported finishes selection, and our fully detailed brochure.",
      downloadBtn: "Download PDF Presentation Brochure",
      slideLabel: "Chapter",
      downloadToast: "Technical project brochure downloaded successfully!"
    }
  };

  const t = content[language];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % BROCHURE_SLIDES.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + BROCHURE_SLIDES.length) % BROCHURE_SLIDES.length);
  };

  const handleDownload = () => {
    toast.success(t.downloadToast);
  };

  return (
    <section id="brochure-section" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-amber-500 uppercase block mb-3">
            {t.tag}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif text-white">
            {t.title}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-base">
            {t.subtitle}
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Dynamic visual presentation slider card */}
        <div className="bg-slate-950/60 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Slide interactive text */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-8 text-left">
              <div className="space-y-4">
                <span className="text-xs font-bold text-amber-500 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  {t.slideLabel} 0{BROCHURE_SLIDES[activeSlide].id}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-white">
                  {language === "es" ? BROCHURE_SLIDES[activeSlide].titleEs : BROCHURE_SLIDES[activeSlide].titleEn}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                  {language === "es" ? BROCHURE_SLIDES[activeSlide].detailEs : BROCHURE_SLIDES[activeSlide].detailEn}
                </p>
              </div>

              {/* Slider Controller buttons */}
              <div className="flex items-center gap-4 pt-4">
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-full border border-slate-850 hover:border-amber-500 bg-slate-900 text-slate-200 hover:text-amber-400 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-sm font-bold text-slate-400">
                  {activeSlide + 1} / {BROCHURE_SLIDES.length}
                </span>
                <button
                  onClick={nextSlide}
                  className="p-3 rounded-full border border-slate-850 hover:border-amber-500 bg-slate-900 text-slate-200 hover:text-amber-400 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Slide media viewer */}
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[300px]">
              <img
                src={BROCHURE_SLIDES[activeSlide].image}
                alt="Brochure Slide Image"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-transparent hidden lg:block" />
            </div>

          </div>
        </div>

        {/* Brochure Download CTA section below */}
        <div className="mt-12 flex flex-col items-center">
          <Button
            onClick={handleDownload}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-amber-500/15 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2.5 text-md"
          >
            <Download className="w-5 h-5" />
            {t.downloadBtn}
          </Button>
        </div>

      </div>
    </section>
  );
};