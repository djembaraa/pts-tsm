const fs = require('fs');
let content = fs.readFileSync('./src/data/mockData_articles.js', 'utf8');

// List of allowed non-ASCII characters
const allowed = ['—', '–', '”', '“', '’', '‘', '…', '→', '←', '°', '±', '×', '÷', '²', '³', '½', '\n', '\r', '\t', ' '];

content = content.replace(/[^\x00-\x7F]/g, (m) => {
  if (allowed.includes(m)) return m;
  return '';
});

fs.writeFileSync('./src/data/mockData_articles.js', content);
console.log('Done removing emojis!');
