import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  swcMinify: true,
  compress: true,
  productionBrowserSourceMaps: false,
  optimizeFonts: true,
  poweredByHeader: false,
  images: {
    unoptimized: false,
    formats: ["image/webp", "image/avif"],
  },
  headers: async () => {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store" },
          { key: "Content-Type", value: "application/json" },
        ],
      },
    ];
  },
};

export default nextConfig;
