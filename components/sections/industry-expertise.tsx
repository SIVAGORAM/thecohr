import { FadeIn } from "@/components/ui/fade-in";
import { homeContent } from "@/lib/content";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { HeartPulse, Factory, Laptop, HardHat, GraduationCap, ShoppingCart, Truck, Building, Landmark, ArrowRight } from "lucide-react";

const iconsMap: Record<string, React.ReactNode> = {
  heartPulse: <HeartPulse className="w-7 h-7 text-[#1E90FF]" strokeWidth={1.5} />,
  factory: <Factory className="w-7 h-7 text-[#1E90FF]" strokeWidth={1.5} />,
  laptop: <Laptop className="w-7 h-7 text-[#1E90FF]" strokeWidth={1.5} />,
  hardHat: <HardHat className="w-7 h-7 text-[#1E90FF]" strokeWidth={1.5} />,
  graduationCap: <GraduationCap className="w-7 h-7 text-[#1E90FF]" strokeWidth={1.5} />,
  shoppingCart: <ShoppingCart className="w-7 h-7 text-[#1E90FF]" strokeWidth={1.5} />,
  truck: <Truck className="w-7 h-7 text-[#1E90FF]" strokeWidth={1.5} />,
  building: <Building className="w-7 h-7 text-[#1E90FF]" strokeWidth={1.5} />,
  landmark: <Landmark className="w-7 h-7 text-[#1E90FF]" strokeWidth={1.5} />
};

function IndustryCard({ industry }: { industry: { name: string; icon: string } }) {
  return (
    <div className="bg-white border border-blue-50 shadow-sm rounded-2xl p-4 py-5 flex flex-col items-center text-center hover:border-[#1E90FF]/30 hover:shadow-md transition-all group cursor-default shrink-0 w-[120px] sm:w-[130px]">
      <div className="w-14 h-14 rounded-2xl bg-[#F0F7FF] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
        {iconsMap[industry.icon]}
      </div>
      <span className="text-[11px] font-bold text-[#111827] leading-tight">
        {industry.name}
      </span>
    </div>
  );
}

export function IndustryExpertise() {
  const { eyebrow, heading, subheading, list, cta } = homeContent.industries;

  // Duplicate the list for seamless infinite loop
  const duplicatedList = [...list, ...list];

  return (
    <section className="bg-white py-6 lg:py-8 relative overflow-hidden">
      
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#F0F7FF] blur-3xl opacity-50" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#F0F7FF] blur-3xl opacity-50" />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10">
        
        {/* Header with calligraphy */}
        <div className="text-center mb-6 relative">
          <FadeIn direction="up" className="flex items-center justify-center gap-4 mb-3">
            <div className="h-[1px] w-12 sm:w-16 bg-[#BFDBFE]" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#1E90FF] uppercase">
              {eyebrow}
            </span>
            <div className="h-[1px] w-12 sm:w-16 bg-[#BFDBFE]" />
          </FadeIn>
          
          <FadeIn direction="up" delay={0.1} className="text-[32px] sm:text-[38px] lg:text-[44px] font-heading font-bold text-[#111827] tracking-tight mb-2">
            <h2>
              {heading.split("Industry")[0]}<span className="text-[#1E90FF]">Industry</span>
            </h2>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2} className="text-[16px] text-gray-500">
            <p>{subheading}</p>
          </FadeIn>

          {/* Floating Calligraphy */}
          <div className="absolute top-2 right-4 lg:right-16 text-[#1E90FF] text-[22px] lg:text-[28px] leading-tight hidden sm:block font-[family-name:var(--font-playball)] -rotate-6">
            Different Industries<br />
            Stronger Workforces
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Marquee using pure CSS */}
      <div className="relative mb-8">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <div className="overflow-hidden">
          <div className="flex gap-4 w-max animate-marquee">
            {duplicatedList.map((industry, idx) => (
              <IndustryCard key={`${industry.name}-${idx}`} industry={industry} />
            ))}
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10">
        <FadeIn direction="up" delay={0.3} className="flex justify-center">
          <Link 
            href="/services"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-full px-8 py-5 border-2 border-[#1E90FF] text-[#1E90FF] font-bold hover:bg-[#1E90FF] hover:text-white transition-colors flex items-center gap-2 text-[15px]"
            )}
          >
            {cta} <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>

    </section>
  );
}
