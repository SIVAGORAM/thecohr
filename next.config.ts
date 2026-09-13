import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85, 100],
    minimumCacheTTL: 31536000,
  },
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@radix-ui/react-label",
      "@radix-ui/react-slot",
    ],
  },
  async redirects() {
    return [
      // Static 301 Redirects (Legacy WordPress Pages)
      { source: "/about-us", destination: "/about/", permanent: true },
      { source: "/about-us/", destination: "/about/", permanent: true },
      { source: "/contact-us", destination: "/contact/", permanent: true },
      { source: "/contact-us/", destination: "/contact/", permanent: true },
      { source: "/our-story", destination: "/about/", permanent: true },
      { source: "/our-story/", destination: "/about/", permanent: true },
      { source: "/our-services", destination: "/services/", permanent: true },
      { source: "/our-services/", destination: "/services/", permanent: true },
      { source: "/hr-software", destination: "/services/#hr-erp-software", permanent: true },
      { source: "/remote-hr", destination: "/services/#remote-hr-services", permanent: true },
      { source: "/training", destination: "/services/#erp-training", permanent: true },
      { source: "/privacy", destination: "/privacy-policy/", permanent: true },
      { source: "/terms", destination: "/terms-of-service/", permanent: true },

      // Wildcard & Regex 301 Redirects (WP Legacy Feeds, Categories, Media)
      { source: "/feed/:path*", destination: "/", permanent: true },
      { source: "/rss/:path*", destination: "/", permanent: true },
      { source: "/category/:path*", destination: "/services/", permanent: true },
      { source: "/tag/:path*", destination: "/services/", permanent: true },
      { source: "/author/:path*", destination: "/about/", permanent: true },
      { source: "/wp-content/uploads/:path*", destination: "/images/:path*", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp|avif|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
