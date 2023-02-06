/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    appDir: false
  },
  images: {
    domains: ['res.cloudinary.com']
  }
};

module.exports = nextConfig;
