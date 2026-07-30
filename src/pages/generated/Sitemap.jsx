import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Factory, Droplet, Waves } from 'lucide-react';
import Button from '../../components/ui/Button';

const Sitemap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.sitemap-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:2rem;margin-top:1rem}
.sm-col{background:var(--white);border:1px solid var(--border);border-radius:10px;padding:1.5rem 1.75rem;transition:var(--t)}
.sm-col:hover{box-shadow:var(--sh);border-color:var(--accent)}
.sm-col h3{font-family:'Barlow Condensed',sans-serif;font-size:1.2rem;font-weight:900;color:var(--navy);margin-bottom:.2rem;padding-bottom:.65rem;border-bottom:2px solid var(--ice)}
.sm-col .sm-ico{font-size:1.5rem;margin-right:.35rem;vertical-align:middle}
.sm-col ul{margin-top:.9rem}
.sm-col ul li{margin-bottom:.42rem}
.sm-col ul li a{font-size:.88rem;color:var(--text);display:flex;align-items:center;gap:.4rem;padding:.22rem 0;transition:var(--t)}
.sm-col ul li a:hover{color:var(--blue);padding-left:.35rem}
.sm-col ul li a::before{content:'›';color:var(--accent);font-weight:700;flex-shrink:0}

` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › Peta Situs</div>
    <h1>Peta Situs</h1>
    <p>Navigasi lengkap ke seluruh halaman website PT Tirta Sumber Makmur. Temukan dengan cepat informasi yang Anda butuhkan.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="sitemap-grid">

      <div className="sm-col ">
        <h3><span className="sm-ico">🏠</span>Utama</h3>
        <ul>
          <li><Link to="/index">Beranda</Link></li>
          <li><Link to="/tentang">Tentang Kami</Link></li>
          <li><Link to="/kontak">Kontak &amp; Lokasi</Link></li>
          <li><Link to="/karir">Karir</Link></li>
        </ul>
      </div>

      <div className="sm-col ">
        <h3><span className="sm-ico"><Droplet className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></span>Produk Reverse Osmosis</h3>
        <ul>
          <li><Link to="/produk">Semua Produk &amp; Solusi</Link></li>
          <li><Link to="/produk/ro-industri">RO Industri Skala Besar</Link></li>
          <li><Link to="/produk/ro-komersial">RO Komersial &amp; Gedung</Link></li>
          <li><Link to="/produk/ro-mobile">RO Mobile / Portable</Link></li>
          <li><Link to="/produk/ro-lab">RO Laboratorium</Link></li>
        </ul>
      </div>

      <div className="sm-col ">
        <h3><span className="sm-ico"><Waves className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></span>Desalinasi &amp; Pengolahan</h3>
        <ul>
          <li><Link to="/produk/desalinasi">Desalinasi Air Laut (SWRO)</Link></li>
          <li><Link to="/produk/limbah">Pengolahan Air Limbah</Link></li>
          <li><Link to="/produk/demi">Demineralisasi / EDI</Link></li>
          <li><Link to="/produk/uf">Ultrafiltrasi (UF)</Link></li>
        </ul>
      </div>

      <div className="sm-col ">
        <h3><span className="sm-ico">🧪</span>Suku Cadang &amp; Kimia</h3>
        <ul>
          <li><Link to="/produk/membran">Membran RO</Link></li>
          <li><Link to="/produk/kimia">Antiscalant &amp; Biocide</Link></li>
          <li><Link to="/produk/pompa">Pompa &amp; Pressure Vessel</Link></li>
          <li><Link to="/produk/instrumen">Instrumen &amp; Sensor</Link></li>
        </ul>
      </div>

      <div className="sm-col ">
        <h3><span className="sm-ico"><Wrench className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></span>Layanan</h3>
        <ul>
          <li><Link to="/layanan">Semua Layanan</Link></li>
          <li><Link href="layanan.html#desain">Desain &amp; Perancangan Sistem</Link></li>
          <li><Link href="layanan.html#instalasi">Instalasi &amp; Komisioning</Link></li>
          <li><Link href="layanan.html#maintenance">Pemeliharaan Preventif</Link></li>
          <li><Link href="layanan.html#darurat">Servis Darurat 24/7</Link></li>
          <li><Link href="layanan.html#audit">Audit Kualitas Air</Link></li>
          <li><Link href="layanan.html#feasibility">Studi Kelayakan</Link></li>
          <li><Link href="layanan.html#epc">Turnkey EPC Project</Link></li>
          <li><Link href="layanan.html#sertifikasi">Sertifikasi &amp; Compliance</Link></li>
        </ul>
      </div>

      <div className="sm-col ">
        <h3><span className="sm-ico"><Factory className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></span>Industri yang Dilayani</h3>
        <ul>
          <li><Link to="/industri">Semua Sektor Industri</Link></li>
          <li><Link href="industri.html#manufaktur">Industri Manufaktur</Link></li>
          <li><Link href="industri.html#hotel">Hotel &amp; Perhotelan</Link></li>
          <li><Link href="industri.html#rs">Rumah Sakit &amp; Farmasi</Link></li>
          <li><Link href="industri.html#agri">Agrikultur &amp; Perkebunan</Link></li>
          <li><Link href="industri.html#pltu">Pembangkit Listrik</Link></li>
          <li><Link href="industri.html#properti">Properti &amp; Real Estate</Link></li>
          <li><Link href="industri.html#maritim">Offshore &amp; Kapal</Link></li>
        </ul>
      </div>

      <div className="sm-col ">
        <h3><span className="sm-ico">📂</span>Portofolio &amp; Proyek</h3>
        <ul>
          <li><Link to="/portofolio">Semua Portofolio</Link></li>
          <li><Link to="/portofolio">Proyek Industri</Link></li>
          <li><Link to="/portofolio">Proyek Maritim &amp; Offshore</Link></li>
          <li><Link to="/portofolio">Proyek Desalinasi Pulau</Link></li>
          <li><Link to="/portofolio">Proyek Kontainer Mobile</Link></li>
        </ul>
      </div>

      <div className="sm-col ">
        <h3><span className="sm-ico">📰</span>Artikel &amp; Wawasan</h3>
        <ul>
          <li><Link to="/artikel">Semua Artikel</Link></li>
          <li><Link to="/artikel/ro-prinsip-kerja">Teknologi Reverse Osmosis</Link></li>
          <li><Link to="/artikel/desalinasi-solusi-pulau">Desalinasi Pulau Terpencil</Link></li>
          <li><Link to="/artikel/5-kesalahan-perawatan-ro">5 Kesalahan Perawatan RO</Link></li>
          <li><Link to="/artikel/air-farmasi-ro-edi">Standar Air Farmasi</Link></li>
          <li><Link to="/artikel/zld-zero-liquid">Zero Liquid Discharge</Link></li>
          <li><Link to="/artikel/studi-kasus-ro-tekstil">Studi Kasus Pabrik Tekstil</Link></li>
          <li><Link to="/artikel/monitoring-kualitas-air-ro">Monitoring Kualitas Air RO</Link></li>
          <li><Link to="/artikel/ro-kapal-offshore">RO Kapal &amp; Offshore</Link></li>
          <li><Link to="/artikel/ro-hotel-resort">RO Hotel &amp; Resort</Link></li>
        </ul>
      </div>

      <div className="sm-col ">
        <h3><span className="sm-ico">❓</span>Informasi Lainnya</h3>
        <ul>
          <li><Link to="/faq">Pertanyaan Umum (FAQ)</Link></li>
          <li><Link href="tentang.html#tim">Tim &amp; Manajemen</Link></li>
          <li><Link href="tentang.html#sertifikasi">Sertifikasi &amp; Penghargaan</Link></li>
          <li><Link href="tentang.html#csr">CSR &amp; Lingkungan</Link></li>
          <li><Link to="/kebijakan/privasi">Kebijakan Privasi</Link></li>
          <li><Link to="/syarat/ketentuan">Syarat &amp; Ketentuan</Link></li>
        </ul>
      </div>

    </div>
  </div>
</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold leading-[1.15] mb-[0.65rem]">Tidak Menemukan yang Anda Cari?</h2>
    <p className="text-[0.88rem] opacity-90 leading-[1.75] max-w-[600px] mx-auto mb-8">Hubungi langsung tim kami — kami senang membantu mengarahkan Anda ke informasi yang tepat.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Button variant="white" to="/kontak" >📞 Hubungi Kami</Button>
      <Button variant="outline-white" href="https://wa.me/62818719119" >💬 Chat WhatsApp</Button>
    </div>
  </div>
</div>

    </>
  );
};

export default Sitemap;
