import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { SITE_CONFIG, ROUTES_SEO } from '@/lib/seo';

const appDir = path.join(process.cwd(), 'app');

function getPageRoutes(dir: string, baseRoute = ''): string[] {
  let routes: string[] = [];
  if (!fs.existsSync(dir)) return routes;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      // Exclude API routes, internal Next.js system directories, and hidden folders
      if (entry.name.startsWith('api') || entry.name.startsWith('_') || entry.name.startsWith('.')) {
        continue;
      }

      const routePath = `${baseRoute}/${entry.name}`;
      const pageFileTsx = path.join(dir, entry.name, 'page.tsx');
      const pageFileJsx = path.join(dir, entry.name, 'page.jsx');
      const pageFileJs = path.join(dir, entry.name, 'page.js');

      if (fs.existsSync(pageFileTsx) || fs.existsSync(pageFileJsx) || fs.existsSync(pageFileJs)) {
        routes.push(routePath);
      }

      // Recursively scan nested route directories
      routes = routes.concat(getPageRoutes(path.join(dir, entry.name), routePath));
    }
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Automatically discover all page routes under app/
  const discoveredRoutes = ['/', ...getPageRoutes(appDir)];
  const uniqueRoutes = Array.from(new Set(discoveredRoutes));

  return uniqueRoutes
    .filter((route) => {
      // Exclude routes configured with noIndex (e.g. /thank-you)
      const match = Object.values(ROUTES_SEO).find((item) => item.path === route);
      return !match?.noIndex;
    })
    .map((route) => {
      const match = Object.values(ROUTES_SEO).find((item) => item.path === route);
      const normalizedRoute = route.endsWith('/') ? route : `${route}/`;
      const url = `${SITE_CONFIG.domain}${normalizedRoute}`;

      return {
        url,
        lastModified: new Date(),
        changeFrequency: match?.changeFrequency || 'weekly',
        priority: match?.priority ?? (route === '/' ? 1.0 : 0.7),
      };
    });
}
