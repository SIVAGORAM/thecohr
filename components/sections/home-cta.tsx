import { FadeIn } from "@/components/ui/fade-in";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ProtectedImage } from "@/components/ui/protected-image";
import { homeContent } from "@/lib/content";
import { cn } from "@/lib/utils";
import { ArrowRight, Users, BarChart2, Lightbulb } from "lucide-react";
import React from "react";

const iconsMap: Record<string, React.ReactNode> = {
  users: <Users className="w-4 h-4 text-[#0055FF]" />,
  trendingUp: <BarChart2 className="w-4 h-4 text-[#0055FF]" />,
  lightbulb: <Lightbulb className="w-4 h-4 text-[#0055FF]" />
};

export function HomeCta() {
  const { eyebrow, body, ctas, floatingList } = homeContent.finalCTA;

  return (
    <section className="bg-white pt-2 pb-8 lg:pt-4 lg:pb-12 px-4 sm:px-6 lg:px-12 relative">
      <div className="mx-auto max-w-[1440px] relative z-10 rounded-[28px] lg:rounded-[36px] overflow-hidden bg-gradient-to-r from-[#F0F7FF] via-[#F4F9FF] to-[#E6F1FF] border border-blue-100/60 shadow-sm">
        
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-8 left-[38%] grid grid-cols-5 gap-3 opacity-20 hidden lg:grid">
            {Array.from({length: 20}).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#0055FF]" />
            ))}
          </div>
          {/* Top-left subtle swoosh */}
          <div className="absolute top-0 left-0 w-full h-12 bg-white/40 blur-md rounded-full transform -translate-y-1/2 scale-150" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch relative z-10">
          
          {/* Left Content */}
          <div className="lg:col-span-5 flex flex-col justify-center py-10 lg:py-14 pl-6 lg:pl-12 pr-6 z-20">
            {/* Eyebrow */}
            <FadeIn direction="up" className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-[#0055FF]" />
              <span className="text-[12px] font-bold tracking-[0.16em] text-[#0055FF] uppercase">
                {eyebrow}
              </span>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.1} className="text-[30px] sm:text-[36px] lg:text-[40px] font-heading font-extrabold text-[#111827] tracking-tight leading-[1.15] mb-4">
              <h2>
                Let&apos;s Build a Better <span className="text-[#0055FF]">Workplace Together</span>
              </h2>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2} className="text-[15px] text-gray-600 leading-relaxed mb-6 max-w-md">
              <p>{body}</p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn direction="up" delay={0.3} className="flex flex-wrap items-center gap-4">
              <Link 
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-gradient-to-r from-[#0055FF] to-[#0077FF] hover:from-blue-700 hover:to-blue-600 text-white rounded-xl px-7 py-3.5 font-bold text-[14px] flex items-center gap-2 shadow-lg shadow-blue-500/20"
                )}
              >
                {ctas.primary} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "border-2 border-[#0055FF] text-[#0055FF] bg-white hover:bg-blue-50/50 rounded-xl px-7 py-3.5 font-bold text-[14px] flex items-center transition-colors"
                )}
              >
                {ctas.secondary}
              </Link>
            </FadeIn>
          </div>

          {/* Right Visual Area: Photo + Floating Card + Calligraphy */}
          <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[380px] flex items-center">
            
            {/* The Full Photo */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <ProtectedImage
                src="/images/cta-businessman.jpg"
                alt="Professional working at desk"
                fill
                loading="lazy"
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              
              {/* Soft left-edge blend into banner background */}
              <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#F0F7FF] via-[#F0F7FF]/70 to-transparent z-10 hidden lg:block" />

              {/* Far-right soft light-blue swoosh matching reference */}
              <div className="absolute top-0 right-0 w-[150px] h-full bg-gradient-to-l from-[#BCE0FE]/70 via-[#DCF0FE]/30 to-transparent z-20 pointer-events-none" />
            </div>

            {/* Floating List Card: Overlapping the left of the photo */}
            <FadeIn direction="up" delay={0.4} className="relative z-30 ml-4 lg:-ml-12 my-6 lg:my-0 bg-white rounded-[22px] p-5 shadow-[0_14px_40px_rgba(0,0,0,0.08)] border border-blue-50/90 flex flex-col gap-4 w-[245px] shrink-0">
              {floatingList?.map((item) => (
                <div key={item.label} className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#EBF4FF] flex items-center justify-center shrink-0">
                    {iconsMap[item.icon]}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-[14px] text-[#111827] leading-tight">
                      {item.label}
                    </span>
                    <span className="text-[11.5px] text-gray-500">
                      {(item as Record<string, string>).description || ""}
                    </span>
                  </div>
                </div>
              ))}
            </FadeIn>

            {/* Floating Calligraphy */}
            <div className="absolute top-5 right-4 sm:right-6 lg:right-8 z-30 text-[#0055FF] pointer-events-none select-none hidden sm:block font-[family-name:var(--font-playball)] -rotate-6">
              <span className="text-[20px] sm:text-[23px] lg:text-[26px] leading-[1.15] whitespace-nowrap block">
                Better People<br />
                Brighter Possibilities
              </span>
              <svg className="w-28 mt-0.5 text-[#22C55E]" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M2 9 Q50 1 98 5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
