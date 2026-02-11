/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // <--- BU ÇOK ÖNEMLİ (Statik HTML üretir)
  images: {
    unoptimized: true, // GitHub Pages resim optimizasyonunu desteklemez, bunu kapatmalıyız.
  },
  // Eğer özel domain kullanmayacaksan ve site "kullaniciadi.github.io/repo-adi" olacaksa:
  // basePath: '/neuraltrade-comingsoon', 
  // assetPrefix: '/neuraltrade-comingsoon/',
};

export default nextConfig;