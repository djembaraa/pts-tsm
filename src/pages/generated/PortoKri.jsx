import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList } from 'lucide-react';

const PortoKri = () => {
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
    <h1>Watermaker SWRO untuk Kapal Perang TNI AL:<br />KRI AMY dan Armada Indonesia</h1>
    <p>Klien: <strong>TNI Angkatan Laut Republik Indonesia</strong> &nbsp;·&nbsp; Kategori: SWRO Maritim — Kapal Perang TNI AL</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>

        <div className="cs-hero ">
          <picture>
            <source srcSet="images/porto-kri-amy-1.webp" type="image/webp" />
            <img src="images/porto-kri-amy-1.jpg" alt="Watermaker SWRO TSM untuk Kapal Perang TNI AL — KRI AMY Surabaya" />
          </picture>
          <div className="cs-overlay">
            <h2>TNI Angkatan Laut RI</h2>
          </div>
        </div>

        <div className="cs-stats">
      <div className="cs-stat "><div className="num">24</div><div className="lbl">ton/hari per kapal</div></div>
      <div className="cs-stat "><div className="num">2</div><div className="lbl">unit KRI dilayani</div></div>
      <div className="cs-stat "><div className="num">99,4%</div><div className="lbl">rejection rate</div></div>
      <div className="cs-stat "><div className="num">BKI</div><div className="lbl">tersertifikasi</div></div>
        </div>

        <table className="cs-meta-table ">
      <tbody><tr><th>Klien</th><td>TNI Angkatan Laut Republik Indonesia — Armada Kapal Perang</td></tr>
      <tr><th>Lokasi</th><td>Berbagai pangkalan TNI AL — operasional di perairan Indonesia</td></tr>
      <tr><th>Tipe Sistem</th><td>Sea Water Reverse Osmosis (SWRO) Watermaker untuk Kapal Perang</td></tr>
      <tr><th>Kapasitas Produk</th><td>2 ton/hari (kapal patroli) hingga 30 ton/hari (kapal kombatan), tergantung kelas</td></tr>
      <tr><th>Sumber Air</th><td>Air laut langsung intake dari sea chest kapal</td></tr>
      <tr><th>Kualitas Output</th><td>TDS &lt; 500 ppm, layak minum awak kapal sesuai Permenkes</td></tr>
      <tr><th>Konfigurasi</th><td>Compact pre-treatment + SWRO + ERD + post-treatment, marine grade</td></tr>
      <tr><th>Sertifikasi</th><td>Sesuai standar BKI dan persyaratan operasional TNI AL</td></tr>
      <tr><th>Status</th><td>Multiple unit aktif beroperasi di armada TNI AL</td></tr>
        </tbody></table>

        <div className="prose max-w-none text-text">


        <h2 id="latar-belakang" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Latar Belakang Proyek</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kapal Perang Republik Indonesia (KRI) yang beroperasi di laut lepas membutuhkan <strong>pasokan air tawar mandiri</strong> selama misi operasional. Bagi armada TNI Angkatan Laut yang menjaga kedaulatan perairan Indonesia — dari Selat Malaka hingga Laut Arafura — kemampuan menghasilkan air tawar langsung dari air laut adalah keniscayaan strategis. KRI tidak dapat bergantung pada pengisian air dari pelabuhan saat sedang patroli atau operasi panjang.</p>

        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM telah dipercaya TNI AL untuk membangun watermaker SWRO bagi <strong>lebih dari 12 unit Kapal Perang RI</strong> dari berbagai kelas dan kapasitas. Beberapa unit yang tercatat dalam portofolio TSM antara lain:</p>

        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>KRI AMY</strong> — Pangkalan Surabaya, SWRO 20 ton/hari (Juli 2023)</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>KRI Dewa Kembar</strong> — Dismatal Pondok Dayung, SWRO 24 ton/hari × 2 unit (Maret 2022)</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>KRI Sultan Iskandar Muda 367</strong> — SWRO 30 ton/hari (Agustus 2024)</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>KRI Kambani</strong> — SWRO 30 ton/hari (November 2024)</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>KRI TSR 542</strong> — SWRO 30 ton/hari × 2 unit (November 2024)</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>KRI Patimura, KRI Cut Nyak Dien, KRI Sutanto, KRI Tengku Umar, KRI Sutedi Senoputra 378, KRI Silas Papare 386, KRI SPICA</strong> — Pangkalan Fasharkan Jakarta, SWRO 2.000 LPD masing-masing (Juni 2020)</li>
        </ul>

        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Setiap unit dirancang sesuai kebutuhan kelas kapal — dari watermaker compact 2.000 LPD untuk kapal patroli, hingga sistem SWRO 30 TPD untuk kapal kombatan dan amfibi besar. Halaman ini fokus pada studi kasus <strong>KRI AMY Surabaya</strong> sebagai contoh implementasi standar yang menjadi dasar untuk berbagai unit lain.</p>

        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Yang membedakan watermaker untuk kapal perang dari sistem SWRO darat adalah persyaratan operasional militer yang ketat: <strong>tahan getaran tinggi, footprint sangat compact, beroperasi di kondisi laut buruk (sea state tinggi), dan tahan terhadap kondisi salt-spray korosif</strong>. Dokumen sertifikasi BKI dan persetujuan teknis TNI AL adalah syarat mutlak.</p>

        <h2 id="tantangan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Tantangan Watermaker Kapal Perang</h2>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">1. Footprint &amp; Berat yang Sangat Terbatas</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Setiap meter kubik dan setiap kilogram di kapal perang berharga. Watermaker harus dirancang dengan <strong>footprint minimal</strong> menggunakan komponen marine-grade yang compact: high-pressure pump axial piston bukan multi-stage centrifugal yang besar, vessel pendek dengan elemen membran 4040 atau 8021, dan piping yang ringkas.</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">2. Tahan Getaran &amp; Sea State</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kapal di laut tidak diam — terdapat getaran konstan dari mesin propulsi dan gerakan kapal akibat ombak. Sistem watermaker harus <strong>vibration-resistant</strong> di semua komponen: pompa dengan flexible coupling, vessel mounting dengan damping pad, piping dengan support yang adequate, dan koneksi listrik dengan cable strain relief. Sistem juga harus dapat beroperasi pada sea state hingga 5 (gelombang 2,5-4 meter) tanpa hilangnya kinerja.</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">3. Material Tahan Korosi Salt-Spray</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Lingkungan kapal perang sangat korosif. Semua komponen yang terpapar atmosfer kapal harus <strong>marine-grade SS-316L atau super duplex</strong>. Komponen yang kontak air laut menggunakan material yang lebih tinggi lagi (titanium untuk heat exchanger jika ada, super duplex untuk vessel dan piping). Konektor listrik dan sensor menggunakan IP66+ rating.</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">4. Reliability di Lingkungan Operasional</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Saat di laut, watermaker tidak dapat menerima service eksternal. Kerusakan harus dapat diperbaiki oleh awak kapal dengan tools dan spare parts onboard. Ini berarti <strong>desain yang serviceable</strong>, dokumentasi maintenance yang detail, training operator yang mendalam, dan kit spare parts strategis yang dibawa di kapal.</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">5. Sertifikasi BKI &amp; Standar Militer</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Setiap peralatan di KRI harus tersertifikasi sesuai standar Biro Klasifikasi Indonesia (BKI) dan persyaratan TNI AL. Ini mencakup: dokumentasi material certificate untuk vessel pressure-bearing, electrical certification untuk panel dan kabel, EMC compliance untuk komponen elektronik, dan testing performance pada kondisi operasional.</p>

        <h2 id="solusi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Solusi yang Diimplementasikan</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM merancang watermaker SWRO compact yang memenuhi semua persyaratan tersebut:</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Pre-treatment Compact</h3>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sea chest filter</strong> stainless steel dengan basket strainer untuk debris kasar</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Cartridge filter 25 µm + 5 µm</strong> dual-stage untuk pembersihan halus</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Dosing antiscalant</strong> proporsional dengan flow</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Dosing biocide non-oxidizing</strong> jika kapal port-call lama (untuk mencegah bio-fouling)</li>
        </ul>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tidak menggunakan multi-media filter atau UF karena keterbatasan footprint — pre-treatment di-design untuk air laut lepas yang relatif bersih (bukan air pelabuhan industri).</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">SWRO Compact Skid</h3>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>High-pressure pump</strong> Cat Pumps plunger atau Danfoss APP axial piston (tergantung versi) untuk efisiensi optimal pada skala compact</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Vessel SS-316L atau super duplex</strong> dengan elemen Dow Filmtec SW30HRLE-4040 (compact 4-inch)</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>ERD</strong> turbocharger untuk recovery energi pada skala ini</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Recovery</strong> 35-40% — optimal untuk kapal yang punya akses tak terbatas ke air laut tapi terbatas listrik</li>
        </ul>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Post-treatment &amp; Storage</h3>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Remineralisasi</strong> calcite cartridge untuk menambah Ca dan menetralisir pH</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>UV sterilizer</strong> untuk disinfeksi terminal sebelum storage</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Storage tank</strong> SS-316L dengan vent filter dan UV recirculation</li>
        </ul>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Marine-Grade Construction</h3>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Skid frame painted dengan marine 3-layer epoxy</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Semua koneksi listrik dengan IP66+ junction box</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Vibration mount untuk pompa dan vessel</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">HMI dan kontrol dengan IP65 enclosure stainless steel</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Dokumentasi material certificate lengkap untuk audit BKI</li>
        </ul>

        <h2 id="hasil" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Hasil &amp; Dampak Operasional</h2>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kapasitas konsisten</strong> — Output sesuai spesifikasi tiap unit (20-30 ton/hari tergantung kelas KRI) pada kondisi operasi normal, tidak terganggu sea state hingga 5</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kualitas air</strong> — TDS &lt;500 ppm, memenuhi Permenkes 492/2010 untuk air minum</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Operability</strong> — Awak kapal dapat mengoperasikan sistem dengan training 3 hari, troubleshooting dasar dapat dilakukan onboard</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Reliability</strong> — Operasi puluhan ribu jam tanpa kegagalan major sejak commissioning</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Footprint</strong> — Sistem fit dalam ruang mesin yang dialokasikan KRI tanpa modifikasi struktur kapal</li>
        </ul>

        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Yang lebih penting dari angka teknis: <strong>kontribusi terhadap kemandirian operasional KRI</strong> dalam menjalankan tugas menjaga kedaulatan perairan Indonesia. Awak kapal tidak perlu menghitung jatah air saat operasi panjang — mereka memiliki air tawar segar yang dihasilkan langsung dari laut.</p>

        <h2 id="lessons-learned" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Lessons Learned untuk Aplikasi Maritim</h2>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Compact bukan berarti compromise quality</strong> — Engineering watermaker yang baik dapat mencapai kualitas air laut darat dalam footprint sepersepuluh-nya, asalkan komponen kritis (pompa, membran, ERD) tetap tier-1.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Marine-grade adalah investasi, bukan beban</strong> — Komponen marine-grade memang lebih mahal di awal, tapi durability di lingkungan salt-spray jauh lebih baik. Penggantian komponen non-marine setiap 2-3 tahun lebih mahal jangka panjang.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Documentation untuk BKI sangat detail</strong> — Setiap material certificate, weld traceability, electrical certification harus tersedia. Tim TSM telah mengembangkan template dokumentasi yang sesuai BKI sehingga proses approval lebih cepat untuk proyek berikutnya.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Training mendalam untuk awak kapal</strong> — Watermaker di kapal harus dapat dioperasikan dan di-maintenance oleh awak yang bukan engineer. Training 3-5 hari dengan troubleshooting hands-on sangat berharga.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Spare parts kit onboard</strong> — Filter cartridge, O-ring set, sensor calibration kit, dan setidaknya 1 elemen membran spare harus tersedia onboard. Tanpa ini, masalah kecil bisa menjadi masalah besar di tengah laut.</li>
        </ul>
    

          <h2 id="galeri" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Galeri Foto Proyek</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Foto sistem dan instalasi di lokasi:</p>
          <div className="cs-gallery ">
      <picture><source srcSet="images/porto-kri-amy-1.webp" type="image/webp" /><img src="images/porto-kri-amy-1.jpg" alt="SWRO TSM untuk KRI AMY Surabaya"  loading="lazy" /></picture>
      <picture><source srcSet="images/porto-kri-amy-2.webp" type="image/webp" /><img src="images/porto-kri-amy-2.jpg" alt="Detail sistem SWRO compact KRI AMY"  loading="lazy" /></picture>
      <picture><source srcSet="images/porto-kri-amy-3.webp" type="image/webp" /><img src="images/porto-kri-amy-3.jpg" alt="Komponen SWRO marine-grade KRI AMY"  loading="lazy" /></picture>
      <picture><source srcSet="images/porto-kri-dkb-1.webp" type="image/webp" /><img src="images/porto-kri-dkb-1.jpg" alt="Watermaker SWRO TSM di unit KRI lainnya — armada TNI AL"  loading="lazy" /></picture>
      <picture><source srcSet="images/porto-kri-dkb-2.webp" type="image/webp" /><img src="images/porto-kri-dkb-2.jpg" alt="Detail instalasi SWRO compact untuk kapal perang TNI AL"  loading="lazy" /></picture>
          </div>

<h2 id="faq-kri" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa beda watermaker kapal perang dengan SWRO komersial?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Lima perbedaan utama: (1) Footprint &amp; berat — kapal perang sangat terbatas. (2) Vibration resistance — semua komponen harus tahan getaran propulsi. (3) Material — semua eksterior marine-grade SS-316L minimum, eksposur air laut super duplex. (4) Sertifikasi BKI — wajib dengan dokumentasi lengkap. (5) Serviceability onboard — awak kapal harus dapat operasi dan troubleshoot tanpa engineer eksternal.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa konsumsi listrik watermaker KRI ini?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sekitar 5-6 kWh per m³ produksi — lebih tinggi dari SWRO darat skala besar (3-4 kWh/m³) karena skala compact dan ERD turbocharger yang efisiensinya lebih rendah dari ERD isobaric chamber pada SWRO besar. Untuk watermaker 20-30 ton/hari, total konsumsi 100-180 kWh/hari yang masih dalam batas kapasitas listrik kapal.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah watermaker dapat beroperasi saat kapal di port?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ya, bahkan disarankan untuk diaktifkan secara berkala saat di port untuk mencegah biofouling membran. Untuk port yang air laut tercemar industri/pelabuhan, watermaker biasanya di-offline dan kapal mengisi air dari shore connection — kemudian watermaker di-flush dan di-CIP saat keluar port.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa lama umur membran SWRO di kapal?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Dengan operasi yang baik dan flush rutin saat docking, membran SWRO compact di kapal bertahan 4-6 tahun — sedikit lebih singkat dari SWRO darat (5-7 tahun) karena exposure ke variasi kualitas air laut yang lebih luas dan kondisi operasional yang lebih variabel. TSM menyediakan suplai membran replacement sebagai bagian kontrak service.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Bisakah TSM membangun watermaker untuk kapal komersial atau pesiar?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tentu. Konfigurasi dasar sama (compact, marine-grade, vibration-resistant), tapi sertifikasi mungkin berbeda — SOLAS dan IMO untuk kapal komersial internasional, BKI untuk kapal lokal. TSM telah membangun watermaker untuk kapal offshore Wintermar dan kapal pendukung industri migas. Diskusikan kebutuhan spesifik dengan tim engineer kami.</p>


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
            <li><Link href="#tantangan">Tantangan Watermaker Kapal</Link></li>
            <li><Link href="#solusi">Solusi Implementasi</Link></li>
            <li><Link href="#hasil">Hasil &amp; Dampak</Link></li>
            <li><Link href="#lessons-learned">Lessons Learned</Link></li>
            <li><Link href="#faq-kri">FAQ</Link></li>
            <li><Link href="#galeri">Galeri Foto</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Produk Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/produk/desalinasi">→ SWRO Desalinasi</Link></li>
            <li><Link to="/produk/ro-mobile">→ RO Mobile / Kontainer</Link></li>
            <li><Link to="/produk/membran">→ Membran SWRO</Link></li>
            <li><Link to="/produk/pompa">→ Pompa Marine-Grade</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Artikel &amp; Industri Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/artikel/ro-kapal-offshore">→ RO untuk Kapal &amp; Offshore</Link></li>
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

export default PortoKri;
