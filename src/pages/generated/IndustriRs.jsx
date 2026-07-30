import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity } from 'lucide-react';


const IndustriRs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.art-layout{display:grid;grid-template-columns:1fr 290px;gap:3rem;align-items:start}
.art-sticky{position:sticky;top:88px}
@media(max-width:1024px){.art-layout{grid-template-columns:1fr}.art-sticky{position:static}}
.spec-table{width:100%;border-collapse:collapse;margin:1.5rem 0}
.spec-table th,.spec-table td{padding:.75rem 1rem;border:1px solid var(--border);font-size:.88rem;text-align:left;vertical-align:top}
.spec-table th{background:var(--navy);color:#fff;font-weight:700}
.spec-table tr:nth-child(even){background:var(--gray)}

` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/industri">Industri</Link> › Rumah Sakit</div>
    <h1>RO Hemodialisis &amp; Water Treatment Rumah Sakit</h1>
    <p>Sistem reverse osmosis untuk hemodialisis sesuai standar ANSI/AAMI RD52, dengan validasi IQ/OQ/PQ lengkap untuk akreditasi rumah sakit dan keselamatan pasien dialisis di Indonesia.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>
        <div className="prose max-w-none text-text">


          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Rumah sakit modern memiliki kebutuhan air yang sangat spesifik dan terstandar — terutama untuk unit hemodialisis (cuci darah) di mana kontaminasi sekecil apa pun pada air dapat berdampak langsung pada keselamatan pasien. Standar internasional ANSI/AAMI RD52 menetapkan batas yang ketat untuk parameter mikrobiologi, endotoksin, dan kimia pada air yang digunakan untuk preparasi dialysate.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>PT Tirta Sumber Makmur</strong> menyediakan sistem water treatment khusus rumah sakit dan klinik dialisis di Indonesia, dengan dokumentasi compliance lengkap untuk akreditasi rumah sakit (KARS, JCI) dan validasi sistem hemodialisis sesuai standar internasional.</p>

          <h2 id="hemodialisis" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Sistem RO untuk Hemodialisis</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Hemodialisis menggunakan air dalam volume signifikan — sekitar 120–150 liter per sesi dialisis per pasien. Air ini bercampur dengan dialysate concentrate untuk membentuk dialysate akhir yang kontak langsung dengan darah pasien melalui membran dialiser. Karena kontak intensif ini, air harus memenuhi standar yang jauh lebih ketat dari air minum biasa.</p>

          <table className="w-full border-collapse my-[1.5rem] text-[0.9rem]">
            <tbody><tr><th>Parameter</th><th>ANSI/AAMI RD52 Standard</th><th>Sistem RO TSM</th></tr>
            <tr><td>TDS</td><td>&lt;100 mg/L</td><td>&lt;30 mg/L (typical &lt;15)</td></tr>
            <tr><td>Total Coliform</td><td>0 cfu/100mL</td><td>0 cfu/100mL</td></tr>
            <tr><td>Total Viable Count</td><td>&lt;100 cfu/mL</td><td>&lt;10 cfu/mL</td></tr>
            <tr><td>Endotoxin</td><td>&lt;0,25 EU/mL</td><td>&lt;0,1 EU/mL</td></tr>
            <tr><td>Heavy metals (Pb, Hg, As, Cd)</td><td>Trace level (sesuai standar)</td><td>Below detection</td></tr>
            <tr><td>Aluminum</td><td>&lt;0,01 mg/L</td><td>&lt;0,005 mg/L</td></tr>
            <tr><td>Free chlorine</td><td>&lt;0,1 mg/L (essential!)</td><td>&lt;0,02 mg/L (carbon filter)</td></tr>
            <tr><td>Chloramine</td><td>&lt;0,1 mg/L</td><td>&lt;0,02 mg/L</td></tr>
          </tbody></table>

          <h2 id="konfigurasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Konfigurasi Sistem RO Hemodialisis Standar</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem RO untuk hemodialisis biasanya terdiri dari multiple stage untuk mencapai kualitas yang dibutuhkan dengan margin keamanan yang cukup:</p>

          <ol className="ml-[1.5rem] my-[1.05rem] list-decimal">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pre-filter</strong> — sediment 5μm untuk menghilangkan padatan kasar</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Carbon filter (multiple bed)</strong> — menghilangkan klorin dan kloramin yang merusak membran RO dan toxic untuk pasien</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Softener</strong> — menghilangkan hardness untuk memperpanjang umur membran</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Cartridge filter 1μm</strong> — finishing pre-treatment</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>RO Stage 1</strong> — penyaringan utama dengan recovery 75–80%</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>RO Stage 2 (optional, untuk redundancy)</strong> — second pass untuk safety margin</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>UV disinfection inline</strong> — sterilisasi mikrobiologi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Storage tank PVDF/PP food-grade</strong> — dengan venting filter HEPA</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Distribusi loop</strong> dengan recirculation untuk mencegah stagnasi dan biofilm</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sanitization system</strong> — heat sanitization atau chemical sanitization terjadwal</li>
          </ol>

          <h2 id="standar-akreditasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Standar &amp; Akreditasi</h2>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>ANSI/AAMI RD52</strong> — water quality untuk dialysate preparation</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>ANSI/AAMI RD62</strong> — water treatment equipment untuk hemodialysis</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>ISO 23500</strong> — guidance for preparation and quality management of fluids for hemodialysis</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Permenkes 812/2010</strong> — penyelenggaraan pelayanan dialisis di rumah sakit Indonesia</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>KARS (Komisi Akreditasi Rumah Sakit)</strong> — dokumentasi sistem air sebagai bagian akreditasi RS</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>JCI (Joint Commission International)</strong> — untuk RS dengan target akreditasi internasional</li>
          </ul>

          <h2 id="solusi-tsm" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Layanan TSM untuk Rumah Sakit</h2>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Engineering &amp; instalasi</strong> sistem RO hemodialisis sesuai ANSI/AAMI RD52</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Validasi IQ/OQ/PQ</strong> dengan dokumentasi siap audit KARS dan JCI</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kontrak perawatan tier Premium</strong> dengan response 4 jam karena criticality untuk pasien</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Audit periodik</strong> sistem existing dengan analisa lab terakreditasi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Training operator dialisis</strong> tentang water quality monitoring dan basic troubleshooting</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sistem backup</strong> dengan dual RO untuk redundancy operasional</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Compliance documentation</strong> untuk akreditasi RS</li>
          </ul>

          <h2 id="referensi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Referensi Rumah Sakit</h2>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Eka Hospital BSD</strong> — sistem RO multi-purpose untuk dialysis dan utility</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Rumah Sakit Atma Jaya Jakarta</strong> — sistem water treatment untuk laboratorium dan dialysis</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Klinik Dialisis Independen Jabodetabek</strong> — multiple lokasi dengan sistem RO 1–3 m³/jam</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>RS swasta tier 1 Jakarta &amp; Surabaya</strong> — dual RO redundancy untuk continuous operation</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><Link to="/portofolio/eka-hospital">→ Studi kasus Eka Hospital lengkap</Link></li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><Link to="/portofolio/atma-jaya">→ Studi kasus Atma Jaya lengkap</Link></li>
          </ul>


          <h2 id="faq" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

<h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa standar air untuk hemodialisis di Indonesia?</h3>
<p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem hemodialisis di Indonesia mengikuti ANSI/AAMI RD52 dan ISO 23500 sebagai standar internasional, plus Permenkes 812/2010 untuk pelayanan dialisis. Parameter kritis: TDS &lt;100 mg/L, total coliform 0/100mL, total viable count &lt;100 cfu/mL, endotoxin &lt;0,25 EU/mL, free chlorine &lt;0,1 mg/L. Sistem TSM secara konsisten mencapai parameter yang lebih ketat dari standar minimum untuk safety margin.</p>
<h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa kapasitas RO yang dibutuhkan untuk klinik dialisis?</h3>
<p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Konsumsi air per sesi dialisis: 120–150 liter. Klinik dengan 8 mesin dialisis dan 3 shift/hari (24 sesi/hari): kebutuhan ~3,6 m³/hari. RO dengan kapasitas 0,5 m³/jam (12 m³/hari) memberikan margin yang nyaman. Untuk RS besar dengan 20+ mesin dialisis: RO 1,5–2 m³/jam dengan dual unit untuk redundancy.</p>
<h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Mengapa carbon filter sangat penting di sistem RO hemodialisis?</h3>
<p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Klorin dan kloramin (sering hadir di air PDAM untuk disinfeksi) merupakan racun bagi pasien hemodialisis dan dapat menyebabkan hemolytic anemia. Selain itu, klorin merusak membran RO. Carbon filter dengan empty bed contact time minimum 6 menit (idealnya 10 menit) wajib di-place sebelum membran RO. Dual carbon filter dengan operating + standby adalah best practice untuk sistem rumah sakit.</p>
<h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Bagaimana sistem RO hemodialisis di-validasi?</h3>
<p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Validasi mengikuti protokol IQ/OQ/PQ dengan acceptance criteria sesuai ANSI/AAMI RD52. IQ memvalidasi instalasi sesuai spesifikasi, OQ memvalidasi operasi pada multiple skenario, PQ memvalidasi performa konsisten dengan sampling intensif (Phase I 2 minggu daily, Phase II 4 minggu daily, Phase III 1 tahun monthly). Total validasi: 4–6 minggu untuk Phase I &amp; II yang sufficient untuk operasi klinis.</p>
<h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa biaya sistem RO untuk klinik hemodialisis?</h3>
<p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Capex sistem RO hemodialisis turnkey: klinik kecil (4–6 mesin, RO 0,5 m³/jam) Rp 320–520 juta, klinik medium (8–12 mesin, RO 1 m³/jam) Rp 580–820 juta, RS besar (20+ mesin, dual RO 1,5 m³/jam dengan redundancy) Rp 1,4–2,2 miliar. Biaya termasuk pre-treatment lengkap, validasi IQ/OQ/PQ, training operator, dan dokumentasi compliance untuk audit KARS.</p>

          <div style={{"marginTop":"2rem","padding":"2rem","background":"var(--ice)","borderRadius":"12px","borderLeft":"4px solid var(--accent)"}}>
            <h3 style={{"marginBottom":".75rem","color":"var(--navy)"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Konsultasi RS</h3>
            <p style={{"marginBottom":"1.25rem","color":"var(--muted)","fontSize":".92rem"}} className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tim TSM siap membantu menyusun proposal teknis &amp; komersial sesuai kebutuhan Anda. Site visit gratis untuk lokasi Jabodetabek.</p>
            <Link style={{"display":"inline-block","padding":".85rem 2rem","background":"var(--blue)","color":"#fff","borderRadius":"8px","fontWeight":"700","fontSize":".96rem","textDecoration":"none"}} to="/kontak"><Activity className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Konsultasi RS →</Link>
          </div>

        </div>
      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#hemodialisis">Sistem RO Hemodialisis</Link></li>
            <li><Link href="#konfigurasi">Konfigurasi Standar</Link></li>
            <li><Link href="#standar-akreditasi">Standar &amp; Akreditasi</Link></li>
            <li><Link href="#solusi-tsm">Layanan TSM</Link></li>
            <li><Link href="#referensi">Referensi RS</Link></li>
            <li><Link href="#faq">FAQ</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Industri Lain</h4>
          <ul className="flex flex-col">
            <li><Link to="/industri/farmasi">→ Industri Farmasi</Link></li>
            <li><Link to="/industri/manufaktur">→ Manufaktur</Link></li>
            <li><Link to="/industri/hotel">→ Hotel &amp; Resort</Link></li>
            <li><Link to="/industri/properti">→ Properti</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Produk Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/produk/ro-industri">→ RO Industri</Link></li>
            <li><Link to="/produk/demi">→ Demineralisasi/EDI</Link></li>
            <li><Link to="/produk/membran">→ Membran RO</Link></li>
            <li><Link to="/produk/uf">→ UV &amp; Ozon</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Studi Kasus</h4>
          <ul className="flex flex-col">
            <li><Link to="/portofolio/eka-hospital">→ Eka Hospital BSD</Link></li>
            <li><Link to="/portofolio/atma-jaya">→ Atma Jaya Jakarta</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Layanan Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/layanan/sertifikasi">→ Sertifikasi &amp; Compliance</Link></li>
            <li><Link to="/layanan/audit">→ Audit Kualitas Air</Link></li>
            <li><Link to="/layanan/darurat">→ Servis Darurat 24/7</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>

    </>
  );
};

export default IndustriRs;
