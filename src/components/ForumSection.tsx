"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, ThumbsUp, ThumbsDown, Send, ChevronDown, ChevronUp, AlertCircle } from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";
import { Button } from "@/components/ui/button";
import { ForumQuestion } from "@/pages/Index";
import { LOCALIZATION } from "@/utils/localization";
import { showSuccess, showError } from "@/utils/toast";
import { 
  ForumQuestionSchema, 
  checkSubmissionDebounce, 
  updateSubmissionDebounce,
  getTurnstileSiteKey
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
  const [downvotedIds, setDownvotedIds] = useState<number[]>([]);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("general");
  const [query, setQuery] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const t = LOCALIZATION[language].forum;

  useEffect(() => {
    const savedLikes = localStorage.getItem("forum_upvotes");
    const savedDislikes = localStorage.getItem("forum_downvotes");
    
    if (savedLikes) {
      try {
        const parsed = JSON.parse(savedLikes);
        if (Array.isArray(parsed)) setUpvotedIds(parsed);
      } catch (e) {
        localStorage.removeItem("forum_upvotes");
      }
    }

    if (savedDislikes) {
      try {
        const parsed = JSON.parse(savedDislikes);
        if (Array.isArray(parsed)) setDownvotedIds(parsed);
      } catch (e) {
        localStorage.removeItem("forum_downvotes");
      }
    }
  }, []);

  const handleLike = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (upvotedIds.includes(id) || downvotedIds.includes(id)) return;
    
    const newUpvoted = [...upvotedIds, id];
    setUpvotedIds(newUpvoted);
    localStorage.setItem("forum_upvotes", JSON.stringify(newUpvoted));

    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, likes: q.likes + 1 } : q))
    );
    showSuccess(language === "english" ? "Vote recorded!" : "¡Voto registrado!");
  };

  const handleDislike = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (upvotedIds.includes(id) || downvotedIds.includes(id)) return;
    
    const newDownvoted = [...downvotedIds, id];
    setDownvotedIds(newDownvoted);
    localStorage.setItem("forum_downvotes", JSON.stringify(newDownvoted));

    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, dislikes: q.dislikes + 1 } : q))
    );
    showSuccess(language === "english" ? "Feedback recorded." : "Comentario registrado.");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) return;

    if (!turnstileToken) {
      showError(
        language === "english"
          ? "Please complete the bot protection check."
          : "Por favor complete la verificación anti-bot."
      );
      return;
    }

    const debounceCheck = checkSubmissionDebounce("forum_submission", 5000);
    if (!debounceCheck.allowed) {
      showError(language === "english" 
        ? `Please wait ${debounceCheck.remaining}s before posting another question.` 
        : `Por favor espere ${debounceCheck.remaining}s antes de publicar otra pregunta.`);
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

    onAddQuestion(result.data.name || "", result.data.category, result.data.query);
    updateSubmissionDebounce("forum_submission");
    
    setName("");
    setQuery("");
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
                const isDownvoted = downvotedIds.includes(q.id);
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
                      
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={(e) => handleLike(q.id, e)}
                          disabled={isUpvoted || isDownvoted}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[11px] font-black transition-all hover:scale-[1.03] active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-[#005f43] ${isUpvoted ? "bg-[#005f43] text-white border-[#005f43]" : "bg-[#FBF9F6] text-slate-600 hover:text-[#005f43] border-slate-200 disabled:opacity-50"}`}
                        >
                          <ThumbsUp className={`w-3.5 h-3.5 ${isUpvoted ? "fill-white" : ""}`} />
                          <span>{t.helpfulText} ({q.likes})</span>
                        </button>

                        <button
                          type="button"
                          onClick={(e) => handleDislike(q.id, e)}
                          disabled={isUpvoted || isDownvoted}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[11px] font-black transition-all hover:scale-[1.03] active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-[#005f43] ${isDownvoted ? "bg-red-600 text-white border-red-600" : "bg-[#FBF9F6] text-slate-600 hover:text-red-600 border-slate-200 disabled:opacity-50"}`}
                        >
                          <ThumbsDown className={`w-3.5 h-3.5 ${isDownvoted ? "fill-white" : ""}`} />
                          <span>{t.unhelpfulText} ({q.dislikes})</span>
                        </button>
                        
                        <div className="ml-2">
                          {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                        </div>
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
                <MessageSquare className="w-5 h-5 text-[#004732]" />
                <h3 className="text-xl font-serif font-black text-[#004732]">
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

                <div className="flex items-start gap-2 text-[10px] text-slate-500 bg-slate-50 p-2 rounded-lg border border-slate-200">
                  <AlertCircle className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <p className="leading-tight">
                    {language === "english" 
                      ? "Note: Questions are public. Avoid including private personal data in the question box."
                      : "Nota: Las preguntas son públicas. Evite incluir datos personales privados en el cuadro de pregunta."}
                  </p>
                </div>

                <div className="flex justify-center py-1">
                  <Turnstile
                    siteKey={getTurnstileSiteKey()}
                    onSuccess={(token) => setTurnstileToken(token)}
                    onExpire={() => setTurnstileToken(null)}
                    onError={() => setTurnstileToken(null)}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={!turnstileToken}
                  className="w-full bg-[#005f43] hover:bg-[#004732] text-white font-extrabold py-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all disabled:opacity-50"
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