import React from 'react';
import { Link } from 'react-router-dom';
import RichText from '../ui/RichText';

const ArtikelTemplate = ({ data }) => {
  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[4rem] pb-[3.5rem] relative overflow-hidden">
        <div className="max-w-[800px] mx-auto px-6 relative z-10 text-center">
          <div className="text-[0.75rem] font-bold tracking-[0.1em] uppercase text-accent mb-[1rem] flex items-center justify-center gap-[0.5rem] flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Beranda</Link> <span>›</span>
            <Link to="/artikel" className="hover:text-white transition-colors">Artikel</Link> <span>›</span>
            <span className="text-white opacity-70">{data.category}</span>
          </div>
          <h1 className="font-condensed text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.1] mb-[1.2rem]">
            {data.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm opacity-80 mt-6">
            <span>By <strong>{data.author || 'Tim TSM'}</strong></span>
            <span>•</span>
            <span>{data.date}</span>
          </div>
        </div>
      </div>

      <section className="py-[4rem]">
        <div className="max-w-[800px] mx-auto px-6">
          {data.image && (
            <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
              <img src={`/images/${data.image}`} alt={data.title} className="w-full h-auto object-cover max-h-[400px]" />
            </div>
          )}
          
          <RichText content={data.content} />
          
          <div className="mt-12 pt-8 border-t border-border flex justify-between items-center">
            <Link to="/artikel" className="inline-flex items-center gap-2 text-blue font-bold hover:text-navy transition-colors">
              ← Kembali ke Artikel
            </Link>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-gray text-muted text-xs font-bold uppercase rounded-md">{data.category}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArtikelTemplate;
