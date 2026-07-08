"use client";

import React from "react";
import { Sparkles, CalendarCheck, ShieldCheck } from "lucide-react";

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visuals/Glow Graphics */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-slate-800 aspect-[4/3] sm:aspect-square shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
              alt="G and Bros cleaning team at work"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
            />
            {/* Elegant overlay card with stats */}
            <div className="absolute bottom-6 left-6 right-6 bg-slate-950/90 border border-teal-500/30 rounded-2xl p-5 shadow-xl backdrop-blur-md">
              <div className="flex justify-around text-center">
                <div>
                  <span className="text-3xl font-black text-teal-400 block font-serif">20+</span>
                  <span className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Years Exp</span>
                </div>
                <div className="border-l border-slate-800" />
                <div>
                  <span className="text-3xl font-black text-teal-400 block font-serif">100%</span>
                  <span className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Insured</span>
                </div>
                <div className="border-l border-slate-800" />
                <div>
                  <span className="text-3xl font-black text-teal-400 block font-serif">5★</span>
                  <span className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Rated Reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="text-xs font-bold tracking-[0.25em] text-teal-400 uppercase">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif text-white">
              About G and Bros Services LLC
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full" />
            
            <p className="text-slate-300 text-lg leading-relaxed font-light">
              G and Bros Services LLC is a trusted cleaning company dedicated to providing dependable, high-quality cleaning services for homes and businesses. With more than 20 years of experience, we take pride in delivering detailed, professional cleaning and excellent customer service.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Our goal is to help every client enjoy a clean, fresh, and comfortable space. We operate with robust corporate ethics, ensuring every team member is fully insured, highly vetted, and carefully trained on advanced sanitization techniques.
            </p>

            {/* Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-teal-500/10 text-teal-400 rounded-lg">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Safe & Fully Insured</p>
                  <p className="text-xs text-slate-400">Rest easy, you're fully covered</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-teal-500/10 text-teal-400 rounded-lg">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Premium Quality Supplies</p>
                  <p className="text-xs text-slate-400">Strictly eco-friendly cleaning</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};