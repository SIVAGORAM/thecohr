"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, MapPin, Plus, Minus } from "lucide-react";

export function ContactLocationOffice() {
  return (
    <section className="bg-white py-3 sm:py-4 lg:py-6">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ==================== LEFT CARD: Hyderabad Map Graphic ==================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#F4F8FB] rounded-3xl border border-slate-200/80 shadow-sm relative overflow-hidden min-h-[300px] flex flex-col justify-between p-6 sm:p-8"
          >
            {/* Map Visual Background Grid & Landmarks */}
            <div className="absolute inset-0 bg-[#F4F7F6] opacity-90">
              {/* Roads / Map vector styling */}
              <svg className="w-full h-full text-slate-300/70" viewBox="0 0 600 350" fill="none">
                <path d="M-20 80 Q 200 120 620 90" stroke="currentColor" strokeWidth="6" />
                <path d="M-20 220 Q 250 180 620 250" stroke="currentColor" strokeWidth="8" />
                <path d="M120 -20 Q 150 180 200 370" stroke="currentColor" strokeWidth="6" />
                <path d="M400 -20 Q 380 200 450 370" stroke="currentColor" strokeWidth="6" />
                <path d="M250 100 Q 300 250 550 320" stroke="#E2E8F0" strokeWidth="4" />
              </svg>
            </div>

            {/* City Area Labels */}
            <div className="relative z-10 font-bold text-slate-400 text-xs sm:text-sm tracking-wide select-none pointer-events-none">
              <span className="absolute top-6 left-1/4 text-slate-600 font-extrabold text-xs">Kukatpally</span>
              <span className="absolute top-8 right-1/4 text-slate-600 font-extrabold text-xs">Secunderabad</span>
              <span className="absolute bottom-16 left-12 text-slate-600 font-extrabold text-xs">Banjara Hills</span>
              <span className="absolute bottom-14 right-1/4 text-slate-600 font-extrabold text-xs">Uppal</span>
              <span className="absolute bottom-6 right-12 text-slate-600 font-extrabold text-xs">Nagole</span>
            </div>

            {/* Main City Title */}
            <div className="relative z-10 mt-auto pt-16">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                Hyderabad<br />
                <span className="text-sm font-bold text-slate-500 font-sans">హైదరాబాద్</span>
              </h3>
            </div>

            {/* Center Map Location Pin Overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-2 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-xl border border-slate-100 max-w-[260px]">
              <div className="w-9 h-9 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0 shadow-md">
                <MapPin className="w-5 h-5 fill-white text-red-500" />
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-extrabold text-[#051332]">
                  The Co HR Private Limited
                </div>
                <div className="text-[10px] sm:text-xs font-semibold text-slate-500">
                  Hyderabad, Telangana
                </div>
              </div>
            </div>

            {/* Zoom Controls on Top-Right */}
            <div className="absolute top-4 right-4 z-20 bg-white rounded-xl shadow-md border border-slate-200 flex flex-col divide-y divide-slate-100 overflow-hidden">
              <button className="p-2 text-slate-600 hover:bg-slate-50 transition-colors" aria-label="Zoom in">
                <Plus className="w-4 h-4" />
              </button>
              <button className="p-2 text-slate-600 hover:bg-slate-50 transition-colors" aria-label="Zoom out">
                <Minus className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* ==================== RIGHT CARD: Our Office Photo Card ==================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 bg-[#F0F6FF] rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between"
          >
            {/* Office Info Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-[#0066FF] shrink-0 shadow-sm">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#051332]">
                  Our Office
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-0.5">
                  The Co HR Private Limited
                </p>
                <p className="text-xs font-medium text-slate-500">
                  Hyderabad, Telangana, India - 500081
                </p>
              </div>
            </div>

            {/* Office Image */}
            <div className="relative rounded-2xl overflow-hidden border border-blue-100 shadow-md bg-white">
              <Image
                src="/images/contact-office.jpg"
                alt="The Co HR Office - Hyderabad"
                width={600}
                height={380}
                className="w-full h-52 sm:h-60 object-cover transform hover:scale-102 transition-transform duration-500"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
