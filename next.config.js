/** @type {import('next').NextConfig} */
// Watch from type of development
const dev = process.env.NODE_ENV !== 'production'

// Config
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Env
  env: {
    SITE_URL: dev ? 'http://localhost:3000' : 'https://design-miami.vercel.app',
  },
  // Icons config
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    // Return
    return config
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
