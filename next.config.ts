import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.medicalplus.com.br",
          },
        ],
        destination: "https://medicalplus.com.br/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
