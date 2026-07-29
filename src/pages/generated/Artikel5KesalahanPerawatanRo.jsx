import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, Droplet, CheckCircle2, Shield } from 'lucide-react';


const Artikel5KesalahanPerawatanRo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden" style={{"background":"linear-gradient(135deg,#1a3a5c,#0d5fa8)"}}>
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/artikel">Artikel</Link> › Perawatan</div>
    <h1>5 Kesalahan Umum Perawatan Membran RO<br />yang Perlu Dihindari</h1>
    <p>Membran RO adalah komponen paling mahal sekaligus paling kritis. Kesalahan perawatan bisa memangkas usia pakainya dari 5 tahun menjadi kurang dari setahun.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">

      <article>
        <div className="art-hero-img">🔧</div>

        <div className="art-meta-bar">
          <span className="am-tag">Perawatan</span>
          <span className="am-info">📅 5 Maret 2025</span>
          <span className="am-info">✍️ Tim Teknis TSM</span>
          <span className="am-info">⏱ 4 menit baca</span>
          <span className="am-info">👁 650 views</span>
        </div>

        <div className="prose max-w-none text-text">
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Membran Reverse Osmosis adalah investasi yang tidak murah. Harga satu elemen membran RO industri berkualitas tinggi bisa mencapai Rp 2–8 juta, dan sebuah sistem RO besar bisa memiliki puluhan hingga ratusan elemen. Dengan perawatan yang benar, membran bisa bertahan 5–7 tahun. Namun dengan kesalahan perawatan, usia pakai bisa turun drastis menjadi hanya 1–2 tahun.</p>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Selama lebih dari 24 tahun beroperasi, tim teknisi PT Tirta Sumber Makmur telah mengidentifikasi lima kesalahan perawatan membran RO yang paling sering kami temui di lapangan:</p>
        </div>

        {/*  KESALAHAN 1  */}
        <div className="mk-card">
          <div className="mk-num">01</div>
          <h3 id="k1">Mengabaikan Pre-treatment atau Membiarkannya Terdegradasi</h3>
          <div className="mk-labels">
            <span className="mk-bad">⚠️ Fouling parah &amp; umur membran pendek</span>
            <span className="mk-good"><CheckCircle2 className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Solusi: Ganti filter secara rutin</span>
          </div>
          <p>Pre-treatment adalah "penjaga gawang" sistem RO. Filter sedimen yang sudah penuh namun tidak diganti akan mengizinkan partikel masuk ke membran dan menyebabkan <em>particulate fouling</em>. Media karbon aktif yang jenuh tidak akan menghilangkan klorin — dan klorin adalah racun bagi membran TFC polyamide, bisa merusaknya dalam hitungan jam jika terpapar dalam konsentrasi tinggi.</p>
          <div className="mk-tip"><strong>💡 Aturan Praktis:</strong> Ganti cartridge filter sedimen setiap 1–3 bulan (atau ketika pressure drop meningkat &gt;15 psi). Ganti media karbon aktif setiap 6–12 bulan tergantung kualitas air baku dan kadar klorin.</div>
        </div>

        {/*  KESALAHAN 2  */}
        <div className="mk-card">
          <div className="mk-num">02</div>
          <h3 id="k2">Tidak Melakukan Chemical Cleaning (CIP) Tepat Waktu</h3>
          <div className="mk-labels">
            <span className="mk-bad">⚠️ Scaling &amp; biofouling permanen</span>
            <span className="mk-good"><CheckCircle2 className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Solusi: Jadwalkan CIP berdasarkan data kinerja</span>
          </div>
          <p>Membran RO secara alami mengalami fouling — penumpukan mineral (scaling), koloid, dan biofilm di permukaannya. CIP (pencucian kimia) diperlukan untuk memulihkan performa membran. Banyak operator menunda CIP karena menghindari downtime, padahal menunggu terlalu lama membuat fouling bersifat irreversible dan membran harus diganti lebih awal.</p>
          <div className="mk-tip"><strong>💡 Kapan Harus CIP:</strong> Lakukan segera jika normalized permeate flow turun &gt;10–15%, normalized pressure drop naik &gt;15%, atau normalized salt rejection turun &gt;5%. Jangan tunggu penurunan menjadi lebih parah.</div>
        </div>

        {/*  KESALAHAN 3  */}
        <div className="mk-card">
          <div className="mk-num">03</div>
          <h3 id="k3">Shutdown Tanpa Prosedur Flushing yang Benar</h3>
          <div className="mk-labels">
            <span className="mk-bad">⚠️ Biofilm &amp; scaling saat shutdown</span>
            <span className="mk-good"><CheckCircle2 className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Solusi: Selalu flush sebelum mematikan sistem</span>
          </div>
          <p>Ketika sistem RO dimatikan, air berkonsentrasi tinggi (brine) terperangkap di dalam pressure vessel bersama membran. Jika dibiarkan, mineral bisa mengendap (scaling) dan bakteri bisa tumbuh membentuk biofilm. Ini terutama kritis untuk sistem yang sering start-stop atau dimatikan di akhir pekan dan hari libur.</p>
          <div className="mk-tip"><strong>💡 Prosedur Benar:</strong> Sebelum shutdown, lakukan low-pressure flush selama 5–15 menit untuk mendorong brine keluar. Untuk shutdown &gt;30 hari, gunakan biocide preservation solution dengan konsentrasi yang direkomendasikan produsen membran.</div>
        </div>

        {/*  KESALAHAN 4  */}
        <div className="mk-card">
          <div className="mk-num">04</div>
          <h3 id="k4">Dosis Antiscalant yang Salah atau Tidak Konsisten</h3>
          <div className="mk-labels">
            <span className="mk-bad">⚠️ Under-dosis: scaling &nbsp;|&nbsp; Over-dosis: biofouling</span>
            <span className="mk-good"><CheckCircle2 className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Solusi: Hitung dosis dari analisis air baku</span>
          </div>
          <p>Antiscalant harus didosiskan secara tepat — tidak kurang, tidak berlebih. Dosis terlalu rendah tidak cukup mencegah scaling mineral seperti CaCO₃ dan CaSO₄. Dosis berlebihan dapat menyebabkan biofouling karena antiscalant menjadi nutrisi bagi bakteri, atau meninggalkan deposit organik di permukaan membran yang sulit dibersihkan.</p>
          <div className="mk-tip"><strong>💡 Praktik Terbaik:</strong> Lakukan analisis kimia air baku minimal dua kali setahun. Gunakan software desain RO (ROSA, IMSDesign, WaterPro) untuk menghitung dosis antiscalant yang tepat berdasarkan komposisi ion air dan recovery rate sistem Anda.</div>
        </div>

        {/*  KESALAHAN 5  */}
        <div className="mk-card">
          <div className="mk-num">05</div>
          <h3 id="k5">Tidak Memantau dan Mendokumentasikan Parameter Operasi</h3>
          <div className="mk-labels">
            <span className="mk-bad">⚠️ Masalah terlambat dideteksi, kerusakan parah</span>
            <span className="mk-good"><CheckCircle2 className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Solusi: Log harian + normalisasi data mingguan</span>
          </div>
          <p>Banyak operator hanya memeriksa sistem jika ada masalah yang jelas. Padahal penurunan performa membran terjadi secara gradual dan baru terasa signifikan setelah kerusakan sudah cukup parah. Dengan memantau parameter kunci secara harian dan melakukan normalisasi data, degradasi dapat dideteksi jauh lebih awal dan ditangani sebelum menjadi mahal.</p>
          <div className="mk-tip"><strong>💡 Parameter Wajib Dipantau Harian:</strong> Feed pressure, permeate flow, reject flow, feed TDS, permeate TDS, temperature, pH feed. Lakukan normalisasi mingguan dan investigasi segera jika ada parameter yang menyimpang &gt;5% dari baseline awal.</div>
        </div>

        <div className="prose max-w-none text-text">
          <div className="info-box bg-ice border border-border rounded-[10px] p-[1.2rem_1.5rem] my-[1.75rem]">
            <strong className="block text-[0.7rem] font-bold uppercase tracking-[0.1em] text-accent mb-[0.38rem]"><Shield className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Program Preventive Maintenance TSM</strong>
            PT Tirta Sumber Makmur menawarkan program kontrak perawatan tahunan yang mencakup kunjungan teknisi berkala, analisis air, CIP terjadwal, dan prioritas stok suku cadang. Hubungi kami untuk informasi lebih lanjut.
          </div>

          <h2 id="kesimpulan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Kesimpulan</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Lima kesalahan di atas mungkin terkesan sederhana, namun dampaknya terhadap biaya operasional dan umur sistem bisa sangat besar. Membran yang rusak sebelum waktunya, produksi yang turun, dan downtime tak terduga — semua ini bisa dihindari dengan disiplin dalam perawatan preventif.</p>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Jika Anda tidak yakin dengan kondisi membran atau prosedur perawatan sistem RO saat ini, tim teknisi PT Tirta Sumber Makmur siap melakukan audit sistem dan memberikan rekomendasi spesifik tanpa biaya.</p>
        </div>

        
        <div className="prose max-w-none text-text">

          <h2 id="faktor-perawatan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Faktor yang Menentukan Keberhasilan Perawatan Sistem RO</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Di luar lima kesalahan teknis yang sudah dibahas, ada faktor-faktor organisasional dan sistemik yang sama pentingnya dalam menentukan apakah program <strong>pemeliharaan sistem RO</strong> berjalan efektif atau tidak. Berikut yang paling sering kami temui dalam audit sistem di berbagai klien, mulai dari pabrik di Bekasi hingga hotel di Jakarta:</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">1. Kompetensi dan Komitmen Operator</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem RO yang canggih sekalipun akan gagal jika operatornya tidak terlatih atau tidak disiplin. Investasi dalam <strong>pelatihan operator water treatment</strong> adalah salah satu return tertinggi dalam pengelolaan sistem RO. Operator yang kompeten mengetahui tanda-tanda awal masalah, tahu cara membaca tren data, dan mampu mengambil tindakan preventif sebelum masalah membesar. TSM menyediakan program pelatihan operator sebagai bagian dari paket instalasi maupun secara terpisah.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">2. Sistem Pencatatan dan Trending Data</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Banyak operator mencatat data harian, namun tidak melakukan <em>trending</em> — yaitu analisis perubahan parameter dari waktu ke waktu. Penurunan performa membran 2% per bulan tidak terasa signifikan hari per hari, namun dalam 6 bulan sudah menjadi 12% — cukup untuk memicu alarm dan tindakan. Spreadsheet sederhana atau sistem SCADA dasar dapat membantu identifikasi tren ini. Untuk panduan monitoring mandiri, baca juga artikel kami tentang <Link to="/artikel/monitoring-kualitas-air-ro">cara monitoring kualitas air RO secara mandiri</Link>.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">3. Ketersediaan Anggaran Perawatan</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kesalahan umum dalam manajemen aset: menganggarkan perawatan hanya untuk tahun pertama, kemudian memotong anggaran karena "sistem berjalan baik". Padahal justru tahun ke-2 hingga ke-5 adalah periode paling kritis untuk perawatan preventif. Aturan praktis: anggarkan 3–5% dari nilai investasi sistem per tahun sebagai biaya perawatan preventif. Ini jauh lebih murah daripada penggantian membran prematur atau downtime produksi.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">4. Kontrak Perawatan dengan Vendor Terpercaya</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk fasilitas yang tidak memiliki tim maintenance internal yang khusus menangani water treatment, <strong>kontrak perawatan tahunan</strong> dengan vendor terpercaya adalah solusi optimal. TSM menawarkan paket <Link href="layanan.html#maintenance">pemeliharaan sistem RO berkala</Link> yang mencakup kunjungan teknisi terjadwal, analisis air laboratorium, CIP terjadwal, dan prioritas stok suku cadang — memberikan ketenangan pikiran bagi manajemen fasilitas.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">5. Protokol Darurat yang Jelas</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Apa yang harus dilakukan operator jika TDS output tiba-tiba melonjak 3x lipat di tengah malam? Jika pompa utama mati mendadak? Protokol darurat tertulis yang jelas, nomor darurat vendor, dan stok suku cadang minimum di lokasi adalah investasi kesiapan yang nilainya jauh melebihi biayanya.</p>

          <h2 id="faq-perawatan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan tentang Perawatan Membran RO</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa biaya penggantian membran RO industri di Indonesia?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Harga elemen membran RO industri standar (8 inci, 400 sqft) dari brand terkemuka (Dow Filmtec, Toray, Hydranautics) berkisar <strong>Rp 2–8 juta per elemen</strong> tergantung tipe dan spesifikasi. Sistem RO 50 m³/hari umumnya menggunakan 6–12 elemen membran. Biaya penggantian membran lengkap berkisar Rp 12–96 juta untuk sistem tersebut, plus biaya jasa teknisi. Dengan perawatan yang benar, pengeluaran ini terjadi setiap 5–7 tahun — bukan setiap 1–2 tahun seperti yang kami sering temui akibat perawatan yang buruk.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Seberapa sering harus melakukan CIP (Chemical Cleaning In-Place)?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Frekuensi CIP tidak ditentukan oleh kalender, tetapi oleh <strong>data kinerja membran</strong>. Lakukan CIP segera ketika: normalized permeate flow turun &gt;10–15%, normalized pressure drop naik &gt;15%, atau normalized salt rejection turun &gt;5%. Dalam kondisi air baku yang baik dengan pre-treatment memadai, CIP biasanya diperlukan 2–4 kali per tahun. Pada air baku bermasalah, bisa hingga 1 kali per bulan.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa perbedaan antara acid cleaning dan alkaline cleaning untuk membran RO?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>Acid cleaning</strong> (pH 2–4, menggunakan citric acid atau HCl encer) efektif untuk membersihkan scaling mineral seperti kalsium karbonat, sulfat, dan barium sulfat. <strong>Alkaline cleaning</strong> (pH 11–12, menggunakan NaOH atau deterjen khusus) efektif untuk biofouling dan fouling organik. Untuk kondisi mixed fouling, protokol dual-step (alkaline dahulu, lalu acid) umumnya paling efektif. Pemilihan bahan kimia CIP yang salah bisa merusak membran.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Kapan harus memanggil teknisi TSM versus menangani sendiri?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Operator terlatih dapat menangani penggantian cartridge filter, pembacaan parameter, flushing rutin, dan troubleshooting dasar. Namun panggil teknisi profesional untuk: CIP (terutama menggunakan asam atau basa kuat), investigasi kebocoran integritas membran, penggantian membran, perbaikan/kalibrasi sensor dan kontrol, serta trouble shooting masalah sistemik yang tidak dapat diidentifikasi. <Link href="layanan.html#darurat">Layanan darurat TSM</Link> tersedia 24/7 untuk klien kontrak kami.</p>

          <h2 id="kesimpulan-perawatan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Kesimpulan &amp; Langkah Selanjutnya</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Perawatan membran RO yang efektif bukan tentang reaktif — menunggu kerusakan sebelum bertindak. Melainkan tentang membangun sistem preventif yang terintegrasi: operator terlatih, pencatatan data sistematis, anggaran yang memadai, dan kemitraan dengan vendor terpercaya. Dengan pendekatan ini, sistem RO Anda akan memberikan performa optimal selama 15–20 tahun dengan biaya kepemilikan total yang jauh lebih rendah.</p>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tim TSM siap melakukan audit sistem RO Anda — baik yang baru diinstalasi maupun yang sudah beroperasi bertahun-tahun — dan memberikan rekomendasi perbaikan yang spesifik dan terukur, tanpa biaya untuk konsultasi awal.</p>
          <div style={{"marginTop":"1.5rem"}}>
            <Link className="btn" style={{"display":"inline-block","padding":".85rem 2rem","background":"var(--blue)","color":"#fff","borderRadius":"8px","fontWeight":"700","fontSize":".96rem"}} to="/kontak">🔧 Audit Sistem RO Gratis →</Link>
          </div>

        </div>
    

        <div className="share-row">
          <span>Bagikan:</span>
          <Link className="sh-btn" style={{"background":"#0a66c2"}} target="_blank" rel="noopener" to="/https://www.linkedin.com/sharing/share/offsite/?url=https%3A%2F%2Fpttsm.co.id%2Fartikel-5-kesalahan-perawatan-ro">LinkedIn</Link>
          <Link className="sh-btn" style={{"background":"#1877f2"}} target="_blank" rel="noopener" to="/https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpttsm.co.id%2Fartikel/5-kesalahan-perawatan-ro">Facebook</Link>
          <Link href="https://wa.me/?text=5+Kesalahan+Perawatan+Membran+RO" className="sh-btn" style={{"background":"#25d366"}} target="_blank" rel="noopener noreferrer">WhatsApp</Link>
        </div>

        <div style={{"marginTop":"3rem"}}>
          <h3 style={{"fontFamily":"'Barlow Condensed',sans-serif","fontSize":"1.4rem","fontWeight":"900","color":"var(--navy)","marginBottom":"1rem"}}>Artikel Terkait</h3>
          <div className="related-grid">
            <Link className="rel-card" to="/artikel/ro-prinsip-kerja"><div className="rel-img" style={{"background":"linear-gradient(135deg,#054a6e,#1e90d6)"}}><Droplet className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div><div className="rel-body"><p>Mengenal Teknologi Reverse Osmosis: Prinsip Kerja</p><span>28 Mar 2025</span></div></Link>
            <Link className="rel-card" to="/artikel/monitoring-kualitas-air-ro"><div className="rel-img" style={{"background":"linear-gradient(135deg,#0a4060,#1e90d6)"}}>📊</div><div className="rel-body"><p>Cara Monitoring Kualitas Air Output RO Mandiri</p><span>12 Jan 2025</span></div></Link>
          </div>
        </div>
      </article>

      {/*  SIDEBAR  */}
      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem]">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#k1">1. Pre-treatment Terdegradasi</Link></li>
            <li><Link href="#k2">2. Tidak Melakukan CIP</Link></li>
            <li><Link href="#k3">3. Shutdown Tanpa Flushing</Link></li>
            <li><Link href="#k4">4. Dosis Antiscalant Salah</Link></li>
            <li><Link href="#k5">5. Tidak Memantau Parameter</Link></li>
            <li><Link href="#kesimpulan">Kesimpulan</Link></li>
          </ul>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem]" style={{"background":"linear-gradient(145deg,var(--navy),var(--blue))","border":"none"}}>
          <h4 style={{"color":"rgba(255,255,255,.45)","borderColor":"rgba(255,255,255,.15)"}}>Program Perawatan</h4>
          <p style={{"fontSize":".86rem","lineHeight":"1.65","marginBottom":"1rem","opacity":".84","color":"#fff"}}>Kontrak perawatan tahunan TSM mencakup teknisi terjadwal, CIP, analisis air, dan stok suku cadang prioritas.</p>
          <Link href="layanan.html#maintenance" className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center","fontSize":".82rem"}}><ClipboardList className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Lihat Program</Link>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem]">
          <h4>Artikel Lainnya</h4>
          <ul style={{"display":"flex","flexDirection":"column","gap":".65rem"}}>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/ro-prinsip-kerja">→ Prinsip Kerja Reverse Osmosis</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/desalinasi-solusi-pulau">→ Desalinasi Air Laut</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/studi-kasus-ro-tekstil">→ Studi Kasus Pabrik Tekstil</Link></li>
            <li><Link style={{"fontSize":".84rem","fontWeight":"600","color":"var(--blue)","display":"block"}} to="/artikel">→ Lihat Semua Artikel</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Ingin Audit Kondisi Membran RO Anda?</h2>
    <p>Tim teknisi TSM siap melakukan pemeriksaan menyeluruh dan memberikan rekomendasi perawatan — gratis.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak">📞 Minta Audit Gratis</Link>
      <Link href="layanan.html#maintenance" className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white"><Shield className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Program Perawatan</Link>
    </div>
  </div>
</div>

    </>
  );
};

export default Artikel5KesalahanPerawatanRo;
