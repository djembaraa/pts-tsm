import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList } from 'lucide-react';


const PortoSinarmasGroup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/portofolio">Portofolio</Link> › Sinarmas Forestry Group</div>
    <h1>Portofolio Sinarmas Forestry — BWRO &amp; Clarifier untuk Nursery Skala Besar</h1>
    <p>Sejak 2017, TSM dipercaya menangani sistem pengolahan air untuk nursery (pembibitan tanaman industri) milik grup Sinarmas Forestry di Palembang dan Kalimantan, dengan total kapasitas RO terinstal lebih dari 250 m³/jam.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>

        <div className="cs-hero">
          <img src="images/foto-pemasangan-lapangan.jpg" alt="BWRO Nursery Sinarmas Forestry" />
          <div className="cs-overlay">
            <h2>Mitra Pengolahan Air untuk Operasi Nursery Sinarmas</h2>
          </div>
        </div>

        <div className="cs-stats">
          <div className="cs-stat"><div className="num">15+</div><div className="lbl">Unit BWRO Terpasang</div></div>
          <div className="cs-stat"><div className="num">250+</div><div className="lbl">m³/jam Total Kapasitas</div></div>
          <div className="cs-stat"><div className="num">8+</div><div className="lbl">Tahun Kerjasama</div></div>
          <div className="cs-stat"><div className="num">5</div><div className="lbl">Anak Perusahaan</div></div>
        </div>

        <h2>Tentang Proyek Sinarmas Forestry</h2>
        <p>Operasi nursery skala besar membutuhkan suplai air bersih dengan kualitas konsisten dalam volume sangat besar untuk pembibitan tanaman industri (akasia, ekaliptus, dll). Sumber air baku di lokasi nursery umumnya air payau (brackish water) dari sumur dalam atau air permukaan dengan kekeruhan tinggi yang tidak dapat langsung digunakan.</p>
        <p>TSM menyediakan kombinasi <strong>Clarifier System</strong> (untuk pre-treatment), <strong>Ultrafiltration</strong> (untuk reduksi turbidity), dan <strong>BWRO System</strong> (untuk demineralisasi) yang dirancang khusus untuk operasi 24/7 di lingkungan nursery dengan peralatan minim perawatan.</p>

        <div className="featured-card">
          <h4>📌 Studi Kasus Lengkap: PT Sinar Mas Forestry</h4>
          <p>Untuk studi kasus mendalam tentang penerapan BWRO di site nursery dan dampaknya pada produktivitas pembibitan, baca <Link style={{"color":"#7dd3fc","fontWeight":"700","textDecoration":"underline"}} to="/portofolio/sinarmas-forestry">studi kasus Sinarmas Forestry →</Link></p>
        </div>

        <h2>Daftar Proyek per Anak Perusahaan</h2>

        <div className="cat-section">
          <h3>🌱 PT Bumi Andalas Permai (BAP) — Palembang</h3>
          <table className="proj-table">
            <thead>
              <tr><th style={{"width":"14%"}}>Tahun</th><th>Sistem</th><th>Lokasi</th></tr>
            </thead>
            <tbody>
              <tr><td className="yr">Agu 2025</td><td>BWRO Cap. 20 m³/jam × 2 Unit</td><td>Nursery Lebong Hitam</td></tr>
              <tr><td className="yr">Jan 2022</td><td>BWRO Cap. 20 m³/jam × 2 Unit</td><td>Nursery Central — Sugihan OKI</td></tr>
              <tr><td className="yr">Jan 2022</td><td>BWRO Cap. 15 m³/jam × 4 Unit</td><td>Nursery Air Sugihan — Sugihan OKI</td></tr>
              <tr><td className="yr">Agu 2020</td><td>Water Tank Zinc Alum 360 m³</td><td>Nursery Central Baung</td></tr>
              <tr><td className="yr">Nov 2021</td><td>Water Tank Zinc Alum 360 m³</td><td>Nursery Central Baung</td></tr>
              <tr><td className="yr">Jul 2018</td><td>Clarifier &amp; UF System Cap. 15 m³/jam (2 Set)</td><td>Air Sugihan</td></tr>
              <tr><td className="yr">Mar 2020</td><td>WTP Klarifier &amp; RO Cap. 40 m³/day</td><td>Site Central Baung — OKI Palembang</td></tr>
              <tr><td className="yr">Jan 2020</td><td>WTP Clarifier &amp; UF System Cap. 15 m³/day</td><td>Baung Blok D — OKI Palembang</td></tr>
              <tr><td className="yr">Jul 2016</td><td>SWRO Cap. 1.000 LPH</td><td>Site RAM (Sinarforestry) — Palembang</td></tr>
              <tr><td className="yr">Jul 2016</td><td>SWRO Cap. 1.000 LPH</td><td>Site DBT (Sinarforestry) — Palembang</td></tr>
              <tr><td className="yr">Jan 2017</td><td>SWRO Cap. 500 LPH (4 Unit)</td><td>4 Site: Air Sugihan, Tanjung Jati, Simpang Heran, Jelutung</td></tr>
            </tbody>
          </table>
        </div>

        <div className="cat-section">
          <h3>🌳 PT Bumi Mekar Hijau (BMH) — Palembang</h3>
          <table className="proj-table">
            <thead>
              <tr><th style={{"width":"14%"}}>Tahun</th><th>Sistem</th><th>Lokasi</th></tr>
            </thead>
            <tbody>
              <tr><td className="yr">Agu 2025</td><td>BWRO Cap. 20 m³/jam</td><td>Nursery Padang Sugihan</td></tr>
              <tr><td className="yr">Mar 2022</td><td>BWRO Cap. 20 m³/jam × 2 Unit</td><td>Nursery Lebong Hitam — Sugihan OKI</td></tr>
              <tr><td className="yr">Mar 2022</td><td>BWRO Cap. 20 m³/jam × 1 Unit</td><td>Nursery Sungai Gebang — Sugihan OKI</td></tr>
              <tr><td className="yr">Agu 2023</td><td>WTP Cap. 1 m³/jam &amp; Rumah WTP</td><td>Distrik Sungai Serdang — Palembang</td></tr>
              <tr><td className="yr">Agu 2018</td><td>Clarifier &amp; UF System Cap. 15 m³/jam</td><td>Site Beyuku — Palembang</td></tr>
            </tbody>
          </table>
        </div>

        <div className="cat-section">
          <h3>🌲 PT SBA Wood Industries — Palembang</h3>
          <table className="proj-table">
            <thead>
              <tr><th style={{"width":"14%"}}>Tahun</th><th>Sistem</th><th>Lokasi</th></tr>
            </thead>
            <tbody>
              <tr><td className="yr">Agu 2023</td><td>WTP Cap. 1 m³/jam &amp; Rumah WTP</td><td>Distrik Kuala Lumpur — Palembang</td></tr>
              <tr><td className="yr">Agu 2023</td><td>WTP Cap. 4 m³/jam &amp; Rumah WTP</td><td>Distrik Sungai Riding — Palembang</td></tr>
              <tr><td className="yr">Agu 2023</td><td>WTP Cap. 1 m³/jam &amp; Rumah WTP</td><td>Simpang Mun — Palembang</td></tr>
              <tr><td className="yr">Mar 2022</td><td>BWRO Cap. 15 m³/jam × 2 Unit</td><td>Nursery Sungai Beyuku — Sugihan OKI</td></tr>
              <tr><td className="yr">Jun 2018</td><td>Clarifier &amp; BWRO System Cap. 15 m³/jam</td><td>Lebong Hitam — Palembang</td></tr>
              <tr><td className="yr">Jan 2017</td><td>BWRO Cap. 210 LPH</td><td>Palembang</td></tr>
              <tr><td className="yr">Feb 2018</td><td>RO System Cap. 210 LPH</td><td>Palembang</td></tr>
            </tbody>
          </table>
        </div>

        <div className="cat-section">
          <h3>🌿 PT Surya Hutani Jaya &amp; Lainnya — Kalimantan Timur</h3>
          <table className="proj-table">
            <thead>
              <tr><th style={{"width":"14%"}}>Tahun</th><th>Sistem</th><th>Lokasi</th></tr>
            </thead>
            <tbody>
              <tr><td className="yr">Sep 2025</td><td>Water Tank Zinc Alum 533 m³ × 2 Unit</td><td>Nursery Sebulu — PT Surya Hutani Jaya</td></tr>
              <tr><td className="yr">Feb 2021</td><td>RO Cap. 500 LPH (3 Unit)</td><td>Sinarmas Nursery — Distrik Lebong Hitam (PT DutatransAbadi)</td></tr>
            </tbody>
          </table>
        </div>

        <div className="cat-section">
          <h3>🌾 PT Ciptamas Bumi Subur — Palembang</h3>
          <table className="proj-table">
            <thead>
              <tr><th style={{"width":"14%"}}>Tahun</th><th>Sistem</th><th>Lokasi</th></tr>
            </thead>
            <tbody>
              <tr><td className="yr">Mei 2024</td><td>WTP Cap. 2 m³/jam &amp; Rumah WTP</td><td>Distrik Muara Sugihan — Palembang</td></tr>
              <tr><td className="yr">Agu 2023</td><td>WTP Cap. 2 m³/jam &amp; Rumah WTP</td><td>Distrik Muara Sugihan — Palembang</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Mengapa TSM Dipilih oleh Sinarmas Forestry</h2>
        <ul>
          <li><strong>Kapasitas Skala Besar</strong> — TSM mampu mendesain dan memasang BWRO 15-20 m³/jam dengan teknologi membran terkemuka (Dow, Toray) untuk operasi nursery skala industri.</li>
          <li><strong>Kombinasi Clarifier + UF + RO</strong> — pre-treatment lengkap untuk menghadapi air baku dengan turbidity dan bahan organik tinggi yang umum di lahan nursery.</li>
          <li><strong>Track Record Multi-Site</strong> — pengalaman menangani 15+ unit di lokasi-lokasi terpencil (Sugihan OKI, Lebong Hitam, Beyuku, Sebulu) dengan logistik yang menantang.</li>
          <li><strong>Konstruksi Rumah WTP</strong> — TSM tidak hanya memasok unit, tapi juga membangun rumah/shelter WTP yang sesuai standar lapangan.</li>
          <li><strong>Service &amp; Spare Parts Aktif</strong> — TSM menyediakan suku cadang dan layanan service rutin untuk seluruh unit terpasang.</li>
        </ul>

      </article>

      <aside className="art-sticky">
        <div style={{"background":"var(--ice)","border":"1px solid var(--border)","borderRadius":"10px","padding":"1.5rem","marginBottom":"1rem"}}>
          <h4 style={{"fontFamily":"'Barlow Condensed',sans-serif","fontSize":"1.2rem","color":"var(--navy)","marginBottom":".8rem"}}>Untuk Nursery / Forestry / Plantation</h4>
          <p style={{"fontSize":".85rem","color":"var(--muted)","lineHeight":"1.6","marginBottom":"1rem"}}>TSM siap mendukung kebutuhan air bersih operasional nursery, pembibitan, dan pabrik pengolahan kayu/kertas.</p>
          <Link style={{"display":"block","textAlign":"center","padding":".7rem","background":"var(--blue)","color":"#fff","borderRadius":"6px","fontWeight":"700","textDecoration":"none","fontSize":".85rem"}} to="/kontak">📞 Diskusi Kebutuhan</Link>
        </div>

        <div style={{"background":"var(--white)","border":"1px solid var(--border)","borderRadius":"10px","padding":"1.5rem"}}>
          <h4 style={{"fontFamily":"'Barlow Condensed',sans-serif","fontSize":"1.1rem","color":"var(--navy)","marginBottom":".8rem"}}>Halaman Terkait</h4>
          <ul style={{"listStyle":"none","padding":"0","margin":"0","fontSize":".85rem"}}>
            <li style={{"padding":".5rem 0","borderBottom":"1px solid var(--border)"}}><Link style={{"color":"var(--text)","textDecoration":"none"}} to="/portofolio/sinarmas-forestry">→ Studi Kasus BAP Sinarmas</Link></li>
            <li style={{"padding":".5rem 0","borderBottom":"1px solid var(--border)"}}><Link style={{"color":"var(--text)","textDecoration":"none"}} to="/industri/agrikultur">→ Industri Agrikultur</Link></li>
            <li style={{"padding":".5rem 0","borderBottom":"1px solid var(--border)"}}><Link style={{"color":"var(--text)","textDecoration":"none"}} to="/produk/bwro">→ Produk BWRO</Link></li>
            <li style={{"padding":".5rem 0"}}><Link style={{"color":"var(--text)","textDecoration":"none"}} to="/produk/zincalume-tank">→ Tank Zincalume</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Punya Operasi Nursery Skala Besar?</h2>
    <p>Tim TSM siap membantu desain BWRO, clarifier, dan storage tank yang sesuai kondisi air baku dan target produksi nursery Anda.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak">📞 Konsultasi</Link>
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/layanan/feasibility"><ClipboardList className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Studi Kelayakan</Link>
    </div>
  </div>
</div>

    </>
  );
};

export default PortoSinarmasGroup;
