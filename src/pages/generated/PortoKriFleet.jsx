import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList } from 'lucide-react';


const PortoKriFleet = () => {
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
    <h1>KRI Kelas Kombatan TNI AL:<br />Watermaker SWRO 30 TPD untuk 4 Unit Kapal Perang</h1>
    <p>Klien: <strong>TNI Angkatan Laut RI — via PT Berkat Samudera Bersama</strong> &nbsp;·&nbsp; Kategori: SWRO Maritim — Kapal Perang TNI AL</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>

        <div className="cs-hero ">
          <picture>
            <source srcSet="images/porto-kri-amy-1.webp" type="image/webp" />
            <img src="images/porto-kri-amy-1.jpg" alt="Watermaker SWRO 30 TPD TSM untuk KRI kelas kombatan TNI AL" />
          </picture>
          <div className="cs-overlay">
            <h2>TNI Angkatan Laut RI — via PT Berkat Samudera Bersama</h2>
          </div>
        </div>

        

        <div className="cs-stats">
      <div className="cs-stat "><div className="num">4 unit</div><div className="lbl">KRI 30 TPD</div></div>
      <div className="cs-stat "><div className="num">30</div><div className="lbl">ton/hari per unit</div></div>
      <div className="cs-stat "><div className="num">2024</div><div className="lbl">tahun pengerjaan</div></div>
      <div className="cs-stat "><div className="num">BKI</div><div className="lbl">tersertifikasi</div></div>
        </div>

        <table className="cs-meta-table ">
      <tbody><tr><th>Klien Akhir</th><td>TNI Angkatan Laut Republik Indonesia</td></tr>
      <tr><th>Kontraktor / Vendor</th><td>PT Berkat Samudera Bersama (Jakarta)</td></tr>
      <tr><th>Unit Kapal Perang</th><td>KRI Sultan Iskandar Muda 367 (Agustus 2024), KRI Kambani (November 2024), KRI TSR 542 × 2 unit (November 2024)</td></tr>
      <tr><th>Tipe Sistem</th><td>Sea Water Reverse Osmosis (SWRO) Watermaker</td></tr>
      <tr><th>Kapasitas Produk</th><td>30 ton/hari per unit kapal (~1,25 m³/jam continuous)</td></tr>
      <tr><th>Sumber Air</th><td>Air laut langsung intake dari sea chest kapal</td></tr>
      <tr><th>Kualitas Output</th><td>TDS &lt; 500 ppm, layak minum awak kapal sesuai Permenkes 492/2010</td></tr>
      <tr><th>Konfigurasi</th><td>Compact pre-treatment + SWRO + ERD + post-treatment, marine-grade SS-316L</td></tr>
      <tr><th>Sertifikasi</th><td>Sesuai standar BKI dan persyaratan operasional TNI AL</td></tr>
      <tr><th>Status</th><td>Seluruh 4 unit aktif beroperasi</td></tr>
        </tbody></table>

        <div className="prose max-w-none text-text">

        <h2 id="latar-belakang" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Latar Belakang Proyek</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sepanjang 2024, TSM dipercaya untuk memasok <strong>watermaker SWRO 30 ton per hari</strong> bagi total <strong>4 unit Kapal Perang Republik Indonesia (KRI)</strong> melalui kontraktor <strong>PT Berkat Samudera Bersama</strong>. Empat unit kapal yang dilayani:</p>

        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>KRI Sultan Iskandar Muda 367</strong> — SWRO 30 TPD, Agustus 2024</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>KRI Kambani</strong> — SWRO 30 TPD, November 2024</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>KRI TSR 542</strong> — SWRO 30 TPD × 2 unit (sistem ganda), November 2024</li>
        </ul>

        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kapasitas 30 TPD ditujukan untuk kelas kapal kombatan dan kapal pendukung dengan jumlah awak yang lebih besar dan misi operasional yang lebih intensif dibanding kapal patroli biasa. Untuk KRI TSR 542, dipasang sistem ganda untuk menjamin redundancy — saat satu unit dalam maintenance, unit kedua tetap dapat menyediakan air tawar bagi awak kapal.</p>

        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Empat unit ini melengkapi portofolio TSM sebagai <strong>vendor watermaker terpercaya untuk armada TNI AL</strong>, melengkapi unit-unit lain yang sudah dipasang sebelumnya (lihat <Link to="/portofolio/kri">studi kasus KRI AMY Surabaya dan armada TNI AL lainnya</Link>).</p>

        <h2 id="spesifikasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Spesifikasi Teknis Sistem</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Setiap unit watermaker SWRO 30 TPD dirancang dengan konfigurasi marine-grade yang sama:</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Pre-treatment Compact</h3>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Sea chest filter SS-316L dengan basket strainer</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Cartridge filter dual-stage 25 µm + 5 µm</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Antiscalant dosing proportional dengan flow rate</li>
        </ul>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">SWRO Skid</h3>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">High-pressure pump axial piston dengan flexible coupling</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Pressure vessel SS-316L dengan elemen membran 4040 marine-spec</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">ERD turbocharger untuk recovery energi</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Recovery rate optimal pada operasi compact (35-40%)</li>
        </ul>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Post-treatment</h3>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Calcite remineralizer untuk netralisasi pH</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">UV sterilizer 254 nm untuk disinfeksi</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Storage tank SS-316L dengan vent filter</li>
        </ul>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Marine-Grade Construction</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Seluruh komponen yang terpapar atmosfer kapal menggunakan <strong>SS-316L minimum</strong>, dengan vibration mounting di seluruh skid base, IP66+ junction box untuk semua koneksi listrik, dan marine epoxy 3-layer pada frame. Dokumentasi material certificate, weld qualification, dan hydrostatic test report disusun lengkap untuk kepatuhan BKI.</p>

        <h2 id="kemitraan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Kemitraan dengan PT Berkat Samudera Bersama</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">PT Berkat Samudera Bersama adalah kontraktor terpercaya yang melayani kebutuhan teknis TNI AL. Sepanjang 2024, kemitraan TSM-PT BSB menghasilkan delivery 4 unit watermaker SWRO 30 TPD dengan kualitas konsisten dan timeline pengerjaan yang dapat diprediksi.</p>

        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sebelumnya, di Maret 2022, TSM juga menyuplai SWRO 24 TPD × 2 unit untuk <strong>KRI Dewa Kembar</strong> melalui CV Sari Tama, di Dismatal Pondok Dayung Jakarta. Track record ini menjadi fondasi kepercayaan untuk proyek-proyek selanjutnya.</p>

        <h2 id="signifikansi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Signifikansi Strategis</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk armada TNI AL yang beroperasi di perairan Indonesia, keandalan watermaker tidak hanya soal kenyamanan awak kapal — <strong>ia adalah faktor kritis dalam kemampuan operasional kapal perang</strong>. KRI yang harus mengisi air dari pelabuhan setiap beberapa hari memiliki batasan jangkauan operasi yang signifikan. KRI dengan watermaker 30 TPD yang andal dapat beroperasi mandiri di laut selama berbulan-bulan tanpa kendala pasokan air.</p>

        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ke-4 unit ini melengkapi total <strong>lebih dari 12 unit KRI</strong> yang sudah TSM layani dengan watermaker SWRO — track record yang menempatkan TSM sebagai salah satu vendor watermaker andalan untuk armada TNI AL.</p>
    

<h2 id="faq-kri-fleet" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Mengapa kapasitas 30 TPD dipilih untuk kelas kapal ini?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kapasitas 30 ton/hari ditujukan untuk kapal kombatan menengah-besar dengan jumlah awak 80-150+ orang dan misi operasional panjang. Konsumsi air per awak (minum, masak, mandi, cuci) plus kebutuhan operasional kapal membutuhkan margin di atas 200 liter per orang per hari. 30 TPD memberikan margin yang aman bahkan untuk kondisi peak demand.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa beda watermaker 30 TPD ini dengan 24 TPD untuk KRI lain?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Konfigurasi dasarnya sama (compact skid SWRO marine-grade), perbedaan utama di: ukuran pompa high-pressure (lebih besar untuk feed flow yang lebih tinggi), jumlah elemen membran (lebih banyak vessel paralel), dan kapasitas storage tank. Energy efficiency dan footprint scale secara proporsional dengan kapasitas.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Mengapa KRI TSR 542 dilengkapi 2 unit SWRO?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Redundancy adalah pertimbangan kritis untuk kapal perang dengan misi operasional panjang. Dua unit independen yang dapat beroperasi bergantian atau bersamaan menjamin: (1) tidak ada downtime watermaker saat maintenance terjadwal, (2) jika satu unit gagal di laut, unit kedua tetap menjamin pasokan air, (3) kapasitas total 60 TPD dapat dimanfaatkan untuk kondisi peak demand atau shower kolektif setelah misi.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah TSM dapat memasok watermaker untuk KRI baru di masa depan?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ya. TSM memiliki jalur pengadaan yang sudah teruji baik melalui kontraktor authorized seperti PT Berkat Samudera Bersama maupun langsung untuk proyek tertentu. Kapasitas mulai dari 2 TPD untuk kapal patroli kecil hingga 60+ TPD untuk kapal kombatan besar dapat dipasok dengan dokumentasi BKI lengkap. Lead time typical 4-8 bulan tergantung kompleksitas dan availability material marine-grade.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah service contract tersedia untuk KRI yang sudah beroperasi?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tersedia. TSM menyediakan service contract jangka panjang untuk semua KRI yang menggunakan watermaker TSM, mencakup: penggantian membran setiap 4-6 tahun, suplai cartridge filter dan kimia rutin, kalibrasi instrumentation, dan emergency support. Service dilakukan saat kapal docking di pangkalan untuk minimisasi disrupsi operasional.</p>


          <div style={{"marginTop":"2rem","padding":"2rem","background":"var(--ice)","borderRadius":"12px","borderLeft":"4px solid var(--accent)"}}>
            <h3 style={{"marginBottom":".75rem","color":"var(--navy)"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Membutuhkan Watermaker untuk Vessel atau Kapal Perang?</h3>
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
            <li><Link href="#spesifikasi">Spesifikasi Teknis</Link></li>
            <li><Link href="#kemitraan">Kemitraan PT BSB</Link></li>
            <li><Link href="#signifikansi">Signifikansi Strategis</Link></li>
            <li><Link href="#faq-kri-fleet">FAQ</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Produk Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/produk/desalinasi">→ SWRO Desalinasi Air Laut</Link></li>
            <li><Link to="/produk/ro-mobile">→ RO Mobile / Kontainer</Link></li>
            <li><Link to="/produk/membran">→ Membran SWRO Marine-Grade</Link></li>
            <li><Link to="/produk/pompa">→ Pompa Marine-Grade</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Studi Kasus &amp; Industri</h4>
          <ul className="flex flex-col">
            <li><Link to="/portofolio/kri">→ Studi Kasus: KRI AMY &amp; Armada</Link></li>
            <li><Link to="/artikel/ro-kapal-perang-bki">→ RO untuk Kapal Perang Standar BKI</Link></li>
            <li><Link to="/industri/maritim">→ Solusi Maritim &amp; Offshore</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>

    </>
  );
};

export default PortoKriFleet;
