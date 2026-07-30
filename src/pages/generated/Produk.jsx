import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


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
        <div className="pc ">
          <div className="pc-img" style={{"background":"linear-gradient(135deg,#0a2240,#0d5fa8)"}}><picture>
  <source srcSet="images/foto-mesin-swro.webp" type="image/webp" />
  <img alt="Mesin SWRO PT Tirta Sumber Makmur" src="images/foto-mesin-swro.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".85"}} />
</picture><span className="pc-badge">Terlaris</span></div>
          <div className="pc-body">
            <div className="pc-cat">Reverse Osmosis</div>
            <h3>RO Industri Skala Besar</h3>
            <p>Sistem RO berkapasitas tinggi untuk pabrik, pembangkit listrik, dan fasilitas industri yang membutuhkan air proses berkualitas tinggi dalam volume besar.</p>
            <div className="pc-specs"><span className="spec-chip">1–500 m³/hari</span><span className="spec-chip">Otomasi Penuh</span><span className="spec-chip">Hemat Energi</span></div>
          </div>
          <div className="pc-foot"><span>Mulai dari konsultasi</span><Link className="pc-lnk" to="/produk/ro-industri">Detail →</Link></div>
        </div>
        <div className="pc ">
          <div className="pc-img" style={{"background":"linear-gradient(135deg,#0d3a6b,#1e90d6)"}}><picture>
  <source srcSet="images/produk-ro-9m3-a.webp" type="image/webp" />
  <img alt="Sistem RO industri 9 m3 per jam TSM" src="images/produk-ro-9m3-a.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".85"}} loading="lazy" decoding="async" />
</picture></div>
          <div className="pc-body">
            <div className="pc-cat">Reverse Osmosis</div>
            <h3>RO Komersial &amp; Gedung</h3>
            <p>Sistem RO terintegrasi untuk gedung bertingkat, hotel berbintang, pusat perbelanjaan, dan rumah sakit dengan desain compact dan efisien.</p>
            <div className="pc-specs"><span className="spec-chip">100–5.000 L/hari</span><span className="spec-chip">Compact</span><span className="spec-chip">Low Maintenance</span></div>
          </div>
          <div className="pc-foot"><span>Mulai dari konsultasi</span><Link className="pc-lnk" to="/produk/ro-komersial">Detail →</Link></div>
        </div>
        <div className="pc ">
          <div className="pc-img" style={{"background":"linear-gradient(135deg,#1a3a5c,#0d5fa8)"}}><picture>
  <source srcSet="images/porto-kontainer-1.webp" type="image/webp" />
  <img alt="Proyek SWRO kontainer PT TSM" src="images/porto-kontainer-1.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".85"}} loading="lazy" decoding="async" />
</picture></div>
          <div className="pc-body">
            <div className="pc-cat">Reverse Osmosis</div>
            <h3>RO Mobile / Portable</h3>
            <p>Unit RO mobile yang dapat dipindah-pindah, ideal untuk proyek konstruksi, bencana alam, event, dan lokasi temporer yang membutuhkan air bersih segera.</p>
            <div className="pc-specs"><span className="spec-chip">Portabel</span><span className="spec-chip">Plug &amp; Play</span><span className="spec-chip">Diesel / Solar</span></div>
          </div>
          <div className="pc-foot"><span>Mulai dari konsultasi</span><Link className="pc-lnk" to="/produk/ro-mobile">Detail →</Link></div>
        </div>
        <div className="pc ">
          <div className="pc-img" style={{"background":"linear-gradient(135deg,#1a2d42,#1e90d6)"}}><picture>
  <source srcSet="images/produk-ro-9m3-d.webp" type="image/webp" />
  <img alt="Sistem RO industri 9 m3 per jam TSM" src="images/produk-ro-9m3-d.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".85"}} loading="lazy" decoding="async" />
