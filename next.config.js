/** @type {import('next').NextConfig} */

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  experimental:{
    typedRoutes: true,
  },
  async headers(){
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/html; charset=utf-8'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
