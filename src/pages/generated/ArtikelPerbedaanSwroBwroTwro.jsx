import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


const ArtikelPerbedaanSwroBwroTwro = () => {
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
.spec-table{width:100%;border-collapse:collapse;margin:1.5rem 0}
.spec-table th,.spec-table td{padding:.7rem 1rem;border:1px solid var(--border);font-size:.86rem;text-align:left}
.spec-table th{background:var(--navy);color:#fff;font-weight:700}
.spec-table tr:nth-child(even){background:var(--gray)}
@media(max-width:1024px){.art-layout{grid-template-columns:1fr}.art-sticky{position:static}.related-grid{grid-template-columns:1fr}}

` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/artikel">Artikel</Link> › Teknologi</div>
    <h1>Perbedaan SWRO, BWRO, dan TWRO:<br />Mana yang Tepat untuk Kebutuhan Anda?</h1>
    <p>Panduan teknis lengkap memilih sistem reverse osmosis yang tepat berdasarkan sumber air baku, kapasitas, dan budget operasional.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">

      <article>
        <div className="art-hero-img">
          <picture>
            <source srcSet="images/foto-mesin-swro.webp" type="image/webp" />
            <img src="images/foto-mesin-swro.jpg" alt="Perbandingan sistem SWRO BWRO TWRO untuk berbagai jenis air baku" />
          </picture>
        </div>

        <div className="art-meta-bar">
          <span className="am-tag">Teknologi</span>
          <span className="am-info">📅 2 Mei 2026</span>
          <span className="am-info">✍️ Tim TSM</span>
          <span className="am-info">⏱ 8 menit baca</span>
        </div>

        <div className="prose max-w-none text-text">

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Salah satu pertanyaan paling umum yang TSM terima dari calon klien: "<em>Sistem RO apa yang cocok untuk pabrik atau resort saya?</em>" Jawabannya tidak satu untuk semua — pilihan antara <strong>SWRO, BWRO, dan TWRO</strong> ditentukan oleh karakteristik air baku Anda. Memilih salah dapat berarti investasi membengkak, konsumsi energi tinggi, atau membran cepat rusak.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Artikel ini menjelaskan perbedaan teknis ketiga jenis RO, kapan masing-masing tepat digunakan, dan bagaimana memilih yang sesuai untuk kebutuhan spesifik Anda. Dengan pengalaman 24+ tahun membangun sistem RO di seluruh Indonesia, TSM mendapati bahwa pemahaman yang baik tentang ketiga kategori ini menyelamatkan klien dari banyak kesalahan investasi.</p>

          <h2 id="apa-perbedaan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Apa Perbedaan Mendasar SWRO, BWRO, dan TWRO?</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ketiga jenis RO bekerja dengan prinsip yang sama — mendorong air melewati membran semipermeabel pada tekanan tinggi untuk menyaring kontaminan. Yang membedakan adalah <strong>karakteristik air baku yang ditangani</strong>, dan konsekuensinya pada desain sistem:</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>SWRO (Sea Water Reverse Osmosis)</strong> — untuk air laut dengan TDS 20.000–45.000 ppm. Membran khusus salinitas tinggi, tekanan operasi 55–80 bar, recovery 35–50%.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>BWRO (Brackish Water Reverse Osmosis)</strong> — untuk air payau, sumur dalam, atau air tanah dengan TDS 1.000–10.000 ppm. Membran brackish water, tekanan 12–20 bar, recovery 60–80%.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>TWRO (Tap Water Reverse Osmosis)</strong> — untuk air ledeng PDAM atau air sumur dangkal dengan TDS &lt;1.000 ppm. Membran low pressure, tekanan 7–12 bar, recovery 70–85%.</li>
          </ul>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Perbedaan TDS feed water bukan hanya angka — ia menentukan tekanan osmotik yang harus diatasi. Setiap 1.000 ppm TDS meningkatkan tekanan osmotik sekitar 0,7 bar, dan tekanan operasi RO harus di atas tekanan osmotik plus pressure drop sistem. Ini sebabnya SWRO membutuhkan tekanan dan energi jauh lebih besar dari TWRO.</p>

          <h2 id="swro" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">SWRO — Sea Water Reverse Osmosis</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>SWRO</strong> adalah teknologi paling kompleks dari ketiganya, dirancang untuk mengubah air laut dengan salinitas tinggi menjadi air tawar layak minum. Karena tekanan osmotik air laut bisa mencapai 28 bar, sistem SWRO beroperasi pada 55–80 bar — sekitar 3–5x lebih tinggi dari sistem RO industri biasa.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Karakteristik Teknis SWRO</h3>
          <table className="w-full border-collapse my-[1.5rem] text-[0.9rem]">
            <tbody><tr><th>Parameter</th><th>Spesifikasi SWRO</th></tr>
            <tr><td>TDS Feed</td><td>20.000–45.000 ppm</td></tr>
            <tr><td>Tekanan Operasi</td><td>55–80 bar</td></tr>
            <tr><td>Recovery Rate</td><td>35–50%</td></tr>
            <tr><td>Tipe Membran</td><td>SW (Sea Water) — Dow Filmtec SW30HRLE / Toray TM820</td></tr>
            <tr><td>Konsumsi Energi</td><td>2,5–4,5 kWh/m³ (dengan ERD), 6–8 kWh/m³ (tanpa ERD)</td></tr>
            <tr><td>Material</td><td>SS-316L atau super duplex (semua kontak air laut)</td></tr>
            <tr><td>TDS Output</td><td>&lt; 500 ppm (memenuhi Permenkes 492/2010)</td></tr>
          </tbody></table>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Kapan SWRO Tepat Digunakan</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Resort dan hotel di kepulauan</strong> tanpa sumber air tawar yang dapat diandalkan</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kapal pesiar, kapal kerja, dan kapal perang</strong> yang membutuhkan watermaker mandiri</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Platform offshore minyak dan gas</strong> di lepas pantai</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kawasan pesisir industri</strong> dengan keterbatasan suplai air tawar</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Komunitas pulau berpenduduk</strong> yang sebelumnya bergantung pada pengiriman air kapal</li>
          </ul>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk gambaran lebih konkret, baca <Link to="/portofolio/pulau-ayer">studi kasus SWRO 76 m³/hari di Resort Pulau Ayer</Link> atau <Link to="/portofolio/pelindo">SWRO skala besar 1.100 m³/hari untuk Pelabuhan Tanjung Priok</Link> dari TSM.</p>

          <h2 id="bwro" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">BWRO — Brackish Water Reverse Osmosis</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>BWRO</strong> adalah jenis RO paling umum digunakan di industri Indonesia. Air payau atau air tanah dalam dengan TDS 1.000–10.000 ppm dapat ditemui di banyak lokasi industri — terutama di kawasan pesisir, pulau-pulau kecil, dan area dengan intrusi air laut. BWRO juga digunakan untuk air sumur dengan TDS sedang yang tidak ekonomis di-treat dengan softener atau ion exchanger biasa.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Karakteristik Teknis BWRO</h3>
          <table className="w-full border-collapse my-[1.5rem] text-[0.9rem]">
            <tbody><tr><th>Parameter</th><th>Spesifikasi BWRO</th></tr>
            <tr><td>TDS Feed</td><td>1.000–10.000 ppm</td></tr>
            <tr><td>Tekanan Operasi</td><td>12–20 bar</td></tr>
            <tr><td>Recovery Rate</td><td>60–80%</td></tr>
            <tr><td>Tipe Membran</td><td>BW (Brackish Water) — Dow Filmtec BW30 / Toray TM720</td></tr>
            <tr><td>Konsumsi Energi</td><td>0,8–1,5 kWh/m³</td></tr>
            <tr><td>Material</td><td>SS-304 atau FRP (lebih ekonomis dari SWRO)</td></tr>
            <tr><td>TDS Output</td><td>&lt; 50 ppm</td></tr>
          </tbody></table>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Kapan BWRO Tepat Digunakan</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Industri F&amp;B</strong> dengan air baku sumur dalam yang TDS-nya fluktuatif (contoh: <Link to="/portofolio/sosro">PT Sosro</Link>)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pabrik tekstil dan dyeing</strong> yang membutuhkan air bebas hardness untuk pewarnaan konsisten</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sistem pendukung operasi industri</strong> di kawasan pesisir dengan air sumur payau</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Hotel dan rumah sakit</strong> di kota besar dengan air PDAM yang berfluktuasi kualitasnya</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Boiler feed water tekanan rendah-menengah</strong> untuk pabrik dan utility</li>
          </ul>

          <h2 id="twro" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">TWRO — Tap Water Reverse Osmosis</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>TWRO</strong> adalah sistem RO yang dioptimasi untuk air ledeng PDAM atau air sumur dangkal dengan TDS rendah (&lt;1.000 ppm). Di Indonesia, TWRO populer untuk: AMDK (Air Minum Dalam Kemasan), dispenser air di gedung perkantoran, kafe dan restoran premium, hingga sistem polishing di laboratorium.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Karakteristik Teknis TWRO</h3>
          <table className="w-full border-collapse my-[1.5rem] text-[0.9rem]">
            <tbody><tr><th>Parameter</th><th>Spesifikasi TWRO</th></tr>
            <tr><td>TDS Feed</td><td>&lt; 1.000 ppm</td></tr>
            <tr><td>Tekanan Operasi</td><td>7–12 bar</td></tr>
            <tr><td>Recovery Rate</td><td>70–85%</td></tr>
            <tr><td>Tipe Membran</td><td>LPRO (Low Pressure RO) — Dow Filmtec LP / Toray TM710</td></tr>
            <tr><td>Konsumsi Energi</td><td>0,4–0,8 kWh/m³</td></tr>
            <tr><td>Material</td><td>SS-304 / FRP / sanitary food-grade</td></tr>
            <tr><td>TDS Output</td><td>&lt; 30 ppm</td></tr>
          </tbody></table>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Kapan TWRO Tepat Digunakan</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pabrik AMDK</strong> dengan air baku PDAM atau sumur dangkal — lihat <Link to="/produk/amdk">solusi mesin AMDK TSM</Link></li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Hidroponik komersial</strong> — air baku PDAM perlu di-treat ke TDS &lt;30 ppm untuk kontrol nutrisi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Polishing untuk RO+EDI</strong> di sistem farmasi dan elektronik</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Aplikasi dispenser premium</strong> di gedung perkantoran, hotel, dan F&amp;B</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Lab klinik</strong> untuk preparasi reagen dan pencucian glassware</li>
          </ul>

          <h2 id="perbandingan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Perbandingan Lengkap SWRO vs BWRO vs TWRO</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tabel perbandingan singkat yang dapat membantu evaluasi awal:</p>

          <table className="w-full border-collapse my-[1.5rem] text-[0.9rem]">
            <tbody><tr><th>Aspek</th><th>SWRO</th><th>BWRO</th><th>TWRO</th></tr>
            <tr><td>TDS Feed</td><td>20–45 ribu ppm</td><td>1–10 ribu ppm</td><td>&lt; 1.000 ppm</td></tr>
            <tr><td>Tekanan</td><td>55–80 bar</td><td>12–20 bar</td><td>7–12 bar</td></tr>
            <tr><td>Recovery</td><td>35–50%</td><td>60–80%</td><td>70–85%</td></tr>
            <tr><td>Konsumsi Energi</td><td>2,5–4,5 kWh/m³</td><td>0,8–1,5 kWh/m³</td><td>0,4–0,8 kWh/m³</td></tr>
            <tr><td>Investasi (per m³/hari kapasitas)</td><td>Tinggi</td><td>Sedang</td><td>Rendah</td></tr>
            <tr><td>Biaya Operasional</td><td>Tinggi</td><td>Sedang</td><td>Rendah</td></tr>
            <tr><td>Aplikasi Tipikal</td><td>Pulau, kapal, offshore</td><td>Industri, F&amp;B, hotel</td><td>AMDK, polishing, lab</td></tr>
          </tbody></table>

          <h2 id="memilih" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Cara Memilih yang Tepat: 4 Langkah</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Langkah 1: Lakukan Analisis Air Baku</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tidak ada cara lain untuk memilih jenis RO yang tepat selain mengetahui karakteristik air baku Anda secara objektif. Lakukan analisis lengkap: <strong>TDS, pH, hardness, silika, besi-mangan, klorida, sulfat, organik (TOC), dan SDI (Silt Density Index)</strong>. Pengambilan sampel sebaiknya dilakukan beberapa kali sepanjang tahun karena banyak parameter berfluktuasi musiman — air sumur Indonesia umumnya naik TDS-nya di musim kemarau.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Langkah 2: Tentukan Kapasitas yang Dibutuhkan</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Hitung kebutuhan air harian dengan margin pertumbuhan 20–30%. Untuk sistem 24/7, tambahkan buffer untuk maintenance time. Total kapasitas sistem RO biasanya 1,3–1,5x kebutuhan produk untuk akomodasi recovery dan reject.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Langkah 3: Pertimbangkan Total Cost of Ownership (TCO)</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Investasi awal hanya bagian dari total biaya. Pertimbangkan juga: <strong>biaya listrik tahunan, kimia, penggantian membran (3–7 tahun tergantung jenis), kartrid pre-filter, dan service</strong>. Untuk sistem &gt;100 m³/hari, biaya listrik bisa menjadi komponen TCO terbesar — investasi awal pada ERD dan VFD biasanya terbayar dalam 1–3 tahun.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Langkah 4: Konsultasikan dengan Engineer Berpengalaman</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Setiap sumber air dan setiap aplikasi memiliki nuansa yang dapat dilihat oleh engineer berpengalaman. Beberapa kesalahan umum yang sering dilakukan tanpa konsultasi: memilih SWRO untuk sumur payau (over-spec), BWRO untuk air laut (under-spec dan akan rusak cepat), atau TWRO untuk air dengan hardness tinggi (membran cepat scaling).</p>

          <h2 id="studi-kasus" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Contoh Pemilihan untuk Kasus Nyata</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Kasus 1: Resort Baru di Bali Selatan</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>Sumber air</strong>: Sumur dalam dengan TDS 3.500 ppm (intrusi air laut). <strong>Kebutuhan</strong>: 30 m³/hari untuk hotel 60 kamar. <strong>Pilihan tepat</strong>: BWRO. Walau lokasi pesisir, air sumur masih BWRO bukan SWRO — recovery 75% memberikan biaya operasional yang jauh lebih ekonomis dibanding SWRO 40%.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Kasus 2: Pabrik Minuman Baru di Bekasi</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>Sumber air</strong>: PDAM dengan TDS 350 ppm tapi hardness tinggi 250 ppm. <strong>Kebutuhan</strong>: 50 m³/jam untuk produksi minuman. <strong>Pilihan tepat</strong>: TWRO dengan softener pre-treatment. Hardness yang tinggi adalah masalah utama, bukan TDS — softener menyelesaikan hardness, lalu TWRO LPRO menyelesaikan TDS dengan konsumsi energi minimal.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Kasus 3: Resort Eksklusif di Pulau Wakatobi</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>Sumber air</strong>: Tidak ada sumur, hanya air laut. <strong>Kebutuhan</strong>: 50 m³/hari untuk resort 80 kamar. <strong>Pilihan tepat</strong>: SWRO kontainer. Tidak ada alternatif — air laut adalah satu-satunya sumber, dan SWRO kontainer plug-and-play paling ekonomis dikirim ke pulau.</p>

          <h2 id="faq" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

        </div>

      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#apa-perbedaan">Apa Perbedaan SWRO, BWRO, TWRO?</Link></li>
            <li><Link href="#swro">SWRO — Sea Water RO</Link></li>
            <li><Link href="#bwro">BWRO — Brackish Water RO</Link></li>
            <li><Link href="#twro">TWRO — Tap Water RO</Link></li>
            <li><Link href="#perbandingan">Perbandingan Lengkap</Link></li>
            <li><Link href="#memilih">Cara Memilih yang Tepat</Link></li>
            <li><Link href="#studi-kasus">Contoh Pemilihan</Link></li>
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
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/ro-prinsip-kerja">→ Mengenal Teknologi Reverse Osmosis</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/perbandingan-membran-dow-toray">→ Perbandingan Membran Dow vs Toray</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/desalinasi-solusi-pulau">→ Desalinasi untuk Pulau Terpencil</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/air-farmasi-ro-edi">→ Standar Air Farmasi RO+EDI</Link></li>
            <li><Link style={{"fontSize":".84rem","fontWeight":"600","color":"var(--blue)","display":"block"}} to="/artikel">→ Lihat Semua Artikel</Link></li>
          </ul>
        </div>
      </aside>

    </div>
  </div>
</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Bingung Memilih Sistem RO yang Tepat?</h2>
    <p>Tim ahli kami siap membantu mulai dari analisis kebutuhan hingga instalasi.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak">📞 Hubungi Kami</Link>
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/kontak">🔍 Konsultasi Gratis</Link>
    </div>
  </div>
</div>

    </>
  );
};

export default ArtikelPerbedaanSwroBwroTwro;