</picture></div>
          <div className="pc-body">
            <div className="pc-cat">Reverse Osmosis</div>
            <h3>RO Laboratorium</h3>
            <p>Sistem penghasil air ultra-murni Type I, II, dan III untuk kebutuhan laboratorium analitik, penelitian, dan kalibrasi instrumen ilmiah presisi.</p>
            <div className="pc-specs"><span className="spec-chip">Type I/II/III</span><span className="spec-chip">Resistivitas Tinggi</span><span className="spec-chip">TOC Rendah</span></div>
          </div>
          <div className="pc-foot"><span>Mulai dari konsultasi</span><Link className="pc-lnk" to="/produk/ro-lab">Detail →</Link></div>
        </div>
      </div>
    </div>

    {/*  DESALINASI  */}
    <div className="cat-section">
      <span className="cat-title">Desalinasi &amp; Pengolahan Air</span>
      <span className="cat-line"></span>
      <div className="prod-grid">
        <div className="pc ">
          <div className="pc-img" style={{"background":"linear-gradient(135deg,#0a2240,#00b4d8)"}}><picture>
  <source srcSet="images/porto-pelindo-1.webp" type="image/webp" />
  <img alt="Proyek sistem RO Pelindo TSM" src="images/porto-pelindo-1.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".85"}} loading="lazy" decoding="async" />
</picture><span className="pc-badge">Unggulan</span></div>
          <div className="pc-body">
            <div className="pc-cat">Desalinasi</div>
            <h3>SWRO — Desalinasi Air Laut</h3>
            <p>Sea Water Reverse Osmosis berkapasitas tinggi untuk kepulauan, resort pesisir, industri maritim, dan kawasan yang jauh dari sumber air tawar.</p>
            <div className="pc-specs"><span className="spec-chip">5–1000+ m³/hari</span><span className="spec-chip">TDS &lt;500 ppm</span><span className="spec-chip">Energy Recovery</span></div>
          </div>
          <div className="pc-foot"><span>Mulai dari konsultasi</span><Link className="pc-lnk" to="/produk/desalinasi">Detail →</Link></div>
        </div>
        <div className="pc ">
          <div className="pc-img" style={{"background":"linear-gradient(135deg,#0a2240,#1e90d6)"}}><picture>
  <source srcSet="images/bwms-integrated.webp" type="image/webp" />
  <img alt="Ballast Water Management System BWMS PT TSM" src="images/bwms-integrated.jpg" style={{"width":"100%","height":"100%","objectFit":"contain","background":"#f4f7fb","padding":".5rem"}} loading="lazy" decoding="async" />
</picture><span className="pc-badge">Maritim</span></div>
          <div className="pc-body">
            <div className="pc-cat">Maritim &amp; Kapal</div>
            <h3>Ballast Water Management System (BWMS)</h3>
            <p>Sistem pengolahan air ballast kapal sesuai IMO BWM Convention 2004. Tipe Integrated &amp; Distributed BSKY100, teknologi hydrocyclone + UV chemical-free.</p>
            <div className="pc-specs"><span className="spec-chip">100 m³/h</span><span className="spec-chip">IMO D-2 Standard</span><span className="spec-chip">BKI Compatible</span></div>
          </div>
          <div className="pc-foot"><span>Mulai dari konsultasi</span><Link className="pc-lnk" to="/produk/bwms">Detail →</Link></div>
        </div>
        <div className="pc ">
          <div className="pc-img" style={{"background":"linear-gradient(135deg,#1a3050,#0d5fa8)"}}><picture>
  <source srcSet="images/porto-sbawi-2.webp" type="image/webp" />
  <img alt="Proyek sistem RO SBAWI TSM" src="images/porto-sbawi-2.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".85"}} loading="lazy" decoding="async" />
