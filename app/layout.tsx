import type { Metadata } from "next";
import { Sora, Inter, Playball, Caveat } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { MobileStickyCTA } from "@/components/ui/mobile-sticky-cta";
import { NetworkStatus } from "@/components/ui/network-status";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playball = Playball({
  weight: "400",
  variable: "--font-playball",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  weight: "700",
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thecohr.com"),
  title: {
    template: "%s | The Co HR",
    default: "HR ERP Software, Outsourced HR & Training | The Co HR",
  },
  description: "The Co HR combines technology, expertise, and learning into one complete platform to streamline HR operations. Explore our HR ERP, Remote HR, and Training services.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.thecohr.com",
    siteName: "The Co HR",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "The Co HR",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Co HR",
    description: "Your complete HR transformation partner.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/fav.svg", type: "image/svg+xml" },
    ],
    shortcut: "/fav.svg",
    apple: "/fav.svg",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "The Co HR",
  "url": "https://www.thecohr.com",
  "logo": "https://www.thecohr.com/logo.png",
  "sameAs": [
    "https://www.linkedin.com/in/the-co-hr-1a4842428/",
    "https://x.com/thecohr",
    "https://www.facebook.com/people/TheCo-HR/pfbid0Y9dBJZkUCq9jrpMwukbksVvaF3b7EPD6GvEdWDWLHTAEtzFMZmmxKznuax2S5Gsql/",
    "https://www.instagram.com/thecohr_com/"
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${playball.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-ink">
        <NetworkStatus />
        <JsonLd data={orgSchema} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileStickyCTA />
        <CookieBanner />
      </body>
    </html>
  );
}
