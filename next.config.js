/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

  module.exports = {
    swcMinify:true,
    optimizeFonts:true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.website-files.com',
        },
      ],
      minimumCacheTTL:1500000,
    },
  }