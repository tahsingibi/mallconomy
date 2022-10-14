/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images:{
    domains:['cdn.mallconomy.com']
  }
}

module.exports = nextConfig
