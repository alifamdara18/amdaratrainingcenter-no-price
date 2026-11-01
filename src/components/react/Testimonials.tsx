import React, { useState, useEffect, useCallback } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  Sparkles,
  MessageSquare
} from 'lucide-react';

interface TestimonialImage {
  id: number;
  src: string;
  alt: string;
  name?: string;
}

const testimonialImages: TestimonialImage[] = [
  { id: 1, src: '/testi1.jpeg', alt: 'Testimoni Alumni Innerpeace Public Speaking Amdara', name: 'El Malikha Indah' },
  { id: 2, src: '/testi2.jpeg', alt: 'Testimoni Alumni Innerpeace Public Speaking Amdara', name: 'Umma Rohmi' },
  { id: 3, src: '/testi3.jpeg', alt: 'Testimoni Alumni Innerpeace Public Speaking Amdara', name: 'Nitaa' },
  { id: 4, src: '/testi4.jpeg', alt: 'Testimoni Alumni Innerpeace Public Speaking Amdara', name: 'Siti Rodliyah' },
  { id: 5, src: '/testi5.jpeg', alt: 'Testimoni Alumni Innerpeace Public Speaking Amdara', name: 'Rofiqoh 717' },
  { id: 6, src: '/testi6.jpeg', alt: 'Testimoni Alumni Innerpeace Public Speaking Amdara', name: 'Fiteyy & Nursiti' },
  { id: 7, src: '/testi7.jpeg', alt: 'Testimoni Alumni Innerpeace Public Speaking Amdara', name: 'Alumni Amdara' },
  { id: 8, src: '/testi8.jpeg', alt: 'Testimoni Alumni Innerpeace Public Speaking Amdara', name: "Qurrota A'Yunin" },
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const handleOpen = (idx: number) => {
    setActiveIdx(idx);
  };

  const handleClose = useCallback(() => {
    setActiveIdx(null);
  }, []);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveIdx((prev) => {
      if (prev === null) return null;
      return (prev + 1) % testimonialImages.length;
    });
  }, []);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveIdx((prev) => {
      if (prev === null) return null;
      return (prev - 1 + testimonialImages.length) % testimonialImages.length;
    });
  }, []);

  // Keyboard navigation & lock scroll
  useEffect(() => {
    if (activeIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIdx, handleClose, handleNext, handlePrev]);

  return (
    <div id="testimoni" className="w-full my-16 sm:my-20">
      {/* ========================================================================= */}
      {/* HEADER SECTION TESTIMONI                                                  */}
      {/* ========================================================================= */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900 border border-gold-500/40 text-gold-300 font-extrabold text-xs sm:text-sm uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
          <span>💬 BUKTI REAL & KATA MERAKA</span>
        </div>

        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-4">
          Apa Kata Alumni Setelah Mengikuti{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-yellow-400 to-gold-500 drop-shadow-[0_0_25px_rgba(212,175,55,0.3)]">
            Innerpeace Public Speaking?
          </span>
        </h3>

        <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
          Tangkapan layar asli pengalaman dan perasaan teman-teman alumni setelah mengikuti sesi training.
        </p>
      </div>

      {/* ========================================================================= */}
      {/* IMAGE GRID TESTIMONI                                                      */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonialImages.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => handleOpen(idx)}
            className="group rounded-2xl border border-gold-500/20 bg-navy-800/50 p-2 shadow-xl hover:border-gold-500/50 transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden flex flex-col"
          >
            {/* Image Container with subtle inner rounded styling */}
            <div className="relative w-full overflow-hidden rounded-xl bg-navy-950/80 flex items-center justify-center min-h-[260px] max-h-[380px]">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-auto object-cover sm:object-contain group-hover:scale-105 transition-transform duration-300"
              />

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-navy-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-4 text-center backdrop-blur-[2px]">
                <div className="w-12 h-12 rounded-full bg-gold-500/20 border border-gold-400/50 flex items-center justify-center text-gold-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                  <ZoomIn className="w-6 h-6" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                  Klik untuk Memperbesar
                </span>
                <span className="text-[11px] text-gold-300/90 font-medium">
                  Baca screenshot testimoni
                </span>
              </div>
            </div>

            {/* Bottom Card Meta Bar */}
            <div className="mt-2.5 px-2 pb-1 flex items-center justify-between text-xs">
              <span className="text-slate-300 font-semibold truncate flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                {item.name || `Alumni #${item.id}`}
              </span>
              <span className="text-[11px] text-gold-400/90 font-medium group-hover:text-gold-300 transition-colors">
                Lihat Screenshot →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* MODAL LIGHTBOX / PREVIEW                                                  */}
      {/* ========================================================================= */}
      {activeIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Preview Testimoni Alumni"
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-navy-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
        >
          {/* Top Bar: Counter & Close Button */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between z-20 pointer-events-auto"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900/90 border border-gold-500/40 text-gold-300 text-xs sm:text-sm font-bold shadow-lg backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>
                Testimoni {activeIdx + 1} dari {testimonialImages.length}
              </span>
            </div>

            <button
              type="button"
              onClick={handleClose}
              className="p-2.5 rounded-full bg-navy-900/90 border border-gold-500/40 text-slate-300 hover:text-white hover:border-gold-400 hover:bg-gold-500/20 transition-all shadow-lg backdrop-blur-md focus:outline-none"
              aria-label="Tutup preview"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="hidden sm:flex absolute left-4 sm:left-6 z-20 w-11 h-11 rounded-full bg-navy-900/90 border border-gold-500/40 text-slate-200 hover:text-gold-300 hover:border-gold-400 hover:bg-gold-500/20 items-center justify-center transition-all shadow-xl backdrop-blur-md focus:outline-none"
            aria-label="Testimoni sebelumnya"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            className="hidden sm:flex absolute right-4 sm:right-6 z-20 w-11 h-11 rounded-full bg-navy-900/90 border border-gold-500/40 text-slate-200 hover:text-gold-300 hover:border-gold-400 hover:bg-gold-500/20 items-center justify-center transition-all shadow-xl backdrop-blur-md focus:outline-none"
            aria-label="Testimoni berikutnya"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Image Modal Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[82vh] w-auto h-auto flex flex-col items-center justify-center p-2 rounded-2xl bg-navy-900/80 border border-gold-500/40 shadow-[0_0_50px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.2)]"
          >
            <img
              src={testimonialImages[activeIdx].src}
              alt={testimonialImages[activeIdx].alt}
              loading="lazy"
              className="max-h-[75vh] w-auto max-w-[92vw] sm:max-w-[80vw] object-contain rounded-xl select-none"
            />

            {/* Mobile Navigation & Instruction Footer */}
            <div className="w-full mt-3 pt-2 border-t border-navy-800 flex items-center justify-between px-2 text-xs text-slate-300">
              <button
                type="button"
                onClick={handlePrev}
                className="sm:hidden flex items-center gap-1 text-gold-400 font-semibold px-2 py-1 rounded bg-navy-800/80 border border-gold-500/30"
              >
                <ChevronLeft className="w-4 h-4" /> Prev
              </button>

              <span className="text-[11px] sm:text-xs text-slate-400 text-center mx-auto truncate px-2">
                Tekan <kbd className="px-1.5 py-0.5 rounded bg-navy-950 border border-navy-700 text-gold-300 text-[10px]">ESC</kbd> atau klik di luar untuk menutup
              </span>

              <button
                type="button"
                onClick={handleNext}
                className="sm:hidden flex items-center gap-1 text-gold-400 font-semibold px-2 py-1 rounded bg-navy-800/80 border border-gold-500/30"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
