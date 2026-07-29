import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Ship } from 'lucide-react';


const PortoTniAl = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/portofolio">Portofolio</Link> › TNI AL &amp; KRI</div>
    <h1>Portofolio TNI AL — Watermaker SWRO untuk KRI &amp; Pangkalan</h1>
    <p>Sejak 2011, TSM telah memasok sistem desalinasi air laut (SWRO watermaker) untuk lebih dari 15 unit KRI dari berbagai kelas, serta proyek Dislitbang TNI dan pangkalan TNI AL Fasharkan Jakarta.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>

        <div className="cs-hero">
          <img src="images/porto-kri-amy-1.jpg" alt="SWRO Watermaker KRI TNI AL" />
          <div className="cs-overlay">
            <h2>15+ Unit KRI Telah Menggunakan Watermaker TSM</h2>
          </div>
        </div>

        <div className="cs-stats">
          <div className="cs-stat"><div className="num">15+</div><div className="lbl">Unit KRI</div></div>
          <div className="cs-stat"><div className="num">2.000+</div><div className="lbl">LPD per Unit</div></div>
          <div className="cs-stat"><div className="num">14+</div><div className="lbl">Tahun Pengalaman TNI</div></div>
          <div className="cs-stat"><div className="num">BKI</div><div className="lbl">Sertifikasi</div></div>
        </div>

        <h2>Tentang Proyek TNI AL</h2>
        <p>Watermaker untuk Kapal Perang RI memiliki tantangan teknis berbeda dari SWRO komersial: footprint terbatas, harus tahan getaran propulsi, material marine-grade SS-316L minimum, sertifikasi BKI wajib, dan harus dapat dioperasikan-troubleshoot oleh awak kapal tanpa bantuan engineer luar.</p>
        <p>TSM telah membangun pengalaman panjang dalam memenuhi kriteria spesifik ini sejak proyek pertama untuk Pangkalan TNI AL Fasharkan pada tahun 2020, yang berlanjut dengan proyek pengadaan watermaker untuk kapal-kapal perang aktif TNI AL.</p>

        <div className="featured-card">
          <h4>📌 Studi Kasus Lengkap: KRI AMY</h4>
          <p>Untuk studi kasus mendalam tentang watermaker SWRO 20 TPD pada KRI AMY Surabaya, termasuk spesifikasi teknis, instalasi, dan tantangan engineering, baca <Link style={{"color":"#7dd3fc","fontWeight":"700","textDecoration":"underline"}} to="/portofolio/kri">studi kasus KRI AMY →</Link></p>
        </div>

        <h2>Daftar Lengkap Proyek TNI AL</h2>

        <div className="cat-section">
          <h3><Ship className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Kapal Perang Republik Indonesia (KRI)</h3>
          <table className="proj-table">
            <thead>
              <tr><th style={{"width":"14%"}}>Tahun</th><th>Sistem</th><th>Unit KRI</th></tr>
            </thead>
            <tbody>
              <tr><td className="yr">Nov 2024</td><td>SWRO Cap. 30 TPD × 2 Unit</td><td>KRI TSR 542</td></tr>
              <tr><td className="yr">Nov 2024</td><td>SWRO Cap. 30 TPD</td><td>KRI Kambani</td></tr>
              <tr><td className="yr">Agu 2024</td><td>SWRO Cap. 30 TPD</td><td>KRI Sultan Iskandar Muda 367</td></tr>
              <tr><td className="yr">Jul 2023</td><td>SWRO Cap. 20 Ton/Day</td><td>KRI AMY (Surabaya) — <Link to="/portofolio/kri">studi kasus</Link></td></tr>
              <tr><td className="yr">Mar 2022</td><td>SWRO Cap. 24 Ton/Day × 2 Unit</td><td>KRI Dewa Kembar (Dismatal Pondok Dayung)</td></tr>
              <tr><td className="yr">Jun 2020</td><td>SWRO Cap. 2.000 LPD</td><td>KRI Patimura</td></tr>
              <tr><td className="yr">Jun 2020</td><td>SWRO Cap. 2.000 LPD</td><td>KRI Cut Nyakdien</td></tr>
              <tr><td className="yr">Jun 2020</td><td>SWRO Cap. 2.000 LPD</td><td>KRI Sutanto</td></tr>
              <tr><td className="yr">Jun 2020</td><td>SWRO Cap. 2.000 LPD</td><td>KRI Tengku Umar</td></tr>
              <tr><td className="yr">Jun 2020</td><td>SWRO Cap. 2.000 LPD</td><td>KRI Sutedi Senoputra 378</td></tr>
              <tr><td className="yr">Jun 2020</td><td>SWRO Cap. 2.000 LPD</td><td>KRI Silas Papare 386</td></tr>
              <tr><td className="yr">Jun 2020</td><td>SWRO Cap. 2.000 LPD</td><td>KRI SPICA</td></tr>
            </tbody>
          </table>
        </div>

        <div className="cat-section">
          <h3>🏛️ Lembaga &amp; Dinas TNI</h3>
          <table className="proj-table">
            <thead>
              <tr><th style={{"width":"14%"}}>Tahun</th><th>Sistem</th><th>Lembaga</th></tr>
            </thead>
            <tbody>
              <tr><td className="yr">Jul 2013</td><td>Water Treatment Condensation System</td><td>DISLITBANGAD TNI AD</td></tr>
              <tr><td className="yr">2012</td><td>RO Seawater Mobile System Cap. 5 m³/day</td><td>Dislitbang TNI AL — Pondok Labu</td></tr>
              <tr><td className="yr">2011</td><td>SWRO Mobile Container</td><td>DISLITBANGAD TNI AD — Matraman Jakarta</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Mengapa TSM Dipilih untuk Proyek TNI AL</h2>
        <ul>
          <li><strong>Pengalaman BKI</strong> — TSM memahami persyaratan klasifikasi BKI untuk peralatan onboard kapal niaga maupun perang.</li>
          <li><strong>Compact &amp; Vibration-Resistant</strong> — desain skid yang dirancang khusus untuk space terbatas dan getaran propulsi tinggi.</li>
          <li><strong>Material Marine-Grade</strong> — SS-316L minimum, dengan eksposur air laut menggunakan super duplex sesuai aplikasi.</li>
          <li><strong>Operator-Friendly</strong> — control panel dan instrumentasi dirancang agar awak kapal dapat operasi rutin tanpa engineer luar.</li>
          <li><strong>After-Sales</strong> — TSM menyediakan suku cadang dan dukungan teknis untuk seluruh masa operasi unit.</li>
        </ul>

        <h2>Kapal &amp; Aplikasi Lain dalam Lingkup Maritim</h2>
        <p>Selain TNI AL, TSM juga menangani watermaker untuk berbagai kapal komersial — AHT/tug boat, kapal ikan, kapal LCT, kapal pinisi resort, dan kapal offshore. Lihat <Link to="/portofolio/kri-fleet">studi kasus armada KRI</Link> dan <Link to="/portofolio/halliburton">studi kasus Halliburton</Link> untuk konteks aplikasi maritim industri.</p>

        <div style={{"background":"var(--ice)","borderLeft":"4px solid var(--blue)","padding":"1.2rem 1.5rem","margin":"2rem 0","borderRadius":"0 8px 8px 0"}}>
          <p style={{"margin":"0","fontSize":".95rem"}}><strong>📌 Catatan:</strong> Daftar di atas adalah proyek yang tercatat pada portofolio resmi. Beberapa proyek dengan klausul kerahasiaan klien (NDA) dan proyek tersedikit-bocoran tidak ditampilkan publik.</p>
        </div>

      </article>

      <aside className="art-sticky">
        <div style={{"background":"var(--ice)","border":"1px solid var(--border)","borderRadius":"10px","padding":"1.5rem","marginBottom":"1rem"}}>
          <h4 style={{"fontFamily":"'Barlow Condensed',sans-serif","fontSize":"1.2rem","color":"var(--navy)","marginBottom":".8rem"}}>Untuk Pengadaan TNI / Dinas Pemerintah</h4>
          <p style={{"fontSize":".85rem","color":"var(--muted)","lineHeight":"1.6","marginBottom":"1rem"}}>TSM siap mendukung proses pengadaan resmi — kelengkapan dokumen, NPWP, surat dukungan pabrikan, sertifikasi, dan referensi proyek.</p>
          <Link style={{"display":"block","textAlign":"center","padding":".7rem","background":"var(--blue)","color":"#fff","borderRadius":"6px","fontWeight":"700","textDecoration":"none","fontSize":".85rem"}} to="/kontak">📞 Diskusi Pengadaan</Link>
        </div>

        <div style={{"background":"var(--white)","border":"1px solid var(--border)","borderRadius":"10px","padding":"1.5rem"}}>
          <h4 style={{"fontFamily":"'Barlow Condensed',sans-serif","fontSize":"1.1rem","color":"var(--navy)","marginBottom":".8rem"}}>Studi Kasus Terkait</h4>
          <ul style={{"listStyle":"none","padding":"0","margin":"0","fontSize":".85rem"}}>
            <li style={{"padding":".5rem 0","borderBottom":"1px solid var(--border)"}}><Link style={{"color":"var(--text)","textDecoration":"none"}} to="/portofolio/kri">→ KRI AMY 20 TPD</Link></li>
            <li style={{"padding":".5rem 0","borderBottom":"1px solid var(--border)"}}><Link style={{"color":"var(--text)","textDecoration":"none"}} to="/portofolio/kri-fleet">→ Armada KRI (Fleet)</Link></li>
            <li style={{"padding":".5rem 0","borderBottom":"1px solid var(--border)"}}><Link style={{"color":"var(--text)","textDecoration":"none"}} to="/portofolio/halliburton">→ Halliburton Sarulla</Link></li>
            <li style={{"padding":".5rem 0"}}><Link style={{"color":"var(--text)","textDecoration":"none"}} to="/industri/maritim">→ Industri Maritim</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Butuh Watermaker untuk Kapal atau Pangkalan?</h2>
    <p>Tim TSM siap membantu spesifikasi, pengadaan, instalasi, hingga commissioning sesuai standar BKI/TNI.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak">📞 Konsultasi Teknis</Link>
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/produk/fresh-water-generator"><Wrench className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Spesifikasi FWG</Link>
    </div>
  </div>
</div>

    </>
  );
};

export default PortoTniAl;
