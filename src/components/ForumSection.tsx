"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, ThumbsUp, Send, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ForumQuestion } from "@/pages/Index";
import { LOCALIZATION } from "@/utils/localization";
import { showSuccess, showError } from "@/utils/toast";
import { 
  sanitizeInput, 
  ForumQuestionSchema, 
  checkRateLimit, 
  updateRateLimit,
  generateSubmissionToken,
  verifySubmissionToken
} from "@/utils/security";

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
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [upvotedIds, setUpvotedIds] = useState<number[]>([]);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("general");
  const [query, setQuery] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [challenge, setChallenge] = useState<{ token: string; timestamp: number } | null>(null);

  const t = LOCALIZATION[language].forum;

  useEffect(() => {
    setChallenge(generateSubmissionToken());
  }, []);

  // Safely load upvotes from localStorage on mount with strict array validation
  useEffect(() => {
    const saved = localStorage.getItem("forum_upvotes");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.every((item) => typeof item === "number")) {
          setUpvotedIds(parsed);
        } else {
          localStorage.removeItem("forum_upvotes");
        }
      } catch (e) {
        console.error("Failed to load upvotes from localStorage", e);
        localStorage.removeItem("forum_upvotes");
      }
    }
  }, []);

  const handleLike = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (upvotedIds.includes(id)) return;
    
    const newUpvoted = [...upvotedIds, id];
    setUpvotedIds(newUpvoted);
    localStorage.setItem("forum_upvotes", JSON.stringify(newUpvoted));

    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, likes: q.likes + 1 } : q))
    );
    showSuccess(language === "english" ? "Vote recorded!" : "¡Voto registrado!");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) return;

    if (!challenge || !verifySubmissionToken(challenge.token, challenge.timestamp)) {
      showError(
        language === "english"
          ? "Security check failed. Please refresh the page and try again."
          : "Falló el chequeo de seguridad. Por favor recargue la página e intente de nuevo."
      );
      setChallenge(generateSubmissionToken());
      return;
    }

    // Rate limiting check
    const rateCheck = checkRateLimit("forum_submission", 30000); // 30s cooldown
    if (!rateCheck.allowed) {
      showError(language === "english" 
        ? `Please wait ${rateCheck.remaining}s before posting another question.` 
        : `Por favor espere ${rateCheck.remaining}s antes de publicar otra pregunta.`);
      return;
    }

    const result = ForumQuestionSchema.safeParse({
      name,
      category,
      query
    });

    if (!result.success) {
      const errorMsg = result.error.errors[0].message;
      showError(errorMsg);
      return;
    }

    const sanitizedName = sanitizeInput(result.data.name || "");
    const sanitizedQuery = sanitizeInput(result.data.query);

    onAddQuestion(sanitizedName, result.data.category, sanitizedQuery);
    updateRateLimit("forum_submission");
    setName("");
    setQuery("");
    setChallenge(generateSubmissionToken());
  };

  const handleAccordionKeyPress = (e: React.KeyboardEvent, id: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setExpandedId(expandedId === id ? null : id);
    }
  };

  return (
    <section id="qa" className="py-20 bg-[#FBF9F6] border-b border-slate-100 relative overflow-hidden" aria-label="Q&A Forum">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-xs font-extrabold tracking-[0.25em] text-[#00c853] uppercase block mb-3">
            {t.subHeader}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-serif text-[#005f43]">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-[#00c853] mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-4 text-left animate-fade-in">
              {questions.map((q) => {
                const isExpanded = expandedId === q.id;
                const isUpvoted = upvotedIds.includes(q.id);
                const questionText = language === "english" ? q.questionEn : q.questionEs;
                const answerText = language === "english" ? q.answerEn : q.answerEs;

                return (
                  <div
                    key={q.id}
                    className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
                  >
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
                        <h4 className="font-extrabold text-slate-800 text-sm leading-relaxed">
                          {questionText}
                        </h4>
                      </div>
                      
                      <div className="flex items-center gap-3 shrink-0">
                        <button
                          type="button"
                          onClick={(e) => handleLike(q.id, e)}
                          disabled={isUpvoted}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[11px] font-black transition-all hover:scale-[1.03] active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-[#005f43] ${isUpvoted ? "bg-[#005f43] text-white border-[#005f43]" : "bg-[#FBF9F6] text-slate-600 hover:text-[#005f43] border-slate-200"}`}
                        >
                          <ThumbsUp className={`w-3.5 h-3.5 ${isUpvoted ? "fill-white" : ""}`} />
                          <span>{t.helpfulText} ({q.likes})</span>
                        </button>
                        {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="px-5 pb-5 pt-1 border-t border-slate-100 bg-[#FBF9F6]/30 animate-fade-in">
                        <div className="bg-white border-l-4 border-[#00c853] rounded-r-2xl p-5 shadow-sm relative">
                          <span className="bg-[#005f43] text-[#00c853] text-[10px] uppercase font-black px-3.5 py-1 rounded-full tracking-wider inline-block mb-3">
                            {t.responseBadge}
                          </span>
                          <p className="text-xs text-slate-700 leading-relaxed font-semibold">
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

          <div className="lg:col-span-4">
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-md text-left space-y-6 relative hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 inset-x-0 h-1 bg-[#005f43]" />
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-[#005f43]" />
                <h3 className="text-xl font-serif font-black text-[#005f43]">
                  {t.askTitle}
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    placeholder="Verify age"
                  />
                </div>

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
                    className="w-full bg-[#FBF9F6] border border-slate-200 rounded-xl px-4 py-3.5 text-xs text-slate-800 focus:outline-none focus:border-[#005f43] transition-all font-semibold"
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
                    className="w-full bg-[#FBF9F6] border border-slate-200 rounded-xl px-4 py-3.5 text-xs text-slate-800 focus:outline-none focus:border-[#005f43] font-black"
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
                    className="w-full bg-[#FBF9F6] border border-slate-200 rounded-xl px-4 py-3.5 text-xs text-slate-800 focus:outline-none focus:border-[#005f43] resize-none font-semibold"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#005f43] hover:bg-[#004732] text-white font-extrabold py-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
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