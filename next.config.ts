import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    NEXT_PUBLIC_URL_API: process.env.NEXT_PUBLIC_URL_API,
    NEXT_PUBLIC_URL_BASE_IMAGES: process.env.NEXT_PUBLIC_URL_BASE_IMAGES,
  },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false, // Ignora errores de tipos durante el build
  },
};

export default nextConfig;
