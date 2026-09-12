"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Monitor,
  Users,
  GraduationCap,
  Settings,
  Headset,
  Mail,
  Phone,
  MapPin,
  Send,
  Lock,
  Leaf,
  ArrowRight,
  CheckCircle2,
  Loader2
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [newsletterError, setNewsletterError] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || newsletterSubmitting) return;

    setNewsletterSubmitting(true);
    setNewsletterError("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Subscription failed. Please try again.");
      }

      setNewsletterSubscribed(true);
      setNewsletterEmail("");
    } catch (err: any) {
      setNewsletterError(err.message || "Failed to subscribe. Please try again.");
    } finally {
      setNewsletterSubmitting(false);
    }
  };

  return (
    <footer className="relative bg-[#020612] text-slate-300 pt-12 lg:pt-16 pb-8 overflow-hidden font-sans border-t border-slate-800/60">
      {/* Background Ambient Glows & Vector Waves */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-900/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-blue-700/10 rounded-full blur-[120px]" />
        
        {/* Soft wavy lines vector overlay */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-32 sm:h-48 opacity-25 text-blue-500/20"
          viewBox="0 0 1440 200"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,90.7C1120,85,1280,107,1360,117.3L1440,128L1440,200L1360,200C1280,200,1120,200,960,200C320,200,160,200,80,200L0,200Z"
            fill="url(#footer-wave-grad)"
          />
          <defs>
            <linearGradient id="footer-wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0055FF" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#00A3FF" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#003399" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 pb-10 sm:pb-12">
          
          {/* Column 1: Brand & Overview (Col span 3) */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-5 sm:space-y-6">
            {/* Logo */}
            <Link href="/" className="inline-block bg-white px-4 py-2.5 rounded-2xl shadow-md border border-slate-100 hover:scale-[1.01] transition-transform">
              <Image
                src="/logo.png"
                alt="The Co HR Logo"
                width={320}
                height={95}
                className="h-12 sm:h-14 lg:h-[56px] w-auto object-contain"
                priority
                unoptimized
              />
            </Link>

            {/* Headline */}
            <div className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-white tracking-tight leading-snug">
              Empowering People.<br />
              Building <span className="text-[#00A3FF]">Tomorrow.</span>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Your complete HR transformation partner — combining powerful HR ERP software, outsourced HR expertise, and professional training under one roof.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a href="https://www.linkedin.com/in/the-co-hr-1a4842428/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-slate-700/80 bg-slate-900/60 flex items-center justify-center text-slate-300 hover:border-blue-500 hover:bg-[#0055FF] hover:text-white transition-all" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a href="https://x.com/thecohr" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-slate-700/80 bg-slate-900/60 flex items-center justify-center text-slate-300 hover:border-blue-500 hover:bg-[#0055FF] hover:text-white transition-all" aria-label="X Twitter">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/people/TheCo-HR/pfbid0Y9dBJZkUCq9jrpMwukbksVvaF3b7EPD6GvEdWDWLHTAEtzFMZmmxKznuax2S5Gsql/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-slate-700/80 bg-slate-900/60 flex items-center justify-center text-slate-300 hover:border-blue-500 hover:bg-[#0055FF] hover:text-white transition-all" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/thecohr_com/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-slate-700/80 bg-slate-900/60 flex items-center justify-center text-slate-300 hover:border-blue-500 hover:bg-[#0055FF] hover:text-white transition-all" aria-label="Instagram">
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>

            {/* Calligraphy Script Accent */}
            <div className="pt-2 sm:pt-3">
              <div className="font-[family-name:var(--font-playball)] text-[#00A3FF] text-xl sm:text-2xl lg:text-3xl -rotate-2 leading-tight tracking-wide">
                Better People
              </div>
              <div className="relative inline-block">
                <span className="font-[family-name:var(--font-playball)] text-[#00A3FF] text-xl sm:text-2xl lg:text-3xl -rotate-2 leading-tight tracking-wide">
                  Brighter Possibilities
                </span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#00A3FF]/60 overflow-visible" viewBox="0 0 200 12" fill="none">
                  <path d="M2,8 Q100,-2 198,8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (Col span 2) */}
          <div className="sm:col-span-1 lg:col-span-2 space-y-4 sm:space-y-5">
            <h4 className="text-white font-bold text-sm sm:text-base tracking-wide relative inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3 sm:space-y-3.5 text-xs lg:text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Industries", href: "/industries" },
                { label: "Why The Co HR", href: "/why-us" },
                { label: "Resources", href: "/resources" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="group flex items-center justify-between text-slate-400 hover:text-white transition-colors">
                    <span>{link.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#00A3FF] group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services (Col span 2) */}
          <div className="sm:col-span-1 lg:col-span-2 space-y-4 sm:space-y-5">
            <h4 className="text-white font-bold text-sm sm:text-base tracking-wide relative inline-block">
              Our Services
            </h4>
            <ul className="space-y-3.5 sm:space-y-4">
              {[
                { label: "HR ERP Software", icon: <Monitor className="w-4 h-4 text-[#00A3FF]" />, href: "/services#hr-erp-software" },
                { label: "Remote HR Services", icon: <Users className="w-4 h-4 text-[#00A3FF]" />, href: "/services#remote-hr-services" },
                { label: "ERP Training", icon: <GraduationCap className="w-4 h-4 text-[#00A3FF]" />, href: "/services#erp-training" },
                { label: "Implementation Support", icon: <Settings className="w-4 h-4 text-[#00A3FF]" />, href: "/services#implementation-support" },
                { label: "Ongoing Support", icon: <Headset className="w-4 h-4 text-[#00A3FF]" />, href: "/services#ongoing-support" },
              ].map((service) => (
                <li key={service.label}>
                  <Link href={service.href} className="group flex items-center gap-3 text-xs lg:text-sm text-slate-400 hover:text-white transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-blue-950/60 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:border-blue-400 group-hover:bg-blue-900/40 transition-all">
                      {service.icon}
                    </div>
                    <span className="leading-snug">{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in Touch (Col span 2) */}
          <div className="sm:col-span-1 lg:col-span-2 space-y-4 sm:space-y-5">
            <h4 className="text-white font-bold text-sm sm:text-base tracking-wide relative inline-block">
              Get in Touch
            </h4>
            
            <div className="space-y-3.5 sm:space-y-4 text-xs lg:text-sm">
              {/* Mail */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0055FF] flex items-center justify-center shrink-0 text-white mt-0.5 shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <a href="mailto:info@thecohr.com" className="text-white font-medium hover:text-[#00A3FF] transition-colors block truncate">
                    info@thecohr.com
                  </a>
                  <span className="text-[11px] text-slate-400 block mt-0.5">We reply within 24 hours</span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0055FF] flex items-center justify-center shrink-0 text-white mt-0.5 shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <a href="tel:+919019724365" className="text-white font-medium hover:text-[#00A3FF] transition-colors block">
                    +91 90197 24365
                  </a>
                  <span className="text-[11px] text-slate-400 block mt-0.5 whitespace-nowrap">Mon - Sat, 9:00 AM - 6:00 PM</span>
                </div>
              </div>

              {/* MapPin */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0055FF] flex items-center justify-center shrink-0 text-white mt-0.5 shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-white font-medium block">Hyderabad, India</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Our Global Presence</span>
                </div>
              </div>
            </div>

            {/* Dot-Matrix World Map Graphic & Calligraphy Overlay */}
            <div className="relative pt-2 mt-4">
              <div className="w-full h-24 relative opacity-80">
                {/* SVG Dotted World Map */}
                <svg className="w-full h-full text-blue-400/50" viewBox="0 0 240 100" fill="none">
                  <g fill="currentColor">
                    <circle cx="30" cy="25" r="1.5" /><circle cx="40" cy="20" r="1.5" /><circle cx="50" cy="22" r="1.5" />
                    <circle cx="25" cy="35" r="1.5" /><circle cx="35" cy="32" r="1.5" /><circle cx="45" cy="38" r="1.5" />
                    <circle cx="55" cy="55" r="1.5" /><circle cx="60" cy="65" r="1.5" /><circle cx="65" cy="75" r="1.5" />
                    <circle cx="110" cy="25" r="1.5" /><circle cx="120" cy="22" r="1.5" /><circle cx="125" cy="30" r="1.5" />
                    <circle cx="115" cy="45" r="1.5" /><circle cx="120" cy="55" r="1.5" /><circle cx="125" cy="65" r="1.5" />
                    <circle cx="150" cy="25" r="1.5" /><circle cx="165" cy="20" r="1.5" /><circle cx="175" cy="30" r="1.5" />
                    <circle cx="155" cy="40" r="2.5" className="text-[#00A3FF] animate-pulse" />
                    <circle cx="165" cy="42" r="1.5" /><circle cx="180" cy="45" r="1.5" />
                    <circle cx="190" cy="70" r="1.5" /><circle cx="200" cy="75" r="1.5" />
                  </g>
                  <path d="M50,22 Q100,5 155,40" stroke="#00A3FF" strokeWidth="1" strokeDasharray="2,2" opacity="0.6" />
                  <path d="M120,22 Q140,10 155,40" stroke="#00A3FF" strokeWidth="1" strokeDasharray="2,2" opacity="0.6" />
                </svg>
              </div>

              {/* Overlaid Calligraphy */}
              <div className="absolute top-4 left-0 w-full text-center pointer-events-none transform -rotate-2">
                <div className="font-[family-name:var(--font-playball)] text-[#00A3FF] text-base sm:text-lg lg:text-xl leading-tight drop-shadow-md">
                  Supporting Businesses
                </div>
                <div className="font-[family-name:var(--font-playball)] text-[#00A3FF] text-base sm:text-lg lg:text-xl leading-tight drop-shadow-md">
                  Across the Globe
                </div>
              </div>
            </div>
          </div>

          {/* Column 5: Stay Updated Newsletter Card (Col span 3) */}
          <div className="sm:col-span-1 lg:col-span-3">
            <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0A173B] via-[#071333] to-[#040B21] p-5 sm:p-6 lg:p-7 border border-blue-500/25 shadow-2xl overflow-hidden h-full flex flex-col justify-between">
              
              {/* Top-Right Floating Send Icon */}
              <div className="absolute top-4 sm:top-5 right-4 sm:right-5 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0055FF] flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,85,255,0.6)]">
                <Send className="w-4 h-4 sm:w-5 sm:h-5 -rotate-12 translate-x-0.5 -translate-y-0.5" />
              </div>

              <div>
                <h4 className="text-white font-bold text-lg sm:text-xl lg:text-2xl tracking-tight mb-2 sm:mb-3">
                  Stay Updated
                </h4>
                <p className="text-xs lg:text-sm text-slate-300/80 leading-relaxed mb-5 sm:mb-6 pr-8">
                  Get the latest insights, updates and HR trends delivered to your inbox.
                </p>

                {/* Email Input */}
                {newsletterSubscribed ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4 text-center space-y-1">
                    <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Subscribed Successfully!</span>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Thank you! You will receive our latest HR insights & updates.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                    <div className="relative flex items-center bg-[#050D24] border border-blue-900/80 rounded-full p-1 sm:p-1.5 focus-within:border-blue-500/80 transition-all shadow-inner">
                      <input
                        type="email"
                        placeholder="Your email address"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        disabled={newsletterSubmitting}
                        className="w-full bg-transparent px-3 sm:px-4 text-xs text-white placeholder-slate-500 focus:outline-none min-w-0 disabled:opacity-50"
                        required
                      />
                      <button
                        type="submit"
                        disabled={newsletterSubmitting}
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0055FF] text-white flex items-center justify-center hover:bg-blue-500 shrink-0 transition-transform active:scale-95 shadow-md disabled:opacity-50 cursor-pointer"
                        aria-label="Subscribe"
                      >
                        {newsletterSubmitting ? (
                          <Loader2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin" />
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        )}
                      </button>
                    </div>

                    {newsletterError && (
                      <p className="text-[11px] text-red-400 font-medium px-2">
                        {newsletterError}
                      </p>
                    )}
                    
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400 px-2">
                      <Lock className="w-3.5 h-3.5 text-[#00A3FF]" />
                      <span>We respect your privacy.</span>
                    </div>
                  </form>
                )}
              </div>

              {/* Solid Vibrant Corner Gradient Swoop from Mockup */}
              <div className="w-28 sm:w-32 h-28 sm:h-32 bg-gradient-to-tr from-[#0044FF] to-[#00A3FF] rounded-tl-full absolute -bottom-2 -right-2 pointer-events-none opacity-80" />
            </div>
          </div>

        </div>

        {/* Middle Divider & Legal Bar */}
        <div className="pt-6 sm:pt-8 pb-4 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
          <div>
            <p className="text-slate-300 font-medium">© {currentYear} The Co HR. All rights reserved.</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Built for a better, people-first future.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>

          <div className="flex items-center gap-2 text-slate-300 bg-slate-900/80 border border-slate-800 rounded-full px-3.5 py-1.5 text-xs">
            <Leaf className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>A Sustainable Workplace Partner</span>
          </div>
        </div>

      </div>
    </footer>
  );
}


