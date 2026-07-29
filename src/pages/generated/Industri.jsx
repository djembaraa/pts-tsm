import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Building, Ship } from 'lucide-react';


const Industri = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › Industri</div>
    <h1>Solusi Water Treatment untuk Setiap Industri</h1>
    <p>PT Tirta Sumber Makmur memiliki pengalaman mendalam melayani berbagai sektor industri dengan solusi yang disesuaikan untuk kebutuhan spesifik masing-masing.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-center max-w-[600px] mx-auto mb-[3rem] "><span className="inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-ice px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem] border border-border">Sektor yang Kami Layani</span><h2>Industri yang Kami Tangani</h2><p>Setiap industri memiliki standar kualitas air yang berbeda. Kami memahami dan memenuhi semua kebutuhan tersebut.</p><div className="w-[36px] h-[3px] bg-gradient-to-r from-blue to-accent rounded-[2px] mx-auto mt-[0.85rem]"></div></div>
    <div className="ind-detail-grid">

      <div className="ind-card " id="manufaktur">
        <div className="ind-card-head">
          <div className="ind-ico-big" style={{"background":"linear-gradient(135deg,#e8f4fd,#cde3f3)"}}><Factory className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div>
          <div><h3>Industri Manufaktur</h3><span>Tekstil, Otomotif, Elektronik, F&amp;B</span></div>
        </div>
        <div className="ind-card-body">
          <p>Industri manufaktur membutuhkan air proses dengan kualitas konsisten. Sistem RO TSM menyediakan air bebas mineral untuk boiler, cooling tower, proses produksi, dan kebutuhan utilitas pabrik.</p>
          <div className="ind-tags"><span className="ind-tag">Boiler Feed Water</span><span className="ind-tag">Process Water</span><span className="ind-tag">Cooling Water</span><span className="ind-tag">Rinsing Water</span></div>
        </div>
        <div className="ind-card-foot"><span>Kapasitas: 5–500 m³/hari</span><Link to="/industri/manufaktur">Pelajari →</Link></div>
      </div>

      <div className="ind-card " id="hotel">
        <div className="ind-card-head">
          <div className="ind-ico-big" style={{"background":"linear-gradient(135deg,#e8f4fd,#cde3f3)"}}>🏨</div>
          <div><h3>Hotel &amp; Pariwisata</h3><span>Hotel Bintang, Resort, Vila</span></div>
        </div>
        <div className="ind-card-body">
          <p>Kualitas air yang prima adalah bagian dari pengalaman tamu yang tak terlupakan. Sistem RO TSM memastikan air minum, laundry, kolam renang, dan spa hotel memenuhi standar tertinggi.</p>
          <div className="ind-tags"><span className="ind-tag">Air Minum</span><span className="ind-tag">Laundry</span><span className="ind-tag">Kolam Renang</span><span className="ind-tag">Spa &amp; Wellness</span></div>
        </div>
        <div className="ind-card-foot"><span>Kapasitas: 1–50 m³/hari</span><Link to="/industri/hotel">Pelajari →</Link></div>
      </div>

      <div className="ind-card " id="rs">
        <div className="ind-card-head">
          <div className="ind-ico-big" style={{"background":"linear-gradient(135deg,#e8f4fd,#cde3f3)"}}>⚕️</div>
          <div><h3>Rumah Sakit &amp; Farmasi</h3><span>RS, Klinik, Pabrik Obat, Lab</span></div>
        </div>
        <div className="ind-card-body">
          <p>Industri medis dan farmasi memiliki standar kualitas air paling ketat. Sistem RO + EDI TSM menghasilkan Purified Water dan Water for Injection sesuai standar USP, Ph.Eur, dan BPOM.</p>
          <div className="ind-tags"><span className="ind-tag">Purified Water</span><span className="ind-tag">Water for Injection</span><span className="ind-tag">Hemodialisis</span><span className="ind-tag">Sterilisasi</span></div>
        </div>
        <div className="ind-card-foot"><span>Kapasitas: 500L–20 m³/hari</span><Link to="/industri/rs">Pelajari →</Link></div>
      </div>

      <div className="ind-card " id="farmasi">
        <div className="ind-card-head">
          <div className="ind-ico-big" style={{"background":"linear-gradient(135deg,#e8f4fd,#cde3f3)"}}>💊</div>
          <div><h3>Industri Farmasi (Khusus)</h3><span>Pabrik Obat, Sediaan Steril, Biologi</span></div>
        </div>
        <div className="ind-card-body">
          <p>Halaman dedicated untuk industri farmasi: Purified Water, Water for Injection, Pure Steam dengan validasi IQ/OQ/PQ lengkap sesuai pedoman CPOB BPOM, USP, EP, dan JP. Termasuk loop distribusi SS-316L electropolished.</p>
          <div className="ind-tags"><span className="ind-tag">CPOB BPOM</span><span className="ind-tag">Purified Water</span><span className="ind-tag">WFI</span><span className="ind-tag">Validasi IQ/OQ/PQ</span></div>
        </div>
        <div className="ind-card-foot"><span>Kapasitas: 200L–5 m³/jam</span><Link to="/industri/farmasi">Pelajari →</Link></div>
      </div>

      <div className="ind-card " id="agri">
        <div className="ind-card-head">
          <div className="ind-ico-big" style={{"background":"linear-gradient(135deg,#e8f4fd,#cde3f3)"}}>🌾</div>
          <div><h3>Agrikultur &amp; Perkebunan</h3><span>Irigasi, Greenhouse, Aquakultur</span></div>
        </div>
        <div className="ind-card-body">
          <p>Kualitas air irigasi yang baik meningkatkan hasil panen dan kesehatan tanaman. TSM menyediakan sistem filtrasi dan RO untuk greenhouse, hidroponik, dan fasilitas aquakultur modern.</p>
          <div className="ind-tags"><span className="ind-tag">Irigasi Tetes</span><span className="ind-tag">Hidroponik</span><span className="ind-tag">Aquakultur</span><span className="ind-tag">Pengolahan Limbah Kebun</span></div>
        </div>
        <div className="ind-card-foot"><span>Kapasitas: 1–100 m³/hari</span><Link to="/industri/agrikultur">Pelajari →</Link></div>
      </div>

      <div className="ind-card " id="pltu">
        <div className="ind-card-head">
          <div className="ind-ico-big" style={{"background":"linear-gradient(135deg,#e8f4fd,#cde3f3)"}}>⚡</div>
          <div><h3>Pembangkit Listrik</h3><span>PLTU, PLTG, PLTA, Geothermal</span></div>
        </div>
        <div className="ind-card-body">
          <p>Boiler bertekanan tinggi di pembangkit listrik membutuhkan air dengan kemurnian ekstrem. Sistem demineralisasi dan RO TSM memenuhi spesifikasi ASME/VGB untuk boiler makeup water.</p>
          <div className="ind-tags"><span className="ind-tag">Boiler Makeup Water</span><span className="ind-tag">Condensate Polishing</span><span className="ind-tag">Cooling Tower</span><span className="ind-tag">Demineralisasi</span></div>
        </div>
        <div className="ind-card-foot"><span>Kapasitas: 10–500 m³/hari</span><Link to="/industri/pltu">Pelajari →</Link></div>
      </div>

      <div className="ind-card " id="properti">
        <div className="ind-card-head">
          <div className="ind-ico-big" style={{"background":"linear-gradient(135deg,#e8f4fd,#cde3f3)"}}><Building className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div>
          <div><h3>Properti &amp; Real Estate</h3><span>Apartemen, Gedung Perkantoran, Mall</span></div>
        </div>
        <div className="ind-card-body">
          <p>Gedung bertingkat dan kawasan perumahan semakin banyak yang mengintegrasikan sistem RO sentral untuk menyediakan air minum berkualitas langsung ke setiap unit penghuni.</p>
          <div className="ind-tags"><span className="ind-tag">Air Minum Sentral</span><span className="ind-tag">Cooling Tower</span><span className="ind-tag">Air Bersih Penghuni</span><span className="ind-tag">IPAL Gedung</span></div>
        </div>
        <div className="ind-card-foot"><span>Kapasitas: 5–100 m³/hari</span><Link to="/industri/properti">Pelajari →</Link></div>
      </div>

      <div className="ind-card " id="maritim">
        <div className="ind-card-head">
          <div className="ind-ico-big" style={{"background":"linear-gradient(135deg,#e8f4fd,#cde3f3)"}}><Ship className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div>
          <div><h3>Maritim &amp; Offshore</h3><span>Kapal, Platform, Pulau Terpencil</span></div>
        </div>
        <div className="ind-card-body">
          <p>Di tengah laut, air tawar adalah kebutuhan vital. Sistem SWRO compact dan desalinasi TSM telah digunakan di berbagai kapal, platform offshore, dan pulau terpencil di seluruh Indonesia.</p>
          <div className="ind-tags"><span className="ind-tag">SWRO Compact</span><span className="ind-tag">Desalinasi Portable</span><span className="ind-tag">Air Minum Kru</span><span className="ind-tag">Air Proses Platform</span></div>
        </div>
        <div className="ind-card-foot"><span>Kapasitas: 500L–50 m³/hari</span><Link to="/industri/maritim">Pelajari →</Link></div>
      </div>

      <div className="ind-card ">
        <div className="ind-card-head">
          <div className="ind-ico-big" style={{"background":"linear-gradient(135deg,#e8f4fd,#cde3f3)"}}>🧴</div>
          <div><h3>Minuman &amp; Food &amp; Beverage</h3><span>Pabrik Minuman, Industri Makanan</span></div>
        </div>
        <div className="ind-card-body">
          <p>Kualitas air secara langsung mempengaruhi rasa dan kualitas produk minuman. Sistem RO TSM menghasilkan air proses yang konsisten untuk memastikan standar produk yang seragam.</p>
          <div className="ind-tags"><span className="ind-tag">Air Proses Produksi</span><span className="ind-tag">Air Minum Isi Ulang</span><span className="ind-tag">CIP Cleaning</span><span className="ind-tag">Boiler Steam</span></div>
        </div>
        <div className="ind-card-foot"><span>Kapasitas: 5–200 m³/hari</span><Link to="/kontak">Konsultasi →</Link></div>
      </div>

    </div>
  </div>
