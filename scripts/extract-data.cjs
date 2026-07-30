const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const sourceDir = path.join(__dirname, '../legacy_source');
const outputDir = path.join(__dirname, '../src/data');

function extractCategoryFiles(prefix) {
  const files = fs.readdirSync(sourceDir).filter(f => f.startsWith(prefix) && f.endsWith('.html'));
  const results = [];

  for (const file of files) {
    if (file === 'produk.html' || file === 'artikel.html' || file === 'portofolio.html' || file === 'industri.html' || file === 'layanan.html') continue;
    
    const html = fs.readFileSync(path.join(sourceDir, file), 'utf8');
    const $ = cheerio.load(html);
    
    const slug = file.replace('.html', '').replace(prefix + '-', '');
    
    // Title is usually in .page-hero h1, .cs-hero h1, or title
    let title = $('.page-hero h1, .cs-hero h1').first().text().trim();
    if (!title) {
       title = $('title').first().text().trim().split('|')[0].trim();
    }
    
    let description = $('meta[name="description"]').attr('content') || '';
    
    let imageSrc = $('meta[property="og:image"]').attr('content') || '';
    let image = imageSrc ? imageSrc.split('/').pop() : '';
    if (!image) {
       image = $('.cs-hero img, .prod-content img, article img').first().attr('src') || '';
       image = image.split('/').pop();
    }

    // Category parsing logic based on tags or text
    let category = '';
    if (prefix === 'produk') category = 'Produk TSM';
    else if (prefix === 'artikel') category = 'Edukasi';
    else if (prefix === 'porto') category = 'Studi Kasus';
    else if (prefix === 'industri') category = 'Sektor Industri';
    else if (prefix === 'layanan') category = 'Layanan Profesional';

    // Spec extraction
    const specs = [];
    $('.spec-table tr').each((i, el) => {
      const label = $(el).find('td').eq(0).text().trim();
      const val = $(el).find('td').eq(1).text().trim();
      if (label && val) specs.push(`${label}: ${val}`);
    });

    // Content extraction
    let content = '';
    const gridArea = $('.container .grid > div').first();
    const prodLayoutArea = $('.prod-layout > div').first();
    
    let cloned = null;
    if (prodLayoutArea.length && !prodLayoutArea.hasClass('prod-sticky')) {
       cloned = prodLayoutArea.clone();
    } else if (gridArea.length && !gridArea.hasClass('sidebar-box')) {
       cloned = gridArea.clone();
    } else if ($('.prod-content').length) {
       cloned = $('.prod-content').clone();
    } else if ($('.cs-content').length) {
       cloned = $('.cs-content').clone();
    } else if ($('.article-content').length) {
       cloned = $('.article-content').clone();
    } else if ($('article').length) {
       cloned = $('article').clone();
    } else if ($('.container main').length) {
       cloned = $('.container main').clone();
    } else {
       cloned = $('main').clone();
    }

    const faqs = [];
    if (cloned) {
      cloned.find('.prod-hero').remove(); 
      
      // Find FAQ section
      const faqH2 = cloned.find('h2:contains("Pertanyaan yang Sering Ditanyakan")');
      if (faqH2.length) {
        const faqDiv = faqH2.next('div.reveal');
        if (faqDiv.length) {
           faqDiv.find('h3').each((i, el) => {
             const question = $(el).text().trim();
             let answer = '';
             let nextEl = $(el).next();
             while (nextEl.length && nextEl[0].name !== 'h3') {
               // extract outerHTML of answer elements
               answer += $.html(nextEl);
               nextEl = nextEl.next();
             }
             if (question && answer) {
               faqs.push({ question, answer });
             }
           });
           faqH2.remove();
           faqDiv.remove();
        }
      }
      
      content = cloned.html() || '';
    }

    // Clean up content HTML to remove scripts, styles, and unwanted wrappers
    if (content) {
      const $content = cheerio.load(content, null, false);
      $content('script, style').remove();
      // Remove any inline styles if we want clean code, though we can keep HTML tags.
      content = $content.html().trim();
    }

    results.push({
      id: slug,
      slug,
      title,
      category,
      image,
      description,
      specs: specs.length ? specs : undefined,
      faqs: faqs.length ? faqs : undefined,
      content
    });
  }
  return results;
}

// Generate the 5 mock data files
const types = [
  { prefix: 'produk', varName: 'products', out: 'mockData_products.js' },
  { prefix: 'artikel', varName: 'articles', out: 'mockData_articles.js' },
  { prefix: 'porto', varName: 'portfolios', out: 'mockData_portfolios.js' },
  { prefix: 'industri', varName: 'industries', out: 'mockData_industries.js' },
  { prefix: 'layanan', varName: 'services', out: 'mockData_services.js' }
];

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

types.forEach(t => {
  const data = extractCategoryFiles(t.prefix);
  const jsContent = `export const ${t.varName} = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(path.join(outputDir, t.out), jsContent);
  console.log(`Generated ${t.out} with ${data.length} records.`);
});