</picture></div>
          <div className="pc-body">
            <div className="pc-cat">Pengolahan Air Limbah</div>
            <h3>Sistem Daur Ulang Air Limbah</h3>
            <p>Sistem daur ulang air limbah industri menggunakan kombinasi teknologi membran UF, MBR, dan RO untuk mencapai standar buang atau Zero Liquid Discharge.</p>
            <div className="pc-specs"><span className="spec-chip">MBR + RO</span><span className="spec-chip">ZLD Ready</span><span className="spec-chip">Recovery 80%+</span></div>
          </div>
          <div className="pc-foot"><span>Mulai dari konsultasi</span><Link className="pc-lnk" to="/produk/limbah">Detail →</Link></div>
        </div>
        <div className="pc ">
          <div className="pc-img" style={{"background":"linear-gradient(135deg,#0d3a6b,#1e90d6)"}}><picture>
  <source srcSet="images/porto-sbawi-1.webp" type="image/webp" />
  <img alt="Proyek sistem RO SBAWI TSM" src="images/porto-sbawi-1.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".85"}} loading="lazy" decoding="async" />
</picture></div>
          <div className="pc-body">
            <div className="pc-cat">Demineralisasi</div>
            <h3>Demineralisasi &amp; EDI</h3>
            <p>Sistem Electrodeionization dan DI resin untuk produksi air ultra-murni kebutuhan farmasi, laboratorium, elektronik, dan boiler bertekanan tinggi.</p>
            <div className="pc-specs"><span className="spec-chip">18 MΩ·cm</span><span className="spec-chip">Pharma Grade</span><span className="spec-chip">Continuous</span></div>
          </div>
          <div className="pc-foot"><span>Mulai dari konsultasi</span><Link className="pc-lnk" to="/produk/demi">Detail →</Link></div>
        </div>
        <div className="pc ">
          <div className="pc-img" style={{"background":"linear-gradient(135deg,#054a6e,#0d5fa8)"}}><picture>
  <source srcSet="images/porto-sosro-5.webp" type="image/webp" />
  <img alt="Proyek instalasi RO PT Sosro TSM" src="images/porto-sosro-5.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".85"}} loading="lazy" decoding="async" />
</picture></div>
          <div className="pc-body">
            <div className="pc-cat">Ultrafiltrasi</div>
            <h3>Sistem UF &amp; Microfiltration</h3>
            <p>Penyaringan membran UF dan MF untuk pre-treatment RO, pengolahan air minum, dan aplikasi industri makanan &amp; minuman dengan standar tinggi.</p>
            <div className="pc-specs"><span className="spec-chip">0,01–0,1 µm</span><span className="spec-chip">Hollow Fiber</span><span className="spec-chip">Backwash Auto</span></div>
          </div>
          <div className="pc-foot"><span>Mulai dari konsultasi</span><Link className="pc-lnk" to="/produk/uf">Detail →</Link></div>
        </div>
      </div>
    </div>

    {/*  KIMIA & SUKU CADANG  */}
    <div className="cat-section">
      <span className="cat-title">Suku Cadang &amp; Kimia</span>
      <span className="cat-line"></span>
      <div className="prod-grid">
        <div className="pc ">
          <div className="pc-img" style={{"background":"linear-gradient(135deg,#1a3a5c,#0d5fa8)"}}><picture>
  <source srcSet="images/produk-swro-15tpd-a.webp" type="image/webp" />
  <img alt="Sistem SWRO desalinasi TSM" src="images/produk-swro-15tpd-a.png" style={{"width":"100%","height":"100%","objectFit":"contain","background":"#0a2040","padding":"10px"}} loading="lazy" decoding="async" />
