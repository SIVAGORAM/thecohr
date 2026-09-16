import { FadeIn } from "@/components/ui/fade-in";
import { homeContent } from "@/lib/content";
import Link from "next/link";
import { ArrowRight, Check, Monitor, GraduationCap, Users } from "lucide-react";
import React from "react";

const iconsMap: Record<string, React.ReactNode> = {
  monitor: <Monitor className="w-8 h-8 text-white" strokeWidth={1.5} />,
  userCircle: <Users className="w-8 h-8 text-white" strokeWidth={1.5} />,
  graduationCap: <GraduationCap className="w-8 h-8 text-white" strokeWidth={1.5} />
};

const serviceLinks = ["/services#hr-erp-software", "/services#remote-hr-services", "/services#erp-training"];

const cardThemes = [
  { 
    bgAccent: "#F0F7FF", // Light Blue hex
    dots: "bg-blue-200"
  },
  { 
    bgAccent: "#F0FDF4", // Light Green hex
    dots: "bg-green-200"
  },
  { 
    bgAccent: "#F5F3FF", // Light Purple/Indigo hex
    dots: "bg-indigo-200"
  }
];

export function CoreServices() {
  const { eyebrow, heading, subheading, services } = homeContent.coreServices;

  // Split heading to color the second part blue as per mockup
  const headingParts = heading.split("Three Powerful HR Solutions.");

  return (
    <section className="bg-[#F8FAFC] py-6 lg:py-8 relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <FadeIn direction="up" className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 sm:w-16 bg-[#BFDBFE]" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#1E90FF] uppercase">
              {eyebrow}
            </span>
            <div className="h-[1px] w-12 sm:w-16 bg-[#BFDBFE]" />
          </FadeIn>
          
          <FadeIn direction="up" delay={0.1} className="text-[32px] sm:text-4xl md:text-[44px] font-heading font-bold text-[#111827] tracking-tight mb-6 leading-tight">
            <h2>
              {headingParts[0]} <span className="text-[#1E90FF]">Three Powerful HR Solutions.</span>
            </h2>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2} className="text-base sm:text-[17px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <p>{subheading}</p>
          </FadeIn>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => {
            const theme = cardThemes[idx];
            
            return (
              <FadeIn
                key={service.title}
                direction="up"
                delay={idx * 0.15}
                className="bg-white rounded-[24px] p-8 lg:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-blue-50/80 flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Background Accent Shapes */}
                <div className="absolute top-0 right-0 left-0 h-[220px] overflow-hidden pointer-events-none z-0">
                  {/* Soft Swoop shape covering top completely and swooping down on the right */}
                  <svg className="absolute top-0 right-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L100,0 L100,100 C70,100 40,40 0,50 Z" fill={theme.bgAccent} />
                  </svg>
                  
                  {/* Dot Pattern - Positioned Top Right */}
                  <div className="absolute top-8 right-8 grid grid-cols-5 gap-2.5 opacity-80">
                    {Array.from({length: 15}).map((_, i) => (
                      <div key={i} className={`w-1 h-1 rounded-full ${theme.dots}`} />
                    ))}
                  </div>
                </div>

                {/* Content Container (relative to stay above absolute backgrounds) */}
                <div className="relative z-10 flex flex-col h-full">
                  
                  {/* Icon */}
                  <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[#1E90FF] to-[#187BCD] flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 shrink-0">
                    {iconsMap[service.icon]}
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-5">
                    <h3 className="font-heading font-bold text-[26px] text-navy-900 mb-2 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-[#1E90FF] font-medium text-[17px] tracking-wide">
                      {service.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-[15px] text-gray-600 mb-8 min-h-[60px] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-8 flex-grow">
                    <ul className="flex flex-col gap-3.5 mb-5">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#1E90FF] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-white stroke-[4]" />
                          </div>
                          <span className="text-[15px] text-gray-700 leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      href={serviceLinks[idx]} 
                      className="inline-block text-[14px] font-bold text-[#1E90FF] hover:text-[#187BCD] transition-colors"
                    >
                      {service.moreLink}
                    </Link>
                  </div>

                  {/* Bottom CTA Link */}
                  <div className="mt-auto pt-2">
                    <Link 
                      href={serviceLinks[idx]}
                      className="inline-flex items-center gap-2 text-[17px] font-bold text-[#1E90FF] hover:text-[#187BCD] transition-colors group/btn"
                    >
                      {service.cta} 
                      <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
