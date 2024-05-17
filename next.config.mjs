/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: ["cdn-icons-png.freepik.com", "swiperjs.com", "i.ibb.co"],
        port: "",
      },
    ],
  },
};

export default nextConfig;
