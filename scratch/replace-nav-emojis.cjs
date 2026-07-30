const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/layout/Navbar.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

const replacements = {
  '🔬': '<FlaskConical size={16} />',
  '🏨': '<Building2 size={16} />',
  '⚕️': '<Activity size={16} />',
  '💊': '<Pill size={16} />',
  '🌾': '<Leaf size={16} />',
  '⚡': '<Zap size={16} />',
  '🏢': '<Building size={16} />',
  '🕰️': '<Clock size={16} />',
  '💎': '<Gem size={16} />',
  '🌱': '<Leaf size={16} />',
  '🤝': '<Handshake size={16} />',
  '💼': '<Briefcase size={16} />',
  '📞': '<Phone size={16} />',
  '📰': '<Newspaper size={16} />',
  '📚': '<BookOpen size={16} />',
  '📂': '<Folder size={16} />',
  '📁': '<FolderOpen size={16} />',
  '❓': '<HelpCircle size={16} />'
};

for (const [emoji, icon] of Object.entries(replacements)) {
  content = content.replace(new RegExp(emoji + '\\s*', 'g'), icon + ' ');
}

// Add the new imports
const importRegex = /import {([^}]+)} from 'lucide-react';/;
const match = content.match(importRegex);
if (match) {
  let imports = match[1].split(',').map(s => s.trim());
  const newImports = ['FlaskConical', 'Building2', 'Activity', 'Pill', 'Leaf', 'Zap', 'Building', 'Clock', 'Gem', 'Handshake', 'Briefcase', 'Phone', 'Newspaper', 'BookOpen', 'Folder', 'FolderOpen', 'HelpCircle'];
  newImports.forEach(imp => {
    if (!imports.includes(imp)) {
      imports.push(imp);
    }
  });
  content = content.replace(importRegex, `import { ${imports.join(', ')} } from 'lucide-react';`);
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Emojis replaced in Navbar.jsx');
