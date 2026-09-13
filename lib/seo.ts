import { Metadata } from "next";

const getDomain = (): string => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  return "https://www.thecohr.com";
};

export const SITE_CONFIG = {
  name: "The Co HR",
  domain: getDomain(),
  defaultTitle: "The Co HR | HR ERP Software, Outsourced HR & Training Solutions",
  defaultDescription:
    "Transform your workforce with The Co HR. Complete HCM platform offering HR ERP Software, Remote HR Services, and ERP Training for modern enterprises.",
  ogImage: "/og-image.jpg",
  twitterHandle: "@thecohr",
};

export type RouteSeoConfig = {
  title: string;
  description: string;
  path: string;
  priority: number;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  noIndex?: boolean;
};

export const ROUTES_SEO: Record<string, RouteSeoConfig> = {
  home: {
    title: "The Co HR | HR ERP Software, Outsourced HR & Training Solutions",
    description: "Transform your workforce with The Co HR. Complete HCM platform offering HR ERP Software, Remote HR Services, and ERP Training for modern enterprises.",
    path: "/",
    priority: 1.0,
    changeFrequency: "weekly",
  },
  services: {
    title: "Services | The Co HR - HR ERP Software, Remote HR & Training",
    description: "Explore complete HR solutions by The Co HR: HR ERP Software, Remote HR Services, and ERP Training & Upskilling designed for modern organizations.",
    path: "/services",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  about: {
    title: "About Us | The Co HR - Empowering Businesses Through People & Technology",
    description: "The Co HR was founded to simplify Human Resource Management for businesses of every size by integrating HR ERP software, outsourced services, and training.",
    path: "/about",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  contact: {
    title: "Contact Us | The Co HR - Let's Build a Better Workplace Together",
    description: "Get in touch with The Co HR for HR ERP Software, Remote HR Services, and ERP Training. Contact our HR specialists in Hyderabad, India today.",
    path: "/contact",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  privacyPolicy: {
    title: "Privacy Policy | The Co HR - Data Protection & Enterprise Standards",
    description: "Learn how The Co HR collects, protects, and handles your personal data in compliance with enterprise privacy standards.",
    path: "/privacy-policy",
    priority: 0.3,
    changeFrequency: "yearly",
  },
  termsOfService: {
    title: "Terms of Service | The Co HR - Enterprise Terms & Conditions",
    description: "Read the Terms of Service and Conditions of use for The Co HR website, HR ERP software, and outsourced HR services.",
    path: "/terms-of-service",
    priority: 0.3,
    changeFrequency: "yearly",
  },
  thankYou: {
    title: "Thank You | The Co HR - Message Received",
    description: "Thank you for reaching out to The Co HR. Our HR specialists have received your message and will get back to you shortly.",
    path: "/thank-you",
    priority: 0.1,
    changeFrequency: "never",
    noIndex: true,
  },
};

export function constructMetadata(config: RouteSeoConfig): Metadata {
  const normalizedPath = config.path.endsWith("/") ? config.path : `${config.path}/`;
  const url = `${SITE_CONFIG.domain}${normalizedPath}`;

  return {
    title: config.title,
    description: config.description,
    alternates: {
      canonical: url,
    },
    robots: config.noIndex
      ? { index: false, follow: true }
      : {
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
      title: config.title,
      description: config.description,
      url: url,
      siteName: SITE_CONFIG.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: `${config.title} — ${SITE_CONFIG.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: [SITE_CONFIG.ogImage],
    },
  };
}
