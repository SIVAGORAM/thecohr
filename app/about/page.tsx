import dynamic from "next/dynamic";
import { AboutHero } from "@/components/sections/about-hero";
import { OurStory } from "@/components/sections/our-story";
import { JsonLd } from "@/components/seo/json-ld";
import { Metadata } from "next";

const VisionMission = dynamic(() =>
  import("@/components/sections/vision-mission").then((mod) => mod.VisionMission)
);
const CoreValues = dynamic(() =>
  import("@/components/sections/core-values").then((mod) => mod.CoreValues)
);
const AboutCTA = dynamic(() =>
  import("@/components/sections/about-cta").then((mod) => mod.AboutCTA)
);

import { constructMetadata, ROUTES_SEO } from "@/lib/seo";

export const metadata: Metadata = constructMetadata(ROUTES_SEO.about);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.thecohr.com/" },
    { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.thecohr.com/about" }
  ]
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <AboutHero />
      <OurStory />
      <VisionMission />
      <CoreValues />
      <AboutCTA />
    </>
  );
}
