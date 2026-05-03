/** @type {import('next').NextConfig} */
const nextConfig = {
  // In production, previews are served via nginx path-proxy at /preview-{PORT}/*.
  // The dev server launcher sets NEXT_PUBLIC_ASSET_PREFIX=/preview-{PORT} so
  // /_next/static/ chunks resolve through the proxy. Empty in local dev.
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || '',
  reactStrictMode: true,
  images: {
    // Skip the /_next/image optimizer endpoint — it doesn't survive the
    // path-proxy in production previews. Direct CDN URLs work in both envs.
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'source.unsplash.com' },
      { protocol: 'https', hostname: 'via.placeholder.com' },
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'loremflickr.com' },
      { protocol: 'https', hostname: 'dummyimage.com' },
      { protocol: 'https', hostname: 'randomuser.me' },
      { protocol: 'https', hostname: 'i.pravatar.cc' },
      { protocol: 'https', hostname: 'api.dicebear.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};
export default nextConfig;
