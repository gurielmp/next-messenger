/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    awcPlugin: [["next-superjson-plugin", {}]],
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
    ],
  },
}

module.exports = nextConfig
