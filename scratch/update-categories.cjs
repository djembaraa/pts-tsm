const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/mockData_products.js');
let content = fs.readFileSync(filePath, 'utf-8');

const categoryMap = {
  'ro-industri': 'Reverse Osmosis',
  'ro-komersial': 'Reverse Osmosis',
  'ro-mobile': 'Reverse Osmosis',
  'ro-lab': 'Reverse Osmosis',
  'bwro': 'Reverse Osmosis',
  'twro': 'Reverse Osmosis',
  'swro': 'Desalinasi',
  'desalinasi': 'Desalinasi',
  'fresh-water-generator': 'Desalinasi',
  'bwms': 'Maritim & Kapal',
  'limbah': 'Pengolahan Air Limbah',
  'demi': 'Demineralisasi',
  'uf': 'Ultrafiltrasi',
  'mikrofiltrasi': 'Ultrafiltrasi',
  'cartridge-mf': 'Filtrasi',
  'water-filter': 'Filtrasi',
  'membran': 'Suku Cadang & Kimia',
  'kimia': 'Suku Cadang & Kimia',
  'pompa': 'Mekanikal',
  'zincalume-tank': 'Mekanikal',
  'instrumen': 'Instrumen',
  'amdk': 'Mesin AMDK',
  'ozon': 'Disinfeksi',
  'uv': 'Disinfeksi'
};

// We will use regex to carefully replace category values
for (const [id, cat] of Object.entries(categoryMap)) {
  const regex = new RegExp(`("id":\\s*"${id}"[\\s\\S]*?"category":\\s*")[^"]+(")`, 'g');
  content = content.replace(regex, `$1${cat}$2`);
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Categories updated!');
