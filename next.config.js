/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  images: { 
    unoptimized: true
  }
}

module.exports = nextConfig