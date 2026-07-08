"use client";

import React, { useState } from "react";
import { Maximize2, BedDouble, Bath, Car, Sparkles, Building, ArrowRight, Layers, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ApartmentFilterProps {
  language: "es" | "en";
  onSelectApartment: (modelName: string) => void;
}

interface ApartmentModel {
  id: string;
  name: string;
  taglineEs: string;
  taglineEn: string;
  rooms: number;
  baths: number;
  parking: number;
  areaEs: string;
  areaEn: string;
  price: string;
  priceValue: number;
  featured: boolean;
  floorEs: string;
  floorEn: string;
  imgUrl: string;
  floorplanImg: string;
  benefitsEs: string[];
  benefitsEn: string[];
}

const APARTMENT_MODELS: ApartmentModel[] = [
  {
    id: "loft-aura",
    name: "Loft Aura",
    taglineEs: "Diseño Contemporáneo de Doble Altura",
    taglineEn: "Contemporary Double Height Design",
    rooms: 1,
    baths: 1.5,
    parking: 1,
    areaEs: "78 m² de área habitable",
    areaEn: "78 sqm of living area",
    price: "$195,000",
    priceValue: 195000,
    featured: false,
    floorEs: "Niveles 3 al 8",
    floorEn: "Levels 3 to 8",
    imgUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    floorplanImg: "https://images.unsplash.com/photo-1545464693-f1798a373343?auto=format&fit=crop&w=600&q=80",
    benefitsEs: ["Ventanales de piso a techo", "Acabados de cuarzo en cocina", "Balcón con vistas a la montaña"],
    benefitsEn: ["Floor to ceiling panoramic windows", "Quartz kitchen countertops", "Balcony with mountain view"]
  },
  {
    id: "suite-deluxe",
    name: "Suite Deluxe",
    taglineEs: "El Equilibrio Perfecto de Espacio",
    taglineEn: "The Perfect Balance of Space",
    rooms: 2,
    baths: 2,
    parking: 2,
    areaEs: "115 m² de área habitable",
    areaEn: "115 sqm of living area",
    price: "$285,000",
    priceValue: 285000,
    featured: true,
    floorEs: "Niveles 9 al 14",
    floorEn: "Levels 9 to 14",
    imgUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    floorplanImg: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80",
    benefitsEs: ["Dormitorio principal con walk-in closet", "Terraza privada integrada", "Cocina gourmet de diseñador"],
    benefitsEn: ["Master bedroom with walk-in closet", "Integrated private terrace", "Designer gourmet kitchen"]
  },
  {
    id: "sky-penthouse",
    name: "Sky Penthouse",
    taglineEs: "Exclusividad Absoluta en el Cielo",
    taglineEn: "Absolute Exclusivity in the Sky",
    rooms: 3,
    baths: 3.5,
    parking: 3,
    areaEs: "210 m² de área habitable",
    areaEn: "210 sqm of living area",
    price: "$495,000",
    priceValue: 495000,
    featured: false,
    floorEs: "Niveles 15 y 16 (Piso Completo)",
    floorEn: "Levels 15 & 16 (Full Floor)",
    imgUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    floorplanImg: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80",
    benefitsEs: ["Ascensor directo al apartamento", "Espectacular jacuzzi en terraza", "Vistas de 360 grados de la ciudad"],
    benefitsEn: ["Direct elevator access to unit", "Spectacular jacuzzi on terrace", "360-degree skyline views"]
  }
];

export const ApartmentFilter: React.FC<ApartmentFilterProps> = ({ language, onSelectApartment }) => {
  const [selectedRooms, setSelectedRooms] = useState<number | "all">("all");
  const [activeModel, setActiveModel] = useState<string>(APARTMENT_MODELS[1].id);
  const [viewMode, setViewMode] = useState<"render" | "plan">("render");

  const content = {
    es: {
      sectionTitle: "MODELOS EXCLUSIVOS",
      sectionSub: "Elige el espacio ideal para tu estilo de vida",
      filterAll: "Todos los Modelos",
      filterRooms: (num: number) => `${num} Habitación${num > 1 ? "es" : ""}`,
      featured: "Más Solicitado",
      viewRender: "Vista de Interiores",
      viewPlan: "Distribución de Planta",
      rooms: "Habitaciones",
      baths: "Baños",
      parking: "Parqueos",
      area: "Área",
      floor: "Ubicación",
      priceLabel: "Precio desde",
      cta: "Consultar Disponibilidad",
      featuresLabel: "Características Destacadas"
    },
    en: {
      sectionTitle: "EXCLUSIVE MODELS",
      sectionSub: "Choose the perfect space for your lifestyle",
      filterAll: "All Models",
      filterRooms: (num: number) => `${num} Bedroom${num > 1 ? "s" : ""}`,
      featured: "Most Requested",
      viewRender: "Interior Render",
      viewPlan: "Floor Plan Distribution",
      rooms: "Bedrooms",
      baths: "Bathrooms",
      parking: "Parking Spots",
      area: "Area",
      floor: "Location",
      priceLabel: "Price starting at",
      cta: "Inquire Availability",
      featuresLabel: "Key Characteristics"
    }
  };

  const t = content[language];

  const filteredModels = selectedRooms === "all"
    ? APARTMENT_MODELS
    : APARTMENT_MODELS.filter(m => m.rooms === selectedRooms);

  const activeModelData = APARTMENT_MODELS.find(m => m.id === activeModel) || APARTMENT_MODELS[0];

  return (
    <section id="models" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.05),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-amber-500 uppercase block mb-3">
            {t.sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif text-white">
            {t.sectionSub}
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Room Size Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => {
              setSelectedRooms("all");
              // default select the first visible model
              setActiveModel(APARTMENT_MODELS[0].id);
            }}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              selectedRooms === "all"
                ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/10 scale-105"
                : "bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"
            }`}
          >
            {t.filterAll}
          </button>
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => {
                setSelectedRooms(num);
                const matching = APARTMENT_MODELS.find(m => m.rooms === num);
                if (matching) setActiveModel(matching.id);
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedRooms === num
                  ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/10 scale-105"
                  : "bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"
              }`}
            >
              {t.filterRooms(num)}
            </button>
          ))}
        </div>

        {/* Dynamic Dual-Column Presentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Quick list selection & specs */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {filteredModels.map((model) => (
                <button
                  key={model.id}
                  onClick={() => setActiveModel(model.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                    activeModel === model.id
                      ? "bg-gradient-to-r from-slate-900 to-slate-800/80 border-amber-500/50 shadow-xl"
                      : "bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60"
                  }`}
                >
                  {/* Decorative Amber Highlight */}
                  {activeModel === model.id && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-amber-500" />
                  )}

                  <div className="flex justify-between items-center">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold font-serif text-white group-hover:text-amber-400 transition-colors">
                          {model.name}
                        </span>
                        {model.featured && (
                          <span className="text-[10px] bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                            {t.featured}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        {language === "es" ? model.taglineEs : model.taglineEn}
                      </p>
                    </div>
                    <span className="text-lg font-bold text-amber-400">
                      {model.price}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Active Model Full Detailed Specification Card */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
              <h3 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
                <Building className="w-5 h-5 text-amber-400" />
                {activeModelData.name} Specifications
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/40">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <BedDouble className="w-4 h-4 text-amber-500/80" />
                    <span>{t.rooms}</span>
                  </div>
                  <span className="text-lg font-bold text-white">{activeModelData.rooms}</span>
                </div>

                <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/40">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <Bath className="w-4 h-4 text-amber-500/80" />
                    <span>{t.baths}</span>
                  </div>
                  <span className="text-lg font-bold text-white">{activeModelData.baths}</span>
                </div>

                <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/40">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <Car className="w-4 h-4 text-amber-500/80" />
                    <span>{t.parking}</span>
                  </div>
                  <span className="text-lg font-bold text-white">{activeModelData.parking}</span>
                </div>

                <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/40">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <Maximize2 className="w-4 h-4 text-amber-500/80" />
                    <span>{t.area}</span>
                  </div>
                  <span className="text-sm font-semibold text-white">
                    {language === "es" ? activeModelData.areaEs : activeModelData.areaEn}
                  </span>
                </div>
              </div>

              {/* Tower Location Floor Information */}
              <div className="flex items-center gap-3 bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl">
                <Layers className="w-5 h-5 text-amber-400" />
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">{t.floor}</p>
                  <p className="text-sm font-bold text-white">
                    {language === "es" ? activeModelData.floorEs : activeModelData.floorEn}
                  </p>
                </div>
              </div>

              {/* Premium List of Amenities / Benefits */}
              <div className="space-y-3 pt-2">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{t.featuresLabel}</p>
                <div className="space-y-2">
                  {(language === "es" ? activeModelData.benefitsEs : activeModelData.benefitsEn).map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual render, Interactive View Modes (Photo / Floorplan) */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            {/* Tab switchers */}
            <div className="flex justify-between items-center bg-slate-900 border border-slate-800 p-1.5 rounded-2xl">
              <button
                onClick={() => setViewMode("render")}
                className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 ${
                  viewMode === "render"
                    ? "bg-amber-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {t.viewRender}
              </button>
              <button
                onClick={() => setViewMode("plan")}
                className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 ${
                  viewMode === "plan"
                    ? "bg-amber-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {t.viewPlan}
              </button>
            </div>

            {/* Main Visual Display Window */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 aspect-[4/3] group shadow-2xl">
              <img
                src={viewMode === "render" ? activeModelData.imgUrl : activeModelData.floorplanImg}
                alt={activeModelData.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating Price Overlap Tag */}
              <div className="absolute top-6 right-6 bg-slate-950/90 backdrop-blur-md border border-amber-500/30 rounded-2xl p-4 flex flex-col shadow-xl">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                  {t.priceLabel}
                </span>
                <span className="text-2xl font-extrabold text-amber-400">
                  {activeModelData.price}
                </span>
              </div>

              {/* Decorative Glow elements */}
              <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-slate-950/95 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-slate-200 tracking-wide uppercase bg-slate-950/70 px-3 py-1 rounded-full backdrop-blur-sm border border-slate-800">
                  {language === "es" ? "Unidades Preventa Disponibles" : "Presale Units Available"}
                </span>
              </div>
            </div>

            {/* Call To Action Buttons below view */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => onSelectApartment(activeModelData.name)}
                className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold py-6 rounded-2xl shadow-xl hover:shadow-amber-500/15 transform hover:-translate-y-0.5 transition-all duration-300 gap-2 text-md"
              >
                {t.cta}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};