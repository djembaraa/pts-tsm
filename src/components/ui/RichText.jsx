import React from 'react';
import parse, { domToReact } from 'html-react-parser';
import Table, { TableHead, TableBody, TableRow, TableHeader, TableCell } from './Table';
import List, { ListItem } from './List';
import Button from './Button';
import { Link } from 'react-router-dom';
import { Info, CheckCircle2, AlertTriangle, Lightbulb } from 'lucide-react';

const RichText = ({ content, className = '' }) => {
  if (!content) return null;

  const options = {
    replace: (domNode) => {
      if (domNode.type === 'tag') {
        
        // 1. TABLE REPLACEMENT
        if (domNode.name === 'table') {
          return (
            <div className="overflow-x-auto my-8">
              <Table className={domNode.attribs?.class || ''}>
                {domToReact(domNode.children, options)}
              </Table>
            </div>
          );
        }
        if (domNode.name === 'thead') return <TableHead>{domToReact(domNode.children, options)}</TableHead>;
        if (domNode.name === 'tbody') return <TableBody>{domToReact(domNode.children, options)}</TableBody>;
        if (domNode.name === 'tr') return <TableRow>{domToReact(domNode.children, options)}</TableRow>;
        if (domNode.name === 'th') return <TableHeader className={domNode.attribs?.class || ''}>{domToReact(domNode.children, options)}</TableHeader>;
        if (domNode.name === 'td') {
          const isFirst = domNode.parent && domNode.parent.children.filter(n => n.name === 'td')[0] === domNode;
          return <TableCell className={domNode.attribs?.class || ''} isFirst={isFirst}>{domToReact(domNode.children, options)}</TableCell>;
        }

        // 2. LIST REPLACEMENT
        if (domNode.name === 'ul') return <List type="unordered" className={domNode.attribs?.class || ''}>{domToReact(domNode.children, options)}</List>;
        if (domNode.name === 'ol') return <List type="ordered" className={domNode.attribs?.class || ''}>{domToReact(domNode.children, options)}</List>;
        if (domNode.name === 'li') return <ListItem>{domToReact(domNode.children, options)}</ListItem>;

        // 3. LEGACY ARTICLE COMPONENTS REPLACEMENT
        if (domNode.name === 'div') {
          const classes = domNode.attribs?.class || '';
          
          // Ignore legacy related articles grid (handled dynamically by ArticleTemplate)
          if (classes.includes('related-grid') || classes.includes('rel-card') || classes.includes('rel-body') || classes.includes('rel-img')) {
            return <React.Fragment key={Math.random()} />;
          }
          
          // Ignore legacy wrapper for Artikel Terkait
          if (domNode.attribs?.style?.includes('margin-top')) {
            const hasRelatedTitle = domNode.children?.some(c => {
               if (c.name === 'h3' || c.name === 'h2') {
                  const tn = c.children?.find(n => n.type === 'text');
                  return tn && tn.data.includes('Artikel Terkait');
               }
               return false;
            });
            if (hasRelatedTitle) return <React.Fragment key={Math.random()} />;
          }
          
          if (classes.includes('app-tags')) {
            return (
              <div className="flex flex-wrap gap-2 my-5">
                {domToReact(domNode.children, options)}
              </div>
            );
          }
          
          if (classes.includes('info-box') || (domNode.attribs?.style && domNode.attribs.style.includes('var(--ice)'))) {
            return (
              <div className="my-8 p-6 bg-ice border border-border border-l-4 border-l-accent rounded-xl text-[0.95rem] text-navy">
                {domToReact(domNode.children, options)}
              </div>
            );
          }
          
          if (classes.includes('checklist-box')) {
            return (
              <div className="my-8 p-6 bg-gray border border-border border-l-4 border-l-blue rounded-xl text-[0.95rem]">
                {domToReact(domNode.children, options)}
              </div>
            );
          }
          
          if (classes.includes('mk-card')) {
            return (
              <div className="relative bg-white border border-border rounded-xl p-6 shadow-sm my-10 pt-8 mt-12">
                {domToReact(domNode.children, options)}
              </div>
            );
          }
          
          if (classes.includes('mk-num')) {
            return (
              <div className="absolute -top-6 -left-2 sm:-left-6 w-12 h-12 bg-gradient-to-br from-navy to-blue text-white font-condensed font-black text-xl rounded-full flex items-center justify-center shadow-md border-4 border-white">
                {domToReact(domNode.children, options)}
              </div>
            );
          }
          
          if (classes.includes('mk-labels')) {
            return (
              <div className="flex flex-wrap gap-3 my-4">
                {domToReact(domNode.children, options)}
              </div>
            );
          }
          
          if (classes.includes('mk-tip')) {
            return (
              <div className="mt-5 p-4 bg-blue/5 border border-blue/20 rounded-lg text-sm text-navy flex items-start gap-3">
                <Lightbulb className="text-accent shrink-0 mt-0.5" size={18} />
                <div>{domToReact(domNode.children, options)}</div>
              </div>
            );
          }

          if (classes.includes('opex-grid') || classes.includes('case-stats')) {
            return (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                {domToReact(domNode.children, options)}
              </div>
            );
          }

          if (classes.includes('opex-card') || classes.includes('cs-box')) {
            return (
              <div className="bg-white border border-border rounded-xl p-4 text-center shadow-sm flex flex-col items-center justify-center my-4 md:my-0">
                {domToReact(domNode.children, options)}
              </div>
            );
          }
          
          if (classes.includes('stat-box')) {
            return (
              <div className="bg-white border border-border rounded-xl p-4 text-center shadow-sm inline-flex flex-col items-center justify-center m-2 w-[calc(50%-1rem)] sm:w-[calc(33%-1rem)] align-top min-h-[120px]">
                {domToReact(domNode.children, options)}
              </div>
            );
          }
          
          if (classes.includes('cs-num') || classes.includes('sn')) {
            return (
              <div className="text-2xl md:text-3xl font-condensed font-black text-blue mb-1">
                {domToReact(domNode.children, options)}
              </div>
            );
          }
          
          if (classes.includes('cs-lbl') || classes.includes('sl')) {
            return (
              <div className="text-xs md:text-sm text-muted font-bold uppercase tracking-wider">
                {domToReact(domNode.children, options)}
              </div>
            );
          }
        }
        
        if (domNode.name === 'span') {
          const classes = domNode.attribs?.class || '';
          
          if (classes.includes('app-tag')) {
            return (
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue/10 text-blue font-bold text-[0.85rem] border border-blue/20">
                {domToReact(domNode.children, options)}
              </span>
            );
          }
          
          if (classes.includes('mk-bad')) {
            return (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-700 text-xs font-bold rounded-md border border-red-100">
                <AlertTriangle size={14} /> {domToReact(domNode.children, options)}
              </span>
            );
          }
          
          if (classes.includes('mk-good')) {
            return (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 text-xs font-bold rounded-md border border-green-100">
                <CheckCircle2 size={14} /> {domToReact(domNode.children, options)}
              </span>
            );
          }

          if (classes.includes('pct')) {
            return (
              <span className="block text-2xl md:text-3xl font-condensed font-black text-navy mb-1">
                {domToReact(domNode.children, options)}
              </span>
            );
          }
          
          if (classes.includes('label')) {
            return (
              <span className="block text-[0.75rem] text-muted font-bold uppercase tracking-wider">
                {domToReact(domNode.children, options)}
              </span>
            );
          }
        }

        // 4. HEADINGS REPLACEMENT
        if (domNode.name === 'h2' || domNode.name === 'h3') {
           const textNode = domNode.children?.find(c => c.type === 'text');
           if (textNode && textNode.data.includes('Artikel Terkait')) {
             return <React.Fragment key={Math.random()} />;
           }
           if (textNode && textNode.data === 'Pertanyaan yang Sering Diajukan' && domNode.attribs?.id === 'faq') {
             return <React.Fragment key={Math.random()} />;
           }
        }
        
        if (domNode.name === 'h2') {
          return (
            <h2 id={domNode.attribs?.id} className="font-condensed text-[1.8rem] font-extrabold text-navy mt-14 mb-5 border-b border-border pb-3 scroll-mt-32">
              {domToReact(domNode.children, options)}
            </h2>
          );
        }
        if (domNode.name === 'h3') {
          return (
            <h3 id={domNode.attribs?.id} className="font-condensed text-[1.4rem] font-bold text-navy mt-10 mb-4 scroll-mt-32">
              {domToReact(domNode.children, options)}
            </h3>
          );
        }
        if (domNode.name === 'h4') {
          return (
            <h4 id={domNode.attribs?.id} className="font-bold text-[1.1rem] text-navy mt-8 mb-3 scroll-mt-32">
              {domToReact(domNode.children, options)}
            </h4>
          );
        }

        // 5. LINK / BUTTON REPLACEMENT
        if (domNode.name === 'a') {
          const classes = domNode.attribs?.class || '';
          
          if (classes.includes('rel-card')) {
             return <React.Fragment key={Math.random()} />;
          }
          let rawHref = domNode.attribs?.href || '#';
          
          let variant = null;
          if (classes.includes('btn-primary') || classes.includes('btn')) variant = 'primary';
          else if (classes.includes('btn-blue')) variant = 'blue';
          else if (classes.includes('btn-white')) variant = 'white';
          else if (classes.includes('btn-ghost')) variant = 'ghost';

          // Route mapping
          let resolvedHref = rawHref;
          const isExternal = rawHref.startsWith('http') || rawHref.startsWith('mailto:') || rawHref.startsWith('tel:');
          const isAnchor = rawHref.startsWith('#');
          
          if (!isExternal && !isAnchor) {
            resolvedHref = resolvedHref.replace('.html', '');
            
            // Handle hash links attached to pages like layanan.html#maintenance -> layanan#maintenance
            let hash = '';
            const hashIndex = resolvedHref.indexOf('#');
            if (hashIndex !== -1) {
              hash = resolvedHref.substring(hashIndex);
              resolvedHref = resolvedHref.substring(0, hashIndex);
            }

            if (resolvedHref === 'kontak' || resolvedHref === '/kontak.html' || resolvedHref === 'kontak.html') {
              resolvedHref = '/kontak';
            } else if (resolvedHref.startsWith('artikel-')) {
              resolvedHref = `/artikel/${resolvedHref}`;
            } else if (resolvedHref.startsWith('produk-')) {
              resolvedHref = `/produk/${resolvedHref}`;
            } else if (resolvedHref.startsWith('layanan-')) {
              resolvedHref = `/layanan/${resolvedHref}`;
            } else if (resolvedHref.startsWith('industri-')) {
              resolvedHref = `/industri/${resolvedHref}`;
            } else if (resolvedHref.startsWith('portofolio-')) {
              resolvedHref = `/portofolio/${resolvedHref}`;
            } else if (!resolvedHref.startsWith('/')) {
              resolvedHref = `/${resolvedHref}`;
            }
            
            resolvedHref += hash;
          }

          if (variant) {
            // It's a button!
            if (isExternal) {
              return (
                <Button href={rawHref} variant={variant} target="_blank" rel="noopener noreferrer">
                  {domToReact(domNode.children, options)}
                </Button>
              );
            } else {
              return (
                <Button to={resolvedHref} variant={variant}>
                  {domToReact(domNode.children, options)}
                </Button>
              );
            }
          }
          
          // Regular internal links
          if (!isExternal && !isAnchor) {
             return (
               <Link to={resolvedHref} className={`${classes} text-blue font-bold hover:underline`}>
                 {domToReact(domNode.children, options)}
               </Link>
             )
          } else if (isAnchor) {
             return (
               <a href={rawHref} className={`${classes} text-blue font-bold hover:underline`} onClick={(e) => {
                 e.preventDefault();
                 const id = rawHref.substring(1);
                 const el = document.getElementById(id);
                 if(el) {
                   const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
                   window.scrollTo({top: y, behavior: 'smooth'});
                 }
               }}>
                 {domToReact(domNode.children, options)}
               </a>
             )
          }
        }
      }
    }
  };

  return (
    <div className={`prose prose-lg max-w-none prose-p:text-text prose-p:leading-[1.8] prose-li:text-text prose-a:text-blue prose-img:rounded-xl prose-strong:text-navy ${className}`}>
      {parse(content, options)}
    </div>
  );
};

export default RichText;
