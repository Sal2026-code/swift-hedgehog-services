"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, Leaf, Award, Languages, Check, ArrowRight, HelpCircle, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LOCALIZATION } from "@/utils/localization";

interface HeroProps {
  language: "english" | "spanish";
  onScrollTo: (elementId: string) => void;
}

const TESTIMONIALS = [
  {
    en: '"Excellent service... G & Bros left our apartment completely dust-free. Recommend weekly!"',
    es: '"Servicio excelente... G & Bros dejó nuestro apartamento completamente libre de polvo. ¡Altamente recomendados!"',
    author: "Maria S., Downtown Resident"
  },
  {
    en: '"Absolute perfection. They even cleaned deep inside our oven and microwave. Life-savers."',
    es: '"Perfección absoluta. Incluso limpiaron profundamente el horno y microondas. Nos salvaron la vida."',
    author: "David R., Salamanca Resident"
  }
];

export const Hero: React.FC<HeroProps> = ({ language, onScrollTo }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const t = LOCALIZATION[language].hero;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const iconsMap = [
    <ShieldCheck key="shield" className="w-5 h-5 text-[#00c853]" />,
    <Leaf key="leaf" className="w-5 h-5 text-[#00c853]" />,
    <Award key="award" className="w-5 h-5 text-[#00c853]" />,
    <Languages key="languages" className="w-5 h-5 text-[#00c853]" />
  ];

  return (
    <section 
      id="hero" 
      className="relative pt-12 pb-20 bg-gradient-to-br from-[#FBF9F6] via-white to-[#FBF9F6] border-b border-gray-150 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge: Small badge with check icon */}
        <div className="flex justify-start mb-6">
          <div className="inline-flex items-center gap-2 bg-[#00c853]/10 border border-[#00c853]/20 px-3 py-1 rounded-full text-xs font-black text-[#005f43]">
            <CheckCircle className="w-4 h-4 text-[#00c853]" />
            <span>{t.badgeText}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Value Props & CTAs */}
          <div className="lg:col-span-7 text-left space-y-8">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1e293b] font-serif leading-tight">
              {t.headline.split("G & Bros").map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className="text-[#005f43] block sm:inline relative">
                      G & Bros
                      <span className="absolute left-0 bottom-1 w-full h-1 bg-[#00c853] rounded-full" />
                    </span>
                  )}
                </React.Fragment>
              ))}
            </h1>

            {/* 2x2 Value Proposition Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {t.values.map((v, idx) => (
                <div 
                  key={idx} 
                  className="flex gap-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="p-2.5 bg-[#00c853]/10 text-[#00c853] rounded-xl h-fit">
                    {iconsMap[idx]}
                  </div>
                  <div>
                    <h2 className="font-bold text-sm text-[#1e293b]">{v.title}</h2>
                    <p className="text-xs text-[#64748b] mt-0.5 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons Below Grid */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => onScrollTo("services")}
                className="bg-[#005f43] hover:bg-[#004732] text-white font-extrabold px-8 py-6 rounded-xl text-md shadow-lg shadow-[#005f43]/20 flex items-center justify-center gap-2 transition-all"
              >
                <span>{t.viewServices}</span>
                <ArrowRight className="w-5 h-5" />
              </Button>

              <Button
                onClick={() => onScrollTo("qa")}
                variant="outline"
                className="border-2 border-[#005f43] text-[#005f43] hover:bg-[#005f43]/5 font-extrabold px-8 py-6 rounded-xl text-md flex items-center justify-center gap-2"
              >
                <HelpCircle className="w-5 h-5" />
                <span>{t.askQuestion}</span>
              </Button>
            </div>

          </div>

          {/* Right Column Feature Card: Dark themed container card with exact layout specified */}
          <div className="lg:col-span-5">
            <div className="bg-[#005f43] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden text-left border-2 border-[#00c853]/20">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-[#00c853]" />
              
              <div className="flex justify-between items-start gap-2 mb-6">
                <div>
                  <h3 className="text-xl font-serif font-extrabold text-white">
                    {t.premiumPlanTitle}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    {language === "english" ? "Deep standard package" : "Paquete estándar profundo"}
                  </p>
                </div>
                <span className="bg-[#00c853] text-[#005f43] text-[10px] uppercase font-black px-3 py-1 rounded-full tracking-wide">
                  {t.premiumBadge}
                </span>
              </div>

              {/* Task Checklist list */}
              <ul className="space-y-3.5 mb-8 text-left" aria-label="Premium package task list">
                {t.premiumTasks.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <div className="p-1 bg-[#00c853]/20 text-[#00c853] rounded-full mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="leading-relaxed font-semibold">{task}</span>
                  </li>
                ))}
              </ul>

              {/* Embedded rolling Testimonial block */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 relative text-left">
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-3.5 h-3.5 fill-[#00c853] text-[#00c853]" />
                  ))}
                </div>
                <p className="text-xs italic text-slate-200 leading-relaxed font-serif min-h-[48px]">
                  {language === "english" ? TESTIMONIALS[activeIdx].en : TESTIMONIALS[activeIdx].es}
                </p>
                <p className="text-[10px] font-black uppercase text-[#00c853] tracking-widest mt-2">
                  {TESTIMONIALS[activeIdx].author}
                </p>

                {/* Slider Indicators */}
                <div className="flex gap-1.5 justify-end absolute bottom-3 right-4">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIdx(idx)}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${activeIdx === idx ? "bg-[#00c853] w-3" : "bg-white/30"}`}
                      aria-label={`Show review page ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Stats Ribbon */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#005f43] text-white rounded-3xl p-6 sm:p-8 shadow-lg">
          <div className="text-center space-y-1 py-2 md:py-0 md:border-r border-white/10 last:border-0">
            <span className="block text-3xl font-serif font-black text-[#00c853]">100%</span>
            <span className="text-xs uppercase font-bold tracking-widest text-slate-200">{t.trustMetric1}</span>
          </div>
          <div className="text-center space-y-1 py-2 md:py-0 md:border-r border-white/10 last:border-0">
            <span className="block text-3xl font-serif font-black text-[#00c853]">4,800+</span>
            <span className="text-xs uppercase font-bold tracking-widest text-slate-200">{t.trustMetric2}</span>
          </div>
          <div className="text-center space-y-1 py-2 md:py-0 last:border-0">
            <span className="block text-3xl font-serif font-black text-[#00c853]">100%</span>
            <span className="text-xs uppercase font-bold tracking-widest text-slate-200">{t.trustMetric3}</span>
          </div>
        </div>

      </div>
    </section>
  );
};