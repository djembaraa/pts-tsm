import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Kontak from './pages/Kontak';
import Tentang from './pages/Tentang';

// Modular Pages (Index & Dynamic Detail Wrappers)
import ProdukIndex from './pages/produk/ProdukIndex';
import ProdukDetail from './pages/produk/ProdukDetail';
import ArtikelIndex from './pages/artikel/ArtikelIndex';
import ArtikelDetail from './pages/artikel/ArtikelDetail';
import IndustriIndex from './pages/industri/IndustriIndex';
import IndustriDetail from './pages/industri/IndustriDetail';
import LayananIndex from './pages/layanan/LayananIndex';
import LayananDetail from './pages/layanan/LayananDetail';
import PortofolioIndex from './pages/portofolio/PortofolioIndex';
import PortofolioDetail from './pages/portofolio/PortofolioDetail';

// Static Miscellaneous Pages
import Faq from './pages/custom/FaqPage';
import Kalkulator from './pages/custom/KalkulatorPage';
import Karir from './pages/misc/Karir';
import KebijakanPrivasi from './pages/misc/KebijakanPrivasi';
import SyaratKetentuan from './pages/misc/SyaratKetentuan';
import Sitemap from './pages/misc/Sitemap';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main Manual Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/tentang" element={<Tentang />} />

          {/* Modular Dynamic Routes */}
          <Route path="/produk" element={<ProdukIndex />} />
          <Route path="/produk/:slug" element={<ProdukDetail />} />
          
          <Route path="/artikel" element={<ArtikelIndex />} />
          <Route path="/artikel/:slug" element={<ArtikelDetail />} />
          
          <Route path="/industri" element={<IndustriIndex />} />
          <Route path="/industri/:slug" element={<IndustriDetail />} />
          
          <Route path="/layanan" element={<LayananIndex />} />
          <Route path="/layanan/:slug" element={<LayananDetail />} />
          
          <Route path="/portofolio" element={<PortofolioIndex />} />
          <Route path="/portofolio/:slug" element={<PortofolioDetail />} />

          {/* Misc Legacy Pages */}
          <Route path="/faq" element={<Faq />} />
          <Route path="/kalkulator" element={<Kalkulator />} />
          <Route path="/karir" element={<Karir />} />
          <Route path="/kebijakan/privasi" element={<KebijakanPrivasi />} />
          <Route path="/syarat-ketentuan" element={<SyaratKetentuan />} />
          <Route path="/sitemap" element={<Sitemap />} />
          
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
