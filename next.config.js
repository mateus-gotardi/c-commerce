/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    STORAGE_TYPE: process.env.STORAGE_TYPE,
    AWS_BUCKET: process.env.AWS_BUCKET
  },
};

module.exports = nextConfig;
