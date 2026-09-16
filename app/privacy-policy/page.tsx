import { Metadata } from "next";
import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

import { constructMetadata, ROUTES_SEO } from "@/lib/seo";

export const metadata: Metadata = constructMetadata(ROUTES_SEO.privacyPolicy);

export default function PrivacyPolicyPage() {
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
              <Shield className="w-3.5 h-3.5" />
              <span>Legal Document</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#051332] tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Last Updated: September 13, 2026 | Effective Immediately
            </p>
          </div>

          {/* Body Content */}
          <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#051332]">1. Introduction</h2>
              <p>
                The Co HR (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to respecting your privacy and protecting the personal data of our website visitors, corporate clients, and software users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit <a href="https://www.thecohr.com" className="text-[#1E90FF] underline font-medium">www.thecohr.com</a> or use our HR ERP platform and services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#051332]">2. Information We Collect</h2>
              <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
              <ul className="list-disc pl-6 space-y-1 text-slate-600">
                <li><strong>Personal Data:</strong> Personally identifiable information, such as your full name, business email address, phone number, and country code when voluntarily provided via our Contact Form or Demo requests.</li>
                <li><strong>Technical & Analytics Data:</strong> IP addresses, browser specifications, device identifiers, and page interaction data collected via standard website analytics tools.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#051332]">3. How We Use Your Information</h2>
              <p>Having accurate information about you allows us to provide you with a smooth, efficient, and customized experience. Specifically, we use collected information to:</p>
              <ul className="list-disc pl-6 space-y-1 text-slate-600">
                <li>Respond to business enquiries and provide customer support.</li>
                <li>Schedule product demonstrations and consultative discussions.</li>
                <li>Deliver platform operational notifications and compliance updates.</li>
                <li>Improve website layout, performance, and overall user experience.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#051332]">4. Data Security & Storage</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. All contact form transmissions are processed through encrypted server-side channels. However, please be aware that no electronic transmission over the Internet can be guaranteed to be 100% secure.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#051332]">5. Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 space-y-1">
                <p><strong>The Co HR Private Limited</strong></p>
                <p>Email: <a href="mailto:info@thecohr.com" className="text-[#1E90FF] underline">info@thecohr.com</a></p>
                <p>Address: Pranava Business Park, 7th Floor, Kondapur, Hyderabad, Telangana</p>
              </div>
            </section>

            {/* Business Review Notice */}
            <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-2xl text-xs font-semibold text-amber-800">
              📌 <strong>Notice for Legal Review:</strong> This Privacy Policy outlines general data handling practices for The Co HR website. Formal corporate data protection clauses (GDPR/DPDP compliance) should be reviewed by your legal counsel prior to enterprise deployment.
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
