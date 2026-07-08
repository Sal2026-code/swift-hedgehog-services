"use client";

import React, { useState } from "react";
import { Calendar, Phone, Mail, User, ShieldCheck, CheckCircle2, Building, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface InquiryFormProps {
  language: "es" | "en";
  prefilledModel?: string;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({ language, prefilledModel = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    model: prefilledModel || "loft-aura",
    date: "",
    time: "10:00 AM",
    notes: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sync with prop when selected
  React.useEffect(() => {
    if (prefilledModel) {
      setFormData((prev) => ({ ...prev, model: prefilledModel }));
    }
  }, [prefilledModel]);

  const content = {
    es: {
      tag: "AGENDAR VISITA PRIVADA",
      title: "Programa una Cita en el Showroom",
      subtitle: "Nuestros asesores de lujo le brindarán una experiencia personalizada e inmersiva.",
      nameLabel: "Nombre Completo",
      emailLabel: "Correo Electrónico",
      phoneLabel: "Número de Teléfono",
      modelLabel: "Modelo de Preferencia",
      dateLabel: "Fecha Solicitada",
      timeLabel: "Hora de Preferencia",
      notesLabel: "Mensaje o Requerimientos Especiales",
      submitBtn: "Solicitar Invitación Privada",
      submittingBtn: "Procesando Reserva...",
      disclaimer: "Sus datos están protegidos bajo estricto acuerdo de confidencialidad.",
      successTitle: "¡Invitación Solicitada!",
      successDesc: "Un concierge exclusivo se pondrá en contacto con usted en los próximos 15 minutos para confirmar su cita.",
      models: {
        "Loft Aura": "Loft Aura (1 Habitación)",
        "Suite Deluxe": "Suite Deluxe (2 Habitaciones)",
        "Sky Penthouse": "Sky Penthouse (3 Habitaciones)",
      }
    },
    en: {
      tag: "BOOK PRIVATE SHOWROOM TOUR",
      title: "Schedule Your Private Visit",
      subtitle: "Our luxury agents will provide an immersive, highly customized private tour.",
      nameLabel: "Full Name",
      emailLabel: "Email Address",
      phoneLabel: "Phone Number",
      modelLabel: "Preferred Model",
      dateLabel: "Preferred Date",
      timeLabel: "Preferred Time",
      notesLabel: "Message or Special Requirements",
      submitBtn: "Request Private Invitation",
      submittingBtn: "Processing Booking...",
      disclaimer: "Your data is strictly secured under corporate privacy standards.",
      successTitle: "Invitation Requested!",
      successDesc: "An exclusive resident advisor will contact you within the next 15 minutes to confirm your private slot.",
      models: {
        "Loft Aura": "Loft Aura (1 Bedroom)",
        "Suite Deluxe": "Suite Deluxe (2 Bedrooms)",
        "Sky Penthouse": "Sky Penthouse (3 Bedrooms)",
      }
    }
  };

  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error(language === "es" ? "Por favor completa todos los campos requeridos." : "Please complete all required fields.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success(t.successTitle);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(217,119,6,0.03),transparent_40%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-amber-500 uppercase block mb-3">
            {t.tag}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif text-white">
            {t.title}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-base">
            {t.subtitle}
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        {submitted ? (
          /* High Contrast Elegant Success View */
          <div className="bg-slate-900 border border-emerald-500/30 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-emerald-500" />
            <div className="w-20 h-20 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-serif font-extrabold text-white">
              {t.successTitle}
            </h3>
            <p className="text-slate-300 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
              {t.successDesc}
            </p>
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-4 justify-center items-center text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>{language === "es" ? "Respuesta en <15 min" : "Response in <15 min"}</span>
              </div>
              <span className="hidden sm:inline text-slate-700">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{t.disclaimer}</span>
              </div>
            </div>
          </div>
        ) : (
          /* High-Fidelity Multi-slot Form layout */
          <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 shadow-2xl relative">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name field */}
              <div className="space-y-2 text-left">
                <label className="text-xs font-bold tracking-wider text-slate-300 uppercase flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-amber-500/80" />
                  {t.nameLabel} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="e.g. Alejandro Ruiz"
                />
              </div>

              {/* Email field */}
              <div className="space-y-2 text-left">
                <label className="text-xs font-bold tracking-wider text-slate-300 uppercase flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-500/80" />
                  {t.emailLabel} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="e.g. alejandro@domain.com"
                />
              </div>

              {/* Phone field */}
              <div className="space-y-2 text-left">
                <label className="text-xs font-bold tracking-wider text-slate-300 uppercase flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-500/80" />
                  {t.phoneLabel} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="e.g. +506 8888-8888"
                />
              </div>

              {/* Preferred Apartment Selection */}
              <div className="space-y-2 text-left">
                <label className="text-xs font-bold tracking-wider text-slate-300 uppercase flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-amber-500/80" />
                  {t.modelLabel}
                </label>
                <select
                  value={formData.model}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors appearance-none"
                  style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>\")", backgroundPosition: "right 12px center", backgroundRepeat: "no-repeat" }}
                >
                  <option value="Loft Aura">{t.models["Loft Aura"]}</option>
                  <option value="Suite Deluxe">{t.models["Suite Deluxe"]}</option>
                  <option value="Sky Penthouse">{t.models["Sky Penthouse"]}</option>
                </select>
              </div>

              {/* Selected date */}
              <div className="space-y-2 text-left">
                <label className="text-xs font-bold tracking-wider text-slate-300 uppercase flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-500/80" />
                  {t.dateLabel}
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Selected Hour Slot */}
              <div className="space-y-2 text-left">
                <label className="text-xs font-bold tracking-wider text-slate-300 uppercase flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-500/80" />
                  {t.timeLabel}
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors appearance-none"
                  style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>\")", backgroundPosition: "right 12px center", backgroundRepeat: "no-repeat" }}
                >
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="06:00 PM">06:00 PM</option>
                </select>
              </div>
            </div>

            {/* Message area */}
            <div className="space-y-2 text-left">
              <label className="text-xs font-bold tracking-wider text-slate-300 uppercase">
                {t.notesLabel}
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={3}
                className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none"
                placeholder={language === "es" ? "Comentarios o requerimientos específicos..." : "Specific requests or comments..."}
              />
            </div>

            {/* Action buttons and security note */}
            <div className="pt-4 space-y-4">
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold py-4 rounded-xl shadow-xl hover:shadow-amber-500/15 transform hover:-translate-y-0.5 transition-all duration-300 text-base"
              >
                {loading ? t.submittingBtn : t.submitBtn}
              </Button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-semibold uppercase">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                <span>{t.disclaimer}</span>
              </div>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};