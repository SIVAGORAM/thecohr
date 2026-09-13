import React from "react";
import { contactContent, homeContent } from "@/lib/content";
import { SITE_CONFIG } from "@/lib/seo";

export type SchemaData = Record<string, unknown> | Record<string, unknown>[];

interface JsonLdProps {
  data: SchemaData;
}

/**
 * JsonLd Component
 * React 19 & Next.js 16 compatible script injector for JSON-LD structured data.
 * Protects against XSS injection by escaping '<' characters.
 */
export function JsonLd({ data }: JsonLdProps) {
  const jsonString = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
}

/**
 * Dynamic Organization Schema Generator
 * Extracts brand details directly from `lib/content.ts` and `SITE_CONFIG`
 * to conform to official Schema.org standards for a professional HCM/ERP Vendor.
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "@id": `${SITE_CONFIG.domain}/#organization`,
    "name": SITE_CONFIG.name,
    "legalName": "The Co HR Private Limited",
    "url": SITE_CONFIG.domain,
    "logo": `${SITE_CONFIG.domain}/logo.png`,
    "image": `${SITE_CONFIG.domain}/logo.png`,
    "description": homeContent.hero.subheading.replace(/\n/g, " "),
    "slogan": "Powering People. Enabling Possibilities.",
    "telephone": contactContent.info.phone,
    "email": contactContent.info.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hitech City, Tech Hub",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500081",
      "addressCountry": "IN"
    },
    "sameAs": contactContent.info.social.map((s) => s.url),
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": contactContent.info.phone,
        "contactType": "customer support",
        "email": contactContent.info.email,
        "areaServed": "Global",
        "availableLanguage": ["English", "Hindi"]
      }
    ],
    "knowsAbout": [
      "Human Capital Management System",
      "HR ERP Software",
      "Automated Payroll & Statutory Compliance",
      "Remote HR Operations",
      "ERP Training & Upskilling"
    ]
  };
}

/**
 * Dynamic HCM Software Application Schema Builder
 */
export function getHcmSoftwareSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_CONFIG.domain}/#software`,
    "name": "The Co HR ERP System",
    "operatingSystem": "All (Web-based Cloud SaaS & On-Premise)",
    "applicationCategory": "BusinessApplication",
    "softwareRequirements": "Modern Web Browser",
    "description": "Complete HCM and HR ERP platform automating payroll, attendance, recruitment, performance analytics, and employee lifecycle management.",
    "publisher": {
      "@type": "Organization",
      "name": SITE_CONFIG.name,
      "url": SITE_CONFIG.domain
    },
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": SITE_CONFIG.name
      }
    }
  };
}
