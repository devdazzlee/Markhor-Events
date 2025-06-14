/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',         // ← generate a static export
  images: { unoptimized: true }  // ← skip the Next.js image optimizer
}

export default nextConfig