</section>
<section className="py-16" style={{"background":"var(--navy)"}}>
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-center max-w-[600px] mx-auto mb-[3rem] " style={{"color":"#fff"}}>
      <span className="inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-ice px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem] border border-border" style={{"background":"rgba(255,255,255,.1)","borderColor":"rgba(255,255,255,.18)","color":"var(--accent)"}}>Portofolio</span>
      <h2 style={{"color":"#fff"}}>Proyek yang Telah Kami Kerjakan</h2>
      <p style={{"color":"rgba(255,255,255,.7)"}}>Sekilas beberapa proyek nyata yang berhasil kami selesaikan untuk klien di berbagai industri.</p>
      <div className="w-[36px] h-[3px] bg-gradient-to-r from-blue to-accent rounded-[2px] mx-auto mt-[0.85rem]"></div>
    </div>
    <div className="case-grid">
      <div className="case-card " style={{"backgroundImage":"url(images/foto-pemasangan-lapangan.jpg)","backgroundSize":"cover","position":"relative"}}>
<div style={{"background":"rgba(10,34,64,.8)","borderRadius":"12px","padding":"1.8rem"}}>
        <div className="case-cat">Manufaktur · Karawang</div>
        <h3>Sistem RO Pabrik Tekstil — 200 m³/hari</h3>
        <p>Instalasi sistem RO industri lengkap dengan pre-treatment untuk menggantikan suplai PDAM dan menurunkan biaya operasional.</p>
        <div className="case-stat"><div><div className="sn">70%</div><div className="sl">Hemat Air PDAM</div></div><div><div className="sn">200</div><div className="sl">m³ / hari</div></div><div><div className="sn">18 bln</div><div className="sl">Payback Period</div></div></div>
      </div>
      <div className="case-card ">
        <div className="case-cat">Pariwisata · Raja Ampat</div>
        <h3>Desalinasi Air Laut Resort Mewah — 30 m³/hari</h3>
        <p>Sistem SWRO untuk resort terpencil di kepulauan Papua Barat, menggantikan distribusi air tangki yang mahal dan tidak andal.</p>
        <div className="case-stat"><div><div className="sn">100%</div><div className="sl">Mandiri Air Tawar</div></div><div><div className="sn">30</div><div className="sl">m³ / hari</div></div><div><div className="sn">60%</div><div className="sl">Hemat Biaya Air</div></div></div>
      </div>
      <div className="case-card ">
        <div className="case-cat">Farmasi · Tangerang</div>
        <h3>Purified Water System GMP — 5 m³/hari</h3>
        <p>Sistem produksi Purified Water sesuai standar CPOB BPOM dan USP untuk fasilitas produksi obat generik.</p>
        <div className="case-stat"><div><div className="sn">USP</div><div className="sl">Standar Terpenuhi</div></div><div><div className="sn">&lt;10</div><div className="sl">CFU/100mL</div></div><div><div className="sn">100%</div><div className="sl">Lulus Audit BPOM</div></div></div>
      </div>
    </div>
    <div style={{"textAlign":"center","marginTop":"2.5rem"}}>
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/artikel">📂 Lihat Semua Studi Kasus</Link>
    </div>
  </div>
