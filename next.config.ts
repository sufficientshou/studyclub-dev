import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/studyclub',
  assetPrefix: '/studyclub',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
