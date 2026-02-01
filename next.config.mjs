/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel handles static generation automatically
  trailingSlash: true,
  
  // Compress responses for faster loading
  compress: true,
  
  // Enable React strict mode for better debugging
  reactStrictMode: true,
  
  // Power header for security
  poweredByHeader: false,
  
  typescript: {
    ignoreBuildErrors: true,
  },
  
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  
  // Security headers for SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  
  // Redirects for SEO (old domain to new)
  async redirects() {
    return [
      {
        source: '/wedding-planner-vadodara',
        destination: '/wedding-planner-in-vadodara/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
