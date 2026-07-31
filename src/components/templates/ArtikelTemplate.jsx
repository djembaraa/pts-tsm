import React from 'react';
import { Link } from 'react-router-dom';
import RichText from '../ui/RichText';
import { articles } from '../../data/mockData_articles';
import { services } from '../../data/mockData_services';
import { ChevronRight } from 'lucide-react';

const extractTOC = (htmlContent) => {
  if (!htmlContent) return [];
  const regex = /<h2[^>]*id="([^"]+)"[^>]*>([^<]+)<\/h2>/g;
  const toc = [];
  let match;
  while ((match = regex.exec(htmlContent)) !== null) {
    toc.push({ id: match[1], text: match[2].replace(/&amp;/g, '&').trim() });
  }
  return toc;
};

const ArtikelTemplate = ({ data }) => {
  const toc = extractTOC(data.content);
  
  // Get 3 related articles (same category or random)
  const relatedArticles = articles
    .filter(a => a.id !== data.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
    
  // Get 4 services
  const relatedServices = services.slice(0, 4);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[4rem] pb-[3.5rem] relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 relative z-10 text-center">
          <div className="text-[0.75rem] font-bold tracking-[0.1em] uppercase text-accent mb-[1rem] flex items-center justify-center gap-[0.5rem] flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Beranda</Link> <span>›</span>
            <Link to="/artikel" className="hover:text-white transition-colors">Artikel</Link> <span>›</span>
            <span className="text-white opacity-70">{data.category}</span>
          </div>
          <h1 className="font-condensed text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.1] mb-[1.2rem] max-w-[800px] mx-auto">
            {data.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm opacity-80 mt-6">
            <span>By <strong>{data.author || 'Tim TSM'}</strong></span>
            <span>•</span>
            <span>{data.date}</span>
            <span>•</span>
            <span>{data.readTime}</span>
          </div>
        </div>
      </div>

      <section className="py-[4rem]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-[4rem] items-start">
            
            {/* MAIN CONTENT */}
            <div className="main-content">
              {data.image && (
                <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border">
                  <img src={`/images/${data.image}`} alt={data.title} className="w-full h-auto object-cover max-h-[450px]" />
                </div>
              )}
              
              <RichText content={data.content} />
              
              <div className="mt-12 pt-8 border-t border-border flex justify-between items-center">
                <Link to="/artikel" className="inline-flex items-center gap-2 text-blue font-bold hover:text-navy transition-colors">
                  ← Kembali ke Artikel
                </Link>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-ice text-navy border border-border text-xs font-bold uppercase rounded-md">{data.category}</span>
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="lg:sticky lg:top-[120px]">
              
              {/* Daftar Isi */}
              {toc.length > 0 && (
                <div className="bg-white border border-border rounded-2xl p-6 shadow-sm mb-6">
                  <h3 className="font-condensed text-xl font-bold text-navy mb-4 border-b border-border pb-3">Daftar Isi</h3>
                  <ul className="space-y-3">
                    {toc.map((item, idx) => (
                      <li key={idx}>
                        <a 
                          href={`#${item.id}`} 
                          onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById(item.id);
                            if(el) {
                              const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
                              window.scrollTo({top: y, behavior: 'smooth'});
                            }
                          }}
                          className="text-[0.88rem] text-muted hover:text-blue transition-colors flex items-start gap-2"
                        >
                          <span className="text-accent mt-1 opacity-70"><ChevronRight size={14} /></span>
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Layanan Terkait */}
              <div className="bg-white border border-border rounded-2xl p-6 shadow-sm mb-6">
                <h3 className="font-condensed text-xl font-bold text-navy mb-4 border-b border-border pb-3">Layanan Terkait</h3>
                <ul className="space-y-3">
                  {relatedServices.map(srv => (
                    <li key={srv.id}>
                      <Link to={`/layanan/${srv.slug}`} className="text-[0.88rem] font-bold text-navy hover:text-blue transition-colors flex items-start gap-2">
                        <span className="text-accent mt-0.5 opacity-70"><ChevronRight size={16} /></span>
                        {srv.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Artikel Terkait */}
              <div className="bg-white border border-border rounded-2xl p-6 shadow-sm mb-6">
                <h3 className="font-condensed text-xl font-bold text-navy mb-4 border-b border-border pb-3">Artikel Terkait</h3>
                <div className="flex flex-col gap-4">
                  {relatedArticles.map((art, i) => (
                    <div key={art.id} className="border-b border-border pb-4 last:border-0 last:pb-0">
                      <Link to={`/artikel/${art.slug}`} className="text-sm font-bold text-navy hover:text-blue transition-colors line-clamp-2 leading-snug mb-1">
                        {art.title}
                      </Link>
                      <div className="text-[0.7rem] text-muted">{art.date} &middot; {art.readTime}</div>
                    </div>
                  ))}
                </div>
              </div>

            </aside>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default ArtikelTemplate;
