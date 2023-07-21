/** @type {import('next').NextConfig} */

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  experimental:{
    typedRoutes: true,
  },
}

module.exports = nextConfig
