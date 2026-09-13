import type { Metadata } from "next";
import { Sora, Inter, Playball, Caveat } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { JsonLd, getOrganizationSchema, getHcmSoftwareSchema } from "@/components/seo/json-ld";
import { GoogleAnalytics } from "@/components/seo/google-analytics";
import { ClientWidgets } from "@/components/layout/client-widgets";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.thecohr.com"),
  title: {
    template: "%s | The Co HR",
    default: "HR ERP Software, Outsourced HR & Training | The Co HR",
  },
  description: "The Co HR combines technology, expertise, and learning into one complete platform to streamline HR operations. Explore our HR ERP, Remote HR, and Training services.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.thecohr.com",
    siteName: "The Co HR",
    title: "HR ERP Software, Outsourced HR & Training | The Co HR",
    description: "The Co HR combines technology, expertise, and learning into one complete platform to streamline HR operations.",
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${playball.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-ink">
        <GoogleAnalytics />
        <JsonLd data={[getOrganizationSchema(), getHcmSoftwareSchema()]} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ClientWidgets />
      </body>
    </html>
  );
}
