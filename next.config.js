/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vid.alarabiya.net",
      },
      {
        protocol: "https",
        hostname: "vetogate.com/",
      },
      {
        protocol: "https",
        hostname: "elbalad.news/",
      },
    ],
  },
};

module.exports = nextConfig;
