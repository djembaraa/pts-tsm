import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PRODUCTS, SERVICES, INDUSTRIES } from '../constants/data';

const getCategoryData = (category) => {
  switch (category) {
    case 'produk': return PRODUCTS;
    case 'layanan': return SERVICES;
    case 'industri': return INDUSTRIES;
    default: return [];
  }
};

const DynamicPage = ({ category }) => {
  const { id } = useParams();
  const items = getCategoryData(category);
  const item = items.find(i => i.id === id);

  if (!item) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-[1240px] mx-auto px-6">
        <Link to={`/${category}`} className="inline-flex items-center gap-2 text-muted text-sm font-semibold hover:text-blue mb-8 transition-colors">
          <ArrowLeft size={16} /> Kembali ke {category}
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start">
          <div>
            <div className="h-[300px] rounded-xl bg-gradient-to-br from-navy to-blue flex items-center justify-center text-white/20 mb-8 overflow-hidden relative">
               {/* Gunakan gambar placeholder atau ambil dari folder public jika ada */}
               <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}></div>
               <h1 className="font-condensed text-4xl font-bold relative z-10">{item.title}</h1>
            </div>
            
            <div className="prose max-w-none">
              <h2 className="font-condensed text-3xl font-bold text-navy mb-4">Informasi Detail {item.title}</h2>
              <p className="text-text leading-relaxed mb-6">
                Ini adalah halaman dinamis untuk <strong>{item.title}</strong> pada kategori <strong>{category}</strong>. Data konten dapat dimuat dari JSON atau CMS eksternal. Kami menggunakan sistem routing yang rapi dan terpusat sehingga file menjadi sangat ringan dan tidak berulang.
              </p>
              <ul className="list-disc pl-5 text-text space-y-2 mb-6">
                <li>Material berkualitas tinggi berstandar industri.</li>
                <li>Efisien, hemat energi, dan mudah perawatannya.</li>
                <li>Dukungan purna jual terjamin di seluruh wilayah.</li>
              </ul>
            </div>
          </div>
          
          <div className="sticky top-24">
             <div className="bg-gray border border-border rounded-xl p-6 mb-6">
                <h4 className="font-bold text-navy text-[0.9rem] uppercase tracking-wider mb-4 border-b border-border pb-2">Kategori Lainnya</h4>
                <ul className="flex flex-col gap-3">
                  {items.map(navItem => (
                    <li key={navItem.id}>
                      <Link to={navItem.url} className={`text-[0.85rem] transition-all hover:text-blue font-medium ${navItem.id === id ? 'text-blue pl-2 border-l-2 border-accent' : 'text-text'}`}>
                        {navItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
             </div>
             
             <div className="bg-gradient-to-br from-navy to-blue rounded-xl p-6 text-white">
                <h4 className="font-bold text-[1.1rem] mb-2">Butuh Konsultasi?</h4>
                <p className="text-[0.8rem] text-white/80 mb-4 leading-relaxed">Tim ahli kami siap membantu memilih spesifikasi yang tepat untuk kebutuhan Anda.</p>
                <Link to="/kontak" className="block text-center bg-accent text-white py-2 rounded-md font-bold text-[0.8rem] tracking-wide uppercase hover:bg-white hover:text-navy transition-colors">
                  Hubungi Sekarang
                </Link>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicPage;
