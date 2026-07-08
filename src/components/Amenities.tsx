"use client";

import React, { useState } from "react";
import { Sparkles, GlassWater, Dumbbell, Award, Flame, Coffee, Heart, Key, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AmenitiesProps {
  language: "es" | "en";
}

interface Amenity {
  id: string;
  icon: React.ReactNode;
  titleEs: string;
  titleEn: string;
  descEs: string;
  descEn: string;
  bgImg: string;
}

export const Amenities: React.FC<AmenitiesProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<string>("sky-pool");

  const amenities: Amenity[] = [
    {
      id: "sky-pool",
      icon: <GlassWater className="w-6 h-6" />,
      titleEs: "Infinity Pool de Altura",
      titleEn: "Rooftop Infinity Pool",
      descEs: "Piscina infinita climatizada en el piso 16 con vistas espectaculares de la ciudad, cabañas privadas y bar húmedo.",
      descEn: "Heated infinity pool on the 16th floor with spectacular skyline views, private cabanas, and a wet bar.",
      bgImg: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "fitness",
      icon: <Dumbbell className="w-6 h-6" />,
      titleEs: "Gimnasio de Alto Rendimiento",
      titleEn: "High-Performance Gym",
      descEs: "Equipado con tecnología de última generación de TechnoGym, zona de yoga al aire libre y entrenadores personales on-demand.",
      descEn: "Equipped with state-of-the-art TechnoGym technology, outdoor yoga zone, and on-demand personal trainers.",
      bgImg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "lounge",
      icon: <Flame className="w-6 h-6" />,
      titleEs: "Sky Lounge & Fire Pit",
      titleEn: "Sky Lounge & Fire Pit",
      descEs: "Un elegante bar y sala de estar para residentes, perfecta para cócteles al atardecer y reuniones sociales exclusivas.",
      descEn: "An elegant resident lounge and bar, perfect for sunset cocktails and highly exclusive social gatherings.",
      bgImg: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "wellness",
      icon: <Heart className="w-6 h-6" />,
      titleEs: "Spa & Centro de Bienestar",
      titleEn: "Wellness Center & Spa",
      descEs: "Sauna, baño de vapor, salas de masajes profesionales y circuito de hidroterapia para desestresarse por completo.",
      descEn: "Sauna, steam room, professional massage suites, and a hydrotherapy circuit to completely decompress.",
      bgImg: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const content = {
    es: {
      tag: "AMENIDADES PREMIUM",
      title: "Un Club Privado de Cinco Estrellas",
      subtitle: "Cada detalle ha sido diseñado para enriquecer tu bienestar y estilo de vida todos los días.",
      highlightsLabel: "Estilo de Vida Excepcional",
      h1: "Seguridad monitoreada las 24 horas",
      h2: "Conserje privado y recepción premium",
      h3: "Estaciones de carga para vehículos eléctricos",
      h4: "Área de coworking de alta velocidad",
      detailsBtn: "Saber Más",
    },
    en: {
      tag: "PREMIUM AMENITIES",
      title: "A Five-Star Private Club",
      subtitle: "Every single detail has been crafted to enrich your daily wellness and high-end lifestyle.",
      highlightsLabel: "Exceptional Lifestyle Features",
      h1: "24/7 Monitored state-of-the-art security",
      h2: "Private premium concierge & lobby desk",
      h3: "EV charging stations on site",
      h4: "High-speed professional co-working area",
      detailsBtn: "Learn More",
    }
  };

  const t = content[language];
  const activeAmenity = amenities.find((a) => a.id === activeTab) || amenities[0];

  return (
    <section id="amenities" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Visual Background Accent Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
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

        {/* Dynamic Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Tabs Selector Navigation Column (Left) */}
          <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
            {amenities.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                    isActive
                      ? "bg-amber-500 text-slate-950 border-amber-400 shadow-xl shadow-amber-500/10 scale-102"
                      : "bg-slate-950/40 hover:bg-slate-950/80 text-slate-300 border-slate-800"
                  }`}
                >
                  <div className={`p-2.5 rounded-xl ${isActive ? "bg-slate-950 text-amber-400" : "bg-slate-900 text-amber-500"}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base uppercase tracking-wider">
                      {language === "es" ? item.titleEs : item.titleEn}
                    </h4>
                    <p className={`text-[11px] mt-0.5 line-clamp-1 ${isActive ? "text-slate-900" : "text-slate-400"}`}>
                      {language === "es" ? item.descEs : item.descEn}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Spectacular Visual Interactive Display Area (Right) */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 flex flex-col justify-end min-h-[400px] shadow-2xl group">
            {/* Dynamic Background Image with Smooth Fade */}
            <div
              className="absolute inset-0 transition-all duration-750 scale-100 group-hover:scale-102"
              style={{
                backgroundImage: `url('${activeAmenity.bgImg}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            
            {/* Elegant dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

            {/* Interactive textual details overlapping the media */}
            <div className="relative z-10 p-6 sm:p-10 text-left space-y-4 max-w-2xl">
              <span className="text-[10px] tracking-widest uppercase font-bold text-amber-400 bg-amber-500/15 border border-amber-400/40 px-3 py-1 rounded-full inline-block">
                {language === "es" ? "ÁREA SOCIAL EXCLUSIVA" : "EXCLUSIVE SOCIAL SPACE"}
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-extrabold text-white">
                {language === "es" ? activeAmenity.titleEs : activeAmenity.titleEn}
              </h3>
              <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed">
                {language === "es" ? activeAmenity.descEs : activeAmenity.descEn}
              </p>
            </div>
          </div>

        </div>

        {/* Additional Lifestyle Bullet Highlights Grid */}
        <div className="border-t border-slate-800 pt-12">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            {t.highlightsLabel}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[t.h1, t.h2, t.h3, t.h4].map((highlight, idx) => (
              <div
                key={idx}
                className="bg-slate-950/40 border border-slate-800/60 rounded-2xl p-4 flex items-start gap-3 hover:border-amber-500/20 transition-all duration-300"
              >
                <div className="p-1 bg-amber-500/10 rounded-lg text-amber-400 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p className="text-sm text-slate-300 font-medium">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};