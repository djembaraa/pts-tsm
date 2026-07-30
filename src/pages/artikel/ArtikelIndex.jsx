import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ui/ProductCard';
import { articles } from '../../data/mockData_articles';

const ArtikelIndex = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [activeCat, setActiveCat] = useState('Semua');

  const categories = ['Semua', ...new Set(articles.map(a => a.category))].filter(Boolean);
  
  const filteredArticles = activeCat === 'Semua' 
    ? articles 
    : articles.filter(a => a.category === activeCat);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/">Beranda</Link> › Artikel & Edukasi</div>
          <h1 className="font-condensed text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold leading-[1.1] mb-[0.65rem]">Artikel & Edukasi</h1>
        </div>
      </div>
      <section className="py-16">
        <div className="max-w-[1240px] mx-auto px-6">
          
          <div className="flex flex-wrap gap-2 mb-8 border-b border-border pb-4">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors border-2 ${activeCat === cat ? 'bg-blue border-blue text-white' : 'border-border text-muted hover:border-blue hover:text-blue bg-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]">
            {filteredArticles.map(item => (
              <ProductCard 
                key={item.id}
                img={item.image || 'placeholder.webp'}
                cat={item.category || cat.title}
                title={item.title}
                desc={item.description || item.excerpt || ''}
                url={`/artikel/${item.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default ArtikelIndex;
