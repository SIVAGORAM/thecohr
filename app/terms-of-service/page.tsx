import { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

import { constructMetadata, ROUTES_SEO } from "@/lib/seo";

export const metadata: Metadata = constructMetadata(ROUTES_SEO.termsOfService);

export default function TermsOfServicePage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#1E90FF] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Card Container */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] space-y-8">
          
          {/* Header */}
          <div className="border-b border-slate-100 pb-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1E90FF] text-xs font-bold uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" />
              <span>Legal Terms</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#051332] tracking-tight">
              Terms of Service
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Last Updated: September 13, 2026 | Effective Immediately
            </p>
          </div>

          {/* Body Content */}
          <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#051332]">1. Agreement to Terms</h2>
              <p>
                These Terms of Service constitute a legally binding agreement made between you (&quot;User&quot; or &quot;Client&quot;) and The Co HR Private Limited (&quot;The Co HR,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), concerning your access to and use of <a href="https://www.thecohr.com" className="text-[#1E90FF] underline font-medium">www.thecohr.com</a> as well as any associated software applications, HR ERP tools, or consultation services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#051332]">2. Intellectual Property Rights</h2>
              <p>
                Unless otherwise indicated, the website, HR ERP software modules, digital content, source code, functionality, designs, audio, video, text, graphics, and trademarks are owned or controlled by The Co HR and are protected by copyright, trademark, and intellectual property laws.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#051332]">3. Service Offerings & Platform Use</h2>
              <p>The Co HR provides HR software solutions, outsourced remote HR management, and ERP training programmes. Users agree to:</p>
              <ul className="list-disc pl-6 space-y-1 text-slate-600">
                <li>Provide accurate, current, and complete business information during inquiries and account registration.</li>
                <li>Maintain the confidentiality of login credentials for any enterprise accounts.</li>
                <li>Refrain from unauthorized scraping, reverse-engineering, or security penetration testing of our web applications.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#051332]">4. Limitation of Liability</h2>
              <p>
                In no event will The Co HR, its directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages arising from your use of the website or platform services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#051332]">5. Governing Law</h2>
              <p>
                These Terms shall be governed by and defined following the laws of India. The Co HR and yourself irrevocably consent that the courts of Hyderabad, Telangana, India shall have exclusive jurisdiction to resolve any dispute.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#051332]">6. Contact Information</h2>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 space-y-1">
                <p><strong>The Co HR Private Limited</strong></p>
                <p>Email: <a href="mailto:info@thecohr.com" className="text-[#1E90FF] underline">info@thecohr.com</a></p>
                <p>Address: Pranava Business Park, 7th Floor, Kondapur, Hyderabad, Telangana</p>
              </div>
            </section>

            {/* Business Review Notice */}
            <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-2xl text-xs font-semibold text-amber-800">
              📌 <strong>Notice for Legal Review:</strong> These Terms of Service outline standard corporate usage terms. Enterprise Master Service Agreements (MSA) and SLA terms should be executed separately with your legal team for paid corporate subscriptions.
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
