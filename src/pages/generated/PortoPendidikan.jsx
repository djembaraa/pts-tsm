import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../../components/ui/Button';

const PortoPendidikan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.cs-hero{position:relative;border-radius:14px;overflow:hidden;margin-bottom:2rem;height:380px}
.cs-hero img{width:100%;height:100%;object-fit:cover}
.cs-hero .cs-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(10,34,64,.88),rgba(10,34,64,.2));display:flex;align-items:flex-end;padding:2rem;color:#fff}
.cs-hero .cs-overlay h2{font-family:'Barlow Condensed',sans-serif;font-size:2.2rem;font-weight:900;color:#fff;letter-spacing:.01em}
.cs-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1rem;margin:2rem 0}
.cs-stat{background:var(--ice);border:1px solid var(--border);border-radius:10px;padding:1.2rem 1rem;text-align:center}
.cs-stat .num{font-family:'Barlow Condensed',sans-serif;font-size:1.8rem;font-weight:900;color:var(--blue);line-height:1}
.cs-stat .lbl{font-size:.74rem;color:var(--muted);margin-top:.4rem;text-transform:uppercase;letter-spacing:.04em}
.proj-table{width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:.88rem;background:var(--white)}
.proj-table th,.proj-table td{padding:.7rem .9rem;border:1px solid var(--border);text-align:left;vertical-align:top}
.proj-table th{background:var(--navy);color:#fff;font-weight:700;font-size:.8rem;letter-spacing:.04em;text-transform:uppercase}
.proj-table tr:nth-child(even) td{background:var(--ice)}
.proj-table .yr{font-weight:700;color:var(--blue);white-space:nowrap}
.cat-section{background:var(--white);border:1px solid var(--border);border-radius:12px;padding:1.5rem;margin-bottom:1.5rem}
.cat-section h3{font-family:'Barlow Condensed',sans-serif;font-size:1.4rem;color:var(--navy);margin-bottom:1rem;padding-bottom:.6rem;border-bottom:2px solid var(--blue)}
.art-layout{display:grid;grid-template-columns:1fr 290px;gap:3rem;align-items:start}
.art-sticky{position:sticky;top:88px}
@media(max-width:1024px){.art-layout{grid-template-columns:1fr}.art-sticky{position:static}.cs-hero{height:260px}.proj-table{font-size:.78rem}.proj-table th,.proj-table td{padding:.5rem .55rem}}
.featured-card{background:linear-gradient(135deg,#0a2240 0%,#1e4a7b 100%);color:#fff;border-radius:12px;padding:1.5rem;margin-bottom:1.5rem}
.featured-card h4{color:#fff;font-family:'Barlow Condensed',sans-serif;font-size:1.3rem;margin-bottom:.5rem}
.featured-card p{color:rgba(255,255,255,.85);font-size:.9rem;line-height:1.6}

` }} />
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
    <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold leading-[1.15] mb-[0.65rem]">Membangun Fasilitas Air Minum Kampus?</h2>
    <p className="text-[0.88rem] opacity-90 leading-[1.75] max-w-[600px] mx-auto mb-8">TSM siap membantu desain sistem RO drinking water + drinking fountain yang sesuai dengan jumlah pengguna, layout gedung, dan budget institusi.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Button variant="white" to="/kontak" >📞 Diskusi</Button>
      <Button variant="outline-white" to="/layanan/desain" >🎨 Layanan Desain</Button>
    </div>
  </div>
</div>

    </>
  );
};

export default PortoPendidikan;
