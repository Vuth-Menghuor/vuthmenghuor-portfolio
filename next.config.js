/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
    domains: ["images.unsplash.com", "via.placeholder.com"],
  },
  // Optional: Add trailing slashes for better compatibility
  trailingSlash: true,
};

module.exports = nextConfig;
