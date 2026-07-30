import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, Wrench, Factory, Calculator, Waves } from 'lucide-react';


const ProdukPompa = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.prod-hero{height:300px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:8rem;margin-bottom:2rem;background:linear-gradient(135deg,#1a2d42,#0d5fa8)}
.spec-table{width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:.9rem}
.spec-table tr:nth-child(odd) td{background:var(--gray)}
.spec-table td{padding:.7rem 1rem;border-bottom:1px solid var(--border)}
.spec-table td:first-child{font-weight:600;color:var(--navy);width:45%}


` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/produk">Produk &amp; Solusi</Link> › Komponen Mekanikal</div>
    <h1>Pompa Tekanan Tinggi &amp; Pressure Vessel RO</h1>
    <p>Pompa high-pressure dan pressure vessel berkualitas tinggi dari merek terkemuka dunia untuk sistem RO industri dan komersial. Stok tersedia dan siap kirim.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[3rem] items-start">
      <div>
        <div className="h-[300px] rounded-[14px] flex items-center justify-center text-[8rem] mb-[2rem] text-white " style={{"background":"none","padding":"0","height":"auto","display":"block"}}><picture>
  <source srcSet="images/foto-bengkel.webp" type="image/webp" />
  <img src="images/foto-bengkel.jpg" alt="Pompa tekanan tinggi high-pressure pump dan pressure vessel untuk RO industri Indonesia" style={{"width":"100%","height":"auto","maxHeight":"480px","objectFit":"cover","borderRadius":"14px","display":"block"}} />
</picture></div>
        
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p><strong>Pompa tekanan tinggi (high-pressure pump)</strong> adalah jantung sistem RO. Untuk BWRO bekerja pada 12–20 bar; untuk SWRO bisa mencapai 60–80 bar. Memilih pompa yang salah berarti konsumsi listrik membengkak, membran cepat rusak akibat tekanan tidak stabil, atau sistem kerap berhenti karena pompa gagal di tengah operasi.</p>
<p>PT Tirta Sumber Makmur adalah distributor pompa <strong>Grundfos</strong> (multi-stage CR/CRN), <strong>Danfoss</strong> (axial piston APP untuk SWRO), <strong>CAT Pumps</strong> (plunger untuk SWRO kecil-menengah), dan <strong>Hydra-Cell</strong>. Selain pompa, kami menyediakan <strong>pressure vessel</strong> dari Codeline, Protec, dan Wave Cyber dengan sertifikasi ASME/PED untuk konfigurasi 1, 2, 3, atau 6 elemen membran. Stok di Bekasi siap kirim ke seluruh Indonesia.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Memilih Pompa RO yang Tepat</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p>Tiga parameter utama pemilihan pompa RO:</p>
<ul style={{"paddingLeft":"1.4rem","margin":".8rem 0"}}>
  <li style={{"marginBottom":".5rem"}}><strong>Flow rate</strong> — Total feed flow sistem (= produk flow / recovery). Misalnya RO 50 m³/hari dengan recovery 75% butuh feed flow ~67 m³/hari atau ~2,8 m³/jam.</li>
  <li style={{"marginBottom":".5rem"}}><strong>Tekanan operasi</strong> — BW: 12–18 bar; SW: 55–80 bar; LPRO: 7–10 bar. Tekanan ditentukan oleh osmotic pressure feed (~7 bar tiap 10.000 ppm TDS) plus pressure drop sistem.</li>
  <li style={{"marginBottom":".5rem"}}><strong>NPSH available</strong> — Net Positive Suction Head harus melebihi NPSH required pompa. Penting untuk mencegah kavitasi pompa.</li>
</ul>
<p><strong>Pompa multi-stage centrifugal</strong> (Grundfos CR series) cocok untuk BWRO dan TWRO karena efisien (75–82%) dan tahan operasi 24/7. <strong>Pompa axial piston</strong> (Danfoss APP) menjadi standar SWRO modern karena efisiensi sangat tinggi (&gt;90%) dan dapat dipasangkan dengan ERD untuk recovery energi. <strong>Plunger pump</strong> (CAT Pumps) cocok untuk SWRO skala kecil 1–10 m³/hari dengan biaya investasi lebih rendah.</p>
</div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Spesifikasi Teknis</h2>
        <table className="w-full border-collapse my-[1.5rem] text-[0.9rem] ">
          <tbody><tr><td>Pompa Merek</td><td>Grundfos, Danfoss, CAT Pumps, Pentair</td></tr>
          <tr><td>Pressure Vessel</td><td>Code Line, Pentair, Codeline (FRP)</td></tr>
          <tr><td>Material PV</td><td>FRP ASME / SS 316L</td></tr>
          <tr><td>Ukuran PV</td><td>2,5", 4", 8", 16" diameter</td></tr>
          <tr><td>Tekanan Rating</td><td>300 – 1200 psi</td></tr>
          <tr><td>Port</td><td>Side port, End port, berbagai konfigurasi</td></tr>
        </tbody></table>
        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Fitur Utama</h2>
        <ul className="flex flex-col text-[0.9rem] text-text ">
          <li>Pompa multistage Grundfos CM, CR, CRN series</li>
          <li>Pompa horizontal CAT Pumps untuk tekanan tinggi</li>
          <li>Pressure vessel FRP non-korosif ultra-ringan</li>
          <li>Pressure vessel SS 316L untuk aplikasi higienis</li>
          <li>Tersedia dalam berbagai panjang dan jumlah element</li>
          <li>Fitting dan port stainless steel</li>
          <li>Endcap dan connector untuk semua merek membran</li>
          <li>Garansi resmi produsen</li>
        </ul>
        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt-sm">Aplikasi</h2>
        <div className="flex flex-wrap gap-2 mt-[0.8rem] ">
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Sistem RO industri skala besar</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Sistem RO komersial dan gedung</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Sistem desalinasi SWRO</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Retrofit dan upgrade pompa sistem lama</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Penggantian pressure vessel rusak</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Proyek EPC water treatment</span>
        </div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Keunggulan Pompa dari TSM</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<ul style={{"paddingLeft":"1.4rem","margin":".8rem 0"}}>
  <li style={{"marginBottom":".55rem"}}><strong>Distributor resmi merek-merek tier-1</strong> — Grundfos, Danfoss, CAT Pumps. Pompa asli dengan garansi pabrikan, bukan tiruan atau remanufactured.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Konsultasi sizing gratis</strong> — Engineer TSM menggunakan software vendor (Grundfos GO, Danfoss Coolselector) untuk memilih pompa dengan efisiensi maksimal pada operating point sistem Anda.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Pressure vessel ASME/PED certified</strong> — Codeline, Protec, dan Wave Cyber dengan sertifikat tekanan resmi. Penting untuk inspeksi K3 dan asuransi pabrik.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Stok di Bekasi untuk model populer</strong> — Pompa Grundfos CR 5/10/15/20/32/45 dan vessel 4040/8040 1/2/3/6 elemen umumnya tersedia stok untuk pengiriman 1–3 hari.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Service center &amp; spare parts</strong> — Untuk Grundfos dan Danfoss, TSM memiliki teknisi terlatih dan stok spare parts untuk maintenance dan repair on-site.</li>
</ul>
</div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Kasus Penggunaan</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p><strong>Upgrade Pompa SWRO ke ERD untuk Resort Pulau Ayer</strong> — Sistem SWRO 30 m³/hari awalnya menggunakan plunger pump dengan konsumsi 7 kWh/m³. Upgrade ke Danfoss APP + ERD memangkas konsumsi ke 3,5 kWh/m³ — penghematan listrik Rp 7,5 juta per bulan, ROI tercapai dalam 16 bulan.</p>
<p><strong>Suplai Pressure Vessel untuk PLTU</strong> — TSM menyuplai 24 unit pressure vessel 8040×6 element Codeline ASME-certified untuk ekspansi sistem RO PLTU. Sertifikat tekanan dan dokumentasi lengkap diserahkan untuk audit K3 dan inspeksi PUBT.</p>
</div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Pertanyaan yang Sering Ditanyakan</h2>
<div className="" style={{"fontSize":".94rem","lineHeight":"1.75","color":"var(--text)"}}>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Pompa apa yang paling efisien untuk SWRO?</h3>
<p>Untuk SWRO modern, pompa axial piston Danfoss APP series adalah standar industri dengan efisiensi &gt;90%. Dipasangkan dengan ERD seperti Energy Recovery PX atau Danfoss iSave, total konsumsi sistem turun ke 2,5–3,5 kWh/m³.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa lama umur pompa RO?</h3>
<p>Pompa multi-stage Grundfos: 8–12 tahun dengan maintenance rutin. Plunger pump: 5–8 tahun (high wear pada plunger dan seal). Axial piston Danfoss: 10–15 tahun dengan oil change rutin. Umur tergantung kualitas air baku dan operasi.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah TSM melayani repair pompa?</h3>
<p>Ya. Untuk Grundfos dan Danfoss, TSM memiliki tim teknisi terlatih dan kontrak service. Repair on-site (di lokasi klien) untuk perbaikan minor; major overhaul biasanya dilakukan di workshop Bekasi dengan estimasi 1–2 minggu.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Pressure vessel berapa elemen yang sebaiknya dipilih?</h3>
<p>Untuk fleksibilitas dan reliability: 6-element vessel (8040×6) standar untuk industri besar, 3-element untuk komersial menengah, 1-element untuk komersial kecil. Multiple short vessel lebih flexible tapi cost lebih tinggi vs few long vessel.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Bisakah pompa lama saya diintegrasikan dengan VFD?</h3>
<p>Bisa, untuk pompa centrifugal seperti Grundfos CR. VFD menyesuaikan kecepatan motor sesuai demand, menghemat 25–40% listrik. TSM dapat suplai VFD Danfoss/ABB dan integrasinya dengan sistem kontrol existing.</p>
<p style={{"marginTop":"1.2rem"}}>Pompa dan pressure vessel adalah komponen yang menentukan reliability dan efisiensi energi sistem RO Anda untuk dekade ke depan. Konsultasikan kebutuhan upgrade atau pembelian baru dengan tim TSM untuk mendapatkan rekomendasi sizing yang tepat dan harga distributor langsung dari pabrikan.</p>
</div>
      </div>
      <aside className="lg:sticky lg:top-[88px]">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Minta Penawaran</h4>
          <p style={{"fontSize":".86rem","color":"var(--muted)","lineHeight":"1.65","marginBottom":"1rem"}}>Dapatkan spesifikasi detail dan harga terbaik dari tim kami.</p>
          <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-accent text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,180,216,0.32)] hover:bg-white hover:text-blue hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center","marginBottom":".6rem"}} to="/kontak"><ClipboardList className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Minta Penawaran</Link>
          <Link href="https://wa.me/62818719119" className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-blue text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-blue hover:text-white hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center"}} target="_blank" rel="noopener noreferrer">💬 WhatsApp Kami</Link>
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
          <Link href="tel:+62818719119" className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center","fontSize":".82rem"}}>📞 021-88871689</Link>
        </div>
      </aside>
    </div>
  </div>
        <div className="info-box" style={{"marginTop":"2rem"}}>
          <strong>📚 Baca Juga</strong>
          <ul style={{"marginTop":".75rem","paddingLeft":"1.2rem"}}>
            <li><Link to="/produk/ro-industri"><Factory className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Sistem RO Industri</Link></li>
            <li><Link to="/produk/desalinasi"><Waves className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> SWRO Desalinasi Air Laut</Link></li>
            <li><Link to="/produk/instrumen">📊 Instrumen Monitoring Air</Link></li>
            <li><Link to="/layanan"><Wrench className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Layanan Servis &amp; Pemasangan</Link></li>
            <li><Link to="/kalkulator"><Calculator className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Hitung Kebutuhan Sistem Anda (Kalkulator)</Link></li>
          </ul>
        </div>

</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Tertarik dengan Produk Ini?</h2>
    <p>Tim engineer kami siap membantu Anda menentukan spesifikasi yang tepat sesuai kebutuhan.</p>
    <div className="flex gap-4 justify-center flex-wrap"><Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak"><ClipboardList className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Minta Penawaran Harga</Link><Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/layanan"><Wrench className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Lihat Layanan Kami</Link></div>
  </div>
</div>

    </>
  );
};

export default ProdukPompa;
