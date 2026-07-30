import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, Wrench, Factory, Calculator, Droplet, Microscope } from 'lucide-react';


const ProdukLimbah = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.prod-hero{height:300px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:8rem;margin-bottom:2rem;background:linear-gradient(135deg,#1a3050,#0d5fa8)}
.spec-table{width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:.9rem}
.spec-table tr:nth-child(odd) td{background:var(--gray)}
.spec-table td{padding:.7rem 1rem;border-bottom:1px solid var(--border)}
.spec-table td:first-child{font-weight:600;color:var(--navy);width:45%}


` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/produk">Produk &amp; Solusi</Link> › Pengolahan Air Limbah</div>
    <h1>Pengolahan Air Limbah Industri &amp; ZLD Indonesia</h1>
    <p>Sistem pengolahan dan daur ulang air limbah industri menggunakan teknologi membran MBR, UF, dan RO untuk mencapai standar buang atau Zero Liquid Discharge (ZLD).</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[3rem] items-start">
      <div>
        <div className="h-[300px] rounded-[14px] flex items-center justify-center text-[8rem] mb-[2rem] text-white " style={{"background":"none","padding":"0","height":"auto","display":"block"}}><picture>
  <source srcSet="images/foto-pemasangan-lapangan.webp" type="image/webp" />
  <img src="images/foto-pemasangan-lapangan.jpg" alt="Sistem pengolahan air limbah industri MBR ZLD untuk pabrik Indonesia" style={{"width":"100%","height":"auto","maxHeight":"480px","objectFit":"cover","borderRadius":"14px","display":"block"}} />
</picture></div>
        
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p>Industri Indonesia menghadapi tekanan ganda dalam pengelolaan air: <strong>regulasi baku mutu air limbah</strong> (Permen LHK 5/2014, 68/2016, 5/2021) yang semakin ketat, dan <strong>biaya air baku</strong> yang terus meningkat. Sistem pengolahan dan daur ulang air limbah modern menjawab keduanya sekaligus — mengubah biaya kepatuhan menjadi penghematan operasional.</p>
<p>PT Tirta Sumber Makmur merancang dan membangun <strong>sistem pengolahan air limbah industri</strong> berbasis teknologi membran terkini: MBR (Membrane Bioreactor) untuk limbah organik tinggi, UF + RO untuk daur ulang, hingga <strong>ZLD (Zero Liquid Discharge)</strong> dengan evaporator dan crystallizer untuk industri yang harus zero discharge. Kami telah membangun sistem untuk APP (pulp &amp; paper), PT Sasa Inti (food), dan industri tekstil di Karawang dan Bandung.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Pendekatan Pengolahan Limbah TSM</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p>Tidak semua industri butuh ZLD penuh — solusi yang tepat tergantung karakteristik limbah, regulasi yang berlaku, dan economic value air daur ulang. TSM menyusun pendekatan bertingkat:</p>
<ul style={{"paddingLeft":"1.4rem","margin":".8rem 0"}}>
  <li style={{"marginBottom":".5rem"}}><strong>Tier 1 — Compliance Treatment</strong>: Pengolahan agar memenuhi baku mutu untuk dibuang ke badan air. Konvensional: aerobic + sedimentation + sand filter + chlorination. Modern: <strong>MBR</strong> (Membrane Bioreactor) — kombinasi biological + UF dalam satu tank, menghasilkan effluent kualitas jauh di atas baku mutu, footprint 50% lebih kecil.</li>
  <li style={{"marginBottom":".5rem"}}><strong>Tier 2 — Water Reuse</strong>: Effluent MBR → UF → RO untuk menghasilkan air daur ulang yang dapat dipakai sebagai cooling tower makeup, flushing toilet, atau bahkan air proses sekunder. Recovery 60–80% effluent sebagai air bersih.</li>
  <li style={{"marginBottom":".5rem"}}><strong>Tier 3 — Zero Liquid Discharge (ZLD)</strong>: Brine dari RO diproses lebih lanjut dengan evaporator (mechanical vapor recompression atau multi-effect evaporator) lalu crystallizer untuk menghasilkan kristal garam. Tidak ada effluent cair — hanya solid waste.</li>
</ul>
<p>ZLD adalah investasi besar (typical 5–15 milyar untuk kapasitas industri menengah) dengan operating cost tinggi. Karena itu TSM menganalisis bisnis kasus klien sebelum merekomendasikan tier yang tepat — terkadang Tier 2 sudah cukup memenuhi target compliance dan ROI.</p>
</div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Spesifikasi Teknis</h2>
        <table className="w-full border-collapse my-[1.5rem] text-[0.9rem] ">
          <tbody><tr><td>Teknologi</td><td>MBR + UF + RO</td></tr>
          <tr><td>Recovery Air</td><td>80 – 95%</td></tr>
          <tr><td>COD Removal</td><td>&gt; 98%</td></tr>
          <tr><td>TSS Output</td><td>&lt; 5 ppm</td></tr>
          <tr><td>BOD Output</td><td>&lt; 10 ppm</td></tr>
          <tr><td>Opsi</td><td>Zero Liquid Discharge (ZLD)</td></tr>
        </tbody></table>
        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Fitur Utama</h2>
        <ul className="flex flex-col text-[0.9rem] text-text ">
          <li>Membrane Bioreactor (MBR) untuk treatment biologis</li>
          <li>Ultrafiltrasi polishing pre-RO</li>
          <li>RO untuk recycle air berkualitas tinggi</li>
          <li>Evaporator/crystallizer untuk ZLD (opsional)</li>
          <li>Sistem reject management terintegrasi</li>
          <li>Monitoring online parameter limbah</li>
          <li>Compliance BMAL (Baku Mutu Air Limbah)</li>
          <li>Laporan compliance regulasi otomatis</li>
        </ul>
        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt-sm">Aplikasi</h2>
        <div className="flex flex-wrap gap-2 mt-[0.8rem] ">
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Industri tekstil (pewarnaan, finishing)</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Industri makanan dan minuman</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Fasilitas laundry skala besar</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Hotel dan resort bintang</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Industri pelapisan logam</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Kawasan industri terpadu</span>
        </div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Keunggulan Sistem Limbah TSM</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<ul style={{"paddingLeft":"1.4rem","margin":".8rem 0"}}>
  <li style={{"marginBottom":".55rem"}}><strong>Pendekatan engineering, bukan jualan</strong> — Kami tidak akan menawarkan ZLD jika MBR + reuse sudah cukup. Bisnis kasus dan environmental compliance dianalisis dulu sebelum desain.</li>
  <li style={{"marginBottom":".55rem"}}><strong>MBR dengan modul Toray atau Pentair</strong> — Hollow fiber atau flat sheet sesuai karakteristik limbah. Membrane lifetime 7–10 tahun.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Pilot test sebelum full-scale</strong> — Untuk limbah complex (tekstil dengan dye, farmasi dengan API), TSM menjalankan pilot 1–2 m³/hari di lokasi klien selama 4–8 minggu untuk validasi desain sebelum komitmen full-scale.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Compliance dengan baku mutu Indonesia</strong> — Tim engineer memahami persyaratan KLHK dan Dinas LH provinsi: BOD, COD, TSS, ammonia, sulfide, fenol, logam berat sesuai industri masing-masing (Permen LHK).</li>
  <li style={{"marginBottom":".55rem"}}><strong>Operator training &amp; SOP</strong> — Sistem MBR dan ZLD lebih kompleks dari WWTP konvensional. TSM memberikan training mendalam dan SOP lengkap untuk operasi safe dan compliant.</li>
</ul>
</div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Studi Kasus Aplikasi</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p><strong>ZLD Pabrik Tekstil di Karawang</strong> — TSM membangun sistem MBR + RO + Evaporator 100 m³/hari untuk pabrik dyeing yang harus zero discharge sesuai aturan kawasan industri. Recovery air 85%, COD effluent zero, kristal garam dijual ke industri kimia. Investasi kembali dalam 4 tahun dari penghematan air baku dan kepatuhan regulasi.</p>
<p><strong>MBR + Reuse di PT Sosro</strong> — Sistem MBR 200 m³/hari mengolah limbah pabrik minuman menjadi air kualitas tinggi. RO downstream menghasilkan air daur ulang untuk cooling tower dan flushing, mengurangi konsumsi air baku PDAM hingga 35%. Effluent sisa jauh di bawah baku mutu untuk dibuang.</p>
</div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Pertanyaan yang Sering Ditanyakan</h2>
<div className="" style={{"fontSize":".94rem","lineHeight":"1.75","color":"var(--text)"}}>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apa beda MBR dengan WWTP konvensional?</h3>
<p>WWTP konvensional pakai sedimentation tank dan sand filter — TSS effluent biasanya 20–30 mg/L. MBR menggunakan UF membrane langsung di bioreactor — TSS effluent &lt;1 mg/L, BOD &lt;5 mg/L, ammonia &lt;1 mg/L. Footprint MBR 30–50% lebih kecil dan kualitas effluent jauh lebih baik untuk reuse.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa investasi sistem ZLD untuk industri menengah?</h3>
<p>Tergantung karakteristik limbah dan kapasitas. Industri menengah (50–200 m³/hari) typical Rp 5–15 milyar untuk full ZLD. Operating cost 0,8–2,5 USD/m³. ROI tercapai jika harga air baku lokal tinggi atau ada penalti environmental yang signifikan.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah industri saya wajib ZLD?</h3>
<p>Sebagian besar industri tidak wajib ZLD — hanya wajib memenuhi baku mutu effluent (Permen LHK). Wajib ZLD biasanya untuk industri di kawasan tertentu (Cikarang, Karawang industrial zone) atau yang dekat sumber air bersih masyarakat. TSM bantu evaluasi regulasi yang berlaku untuk Anda.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa lama proyek pengolahan limbah dari pemesanan ke commissioning?</h3>
<p>Untuk MBR menengah: 6–10 bulan termasuk engineering, civil, manufacturing, instalasi, dan commissioning. Untuk ZLD lengkap: 12–18 bulan. TSM memberikan timeline detail di proposal dengan milestone deliverables.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah TSM melayani service &amp; operation post-commissioning?</h3>
<p>Ya. Kami menawarkan kontrak O&amp;M (Operation &amp; Maintenance) di mana tim teknis TSM mengoperasikan sistem secara penuh atau menyediakan supervisi rutin. Pilihan populer untuk klien yang fokus core business dan tidak ingin handle operasi WWTP sendiri.</p>
<p style={{"marginTop":"1.2rem"}}>Pengolahan air limbah modern bukan lagi sekadar biaya kepatuhan — ia adalah peluang untuk mengubah water footprint industri menjadi keunggulan kompetitif. Konsultasikan kondisi limbah dan target compliance Anda dengan tim TSM untuk mendapatkan analisis bisnis kasus dan rekomendasi solusi yang tepat.</p>
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
            <li><Link to="/artikel/zld-zero-liquid">📘 Zero Liquid Discharge (ZLD): Masa Depan Pengelolaan Air Limbah</Link></li>
<li><Link to="/artikel/studi-kasus-ro-tekstil">📊 Studi Kasus: RO &amp; Recycle di Pabrik Tekstil Karawang</Link></li>
<li><Link to="/industri/manufaktur"><Factory className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Solusi Water Treatment untuk Industri Manufaktur</Link></li>

          </ul>
        </div>
        <div className="info-box" style={{"marginTop":"2rem"}}>
          <strong>📚 Baca Juga</strong>
          <ul style={{"marginTop":".75rem","paddingLeft":"1.2rem"}}>
            <li><Link to="/artikel/zld-zero-liquid">♻️ ZLD Zero Liquid Discharge: Solusi Tekstil Ramah Lingkungan</Link></li>
            <li><Link to="/industri/manufaktur"><Factory className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Solusi untuk Industri Manufaktur</Link></li>
            <li><Link to="/produk/uf"><Droplet className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Ultrafiltrasi (UF)</Link></li>
            <li><Link to="/produk/membran"><Microscope className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Elemen Membran</Link></li>
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

export default ProdukLimbah;
