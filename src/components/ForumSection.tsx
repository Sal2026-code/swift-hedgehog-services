"use client";

import React, { useState } from "react";
import { MessageSquare, ThumbsUp, Send, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { ForumQuestion } from "@/pages/Index";

interface ForumSectionProps {
  language: "english" | "spanish";
  questions: ForumQuestion[];
  setQuestions: React.Dispatch<React.SetStateAction<ForumQuestion[]>>;
  onAddQuestion: (name: string, category: string, query: string) => void;
}

export const ForumSection: React.FC<ForumSectionProps> = ({
  language,
  questions,
  setQuestions,
  onAddQuestion
}) => {
  const [activeTab, setActiveTab] = useState<"all" | "pets" | "safety" | "pricing" | "general">("all");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Ask a new question input states
  const [name, setName] = useState("");
  const [category, setCategory] = useState("general");
  const [query, setQuery] = useState("");

  const content = {
    english: {
      tag: "Community Interactive Corner",
      title: "Community Q&A Forum",
      subtitle: "See questions posted by local community residents or query your custom concerns below.",
      all: "All",
      pets: "Products & Pets",
      safety: "Trust & Safety",
      pricing: "Pricing & Plans",
      general: "General Questions",
      responseBadge: "Official Response from G & Bros",
      helpfulText: "Helpful?",
      askTitle: "Ask a new question",
      nameLabel: "Your Name",
      catLabel: "Category Selection",
      queryLabel: "Your Query Detail",
      submitBtn: "Submit Question",
      phName: "e.g. Alexis M.",
      phQuery: "Is there anything G & Bros doesn't clean?...",
      successMsg: "Thanks for checking! Answer generated below."
    },
    spanish: {
      tag: "Rincón Comunitario Interactivo",
      title: "Foro de Q&A Comunitario",
      subtitle: "Vea preguntas publicadas por residentes locales o formule su consulta personalizada abajo.",
      all: "Todos",
      pets: "Productos y Mascotas",
      safety: "Confianza y Seguridad",
      pricing: "Precios y Planes",
      general: "Preguntas Generales",
      responseBadge: "Respuesta Oficial de G & Bros",
      helpfulText: "¿Útil?",
      askTitle: "Hacer una nueva pregunta",
      nameLabel: "Su Nombre",
      catLabel: "Selección de Categoría",
      queryLabel: "Detalle de su Consulta",
      submitBtn: "Enviar Pregunta",
      phName: "ej. Alexis M.",
      phQuery: "¿Hay algo que G & Bros no limpie?...",
      successMsg: "¡Gracias por preguntar! Respuesta generada abajo."
    }
  };

  const t = content[language];

  const handleLike = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setQuestions((prev) =>
      prev.map((q) => {
        if (q.id === id) {
          const liked = !q.hasLiked;
          return {
            ...q,
            likes: liked ? q.likes + 1 : q.likes - 1,
            hasLiked: liked
          };
        }
        return q;
      })
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    onAddQuestion(name, category, query);
    setName("");
    setQuery("");
  };

  // Filter questions depending on tab state
  const filteredQuestions = activeTab === "all"
    ? questions
    : questions.filter((q) => q.category === activeTab);

  return (
    <section id="qa" className="py-24 bg-[#FBF9F6] border-b border-gray-150 relative">
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

        {/* Two Column Forum Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Question Feed & Tab Categories (Left Column) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Category Tab buttons */}
            <div className="flex flex-wrap gap-2 pb-2">
              {(["all", "pets", "safety", "pricing", "general"] as const).map((tabId) => (
                <button
                  key={tabId}
                  onClick={() => {
                    setActiveTab(tabId);
                    setExpandedId(null);
                  }}
                  className={`py-2 px-4 rounded-xl font-bold text-xs tracking-wide transition-all border ${activeTab === tabId ? "bg-[#005f43] border-[#005f43] text-white shadow-sm" : "bg-white border-gray-150 text-slate-600 hover:border-[#005f43]/30"}`}
                >
                  {t[tabId]}
                </button>
              ))}
            </div>

            {/* Questions Feed list */}
            <div className="space-y-4 text-left">
              {filteredQuestions.map((q) => {
                const isExpanded = expandedId === q.id;
                const questionText = language === "english" ? q.questionEn : q.questionEs;
                const answerText = language === "english" ? q.answerEn : q.answerEs;

                return (
                  <div
                    key={q.id}
                    className="bg-white rounded-2xl border border-gray-150 shadow-sm overflow-hidden transition-all duration-300"
                  >
                    {/* Collapsible Trigger */}
                    <div
                      onClick={() => setExpandedId(isExpanded ? null : q.id)}
                      className="p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FBF9F6]/40 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <MessageSquare className="w-5 h-5 text-[#00c853] mt-0.5" />
                        <h4 className="font-extrabold text-[#1e293b] text-sm leading-relaxed">
                          {questionText}
                        </h4>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        {/* Helpful like counter thumbs-up button */}
                        <button
                          onClick={(e) => handleLike(q.id, e)}
                          className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border text-[11px] font-bold transition-all ${q.hasLiked ? "bg-[#00c853]/15 text-[#005f43] border-[#00c853]/30" : "bg-[#FBF9F6] text-slate-500 hover:text-[#005f43] border-gray-150"}`}
                        >
                          <ThumbsUp className={`w-3 h-3 ${q.hasLiked ? "fill-[#005f43]" : ""}`} />
                          <span>{q.likes}</span>
                        </button>
                        {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                      </div>
                    </div>

                    {/* Expandable Accordion Body */}
                    {isExpanded && (
                      <div className="px-5 pb-5 pt-1 border-t border-gray-100 bg-[#FBF9F6]/50">
                        <div className="bg-white border-l-4 border-[#00c853] rounded-r-xl p-4 shadow-sm relative">
                          <span className="text-[9px] font-black uppercase text-[#005f43] tracking-wider block mb-1">
                            {t.responseBadge}
                          </span>
                          <p className="text-xs text-slate-600 leading-relaxed font-medium">
                            {answerText}
                          </p>
                        </div>
                      </div>
                    )}

                  </div>
                );
              })}
            </div>

          </div>

          {/* Ask a New Question Form card (Right Column) */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-gray-150 rounded-3xl p-6 sm:p-8 shadow-md text-left space-y-6 relative">
              <div className="absolute top-0 inset-x-0 h-1 bg-[#005f43]" />
              
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-5 h-5 text-[#005f43]" />
                <h3 className="text-xl font-serif font-black text-[#005f43]">
                  {t.askTitle}
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                    {t.nameLabel}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.phName}
                    className="w-full bg-[#FBF9F6] border border-gray-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-[#005f43] transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                    {t.catLabel}
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-[#FBF9F6] border border-gray-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-[#005f43] transition-all"
                  >
                    <option value="general">{t.general}</option>
                    <option value="pets">{t.pets}</option>
                    <option value="safety">{t.safety}</option>
                    <option value="pricing">{t.pricing}</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                    {t.queryLabel} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={t.phQuery}
                    className="w-full bg-[#FBF9F6] border border-gray-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-[#005f43] transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#005f43] hover:bg-[#004732] text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  <Send className="w-3.5 h-3.5 text-[#00c853]" />
                  <span>{t.submitBtn}</span>
                </Button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};