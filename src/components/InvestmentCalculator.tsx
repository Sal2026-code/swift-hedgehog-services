"use client";

import React, { useState } from "react";
import { Calculator, DollarSign, Percent, TrendingUp, Sparkles, Building, BarChart2, Coins } from "lucide-react";
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
  const [rentalStrategy, setRentalStrategy] = useState<"long" | "short">("short");

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

  // HOA estimation based on square footage / average category
  const estimatedHOA = Math.round(140 + (propertyPrice - 195000) * 0.0006);

  // Rental yield estimates
  const estimatedLongTermRent = Math.round(propertyPrice * 0.0068);
  const estimatedShortTermRent = Math.round(propertyPrice * 0.11 / 12); // Airbnb mode higher gross revenue but more expenses

  const activeRent = rentalStrategy === "long" ? estimatedLongTermRent : estimatedShortTermRent;
  const operatingExpenses = rentalStrategy === "long" ? estimatedHOA + 50 : Math.round(estimatedShortTermRent * 0.35 + estimatedHOA); // Management + cleaning + utilities

  // ROI calculation
  const netAnnualCashFlow = (activeRent * 12) - (operatingExpenses * 12);
  const capRate = ((netAnnualCashFlow / propertyPrice) * 100).toFixed(2);
  const cashOnCashROI = (((netAnnualCashFlow - (monthlyPayment * 12)) / downPayment) * 100).toFixed(2);

  const content = {
    es: {
      tag: "ESTUDIO DE FACTIBILIDAD",
      title: "Simulador Financiero de Retorno",
      subtitle: "Calcula tus primas mensuales, montos de financiamiento y rentabilidades estimadas basadas en el mercado real de Escazú.",
      propPrice: "Precio de la Propiedad",
      downPay: "Porcentaje de Prima (Enganche)",
      downPayAmount: "Monto de Prima",
      term: "Plazo del Crédito",
      years: "Años",
      rate: "Tasa de Interés Anual",
      resultsTitle: "Resumen Financiero",
      monthlyInst: "Cuota Mensual del Crédito",
      financedVal: "Monto Total Financiado",
      roiTitle: "Rentabilidad Estimada de Alquiler",
      roiDesc: "Elige la estrategia de alquiler que se adapte mejor a tus objetivos financieros.",
      longTermBtn: "Alquiler Tradicional (Anual)",
      shortTermBtn: "Plataformas (Airbnb / Short-term)",
      estimatedIncome: "Ingreso Mensual Estimado",
      expenses: "Gastos de Operación + HOA",
      netIncome: "Ingreso Neto Anual",
      roiLabel: "Tasa de Capitalización (Cap Rate)",
      cashOnCash: "Retorno Efectivo (Cash-on-Cash)",
      hoaNote: "*Incluye una estimación de cuota condominal de",
      ctaNote: "Simulación de carácter ilustrativo para inversión inmobiliaria premium. No incluye seguros locales ni comisiones bancarias."
    },
    en: {
      tag: "FEASIBILITY STUDY",
      title: "Financial Yield Simulator",
      subtitle: "Calculate your monthly premiums, mortgage totals, and estimated yields based on the real Escazu market.",
      propPrice: "Property Value",
      downPay: "Down Payment Percentage",
      downPayAmount: "Down Payment Amount",
      term: "Mortgage Loan Term",
      years: "Years",
      rate: "Annual Interest Rate",
      resultsTitle: "Financial Breakdown Summary",
      roiTitle: "Estimated Rental Yield",
      roiDesc: "Select the rental strategy that best fits your passive income targets.",
      longTermBtn: "Traditional Long-Term Lease",
      shortTermBtn: "Vacation / Corporate (Airbnb)",
      estimatedIncome: "Estimated Monthly Revenue",
      expenses: "Operating Expenses + HOA",
      netIncome: "Net Annual Cash Flow",
      roiLabel: "Capitalization Rate (Cap Rate)",
      cashOnCash: "Cash-on-Cash Return",
      hoaNote: "*Includes estimated monthly HOA fee of",
      ctaNote: "Simulation for illustrative premium real estate investment planning. Does not include local insurance or banking fees."
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
                <span>$195,000 (Loft Aura)</span>
                <span>$600,000 (Custom Sky Penthouse)</span>
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
                <span>10% (Minimum down payment)</span>
                <span>50%</span>
              </div>
            </div>

            {/* Input 3 & 4: Two Column Controls (Term & Interest) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold tracking-wide text-slate-400 uppercase">
                    {language === "es" ? "Plazo del Financiamiento" : "Loan Term"}
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

            {/* Strategy selector segment */}
            <div className="pt-4 border-t border-slate-800/60 space-y-4">
              <div className="flex justify-between items-baseline">
                <label className="text-sm font-bold text-slate-300">{t.roiTitle}</label>
                <span className="text-[10px] text-slate-500">{t.roiDesc}</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => setRentalStrategy("long")}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-2 ${
                    rentalStrategy === "long"
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/40"
                      : "bg-slate-950/50 border-slate-800 text-slate-400 hover:bg-slate-900"
                  }`}
                >
                  <Building className="w-4 h-4" />
                  {t.longTermBtn}
                </button>
                <button
                  onClick={() => setRentalStrategy("short")}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-2 ${
                    rentalStrategy === "short"
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/40"
                      : "bg-slate-950/50 border-slate-800 text-slate-400 hover:bg-slate-900"
                  }`}
                >
                  <BarChart2 className="w-4 h-4" />
                  {t.shortTermBtn}
                </button>
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
            <div className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800/80 text-center">
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-2">
                {t.monthlyInst}
              </p>
              <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 font-serif">
                ${Math.round(monthlyPayment).toLocaleString()}
                <span className="text-sm text-slate-400 font-sans font-light"> /mo</span>
              </p>
            </div>

            {/* Financed Amount */}
            <div className="flex justify-between items-center text-sm px-2">
              <span className="text-slate-400">{t.financedVal}</span>
              <span className="font-bold text-white">${loanAmount.toLocaleString()}</span>
            </div>

            {/* Down Payment Summary */}
            <div className="flex justify-between items-center text-sm px-2 border-b border-slate-800 pb-4">
              <span className="text-slate-400">{t.downPayAmount} ({downPaymentPercent}%)</span>
              <span className="font-bold text-amber-400">${downPayment.toLocaleString()}</span>
            </div>

            {/* Estimated Rental Strategy yield breakdown */}
            <div className="bg-slate-950/80 rounded-2xl p-5 border border-emerald-500/10 space-y-4">
              <div className="flex items-center gap-2">
                <Coins className="w-5 h-5 text-emerald-400" />
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">{t.roiTitle}</h4>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">{t.estimatedIncome}</span>
                  <span className="font-bold text-emerald-400">+${activeRent.toLocaleString()}/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{t.expenses}</span>
                  <span className="font-bold text-rose-400">-${operatingExpenses.toLocaleString()}/mo</span>
                </div>
                <div className="flex justify-between border-t border-slate-800/80 pt-2">
                  <span className="text-slate-400">{t.netIncome}</span>
                  <span className="font-extrabold text-emerald-400">${(netAnnualCashFlow).toLocaleString()}/yr</span>
                </div>
              </div>

              {/* Final Indicators */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800/80">
                <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800 text-center">
                  <p className="text-[9px] text-slate-400 uppercase font-semibold">{t.roiLabel}</p>
                  <p className="text-lg font-extrabold text-emerald-400">{capRate}%</p>
                </div>
                <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800 text-center">
                  <p className="text-[9px] text-slate-400 uppercase font-semibold">{t.cashOnCash}</p>
                  <p className="text-lg font-extrabold text-emerald-400">
                    {parseFloat(cashOnCashROI) > 0 ? `${cashOnCashROI}%` : "No Debt Yield"}
                  </p>
                </div>
              </div>

              <p className="text-[9px] text-slate-500 text-center leading-relaxed">
                {t.hoaNote} ${estimatedHOA}/mo
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