/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Bu satır GitHub Pages için HTML çıktı üretilmesini sağlar
  images: {
    unoptimized: true, // GitHub Pages resim optimizasyonunu desteklemez
  },
  // ÖNEMLİ: Custom domain kullandığın için basePath veya assetPrefix EKLEME.
};

export default nextConfig;