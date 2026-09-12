"use client";

import { motion } from "framer-motion";
import { homeContent } from "@/lib/content";
import Image from "next/image";
import { Play, Settings, Users, GraduationCap, Building2, Star } from "lucide-react";

export function EcosystemStats() {
  const { eyebrow, description, stats } = homeContent.ecosystem;

  const statIcons = [
    <Building2 key="1" className="w-5 h-5 text-[#0055FF]" />,
    <Users key="2" className="w-5 h-5 text-[#0055FF]" />,
    <Star key="3" className="w-5 h-5 fill-[#0055FF] text-[#0055FF]" />
  ];

  return (
    <section className="bg-[#F0F7FF] relative overflow-hidden py-4" style={{ marginTop: 0 }}>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {/* Top-right blue triangle accents */}
        <svg className="absolute top-0 right-0 w-[250px] h-[200px] text-[#0055FF]/10" viewBox="0 0 100 80" preserveAspectRatio="none">
          <polygon points="60,0 100,0 100,50" fill="currentColor" />
          <polygon points="80,0 100,0 100,25" fill="rgba(0,85,255,0.15)" />
        </svg>
        
        {/* Dot patterns */}
        <div className="absolute top-12 left-[38%] grid grid-cols-5 gap-3 opacity-25 hidden lg:grid">
          {Array.from({length: 20}).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#0055FF]" />
          ))}
        </div>
        <div className="absolute top-8 right-[18%] grid grid-cols-4 gap-3 opacity-25 hidden lg:grid">
          {Array.from({length: 12}).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#0055FF]" />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1500px] relative z-10">
        {/* Use a 2-column layout with the image overlapping slightly */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
          
          {/* Left Column: Text & Features */}
          <div className="flex flex-col justify-center py-6 lg:py-8 px-6 lg:pl-12 lg:pr-6 relative z-20">
            {/* Pill Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex self-start bg-white text-[#0055FF] px-5 py-2 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase mb-5 shadow-sm border border-blue-100"
            >
              {eyebrow}
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[28px] sm:text-[34px] lg:text-[36px] xl:text-[44px] 2xl:text-[48px] font-heading font-extrabold text-[#111827] tracking-[-0.02em] leading-[1.12] mb-5"
            >
              <span className="border-b-[3px] border-[#22C55E] pb-1">Technology + Expertise + Learning</span>{" "}
              <br className="hidden xl:block" />
              for a <span className="text-[#0055FF]">Stronger Tomorrow</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed mb-8 max-w-md"
            >
              {description}
            </motion.p>

            {/* Bottom Row: Play Button & Mini Features */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-6 mt-2"
            >
              {/* Play Button */}
              <div className="flex items-center gap-3 group cursor-pointer sm:border-r sm:border-gray-300/50 sm:pr-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0088FF] to-[#0055FF] text-white flex items-center justify-center shadow-[0_6px_16px_rgba(0,85,255,0.35)] group-hover:scale-110 transition-transform shrink-0">
                  <Play className="w-4 h-4 ml-0.5 fill-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[13px] text-navy-900 leading-tight">Watch Our Story</span>
                  <span className="text-[11px] text-gray-500">(2 min)</span>
                </div>
              </div>

              {/* Mini Features */}
              <div className="flex gap-5">
                {[
                  { icon: <Settings className="w-4 h-4 text-[#0055FF]" strokeWidth={1.8} />, label: "Innovative\nTechnology" },
                  { icon: <Users className="w-4 h-4 text-[#0055FF]" strokeWidth={1.8} />, label: "Industry\nExpertise" },
                  { icon: <GraduationCap className="w-4 h-4 text-[#0055FF]" strokeWidth={1.8} />, label: "Continuous\nLearning" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-1.5 text-center">
                    <div className="w-9 h-9 rounded-full border-2 border-blue-200/60 bg-white flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-bold text-navy-900 uppercase tracking-wider whitespace-pre-line leading-tight">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Image & Stats — shifted left to overlap */}
          <div className="relative min-h-[400px] sm:min-h-[450px] lg:min-h-0 lg:-ml-12 xl:-ml-16 mt-8 lg:mt-0">
            
            {/* Image — fills right column completely, rounded on left only on desktop */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-full min-h-[400px] sm:min-h-[450px] lg:min-h-[520px] overflow-hidden rounded-[32px] lg:rounded-l-[40px] lg:rounded-r-none"
            >
              <Image
                src="/images/ecosystem-team.jpg"
                alt="The Co HR Team collaborating"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
              
              {/* Soft left-edge fade into background */}
              <div className="absolute inset-y-0 -left-1 w-20 bg-gradient-to-r from-[#F0F7FF] to-transparent hidden lg:block" />
            </motion.div>

            {/* Floating Calligraphy Text */}
            <motion.div
              initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: -8, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute top-6 left-4 lg:top-[8%] lg:left-[6%] z-20 text-[#0055FF] text-[18px] sm:text-[26px] lg:text-[30px] leading-tight drop-shadow-sm pointer-events-none font-[family-name:var(--font-playball)]"
            >
              Better People<br />
              Brighter Possibilities
            </motion.div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-4 right-4 lg:bottom-auto lg:top-[50%] lg:right-8 transform-none lg:-translate-y-1/2 bg-white/95 backdrop-blur-sm rounded-[20px] p-4 sm:p-5 shadow-[0_16px_40px_rgba(0,0,0,0.12)] w-[160px] sm:w-[210px] z-20 flex flex-col gap-2"
            >
              {stats.map((stat, idx) => (
                <div key={stat.label} className={`flex items-center gap-3 ${idx !== stats.length - 1 ? 'pb-2.5 border-b border-gray-100' : ''}`}>
                  <div className="w-9 h-9 rounded-full bg-[#F0F7FF] flex items-center justify-center shrink-0">
                    {statIcons[idx]}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[16px] sm:text-[20px] font-heading font-extrabold text-[#111827] leading-none mb-0.5">
                      {stat.value}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-medium text-gray-500 leading-tight">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
