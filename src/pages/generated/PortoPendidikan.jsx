import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


const PortoPendidikan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/portofolio">Portofolio</Link> › Sektor Pendidikan</div>
    <h1>Portofolio Sektor Pendidikan — Air Minum Sehat untuk Kampus</h1>
    <p>TSM telah menjadi mitra penyedia sistem RO drinking water dan drinking fountain untuk kampus-kampus terkemuka di Indonesia, termasuk multi-fakultas Universitas Airlangga, kampus Atma Jaya, dan lembaga pendidikan lainnya.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>

        <div className="cs-hero">
          <img src="images/foto-mesin-swro.jpg" alt="RO Drinking Fountain Kampus Universitas" />
          <div className="cs-overlay">
            <h2>Air Minum Berkualitas untuk Mahasiswa &amp; Civitas Akademika</h2>
          </div>
        </div>

        <div className="cs-stats">
          <div className="cs-stat"><div className="num">8+</div><div className="lbl">Kampus &amp; Fakultas</div></div>
          <div className="cs-stat"><div className="num">4</div><div className="lbl">Universitas</div></div>
          <div className="cs-stat"><div className="num">9+</div><div className="lbl">Tahun Mendukung Pendidikan</div></div>
          <div className="cs-stat"><div className="num">100%</div><div className="lbl">Drinking-Water Standard</div></div>
        </div>

        <h2>Tentang Proyek Sektor Pendidikan</h2>
        <p>Kampus modern membutuhkan akses air minum yang aman, mudah, dan ekonomis untuk ribuan mahasiswa dan staf setiap hari. Solusi <strong>RO drinking fountain</strong> dan <strong>drinking water dispenser</strong> adalah pilihan paling efisien — mengurangi sampah botol plastik sekaligus memastikan kualitas air minum sesuai standar Permenkes.</p>
        <p>TSM telah melayani kebutuhan ini sejak 2015, mulai dari sistem skala kecil untuk satu fakultas hingga proyek multi-kampus dengan instalasi terintegrasi.</p>

        <div className="featured-card">
          <h4>📌 Studi Kasus Lengkap: Yayasan Atma Jaya</h4>
          <p>Untuk studi kasus mendalam tentang implementasi drinking fountain di kampus Atma Jaya (Sudirman, Pluit, BSD, Cisauk), baca <Link style={{"color":"#7dd3fc","fontWeight":"700","textDecoration":"underline"}} to="/portofolio/atma-jaya">studi kasus Atma Jaya →</Link></p>
        </div>

        <h2>Daftar Proyek per Institusi</h2>

        <div className="cat-section">
          <h3>🎓 Universitas Airlangga (Surabaya)</h3>
          <table className="proj-table">
            <thead>
              <tr><th style={{"width":"14%"}}>Tahun</th><th>Sistem</th><th>Lokasi</th></tr>
            </thead>
            <tbody>
              <tr><td className="yr">Mar 2025</td><td>RO Drinking Water &amp; Drinking Fountain</td><td>Kampus C — Workshop</td></tr>
              <tr><td className="yr">Mar 2025</td><td>RO Drinking Water</td><td>Kampus B — Eks Pusba</td></tr>
              <tr><td className="yr">Okt 2025</td><td>RO Drinking Water</td><td>Gedung FKH (Fakultas Kedokteran Hewan)</td></tr>
              <tr><td className="yr">Okt 2022</td><td>RO Drinking Water &amp; Drinking Fountain</td><td>Kampus B</td></tr>
            </tbody>
          </table>
        </div>

        <div className="cat-section">
          <h3>🎓 Yayasan / Universitas Atma Jaya</h3>
          <table className="proj-table">
            <thead>
              <tr><th style={{"width":"14%"}}>Tahun</th><th>Sistem</th><th>Lokasi</th></tr>
            </thead>
            <tbody>
              <tr><td className="yr">Mei 2019</td><td>RO Drinking Water &amp; Drinking Fountain</td><td>Gelanggang Olahraga Kampus UKI Atma Jaya BSD</td></tr>
              <tr><td className="yr">Feb 2017</td><td>RO Cap. 5.000 LPD &amp; Drinking Fountain (2 unit)</td><td>UKI Atma Jaya — Kampus Cisauk</td></tr>
              <tr><td className="yr">Mar 2016</td><td>RO Cap. 5.000 LPD &amp; Drinking Fountain</td><td>Kampus Sudirman &amp; Fakultas Kedokteran Pluit</td></tr>
              <tr><td className="yr">Nov 2015</td><td>RO Cap. 5.000 LPD &amp; Drinking Fountain</td><td>Kampus Sudirman</td></tr>
            </tbody>
          </table>
        </div>

        <div className="cat-section">
          <h3>🎓 Lembaga Pendidikan Lainnya</h3>
          <table className="proj-table">
            <thead>
              <tr><th style={{"width":"14%"}}>Tahun</th><th>Sistem</th><th>Lokasi</th></tr>
            </thead>
            <tbody>
              <tr><td className="yr">Jun 2012</td><td>Fresh &amp; Drinking Water RO (untuk karyawan &amp; mahasiswa)</td><td>Sekolah Tinggi Sandi Negara — Ciseeng</td></tr>
              <tr><td className="yr">Jan 2019</td><td>Ultrafiltration &amp; RO Drinking Water dengan Panel Surya Cap. 2.000 LPH</td><td>Kementerian LHK — Masjid Sirotol Mustakim, Padang Sidempuan</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Mengapa Drinking Fountain RO Cocok untuk Kampus</h2>
        <ul>
          <li><strong>Hemat Jangka Panjang</strong> — biaya air minum per liter jauh lebih murah dibanding pengadaan air kemasan untuk ribuan mahasiswa setiap hari.</li>
          <li><strong>Ramah Lingkungan</strong> — drastis mengurangi sampah botol plastik sekali pakai di area kampus.</li>
          <li><strong>Akses 24/7</strong> — drinking fountain di koridor, kantin, perpustakaan, dan gym memberi akses air minum kapan saja.</li>
          <li><strong>Kualitas Konsisten</strong> — sistem RO + UV memastikan air bebas kontaminan, sesuai standar drinking water Permenkes.</li>
          <li><strong>Branding Kampus Sehat</strong> — fasilitas air minum berkualitas adalah indikator kampus modern yang peduli kesehatan civitas.</li>
        </ul>

        <h2>Komponen Standar Sistem Drinking Water Kampus</h2>
        <p>Konfigurasi yang umum diterapkan TSM untuk kampus terdiri dari: <strong>(1)</strong> Pre-filter (sediment + carbon block), <strong>(2)</strong> Reverse Osmosis membrane (BW4040 atau setara), <strong>(3)</strong> UV sterilizer untuk desinfeksi akhir, <strong>(4)</strong> Storage tank dengan tekanan terjaga, dan <strong>(5)</strong> Drinking fountain stainless steel dengan auto-stop di titik distribusi (koridor, kantin, dll).</p>

      </article>

      <aside className="art-sticky">
        <div style={{"background":"var(--ice)","border":"1px solid var(--border)","borderRadius":"10px","padding":"1.5rem","marginBottom":"1rem"}}>
          <h4 style={{"fontFamily":"'Barlow Condensed',sans-serif","fontSize":"1.2rem","color":"var(--navy)","marginBottom":".8rem"}}>Untuk Kampus / Sekolah / Pesantren</h4>
          <p style={{"fontSize":".85rem","color":"var(--muted)","lineHeight":"1.6","marginBottom":"1rem"}}>TSM dapat membantu mendesain sistem air minum untuk kampus dari skala fakultas hingga multi-kampus.</p>
          <Link style={{"display":"block","textAlign":"center","padding":".7rem","background":"var(--blue)","color":"#fff","borderRadius":"6px","fontWeight":"700","textDecoration":"none","fontSize":".85rem"}} to="/kontak">📞 Konsultasi</Link>
        </div>

        <div style={{"background":"var(--white)","border":"1px solid var(--border)","borderRadius":"10px","padding":"1.5rem"}}>
          <h4 style={{"fontFamily":"'Barlow Condensed',sans-serif","fontSize":"1.1rem","color":"var(--navy)","marginBottom":".8rem"}}>Halaman Terkait</h4>
          <ul style={{"listStyle":"none","padding":"0","margin":"0","fontSize":".85rem"}}>
            <li style={{"padding":".5rem 0","borderBottom":"1px solid var(--border)"}}><Link style={{"color":"var(--text)","textDecoration":"none"}} to="/portofolio/atma-jaya">→ Studi Kasus Atma Jaya</Link></li>
            <li style={{"padding":".5rem 0","borderBottom":"1px solid var(--border)"}}><Link style={{"color":"var(--text)","textDecoration":"none"}} to="/produk/ro-komersial">→ RO Komersial</Link></li>
            <li style={{"padding":".5rem 0","borderBottom":"1px solid var(--border)"}}><Link style={{"color":"var(--text)","textDecoration":"none"}} to="/produk/uv">→ UV Sterilizer</Link></li>
            <li style={{"padding":".5rem 0"}}><Link style={{"color":"var(--text)","textDecoration":"none"}} to="/industri/properti">→ Sektor Properti</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Membangun Fasilitas Air Minum Kampus?</h2>
    <p>TSM siap membantu desain sistem RO drinking water + drinking fountain yang sesuai dengan jumlah pengguna, layout gedung, dan budget institusi.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak">📞 Diskusi</Link>
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/layanan/desain">🎨 Layanan Desain</Link>
    </div>
  </div>
</div>

    </>
  );
};

export default PortoPendidikan;
