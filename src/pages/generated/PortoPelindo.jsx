import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList } from 'lucide-react';


const PortoPelindo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.cs-hero{position:relative;border-radius:14px;overflow:hidden;margin-bottom:2rem;height:380px}
.cs-hero img{width:100%;height:100%;object-fit:cover}
.cs-hero .cs-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(10,34,64,.85),rgba(10,34,64,.15));display:flex;align-items:flex-end;padding:2rem;color:#fff}
.cs-hero .cs-overlay h2{font-family:'Barlow Condensed',sans-serif;font-size:2.2rem;font-weight:900;color:#fff;letter-spacing:.01em}
.cs-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1rem;margin:2rem 0}
.cs-stat{background:var(--ice);border:1px solid var(--border);border-radius:10px;padding:1.2rem 1rem;text-align:center}
.cs-stat .num{font-family:'Barlow Condensed',sans-serif;font-size:1.8rem;font-weight:900;color:var(--blue);line-height:1}
.cs-stat .lbl{font-size:.74rem;color:var(--muted);margin-top:.4rem;text-transform:uppercase;letter-spacing:.04em}
.cs-gallery{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:.7rem;margin:1.5rem 0}
.cs-gallery img{width:100%;height:200px;object-fit:cover;border-radius:8px;cursor:pointer;transition:transform .2s,opacity .2s}
.cs-gallery img:hover{opacity:.88;transform:translateY(-2px)}
.cs-meta-table{width:100%;border-collapse:collapse;margin:1.5rem 0}
.cs-meta-table th,.cs-meta-table td{padding:.75rem 1rem;border:1px solid var(--border);font-size:.88rem;text-align:left}
.cs-meta-table th{background:var(--gray);color:var(--navy);font-weight:700;width:32%}
.art-layout{display:grid;grid-template-columns:1fr 290px;gap:3rem;align-items:start}
.art-sticky{position:sticky;top:88px}
@media(max-width:1024px){.art-layout{grid-template-columns:1fr}.art-sticky{position:static}.cs-hero{height:260px}}
/* Lightbox */
.lb{position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:100;display:none;align-items:center;justify-content:center;padding:3rem 2rem}
.lb.active{display:flex}
.lb img{max-width:95vw;max-height:90vh;border-radius:8px;object-fit:contain}
.lb-close{position:absolute;top:1.5rem;right:2rem;color:#fff;font-size:2rem;cursor:pointer;background:none;border:none}

` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/portofolio">Portofolio</Link> › Studi Kasus</div>
    <h1>Pelindo Jakarta: Sistem SWRO 1.100 m³/hari untuk Pelabuhan Terbesar Indonesia</h1>
    <p>Klien: <strong>PT EPI – Pelindo Jakarta</strong> &nbsp;·&nbsp; Kategori: SWRO Skala Besar — Pelabuhan</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>

        <div className="cs-hero ">
          <picture>
            <source srcSet="images/porto-pelindo-1.webp" type="image/webp" />
            <img src="images/porto-pelindo-1.jpg" alt="Pelindo Jakarta: Sistem SWRO 1.100 m³/hari untuk Pelabuhan Terbesar Indonesia" />
          </picture>
          <div className="cs-overlay">
            <h2>PT EPI – Pelindo Jakarta</h2>
          </div>
        </div>

        <div className="cs-stats">
      <div className="cs-stat "><div className="num">1.100</div><div className="lbl">m³/hari kapasitas</div></div>
      <div className="cs-stat "><div className="num">99,5%</div><div className="lbl">rejection rate</div></div>
      <div className="cs-stat "><div className="num">2023</div><div className="lbl">tahun selesai</div></div>
      <div className="cs-stat "><div className="num">24/7</div><div className="lbl">operasi kontinu</div></div>
        </div>

        <table className="cs-meta-table ">
      <tbody><tr><th>Klien</th><td>PT Energi Pelabuhan Indonesia (PT EPI) – bagian dari Pelindo Group</td></tr>
      <tr><th>Lokasi</th><td>Pelabuhan Tanjung Priok, Jakarta Utara</td></tr>
      <tr><th>Tipe Sistem</th><td>Optimalisasi sistem Sea Water Reverse Osmosis (SWRO) skala besar existing</td></tr>
      <tr><th>Kapasitas Produk</th><td>1.100 m³/hari (~46 m³/jam continuous)</td></tr>
      <tr><th>Sumber Air</th><td>Air laut Tanjung Priok (TDS ~33.000 ppm)</td></tr>
      <tr><th>Kualitas Output</th><td>TDS &lt; 500 ppm, layak minum (Permenkes 492/2010)</td></tr>
      <tr><th>Konfigurasi</th><td>DAF + UF + SWRO 2-pass + ERD + Remineralisasi</td></tr>
      <tr><th>Tahun Pengerjaan</th><td>Agustus 2023 (optimalisasi)</td></tr>
      <tr><th>Status</th><td>Operasi normal pasca-optimalisasi</td></tr>
        </tbody></table>

        <div className="prose max-w-none text-text">


        <h2 id="latar-belakang" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Latar Belakang Proyek</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pelabuhan Tanjung Priok adalah pelabuhan tersibuk di Indonesia, melayani lebih dari 60% peti kemas nasional dengan ribuan kapal yang berlabuh setiap bulan. Operasional pelabuhan modern membutuhkan pasokan air bersih dalam volume besar untuk berbagai keperluan: <strong>pengisian air kapal yang berlabuh, pembersihan area pelabuhan, sistem firefighting, kebutuhan kantor dan fasilitas operasional, hingga proses-proses tertentu di terminal cair</strong>.</p>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Bergantung pada pasokan air dari PDAM untuk kebutuhan sebesar ini menghadirkan beberapa tantangan: <strong>kapasitas yang terbatas pada jam-jam puncak, fluktuasi tekanan, biaya yang meningkat seiring waktu, dan ketergantungan pada pihak luar untuk operasi yang sangat strategis</strong>. PT EPI sebagai entitas yang mengelola layanan energi dan utilitas di lingkungan Pelindo memutuskan membangun fasilitas desalinasi air laut sendiri — memanfaatkan sumber air tak terbatas yang tepat di samping pelabuhan.</p>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM dipercaya untuk pekerjaan <strong>Optimalisasi SWRO unit C kapasitas 1.100 m³/hari</strong> di Pelindo Tanjung Priok, dengan target peningkatan reliability, efisiensi energi, dan performance sistem yang sudah beroperasi. Pekerjaan diselesaikan pada Agustus 2023 setelah serangkaian engineering review, persiapan suku cadang dan komponen pengganti, dan periode pelaksanaan yang dirancang untuk meminimalkan disrupsi operasional pelabuhan.</p>

        <h2 id="tantangan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Tantangan Engineering</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">SWRO 1.100 m³/hari adalah salah satu instalasi terbesar yang TSM tangani — lebih dari 5x kapasitas SWRO komersial pada umumnya. Beberapa tantangan engineering kritis yang harus diselesaikan:</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">1. Kualitas Air Laut Tanjung Priok</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Air laut di area pelabuhan tidak ideal — kandungan padatan tersuspensi tinggi, kontaminan organik dari aktivitas pelabuhan, dan fluktuasi salinitas musiman akibat masukan air sungai. Pre-treatment harus jauh lebih agresif dibanding SWRO untuk lokasi pulau terpencil yang air lautnya bersih.</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">2. Footprint Terbatas</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Lokasi instalasi adalah area pelabuhan yang sangat berharga — setiap meter persegi diperhitungkan. TSM harus mendesain sistem dengan footprint efisien, menggunakan konfigurasi multi-storey dengan pre-treatment di lantai bawah dan RO + post-treatment di lantai atas.</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">3. Operasi 24/7 Tanpa Toleransi Downtime</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pelabuhan beroperasi terus-menerus dan tidak dapat menunggu maintenance terjadwal yang panjang. Sistem harus dirancang dengan redundancy: dua train RO yang dapat beroperasi independen, automatic switching, dan kapasitas storage tank cukup untuk buffer 8-12 jam jika satu train sedang shutdown.</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">4. Efisiensi Energi pada Skala Besar</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk kapasitas 1.100 m³/hari, perbedaan 1 kWh/m³ saja berarti penghematan biaya listrik sekitar Rp 800 juta per tahun. ERD (Energy Recovery Device) menjadi mandatory, ditambah seleksi membran dan pompa yang dioptimasi untuk operating point spesifik.</p>

        <h2 id="solusi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Solusi yang Diimplementasikan</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Setelah analisis mendalam dan pilot test 4 minggu di lokasi, TSM merekomendasikan konfigurasi berikut:</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Pre-treatment Bertingkat</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Air laut diintake dari kedalaman 4-6 meter melalui pipa intake dengan screen kasar di muara. Kemudian masuk ke:</p>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Coagulation-flocculation</strong> dengan dosing FeCl₃ untuk mengikat koloid dan organik</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>DAF (Dissolved Air Flotation)</strong> untuk pemisahan flok dan ganggang</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Multi-media filter</strong> dual-bed dengan pasir + antrasit</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Ultrafiltrasi (UF)</strong> hollow fiber sebagai polishing — menjamin SDI &lt;3 di feed RO</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Cartridge filter 5 µm</strong> sebagai protection terakhir sebelum RO</li>
        </ul>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">SWRO 2-Pass dengan ERD</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Konfigurasi RO dirancang sebagai dua train paralel, masing-masing 550 m³/hari, untuk redundancy dan flexibility:</p>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pass 1</strong> — High-pressure pump axial piston Danfoss APP 78 + ERD isobaric chamber. Membran SWRO Dow Filmtec SW30HRLE-440i.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pass 2</strong> — Booster pump untuk treatment lanjut, mengejar TDS produk &lt;500 ppm konsisten.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Recovery</strong> — 42% pada pass 1, 90% pada pass 2 — total recovery sistem 38%.</li>
        </ul>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Post-treatment &amp; Storage</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Permeate hasil RO masih korosif (low TDS dan low Ca/Mg), sehingga butuh remineralisasi sebelum distribusi:</p>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Remineralisasi calcite + dolomite untuk menambahkan Ca dan Mg hingga TDS 80-150 ppm</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">pH adjustment dengan dosing CO₂ scrubber + NaOH</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Klorinasi sebagai disinfeksi residual untuk distribusi</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Storage tank 500 m³ untuk buffer kebutuhan operasional 12 jam</li>
        </ul>

        <h2 id="hasil" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Hasil &amp; Dampak Operasional</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Setelah optimalisasi selesai pada Agustus 2023 dan periode validasi performance, sistem mencapai target operasional yang ditetapkan:</p>

        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kapasitas produk</strong> — Konsisten 1.100 m³/hari pada beban penuh, dengan turn-down ratio 30-100% sesuai demand</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kualitas produk</strong> — TDS 380-450 ppm (target &lt;500), pH 7,2-7,8, klorin sisa 0,3-0,5 mg/L</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Konsumsi energi</strong> — 3,8 kWh/m³ rata-rata, dengan recovery energi dari ERD &gt;55%</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Availability</strong> — &gt;98% sejak commissioning, downtime hanya untuk preventive maintenance terjadwal</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Biaya operasional</strong> — sekitar Rp 18.000 per m³ termasuk listrik, kimia, dan service. Jauh lebih ekonomis dibanding pasokan PDAM jangka panjang</li>
        </ul>

        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Selain pencapaian teknis, proyek ini menjadi <strong>showcase kemampuan EPC water treatment skala besar di Indonesia</strong> — bahwa untuk infrastruktur strategis sekelas pelabuhan, mitra lokal dapat memberikan engineering quality yang setara EPC internasional dengan keuntungan akses, support, dan biaya yang lebih kompetitif.</p>

        <h2 id="lessons-learned" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Lessons Learned untuk Proyek Sejenis</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Beberapa insight engineering dari proyek ini yang berlaku untuk SWRO skala besar di kawasan industri/pelabuhan:</p>

        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pre-treatment tidak boleh under-designed</strong> — Air laut di kawasan industri jauh lebih sulit dari air laut pulau. Investasi tambahan di DAF + UF terbayar dalam 6-12 bulan dari penghematan penggantian membran.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Redundancy melalui multi-train</strong> — Dua train 50% lebih baik dari satu train 100% untuk reliability. Maintenance dapat dilakukan tanpa shutdown total.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>ERD adalah mandatory pada skala &gt;200 m³/hari</strong> — ROI energi recovery 2-3 tahun. Tidak ada alasan teknis untuk tidak memasangnya.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>SCADA + Remote Monitoring</strong> — Untuk fasilitas yang dioperasikan tim shift, SCADA dengan trend, alarm management, dan remote access membantu engineer senior mengevaluasi kinerja dari mana saja.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Service contract jangka panjang</strong> — Investasi sebesar ini perlu dijaga dengan service contract yang memastikan pre-treatment optimal, kimia tepat, dan early intervention saat ada anomali.</li>
        </ul>
    

          <h2 id="galeri" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Galeri Foto Proyek</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Foto sistem dan instalasi di lokasi:</p>
          <div className="cs-gallery ">
      <picture><source srcSet="images/porto-pelindo-1.webp" type="image/webp" /><img src="images/porto-pelindo-1.jpg" alt="Sistem SWRO Pelindo Jakarta tampak depan"  loading="lazy" /></picture>
      <picture><source srcSet="images/porto-pelindo-2.webp" type="image/webp" /><img src="images/porto-pelindo-2.jpg" alt="Detail high-pressure pump dan pressure vessel SWRO"  loading="lazy" /></picture>
      <picture><source srcSet="images/porto-pelindo-3.webp" type="image/webp" /><img src="images/porto-pelindo-3.jpg" alt="Ruang panel kontrol PLC dan SCADA"  loading="lazy" /></picture>
          </div>

<h2 id="faq-pelindo" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa cakupan pekerjaan optimalisasi SWRO 1.100 m³/hari di Pelindo?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pekerjaan optimalisasi mencakup beberapa lingkup: assessment kondisi sistem dan diagnosis area improvement, perencanaan upgrade komponen kritis (membran, instrumentation, pre-treatment), penyediaan suku cadang dan part pengganti, eksekusi penggantian dan upgrade dengan minimum disruption, performance test dan validasi setelah pekerjaan, plus dokumentasi as-built. Tujuan utama: meningkatkan reliability, efisiensi energi, dan output quality dari sistem existing tanpa membangun ulang dari nol.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa beda SWRO 1.100 m³/hari ini dengan SWRO untuk pulau terpencil?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Skala dan kompleksitas sangat berbeda. SWRO pulau (10-50 m³/hari) biasanya kontainer plug-and-play, single train, recovery 30-35%, footprint kecil. SWRO skala pelabuhan butuh multi-train dengan redundancy, recovery yang dioptimasi untuk biaya energi (35-42%), pre-treatment lebih kompleks karena air laut industri lebih kotor, dan SCADA penuh untuk operasi shift.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa biaya operasional sistem ini per tahun?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pada beban penuh 1.100 m³/hari × 365 hari = 401.500 m³/tahun. Dengan opex Rp 18.000/m³, total opex sekitar Rp 7,2 milyar/tahun. Komponennya: listrik 60%, kimia 15%, penggantian membran (amortized 5-7 tahun) 12%, service contract 8%, lainnya 5%. Bandingkan dengan pasokan PDAM untuk volume sebesar ini yang biayanya bisa 2-3x lipat dengan kualitas yang lebih fluktuatif.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah TSM bisa membangun SWRO yang lebih besar lagi?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ya. Sistem 1.100 m³/hari ini menggunakan 2 train @ 550 m³/hari. Untuk kapasitas lebih besar, kami dapat memparalelkan lebih banyak train (4-6 train) hingga total 5.000+ m³/hari. Untuk proyek di atas 5.000 m³/hari, biasanya konfigurasi shifting ke distillation hybrid atau MED-RO yang lebih ekonomis pada skala mega.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah klien Pelindo lain bisa adopt sistem serupa?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sangat memungkinkan. Pelabuhan-pelabuhan besar lain di Indonesia (Tanjung Perak, Belawan, Makassar, Bitung) memiliki kebutuhan air operasional yang serupa. Konfigurasi ini dapat di-replicate dengan adjustment skala dan customization untuk kondisi air laut lokal. TSM siap mendiskusikan untuk fasilitas Pelindo Group yang lain.</p>


          <div style={{"marginTop":"2rem","padding":"2rem","background":"var(--ice)","borderRadius":"12px","borderLeft":"4px solid var(--accent)"}}>
            <h3 style={{"marginBottom":".75rem","color":"var(--navy)"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Tertarik Solusi Serupa untuk Operasi Anda?</h3>
            <p style={{"marginBottom":"1.25rem","color":"var(--muted)","fontSize":".92rem"}} className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tim engineering TSM siap mendiskusikan kebutuhan water treatment Anda dengan referensi proyek serupa yang sudah terbukti. Konsultasi awal gratis tanpa komitmen.</p>
            <Link style={{"display":"inline-block","padding":".85rem 2rem","background":"var(--blue)","color":"#fff","borderRadius":"8px","fontWeight":"700","fontSize":".96rem"}} to="/kontak"><ClipboardList className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Konsultasi Proyek Anda →</Link>
          </div>

        </div>
      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#latar-belakang">Latar Belakang</Link></li>
            <li><Link href="#tantangan">Tantangan Engineering</Link></li>
            <li><Link href="#solusi">Solusi Implementasi</Link></li>
            <li><Link href="#hasil">Hasil &amp; Dampak</Link></li>
            <li><Link href="#lessons-learned">Lessons Learned</Link></li>
            <li><Link href="#faq-pelindo">FAQ</Link></li>
            <li><Link href="#galeri">Galeri Foto</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Produk Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/produk/desalinasi">→ SWRO Desalinasi Air Laut</Link></li>
            <li><Link to="/produk/membran">→ Membran Dow Filmtec SWRO</Link></li>
            <li><Link to="/produk/pompa">→ Pompa Danfoss APP + ERD</Link></li>
            <li><Link to="/produk/uf">→ Ultrafiltrasi (UF) Pre-treatment</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Artikel &amp; Industri Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/artikel/desalinasi-solusi-pulau">→ Desalinasi untuk Indonesia</Link></li>
            <li><Link to="/industri/maritim">→ Solusi Maritim &amp; Offshore</Link></li>
            <li><Link to="/portofolio">→ Lihat Semua Portfolio</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>
<div className="lb" id="lightbox" >
  <button className="lb-close" >×</button>
  <img id="lbImg" src="/images/placeholder.webp" alt="" />
</div>

    </>
  );
};

export default PortoPelindo;
