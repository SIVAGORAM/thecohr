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

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "The Co HR",
  "image": "https://www.thecohr.com/logo.png",
  "url": "https://www.thecohr.com",
  "telephone": "+91 90197 24365",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Business Avenue, Tech Park",
    "addressLocality": "City",
    "postalCode": "400001",
    "addressCountry": "IN"
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
