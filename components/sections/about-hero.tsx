import { FadeIn } from "@/components/ui/fade-in";
import { ProtectedImage } from "@/components/ui/protected-image";
import { Users, Settings, TrendingUp } from "lucide-react";

export function AboutHero() {
  return (
    <section className="bg-gradient-to-b from-[#F5F9FF] via-[#F8FBFF] to-white pt-2 pb-2 lg:pt-4 lg:pb-4 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Text & Badges */}
          <FadeIn direction="right" duration={0.6} className="lg:col-span-6 space-y-4">
            {/* Eyebrow */}
            <div className="text-xs font-bold uppercase tracking-widest text-[#0066FF]">
              ABOUT US
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#051332] tracking-tight leading-tight">
              Empowering Businesses Through <span className="text-[#0066FF]">People</span> and <span className="text-[#0066FF]">Technology</span>
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              The Co HR was founded with one clear vision — to simplify Human Resource Management for businesses of every size.
            </p>

            {/* 3 Icon Pill Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Badge 1 */}
              <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-full border border-blue-100 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-blue-100/80 flex items-center justify-center text-[#0066FF]">
                  <Users className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700">People Centric</span>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-full border border-blue-100 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-blue-100/80 flex items-center justify-center text-[#0066FF]">
                  <Settings className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700">Technology Driven</span>
              </div>

              {/* Badge 3 */}
              <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-full border border-blue-100 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-blue-100/80 flex items-center justify-center text-[#0066FF]">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700">A Stronger Tomorrow</span>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Team Image */}
          <FadeIn direction="left" duration={0.6} delay={0.1} className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-blue-100/80 bg-white">
              <ProtectedImage
                src="/images/about-team.jpg"
                alt="The Co HR Team"
                width={700}
                height={500}
                className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
