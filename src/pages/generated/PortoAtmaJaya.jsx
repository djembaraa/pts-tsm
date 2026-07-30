import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList } from 'lucide-react';


const PortoAtmaJaya = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.cs-hero{position:relative;border-radius:14px;overflow:hidden;margin-bottom:2rem;height:380px;background:linear-gradient(135deg,#0a2240,#0d5fa8)}
.cs-hero img{width:100%;height:100%;object-fit:cover;opacity:.7}
.cs-hero .cs-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(10,34,64,.85),rgba(10,34,64,.15));display:flex;align-items:flex-end;padding:2rem;color:#fff}
.cs-hero .cs-overlay h2{font-family:'Barlow Condensed',sans-serif;font-size:2.2rem;font-weight:900;color:#fff;letter-spacing:.01em}
.cs-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1rem;margin:2rem 0}
.cs-stat{background:var(--ice);border:1px solid var(--border);border-radius:10px;padding:1.2rem 1rem;text-align:center}
.cs-stat .num{font-family:'Barlow Condensed',sans-serif;font-size:1.8rem;font-weight:900;color:var(--blue);line-height:1}
.cs-stat .lbl{font-size:.74rem;color:var(--muted);margin-top:.4rem;text-transform:uppercase;letter-spacing:.04em}
.cs-meta-table{width:100%;border-collapse:collapse;margin:1.5rem 0}
.cs-meta-table th,.cs-meta-table td{padding:.75rem 1rem;border:1px solid var(--border);font-size:.88rem;text-align:left}
.cs-meta-table th{background:var(--gray);color:var(--navy);font-weight:700;width:32%}
.client-logo{display:inline-block;background:#fff;border:1px solid var(--border);border-radius:8px;padding:1rem;margin-bottom:1.5rem;max-width:200px}
.client-logo img{max-width:100%;height:auto;display:block}
.art-layout{display:grid;grid-template-columns:1fr 290px;gap:3rem;align-items:start}
.art-sticky{position:sticky;top:88px}
@media(max-width:1024px){.art-layout{grid-template-columns:1fr}.art-sticky{position:static}.cs-hero{height:260px}}

` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/portofolio">Portofolio</Link> › Studi Kasus</div>
    <h1>Universitas Atma Jaya:<br />RO Drinking Water &amp; Drinking Fountain untuk Multi-Kampus</h1>
    <p>Klien: <strong>Yayasan Atma Jaya — Universitas Katolik Indonesia Atma Jaya</strong> &nbsp;·&nbsp; Kategori: Pendidikan — RO + Drinking Fountain Kampus</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>

        <div className="cs-hero ">
          <picture>
            <source srcSet="images/foto-mesin-swro.webp" type="image/webp" />
            <img src="images/foto-mesin-swro.jpg" alt="RO Drinking Water dan Drinking Fountain untuk Universitas Atma Jaya kampus" />
          </picture>
          <div className="cs-overlay">
            <h2>Yayasan Atma Jaya — Universitas Katolik Indonesia Atma Jaya</h2>
          </div>
        </div>

        <div className="client-logo ">
          <picture>
            <source srcSet="images/logo-atmajaya.webp" type="image/webp" />
            <img src="images/logo-atmajaya.png" alt="Logo Yayasan Atma Jaya — Universitas Katolik Indonesia Atma Jaya" loading="lazy" />
          </picture>
        </div>

        <div className="cs-stats">
      <div className="cs-stat "><div className="num">4+ kampus</div><div className="lbl">dilayani</div></div>
      <div className="cs-stat "><div className="num">5.000</div><div className="lbl">LPD per kampus</div></div>
      <div className="cs-stat "><div className="num">Decade+</div><div className="lbl">kemitraan</div></div>
      <div className="cs-stat "><div className="num">UV+RO</div><div className="lbl">polishing</div></div>
        </div>

        <table className="cs-meta-table ">
      <tbody><tr><th>Klien</th><td>Yayasan Atma Jaya — pengelola Universitas Katolik Indonesia Atma Jaya</td></tr>
      <tr><th>Lokasi Yang Dilayani</th><td>Kampus Atma Jaya BSD/Cisauk, Kampus Sudirman Jakarta, Fakultas Kedokteran Pluit, Gelanggang Olahraga UKI Atma Jaya BSD</td></tr>
      <tr><th>Tipe Sistem</th><td>Reverse Osmosis (RO) System + Drinking Fountain</td></tr>
      <tr><th>Kapasitas Per Sistem</th><td>5.000 LPD (~5 m³/hari) per fasilitas, scalable per kebutuhan</td></tr>
      <tr><th>Aplikasi</th><td>Air minum berkualitas premium untuk mahasiswa, dosen, dan staff kampus</td></tr>
      <tr><th>Konfigurasi</th><td>RO 2-pass + UV sterilizer + dispensing point fountain stainless steel</td></tr>
      <tr><th>Pengerjaan</th><td>Multi-tahap: November 2015 (Sudirman), Maret 2016 (Sudirman + Pluit FK), Februari 2017 (BSD/Cisauk), Mei 2019 (Gelanggang Olahraga UKI Atma Jaya BSD)</td></tr>
      <tr><th>Status</th><td>Aktif dengan service contract berkelanjutan</td></tr>
        </tbody></table>

        <div className="prose max-w-none text-text">

        <h2 id="latar-belakang" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Latar Belakang Kemitraan</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Universitas Katolik Indonesia Atma Jaya adalah salah satu universitas swasta terkemuka di Indonesia, dengan ribuan mahasiswa dan staff yang aktif di multiple kampus. Sebagai institusi pendidikan premium, Atma Jaya berkomitmen menyediakan <strong>fasilitas pendukung yang berkualitas</strong> bagi seluruh civitas akademika — termasuk akses air minum yang aman, segar, dan tersedia kapan saja di area kampus.</p>

        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kemitraan TSM dengan Yayasan Atma Jaya berlangsung lebih dari satu dekade, dengan instalasi sistem RO Drinking Water dan Drinking Fountain di berbagai kampus dan fasilitas:</p>

        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>November 2015</strong> — RO Drinking Fountain 5.000 LPD untuk Universitas Atma Jaya Sudirman</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Maret 2016</strong> — RO Drinking Fountain 5.000 LPD untuk Atma Jaya Sudirman dan Fakultas Kedokteran Pluit</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Februari 2017</strong> — RO 5.000 LPD + 2 unit Drinking Fountain untuk UKI Atma Jaya Kampus Cisauk BSD</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Mei 2019</strong> — RO Drinking Water + Drinking Fountain untuk Gelanggang Olahraga Kampus UKI Atma Jaya BSD</li>
        </ul>

        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Multi-tahap kemitraan ini menunjukkan <strong>kepercayaan jangka panjang</strong> Yayasan Atma Jaya pada kualitas TSM — setiap proyek baru muncul dari pengalaman positif dengan instalasi sebelumnya.</p>

        <h2 id="kebutuhan-kampus" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Kebutuhan Air Minum Kampus Premium</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Universitas dengan ribuan mahasiswa harian memiliki kebutuhan air minum yang spesifik dan menantang:</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Volume Tinggi dengan Pola Peak Hour</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Konsumsi air minum di kampus tidak tersebar merata sepanjang hari. Peak hours: pagi (mahasiswa tiba), istirahat tengah hari (lunch break), dan sore (sebelum pulang). Sistem harus mampu menyediakan air dengan tekanan dan flow yang konsisten saat hundreds of users mengakses fountain bersamaan.</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Kualitas yang Konsisten — No Compromise</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Mahasiswa adalah konsumen yang sensitif terhadap rasa dan tampilan air. Air dengan rasa yang tidak konsisten, terutama di institusi premium seperti Atma Jaya, akan menyebabkan keluhan dan menurunkan persepsi kualitas fasilitas. Sistem RO 2-pass memastikan TDS &lt;30 ppm konsisten dengan rasa yang segar dan netral.</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Keamanan Mikrobiologi — Critical</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Berbeda dengan dispenser galon biasa, drinking fountain mengalirkan air langsung ke konsumen tanpa kemasan. Risiko kontaminasi mikrobiologi dari nozzle, dari pipa distribusi, atau dari air baku harus dieliminasi dengan: <strong>UV sterilization 254 nm sebelum dispenser</strong>, <strong>nozzle anti-bacterial</strong>, dan <strong>flushing rutin</strong> untuk mencegah biofilm.</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Visibilitas &amp; Hygiene Image</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Drinking fountain di kampus premium adalah bagian dari brand experience. Material stainless steel sanitary, design modern, dan visibility instalasi yang bersih memberikan signal kualitas pada users.</p>

        <h2 id="konfigurasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Konfigurasi Sistem yang Diimplementasikan</h2>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">RO Pre-treatment dan Production</h3>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Multi-media filter dengan auto backwash</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Karbon aktif untuk dechlorination (kritis untuk taste — klorin sisa dari PDAM dapat mempengaruhi rasa)</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">RO 2-pass dengan recovery 75% dan rejection &gt;99% — TDS produk &lt;30 ppm</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Storage tank stainless steel sanitary 1.000-3.000 liter</li>
        </ul>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Drinking Fountain Distribution</h3>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Loop distribusi SS-304/SS-316L dengan continuous recirculation</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">UV sterilizer 254 nm dengan dosis 60 mJ/cm² sebelum setiap dispenser</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Drinking fountain SS-316L food-grade dengan nozzle anti-splash</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Pre-cooling chiller (opsional) untuk air dingin yang segar</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Touchless atau push-button operation untuk hygiene</li>
        </ul>

        <h2 id="benefit" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Benefit untuk Universitas</h2>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Untuk Mahasiswa &amp; Civitas Akademika</h3>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Akses air minum berkualitas tanpa membeli atau membawa botol dari rumah</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Konsistensi rasa dan kualitas yang dapat diandalkan setiap hari</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Reduce single-use plastic — kontribusi pada sustainability kampus</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Hidrasi yang baik mendukung produktivitas belajar</li>
        </ul>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Untuk Manajemen Kampus</h3>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Tidak ada cost galon air mineral berulang yang dibutuhkan</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Tidak ada sampah botol plastik yang harus dikelola</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Service contract jangka panjang dengan TSM memastikan operasional konsisten</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Kontribusi positif pada brand image kampus sebagai institusi modern dan sustainable</li>
        </ul>

        <h2 id="ekspansi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Ekspansi ke Universitas Lain</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sukses TSM dengan Atma Jaya menjadi referensi untuk universitas dan institusi pendidikan lain. Klien akademik lain dalam portofolio TSM:</p>

        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Universitas Airlangga Surabaya</strong> — RO Drinking Water + Drinking Fountain untuk Kampus B (Oktober 2022), Kampus C Workshop (Maret 2025), Kampus B Eks Pusba (Maret 2025), Gedung FKH (Oktober 2025)</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sekolah Tinggi Sandi Negara</strong> — Fresh Water + Drinking Water dengan RO untuk karyawan dan mahasiswa (Juni 2012)</li>
        </ul>

        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk universitas yang sedang merencanakan upgrade fasilitas air minum, TSM dapat mendiskusikan konfigurasi optimal berdasarkan layout kampus, jumlah users, dan budget.</p>
    

<h2 id="faq-atma" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa biaya RO + Drinking Fountain untuk universitas?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk satu kampus dengan kapasitas 5.000 LPD dan 4-6 dispenser fountain: investasi sekitar Rp 350-700 juta termasuk RO 2-pass, UV polishing, loop distribusi SS, dan dispenser fountain stainless steel. Untuk kampus besar dengan multiple bangunan dan dispenser di setiap lantai: Rp 1-2 milyar. ROI dihitung dari penghematan biaya galon mineral water yang typical untuk universitas — biasanya 2-4 tahun.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Bagaimana jika water demand di hari kuliah jauh lebih tinggi dari weekend?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem dirancang dengan: (1) Buffer storage tank yang cukup untuk peak demand (1.000-3.000 liter), (2) RO production capacity yang memenuhi peak demand harian, (3) Continuous loop recirculation yang menjaga kualitas air bahkan saat consumption rendah. Saat weekend, sistem auto-reduce production sesuai demand untuk efisiensi energi.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa standar food-safety untuk drinking fountain di Indonesia?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Permenkes 492/2010 untuk air minum (microbiology 0 CFU/100 mL, TDS, pH, dll). Plus best practice internasional: NSF/ANSI 61 untuk material kontak air, ASSE 1037 untuk safety drinking fountain. Sistem TSM untuk Atma Jaya dirancang melampaui standar Permenkes dengan UV sterilization aktif dan continuous recirculation yang mencegah biofilm.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah dispenser bisa di-customize sesuai design kampus?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ya. Drinking fountain TSM tersedia dalam berbagai konfigurasi: wall-mounted, freestanding, with bottle filler station (untuk mahasiswa yang ingin isi ulang botol mereka), touchless dengan sensor, dan custom-painted untuk match dengan branding kampus. Tim engineering TSM dapat mendiskusikan opsi yang sesuai dengan vision arsitektur kampus.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah TSM menyediakan service rutin untuk universitas?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ya, dan ini sangat direkomendasikan. Service contract typical: kunjungan preventive 6-bulanan untuk replacement filter dan UV lamp, sampling kualitas air bulanan, replacement membran setiap 4-6 tahun, plus emergency response 24-48 jam jika ada masalah. Dengan service contract, sistem dapat beroperasi konsisten 10+ tahun.</p>


          <div style={{"marginTop":"2rem","padding":"2rem","background":"var(--ice)","borderRadius":"12px","borderLeft":"4px solid var(--accent)"}}>
            <h3 style={{"marginBottom":".75rem","color":"var(--navy)"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Membutuhkan RO + Drinking Fountain untuk Kampus / Institusi?</h3>
            <p style={{"marginBottom":"1.25rem","color":"var(--muted)","fontSize":".92rem"}} className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tim engineering TSM siap mendiskusikan kebutuhan water treatment Anda dengan referensi proyek serupa yang sudah terbukti. Konsultasi awal gratis tanpa komitmen.</p>
            <Link style={{"display":"inline-block","padding":".85rem 2rem","background":"var(--blue)","color":"#fff","borderRadius":"8px","fontWeight":"700","fontSize":".96rem"}} to="/kontak"><ClipboardList className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Konsultasi Proyek Anda →</Link>
          </div>

        </div>
      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#latar-belakang">Latar Belakang Kemitraan</Link></li>
            <li><Link href="#kebutuhan-kampus">Kebutuhan Air Kampus</Link></li>
            <li><Link href="#konfigurasi">Konfigurasi Sistem</Link></li>
            <li><Link href="#benefit">Benefit untuk Universitas</Link></li>
            <li><Link href="#ekspansi">Ekspansi ke Universitas Lain</Link></li>
            <li><Link href="#faq-atma">FAQ</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Produk Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/produk/ro-komersial">→ RO Komersial</Link></li>
            <li><Link to="/produk/uv">→ UV Sterilizer</Link></li>
            <li><Link to="/produk/membran">→ Membran RO</Link></li>
            <li><Link to="/produk/amdk">→ AMDK &amp; Drinking Water</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Studi Kasus &amp; Industri</h4>
          <ul className="flex flex-col">
            <li><Link to="/artikel/ro-prinsip-kerja">→ Prinsip Kerja RO</Link></li>
            <li><Link to="/industri/hotel">→ Solusi Hotel &amp; Hospitality</Link></li>
            <li><Link to="/artikel/monitoring-kualitas-air-ro">→ Monitoring Kualitas Air</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>

    </>
  );
};

export default PortoAtmaJaya;
