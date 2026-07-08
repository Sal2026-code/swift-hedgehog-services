"use client";

import React, { useState } from "react";
import { MessageSquare, ThumbsUp, Send, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ForumQuestion } from "@/pages/Index";
import { LOCALIZATION } from "@/utils/localization";
import { showSuccess, showError } from "@/utils/toast";

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
  
  // Upvoted IDs state tracking to freeze helpful buttons
  const [upvotedIds, setUpvotedIds] = useState<number[]>([]);

  // Form input fields
  const [name, setName] = useState("");
  const [category, setCategory] = useState("general");
  const [query, setQuery] = useState("");

  const t = LOCALIZATION[language].forum;

  const handleLike = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (upvotedIds.includes(id)) {
      return; // Freeze the click to prevent upvote spamming
    }
    
    setUpvotedIds((prev) => [...prev, id]);
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, likes: q.likes + 1 } : q))
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || query.length < 5) {
      showError(t.errQuery);
      return;
    }
    onAddQuestion(name, category, query);
    setName("");
    setQuery("");
  };

  const handleAccordionKeyPress = (e: React.KeyboardEvent, id: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setExpandedId(expandedId === id ? null : id);
    }
  };

  const filteredQuestions = activeTab === "all"
    ? questions
    : questions.filter((q) => q.category === activeTab);

  return (
    <section id="qa" className="py-20 bg-[#FBF9F6] border-b border-gray-150 relative" aria-label="Q&A Forum">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[#00c853] uppercase block mb-3">
            {t.subHeader}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif text-[#005f43]">
            {t.title}
          </h2>
          <div className="w-16 h-1 bg-[#00c853] mx-auto mt-6 rounded-full" />
        </div>

        {/* Two Column Forum Grid: 2/3 Left (tabs & accordions), 1/3 Right (form box) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Question Feed & Tab Controllers (Left 2/3 Column) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Category Tab filter buttons */}
            <div className="flex flex-wrap gap-2 pb-2" role="tablist" aria-label="Q&A category filter tabs">
              {(["all", "pets", "safety", "pricing", "general"] as const).map((tabId) => (
                <button
                  key={tabId}
                  role="tab"
                  aria-selected={activeTab === tabId}
                  onClick={() => {
                    setActiveTab(tabId);
                    setExpandedId(null);
                  }}
                  className={`py-2 px-4 rounded-xl font-bold text-xs tracking-wide transition-all border focus:outline-none focus:ring-2 focus:ring-[#005f43] ${activeTab === tabId ? "bg-[#005f43] border-[#005f43] text-white shadow-sm" : "bg-white border-gray-200 text-slate-600 hover:border-[#005f43]/30"}`}
                >
                  {t[tabId]}
                </button>
              ))}
            </div>

            {/* Questions Feed list accordions */}
            <div className="space-y-4 text-left">
              {filteredQuestions.map((q) => {
                const isExpanded = expandedId === q.id;
                const isUpvoted = upvotedIds.includes(q.id);
                const questionText = language === "english" ? q.questionEn : q.questionEs;
                const answerText = language === "english" ? q.answerEn : q.answerEs;

                return (
                  <div
                    key={q.id}
                    className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow"
                  >
                    {/* Collapsible Trigger */}
                    <div
                      role="button"
                      tabIndex={0}
                      aria-expanded={isExpanded}
                      onClick={() => setExpandedId(isExpanded ? null : q.id)}
                      onKeyDown={(e) => handleAccordionKeyPress(e, q.id)}
                      className="p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FBF9F6]/40 transition-colors focus:outline-none focus:bg-[#FBF9F6]/50"
                    >
                      <div className="flex items-start gap-3">
                        <MessageSquare className="w-5 h-5 text-[#00c853] mt-0.5" />
                        <h4 className="font-extrabold text-[#1e293b] text-sm leading-relaxed">
                          {questionText}
                        </h4>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        {/* Helpful upvote button: freezes visually on upvote */}
                        <button
                          type="button"
                          onClick={(e) => handleLike(q.id, e)}
                          disabled={isUpvoted}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[11px] font-black transition-all focus:outline-none focus:ring-2 focus:ring-[#005f43] ${isUpvoted ? "bg-[#00c853]/15 text-[#005f43] border-[#00c853] cursor-not-allowed opacity-90" : "bg-[#FBF9F6] text-slate-500 hover:text-[#005f43] border-gray-200"}`}
                          aria-label={`Upvote question as helpful. Current helpful count: ${q.likes}`}
                        >
                          <ThumbsUp className={`w-3.5 h-3.5 ${isUpvoted ? "fill-[#005f43]" : ""}`} />
                          <span>{t.helpfulText} ({q.likes})</span>
                        </button>
                        {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                      </div>
                    </div>

                    {/* Accordion Response body nested box */}
                    {isExpanded && (
                      <div className="px-5 pb-5 pt-1 border-t border-gray-100 bg-[#FBF9F6]/50 transition-all duration-300">
                        <div className="bg-white border-l-4 border-[#00c853] rounded-r-xl p-4 shadow-sm relative">
                          <span className="bg-[#00c853]/10 text-[#005f43] border border-[#00c853]/25 text-[10px] uppercase font-black px-3 py-1 rounded-full tracking-wider inline-block mb-2">
                            {t.responseBadge}
                          </span>
                          <p className="text-xs text-slate-600 leading-relaxed font-semibold">
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

          {/* Ask a New Question Form Card (Right 1/3 Column) */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-md text-left space-y-6 relative hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 inset-x-0 h-1 bg-[#005f43]" />
              
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-5 h-5 text-[#005f43]" />
                <h3 className="text-xl font-serif font-black text-[#005f43]">
                  {t.askTitle}
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label htmlFor="forum-name" className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">
                    {t.nameLabel}
                  </label>
                  <input
                    id="forum-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.phName}
                    className="w-full bg-[#FBF9F6] border border-gray-200 rounded-xl px-4 py-3 text-xs text-[#1e293b] focus:outline-none focus:border-[#005f43] focus:ring-2 focus:ring-[#005f43]/10 transition-all font-semibold"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="forum-category" className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">
                    {t.catLabel}
                  </label>
                  <select
                    id="forum-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-[#FBF9F6] border border-gray-200 rounded-xl px-4 py-3 text-xs text-[#1e293b] focus:outline-none focus:border-[#005f43] focus:ring-2 focus:ring-[#005f43]/10 transition-all font-bold"
                  >
                    <option value="general">{t.general}</option>
                    <option value="pets">{t.pets}</option>
                    <option value="safety">{t.safety}</option>
                    <option value="pricing">{t.pricing}</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="forum-query" className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">
                    {t.queryLabel} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="forum-query"
                    rows={4}
                    required
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={t.phQuery}
                    className="w-full bg-[#FBF9F6] border border-gray-200 rounded-xl px-4 py-3 text-xs text-[#1e293b] focus:outline-none focus:border-[#005f43] focus:ring-2 focus:ring-[#005f43]/10 transition-all resize-none font-semibold"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#005f43] hover:bg-[#004732] text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm focus:ring-2 focus:ring-[#005f43]"
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