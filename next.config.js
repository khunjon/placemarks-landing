/** @type {import('next').NextConfig} */
const nextConfig = {
  // Comment out 'output: export' to enable API routes for email signup
  // Uncomment for static-only deployment without email functionality
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  async headers() {
    return [
      {
        // Apply cache headers to all HTML pages
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate, max-age=0'
          },
          {
            key: 'Pragma',
            value: 'no-cache'
          },
          {
            key: 'Expires',
            value: '0'
          }
        ]
      },
      {
        // Cache static assets longer
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        // Cache Next.js static files
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig 