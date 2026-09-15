"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { ProtectedImage } from "@/components/ui/protected-image";
import { Building2, MapPin, Plus, Minus, ExternalLink } from "lucide-react";

export function ContactLocationOffice() {
  const [zoomLevel, setZoomLevel] = useState(15);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 1, 20));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 1, 10));
  };

  const mapQuery = encodeURIComponent("Pranava Business Park, Kondapur, Hyderabad, Telangana");
  const googleMapsUrl = `https://maps.google.com/?q=${mapQuery}`;
  const iframeSrc = `https://maps.google.com/maps?q=${mapQuery}&t=&z=${zoomLevel}&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="bg-white py-3 sm:py-4 lg:py-6">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ==================== LEFT CARD: Interactive Google Map ==================== */}
          <FadeIn
            direction="up"
            duration={0.5}
            className="lg:col-span-7 bg-[#F4F8FB] rounded-3xl border border-slate-200/80 shadow-sm relative overflow-hidden min-h-[340px] flex flex-col justify-between p-4 sm:p-6"
          >
            {/* Embedded Live Google Map */}
            <div className="absolute inset-0 z-0">
              <iframe
                title="Office Location Map"
                src={iframeSrc}
                className="w-full h-full border-0 rounded-3xl"
                loading="lazy"
                allowFullScreen
              />
            </div>

            {/* Bottom-Left City / Directions Info Badge */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20 mt-auto self-start bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-200/80 hover:border-[#0066FF] transition-all group max-w-[320px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5 fill-white text-red-500" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-extrabold text-[#051332] flex items-center gap-1 group-hover:text-[#0066FF] transition-colors">
                    <span>The Co HR Private Limited</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-slate-600 line-clamp-2">
                    Pranava Business Park, 7th Floor, Kondapur, Hyderabad, Telangana
                  </div>
                </div>
              </div>
            </a>

            {/* Zoom Controls on Top-Right */}
            <div className="absolute top-4 right-4 z-20 bg-white rounded-xl shadow-lg border border-slate-200 flex flex-col divide-y divide-slate-100 overflow-hidden">
              <button
                onClick={handleZoomIn}
                className="p-2.5 text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-colors"
                aria-label="Zoom in"
                title="Zoom in"
              >
                <Plus className="w-4 h-4 stroke-[2.5]" />
              </button>
              <button
                onClick={handleZoomOut}
                className="p-2.5 text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-colors"
                aria-label="Zoom out"
                title="Zoom out"
              >
                <Minus className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </FadeIn>

          {/* ==================== RIGHT CARD: Our Office Photo Card ==================== */}
          <FadeIn
            direction="up"
            duration={0.5}
            delay={0.1}
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
                  Pranava Business Park, 7th Floor, Kondapur, Hyderabad, Telangana
                </p>
              </div>
            </div>

            {/* Office Image */}
            <div className="relative rounded-2xl overflow-hidden border border-blue-100 shadow-md bg-white">
              <ProtectedImage
                src="/images/contact-office.jpg"
                alt="The Co HR Office - Hyderabad"
                width={600}
                height={380}
                priority
                className="w-full h-52 sm:h-60 object-cover transform hover:scale-102 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
