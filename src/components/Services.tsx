"use client";

import React from "react";
import { Check, Star, RefreshCw, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServicesProps {
  language: "english" | "spanish";
  onScrollTo: (elementId: string) => void;
  setCleaningTier: (tier: "standard" | "deep" | "move") => void;
}

export const Services: React.FC<ServicesProps> = ({ language, onScrollTo, setCleaningTier }) => {
  const content = {
    english: {
      tag: "Professional Cleaning Tiers",
      title: "Our Professional Services",
      subtitle: "Tailored options representing modern, immaculate apartment interiors.",
      btn: "Select & Estimate Price",
      cards: [
        {
          id: "standard" as const,
          badge: null,
          title: "Standard Maintenance Cleaning",
          desc: "Regular upkeep to maintain an immaculate standard of comfort.",
          bullets: [
            "Basic furniture dusting & wiping",
            "Full vacuuming and mopping throughout",
            "Exterior cabinet cleaning and polish",
            "Quick kitchen & bathroom sanitizing"
          ],
          bottomAccent: "Ideal for weekly or bi-weekly scheduling"
        },
        {
          id: "deep" as const,
          badge: "Popular Choice",
          title: "Deep & Detailed Cleaning",
          desc: "Intensive scrub targeting hidden mold, dust build-up, and grease.",
          bullets: [
            "Hand dusting of all baseboards",
            "Deep scrubbing of grout & tiles",
            "Interior cleaning of microwave & stove",
            "Limescale removal from glass fixtures"
          ],
          bottomAccent: "Perfect for seasonal turnarounds"
        },
        {
          id: "move" as const,
          badge: "End of Lease",
          title: "Move-In / Move-Out Cleans",
          desc: "Comprehensive sanitization guaranteed to secure security deposit refunds.",
          bullets: [
            "Deep sanitization of cabinet interiors",
            "Heavy degreasing of ovens and vents",
            "Absolute disinfection of restrooms",
            "Spot treatment of wall scuffs"
          ],
          bottomAccent: "Guarantees a flawless handoff"
        }
      ]
    },
    spanish: {
      tag: "Niveles de Limpieza Profesional",
      title: "Nuestros Servicios Profesionales",
      subtitle: "Opciones personalizadas para interiores de apartamentos modernos e impecables.",
      btn: "Seleccionar y Calcular",
      cards: [
        {
          id: "standard" as const,
          badge: null,
          title: "Limpieza de Mantenimiento Estándar",
          desc: "Mantenimiento regular para un estándar de confort impecable en el hogar.",
          bullets: [
            "Desempolvado y limpieza básica de muebles",
            "Aspirado completo y trapeado de pisos",
            "Limpieza exterior de armarios",
            "Desinfección rápida de cocina y baños"
          ],
          bottomAccent: "Ideal para programación semanal o quincenal"
        },
        {
          id: "deep" as const,
          badge: "Opción Popular",
          title: "Limpieza Profunda y Detallada",
          desc: "Restregado intensivo enfocado en moho, polvo acumulado y grasa.",
          bullets: [
            "Sacudido a mano de todos los zócalos",
            "Limpieza profunda de azulejos y juntas",
            "Limpieza interior de horno y microondas",
            "Eliminación de cal en grifería y vidrios"
          ],
          bottomAccent: "Perfecto para cambios estacionales"
        },
        {
          id: "move" as const,
          badge: "Fin de Contrato",
          title: "Limpieza de Entrada / Salida",
          desc: "Desinfección profunda garantizada para asegurar reembolsos de depósito.",
          bullets: [
            "Desinfección profunda del interior de armarios",
            "Desengrase pesado de campanas y hornos",
            "Desinfección absoluta de baños y duchas",
            "Limpieza de marcas en las paredes"
          ],
          bottomAccent: "Garantiza una entrega impecable"
        }
      ]
    }
  };

  const t = content[language];

  const handleSelectService = (tier: "standard" | "deep" | "move") => {
    setCleaningTier(tier);
    onScrollTo("estimator");
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[#00c853] uppercase block mb-3">
            {t.tag}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif text-[#005f43]">
            {t.title}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mt-4 text-base">
            {t.subtitle}
          </p>
          <div className="w-24 h-1.5 bg-[#005f43] mx-auto mt-6 rounded-full" />
        </div>

        {/* 3 Tier Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {t.cards.map((card, idx) => {
            const isPopular = card.badge !== null;
            return (
              <div
                key={idx}
                className={`flex flex-col justify-between bg-[#FBF9F6] rounded-3xl border-2 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all relative ${isPopular ? "border-[#005f43] bg-white ring-2 ring-[#005f43]/5" : "border-gray-150"}`}
              >
                
                {/* Popular Floating Badge */}
                {card.badge && (
                  <span className="absolute -top-3 left-6 bg-[#00c853] text-[#005f43] border border-[#005f43]/20 text-[10px] uppercase font-black px-3 py-1 rounded-full tracking-wider shadow-sm">
                    {card.badge}
                  </span>
                )}

                <div className="text-left space-y-4">
                  
                  {/* Service Tier Details */}
                  <h3 className="text-xl font-serif font-black text-[#005f43] leading-tight mt-2">
                    {card.title}
                  </h3>
                  
                  <p className="text-xs text-slate-500 leading-relaxed min-h-[36px]">
                    {card.desc}
                  </p>

                  <div className="w-12 h-1 bg-[#00c853] rounded-full" />

                  {/* Checklist Items */}
                  <ul className="space-y-3.5 pt-2">
                    {card.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-sm">
                        <div className="p-1 bg-[#005f43]/5 text-[#00c853] rounded-full mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-slate-700 font-medium leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                <div className="pt-8 text-left space-y-4">
                  {/* Bottom Accent label */}
                  <div className="bg-[#00c853]/5 border border-[#00c853]/20 text-[11px] font-bold text-[#005f43] py-2 px-3.5 rounded-xl text-center">
                    {card.bottomAccent}
                  </div>

                  {/* Pricing estimating selector button trigger */}
                  <Button
                    onClick={() => handleSelectService(card.id)}
                    className={`w-full font-bold py-3 rounded-xl shadow-sm transition-all ${isPopular ? "bg-[#005f43] hover:bg-[#004732] text-white" : "bg-white hover:bg-[#005f43]/5 text-[#005f43] border-2 border-[#005f43]"}`}
                  >
                    {t.btn}
                  </Button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};