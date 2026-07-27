"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { Services } from "@/components/Services";
import { AddonsGrid } from "@/components/AddonsGrid";
import { Estimator } from "@/components/Estimator";
import { ForumSection } from "@/components/ForumSection";
import { ContactSection } from "@/components/ContactSection";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { LOCALIZATION } from "@/utils/localization";
import { showSuccess } from "@/utils/toast";

export interface ForumQuestion {
  id: number;
  category: "pets" | "safety" | "pricing" | "general";
  questionEn: string;
  questionEs: string;
  answerEn: string;
  answerEs: string;
  likes: number;
}

const INITIAL_QUESTIONS: ForumQuestion[] = [
  {
    id: 1,
    category: "pets",
    questionEn: "Are your cleaning products safe for dogs and cats?",
    questionEs: "¿Sus productos de limpieza son seguros para perros y gatos?",
    answerEn: "Yes! All our cleaning solutions are non-toxic, eco-friendly, and 100% safe for pets and children.",
    answerEs: "¡Sí! Todas nuestras soluciones de limpieza son no tóxicas, ecológicas y 100% seguras para mascotas y niños.",
    likes: 14,
  },
  {
    id: 2,
    category: "safety",
    questionEn: "Do I need to be home during the cleaning service?",
    questionEs: "¿Necesito estar en casa durante el servicio de limpieza?",
    answerEn: "No, many clients provide us with a key or lockbox code. Our cleaners are thoroughly background-checked and insured.",
    answerEs: "No, muchos clientes nos proporcionan una llave o código de caja de seguridad. Nuestro personal está verificado y asegurado.",
    likes: 21,
  },
  {
    id: 3,
    category: "pricing",
    questionEn: "How are prices calculated for custom apartment sizes?",
    questionEs: "¿Cómo se calculan los precios para tamaños de departamento personalizados?",
    answerEn: "Our estimator uses base bedroom and bathroom counts plus optional add-ons to give you an accurate ballpark quote.",
    answerEs: "Nuestro cotizador utiliza el número base de habitaciones y baños más extras opcionales para darle una cotización estimada precisa.",
    likes: 9,
  },
  {
    id: 4,
    category: "general",
    questionEn: "What is included in the Move-In / Move-Out service?",
    questionEs: "¿Qué incluye el servicio de Mudanza (Entrada / Salida)?",
    answerEn: "It includes an exhaustive deep clean of empty homes, including inside all cabinets, drawers, oven, and fridge.",
    answerEs: "Incluye una limpieza profunda exhaustiva de viviendas vacías, incluyendo el interior de gabinetes, cajones, horno y refrigerador.",
    likes: 18,
  },
];

const Index = () => {
  const [language, setLanguage] = useState<"english" | "spanish">("english");
  const [cleaningTier, setCleaningTier] = useState<"standard" | "deep" | "move">("deep");
  const [rooms, setRooms] = useState(2);
  const [baths, setBaths] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["oven"]);
  const [prefilledMessage, setPrefilledMessage] = useState("");
  const [questions, setQuestions] = useState<ForumQuestion[]>(INITIAL_QUESTIONS);

  const handleScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleAddon = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  const handleApplyEstimate = (formattedQuoteText: string) => {
    setPrefilledMessage(formattedQuoteText);
    handleScrollTo("contact");
    showSuccess(
      language === "english"
        ? "Estimate details copied to form! Please fill in your details to book."
        : "¡Detalles de cotización copiados al formulario! Complete sus datos para reservar."
    );
  };

  const handleAddQuestion = (name: string, category: string, query: string) => {
    const newQuestion: ForumQuestion = {
      id: Date.now(),
      category: category as ForumQuestion["category"],
      questionEn: query,
      questionEs: query,
      answerEn: `Thank you ${name || "friend"}! Our support team will respond shortly with details.`,
      answerEs: `¡Gracias ${name || "amigo"}! Nuestro equipo responderá en breve con más detalles.`,
      likes: 1,
    };
    setQuestions((prev) => [newQuestion, ...prev]);
    showSuccess(
      language === "english"
        ? "Your question has been posted to the forum!"
        : "¡Su pregunta ha sido publicada en el foro!"
    );
  };

  const tHeader = LOCALIZATION[language].header;

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-[#00c853]/30 selection:text-[#005f43]">
      <Header
        language={language}
        setLanguage={setLanguage}
        onScrollTo={handleScrollTo}
      />

      <main className="flex-1">
        <Hero language={language} onScrollTo={handleScrollTo} />
        <TrustBadges language={language} />
        <Services
          language={language}
          onScrollTo={handleScrollTo}
          setCleaningTier={setCleaningTier}
        />
        <AddonsGrid
          language={language}
          selectedAddons={selectedAddons}
          toggleAddon={toggleAddon}
        />
        <Estimator
          language={language}
          cleaningTier={cleaningTier}
          setCleaningTier={setCleaningTier}
          rooms={rooms}
          setRooms={setRooms}
          baths={baths}
          setBaths={setBaths}
          selectedAddons={selectedAddons}
          toggleAddon={toggleAddon}
          onApplyEstimate={handleApplyEstimate}
        />
        <ForumSection
          language={language}
          questions={questions}
          setQuestions={setQuestions}
          onAddQuestion={handleAddQuestion}
        />
        <ContactSection
          language={language}
          prefilledMessage={prefilledMessage}
        />
      </main>

      <footer className="bg-[#003324] text-white py-12 border-t border-emerald-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-xs font-semibold text-emerald-200">
            {tHeader.rights}
          </p>
          <MadeWithDyad />
        </div>
      </footer>
    </div>
  );
};

export default Index;