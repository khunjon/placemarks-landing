/** @type {import('next').NextConfig} */
const nextConfig = {
  // Comment out 'output: export' to enable API routes for email signup
  // Uncomment for static-only deployment without email functionality
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig 