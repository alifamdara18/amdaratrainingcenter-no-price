import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-t from-navy-950 via-navy-900 to-navy-950 relative border-t border-navy-800">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-8">
          Sebelum Kakak <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">Memutuskan…</span>
        </h2>

        <div className="space-y-6 text-slate-300 text-lg sm:text-xl leading-relaxed mb-12">
          <p>Tarik napas sebentar. Lalu tanyakan pada dirimu:</p>
          <p className="text-2xl font-bold text-gold-400 italic font-serif">
            "kalau saya terus malu, gerogi, malu maluin, bahkan demam panggung saat tampil di depan umum jadi apa aku nanti?”
          </p>
          <p>
            Jika 2 bulan kedepan saya sudah minimal bisa percaya diri didepan umum, saya bisa <strong className="text-white">BAHAGIA,</strong> bahkan job terus mengalir, diundang lagi dan lagi mungkin itu Itu semua ditentukan oleh <strong className="text-white">ACTION</strong> saya sekarang.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <a
            href="https://wa.me/6288276338267?text=Halo%20Amdara%20Training%20Centre,%20saya%20ingin%20konsultasi%20gratis%20mengenai%20kelas%20Public%20Speaking"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 py-5 px-8 sm:px-12 bg-gradient-to-r from-gold-500 via-yellow-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 rounded-2xl font-black text-base sm:text-xl shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all hover:scale-105 active:scale-95 group text-center"
          >
            <span className="flex items-center gap-2">
              AYO KONSULTASI GRATIS DENGAN COACH KAMI DISINI
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1.5 transition-transform shrink-0" />
            </span>
          </a>
          <p className="mt-6 text-sm text-slate-400 max-w-xl mx-auto font-medium">
            Tidak untuk menjadi orang lain. Tidak untuk terlihat sempurna. Tapi untuk menjadi versi diriku yang lebih tenang, lebih berani, dan lebih percaya diri.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
