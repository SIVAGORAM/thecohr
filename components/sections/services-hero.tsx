"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Settings, Users, ShieldCheck, TrendingUp } from "lucide-react";

export function ServicesHero() {
  return (
    <section className="bg-gradient-to-r from-[#EFF6FF] via-[#F8FBFF] to-[#E9F3FF] pt-2 pb-3 lg:pt-4 lg:pb-4 overflow-hidden relative">
      {/* Background Soft Glow Graphic */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text & 4 Pill Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-4 sm:space-y-5"
          >
            {/* Eyebrow */}
            <div className="text-xs font-bold uppercase tracking-widest text-[#0066FF]">
              OUR SERVICES
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#051332] tracking-tight leading-[1.15]">
              One Platform. One Partner.<br />
              <span className="text-[#0066FF]">Complete HR Solutions.</span>
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              At The Co HR, we provide comprehensive HR solutions designed to simplify workforce management while supporting business growth.
            </p>

            {/* 4 Pill Badges in responsive grid/flex */}
            <div className="pt-3 flex flex-wrap items-center gap-2.5 sm:gap-4">
              {/* Badge 1 */}
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-full border border-blue-100 shadow-sm shrink-0">
                <div className="w-9 h-9 rounded-full bg-blue-100/80 flex items-center justify-center text-[#0066FF] shrink-0">
                  <Settings className="w-4.5 h-4.5" />
                </div>
                <div className="text-xs font-bold text-slate-700 leading-snug">
                  Integrated<br />Solutions
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-full border border-blue-100 shadow-sm shrink-0">
                <div className="w-9 h-9 rounded-full bg-blue-100/80 flex items-center justify-center text-[#0066FF] shrink-0">
                  <Users className="w-4.5 h-4.5" />
                </div>
                <div className="text-xs font-bold text-slate-700 leading-snug">
                  Expert<br />Team
                </div>
              </div>

              {/* Badge 3 */}
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-full border border-blue-100 shadow-sm shrink-0">
                <div className="w-9 h-9 rounded-full bg-blue-100/80 flex items-center justify-center text-[#0066FF] shrink-0">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
                <div className="text-xs font-bold text-slate-700 leading-snug">
                  Reliable<br />Support
                </div>
              </div>

              {/* Badge 4 */}
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-full border border-blue-100 shadow-sm shrink-0">
                <div className="w-9 h-9 rounded-full bg-blue-100/80 flex items-center justify-center text-[#0066FF] shrink-0">
                  <TrendingUp className="w-4.5 h-4.5" />
                </div>
                <div className="text-xs font-bold text-slate-700 leading-snug">
                  Measurable<br />Impact
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image & Overlay Elements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-5 relative flex items-center justify-end"
          >
            {/* Image Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-blue-100/80 bg-white max-w-[560px] w-full">
              <Image
                src="/images/services-hero-tablet.jpg"
                alt="Our Services - The Co HR"
                width={600}
                height={420}
                className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-500"
                priority
              />

              {/* Floating Cursive Script Calligraphy on top-right (visible on sm and larger screens) */}
              <div className="absolute top-3 right-4 sm:top-5 sm:right-6 z-20 pointer-events-none transform rotate-[-3deg] hidden sm:block">
                <span className="block text-2xl sm:text-3xl lg:text-[32px] text-[#2B74E2] font-normal font-[family-name:var(--font-playball)] leading-tight drop-shadow-sm">
                  People<br />
                  Performance<br />
                  Possibilities
                </span>
                <svg className="w-20 sm:w-24 h-4 text-[#2B74E2] opacity-80 mt-0.5" viewBox="0 0 100 12" fill="none">
                  <path d="M2 10C30 3 70 3 98 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Floating Badge Card on bottom-right */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-blue-50 px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2.5 sm:gap-3 max-w-[190px] sm:max-w-[240px] z-20">
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-blue-100/80 flex items-center justify-center text-[#0066FF] shrink-0">
                  <Users className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </div>
                <div className="text-[11px] sm:text-sm font-bold text-[#051332] leading-tight">
                  Simplifying HR<br />
                  <span className="font-normal text-slate-500 text-[9px] sm:text-xs">for a Better Tomorrow</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
