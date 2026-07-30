import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, Droplet, Microscope } from 'lucide-react';
import Button from '../../components/ui/Button';

const ProdukRoLab = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.prod-hero{height:300px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:8rem;margin-bottom:2rem;background:linear-gradient(135deg,#1a2d42,#1e90d6)}
.spec-table{width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:.9rem}
.spec-table tr:nth-child(odd) td{background:var(--gray)}
.spec-table td{padding:.7rem 1rem;border-bottom:1px solid var(--border)}
.spec-table td:first-child{font-weight:600;color:var(--navy);width:45%}


` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/produk">Produk &amp; Solusi</Link> › Reverse Osmosis</div>
    <h1>RO Laboratorium</h1>
    <p>Sistem penghasil air ultra-murni Type I, II, dan III untuk laboratorium analitik, penelitian, farmasi, dan kalibrasi instrumen. Memenuhi standar ASTM, USP, dan ISO 3696.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[3rem] items-start">
      <div>
        <div className="h-[300px] rounded-[14px] flex items-center justify-center text-[8rem] mb-[2rem] text-white "><Microscope className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div>
        
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p><strong>Sistem RO laboratorium</strong> dirancang untuk menghasilkan air ultra-murni dengan tiga tingkat kemurnian sesuai standar internasional ASTM D1193 dan ISO 3696: <strong>Type I</strong> (ultra-pure, 18,2 MΩ·cm) untuk HPLC, kultur sel, dan analisa trace; <strong>Type II</strong> (analytical grade, 1 MΩ·cm) untuk preparasi reagen dan buffer; serta <strong>Type III</strong> (general lab water, 0,2 MΩ·cm) untuk pencucian glassware dan media umum. Air ini bebas ion, organik (TOC &lt; 5 ppb), dan mikroba (&lt; 1 CFU/mL).</p>
<p>PT Tirta Sumber Makmur menyediakan sistem RO laboratorium untuk universitas (Universitas Airlangga, Atma Jaya), rumah sakit dengan lab klinik (Eka Hospital, RS Melinda), pusat penelitian, lab QC industri farmasi dan makanan, hingga lab kalibrasi instrumen. Kapasitas dari <strong>5 hingga 100 liter/jam</strong> dengan benchtop unit atau wall-mounted system, plus opsi point-of-use polisher untuk Type I langsung di tempat penggunaan.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Tingkat Kemurnian Air Lab</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p>Standar ASTM D1193 dan ISO 3696 mendefinisikan kemurnian air lab dalam tiga tingkat:</p>
<ul style={{"paddingLeft":"1.4rem","margin":".8rem 0"}}>
  <li style={{"marginBottom":".5rem"}}><strong>Type I (Ultrapure)</strong> — Resistivitas 18,2 MΩ·cm pada 25°C, TOC &lt; 5 ppb, mikroba &lt; 1 CFU/mL. Untuk HPLC, GC-MS, ICP-MS, kultur sel mamalia, biologi molekuler, IVF.</li>
  <li style={{"marginBottom":".5rem"}}><strong>Type II (Analytical)</strong> — Resistivitas &gt; 1 MΩ·cm, TOC &lt; 50 ppb. Untuk preparasi reagen analitik, larutan buffer, AAS, spektrofotometer UV-Vis.</li>
  <li style={{"marginBottom":".5rem"}}><strong>Type III (General Lab)</strong> — Resistivitas &gt; 0,2 MΩ·cm. Untuk pencucian glassware, autoklaf, water bath, media umum.</li>
</ul>
<p>Sistem TSM menggunakan kombinasi teknologi: <strong>RO double-pass</strong> untuk produksi air dasar Type III, <strong>EDI</strong> untuk Type II, ditambah <strong>polishing dengan mixed bed resin + UV 185nm + UF 0,2 µm</strong> untuk mencapai Type I di point-of-use. Sistem ini lebih hemat operasional dibanding distilator multi-stage tradisional.</p>
</div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Spesifikasi Teknis</h2>
        <table className="w-full border-collapse my-[1.5rem] text-[0.9rem] ">
          <tbody><tr><td>Kapasitas</td><td>10 – 200 L/jam</td></tr>
          <tr><td>Resistivitas Type I</td><td>≥ 18 MΩ·cm</td></tr>
          <tr><td>TOC</td><td>&lt; 5 ppb (Type I)</td></tr>
          <tr><td>Bakteri</td><td>&lt; 0,1 CFU/mL</td></tr>
          <tr><td>Endotoksin</td><td>&lt; 0,001 EU/mL</td></tr>
          <tr><td>Standar</td><td>ASTM D1193, USP, ISO 3696</td></tr>
        </tbody></table>
        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Fitur Utama</h2>
        <ul className="flex flex-col text-[0.9rem] text-text ">
          <li>Menghasilkan air Type I, II, dan III sesuai ASTM</li>
          <li>Modul EDI (Electrodeionization) untuk kemurnian tertinggi</li>
          <li>UV 185nm untuk eliminasi TOC dan sterilisasi</li>
          <li>Filter 0,2 µm ultrafiltrasi final</li>
          <li>Display resistivitas dan TOC real-time</li>
          <li>Alarm kualitas air otomatis</li>
          <li>Material wetted FDA-grade</li>
          <li>Sistem recirculation untuk menjaga kemurnian</li>
        </ul>
        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt-sm">Aplikasi</h2>
        <div className="flex flex-wrap gap-2 mt-[0.8rem] ">
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Laboratorium analitik (HPLC, AAS, ICP)</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Laboratorium farmasi dan biotek</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">R&amp;D dan penelitian ilmiah</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Produksi reagen dan buffer</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Kalibrasi instrumen presisi</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Laboratorium mikrobiologi</span>
        </div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Keunggulan RO Lab TSM</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p>Setelah melayani lab universitas terkemuka dan rumah sakit penelitian Indonesia, TSM memahami kebutuhan spesifik laboratorium:</p>
<ul style={{"paddingLeft":"1.4rem","margin":".8rem 0"}}>
  <li style={{"marginBottom":".55rem"}}><strong>Output sesuai standar internasional</strong> — Type I memenuhi USP &lt;1231&gt;, ASTM D1193, ISO 3696. Output dapat divalidasi dengan TOC analyzer dan resistivity meter onboard.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Cartridge polisher mudah ganti</strong> — Mixed bed resin dan UV lamp dirancang quick-change tanpa tools. Operator lab dapat melakukan preventive maintenance sendiri.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Real-time water quality display</strong> — Resistivitas, TOC, dan suhu ditampilkan di layar; alert otomatis jika kualitas turun di bawah threshold yang dikonfigurasi.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Footprint compact</strong> — Sistem 30 L/jam Type I dapat diletakkan di benchtop atau wall-mounted. Tidak butuh ruang utility khusus.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Kompatibel dengan lab kelas USP, GLP, GMP</strong> — Untuk lab yang harus comply dengan audit, TSM menyediakan dokumentasi validasi dan calibration certificates.</li>
</ul>
</div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Studi Kasus Aplikasi</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p><strong>Lab Riset Universitas Airlangga</strong> — TSM memasok sistem Type I 30 L/jam untuk lab biologi molekuler dan kimia analitik. Sistem mengganti dua unit distilator lama yang konsumsi listriknya 6 kWh/jam — pengganti TSM hanya 0,3 kWh/jam dengan output kualitas lebih konsisten.</p>
<p><strong>Lab Klinik Eka Hospital</strong> — Sistem Type II 50 L/jam untuk preparasi reagen dan flushing analyzer biokimia. Kualitas air konsisten menjamin akurasi hasil pemeriksaan, dan tidak ada gangguan kalibrasi pada analyzer Roche dan Siemens lab tersebut sejak instalasi.</p>
</div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Pertanyaan yang Sering Ditanyakan</h2>
<div className="" style={{"fontSize":".94rem","lineHeight":"1.75","color":"var(--text)"}}>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apa beda RO lab dengan distilator?</h3>
<p>Distilator menghasilkan air murni dengan menguapkan air dan mengembunkannya — efektif tapi konsumsi energi sangat tinggi (~50 kWh/m³) dan kapasitas terbatas. RO+EDI+polisher modern menghasilkan kualitas setara atau lebih baik dengan konsumsi 1–2 kWh/m³ dan kapasitas jauh lebih besar.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Tingkat kemurnian mana yang saya butuhkan?</h3>
<p>Tergantung aplikasi: HPLC, kultur sel, biologi molekuler butuh Type I; preparasi reagen analitik butuh Type II; pencucian glassware butuh Type III. Sistem TSM dapat dikonfigurasi multi-output: Type II/III dari unit utama, ditambah polisher Type I di point-of-use untuk efisiensi biaya.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa biaya operasional sistem RO lab per bulan?</h3>
<p>Untuk sistem 30 L/jam Type I: cartridge polisher diganti 6–12 bulan (Rp 3–6 juta), UV lamp setahun sekali (Rp 1,5 juta), pre-filter 2–3 bulan (Rp 200rb). Total operasional rata-rata Rp 800rb–1,5 juta per bulan, jauh lebih rendah dari distilator.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah air RO lab aman untuk kultur sel?</h3>
<p>Type I dari sistem TSM (dengan UV 185nm dan UF 0,2 µm di point-of-use) telah digunakan untuk kultur sel mamalia dan IVF tanpa masalah. Kualitas konsisten 18,2 MΩ·cm, TOC &lt; 5 ppb, mikroba &lt; 1 CFU/mL — memenuhi semua persyaratan kultur sel modern.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Bisakah sistem diintegrasikan dengan LIMS?</h3>
<p>Ya. Sistem RO lab TSM modern dapat diintegrasikan dengan Laboratory Information Management System untuk audit trail otomatis kualitas air pada saat sample preparation — penting untuk lab GLP/GMP yang membutuhkan traceability lengkap.</p>

<p style={{"marginTop":"1.2rem"}}>Laboratorium modern membutuhkan air dengan kualitas yang konsisten dan tervalidasi. TSM memahami bahwa hasil pemeriksaan, akurasi instrumen, dan reproducibility eksperimen Anda bergantung pada kualitas air yang stabil. Konsultasikan kebutuhan lab Anda dengan tim TSM untuk rekomendasi sistem yang sesuai standar internasional dan budget operasional Anda.</p>
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
            <li><Link to="/artikel/air-farmasi-ro-edi">💊 Standar Air Farmasi: RO + EDI</Link></li>
            <li><Link to="/produk/demi"><Droplet className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Demineralisasi &amp; EDI</Link></li>
            <li><Link to="/industri/rs">⚕️ Solusi Water Treatment untuk Rumah Sakit</Link></li>
            <li><Link to="/produk/membran"><Microscope className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Elemen Membran RO</Link></li>
            <li><Link to="/kalkulator"><Calculator className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Hitung Kebutuhan Sistem Anda (Kalkulator)</Link></li>
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

export default ProdukRoLab;