</div></section>
<section className="py-16" style={{"background":"var(--gray)"}}>
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-center max-w-[600px] mx-auto mb-[3rem] ">
      <span className="inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-ice px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem] border border-border">Klien &amp; Mitra</span>
      <h2>Dipercaya oleh Perusahaan Terkemuka</h2>
      <p>Lebih dari 24 tahun kami telah melayani berbagai perusahaan besar, institusi, dan lembaga pemerintah di seluruh Indonesia.</p>
      <div className="w-[36px] h-[3px] bg-gradient-to-r from-blue to-accent rounded-[2px] mx-auto mt-[0.85rem]"></div>
    </div>
    <div className="client-marquee-wrap">
      <div className="client-marquee" id="clientMarquee">
        <div className="cl-track" id="clTrack">
<div className="cl-item"><picture>
  <source srcSet="images/logo-ritzcarlton.webp" type="image/webp" />
  <img src="images/logo-ritzcarlton.png" alt="The Ritz-Carlton" title="The Ritz-Carlton" loading="lazy" decoding="async" />
</picture></div>
<div className="cl-item"><picture>
  <source srcSet="images/logo-pelindo.webp" type="image/webp" />
  <img src="images/logo-pelindo.png" alt="PT Pelindo" title="PT Pelindo" loading="lazy" decoding="async" />
