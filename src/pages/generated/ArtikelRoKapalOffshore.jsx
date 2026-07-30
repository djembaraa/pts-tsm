import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplet, Waves, Ship } from 'lucide-react';
import Button from '../../components/ui/Button';

const ArtikelRoKapalOffshore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.art-layout{display:grid;grid-template-columns:1fr 290px;gap:3rem;align-items:start}
.art-sticky{position:sticky;top:88px}
.art-hero-img{height:320px;background:linear-gradient(135deg,#0a2240,#1e90d6);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:8rem;margin-bottom:2rem}
.art-meta-bar{display:flex;flex-wrap:wrap;gap:.85rem;align-items:center;margin-bottom:1.5rem;padding-bottom:1.5rem;border-bottom:1px solid var(--border)}
.am-tag{background:var(--accent);color:#fff;font-size:.66rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:.26rem .72rem;border-radius:4px}
.am-info{font-size:.8rem;color:var(--muted);display:flex;align-items:center;gap:.36rem}
.share-row{display:flex;align-items:center;gap:.72rem;margin-top:2.5rem;padding-top:1.5rem;border-top:1px solid var(--border);flex-wrap:wrap}
.share-row span{font-size:.78rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.06em}
.sh-btn{padding:.38rem .95rem;border-radius:6px;font-size:.78rem;font-weight:600;color:#fff;transition:var(--t)}
.sh-btn:hover{opacity:.82;transform:translateY(-1px)}
.related-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:.8rem}
.rel-card{border:1px solid var(--border);border-radius:8px;overflow:hidden;transition:var(--t);display:block}
.rel-card:hover{transform:translateY(-3px);box-shadow:var(--sh);border-color:var(--accent)}
.rel-img{height:88px;display:flex;align-items:center;justify-content:center;font-size:1.9rem}
.rel-body{padding:.9rem}
.rel-body p{font-size:.82rem;font-weight:600;color:var(--navy);line-height:1.4;margin-bottom:.25rem}
.rel-body span{font-size:.7rem;color:var(--muted)}
.author-box{display:flex;align-items:center;gap:.9rem;margin-bottom:.9rem}
.author-av{width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,var(--sky),var(--accent));display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;flex-shrink:0}
.author-av-name{font-weight:700;font-size:.92rem;color:var(--navy)}
.author-av-role{font-size:.76rem;color:var(--muted)}
@media(max-width:1024px){.art-layout{grid-template-columns:1fr}.art-sticky{position:static}.related-grid{grid-template-columns:1fr}}

` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/artikel">Artikel</Link> › Desalinasi</div>
    <h1>Sistem RO untuk Kapal dan Platform Offshore:<br />Solusi Air Tawar di Laut</h1>
    <p>Industri maritim dan offshore membutuhkan pasokan air tawar yang andal di tengah laut. Sistem RO compact menjadi solusi terbaik untuk lingkungan menantang ini.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">

      <article>
        <div className="art-hero-img"><Ship className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div>

        <div className="art-meta-bar">
          <span className="am-tag">Desalinasi</span>
          <span className="am-info">📅 3 Januari 2025</span>
          <span className="am-info">✍️ Tim TSM</span>
          <span className="am-info">⏱ 5 menit baca</span>
          <span className="am-info">👁 380 views</span>
        </div>

        <div className="prose max-w-none text-text">

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Bagi kru kapal dan pekerja di platform offshore, satu hal sering dianggap wajar: air tawar. Namun sesungguhnya, menjaga pasokan air tawar di tengah laut adalah tantangan teknis yang serius. Air untuk minum, memasak, mandi, laundry, hingga pendingin mesin — semuanya harus tersedia tanpa bergantung pada suplai dari darat.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Di sinilah sistem Reverse Osmosis marine-grade (SWRO) berperan. Dengan mengolah air laut menjadi air tawar, kapal dan platform offshore dapat beroperasi mandiri selama berminggu-minggu bahkan berbulan-bulan.</p>

          <h2 id="kebutuhan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Kebutuhan Air Tawar di Lingkungan Maritim</h2>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kapal kargo &amp; tanker</strong> — Kebutuhan 5–20 m³/hari tergantung jumlah kru.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kapal penumpang &amp; cruise</strong> — Kebutuhan besar 100–500 m³/hari.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kapal TNI AL (KRI)</strong> — Kebutuhan operasional dan tambahan untuk misi panjang.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Platform offshore (FPSO, rig)</strong> — Kebutuhan kru dan air proses, 50–200 m³/hari.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kapal OSV (Offshore Support Vessel)</strong> — Kebutuhan kru dan kadang suplai ke platform, 10–50 m³/hari.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kapal pesiar dan yacht</strong> — Kebutuhan personal dan amenitas, 1–10 m³/hari.</li>
          </ul>

          <div className="info-box bg-ice border border-border rounded-[10px] p-[1.2rem_1.5rem] my-[1.75rem]">
            <strong className="block text-[0.7rem] font-bold uppercase tracking-[0.1em] text-accent mb-[0.38rem]">💡 Perbedaan dengan RO Darat</strong>
            SWRO marine bekerja dengan air laut (TDS 35.000 ppm), tekanan operasi 55–70 bar — dua kali lebih tinggi dari RO air tawar. Semua material harus tahan korosi air laut (super duplex stainless steel, titanium).
          </div>

          <h2 id="karakteristik" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Karakteristik Sistem SWRO Marine</h2>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Footprint kompak</strong> — Ruang di kapal sangat terbatas, sistem harus didesain untuk efisiensi ruang maksimal.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Material anti-korosi</strong> — Stainless steel 316L/2205 duplex untuk pipa dan casing, titanium untuk komponen kritis.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Tahan getaran</strong> — Komponen dan mounting harus tahan getaran mesin kapal dan gerakan ombak.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Energy Recovery Device (ERD)</strong> — Sistem pemulihan energi untuk menghemat konsumsi listrik di kapal.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sertifikasi klasifikasi</strong> — Harus memenuhi standar klas (BV, ABS, LR, DNV, KLM) untuk dipasang di kapal.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Operasi otomatis</strong> — Sistem harus bisa beroperasi dengan supervisi minimal dari kru yang bukan engineer.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Self-cleaning &amp; auto-flush</strong> — Fitur otomatis untuk menjaga performa saat kapal berhenti lama.</li>
          </ul>

          <h2 id="komponen" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Komponen Utama SWRO Marine</h2>
          <ol className="ml-[1.5rem] my-[1.05rem] list-decimal">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sea chest &amp; pompa laut</strong> — Intake air laut dengan filter kasar dan pompa lifting.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pre-filter multimedia / cartridge</strong> — Menghilangkan partikel &gt; 5 µm.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Dosing chemical</strong> — Antiscalant dan sodium bisulfite (untuk menetralkan klorin jika ada).</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>High pressure pump</strong> — Pompa axial piston atau centrifugal 55–70 bar, sering dengan motor tahan percikan air.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Membrane vessel</strong> — Pressure vessel super duplex dengan membran SWRO.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Energy Recovery Device</strong> — PX (Pressure Exchanger) atau Turbocharger yang mengembalikan energi dari brine.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Post-treatment</strong> — Remineralisasi (limestone filter) dan UV sterilisasi.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Control panel marine-grade</strong> — Dengan proteksi IP55 minimum, monitoring lokal dan remote.</li>
          </ol>

          <h2 id="tantangan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Tantangan Operasional di Laut</h2>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Variasi kualitas air laut</strong> — TDS dan kontaminan bervariasi tergantung area pelayaran.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Biofouling</strong> — Air laut mengandung banyak mikroorganisme yang dapat menempel di membran.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Operasi intermiten</strong> — Kapal yang sering berhenti di pelabuhan membutuhkan prosedur shutdown/startup yang tepat.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Keterbatasan suku cadang</strong> — Di tengah laut tidak bisa langsung beli suku cadang, perlu stok yang terencana.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Crew bukan engineer</strong> — Operator kapal umumnya bukan spesialis RO, sistem harus user-friendly.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sanitasi ketat</strong> — Untuk kapal penumpang, kualitas air minum harus memenuhi standar WHO dan IMO.</li>
          </ul>

          <h2 id="portofolio" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Portofolio TSM di Sektor Maritim</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM telah menginstalasi puluhan sistem SWRO di berbagai jenis kapal dan platform Indonesia:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>KRI (Kapal TNI AL)</strong> — Sistem SWRO untuk beberapa KRI patroli dan bantuan kemanusiaan.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kapal Wintermar Offshore</strong> — SWRO untuk OSV yang beroperasi di lapangan migas.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kapal Prima Marine</strong> — SWRO untuk kapal kargo dan supply vessel.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kapal PT Pertamina (Persero)</strong> — SWRO untuk tanker dan kapal pendukung.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kapal Noahtu</strong> — SWRO shipyard dan armada operasional.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kapal Triton &amp; Liziz Marine</strong> — SWRO compact untuk operasi harian.</li>
          </ul>

          <h2 id="pemilihan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Tips Memilih Sistem SWRO untuk Kapal</h2>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Ukur kebutuhan nyata</strong> — Hitung konsumsi harian real, bukan hanya kapasitas teoritis.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Faktor cadangan</strong> — Desain dengan margin 20–30% di atas kebutuhan puncak.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Konsumsi energi</strong> — Pilih sistem dengan ERD untuk efisiensi listrik kapal.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kemudahan perawatan</strong> — Akses komponen dan ketersediaan suku cadang penting.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sertifikasi</strong> — Pastikan sistem sudah type-approved oleh klasifikasi kapal Anda.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pelatihan kru</strong> — Vendor yang baik menyediakan pelatihan on-board.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Dukungan after-sales global</strong> — Penting jika kapal beroperasi lintas perairan.</li>
          </ul>

          <blockquote className="border-l-4 border-accent p-[0.78rem_1.4rem] bg-ice rounded-r-md my-[1.5rem] italic text-muted">
            "Di laut, Anda tidak bisa sekadar menelepon teknisi. Sistem SWRO marine yang andal bukan hanya tentang hardware — tetapi juga tentang desain yang mengantisipasi operasi mandiri jangka panjang."<br />
            <strong>— Tim TSM, Marine Specialist TSM</strong>
          </blockquote>

          <h2 id="konsultasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Kapal atau Platform Anda Butuh SWRO?</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM memiliki pengalaman khusus di sektor maritim Indonesia. Kami memahami regulasi klasifikasi, kondisi operasi khas kapal Indonesia, dan dapat menyesuaikan desain dengan constraint ruang dan daya kapal Anda.</p>
        </div>

        
        <div className="prose max-w-none text-text">

          <h2 id="faktor-maritime" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Faktor yang Perlu Dipertimbangkan dalam Sistem SWRO Marine</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Memilih sistem RO untuk aplikasi maritim berbeda secara fundamental dari instalasi darat. Kesalahan dalam memilih atau mengoperasikan sistem SWRO di kapal atau platform offshore bisa berdampak jauh lebih serius — tidak ada teknisi yang bisa dipanggil datang dalam 2 jam jika kapal sedang beroperasi di tengah laut. Berikut faktor-faktor yang harus dievaluasi secara mendalam:</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">1. Sertifikasi Klasifikasi yang Sesuai</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem SWRO yang dipasang di kapal komersial harus memiliki type approval dari badan klasifikasi yang sesuai: BV (Bureau Veritas), DNV GL, ABS (American Bureau of Shipping), LR (Lloyd's Register), atau untuk kapal Indonesia juga BKI (Biro Klasifikasi Indonesia). Sertifikasi ini bukan formalitas — ini memastikan sistem dirancang untuk tahan terhadap getaran, kemiringan kapal (hingga 15°), kondisi garam-laut, dan standar instalasi yang ketat. TSM menyediakan dokumentasi teknis lengkap untuk proses approval klasifikasi.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">2. Material Anti-Korosi untuk Lingkungan Laut</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Air laut adalah lingkungan yang sangat korosif. Semua komponen yang terpapar air laut harus menggunakan material yang tepat: duplex stainless steel 2205 atau super duplex 2507 untuk pipa dan housing di bawah tekanan tinggi, titanium untuk heat exchanger dan komponen kritis, coating epoxy marine-grade untuk struktur baja, dan seal/gasket dari material elastomer yang tahan terhadap ozon dan chlorine. Penggunaan material yang tidak tepat — bahkan hanya satu fitting yang salah — bisa menyebabkan kegagalan sistem dalam hitungan bulan. Untuk perbandingan teknologi, lihat juga <Link to="/produk/desalinasi">produk sistem SWRO TSM</Link>.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">3. Desain Compact dan Weight Budget</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Di kapal, setiap meter persegi dan kilogram adalah sumber daya berharga. Sistem SWRO marine harus didesain dengan dimensi dan berat yang sesuai dengan space yang tersedia di kapal. Tata letak yang baik juga mempertimbangkan akses untuk perawatan tanpa harus mengeluarkan seluruh sistem dari ruang mesin. Modularitas — kemampuan untuk mengeluarkan komponen individual (membran, pompa) tanpa membongkar sistem keseluruhan — adalah fitur yang sangat dihargai oleh chief engineer kapal.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">4. Kemampuan Operasi Otomatis dengan Supervisi Minimal</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kru kapal tidak semuanya adalah water treatment engineer. Sistem harus dapat beroperasi secara otomatis dengan alarming yang jelas dan prosedur respons yang sederhana. <strong>Auto-flush</strong> saat sistem shutdown (mencegah scaling dan biofouling selama tidak beroperasi), <strong>auto-start</strong> sesuai kebutuhan, dan alarm yang mudah diinterpretasikan adalah fitur standar yang diharapkan dari sistem SWRO marine modern. Lihat juga <Link href="industri.html#maritim">solusi water treatment untuk industri maritim dan offshore</Link> dari TSM.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">5. Dukungan Teknis Global dan Ketersediaan Suku Cadang</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kapal yang beroperasi di rute internasional membutuhkan vendor yang memiliki jaringan dukungan teknis global. Membran RO yang digunakan di sistem marine seharusnya dari brand internasional (Dow, Toray, Koch) yang suku cadangnya tersedia di pelabuhan-pelabuhan utama dunia. Untuk kapal yang beroperasi di perairan Indonesia, TSM menjamin ketersediaan stok suku cadang di Bekasi dan kemampuan pengiriman ke pelabuhan-pelabuhan utama Indonesia dalam waktu singkat.</p>

          <h2 id="faq-maritim" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan tentang Sistem SWRO Marine</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa kapasitas sistem SWRO yang tepat untuk kapal dengan 30 kru?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kebutuhan air per kru di kapal komersial biasanya dihitung <strong>150–250 liter/orang/hari</strong> (untuk minum, memasak, mandi, laundry, dan kebersihan fasilitas). Untuk 30 kru, ini berarti 4,5–7,5 m³/hari. Ditambahkan margin keamanan 20–30% dan kebutuhan untuk mesin (pendingin, air bersih untuk scrubbing), sistem SWRO 8–10 m³/hari umumnya cukup. Namun selalu lakukan perhitungan berdasarkan profil operasi spesifik kapal Anda, termasuk durasi voyage terpanjang tanpa akses ke pelabuhan. Gunakan <Link to="/kalkulator">kalkulator kebutuhan air TSM</Link> sebagai titik awal.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Bagaimana cara menangani SWRO saat kapal berlabuh di pelabuhan?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Saat berlabuh di pelabuhan, kebanyakan kapal menggunakan air dari pasokan darat (bunker water) daripada mengoperasikan SWRO — menghemat energi dan memperpanjang umur membran. Namun sistem SWRO harus masuk dalam prosedur <strong>lay-up</strong> yang tepat: flushing dengan air tawar, sanitasi kimia dengan sodium metabisulfit (untuk short-term lay-up) atau formalin (untuk long-term), dan penyimpanan dalam kondisi bersih. Prosedur lay-up yang salah adalah penyebab umum biofouling parah yang membutuhkan penggantian membran prematur. Kami memiliki panduan lay-up standar untuk semua sistem SWRO yang kami pasang.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah sistem SWRO bisa dipasang sebagai retrofit di kapal yang sudah ada?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ya, retrofit SWRO sangat umum dilakukan, terutama pada kapal yang sebelumnya mengandalkan sepenuhnya pada bunker water dari darat. Tantangan retrofit adalah keterbatasan ruang, ketersediaan kapasitas listrik tambahan, dan routing pipa di kapal existing. TSM melakukan survey kapal (on-board inspection) sebelum desain untuk memastikan solusi yang diusulkan benar-benar bisa diimplementasikan sesuai space dan constraint yang ada. Untuk informasi lebih lanjut tentang proyek-proyek maritim kami, kunjungi <Link to="/portofolio">halaman portofolio TSM</Link>.</p>

          <h2 id="kesimpulan-maritim" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Kesimpulan &amp; Langkah Selanjutnya</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem SWRO marine yang andal bukan hanya tentang memilih membran yang tepat — melainkan tentang sistem engineering yang holistik: material yang sesuai, sertifikasi yang benar, otomasi yang tepat, dan dukungan purna jual yang bisa diandalkan dari perairan manapun kapal beroperasi. Dengan pengalaman di sektor maritim Indonesia termasuk kapal TNI AL dan armada komersial, TSM memahami standar dan tantangan unik aplikasi ini.</p>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tim Marine Specialist TSM siap melakukan assessment kebutuhan kapal atau platform offshore Anda. Dari compact unit untuk kapal kecil hingga sistem besar untuk FPSO dan platform, kami menyediakan solusi yang sesuai skala dan budget operasi Anda.</p>
          <div style={{"marginTop":"1.5rem"}}>
            <Link className="btn" style={{"display":"inline-block","padding":".85rem 2rem","background":"var(--blue)","color":"#fff","borderRadius":"8px","fontWeight":"700","fontSize":".96rem"}} to="/kontak">⚓ Hubungi Tim Marine Specialist TSM →</Link>
          </div>

        </div>
    

        <div className="share-row">
          <span>Bagikan:</span>
          <Link className="sh-btn" style={{"background":"#0a66c2"}} target="_blank" rel="noopener" to="/https://www.linkedin.com/sharing/share/offsite/?url=https%3A%2F%2Fpttsm.co.id%2Fartikel-ro-kapal-offshore">LinkedIn</Link>
          <Link className="sh-btn" style={{"background":"#1877f2"}} target="_blank" rel="noopener" to="/https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpttsm.co.id%2Fartikel/ro-kapal-offshore">Facebook</Link>
          <Link href="https://wa.me/?text=Artikel%20TSM%3A%20SWRO%20Kapal%20Offshore" className="sh-btn" style={{"background":"#25d366"}} target="_blank" rel="noopener noreferrer">WhatsApp</Link>
        </div>

        <div style={{"marginTop":"3rem"}}>
          <h3 style={{"fontFamily":"'Barlow Condensed',sans-serif","fontSize":"1.4rem","fontWeight":"900","color":"var(--navy)","marginBottom":"1rem"}}>Artikel Terkait</h3>
          <div className="related-grid">
            <Link className="rel-card" to="/artikel/desalinasi-solusi-pulau"><div className="rel-img" style={{"background":"linear-gradient(135deg,#0a2240,#0d5fa8)"}}><Waves className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div><div className="rel-body"><p>Desalinasi untuk Pulau Terpencil</p><span>15 Mar 2025 · 6 mnt</span></div></Link>
            <Link className="rel-card" to="/artikel/ro-prinsip-kerja"><div className="rel-img" style={{"background":"linear-gradient(135deg,#054a6e,#1e90d6)"}}><Droplet className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div><div className="rel-body"><p>Mengenal Teknologi Reverse Osmosis</p><span>28 Mar 2025 · 5 mnt</span></div></Link>
          </div>
        </div>
      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#kebutuhan">Kebutuhan di Maritim</Link></li>
            <li><Link href="#karakteristik">Karakteristik SWRO Marine</Link></li>
            <li><Link href="#komponen">Komponen Utama</Link></li>
            <li><Link href="#tantangan">Tantangan Operasional</Link></li>
            <li><Link href="#portofolio">Portofolio TSM</Link></li>
            <li><Link href="#pemilihan">Tips Memilih Sistem</Link></li>
          </ul>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Tentang Penulis</h4>
          <div className="author-box">
            <div className="author-av">HS</div>
            <div>
              <div className="author-av-name">Tim TSM</div>
              <div className="author-av-role">Marine Specialist</div>
            </div>
          </div>
          <p style={{"fontSize":".84rem","color":"var(--muted)","lineHeight":"1.65"}}>Marine engineer TSM dengan 15+ tahun pengalaman di sistem SWRO untuk kapal dan platform offshore Indonesia.</p>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem]" style={{"background":"linear-gradient(145deg,var(--navy),var(--blue))","border":"none"}}>
          <h4 style={{"color":"rgba(255,255,255,.45)","borderColor":"rgba(255,255,255,.15)"}}>SWRO untuk Kapal</h4>
          <p style={{"fontSize":".86rem","lineHeight":"1.65","marginBottom":"1rem","opacity":".84","color":"#fff"}}>Konsultasikan kebutuhan sistem desalinasi untuk kapal atau platform Anda.</p>
          <Button variant="white" to="/kontak" >📞 Konsultasi Sekarang</Button>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Artikel Lainnya</h4>
          <ul style={{"display":"flex","flexDirection":"column","gap":".65rem"}}>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/desalinasi-solusi-pulau">→ Desalinasi Pulau Terpencil</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/ro-prinsip-kerja">→ Teknologi Reverse Osmosis</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/5-kesalahan-perawatan-ro">→ Kesalahan Perawatan RO</Link></li>
            <li><Link style={{"fontSize":".84rem","fontWeight":"600","color":"var(--blue)","display":"block"}} to="/artikel">→ Lihat Semua Artikel</Link></li>
          </ul>
        </div>
      </aside>

    </div>
  </div>
</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold leading-[1.15] mb-[0.65rem]">Kapal atau Platform Anda Butuh SWRO?</h2>
    <p className="text-[0.88rem] opacity-90 leading-[1.75] max-w-[600px] mx-auto mb-8">TSM spesialis sistem RO marine untuk kapal dagang, penumpang, kapal TNI AL, dan platform offshore di Indonesia.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Button variant="white" to="/kontak" >📞 Hubungi Kami</Button>
      <Button variant="outline-white" to="/produk/desalinasi" >🔍 Lihat Produk SWRO</Button>
    </div>
  </div>
</div>

    </>
  );
};

export default ArtikelRoKapalOffshore;
