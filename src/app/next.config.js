/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // You can add other configs here
  
  // This is the part you need to add
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
      // You also use api.qrserver.com, so let's add it too
      {
        protocol: 'https',
        hostname: 'api.qrserver.com',
        port: '',
        pathname: '/**',
      }
      // Add any other domains your backend might send
    ],
  },
};

module.exports = nextConfig;