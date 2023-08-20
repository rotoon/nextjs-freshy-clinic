/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  experimental: { newNextLinkBehavior: false },
}

module.exports = nextConfig
