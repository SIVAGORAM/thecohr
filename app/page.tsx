import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { CoreServices } from "@/components/sections/core-services";
import { EcosystemStats } from "@/components/sections/ecosystem-stats";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

const IndustryExpertise = dynamic(() =>
  import("@/components/sections/industry-expertise").then((mod) => mod.IndustryExpertise)
);
const EmployeeJourney = dynamic(() =>
  import("@/components/sections/employee-journey").then((mod) => mod.EmployeeJourney)
);
const TruePartner = dynamic(() =>
  import("@/components/sections/true-partner").then((mod) => mod.TruePartner)
);
const HomeCta = dynamic(() =>
  import("@/components/sections/home-cta").then((mod) => mod.HomeCta)
);

import { constructMetadata, ROUTES_SEO } from "@/lib/seo";

export const metadata: Metadata = constructMetadata(ROUTES_SEO.home);

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "The Co HR",
  "image": "https://www.thecohr.com/logo.png",
  "url": "https://www.thecohr.com",
  "telephone": "+91 90197 24365",
  "email": "info@thecohr.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Pranava Business Park, 7th Floor, Kondapur",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 17.4486,
    "longitude": 78.3808
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  }
};

export default function Home() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <Hero />
      <CoreServices />
      <EcosystemStats />
      <IndustryExpertise />
      <EmployeeJourney />
      <TruePartner />
      <HomeCta />
    </>
  );
}
