"use client";

import React, { useState } from "react";
import { Maximize2, BedDouble, Bath, Car, Sparkles, Building, ArrowRight, Layers, HelpCircle, Check, Info } from "lucide-react";
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
  finishesEs: string[];
  finishesEn: string[];
  hoaEs: string;
  hoaEn: string;
}

const APARTMENT_MODELS: ApartmentModel[] = [
  {
    id: "loft-aura",
    name: "Loft Aura",
    taglineEs: "Diseño Contemporáneo de Doble Altura - 1 Habitación",
    taglineEn: "Contemporary Double Height Design - 1 Bedroom",
    rooms: 1,
    baths: 1.5,
    parking: 1,
    areaEs: "78 m² habitables + 15 m² de parqueo (Total: 93 m²)",
    areaEn: "78 sqm living area + 15 sqm parking (Total: 93 sqm)",
    price: "$195,000",
    priceValue: 195000,
    featured: false,
    floorEs: "Niveles 3 al 8 (Vistas parciales al cañón de Escazú)",
    floorEn: "Levels 3 to 8 (Partial views of the Escazu canyon)",
    imgUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    floorplanImg: "https://images.unsplash.com/photo-1545464693-f1798a373343?auto=format&fit=crop&w=800&q=80",
    benefitsEs: [
      "Ventanales panorámicos de doble altura con protección UV",
      "Cocina de diseñador europeo integrada con isla central",
      "Mezzanine elegante para habitación principal",
      "Balcón privado de 6 m² con barandales de vidrio templado"
    ],
    benefitsEn: [
      "Double height panoramic windows with UV protection",
      "European designer kitchen integrated with center island",
      "Elegant mezzanine for the master bedroom",
      "Private 6 sqm balcony with tempered glass railings"
    ],
    finishesEs: [
      "Pisos de porcelanato italiano rectificado",
      "Grifería alemana Hansgrohe® en cocina y baños",
      "Sobres de cuarzo blanco puro en cocina y lavamanos",
      "Cerradura inteligente Yale® con clave y huella digital"
    ],
    finishesEn: [
      "Italian rectified porcelain flooring",
      "Hansgrohe® German faucets in kitchen and bathrooms",
      "Pure white quartz countertops in kitchen and sinks",
      "Yale® smart lock with PIN code and fingerprint access"
    ],
    hoaEs: "$140/mes (Incluye mantenimiento de áreas comunes y seguridad)",
    hoaEn: "$140/month (Includes common areas maintenance & security)"
  },
  {
    id: "suite-deluxe",
    name: "Suite Deluxe",
    taglineEs: "El Equilibrio Perfecto de Espacio - 2 Habitaciones",
    taglineEn: "The Perfect Balance of Space - 2 Bedrooms",
    rooms: 2,
    baths: 2,
    parking: 2,
    areaEs: "115 m² habitables + 30 m² de parqueos + bodega (Total: 150 m²)",
    areaEn: "115 sqm living area + 30 sqm parking + storage (Total: 150 sqm)",
    price: "$285,000",
    priceValue: 285000,
    featured: true,
    floorEs: "Niveles 9 al 14 (Vistas de 180° a la ciudad y montañas)",
    floorEn: "Levels 9 to 14 (180° skyline and mountain views)",
    imgUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    floorplanImg: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    benefitsEs: [
      "Dormitorio principal con walk-in closet amplio y tina de baño",
      "Área social abierta con concepto de plano abierto ('Open Plan')",
      "Amplia terraza de 12 m² con espacio para sala exterior",
      "Cuarto de pilas independiente para mayor conveniencia"
    ],
    benefitsEn: [
      "Master bedroom with spacious walk-in closet and soaking tub",
      "Open concept social area ('Open Plan')",
      "Spacious 12 sqm terrace with outdoor lounge space",
      "Independent laundry room for added convenience"
    ],
    finishesEs: [
      "Pisos de madera de ingeniería en los dormitorios",
      "Muebles de cocina italianos Euromobil®",
      "Paredes con aislamiento acústico reforzado",
      "Aire acondicionado central multizona de alta eficiencia"
    ],
    finishesEn: [
      "Engineered wood flooring in bedrooms",
      "Euromobil® Italian kitchen cabinets",
      "Acoustically insulated walls for peace of mind",
      "High-efficiency multi-zone central air conditioning"
    ],
    hoaEs: "$195/mes (Incluye acceso ilimitado al Sky Club y amenidades)",
    hoaEn: "$195/month (Includes unlimited access to Sky Club & amenities)"
  },
  {
    id: "sky-penthouse",
    name: "Sky Penthouse",
    taglineEs: "Exclusividad Absoluta en el Cielo - 3 Habitaciones",
    taglineEn: "Absolute Exclusivity in the Sky - 3 Bedrooms",
    rooms: 3,
    baths: 3.5,
    parking: 3,
    areaEs: "210 m² habitables + 45 m² de parqueos + bodega (Total: 260 m²)",
    areaEn: "210 sqm living area + 45 sqm parking + storage (Total: 260 sqm)",
    price: "$495,000",
    priceValue: 495000,
    featured: false,
    floorEs: "Niveles 15 y 16 (Piso Completo - Vistas 360° al Valle Central)",
    floorEn: "Levels 15 & 16 (Full Floor - 360° views of Central Valley)",
    imgUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    floorplanImg: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    benefitsEs: [
      "Ascensor de acceso directo con llave biométrica al vestíbulo privado",
      "Jacuzzi privado integrado en la terraza principal de 24 m²",
      "Cocina gourmet con isla extra-ancha y despensa de chef",
      "Sala de televisión familiar o estudio independiente"
    ],
    benefitsEn: [
      "Direct elevator access with biometric key to private lobby",
      "Private integrated jacuzzi on the main 24 sqm terrace",
      "Gourmet kitchen with extra-wide island and chef's pantry",
      "Separate family room or private home office"
    ],
    finishesEs: [
      "Pisos de mármol griego pulido en áreas sociales",
      "Cocina premium con electrodomésticos empotrados de lujo",
      "Sistema de automatización inteligente (domótica) Lutron®",
      "Ventanales térmicos alemanes de doble panel con atenuación acústica"
    ],
    finishesEn: [
      "Polished Greek marble floors in social areas",
      "Premium integrated gourmet kitchen appliances",
      "Lutron® luxury home automation system",
      "German double-panel thermal windows with acoustic attenuation"
    ],
    hoaEs: "$310/mes (Incluye seguridad VIP 24/7 y mantenimiento premium)",
    hoaEn: "$310/month (Includes 24/7 VIP security & premium maintenance)"
  }
];

