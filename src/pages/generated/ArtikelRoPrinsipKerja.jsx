import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Droplet, Waves } from 'lucide-react';


const ArtikelRoPrinsipKerja = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.art-layout{display:grid;grid-template-columns:1fr 290px;gap:3rem;align-items:start}
.art-sticky{position:sticky;top:88px}
.art-hero-img{height:320px;background:linear-gradient(135deg,#054a6e,#1e90d6);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:8rem;margin-bottom:2rem}
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
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/artikel">Artikel</Link> › Teknologi</div>
    <h1>Mengenal Teknologi Reverse Osmosis:<br />Prinsip Kerja dan Keunggulannya</h1>
    <p>Panduan lengkap memahami cara kerja sistem RO, komponen utamanya, dan mengapa teknologi ini menjadi standar emas pengolahan air industri global.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">

      {/*  ARTICLE  */}
      <article>
        <div className="art-hero-img"><Droplet className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div>

        <div className="art-meta-bar">
          <span className="am-tag">Teknologi</span>
          <span className="am-info">📅 28 Maret 2025</span>
          <span className="am-info">✍️ Tim TSM</span>
          <span className="am-info">⏱ 5 menit baca</span>
          <span className="am-info">👁 1.247 views</span>
        </div>

        <div className="prose max-w-none text-text">

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Reverse Osmosis (RO) adalah teknologi penyaringan air paling canggih yang tersedia secara komersial saat ini. Dalam dua dekade terakhir, teknologi ini telah merevolusi cara industri, kota, dan bahkan rumah tangga mendapatkan air berkualitas tinggi — termasuk di Indonesia.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sebagai perusahaan yang telah berkecimpung di bidang ini sejak 2002, PT Tirta Sumber Makmur ingin membagikan pemahaman mendalam tentang bagaimana teknologi RO bekerja, dan mengapa ia menjadi pilihan utama untuk berbagai kebutuhan pengolahan air.</p>

          <h2 id="apa-itu-ro" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Apa Itu Reverse Osmosis?</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Osmosis adalah proses alami di mana air bergerak dari larutan dengan konsentrasi zat terlarut rendah ke larutan berkonsentrasi lebih tinggi melalui membran semi-permeabel — tanpa bantuan energi eksternal.</p>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>Reverse Osmosis</strong> adalah kebalikannya. Dengan menerapkan tekanan yang melebihi tekanan osmotik alami, kita memaksa air mengalir dari larutan berkonsentrasi tinggi (air yang terkontaminasi) melewati membran menuju sisi yang lebih bersih — menghasilkan air yang sangat murni.</p>

          <div className="info-box bg-ice border border-border rounded-[10px] p-[1.2rem_1.5rem] my-[1.75rem]">
            <strong className="block text-[0.7rem] font-bold uppercase tracking-[0.1em] text-accent mb-[0.38rem]">💡 Fakta Kunci</strong>
            Membran RO memiliki pori-pori sekitar 0,0001 mikron — jauh lebih kecil dari bakteri (0,2–2 µm) dan virus (0,02–0,4 µm). Ini memungkinkan RO menyaring hampir semua kontaminan dengan efisiensi 95–99,5%.
          </div>

          <h2 id="komponen" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Komponen Utama Sistem RO</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sebuah sistem RO terdiri dari beberapa komponen kritis yang bekerja secara terintegrasi:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pre-treatment</strong> — Filter sedimen dan filter karbon aktif untuk menghilangkan partikel kasar dan klorin yang merusak membran.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>High-pressure pump</strong> — Jantung sistem RO, menghasilkan tekanan 5–70 bar untuk mendorong air melewati membran.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Membran RO</strong> — Elemen penyaring utama berbentuk spiral dari material Thin Film Composite (TFC) polyamide yang menolak 95–99% kontaminan.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pressure vessel</strong> — Tabung bertekanan yang menampung satu atau lebih elemen membran.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Post-treatment</strong> — Penyesuaian pH, remineralisasi, dan sterilisasi UV sesuai kebutuhan akhir pengguna.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sistem kontrol</strong> — Panel otomasi, sensor TDS, flow meter, dan pressure gauge untuk pemantauan real-time.</li>
          </ul>

          <h2 id="cara-kerja" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Cara Kerja Sistem RO Step-by-Step</h2>
          <ol className="ml-[1.5rem] my-[1.05rem] list-decimal">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Air baku masuk</strong> → filter sedimen 5 µm menghilangkan partikel kasar, pasir, dan lumpur.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Filter karbon aktif</strong> → menghilangkan klorin, kloramina, dan senyawa organik yang dapat merusak membran TFC.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Injeksi antiscalant</strong> → bahan kimia khusus ditambahkan untuk mencegah pengendapan mineral (scaling) pada membran.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pompa bertekanan tinggi</strong> → mendorong air dengan tekanan 10–70 bar melewati modul membran RO.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Membran RO</strong> → air bersih (permeate) melewati membran; kontaminan terkonsentrasi di aliran reject/brine.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Post-treatment</strong> → penyesuaian pH, remineralisasi bila diperlukan, sterilisasi UV final.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Air produk</strong> → disimpan di tangki produk dan siap digunakan.</li>
          </ol>

          <h2 id="keunggulan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Keunggulan Teknologi RO</h2>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Efisiensi penyaringan sangat tinggi</strong> — Menolak 95–99,5% TDS termasuk garam, logam berat, nitrat, dan kontaminan organik.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Menghilangkan mikroorganisme</strong> — Pori membran yang sangat kecil menghalangi bakteri, virus, protozoa, dan spora secara efektif.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Tanpa bahan kimia berlebihan</strong> — Proses fisika murni; tidak membutuhkan bahan kimia dalam jumlah besar seperti pada koagulasi-flokulasi konvensional.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Output konsisten &amp; stabil</strong> — Selama membran dalam kondisi baik dan parameter operasi terjaga, kualitas air output sangat konsisten dan dapat diprediksi.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Fleksibilitas kapasitas</strong> — Dapat dirancang dari skala 100 liter/hari hingga jutaan liter/hari dengan menambah modul membran.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Footprint kecil</strong> — Sistem RO modern sangat kompak dibandingkan teknologi pengolahan konvensional dengan kapasitas setara.</li>
          </ul>

          <h2 id="aplikasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Aplikasi Sistem RO di Indonesia</h2>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Industri manufaktur</strong> — Boiler feed water, cooling water make-up, dan process water yang membutuhkan kemurnian tinggi.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Industri farmasi &amp; kosmetik</strong> — Produksi Purified Water (PW) dan Water for Injection (WFI) sesuai standar USP/Ph.Eur.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pembangkit listrik</strong> — Boiler makeup water dengan kemurnian sangat tinggi untuk mencegah kerak dan korosi.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Hotel dan resort</strong> — Air minum, laundry, dan dapur dengan kualitas terjamin.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kepulauan dan daerah terpencil</strong> — Pengolahan air payau atau laut menjadi air tawar layak konsumsi.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Industri elektronik &amp; semikonduktor</strong> — Ultra-pure water untuk proses manufaktur chip dan komponen elektronik sensitif.</li>
          </ul>

          <h2 id="pertimbangan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Hal yang Perlu Dipertimbangkan</h2>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Recovery rate</strong> — Sistem RO tipikal memiliki recovery 50–80%; sisa 20–50% menjadi brine yang harus dikelola.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kualitas air baku</strong> — Semakin buruk kualitas air baku, semakin intensif pre-treatment yang dibutuhkan dan semakin cepat membran fouling.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Perawatan rutin</strong> — Membran perlu CIP berkala dan diganti setiap 3–5 tahun tergantung kondisi operasi.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Konsumsi energi</strong> — Pompa bertekanan tinggi adalah konsumen energi utama. Sistem modern dilengkapi Energy Recovery Device (ERD) untuk menghemat energi hingga 60%.</li>
          </ul>

          <blockquote className="border-l-4 border-accent p-[0.78rem_1.4rem] bg-ice rounded-r-md my-[1.5rem] italic text-muted">
            "Teknologi RO yang dirancang dan dioperasikan dengan benar adalah investasi jangka panjang yang akan menghemat biaya operasional secara signifikan dibandingkan membeli air dari sumber eksternal."<br />
            <strong>— Tim Engineering PT Tirta Sumber Makmur</strong>
          </blockquote>

          <h2 id="konsultasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Butuh Sistem RO untuk Bisnis Anda?</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">PT Tirta Sumber Makmur siap membantu Anda dari tahap konsultasi awal, analisis kualitas air baku, desain sistem, hingga instalasi dan commissioning. Dengan pengalaman lebih dari 24 tahun, kami memahami kebutuhan unik setiap industri.</p>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Hubungi tim kami untuk mendapatkan analisis kebutuhan dan estimasi biaya secara <strong>gratis tanpa komitmen</strong>.</p>
        </div>{/*  /prose  */}

        
        <div className="prose max-w-none text-text">

          <h2 id="faktor-ro" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Faktor yang Perlu Dipertimbangkan Sebelum Memilih Sistem RO</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Memilih sistem <strong>reverse osmosis untuk pabrik atau fasilitas komersial</strong> bukan keputusan yang bisa dilakukan sembarangan. Setiap instalasi memiliki karakteristik unik yang menentukan desain sistem optimal. Berikut faktor krusial yang perlu dievaluasi secara menyeluruh:</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">1. Analisis Kualitas Air Baku</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ini adalah langkah pertama yang tidak bisa dilewati. Parameter yang harus dianalisis meliputi TDS, pH, kesadahan (hardness), SDI (Silt Density Index), kandungan besi dan mangan, kadar klorin sisa, serta kontaminan spesifik untuk industri tertentu (misalnya, kadar silika untuk boiler feed water, atau endotoksin untuk aplikasi farmasi). Tanpa data ini, desain pre-treatment dan pemilihan membran akan berdasarkan asumsi yang bisa sangat merugikan di kemudian hari.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">2. Kapasitas dan Recovery Rate</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tentukan kebutuhan air harian dengan margin pertumbuhan 20–30% untuk antisipasi ekspansi. Recovery rate yang lebih tinggi memang mengurangi pembuangan air (brine), namun meningkatkan risiko scaling pada membran. Untuk <strong>sistem RO industri di Bekasi</strong> dan kota-kota industri Jawa, di mana air tanah umumnya memiliki kesadahan sedang-tinggi, recovery rate 60–75% sering menjadi titik keseimbangan yang optimal.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">3. Konsumsi Energi dan Biaya Operasional</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pompa bertekanan tinggi adalah konsumen energi terbesar dalam sistem RO. Untuk instalasi di atas 50 m³/hari, investasi pada <strong>Variable Frequency Drive (VFD)</strong> dan <strong>Energy Recovery Device (ERD)</strong> hampir selalu terbayar dalam 1–2 tahun. Sistem RO modern dengan ERD bisa menghemat konsumsi energi hingga 40–60% dibandingkan sistem konvensional.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">4. Ketersediaan Suku Cadang dan Dukungan Teknis Lokal</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Memilih vendor dengan jaringan layanan purna jual di Indonesia sangat penting, terutama untuk sistem kritis 24/7. Keterlambatan pengiriman membran atau komponen dari luar negeri bisa menghentikan produksi berhari-hari. PT Tirta Sumber Makmur, berbasis di Bekasi, menjaga stok suku cadang lokal dan menyediakan <Link href="layanan.html#darurat">layanan teknisi responsif dalam 24 jam</Link> di area Jabodetabek dan sekitarnya.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">5. Integrasi dengan Sistem yang Ada</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem RO baru harus dapat terintegrasi dengan sistem distribusi air, pengelolaan brine, dan sistem kontrol (SCADA/PLC) yang sudah ada. Perencanaan integrasi sejak awal akan menghindarkan biaya modifikasi besar setelah instalasi.</p>

          <div className="info-box bg-ice border border-border rounded-[10px] p-[1.2rem_1.5rem] my-[1.75rem]">
            <strong className="block text-[0.7rem] font-bold uppercase tracking-[0.1em] text-accent mb-[0.38rem]">🔗 Langkah Selanjutnya:</strong>
            Pelajari lebih lanjut tentang <Link to="/produk/ro-industri">sistem RO industri skala besar dari TSM</Link> dengan kapasitas 1–500 m³/hari, atau gunakan <Link to="/kalkulator">kalkulator kebutuhan air</Link> kami untuk estimasi awal kapasitas sistem yang sesuai.
          </div>

          <h2 id="faq-ro" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan tentang Teknologi RO</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa lama sistem RO industri dapat beroperasi?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem RO yang dirancang dengan baik dan dirawat dengan disiplin dapat beroperasi <strong>15–20 tahun</strong> atau lebih. Komponen yang umum diganti adalah membran (3–7 tahun), pompa (8–12 tahun), dan sistem kontrol (10–15 tahun). Biaya total kepemilikan (TCO) jangka panjang dari RO jauh lebih rendah dibandingkan membeli air dari sumber eksternal secara terus-menerus. Untuk panduan perawatan, baca artikel kami tentang <Link to="/artikel/5-kesalahan-perawatan-ro">5 kesalahan umum perawatan membran RO</Link>.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah RO menghilangkan mineral esensial dari air?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ya, membran RO memang menghilangkan hampir semua mineral terlarut termasuk kalsium dan magnesium. Untuk aplikasi air minum langsung, sistem post-treatment <strong>remineralisasi</strong> (menambahkan kembali mineral esensial dalam kadar yang tepat) sangat direkomendasikan. Untuk aplikasi industri seperti boiler feed water, justru kandungan mineral minimal inilah yang diinginkan.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa perbedaan antara RO air tawar dan RO air laut (SWRO)?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Perbedaan utama ada pada tekanan operasi dan spesifikasi membran. RO air tawar/payau beroperasi pada 5–20 bar, sementara SWRO membutuhkan 55–80 bar. Membran SWRO dirancang khusus untuk menolak salinitas tinggi (~35.000 ppm NaCl). Biaya investasi dan operasional SWRO lebih tinggi, namun membuka akses air bagi wilayah yang tidak memiliki sumber air tawar lain.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Bagaimana cara mendapatkan penawaran sistem RO yang tepat untuk fasilitas saya di Indonesia?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Langkah awal adalah <strong>water audit</strong> — pengambilan sampel air baku dan analisis laboratorium. Setelah data tersedia, tim engineering dapat menyusun spesifikasi teknis dan estimasi biaya yang akurat. TSM menyediakan water audit dan konsultasi awal secara gratis untuk klien potensial di seluruh Indonesia, termasuk wilayah <Link href="industri.html#manufaktur">industri manufaktur</Link> di Bekasi, Karawang, dan Cikarang.</p>

          <h2 id="kesimpulan-ro" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Kesimpulan &amp; Langkah Selanjutnya</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Teknologi Reverse Osmosis bukan hanya tentang menyaring air — ini tentang membangun infrastruktur air yang andal, efisien, dan skalabel untuk operasi bisnis jangka panjang. Dari pabrik manufaktur hingga hotel berbintang, dari laboratorium farmasi hingga kapal laut, RO telah membuktikan dirinya sebagai solusi terdepan.</p>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">PT Tirta Sumber Makmur, dengan pengalaman lebih dari 24 tahun dan ratusan instalasi di seluruh Indonesia, siap menjadi mitra teknologi air Anda. Mulai dari konsultasi awal hingga pemeliharaan jangka panjang, kami hadir di setiap langkah.</p>
          <div style={{"marginTop":"1.5rem"}}>
            <Link className="btn" style={{"display":"inline-block","padding":".85rem 2rem","background":"var(--blue)","color":"#fff","borderRadius":"8px","fontWeight":"700","fontSize":".96rem"}} to="/kontak">📞 Konsultasi Gratis Sekarang →</Link>
          </div>

        </div>
    

        <div className="share-row">
          <span>Bagikan:</span>
          <Link className="sh-btn" style={{"background":"#0a66c2"}} target="_blank" rel="noopener" to="/https://www.linkedin.com/sharing/share/offsite/?url=https%3A%2F%2Fpttsm.co.id%2Fartikel-ro-prinsip-kerja">LinkedIn</Link>
          <Link className="sh-btn" style={{"background":"#1877f2"}} target="_blank" rel="noopener" to="/https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpttsm.co.id%2Fartikel/ro-prinsip-kerja">Facebook</Link>
          <Link href="https://wa.me/?text=Artikel%20TSM%3A%20Mengenal%20Teknologi%20RO" className="sh-btn" style={{"background":"#25d366"}} target="_blank" rel="noopener noreferrer">WhatsApp</Link>
        </div>

        {/*  Related  */}
        <div style={{"marginTop":"3rem"}}>
          <h3 style={{"fontFamily":"'Barlow Condensed',sans-serif","fontSize":"1.4rem","fontWeight":"900","color":"var(--navy)","marginBottom":"1rem"}}>Artikel Terkait</h3>
          <div className="related-grid">
            <Link className="rel-card" to="/artikel/5-kesalahan-perawatan-ro"><div className="rel-img" style={{"background":"linear-gradient(135deg,#1a3a5c,#1e90d6)"}}>🔧</div><div className="rel-body"><p>5 Kesalahan Umum Perawatan Membran RO</p><span>5 Mar 2025 · 4 mnt</span></div></Link>
            <Link className="rel-card" to="/artikel/desalinasi-solusi-pulau"><div className="rel-img" style={{"background":"linear-gradient(135deg,#0a2240,#0d5fa8)"}}><Waves className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div><div className="rel-body"><p>Desalinasi Air Laut untuk Pulau Terpencil</p><span>15 Mar 2025 · 6 mnt</span></div></Link>
            <Link className="rel-card" to="/artikel/air-farmasi-ro-edi"><div className="rel-img" style={{"background":"linear-gradient(135deg,#0d3a6b,#0d5fa8)"}}>⚗️</div><div className="rel-body"><p>Standar Air Farmasi: Mengapa RO + EDI Wajib?</p><span>20 Feb 2025 · 7 mnt</span></div></Link>
            <Link className="rel-card" to="/artikel/studi-kasus-ro-tekstil"><div className="rel-img" style={{"background":"linear-gradient(135deg,#1a2d42,#0a5c8a)"}}><Factory className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div><div className="rel-body"><p>Studi Kasus: RO 200 m³/hari Pabrik Tekstil</p><span>25 Jan 2025 · 8 mnt</span></div></Link>
          </div>
        </div>
      </article>

      {/*  SIDEBAR  */}
      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#apa-itu-ro">Apa Itu Reverse Osmosis?</Link></li>
            <li><Link href="#komponen">Komponen Utama Sistem RO</Link></li>
            <li><Link href="#cara-kerja">Cara Kerja Step-by-Step</Link></li>
            <li><Link href="#keunggulan">Keunggulan Teknologi RO</Link></li>
            <li><Link href="#aplikasi">Aplikasi di Indonesia</Link></li>
            <li><Link href="#pertimbangan">Hal yang Perlu Dipertimbangkan</Link></li>
            <li><Link href="#konsultasi">Butuh Sistem RO?</Link></li>
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
          <h4 style={{"color":"rgba(255,255,255,.45)","borderColor":"rgba(255,255,255,.15)"}}>Butuh Sistem RO?</h4>
          <p style={{"fontSize":".86rem","lineHeight":"1.65","marginBottom":"1rem","opacity":".84","color":"#fff"}}>Dapatkan konsultasi gratis dan estimasi biaya dari tim ahli kami.</p>
          <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center","fontSize":".82rem"}} to="/kontak">📞 Konsultasi Sekarang</Link>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Artikel Lainnya</h4>
          <ul style={{"display":"flex","flexDirection":"column","gap":".65rem"}}>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/desalinasi-solusi-pulau">→ Desalinasi Air Laut untuk Pulau Terpencil</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/5-kesalahan-perawatan-ro">→ 5 Kesalahan Perawatan Membran RO</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/studi-kasus-ro-tekstil">→ Studi Kasus Pabrik Tekstil Karawang</Link></li>
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
    <h2>Tertarik Mengimplementasikan Sistem RO?</h2>
    <p>Tim ahli kami siap membantu mulai dari analisis kebutuhan hingga instalasi dan commissioning.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak">📞 Hubungi Kami</Link>
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/produk/ro-industri">🔍 Lihat Produk RO</Link>
    </div>
  </div>
</div>

    </>
  );
};

export default ArtikelRoPrinsipKerja;
