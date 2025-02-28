/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: "/socket.io/:path*",
        destination: "http://localhost:3000/socket.io/:path*",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/socket.io/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
};

export default nextConfig;