"use client";

import React, { useState } from "react";
import { Calculator, DollarSign, Percent, TrendingUp, Sparkles, Building } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface InvestmentCalculatorProps {
  language: "es" | "en";
}

export const InvestmentCalculator: React.FC<InvestmentCalculatorProps> = ({ language }) => {
  // Financial parameters
  const [propertyPrice, setPropertyPrice] = useState<number>(285000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [loanTerm, setLoanTerm] = useState<number>(30);

  // Computed results
  const downPayment = (propertyPrice * downPaymentPercent) / 100;
  const loanAmount = propertyPrice - downPayment;
  
  // Mortgage payment calculation (P & I)
  const monthlyInterestRate = interestRate / 12 / 100;
  const numberOfPayments = loanTerm * 12;
  
  let monthlyPayment = 0;
  if (monthlyInterestRate > 0) {
    monthlyPayment =
      (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
  } else {
    monthlyPayment = loanAmount / numberOfPayments;
  }

  // Estimated average high-end monthly rental yield in Escazu
  const estimatedMonthlyRent = Math.round(propertyPrice * 0.007);
  const annualROI = (((estimatedMonthlyRent * 12) - (monthlyPayment * 0.2)) / propertyPrice * 100).toFixed(1);

  const content = {
    es: {
      tag: "PLANIFICACIÓN FINANCIERA",
      title: "Simulador de Inversión y Retorno",
      subtitle: "Calcula tus primas mensuales, montos de financiamiento y rentabilidades estimadas fácilmente.",
      propPrice: "Precio de la Propiedad",
      downPay: "Porcentaje de Prima (Enganche)",
      downPayAmount: "Monto de Prima",
      term: "Plazo del Crédito",
      years: "Años",
      rate: "Tasa de Interés Anual",
      resultsTitle: "Resumen Financiero",
      monthlyInst: "Cuota Mensual Estimada",
      financedVal: "Monto Total Financiado",
      roiTitle: "Rentabilidad Estimada de Alquiler",
      roiVal: "Retorno de Inversión (ROI)",
      roiDesc: "Basado en rentas de lujo promedio en el sector de Escazú.",
      ctaNote: "Simulación de carácter ilustrativo. Contáctanos para consultar opciones de financiamiento directo con la desarrolladora."
    },
    en: {
      tag: "FINANCIAL PLANNING",
      title: "Investment & Return Simulator",
      subtitle: "Calculate your monthly premiums, mortgage totals, and estimated yield easily.",
      propPrice: "Property Value",
      downPay: "Down Payment Percentage",
      downPayAmount: "Down Payment Amount",
      term: "Mortgage Loan Term",
      years: "Years",
      rate: "Annual Interest Rate",
      resultsTitle: "Financial Breakdown Summary",
      monthlyInst: "Estimated Monthly Mortgage",
      financedVal: "Total Financed Amount",
      roiTitle: "Estimated Rental Yield",
      roiVal: "Return on Investment (ROI)",
      roiDesc: "Based on standard high-end luxury rentals in San Rafael, Escazu.",
      ctaNote: "Simulation for illustrative purposes. Contact us to consult exclusive developer direct financing options."
    }
  };

  const t = content[language];

  return (
    <section id="calculator" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
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

        {/* Main Grid Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8">
            
            {/* Input 1: Property Price */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold tracking-wide text-slate-300">
                  {t.propPrice}
                </label>
                <span className="text-2xl font-extrabold text-amber-400 font-serif">
                  ${propertyPrice.toLocaleString()}
                </span>
              </div>
              <Slider
                value={[propertyPrice]}
                min={195000}
                max={600000}
                step={5000}
                onValueChange={(val) => setPropertyPrice(val[0])}
                className="py-2"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-bold">
                <span>$195,000 (Loft)</span>
                <span>$600,000 (Max Penthouse)</span>
              </div>
            </div>

            {/* Input 2: Down Payment */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold tracking-wide text-slate-300">
                  {t.downPay}
                </label>
                <span className="text-lg font-extrabold text-amber-400">
                  {downPaymentPercent}% (${downPayment.toLocaleString()})
                </span>
              </div>
              <Slider
                value={[downPaymentPercent]}
                min={10}
                max={50}
                step={5}
                onValueChange={(val) => setDownPaymentPercent(val[0])}
                className="py-2"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-bold">
                <span>10% (Minimum)</span>
                <span>50%</span>
              </div>
            </div>

            {/* Input 3 & 4: Two Column Controls (Term & Interest) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold tracking-wide text-slate-400 uppercase">
                    {t.term}
                  </label>
                  <span className="text-sm font-bold text-white">
                    {loanTerm} {t.years}
                  </span>
                </div>
                <div className="flex gap-2">
                  {[15, 20, 30].map((years) => (
                    <button
                      key={years}
                      onClick={() => setLoanTerm(years)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                        loanTerm === years
                          ? "bg-amber-500 text-slate-950 border-amber-400"
                          : "bg-slate-950/50 border-slate-800 text-slate-300 hover:bg-slate-850"
                      }`}
                    >
                      {years} Yrs
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold tracking-wide text-slate-400 uppercase">
                    {t.rate}
                  </label>
                  <span className="text-sm font-bold text-white">
                    {interestRate}%
                  </span>
                </div>
                <div className="flex gap-2">
                  {[5.5, 6.5, 7.5].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => setInterestRate(rate)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                        interestRate === rate
                          ? "bg-amber-500 text-slate-950 border-amber-400"
                          : "bg-slate-950/50 border-slate-800 text-slate-300 hover:bg-slate-850"
                      }`}
                    >
                      {rate}%
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Output Summary Results Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 border border-amber-500/20 rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <h3 className="text-xl font-serif font-bold text-amber-400 flex items-center gap-2 border-b border-slate-800 pb-4">
              <Calculator className="w-5 h-5" />
              {t.resultsTitle}
            </h3>

            {/* Calculated Monthly Mortgage */}
            <div className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800/80 text-center">
              <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-2">
                {t.monthlyInst}
              </p>
              <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 font-serif">
                ${Math.round(monthlyPayment).toLocaleString()}
                <span className="text-sm text-slate-400 font-sans font-light"> /mo</span>
              </p>
            </div>

            {/* Financed Amount */}
            <div className="flex justify-between items-center text-sm px-2">
              <span className="text-slate-400">{t.financedVal}</span>
              <span className="font-extrabold text-white">${loanAmount.toLocaleString()}</span>
            </div>

            {/* Down Payment Summary */}
            <div className="flex justify-between items-center text-sm px-2 border-b border-slate-800 pb-6">
              <span className="text-slate-400">{t.downPayAmount} ({downPaymentPercent}%)</span>
              <span className="font-extrabold text-amber-400">${downPayment.toLocaleString()}</span>
            </div>

            {/* Estimated Rental yield segment */}
            <div className="bg-slate-950/80 rounded-2xl p-5 border border-amber-500/10 space-y-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">{t.roiTitle}</h4>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-emerald-400 font-serif">
                  {annualROI}%
                </span>
                <span className="text-xs text-slate-400">Est. ROI {language === "es" ? "anual" : "annual"}</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                {t.roiDesc}
              </p>
            </div>

            {/* Bottom Disclaimer */}
            <p className="text-[10px] text-slate-400 leading-relaxed font-light text-center bg-slate-950/40 p-3 rounded-xl border border-slate-800">
              {t.ctaNote}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};