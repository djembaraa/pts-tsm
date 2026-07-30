const fs = require('fs');
const path = require('path');

const categories = ['produk', 'artikel', 'industri', 'layanan', 'portofolio'];

categories.forEach(cat => {
  const dir = path.join(__dirname, 'src', 'pages', cat);
  const detailName = cat.charAt(0).toUpperCase() + cat.slice(1) + 'Detail';
  const mapName = cat + 'Map';

  const content = `import React, { Suspense, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ${mapName} } from '../../routes/pageMap';

const ${detailName} = () => {
  const { slug } = useParams();
  const Component = ${mapName}[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!Component) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-navy mb-4">Halaman Tidak Ditemukan</h2>
        <p className="text-muted">Maaf, halaman untuk '{slug}' tidak tersedia.</p>
      </div>
    );
  }

  return (
    <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
      <Component />
    </Suspense>
  );
};

export default ${detailName};
`;

  fs.writeFileSync(path.join(dir, detailName + '.jsx'), content);
});
console.log('Detail components generated!');
