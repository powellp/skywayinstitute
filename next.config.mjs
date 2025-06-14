/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Image optimization configuration
  images: {
    domains: ['placeholder.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: false, // Set to false for production
  },
  
  // Enable experimental features
  experimental: {
    // Enable server actions
    serverActions: { enabled: true },
    // Enable optimistic updates
    optimisticClientCache: true,
    // Enable server components
    serverExternalPackages: [],
  },
  
  // Configure headers for better security and performance
  headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' https://cdn.example.com; img-src 'self' https://images.example.com",
          },
          {
            key: 'Permissions-Policy',
            value: 'interest-cohort=()',
          },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=31536000',
          },
        ],
      },
    ];
  },
  
  // Configure redirects for SEO
  async redirects() {
    return [
      {
        source: '/courses/iata',
        destination: '/courses/aviation/iata',
        permanent: true,
      },
      {
        source: '/courses/ielts',
        destination: '/courses/exam-preparation/english-exam/ielts',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
