"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ContactSectionProps {
  language: "english" | "spanish";
  prefilledService?: string;
  estimateDetails?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  language, 
  prefilledService = "",
  estimateDetails = ""
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: prefilledService || "Residential Cleaning",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  // Update message field if instant estimate details were calculated
  React.useEffect(() => {
    if (estimateDetails) {
      setFormData((prev) => ({ ...prev, message: estimateDetails }));
    }
  }, [estimateDetails]);

  const content = {
    english: {
      tag: "Ready for a Cleaner Space?",
      title: "Request a Free Quote & Get in Touch",
      subtitle: "Contact G and Bros Services LLC today to request your free estimate.",
      infoTitle: "Corporate Office & Info",
      callUs: "Call Us Directly",
      emailUs: "Email Address",
      serviceArea: "Service Area",
      serviceAreaVal: "Serving Tampa Bay, Pinellas County, St. Petersburg, Clearwater, and surrounding areas.",
      hours: "Business Hours",
      weekdays: "Monday – Friday: 8:00 AM – 6:00 PM",
      saturday: "Saturday: 9:00 AM – 4:00 PM",
      sunday: "Closed on Sundays",
      formTitle: "Request a Free Quote",
      nameLabel: "Full Name",
      phoneLabel: "Phone Number",
      emailLabel: "Email Address",
      serviceLabel: "Type of Cleaning Needed",
      msgLabel: "Message or Special Requirements",
      submitBtn: "Request a Free Quote",
      submittingBtn: "Processing Quote...",
      confidentiality: "Your data is protected and secured under confidentiality policies",
      successTitle: "Quote Requested!",
      successDesc: "Thank you! Your free quote request has been sent to G and Bros Services LLC. One of our estimation experts will contact you soon.",
      services: {
        "Residential Cleaning": "Residential Cleaning",
        "Commercial Cleaning": "Commercial Cleaning",
        "Office Cleaning": "Office Cleaning",
        "Deep Cleaning": "Deep Cleaning",
        "Move-In / Move-Out Cleaning": "Move-In / Move-Out Cleaning",
        "Post-Construction Cleaning": "Post-Construction Cleaning",
      }
    },
    spanish: {
      tag: "¿Listo para un Espacio más Limpio?",
      title: "Solicite una Cotización Gratis y Contáctenos",
      subtitle: "Póngase en contacto con G and Bros Services LLC hoy mismo para solicitar su cotización gratuita.",
      infoTitle: "Oficina Corporativa e Información",
      callUs: "Llámenos Directamente",
      emailUs: "Dirección de Correo",
      serviceArea: "Área de Servicio",
      serviceAreaVal: "Sirviendo a Tampa Bay, Pinellas County, St. Petersburg, Clearwater y áreas circundantes.",
      hours: "Horario Comercial",
      weekdays: "Lunes – Viernes: 8:00 AM – 6:00 PM",
      saturday: "Sábado: 9:00 AM – 4:00 PM",
      sunday: "Cerrado los Domingos",
      formTitle: "Solicitar una Cotización Gratis",
      nameLabel: "Nombre Completo",
      phoneLabel: "Número de Teléfono",
      emailLabel: "Dirección de Correo",
      serviceLabel: "Tipo de Limpieza Requerida",
      msgLabel: "Mensaje o Requerimientos Especiales",
      submitBtn: "Solicitar Cotización Gratis",
      submittingBtn: "Procesando Cotización...",
      confidentiality: "Sus datos están protegidos y asegurados bajo políticas de confidencialidad",
      successTitle: "¡Cotización Solicitada!",
      successDesc: "¡Gracias! Su solicitud de cotización gratuita ha sido enviada a G and Bros Services LLC. Uno de nuestros expertos en estimaciones se pondrá en contacto con usted pronto.",
      services: {
        "Residential Cleaning": "Limpieza Residencial",
        "Commercial Cleaning": "Limpieza Comercial",
        "Office Cleaning": "Limpieza de Oficinas",
        "Deep Cleaning": "Limpieza Profunda",
        "Move-In / Move-Out Cleaning": "Limpieza de Mudanza",
        "Post-Construction Cleaning": "Limpieza Post-Construcción",
      }
    }
  };

  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error(language === "english" ? "Please fill in all required fields." : "Por favor complete todos los campos obligatorios.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success(t.successTitle);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(20,184,166,0.03),transparent_40%)] pointer-events-none" />

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

        {/* Two Column Layout: Info Block & Request Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Block (Left Column) */}
          <div className="lg:col-span-5 space-y-8 text-left bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-10">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              {t.infoTitle}
            </h3>

            {/* Phone Block */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-teal-500/10 rounded-2xl text-teal-400 h-fit">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">{t.callUs}</p>
                <a href="tel:8134567890" className="text-lg font-bold text-white hover:text-teal-300 transition-colors block">
                  (813) 456-7890
                </a>
              </div>
            </div>

            {/* Email Block */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-teal-500/10 rounded-2xl text-teal-400 h-fit">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">{t.emailUs}</p>
                <a href="mailto:info@gandbrosservices.com" className="text-lg font-bold text-white hover:text-teal-300 transition-colors block break-all">
                  info@gandbrosservices.com
                </a>
              </div>
            </div>

            {/* Service Area Block */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-teal-500/10 rounded-2xl text-teal-400 h-fit">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">{t.serviceArea}</p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {t.serviceAreaVal}
                </p>
              </div>
            </div>

            {/* Business Hours Block */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-teal-500/10 rounded-2xl text-teal-400 h-fit">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">{t.hours}</p>
                <p className="text-slate-300 text-sm leading-relaxed font-bold">
                  {t.weekdays}
                </p>
                <p className="text-slate-300 text-sm leading-relaxed font-bold">
                  {t.saturday}
                </p>
                <p className="text-slate-400 text-xs mt-1">{t.sunday}</p>
              </div>
            </div>
          </div>

          {/* Form Block (Right Column) */}
          <div className="lg:col-span-7">
            {submitted ? (
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
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 shadow-2xl relative text-left">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-teal-500 to-emerald-500" />
                
                <h4 className="text-xl font-serif font-bold text-white mb-4">{t.formTitle}</h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-wider text-slate-300 uppercase">
                      {t.nameLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors"
                      placeholder="e.g. Alexis Martinez"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-wider text-slate-300 uppercase">
                      {t.phoneLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors"
                      placeholder="e.g. +1 (813) 555-0199"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email field */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-wider text-slate-300 uppercase">
                      {t.emailLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors"
                      placeholder="e.g. alexis@domain.com"
                    />
                  </div>

                  {/* Cleaning Needed Type */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-wider text-slate-300 uppercase">
                      {t.serviceLabel}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors appearance-none"
                      style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>\")", backgroundPosition: "right 12px center", backgroundRepeat: "no-repeat" }}
                    >
                      <option value="Residential Cleaning">{t.services["Residential Cleaning"]}</option>
                      <option value="Commercial Cleaning">{t.services["Commercial Cleaning"]}</option>
                      <option value="Office Cleaning">{t.services["Office Cleaning"]}</option>
                      <option value="Deep Cleaning">{t.services["Deep Cleaning"]}</option>
                      <option value="Move-In / Move-Out Cleaning">{t.services["Move-In / Move-Out Cleaning"]}</option>
                      <option value="Post-Construction Cleaning">{t.services["Post-Construction Cleaning"]}</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-wider text-slate-300 uppercase">
                    {t.msgLabel}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors resize-none"
                    placeholder="e.g. 3 Bedrooms, 2 Bathrooms, deep kitchen cleaning required..."
                  />
                </div>

                {/* Action Row */}
                <div className="pt-4 space-y-4">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-black py-4 rounded-xl shadow-xl hover:shadow-teal-500/15 transform hover:-translate-y-0.5 transition-all duration-300 text-base"
                  >
                    {loading ? t.submittingBtn : t.submitBtn}
                  </Button>

                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-semibold uppercase">
                    <ShieldCheck className="w-4 h-4 text-teal-400" />
                    <span>{t.confidentiality}</span>
                  </div>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};