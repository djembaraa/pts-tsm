import React from 'react';
import { Link } from 'react-router-dom';
import RichText from '../ui/RichText';

const ProdukTemplate = ({ data }) => {
  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[4rem] pb-[3.5rem] relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="text-[0.75rem] font-bold tracking-[0.1em] uppercase text-accent mb-[0.8rem] flex items-center gap-[0.5rem] flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Beranda</Link> <span>›</span>
            <Link to="/produk" className="hover:text-white transition-colors">Produk</Link> <span>›</span>
            <span className="text-white opacity-70">{data.category}</span>
          </div>
          <h1 className="font-condensed text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.1] mb-[1.2rem] max-w-[800px]">
            {data.title}
          </h1>
          <p className="text-[1.05rem] opacity-90 max-w-[650px] leading-[1.6]">
            {data.description}
          </p>
        </div>
      </div>

      <section className="py-[4rem]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-[4rem] items-start">
            
            <div className="main-content">
              {data.image && (
                <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
                  <img src={`/images/${data.image}`} alt={data.title} className="w-full h-auto object-cover max-h-[500px]" />
                </div>
              )}
              
              <RichText content={data.content} />
            </div>

            <aside className="lg:sticky lg:top-[120px]">
              <div className="bg-white border border-border rounded-2xl p-6 shadow-sm mb-6">
                <h3 className="font-condensed text-xl font-bold text-navy mb-4 border-b border-border pb-3">Spesifikasi Utama</h3>
                <ul className="space-y-3">
                  {data.specs && data.specs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-text">
                      <span className="text-accent mt-0.5">✓</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-gray to-white border border-border rounded-2xl p-6 text-center">
                <h4 className="font-bold text-navy mb-2">Tertarik dengan produk ini?</h4>
                <p className="text-sm text-muted mb-4">Tim ahli kami siap membantu mencarikan solusi terbaik untuk kebutuhan Anda.</p>
                <Link to="/kontak" className="block w-full py-3 bg-blue text-white font-bold rounded-lg hover:bg-navy transition-colors mb-3">
                  Minta Penawaran
                </Link>
                <a href="https://wa.me/62818719119" className="block w-full py-3 bg-white border-2 border-blue text-blue font-bold rounded-lg hover:bg-blue hover:text-white transition-colors">
                  WhatsApp Kami
                </a>
              </div>
            </aside>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default ProdukTemplate;
