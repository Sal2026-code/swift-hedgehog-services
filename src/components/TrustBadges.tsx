"use client";

import React from "react";
import { CheckCircle, ShieldCheck, Award, Heart, HelpCircle, Key } from "lucide-react";

interface TrustBadgesProps {
  language: "english" | "spanish";
}

export const TrustBadges: React.FC<TrustBadgesProps> = ({ language }) => {
  const BADGES = [
    {
      titleEn: "Approved Vendor",
      titleEs: "Proveedor Aprobado",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      titleEn: "Compliance Depot Approved",
      titleEs: "Aprobado Compliance Depot",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      titleEn: "Green Seal Certified",
      titleEs: "Certificado Green Seal",
      icon: <Award className="w-6 h-6" />
    },
    {
      titleEn: "U.S. EPA - DfE",
      titleEs: "U.S. EPA - DfE",
      icon: <Heart className="w-6 h-6" />
    },
    {
      titleEn: "GreenGlo Brand Partner",
      titleEs: "Socio de GreenGlo",
      icon: <HelpCircle className="w-6 h-6" />
    },
    {
      titleEn: "Strategic Partnership",
      titleEs: "Alianza Estratégica",
      icon: <Key className="w-6 h-6" />
    }
  ];

  return (
    <section className="bg-white py-12 border-b border-gray-150 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Row of badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {BADGES.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-[#FBF9F6] border border-[#005f43]/5 rounded-full py-2.5 px-5 shadow-sm hover:border-[#00c853]/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-[#005f43] text-[#00c853] flex items-center justify-center font-bold">
                {badge.icon}
              </div>
              <div className="text-left">
                <p className="text-xs font-black uppercase text-[#1e293b] tracking-wide">
                  {language === "english" ? badge.titleEn : badge.titleEs}
                </p>
                <p className="text-[9px] font-bold text-[#00c853] uppercase tracking-wider">
                  {language === "english" ? "Accredited" : "Acreditado"}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};