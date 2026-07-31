import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Phone } from 'lucide-react';
import ArticleCard from '../../components/ui/ArticleCard';
import { articles } from '../../data/mockData_articles';

const ArtikelIndex = () => {
  const [activeCat, setActiveCat] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const observerRef = useRef(null);
  
  const addToRefs = (el) => {
    if (el && observerRef.current) {
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

  const categories = ['Semua', ...new Set(articles.map(a => a.category))].filter(Boolean);
  
  const filteredArticles = articles.filter(a => {
    const matchCat = activeCat === 'Semua' || a.category === activeCat;
    const searchLower = searchQuery.toLowerCase();
    const matchSearch = a.title.toLowerCase().includes(searchLower) || 
                        (a.description && a.description.toLowerCase().includes(searchLower));
    return matchCat && matchSearch;
  });

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const currentArticles = filteredArticles.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  // Reset pagination when category or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCat, searchQuery]);

  return (
    <>
      {/* ══ HERO SECTION ══ */}
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[4rem] pb-[3.5rem] relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 relative z-10 text-center">
          <div className="text-[0.75rem] opacity-70 mb-[1rem] flex items-center justify-center gap-[0.42rem] flex-wrap">
            <Link to="/" className="hover:text-ice transition-colors">Beranda</Link> › Artikel
          </div>
          <h1 className="font-condensed text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.1] mb-[1rem]">Artikel & Edukasi</h1>
          <p className="text-[0.95rem] opacity-90 max-w-[700px] mx-auto leading-relaxed">
            Wawasan terkini seputar teknologi reverse osmosis, desalinasi, tips perawatan, dan perkembangan industri water treatment Indonesia.
          </p>
        </div>
      </div>
      
      <section className="py-[4rem] bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-[4rem] items-start">
            
            {/* MAIN CONTENT */}
            <div className="main-content">
              {filteredArticles.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1.5rem]">
                    {currentArticles.map(item => (
                      <ArticleCard 
                        key={`${item.id}-${currentPage}`}
                        ref={addToRefs}
                        className="opacity-0 translate-y-[22px] [&.visible]:opacity-100 [&.visible]:translate-y-0"
                        img={item.image || 'placeholder.webp'}
                        cat={item.category || item.cat}
                        title={item.title}
                        desc={item.description || item.excerpt || ''}
                        date={item.date}
                        read={item.readTime}
                        author={item.author}
                        tags={item.tags ? item.tags.slice(0, 3) : []}
                        url={`/artikel/${item.slug}`}
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
                </>
              ) : (
                <div className="text-center py-[4rem] bg-ice rounded-2xl border border-border">
                  <p className="text-muted text-[1.1rem]">Tidak ada artikel yang sesuai dengan pencarian Anda.</p>
                  <button onClick={() => { setSearchQuery(''); setActiveCat('Semua'); }} className="mt-4 text-blue font-bold hover:underline">Reset Pencarian</button>
                </div>
              )}
            </div>

            {/* SIDEBAR */}
            <aside className="lg:sticky lg:top-[120px]">
              
              {/* Cari Artikel */}
              <div ref={addToRefs} className="bg-white border border-border rounded-2xl p-6 shadow-sm mb-6 opacity-0 translate-y-[22px] [&.visible]:opacity-100 [&.visible]:translate-y-0 transition-all duration-[620ms] ease-out">
                <h3 className="font-condensed text-xl font-bold text-navy mb-4 border-b border-border pb-3">Cari Artikel</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={18} />
                  <input 
                    type="text" 
                    placeholder="Kata kunci..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-lg text-sm focus:outline-none focus:border-blue transition-colors bg-white text-text"
                  />
                </div>
              </div>
              
              {/* Artikel Populer */}
              <div ref={addToRefs} className="bg-white border border-border rounded-2xl p-6 shadow-sm mb-6 opacity-0 translate-y-[22px] [&.visible]:opacity-100 [&.visible]:translate-y-0 transition-all duration-[620ms] ease-out">
                <h3 className="font-condensed text-xl font-bold text-navy mb-4 border-b border-border pb-3">Artikel Populer</h3>
                <div className="flex flex-col gap-4">
                  {articles.slice(0, 5).map((pop, i) => (
                    <div key={pop.id} className="flex gap-3 group items-start border-b border-border pb-3 last:border-0 last:pb-0">
                      <span className="font-condensed text-2xl font-black text-accent opacity-50 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                      <div>
                        <Link to={`/artikel/${pop.slug}`} className="text-sm font-bold text-navy group-hover:text-blue transition-colors line-clamp-2 leading-snug">{pop.title}</Link>
                        <div className="text-[0.7rem] text-muted mt-1">{pop.date} &middot; {pop.readTime}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Topik Populer */}
              <div ref={addToRefs} className="bg-white border border-border rounded-2xl p-6 shadow-sm mb-6 opacity-0 translate-y-[22px] [&.visible]:opacity-100 [&.visible]:translate-y-0 transition-all duration-[620ms] ease-out">
                <h3 className="font-condensed text-xl font-bold text-navy mb-4 border-b border-border pb-3">Topik Populer</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button 
                      key={cat}
                      onClick={() => setActiveCat(cat)}
                      className={`text-[0.75rem] font-bold px-3 py-1.5 rounded-full border transition-all ${activeCat === cat ? 'bg-blue text-white border-blue' : 'bg-ice text-navy border-border hover:border-blue hover:text-white'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div ref={addToRefs} className="bg-gradient-to-br from-navy to-blue border border-border rounded-2xl p-6 text-center shadow-sm opacity-0 translate-y-[22px] [&.visible]:opacity-100 [&.visible]:translate-y-0 transition-all duration-[620ms] ease-out">
                <h4 className="font-bold text-white mb-2">Butuh Bantuan?</h4>
                <p className="text-sm text-white/80 mb-4 leading-relaxed">Konsultasikan kebutuhan water treatment Anda dengan tim ahli kami secara gratis.</p>
                <Link to="/kontak" className="block w-full py-3 bg-white text-navy font-bold rounded-lg hover:bg-ice transition-colors flex items-center justify-center gap-2">
                  <Phone size={16} className="text-accent" /> Konsultasi Gratis
                </Link>
              </div>

            </aside>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default ArtikelIndex;
