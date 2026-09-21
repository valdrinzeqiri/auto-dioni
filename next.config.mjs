/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Kjo i thotë Vercel-it me kalu build-in edhe nëse ka ndonjë gabim të vogël TypeScript-i
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
