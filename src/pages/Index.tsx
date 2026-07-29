"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TrustBadges } from "@/components/TrustBadges";
import { Services } from "@/components/Services";
import { ForumSection } from "@/components/ForumSection";
import { ContactSection } from "@/components/ContactSection";
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
  dislikes: number;
}

const INITIAL_QUESTIONS: ForumQuestion[] = [
  {
    id: 1,
    category: "pets",
    questionEn: "Are your cleaning products safe for dogs and cats?",
    questionEs: "¿Sus productos de limpieza son seguros para perros y gatos?",
    answerEn: "Yes! We use eco-friendly, non-toxic products that are completely safe for pets and children.",
    answerEs: "¡Sí! Utilizamos productos ecológicos y no tóxicos que son totalmente seguros para mascotas y niños.",
    likes: 0,
    dislikes: 0
  },
  {
    id: 2,
    category: "safety",
    questionEn: "Do I need to be home during the cleaning service?",
    questionEs: "¿Necesito estar en casa durante el servicio de limpieza?",
    answerEn: "No, many of our clients provide key or lockbox access. All our staff members are background-checked and fully insured.",
    answerEs: "No, muchos de nuestros clientes nos proporcionan acceso mediante llave o caja de seguridad. Todo nuestro personal está verificado y asegurado.",
    likes: 0,
    dislikes: 0
  },
  {
    id: 3,
    category: "general",
    questionEn: "Do you bring your own cleaning supplies and equipment?",
    questionEs: "¿Traen sus propios insumos y equipos de limpieza?",
    answerEn: "We bring all professional equipment and eco-friendly cleaning supplies required for the job.",
    answerEs: "Traemos todo el equipo profesional y productos ecológicos necesarios para realizar el trabajo.",
    likes: 0,
    dislikes: 0
  }
];

export default function Index() {
  const [language, setLanguage] = useState<"english" | "spanish">("english");
  const [questions, setQuestions] = useState<ForumQuestion[]>(INITIAL_QUESTIONS);

  const handleScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAddQuestion = (name: string, category: string, query: string) => {
    const newQuestion: ForumQuestion = {
      id: Date.now(),
      category: (category as "pets" | "safety" | "pricing" | "general") || "general",
      questionEn: query,
      questionEs: query,
      answerEn: "Thank you for asking! A member of our team will review and publish an official answer soon.",
      answerEs: "¡Gracias por su pregunta! Un miembro de nuestro equipo revisará y publicará una respuesta oficial pronto.",
      likes: 0,
      dislikes: 0
    };
    setQuestions((prev) => [newQuestion, ...prev]);
    showSuccess(
      language === "english"
        ? "Question submitted! Our team will respond shortly."
        : "¡Pregunta enviada! Nuestro equipo responderá pronto."
    );
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

        <TrustBadges 
          language={language} 
        />

        <Services 
          language={language} 
          onScrollTo={handleScrollTo} 
        />

        <WhyChooseUs 
          language={language} 
        />

        <ForumSection 
          language={language}
          questions={questions}
          setQuestions={setQuestions}
          onAddQuestion={handleAddQuestion}
        />

        <ContactSection 
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