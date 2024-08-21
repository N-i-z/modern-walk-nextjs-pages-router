/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fakestoreapi.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
