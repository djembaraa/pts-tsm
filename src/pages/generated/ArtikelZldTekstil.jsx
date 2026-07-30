import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../../components/ui/Button';

const ArtikelZldTekstil = () => {
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
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/artikel">Artikel</Link> › Industri Tekstil</div>
    <h1>ZLD untuk Industri Tekstil:<br />Solusi Compliance dan Daur Ulang Air</h1>
    <p>Panduan lengkap implementasi Zero Liquid Discharge untuk pabrik tekstil Indonesia — tahapan teknis MBR+RO+evaporator, investasi, ROI, dan compliance dengan regulasi KLHK.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">

      <article>
        <div className="art-hero-img">
          <picture>
            <source srcSet="images/foto-pemasangan-lapangan.webp" type="image/webp" />
            <img src="images/foto-pemasangan-lapangan.jpg" alt="Sistem Zero Liquid Discharge ZLD untuk industri tekstil ramah lingkungan" />
          </picture>
        </div>

        <div className="art-meta-bar">
          <span className="am-tag">Tekstil</span>
          <span className="am-info">📅 2 Mei 2026</span>
          <span className="am-info">✍️ Tim TSM</span>
          <span className="am-info">⏱ 9 menit baca</span>
        </div>

        <div className="prose max-w-none text-text">

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Industri tekstil adalah salah satu sektor manufaktur paling air-intensive — sebuah pabrik dyeing kelas menengah dapat mengonsumsi <strong>500-2.000 m³ air per hari</strong> dan menghasilkan limbah dengan COD tinggi, warna pekat, dan kandungan kimia kompleks. Selain kompleksitas treatment, industri tekstil di Indonesia menghadapi tekanan ganda: regulasi <strong>baku mutu air limbah KLHK</strong> yang semakin ketat, dan biaya air baku yang terus meningkat di kawasan industri.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>Zero Liquid Discharge (ZLD)</strong> menjadi solusi yang menarik bagi pabrik tekstil yang ingin mengubah biaya kepatuhan menjadi penghematan operasional. Artikel ini membahas implementasi ZLD secara teknis dan ekonomis: mengapa industri tekstil memilih ZLD, regulasi yang mendorongnya, tahapan teknis sistem, estimasi investasi, dan studi kasus implementasi di Indonesia.</p>

          <h2 id="kenapa-tekstil" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Mengapa Industri Tekstil Butuh ZLD?</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Tantangan Khas Limbah Tekstil</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Limbah pabrik tekstil sangat berbeda dari industri lain:</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>COD tinggi 500-3.000 mg/L</strong> dari sisa zat warna, surfaktan, dan kimia auxiliary</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Warna pekat</strong> — dye recalcitrant yang sulit dihilangkan dengan biological treatment</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>pH ekstrim</strong> — variasi 4-12 tergantung process step (dyeing alkali, washing acid)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>TDS &gt;5.000 ppm</strong> dari salt yang digunakan untuk dye fixation</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Suhu tinggi</strong> 35-50°C dari proses thermal</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Volume besar &amp; fluktuatif</strong> sesuai schedule batch dyeing</li>
          </ul>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Tekanan Regulasi yang Meningkat</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">KLHK (Kementerian Lingkungan Hidup dan Kehutanan) telah menerbitkan regulasi yang semakin ketat untuk industri tekstil:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Permen LHK 5/2014</strong> — Baku mutu air limbah industri tekstil</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Permen LHK 68/2016</strong> — Baku mutu untuk industri yang membuang ke laut</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Permen LHK 5/2021</strong> — Update kriteria izin lingkungan</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Beberapa kawasan industri (Cikarang, Karawang, Bandung) memiliki <strong>persyaratan tambahan</strong> untuk pengelolaan limbah B3</li>
          </ul>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Insentif Ekonomi</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Selain compliance, ZLD memberikan insentif ekonomi: <strong>(1) penghematan air baku</strong> (recovery 80-95% dari limbah jadi air bersih), <strong>(2) tidak perlu membayar biaya pembuangan limbah</strong> ke kawasan, <strong>(3) potensi penjualan kristal garam</strong> dari evaporator sebagai byproduk industri kimia, dan <strong>(4) brand value</strong> sebagai pabrik ramah lingkungan untuk export ke pasar EU/USA yang sustainability-conscious.</p>

          <h2 id="regulasi-klhk" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Regulasi KLHK untuk Industri Tekstil</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Baku Mutu Effluent (Permen LHK 5/2014)</h3>
          <table className="w-full border-collapse my-[1.5rem] text-[0.9rem]">
            <tbody><tr><th>Parameter</th><th>Baku Mutu Maks</th></tr>
            <tr><td>BOD₅</td><td>60 mg/L</td></tr>
            <tr><td>COD</td><td>150 mg/L</td></tr>
            <tr><td>TSS</td><td>50 mg/L</td></tr>
            <tr><td>Phenol total</td><td>0,5 mg/L</td></tr>
            <tr><td>Krom total</td><td>1,0 mg/L</td></tr>
            <tr><td>Krom heksavalen (Cr⁶⁺)</td><td>0,1 mg/L</td></tr>
            <tr><td>Amonia (NH₃-N)</td><td>8 mg/L</td></tr>
            <tr><td>Sulfida (S²⁻)</td><td>0,3 mg/L</td></tr>
            <tr><td>Minyak &amp; lemak</td><td>3 mg/L</td></tr>
            <tr><td>pH</td><td>6,0 – 9,0</td></tr>
          </tbody></table>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk pabrik di kawasan industri tertentu (Cikarang Jababeka, Karawang KIIC, Banten Krakatau), ada persyaratan tambahan dari pengelola kawasan yang sering lebih ketat. Plus persyaratan <strong>monitoring online</strong> dengan SPARING (Sistem Pemantauan Air Limbah Industri) yang melaporkan ke KLHK secara real-time.</p>

          <h2 id="tahap-zld" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Tahapan Sistem ZLD untuk Tekstil</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem ZLD lengkap untuk pabrik tekstil terdiri dari beberapa tahap:</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Tahap 1: Pre-Treatment</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Equalization tank</strong> — Mencampur limbah dari berbagai batch dyeing untuk smoothing kualitas</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>pH adjustment</strong> — Menetralkan dengan NaOH atau H₂SO₄ sesuai sumber</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Coagulation-flocculation</strong> — PAC + polymer untuk menghilangkan padatan tersuspensi dan sebagian warna</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Primary clarifier</strong> — Sedimentasi untuk memisahkan flok</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Color removal</strong> — Ozonasi atau Fenton process untuk dye yang recalcitrant (jika dibutuhkan)</li>
          </ul>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Tahap 2: MBR (Membrane Bioreactor)</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">MBR menggabungkan biological treatment (mikroba mengurai organik) dengan UF dalam satu tank. MBR menghilangkan 90-95% COD dan sebagian besar warna residual. Output MBR: COD &lt;50 mg/L, BOD &lt;5 mg/L, TSS &lt;1 mg/L, ammonia &lt;1 mg/L. Footprint 30-50% lebih kecil dari WWTP konvensional dengan kualitas effluent jauh lebih baik.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Tahap 3: RO untuk Water Reuse</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Effluent MBR (kualitas tinggi) di-treat dengan RO 2-pass untuk menghasilkan air daur ulang dengan TDS &lt;30 ppm yang dapat digunakan kembali sebagai: process water dyeing, cooling tower makeup, atau washing water. Recovery RO biasanya 75-80%.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Tahap 4: Brine Concentrator (Untuk ZLD Penuh)</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Brine RO (25% volume dengan TDS terkonsentrasi) diproses lebih lanjut untuk menghilangkan air sisa. Beberapa teknologi:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>MED (Multi-Effect Distillation)</strong> — Menggunakan steam dengan multiple effect untuk efisiensi termal</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>MVR (Mechanical Vapor Recompression)</strong> — Menggunakan kompresor untuk recompression vapor, lebih hemat energi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Crystallizer</strong> — Tahap akhir untuk mengkristalkan garam terlarut</li>
          </ul>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Tahap 5: Solid Waste Handling</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Output ZLD adalah <strong>kristal garam</strong> (campuran NaCl, Na₂SO₄, dan minor mineral) yang dapat: (1) dijual ke industri kimia jika kemurnian cukup, (2) dijadikan landfill solid waste sesuai regulasi limbah B3, atau (3) re-purposed untuk industrial salt aplikasi tertentu.</p>

          <h2 id="investasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Estimasi Investasi &amp; ROI</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">CAPEX (Investasi Awal)</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk pabrik tekstil dengan limbah 500-1.000 m³/hari, estimasi CAPEX ZLD lengkap:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pre-treatment + MBR</strong>: Rp 4-8 milyar</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>RO water reuse system</strong>: Rp 2-4 milyar</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Evaporator + crystallizer</strong>: Rp 5-15 milyar (komponen termahal)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Civil works + utility</strong>: Rp 2-5 milyar</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Total CAPEX</strong>: Rp 13-32 milyar</li>
          </ul>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">OPEX (Biaya Operasional)</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Energi</strong>: 2,5-4,5 USD/m³ limbah olahan (evaporator adalah konsumen utama)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kimia</strong>: 0,8-1,5 USD/m³</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Maintenance &amp; spare</strong>: 5-8% CAPEX/tahun</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Operator &amp; SDM</strong>: 3-5 orang shift</li>
          </ul>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Penghematan/Revenue</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Penghematan air baku</strong>: 60-80% kebutuhan air baru tertutupi oleh recycle</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Tidak ada biaya pembuangan limbah</strong> (bisa Rp 50-200 ribu/m³ di kawasan industri tertentu)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Penjualan kristal garam</strong> (jika kemurnian cukup) — minor revenue</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Brand value &amp; ESG compliance</strong> — sulit dikuantifikasi tapi nyata untuk export</li>
          </ul>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">ROI Tipikal</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">ROI ZLD penuh untuk pabrik tekstil Indonesia: <strong>4-6 tahun</strong> tergantung biaya air baku lokal dan biaya pembuangan limbah. Untuk pabrik di kawasan dengan tarif air tinggi dan persyaratan pembuangan ketat (Karawang, Cikarang), ROI bisa 3-4 tahun.</p>

          <h2 id="studi-kasus" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Studi Kasus: ZLD Pabrik Tekstil Karawang</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM membangun sistem MBR + RO + Evaporator 100 m³/hari untuk pabrik dyeing di Karawang yang harus zero discharge sesuai aturan kawasan industri.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Konfigurasi Sistem</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pre-treatment</strong>: Equalization 200 m³, pH adjustment, koagulasi PAC + polymer</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>MBR</strong>: 100 m³/hari dengan UF Toray flat-sheet</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>RO 2-pass</strong>: Recovery 80%, output TDS &lt;30 ppm untuk dyeing reuse</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Evaporator MVR</strong>: Untuk brine RO, recovery 95%</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Crystallizer</strong>: Output kristal garam ~2 ton/hari</li>
          </ul>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Hasil</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Recovery air total</strong>: 85% dari limbah masuk → air bersih untuk reuse</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>COD effluent crystallizer</strong>: zero (semua organik destroyed)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kristal garam</strong>: Dijual ke industri kimia lokal sebagai industrial salt</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>ROI</strong>: 4 tahun dari penghematan air baku, biaya kimia dyeing yang konsisten karena air berkualitas, dan kepatuhan regulasi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Brand impact</strong>: Pabrik mendapat sertifikasi sustainability untuk export ke buyer EU</li>
          </ul>

          <h2 id="alternatif" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Alternatif Selain Full ZLD</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">ZLD penuh adalah solusi paling agresif. Tidak semua pabrik tekstil butuh ZLD penuh — beberapa alternatif yang juga valid:</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Tier 1: MBR + Compliance Discharge</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">MBR sebagai treatment utama, effluent dibuang ke badan air sesuai baku mutu. <strong>Investasi 30-50% dari ZLD penuh</strong>, recovery air rendah (~5-10%), tapi memenuhi regulasi standar.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Tier 2: MBR + RO Reuse + Compliance Discharge</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">MBR + RO untuk water reuse parsial (60-75%), brine RO masih dibuang setelah memenuhi baku mutu. <strong>Investasi 60-75% dari ZLD penuh</strong>, recovery air tinggi tanpa kompleksitas evaporator.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Tier 3: Full ZLD</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Semua tahap di atas + evaporator + crystallizer. <strong>Investasi penuh</strong>, recovery air 85-95%, zero discharge.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pilihan tier tepat tergantung: regulasi yang berlaku di kawasan, biaya air baku lokal, biaya pembuangan limbah, dan strategi sustainability perusahaan. TSM membantu klien melakukan analisis bisnis kasus untuk memilih tier yang paling masuk akal secara ekonomis dan teknis.</p>

          <h2 id="kesalahan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Kesalahan Implementasi yang Sering Terjadi</h2>
          <ol className="ml-[1.5rem] my-[1.05rem] list-decimal">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Skipping pilot test</strong> — Limbah tekstil bervariasi antar pabrik. Pilot test 1-2 m³/hari selama 4-8 minggu di lokasi sangat penting sebelum komitmen full-scale.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Underdesigning pre-treatment</strong> — Kekurangan pre-treatment menyebabkan MBR overload dengan padatan dan dye yang merusak membran.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Memilih evaporator murah tanpa material spesifikasi</strong> — Brine tekstil korosif. Material salah berarti evaporator hancur dalam 2-3 tahun.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Tidak ada operator training mendalam</strong> — Sistem ZLD jauh lebih kompleks dari WWTP konvensional. Operator butuh training 4-6 minggu intensif.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Mengabaikan disposal kristal garam</strong> — Plan disposal sejak awal — apakah dijual, di-landfill, atau re-purposed. Tidak ada plan = tumpukan kristal garam yang menjadi masalah lingkungan baru.</li>
          </ol>

          <h2 id="faq" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

        </div>

      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#kenapa-tekstil">Kenapa Tekstil Butuh ZLD</Link></li>
            <li><Link href="#regulasi-klhk">Regulasi KLHK Indonesia</Link></li>
            <li><Link href="#tahap-zld">Tahapan Sistem ZLD</Link></li>
            <li><Link href="#investasi">Estimasi Investasi &amp; ROI</Link></li>
            <li><Link href="#studi-kasus">Studi Kasus Karawang</Link></li>
            <li><Link href="#alternatif">Alternatif Selain Full ZLD</Link></li>
            <li><Link href="#kesalahan">Kesalahan Implementasi</Link></li>
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
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/zld-zero-liquid">→ ZLD: Konsep &amp; Teknologi</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/studi-kasus-ro-tekstil">→ Studi Kasus RO Tekstil</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/limbah">→ Solusi Pengolahan Limbah</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/industri/manufaktur">→ Industri Manufaktur</Link></li>
            <li><Link style={{"fontSize":".84rem","fontWeight":"600","color":"var(--blue)","display":"block"}} to="/artikel">→ Lihat Semua Artikel</Link></li>
          </ul>
        </div>
      </aside>

    </div>
  </div>
</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold leading-[1.15] mb-[0.65rem]">Merencanakan ZLD untuk Pabrik Tekstil Anda?</h2>
    <p className="text-[0.88rem] opacity-90 leading-[1.75] max-w-[600px] mx-auto mb-8">Tim ahli kami siap membantu mulai dari analisis kebutuhan hingga instalasi.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Button variant="white" to="/kontak" >📞 Hubungi Kami</Button>
      <Button variant="outline-white" to="/produk/limbah" >🔍 Solusi ZLD TSM</Button>
    </div>
  </div>
</div>

    </>
  );
};

export default ArtikelZldTekstil;
