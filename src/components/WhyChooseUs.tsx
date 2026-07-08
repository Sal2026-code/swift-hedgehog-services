"use client";

import React from "react";
import { Shield, Sparkles, Check, Heart, Award, Clock } from "lucide-react";

interface WhyChooseUsProps {
  language: "en" | "es";
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ language }) => {
  const content = {
    en: {
      tag: "Elite Trust Factors",
      title: "Why Choose G and Bros Services LLC?",
      subtitle: "Discover why our clients stay with us for years. Dedicated cleanups, certified reliability, and a clean fresh environment.",
      points: [
        {
          title: "Fully Insured",
          desc: "Sleep easy. Your home and business premises are protected with our extensive liability and insurance protection.",
          icon: <Shield className="w-5 h-5 text-teal-400" />
        },
        {
          title: "Over 20 Years of Experience",
          desc: "With over two decades of cleaning knowledge, we understand the finest details of premium cleanups and sanitation.",
          icon: <Award className="w-5 h-5 text-teal-400" />
        },
        {
          title: "Reliable and Detail-Oriented",
          desc: "Our trained experts never miss a spot. We work off strict checklist regimens for immaculate results every visit.",
          icon: <Sparkles className="w-5 h-5 text-teal-400" />
        },
        {
          title: "Flexible Scheduling",
          desc: "We work on your schedule. Booking daily, weekly, bi-weekly, monthly, or customizable specialty slots.",
          icon: <Clock className="w-5 h-5 text-teal-400" />
        },
        {
          title: "Residential & Commercial Expertise",
          desc: "From cozy city flats and houses to corporate office hubs and active warehouses, we clean them all with ease.",
          icon: <Check className="w-5 h-5 text-teal-400" />
        },
        {
          title: "Free Estimates & Quotes",
          desc: "Transparent rates without hidden costs. Calculate your custom quotes on-site with simple options.",
          icon: <Check className="w-5 h-5 text-teal-400" />
        },
        {
          title: "Friendly & Professional Service",
          desc: "Our cleaning crews are respectful, professional, background-checked, and deeply committed to elite customer care.",
          icon: <Heart className="w-5 h-5 text-teal-400" />
        }
      ]
    },
    es: {
      tag: "Factores de Confianza de Élite",
      title: "¿Por Qué Elegir G and Bros Services LLC?",
      subtitle: "Descubra por qué nuestros clientes se quedan con nosotros por años. Limpiezas dedicadas, confiabilidad certificada y un ambiente fresco y limpio.",
      points: [
        {
          title: "Totalmente Asegurado",
          desc: "Duerma tranquilo. Sus instalaciones residenciales y comerciales están protegidas con nuestra amplia cobertura de responsabilidad.",
          icon: <Shield className="w-5 h-5 text-teal-400" />
        },
        {
          title: "Más de 20 Años de Experiencia",
          desc: "Con más de dos décadas de conocimiento en el sector, comprendemos los detalles más finos del aseo premium y la desinfección.",
          icon: <Award className="w-5 h-5 text-teal-400" />
        },
        {
          title: "Confiables y Detallistas",
          desc: "Nuestros expertos capacitados nunca pasan por alto un rincón. Trabajamos con estrictos regímenes de listas de control.",
          icon: <Sparkles className="w-5 h-5 text-teal-400" />
        },
        {
          title: "Horarios Flexibles",
          desc: "Trabajamos según su horario. Ofrecemos reservaciones diarias, semanales, quincenales, mensuales o personalizadas.",
          icon: <Clock className="w-5 h-5 text-teal-400" />
        },
        {
          title: "Experiencia Residencial y Comercial",
          desc: "Desde apartamentos acogedores y casas hasta centros de oficinas corporativas y almacenes activos, lo limpiamos todo.",
          icon: <Check className="w-5 h-5 text-teal-400" />
        },
        {
          title: "Presupuestos Gratuitos",
          desc: "Tarifas transparentes sin costos ocultos. Calcule su cotización personalizada con opciones simples.",
          icon: <Check className="w-5 h-5 text-teal-400" />
        },
        {
          title: "Servicio Amistoso y Profesional",
          desc: "Nuestros equipos son respetuosos, profesionales, investigados rigurosamente y comprometidos con una excelente atención.",
          icon: <Heart className="w-5 h-5 text-teal-400" />
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="why-choose-us" className="py-24 bg-slate-950 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(20,184,166,0.02),transparent_40%)] pointer-events-none" />

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

        {/* Core Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.points.map((pt, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex gap-4 hover:border-teal-500/20 transition-all duration-300"
            >
              <div className="p-3 bg-teal-500/10 rounded-xl text-teal-400 h-fit">
                {pt.icon}
              </div>
              <div className="text-left">
                <h4 className="text-lg font-bold text-white mb-2">
                  {pt.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};