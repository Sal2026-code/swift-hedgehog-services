"use client";

import React, { useEffect, useState } from "react";
import { Calculator, Sparkles, Home, ChevronRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EstimatorProps {
  language: "english" | "spanish";
  cleaningTier: "standard" | "deep" | "move";
  setCleaningTier: (tier: "standard" | "deep" | "move") => void;
  rooms: number;
  setRooms: (rooms: number) => void;
  baths: number;
  setBaths: (baths: number) => void;
  selectedAddons: string[];
  toggleAddon: (addonId: string) => void;
  onApplyEstimate: (formattedQuoteText: string) => void;
}

export const Estimator: React.FC<EstimatorProps> = ({
  language,
  cleaningTier,
  setCleaningTier,
  rooms,
  setRooms,
  baths,
  setBaths,
  selectedAddons,
  toggleAddon,
  onApplyEstimate
}) => {
  const [livePrice, setLivePrice] = useState<number>(45);

  // Synchronized prices dictionary
  const addonsPrices: Record<string, number> = {
    oven: 25,
    fridge: 25,
    windows: 35,
    balcony: 30,
    ironing: 20,
    mattress: 25
  };

  // Live Pricing Engine
  useEffect(() => {
    let baseline = 45; // €45 Baseline for 1 bed/1 bath standard clean
    
    // Increment calculations: rooms are €15 additional above 1, baths are €20 additional above 1
    const extraRoomsCost = (rooms - 1) * 15;
    const extraBathsCost = (baths - 1) * 20;

    // Cleaning type multipliers
    let tierMultiplier = 1.0;
    if (cleaningTier === "deep") tierMultiplier = 1.35;
    if (cleaningTier === "move") tierMultiplier = 1.5;

    // Extras cost sum
    const extrasCost = selectedAddons.reduce((sum, addonId) => sum + (addonsPrices[addonId] || 0), 0);

    const calculatedPrice = (baseline + extraRoomsCost + extraBathsCost) * tierMultiplier + extrasCost;
    setLivePrice(Math.round(calculatedPrice));
  }, [cleaningTier, rooms, baths, selectedAddons]);

  const content = {
    english: {
      tag: "Interactive Quote Tool",
      title: "G & Bros Price Estimator",
      subtitle: "Configure your preferences below to receive an instant dynamic ballpark reference estimate.",
      tierLabel: "1. Select Cleaning Tier",
      standard: "Standard",
      deep: "Deep Clean",
      move: "Move-In / Move-Out",
      bedsLabel: "Bedrooms & Living Rooms",
      bathsLabel: "Bathrooms",
      extrasLabel: "Check Extra Add-on Services",
      receiptHeader: "Sparkle Summary",
      estimateText: "Ballpark Reference Price",
      btnLabel: "Request Firm Estimate",
      addonsLabels: {
        oven: "Oven Interior (+€25)",
        fridge: "Fridge Interior (+€25)",
        windows: "Exterior Windows (+€35)",
        balcony: "Terrace/Balcony wash (+€30)",
        ironing: "Express Bedding (+€20)",
        mattress: "Mattress sanitization (+€25)"
      }
    },
    spanish: {
      tag: "Herramienta de Cotización",
      title: "Estimador de Precios G & Bros",
      subtitle: "Configure sus preferencias para recibir una estimación dinámica y aproximada al instante.",
      tierLabel: "1. Seleccione el Tipo de Limpieza",
      standard: "Estándar",
      deep: "Limpieza Profunda",
      move: "Entrada / Salida",
      bedsLabel: "Habitaciones y Salones",
      bathsLabel: "Baños",
      extrasLabel: "Seleccione Servicios Adicionales",
      receiptHeader: "Resumen de Brillo",
      estimateText: "Precio de Referencia Estimado",
      btnLabel: "Solicitar Presupuesto Firme",
      addonsLabels: {
        oven: "Interior del Horno (+25€)",
        fridge: "Interior de Nevera (+25€)",
        windows: "Ventanas Exteriores (+35€)",
        balcony: "Lavado de Terraza/Balcón (+30€)",
        ironing: "Ropa de Cama Express (+20€)",
        mattress: "Tratamiento de Colchón (+25€)"
      }
    }
  };

  const t = content[language];

  const handleApply = () => {
    const tierLabels = {
      standard: language === "english" ? "Standard Maintenance" : "Mantenimiento Estándar",
      deep: language === "english" ? "Deep & Detailed" : "Profunda y Detallada",
      move: language === "english" ? "Move-In / Move-Out" : "Entrada / Salida"
    };

    const formattedExtras = selectedAddons.length > 0 
      ? selectedAddons.join(", ") 
      : (language === "english" ? "None" : "Ninguno");

    const formattedQuoteText = language === "english"
      ? `G & Bros Estimator Summary:\nCleaning Tier: ${tierLabels[cleaningTier]}\nSize: ${rooms} Room(s), ${baths} Bathroom(s)\nSelected Extras: ${formattedExtras}\nBallpark Price: €${livePrice}\nPlease finalize my firm booking.`
      : `Resumen del Estimador de G & Bros:\nTipo de Limpieza: ${tierLabels[cleaningTier]}\nTamaño: ${rooms} Habitación(es), ${baths} Baño(s)\nExtras Seleccionados: ${formattedExtras}\nPrecio de Referencia: €${livePrice}\nPor favor, finalice mi reserva firme.`;

    onApplyEstimate(formattedQuoteText);
  };

  return (
    <section id="estimator" className="py-24 bg-white relative border-b border-gray-150">
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

        {/* Pricing Layout Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Controls Column (Left) */}
          <div className="lg:col-span-7 bg-[#FBF9F6] rounded-3xl p-6 sm:p-10 border border-[#005f43]/10 text-left space-y-8">
            
            {/* Step 1: Cleaning Tiers Buttons */}
            <div className="space-y-4">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#005f43] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#00c853]" />
                {t.tierLabel}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(["standard", "deep", "move"] as const).map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setCleaningTier(tier)}
                    className={`py-3.5 px-4 rounded-xl border text-center font-bold text-sm transition-all duration-300 ${cleaningTier === tier ? "bg-[#005f43] text-white border-[#005f43]" : "bg-white border-gray-200 text-slate-700 hover:border-[#005f43]/40"}`}
                  >
                    {t[tier]}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Bed and Baths count adjusters */}
            <div className="space-y-6">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#005f43] flex items-center gap-2">
                <Home className="w-4 h-4 text-[#00c853]" />
                {language === "english" ? "2. Configure Size parameters" : "2. Configure los parámetros de tamaño"}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Rooms controller plus/minus */}
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase text-slate-500 tracking-wider">
                    {t.bedsLabel}
                  </label>
                  <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-gray-150 justify-between">
                    <button
                      type="button"
                      disabled={rooms <= 1}
                      onClick={() => setRooms(rooms - 1)}
                      className="w-10 h-10 rounded-xl bg-[#FBF9F6] border text-slate-600 flex items-center justify-center font-black text-lg hover:bg-slate-100 disabled:opacity-40"
                    >
                      -
                    </button>
                    <span className="font-extrabold text-slate-800 text-lg">{rooms}</span>
                    <button
                      type="button"
                      disabled={rooms >= 10}
                      onClick={() => setRooms(rooms + 1)}
                      className="w-10 h-10 rounded-xl bg-[#FBF9F6] border text-slate-600 flex items-center justify-center font-black text-lg hover:bg-slate-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Bathrooms controller plus/minus */}
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase text-slate-500 tracking-wider">
                    {t.bathsLabel}
                  </label>
                  <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-gray-150 justify-between">
                    <button
                      type="button"
                      disabled={baths <= 1}
                      onClick={() => setBaths(baths - 1)}
                      className="w-10 h-10 rounded-xl bg-[#FBF9F6] border text-slate-600 flex items-center justify-center font-black text-lg hover:bg-slate-100 disabled:opacity-40"
                    >
                      -
                    </button>
                    <span className="font-extrabold text-slate-800 text-lg">{baths}</span>
                    <button
                      type="button"
                      disabled={baths >= 6}
                      onClick={() => setBaths(baths + 1)}
                      className="w-10 h-10 rounded-xl bg-[#FBF9F6] border text-slate-600 flex items-center justify-center font-black text-lg hover:bg-slate-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Check Extra services checkboxes */}
            <div className="space-y-4">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#005f43] block">
                {t.extrasLabel}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(["oven", "fridge", "windows", "balcony", "ironing", "mattress"] as const).map((addonId) => {
                  const isChecked = selectedAddons.includes(addonId);
                  return (
                    <label
                      key={addonId}
                      className={`flex items-center gap-3 p-3.5 bg-white rounded-xl border-2 transition-all cursor-pointer ${isChecked ? "border-[#005f43] bg-[#005f43]/5" : "border-gray-150 hover:border-[#005f43]/20"}`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleAddon(addonId)}
                        className="rounded accent-[#00c853] w-4 h-4 cursor-pointer"
                      />
                      <span className="text-xs font-bold text-slate-700">{t.addonsLabels[addonId]}</span>
                    </label>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Sparkle Summary Receipt Column (Right) */}
          <div className="lg:col-span-5 bg-[#005f43] text-white rounded-3xl p-6 sm:p-10 flex flex-col justify-between relative shadow-xl overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-2 bg-[#00c853]" />
            
            <div className="space-y-8 text-left">
              <div className="flex items-center gap-2.5">
                <Calculator className="w-5 h-5 text-[#00c853]" />
                <h3 className="text-2xl font-serif font-black tracking-wide">
                  {t.receiptHeader}
                </h3>
              </div>

              {/* Dynamic itemized breakdown */}
              <div className="space-y-3.5 border-t border-b border-white/10 py-6 text-sm font-medium text-slate-200">
                <div className="flex justify-between">
                  <span>
                    {cleaningTier === "standard" && t.standard}
                    {cleaningTier === "deep" && t.deep}
                    {cleaningTier === "move" && t.move}
                    {" "}{language === "english" ? "Tier base price" : "Precio base de nivel"}
                  </span>
                  <span>€{cleaningTier === "standard" ? 45 : cleaningTier === "deep" ? 60 : 70}</span>
                </div>

                <div className="flex justify-between">
                  <span>{language === "english" ? "Extra Room(s) cost" : "Costo por hab(s) adicionales"} ({rooms - 1})</span>
                  <span>+€{(rooms - 1) * 15}</span>
                </div>

                <div className="flex justify-between">
                  <span>{language === "english" ? "Extra Bathroom(s) cost" : "Costo por baño(s) adicionales"} ({baths - 1})</span>
                  <span>+€{(baths - 1) * 20}</span>
                </div>

                {selectedAddons.length > 0 && (
                  <div className="pt-2.5 border-t border-white/5 space-y-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#00c853] block">
                      {language === "english" ? "Premium Add-ons breakdown" : "Desglose de Extras Premium"}
                    </span>
                    {selectedAddons.map((addonId) => (
                      <div key={addonId} className="flex justify-between text-xs text-slate-300">
                        <span>• {t.addonsLabels[addonId].split(" (")[0]}</span>
                        <span>+€{addonsPrices[addonId]}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Estimate highlight total price */}
              <div className="text-center py-4 bg-white/5 rounded-2xl border border-white/10">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#00c853] block mb-1">
                  {t.estimateText}
                </span>
                <span className="text-5xl font-serif font-black text-[#00c853]">
                  €{livePrice}
                </span>
                <span className="text-[10px] text-slate-300 block mt-2">
                  {language === "english" ? "* Custom spaces are subject to firm quotes" : "* Sujeto a cotizaciones firmes para espacios especiales"}
                </span>
              </div>

            </div>

            <div className="pt-8">
              <Button
                onClick={handleApply}
                className="w-full bg-[#00c853] hover:bg-[#00ad48] text-[#005f43] font-black py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 text-base flex items-center justify-center gap-2"
              >
                <span>{t.btnLabel}</span>
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};