import { FadeIn } from "@/components/ui/fade-in";
import { Lightbulb, ShieldCheck, Users, Star, Handshake, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Building modern HR technology.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "Operating with transparency and trust.",
  },
  {
    icon: Users,
    title: "Customer Success",
    description: "Your growth is our priority.",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "Delivering exceptional quality.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description: "Working as an extension of your team.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Learning",
    description: "Helping organisations grow through knowledge.",
  },
];

export function CoreValues() {
  return (
    <section className="bg-white py-4 lg:py-6">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-4 space-y-1">
          <div className="text-xs font-bold uppercase tracking-widest text-[#1E90FF]">
            OUR CORE VALUES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#051332] tracking-tight">
            The Values That Drive Us
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Our values shape our culture, guide our decisions, and define how we work with our clients.
          </p>
        </div>

        {/* 6 Cards Single Line Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn
                key={index}
                direction="up"
                duration={0.4}
                delay={index * 0.08}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-blue-50/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-blue-100 transition-all flex flex-col items-center text-center group h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50/80 group-hover:bg-[#1E90FF] group-hover:text-white transition-colors flex items-center justify-center text-[#1E90FF] mb-3 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#051332] mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[#64748B] text-xs sm:text-sm leading-normal">
                  {item.description}
                </p>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
