"use client";

import React, { useState } from "react";
import { Sparkles } from "lucide-react";

interface GalleryItem {
  id: number;
  category: string;
  before: string;
  after: string;
  label: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    category: "Kitchen",
    before: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
    after: "https://images.unsplash.com/photo-1556911220-115f18c5e4f6?auto=format&fit=crop&w=600&q=80",
    label: "Kitchen Stovetop & Countertops"
  },
  {
    id: 2,
    category: "Bathroom",
    before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
    after: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=600&q=80",
    label: "Immaculate Tile Restoration"
  },
  {
    id: 3,
    category: "Office",
    before: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80",
    after: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    label: "Polished Corporate Lobby Desk"
  }
];

export const Gallery: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-teal-400 uppercase block mb-3">
            Real Results
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif text-white">
            Our Before & After Gallery
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-base">
            Hover over any image below to witness the incredible transformational work delivered by G and Bros Services LLC.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Before and After Interactive Displays */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl group relative"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Display Wrapper */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* Before Image */}
                <img
                  src={item.before}
                  alt="Before"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                  style={{ opacity: hoveredId === item.id ? 0 : 1 }}
                />

                {/* After Image */}
                <img
                  src={item.after}
                  alt="After"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                  style={{ opacity: hoveredId === item.id ? 1 : 0 }}
                />

                {/* Floating Status Badge */}
                <div className="absolute top-4 left-4 bg-slate-950/90 text-teal-400 px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider border border-teal-500/30">
                  {hoveredId === item.id ? "After Transformation" : "Before Cleanup"}
                </div>

                {/* Hover instruction overlay */}
                <div className="absolute bottom-4 right-4 bg-slate-950/80 px-2 py-1 text-[10px] text-slate-400 rounded border border-slate-800">
                  {hoveredId === item.id ? "Mouse away to see Before" : "Hover to see After"}
                </div>
              </div>

              {/* Text label details */}
              <div className="p-5 text-left bg-slate-900">
                <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest block mb-1">
                  {item.category}
                </span>
                <p className="text-sm font-semibold text-white">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};