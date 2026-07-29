import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


const ArtikelBiayaInstalasiRoIndustri = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/artikel">Artikel</Link> › Biaya RO Industri</div>
    <h1>Biaya Instalasi Sistem RO Industri di Indonesia 2026</h1>
    <p>Berapa sebenarnya biaya pasang sistem RO industri di Indonesia? Breakdown lengkap capex, opex, dan analisis payback period berdasarkan data proyek aktual TSM.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>
        <div className="prose max-w-none text-text">

          <div className="art-meta-bar">
            <span className="am-tag">Investasi</span>
            <span className="am-info">📅 4 Mei 2026</span>
            <span className="am-info">⏱️ 8 menit baca</span>
          </div>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">"Berapa harga sistem RO industri?" adalah pertanyaan paling sering kami terima — dan jawabannya: <em>tergantung</em>. Tergantung kapasitas, kualitas air baku, kualitas output yang dibutuhkan, kompleksitas pre-treatment dan post-treatment, sertifikasi yang diperlukan, hingga lokasi instalasi. Sistem RO 5 m³/hari untuk laboratorium bisa Rp 80 juta. Sistem RO 200 m³/hari dengan cooling tower lengkap untuk pabrik bisa Rp 5 miliar.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Artikel ini memberikan <strong>range realistis</strong> berdasarkan ratusan proyek yang sudah dikerjakan PT Tirta Sumber Makmur di berbagai industri di Indonesia. Angka-angka ini adalah panduan untuk budget planning awal — proposal final akan tergantung audit teknis spesifik di lokasi Anda.</p>

          <h2 id="komponen-biaya" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Komponen Biaya: Capex vs Opex</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sebelum melihat angka, penting memahami bahwa total cost of ownership (TCO) sistem RO industri terdiri dari dua komponen utama:</p>

          <div className="opex-grid">
            <div className="opex-card">
              <span className="pct">35-40%</span>
              <span className="label">CAPEX<br />(investasi awal)</span>
            </div>
            <div className="opex-card">
              <span className="pct">25-30%</span>
              <span className="label">Listrik<br />(10 tahun)</span>
            </div>
            <div className="opex-card">
              <span className="pct">15-20%</span>
              <span className="label">Membran &amp; Kimia<br />(10 tahun)</span>
            </div>
            <div className="opex-card">
              <span className="pct">10-15%</span>
              <span className="label">Maintenance &amp; Service<br />(10 tahun)</span>
            </div>
          </div>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Vendor yang memberi penawaran capex sangat murah sering kali "berhemat" pada komponen yang nantinya menjadi opex tinggi: pompa boros listrik, recovery rate rendah (banyak air terbuang), atau membran murah yang umurnya pendek. Selalu evaluasi TCO 10 tahun, bukan hanya harga awal.</p>

          <h2 id="capex-bwro" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Capex Sistem BWRO Industri (Air Tawar)</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem <Link to="/produk/ro-industri">RO industri brackish water (BWRO)</Link> adalah konfigurasi paling umum — air baku dari PDAM, sumur dalam, atau air sungai yang telah di-pre-treatment. Range harga di Indonesia tahun 2026:</p>

          <table className="price-table">
            <tbody><tr><th>Kapasitas</th><th>Sistem Standar</th><th>Sistem Lengkap*</th></tr>
            <tr><td>5 m³/hari</td><td className="price-cell">Rp 85 - 130 juta</td><td className="price-cell">Rp 150 - 220 juta</td></tr>
            <tr><td>10 m³/hari</td><td className="price-cell">Rp 140 - 200 juta</td><td className="price-cell">Rp 240 - 360 juta</td></tr>
            <tr><td>25 m³/hari</td><td className="price-cell">Rp 280 - 450 juta</td><td className="price-cell">Rp 480 - 720 juta</td></tr>
            <tr><td>50 m³/hari</td><td className="price-cell">Rp 480 - 750 juta</td><td className="price-cell">Rp 850 juta - 1,3 M</td></tr>
            <tr><td>100 m³/hari</td><td className="price-cell">Rp 850 juta - 1,4 M</td><td className="price-cell">Rp 1,6 - 2,4 M</td></tr>
            <tr><td>200 m³/hari</td><td className="price-cell">Rp 1,6 - 2,5 M</td><td className="price-cell">Rp 2,8 - 4,5 M</td></tr>
            <tr><td>500 m³/hari</td><td className="price-cell">Rp 3,8 - 5,5 M</td><td className="price-cell">Rp 6,5 - 9,5 M</td></tr>
          </tbody></table>
          <p style={{"fontSize":".82rem","color":"var(--muted)","fontStyle":"italic"}} className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">*Sistem lengkap = pre-treatment komprehensif (MMF, softener, antiscalant), post-treatment (UV, remineralisasi), automation SCADA, dan komponen branded (Grundfos, DOW Filmtec).</p>

          <h2 id="capex-swro" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Capex Sistem SWRO (Air Laut)</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem <Link to="/produk/desalinasi">SWRO desalinasi</Link> 2–3x lebih mahal dibanding BWRO untuk kapasitas yang sama, karena: tekanan tinggi (55–70 bar), material duplex/super duplex, energy recovery device, dan pre-treatment yang lebih intensif. Range harga 2026:</p>

          <table className="price-table">
            <tbody><tr><th>Kapasitas</th><th>SWRO Container</th><th>SWRO Plant Permanen</th></tr>
            <tr><td>5 m³/hari</td><td className="price-cell">Rp 380 - 580 juta</td><td className="price-cell">Rp 480 - 720 juta</td></tr>
            <tr><td>10 m³/hari</td><td className="price-cell">Rp 580 - 850 juta</td><td className="price-cell">Rp 720 juta - 1,1 M</td></tr>
            <tr><td>25 m³/hari</td><td className="price-cell">Rp 1,1 - 1,7 M</td><td className="price-cell">Rp 1,5 - 2,3 M</td></tr>
            <tr><td>50 m³/hari</td><td className="price-cell">Rp 1,9 - 2,8 M</td><td className="price-cell">Rp 2,5 - 3,8 M</td></tr>
            <tr><td>100 m³/hari</td><td className="price-cell">-</td><td className="price-cell">Rp 4,2 - 6,2 M</td></tr>
          </tbody></table>

          <h2 id="capex-spesialis" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Capex Sistem Spesialis</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk industri dengan persyaratan khusus, biaya bisa lebih tinggi karena material premium, sertifikasi, dan validasi:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Demin Plant RO+EDI (PLTU/Industri):</strong> 30–50% lebih mahal dari RO standar untuk kapasitas yang sama. Sistem 30 m³/jam tipikal Rp 3,5–5,5 miliar.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sistem Purified Water Farmasi (CPOB):</strong> 60–100% lebih mahal karena material 316L sanitary, validasi IQ/OQ/PQ, dan dokumentasi GMP. Sistem 2 m³/jam tipikal Rp 1,8–3,2 miliar termasuk validasi.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>RO Hemodialisis (RS):</strong> Rp 280–650 juta untuk klinik dialisis kecil-menengah, termasuk loop distribusi sesuai ANSI/AAMI RD52.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>SWRO Marine (Sertifikasi BKI):</strong> 8–12% lebih mahal dari SWRO darat untuk ukuran sama, karena material duplex, sertifikasi, dan witness test.</li>
          </ul>

          <h2 id="biaya-tambahan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Biaya Tambahan yang Sering Terlewat</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Selain harga unit RO, ada biaya tambahan yang harus dianggarkan:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Civil work:</strong> Pondasi, ruang plant, drainage, pencahayaan — biasanya 5–15% dari harga sistem</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Tangki air:</strong> Tangki feed water, permeate, dan backwash — Rp 8–35 juta per unit tergantung kapasitas dan material</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Listrik:</strong> Panel listrik dedicated, MCB, dan kabel power — Rp 25–120 juta tergantung kapasitas</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Piping eksternal:</strong> Distribusi air dari plant ke point of use — biasanya 3–8% dari harga sistem</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pre-treatment khusus:</strong> Iron removal, manganese removal, atau organic removal jika air baku sangat buruk — Rp 30–250 juta</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pengiriman &amp; instalasi:</strong> Untuk lokasi remote (Kalimantan, Papua, pulau terpencil), bisa 5–15% dari harga sistem</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Training &amp; dokumentasi:</strong> Biasanya 1–3% dari harga sistem</li>
          </ul>

          <h2 id="opex" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Biaya Operasional (Opex)</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Biaya opex tipikal untuk sistem RO industri di Indonesia per m³ air yang diproduksi:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>BWRO:</strong> Rp 500–2.500 per m³</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>SWRO:</strong> Rp 4.500–9.000 per m³</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Demin RO+EDI:</strong> Rp 3.000–6.500 per m³</li>
          </ul>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Bandingkan dengan tarif air PDAM kawasan industri yang umumnya <strong>Rp 12.000–25.000 per m³</strong> — penghematan signifikan yang mendasari business case sistem RO untuk pabrik dengan konsumsi tinggi.</p>

          <h2 id="payback" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Payback Period</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk pabrik dengan konsumsi 100+ m³/hari, payback period sistem BWRO biasanya <strong>14–28 bulan</strong>. Untuk resort kepulauan yang sebelumnya bergantung tangki air, payback SWRO biasanya <strong>2–5 tahun</strong>. Untuk PLTU yang upgrade dari ion exchange ke RO+EDI, payback dari penghematan kimia regenerasi saja biasanya <strong>3–5 tahun</strong>.</p>

          <h2 id="cara-hemat" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Cara Mengoptimalkan Investasi</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Beberapa strategi untuk memaksimalkan ROI sistem RO industri:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Lakukan <Link to="/layanan/feasibility">feasibility study</Link> menyeluruh sebelum membeli — sizing yang salah adalah penyebab #1 sistem RO yang underperform</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Investasikan di pre-treatment yang baik — menghemat membran replacement dan downtime</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Pilih pompa dengan VFD (Variable Frequency Drive) untuk efisiensi energi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Pertimbangkan recovery rate tinggi atau RO Reclaim untuk pabrik dengan biaya air baku tinggi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Kontrak <Link to="/layanan/maintenance">maintenance preventif</Link> dengan vendor — lebih murah daripada perbaikan emergency</li>
          </ul>

          <div style={{"marginTop":"2rem","padding":"2rem","background":"var(--ice)","borderRadius":"12px","borderLeft":"4px solid var(--accent)"}}>
            <h3 style={{"marginBottom":".75rem","color":"var(--navy)"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Dapatkan Estimasi Akurat untuk Proyek Anda</h3>
            <p style={{"marginBottom":"1.25rem","color":"var(--muted)","fontSize":".92rem"}} className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Range di artikel ini adalah panduan awal. Untuk estimasi akurat, gunakan <Link to="/kalkulator">kalkulator kebutuhan air</Link> kami atau hubungi tim engineering TSM untuk konsultasi gratis.</p>
            <Link style={{"display":"inline-block","padding":".85rem 2rem","background":"var(--blue)","color":"#fff","borderRadius":"8px","fontWeight":"700","fontSize":".96rem"}} to="/kontak">💰 Minta Penawaran Akurat →</Link>
          </div>

        </div>
      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#komponen-biaya">Capex vs Opex</Link></li>
            <li><Link href="#capex-bwro">Capex BWRO</Link></li>
            <li><Link href="#capex-swro">Capex SWRO</Link></li>
            <li><Link href="#capex-spesialis">Sistem Spesialis</Link></li>
            <li><Link href="#biaya-tambahan">Biaya Tambahan</Link></li>
            <li><Link href="#opex">Biaya Operasional</Link></li>
            <li><Link href="#payback">Payback Period</Link></li>
            <li><Link href="#cara-hemat">Optimasi Investasi</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Tools Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/kalkulator">→ Kalkulator Kebutuhan Air</Link></li>
            <li><Link to="/layanan/feasibility">→ Feasibility Study</Link></li>
            <li><Link to="/layanan/audit">→ Audit Sistem</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Artikel Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/artikel/cara-pilih-vendor-water-treatment">→ Cara Pilih Vendor</Link></li>
            <li><Link to="/artikel/jadwal-perawatan-ro">→ Jadwal Perawatan</Link></li>
            <li><Link to="/artikel/kapasitas-swro-resort">→ Kapasitas SWRO Resort</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>

    </>
  );
};

export default ArtikelBiayaInstalasiRoIndustri;
