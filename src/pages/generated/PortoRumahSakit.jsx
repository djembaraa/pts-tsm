import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity } from 'lucide-react';
import Button from '../../components/ui/Button';

const PortoRumahSakit = () => {
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
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/portofolio">Portofolio</Link> › Rumah Sakit &amp; Hemodialisis</div>
    <h1>Portofolio Rumah Sakit &amp; Hemodialisis — Sistem RO Medical Grade</h1>
    <p>TSM telah menjadi mitra terpercaya untuk rumah sakit di Indonesia dalam menyediakan sistem RO untuk hemodialisis (cuci darah), sterilisasi, dan air minum pasien sesuai standar AAMI dan Permenkes.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>

        <div className="cs-hero">
          <img src="images/foto-mesin-swro.jpg" alt="RO Medical Grade Hemodialisis" />
          <div className="cs-overlay">
            <h2>RO Medical Grade untuk Hemodialisis &amp; Steril</h2>
          </div>
        </div>

        <div className="cs-stats">
          <div className="cs-stat"><div className="num">15+</div><div className="lbl">Rumah Sakit Klien</div></div>
          <div className="cs-stat"><div className="num">8+</div><div className="lbl">Unit Hemodialisis</div></div>
          <div className="cs-stat"><div className="num">10+</div><div className="lbl">RSUD &amp; Pemerintah</div></div>
          <div className="cs-stat"><div className="num">AAMI</div><div className="lbl">Standard Compliant</div></div>
        </div>

        <h2>Tentang Sistem RO untuk Rumah Sakit</h2>
        <p>Sistem RO untuk rumah sakit memiliki standar yang jauh lebih tinggi dibandingkan RO komersial atau industri biasa. Untuk hemodialisis (cuci darah), air harus memenuhi <strong>AAMI/ISO 13959</strong> — standar internasional yang membatasi kontaminan kimia dan mikroba dalam dialysate water. Kontaminan sekecil apapun dapat berbahaya bagi pasien gagal ginjal yang ginjalnya tidak dapat menyaring lagi.</p>
        <p>TSM telah membangun pengalaman panjang dalam memenuhi kriteria medical grade ini, mulai dari desain sistem dengan komponen pharmaceutical-grade, instalasi sesuai protokol rumah sakit, hingga validasi air pasca-instalasi.</p>

        <div className="featured-card">
          <h4>📌 Studi Kasus Lengkap: Eka Hospital</h4>
          <p>Untuk studi kasus mendalam tentang RO hemodialisis 1.500 GPD untuk Eka Hospital Bekasi dan Cibubur, baca <Link style={{"color":"#7dd3fc","fontWeight":"700","textDecoration":"underline"}} to="/portofolio/eka-hospital">studi kasus Eka Hospital →</Link></p>
        </div>

        <h2>Daftar Proyek per Aplikasi</h2>

        <div className="cat-section">
          <h3>💉 Hemodialisis (Cuci Darah)</h3>
          <table className="proj-table">
            <thead>
              <tr><th style={{"width":"14%"}}>Tahun</th><th>Sistem</th><th>Rumah Sakit</th></tr>
            </thead>
            <tbody>
              <tr><td className="yr">Mei 2023</td><td>RO Cap. 5.000 GPD untuk Hemodialisis</td><td>RS Melinda Bandung — PT Melinda Kasih Ibu Tiga</td></tr>
              <tr><td className="yr">Apr 2019</td><td>RO Cap. 1.500 GPD untuk Hemodialisis</td><td>RS Eka Hospital Cibubur — PT Suryatata Internusa — <Link to="/portofolio/eka-hospital">studi kasus</Link></td></tr>
              <tr><td className="yr">Apr 2019</td><td>RO Cap. 1.500 GPD untuk Hemodialisis</td><td>RS Eka Hospital Bekasi — PT Suryatata Internusa</td></tr>
              <tr><td className="yr">Sep 2018</td><td>RO Cap. 2.000 GPD</td><td>RS Eka Hospital Bekasi &amp; Cibubur</td></tr>
            </tbody>
          </table>
        </div>

        <div className="cat-section">
          <h3><Activity className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Rumah Sakit Umum (RSUD &amp; Swasta)</h3>
          <table className="proj-table">
            <thead>
              <tr><th style={{"width":"14%"}}>Tahun</th><th>Sistem</th><th>Rumah Sakit</th></tr>
            </thead>
            <tbody>
              <tr><td className="yr">Sep 2024</td><td>RO Cap. 8.000 GPD</td><td>RSUD Cianjur — PT Jannata Andalan Global</td></tr>
              <tr><td className="yr">Okt 2023</td><td>RO Cap. 4.000 GPD</td><td>RSUD Manado — PT Jannata Andalan Global</td></tr>
              <tr><td className="yr">Mar 2023</td><td>RO Cap. 570 L/jam</td><td>RSUD Makassar — PT Indojaya Sukses Makmur</td></tr>
              <tr><td className="yr">Jun 2020</td><td>RO Cap. 1.500 LPH</td><td>RSUD Pasar Minggu, Jakarta</td></tr>
              <tr><td className="yr">Agu 2017</td><td>RO Cap. 500 LPH</td><td>RSUD Cengkareng</td></tr>
              <tr><td className="yr">Jan 2019</td><td>BWRO Cap. 1.000 LPH Skidmounted</td><td>RSUD Cengkareng — PT Arsimekon Tatagraha</td></tr>
              <tr><td className="yr">Jun 2014</td><td>RO &amp; UF untuk Rumah Sakit</td><td>RSUD Balaraja, Tangerang — PT HijauAles Synergy</td></tr>
              <tr><td className="yr">Jun 2014</td><td>RO Cap. 6.000 LPD</td><td>RS Lira Medika, Karawang — PT D&amp;V International Makmur Gemilang</td></tr>
              <tr><td className="yr">2011</td><td>Reverse Osmosis</td><td>RS Puri Indah, Kembangan Jakarta</td></tr>
              <tr><td className="yr">2011</td><td>Reverse Osmosis</td><td>RSUD Cibitung Bekasi</td></tr>
            </tbody>
          </table>
        </div>

        <div className="cat-section">
          <h3>🩺 Dinas Kesehatan &amp; Lembaga Pemerintah</h3>
          <table className="proj-table">
            <thead>
              <tr><th style={{"width":"14%"}}>Tahun</th><th>Sistem</th><th>Lokasi</th></tr>
            </thead>
            <tbody>
              <tr><td className="yr">Jan 2026</td><td>Softener Filter × 3 Unit</td><td>Dinkes Makassar — PT Jannata Andalan Global</td></tr>
              <tr><td className="yr">Agu 2025</td><td>RO Cap. 6.000 GPD</td><td>Dinkes Aceh — PT Jannata Andalan Global</td></tr>
              <tr><td className="yr">Agu 2025</td><td>RO Cap. 6.000 GPD × 2 Unit</td><td>Dinkes Makassar — PT Jannata Andalan Global</td></tr>
              <tr><td className="yr">Agu 2025</td><td>RO Cap. 4.000 GPD</td><td>Dinkes Makassar — PT Jannata Andalan Global</td></tr>
              <tr><td className="yr">Jul 2017</td><td>SWRO Portable Cap. 2.000 LPD (3 unit)</td><td>Dinkes Halmahera — PT Scienta Medica Laboratory</td></tr>
              <tr><td className="yr">Des 2014</td><td>RO &amp; UF Container System Cap. 1.000 LPH</td><td>Depkes Provinsi Banten</td></tr>
              <tr><td className="yr">Jul 2017</td><td>RO Drinking Water dengan Panel Surya 2.000 LPH</td><td>Kementerian Lingkungan Hidup &amp; Kehutanan — Padang Sidempuan, Sumut</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Mengapa Sistem RO Medical Grade Berbeda</h2>
        <p>Sistem RO untuk rumah sakit, terutama untuk hemodialisis, memiliki perbedaan kritis dibanding RO standar:</p>
        <ul>
          <li><strong>Standar Air Lebih Ketat</strong> — AAMI/ISO 13959 mengatur 23+ parameter kimia dan endotoksin yang lebih ketat dari Permenkes air minum biasa.</li>
          <li><strong>Material Pharmaceutical Grade</strong> — pipa SS-316L sanitary, electropolished, dengan flange tri-clamp untuk kemudahan sanitasi (CIP/SIP).</li>
          <li><strong>Loop Distribusi</strong> — air harus terus bersirkulasi (loop recirculating) untuk mencegah pertumbuhan biofilm di dead-leg.</li>
          <li><strong>Monitoring Kontinu</strong> — TDS conductivity, suhu, dan flow harus dipantau real-time dengan alarm.</li>
          <li><strong>Validation Protocol</strong> — instalasi diikuti dengan IQ/OQ/PQ qualification dan tes mikrobiologi sebelum digunakan untuk pasien.</li>
          <li><strong>Service Reliability</strong> — sistem hemodialisis tidak boleh mati saat ada pasien dialisis — TSM menyediakan SLA service yang ketat.</li>
        </ul>

        <h2>Mengapa Rumah Sakit Memilih TSM</h2>
        <ul>
          <li><strong>Pengalaman Multi-RS</strong> — sudah dipercaya oleh Eka Hospital (multi-cabang), RS Melinda, RSUD Cengkareng, RSUD Cianjur, RSUD Manado, dan banyak lagi.</li>
          <li><strong>Kerjasama Distributor</strong> — TSM bekerja dengan distributor alat kesehatan terverifikasi (Suryatata Internusa, Jannata Andalan Global, dll) untuk memenuhi proses pengadaan rumah sakit.</li>
          <li><strong>Dokumentasi Lengkap</strong> — manual, sertifikat material, hasil tes air, dan training untuk operator.</li>
          <li><strong>Service On-Site</strong> — engineer TSM dapat dikirim untuk preventive maintenance, troubleshooting, dan emergency call.</li>
          <li><strong>Integrasi dengan IPS RS</strong> — instalasi yang minim mengganggu operasional rumah sakit yang berjalan 24/7.</li>
        </ul>

      </article>

      <aside className="art-sticky">
        <div style={{"background":"var(--ice)","border":"1px solid var(--border)","borderRadius":"10px","padding":"1.5rem","marginBottom":"1rem"}}>
          <h4 style={{"fontFamily":"'Barlow Condensed',sans-serif","fontSize":"1.2rem","color":"var(--navy)","marginBottom":".8rem"}}>Untuk RS / Klinik Hemodialisis</h4>
          <p style={{"fontSize":".85rem","color":"var(--muted)","lineHeight":"1.6","marginBottom":"1rem"}}>TSM siap mendukung pengadaan resmi RS, baik melalui distributor alat kesehatan maupun langsung.</p>
          <Link style={{"display":"block","textAlign":"center","padding":".7rem","background":"var(--blue)","color":"#fff","borderRadius":"6px","fontWeight":"700","textDecoration":"none","fontSize":".85rem"}} to="/kontak">📞 Konsultasi Medical</Link>
        </div>

        <div style={{"background":"var(--white)","border":"1px solid var(--border)","borderRadius":"10px","padding":"1.5rem"}}>
          <h4 style={{"fontFamily":"'Barlow Condensed',sans-serif","fontSize":"1.1rem","color":"var(--navy)","marginBottom":".8rem"}}>Halaman Terkait</h4>
          <ul style={{"listStyle":"none","padding":"0","margin":"0","fontSize":".85rem"}}>
            <li style={{"padding":".5rem 0","borderBottom":"1px solid var(--border)"}}><Link style={{"color":"var(--text)","textDecoration":"none"}} to="/portofolio/eka-hospital">→ Studi Kasus Eka Hospital</Link></li>
            <li style={{"padding":".5rem 0","borderBottom":"1px solid var(--border)"}}><Link style={{"color":"var(--text)","textDecoration":"none"}} to="/industri/rs">→ Industri Rumah Sakit</Link></li>
            <li style={{"padding":".5rem 0","borderBottom":"1px solid var(--border)"}}><Link style={{"color":"var(--text)","textDecoration":"none"}} to="/industri/farmasi">→ Industri Farmasi</Link></li>
            <li style={{"padding":".5rem 0","borderBottom":"1px solid var(--border)"}}><Link style={{"color":"var(--text)","textDecoration":"none"}} to="/artikel/air-farmasi-ro-edi">→ Air Farmasi RO/EDI</Link></li>
            <li style={{"padding":".5rem 0"}}><Link style={{"color":"var(--text)","textDecoration":"none"}} to="/artikel/standar-air-farmasi-bpom">→ Standar Air Farmasi BPOM</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold leading-[1.15] mb-[0.65rem]">Membutuhkan RO Medical Grade?</h2>
    <p className="text-[0.88rem] opacity-90 leading-[1.75] max-w-[600px] mx-auto mb-8">TSM siap membantu desain sistem hemodialisis, sterilisasi, dan air minum pasien sesuai standar AAMI dan Permenkes.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Button variant="white" to="/kontak" >📞 Konsultasi RS</Button>
      <Button variant="outline-white" to="/layanan/sertifikasi" >🎓 Sertifikasi &amp; Validasi</Button>
    </div>
  </div>
</div>

    </>
  );
};

export default PortoRumahSakit;
