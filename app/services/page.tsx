import dynamic from "next/dynamic";
import { ServicesHero } from "@/components/sections/services-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

const ServicesSolutions = dynamic(() =>
  import("@/components/sections/services-solutions").then((mod) => mod.ServicesSolutions)
);
const ServicesStats = dynamic(() =>
  import("@/components/sections/services-stats").then((mod) => mod.ServicesStats)
);
const ServicesCTA = dynamic(() =>
  import("@/components/sections/services-cta").then((mod) => mod.ServicesCTA)
);

import { constructMetadata, ROUTES_SEO } from "@/lib/seo";

export const metadata: Metadata = constructMetadata(ROUTES_SEO.services);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.thecohr.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.thecohr.com/services" }
  ]
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Service",
      "position": 1,
      "name": "HR ERP Software",
      "description": "Complete employee lifecycle management with 14 key modules and multi-deployment options.",
      "provider": { "@type": "Organization", "name": "The Co HR" }
    },
    {
      "@type": "Service",
      "position": 2,
      "name": "Remote HR Services",
      "description": "Dedicated HR professionals working as your extended HR team across recruitment, compliance, and payroll.",
      "provider": { "@type": "Organization", "name": "The Co HR" }
    },
    {
      "@type": "Service",
      "position": 3,
      "name": "ERP Training & Upskilling",
      "description": "Professional learning programmes designed for HR teams, managers, and administrators.",
      "provider": { "@type": "Organization", "name": "The Co HR" }
    }
  ]
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={servicesSchema} />
      <ServicesHero />
      <ServicesSolutions />
      <ServicesStats />
      <ServicesCTA />
    </>
  );
}
