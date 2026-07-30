import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../../components/ui/Button';

const ArtikelWaterTreatmentKalimantan = () => {
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
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/artikel">Artikel</Link> › Air Permukaan</div>
    <h1>Water Treatment Air Gambut Kalimantan:<br />Tantangan dan Solusi Teknologis</h1>
    <p>Panduan teknis mengolah air gambut yang khas Kalimantan dan Sumatra menjadi air bersih layak minum atau industri — karakteristik, tantangan TOC tinggi, dan solusi pre-oksidasi + UF + RO.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">

      <article>
        <div className="art-hero-img">
          <picture>
            <source srcSet="images/foto-pemasangan-lapangan.webp" type="image/webp" />
            <img src="images/foto-pemasangan-lapangan.jpg" alt="Water treatment untuk air gambut Kalimantan Sumatra dengan TOC tinggi" />
          </picture>
        </div>

        <div className="art-meta-bar">
          <span className="am-tag">Air Gambut</span>
          <span className="am-info">📅 2 Mei 2026</span>
          <span className="am-info">✍️ Tim TSM</span>
          <span className="am-info">⏱ 8 menit baca</span>
        </div>

        <div className="prose max-w-none text-text">

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sebagian besar wilayah Kalimantan, Riau, Jambi, dan Sumatra Selatan memiliki kondisi geologis khas: <strong>tanah gambut</strong> dengan kandungan organik sangat tinggi. Air permukaan dan air sumur dangkal di wilayah-wilayah ini umumnya berwarna kuning kecoklatan, asam, dan mengandung organik terlarut yang tinggi — disebut <strong>air gambut</strong>.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Bagi penduduk lokal, air gambut adalah sumber air sehari-hari yang sudah terbiasa dikonsumsi setelah perebusan. Tapi untuk aplikasi yang lebih luas — pasokan air industri, AMDK, hospital, atau desa berskala besar — air gambut harus di-treat secara serius. Artikel ini membahas karakteristik air gambut, tantangan treatment-nya, dan solusi teknologi yang efektif berdasarkan pengalaman TSM melayani klien di Kalimantan dan Sumatra.</p>

          <h2 id="apa-air-gambut" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Apa Itu Air Gambut?</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Air gambut adalah air permukaan atau air sumur dangkal yang melewati lapisan tanah gambut (peat) — tanah organik yang terbentuk dari akumulasi vegetasi rawa selama ribuan tahun. Saat air bergerak melewati lapisan ini, ia menyerap senyawa organik humik dan fulvik yang memberikan: <strong>warna kuning-kecoklatan, rasa asam, aroma earthy, dan reaktivitas kimia yang tinggi</strong>.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Indonesia memiliki salah satu lahan gambut terbesar di dunia: lebih dari 20 juta hektar tersebar di Kalimantan (Tengah, Barat, Selatan, Timur), Sumatra (Riau, Jambi, Sumatra Selatan), dan Papua. Daerah-daerah seperti <strong>Kapuas, Banjarmasin, Pangkalan Bun, Pekanbaru, Jambi, dan Palangkaraya</strong> memiliki sumber air permukaan yang dominasi gambut.</p>

          <h2 id="karakteristik" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Karakteristik Air Gambut</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Parameter Kimia Tipikal</h3>
          <table className="w-full border-collapse my-[1.5rem] text-[0.9rem]">
            <tbody><tr><th>Parameter</th><th>Air Gambut Tipikal</th><th>Permenkes 492/2010 (Air Minum)</th></tr>
            <tr><td>pH</td><td>3,5 – 5,5</td><td>6,5 – 8,5</td></tr>
            <tr><td>Warna</td><td>200 – 800 TCU</td><td>15 TCU max</td></tr>
            <tr><td>TOC (Total Organic Carbon)</td><td>15 – 50 mg/L</td><td>—</td></tr>
            <tr><td>DOC (Dissolved Organic)</td><td>10 – 40 mg/L</td><td>—</td></tr>
            <tr><td>Fe (Besi)</td><td>1 – 15 mg/L</td><td>0,3 mg/L max</td></tr>
            <tr><td>Mn (Mangan)</td><td>0,5 – 5 mg/L</td><td>0,4 mg/L max</td></tr>
            <tr><td>TDS</td><td>30 – 150 ppm</td><td>500 ppm max</td></tr>
            <tr><td>Hardness</td><td>5 – 50 mg/L (sangat lunak)</td><td>500 mg/L max</td></tr>
            <tr><td>Mikroba</td><td>Sering positif coliform</td><td>0 CFU/100 mL</td></tr>
          </tbody></table>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Yang unik: air gambut <strong>TDS-nya rendah</strong> tapi TOC-nya sangat tinggi. Ini berlawanan dengan air sumur biasa yang TDS-nya tinggi (mineral) tapi TOC rendah. Implikasinya untuk treatment sangat berbeda.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Senyawa Humik dan Fulvik</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Komponen organik di air gambut didominasi oleh <strong>asam humik</strong> dan <strong>asam fulvik</strong> — molekul organik kompleks dengan berat molekul 500-100.000 Da. Karakteristik kimia mereka:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Warna kuning-coklat</strong> akibat absorpsi pada wavelength 254-400 nm</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Bersifat asam</strong> dengan grup karboksilat dan fenolik yang melepas H⁺</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Reaktif dengan klorin</strong> membentuk THM (trihalomethanes) — disinfection byproducts yang karsinogenik</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pembawa logam</strong> — humik mengikat Fe, Mn, Al dan membuat senyawa terlarut yang sulit di-remove dengan oksidasi sederhana</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Foulant membran</strong> — humik adalah salah satu foulant terburuk untuk membran RO dan UF</li>
          </ul>

          <h2 id="tantangan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Tantangan Treatment Air Gambut</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">1. Keklorinasi yang Tidak Aman</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Treatment konvensional dengan klorinasi langsung pada air gambut sangat tidak disarankan karena akan membentuk <strong>THM dalam jumlah signifikan</strong>. THM seperti chloroform (CHCl₃) dan bromoform diklasifikasikan sebagai <strong>kemungkinan karsinogen</strong> oleh WHO. Standar air minum Indonesia (Permenkes 492/2010) membatasi THM &lt;100 µg/L total — limit yang sulit dicapai dengan air gambut yang diklorinasi langsung.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">2. Coagulation Sulit</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Coagulation-flocculation tradisional dengan PAC atau alum kurang efektif untuk humik karena: (1) air gambut sudah sangat asam (pH &lt;5) sedangkan koagulasi optimal pada pH 6-7, (2) senyawa humik bersifat anion yang tidak mudah dinetralisasi oleh kation koagulan, (3) flok yang terbentuk biasanya kecil dan slow-settling.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">3. Fouling Membran yang Cepat</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Senyawa humik adalah foulant kuat untuk membran RO dan UF. Tanpa pre-treatment yang tepat, membran akan mengalami: (1) <strong>organic fouling</strong> dengan deposit humik di permukaan, (2) <strong>biofouling</strong> karena humik adalah substrat untuk bakteri, (3) <strong>scaling</strong> karena humik mengikat Fe/Mn dan membuat pengendapan tidak terprediksi. Umur membran dapat 50% lebih singkat dari air baku biasa.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">4. Iron dan Manganese yang Bound to Organic</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Fe dan Mn di air gambut tidak dalam bentuk Fe²⁺/Mn²⁺ sederhana, tapi ter-chelate dengan humik. Aerasi dan oksidasi konvensional tidak mengoksidasi mereka secara efektif karena chelation melindungi dari oksigen. Hasilnya: deposit Fe/Mn hitam-kemerahan di filter dan piping.</p>

          <h2 id="teknologi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Teknologi yang Cocok untuk Air Gambut</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">1. Pre-Oksidasi (Wajib)</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sebelum step lain, organic matter harus dioksidasi untuk: (1) memutus chelation Fe/Mn-humik, (2) mengkonversi humik dari larut menjadi flokulable, (3) mengurangi TOC sebelum membran. Pilihan oksidan:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>KMnO₄ (Potassium Permanganate)</strong> — Klasik untuk Fe/Mn removal, juga mengoksidasi humik. Dosis 2-10 mg/L tergantung load. Murah dan mudah dosing tapi meninggalkan sisa Mn yang harus dihilangkan</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Ozon (O₃)</strong> — Powerful oxidant yang juga membunuh mikroba. Dosis 2-5 mg/L. Investasi lebih tinggi (generator ozon), tapi efek yang superior</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>ClO₂ (Chlorine Dioxide)</strong> — Oksidan yang tidak membentuk THM (advantage utama vs Cl₂). Membutuhkan generator on-site</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>UV + H₂O₂ (Advanced Oxidation)</strong> — Untuk TOC sangat tinggi (&gt;30 mg/L) dan target removal yang tinggi</li>
          </ul>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">2. Coagulation-Flocculation Setelah Oksidasi</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Setelah pre-oksidasi, koagulasi menjadi efektif. PAC (Poly Aluminum Chloride) atau Ferric Chloride dengan pH adjustment ke 6-7 menghilangkan humik teroksidasi sebagai flok yang dapat di-settle.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">3. Ultrafiltrasi (UF)</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">UF hollow fiber atau spiral dengan MWCO (Molecular Weight Cut Off) 100-200 kDa adalah <strong>kunci untuk treatment air gambut yang efisien</strong>. UF menghilangkan: koloid sisa, padatan tersuspensi, mikroba, dan sebagian besar humik dengan berat molekul &gt;5.000 Da. Output UF cocok sebagai feed RO.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">4. Reverse Osmosis (Untuk Aplikasi Premium)</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk AMDK, hospital, atau industri yang butuh kualitas tinggi, RO setelah UF menghasilkan air dengan: TDS &lt;30 ppm, TOC &lt;0,5 mg/L, warna ~0 TCU, mikroba 0 CFU. Untuk air gambut, pilih membran <strong>fouling-resistant</strong> seperti Toray TM720D atau Dow BW30FR.</p>

          <h2 id="konfigurasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Konfigurasi WTP Standar untuk Air Gambut</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Tier 1: Air Bersih Layak Minum (untuk Desa/Komunitas)</h3>
          <ol className="ml-[1.5rem] my-[1.05rem] list-decimal">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Pre-oksidasi KMnO₄ atau ClO₂</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Coagulation PAC + pH adjustment ke 6,5-7</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Sedimentation atau DAF</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Multi-media filter</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Ultrafiltrasi (UF)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Karbon aktif (untuk taste &amp; odor)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">UV disinfection</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Storage tank</li>
          </ol>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>Output</strong>: Memenuhi Permenkes 492/2010 untuk air minum (warna &lt;15 TCU, TOC &lt;2 mg/L, mikroba 0 CFU).</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Tier 2: Air Industri / AMDK (Premium Quality)</h3>
          <ol className="ml-[1.5rem] my-[1.05rem] list-decimal">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Pre-oksidasi (lebih intensif, ozon atau AOP)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Coagulation-flocculation 2-stage</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">DAF (Dissolved Air Flotation)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Multi-media filter dual-bed</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Karbon aktif granular (GAC)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Ultrafiltrasi (UF)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">RO untuk polishing (membran fouling-resistant)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">UV + remineralisasi (jika untuk konsumsi)</li>
          </ol>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>Output</strong>: TDS &lt;30 ppm, TOC &lt;0,5 mg/L, layak untuk AMDK atau industri.</p>

          <h2 id="studi-kasus" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Studi Kasus: WTP untuk Klien Kalimantan</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM telah membangun beberapa WTP untuk air gambut di Kalimantan dengan kapasitas 5-100 m³/hari. Salah satu kasus tipikal: pabrik makanan ringan di Kalimantan Selatan yang membutuhkan 30 m³/hari air industri dari sumber air sumur dengan karakteristik: pH 4,2, warna 450 TCU, Fe 8 mg/L, Mn 2,5 mg/L, TOC 28 mg/L.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Konfigurasi yang Diimplementasikan</h3>
          <ol className="ml-[1.5rem] my-[1.05rem] list-decimal">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Aerasi + KMnO₄ dosing</strong> dengan retention 30 menit untuk oksidasi Fe/Mn dan organik</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Multi-media filter</strong> dual-bed pasir-antrasit untuk removal flok dan partikulat</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>GAC filter</strong> untuk removal residual organik dan permanganat sisa</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Softener</strong> (untuk hardness yang masih ada, walau rendah)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Cartridge 5 µm + UF hollow fiber</strong> sebagai protection</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>RO BWRO 2-stage</strong> dengan membran Toray TM720D fouling-resistant</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>UV sterilizer</strong> + storage SS-304</li>
          </ol>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Hasil</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Output</strong>: TDS 18 ppm, warna 0 TCU, Fe &lt;0,02 mg/L, TOC &lt;0,3 mg/L</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Mikroba</strong>: 0 CFU/100 mL konsisten</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Recovery</strong>: 70% (sedikit lebih rendah dari air biasa karena fouling)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Umur membran</strong>: 4-5 tahun (vs 6-7 tahun air normal) — masih acceptable</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Penghematan</strong>: vs delivery air dari Banjarmasin, ROI 3 tahun</li>
          </ul>

          <h2 id="biaya" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Estimasi Biaya WTP Air Gambut</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk kapasitas typical industri/komersial 30-50 m³/hari:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Tier 1 (Air bersih layak minum)</strong>: Rp 800 juta - 1,5 milyar (tanpa RO)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Tier 2 (Premium quality untuk industri/AMDK)</strong>: Rp 1,5 - 3 milyar (dengan RO)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Opex tahunan</strong>: Rp 200-500 juta termasuk listrik, kimia, replacement membran amortized</li>
          </ul>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Investasi lebih tinggi 30-50% dari WTP untuk air sumur biasa karena: pre-oksidasi tambahan, UF wajib, membran fouling-resistant, dan pre-treatment yang lebih intensif. Tapi biaya distribusi air bersih ke daerah-daerah Kalimantan sangat tinggi sehingga WTP onsite hampir selalu lebih ekonomis jangka panjang.</p>

          <h2 id="faq" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

        </div>

      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#apa-air-gambut">Apa Itu Air Gambut?</Link></li>
            <li><Link href="#karakteristik">Karakteristik Air Gambut</Link></li>
            <li><Link href="#tantangan">Tantangan Treatment</Link></li>
            <li><Link href="#teknologi">Teknologi yang Cocok</Link></li>
            <li><Link href="#konfigurasi">Konfigurasi WTP Standar</Link></li>
            <li><Link href="#studi-kasus">Studi Kasus Kalimantan</Link></li>
            <li><Link href="#biaya">Estimasi Biaya</Link></li>
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
          <Button variant="white" to="/kontak" >📞 Konsultasi Sekarang</Button>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Artikel Lainnya</h4>
          <ul style={{"display":"flex","flexDirection":"column","gap":".65rem"}}>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/perbedaan-swro-bwro-twro">→ Perbedaan SWRO, BWRO, TWRO</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/perbandingan-membran-dow-toray">→ Membran Dow vs Toray</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/uf">→ Sistem Ultrafiltrasi</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/ro-industri">→ Sistem RO Industri</Link></li>
            <li><Link style={{"fontSize":".84rem","fontWeight":"600","color":"var(--blue)","display":"block"}} to="/artikel">→ Lihat Semua Artikel</Link></li>
          </ul>
        </div>
      </aside>

    </div>
  </div>
</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold leading-[1.15] mb-[0.65rem]">Membutuhkan Solusi Water Treatment untuk Air Gambut?</h2>
    <p className="text-[0.88rem] opacity-90 leading-[1.75] max-w-[600px] mx-auto mb-8">Tim ahli kami siap membantu mulai dari analisis kebutuhan hingga instalasi.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Button variant="white" to="/kontak" >📞 Hubungi Kami</Button>
      <Button variant="outline-white" to="/produk/ro-industri" >🔍 Konsultasi Solusi</Button>
    </div>
  </div>
</div>

    </>
  );
};

export default ArtikelWaterTreatmentKalimantan;
