"use client";

import React, { useState, useEffect } from "react";
import { Calculator, Sparkles, Home, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EstimatorProps {
  language: "english" | "spanish";
  onApplyEstimate: (estimateDetails: string) => void;
}

export const Estimator: React.FC<EstimatorProps> = ({ language, onApplyEstimate }) => {
  const [serviceType, setServiceType] = useState<string>("residential");
  const [sqft, setSqft] = useState<number>(1500);
  const [bedrooms, setBedrooms] = useState<number>(3);
  const [bathrooms, setBathrooms] = useState<number>(2);
  const [frequency, setFrequency] = useState<string>("one-time");
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // Calculate live estimate whenever parameters change
  useEffect(() => {
    let basePrice = 80; // Base starting price

    // Service multiplier
    let serviceMultiplier = 1.0;
    if (serviceType === "deep") serviceMultiplier = 1.4;
    if (serviceType === "move") serviceMultiplier = 1.5;
    if (serviceType === "office") serviceMultiplier = 1.1;

    // Sqft additions ($0.05 per square foot above 1000)
    const sqftFactor = sqft > 1000 ? (sqft - 1000) * 0.06 : 0;

    // Bed & bath additions
    const bedFactor = bedrooms * 20;
    const bathFactor = bathrooms * 30;

    let subtotal = (basePrice + sqftFactor + bedFactor + bathFactor) * serviceMultiplier;

    // Frequency discounts
    let discount = 0;
    if (frequency === "weekly") discount = 0.20; // 20% discount
    if (frequency === "bi-weekly") discount = 0.15; // 15% discount
    if (frequency === "monthly") discount = 0.10; // 10% discount

    subtotal = subtotal * (1 - discount);
    setTotalPrice(Math.round(subtotal));
  }, [serviceType, sqft, bedrooms, bathrooms, frequency]);

  const content = {
    english: {
      tag: "Interactive Quote Tool",
      title: "Instant Cleaning Price Estimator",
      subtitle: "Customize your preferences to receive an immediate estimated calculation for G and Bros Services LLC.",
      serviceLabel: "1. Select Service Type",
      residential: "Standard Residential",
      deep: "Deep Cleaning",
      move: "Move In/Out",
      office: "Office Space",
      sizeLabel: "2. Property Details",
      sqftText: "Property Size:",
      bedsText: "Bedrooms:",
      bathsText: "Bathrooms:",
      frequencyLabel: "3. Choose Frequency & Save",
      oneTime: "One-Time Service",
      weekly: "Weekly (Save 20%)",
      biWeekly: "Bi-Weekly (Save 15%)",
      monthly: "Monthly (Save 10%)",
      summaryLabel: "Estimated Cost Summary",
      disclaimer: "Note: This is a placeholder estimate. Custom situations might alter the final price quotes.",
      bookBtn: "Apply This Estimate to Quote Form",
      appliedToast: "Estimate copied! Scroll down to submit your details."
    },
    spanish: {
      tag: "Herramienta de Cotización",
      title: "Estimador de Costos Instantáneo",
      subtitle: "Personalice sus preferencias para recibir un cálculo estimado inmediato para G and Bros Services LLC.",
      serviceLabel: "1. Seleccione el Tipo de Servicio",
      residential: "Residencial Estándar",
      deep: "Limpieza Profunda",
      move: "Mudanza (Entrada/Salida)",
      office: "Espacio de Oficina",
      sizeLabel: "2. Detalles de la Propiedad",
      sqftText: "Tamaño:",
      bedsText: "Habitaciones:",
      bathsText: "Baños:",
      frequencyLabel: "3. Frecuencia y Descuento",
      oneTime: "Servicio Único",
      weekly: "Semanal (Ahorre 20%)",
      biWeekly: "Quincenal (Ahorre 15%)",
      monthly: "Mensual (Ahorre 10%)",
      summaryLabel: "Resumen del Costo Estimado",
      disclaimer: "Nota: Esta es una cotización estimada. Circunstancias especiales podrían cambiar la tarifa final.",
      bookBtn: "Aplicar Cotización al Formulario",
      appliedToast: "¡Estimación copiada! Deslice hacia abajo para enviar sus datos."
    }
  };

  const t = content[language];

  const handleApply = () => {
    const serviceLabels: Record<string, string> = {
      residential: "Standard Residential Cleaning",
      deep: "Deep Cleaning Service",
      move: "Move-In / Move-Out Cleaning",
      office: "Office Space Cleaning"
    };

    const freqLabels: Record<string, string> = {
      "one-time": "One-Time",
      weekly: "Weekly Recurring",
      "bi-weekly": "Bi-Weekly Recurring",
      monthly: "Monthly Recurring"
    };

    const details = language === "english"
      ? `Estimated Package: ${serviceLabels[serviceType]} (${freqLabels[frequency]}). Details: ${sqft} SqFt, ${bedrooms} beds, ${bathrooms} baths. Live Price Calculated: $${totalPrice}`
      : `Paquete Estimado: ${serviceLabels[serviceType]} (${freqLabels[frequency]}). Detalles: ${sqft} Pies Cuadrados, ${bedrooms} habs, ${bathrooms} baños. Precio Calculado: $${totalPrice}`;
    
    onApplyEstimate(details);
  };

  return (
    <section id="estimator" className="py-24 bg-slate-900 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.02),transparent_60%)] pointer-events-none" />

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

        {/* Live Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Settings Column */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 text-left">
            
            {/* Step 1: Service Type */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-teal-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                {t.serviceLabel}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setServiceType("residential")}
                  className={`p-4 rounded-2xl border text-left text-sm transition-all duration-300 ${serviceType === "residential" ? "bg-teal-500/10 border-teal-400 text-white" : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"}`}
                >
                  <span className="block font-bold mb-1">{t.residential}</span>
                  <span className="text-xs text-slate-500">Standard cleanups</span>
                </button>
                <button
                  type="button"
                  onClick={() => setServiceType("deep")}
                  className={`p-4 rounded-2xl border text-left text-sm transition-all duration-300 ${serviceType === "deep" ? "bg-teal-500/10 border-teal-400 text-white" : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"}`}
                >
                  <span className="block font-bold mb-1">{t.deep}</span>
                  <span className="text-xs text-slate-500">Extensive restoration</span>
                </button>
                <button
                  type="button"
                  onClick={() => setServiceType("move")}
                  className={`p-4 rounded-2xl border text-left text-sm transition-all duration-300 ${serviceType === "move" ? "bg-teal-500/10 border-teal-400 text-white" : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"}`}
                >
                  <span className="block font-bold mb-1">{t.move}</span>
                  <span className="text-xs text-slate-500">Perfect handover</span>
                </button>
                <button
                  type="button"
                  onClick={() => setServiceType("office")}
                  className={`p-4 rounded-2xl border text-left text-sm transition-all duration-300 ${serviceType === "office" ? "bg-teal-500/10 border-teal-400 text-white" : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"}`}
                >
                  <span className="block font-bold mb-1">{t.office}</span>
                  <span className="text-xs text-slate-500">Business sanitation</span>
                </button>
              </div>
            </div>

            {/* Step 2: Size & Specs */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-teal-400 flex items-center gap-2">
                <Home className="w-4 h-4" />
                {t.sizeLabel}
              </h3>
              
              {/* Sqft Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-slate-300">{t.sqftText}</span>
                  <span className="text-teal-400">{sqft.toLocaleString()} Sq Ft</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="100"
                  value={sqft}
                  onChange={(e) => setSqft(Number(e.target.value))}
                  className="w-full accent-teal-400 h-1.5 bg-slate-900 rounded-lg cursor-pointer"
                />
              </div>

              {/* Beds & Baths Grid Selector */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <span className="text-sm font-bold text-slate-300 block">{t.bedsText} {bedrooms}</span>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setBedrooms(num)}
                        className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${bedrooms === num ? "bg-teal-500 text-slate-950" : "bg-slate-900 hover:bg-slate-800 text-slate-300"}`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-sm font-bold text-slate-300 block">{t.bathsText} {bathrooms}</span>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setBathrooms(num)}
                        className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${bathrooms === num ? "bg-teal-500 text-slate-950" : "bg-slate-900 hover:bg-slate-800 text-slate-300"}`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Frequency */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-teal-400 flex items-center gap-2">
                <Calculator className="w-4 h-4" />
                {t.frequencyLabel}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: "one-time", label: t.oneTime },
                  { id: "weekly", label: t.weekly },
                  { id: "bi-weekly", label: t.biWeekly },
                  { id: "monthly", label: t.monthly }
                ].map((freq) => (
                  <button
                    key={freq.id}
                    type="button"
                    onClick={() => setFrequency(freq.id)}
                    className={`p-3 text-xs font-bold rounded-xl border transition-all text-center flex items-center justify-center h-14 ${frequency === freq.id ? "bg-teal-500/10 border-teal-400 text-white" : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"}`}
                  >
                    {freq.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500" />
            
            <div className="space-y-6 text-left">
              <h3 className="text-xl font-serif font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-400" />
                {t.summaryLabel}
              </h3>

              {/* Dynamic Big Cost Display */}
              <div className="py-8 border-y border-slate-800/80 my-4 flex flex-col items-center justify-center text-center">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400 mb-1">
                  Est. Cleaning Charge
                </span>
                <span className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-300 font-serif">
                  ${totalPrice}
                </span>
                <span className="text-xs text-slate-500 mt-2">
                  * Based on average duration requirements
                </span>
              </div>

              {/* Specifications checklist review */}
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center justify-between">
                  <span>Sq Footage:</span>
                  <span className="font-bold text-teal-400">{sqft}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Layout Rooms:</span>
                  <span className="font-bold text-teal-400">{bedrooms} Bed / {bathrooms} Bath</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Target Plan:</span>
                  <span className="font-bold text-teal-400 capitalize">{serviceType} cleanup</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4 pt-6">
              <Button
                onClick={handleApply}
                className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-black py-4 rounded-xl shadow-xl hover:shadow-teal-500/15 transform hover:-translate-y-0.5 transition-all duration-300 text-sm flex items-center justify-center gap-2"
              >
                {t.bookBtn}
                <ArrowRight className="w-4 h-4" />
              </Button>
              <p className="text-[10px] text-slate-500 text-center leading-relaxed">
                {t.disclaimer}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};