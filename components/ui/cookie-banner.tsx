"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X, Check } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("thecohr_cookie_consent");
    if (!consent) {
      // Delay slightly for smooth appearance
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("thecohr_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("thecohr_cookie_consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#051332] text-white rounded-2xl p-5 border border-slate-700/60 shadow-[0_12px_40px_rgba(0,0,0,0.35)] space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 text-sm font-bold text-white">
            <div className="w-8 h-8 rounded-lg bg-[#0066FF] flex items-center justify-center text-white shrink-0">
              <Cookie className="w-4 h-4" />
            </div>
            <span>Cookie & Privacy Choice</span>
          </div>
          <button
            onClick={handleDecline}
            className="text-slate-400 hover:text-white p-1 transition-colors rounded-lg"
            aria-label="Close cookie banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed font-medium">
          We use cookies and essential analytics to enhance your experience and analyze website traffic. Read our{" "}
          <Link href="/privacy-policy" className="text-[#60A5FA] underline font-bold hover:text-blue-300">
            Privacy Policy
          </Link>{" "}
          to learn more.
        </p>

        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={handleAccept}
            className="flex-1 bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Accept All</span>
          </button>
          <button
            onClick={handleDecline}
            className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors cursor-pointer"
          >
            Essential Only
          </button>
        </div>
      </div>
    </div>
  );
}
