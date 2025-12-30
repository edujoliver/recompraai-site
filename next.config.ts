import type { NextConfig } from "next";

// Suprimir erro de ping do Turbopack HMR (bug conhecido Next.js 15.5.x)
if (process.env.NODE_ENV === 'development') {
  const originalEmit = process.emit;
  // @ts-ignore
  process.emit = function (name, data, ...args) {
    if (
      (name === 'unhandledRejection' || name === 'uncaughtException') &&
      data?.message?.includes?.('unrecognized HMR message') &&
      data?.message?.includes?.('"event":"ping"')
    ) {
      return false;
    }
    return originalEmit.apply(process, arguments as any);
  };
}

const nextConfig: NextConfig = {
  // Ignorar erros de ESLint no build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: { ignoreBuildErrors: true },

  // Otimizações de performance
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  
  // Compressão Gzip/Brotli
  compress: true,
  
  // Output standalone para deploy otimizado
  output: 'standalone',
  
  // Otimizações de produção
  productionBrowserSourceMaps: false,
  
  // Otimizações experimentais
  experimental: {
    // Otimiza imports de pacotes grandes
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-dialog',
      '@radix-ui/react-accordion',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-avatar',
      '@radix-ui/react-slot',
    ],
  },
  
  // Otimização de imagens
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 ano
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'deifkwefumgah.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'pwarmvjhhihrmhlramsq.supabase.co',
      },
    ],
  },
  
  // Headers de performance, segurança e cache
  async headers() {
    return [
      {
        // Headers para todas as páginas
        source: '/:path*',
        headers: [
          // Compressão
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Preload de recursos críticos
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          // Conexões keep-alive
          {
            key: 'Connection',
            value: 'keep-alive',
          },
        ],
      },
      {
        // Cache agressivo para imagens
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache para assets estáticos do Next.js
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache para fontes
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;


