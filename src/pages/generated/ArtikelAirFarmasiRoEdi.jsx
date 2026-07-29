import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplet } from 'lucide-react';


const ArtikelAirFarmasiRoEdi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/artikel">Artikel</Link> › Industri</div>
    <h1>Standar Kualitas Air untuk Industri Farmasi:<br />Mengapa RO + EDI Wajib?</h1>
    <p>Regulasi BPOM dan standar farmakope internasional menetapkan persyaratan ketat kualitas air untuk produksi obat. RO + EDI menjadi solusi wajib bagi industri farmasi Indonesia modern.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">

      <article>
        <div className="art-hero-img">⚗️</div>

        <div className="art-meta-bar">
          <span className="am-tag">Industri</span>
          <span className="am-info">📅 20 Februari 2025</span>
          <span className="am-info">✍️ Tim TSM</span>
          <span className="am-info">⏱ 7 menit baca</span>
          <span className="am-info">👁 740 views</span>
        </div>

        <div className="prose max-w-none text-text">

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Di industri farmasi, air bukan sekadar bahan baku — air adalah bagian dari produk itu sendiri. Mulai dari pembuatan tablet, sirup, injeksi, hingga pencucian alat produksi, semuanya membutuhkan air dengan tingkat kemurnian yang jauh melampaui air minum biasa.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Regulasi dari BPOM (CPOB), USP (United States Pharmacopeia), dan Ph.Eur (European Pharmacopoeia) menetapkan standar yang sangat ketat. Setiap pelanggaran bukan hanya berisiko pada kualitas produk, tetapi juga dapat menyebabkan pencabutan izin produksi.</p>

          <h2 id="jenis-air" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Jenis-Jenis Air Farmasi</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Farmakope internasional mengenal beberapa kategori air farmasi dengan spesifikasi berbeda:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Potable Water</strong> — Air minum yang memenuhi standar SNI atau WHO sebagai bahan baku awal.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Purified Water (PW)</strong> — Air murni untuk pembuatan sediaan non-steril, pencucian kemasan primer, dan bahan baku.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Highly Purified Water (HPW)</strong> — Tingkat kemurnian di atas PW, digunakan pada sediaan tertentu.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Water for Injection (WFI)</strong> — Air paling murni dan steril, digunakan untuk injeksi dan sediaan parenteral.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pure Steam</strong> — Uap murni untuk sterilisasi autoclave dan SIP (Sterilization in Place).</li>
          </ul>

          <div className="info-box bg-ice border border-border rounded-[10px] p-[1.2rem_1.5rem] my-[1.75rem]">
            <strong className="block text-[0.7rem] font-bold uppercase tracking-[0.1em] text-accent mb-[0.38rem]">💡 Standar BPOM CPOB 2018</strong>
            Air farmasi harus memenuhi parameter conductivity, TOC (Total Organic Carbon), dan endotoxin yang sangat ketat. Purified Water harus memiliki conductivity ≤ 1,3 μS/cm pada 25°C dan TOC ≤ 500 ppb.
          </div>

          <h2 id="kenapa-ro-edi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Mengapa RO + EDI Menjadi Standar?</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Secara teknis, ada beberapa metode untuk menghasilkan Purified Water: distilasi, ion exchange resin konvensional, RO tunggal, hingga kombinasi RO dengan EDI. Namun, kombinasi <strong>Reverse Osmosis + Electrodeionization (EDI)</strong> telah menjadi pilihan dominan di seluruh dunia karena beberapa alasan fundamental:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kontinyu tanpa regenerasi kimia</strong> — Tidak seperti ion exchange konvensional yang perlu diregenerasi dengan HCl/NaOH, EDI bekerja terus-menerus tanpa bahan kimia tambahan.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Hemat energi</strong> — Dibandingkan distilasi, konsumsi energi RO + EDI hanya sekitar 10–15%.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kualitas konsisten</strong> — Output resistivitas stabil di 16–18 MΩ·cm selama parameter operasi terjaga.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Validasi mudah</strong> — Sistem RO + EDI memiliki track record validasi yang sudah mapan dan diterima regulator.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Footprint kecil</strong> — Jauh lebih ringkas dibanding sistem distilasi kapasitas setara.</li>
          </ul>

          <h2 id="arsitektur" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Arsitektur Sistem RO + EDI untuk Farmasi</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem air farmasi yang baik memiliki struktur bertingkat:</p>
          <ol className="ml-[1.5rem] my-[1.05rem] list-decimal">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pre-treatment</strong> — Softener, filter karbon aktif, dan dechlorination untuk melindungi membran RO.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>RO Pass 1</strong> — Reverse Osmosis tahap pertama menghilangkan 95–99% TDS, mikroorganisme, dan endotoxin.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>RO Pass 2 (opsional)</strong> — Tahap kedua untuk aplikasi yang membutuhkan kualitas lebih tinggi.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>EDI (Electrodeionization)</strong> — Polishing akhir yang menghasilkan resistivitas 16–18 MΩ·cm.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>UV 254 nm</strong> — Sterilisasi tambahan untuk memastikan tidak ada mikroba hidup.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Tangki penyimpanan higienis</strong> — Stainless steel 316L dengan vent filter hidrofobik.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Loop distribusi</strong> — Sirkulasi terus-menerus dengan velocity minimum 1 m/s untuk mencegah biofilm.</li>
          </ol>

          <h2 id="parameter" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Parameter Kritis yang Harus Dimonitor</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem air farmasi yang tervalidasi harus memantau parameter-parameter berikut secara kontinyu:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Conductivity / Resistivity</strong> — Indikator kemurnian ionik, harus dicatat kontinyu.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>TOC (Total Organic Carbon)</strong> — Indikator kontaminasi organik, target ≤ 500 ppb untuk PW.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Bioburden</strong> — Jumlah mikroba, target ≤ 100 CFU/mL untuk PW, ≤ 10 CFU/100mL untuk WFI.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Endotoxin</strong> — Target ≤ 0,25 EU/mL untuk WFI.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Nitrates &amp; Heavy Metals</strong> — Harus di bawah batas deteksi farmakope.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Temperature</strong> — Untuk loop hot WFI biasanya dijaga &gt; 70°C untuk mencegah pertumbuhan mikroba.</li>
          </ul>

          <h2 id="validasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Validasi &amp; Kualifikasi Sistem</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">BPOM mewajibkan proses validasi 3 fase untuk sistem air farmasi baru:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Fase 1 (2–4 minggu)</strong> — Sampling harian intensif untuk menetapkan baseline kualitas.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Fase 2 (2–4 minggu)</strong> — Validasi prosedur operasi standar (SOP) dan kemampuan mempertahankan kualitas.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Fase 3 (1 tahun)</strong> — Monitoring jangka panjang untuk membuktikan stabilitas kualitas sepanjang musim dan variasi beban.</li>
          </ul>

          <blockquote className="border-l-4 border-accent p-[0.78rem_1.4rem] bg-ice rounded-r-md my-[1.5rem] italic text-muted">
            "Investasi pada sistem air farmasi yang tervalidasi bukan biaya — melainkan asuransi terhadap gagal batch, recall produk, dan sanksi regulator yang nilainya ribuan kali lipat biaya sistem."<br />
            <strong>— Tim Engineering PT Tirta Sumber Makmur</strong>
          </blockquote>

          <h2 id="konsultasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Mencari Solusi Air Farmasi Tervalidasi?</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM telah merancang dan menginstalasi sistem air farmasi untuk berbagai pabrik farmasi, rumah sakit, dan laboratorium di Indonesia. Kami memahami persyaratan CPOB dan membantu klien melalui seluruh proses desain, instalasi, hingga dokumentasi validasi IQ/OQ/PQ.</p>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Hubungi tim kami untuk konsultasi awal <strong>gratis tanpa komitmen</strong>.</p>
        </div>

        
        <div className="prose max-w-none text-text">

          <h2 id="faktor-farmasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Faktor yang Menentukan Keandalan Sistem Air Farmasi</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem air farmasi berbeda fundamental dari sistem <strong>water treatment untuk pabrik</strong> biasa. Setiap keputusan desain harus mempertimbangkan tidak hanya performa teknis, tetapi juga kemampuan validasi, auditabilitas, dan kepatuhan regulasi jangka panjang. Berikut faktor kritis yang perlu dipertimbangkan tim engineering dan manajemen fasilitas:</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">1. Loop Distribusi: Hot atau Cold?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem distribusi Purified Water dapat didesain sebagai <em>cold loop</em> (ambient, dengan sanitasi berkala menggunakan ozon atau klorin dioksida) atau <em>hot loop</em> (&gt;70°C secara kontinu untuk mencegah proliferasi bakteri). Hot loop lebih andal dari perspektif pengendalian bioburden, namun membutuhkan material yang tahan suhu tinggi (umumnya 316L stainless steel electropolished) dan konsumsi energi lebih besar. Untuk fasilitas farmasi di Indonesia dengan regulasi CPOB terkini, pilihan antara keduanya harus didasarkan pada risk assessment yang terdokumentasi.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">2. Instrumentasi dan Monitoring Kontinu</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Berbeda dengan sistem industri umum, <strong>sistem RO farmasi CPOB</strong> mengharuskan monitoring kontinu — bukan spot-check periodik. Conductivity meter yang tervalidasi harus dipasang di setiap titik use point, dan data harus tercatat secara otomatis. Sistem SCADA dengan audit trail (21 CFR Part 11 compliant untuk ekspor ke pasar US) semakin menjadi standar bahkan untuk produsen lokal. TSM menyediakan sistem monitoring terintegrasi dengan kemampuan alarming dan reporting yang sesuai persyaratan BPOM.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">3. Material Konstruksi dan Permukaan</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Semua material yang berkontak dengan air farmasi harus memenuhi standar: stainless steel 316L (electropolished Ra ≤0,8 µm untuk distribusi PW), sambungan orbital-welded atau Tri-Clamp hygienic, dan seal dari material inert yang tidak melepaskan kontaminan. Penggunaan material yang tidak sesuai — bahkan plastik biasa untuk fitting — dapat menjadi sumber kontaminasi kimia yang menggagalkan validasi. Lihat produk <Link to="/produk/demi">sistem demineralisasi dan EDI</Link> TSM yang dirancang khusus untuk standar farmasi.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">4. Rencana Validasi IQ/OQ/PQ Sejak Desain</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Validasi bukan pekerjaan yang dilakukan setelah sistem selesai diinstalasi — melainkan dimulai dari tahap desain. Design Qualification (DQ) harus selesai sebelum pemesanan peralatan. IQ (Installation Qualification) dilakukan paralel dengan instalasi. OQ dan PQ membutuhkan protokol yang sudah disetujui jauh sebelum commissioning. Vendor yang berpengalaman di sektor farmasi Indonesia, seperti TSM, memiliki template dokumentasi dan protokol validasi yang sesuai standar CPOB dan dapat disesuaikan dengan kebutuhan spesifik fasilitas klien.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">5. Manajemen Risiko Kontaminasi Silang</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk produsen yang memproduksi beberapa kategori produk (OTC, ethical, steril) dalam satu fasilitas, risiko kontaminasi silang melalui sistem air harus dinilai dan dikelola. Segregasi loop distribusi, desain dead-leg yang minimal, dan prosedur sanitasi yang tervalidasi adalah elemen kunci dari program manajemen risiko sistem air farmasi yang komprehensif.</p>

          <h2 id="faq-farmasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan tentang Sistem Air Farmasi</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa perbedaan antara Purified Water dan Water for Injection (WFI)?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Purified Water (PW) digunakan untuk sediaan non-parenteral dan proses pembersihan. WFI memiliki standar lebih ketat lagi, terutama untuk <strong>endotoksin</strong> (≤0,25 EU/mL vs tidak dipersyaratkan untuk PW) dan harus diproduksi melalui distilasi atau metode yang setara (termasuk kini RO + UF sesuai revisi Ph.Eur 2017). WFI digunakan untuk injeksi, infus, dan produksi biologi. Biaya sistem WFI umumnya 3–5× lebih tinggi dari PW karena persyaratan teknis yang lebih ketat.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa lama proses validasi sistem air farmasi?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk sistem Purified Water standar dari awal instalasi hingga persetujuan final validasi: biasanya <strong>4–8 bulan</strong>. Ini mencakup IQ (2–4 minggu), OQ (2–4 minggu), dan PQ tiga fase yang totalnya 3–6 bulan. Faktor yang memperpanjang validasi antara lain: temuan deviation selama sampling, perlu re-sampling, atau perubahan SOP. Perencanaan yang matang dan dokumentasi yang rapi sejak awal adalah kunci efisiensi waktu validasi. Untuk memahami prinsip dasar teknologi yang digunakan, baca artikel kami tentang <Link to="/artikel/ro-prinsip-kerja">prinsip kerja Reverse Osmosis</Link>.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah BPOM selalu memeriksa sistem air farmasi dalam inspeksi CPOB?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ya, sistem air farmasi selalu menjadi fokus inspeksi CPOB BPOM. Inspektur akan memeriksa: status validasi (apakah sudah PQ approved?), program monitoring kontinu dan rekaman datanya, prosedur sanitasi dan bukti pelaksanaannya, catatan CIP dan hasilnya, serta program kualifikasi ulang (re-qualification) periodik. Temuan terkait sistem air adalah salah satu penyebab tertinggi CAPA (Corrective Action Preventive Action) dalam inspeksi BPOM di Indonesia.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Mengapa memilih TSM untuk sistem air farmasi dibandingkan vendor lain?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM telah merancang dan menginstalasi sistem air farmasi untuk klien-klien termasuk unit di lingkungan BPOM dan laboratorium terakreditasi. Kami memahami persyaratan CPOB Indonesia secara mendalam, memiliki template dokumentasi validasi yang sesuai, dan dapat memberikan dukungan on-site selama proses kualifikasi. Semua sistem farmasi TSM dirancang untuk kemudahan sanitasi, monitoring, dan audit — bukan hanya performa teknis semata. Lihat juga halaman industri kami tentang <Link href="industri.html#rs">solusi water treatment untuk rumah sakit dan farmasi</Link>.</p>

          <h2 id="kesimpulan-farmasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Kesimpulan &amp; Langkah Selanjutnya</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem air farmasi yang tervalidasi adalah investasi fundamental dalam keberlangsungan produksi dan kepatuhan regulasi. Kegagalan sistem air bukan hanya berisiko batch rejection — tetapi juga pencabutan izin produksi, recall produk, dan kerugian reputasi yang jauh lebih mahal dari biaya sistem itu sendiri.</p>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">PT Tirta Sumber Makmur siap mendampingi pabrik farmasi Anda dari tahap desain, instalasi, komisioning, hingga dukungan validasi IQ/OQ/PQ. Konsultasi awal kami gratis tanpa komitmen, dan semua proposal teknis kami lengkap dengan referensi standar CPOB yang berlaku.</p>
          <div style={{"marginTop":"1.5rem"}}>
            <Link className="btn" style={{"display":"inline-block","padding":".85rem 2rem","background":"var(--blue)","color":"#fff","borderRadius":"8px","fontWeight":"700","fontSize":".96rem"}} to="/kontak">⚗️ Konsultasi Sistem Air Farmasi →</Link>
          </div>

        </div>
    

        <div className="share-row">
          <span>Bagikan:</span>
          <Link className="sh-btn" style={{"background":"#0a66c2"}} target="_blank" rel="noopener" to="/https://www.linkedin.com/sharing/share/offsite/?url=https%3A%2F%2Fpttsm.co.id%2Fartikel-air-farmasi-ro-edi">LinkedIn</Link>
          <Link className="sh-btn" style={{"background":"#1877f2"}} target="_blank" rel="noopener" to="/https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpttsm.co.id%2Fartikel/air-farmasi-ro-edi">Facebook</Link>
          <Link href="https://wa.me/?text=Artikel%20TSM%3A%20Air%20Farmasi%20RO%20EDI" className="sh-btn" style={{"background":"#25d366"}} target="_blank" rel="noopener noreferrer">WhatsApp</Link>
        </div>

        <div style={{"marginTop":"3rem"}}>
          <h3 style={{"fontFamily":"'Barlow Condensed',sans-serif","fontSize":"1.4rem","fontWeight":"900","color":"var(--navy)","marginBottom":"1rem"}}>Artikel Terkait</h3>
          <div className="related-grid">
            <Link className="rel-card" to="/artikel/ro-prinsip-kerja"><div className="rel-img" style={{"background":"linear-gradient(135deg,#054a6e,#1e90d6)"}}><Droplet className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div><div className="rel-body"><p>Mengenal Teknologi Reverse Osmosis</p><span>28 Mar 2025 · 5 mnt</span></div></Link>
            <Link className="rel-card" to="/artikel/5-kesalahan-perawatan-ro"><div className="rel-img" style={{"background":"linear-gradient(135deg,#1a3a5c,#1e90d6)"}}>🔧</div><div className="rel-body"><p>5 Kesalahan Perawatan Membran RO</p><span>5 Mar 2025 · 4 mnt</span></div></Link>
          </div>
        </div>
      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#jenis-air">Jenis-Jenis Air Farmasi</Link></li>
            <li><Link href="#kenapa-ro-edi">Mengapa RO + EDI?</Link></li>
            <li><Link href="#arsitektur">Arsitektur Sistem</Link></li>
            <li><Link href="#parameter">Parameter Kritis</Link></li>
            <li><Link href="#validasi">Validasi &amp; Kualifikasi</Link></li>
            <li><Link href="#konsultasi">Butuh Sistem Farmasi?</Link></li>
          </ul>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Tentang Penulis</h4>
          <div className="author-box">
            <div className="author-av">RP</div>
            <div>
              <div className="author-av-name">Tim TSM</div>
              <div className="author-av-role">Konsultan Farmasi &amp; CPOB</div>
            </div>
          </div>
          <p style={{"fontSize":".84rem","color":"var(--muted)","lineHeight":"1.65"}}>Konsultan senior dengan pengalaman 20 tahun di industri farmasi dan sistem air CPOB-compliant.</p>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem]" style={{"background":"linear-gradient(145deg,var(--navy),var(--blue))","border":"none"}}>
          <h4 style={{"color":"rgba(255,255,255,.45)","borderColor":"rgba(255,255,255,.15)"}}>Butuh Sistem Farmasi?</h4>
          <p style={{"fontSize":".86rem","lineHeight":"1.65","marginBottom":"1rem","opacity":".84","color":"#fff"}}>Dapatkan konsultasi gratis untuk desain sistem air CPOB-compliant.</p>
          <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center","fontSize":".82rem"}} to="/kontak">📞 Konsultasi Sekarang</Link>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Artikel Lainnya</h4>
          <ul style={{"display":"flex","flexDirection":"column","gap":".65rem"}}>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/ro-prinsip-kerja">→ Mengenal Teknologi Reverse Osmosis</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/monitoring-kualitas-air-ro">→ Monitoring Kualitas Air RO Mandiri</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/zld-zero-liquid">→ Zero Liquid Discharge (ZLD)</Link></li>
            <li><Link style={{"fontSize":".84rem","fontWeight":"600","color":"var(--blue)","display":"block"}} to="/artikel">→ Lihat Semua Artikel</Link></li>
          </ul>
        </div>
      </aside>

    </div>
  </div>
</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Siap Implementasi Sistem Air Farmasi?</h2>
    <p>Tim engineer kami siap membantu desain dan implementasi sistem RO + EDI yang memenuhi CPOB dan farmakope internasional.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak">📞 Hubungi Kami</Link>
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/produk/demi">🔍 Lihat Produk EDI</Link>
    </div>
  </div>
</div>

    </>
  );
};

export default ArtikelAirFarmasiRoEdi;
