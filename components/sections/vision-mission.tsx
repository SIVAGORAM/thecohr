"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export function VisionMission() {
  return (
    <section className="bg-slate-50/50 py-4 lg:py-6 relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-4 space-y-1">
          <div className="text-xs font-bold uppercase tracking-widest text-[#0066FF]">
            OUR DIRECTION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#051332] tracking-tight">
            Vision &amp; Mission
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Guided by a clear purpose. Driven by a bigger tomorrow.
          </p>
        </div>

        {/* 2-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Our Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative bg-gradient-to-br from-[#EDF5FF] via-[#F2F7FF] to-[#E3F0FF] rounded-3xl p-8 sm:p-10 border border-blue-100/80 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col sm:flex-row items-start gap-6"
          >
            {/* Soft decorative background circles */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200/30 rounded-full blur-2xl pointer-events-none" />

            <div className="w-14 h-14 rounded-full bg-white/90 shadow-sm border border-blue-200/60 flex items-center justify-center shrink-0 text-[#0066FF]">
              <Eye className="w-7 h-7" />
            </div>

            <div className="space-y-3 relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-[#051332]">
                Our Vision
              </h3>
              <p className="text-slate-600 leading-relaxed text-base">
                To become the most trusted global HR transformation partner by delivering innovative technology, expert HR services, and world-class learning solutions that empower organisations and their people.
              </p>
            </div>
          </motion.div>

          {/* Our Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="relative bg-gradient-to-br from-[#E6FAF6] via-[#EFFBF8] to-[#DBF7F1] rounded-3xl p-8 sm:p-10 border border-emerald-100/80 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col sm:flex-row items-start gap-6"
          >
            {/* Soft decorative background circles */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-200/30 rounded-full blur-2xl pointer-events-none" />

            <div className="w-14 h-14 rounded-full bg-white/90 shadow-sm border border-emerald-200/60 flex items-center justify-center shrink-0 text-[#00B894]">
              <Target className="w-7 h-7" />
            </div>

            <div className="space-y-3 relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-[#051332]">
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed text-base">
                To simplify HR through integrated software, expert services, and practical training that improve productivity, compliance, employee engagement, and business performance.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

