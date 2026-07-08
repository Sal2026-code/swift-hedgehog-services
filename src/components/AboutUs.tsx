"use client";

import React from "react";
import { Sparkles, ShieldCheck } from "lucide-react";

interface AboutUsProps {
  language: "en" | "es";
}

export const AboutUs: React.FC<AboutUsProps> = ({ language }) => {
  const content = {
    en: {
      tag: "Who We Are",
      title: "About G and Bros Services LLC",
      desc1: "G and Bros Services LLC is a trusted cleaning company dedicated to providing dependable, high-quality cleaning services for homes and businesses. With more than 20 years of experience, we take pride in delivering detailed, professional cleaning and excellent customer service.",
      desc2: "Our goal is to help every client enjoy a clean, fresh, and comfortable space. We operate with robust corporate ethics, ensuring every team member is fully insured, highly vetted, and carefully trained on advanced sanitization techniques.",
      stat1: "Years Exp",
      stat2: "Insured",
      stat3: "Rated Reviews",
      bullet1Title: "Safe & Fully Insured",
      bullet1Sub: "Rest easy, you're fully covered",
      bullet2Title: "Premium Quality Supplies",
      bullet2Sub: "Strictly eco-friendly cleaning"
    },
    es: {
      tag: "Quiénes Somos",
      title: "Sobre G and Bros Services LLC",
      desc1: "G and Bros Services LLC es una empresa de limpieza de confianza dedicada a brindar servicios de limpieza confiables y de alta calidad para hogares y empresas. Con más de 20 años de experiencia, nos enorgullecemos de ofrecer una limpieza detallada, profesional y un excelente servicio al cliente.",
      desc2: "Nuestro objetivo es ayudar a cada cliente a disfrutar de un espacio limpio, fresco y cómodo. Operamos con una sólida ética corporativa, garantizando que cada miembro del equipo esté totalmente asegurado, altamente calificado y capacitado en técnicas avanzadas de desinfección.",
      stat1: "Años Exp",
      stat2: "Asegurado",
      stat3: "Reseñas de 5★",
      bullet1Title: "Seguro y Protegido",
      bullet1Sub: "Duerma tranquilo, está totalmente cubierto",
      bullet2Title: "Suministros de Calidad Premium",
      bullet2Sub: "Limpieza estrictamente ecológica"
    }
  };

  const t = content[language];

  return (
    <section id="about" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visuals */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-slate-800 aspect-[4/3] sm:aspect-square shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
              alt="G and Bros cleaning team at work"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
            />
            {/* Elegant overlay card with stats */}
            <div className="absolute bottom-6 left-6 right-6 bg-slate-950/90 border border-teal-500/30 rounded-2xl p-5 shadow-xl backdrop-blur-md">
              <div className="flex justify-around text-center">
                <div>
                  <span className="text-3xl font-black text-teal-400 block font-serif">20+</span>
                  <span className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">{t.stat1}</span>
                </div>
                <div className="border-l border-slate-800" />
                <div>
                  <span className="text-3xl font-black text-teal-400 block font-serif">100%</span>
                  <span className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">{t.stat2}</span>
                </div>
                <div className="border-l border-slate-800" />
                <div>
                  <span className="text-3xl font-black text-teal-400 block font-serif">5★</span>
                  <span className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">{t.stat3}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="text-xs font-bold tracking-[0.25em] text-teal-400 uppercase">
              {t.tag}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif text-white">
              {t.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full" />
            
            <p className="text-slate-300 text-lg leading-relaxed font-light">
              {t.desc1}
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {t.desc2}
            </p>

            {/* Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-teal-500/10 text-teal-400 rounded-lg">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{t.bullet1Title}</p>
                  <p className="text-xs text-slate-400">{t.bullet1Sub}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-teal-500/10 text-teal-400 rounded-lg">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{t.bullet2Title}</p>
                  <p className="text-xs text-slate-400">{t.bullet2Sub}</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};