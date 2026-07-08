"use client";

import React from "react";
import { Building, Mail, Phone, MapPin, Globe, ArrowUp } from "lucide-react";

interface FooterProps {
  language: "es" | "en";
  onScrollTo: (elementId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onScrollTo }) => {
  const content = {
    es: {
      brand: "AURA RESIDENCIAS",
      tagline: "Exclusividad & Altura",
      desc: "Proyecto inmobiliario residencial premium que redefine el estándar del buen vivir contemporáneo en Escazú.",
      navTitle: "Navegación",
      models: "Modelos",
      amenities: "Amenidades",
      calculator: "Simulador de Inversión",
      contact: "Contacto",
      addressTitle: "Oficina de Ventas",
      addressVal: "San Rafael, Escazú. San José, Costa Rica.",
      phone: "+506 4000-AURA",
      email: "ventas@aurapreventas.com",
      rights: "© 2026 Aura Residencias. Todos los derechos reservados. Desarrollado por Desarrollos del Bosque S.A."
    },
    en: {
      brand: "AURA RESIDENCE",
      tagline: "Exclusivity & Height",
      desc: "Premium residential real estate project redefining the standards of modern luxury living in Escazu.",
      navTitle: "Navigation",
      models: "Models",
      amenities: "Amenities",
      calculator: "Investment Calculator",
      contact: "Contact Us",
      addressTitle: "Sales Showroom",
      addressVal: "San Rafael, Escazu. San Jose, Costa Rica.",
      phone: "+506 4000-AURA",
      email: "sales@aurapreventas.com",
      rights: "© 2026 Aura Residence. All rights reserved. Built by Desarrollos del Bosque S.A."
    }
  };

  const t = content[language];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Foot top info grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Col 1: Corporate details */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onScrollTo("hero")}>
              <div className="p-2.5 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl text-slate-950">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-extrabold tracking-wider text-white">
                  {t.brand}
                </span>
                <p className="text-[9px] tracking-widest text-amber-500 uppercase font-semibold">
                  {t.tagline}
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-light">
              {t.desc}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              {t.navTitle}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onScrollTo("models")} className="hover:text-amber-400 transition-colors">
                  {t.models}
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo("amenities")} className="hover:text-amber-400 transition-colors">
                  {t.amenities}
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo("calculator")} className="hover:text-amber-400 transition-colors">
                  {t.calculator}
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo("contact")} className="hover:text-amber-400 transition-colors">
                  {t.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Sales office */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              {t.addressTitle}
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500/80 mt-0.5 flex-shrink-0" />
                <span>{t.addressVal}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500/80 flex-shrink-0" />
                <span className="font-semibold text-slate-200">{t.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500/80 flex-shrink-0" />
                <span className="hover:text-amber-400 transition-colors">{t.email}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Back to top button */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-light">
          <p>{t.rights}</p>
          <button
            onClick={() => onScrollTo("hero")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-amber-400 hover:text-amber-300 transition-all"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>{language === "es" ? "Subir" : "Scroll Up"}</span>
          </button>
        </div>

      </div>
    </footer>
  );
};