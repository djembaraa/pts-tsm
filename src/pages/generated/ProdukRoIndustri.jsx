import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, Wrench, Factory, Calculator } from 'lucide-react';


const ProdukRoIndustri = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/produk">Produk &amp; Solusi</Link> › Reverse Osmosis</div>
    <h1>Sistem RO Industri Skala Besar</h1>
    <p>Sistem Reverse Osmosis industri kapasitas 1–500 m³/hari untuk pabrik, pembangkit listrik, dan fasilitas industri yang membutuhkan air proses berkualitas tinggi dalam volume besar.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[3rem] items-start">
      <div>
        <div className="h-[300px] rounded-[14px] flex items-center justify-center text-[8rem] mb-[2rem] text-white " style={{"background":"none","padding":"0","height":"auto","display":"block"}}><picture>
  <source srcSet="images/produk-ro-industri.webp" type="image/webp" />
  <img src="images/produk-ro-industri.jpg" alt="Sistem Reverse Osmosis industri TSM kapasitas besar untuk pabrik Indonesia" style={{"width":"100%","height":"auto","maxHeight":"480px","objectFit":"cover","borderRadius":"14px","display":"block"}} />
</picture></div>

        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p>Sistem <strong>Reverse Osmosis (RO) industri</strong> dari PT Tirta Sumber Makmur dirancang khusus untuk fasilitas manufaktur, pembangkit listrik, dan industri besar di Indonesia yang membutuhkan air proses berkualitas tinggi dalam volume besar dan operasi 24/7. Sejak 2002, TSM telah membangun lebih dari 200 sistem RO industri untuk klien skala nasional seperti PT Sosro, APP (Asia Pulp &amp; Paper), Pelindo, dan PT Sasa Inti — mencakup industri tekstil, makanan-minuman, pulp &amp; kertas, kimia, hingga semikonduktor.</p>
        <p>Dengan kapasitas <strong>1 hingga 500 m³ per hari</strong> dan recovery hingga 80%, sistem RO industri TSM memberikan air dengan TDS di bawah 50 ppm dari sumber air PDAM, atau di bawah 10 ppm jika digabung dengan EDI. Teknologi membran Dow Filmtec, Toray, atau Hydranautics yang kami gunakan menghasilkan rejection rate 95–99,5% untuk garam, mikroorganisme, partikel terlarut, dan kontaminan organik — memenuhi standar air proses untuk hampir seluruh aplikasi industri.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Cara Kerja Sistem RO Industri</h2>
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p>Reverse osmosis bekerja dengan prinsip mendorong air melewati membran semipermeabel pada tekanan tinggi (10–20 bar untuk air payau, hingga 70 bar untuk air laut). Membran ini memiliki pori berukuran sekitar 0,0001 mikron — cukup kecil untuk menahan ion garam, virus, bakteri, logam berat, dan molekul organik berukuran lebih besar dari air murni.</p>
        <p>Sistem RO industri TSM menggunakan konfigurasi <strong>multi-stage</strong> dengan pre-treatment lengkap di hulu (multi-media filter, karbon aktif, softener, kartrid 5 mikron) dan post-treatment di hilir (pH adjustment, remineralisasi, UV sterilizer, polishing). Konfigurasi ini memastikan kualitas air output konsisten meskipun kualitas air baku berfluktuasi musiman, dan memperpanjang umur membran hingga 5–7 tahun.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Spesifikasi Teknis</h2>
        <table className="w-full border-collapse my-[1.5rem] text-[0.9rem] ">
          <tbody><tr><td>Kapasitas</td><td>1 – 500 m³/hari</td></tr>
          <tr><td>Rejection Rate</td><td>95 – 99,5%</td></tr>
          <tr><td>Recovery Rate</td><td>60 – 80%</td></tr>
          <tr><td>Tekanan Operasi</td><td>10 – 20 bar</td></tr>
          <tr><td>TDS Output</td><td>&lt; 50 ppm (dari air PDAM)</td></tr>
          <tr><td>Otomasi</td><td>PLC / SCADA tersedia</td></tr>
        </tbody></table>
        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Fitur Utama</h2>
        <ul className="flex flex-col text-[0.9rem] text-text ">
          <li>Sistem otomasi penuh dengan PLC dan HMI touchscreen</li>
          <li>High-pressure pump efisiensi tinggi dengan VFD</li>
          <li>Membran RO Dow Filmtec / Toray / Hydranautics</li>
          <li>Pre-treatment lengkap: multi-media filter, karbon aktif, softener</li>
          <li>Post-treatment: pH adjustment, remineralisasi, UV sterilizer</li>
          <li>Monitoring online TDS, flow, pressure real-time</li>
          <li>Kapasitas dapat dikembangkan (modular)</li>
          <li>Desain skid-mounted hemat ruang</li>
        </ul>
        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt-sm">Aplikasi</h2>
        <div className="flex flex-wrap gap-2 mt-[0.8rem] ">
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Industri tekstil dan garment</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Pabrik makanan dan minuman</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Industri elektronik dan semikonduktor</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Pembangkit listrik (boiler feed water)</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Industri kimia dan petrokimia</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Fasilitas pengolahan logam</span>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Keunggulan RO Industri TSM</h2>
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p>Setelah 24 tahun melayani industri Indonesia, TSM mengoptimasi setiap detail engineering untuk memberikan total cost of ownership terendah. Berikut yang membedakan sistem kami dari kompetitor:</p>
        <ul style={{"paddingLeft":"1.4rem","margin":".8rem 0"}}>
          <li style={{"marginBottom":".55rem"}}><strong>Energy Recovery Device (opsional)</strong> — Untuk sistem di atas 100 m³/hari, kami integrasikan ERD yang memotong konsumsi listrik high-pressure pump hingga 60%. ROI biasanya tercapai dalam 2–3 tahun.</li>
          <li style={{"marginBottom":".55rem"}}><strong>Pre-treatment yang tepat sesuai air baku</strong> — Banyak kegagalan RO disebabkan pre-treatment yang underdesigned. Engineer TSM melakukan jar test, SDI test, dan analisa air lengkap sebelum mendesain sistem.</li>
          <li style={{"marginBottom":".55rem"}}><strong>Konfigurasi modular skid-mounted</strong> — Sistem dirakit di workshop kami di Bekasi, dites lengkap, lalu dikirim siap pasang. Waktu commissioning di lapangan dipersingkat hingga 70%.</li>
          <li style={{"marginBottom":".55rem"}}><strong>Monitoring real-time dengan SCADA</strong> — Operator dapat memantau TDS produk, recovery, differential pressure, dan flow dari ruang kontrol atau bahkan smartphone via koneksi cloud.</li>
          <li style={{"marginBottom":".55rem"}}><strong>Service network nasional</strong> — Tim teknisi TSM dapat menjangkau seluruh Indonesia dalam 48 jam untuk emergency, dengan stok suku cadang strategis di Jakarta, Surabaya, dan Batam.</li>
        </ul>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Studi Kasus Aplikasi</h2>
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p><strong>Pabrik Tekstil di Karawang</strong> — TSM merancang sistem RO 200 m³/hari untuk pabrik dyeing &amp; finishing yang sebelumnya bermasalah dengan staining akibat hardness air tanah. Sistem dilengkapi softener dual-train, RO 3-stage dengan recovery 75%, dan reject untuk cooling tower. Hasil: kualitas pewarnaan stabil, biaya kimia turun 40%, dan reject diolah ulang sehingga water footprint pabrik berkurang 35%.</p>
        <p><strong>PLTU di Sumatra Selatan</strong> — Sistem RO + EDI 150 m³/hari menggantikan demineralisasi resin konvensional yang membutuhkan regenerasi kimia 2x sehari. Output air mencapai konduktivitas &lt; 0,1 µS/cm yang dibutuhkan untuk boiler feed water tekanan tinggi. Konsumsi NaOH dan HCl turun lebih dari 90%, mengurangi biaya operasional dan dampak lingkungan.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Pertanyaan yang Sering Ditanyakan</h2>
        <div className="" style={{"fontSize":".94rem","lineHeight":"1.75","color":"var(--text)"}}>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa kapasitas RO industri yang dibutuhkan untuk pabrik saya?</h3>
        <p>Kapasitas RO industri ditentukan oleh konsumsi air harian pabrik dikali faktor keamanan 1,3–1,5x. Pabrik tekstil 200 karyawan biasanya butuh 50–100 m³/hari, pabrik makanan-minuman 100–300 m³/hari, dan PLTU bisa 500–1.000 m³/hari untuk boiler feed water. TSM melayani kapasitas 1–500 m³/hari dengan opsi modular untuk ekspansi.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apa perbedaan RO industri TSM dengan sistem komersial biasa?</h3>
        <p>RO industri TSM dirancang untuk operasi 24/7 dengan komponen industrial-grade: pompa multi-stage stainless steel, vessel FRP atau SS-316, membran 8 inci Dow Filmtec/Toray, kontrol PLC SCADA, dan recovery hingga 80%. Sistem komersial biasanya pakai membran 4 inci dan tidak didesain untuk beban penuh kontinu.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa biaya perawatan tahunan sistem RO industri?</h3>
        <p>Biaya operasional tahunan rata-rata 8–15% dari nilai investasi awal. Komponennya meliputi penggantian membran setiap 3–5 tahun, kimia anti-scalant dan CIP, kartrid pre-filter setiap 1–3 bulan, serta servis berkala. TSM menyediakan kontrak service annual yang mencakup semua kebutuhan ini dengan harga tetap.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah TSM bisa custom RO sesuai kondisi air baku saya?</h3>
        <p>Ya. Setiap proyek dimulai dengan analisis air baku komprehensif (TDS, hardness, silica, besi-mangan, organik, mikrobiologi). Berdasarkan hasil itu, engineer TSM menentukan konfigurasi pre-treatment, jenis membran, recovery, dan post-treatment yang optimal. Sistem kami selalu custom — bukan one-size-fits-all.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa lama waktu pengerjaan dari pemesanan hingga commissioning?</h3>
        <p>Untuk sistem standar 10–50 m³/hari, waktu engineering hingga commissioning sekitar 8–12 minggu. Sistem custom skala besar 100–500 m³/hari membutuhkan 16–24 minggu termasuk pengadaan komponen impor seperti high-pressure pump dan PLC. TSM memberikan timeline detail di proposal teknis.</p>
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
            <li><Link to="/artikel/ro-prinsip-kerja">📘 Mengenal Teknologi Reverse Osmosis: Prinsip Kerja</Link></li>
<li><Link to="/artikel/studi-kasus-ro-tekstil">📊 Studi Kasus: RO 200 m³/hari di Pabrik Tekstil Karawang</Link></li>
<li><Link to="/industri/manufaktur"><Factory className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Solusi Water Treatment untuk Industri Manufaktur</Link></li>
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

export default ProdukRoIndustri;
