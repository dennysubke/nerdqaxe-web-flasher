/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '/nerdqaxe-web-flasher',
    assetPrefix: '/nerdqaxe-web-flasher',
  } : {}),
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig