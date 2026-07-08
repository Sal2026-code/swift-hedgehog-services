"use client";

import React, { useEffect, useState } from "react";
import { Calculator, Sparkles, Home, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LOCALIZATION } from "@/utils/localization";

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
  const [baseCost, setBaseCost] = useState<number>(45);
  const [extraRoomsCost, setExtraRoomsCost] = useState<number>(0);
  const [extraBathsCost, setExtraBathsCost] = useState<number>(0);
  const [tierMultiplierLabel, setTierMultiplierLabel] = useState<string>("");

  const t = LOCALIZATION[language].estimator;

  const addonsPrices: Record<string, number> = {
    oven: 25,
    fridge: 20,
    windows: 35,
    balcony: 30,
    ironing: 15,
    mattress: 25
  };

  // Live calculation engine based on Section 6 formulas:
  // - Base: €45
  // - Rooms: +€15 for each additional Bed/Living above 1
  // - Baths: +€20 for each additional Bath above 1
  // - Type Multipliers: Standard = 1.0, Deep Clean = +50% (1.5), Move-In/Out = +80% (1.8)
  // - Addons: EXACT pricing sums
  useEffect(() => {
    const base = 45;
    const additionalRooms = Math.max(0, rooms - 1) * 15;
    const additionalBaths = Math.max(0, baths - 1) * 20;

    let multiplier = 1.0;
    if (cleaningTier === "deep") {
      multiplier = 1.5;
    } else if (cleaningTier === "move") {
      multiplier = 1.8;
    }

    const calculatedSubtotal = (base + additionalRooms + additionalBaths) * multiplier;
    const extrasTotal = selectedAddons.reduce((sum, id) => sum + (addonsPrices[id] || 0), 0);
    const finalTotal = calculatedSubtotal + extrasTotal;

    setBaseCost(base);
    setExtraRoomsCost(additionalRooms);
    setExtraBathsCost(additionalBaths);
    setLivePrice(Math.round(finalTotal));
  }, [cleaningTier, rooms, baths, selectedAddons]);

  const handleApply = () => {
    const formattedExtras = selectedAddons.length > 0 
      ? selectedAddons.map(id => t.addonsLabels[id]?.split(" (")[0] || id).join(", ") 
      : (language === "english" ? "None" : "Ninguno");

    const formattedQuoteText = language === "english"
      ? `G & Bros Estimator Summary:\nCleaning Tier: ${cleaningTier}\nSize: ${rooms} Bed/Living Room(s), ${baths} Bathroom(s)\nSelected Extras: ${formattedExtras}\nBallpark Price: €${livePrice}\nPlease finalize my firm booking.`
      : `Resumen del Estimador de G & Bros:\nTipo de Limpieza: ${cleaningTier}\nTamaño: ${rooms} Habitación(es), ${baths} Baño(s)\nExtras Seleccionados: ${formattedExtras}\nPrecio de Referencia: €${livePrice}\nPor favor, finalice mi reserva firme.`;

    onApplyEstimate(formattedQuoteText);
  };

  return (
    <section id="estimator" className="py-20 bg-white relative border-b border-gray-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[#00c853] uppercase block mb-3">
            {t.subHeader}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif text-[#005f43]">
            {t.title}
          </h2>
          <div className="w-16 h-1 bg-[#00c853] mx-auto mt-6 rounded-full" />
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
                {/* Rooms controller plus/minus: Limits 1 to 6+ */}
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
                    <span className="font-extrabold text-slate-800 text-lg">
                      {rooms >= 6 ? "6+" : rooms}
                    </span>
                    <button
                      type="button"
                      disabled={rooms >= 6}
                      onClick={() => setRooms(rooms + 1)}
                      className="w-10 h-10 rounded-xl bg-[#FBF9F6] border text-slate-600 flex items-center justify-center font-black text-lg hover:bg-slate-100 disabled:opacity-40"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Bathrooms controller plus/minus: Limits 1 to 4+ */}
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
                    <span className="font-extrabold text-slate-800 text-lg">
                      {baths >= 4 ? "4+" : baths}
                    </span>
                    <button
                      type="button"
                      disabled={baths >= 4}
                      onClick={() => setBaths(baths + 1)}
                      className="w-10 h-10 rounded-xl bg-[#FBF9F6] border text-slate-600 flex items-center justify-center font-black text-lg hover:bg-slate-100 disabled:opacity-40"
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
          <div className="lg:col-span-5 bg-[#005f43] text-white rounded-3xl p-6 sm:p-10 flex flex-col justify-between relative shadow-xl overflow-hidden self-start lg:sticky lg:top-24 border-2 border-[#00c853]/25">
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
                  <span>{t.baseCleanLabel}</span>
                  <span>€{baseCost}</span>
                </div>

                <div className="flex justify-between">
                  <span>{t.extraRoomsLabel}</span>
                  <span>+€{extraRoomsCost}</span>
                </div>

                <div className="flex justify-between">
                  <span>{t.extraBathsLabel}</span>
                  <span>+€{extraBathsCost}</span>
                </div>

                {/* Premium adjustments indicator */}
                {(cleaningTier === "deep" || cleaningTier === "move") && (
                  <div className="flex justify-between text-[#00c853] font-bold text-xs bg-white/5 p-2 rounded-lg">
                    <span>
                      {cleaningTier === "deep" ? (language === "english" ? "Deep Premium (+50%)" : "Premium Profundo (+50%)") : (language === "english" ? "Move In/Out Premium (+80%)" : "Premium Entrada/Salida (+80%)")}
                    </span>
                    <span>
                      +€{Math.round((baseCost + extraRoomsCost + extraBathsCost) * (cleaningTier === "deep" ? 0.5 : 0.8))}
                    </span>
                  </div>
                )}

                {selectedAddons.length > 0 && (
                  <div className="pt-2.5 border-t border-white/5 space-y-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#00c853] block">
                      {language === "english" ? "Premium Add-ons breakdown" : "Desglose de Extras Premium"}
                    </span>
                    {selectedAddons.map((addonId) => (
                      <div key={addonId} className="flex justify-between text-xs text-slate-300">
                        <span>• {t.addonsLabels[addonId]?.split(" (")[0]}</span>
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
                  ~€{livePrice}
                </span>
                <span className="text-[10px] text-slate-300 block mt-2">
                  {t.disclaimer}
                </span>
              </div>

            </div>

            <div className="pt-8">
              <Button
                onClick={handleApply}
                className="w-full bg-[#00c853] hover:bg-[#00ad48] text-[#005f43] font-black py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 text-base flex items-center justify-center gap-2 focus:ring-2 focus:ring-[#00c853]"
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