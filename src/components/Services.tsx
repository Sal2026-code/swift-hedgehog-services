"use client";

import React from "react";
import { Home, Building2, Briefcase, Sparkles, DoorOpen, HardHat, ArrowRight } from "lucide-react";

interface ServicesProps {
  language: "english" | "spanish";
  onSelectService: (serviceName: string) => void;
}

interface CleaningService {
  id: string;
  icon: React.ReactNode;
  titleEn: string;
  titleEs: string;
  descEn: string;
  descEs: string;
  image: string;
}

const CLEANING_SERVICES: CleaningService[] = [
  {
    id: "residential",
    icon: <Home className="w-6 h-6" />,
    titleEn: "Residential Cleaning",
    titleEs: "Limpieza Residencial",
    descEn: "Detailed dusting, vacuuming, mopping, kitchen sanitation, and deep bathroom scrubbing for a warm, clean home.",
    descEs: "Sacudido detallado, aspirado, trapeado, desinfección de cocina y restregado profundo de baños para un hogar limpio y acogedor.",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "commercial",
    icon: <Building2 className="w-6 h-6" />,
    titleEn: "Commercial Cleaning",
    titleEs: "Limpieza Comercial",
    descEn: "High-standard sanitization and cleanliness for storefronts, retail areas, venues, and large commercial spaces.",
    descEs: "Sanitización y limpieza de alto estándar para tiendas, áreas comerciales, locales de eventos y grandes establecimientos.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "office",
    icon: <Briefcase className="w-6 h-6" />,
    titleEn: "Office Cleaning",
    titleEs: "Limpieza de Oficinas",
    descEn: "Maintain a productive, germ-free workspace. Dusting desks, wiping breakrooms, and sanitizing touchpoints.",
    descEs: "Mantenga un espacio de trabajo productivo y libre de gérmenes. Limpieza de escritorios, salas de descanso y sanitización de puntos de contacto.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "deep",
    icon: <Sparkles className="w-6 h-6" />,
    titleEn: "Deep Cleaning",
    titleEs: "Limpieza Profunda",
    descEn: "Going beyond the surface. Wiping baseboards, behind appliances, interior windows, and heavy grime extraction.",
    descEs: "Yendo más allá de la superficie. Limpieza de zócalos, detrás de electrodomésticos, ventanas interiores y remoción de grasa pesada.",
    image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "move",
    icon: <DoorOpen className="w-6 h-6" />,
    titleEn: "Move-In / Move-Out Cleaning",
    titleEs: "Limpieza de Mudanza",
    descEn: "Complete overhaul of empty residences. Leave your old place spotless to get your deposit back, or prep your new nest.",
    descEs: "Limpieza completa de residencias vacías. Deje su antiguo lugar impecable para recuperar su depósito o prepare su nuevo hogar.",
    image: "https://images.unsplash.com/photo-1603796846097-bee99e4a60c9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "post-construction",
    icon: <HardHat className="w-6 h-6" />,
    titleEn: "Post-Construction Cleaning",
    titleEs: "Limpieza Post-Construcción",
    descEn: "Carefully removing fine dust, paint splatters, adhesive residues, and debris to reveal your beautifully finished build.",
    descEs: "Remoción cuidadosa de polvo fino, salpicaduras de pintura, residuos de adhesivos y escombros para revelar sus acabados terminados.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
  }
];

export const Services: React.FC<ServicesProps> = ({ language, onSelectService }) => {
  const content = {
    english: {
      tag: "What We Do Best",
      title: "Our Cleaning Services",
      subtitle: "No matter the task, G and Bros Services LLC delivers elite results designed around your scheduling preferences.",
      btn: "Request Quote"
    },
    spanish: {
      tag: "Lo Que Mejor Hacemos",
      title: "Nuestros Servicios de Limpieza",
      subtitle: "Sin importar la tarea, G and Bros Services LLC ofrece resultados de élite adaptados a sus preferencias de horario.",
      btn: "Solicitar Cotización"
    }
  };

  const t = content[language];

  return (
    <section id="services" className="py-24 bg-slate-900 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.03),transparent_40%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-teal-400 uppercase block mb-3">
            {t.tag}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif text-white">
            {t.title}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-base">
            {t.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLEANING_SERVICES.map((srv) => {
            const title = language === "english" ? srv.titleEn : srv.titleEs;
            const desc = language === "english" ? srv.descEn : srv.descEs;
            
            return (
              <div
                key={srv.id}
                className="bg-slate-950/60 border border-slate-800 rounded-3xl overflow-hidden group hover:border-teal-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Header with smooth zoom */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={srv.image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                  
                  {/* Floating Service Icon */}
                  <div className="absolute bottom-4 left-4 p-2.5 bg-teal-500 text-slate-950 rounded-xl shadow-lg font-bold">
                    {srv.icon}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                      {title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {desc}
                    </p>
                  </div>

                  <button
                    onClick={() => onSelectService(srv.titleEn)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-400 hover:text-teal-300 transition-colors w-fit group"
                  >
                    {t.btn}
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};