import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Kontak from './pages/Kontak';
import DynamicPage from './pages/DynamicPage';
import Tentang from './pages/Tentang';

const PlaceholderPage = ({ title }) => (
  <div className="flex items-center justify-center h-[50vh]">
    <h1 className="text-3xl font-condensed font-bold text-navy">{title}</h1>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/produk" element={<PlaceholderPage title="Produk & Solusi" />} />
          <Route path="/produk/:id" element={<DynamicPage category="produk" />} />
          <Route path="/layanan" element={<PlaceholderPage title="Layanan" />} />
          <Route path="/layanan/:id" element={<DynamicPage category="layanan" />} />
          <Route path="/industri" element={<PlaceholderPage title="Industri" />} />
          <Route path="/industri/:id" element={<DynamicPage category="industri" />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/artikel" element={<PlaceholderPage title="Artikel" />} />
          <Route path="/portofolio" element={<PlaceholderPage title="Portofolio" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
