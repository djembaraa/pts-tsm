import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = React.forwardRef(({ 
  img, 
  imgAlt, 
  badge, 
  cat, 
  title, 
  desc, 
  specs, 
  url, 
  urlText = 'Detail \u2192', 
  footText = 'Mulai dari konsultasi',
  className = ''
}, ref) => {
  const imgSrc = img?.startsWith('/') || img?.startsWith('http') ? img : `/images/${img}`;

  return (
    <div ref={ref} className={`bg-white border border-border rounded-lg overflow-hidden transition-all duration-[600ms] hover:-translate-y-[4px] hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] hover:border-accent group flex flex-col ${className}`}>
      <div className="h-[175px] overflow-hidden shrink-0 relative bg-navy">
        <img src={imgSrc} alt={imgAlt || title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85" loading="lazy" />
        {badge && (
          <span className="absolute top-[0.88rem] left-[0.88rem] bg-accent text-white text-[0.62rem] font-bold tracking-[0.1em] uppercase py-[0.26rem] px-[0.68rem] rounded-[4px] z-10 shadow-md">
            {badge}
          </span>
        )}
      </div>
      <div className="p-[1.25rem] flex flex-col flex-1">
        <div className="text-[0.62rem] font-bold tracking-[0.12em] uppercase text-accent mb-[0.32rem]">{cat}</div>
        <h3 className="text-[0.9rem] font-bold text-navy mb-[0.38rem]">{title}</h3>
        <p className="text-[0.79rem] text-muted leading-[1.62] mb-[0.8rem] flex-1">{desc}</p>
        
        {specs && specs.length > 0 && (
          <div className="flex flex-wrap gap-[0.4rem] mb-[0.8rem]">
            {specs.map((spec, i) => (
              <span key={i} className="text-[0.65rem] font-medium bg-ice text-navy border border-border px-[0.45rem] py-[0.15rem] rounded-[4px] whitespace-nowrap">
                {spec}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex items-center justify-between border-t border-border pt-[0.85rem] mt-auto">
          <span className="text-[0.68rem] text-muted font-medium">{footText}</span>
          <Link to={url} className="text-[0.72rem] font-bold text-blue tracking-[0.05em] uppercase flex items-center gap-[0.28rem] transition-all duration-300 group-hover:gap-[0.52rem]">
            {urlText}
          </Link>
        </div>
      </div>
    </div>
  );
});

export default ProductCard;
