import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';

const ArticleCard = React.forwardRef(({ 
  img, 
  bg = 'from-[#054a6e] to-[#1e90d6]', 
  cat, 
  date, 
  read, 
  title, 
  desc, 
  url, 
  author,
  tags = [],
  className = ''
}, ref) => {
  const imgSrc = img?.startsWith('/') || img?.startsWith('http') ? img : `/images/${img}`;

  return (
    <div ref={ref} className={`bg-white border border-border rounded-[10px] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] hover:border-accent group ${className}`}>
      <div className={`h-[192px] bg-gradient-to-br ${bg} relative overflow-hidden shrink-0`}>
        {img && (
          <img 
            src={imgSrc} 
            alt={title} 
            className="w-full h-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-105" 
            loading="lazy" 
          />
        )}
        {cat && (
          <span className="absolute top-[0.88rem] left-[0.88rem] bg-accent text-white text-[0.62rem] font-bold tracking-[0.1em] uppercase py-[0.26rem] px-[0.68rem] rounded-[4px] z-10 shadow-md">
            {cat}
          </span>
        )}
      </div>
      <div className="p-[1.25rem] flex-1 flex flex-col">
        {(date || read) && (
          <div className="text-[0.72rem] text-muted mb-[0.52rem] flex items-center gap-[0.35rem]">
            {date && <><Calendar size={13} className="text-accent" /> {date}</>}
            {date && read && <>&nbsp;&middot;&nbsp;</>}
            {read && <><Clock size={13} className="text-accent" /> {read}</>}
          </div>
        )}
        <h3 className="text-[0.96rem] font-bold text-navy leading-[1.42] mb-[0.52rem]">
          <Link to={url} className="hover:text-blue transition-colors">{title}</Link>
        </h3>
        <p className="text-[0.83rem] text-muted leading-[1.65] flex-1">{desc}</p>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-[0.4rem] mt-[0.8rem]">
            {tags.slice(0, 3).map((tag, i) => (
              <span key={i} className="text-[0.65rem] font-medium bg-ice text-navy border border-border px-[0.45rem] py-[0.15rem] rounded-[4px] whitespace-nowrap">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <div className="flex items-center justify-between p-[0.82rem_1.25rem] border-t border-border mt-auto">
        <span className="text-[0.72rem] text-muted font-medium flex items-center gap-[0.25rem]">
          <User size={13} /> {author || 'Tim TSM'}
        </span>
        <Link to={url} className="text-[0.72rem] font-bold text-blue tracking-[0.05em] uppercase flex items-center gap-[0.28rem] transition-all duration-300 group-hover:gap-[0.52rem]">
          Baca &rarr;
        </Link>
      </div>
    </div>
  );
});

export default ArticleCard;
