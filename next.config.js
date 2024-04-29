/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.static.dragonaere.com'
      },
    ],
  },
  output: 'export',
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  images: { 
    unoptimized: true
  }
}

module.exports = nextConfig
