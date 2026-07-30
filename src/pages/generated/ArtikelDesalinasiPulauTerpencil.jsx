import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


const ArtikelDesalinasiPulauTerpencil = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.art-layout{display:grid;grid-template-columns:1fr 290px;gap:3rem;align-items:start}
.art-sticky{position:sticky;top:88px}
.art-hero-img{height:320px;border-radius:12px;overflow:hidden;margin-bottom:2rem;position:relative}
.art-hero-img img{width:100%;height:100%;object-fit:cover}
.art-meta-bar{display:flex;flex-wrap:wrap;gap:.85rem;align-items:center;margin-bottom:1.5rem;padding-bottom:1.5rem;border-bottom:1px solid var(--border)}
.am-tag{background:var(--accent);color:#fff;font-size:.66rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:.26rem .72rem;border-radius:4px}
.am-info{font-size:.8rem;color:var(--muted);display:flex;align-items:center;gap:.36rem}
.author-box{display:flex;align-items:center;gap:.9rem;margin-bottom:.9rem}
.author-av{width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,var(--sky),var(--accent));display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;flex-shrink:0}
.author-av-name{font-weight:700;font-size:.92rem;color:var(--navy)}
.author-av-role{font-size:.76rem;color:var(--muted)}
.spec-table{width:100%;border-collapse:collapse;margin:1.5rem 0}
.spec-table th,.spec-table td{padding:.7rem 1rem;border:1px solid var(--border);font-size:.86rem;text-align:left}
.spec-table th{background:var(--navy);color:#fff;font-weight:700}
.spec-table tr:nth-child(even){background:var(--gray)}
@media(max-width:1024px){.art-layout{grid-template-columns:1fr}.art-sticky{position:static}}

` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/artikel">Artikel</Link> › Pulau &amp; Kepulauan</div>
    <h1>Desalinasi untuk Pulau Terpencil Indonesia:<br />Solusi Teknis dan Program Pemerintah</h1>
    <p>Panduan lengkap desalinasi SWRO untuk pulau-pulau terpencil Indonesia — tantangan logistik, solusi kontainer plug-and-play, program pemerintah, dan studi kasus dari Kepulauan Seribu hingga NTT.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">

      <article>
        <div className="art-hero-img">
          <picture>
            <source srcSet="images/porto-pulau-ayer-1.webp" type="image/webp" />
            <img src="images/porto-pulau-ayer-1.jpg" alt="Desalinasi SWRO untuk pulau terpencil Indonesia kepulauan dan komunitas" />
          </picture>
        </div>

        <div className="art-meta-bar">
          <span className="am-tag">Pulau</span>
          <span className="am-info">📅 2 Mei 2026</span>
          <span className="am-info">✍️ Tim TSM</span>
          <span className="am-info">⏱ 9 menit baca</span>
        </div>

        <div className="prose max-w-none text-text">

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Indonesia adalah <strong>negara kepulauan terbesar di dunia</strong> dengan lebih dari 17.000 pulau. Sebagian kecil dari pulau-pulau ini berpenghuni — sekitar 6.000 — dan ribuan di antaranya menghadapi tantangan serius: <strong>kekurangan air bersih layak konsumsi</strong>. Pulau-pulau kecil di Kepulauan Seribu, NTT, Maluku, hingga Papua sering tidak memiliki sumber air tawar alami yang cukup, dan penduduknya bergantung pada pengiriman air via kapal — solusi yang mahal, fluktuatif, dan rentan cuaca.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>Desalinasi air laut dengan teknologi SWRO</strong> menjadi solusi yang semakin terjangkau dan teruji. Artikel ini membahas tantangan air di pulau terpencil Indonesia, mengapa SWRO menjadi solusi teknologis paling tepat, program pemerintah yang mendukung implementasi, model partnership yang efektif, dan studi kasus implementasi di berbagai pulau.</p>

          <h2 id="masalah-air-pulau" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Masalah Air di Pulau Terpencil Indonesia</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Sumber Air Terbatas</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pulau-pulau kecil Indonesia menghadapi kombinasi faktor yang membuat suplai air sangat sulit:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Akuifer terbatas</strong> — Pulau kecil memiliki "lensa" air tawar di atas air asin, dengan volume terbatas. Eksploitasi berlebihan menyebabkan intrusi air laut yang merusak sumur permanen</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Curah hujan musiman</strong> — Penampungan air hujan dapat membantu di musim hujan, tapi tidak cukup untuk musim kemarau panjang yang dapat 4-6 bulan</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Tidak ada sumber air permukaan</strong> — Pulau kecil tidak punya sungai atau danau air tawar</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Topografi datar atau karang</strong> — Mempersulit konstruksi reservoir besar</li>
          </ul>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Solusi Tradisional yang Tidak Sustainable</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tanpa solusi water treatment lokal, pulau-pulau bergantung pada:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pengiriman air via kapal</strong> — Mahal (Rp 50.000-200.000/m³ tergantung jarak), rentan cuaca buruk, ketergantungan logistik</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Penampungan hujan</strong> (PAH) — Volume terbatas, kontaminasi mudah, tidak sustainable di musim kemarau</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sumur lokal yang berlebih dieksploitasi</strong> — Menyebabkan intrusi air laut yang merusak sumber air permanent</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Migrasi atau relokasi</strong> — Solusi terakhir yang menyebabkan kerusakan sosial-ekonomi komunitas</li>
          </ul>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Dampak Sosial-Ekonomi</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kekurangan air bersih di pulau memiliki dampak serius: (1) <strong>kesehatan masyarakat</strong> dengan kasus diare, infeksi kulit, dan stunting akibat air tidak layak, (2) <strong>perkembangan ekonomi terhambat</strong> — sulit untuk industri perikanan, pariwisata, atau pertanian yang butuh air, (3) <strong>migrasi keluar</strong> dari pulau yang menyebabkan depopulasi dan kemiskinan komunitas yang tertinggal, dan (4) <strong>kerentanan terhadap perubahan iklim</strong> — kenaikan permukaan laut memperburuk intrusi air laut ke akuifer.</p>

          <h2 id="kenapa-swro" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Mengapa SWRO Solusi Teknologis Tepat</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Beberapa teknologi desalinasi tersedia, tapi <strong>SWRO (Sea Water Reverse Osmosis)</strong> adalah pilihan paling tepat untuk pulau-pulau Indonesia karena:</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Keunggulan SWRO untuk Pulau</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Air laut tak terbatas</strong> sebagai sumber feed water — pulau dikelilingi laut</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Footprint kompak</strong> — sistem 30-100 m³/hari fit dalam kontainer 20-40 ft</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Konsumsi energi acceptable</strong> dengan ERD: 3-5 kWh/m³, dapat di-power oleh genset diesel atau hybrid solar</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Teknologi sudah matang</strong> — track record puluhan tahun di seluruh dunia</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Operasi sederhana</strong> dengan training adequate — tim lokal pulau dapat operasi setelah training awal</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Modular &amp; scalable</strong> — mulai dari 5 m³/hari untuk dusun kecil hingga 1.000+ m³/hari untuk kawasan</li>
          </ul>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Alternatif yang Tidak Cocok untuk Pulau Indonesia</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Multi-Effect Distillation (MED)</strong> — Konsumsi energi tinggi (50+ kWh/m³), butuh steam atau heat source, footprint besar. Cocok untuk pembangkit yang punya excess heat, tidak untuk pulau kecil</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>MSF (Multi-Stage Flash)</strong> — Skala besar 10.000+ m³/hari, tidak ekonomis untuk pulau kecil</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Solar Still</strong> — Konsep menarik tapi produktivitas sangat rendah (3-5 L/m²/hari), hanya cocok untuk skala rumah tangga di lokasi sangat terisolasi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>ED (Electrodialysis)</strong> — Efektif untuk brackish water, tidak ekonomis untuk salinitas air laut penuh</li>
          </ul>

          <h2 id="kontainer-plug-and-play" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Solusi Kontainer Plug-and-Play</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Mengapa Kontainer Lebih Tepat dari Permanen</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk lokasi pulau remote, sistem yang dirakit di lapangan sangat impractical karena: (1) setiap komponen harus dikirim individual dengan koordinasi cuaca dan kapal, (2) tidak ada workshop fabrikasi di pulau, (3) tidak ada engineer berpengalaman untuk supervise lapangan, (4) waktu instalasi 2-3 bulan vs 1 minggu untuk plug-and-play.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kontainer plug-and-play menyelesaikan semua ini: <strong>seluruh sistem dirakit, dites, dan di-validate di workshop TSM Bekasi</strong>, kemudian dikirim sebagai satu unit kontainer. Di pulau, hanya butuh: koneksi intake air laut, koneksi output air produk ke storage tank, koneksi listrik, dan commissioning singkat 3-5 hari.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Kapasitas Tipikal per Ukuran Kontainer</h3>
          <table className="w-full border-collapse my-[1.5rem] text-[0.9rem]">
            <tbody><tr><th>Ukuran Kontainer</th><th>Kapasitas SWRO</th><th>Cocok untuk</th></tr>
            <tr><td>20 ft standard</td><td>10-30 m³/hari</td><td>Dusun 100-300 jiwa, eco-resort kecil</td></tr>
            <tr><td>20 ft high cube</td><td>30-50 m³/hari</td><td>Desa 500-1.000 jiwa, resort menengah</td></tr>
            <tr><td>40 ft standard</td><td>50-100 m³/hari</td><td>Komunitas 1.000-3.000 jiwa, resort besar</td></tr>
            <tr><td>40 ft high cube</td><td>100-200 m³/hari</td><td>Kawasan kepulauan, multi-village</td></tr>
            <tr><td>2× 40 ft</td><td>200-500 m³/hari</td><td>Pulau besar, kompleks ekonomi terpadu</td></tr>
          </tbody></table>

          <h2 id="program-pemerintah" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Program Pemerintah yang Mendukung</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Beberapa program pemerintah Indonesia mendanai instalasi sistem air bersih di pulau-pulau terpencil. Program-program ini biasanya menggandeng vendor swasta sebagai EPC kontraktor.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Program-Program Relevan</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>BSPS (Bantuan Stimulan Perumahan Swadaya)</strong> dari Kementerian PUPR — tradisional fokus rumah, tapi varian termasuk infrastruktur air bersih untuk komunitas tertinggal</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>SPAM (Sistem Penyediaan Air Minum)</strong> dari Kementerian PUPR Direktorat Jenderal Cipta Karya — pendanaan instalasi air bersih termasuk desalinasi untuk pulau</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Program Pulau Terluar dan Tertinggal</strong> dari Kementerian Desa — fokus pada 17 pulau prioritas di perbatasan</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>DAK Fisik untuk Air Minum</strong> — Dana Alokasi Khusus untuk pemerintah daerah membangun infrastruktur air bersih</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Program CSR Perusahaan</strong> — Banyak BUMN dan swasta menjalankan CSR untuk infrastruktur dasar termasuk air bersih</li>
          </ul>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Detail eligibilitas dan proses pendaftaran berbeda untuk setiap program. Pemerintah daerah (kabupaten/kota) atau komunitas yang tertarik biasanya berkoordinasi dengan dinas terkait di provinsi untuk mengakses pendanaan.</p>

          <h2 id="partnership" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Model Partnership Swasta-Pemerintah</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Implementasi desalinasi pulau yang sukses biasanya melibatkan beberapa stakeholder:</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Stakeholder Tipikal</h3>
          <ol className="ml-[1.5rem] my-[1.05rem] list-decimal">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pemerintah pusat (Kementerian PUPR/Desa)</strong> — Pendanaan dan kerangka regulasi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pemerintah daerah</strong> — Koordinasi lokal, alokasi lahan, dukungan operasional</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Vendor EPC (seperti TSM)</strong> — Engineering, manufacturing, instalasi, training</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Operator lokal</strong> — Tim warga atau koperasi yang menjalankan sistem sehari-hari</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>BUMD/PDAM lokal</strong> — Untuk distribusi dan tarif jika sistem masuk ke jaringan</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>NGO atau development partner</strong> — Sering terlibat untuk implementasi di komunitas remote</li>
          </ol>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Model Pengelolaan Pasca-Instalasi</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pertanyaan kritis setelah instalasi: <strong>siapa yang mengoperasikan sistem jangka panjang?</strong> Beberapa model yang berhasil:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Koperasi air komunitas</strong> — Warga membentuk koperasi, kumpul iuran bulanan untuk biaya operasional dan replacement, ada operator gaji yang trained TSM</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>BUMD/PDAM mengakuisisi</strong> — Setelah serah terima, sistem dijalankan oleh PDAM lokal dengan model business as usual</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Operator swasta dengan pemerintah subsidy</strong> — Operator profesional menjalankan sistem dengan tarif consumer rendah, gap di-subsidy pemerintah</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Hybrid CSR + komunitas</strong> — Perusahaan CSR menyediakan dukungan teknis dan replacement, komunitas mengelola operasional harian</li>
          </ul>

          <h2 id="studi-kasus" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Studi Kasus dari Pulau Indonesia</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Resort Pulau Ayer (Komersial Premium)</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">SWRO 76 m³/hari kontainer untuk <Link to="/portofolio/pulau-ayer">resort di Kepulauan Seribu</Link>, dimiliki dan dioperasikan resort. Model komersial murni — investasi resort, ROI dari penghematan transport air dan kepastian operasional.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Komunitas Pulau Kepulauan Seribu</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM telah membangun beberapa unit SWRO 30-50 m³/hari untuk desa-desa di Kepulauan Seribu (Pulau Pramuka, Pulau Tidung, dan lainnya). Model: pendanaan pemerintah daerah DKI Jakarta, dijalankan oleh PAM Jaya atau koperasi lokal.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Vessel &amp; Platform Offshore</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Selain pulau, TSM juga melayani <strong>vessel offshore migas</strong> dan kapal kerja yang merupakan "pulau bergerak" dengan kebutuhan air mandiri serupa. Konfigurasi mirip tapi dengan adaptasi untuk kondisi kapal (vibration, sea state).</p>

          <h2 id="tantangan-operasional" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Tantangan Operasional Pulau Terpencil</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">1. Continuity of Operation</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tantangan utama: memastikan sistem berjalan terus-menerus di lokasi remote tanpa engineer permanen. Solusi: <strong>(1) operator lokal yang trained intensif</strong>, <strong>(2) remote monitoring</strong> via 4G/satellite untuk early detection masalah, <strong>(3) spare parts kit lokal</strong> yang adequate, <strong>(4) hotline support</strong> 24/7 ke vendor.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">2. Power Supply</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pulau tanpa PLN bergantung pada genset. Genset memberi tantangan: variabilitas voltage/frequency, biaya solar yang tinggi, ketergantungan supply BBM. Solusi modern: <strong>hybrid solar PV + battery + genset</strong> yang dapat menurunkan biaya energi 30-50% dengan investasi awal lebih tinggi.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">3. Replacement &amp; Service</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Mengirim teknisi atau spare parts ke pulau remote tergantung cuaca dan kapal yang tersedia. Strategi: <strong>(1) preventive maintenance schedule yang ketat</strong> agar tidak ada emergency, <strong>(2) maintenance dijadwalkan saat cuaca baik</strong>, <strong>(3) stok strategis lokal</strong> untuk consumable yang sering, <strong>(4) batch service</strong> — vendor visit setiap 6 bulan untuk multiple maintenance items.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">4. Sustainability Pendanaan</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem yang dibangun dengan dana hibah pemerintah perlu plan pengelolaan jangka panjang. Tarif consumer harus mencakup: listrik, kimia, replacement membran (5-7 tahun), penggantian komponen pump (8-10 tahun), gaji operator. Tarif terlalu rendah berakhir dengan sistem mangkrak setelah 3-5 tahun. Model pricing yang sustainable adalah <strong>kunci</strong> untuk dampak jangka panjang.</p>

          <h2 id="faq" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

        </div>

      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#masalah-air-pulau">Masalah Air di Pulau Terpencil</Link></li>
            <li><Link href="#kenapa-swro">Mengapa SWRO Solusi Tepat</Link></li>
            <li><Link href="#kontainer-plug-and-play">Solusi Kontainer Plug-and-Play</Link></li>
            <li><Link href="#program-pemerintah">Program Pemerintah</Link></li>
            <li><Link href="#partnership">Partnership Swasta-Pemerintah</Link></li>
            <li><Link href="#studi-kasus">Studi Kasus Pulau Indonesia</Link></li>
            <li><Link href="#tantangan-operasional">Tantangan Operasional</Link></li>
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
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/desalinasi-solusi-pulau">→ Desalinasi: Konsep &amp; Teknologi</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/kapasitas-swro-resort">→ Sizing SWRO Resort</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/portofolio/pulau-ayer">→ Studi Kasus: Pulau Ayer</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/desalinasi">→ Solusi SWRO TSM</Link></li>
            <li><Link style={{"fontSize":".84rem","fontWeight":"600","color":"var(--blue)","display":"block"}} to="/artikel">→ Lihat Semua Artikel</Link></li>
          </ul>
        </div>
      </aside>

    </div>
  </div>
</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Membantu Komunitas Pulau dengan Desalinasi?</h2>
    <p>Tim ahli kami siap membantu mulai dari analisis kebutuhan hingga instalasi.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak">📞 Hubungi Kami</Link>
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/produk/desalinasi">🔍 Lihat Solusi SWRO</Link>
    </div>
  </div>
</div>

    </>
  );
};

export default ArtikelDesalinasiPulauTerpencil;
