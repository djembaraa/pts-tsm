import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../../components/ui/ProductCard';
import Button from '../../components/ui/Button';

const Produk = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.cat-title{font-family:'Barlow Condensed',sans-serif;font-size:1.75rem;font-weight:900;color:var(--navy);margin-bottom:.4rem;display:inline-block}
.cat-line{display:block;width:100%;height:2px;background:linear-gradient(90deg,var(--accent),transparent);margin-bottom:2rem}
.cat-section{margin-bottom:4rem}
.prod-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(285px,1fr));gap:1.5rem}
.pc{border:1px solid var(--border);border-radius:12px;overflow:hidden;transition:var(--t);background:var(--white);display:flex;flex-direction:column}
.pc:hover{transform:translateY(-5px);box-shadow:var(--shh);border-color:var(--accent)}
.pc-img{height:195px;overflow:hidden;position:relative;flex-shrink:0}.pc-img img{width:100%;height:100%;object-fit:cover;transition:transform .4s ease}.pc:hover .pc-img img{transform:scale(1.05)}
.pc-badge{position:absolute;top:.9rem;right:.9rem;background:var(--accent);color:#fff;font-size:.62rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:.25rem .68rem;border-radius:4px}
.pc-body{padding:1.5rem;flex:1;display:flex;flex-direction:column}
.pc-cat{font-size:.65rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);margin-bottom:.38rem}
.pc-body h3{font-size:1.02rem;font-weight:700;color:var(--navy);margin-bottom:.44rem}
.pc-body p{font-size:.84rem;color:var(--muted);line-height:1.62;flex:1;margin-bottom:.9rem}
.pc-specs{display:flex;gap:.42rem;flex-wrap:wrap;margin-bottom:.9rem}
.spec-chip{font-size:.7rem;font-weight:600;padding:.22rem .68rem;background:var(--ice);border:1px solid var(--border);border-radius:20px;color:var(--text)}
.pc-foot{display:flex;align-items:center;justify-content:space-between;padding:1rem 1.5rem;border-top:1px solid var(--border);margin-top:auto}
.pc-foot span{font-size:.76rem;color:var(--muted)}
.pc-lnk{font-size:.78rem;font-weight:700;color:var(--blue);letter-spacing:.05em;text-transform:uppercase;display:inline-flex;align-items:center;gap:.3rem;transition:var(--t)}
.pc-lnk:hover{gap:.55rem}

` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › Produk &amp; Solusi</div>
    <h1>Produk &amp; Solusi Water Treatment</h1>
    <p>Rangkaian lengkap sistem reverse osmosis, desalinasi, dan pengolahan air dari PT Tirta Sumber Makmur — dirancang untuk keandalan, efisiensi, dan kualitas terbaik.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">

    {/*  RO  */}
    <div className="cat-section">
      <span className="cat-title">Sistem Reverse Osmosis</span>
      <span className="cat-line"></span>
      <div className="prod-grid">
        <ProductCard img="foto-mesin-swro.jpg" badge="Terlaris" cat="Reverse Osmosis" title="RO Industri Skala Besar" desc="Sistem RO berkapasitas tinggi untuk pabrik, pembangkit listrik, dan fasilitas industri yang membutuhkan air proses berkualitas tinggi dalam volume besar." url="/produk/ro-industri" specs={["1–500 m³/hari", "Otomasi Penuh", "Hemat Energi"]} />
        <ProductCard img="produk-ro-9m3-a.jpg" cat="Reverse Osmosis" title="RO Komersial & Gedung" desc="Sistem RO terintegrasi untuk gedung bertingkat, hotel berbintang, pusat perbelanjaan, dan rumah sakit dengan desain compact dan efisien." url="/produk/ro-komersial" specs={["100–5.000 L/hari", "Compact", "Low Maintenance"]} />
        <ProductCard img="porto-kontainer-1.jpg" cat="Reverse Osmosis" title="RO Mobile / Portable" desc="Unit RO mobile yang dapat dipindah-pindah, ideal untuk proyek konstruksi, bencana alam, event, dan lokasi temporer yang membutuhkan air bersih segera." url="/produk/ro-mobile" specs={["Portabel", "Plug & Play", "Diesel / Solar"]} />
        <ProductCard img="produk-ro-9m3-d.jpg" cat="Reverse Osmosis" title="RO Laboratorium" desc="Sistem penghasil air ultra-murni Type I, II, dan III untuk kebutuhan laboratorium analitik, penelitian, dan kalibrasi instrumen ilmiah presisi." url="/produk/ro-lab" specs={["Type I/II/III", "Resistivitas Tinggi", "TOC Rendah"]} />
      </div>
    </div>

    {/*  DESALINASI  */}
    <div className="cat-section">
      <span className="cat-title">Desalinasi &amp; Pengolahan Air</span>
      <span className="cat-line"></span>
      <div className="prod-grid">
        <ProductCard img="porto-pelindo-1.jpg" badge="Unggulan" cat="Desalinasi" title="SWRO — Desalinasi Air Laut" desc="Sea Water Reverse Osmosis berkapasitas tinggi untuk kepulauan, resort pesisir, industri maritim, dan kawasan yang jauh dari sumber air tawar." url="/produk/desalinasi" specs={["5–1000+ m³/hari", "TDS <500 ppm", "Energy Recovery"]} />
        <ProductCard img="bwms-integrated.jpg" badge="Maritim" cat="Maritim & Kapal" title="Ballast Water Management System (BWMS)" desc="Sistem pengolahan air ballast kapal sesuai IMO BWM Convention 2004. Tipe Integrated & Distributed BSKY100, teknologi hydrocyclone + UV chemical-free." url="/produk/bwms" specs={["100 m³/h", "IMO D-2 Standard", "BKI Compatible"]} />
        <ProductCard img="porto-sbawi-2.jpg" cat="Pengolahan Air Limbah" title="Sistem Daur Ulang Air Limbah" desc="Sistem daur ulang air limbah industri menggunakan kombinasi teknologi membran UF, MBR, dan RO untuk mencapai standar buang atau Zero Liquid Discharge." url="/produk/limbah" specs={["MBR + RO", "ZLD Ready", "Recovery 80%+"]} />
        <ProductCard img="porto-sbawi-1.jpg" cat="Demineralisasi" title="Demineralisasi & EDI" desc="Sistem Electrodeionization dan DI resin untuk produksi air ultra-murni kebutuhan farmasi, laboratorium, elektronik, dan boiler bertekanan tinggi." url="/produk/demi" specs={["18 MΩ·cm", "Pharma Grade", "Continuous"]} />
        <ProductCard img="porto-sosro-5.jpg" cat="Ultrafiltrasi" title="Sistem UF & Microfiltration" desc="Penyaringan membran UF dan MF untuk pre-treatment RO, pengolahan air minum, dan aplikasi industri makanan & minuman dengan standar tinggi." url="/produk/uf" specs={["0,01–0,1 µm", "Hollow Fiber", "Backwash Auto"]} />
      </div>
    </div>

    {/*  KIMIA & SUKU CADANG  */}
    <div className="cat-section">
      <span className="cat-title">Suku Cadang &amp; Kimia</span>
      <span className="cat-line"></span>
      <div className="prod-grid">
        <ProductCard img="produk-swro-15tpd-a.png" cat="Membran" title="Elemen Membran RO / NF / UF" desc="Membran RO, NF, dan UF dari merek terkemuka dunia untuk penggantian elemen membran dengan performa optimal dan umur pakai maksimal." url="/produk/membran" urlText="Lihat →" footText="Stok tersedia" specs={["Dow Filmtec", "Toray", "Hydranautics"]} />
        <ProductCard img="foto-bengkel.jpg" cat="Kimia" title="Antiscalant, Biocide & CIP" desc="Bahan kimia water treatment berkualitas tinggi: antiscalant untuk mencegah scaling, biocide untuk mencegah biofouling, dan CIP chemicals untuk pencucian membran." url="/produk/kimia" urlText="Lihat →" footText="Stok tersedia" specs={["Antiscalant", "Biocide", "CIP Chemicals"]} />
        <ProductCard img="porto-pelindo-2.jpg" cat="Mekanikal" title="Pompa & Pressure Vessel" desc="Pompa high-pressure dari Grundfos, CAT Pumps, dan Danfoss. Pressure vessel FRP dari Code Line, Pentair, dan Codeline untuk berbagai kapasitas sistem RO." url="/produk/pompa" urlText="Lihat →" footText="Pesan sekarang" specs={["Grundfos", "Pentair", "SS 316L"]} />
        <ProductCard img="produk-ro-9m3-b.jpg" cat="Instrumen" title="Sensor & Instrumen Monitoring" desc="TDS meter, conductivity meter, pH meter, flow meter, pressure transmitter, dan sistem monitoring online untuk pengawasan kualitas air secara real-time dan otomatis." url="/produk/instrumen" urlText="Lihat →" footText="Konsultasi dulu" specs={["TDS / pH / DO", "Online Monitor", "SCADA Ready"]} />

        <ProductCard img="produk-ro-9m3-a.jpg" cat="Mesin AMDK" title="Lini Produksi Air Minum Dalam Kemasan" desc="Solusi turnkey untuk pabrik AMDK: water treatment, ozonisasi, UV sterilization, dan filling cup, botol PET, atau gallon. Sesuai standar BPOM, SNI 3553, dan halal MUI." url="/produk/amdk" urlText="Lihat →" footText="Turnkey Solution" specs={["Cup / PET / Gallon", "BPOM Ready", "SNI 3553"]} />

        <ProductCard img="produk-ro-industri-2.jpg" cat="Disinfeksi" title="Ozon Generator Industri" desc="Ozon generator korona discharge dengan PSA oksigen untuk disinfeksi AMDK, kolam renang premium, oksidasi besi-mangan, dan air limbah. Kapasitas 1 g/jam – 10 kg/jam." url="/produk/ozon" urlText="Lihat →" footText="Konsultasi dulu" specs={["1 g/jam – 10 kg/jam", "PSA O₂ ready", "SS-316L"]} />

        <ProductCard img="produk-ro-9m3-d.jpg" cat="Disinfeksi" title="UV Sterilizer 254nm" desc="Sistem disinfeksi UV-C untuk air minum, output RO, AMDK, kolam renang, dan air limbah. Lampu UV tier-1 Trojan/Atlantic/Wedeco. Dosis tervalidasi 40-100 mJ/cm² sesuai USEPA." url="/produk/uv" urlText="Lihat →" footText="Konsultasi dulu" specs={["0.5 – 500 m³/jam", "USEPA UVDGM", "SS-316L"]} />
      </div>
    </div>

  </div>
</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold leading-[1.15] mb-[0.65rem]">Tidak Menemukan yang Anda Cari?</h2>
    <p className="text-[0.88rem] opacity-90 leading-[1.75] max-w-[600px] mx-auto mb-8">Tim kami siap merancang solusi custom sesuai kebutuhan spesifik Anda — dari awal hingga commissioning.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Button variant="white" to="/kontak" >💬 Konsultasi Produk</Button>
      <Button variant="outline-white" to="/artikel" >📚 Baca Artikel Teknis</Button>
    </div>
  </div>
</div>

    </>
  );
};

export default Produk;