</picture></div>
<div className="cl-item"><picture>
  <source srcSet="images/logo-sosro.webp" type="image/webp" />
  <img src="images/logo-sosro.png" alt="PT Sosro" title="PT Sosro" loading="lazy" decoding="async" />
</picture></div>
<div className="cl-item"><picture>
  <source srcSet="images/logo-wintermar.webp" type="image/webp" />
  <img src="images/logo-wintermar.png" alt="Wintermar Offshore Marine" title="Wintermar Offshore Marine" loading="lazy" decoding="async" />
</picture></div>
<div className="cl-item"><picture>
  <source srcSet="images/logo-app.webp" type="image/webp" />
  <img src="images/logo-app.png" alt="APP (Asia Pulp &amp; Paper)" title="APP (Asia Pulp &amp; Paper)" loading="lazy" decoding="async" />
</picture></div>
<div className="cl-item"><picture>
  <source srcSet="images/logo-sasa.webp" type="image/webp" />
  <img src="images/logo-sasa.png" alt="PT Sasa Inti" title="PT Sasa Inti" loading="lazy" decoding="async" />
</picture></div>
<div className="cl-item"><picture>
  <source srcSet="images/logo-ekahospital.webp" type="image/webp" />
  <img src="images/logo-ekahospital.png" alt="Eka Hospital" title="Eka Hospital" loading="lazy" decoding="async" />
</picture></div>
<div className="cl-item"><picture>
  <source srcSet="images/logo-suryahutanijaya.webp" type="image/webp" />
  <img src="images/logo-suryahutanijaya.png" alt="PT Surya Hutani Jaya" title="PT Surya Hutani Jaya" loading="lazy" decoding="async" />
