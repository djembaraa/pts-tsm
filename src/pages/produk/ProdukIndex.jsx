import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ui/ProductCard';
import Button from '../../components/ui/Button';
import { products } from '../../data/mockData_products';

const ProdukIndex = () => {
  const [activeCat, setActiveCat] = useState('Semua');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const observerRef = useRef(null);
  
  const addToRefs = (el) => {
    if (el && observerRef.current) {
      // Small delay to ensure styles are ready before observing
      setTimeout(() => observerRef.current.observe(el), 50);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observerRef.current.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  const categories = ['Semua', ...new Set(products.map(p => p.category))].filter(Boolean);
  
  const filteredProducts = activeCat === 'Semua' 
    ? products 
    : products.filter(p => p.category === activeCat);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <>
      {/* ══ HERO SECTION ══ */}
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[4rem] pb-[3.5rem] relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 relative z-10 text-center">
          <div className="text-[0.75rem] opacity-70 mb-[1rem] flex items-center justify-center gap-[0.42rem] flex-wrap">
            <Link to="/" className="hover:text-ice transition-colors">Beranda</Link> › Produk
          </div>
          <h1 className="font-condensed text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.1] mb-[1rem]">Sistem & Produk Water Treatment</h1>
          <p className="text-[0.95rem] opacity-90 max-w-[700px] mx-auto leading-relaxed">
            Eksplorasi lini produk pengolahan air kami yang didesain khusus untuk keandalan maksimal, mulai dari skala komersial hingga industri berat.
          </p>
        </div>
      </div>
      
      <section className="py-[4rem] bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          
          <div ref={addToRefs} className="text-center max-w-[600px] mx-auto mb-12 opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0">
            <span className="inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-ice px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem] border border-border">Katalog Produk</span>
            <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold text-navy leading-[1.15] mb-[0.65rem]">Teknologi Pengolahan Air</h2>
            <p className="text-[0.88rem] text-muted leading-[1.75]">Solusi spesifik untuk berbagai tantangan air baku, dibangun dengan komponen kelas dunia untuk durabilitas terbaik.</p>
            <div className="w-[36px] h-[3px] bg-gradient-to-r from-blue to-accent rounded-[2px] mx-auto mt-[0.85rem]"></div>
          </div>

          <div ref={addToRefs} className="flex flex-wrap justify-center gap-2 mb-10 pb-4 opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0">
            {categories.map((cat) => (
              <Button
                key={cat}
                onClick={() => {
                  setActiveCat(cat);
                  setCurrentPage(1);
                }}
                variant={activeCat === cat ? 'solid-blue' : 'blue'}
                className="!py-2 !px-5 !rounded-full !text-[0.75rem]"
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]">
            {currentProducts.map(item => (
              <ProductCard 
                key={`${item.id}-${currentPage}`}
                ref={addToRefs}
                className="opacity-0 translate-y-[22px] [&.visible]:opacity-100 [&.visible]:translate-y-0"
                img={item.image || 'placeholder.webp'}
                cat={item.category}
                title={item.title}
                desc={item.description || item.excerpt || ''}
                specs={item.specs ? item.specs.slice(0, 3).map(s => s.split(':')[0]) : []}
                url={`/produk/${item.slug}`}
              />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-[3rem]">
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`w-[40px] h-[40px] rounded-full flex items-center justify-center font-bold transition-all cursor-pointer ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-ice text-navy hover:bg-blue hover:text-white'}`}
              >
                &larr;
              </button>
              
              {[...Array(totalPages)].map((_, idx) => {
                const page = idx + 1;
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-[40px] h-[40px] rounded-full flex items-center justify-center font-bold transition-all cursor-pointer ${currentPage === page ? 'bg-navy text-white' : 'bg-ice text-navy hover:bg-blue hover:text-white'}`}
                  >
                    {page}
                  </button>
                );
              })}

              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`w-[40px] h-[40px] rounded-full flex items-center justify-center font-bold transition-all cursor-pointer ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-ice text-navy hover:bg-blue hover:text-white'}`}
              >
                &rarr;
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
export default ProdukIndex;
