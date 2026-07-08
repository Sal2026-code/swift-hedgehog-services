"use client";

import React from "react";
import { Flame, Refrigerator, Clipboard, Sun, Coffee, Eye } from "lucide-react";

interface AddonsGridProps {
  language: "english" | "spanish";
  selectedAddons: string[];
  toggleAddon: (addonId: string) => void;
}

export const AddonsGrid: React.FC<AddonsGridProps> = ({ language, selectedAddons, toggleAddon }) => {
  const content = {
    english: {
      tag: "Tailored Premium Upgrades",
      title: "Custom Add-ons & Extra Services",
      subtitle: "Enhance your appointment space by checking custom high-fidelity extras tailored just for you.",
      priceText: "Add-on Price: +€"
    },
    spanish: {
      tag: "Mejoras Premium a Medida",
      title: "Extras y Servicios Adicionales",
      subtitle: "Mejore su servicio seleccionando los extras de alta calidad adaptados a sus necesidades.",
      priceText: "Precio Extra: +€"
    }
  };

  const ADDONS = [
    {
      id: "oven",
      titleEn: "Oven Interior Cleaning",
      titleEs: "Limpieza de Interior de Horno",
      descEn: "Deep degreasing and carbon build-up scraping.",
      descEs: "Desengrase profundo y raspado de carbón.",
      price: 25,
      icon: <Flame className="w-5 h-5 text-[#00c853]" />
    },
    {
      id: "fridge",
      titleEn: "Fridge Interior Cleaning",
      titleEs: "Limpieza de Interior de Nevera",
      descEn: "Full disinfection, stain scraping & polishing.",
      descEs: "Desinfección total, remoción de manchas y pulido.",
      price: 25,
      icon: <Refrigerator className="w-5 h-5 text-[#00c853]" />
    },
    {
      id: "windows",
      titleEn: "Full Exterior Window & Track",
      titleEs: "Ventanas Exteriores y Rieles",
      descEn: "Complete track cleanup, glass shine & polishing.",
      descEs: "Limpieza de rieles, brillo de vidrios y pulido.",
      price: 35,
      icon: <Sun className="w-5 h-5 text-[#00c853]" />
    },
    {
      id: "balcony",
      titleEn: "Balcony & Terrace Deep Wash",
      titleEs: "Lavado Profundo de Terraza/Balcón",
      descEn: "High-pressure dirt removal, grout restoration.",
      descEs: "Remoción de suciedad a presión y baldosas.",
      price: 30,
      icon: <Clipboard className="w-5 h-5 text-[#00c853]" />
    },
    {
      id: "ironing",
      titleEn: "Express Bedding & Ironing",
      titleEs: "Ropa de Cama y Planchado Express",
      descEn: "Perfect bedding alignment, fabric steam styling.",
      descEs: "Alineación de sábanas y alisado de prendas a vapor.",
      price: 20,
      icon: <Coffee className="w-5 h-5 text-[#00c853]" />
    },
    {
      id: "mattress",
      titleEn: "Anti-Allergen Mattress Treatment",
      titleEs: "Tratamiento de Colchón Anti-Alergias",
      descEn: "UV sanitization and heavy dust mite vacuuming.",
      descEs: "Sanitización UV y aspirado profundo de ácaros.",
      price: 25,
      icon: <Eye className="w-5 h-5 text-[#00c853]" />
    }
  ];

  const t = content[language];

  return (
    <section id="addons" className="py-24 bg-[#FBF9F6] border-b border-gray-150">
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

        {/* Grid of Addons Selection Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADDONS.map((addon) => {
            const isSelected = selectedAddons.includes(addon.id);
            return (
              <div
                key={addon.id}
                onClick={() => toggleAddon(addon.id)}
                className={`cursor-pointer rounded-2xl border-2 p-6 flex gap-4 transition-all duration-300 relative text-left ${isSelected ? "border-[#005f43] bg-white ring-2 ring-[#005f43]/5 shadow-md" : "bg-white border-gray-150 hover:border-[#005f43]/20 shadow-sm"}`}
              >
                
                {/* Floating Selected Check Indicator */}
                {isSelected && (
                  <div className="absolute top-3 right-3 w-5 h-5 bg-[#005f43] text-white rounded-full flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                )}

                <div className={`p-3 bg-[#00c853]/10 text-[#005f43] rounded-xl h-fit transition-colors ${isSelected ? "bg-[#005f43]/10" : ""}`}>
                  {addon.icon}
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-[#1e293b] text-base leading-tight">
                      {language === "english" ? addon.titleEn : addon.titleEs}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {language === "english" ? addon.descEn : addon.descEs}
                    </p>
                  </div>

                  <span className="text-xs font-black text-[#005f43] tracking-wide mt-3 inline-block">
                    {t.priceText}{addon.price}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};