export const ApartmentFilter: React.FC<ApartmentFilterProps> = ({ language, onSelectApartment }) => {
  const [selectedRooms, setSelectedRooms] = useState<number | "all">("all");
  const [activeModel, setActiveModel] = useState<string>(APARTMENT_MODELS[1].id);
  const [viewMode, setViewMode] = useState<"render" | "plan">("render");
  const [detailTab, setDetailTab] = useState<"features" | "finishes" | "pricing">("features");

  const content = {
    es: {
      sectionTitle: "MODELOS RESIDENCIALES",
      sectionSub: "Arquitectura pensada para un estilo de vida superior",
      filterAll: "Ver Todos",
      filterRooms: (num: number) => `${num} Habitación${num > 1 ? "es" : ""}`,
      featured: "Recomendado",
      viewRender: "Renders Fotorrealistas",
      viewPlan: "Distribución de Planta",
      rooms: "Habitaciones",
      baths: "Baños Completos",
      parking: "Espacios de Parqueo",
      area: "Área de Construcción",
      floor: "Ubicación en Torre",
      priceLabel: "Precio base",
      cta: "Agendar Visita de Unidad",
      featuresLabel: "Distribución y Amenidades",
      tabFeatures: "Diseño & Espacios",
      tabFinishes: "Acabados de Lujo",
      tabPricing: "Esquema de Pago",
      hoaLabel: "Cuota Condominal (HOA)",
      paymentPlan: "Plan de Inversión Sugerido",
      paymentDown: "Prima Fraccionada (20%)",
      paymentReserve: "Reserva del Apartamento",
      paymentDelivery: "Financiamiento o Entrega (80%)"
    },
    en: {
      sectionTitle: "RESIDENTIAL MODELS",
      sectionSub: "Architecture crafted for an elevated lifestyle",
      filterAll: "View All",
      filterRooms: (num: number) => `${num} Bedroom${num > 1 ? "s" : ""}`,
      featured: "Recommended",
      viewRender: "Photorealistic Renders",
      viewPlan: "Floor Plan Layout",
      rooms: "Bedrooms",
      baths: "Full Bathrooms",
      parking: "Parking Spots",
      area: "Construction Area",
      floor: "Location in Tower",
      priceLabel: "Base price",
      cta: "Schedule Unit Tour",
      featuresLabel: "Distribution & Amenities",
      tabFeatures: "Design & Spaces",
      tabFinishes: "Luxury Finishes",
      tabPricing: "Payment Scheme",
      hoaLabel: "Condo Fee (HOA)",
      paymentPlan: "Suggested Investment Plan",
      paymentDown: "Fractional Down Payment (20%)",
      paymentReserve: "Apartment Reservation",
      paymentDelivery: "Financing or Delivery (80%)"
    }
  };

  const t = content[language];

  const filteredModels = selectedRooms === "all"
    ? APARTMENT_MODELS
    : APARTMENT_MODELS.filter(m => m.rooms === selectedRooms);

  const activeModelData = APARTMENT_MODELS.find(m => m.id === activeModel) || APARTMENT_MODELS[0];

  return (
    <section id="models" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.06),transparent_50%)] pointer-events-none" />

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
                          <span className="text-[10px] bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider animate-pulse">
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
              <h3 className="text-2xl font-serif font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-4">
                <Building className="w-5 h-5 text-amber-400" />
                {activeModelData.name} Specs
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
                  <span className="text-xs font-semibold text-white line-clamp-2">
                    {language === "es" ? activeModelData.areaEs : activeModelData.areaEn}
                  </span>
                </div>
              </div>

              {/* Tower Location Floor & HOA */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-amber-500/5 border border-amber-500/10 p-3.5 rounded-xl">
                  <Layers className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">{t.floor}</p>
                    <p className="text-xs font-bold text-white">
                      {language === "es" ? activeModelData.floorEs : activeModelData.floorEn}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-amber-500/5 border border-amber-500/10 p-3.5 rounded-xl">
                  <Info className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">{t.hoaLabel}</p>
                    <p className="text-xs font-bold text-white">
                      {language === "es" ? activeModelData.hoaEs : activeModelData.hoaEn}
                    </p>
                  </div>
                </div>
              </div>

              {/* Inner detail Tabs */}
              <div className="space-y-4 pt-2">
                <div className="flex border-b border-slate-800 text-xs font-semibold">
                  <button
                    onClick={() => setDetailTab("features")}
                    className={`pb-2.5 px-4 relative ${
                      detailTab === "features" ? "text-amber-400 font-bold" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {t.tabFeatures}
                    {detailTab === "features" && <div className="absolute bottom-0 inset-x-4 h-0.5 bg-amber-400" />}
                  </button>
                  <button
                    onClick={() => setDetailTab("finishes")}
                    className={`pb-2.5 px-4 relative ${
                      detailTab === "finishes" ? "text-amber-400 font-bold" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {t.tabFinishes}
                    {detailTab === "finishes" && <div className="absolute bottom-0 inset-x-4 h-0.5 bg-amber-400" />}
                  </button>
                  <button
                    onClick={() => setDetailTab("pricing")}
                    className={`pb-2.5 px-4 relative ${
                      detailTab === "pricing" ? "text-amber-400 font-bold" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {t.tabPricing}
                    {detailTab === "pricing" && <div className="absolute bottom-0 inset-x-4 h-0.5 bg-amber-400" />}
                  </button>
                </div>

                {detailTab === "features" && (
                  <div className="space-y-2 animate-fadeIn">
                    {(language === "es" ? activeModelData.benefitsEs : activeModelData.benefitsEn).map((b, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <Check className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                )}

                {detailTab === "finishes" && (
                  <div className="space-y-2 animate-fadeIn">
                    {(language === "es" ? activeModelData.finishesEs : activeModelData.finishesEn).map((f, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <Sparkles className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                )}

                {detailTab === "pricing" && (
                  <div className="space-y-3 animate-fadeIn text-sm">
                    <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">{t.paymentPlan}</p>
                    <div className="space-y-2 bg-slate-950/40 p-3 rounded-xl border border-slate-800">
                      <div className="flex justify-between">
                        <span className="text-slate-400">{t.paymentReserve}</span>
                        <span className="font-bold text-white">$5,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">{t.paymentDown}</span>
                        <span className="font-bold text-white">${(activeModelData.priceValue * 0.20).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between border-t border-slate-800/80 pt-2">
                        <span className="text-slate-400">{t.paymentDelivery}</span>
                        <span className="font-bold text-amber-400">${(activeModelData.priceValue * 0.80).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                )}
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