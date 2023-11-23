/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    awcPlugin: [["next-superjson-plugin", {}]],
  },
}

module.exports = nextConfig
