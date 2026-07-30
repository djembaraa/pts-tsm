const fs = require('fs');

const maps = {
  'src/pages/produk/ProdukIndex.jsx': 'mockData_products',
  'src/pages/produk/ProdukDetail.jsx': 'mockData_products',
  'src/pages/artikel/ArtikelIndex.jsx': 'mockData_articles',
  'src/pages/artikel/ArtikelDetail.jsx': 'mockData_articles',
  'src/pages/portofolio/PortofolioIndex.jsx': 'mockData_portfolios',
  'src/pages/portofolio/PortofolioDetail.jsx': 'mockData_portfolios',
  'src/pages/layanan/LayananIndex.jsx': 'mockData_services',
  'src/pages/layanan/LayananDetail.jsx': 'mockData_services',
  'src/pages/industri/IndustriIndex.jsx': 'mockData_industries',
  'src/pages/industri/IndustriDetail.jsx': 'mockData_industries',
  'src/pages/Home.jsx': 'mockData_products' // Wait, Home might import multiple!
};

for (const [file, mock] of Object.entries(maps)) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/from '\.\.\/\.\.\/data\/mockData'/g, "from '../../data/" + mock + "'");
    fs.writeFileSync(file, content);
    console.log('Updated', file);
  }
}
