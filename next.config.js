/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'c.statcounter.com',
        pathname: '/12808997/0/25afffe2/**',
      },
    ],
  },

}

module.exports = nextConfig
