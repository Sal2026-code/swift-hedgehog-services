"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Badges } from "@/components/Badges";
import { Services } from "@/components/Services";
import { Addons } from "@/components/Addons";
import { Forum } from "@/components/Forum";
import { Contact } from "@/components/Contact";
import { LOCALIZATION } from "@/utils/localization";

export default function Index() {
  const [language, setLanguage] = useState<"english" | "spanish">("english");

  const handleScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const t = LOCALIZATION[language];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-[#00c853]/20 selection:text-[#005f43]">
      <Header 
        language={language} 
        setLanguage={setLanguage} 
        onScrollTo={handleScrollTo} 
      />

      <main>
        <Hero 
          language={language} 
          onScrollTo={handleScrollTo} 
        />

        <Badges 
          language={language} 
        />

        <Services 
          language={language} 
          onScrollTo={handleScrollTo} 
        />

        <Addons 
          language={language} 
        />

        <Forum 
          language={language} 
        />

        <Contact 
          language={language} 
        />
      </main>

      <footer className="bg-[#003324] text-white py-8 border-t border-white/10 text-center text-xs font-medium">
        <div className="max-w-7xl mx-auto px-4">
          <p>{t.header.rights}</p>
        </div>
      </footer>
    </div>
  );
}