const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const legacyDir = path.join(__dirname, '../legacy_source');
const outputDir = path.join(__dirname, '../src/pages/generated');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Mapping of legacy CSS classes to Tailwind V4 classes
const classMap = {
  // Layout & Sections
  'container': 'max-w-[1240px] mx-auto px-6',
  'section': 'py-16',
  'section-sm': 'py-10',
  'page-hero': 'bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden',
  
  // Text & Typography
  'breadcrumb': 'text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap',
  'sec-header': 'text-center max-w-[600px] mx-auto mb-[3rem]',
  'sec-tag': 'inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-ice px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem] border border-border',
  'divider': 'w-[36px] h-[3px] bg-gradient-to-r from-blue to-accent rounded-[2px] mx-auto mt-[0.85rem]',
  
  // Prose
  'prose': 'prose max-w-none text-text',
  
  // Forms & Inputs
  'form-group': 'mb-[0.92rem]',
  'form-row': 'grid grid-cols-1 md:grid-cols-2 gap-[0.92rem]',
  
  // Buttons
  'btn-primary': 'inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-accent text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,180,216,0.32)] hover:bg-white hover:text-blue hover:-translate-y-[2px]',
  'btn-blue': 'inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-blue text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-blue hover:text-white hover:-translate-y-[2px]',
  'btn-white': 'inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]',
  'btn-ghost': 'inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white',
  'btn-submit': 'w-full py-[0.82rem] bg-blue text-white font-barlow font-bold text-[0.9rem] tracking-[0.08em] uppercase rounded-[6px] cursor-pointer transition-all duration-300 hover:bg-navy hover:-translate-y-[1px]',
  
  // Article Cards
  'art-card': 'bg-white rounded-[10px] overflow-hidden border border-border flex flex-col transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] hover:border-accent group',
  'art-img': 'h-[192px] flex items-center justify-center text-[3.2rem] relative overflow-hidden shrink-0',
  'art-badge': 'absolute top-[0.88rem] left-[0.88rem] bg-accent text-white text-[0.62rem] font-bold tracking-[0.1em] uppercase py-[0.26rem] px-[0.68rem] rounded-[4px] z-10',
  'art-body': 'p-[1.25rem] flex-1 flex flex-col',
  'art-meta': 'text-[0.72rem] text-muted mb-[0.52rem]',
  'art-footer': 'flex items-center justify-between p-[0.82rem_1.25rem] border-t border-border mt-auto',
  'art-author': 'text-[0.72rem] text-muted font-medium',
  'art-readmore': 'text-[0.72rem] font-bold text-blue tracking-[0.05em] uppercase flex items-center gap-[0.28rem] transition-all duration-300 group-hover:gap-[0.52rem]',
  
  // CTA
  'cta-band': 'bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white',
  'cta-actions': 'flex gap-4 justify-center flex-wrap',
  
  // Specific pages
  'prod-layout': 'grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[3rem] items-start',
  'prod-sticky': 'lg:sticky lg:top-[88px]',
  'prod-hero': 'h-[300px] rounded-[14px] flex items-center justify-center text-[8rem] mb-[2rem] text-white',
  'prod-h2': 'font-condensed text-[1.6rem] font-black text-navy mb-[1rem]',
  'feat-list': 'flex flex-col text-[0.9rem] text-text',
  'app-tags': 'flex flex-wrap gap-2 mt-[0.8rem]',
  'app-tag': 'text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text',
  
  'sidebar-box': 'bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem]',
  'toc-list': 'flex flex-col',
  'qc-card': 'bg-white border border-border rounded-[10px] p-[1.4rem] flex items-center gap-[0.9rem] transition-all duration-300 hover:-translate-y-[3px]',
  'qc-ico': 'w-[44px] h-[44px] bg-ice rounded-[8px] flex items-center justify-center text-[1.3rem] shrink-0',
  'spec-table': 'w-full border-collapse my-[1.5rem] text-[0.9rem]'
};

// Emoji to Lucide Icon mapping
const emojiMap = {
  '📋': 'ClipboardList',
  '🛠️': 'Wrench',
  '🛠': 'Wrench',
  '🏭': 'Factory',
  '🧮': 'Calculator',
  '⚙️': 'Settings',
  '⚙': 'Settings',
  '💧': 'Droplet',
  '🌊': 'Waves',
  '✅': 'CheckCircle2',
  '🛡️': 'Shield',
  '🛡': 'Shield',
  '🥇': 'Award',
  '🔬': 'Microscope',
  '📦': 'Package',
  '🏗️': 'Building',
  '🏗': 'Building',
  '🏥': 'Activity',
  '🚢': 'Ship',
  '🔋': 'Zap',
  '🧑‍🔬': 'FlaskConical',
  '🌍': 'Globe'
};

