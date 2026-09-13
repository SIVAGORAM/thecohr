import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/wp-admin/',
          '/wp-includes/',
          '/wp-json/',
          '/wp-content/plugins/',
          '/*.php$',
          '/*feed*',
          '/*rss*',
          '/category/',
          '/tag/',
          '/author/',
          '/*?*',
        ],
      },
    ],
    sitemap: `${SITE_CONFIG.domain}/sitemap.xml`,
  };
}
