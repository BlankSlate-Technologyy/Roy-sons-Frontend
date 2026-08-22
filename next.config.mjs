/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/group-companies/swiss-farms/:path*",
        destination: "/group-companies/swiss-farm/:path*",
        permanent: true,
      },
      {
        source: "/group-companies/swiss-farms",
        destination: "/group-companies/swiss-farm",
        permanent: true,
      },
      {
        source: "/group-companies/swissfarms/:path*",
        destination: "/group-companies/swiss-farm/:path*",
        permanent: true,
      },
      {
        source: "/group-companies/swissfarms",
        destination: "/group-companies/swiss-farm",
        permanent: true,
      },
      {
        source: "/group-companies/national-agricalture/:path*",
        destination: "/group-companies/national-agricultural/:path*",
        permanent: true,
      },
      {
        source: "/group-companies/national-agricalture",
        destination: "/group-companies/national-agricultural",
        permanent: true,
      },
      {
        source: "/group-companies/vetvac-pharma/:path*",
        destination: "/group-companies/Vetvacpharma/:path*",
        permanent: true,
      },
      {
        source: "/group-companies/vetvac-pharma",
        destination: "/group-companies/Vetvacpharma",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
