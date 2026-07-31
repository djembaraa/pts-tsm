const fs = require('fs');
const file = './src/data/mockData_articles.js';
let data = fs.readFileSync(file, 'utf8');

// Match each article object block
const regex = /(slug:\s*"[^"]+",[\s\S]*?content:\s*`)([\s\S]*?)(`\s*})/g;

data = data.replace(regex, (match, beforeContent, contentStr, afterContent) => {
  // Extract description (first paragraph)
  const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/;
  const pMatch = contentStr.match(pRegex);
  let desc = '';
  if (pMatch) {
    desc = pMatch[1].replace(/<[^>]*>/g, '').trim();
    if (desc.length > 130) {
      desc = desc.substring(0, 130) + '...';
    }
    // Escape for JSON string
    desc = desc.replace(/"/g, '\\"').replace(/\n/g, ' ');
  }
  
  // Insert description before content
  const newBeforeContent = beforeContent.replace(/content:\s*`$/, `description: "${desc}",\n      content: \``);
  return newBeforeContent + contentStr + afterContent;
});

fs.writeFileSync(file, data);
console.log('Descriptions updated!');
