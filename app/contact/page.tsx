import dynamic from "next/dynamic";
import { ContactHero } from "@/components/sections/contact-hero";
import { ContactMain } from "@/components/sections/contact-main";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

const ContactLocationOffice = dynamic(() =>
  import("@/components/sections/contact-location-office").then((mod) => mod.ContactLocationOffice)
);
const ContactCTA = dynamic(() =>
  import("@/components/sections/contact-cta").then((mod) => mod.ContactCTA)
);

export const metadata: Metadata = {
  title: "Contact Us | The Co HR - Let's Build a Better Workplace Together",
  description: "Get in touch with The Co HR for HR ERP Software, Remote HR Services, and ERP Training. Contact our HR specialists in Hyderabad, India today.",
  alternates: {
    canonical: "/contact",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.thecohr.com/" },
    { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://www.thecohr.com/contact" }
  ]
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact The Co HR",
  "description": "Have a question or ready to get started? Contact The Co HR team for comprehensive HR solutions.",
  "mainEntity": {
    "@type": "Organization",
    "name": "The Co HR Private Limited",
    "telephone": "+91 98765 43210",
    "email": "info@thecohr.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500081",
      "addressCountry": "IN"
    }
  }
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={contactSchema} />
      <ContactHero />
      <ContactMain />
      <ContactLocationOffice />
      <ContactCTA />
    </>
  );
}
