"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck, CheckCircle, Eye, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LOCALIZATION } from "@/utils/localization";
import { showError, showSuccess } from "@/utils/toast";
import { 
  getFullEmail, 
  handleMailTo, 
  CONTACT_INFO, 
  sanitizeInput, 
  ContactFormSchema, 
  checkRateLimit, 
  updateRateLimit, 
  validateEmailDomain 
} from "@/utils/security";

interface ContactSectionProps {
  language: "english" | "spanish";
  prefilledMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language, prefilledMessage = "" }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const t = LOCALIZATION[language].contact;

  React.useEffect(() => {
    if (prefilledMessage) {
      setMessage(prefilledMessage);
    }
  }, [prefilledMessage]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9+\s-]/g, "");
    setPhone(val);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) return;

    // Rate limiting check
    const rateCheck = checkRateLimit("contact_submission", 60000); // 1 minute cooldown
    if (!rateCheck.allowed) {
      showError(
        language === "english"
          ? `Please wait ${rateCheck.remaining}s before sending another request.`
          : `Por favor espere ${rateCheck.remaining}s antes de enviar otra solicitud.`
      );
      return;
    }

    // Step 1: Validate schema format
    const result = ContactFormSchema.safeParse({
      name,
      email,
      phone,
      message
    });

    if (!result.success) {
      const errorMsg = result.error.errors[0].message;
      showError(errorMsg);
      return;
    }

    setLoading(true);

    // Step 2: Perform DNS MX record lookup to check if the email domain actually exists
    const domainCheck = await validateEmailDomain(result.data.email, language);
    if (!domainCheck.valid) {
      setLoading(false);
      showError(domainCheck.error || (language === "english" ? "Invalid email domain." : "Dominio de correo no válido."));
      return;
    }

    const sanitizedData = {
      name: sanitizeInput(result.data.name),
      email: sanitizeInput(result.data.email),
      phone: sanitizeInput(result.data.phone),
      message: sanitizeInput(result.data.message || "")
    };

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      updateRateLimit("contact_submission");
      showSuccess(t.successTitle);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white relative" aria-label="Contact G & Bros Services">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          <div className="lg:col-span-5 bg-[#FBF9F6] border border-slate-200 rounded-3xl p-6 sm:p-10 space-y-8 shadow-sm">
            <h3 className="text-2xl font-serif font-black text-[#005f43]">
              {language === "english" ? "Office details" : "Detalles de Oficina"}
            </h3>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-[#005f43]/10 text-[#005f43] rounded-2xl h-fit border border-[#005f43]/20">
                <Mail className="w-5 h-5 text-[#00c853]" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-black uppercase text-[#005f43] tracking-wider mb-1.5">
                  {language === "english" ? "Email Address" : "Dirección de Correo"}
                </p>
                <button 
                  onClick={handleMailTo}
                  className="text-base font-extrabold text-[#1e293b] hover:text-[#005f43] transition-colors block text-left animate-fade-in"
                >
                  {getFullEmail()}
                </button>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-[#005f43]/10 text-[#005f43] rounded-2xl h-fit border border-[#005f43]/20">
                <Phone className="w-5 h-5 text-[#00c853]" />
              </div>
              <div>
                <p className="text-xs font-black uppercase text-[#005f43] tracking-wider mb-1.5">
                  {language === "english" ? "Phone Number" : "Número de Teléfono"}
                </p>
                <a href="tel:+17276089599" className="text-base font-extrabold text-[#1e293b] hover:text-[#005f43] transition-colors block font-mono">
                  +1 727-608-9599
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-[#005f43]/10 text-[#005f43] rounded-2xl h-fit border border-[#005f43]/20">
                <Clock className="w-5 h-5 text-[#00c853]" />
              </div>
              <div>
                <p className="text-xs font-black uppercase text-[#005f43] tracking-wider mb-1.5">
                  {t.hoursLabel}
                </p>
                <p className="text-slate-800 text-sm font-bold">
                  {t.weekdays}
                </p>
                <p className="text-xs text-red-600 font-extrabold mt-1">
                  {language === "english" ? "Closed on weekends" : "Cerrado los fines de semana"}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-[#FBF9F6] border-2 border-[#00c853]/30 rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-lg" role="status">
                <div className="absolute top-0 inset-x-0 h-2 bg-[#00c853]" />
                <div className="w-16 h-16 bg-[#00c853]/15 text-[#005f43] rounded-full flex items-center justify-center mx-auto border border-[#00c853]/30">
                  <CheckCircle className="w-8 h-8 text-[#00c853]" />
                </div>
                <h3 className="text-2xl font-serif font-black text-[#005f43]">
                  {t.successTitle}
                </h3>
                <p className="text-slate-700 max-w-md mx-auto text-sm leading-relaxed font-semibold">
                  {t.successDesc}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 space-y-6 shadow-xl relative" aria-label="Callback Inquiry Form">
                <div className="absolute top-0 inset-x-0 h-2 bg-[#005f43]" />
                
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    placeholder="Work title"
                  />
                </div>

                <h3 className="text-xl font-serif font-black text-[#005f43] mb-4">
                  {t.formTitle}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-xs font-black uppercase text-slate-800 tracking-wider block">
                      {t.nameField} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.phName}
                      className="w-full bg-[#FBF9F6] border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#005f43] transition-all font-semibold"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-phone" className="text-xs font-black uppercase text-slate-800 tracking-wider block">
                      {t.phoneField} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="+1 727..."
                      className="w-full bg-[#FBF9F6] border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#005f43] transition-all font-semibold"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-xs font-black uppercase text-slate-800 tracking-wider block">
                    {t.emailField} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={language === 'english' ? 'your@email.com' : 'su@correo.com'}
                    className="w-full bg-[#FBF9F6] border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#005f43] transition-all font-semibold"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-xs font-black uppercase text-slate-700 tracking-wider block leading-relaxed">
                    {language === "english" ? "Describe apartment size, specific cleaning conditions, or your preferred callback times..." : "Describa el tamaño de su apartamento, condiciones específicas de limpieza, o sus horarios preferidos para la llamada..."}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.phMsg}
                    className="w-full bg-[#FBF9F6] border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#005f43] transition-all resize-none font-semibold"
                  />
                </div>

                <div className="pt-4 space-y-4">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#005f43] hover:bg-[#004732] text-white font-extrabold py-4.5 rounded-xl text-base tracking-wide flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin text-[#00c853]" />
                        <span>{language === "english" ? "Verifying email..." : "Verificando correo..."}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 text-[#00c853]" />
                        <span>{t.submitBtn}</span>
                      </>
                    )}
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-xs text-[#004732] bg-[#00c853]/10 py-2.5 px-4 rounded-xl font-bold uppercase tracking-wider border border-[#00c853]/25 shadow-sm">
                    <ShieldCheck className="w-5 h-5 text-[#00c853]" />
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