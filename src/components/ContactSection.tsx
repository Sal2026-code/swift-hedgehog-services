"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ContactSectionProps {
  language: "english" | "spanish";
  prefilledMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language, prefilledMessage = "" }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Prefill the calculated dynamic estimator text automatically if provided
  React.useEffect(() => {
    if (prefilledMessage) {
      setMessage(prefilledMessage);
    }
  }, [prefilledMessage]);

  const content = {
    english: {
      tag: "Get in Touch",
      title: "Contact G & Bros Services Inc.",
      subtitle: "Connect with our expert supervisors to schedule premium apartment deep cleans.",
      emailLabel: "Email Address",
      phoneLabel: "Phone Number",
      addrLabel: "Corporate Headquarters",
      address: "Gran Via de las Comunidades, 45, Floor 2, Madrid.",
      hoursLabel: "Working Hours",
      weekdays: "Monday to Saturday: 8:00 AM – 8:00 PM",
      sunday: "Sundays: Closed",
      formTitle: "Send Inquiry Form",
      nameField: "Full Name",
      phoneField: "Phone Number",
      emailField: "Email Address",
      msgField: "Describe your Apartment or Needs",
      phName: "Alexis Martinez",
      phMsg: "Detail bedrooms, bathrooms, layout, preferred schedule...",
      submitBtn: "Send Inquiry Form",
      submittingBtn: "Sending Message...",
      confidentiality: "All details remain protected and secured",
      successTitle: "Inquiry Submitted!",
      successDesc: "Thank you! G & Bros Services Inc. has received your query. Our apartment estimation supervisors will email or call you shortly."
    },
    spanish: {
      tag: "Ponte en Contacto",
      title: "Contacto con G & Bros Services Inc.",
      subtitle: "Conéctese con nuestros supervisores expertos para programar limpiezas profundas premium.",
      emailLabel: "Dirección de Correo",
      phoneLabel: "Número de Teléfono",
      addrLabel: "Sede Corporativa",
      address: "Gran Via de las Comunidades, 45, Planta 2, Madrid.",
      hoursLabel: "Horario Comercial",
      weekdays: "Lunes a Sábado: 8:00 AM – 8:00 PM",
      sunday: "Domingos: Cerrado",
      formTitle: "Formulario de Consulta",
      nameField: "Nombre Completo",
      phoneField: "Número de Teléfono",
      emailField: "Dirección de Correo",
      msgField: "Describa su Apartamento o Necesidad",
      phName: "Alexis Martinez",
      phMsg: "Detalle habitaciones, baños, distribución, horario preferido...",
      submitBtn: "Enviar Formulario de Consulta",
      submittingBtn: "Enviando Mensaje...",
      confidentiality: "Todos los detalles están protegidos y asegurados",
      successTitle: "¡Consulta Enviada!",
      successDesc: "¡Gracias! G & Bros Services Inc. ha recibido su consulta. Nuestros supervisores de estimaciones se comunicarán con usted en breve."
    }
  };

  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
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
    <section id="contact" className="py-24 bg-white relative">
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

        {/* Info & Form Split grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Office Info column (Left) */}
          <div className="lg:col-span-5 bg-[#FBF9F6] border border-gray-150 rounded-3xl p-6 sm:p-10 space-y-8">
            <h3 className="text-2xl font-serif font-black text-[#005f43]">
              {language === "english" ? "Office details" : "Detalles de Oficina"}
            </h3>

            {/* Email Block */}
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-[#005f43]/10 text-[#005f43] rounded-2xl h-fit">
                <Mail className="w-5 h-5 text-[#00c853]" />
              </div>
              <div>
                <p className="text-xs font-black uppercase text-slate-500 tracking-wider mb-1">
                  {t.emailLabel}
                </p>
                <a href="mailto:contacto@gbrosservices.com" className="text-base font-extrabold text-[#1e293b] hover:text-[#005f43] transition-colors block">
                  contacto@gbrosservices.com
                </a>
              </div>
            </div>

            {/* Phone Block */}
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-[#005f43]/10 text-[#005f43] rounded-2xl h-fit">
                <Phone className="w-5 h-5 text-[#00c853]" />
              </div>
              <div>
                <p className="text-xs font-black uppercase text-slate-500 tracking-wider mb-1">
                  {t.phoneLabel}
                </p>
                <a href="tel:+34600123456" className="text-base font-extrabold text-[#1e293b] hover:text-[#005f43] transition-colors block">
                  +34 600 123 456
                </a>
              </div>
            </div>

            {/* Address Block */}
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-[#005f43]/10 text-[#005f43] rounded-2xl h-fit">
                <MapPin className="w-5 h-5 text-[#00c853]" />
              </div>
              <div>
                <p className="text-xs font-black uppercase text-slate-500 tracking-wider mb-1">
                  {t.addrLabel}
                </p>
                <p className="text-slate-700 text-sm font-medium leading-relaxed">
                  {t.address}
                </p>
              </div>
            </div>

            {/* Business Hours Block */}
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-[#005f43]/10 text-[#005f43] rounded-2xl h-fit">
                <Clock className="w-5 h-5 text-[#00c853]" />
              </div>
              <div>
                <p className="text-xs font-black uppercase text-slate-500 tracking-wider mb-1">
                  {t.hoursLabel}
                </p>
                <p className="text-slate-700 text-sm font-bold">
                  {t.weekdays}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {t.sunday}
                </p>
              </div>
            </div>

          </div>

          {/* Form input field column (Right) */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-[#FBF9F6] border-2 border-[#00c853]/20 rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1.5 bg-[#00c853]" />
                <div className="w-16 h-16 bg-[#00c853]/15 text-[#005f43] rounded-full flex items-center justify-center mx-auto border border-[#00c853]/30">
                  <CheckCircle className="w-8 h-8 text-[#00c853]" />
                </div>
                <h3 className="text-2xl font-serif font-black text-[#005f43]">
                  {t.successTitle}
                </h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                  {t.successDesc}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-gray-150 rounded-3xl p-6 sm:p-10 space-y-6 shadow-md relative">
                <div className="absolute top-0 inset-x-0 h-1.5 bg-[#005f43]" />
                
                <h3 className="text-xl font-serif font-black text-[#005f43] mb-4">
                  {t.formTitle}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-[#1e293b] tracking-wider block">
                      {t.nameField} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.phName}
                      className="w-full bg-[#FBF9F6] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1e293b] focus:outline-none focus:border-[#005f43] transition-all"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-[#1e293b] tracking-wider block">
                      {t.phoneField} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+34 600..."
                      className="w-full bg-[#FBF9F6] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1e293b] focus:outline-none focus:border-[#005f43] transition-all"
                    />
                  </div>
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-[#1e293b] tracking-wider block">
                    {t.emailField} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contacto@..."
                    className="w-full bg-[#FBF9F6] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1e293b] focus:outline-none focus:border-[#005f43] transition-all"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-[#1e293b] tracking-wider block">
                    {t.msgField}
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.phMsg}
                    className="w-full bg-[#FBF9F6] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1e293b] focus:outline-none focus:border-[#005f43] transition-all resize-none"
                  />
                </div>

                {/* Submitting CTAs */}
                <div className="pt-4 space-y-4">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#005f43] hover:bg-[#004732] text-white font-extrabold py-4 rounded-xl text-base tracking-wide flex items-center justify-center gap-2 shadow-md transition-transform hover:-translate-y-0.5"
                  >
                    <Send className="w-5 h-5 text-[#00c853]" />
                    <span>{loading ? t.submittingBtn : t.submitBtn}</span>
                  </Button>

                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-[#00c853]" />
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