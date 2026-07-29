import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Droplet } from 'lucide-react';


const ArtikelStudiKasusRoTekstil = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/artikel">Artikel</Link> › Studi Kasus</div>
    <h1>Studi Kasus: Sistem RO 200 m³/hari<br />di Pabrik Tekstil Karawang</h1>
    <p>Bagaimana TSM membantu sebuah pabrik tekstil besar mengurangi konsumsi air PDAM hingga 70% dan menghemat biaya operasional secara signifikan dalam 24 bulan.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">

      <article>
        <div className="art-hero-img"><Factory className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div>

        <div className="art-meta-bar">
          <span className="am-tag">Studi Kasus</span>
          <span className="am-info">📅 25 Januari 2025</span>
          <span className="am-info">✍️ Tim Proyek TSM</span>
          <span className="am-info">⏱ 8 menit baca</span>
          <span className="am-info">👁 830 views</span>
        </div>

        <div className="prose max-w-none text-text">

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Studi kasus ini menggambarkan salah satu proyek RO industri besar yang dikerjakan TSM untuk sebuah pabrik tekstil di kawasan industri Karawang, Jawa Barat. Nama klien kami rahasiakan atas permintaan mereka, namun data teknis dan finansial yang kami bagikan adalah nyata.</p>

          <h2 id="latar" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Latar Belakang Masalah</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pabrik tekstil ini memiliki kapasitas produksi 500 ton kain jadi per bulan. Sebelum proyek TSM, pabrik menggantungkan 100% kebutuhan airnya pada PDAM kawasan industri dengan konsumsi rata-rata <strong>280 m³/hari</strong>.</p>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tantangan yang dihadapi:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Biaya air PDAM tinggi</strong> — Tarif kawasan industri mencapai Rp 18.500 per m³, menghasilkan tagihan bulanan Rp 155 juta.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kualitas tidak konsisten</strong> — Kadar TDS dan kesadahan PDAM bervariasi, mempengaruhi kualitas pewarnaan.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pembatasan pasokan</strong> — PDAM kawasan mulai memberlakukan kuota harian saat musim kemarau.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Beban limbah besar</strong> — Air limbah pewarnaan dengan warna dan COD tinggi membebani IPAL eksisting.</li>
          </ul>

          <div className="case-stats">
            <div className="cs-box"><div className="cs-num">280</div><div className="cs-lbl">m³/hari Konsumsi Awal</div></div>
            <div className="cs-box"><div className="cs-num">Rp 155 jt</div><div className="cs-lbl">Biaya Air Bulanan</div></div>
            <div className="cs-box"><div className="cs-num">500</div><div className="cs-lbl">Ton Kain/bulan</div></div>
          </div>

          <h2 id="solusi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Solusi yang Diterapkan TSM</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Setelah water audit selama 3 minggu, tim TSM merancang solusi terintegrasi yang menggabungkan pengolahan air baku alternatif dan daur ulang air limbah:</p>
          <ol className="ml-[1.5rem] my-[1.05rem] list-decimal">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sumur bor dalam</strong> dengan kapasitas 150 m³/hari sebagai sumber baku tambahan.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sistem RO Industri 200 m³/hari</strong> untuk mengolah air sumur menjadi air proses berkualitas tinggi.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pre-treatment lengkap</strong> — Multi-media filter, softener, cartridge filter 5 µm.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>MBR (Membrane Bioreactor) 120 m³/hari</strong> untuk mengolah air limbah pewarnaan.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>RO Reclaim 80 m³/hari</strong> untuk mendaur ulang permeate MBR menjadi air proses.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sistem SCADA terintegrasi</strong> untuk monitoring kualitas dan konsumsi real-time.</li>
          </ol>

          <div className="info-box bg-ice border border-border rounded-[10px] p-[1.2rem_1.5rem] my-[1.75rem]">
            <strong className="block text-[0.7rem] font-bold uppercase tracking-[0.1em] text-accent mb-[0.38rem]">🎯 Target Proyek</strong>
            Mengurangi konsumsi PDAM dari 280 m³/hari menjadi maksimal 100 m³/hari (pengurangan 64%) dalam waktu 6 bulan operasi penuh.
          </div>

          <h2 id="tantangan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Tantangan Implementasi</h2>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Zero downtime production</strong> — Instalasi harus dilakukan tanpa menghentikan lini produksi yang berjalan 24/7.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Karakter air sumur bervariasi</strong> — Kandungan besi dan mangan tinggi membutuhkan pre-treatment ekstra.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kompleksitas MBR</strong> — Kultur mikroba pada MBR membutuhkan waktu aklimatisasi 4–6 minggu.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kompatibilitas sistem lama</strong> — Integrasi dengan IPAL dan tangki eksisting memerlukan penyesuaian piping menyeluruh.</li>
          </ul>

          <h2 id="timeline" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Timeline Proyek</h2>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Bulan 1–2</strong> — Water audit, desain detail, dan procurement peralatan.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Bulan 3–4</strong> — Pengeboran sumur, fabrikasi skid RO, pekerjaan sipil.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Bulan 5</strong> — Instalasi peralatan dan piping, commissioning RO.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Bulan 6</strong> — Commissioning MBR, aklimatisasi mikroba.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Bulan 7–8</strong> — Optimasi parameter operasi, pelatihan operator.</li>
          </ul>

          <h2 id="hasil" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Hasil yang Dicapai</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Setelah 12 bulan operasi penuh, hasil yang dicapai melebihi target awal:</p>

          <div className="case-stats">
            <div className="cs-box"><div className="cs-num">70%</div><div className="cs-lbl">Pengurangan PDAM</div></div>
            <div className="cs-box"><div className="cs-num">85 m³</div><div className="cs-lbl">PDAM/hari</div></div>
            <div className="cs-box"><div className="cs-num">Rp 92 jt</div><div className="cs-lbl">Penghematan/bulan</div></div>
            <div className="cs-box"><div className="cs-num">24 bln</div><div className="cs-lbl">Payback Period</div></div>
          </div>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Konsumsi PDAM turun</strong> dari 280 menjadi 85 m³/hari (pengurangan 70%).</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Penghematan biaya</strong> Rp 92 juta per bulan dari tagihan PDAM.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kualitas air proses lebih konsisten</strong>, mengurangi reject rate pewarnaan sebesar 8%.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Beban IPAL berkurang</strong> karena sebagian besar limbah pewarnaan didaur ulang.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Payback period</strong> 24 bulan dari investasi awal Rp 2,2 miliar.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kemandirian pasokan</strong> — tidak lagi tergantung kuota PDAM saat musim kemarau.</li>
          </ul>

          <h2 id="pelajaran" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pelajaran dari Proyek Ini</h2>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Water audit sebelum desain</strong> sangat krusial — tanpa data nyata, desain akan bias asumsi.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kombinasi sumber dan recycle</strong> lebih ekonomis daripada hanya satu pendekatan.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Training operator</strong> menentukan performa jangka panjang sistem.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Monitoring otomatis</strong> mendeteksi penyimpangan lebih cepat dan mencegah kerusakan membran.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kemitraan jangka panjang</strong> dengan vendor terpercaya lebih penting daripada memilih harga terendah.</li>
          </ul>

          <blockquote className="border-l-4 border-accent p-[0.78rem_1.4rem] bg-ice rounded-r-md my-[1.5rem] italic text-muted">
            "Proyek ini membuktikan bahwa investasi pada sistem water treatment modern bukan hanya keputusan lingkungan — tetapi keputusan bisnis yang menghasilkan return jelas dalam waktu kurang dari 2 tahun."<br />
            <strong>— Plant Manager klien tekstil Karawang</strong>
          </blockquote>

          <h2 id="konsultasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pabrik Anda Mengalami Tantangan Serupa?</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Setiap pabrik punya karakter air baku, proses, dan tantangan ekonomi yang berbeda. TSM menawarkan water audit dan feasibility study untuk membantu Anda memetakan peluang penghematan dan solusi optimal.</p>
        </div>

        
        <div className="prose max-w-none text-text">

          <h2 id="faktor-industri-tekstil" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Faktor yang Menentukan Keberhasilan Water Treatment di Industri Tekstil</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Studi kasus pabrik tekstil Karawang ini memberikan pelajaran berharga yang dapat diterapkan pada berbagai jenis industri manufaktur yang menghadapi tantangan serupa. Berikut faktor kunci yang menentukan apakah proyek <strong>sistem RO industri</strong> akan memberikan ROI yang diharapkan:</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">1. Water Audit yang Komprehensif sebagai Fondasi</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kesalahan paling umum dalam proyek water treatment industri adalah bergerak langsung ke solusi tanpa pemahaman mendalam tentang masalah. Water audit TSM meliputi: analisis kualitas semua sumber air (PDAM, sumur, air hujan), pemetaan seluruh titik konsumsi dan profil konsumsi per shift, analisis kualitas dan volume air limbah per aliran, serta analisis opsi recycle internal yang sudah ada. Data ini adalah fondasi dari desain sistem yang benar-benar tepat sasaran, bukan overdesigned (memboroskan investasi) atau underdesigned (tidak menyelesaikan masalah).</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">2. Desain Sistem Terintegrasi, Bukan Parsial</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Solusi terbaik untuk industri tekstil Karawang bukan hanya "pasang RO untuk air baku" — melainkan sistem terintegrasi yang mencakup pengolahan air baku alternatif (sumur dalam), RO untuk kualitas, MBR untuk daur ulang limbah, dan RO Reclaim untuk memanfaatkan kembali air hasil olahan. Pendekatan terintegrasi ini memberikan penghematan yang jauh lebih besar daripada solusi parsial. Untuk memahami teknologi dasar yang digunakan, baca artikel kami tentang <Link to="/artikel/ro-prinsip-kerja">prinsip kerja sistem Reverse Osmosis</Link>.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">3. Manajemen Perubahan dan Training</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem canggih yang dioperasikan oleh tim yang tidak terlatih akan underperform secara dramatis. Dalam proyek ini, TSM menyediakan program training operator 2 minggu intensif, dilanjutkan pendampingan on-site selama 3 bulan pertama. Hasilnya: operator internal klien kini mampu menjalankan sistem SCADA, mendeteksi anomali, dan melakukan troubleshooting tingkat pertama secara mandiri — mengurangi kebutuhan kunjungan teknisi eksternal secara signifikan.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">4. Monitoring dan Optimasi Berkelanjutan</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem SCADA terintegrasi yang dipasang TSM memungkinkan monitoring konsumsi air real-time per lini produksi. Dalam 6 bulan pertama operasi, data SCADA berhasil mengidentifikasi satu lini produksi yang konsumsi airnya 30% lebih tinggi dari lini lain — ternyata karena kebocoran internal yang tidak terdeteksi sebelumnya. Tanpa monitoring real-time, kebocoran ini mungkin tidak terdeteksi selama bertahun-tahun. Lihat panduan <Link to="/artikel/monitoring-kualitas-air-ro">monitoring kualitas air RO secara mandiri</Link> untuk praktik terbaik yang bisa Anda terapkan.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">5. Kemitraan Jangka Panjang vs. Transaksi Sekali Beli</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Klien tekstil ini memilih kontrak pemeliharaan jangka panjang 5 tahun dengan TSM, bukan sekadar pembelian sistem. Hasilnya: availability sistem &gt;97%, biaya perawatan lebih terprediksi, dan ada mekanisme transfer pengetahuan yang terstruktur ke tim internal. Untuk industri dengan operasi 24/7, memiliki mitra teknisi yang <strong>memahami sistem spesifik Anda</strong> jauh lebih berharga daripada mencari vendor ad-hoc saat ada masalah. Lihat juga <Link href="layanan.html#maintenance">program perawatan berkala TSM</Link> untuk opsi kontrak yang tersedia.</p>

          <h2 id="faq-tekstil" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan tentang Water Treatment Industri Tekstil</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa lama payback period investasi water treatment di industri tekstil?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Berdasarkan studi kasus ini dan proyek-proyek serupa, payback period rata-rata berkisar <strong>18–30 bulan</strong> untuk investasi sistem RO + MBR terintegrasi di industri tekstil. Faktor penentu utama: selisih harga air PDAM vs. biaya produksi air internal, volume penghematan yang tercapai, dan apakah ada penghematan tambahan dari berkurangnya kerusakan produk akibat kualitas air yang tidak konsisten. Beberapa klien berhasil mencapai payback period di bawah 18 bulan ketika tarif air kawasan sangat tinggi.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah sistem seperti ini bisa diterapkan di industri selain tekstil?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Konsep yang sama — kombinasi sumber air alternatif, RO untuk kualitas, dan recycle limbah — dapat diterapkan di berbagai industri manufaktur: makanan dan minuman, kertas dan pulp, logam dan galvanis, kimia, dan lainnya. Tentu parameter teknis berbeda karena karakteristik air baku dan limbah berbeda. Untuk solusi spesifik per industri, lihat halaman <Link href="industri.html#manufaktur">water treatment untuk industri manufaktur</Link> di website TSM.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Bagaimana cara memulai proyek serupa untuk pabrik saya?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Langkah pertama adalah <strong>water audit</strong> — bukan langsung membeli sistem. TSM menyediakan water audit komprehensif yang mencakup pengambilan sampel, analisis laboratorium, pemetaan konsumsi, dan laporan rekomendasi. Dari hasil audit, tim engineering dapat menyusun proposal solusi yang tepat dengan justifikasi finansial yang jelas. Proses ini biasanya membutuhkan 2–4 minggu dan TSM menawarkannya secara gratis untuk klien potensial dengan skala tertentu.</p>

          <h2 id="kesimpulan-tekstil" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Kesimpulan &amp; Langkah Selanjutnya</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Studi kasus pabrik tekstil Karawang ini membuktikan bahwa investasi pada water treatment modern bukan hanya keputusan lingkungan — melainkan keputusan bisnis strategis dengan ROI yang jelas dan terukur. Pengurangan 70% konsumsi PDAM dan penghematan biaya air hingga Rp 80 juta per bulan adalah hasil nyata yang dapat direplikasi di pabrik-pabrik serupa di seluruh Indonesia.</p>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Apakah pabrik Anda menghadapi tantangan serupa — tagihan air yang terus meningkat, kualitas air yang tidak konsisten, atau tekanan regulasi lingkungan? TSM siap memulai dengan water audit gratis yang akan memberikan gambaran jelas tentang peluang dan solusi yang tersedia untuk fasilitas Anda.</p>
          <div style={{"marginTop":"1.5rem"}}>
            <Link className="btn" style={{"display":"inline-block","padding":".85rem 2rem","background":"var(--blue)","color":"#fff","borderRadius":"8px","fontWeight":"700","fontSize":".96rem"}} to="/kontak"><Factory className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Mulai Water Audit Gratis →</Link>
          </div>

        </div>
    

        <div className="share-row">
          <span>Bagikan:</span>
          <Link className="sh-btn" style={{"background":"#0a66c2"}} target="_blank" rel="noopener" to="/https://www.linkedin.com/sharing/share/offsite/?url=https%3A%2F%2Fpttsm.co.id%2Fartikel-studi-kasus-ro-tekstil">LinkedIn</Link>
          <Link className="sh-btn" style={{"background":"#1877f2"}} target="_blank" rel="noopener" to="/https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpttsm.co.id%2Fartikel/studi-kasus-ro-tekstil">Facebook</Link>
          <Link href="https://wa.me/?text=Studi%20Kasus%20TSM%3A%20RO%20Pabrik%20Tekstil" className="sh-btn" style={{"background":"#25d366"}} target="_blank" rel="noopener noreferrer">WhatsApp</Link>
        </div>

        <div style={{"marginTop":"3rem"}}>
          <h3 style={{"fontFamily":"'Barlow Condensed',sans-serif","fontSize":"1.4rem","fontWeight":"900","color":"var(--navy)","marginBottom":"1rem"}}>Artikel Terkait</h3>
          <div className="related-grid">
            <Link className="rel-card" to="/artikel/ro-prinsip-kerja"><div className="rel-img" style={{"background":"linear-gradient(135deg,#054a6e,#1e90d6)"}}><Droplet className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div><div className="rel-body"><p>Mengenal Teknologi Reverse Osmosis</p><span>28 Mar 2025 · 5 mnt</span></div></Link>
            <Link className="rel-card" to="/artikel/zld-zero-liquid"><div className="rel-img" style={{"background":"linear-gradient(135deg,#0a2240,#0d5fa8)"}}>♻️</div><div className="rel-body"><p>Zero Liquid Discharge (ZLD)</p><span>10 Feb 2025 · 5 mnt</span></div></Link>
          </div>
        </div>
      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#latar">Latar Belakang</Link></li>
            <li><Link href="#solusi">Solusi yang Diterapkan</Link></li>
            <li><Link href="#tantangan">Tantangan Implementasi</Link></li>
            <li><Link href="#timeline">Timeline Proyek</Link></li>
            <li><Link href="#hasil">Hasil yang Dicapai</Link></li>
            <li><Link href="#pelajaran">Pelajaran Proyek</Link></li>
            <li><Link href="#konsultasi">Konsultasi Gratis</Link></li>
          </ul>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Tentang Penulis</h4>
          <div className="author-box">
            <div className="author-av">TP</div>
            <div>
              <div className="author-av-name">Tim Proyek TSM</div>
              <div className="author-av-role">Project Delivery</div>
            </div>
          </div>
          <p style={{"fontSize":".84rem","color":"var(--muted)","lineHeight":"1.65"}}>Tim project management TSM dengan pengalaman mengelola ratusan proyek RO industri di seluruh Indonesia.</p>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem]" style={{"background":"linear-gradient(145deg,var(--navy),var(--blue))","border":"none"}}>
          <h4 style={{"color":"rgba(255,255,255,.45)","borderColor":"rgba(255,255,255,.15)"}}>Butuh Studi Serupa?</h4>
          <p style={{"fontSize":".86rem","lineHeight":"1.65","marginBottom":"1rem","opacity":".84","color":"#fff"}}>Dapatkan water audit dan feasibility study untuk pabrik Anda.</p>
          <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center","fontSize":".82rem"}} to="/kontak">📞 Konsultasi Sekarang</Link>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Artikel Lainnya</h4>
          <ul style={{"display":"flex","flexDirection":"column","gap":".65rem"}}>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/ro-prinsip-kerja">→ Mengenal Teknologi Reverse Osmosis</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/air-farmasi-ro-edi">→ Standar Air Farmasi RO + EDI</Link></li>
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
    <h2>Ingin Case Study untuk Pabrik Anda?</h2>
    <p>Tim kami siap melakukan water audit dan feasibility study untuk menghitung potensi penghematan di fasilitas Anda.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak">📞 Hubungi Kami</Link>
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/portofolio">📂 Lihat Portofolio Kami</Link>
    </div>
  </div>
</div>

    </>
  );
};

export default ArtikelStudiKasusRoTekstil;
