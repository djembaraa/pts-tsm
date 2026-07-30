import React from 'react';
import { Link } from 'react-router-dom';
import RichText from '../ui/RichText';

const PortofolioTemplate = ({ data }) => {
  return (
    <>
      <div className="bg-navy text-white py-[4rem] pb-[3.5rem] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {data.image && <img src={`/images/${data.image}`} alt="" className="w-full h-full object-cover" />}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent"></div>
        
        <div className="max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="text-[0.75rem] font-bold tracking-[0.1em] uppercase text-accent mb-[0.8rem] flex items-center gap-[0.5rem] flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Beranda</Link> <span>›</span>
            <Link to="/portofolio" className="hover:text-white transition-colors">Portofolio</Link> <span>›</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[4rem] items-start">
            
            <div className="main-content">
              {data.image && (
                <div className="mb-8 rounded-2xl overflow-hidden shadow-xl cs-gallery">
                  <img src={`/images/${data.image}`} alt={data.title} className="w-full h-auto object-cover max-h-[500px] cursor-pointer" />
                </div>
              )}
              
              <RichText content={data.content} className="cs-gallery" />
            </div>

            <aside className="lg:sticky lg:top-[120px]">
              <div className="bg-gray border border-border rounded-2xl p-6 text-center">
                <h4 className="font-bold text-navy mb-2">Punya Proyek Serupa?</h4>
                <p className="text-sm text-muted mb-4">Konsultasikan kebutuhan water treatment Anda dengan tim ahli kami.</p>
                <Link to="/kontak" className="block w-full py-3 bg-blue text-white font-bold rounded-lg hover:bg-navy transition-colors mb-3">
                  Hubungi Kami
                </Link>
              </div>
            </aside>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default PortofolioTemplate;