</picture></div>
<div className="cl-item"><picture>
  <source srcSet="images/logo-hillcon.webp" type="image/webp" />
  <img src="images/logo-hillcon.png" alt="Hillcon" title="Hillcon" loading="lazy" decoding="async" />
</picture></div>
<div className="cl-item"><picture>
  <source srcSet="images/logo-triton.webp" type="image/webp" />
  <img src="images/logo-triton.png" alt="Triton Offshore" title="Triton Offshore" loading="lazy" decoding="async" />
</picture></div>
<div className="cl-item"><picture>
  <source srcSet="images/logo-suryainternusa.webp" type="image/webp" />
  <img src="images/logo-suryainternusa.png" alt="Surya Internusa" title="Surya Internusa" loading="lazy" decoding="async" />
</picture></div>
<div className="cl-item"><picture>
  <source srcSet="images/logo-noahtu.webp" type="image/webp" />
  <img src="images/logo-noahtu.png" alt="Noahtu Shipyard" title="Noahtu Shipyard" loading="lazy" decoding="async" />
</picture></div>
<div className="cl-item"><picture>
  <source srcSet="images/logo-mako.webp" type="image/webp" />
  <img src="images/logo-mako.png" alt="Mako Cake &amp; Bakery" title="Mako Cake &amp; Bakery" loading="lazy" decoding="async" />
</picture></div>
<div className="cl-item"><picture>
  <source srcSet="images/logo-liziz.webp" type="image/webp" />
  <img src="images/logo-liziz.png" alt="Liziz Indoliziz Marine" title="Liziz Indoliziz Marine" loading="lazy" decoding="async" />
</picture></div>
<div className="cl-item"><picture>
  <source srcSet="images/logo-melinda.webp" type="image/webp" />
  <img src="images/logo-melinda.png" alt="RS Melinda" title="RS Melinda" loading="lazy" decoding="async" />
</picture></div>
<div className="cl-item"><picture>
  <source srcSet="images/logo-adani.webp" type="image/webp" />
  <img src="images/logo-adani.png" alt="Adani" title="Adani" loading="lazy" decoding="async" />
</picture></div>
<div className="cl-item"><picture>
  <source srcSet="images/logo-atmajaya.webp" type="image/webp" />
  <img src="images/logo-atmajaya.png" alt="Universitas Atma Jaya Yogyakarta" title="Universitas Atma Jaya Yogyakarta" loading="lazy" decoding="async" />
</picture></div>
<div className="cl-item"><picture>
  <source srcSet="images/logo-ijsm.webp" type="image/webp" />
  <img src="images/logo-ijsm.png" alt="PT Indojaya Sukses Makmur" title="PT Indojaya Sukses Makmur" loading="lazy" decoding="async" />
</picture></div>
<div className="cl-item"><picture>
  <source srcSet="images/logo-klh.webp" type="image/webp" />
  <img src="images/logo-klh.png" alt="Kementerian Lingkungan Hidup" title="Kementerian Lingkungan Hidup" loading="lazy" decoding="async" />
</picture></div>
<div className="cl-item"><picture>
  <source srcSet="images/logo-unair.webp" type="image/webp" />
  <img src="images/logo-unair.png" alt="Universitas Airlangga" title="Universitas Airlangga" loading="lazy" decoding="async" />
</picture></div>
        </div>
      </div>
    </div>
    <p style={{"textAlign":"center","fontSize":".8rem","color":"var(--muted)","marginTop":"1.5rem","fontStyle":"italic"}}>dan masih banyak klien lainnya di seluruh Indonesia 🇮🇩</p>
  </div>
</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Industri Anda Belum Terdaftar?</h2>
    <p>Kami melayani hampir semua sektor yang membutuhkan air berkualitas. Konsultasikan kebutuhan spesifik Anda.</p>
    <div className="flex gap-4 justify-center flex-wrap"><Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak">💬 Konsultasi Sekarang</Link><Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/produk">🔍 Lihat Produk Kami</Link></div>
  </div>
</div>

    </>
  );
};

export default Industri;
