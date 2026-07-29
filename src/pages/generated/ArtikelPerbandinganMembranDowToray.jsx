import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


const ArtikelPerbandinganMembranDowToray = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/artikel">Artikel</Link> › Membran &amp; Komponen</div>
    <h1>Membran RO Dow Filmtec vs Toray:<br />Perbandingan untuk Aplikasi Indonesia</h1>
    <p>Panduan teknis memilih antara dua pemimpin industri membran RO — keunggulan masing-masing, kapan pilih yang mana, dan rekomendasi berdasarkan jenis air baku Indonesia.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">

      <article>
        <div className="art-hero-img">
          <picture>
            <source srcSet="images/produk-ro-industri.webp" type="image/webp" />
            <img src="images/produk-ro-industri.jpg" alt="Perbandingan membran RO Dow Filmtec dan Toray untuk industri Indonesia" />
          </picture>
        </div>

        <div className="art-meta-bar">
          <span className="am-tag">Membran</span>
          <span className="am-info">📅 2 Mei 2026</span>
          <span className="am-info">✍️ Tim TSM</span>
          <span className="am-info">⏱ 9 menit baca</span>
        </div>

        <div className="prose max-w-none text-text">

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Salah satu keputusan paling penting dalam mendesain sistem RO adalah <strong>pemilihan membran</strong>. Membran adalah komponen yang menentukan rejection rate, recovery, konsumsi energi, dan umur sistem. Di pasar global, dua nama mendominasi: <strong>Dow Filmtec</strong> (sekarang dimiliki DuPont) dan <strong>Toray Industries</strong> dari Jepang. Hampir semua sistem RO premium di Indonesia menggunakan salah satu dari dua brand ini.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pertanyaan yang sering diajukan klien TSM: "<em>Mana yang lebih baik — Dow Filmtec atau Toray?</em>" Jawaban jujur: <strong>tergantung aplikasi dan kondisi spesifik Anda</strong>. Keduanya tier-1 dengan track record puluhan tahun. Namun ada nuansa karakteristik yang membuat satu lebih unggul untuk aplikasi tertentu. Artikel ini membahas perbandingan teknis lengkap dan rekomendasi pemilihan berdasarkan jenis air baku Indonesia.</p>

          <h2 id="dua-pemimpin" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Dua Pemimpin Industri Membran RO</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Dow Filmtec dan Toray bersama-sama menguasai sekitar 70-80% pasar membran RO global. Sisa pasar diisi oleh Hydranautics (Nitto Group), Koch Membrane, dan beberapa pemain Asia seperti CSM Korea dan LG Chem. Namun untuk aplikasi tier-1 dengan persyaratan reliability tinggi, hampir selalu pilihan jatuh ke Dow Filmtec atau Toray.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Mengapa kedua brand ini begitu dominan? Beberapa alasan: <strong>(1) konsistensi kualitas manufaktur</strong> dengan QC yang sangat ketat, <strong>(2) garansi pabrikan yang dapat diandalkan</strong>, <strong>(3) data engineering yang sangat lengkap</strong> termasuk software simulasi (ROSA dari Dow, IMSDesign/TorayDS3 dari Toray), <strong>(4) availability spare parts dan replacement</strong> di seluruh dunia, dan <strong>(5) track record puluhan tahun</strong> di semua jenis aplikasi.</p>

          <h2 id="dow-filmtec" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Profil Dow Filmtec</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>Dow Filmtec</strong> didirikan pada 1977 oleh FilmTec Corporation, kemudian diakuisisi Dow Chemical pada 1985, dan sejak 2019 dimiliki <strong>DuPont</strong> setelah merger Dow-DuPont. Pabrik membran utama di Edina, Minnesota (USA). Filmtec adalah <strong>pelopor membran TFC (Thin Film Composite) polyamide</strong> yang sekarang menjadi standar industri.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Karakteristik Khas Dow Filmtec</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Keunggulan di SW (Sea Water) HRLE series</strong> — Dow SW30HRLE-440i adalah salah satu membran SWRO paling banyak digunakan di dunia, dengan rejection 99,8% dan recovery yang baik</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Stabilitas klorin sesaat lebih tinggi</strong> — Filmtec dapat menahan exposure klorin sampai 1.000 ppm-jam (cumulative) tanpa rejection drop signifikan; ini penting untuk situasi upset di pre-treatment</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Software ROSA</strong> — Software simulasi sistem yang sangat detail dan banyak digunakan engineer untuk desain. Output ROSA umumnya diterima oleh kontraktor dan auditor</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Variasi produk lengkap</strong> — Untuk hampir semua aplikasi (BW, SW, LP, NF, fouling-resistant, low-energy), Filmtec punya seri spesifik</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Ketersediaan spare</strong> — Stok di Singapura, Jepang, dan beberapa lokasi Indonesia memungkinkan delivery cepat</li>
          </ul>

          <h2 id="toray" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Profil Toray</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>Toray Industries</strong> adalah konglomerasi material Jepang yang membuat membran RO sejak 1972. Toray sangat dominan di pasar Jepang dan Korea, dan secara global terkenal untuk kualitas manufaktur dan inovasi material. Pabrik membran di Ehime, Jepang.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Karakteristik Khas Toray</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Keunggulan rejection di salinitas tinggi</strong> — Toray TM820 series sering memberikan rejection sedikit lebih tinggi (99,85% vs 99,8%) pada konsumsi energi setara untuk SWRO. Ini penting untuk aplikasi SWRO recovery tinggi atau air laut salinitas ekstrim.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Toleransi terhadap fouling organik lebih baik</strong> — Toray TM720D dan TML series menggunakan permukaan membran khusus yang lebih tahan fouling dari air dengan TOC tinggi (air sungai, air permukaan)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Konsistensi quality control</strong> — Manufaktur Jepang dengan QC yang sangat ketat. Variasi performa antar elemen Toray umumnya lebih kecil dari brand lain</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Software TorayDS3 dan IMSDesign</strong> — Tools simulasi yang detail untuk desain sistem</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Inovasi material baru</strong> — Toray sering memperkenalkan material baru lebih dulu (low-pressure series, biomimetic membrane research)</li>
          </ul>

          <h2 id="perbandingan-teknis" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Perbandingan Teknis Spesifik</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Untuk Sea Water RO (SWRO)</h3>
          <table className="w-full border-collapse my-[1.5rem] text-[0.9rem]">
            <tbody><tr><th>Parameter</th><th>Dow SW30HRLE-440i</th><th>Toray TM820H-440</th></tr>
            <tr><td>Rejection Garam</td><td>99,8%</td><td>99,85%</td></tr>
            <tr><td>Permeate Flow (test cond)</td><td>32 m³/hari</td><td>30 m³/hari</td></tr>
            <tr><td>Tekanan Operasi Optimal</td><td>55–70 bar</td><td>55–70 bar</td></tr>
            <tr><td>Stabilitas Klorin</td><td>Lebih baik (sampai 1.000 ppm-jam)</td><td>Standar (≤200 ppm-jam)</td></tr>
            <tr><td>Harga (referensi)</td><td>Standar pasar</td><td>Sedikit lebih mahal (5-10%)</td></tr>
          </tbody></table>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>Rekomendasi</strong>: Untuk SWRO standar dengan pre-treatment normal — Dow Filmtec memberikan value yang sangat baik. Untuk SWRO dengan air laut salinitas tinggi (&gt;38.000 ppm) atau yang membutuhkan rejection ekstra, Toray TM820 series sering lebih tepat.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Untuk Brackish Water RO (BWRO)</h3>
          <table className="w-full border-collapse my-[1.5rem] text-[0.9rem]">
            <tbody><tr><th>Parameter</th><th>Dow BW30-400</th><th>Toray TM720-400</th></tr>
            <tr><td>Rejection Garam</td><td>99,5%</td><td>99,7%</td></tr>
            <tr><td>Permeate Flow (test cond)</td><td>40 m³/hari</td><td>38 m³/hari</td></tr>
            <tr><td>Tekanan Operasi Optimal</td><td>12–15 bar</td><td>12–15 bar</td></tr>
            <tr><td>Toleransi Fouling Organik</td><td>Standar</td><td>Lebih baik (TML series)</td></tr>
            <tr><td>Ketersediaan Stok</td><td>Sangat luas</td><td>Luas</td></tr>
          </tbody></table>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>Rekomendasi</strong>: Dow BW30 adalah workhorse industri yang sangat reliable untuk BWRO standar. Toray TM720D atau TML series untuk air dengan TOC tinggi (air sungai, air dengan organik substansial).</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Untuk Low Pressure RO (LPRO)</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk aplikasi air ledeng PDAM atau sumur dangkal, ada beberapa pilihan:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Dow Filmtec LE-440</strong> — Low energy series, tekanan operasi sekitar 7–10 bar, hemat 20-30% energi vs BW standar</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Toray TM710</strong> — Setara dengan LE Filmtec dengan karakteristik yang mirip</li>
          </ul>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pada LPRO, perbedaan antara Dow dan Toray relatif kecil. Pilihan biasanya berdasarkan harga, ketersediaan, atau preferensi engineer.</p>

          <h2 id="aplikasi-spesifik" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Rekomendasi per Aplikasi Indonesia</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Air Laut Indonesia (SWRO)</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Air laut Indonesia umumnya bersih (vs Mediterania atau Timur Tengah), dengan salinitas standar 33-35.000 ppm. <strong>Dow SW30HRLE-440i atau Filmtec generasi terbaru</strong> adalah pilihan default — value, performance, ketersediaan stok, dan support local yang baik. Untuk lokasi spesifik dengan salinitas tinggi (Selat Sunda, Laut Banda), Toray TM820 dapat dipertimbangkan.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Air Sumur Pesisir Pulau Jawa</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Air sumur pesisir di Jakarta, Surabaya, Semarang, dan kota pesisir lainnya umumnya BWRO range (TDS 1.500-4.000 ppm) dengan hardness tinggi dan kadang besi-mangan. <strong>Dow BW30-400 atau BW30FR (fouling-resistant)</strong> sangat cocok. Ketersediaan stok membran ini sangat luas di Indonesia dengan harga kompetitif.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Air Sungai dan Air Permukaan Kalimantan/Sumatra</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Air sungai daerah gambut Kalimantan dan beberapa wilayah Sumatra memiliki TOC tinggi (organik tinggi, warna kekuningan). Untuk aplikasi ini, <strong>Toray TM720D atau Dow BW30FR</strong> dengan permukaan fouling-resistant adalah pilihan yang lebih baik. Plus pre-treatment yang lebih intensif (UF wajib, mungkin GAC atau ozon untuk pre-oksidasi organik).</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Air PDAM Jabodetabek</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Air PDAM kota besar Indonesia umumnya TWRO range (TDS 200-600 ppm) tapi hardness fluktuatif. Untuk aplikasi AMDK, hidroponik, atau dispenser komersial: <strong>Dow LE-440 atau Toray TM710</strong>, biasanya pilihan berdasarkan harga dan ketersediaan stok.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Air Farmasi (RO+EDI)</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk industri farmasi yang membutuhkan validasi BPOM, kedua brand sama-sama acceptable. Pilihan biasanya berdasarkan: <strong>(1) preferensi engineer farmasi yang sudah familiar dengan brand tertentu, (2) harmonisasi dengan parent company global yang punya standar pemilihan vendor, (3) ketersediaan replacement stock</strong>. Lihat <Link to="/industri/farmasi">solusi industri farmasi TSM</Link> untuk detail lebih lanjut.</p>

          <h2 id="ketersediaan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Ketersediaan dan Harga di Indonesia</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sebagai distributor resmi membran tier-1 di Indonesia, TSM dapat memberikan beberapa observasi:</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Dow Filmtec</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Ketersediaan stok</strong>: Sangat luas. BW30-400 dan SW30-440 hampir selalu ready stock di Bekasi/Jakarta untuk delivery 1-3 hari</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Harga</strong>: Kompetitif untuk volume umum. Harga sangat baik untuk pembelian quantity (10+ elemen)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Support teknis</strong>: Tim DuPont support tersedia untuk troubleshooting via TSM atau langsung</li>
          </ul>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Toray</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Ketersediaan stok</strong>: Cukup baik. TM820H dan TM720 bisa diorder dengan delivery 1-2 minggu untuk yang tidak ready stock</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Harga</strong>: Sedikit lebih premium 5-10% dibanding Dow untuk seri setara</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Support teknis</strong>: Tim Toray Asia Pacific terorganisir baik untuk support</li>
          </ul>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Penting: <strong>belilah selalu dari distributor resmi</strong> — TSM atau distributor lain yang ditunjuk pabrikan. Membran palsu atau remanufactured beredar di pasar dengan harga sangat murah, tapi rejection rate dapat hanya 80-90% dari membran asli, dan umur jauh lebih pendek. Verifikasi serial number di portal pabrikan adalah langkah wajib.</p>

          <h2 id="studi-kasus" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Studi Kasus Pemilihan Membran</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Kasus 1: SWRO 1.100 m³/hari Pelindo Jakarta</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM memilih <strong>Dow SW30HRLE-440i</strong> untuk proyek <Link to="/portofolio/pelindo">SWRO Pelindo</Link>. Alasan: (1) ketersediaan stok besar untuk volume membran yang dibutuhkan, (2) software ROSA yang familiar untuk tim engineering EPC, (3) klien Pelindo menerima Dow sebagai brand approved, (4) total cost optimal untuk skala besar ini.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Kasus 2: BWRO + UF 30 m³/jam PT Sosro</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM menggunakan <strong>Dow BW30-400</strong> untuk <Link to="/portofolio/sosro">sistem Sosro</Link>. Alasan: stabilitas reject rate yang penting untuk konsistensi rasa air produk, ketersediaan suplai jangka panjang untuk kontrak service multi-tahun, dan fit dengan air sumur dalam Jawa.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Kasus 3: Aplikasi Air Sungai Gambut Kalimantan</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk klien di Kalimantan dengan air baku sungai gambut TOC 8-12 mg/L, TSM merekomendasikan <strong>Toray TM720D</strong> dengan permukaan fouling-resistant. Hasilnya membran bertahan 4-5 tahun (vs 2-3 tahun jika pakai BW standar) dengan CIP frequency yang lebih rendah.</p>

          <h2 id="faq" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

        </div>

      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#dua-pemimpin">Dua Pemimpin Industri Membran RO</Link></li>
            <li><Link href="#dow-filmtec">Profil Dow Filmtec</Link></li>
            <li><Link href="#toray">Profil Toray</Link></li>
            <li><Link href="#perbandingan-teknis">Perbandingan Teknis</Link></li>
            <li><Link href="#aplikasi-spesifik">Rekomendasi per Aplikasi</Link></li>
            <li><Link href="#ketersediaan">Ketersediaan &amp; Harga di Indonesia</Link></li>
            <li><Link href="#studi-kasus">Studi Kasus Pemilihan</Link></li>
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
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/perbedaan-swro-bwro-twro">→ Perbedaan SWRO, BWRO, TWRO</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/5-kesalahan-perawatan-ro">→ 5 Kesalahan Perawatan RO</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/membran">→ Stok Membran RO</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/kimia">→ Kimia Water Treatment</Link></li>
            <li><Link style={{"fontSize":".84rem","fontWeight":"600","color":"var(--blue)","display":"block"}} to="/artikel">→ Lihat Semua Artikel</Link></li>
          </ul>
        </div>
      </aside>

    </div>
  </div>
</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Butuh Membran RO Asli untuk Sistem Anda?</h2>
    <p>Tim ahli kami siap membantu mulai dari analisis kebutuhan hingga instalasi.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak">📞 Hubungi Kami</Link>
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/produk/membran">🔍 Lihat Stok Membran</Link>
    </div>
  </div>
</div>

    </>
  );
};

export default ArtikelPerbandinganMembranDowToray;
