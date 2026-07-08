"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { Services } from "@/components/Services";
import { AddonsGrid } from "@/components/AddonsGrid";
import { Estimator } from "@/components/Estimator";
import { ForumSection } from "@/components/ForumSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { showSuccess } from "@/utils/toast";

export interface ForumQuestion {
  id: number;
  category: "all" | "pets" | "safety" | "pricing" | "general";
  questionEn: string;
  questionEs: string;
  answerEn: string;
  answerEs: string;
  likes: number;
  hasLiked?: boolean;
}

const INITIAL_FORUM_QUESTIONS: ForumQuestion[] = [
  {
    id: 1,
    category: "pets",
    questionEn: "Are your cleaning products safe for small indoor cats?",
    questionEs: "¿Sus productos de limpieza son seguros para gatos pequeños de interior?",
    answerEn: "Absolutely! We use certified organic, non-toxic products that are 100% safe for cats, dogs, and all household pets.",
    answerEs: "¡Absolutamente! Utilizamos productos orgánicos certificados y no tóxicos que son 100% seguros para gatos, perros y todas las mascotas.",
    likes: 24
  },
  {
    id: 2,
    category: "safety",
    questionEn: "Are your cleaning staff insured in case of accidental damage?",
    questionEs: "¿Su personal de limpieza está asegurado en caso de daños accidentales?",
    answerEn: "Yes, G & Bros Services Inc. carries comprehensive liability insurance. All staff are carefully vetted, background-checked, and highly trained.",
    answerEs: "Sí, G & Bros Services Inc. cuenta con un seguro de responsabilidad civil integral. Todo el personal es seleccionado cuidadosamente, verificado y altamente capacitado.",
    likes: 42
  },
  {
    id: 3,
    category: "pricing",
    questionEn: "Can I cancel or reschedule my appointment without penalties?",
    questionEs: "¿Puedo cancelar o reprogramar mi cita sin penalizaciones?",
    answerEn: "Yes, you can reschedule or cancel free of charge up to 24 hours prior to your scheduled cleaning slot.",
    answerEs: "Sí, puede reprogramar o cancelar de forma gratuita hasta 24 horas antes de su horario de limpieza programado.",
    likes: 15
  },
  {
    id: 4,
    category: "general",
    questionEn: "Do I need to be present at home during the cleaning service?",
    questionEs: "¿Necesito estar presente en casa durante el servicio de limpieza?",
    answerEn: "Not at all. Many of our clients provide key access, digital codes, or leave instructions with their building reception desk.",
    answerEs: "Para nada. Muchos de nuestros clientes nos facilitan acceso con llave, códigos digitales o dejan instrucciones en la recepción del edificio.",
    likes: 31
  }
];

const Index = () => {
  const [language, setLanguage] = useState<"english" | "spanish">("english");
  
  // Pricing Estimator synced states
  const [cleaningTier, setCleaningTier] = useState<"standard" | "deep" | "move">("standard");
  const [rooms, setRooms] = useState<number>(2);
  const [baths, setBaths] = useState<number>(1);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  
  // Community Forum State
  const [forumQuestions, setForumQuestions] = useState<ForumQuestion[]>(INITIAL_FORUM_QUESTIONS);

  // Message field prefilled for ContactSection
  const [contactMessage, setContactMessage] = useState<string>("");

  // Inject Madrid optimized SEO description
  useEffect(() => {
    document.title = language === "english" 
      ? "G & Bros Services Inc. | Premium Apartment Cleaning in Madrid" 
      : "G & Bros Services Inc. | Limpieza de Apartamentos Premium en Madrid";

    const metaDesc = document.querySelector('meta[name="description"]');
    const descText = language === "english"
      ? "Experience premium, certified, and fully-insured apartment deep cleaning services in Madrid with G & Bros Services Inc. Eco-friendly products."
      : "Disfrute de servicios de limpieza profunda de apartamentos premium y asegurados en Madrid con G & Bros Services Inc. Productos ecológicos.";
    
    if (metaDesc) {
      metaDesc.setAttribute("content", descText);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = descText;
      document.head.appendChild(meta);
    }
  }, [language]);

  const handleScrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Toggle dynamic add-ons
  const toggleAddon = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  // Handle estimate submission - generates prefilled request description
  const handleRequestEstimate = (formattedQuoteText: string) => {
    setContactMessage(formattedQuoteText);
    const msg = language === "english"
      ? "Price parameters captured! We have prepared your estimate layout. Please submit your details below."
      : "¡Parámetros de estimación capturados! Hemos preparado el diseño de su cotización. Envíe sus datos abajo.";
    showSuccess(msg);
    handleScrollTo("contact");
  };

  // Handle category questions creation
  const handleAddNewQuestion = (name: string, category: string, query: string) => {
    const categoryMapped = (category === "pets" || category === "safety" || category === "pricing" || category === "general") ? category : "general";
    
    const newQ: ForumQuestion = {
      id: Date.now(),
      category: categoryMapped,
      questionEn: query,
      questionEs: query,
      answerEn: `Hi ${name || "Guest"}, thank you for your question. One of our team representatives will review this query shortly.`,
      answerEs: `Hola ${name || "Invitado"}, gracias por su pregunta. Uno de nuestros representantes de equipo revisará esta consulta en breve.`,
      likes: 0
    };

    setForumQuestions([newQ, ...forumQuestions]);
    const successMsg = language === "english"
      ? "Your question has been posted to our community forum!"
      : "¡Su pregunta ha sido publicada en nuestro foro comunitario!";
    showSuccess(successMsg);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F6] font-sans selection:bg-[#00c853] selection:text-white text-[#1e293b]">
      
      {/* Navigation Header & Top Info Bar */}
      <Header 
        language={language} 
        setLanguage={setLanguage} 
        onScrollTo={handleScrollTo} 
      />

      {/* Main Content Area */}
      <main>
        {/* High-Fidelity Hero Section */}
        <Hero 
          language={language}
          onScrollTo={handleScrollTo}
        />

        {/* Continuous Trust Badges Slider */}
        <TrustBadges language={language} />

        {/* Services Breakdown Grid */}
        <Services 
          language={language}
          onScrollTo={handleScrollTo}
          setCleaningTier={setCleaningTier}
        />

        {/* Custom Add-ons selection segment */}
        <AddonsGrid 
          language={language}
          selectedAddons={selectedAddons}
          toggleAddon={toggleAddon}
        />

        {/* Dynamic Price Estimator Widget */}
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
          onApplyEstimate={handleRequestEstimate}
        />

        {/* Community Q&A forum & Questions entry */}
        <ForumSection 
          language={language}
          questions={forumQuestions}
          setQuestions={setForumQuestions}
          onAddQuestion={handleAddNewQuestion}
        />

        {/* Contact Form with synced estimator description state */}
        <ContactSection 
          language={language}
          prefilledMessage={contactMessage}
        />
      </main>

      {/* Corporate footer block with scroll up option */}
      <Footer 
        language={language}
        onScrollTo={handleScrollTo} 
      />

    </div>
  );
};

export default Index;