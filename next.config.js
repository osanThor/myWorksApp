/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['three']);
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dynkqtrus/**',
      },
      {
        protocol: 'https',
        hostname: 'bit.ly',
        port: '',
        pathname: '/**',
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    apiKey: process.env.publicApiKey || '',
    authDomain: process.env.FIREBASE_AUTH_HOST || '',
    projectId: process.env.projectId || '',
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
module.exports = withTM();
