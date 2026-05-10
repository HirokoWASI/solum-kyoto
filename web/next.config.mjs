/** @type {import('next').NextConfig} */
// GitHub Pages 配信時のサブパス。リポジトリ名/high-wireframe を public URL とする。
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/solum-kyoto/high-wireframe" : "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
