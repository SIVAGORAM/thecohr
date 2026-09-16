import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Home, Phone, Mail } from "lucide-react";

import { constructMetadata, ROUTES_SEO } from "@/lib/seo";

export const metadata: Metadata = constructMetadata(ROUTES_SEO.thankYou);

export default function ThankYouPage() {
  return (
    <div className="bg-slate-50 min-h-[85vh] flex items-center justify-center py-12 lg:py-20 px-6">
      <div className="max-w-xl w-full text-center space-y-8 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
        
        {/* Animated Check Icon */}
        <div className="w-20 h-20 bg-[#1E90FF] text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-blue-500/25">
          <CheckCircle2 className="w-12 h-12" />
        </div>

        {/* Heading & Subtitle */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#051332] tracking-tight">
            Thank You for Reaching Out!
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-md mx-auto">
            Your message has been successfully received by <strong>The Co HR</strong>. One of our senior HR specialists will review your enquiry and get back to you within 24 business hours.
          </p>
        </div>

        {/* Info Card */}
        <div className="bg-[#F0F6FF] rounded-2xl p-6 border border-blue-100 text-left space-y-3">
          <h2 className="text-xs font-bold text-[#051332] uppercase tracking-wider">
            Need Immediate Assistance?
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm font-bold">
            <a
              href="tel:+919019724365"
              className="flex items-center gap-2 text-[#1E90FF] hover:underline"
            >
              <Phone className="w-4 h-4" />
              <span>+91 90197 24365</span>
            </a>
            <a
              href="mailto:info@thecohr.com"
              className="flex items-center gap-2 text-[#1E90FF] hover:underline"
            >
              <Mail className="w-4 h-4" />
              <span>info@thecohr.com</span>
            </a>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1E90FF] hover:bg-[#187BCD] text-white font-bold text-sm py-3.5 px-6 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm py-3.5 px-6 rounded-xl transition-all"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
