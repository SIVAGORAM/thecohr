"use client";

import dynamic from "next/dynamic";

const WhatsAppButton = dynamic(() => import("@/components/ui/whatsapp-button").then((mod) => mod.WhatsAppButton), { ssr: false });
const CookieBanner = dynamic(() => import("@/components/ui/cookie-banner").then((mod) => mod.CookieBanner), { ssr: false });
const MobileStickyCTA = dynamic(() => import("@/components/ui/mobile-sticky-cta").then((mod) => mod.MobileStickyCTA), { ssr: false });
const NetworkStatus = dynamic(() => import("@/components/ui/network-status").then((mod) => mod.NetworkStatus), { ssr: false });

export function ClientWidgets() {
  return (
    <>
      <NetworkStatus />
      <WhatsAppButton />
      <MobileStickyCTA />
      <CookieBanner />
    </>
  );
}
