/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['shoes-shop-strapi.herokuapp.com']
  }
}

module.exports = nextConfig
