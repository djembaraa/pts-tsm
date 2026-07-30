const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/mockData_products.js');
let content = fs.readFileSync(filePath, 'utf-8');

const imageMap = {
  'ro-industri': 'foto-mesin-swro.jpg',
  'ro-komersial': 'produk-ro-9m3-a.jpg',
  'ro-mobile': 'porto-kontainer-1.jpg',
  'ro-lab': 'produk-ro-9m3-d.jpg',
  'swro': 'porto-pelindo-1.jpg',
  'bwms': 'bwms-integrated.jpg',
  'limbah': 'porto-sbawi-2.jpg',
  'demi': 'porto-sbawi-1.jpg',
  'uf': 'porto-sosro-5.jpg',
  'membran': 'produk-swro-15tpd-a.png',
  'kimia': 'foto-bengkel.jpg',
  'pompa': 'porto-pelindo-2.jpg',
  'instrumen': 'produk-ro-9m3-b.jpg',
  'amdk': 'produk-ro-9m3-a.jpg',
  'ozon': 'produk-ro-industri-2.jpg',
  'uv': 'produk-ro-9m3-d.jpg',
  'bwro': 'porto-sosro-1.jpg',
  'twro': 'porto-sosro-2.jpg',
  'fresh-water-generator': 'bwms-distributed.jpg',
  'mikrofiltrasi': 'porto-sosro-5.jpg',
  'cartridge-mf': 'produk-ro-industri.webp',
  'water-filter': 'porto-sosro-3.jpg',
  'zincalume-tank': 'porto-kontainer-1.jpg'
};

for (const [id, img] of Object.entries(imageMap)) {
  const regex = new RegExp(`("id":\\s*"${id}"[\\s\\S]*?"image":\\s*")[^"]+(")`, 'g');
  content = content.replace(regex, `$1${img}$2`);
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Images updated!');
