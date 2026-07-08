"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { LOCALIZATION } from "@/utils/localization";

interface FooterProps {
  language: "english" | "spanish";
  onScrollTo: (elementId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onScrollTo }) => {
  const t = LOCALIZATION[language].footer;

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onScrollTo("hero");
    }
  };

  return (
    <footer className="bg-[#004732] text-white/90 border-t border-[#003324] py-8 shadow-inner" aria-label="Footer Area">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-xs font-bold">
          
          {/* Left copyright alignment text */}
          <div className="text-emerald-100/90 tracking-wide">
            {t.rights}
          </div>

          {/* Right Floating Arrow scroll to top anchor button */}
          <button
            onClick={() => onScrollTo("hero")}
            onKeyDown={handleKeyPress}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-[#00c853] border border-white/20 hover:border-[#00c853] text-[#00c853] hover:text-[#004732] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00c853] shadow-md shadow-black/10"
            aria-label="Scroll back up to the top"
          >
            <ArrowUp className="w-5 h-5 stroke-[3]" />
          </button>

        </div>

      </div>
    </footer>
  );
};