</picture></div>
          <div className="pc-body">
            <div className="pc-cat">Membran</div>
            <h3>Elemen Membran RO / NF / UF</h3>
            <p>Membran RO, NF, dan UF dari merek terkemuka dunia untuk penggantian elemen membran dengan performa optimal dan umur pakai maksimal.</p>
            <div className="pc-specs"><span className="spec-chip">Dow Filmtec</span><span className="spec-chip">Toray</span><span className="spec-chip">Hydranautics</span></div>
          </div>
          <div className="pc-foot"><span>Stok tersedia</span><Link className="pc-lnk" to="/produk/membran">Lihat →</Link></div>
        </div>
        <div className="pc ">
          <div className="pc-img" style={{"background":"linear-gradient(135deg,#0a2240,#0d3a6b)"}}><picture>
  <source srcSet="images/foto-bengkel.webp" type="image/webp" />
  <img alt="Bengkel dan workshop PT Tirta Sumber Makmur" src="images/foto-bengkel.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".85"}} loading="lazy" decoding="async" />
</picture></div>
          <div className="pc-body">
            <div className="pc-cat">Kimia</div>
            <h3>Antiscalant, Biocide &amp; CIP</h3>
            <p>Bahan kimia water treatment berkualitas tinggi: antiscalant untuk mencegah scaling, biocide untuk mencegah biofouling, dan CIP chemicals untuk pencucian membran.</p>
            <div className="pc-specs"><span className="spec-chip">Antiscalant</span><span className="spec-chip">Biocide</span><span className="spec-chip">CIP Chemicals</span></div>
          </div>
          <div className="pc-foot"><span>Stok tersedia</span><Link className="pc-lnk" to="/produk/kimia">Lihat →</Link></div>
        </div>
        <div className="pc ">
          <div className="pc-img" style={{"background":"linear-gradient(135deg,#1a2d42,#0d5fa8)"}}><picture>
  <source srcSet="images/porto-pelindo-2.webp" type="image/webp" />
  <img alt="Proyek sistem RO Pelindo TSM" src="images/porto-pelindo-2.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".85"}} loading="lazy" decoding="async" />
</picture></div>
          <div className="pc-body">
            <div className="pc-cat">Mekanikal</div>
            <h3>Pompa &amp; Pressure Vessel</h3>
            <p>Pompa high-pressure dari Grundfos, CAT Pumps, dan Danfoss. Pressure vessel FRP dari Code Line, Pentair, dan Codeline untuk berbagai kapasitas sistem RO.</p>
            <div className="pc-specs"><span className="spec-chip">Grundfos</span><span className="spec-chip">Pentair</span><span className="spec-chip">SS 316L</span></div>
          </div>
          <div className="pc-foot"><span>Pesan sekarang</span><Link className="pc-lnk" to="/produk/pompa">Lihat →</Link></div>
        </div>
        <div className="pc ">
          <div className="pc-img" style={{"background":"linear-gradient(135deg,#0a4060,#1e90d6)"}}><picture>
  <source srcSet="images/produk-ro-9m3-b.webp" type="image/webp" />
  <img alt="Sistem RO industri 9 m3 per jam TSM" src="images/produk-ro-9m3-b.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".85"}} loading="lazy" decoding="async" />
</picture></div>
          <div className="pc-body">
            <div className="pc-cat">Instrumen</div>
            <h3>Sensor &amp; Instrumen Monitoring</h3>
            <p>TDS meter, conductivity meter, pH meter, flow meter, pressure transmitter, dan sistem monitoring online untuk pengawasan kualitas air secara real-time dan otomatis.</p>
            <div className="pc-specs"><span className="spec-chip">TDS / pH / DO</span><span className="spec-chip">Online Monitor</span><span className="spec-chip">SCADA Ready</span></div>
          </div>
          <div className="pc-foot"><span>Konsultasi dulu</span><Link className="pc-lnk" to="/produk/instrumen">Lihat →</Link></div>
        </div>

        <div className="pc ">
          <div className="pc-img" style={{"background":"linear-gradient(135deg,#0a4060,#1e90d6)"}}><picture>
  <source srcSet="images/produk-ro-9m3-a.webp" type="image/webp" />
  <img alt="Mesin AMDK lini produksi air minum dalam kemasan TSM" src="images/produk-ro-9m3-a.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".85"}} loading="lazy" decoding="async" />
