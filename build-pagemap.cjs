const fs = require('fs');
const path = require('path');

const appJsx = fs.readFileSync(path.join(__dirname, 'src/App.jsx'), 'utf8');

const regex = /<Route path="\/([^/"]+)\/([^"]+)" element={<([A-Za-z0-9_]+) \/>}/g;
let match;
const routeMaps = {
  produk: {},
  artikel: {},
  industri: {},
  layanan: {},
  portofolio: {},
  mesin: {}
};

while ((match = regex.exec(appJsx)) !== null) {
  const category = match[1];
  const slug = match[2];
  const componentName = match[3];
  
  if (!routeMaps[category]) routeMaps[category] = {};
  routeMaps[category][slug] = componentName;
}

let pageMapContent = `import { lazy } from 'react';\n\n`;

Object.keys(routeMaps).forEach(category => {
  pageMapContent += `export const ${category}Map = {\n`;
  Object.keys(routeMaps[category]).forEach(slug => {
    const compName = routeMaps[category][slug];
    pageMapContent += `  '${slug}': lazy(() => import('../pages/generated/${compName}')),\n`;
  });
  pageMapContent += `};\n\n`;
});

fs.writeFileSync(path.join(__dirname, 'src/routes/pageMap.js'), pageMapContent);
console.log('pageMap.js generated successfully!');
