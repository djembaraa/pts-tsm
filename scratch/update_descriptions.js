const fs = require('fs');
const file = './src/data/mockData_articles.js';
let content = fs.readFileSync(file, 'utf8');

// Match each article object and inject description
content = content.replace(/"author": "([^"]+)",?\s*"image": "([^"]+)",?\s*"content":/g, (match, author, image) => {
  return `"author": "${author}",\n    "image": "${image}",\n    "description": "",\n    "content":`;
});

fs.writeFileSync(file, content);

// Wait, doing this via string replacement is hard because we need to parse the content to get the description.
// It's better to require it, update it in memory, and rewrite it. BUT mockData_articles.js exports a const.
