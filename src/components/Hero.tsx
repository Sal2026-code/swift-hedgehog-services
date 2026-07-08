"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, Leaf, Award, Languages, Check, ArrowRight, ArrowLeftRight, HelpCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // Rotate testimonials automatically
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const content = {
    english: {
      headline: "Flawless homes by G & Bros Services Inc.",
      viewServices: "View Services",
      askQuestion: "Ask a Question",
      values: [
        {
          title: "Insured & vetted staff",
          desc: "Full comprehensive liability background safety checks.",
          icon: <ShieldCheck className="w-5 h-5 text-[#00c853]" />
        },
        {
          title: "Eco-friendly products included",
          desc: "Zero toxic ingredients, green clean seal certified.",
          icon: <Leaf className="w-5 h-5 text-[#00c853]" />
        },
        {
          title: "Strict quality oversight",
          desc: "Every clean supervisor checked for immaculate ratings.",
          icon: <Award className="w-5 h-5 text-[#00c853]" />
        },
        {
          title: "We speak your language!",
          desc: "Flawless bilingual English & Spanish client care.",
          icon: <Languages className="w-5 h-5 text-[#00c853]" />
        }
      ],
      premiumPlanTitle: "Perfect Apartment Package",
      premiumBadge: "G & Bros Guaranteed!",
      premiumTasks: [
        "Dusting and polishing of high-reach areas",
        "Deep carpet wash & hardwood mop treatment",
        "Sanitized light switches, door handles, & baseboards",
        "Polishing of chrome fixtures and kitchen surfaces"
      ],
      trustMetric1: "100% Satisfaction",
      trustMetric2: "4,800+ Apartments Cleaned",
      trustMetric3: "100% Sparkle Guarantee"
    },
    spanish: {
      headline: "Tu apartamento impecable por G & Bros Services Inc.",
      viewServices: "Ver Servicios",
      askQuestion: "Hacer Pregunta",
      values: [
        {
          title: "Personal asegurado y evaluado",
          desc: "Verificación de antecedentes y póliza de cobertura total.",
          icon: <ShieldCheck className="w-5 h-5 text-[#00c853]" />
        },
        {
          title: "Productos ecológicos incluidos",
          desc: "Sin químicos agresivos, certificado Green Seal.",
          icon: <Leaf className="w-5 h-5 text-[#00c853]" />
        },
        {
          title: "Estricta supervisión de calidad",
          desc: "Cada trabajo es verificado por un supervisor experto.",
          icon: <Award className="w-5 h-5 text-[#00c853]" />
        },
        {
          title: "¡Hablamos tu idioma!",
          desc: "Atención al cliente en inglés y español con fluidez.",
          icon: <Languages className="w-5 h-5 text-[#00c853]" />
        }
      ],
      premiumPlanTitle: "Paquete Apartamento Perfecto",
      premiumBadge: "¡Garantía G & Bros!",
      premiumTasks: [
        "Desempolvado y pulido de áreas de difícil alcance",
        "Lavado de alfombras y tratamiento de pisos de madera",
        "Desinfección de interruptores, manijas de puertas y zócalos",
        "Pulido de accesorios cromados y encimeras de cocina"
      ],
      trustMetric1: "100% Satisfacción",
      trustMetric2: "4.800+ Apartamentos Limpios",
      trustMetric3: "100% Brillo Garantizado"
    }
  };

  const t = content[language];

  return (
    <section id="hero" className="relative pt-12 pb-20 bg-gradient-to-br from-[#FBF9F6] via-white to-[#FBF9F6] border-b border-gray-150">
      
      {/* Decorative clean radial graphics */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#00c853]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-[#005f43]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Value Props & CTAs */}
          <div className="lg:col-span-7 text-left space-y-8">
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1e293b] font-serif leading-tight">
              {t.headline.split("G & Bros").map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className="text-[#005f43] block sm:inline relative">
                      G & Bros
                      <span className="absolute left-0 bottom-1 w-full h-1 bg-[#00c853] rounded-full"></span>
                    </span>
                  )}
                </React.Fragment>
              ))}
            </h1>

            {/* 2x2 Value Proposition Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {t.values.map((v, idx) => (
                <div key={idx} className="flex gap-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="p-2.5 bg-[#00c853]/10 text-[#00c853] rounded-xl h-fit">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1e293b]">{v.title}</h4>
                    <p className="text-xs text-[#64748b] mt-0.5 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Core Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => onScrollTo("services")}
                className="bg-[#005f43] hover:bg-[#004732] text-white font-extrabold px-8 py-6 rounded-xl text-md shadow-lg shadow-[#005f43]/20 flex items-center justify-center gap-2 group transition-all"
              >
                <span>{t.viewServices}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

          {/* Right Column: Premium Plan checklist card & Customer testimonials */}
          <div className="lg:col-span-5">
            <div className="bg-white border-2 border-[#005f43]/10 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-[#005f43]" />
              
              {/* Premium Header */}
              <div className="flex justify-between items-start gap-2 mb-6">
                <div>
                  <h3 className="text-xl font-serif font-extrabold text-[#005f43]">
                    {t.premiumPlanTitle}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {language === "english" ? "Deep standard package" : "Paquete estándar profundo"}
                  </p>
                </div>
                <span className="bg-[#00c853]/15 text-[#005f43] border border-[#00c853]/20 text-[10px] uppercase font-black px-3 py-1 rounded-full tracking-wide">
                  {t.premiumBadge}
                </span>
              </div>

              {/* Task Checklist list */}
              <ul className="space-y-3 mb-8 text-left">
                {t.premiumTasks.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm">
                    <div className="p-1 bg-[#00c853]/10 text-[#00c853] rounded-full mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-slate-700 font-medium leading-relaxed">{task}</span>
                  </li>
                ))}
              </ul>

              {/* Dynamic Customer Testimonial slider block */}
              <div className="bg-[#FBF9F6] border border-gray-100 rounded-2xl p-5 relative text-left">
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-3.5 h-3.5 fill-[#00c853] text-[#00c853]" />
                  ))}
                </div>
                <p className="text-xs italic text-slate-600 leading-relaxed font-serif">
                  {language === "english" ? TESTIMONIALS[activeTestimonialIdx].en : TESTIMONIALS[activeTestimonialIdx].es}
                </p>
                <p className="text-[10px] font-black uppercase text-[#005f43] tracking-widest mt-2">
                  {TESTIMONIALS[activeTestimonialIdx].author}
                </p>

                {/* Slider indicators */}
                <div className="flex gap-1.5 justify-end absolute bottom-3 right-4">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonialIdx(idx)}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${activeTestimonialIdx === idx ? "bg-[#005f43] w-3" : "bg-slate-300"}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Section Footer: horizontal 3-column trust metrics ribbon */}
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