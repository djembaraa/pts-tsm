import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


const ArtikelStandarAirFarmasiBpom = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/artikel">Artikel</Link> › Farmasi &amp; Regulasi</div>
    <h1>Standar Air Farmasi Indonesia:<br />RO+EDI untuk Memenuhi BPOM CPOB</h1>
    <p>Panduan lengkap pedoman CPOB BPOM 2018 untuk sistem air farmasi — Purified Water, WFI, Pure Steam — dan mengapa RO+EDI menjadi standar emas industri.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">

      <article>
        <div className="art-hero-img">
          <picture>
            <source srcSet="images/foto-mesin-swro.webp" type="image/webp" />
            <img src="images/foto-mesin-swro.jpg" alt="Sistem RO EDI untuk industri farmasi sesuai standar CPOB BPOM" />
          </picture>
        </div>

        <div className="art-meta-bar">
          <span className="am-tag">Farmasi</span>
          <span className="am-info">📅 2 Mei 2026</span>
          <span className="am-info">✍️ Tim TSM</span>
          <span className="am-info">⏱ 10 menit baca</span>
        </div>

        <div className="prose max-w-none text-text">

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Industri farmasi Indonesia adalah sektor dengan persyaratan kualitas air paling ketat. Air bukan utilitas biasa — ia adalah <strong>bahan baku, media steril, dan komponen produk</strong> yang langsung mempengaruhi keamanan pasien. Kegagalan sistem air dapat berakibat batch reject, recall produk, hingga sanksi BPOM yang menghentikan produksi sepenuhnya.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Artikel ini menjelaskan secara lengkap standar air farmasi yang berlaku di Indonesia: <strong>pedoman CPOB BPOM 2018, kategori air farmasi, mengapa kombinasi RO+EDI menjadi standar emas modern, persyaratan loop distribusi sanitary, dan proses validasi 3 fase</strong> yang harus dilewati sebelum sistem dapat dirilis untuk produksi komersial.</p>

          <h2 id="regulasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Regulasi Air Farmasi di Indonesia</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Regulator industri farmasi di Indonesia adalah <strong>Badan Pengawas Obat dan Makanan (BPOM)</strong>, yang menerbitkan <strong>Pedoman CPOB (Cara Pembuatan Obat yang Baik) 2018</strong>. Pedoman ini mengadopsi standar global dengan referensi ke:</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>USP &lt;1231&gt;</strong> — United States Pharmacopeia, dengan revisi 2017 yang mengizinkan RO+UF tervalidasi untuk WFI</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Ph.Eur (European Pharmacopoeia)</strong> — Standar Eropa yang umum diadopsi pabrik farmasi multinasional</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>JP (Japanese Pharmacopoeia)</strong> — Untuk pabrik yang melayani pasar Jepang dan Asia Pasifik</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>ASME BPE</strong> — Bioprocess Equipment Standard untuk material dan konstruksi sistem</li>
          </ul>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk pabrik farmasi yang dioperasikan oleh perusahaan multinasional, sering ada persyaratan tambahan dari <strong>FDA (jika ekspor ke US)</strong> atau <strong>WHO PQ (untuk vaksin dan obat WHO Essential)</strong>. Sistem yang dirancang sesuai pedoman CPOB BPOM umumnya memenuhi persyaratan global ini juga.</p>

          <h2 id="kategori" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Kategori Air Farmasi dan Spesifikasinya</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pedoman CPOB membagi air dalam beberapa kategori dengan persyaratan berbeda:</p>

          <table className="w-full border-collapse my-[1.5rem] text-[0.9rem]">
            <tbody><tr><th>Kategori</th><th>Konduktivitas Maks (25°C)</th><th>TOC Maks</th><th>Endotoksin</th><th>Mikroba Maks</th></tr>
            <tr><td>Drinking Water</td><td>—</td><td>—</td><td>—</td><td>(Permenkes 492/2010)</td></tr>
            <tr><td>Purified Water (PW)</td><td>1,3 µS/cm</td><td>500 ppb</td><td>Tidak wajib</td><td>100 CFU/mL</td></tr>
            <tr><td>Highly Purified Water</td><td>1,3 µS/cm</td><td>500 ppb</td><td>0,25 EU/mL</td><td>10 CFU/100 mL</td></tr>
            <tr><td>Water for Injection (WFI)</td><td>1,3 µS/cm</td><td>500 ppb</td><td>0,25 EU/mL</td><td>10 CFU/100 mL</td></tr>
            <tr><td>Pure Steam (kondensat)</td><td>1,3 µS/cm</td><td>500 ppb</td><td>0,25 EU/mL</td><td>—</td></tr>
          </tbody></table>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Selain spesifikasi kimia di atas, ada parameter <strong>action level dan alert level</strong> yang lebih ketat dari spesifikasi compendia. Action level adalah threshold di mana investigasi dan tindakan korektif harus dilakukan, biasanya 50–80% dari spesifikasi. Alert level adalah trigger untuk monitoring lebih intensif, biasanya 30–50% dari spesifikasi. Sistem yang dirancang baik mempertahankan kualitas jauh di bawah alert level.</p>

          <h2 id="ro-edi-emas" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Mengapa RO + EDI Menjadi Standar Emas Modern?</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Hingga 1990-an, demineralisasi konvensional (Cation-Anion-Mixed Bed dengan resin yang diregenerasi HCl/NaOH) adalah standar industri farmasi untuk Purified Water. Sejak 2000-an, kombinasi <strong>RO + EDI (Electrodeionization)</strong> mengambil alih sebagai standar emas — dan untuk alasan yang kuat:</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Keunggulan RO + EDI vs Demineralisasi Konvensional</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Tidak butuh kimia regenerasi</strong> — EDI menggunakan resin yang terus diregenerasi secara elektrik. Tidak ada storage HCl, H₂SO₄, atau NaOH yang berbahaya. Tidak ada handling kimia yang membahayakan operator. Tidak ada limbah regenerasi yang harus dinetralisasi.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Output kontinu</strong> — Tidak ada siklus regenerasi yang menghentikan produksi. Demineralisasi konvensional butuh regenerasi 2–4 jam setiap 8–24 jam — siklus yang menyulitkan operasi 24/7.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Konsumsi energi rendah</strong> — EDI hanya butuh 0,1–0,2 kWh/m³ listrik DC. Bandingkan dengan distilasi multi-effect yang butuh 50+ kWh/m³.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Output stabil dan konsisten</strong> — Resistivitas EDI konsisten 16–18 MΩ·cm tanpa "regeneration overshoot" yang umum di Mixed Bed.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Footprint kompak</strong> — Modul EDI 5 m³/jam berukuran sekitar 1×0,5×1,8 m, jauh lebih kecil dari kolom resin setara.</li>
          </ul>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Konfigurasi Standar RO+EDI untuk PW</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Konfigurasi yang umum diadopsi pabrik farmasi Indonesia:</p>
          <ol className="ml-[1.5rem] my-[1.05rem] list-decimal">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pre-treatment</strong> — Multi-media filter, karbon aktif (untuk dechlorination), softener (untuk hardness control)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Cartridge filter 5 µm</strong> sebagai protection sebelum RO</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>RO Pass 1</strong> — Membran BW Dow Filmtec atau Toray, recovery 75%, tekanan 12–15 bar</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>RO Pass 2</strong> (opsional) — Untuk meningkatkan rejection lebih lanjut sebelum EDI</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>EDI Module</strong> — Suez E-Cell atau Evoqua Ionpure, output konduktivitas &lt;0,1 µS/cm</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>UV 254 nm</strong> di outlet untuk disinfeksi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Loop distribusi sanitary</strong> dengan sirkulasi kontinu (akan dibahas di bawah)</li>
          </ol>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk gambaran sistem ini diimplementasikan, lihat <Link to="/produk/demi">solusi demineralisasi dan EDI dari TSM</Link> yang sudah diadopsi fasilitas farmasi bersertifikat CPOB.</p>

          <h2 id="wfi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Memproduksi Water for Injection (WFI)</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">WFI adalah kategori air paling murni yang digunakan untuk produk parenteral (injeksi, infus) dan biologi. Persyaratan kunci yang membedakan WFI dari PW: <strong>endotoksin &lt;0,25 EU/mL</strong>. Endotoksin (lipopolisakarida dari dinding sel bakteri Gram-negatif) dapat menyebabkan demam dan reaksi inflamasi serius pada pasien meskipun bakteri sudah mati.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Dua Pendekatan Produksi WFI</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>1. Distilasi (tradisional)</strong>: Air dipanaskan menjadi uap, lalu dikondensasikan kembali. Distilator multi-effect (ME) atau Vapor Compression (VC) adalah pilihan standar. Distilasi sangat efektif menghilangkan endotoksin yang non-volatile. Kelemahan: konsumsi energi sangat tinggi.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>2. RO + UF tervalidasi (modern, sejak USP 2017)</strong>: Kombinasi RO 2-pass + UF dengan dosis design dapat menghilangkan endotoksin secara efektif. Lebih hemat energi, tapi membutuhkan validasi yang lebih ketat untuk membuktikan endotoxin removal yang konsisten.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Di Indonesia, mayoritas produsen WFI <strong>tetap memilih distilasi</strong> karena: (1) regulator BPOM lebih familiar dengan distilasi, (2) historical track record yang panjang, (3) "fail-safe" untuk endotoksin tanpa perlu validasi membran komplex, dan (4) masih menjadi metode preferensi farmakope global.</p>

          <h2 id="loop-distribusi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Loop Distribusi Sanitary: Yang Sering Diabaikan</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pengalaman TSM menunjukkan: <strong>50% kegagalan sistem air farmasi terjadi di loop distribusi, bukan di sistem produksi</strong>. Loop distribusi yang dirancang salah dapat mengontaminasi air berkualitas farmakope dalam hitungan jam. Persyaratan kunci loop distribusi sanitary:</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Material dan Konstruksi</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pipa SS-316L electropolished</strong> dengan kekasaran permukaan (Ra) &lt;0,5 µm — permukaan kasar adalah tempat ideal biofilm tumbuh</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Welding orbital tervalidasi</strong> — setiap weld point auto-orbital, tidak boleh stick weld manual; setiap weld point didokumentasikan dengan video atau foto</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sanitary tri-clamp fitting</strong> — bukan threaded; pengganti gasket yang reguler dan dapat di-inspect visual</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Slope kontinu</strong> untuk drainability — loop harus dapat dikuras 100% saat sanitasi tanpa titik genangan</li>
          </ul>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Operasional Loop</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Velocity 1–2 m/s kontinu</strong> — air harus terus mengalir untuk mencegah biofilm; velocity terlalu tinggi menyebabkan erosi material</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Dead-leg &lt;6D</strong> — panjang dead-leg (cabang pipa tertutup, instrument port) tidak melebihi 6× diameter pipa</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sanitasi rutin</strong> — air panas 80–85°C atau Pure Steam minimum mingguan, atau ozonasi kontinu untuk PW (ozon di-degradasi UV sebelum point of use)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sampling rutin</strong> — di setiap user point sesuai sampling plan validasi</li>
          </ul>

          <h2 id="validasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Proses Validasi 3 Fase BPOM</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">BPOM mensyaratkan validasi 3 fase sebelum sistem air dapat dirilis untuk produksi komersial. Total waktu validasi minimum adalah <strong>2–3 bulan plus monitoring 12 bulan</strong>:</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Fase 1 (2–4 minggu): Baseline</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sampling harian intensif di setiap user point untuk menetapkan baseline kualitas air. Selama fase ini, air dari sistem <strong>belum boleh digunakan untuk produksi</strong>. Tujuan: membuktikan sistem dapat menghasilkan kualitas yang spesifikasi sejak awal.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Fase 2 (2–4 minggu): SOP Validation</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Validasi SOP operasi: sanitasi rutin, penggantian filter, kalibrasi instrumen. Membuktikan bahwa sistem stabil di bawah variasi kondisi operasi normal — termasuk di hari kerja dengan beban penuh dan saat shutdown weekend.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Fase 3 (12 bulan): Long-Term Monitoring</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Monitoring berkelanjutan dengan frequency menurun (harian → mingguan → bulanan). Membuktikan stabilitas kualitas lintas variasi musiman, beban produksi, dan kondisi air baku. Selama fase ini, air dapat digunakan untuk produksi komersial dengan kondisi monitoring tetap ketat.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Dokumen Validasi yang Harus Disiapkan</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Selain protokol fase 1-2-3, dokumen validasi yang harus tersedia:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>URS (User Requirement Specification)</strong> — apa yang dibutuhkan klien</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>FS (Functional Specification)</strong> — bagaimana sistem akan memenuhi URS</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>DQ (Design Qualification)</strong> — desain memenuhi FS</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>IQ (Installation Qualification)</strong> — instalasi sesuai desain dengan material certificate</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>OQ (Operational Qualification)</strong> — sistem berfungsi di semua mode operasi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>PQ (Performance Qualification)</strong> — sistem konsisten menghasilkan kualitas (= validasi 3 fase)</li>
          </ul>

          <h2 id="kesalahan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Kesalahan yang Sering Terjadi</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Berdasarkan pengalaman TSM melayani fasilitas farmasi Indonesia, berikut kesalahan yang paling sering terjadi:</p>

          <ol className="ml-[1.5rem] my-[1.05rem] list-decimal">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Underestimating loop distribusi</strong> — Banyak proyek mengalokasikan 60-70% budget untuk sistem produksi (RO+EDI) dan hanya 30% untuk loop. Realitas: loop yang baik harus 40-50% dari total karena ini adalah titik kritis kontaminasi.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Welding tidak orbital</strong> — Demi penghematan, beberapa kontraktor menggunakan stick weld manual untuk loop. Hampir pasti gagal di audit BPOM karena kekasaran permukaan dalam pipa.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Dead-leg yang terlewat</strong> — Instrumentasi yang dipasang dengan cabang &gt;6D adalah dead-leg yang akan menjadi sumber kontaminasi. Sering terlewat di P&amp;ID review jika engineer tidak detail.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Tidak ada redundansi monitoring</strong> — Conductivity dan TOC analyzer adalah instrumen kritis. Tanpa redundansi, satu instrumen rusak menyebabkan production hold sampai diperbaiki.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Validasi terlambat</strong> — Beberapa pabrik memulai validasi setelah commissioning selesai, baru menemukan masalah desain yang tidak dapat diperbaiki tanpa modifikasi besar. Validasi harus dimulai dari URS.</li>
          </ol>

          <h2 id="faq" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

        </div>

      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#regulasi">Regulasi Air Farmasi Indonesia</Link></li>
            <li><Link href="#kategori">Kategori Air Farmasi</Link></li>
            <li><Link href="#ro-edi-emas">Mengapa RO+EDI Standar Emas</Link></li>
            <li><Link href="#wfi">Memproduksi Water for Injection</Link></li>
            <li><Link href="#loop-distribusi">Loop Distribusi Sanitary</Link></li>
            <li><Link href="#validasi">Proses Validasi 3 Fase</Link></li>
            <li><Link href="#kesalahan">Kesalahan yang Sering Terjadi</Link></li>
            <li><Link href="#faq">Pertanyaan Umum</Link></li>
          </ul>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Tentang Penulis</h4>
          <div className="author-box">
            <div className="author-av">TS</div>
            <div>
              <div className="author-av-name">Tim Editorial TSM</div>
              <div className="author-av-role">Divisi Teknik &amp; Edukasi</div>
            </div>
          </div>
          <p style={{"fontSize":".84rem","color":"var(--muted)","lineHeight":"1.65"}}>Tim engineering PT Tirta Sumber Makmur dengan pengalaman 24+ tahun di industri water treatment Indonesia.</p>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem]" style={{"background":"linear-gradient(145deg,var(--navy),var(--blue))","border":"none"}}>
          <h4 style={{"color":"rgba(255,255,255,.45)","borderColor":"rgba(255,255,255,.15)"}}>Butuh Konsultasi?</h4>
          <p style={{"fontSize":".86rem","lineHeight":"1.65","marginBottom":"1rem","opacity":".84","color":"#fff"}}>Dapatkan konsultasi gratis dan estimasi biaya dari tim ahli kami.</p>
          <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center","fontSize":".82rem"}} to="/kontak">📞 Konsultasi Sekarang</Link>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Artikel Lainnya</h4>
          <ul style={{"display":"flex","flexDirection":"column","gap":".65rem"}}>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/air-farmasi-ro-edi">→ Detil Teknologi RO + EDI</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/industri/farmasi">→ Solusi Industri Farmasi</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/demi">→ Demineralisasi &amp; EDI</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/monitoring-kualitas-air-ro">→ Monitoring Kualitas Air</Link></li>
            <li><Link style={{"fontSize":".84rem","fontWeight":"600","color":"var(--blue)","display":"block"}} to="/artikel">→ Lihat Semua Artikel</Link></li>
          </ul>
        </div>
      </aside>

    </div>
  </div>
</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Membutuhkan Sistem Air Farmasi yang Lulus BPOM?</h2>
    <p>Tim ahli kami siap membantu mulai dari analisis kebutuhan hingga instalasi.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak">📞 Hubungi Kami</Link>
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/industri/farmasi">🔍 Lihat Solusi Farmasi</Link>
    </div>
  </div>
</div>

    </>
  );
};

export default ArtikelStandarAirFarmasiBpom;
