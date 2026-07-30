import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, CheckCircle2, Shield, Microscope, Building } from 'lucide-react';


const Layanan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.svc-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:1.5rem}
.svc-card{background:var(--white);border:1px solid var(--border);border-radius:12px;padding:2rem;transition:var(--t);position:relative;overflow:hidden}
.svc-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--blue),var(--accent));transform:scaleX(0);transform-origin:left;transition:var(--t)}
.svc-card:hover{transform:translateY(-4px);box-shadow:var(--shh)}.svc-card:hover::before{transform:scaleX(1)}
.svc-ico{width:56px;height:56px;background:var(--ice);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.6rem;margin-bottom:1.2rem;transition:var(--t)}
.svc-card:hover .svc-ico{background:var(--blue)}
.svc-card h3{font-size:1.05rem;font-weight:700;color:var(--navy);margin-bottom:.5rem}
.svc-card p{font-size:.87rem;color:var(--muted);line-height:1.7;margin-bottom:.8rem}
.svc-list li{font-size:.83rem;color:var(--text);display:flex;align-items:flex-start;gap:.5rem;margin-bottom:.35rem}
.svc-list li::before{content:'✔';color:var(--accent);font-weight:700;flex-shrink:0;margin-top:.1rem}
.steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(155px,1fr));gap:1rem;counter-reset:step}
.step{background:var(--white);border:1px solid var(--border);border-radius:10px;padding:1.5rem 1rem;text-align:center;position:relative;counter-increment:step;transition:var(--t)}
.step:hover{transform:translateY(-3px);box-shadow:var(--sh);border-color:var(--accent)}
.step-n{width:28px;height:28px;background:linear-gradient(135deg,var(--blue),var(--accent));color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.8rem;margin:0 auto .75rem}
.step-ico{font-size:2rem;margin-bottom:.6rem}
.step h4{font-size:.88rem;font-weight:700;color:var(--navy);margin-bottom:.3rem}
.step p{font-size:.78rem;color:var(--muted);line-height:1.55}
.pkg-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.5rem}
.pkg{border:2px solid var(--border);border-radius:12px;overflow:hidden;transition:var(--t)}
.pkg:hover{transform:translateY(-4px);box-shadow:var(--shh)}
.pkg.featured{border-color:var(--accent)}
.pkg-head{padding:1.5rem;background:var(--gray)}
.pkg.featured .pkg-head{background:linear-gradient(135deg,var(--navy),var(--blue));color:#fff}
.pkg-label{font-size:.62rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--accent);margin-bottom:.4rem}
.pkg.featured .pkg-label{color:rgba(255,255,255,.7)}
.pkg-head h3{font-size:1.15rem;font-weight:700;color:var(--navy)}
.pkg.featured .pkg-head h3{color:#fff}
.pkg-head p{font-size:.82rem;color:var(--muted);margin-top:.25rem}
.pkg.featured .pkg-head p{color:rgba(255,255,255,.7)}
.pkg-body{padding:1.5rem}
.pkg-list{margin-bottom:1.3rem}
.pkg-list li{font-size:.84rem;color:var(--text);display:flex;gap:.5rem;margin-bottom:.5rem}
.pkg-list li::before{content:'✔';color:var(--accent);font-weight:700;flex-shrink:0}

` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › Layanan</div>
    <h1>Layanan Lengkap Water Treatment</h1>
    <p>Dari desain sistem hingga perawatan jangka panjang — PT Tirta Sumber Makmur hadir sebagai mitra terpercaya di setiap tahap proyek Anda.</p>
  </div>
</div>
<section className="py-16" id="engineering">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-center max-w-[600px] mx-auto mb-[3rem] ">
      <span className="inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-ice px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem] border border-border">Engineering</span>
      <h2>Layanan Engineering &amp; Instalasi</h2>
      <p>Tim insinyur berpengalaman kami menangani seluruh aspek teknis dari desain hingga sistem beroperasi penuh.</p>
      <div className="w-[36px] h-[3px] bg-gradient-to-r from-blue to-accent rounded-[2px] mx-auto mt-[0.85rem]"></div>
    </div>
    <div className="svc-grid">
      <div className="svc-card " id="desain">
        <div className="svc-ico">📐</div><h3>Desain &amp; Perancangan Sistem</h3>
        <p>Perancangan sistem water treatment optimal berdasarkan analisis kualitas air baku, kebutuhan kapasitas, dan standar output yang diinginkan.</p>
        <ul className="svc-list"><li>Analisis kualitas air baku (lab test)</li><li>Desain sistem RO / desalinasi / UF</li><li>P&amp;ID dan engineering drawing lengkap</li><li>Spesifikasi teknis dan BOM detail</li><li>Simulasi dan kalkulasi performa sistem</li></ul>
        <Link style={{"display":"inline-block","marginTop":"1rem","color":"var(--accent)","fontWeight":"700","fontSize":".86rem"}} to="/layanan/desain">Pelajari Selengkapnya →</Link>
      </div>
      <div className="svc-card " id="instalasi">
        <div className="svc-ico">🔧</div><h3>Instalasi &amp; Komisioning</h3>
        <p>Pemasangan sistem water treatment secara profesional oleh tim teknisi bersertifikat dengan jaminan kualitas pekerjaan dan ketepatan waktu.</p>
        <ul className="svc-list"><li>Instalasi sipil, mekanikal, dan perpipaan</li><li>Wiring panel kontrol dan sistem otomasi</li><li>Komisioning dan performance test resmi</li><li>Pelatihan operator on-site</li><li>Manual operasi dan SOP lengkap</li></ul>
        <Link style={{"display":"inline-block","marginTop":"1rem","color":"var(--accent)","fontWeight":"700","fontSize":".86rem"}} to="/layanan/instalasi">Pelajari Selengkapnya →</Link>
      </div>
      <div className="svc-card " id="maintenance">
        <div className="svc-ico"><Shield className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div><h3>Pemeliharaan Preventif</h3>
        <p>Program perawatan berkala yang terstruktur untuk memastikan sistem beroperasi pada performa optimal dan mencegah kerusakan sebelum terjadi.</p>
        <ul className="svc-list"><li>Kunjungan teknisi terjadwal rutin</li><li>Penggantian filter dan cartridge berkala</li><li>CIP (Chemical Cleaning) membran RO</li><li>Analisis kualitas air output</li><li>Laporan kondisi dan rekomendasi sistem</li></ul>
        <Link style={{"display":"inline-block","marginTop":"1rem","color":"var(--accent)","fontWeight":"700","fontSize":".86rem"}} to="/layanan/maintenance">Pelajari Selengkapnya →</Link>
      </div>
      <div className="svc-card " id="darurat">
        <div className="svc-ico">🚨</div><h3>Servis Darurat 24/7</h3>
        <p>Tim teknisi siaga siap merespons panggilan darurat kapan pun dibutuhkan, meminimalkan downtime dan kerugian operasional.</p>
        <ul className="svc-list"><li>Hotline darurat 24 jam / 7 hari</li><li>Respons on-site 4–8 jam (Jabodetabek)</li><li>Diagnosa cepat dan penanganan langsung</li><li>Stok suku cadang kritis selalu tersedia</li><li>Laporan insiden dan tindakan korektif</li></ul>
        <Link style={{"display":"inline-block","marginTop":"1rem","color":"var(--accent)","fontWeight":"700","fontSize":".86rem"}} to="/layanan/darurat">Pelajari Selengkapnya →</Link>
      </div>
    </div>
  </div>
</section>
<section className="py-16" style={{"background":"var(--gray)"}}>
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-center max-w-[600px] mx-auto mb-[3rem] "><span className="inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-ice px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem] border border-border">Alur Kerja</span><h2>Proses Layanan TSM</h2><p>Proses terstruktur untuk memastikan setiap proyek berjalan lancar dan sesuai ekspektasi.</p><div className="w-[36px] h-[3px] bg-gradient-to-r from-blue to-accent rounded-[2px] mx-auto mt-[0.85rem]"></div></div>
    <div className="steps ">
      <div className="step"><div className="step-n">1</div><div className="step-ico"><ClipboardList className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div><h4>Konsultasi</h4><p>Diskusi kebutuhan dan survei lokasi</p></div>
      <div className="step"><div className="step-n">2</div><div className="step-ico"><Microscope className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div><h4>Analisis Air</h4><p>Uji laboratorium kualitas air baku</p></div>
      <div className="step"><div className="step-n">3</div><div className="step-ico">📐</div><h4>Desain Sistem</h4><p>Perancangan teknis lengkap</p></div>
      <div className="step"><div className="step-n">4</div><div className="step-ico">📝</div><h4>Penawaran</h4><p>Proposal teknis &amp; komersial transparan</p></div>
      <div className="step"><div className="step-n">5</div><div className="step-ico">🔧</div><h4>Instalasi</h4><p>Pemasangan oleh teknisi bersertifikat</p></div>
      <div className="step"><div className="step-n">6</div><div className="step-ico"><CheckCircle2 className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div><h4>Komisioning</h4><p>Performance test dan serah terima</p></div>
      <div className="step"><div className="step-n">7</div><div className="step-ico"><Shield className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div><h4>After Sales</h4><p>Perawatan &amp; dukungan jangka panjang</p></div>
    </div>
  </div>
</section>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-center max-w-[600px] mx-auto mb-[3rem] "><span className="inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-ice px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem] border border-border">Konsultasi &amp; Proyek</span><h2>Layanan Konsultasi &amp; Proyek</h2><p>Solusi komprehensif dari studi kelayakan hingga pelaksanaan proyek turnkey.</p><div className="w-[36px] h-[3px] bg-gradient-to-r from-blue to-accent rounded-[2px] mx-auto mt-[0.85rem]"></div></div>
    <div className="svc-grid">
      <div className="svc-card " id="audit">
        <div className="svc-ico"><ClipboardList className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div><h3>Audit Kualitas Air</h3>
        <p>Evaluasi menyeluruh kualitas air baku dan output sistem eksisting, disertai rekomendasi perbaikan tertulis yang actionable.</p>
        <ul className="svc-list"><li>Pengambilan dan analisis sampel air</li><li>Evaluasi performa sistem eksisting</li><li>Identifikasi masalah dan akar penyebab</li><li>Laporan rekomendasi perbaikan tertulis</li></ul>
        <Link style={{"display":"inline-block","marginTop":"1rem","color":"var(--accent)","fontWeight":"700","fontSize":".86rem"}} to="/layanan/audit">Pelajari Selengkapnya →</Link>
      </div>
      <div className="svc-card " id="feasibility">
        <div className="svc-ico">📊</div><h3>Studi Kelayakan</h3>
        <p>Analisis teknis dan ekonomis untuk membantu pengambilan keputusan investasi sistem water treatment yang tepat dan menguntungkan.</p>
        <ul className="svc-list"><li>Analisis ROI dan payback period</li><li>Perbandingan alternatif teknologi</li><li>Estimasi biaya CAPEX dan OPEX detail</li><li>Laporan studi kelayakan komprehensif</li></ul>
        <Link style={{"display":"inline-block","marginTop":"1rem","color":"var(--accent)","fontWeight":"700","fontSize":".86rem"}} to="/layanan/feasibility">Pelajari Selengkapnya →</Link>
      </div>
      <div className="svc-card " id="epc">
        <div className="svc-ico"><Building className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div><h3>Turnkey EPC Project</h3>
        <p>Paket lengkap Engineering, Procurement, Construction — kami tangani semua dari awal hingga sistem siap beroperasi penuh.</p>
        <ul className="svc-list"><li>Satu kontrak, satu penanggung jawab</li><li>Manajemen proyek profesional (PM)</li><li>Pengadaan material dan peralatan</li><li>Konstruksi sipil dan mekanikal</li><li>Serah terima dengan garansi sistem</li></ul>
        <Link style={{"display":"inline-block","marginTop":"1rem","color":"var(--accent)","fontWeight":"700","fontSize":".86rem"}} to="/layanan/epc">Pelajari Selengkapnya →</Link>
      </div>
      <div className="svc-card " id="sertifikasi">
        <div className="svc-ico">📜</div><h3>Sertifikasi &amp; Compliance</h3>
        <p>Bantuan pengurusan sertifikasi sistem water treatment sesuai standar regulasi nasional dan internasional yang berlaku.</p>
        <ul className="svc-list"><li>Compliance standar BPOM / SNI</li><li>Dokumentasi GMP untuk industri farmasi</li><li>Kualifikasi sistem IQ/OQ/PQ</li><li>Pendampingan audit sertifikasi eksternal</li></ul>
        <Link style={{"display":"inline-block","marginTop":"1rem","color":"var(--accent)","fontWeight":"700","fontSize":".86rem"}} to="/layanan/sertifikasi">Pelajari Selengkapnya →</Link>
      </div>
    </div>
  </div>
</section>
<section className="py-16" style={{"background":"var(--gray)"}}>
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-center max-w-[600px] mx-auto mb-[3rem] "><span className="inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-ice px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem] border border-border">Paket Perawatan</span><h2>Pilih Paket Perawatan Anda</h2><p>Kontrak perawatan tahunan yang memberikan ketenangan pikiran dan kepastian biaya operasional.</p><div className="w-[36px] h-[3px] bg-gradient-to-r from-blue to-accent rounded-[2px] mx-auto mt-[0.85rem]"></div></div>
    <div className="pkg-grid">
      <div className="pkg ">
        <div className="pkg-head"><div className="pkg-label">Basic</div><h3>Paket Basic</h3><p>Untuk sistem RO skala kecil &amp; komersial</p></div>
        <div className="pkg-body">
          <ul className="pkg-list"><li>2x kunjungan teknisi per tahun</li><li>Penggantian cartridge filter</li><li>Analisis kualitas air (2x / tahun)</li><li>Laporan kondisi sistem</li><li>Hotline teknis jam kerja</li></ul>
          <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-blue text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-blue hover:text-white hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center"}} to="/kontak">Minta Penawaran</Link>
        </div>
      </div>
      <div className="pkg featured ">
        <div className="pkg-head"><div className="pkg-label">⭐ Paling Populer</div><h3>Paket Standard</h3><p>Untuk sistem RO industri menengah</p></div>
        <div className="pkg-body">
          <ul className="pkg-list"><li>4x kunjungan teknisi per tahun</li><li>CIP membran 1x per tahun</li><li>Penggantian semua filter berkala</li><li>Analisis air komprehensif (4x)</li><li>Laporan performa bulanan</li><li>Hotline darurat 24/7</li><li>Diskon 15% suku cadang</li></ul>
          <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-accent text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,180,216,0.32)] hover:bg-white hover:text-blue hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center"}} to="/kontak">Minta Penawaran</Link>
        </div>
      </div>
      <div className="pkg ">
        <div className="pkg-head"><div className="pkg-label">Premium</div><h3>Paket Premium</h3><p>Untuk sistem RO industri besar &amp; kritis</p></div>
        <div className="pkg-body">
          <ul className="pkg-list"><li>12x kunjungan teknisi per tahun</li><li>CIP membran terjadwal penuh</li><li>Semua penggantian filter included</li><li>Monitoring online real-time</li><li>Dedicated teknisi PIC</li><li>Respons darurat prioritas</li><li>Diskon 25% suku cadang</li><li>Garansi uptime 95%</li></ul>
          <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-blue text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-blue hover:text-white hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center"}} to="/kontak">Minta Penawaran</Link>
        </div>
      </div>
    </div>
  </div>
</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Butuh Layanan Segera?</h2>
    <p>Tim kami siap membantu Anda 24/7. Hubungi sekarang untuk konsultasi gratis.</p>
    <div className="flex gap-4 justify-center flex-wrap"><Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak">📞 Hubungi Kami</Link><Link href="https://wa.me/62818719119" className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" target="_blank" rel="noopener noreferrer">💬 WhatsApp Sekarang</Link></div>
  </div>
</div>

    </>
  );
};

export default Layanan;
