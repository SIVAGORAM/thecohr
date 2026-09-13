"use client";

import Script from "next/script";

interface GoogleAnalyticsProps {
  gaId?: string;
}

/**
 * GoogleAnalytics Component
 * 
 * Safely injects Google Analytics 4 (GA4) script using `next/script`
 * with `strategy="afterInteractive"` to ensure non-blocking page load.
 * 
 * Configured via `process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID`.
 */
export function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  const measurementId = gaId || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!measurementId) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
