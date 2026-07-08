"use client";

import React, { useState } from "react";
import { Star, MessageSquare, Quote, Send } from "lucide-react";
import { toast } from "sonner";

interface TestimonialsProps {
  language: "en" | "es";
}

interface Review {
  name: string;
  location: string;
  text: string;
  rating: number;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ language }) => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      name: "Sarah Jenkins",
      location: "Tampa Bay",
      text: "G and Bros Services LLC cleaned our kitchen and living room for a move-out inspection. Absolute lifesavers! We got our full security deposit returned without any delays.",
      rating: 5
    },
    {
      name: "Marcus Ramirez",
      location: "St. Petersburg",
      text: "Our office block looks incredibly clean every morning. Reliable, flexible scheduling, and outstanding customer service from their friendly staff.",
      rating: 5
    },
    {
      name: "Emily Watson",
      location: "Clearwater",
      text: "Truly detail-oriented deep cleaning work. They got rid of grout stains that had been in our guest bath for ages. Will hire them weekly now!",
      rating: 5
    }
  ]);

  const [newReview, setNewReview] = useState({ name: "", text: "", rating: 5, location: "" });

  const content = {
    en: {
      tag: "Client Success Stories",
      title: "Client Reviews & Testimonials",
      subtitle: "See what home and commercial building owners across Florida say about our premier cleaning services.",
      leaveReview: "Leave Us a Testimonial",
      nameLabel: "Your Name",
      areaLabel: "Your Area",
      starLabel: "Star Rating",
      messageLabel: "Your Message",
      submitBtn: "Submit Testimonial",
      placeholderMessage: "Share your outstanding cleanup experience with G and Bros...",
      toastError: "Please fill in both name and message details.",
      toastSuccess: "Thank you! Your feedback has been posted successfully."
    },
    es: {
      tag: "Historias de Éxito de Clientes",
      title: "Reseñas y Testimonios de Clientes",
      subtitle: "Vea lo que los propietarios de viviendas y locales comerciales en Florida opinan sobre nuestros servicios premium.",
      leaveReview: "Déjenos un Testimonio",
      nameLabel: "Su Nombre",
      areaLabel: "Su Área/Ciudad",
      starLabel: "Calificación de Estrellas",
      messageLabel: "Su Mensaje",
      submitBtn: "Enviar Testimonio",
      placeholderMessage: "Comparta su excelente experiencia de limpieza con G and Bros...",
      toastError: "Por favor complete los campos de nombre y mensaje.",
      toastSuccess: "¡Gracias! Su testimonio se ha publicado correctamente."
    }
  };

  const t = content[language];

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) {
      toast.error(t.toastError);
      return;
    }
    setReviews([
      ...reviews,
      {
        name: newReview.name,
        location: newReview.location || (language === "en" ? "Customer" : "Cliente"),
        text: newReview.text,
        rating: newReview.rating
      }
    ]);
    toast.success(t.toastSuccess);
    setNewReview({ name: "", text: "", rating: 5, location: "" });
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-teal-400 uppercase block mb-3">
            {t.tag}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif text-white">
            {t.title}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-base">
            {t.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Testimonials List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-slate-950 border border-slate-800 rounded-3xl p-6 relative flex flex-col justify-between hover:border-teal-500/20 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-teal-500/10 pointer-events-none" />
              
              <div className="space-y-4 text-left">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm italic leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 border-t border-slate-800/80 pt-4 mt-6 text-left">
                <div className="w-10 h-10 rounded-full bg-teal-500/10 text-teal-400 flex items-center justify-center font-bold text-sm">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-sm text-white">{rev.name}</h5>
                  <p className="text-xs text-slate-400">{rev.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Review Submission Box */}
        <div className="max-w-xl mx-auto bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 text-left">
          <div className="flex items-center gap-3 mb-2">
            <MessageSquare className="w-5 h-5 text-teal-400" />
            <h4 className="text-lg font-bold text-white">{t.leaveReview}</h4>
          </div>

          <form onSubmit={handleAddReview} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t.nameLabel}</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-teal-500 animate-none"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t.areaLabel}</label>
                <input
                  type="text"
                  placeholder="e.g. Pinellas County"
                  value={newReview.location}
                  onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-teal-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">{t.starLabel}</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewReview({ ...newReview, rating: star })}
                    className="p-1 focus:outline-none"
                  >
                    <Star className={`w-6 h-6 ${star <= newReview.rating ? "fill-amber-400 text-amber-400" : "text-slate-600"}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t.messageLabel}</label>
              <textarea
                rows={3}
                required
                placeholder={t.placeholderMessage}
                value={newReview.text}
                onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-teal-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-extrabold py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm"
            >
              <Send className="w-4 h-4" />
              {t.submitBtn}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};