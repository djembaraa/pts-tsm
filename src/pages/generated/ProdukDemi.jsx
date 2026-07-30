import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory } from 'lucide-react';
import Button from '../../components/ui/Button';

const ProdukDemi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.prod-hero{height:300px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:8rem;margin-bottom:2rem;background:linear-gradient(135deg,#0d3a6b,#1e90d6)}
.spec-table{width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:.9rem}
.spec-table tr:nth-child(odd) td{background:var(--gray)}
.spec-table td{padding:.7rem 1rem;border-bottom:1px solid var(--border)}
.spec-table td:first-child{font-weight:600;color:var(--navy);width:45%}


` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/produk">Produk &amp; Solusi</Link> › Demineralisasi</div>
    <h1>Demineralisasi &amp; EDI</h1>
    <p>Sistem Electrodeionization (EDI) dan demineralisasi resin untuk produksi air ultra-murni continuous tanpa regenerasi kimia, ideal untuk farmasi, elektronik, dan pembangkit listrik.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[3rem] items-start">
      <div>
        <div className="h-[300px] rounded-[14px] flex items-center justify-center text-[8rem] mb-[2rem] text-white ">⚗️</div>
        
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p><strong>Demineralisasi (DM) dan Electrodeionization (EDI)</strong> adalah teknologi untuk menghasilkan air ultra-murni dengan konduktivitas mendekati 0,055 µS/cm — tingkat kemurnian yang dibutuhkan industri farmasi (Water for Injection, Purified Water), elektronik dan semikonduktor, pembangkit listrik tekanan tinggi, serta laboratorium analitik kelas berat. Air ini bebas hampir total dari mineral terlarut, organik, dan ion berbahaya untuk proses produksi sensitif.</p>
<p>PT Tirta Sumber Makmur menyediakan dua pendekatan: <strong>demineralisasi resin konvensional</strong> (cation-anion exchanger) untuk aplikasi yang masih membutuhkan regenerasi kimia, dan <strong>RO + EDI</strong> sebagai solusi modern bebas regenerasi yang menghasilkan air kontinu tanpa interupsi. Sistem RO+EDI TSM telah diadopsi PT Sasa Inti, fasilitas farmasi nasional bersertifikat CPOB, dan PLTU dengan kebutuhan boiler feed water tekanan tinggi.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Cara Kerja DM dan EDI</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p><strong>Demineralisasi resin tradisional</strong> menggunakan kolom cation exchanger (mengikat Ca²⁺, Mg²⁺, Na⁺) diikuti anion exchanger (mengikat Cl⁻, SO₄²⁻, HCO₃⁻). Setelah resin jenuh, diregenerasi dengan HCl atau H₂SO₄ untuk cation, dan NaOH untuk anion. Sistem ini menghasilkan air dengan konduktivitas &lt; 1 µS/cm tapi membutuhkan handling kimia berbahaya dan menghasilkan limbah regenerasi.</p>
<p><strong>Electrodeionization (EDI)</strong> menggabungkan resin penukar ion dan membran selektif dalam medan listrik DC. Ion-ion sisa dari permeate RO ditarik ke membran melalui resin yang terus-menerus diregenerasi secara elektrik — tanpa kimia eksternal. Air output EDI mencapai konduktivitas 0,055–0,1 µS/cm secara kontinu, ideal untuk aplikasi yang tidak boleh berhenti.</p>
</div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Spesifikasi Teknis</h2>
        <table className="w-full border-collapse my-[1.5rem] text-[0.9rem] ">
          <tbody><tr><td>Resistivitas</td><td>1 – 18 MΩ·cm</td></tr>
          <tr><td>TDS Output</td><td>&lt; 0,1 ppm</td></tr>
          <tr><td>Silika</td><td>&lt; 20 ppb</td></tr>
          <tr><td>Kapasitas</td><td>0,5 – 50 m³/jam</td></tr>
          <tr><td>Recovery</td><td>90 – 95%</td></tr>
          <tr><td>Regenerasi</td><td>Tidak perlu (EDI)</td></tr>
        </tbody></table>
        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Fitur Utama</h2>
        <ul className="flex flex-col text-[0.9rem] text-text ">
          <li>Teknologi EDI tanpa bahan kimia regenerasi</li>
          <li>Resin mixed-bed berkualitas tinggi sebagai backup</li>
          <li>Output resistivitas konsisten dan stabil</li>
          <li>Monitoring conductivity/resistivitas real-time</li>
          <li>Sistem sanitasi hot water atau UV terintegrasi</li>
          <li>Desain loop recirculation untuk menjaga kemurnian</li>
          <li>Compliance USP/Ph.Eur untuk aplikasi farmasi</li>
          <li>Tidak ada downtime untuk regenerasi</li>
        </ul>
        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt-sm">Aplikasi</h2>
        <div className="flex flex-wrap gap-2 mt-[0.8rem] ">
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Produksi obat (Purified Water, WFI)</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Boiler bertekanan ultra-tinggi (PLTU)</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Industri semikonduktor dan panel surya</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Industri minuman premium</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Laboratorium dan R&amp;D</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Industri optik dan laser</span>
        </div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Keunggulan RO + EDI TSM</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p>Kombinasi RO + EDI adalah standar emas air ultra-murni modern. Berikut keunggulan engineering sistem TSM:</p>
<ul style={{"paddingLeft":"1.4rem","margin":".8rem 0"}}>
  <li style={{"marginBottom":".55rem"}}><strong>Tidak butuh kimia regenerasi</strong> — EDI tidak memerlukan HCl, H₂SO₄, atau NaOH. Tidak ada limbah regenerasi yang berbahaya, tidak ada handling kimia, tidak ada storage tank kimia korosif.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Air ultra-murni kontinu</strong> — Produksi tidak terinterupsi oleh siklus regenerasi (yang pada DM resin bisa berlangsung 2–4 jam, beberapa kali sehari).</li>
  <li style={{"marginBottom":".55rem"}}><strong>Memenuhi USP, EP, JP &amp; CPOB</strong> — Output sistem RO+EDI TSM sesuai standar Purified Water USP &lt;1231&gt;, European Pharmacopoeia, Japanese Pharmacopoeia, dan persyaratan CPOB BPOM untuk industri farmasi.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Modul EDI Suez/Evoqua</strong> — Kami menggunakan modul EDI tier-1 dengan track record terbukti di puluhan fasilitas farmasi internasional.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Validasi IQ/OQ/PQ untuk farmasi</strong> — Untuk klien farmasi, TSM menyediakan dokumentasi validasi lengkap (Installation Qualification, Operational Qualification, Performance Qualification) sesuai persyaratan audit BPOM.</li>
</ul>
</div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Studi Kasus Aplikasi</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p><strong>Fasilitas Farmasi Bersertifikat CPOB</strong> — TSM membangun sistem RO 2-pass + EDI 5 m³/jam untuk produksi tablet dan injeksi steril. Air output konsisten konduktivitas &lt; 0,1 µS/cm, TOC &lt; 100 ppb, memenuhi Purified Water USP. Dokumentasi validasi diserahkan lengkap untuk audit BPOM, dengan SOP operasional dan training operator.</p>
<p><strong>PLTU Boiler Feed Water</strong> — Sistem RO + EDI 100 m³/jam menggantikan demineralisasi resin lama yang menghabiskan 2 ton HCl dan NaOH per bulan. Selain menghapus konsumsi kimia, sistem baru menurunkan total cost of ownership 35% dan menghilangkan kebutuhan storage tank kimia berbahaya.</p>
</div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Pertanyaan yang Sering Ditanyakan</h2>
<div className="" style={{"fontSize":".94rem","lineHeight":"1.75","color":"var(--text)"}}>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Kapan sebaiknya pilih DM resin vs RO+EDI?</h3>
<p>DM resin cocok untuk kapasitas kecil (&lt; 5 m³/jam) dengan air baku TDS rendah, atau jika ada kebutuhan teknis spesifik untuk air dengan kandungan tertentu. RO+EDI lebih unggul untuk kapasitas menengah-besar, operasi kontinu, dan jika menghindari limbah kimia regenerasi adalah prioritas.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apa standar air murni untuk farmasi Indonesia?</h3>
<p>BPOM mengacu pada CPOB yang mengadopsi USP &lt;1231&gt;, EP, dan JP. Untuk Purified Water: konduktivitas &lt; 1,3 µS/cm pada 25°C, TOC &lt; 500 ppb, mikroba &lt; 100 CFU/mL. Untuk Water for Injection: lebih ketat, biasanya butuh distilasi atau RO+EDI+UF + UV setelah Purified Water.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa konsumsi listrik EDI?</h3>
<p>EDI mengonsumsi listrik DC sekitar 0,1–0,2 kWh per m³ — sangat efisien dibanding distilasi yang membutuhkan 50+ kWh/m³. Plus tidak ada konsumsi kimia regenerasi sama sekali.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah EDI butuh perawatan khusus?</h3>
<p>Modul EDI sangat low-maintenance: cukup CIP berkala 1–2x setahun dan inspeksi visual. Umur modul 5–10 tahun jika kualitas air feed terjaga (TDS &lt; 30 ppm dan hardness &lt; 1 ppm — yang dijamin oleh RO upstream).</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah TSM menyediakan dokumen validasi farmasi?</h3>
<p>Ya. Untuk proyek farmasi, TSM menyertakan paket dokumentasi lengkap: User Requirement Specification, Functional Specification, Design Qualification, IQ/OQ/PQ protocols dan reports, plus training operator dan SOP operasional yang siap untuk audit BPOM dan internal QA.</p>

<p style={{"marginTop":"1.2rem"}}>Air ultra-murni adalah pondasi proses produksi yang konsisten dan compliant. Tim TSM telah membangun sistem demineralisasi dan EDI untuk industri farmasi bersertifikat CPOB, PLTU dengan boiler tekanan tinggi, dan fasilitas kimia di seluruh Indonesia. Konsultasikan kebutuhan ultra-pure water Anda untuk mendapatkan rekomendasi konfigurasi dan paket validasi yang sesuai standar audit.</p>
</div>
      </div>
      <aside className="lg:sticky lg:top-[88px]">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Minta Penawaran</h4>
          <p style={{"fontSize":".86rem","color":"var(--muted)","lineHeight":"1.65","marginBottom":"1rem"}}>Dapatkan spesifikasi detail dan harga terbaik dari tim kami.</p>
          <Button variant="primary" to="/kontak" >📋 Minta Penawaran</Button>
          <Button variant="primary" href="https://wa.me/62818719119" >💬 WhatsApp Kami</Button>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Produk Terkait</h4>
          <ul style={{"display":"flex","flexDirection":"column","gap":".65rem"}}>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/ro-industri">→ RO Industri Skala Besar</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/desalinasi">→ Desalinasi Air Laut</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/membran">→ Elemen Membran RO</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/kimia">→ Kimia Water Treatment</Link></li>
            <li><Link style={{"fontSize":".84rem","fontWeight":"600","color":"var(--blue)","display":"block"}} to="/produk">→ Semua Produk</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem]" style={{"background":"linear-gradient(145deg,var(--navy),var(--blue))","border":"none"}}>
          <h4 style={{"color":"rgba(255,255,255,.45)","borderColor":"rgba(255,255,255,.15)"}}>Konsultasi Teknis</h4>
          <p style={{"fontSize":".86rem","opacity":".84","color":"#fff","lineHeight":"1.65","marginBottom":"1rem"}}>Hubungi engineer kami untuk rekomendasi sistem yang tepat untuk kebutuhan Anda.</p>
          <Button variant="white" to="/tel:+62818719119" >📞 021-88871689</Button>
        </div>
      </aside>
    </div>
  </div>

        <div className="info-box" style={{"marginTop":"2rem"}}>
          <strong>📚 Baca Juga</strong>
          <ul style={{"marginTop":".75rem","paddingLeft":"1.2rem"}}>
            <li><Link to="/artikel/air-farmasi-ro-edi">📘 Standar Kualitas Air Farmasi: RO + EDI CPOB BPOM</Link></li>
<li><Link to="/industri/rs"><Factory className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Solusi Air untuk Rumah Sakit &amp; Industri Farmasi</Link></li>

          </ul>
        </div>

</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold leading-[1.15] mb-[0.65rem]">Tertarik dengan Produk Ini?</h2>
    <p className="text-[0.88rem] opacity-90 leading-[1.75] max-w-[600px] mx-auto mb-8">Tim engineer kami siap membantu Anda menentukan spesifikasi yang tepat sesuai kebutuhan.</p>
    <div className="flex gap-4 justify-center flex-wrap"><Button variant="white" to="/kontak" >📋 Minta Penawaran Harga</Button><Button variant="outline-white" to="/layanan" >🛠️ Lihat Layanan Kami</Button></div>
  </div>
</div>

    </>
  );
};

export default ProdukDemi;
