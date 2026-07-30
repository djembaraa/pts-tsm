import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ui/ProductCard';
import { industries } from '../../data/mockData_industries';

const IndustriIndex = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/">Beranda</Link> › Sektor Industri</div>
          <h1 className="font-condensed text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold leading-[1.1] mb-[0.65rem]">Sektor Industri</h1>
        </div>
      </div>
      <section className="py-16">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]">
            {industries.map(item => (
              <ProductCard 
                key={item.id}
                img={item.image || 'placeholder.webp'}
                cat={item.category || cat.title}
                title={item.title}
                desc={item.description || item.excerpt || ''}
                url={`/industri/${item.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default IndustriIndex;
