"use client";

import { motion } from "framer-motion";
import { homeContent } from "@/lib/content";
import { 
  Users, UserPlus, UserCheck, CalendarCheck, CalendarDays, 
  CreditCard, TrendingUp, GraduationCap, Heart, 
  UserMinus, Rocket, Settings
} from "lucide-react";
import React from "react";

const stageIcons: Record<string, React.ReactNode> = {
  attract: <Users className="w-5 h-5 text-[#0055FF]" />,
  hire: <UserPlus className="w-5 h-5 text-[#0055FF]" />,
  onboard: <UserCheck className="w-5 h-5 text-[#0055FF]" />,
  attendance: <CalendarCheck className="w-5 h-5 text-[#0055FF]" />,
  leave: <CalendarDays className="w-5 h-5 text-[#0055FF]" />,
  payroll: <CreditCard className="w-5 h-5 text-[#0055FF]" />,
  performance: <TrendingUp className="w-5 h-5 text-[#0055FF]" />,
  learning: <GraduationCap className="w-5 h-5 text-[#0055FF]" />,
  leverage: <Settings className="w-5 h-5 text-[#0055FF]" />,
  engagement: <Heart className="w-5 h-5 text-[#0055FF]" />,
  offboarding: <UserMinus className="w-5 h-5 text-[#0055FF]" />,
  growth: <Rocket className="w-5 h-5 text-[#0055FF]" />
};

function StageCard({ stage }: { stage: { name: string; description: string; icon: string } }) {
  return (
    <div className="flex flex-col items-center gap-2 shrink-0 w-[100px] text-center">
      <div className="w-12 h-12 rounded-xl bg-white border-2 border-[#E5F0FF] flex items-center justify-center shadow-sm mb-1">
        {stageIcons[stage.icon]}
      </div>
      <span className="text-[11px] font-bold text-[#111827] leading-tight">
        {stage.name}
      </span>
      <span className="text-[9px] text-gray-500 leading-tight italic">
        {stage.description}
      </span>
    </div>
  );
}

function DotConnector() {
  return (
    <div className="flex items-center gap-1 shrink-0 px-1 mt-1">
      <div className="w-1 h-1 rounded-full bg-blue-300" />
      <div className="w-1 h-1 rounded-full bg-blue-300" />
      <div className="w-1 h-1 rounded-full bg-blue-300" />
    </div>
  );
}

export function EmployeeJourney() {
  const { eyebrow, heading, subheading, stages } = homeContent.employeeJourney;
  const typedStages = stages as Array<{ name: string; description: string; icon: string }>;
  
  // Duplicate for seamless loop
  const duplicatedStages = [...typedStages, ...typedStages];

  return (
    <section className="bg-gradient-to-b from-[#F0F7FF] to-white py-6 lg:py-8 relative overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 sm:w-16 bg-[#BFDBFE]" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#0055FF] uppercase">
              {eyebrow}
            </span>
            <div className="h-[1px] w-12 sm:w-16 bg-[#BFDBFE]" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[32px] sm:text-[38px] lg:text-[44px] font-heading font-bold text-[#111827] tracking-tight mb-4"
          >
            From Hire to <span className="italic text-[#0055FF]">Higher Potential</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[16px] text-gray-500"
          >
            {subheading}
          </motion.p>

          {/* Floating Calligraphy */}
          <motion.div
            initial={{ opacity: 0, rotate: -15 }}
            whileInView={{ opacity: 1, rotate: -8 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute top-0 right-0 lg:-right-40 xl:-right-60 text-[#0055FF] text-[22px] lg:text-[28px] leading-tight hidden md:block font-[family-name:var(--font-playball)]"
          >
            People<br />
            Perform<br />
            Progress
          </motion.div>
        </div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F5F9FF] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <div className="overflow-hidden">
          <motion.div
            className="flex items-start gap-0 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear"
              }
            }}
          >
            {duplicatedStages.map((stage, idx) => (
              <React.Fragment key={`${stage.name}-${idx}`}>
                <StageCard stage={stage} />
                {idx < duplicatedStages.length - 1 && <DotConnector />}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
