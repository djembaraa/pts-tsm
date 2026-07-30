import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList } from 'lucide-react';

const PortoSinarmasForestry = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.cs-hero{position:relative;border-radius:14px;overflow:hidden;margin-bottom:2rem;height:380px;background:linear-gradient(135deg,#0a2240,#0d5fa8)}
.cs-hero img{width:100%;height:100%;object-fit:cover;opacity:.7}
.cs-hero .cs-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(10,34,64,.85),rgba(10,34,64,.15));display:flex;align-items:flex-end;padding:2rem;color:#fff}
.cs-hero .cs-overlay h2{font-family:'Barlow Condensed',sans-serif;font-size:2.2rem;font-weight:900;color:#fff;letter-spacing:.01em}
.cs-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1rem;margin:2rem 0}
.cs-stat{background:var(--ice);border:1px solid var(--border);border-radius:10px;padding:1.2rem 1rem;text-align:center}
.cs-stat .num{font-family:'Barlow Condensed',sans-serif;font-size:1.8rem;font-weight:900;color:var(--blue);line-height:1}
.cs-stat .lbl{font-size:.74rem;color:var(--muted);margin-top:.4rem;text-transform:uppercase;letter-spacing:.04em}
.cs-meta-table{width:100%;border-collapse:collapse;margin:1.5rem 0}
.cs-meta-table th,.cs-meta-table td{padding:.75rem 1rem;border:1px solid var(--border);font-size:.88rem;text-align:left}
.cs-meta-table th{background:var(--gray);color:var(--navy);font-weight:700;width:32%}
.client-logo{display:inline-block;background:#fff;border:1px solid var(--border);border-radius:8px;padding:1rem;margin-bottom:1.5rem;max-width:200px}
.client-logo img{max-width:100%;height:auto;display:block}
.art-layout{display:grid;grid-template-columns:1fr 290px;gap:3rem;align-items:start}
.art-sticky{position:sticky;top:88px}
@media(max-width:1024px){.art-layout{grid-template-columns:1fr}.art-sticky{position:static}.cs-hero{height:260px}}

` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/portofolio">Portofolio</Link> › Studi Kasus</div>
    <h1>Sinarmas Forestry Group:<br />20+ Sistem Water Treatment untuk Nursery Reforestation Palembang</h1>
    <p>Klien: <strong>Sinarmas Forestry Group — BAP, BMH, SBA Wood Industries</strong> &nbsp;·&nbsp; Kategori: Forestry &amp; Agrikultur — WTP + BWRO Nursery</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>

        <div className="cs-hero ">
          <picture>
            <source srcSet="images/foto-pemasangan-lapangan.webp" type="image/webp" />
            <img src="images/foto-pemasangan-lapangan.jpg" alt="WTP dan BWRO untuk Sinarmas Forestry nursery Palembang Sugihan" />
          </picture>
          <div className="cs-overlay">
            <h2>Sinarmas Forestry Group — BAP, BMH, SBA Wood Industries</h2>
          </div>
        </div>

        <div className="client-logo ">
          <picture>
            <source srcSet="images/logo-app.webp" type="image/webp" />
            <img src="images/logo-app.png" alt="Logo Sinarmas Forestry Group — BAP, BMH, SBA Wood Industries" loading="lazy" />
          </picture>
        </div>

        <div className="cs-stats">
      <div className="cs-stat "><div className="num">20+ proyek</div><div className="lbl">lintas tahun</div></div>
      <div className="cs-stat "><div className="num">3 grup</div><div className="lbl">BAP, BMH, SBAWI</div></div>
      <div className="cs-stat "><div className="num">15-20</div><div className="lbl">m³/jam typical</div></div>
      <div className="cs-stat "><div className="num">Decade+</div><div className="lbl">kemitraan</div></div>
        </div>

        <table className="cs-meta-table ">
      <tbody><tr><th>Klien</th><td>Sinarmas Forestry Group: PT Bumi Andalas Permai (BAP), PT Bumi Mekar Hijau (BMH), PT SBA Wood Industries (SBAWI), PT Sebangun Bumi Andalas WI</td></tr>
      <tr><th>Lokasi Proyek</th><td>Multiple nursery di Sugihan-OKI Palembang (Air Sugihan, Lebong Hitam, Padang Sugihan, Sungai Beyuku, Sungai Gebang, Central Sugihan, Tajung Jati, Simpang Heran, Jelutung, Distrik Sungai Serdang, Kuala Lumpur, Sungai Riding, Muara Sugihan, Simpang Mun, Lebong Hitam Beyuku) plus PT Surya Hutani Jaya di Sebulu Kalimantan Timur</td></tr>
      <tr><th>Tipe Sistem</th><td>Water Treatment Plant (Clarifier), Brackish Water RO, UF System, dan Water Tank Zinc Alum</td></tr>
      <tr><th>Kapasitas Tipikal</th><td>BWRO 15-20 m³/jam per nursery, Clarifier+UF 15 m³/jam, Tank Zinc Alum hingga 533 m³</td></tr>
      <tr><th>Aplikasi</th><td>Air bersih untuk operasional nursery reforestation — irigasi bibit, sanitasi camp, dan kebutuhan domestik camp</td></tr>
      <tr><th>Tahun Pengerjaan</th><td>Berlangsung 2017-2025: termasuk 8+ proyek di 2022, plus instalasi-instalasi di tahun-tahun lain</td></tr>
      <tr><th>Status</th><td>Multiple sistem aktif, kemitraan jangka panjang berlanjut</td></tr>
        </tbody></table>

        <div className="prose max-w-none text-text">

        <h2 id="latar-belakang" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Latar Belakang Sinarmas Forestry</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sinarmas Forestry Group adalah salah satu konglomerat kehutanan terbesar di Indonesia, dengan operasi yang mencakup pulp &amp; paper, plantation, dan reforestation berskala masif. Beberapa entitas utama dalam group:</p>

        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>PT Bumi Andalas Permai (BAP)</strong> — pengelola plantation dan nursery di Sumatra Selatan</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>PT Bumi Mekar Hijau (BMH)</strong> — operasional plantation dan reforestation</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>PT SBA Wood Industries (SBAWI)</strong> — wood industries dan operational support</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>PT Sebangun Bumi Andalas WI</strong> — bagian dari ecosystem operasional</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>PT Surya Hutani Jaya</strong> — operasi forestry di Kalimantan Timur</li>
        </ul>

        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kebutuhan air bersih untuk operasional nursery reforestation sangat besar dan strategis. Setiap nursery menampung jutaan bibit yang membutuhkan irigasi rutin dengan air berkualitas baik. Plus, camp pekerja yang dapat menampung ratusan staff membutuhkan air domestik yang aman.</p>

        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM menjadi <strong>vendor water treatment terpercaya untuk Sinarmas Forestry Group selama satu dekade lebih</strong>, dengan total <strong>20+ proyek WTP, BWRO, dan UF system</strong> yang sudah dikerjakan di berbagai lokasi nursery dan camp.</p>

        <h2 id="tantangan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Tantangan Air di Nursery Sumatra Selatan</h2>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">1. Air Permukaan dengan TOC Tinggi</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sumatra Selatan memiliki banyak lahan gambut, dengan air permukaan yang umumnya berwarna kuning-coklat (humik dan fulvik tinggi), pH asam, dan TOC 10-30 mg/L. Air seperti ini sulit di-treat dengan sistem konvensional dan membutuhkan pendekatan multi-stage.</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">2. Lokasi Remote dengan Akses Terbatas</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Nursery Sinarmas tersebar di lokasi-lokasi remote di Sugihan-OKI yang akses-nya hanya dapat dilakukan via jalan logging, kapal di sungai, atau pengiriman terjadwal. Sistem water treatment harus didelivered sebagai unit lengkap yang dapat dirakit cepat di lokasi dengan resource terbatas.</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">3. Skala Operasi Besar</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Setiap nursery dapat menampung jutaan bibit dengan kebutuhan irigasi 15-50 m³/jam. Plus camp pekerja dengan ratusan staff membutuhkan tambahan air domestik. Total kebutuhan per nursery dapat 200-500 m³/hari.</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">4. Operasi 24/7 dengan Limited Engineering Support</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Nursery beroperasi terus-menerus, tapi tidak ada water treatment specialist permanen di lapangan. Sistem harus dirancang dengan automation tinggi dan dapat dioperasikan oleh teknisi general. Plus support remote dari TSM Bekasi.</p>

        <h2 id="proyek-utama" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Proyek Utama yang TSM Kerjakan</h2>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">2017 — Awal Kemitraan</h3>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">SWRO 500 LPH × 4 unit untuk PT Bumi Andalas Permai — 4 site (Air Sugihan, Tajung Jati, Simpang Heran, Jelutung) — Januari 2017</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">BWRO 210 LPH untuk PT Sebangun Bumi Andalas — Januari 2017</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">SWRO 1.000 LPH × 2 unit untuk PT Bumi Andalas Permai (Site RAM dan DBT) — Juli 2016</li>
        </ul>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">2018 — Ekspansi WTP</h3>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Clarifier &amp; BWRO 15 m³/jam untuk SBA Wood Industries — Lebong Hitam, Juni 2018</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Clarifier &amp; UF system 15 m³/jam × 2 set untuk Bumi Andalas Permai — Air Sugihan, Juli 2018</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Clarifier &amp; UF 15 m³/jam untuk Bumi Mekar Hijau — Site Beyuku, Agustus 2018</li>
        </ul>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">2020 — WTP Cluster di OKY</h3>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">WTP Klarifier dan UF system 15 m³/day untuk Bumi Andalas Permai Baung Blok D — Januari 2020</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">WTP Klarifier dan RO System 40 m³/day untuk Bumi Andalas Permai — Site Central Baung, Maret 2020</li>
        </ul>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">2022 — Mega Year (8+ Proyek)</h3>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">BWRO 20 m³/jam × 2 unit untuk Bumi Andalas Permai — Nursery Central Sugihan-OKI, Januari 2022</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">BWRO 15 m³/jam × 4 unit untuk Bumi Andalas Permai — Nursery Air Sugihan, Januari 2022</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">BWRO 15 m³/jam × 2 unit untuk SBA Wood Industries — Nursery Sungai Beyuku, Maret 2022</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">BWRO 20 m³/jam × 2 unit untuk Bumi Mekar Hijau — Nursery Lebong Hitam, Maret 2022</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">BWRO 20 m³/jam × 1 unit untuk Bumi Mekar Hijau — Nursery Sungai Gebang, Maret 2022</li>
        </ul>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">2023 — Multiple WTP per Distrik</h3>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">WTP 1 m³/jam + Rumah WTP untuk BMH — Distrik Sungai Serdang, Agustus 2023</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">WTP 1 m³/jam + Rumah WTP untuk SBAWI — Distrik Kuala Lumpur, Agustus 2023</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">WTP 4 m³/jam + Rumah WTP untuk SBAWI — Distrik Sungai Riding, Agustus 2023</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">WTP 1 m³/jam + Rumah WTP untuk SBAWI — Simpang Mun, Agustus 2023</li>
        </ul>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">2025 — Ekspansi ke Kalimantan</h3>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">BWRO 20 m³/jam × 2 unit untuk Sebangun Bumi Andalas WI — Nursery Lebong Hitam, Agustus 2025</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">BWRO 20 m³/jam untuk Bumi Mekar Hijau — Nursery Padang Sugihan, Agustus 2025</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Water Tank Zinc Alum 533 m³ × 2 unit untuk Surya Hutani Jaya — Nursery Sebulu Kaltim, September 2025</li>
        </ul>

        <h2 id="konfigurasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Konfigurasi Standar</h2>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Untuk WTP Clarifier + UF (Air Permukaan / Sungai)</h3>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Coagulation-flocculation dengan PAC dan polymer dosing</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Tube settler clarifier untuk separation flok</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Multi-media filter untuk polishing</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">UF hollow fiber sebagai final treatment</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Output siap untuk irigasi atau treatment lanjut RO</li>
        </ul>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Untuk BWRO 15-20 m³/jam (Air Sumur Payau)</h3>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Pre-treatment lengkap (filter + softener)</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">BWRO single-pass dengan recovery 75%</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Output TDS &lt;100 ppm untuk irigasi premium dan air domestik</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Storage tank fiber atau steel sesuai kebutuhan</li>
        </ul>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Tank Storage</h3>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Water Tank Zinc Alum dengan kapasitas 100-533 m³</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Untuk PT Sasa Inti, PT Bumi Mekar Hijau, PT Surya Hutani Jaya</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Material zinc-aluminum coated steel — durable di kondisi tropis</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Modular construction untuk delivery ke lokasi remote</li>
        </ul>

        <h2 id="benefit" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Benefit Strategic untuk Sinarmas Forestry</h2>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Operational continuity</strong> — Nursery yang tidak terkendala suplai air dapat beroperasi sesuai schedule reforestation</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Bibit quality</strong> — Air berkualitas baik mendukung tingkat survival bibit yang tinggi saat dipindah ke lapangan</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Worker welfare</strong> — Camp dengan air domestik yang aman menjaga health staff untuk produktivitas optimal</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Compliance lingkungan</strong> — Sistem yang dirancang baik tidak menyebabkan pencemaran air baku lokal</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Single vendor relationship</strong> — Konsolidasi pengadaan ke satu vendor (TSM) memberikan efisiensi pembelian dan support</li>
        </ul>
    

<h2 id="faq-sinarmas" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Mengapa nursery membutuhkan sistem water treatment yang sophisticated?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tiga alasan utama: (1) Bibit muda sensitif terhadap kualitas air — air dengan konduktivitas tinggi atau kontaminan dapat menurunkan tingkat survival saat transplant. (2) Volume kebutuhan besar (200-500 m³/hari per nursery), tidak feasible dipasok dari sumber eksternal. (3) Lokasi remote tidak memiliki akses ke utility eksternal, jadi water treatment onsite adalah keharusan operasional.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa beda WTP Clarifier vs BWRO untuk nursery?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tergantung sumber air baku. Untuk air permukaan/sungai (TOC tinggi, padatan tersuspensi tinggi): WTP Clarifier + UF cukup, output baik untuk irigasi. Untuk air sumur dengan TDS tinggi atau brackish: BWRO diperlukan untuk mengurangi mineral. Banyak nursery TSM menggunakan kombinasi: WTP Clarifier untuk operational water (irigasi, cleaning), plus BWRO untuk air domestik di camp (air minum, mandi, masak).</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Bagaimana logistik delivery ke nursery di Sugihan-OKI?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sangat menantang. Sugihan-OKI terletak di area tambang batubara dan plantation yang akses-nya: (1) Truk dari Pelabuhan Palembang (1,5-2 hari di musim hujan), (2) Beberapa lokasi memerlukan transport via sungai dengan kapal kecil. TSM memiliki pengalaman delivery rutin ke area ini melalui partnership dengan logistic provider lokal. Pre-assembly maksimal di workshop Bekasi mengurangi assembly onsite yang sulit dilakukan di lapangan.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah TSM melakukan service rutin di nursery remote?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ya, dengan jadwal yang disesuaikan: kunjungan engineer setiap 6-12 bulan untuk preventive maintenance, supplie filter dan kimia rutin yang dikirim batch (untuk efisiensi logistik), training operator nursery untuk basic operation dan troubleshooting, plus remote support via WhatsApp dan satellite phone untuk emergency. Dengan kemitraan jangka panjang, banyak nursery memiliki teknisi yang sudah trained intensive untuk operasi mandiri.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah model ini dapat di-replicate untuk forestry/plantation lain?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sangat bisa. Indonesia memiliki banyak operasi plantation dan reforestation berskala besar (sawit, karet, akasia, jati) yang membutuhkan water treatment serupa. Konfigurasi WTP + BWRO yang TSM gunakan untuk Sinarmas dapat di-customize untuk: pulp &amp; paper plantation, palm oil plantation, rubber plantation, mining reforestation. Track record dengan Sinarmas Forestry adalah referensi terpercaya untuk klien sejenis.</p>


          <div style={{"marginTop":"2rem","padding":"2rem","background":"var(--ice)","borderRadius":"12px","borderLeft":"4px solid var(--accent)"}}>
            <h3 style={{"marginBottom":".75rem","color":"var(--navy)"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Membutuhkan WTP untuk Plantation / Forestry?</h3>
            <p style={{"marginBottom":"1.25rem","color":"var(--muted)","fontSize":".92rem"}} className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tim engineering TSM siap mendiskusikan kebutuhan water treatment Anda dengan referensi proyek serupa yang sudah terbukti. Konsultasi awal gratis tanpa komitmen.</p>
            <Link style={{"display":"inline-block","padding":".85rem 2rem","background":"var(--blue)","color":"#fff","borderRadius":"8px","fontWeight":"700","fontSize":".96rem"}} to="/kontak"><ClipboardList className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Konsultasi Proyek Anda →</Link>
          </div>

        </div>
      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#latar-belakang">Latar Belakang Sinarmas</Link></li>
            <li><Link href="#tantangan">Tantangan Operasi</Link></li>
            <li><Link href="#proyek-utama">Proyek Lintas Tahun</Link></li>
            <li><Link href="#konfigurasi">Konfigurasi Standar</Link></li>
            <li><Link href="#benefit">Benefit Strategic</Link></li>
            <li><Link href="#faq-sinarmas">FAQ</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Produk Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/produk/ro-industri">→ Sistem RO Industri</Link></li>
            <li><Link to="/produk/uf">→ Sistem Ultrafiltrasi (UF)</Link></li>
            <li><Link to="/produk/limbah">→ WTP &amp; Limbah</Link></li>
            <li><Link to="/produk/membran">→ Membran BWRO</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Studi Kasus &amp; Industri</h4>
          <ul className="flex flex-col">
            <li><Link to="/artikel/water-treatment-kalimantan">→ Water Treatment Air Gambut</Link></li>
            <li><Link to="/industri/agrikultur">→ Solusi Agrikultur</Link></li>
            <li><Link to="/industri/manufaktur">→ Solusi Industri Berat</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>

    </>
  );
};

export default PortoSinarmasForestry;
