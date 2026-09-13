import { FadeIn } from "@/components/ui/fade-in";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ProtectedImage } from "@/components/ui/protected-image";
import { homeContent } from "@/lib/content";
import { cn } from "@/lib/utils";
import { ArrowRight, Settings, Handshake, Users, UserPlus, TrendingUp, Trophy } from "lucide-react";
import React from "react";

const badgeIcons: Record<string, React.ReactNode> = {
  monitor: <Settings className="w-5 h-5 text-[#0066FF]" />,
  shield: <Handshake className="w-5 h-5 text-[#0066FF]" />,
  users: <Users className="w-5 h-5 text-[#0066FF]" />
};

export function Hero() {
  const { overline, headline, ctas, trustBadges } = homeContent.hero;
  const headlineParts = headline.split("Smarter.");

  return (
    <section className="relative bg-white lg:min-h-[700px] flex items-center pt-0 overflow-hidden">
      {/* Desktop Background & Floating UI - Confined to right 65% for better aspect ratio */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[65%] z-20 hidden lg:block pointer-events-none">

        <div className="relative w-full h-full">
          <ProtectedImage
            src="/images/hero-new.jpg"
            alt="The Co HR Platform Overview"
            fill
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-cover object-center"
            priority
          />

          {/* Soft fade overlay over the left edge of the photo */}
          <div className="absolute inset-y-0 left-0 w-[240px] bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Floating UI: Total Employees */}
          <FadeIn
            direction="up"
            delay={0.6}
            className="absolute top-[28%] left-[25%] z-40 bg-white rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] w-[210px] pointer-events-auto"
          >
            <p className="text-[13px] font-bold text-[#111827] mb-1">Total Employees</p>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[28px] font-bold text-[#111827] leading-none mb-1">1,248</p>
                <p className="text-[11px] font-bold text-[#22c55e]">↑ 12% this month</p>
              </div>
              <div className="flex items-end gap-1.5 pb-1">
                <div className="w-2 h-4 bg-[#BFDBFE] rounded-t-sm" />
                <div className="w-2 h-6 bg-[#60A5FA] rounded-t-sm" />
                <div className="w-2 h-9 bg-[#0066FF] rounded-t-sm" />
              </div>
            </div>
          </FadeIn>

          {/* Floating UI: Calligraphy Text & Green Swoosh */}
          <div className="absolute top-[2%] right-[8%] z-40 transform -rotate-6 pointer-events-none">
            <div className="relative flex flex-col items-end">
              <p 
                className="text-[44px] text-[#0055FF] leading-[1.0] whitespace-nowrap font-bold"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Better People<br />
                <span className="relative inline-block mt-1">
                  Brighter Possibilities
                  <svg className="absolute -bottom-4 left-0 w-[110%] h-[20px]" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,15 Q50,15 100,5" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </p>
            </div>
          </div>

          {/* Floating UI: Vertical Checklist */}
          <FadeIn
            direction="left"
            delay={1.0}
            className="absolute top-[32%] right-[8%] z-40 bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col gap-4 pointer-events-auto"
          >
            {[
              { label: "Recruit", icon: <UserPlus className="w-4 h-4 text-[#0066FF]" /> },
              { label: "Onboard", icon: <Users className="w-4 h-4 text-[#0066FF]" /> },
              { label: "Manage", icon: <Settings className="w-4 h-4 text-[#0066FF]" /> },
              { label: "Grow", icon: <TrendingUp className="w-4 h-4 text-[#0066FF]" /> },
              { label: "Succeed", icon: <Trophy className="w-4 h-4 text-[#0066FF]" /> }
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-5">
                <div className="w-9 h-9 rounded-full bg-[#E5F0FF] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <span className="font-bold text-[#111827] text-[14px] w-16">{item.label}</span>
              </div>
            ))}
          </FadeIn>

          {/* Floating UI: HR Transformation */}
          <FadeIn
            direction="up"
            delay={1.2}
            className="absolute bottom-[12%] right-[15%] z-50 pointer-events-auto"
          >
            <Link
              href="/services"
              className="bg-white rounded-[24px] p-4 pr-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-5 w-[340px] border border-blue-50/80 hover:shadow-[0_12px_40px_rgba(0,102,255,0.18)] hover:border-blue-200 transition-all duration-300 group cursor-pointer pointer-events-auto relative z-50"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0066FF] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <div className="relative w-7 h-7 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-[3px] border-white" />
                  <div className="absolute w-3 h-3 rounded-full border-[3px] border-white" />
                </div>
              </div>
              <div className="flex-1 pr-2">
                <p className="text-[11px] font-bold text-[#111827] uppercase tracking-[0.1em] mb-1">HR TRANSFORMATION</p>
                <p className="text-[#0066FF] font-bold text-[17px] leading-none group-hover:text-[#0052CC] transition-colors">Starts Here</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#E5F0FF] flex items-center justify-center group-hover:bg-[#0066FF] transition-all duration-300 shrink-0">
                <ArrowRight className="w-5 h-5 text-[#0066FF] group-hover:text-white transition-colors" />
              </div>
            </Link>
          </FadeIn>
        </div>
      </div>

      {/* Grid Container for Text (Desktop & Mobile) - z-30 sits IN FRONT OF background blend gradient (z-0) */}
      <div className="mx-auto w-full max-w-[1800px] px-6 lg:px-10 xl:px-16 relative z-30 pointer-events-none grid grid-cols-1 lg:grid-cols-12 gap-1 lg:gap-8 lg:pt-0 lg:pb-8">
        
        {/* Left Column (Text & CTAs) */}
        <div className="lg:col-span-6 flex flex-col gap-5 z-20 pt-0 lg:pt-4 pb-2 lg:pb-0 pointer-events-auto">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <p className="text-xs lg:text-[13px] font-bold tracking-[0.15em] text-[#0066FF] uppercase">
                {overline}
              </p>
              <div className="h-px w-12 bg-[#0066FF]/20" />
            </div>
            <h1 className="text-5xl lg:text-[62px] leading-[1.05] lg:leading-[1.05] font-extrabold text-[#111827] tracking-tight">
              {headlineParts[0]}
              <span className="text-[#0066FF] relative inline-block whitespace-nowrap">
                Smarter.
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,15 Q50,0 100,8" fill="none" stroke="#22c55e" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
          </div>

          <div className="text-base lg:text-[17px] text-[#4B5563] max-w-xl leading-relaxed mt-1">
            <p className="mb-3 lg:mb-4">From hiring your first employee to managing a global workforce, The Co HR provides everything your business needs under one roof.</p>
            <p>Powerful HR ERP Software, Remote HR Services, and Expert Training — designed to simplify people management and <strong className="text-[#111827] font-bold">accelerate business growth.</strong></p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-2 lg:mt-3">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-[#0066FF] hover:bg-blue-700 text-white rounded-lg px-8 py-6 font-medium text-[16px] flex items-center justify-center gap-2"
              )}
            >
              {ctas.primary} <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "border-[1.5px] border-[#0066FF] bg-transparent text-[#0066FF] hover:bg-blue-50 rounded-lg px-8 py-6 font-medium text-[16px] flex items-center justify-center"
              )}
            >
              {ctas.secondary}
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-x-8 gap-y-4 pt-2 lg:pt-5">
            {trustBadges.map((badge, idx) => (
              <React.Fragment key={idx}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E5F0FF] flex items-center justify-center shrink-0">
                    {badgeIcons[badge.icon]}
                  </div>
                  <span className="text-[13px] font-semibold text-[#111827] leading-tight max-w-[100px]">
                    {badge.label}
                  </span>
                </div>
                {/* Vertical separator */}
                {idx < trustBadges.length - 1 && (
                  <div className="hidden sm:block w-[1.5px] h-10 bg-gray-200" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right Column Mobile (Image & Reorganized UI) */}
        <div className="lg:col-span-6 relative w-full block lg:hidden flex-col items-center mt-2">
          
          {/* Mobile Calligraphy Text placed elegantly above the image */}
          <div className="w-full flex justify-end mb-[-12px] pr-3 relative z-20 pointer-events-none -rotate-6">
            <div className="relative flex flex-col items-end">
              <p 
                className="text-[36px] text-[#0055FF] leading-[1.0] whitespace-nowrap font-bold"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Better People<br />
                <span className="relative inline-block mt-1">
                  Brighter Possibilities
                  <svg className="absolute -bottom-3 left-0 w-[110%] h-[16px]" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,15 Q50,15 100,5" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </p>
            </div>
          </div>

          {/* Image Block */}
          <div className="relative w-full h-[400px] rounded-[32px] overflow-hidden bg-gray-50 shadow-inner">
            <ProtectedImage
              src="/images/hero-new.jpg"
              alt="The Co HR Platform Overview"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
              priority
            />
            {/* Soft gradient at top to blend slightly with the white background */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/80 to-transparent z-10" />
            
            {/* Mobile Floating UI: Total Employees tucked in bottom left */}
            <div className="absolute bottom-4 left-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/50 w-[160px]">
              <p className="text-[11px] font-bold text-[#111827] mb-1">Total Employees</p>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[20px] font-bold text-[#111827] leading-none mb-1">1,248</p>
                  <p className="text-[9px] font-bold text-[#22c55e]">↑ 12% this month</p>
                </div>
                <div className="flex items-end gap-1 pb-1">
                  <div className="w-1.5 h-3 bg-[#BFDBFE] rounded-t-sm" />
                  <div className="w-1.5 h-5 bg-[#60A5FA] rounded-t-sm" />
                  <div className="w-1.5 h-7 bg-[#0066FF] rounded-t-sm" />
                </div>
              </div>
            </div>

            {/* Mobile Floating UI: Vertical Checklist (Mini Icons Only) */}
            <div className="absolute top-[20%] right-2 z-20 bg-white/95 backdrop-blur-md rounded-[20px] p-2 shadow-xl border border-white/50 flex flex-col gap-2 scale-90 origin-right">
              {[
                { icon: <UserPlus className="w-3.5 h-3.5 text-[#0055FF]" /> },
                { icon: <Users className="w-3.5 h-3.5 text-[#0055FF]" /> },
                { icon: <Settings className="w-3.5 h-3.5 text-[#0055FF]" /> },
                { icon: <TrendingUp className="w-3.5 h-3.5 text-[#0055FF]" /> },
                { icon: <Trophy className="w-3.5 h-3.5 text-[#0055FF]" /> }
              ].map((item, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-[#E5F0FF] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Floating UI: HR Transformation Card cleanly overlapping below */}
          <Link
            href="/services"
            className="w-[92%] -mt-6 mx-auto relative z-30 bg-white rounded-[24px] p-3.5 shadow-[0_8px_30px_rgb(0,0,0,0.15)] border border-gray-100 hover:border-blue-200 flex items-center justify-between group cursor-pointer transition-all duration-200 active:scale-[0.98]"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0055FF] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-white" />
                  <div className="absolute w-2.5 h-2.5 rounded-full border-2 border-white" />
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold text-[#111827] uppercase tracking-wider mb-0.5">HR TRANSFORMATION</p>
                <p className="text-[#0055FF] font-bold text-[15px] leading-none group-hover:text-[#0044CC]">Starts Here</p>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#E5F0FF] group-hover:bg-[#0055FF] flex items-center justify-center shrink-0 transition-colors">
              <ArrowRight className="w-4 h-4 text-[#0055FF] group-hover:text-white transition-colors" />
            </div>
          </Link>
          
        </div>
      </div>
    </section>
  );
}