function processHtml(html) {
  const $ = cheerio.load(html, { decodeEntities: false });
  
  let contentHtml = '';
  $('body').children().each((i, el) => {
    const tagName = (el.tagName || '').toLowerCase();
    const className = $(el).attr('class') || '';
    if (tagName === 'script' || tagName === 'nav' || tagName === 'footer') return;
    if (className.includes('navbar') || className.includes('footer') || className.includes('topbar')) return;
    
    contentHtml += $.html(el) + '\n';
  });
  
  const $content = cheerio.load(contentHtml, { decodeEntities: false }, false);
  
  // Map standard classes
  $content('*').each((i, el) => {
    let classes = $(el).attr('class');
    if (classes) {
      let newClasses = [];
      classes.split(' ').forEach(cls => {
        cls = cls.trim();
        if (classMap[cls]) {
          newClasses.push(classMap[cls]);
        } else {
          newClasses.push(cls);
        }
      });
      $(el).attr('class', newClasses.join(' '));
    }
  });

  // Handle specific nested styling rules from style.css
  $content('.sec-header h2').addClass('font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold text-navy leading-[1.15] mb-[0.65rem]');
  $content('.sec-header p').addClass('text-[0.88rem] text-muted leading-[1.75]');
  
  $content('.prose h2').addClass('font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]');
  $content('.prose h3').addClass('text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]');
  $content('.prose p').addClass('text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]');
  $content('.prose ul, .prose ol').addClass('ml-[1.5rem] my-[1.05rem]');
  $content('.prose ul').addClass('list-disc');
  $content('.prose ol').addClass('list-decimal');
  $content('.prose li').addClass('text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]');
  $content('.prose blockquote').addClass('border-l-4 border-accent p-[0.78rem_1.4rem] bg-ice rounded-r-md my-[1.5rem] italic text-muted');
  $content('.prose .info-box').addClass('bg-ice border border-border rounded-[10px] p-[1.2rem_1.5rem] my-[1.75rem]');
  $content('.prose .info-box strong').addClass('block text-[0.7rem] font-bold uppercase tracking-[0.1em] text-accent mb-[0.38rem]');
  
  $content('.page-hero h1').addClass('font-condensed text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold leading-[1.1] mb-[0.65rem]');
  $content('.page-hero p').addClass('text-[0.9rem] opacity-80 max-w-[540px] leading-[1.72]');
  
  $content('.art-body h3').addClass('text-[0.96rem] font-bold text-navy leading-[1.42] mb-[0.52rem]');
  $content('.art-body p').addClass('text-[0.83rem] text-muted leading-[1.65] flex-1');
  
  $content('.sidebar-box h4').addClass('text-[0.7rem] font-bold tracking-[0.12em] uppercase text-muted mb-[0.95rem] pb-[0.48rem] border-b border-border');
  
  $content('.feat-list li').addClass('mb-[0.6rem]');
  
  $content('.form-group label').addClass('block text-[0.74rem] font-bold uppercase tracking-[0.06em] text-muted mb-[0.36rem]');
  $content('.form-group input, .form-group select, .form-group textarea').addClass('w-full py-[0.66rem] px-[0.96rem] bg-white border border-border rounded-[6px] font-barlow text-[0.88rem] text-text outline-none transition-all duration-300 focus:border-blue focus:ring-[3px] focus:ring-blue/10');
  
  $content('.spec-table th').addClass('bg-navy text-white p-[0.7rem_1rem] text-left font-semibold');
  $content('.spec-table td').addClass('p-[0.65rem_1rem] border-b border-border');
  $content('.spec-table tr:nth-child(even) td').addClass('bg-gray');

  // Related Link
  $content('.related-link').addClass('text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block');
  
  // Link modifications
  $content('a').each((i, el) => {
    let href = $(el).attr('href');
    if (href && href.endsWith('.html')) {
      href = href.replace('.html', '');
      
      if (href.includes('-')) {
          let parts = href.split('-');
          let first = parts[0];
          if (first === 'porto') first = 'portofolio';
          href = first + '/' + parts.slice(1).join('-');
      }

      if (!href.startsWith('/')) href = '/' + href;
      $(el).attr('to', href);
      $(el).removeAttr('href');
      el.tagName = 'Link';
    }
  });

  let jsx = $content.html();
  
  // Collect all matched lucide icons
  const usedIcons = new Set(['ArrowRight']); 
  
  // Replace Emojis with Lucide Icons
  for (const [emoji, iconName] of Object.entries(emojiMap)) {
    if (jsx.includes(emoji)) {
      usedIcons.add(iconName);
      jsx = jsx.replace(new RegExp(emoji, 'g'), `<${iconName} className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" />`);
    }
  }

  // Convert standard attributes
  jsx = jsx.replace(/class=/g, 'className=');
  jsx = jsx.replace(/for=/g, 'htmlFor=');
  
  // Remove string-based event handlers
  jsx = jsx.replace(/onclick="[^"]*"/gi, '');
  jsx = jsx.replace(/oninput="[^"]*"/gi, '');
  jsx = jsx.replace(/onsubmit="[^"]*"/gi, '');
  
  jsx = jsx.replace(/srcset=/gi, 'srcSet=');
  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
  
  // Fix empty src
  jsx = jsx.replace(/src=""/g, 'src="/images/placeholder.webp"');
  
  // Fix nested a tags changing to Link incorrectly by Cheerio
  jsx = jsx.replace(/<a /g, '<Link ').replace(/<\/a>/g, '</Link>');
  jsx = jsx.replace(/<link /g, '<Link ').replace(/<\/link>/g, '</Link>');
  
  // Remove unnecessary reveal/animated classes
  jsx = jsx.replace(/reveal/g, '');
  jsx = jsx.replace(/visible/g, '');

  // Style conversion
  jsx = jsx.replace(/style="([^"]*)"/g, (match, styleStr) => {
    const styleObj = {};
    styleStr.split(';').forEach(rule => {
      if (!rule.trim()) return;
      const [key, value] = rule.split(':').map(s => s.trim());
      if (key && value) {
        let camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
        if (camelKey === 'backgroundImage' && value.includes('url')) {
          const urlMatch = value.match(/url\(['"]?(.*?)['"]?\)/);
          if (urlMatch) {
             let fixedUrl = urlMatch[1];
             if (fixedUrl.startsWith('assets/')) fixedUrl = '/' + fixedUrl;
             styleObj[camelKey] = `url(${fixedUrl})`;
          }
        } else {
          styleObj[camelKey] = value;
        }
      }
    });
    return `style={${JSON.stringify(styleObj)}}`;
  });
  
  // Fix legacy image paths
  jsx = jsx.replace(/src="assets\//g, 'src="/');
  jsx = jsx.replace(/srcSet="assets\//g, 'srcSet="/');
  
  // Self closing tags
  ['img', 'br', 'hr', 'input', 'meta', 'source'].forEach(tag => {
    const tagRegex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, 'gi');
    jsx = jsx.replace(tagRegex, `<${tag}$1 />`);
  });

  return { jsx, usedIcons };
}

function processAllFiles() {
  const files = fs.readdirSync(legacyDir).filter(f => f.endsWith('.html'));
  const routes = [];
  
  files.forEach(file => {
    if (file === 'index.html' || file === 'tentang.html' || file === 'kontak.html') return;
    
    const html = fs.readFileSync(path.join(legacyDir, file), 'utf8');
    const { jsx, usedIcons } = processHtml(html);
    
    const componentName = file
      .replace('.html', '')
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');
      
    let iconImportStr = '';
    if (usedIcons.size > 0) {
      iconImportStr = `import { ${Array.from(usedIcons).join(', ')} } from 'lucide-react';\n`;
    }

    const componentContent = `import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
${iconImportStr}

const ${componentName} = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      ${jsx}
    </>
  );
};

export default ${componentName};
`;

    fs.writeFileSync(path.join(outputDir, componentName + '.jsx'), componentContent);
    routes.push({ file: file.replace('.html', ''), component: componentName });
    console.log(`Generated ${componentName}`);
  });
  
  // Generate routes snippet
  let routeImports = routes.map(r => `import ${r.component} from './pages/generated/${r.component}';`).join('\n');
  let routeDefs = routes.map(r => {
    let routePath = r.file;
    if (routePath.includes('-')) {
      let parts = routePath.split('-');
      let first = parts[0];
      if (first === 'porto') first = 'portofolio';
      routePath = first + '/' + parts.slice(1).join('-');
    }
    return `<Route path="/${routePath}" element={<${r.component} />} />`;
  }).join('\n          ');
  
  fs.writeFileSync(path.join(__dirname, 'routes-snippet.txt'), routeImports + '\n\n' + routeDefs);
  console.log('Done! 91 pages migrated.');
}

processAllFiles();