</picture></div>
          <div className="pc-body">
            <div className="pc-cat">Mesin AMDK</div>
            <h3>Lini Produksi Air Minum Dalam Kemasan</h3>
            <p>Solusi turnkey untuk pabrik AMDK: water treatment, ozonisasi, UV sterilization, dan filling cup, botol PET, atau gallon. Sesuai standar BPOM, SNI 3553, dan halal MUI.</p>
            <div className="pc-specs"><span className="spec-chip">Cup / PET / Gallon</span><span className="spec-chip">BPOM Ready</span><span className="spec-chip">SNI 3553</span></div>
          </div>
          <div className="pc-foot"><span>Turnkey Solution</span><Link className="pc-lnk" to="/produk/amdk">Lihat →</Link></div>
        </div>

        <div className="pc ">
          <div className="pc-img" style={{"background":"linear-gradient(135deg,#0a4060,#1e90d6)"}}><picture>
  <source srcSet="images/produk-ro-industri-2.webp" type="image/webp" />
  <img alt="Ozon generator industrial untuk disinfeksi air AMDK dan kolam premium" src="images/produk-ro-industri-2.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".85"}} loading="lazy" decoding="async" />
</picture></div>
          <div className="pc-body">
            <div className="pc-cat">Disinfeksi</div>
            <h3>Ozon Generator Industri</h3>
            <p>Ozon generator korona discharge dengan PSA oksigen untuk disinfeksi AMDK, kolam renang premium, oksidasi besi-mangan, dan air limbah. Kapasitas 1 g/jam – 10 kg/jam.</p>
            <div className="pc-specs"><span className="spec-chip">1 g/jam – 10 kg/jam</span><span className="spec-chip">PSA O₂ ready</span><span className="spec-chip">SS-316L</span></div>
          </div>
          <div className="pc-foot"><span>Konsultasi dulu</span><Link className="pc-lnk" to="/produk/ozon">Lihat →</Link></div>
        </div>

        <div className="pc ">
          <div className="pc-img" style={{"background":"linear-gradient(135deg,#0a4060,#1e90d6)"}}><picture>
  <source srcSet="images/produk-ro-9m3-d.webp" type="image/webp" />
  <img alt="UV sterilizer ultraviolet untuk disinfeksi air minum dan industri" src="images/produk-ro-9m3-d.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".85"}} loading="lazy" decoding="async" />
</picture></div>
          <div className="pc-body">
            <div className="pc-cat">Disinfeksi</div>
            <h3>UV Sterilizer 254nm</h3>
            <p>Sistem disinfeksi UV-C untuk air minum, output RO, AMDK, kolam renang, dan air limbah. Lampu UV tier-1 Trojan/Atlantic/Wedeco. Dosis tervalidasi 40-100 mJ/cm² sesuai USEPA.</p>
            <div className="pc-specs"><span className="spec-chip">0.5 – 500 m³/jam</span><span className="spec-chip">USEPA UVDGM</span><span className="spec-chip">SS-316L</span></div>
          </div>
          <div className="pc-foot"><span>Konsultasi dulu</span><Link className="pc-lnk" to="/produk/uv">Lihat →</Link></div>
        </div>
      </div>
    </div>

  </div>
</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2 className="font-condensed text-[clamp(1.5rem,2.4vw,2.1rem)] font-extrabold mb-[0.7rem]">Tidak Menemukan yang Anda Cari?</h2>
    <p className="text-[0.88rem] opacity-90 mb-[1.5rem]">Tim kami siap merancang solusi custom sesuai kebutuhan spesifik Anda — dari awal hingga commissioning.</p>
    <div className="flex gap-[1rem] justify-center flex-wrap">
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak">💬 Konsultasi Produk</Link>
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/artikel">📚 Baca Artikel Teknis</Link>
    </div>
  </div>
</div>

    </>
  );
};

export default Produk;
