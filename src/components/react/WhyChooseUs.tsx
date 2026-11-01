import React from 'react';
import { 
  Sparkles, 
  Target, 
  Rocket, 
  Mic, 
  Users, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';
import Testimonials from './Testimonials';

const pillars = [
  {
    icon: Target,
    title: "Metode Innerpeace Unique",
    subtitle: "Akar Masalah Mental",
    description: "Mengatasi rasa gugup dari akar masalah mental, bukan sekadar teori hafalan teknis.",
    gradient: "from-amber-400 to-yellow-500"
  },
  {
    icon: Rocket,
    title: "Suasana Kelas Ceria & Hidup",
    subtitle: "Energi Positif & Bahagia",
    description: "Setiap sesi diawali dan dihidupkan dengan lagu-lagu motivasi khas Amdara yang membangun energi percaya diri.",
    gradient: "from-yellow-400 to-gold-500"
  },
  {
    icon: Mic,
    title: "Pendampingan Langsung Master Trainer",
    subtitle: "Master Surya Jaya Negara",
    description: "Diarahkan dan dibimbing langsung oleh Master Surya Jaya Negara dengan evaluasi komprehensif.",
    gradient: "from-gold-400 to-amber-500"
  },
  {
    icon: Users,
    title: "Komunitas Alumni Solid",
    subtitle: "Networking & Support Group",
    description: "Akses diskusi, ruang latihan berkala, dan jejaring suportif bersama ribuan alumni di seluruh Indonesia.",
    gradient: "from-yellow-500 to-gold-600"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="w-full relative py-20 lg:py-28 bg-navy-950 text-slate-100 overflow-hidden border-t border-navy-800">
      {/* Background Ambient Glows & Stardust Texture */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-b from-gold-500/10 via-navy-900/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-15 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* 1. SECTION HEADLINE                                                       */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 font-extrabold text-xs uppercase tracking-wider mb-5 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>💡 TRANSFORMATION & REASON</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-5">
            Mengapa Harus Pilih <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-yellow-400 to-gold-500 drop-shadow-[0_0_25px_rgba(212,175,55,0.3)]">
              Innerpeace Public Speaking?
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed">
            Bukan sekadar belajar teknik bicara, tetapi transformasi pola pikir dan kedamaian diri saat tampil di hadapan publik.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. 4 PILAR KEUNGGULAN UTAMA                                               */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 lg:mb-28">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl p-6 sm:p-7 bg-navy-900/80 border border-gold-500/20 hover:border-gold-500/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.5),0_0_25px_rgba(212,175,55,0.15)] flex flex-col justify-between"
              >
                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent group-hover:via-gold-400 transition-all" />

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 border border-gold-500/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-gold-400 transition-all shadow-inner">
                    <IconComponent className="w-6 h-6 text-gold-400" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400/90 block mb-1">
                    {pillar.subtitle}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gold-200 transition-colors leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-navy-800 flex items-center gap-1.5 text-xs text-gold-400/80 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                  <span>Keunggulan Teruji</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* 3. TESTIMONI ALUMNI (GALLERY & LIGHTBOX)                                  */}
        {/* ========================================================================= */}
        <Testimonials />

        {/* ========================================================================= */}
        {/* 4. INTEGRASI CTA BUTTON                                                   */}
        {/* ========================================================================= */}
        <div className="text-center pt-4">
          <div className="inline-block p-1 rounded-3xl bg-gradient-to-r from-gold-500/30 via-yellow-500/20 to-gold-500/30 shadow-[0_0_40px_rgba(212,175,55,0.25)]">
            <a
              href="/pricing"
              className="inline-flex items-center justify-center gap-3 py-4 sm:py-5 px-8 sm:px-12 bg-gradient-to-r from-gold-500 via-yellow-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 rounded-2xl font-black text-base sm:text-xl shadow-[0_0_35px_rgba(212,175,55,0.4)] transition-all hover:scale-105 active:scale-95 group"
            >
              <span>Siap Merasakan Transformasinya? Pilih Paket Belajar Sekarang</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-slate-400 font-medium">
            ✨ Bimbingan langsung bersama Master Surya Jaya Negara • Garansi Kepuasan 100%
          </p>
        </div>

      </div>
    </section>
  );
}
