"use client";

import React from "react";
import { Flame, Refrigerator, Sun, Clipboard, Coffee, Eye } from "lucide-react";
import { LOCALIZATION } from "@/utils/localization";

interface AddonsGridProps {
  language: "english" | "spanish";
  selectedAddons: string[];
  toggleAddon: (addonId: string) => void;
}

export const AddonsGrid: React.FC<AddonsGridProps> = ({ language, selectedAddons, toggleAddon }) => {
  const t = LOCALIZATION[language].addons;

  const iconsMap: Record<string, React.ReactNode> = {
    oven: <Flame className="w-5 h-5 text-[#005f43]" />,
    fridge: <Refrigerator className="w-5 h-5 text-[#005f43]" />,
    windows: <Sun className="w-5 h-5 text-[#005f43]" />,
    balcony: <Clipboard className="w-5 h-5 text-[#005f43]" />,
    ironing: <Coffee className="w-5 h-5 text-[#005f43]" />,
    mattress: <Eye className="w-5 h-5 text-[#005f43]" />
  };

  const handleKeyPress = (e: React.KeyboardEvent, id: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleAddon(id);
    }
  };

  return (
    <section id="addons" className="py-20 bg-[#FBF9F6] border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-extrabold tracking-[0.25em] text-[#00c853] uppercase block mb-3">
            {t.subHeader}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-serif text-[#005f43]">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-[#00c853] mx-auto mt-6 rounded-full" />
        </div>

        {/* 2x3 grid of interactive block cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="group" aria-label="Add-on selection controls">
          {t.items.map((addon) => {
            const isSelected = selectedAddons.includes(addon.id);
            return (
              <div
                key={addon.id}
                role="checkbox"
                aria-checked={isSelected}
                tabIndex={0}
                onClick={() => toggleAddon(addon.id)}
                onKeyDown={(e) => handleKeyPress(e, addon.id)}
                className={`cursor-pointer rounded-2xl border bg-white p-6 flex gap-4 hover:border-[#005f43] hover:scale-[1.03] active:scale-[0.98] hover:shadow-lg transition-all duration-300 relative text-left focus:outline-none focus:ring-2 focus:ring-[#005f43] shadow-sm ${isSelected ? "border-[#005f43] ring-4 ring-[#005f43]/5" : "border-slate-200"}`}
              >
                
                {/* Selected Tag Indicator */}
                {isSelected && (
                  <div className="absolute top-4 right-4 w-6 h-6 bg-[#00c853] text-[#004732] rounded-full flex items-center justify-center font-extrabold text-sm shadow-sm border border-white animate-scale-in">
                    ✓
                  </div>
                )}

                <div className="p-3.5 bg-[#00c853]/15 text-[#005f43] rounded-xl h-fit border border-[#00c853]/20 transition-all duration-300 group-hover:rotate-6">
                  {iconsMap[addon.id]}
                </div>

                <div className="flex flex-col justify-between py-0.5">
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-base leading-tight">
                      {addon.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1.5">
                      {language === "english" ? "Extra premium service upgrade" : "Mejora de servicio premium extra"}
                    </p>
                  </div>

                  <span className="text-sm font-black text-[#005f43] bg-[#00c853]/10 px-3 py-1 rounded-full w-fit tracking-wide mt-4 border border-[#00c853]/20">
                    {t.priceLabel}{addon.price}
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