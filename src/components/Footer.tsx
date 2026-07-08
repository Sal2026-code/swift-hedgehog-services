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
    <footer className="bg-[#005f43] text-white/80 border-t border-[#004732] py-8" aria-label="Footer Area">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold">
          
          {/* Left copyright alignment text */}
          <div className="text-slate-300">
            {t.rights}
          </div>

          {/* Right Floating Arrow scroll to top anchor button */}
          <button
            onClick={() => onScrollTo("hero")}
            onKeyDown={handleKeyPress}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#00c853] text-[#00c853] transition-all focus:outline-none focus:ring-2 focus:ring-[#00c853]"
            aria-label="Scroll back up to the top"
          >
            <ArrowUp className="w-5 h-5 stroke-[2.5]" />
          </button>

        </div>

      </div>
    </footer>
  );
};