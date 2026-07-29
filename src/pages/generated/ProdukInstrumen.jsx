import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, Wrench, Factory, Calculator, Settings } from 'lucide-react';


const ProdukInstrumen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/produk">Produk &amp; Solusi</Link> › Instrumentasi</div>
    <h1>Instrumen &amp; Sensor Monitoring Kualitas Air</h1>
    <p>TDS meter, conductivity meter, pH meter, flow meter, pressure transmitter, dan sistem monitoring online untuk pengawasan kualitas air sistem RO secara real-time dan akurat.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[3rem] items-start">
      <div>
        <div className="h-[300px] rounded-[14px] flex items-center justify-center text-[8rem] mb-[2rem] text-white " style={{"background":"none","padding":"0","height":"auto","display":"block"}}><picture>
  <source srcSet="images/produk-ro-industri-2.webp" type="image/webp" />
  <img src="images/produk-ro-industri-2.jpg" alt="Instrumen monitoring TDS, pH, flow meter, conductivity untuk sistem RO industri" style={{"width":"100%","height":"auto","maxHeight":"480px","objectFit":"cover","borderRadius":"14px","display":"block"}} />
</picture></div>
        
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p>Sistem RO modern bergantung pada <strong>monitoring real-time</strong> untuk mempertahankan performa optimal. Tanpa instrumen yang akurat, masalah seperti scaling, fouling, atau kerusakan membran baru terdeteksi setelah TDS produk meningkat — saat itu kerusakan sudah terjadi. PT Tirta Sumber Makmur menyediakan rangkaian lengkap <strong>instrumen monitoring kualitas air industri</strong> dari brand tier-1: Hach, Endress+Hauser, Yokogawa, dan Rosemount.</p>
<p>Kami menjual instrumen sebagai komponen lepas untuk upgrade sistem existing, atau sebagai paket terintegrasi dengan PLC/SCADA pada sistem RO baru. Setiap instrumen disertai sertifikat kalibrasi factory dan rekomendasi setting untuk aplikasi spesifik Anda. Tim engineer kami juga melakukan integrasi MQTT/Modbus untuk monitoring berbasis cloud dan dashboard remote — semakin penting untuk fasilitas yang dioperasikan tanpa engineer permanen di lokasi.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Instrumen Wajib di Sistem RO</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p>Sistem RO yang dirancang dengan baik memiliki minimum 8 titik monitoring kritis:</p>
<ul style={{"paddingLeft":"1.4rem","margin":".8rem 0"}}>
  <li style={{"marginBottom":".5rem"}}><strong>TDS / Conductivity meter</strong> — di feed, permeate, dan reject. Indikator utama performa membran. TDS produk yang naik = membran bermasalah.</li>
  <li style={{"marginBottom":".5rem"}}><strong>Flow meter</strong> — di permeate dan reject. Untuk monitoring recovery (= permeate / feed). Recovery turun = pre-treatment atau membran fouling.</li>
  <li style={{"marginBottom":".5rem"}}><strong>Pressure transmitter</strong> — feed, inter-stage, reject. Differential pressure meningkat = fouling. Feed pressure naik tanpa alasan = membran scaling.</li>
  <li style={{"marginBottom":".5rem"}}><strong>pH meter</strong> — feed dan permeate. pH ekstrem merusak membran polyamide; perlu kontrol untuk dosing acid/base.</li>
  <li style={{"marginBottom":".5rem"}}><strong>ORP / Free chlorine analyzer</strong> — di pre-treatment. Sisa klorin &gt;0,1 mg/L merusak membran RO permanent.</li>
  <li style={{"marginBottom":".5rem"}}><strong>Turbidity meter</strong> — di output UF/MF. Indikator integritas pre-treatment.</li>
  <li style={{"marginBottom":".5rem"}}><strong>Temperature sensor</strong> — di feed. Suhu mempengaruhi flux dan recovery — biasanya untuk dokumentasi compliance.</li>
  <li style={{"marginBottom":".5rem"}}><strong>SDI tester</strong> — periodic measurement (manual atau otomatis). SDI &gt;3 = pre-treatment underperforming.</li>
</ul>
</div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Spesifikasi Teknis</h2>
        <table className="w-full border-collapse my-[1.5rem] text-[0.9rem] ">
          <tbody><tr><td>Parameter</td><td>TDS, Conductivity, pH, DO, Flow, Pressure, Turbidity</td></tr>
          <tr><td>Akurasi TDS</td><td>±1%</td></tr>
          <tr><td>Output</td><td>4-20mA, RS485, Modbus, pulse</td></tr>
          <tr><td>Display</td><td>LCD lokal + remote SCADA</td></tr>
          <tr><td>Proteksi</td><td>IP65 / IP68</td></tr>
          <tr><td>Merek</td><td>Hach, Endress+Hauser, Prominent, Bürkert</td></tr>
        </tbody></table>
        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Fitur Utama</h2>
        <ul className="flex flex-col text-[0.9rem] text-text ">
          <li>Inline conductivity/TDS sensor untuk monitoring kontinu</li>
          <li>pH meter industrial dengan probe refillable</li>
          <li>Electromagnetic flow meter akurasi tinggi</li>
          <li>Pressure transmitter SS 316L food-grade</li>
          <li>Turbidity meter online real-time</li>
          <li>Sistem SCADA dan data logging terintegrasi</li>
          <li>Alarm dan notifikasi otomatis via SMS/email</li>
          <li>Kalibrasi tersertifikasi dan tracer ke standar nasional</li>
        </ul>
        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt-sm">Aplikasi</h2>
        <div className="flex flex-wrap gap-2 mt-[0.8rem] ">
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Monitoring output kualitas sistem RO</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Kontrol dosing kimia otomatis</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Compliance reporting otomatis</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Optimasi performa sistem RO</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">SCADA water treatment plant</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Laboratorium dan pengujian air</span>
        </div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Keunggulan Instrumen TSM</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<ul style={{"paddingLeft":"1.4rem","margin":".8rem 0"}}>
  <li style={{"marginBottom":".55rem"}}><strong>Brand tier-1 untuk reliability</strong> — Hach untuk water quality analyzer, Endress+Hauser dan Yokogawa untuk flow/pressure/level, Rosemount untuk pH/conductivity. Track record puluhan tahun di industri Indonesia.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Sertifikat kalibrasi factory</strong> — Setiap instrumen datang dengan kalibrasi 3-titik dan certificate yang dapat ditelusuri ke standar nasional. Kompatibel dengan ISO 17025.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Integrasi PLC/SCADA</strong> — TSM melakukan wiring, programming, dan dashboard SCADA (WinCC, FactoryTalk, Wonderware). Semua parameter dapat di-trend, di-alarm, dan di-export untuk audit.</li>
  <li style={{"marginBottom":".55rem"}}><strong>IoT &amp; cloud monitoring</strong> — Untuk fasilitas remote, TSM menyediakan paket IoT dengan modem 4G atau satelit, data dashboard di cloud, alert via WhatsApp/email saat parameter abnormal.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Service kalibrasi tahunan</strong> — Tim teknisi TSM melakukan kalibrasi on-site tahunan untuk memenuhi requirement audit ISO/CPOB dengan dokumentasi resmi.</li>
</ul>
</div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Kasus Penggunaan</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p><strong>Cloud Monitoring untuk SWRO Pulau Ayer</strong> — TSM mengintegrasikan instrumen Hach + Endress+Hauser dengan IoT gateway 4G di sistem SWRO 30 m³/hari di Pulau Ayer. Engineer di Jakarta dapat memantau TDS produk, recovery, dan pressure differential real-time, plus menerima alert WhatsApp jika ada parameter di luar batas. Tidak perlu engineer permanen di pulau.</p>
<p><strong>Upgrade Monitoring untuk Pabrik Farmasi</strong> — TSM mengupgrade sistem monitoring lama dengan analyzer TOC online, conductivity dual-redundant, dan dashboard SCADA yang sesuai 21 CFR Part 11 (audit trail elektronik). Sistem siap untuk audit BPOM dengan data traceability lengkap.</p>
</div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Pertanyaan yang Sering Ditanyakan</h2>
<div className="" style={{"fontSize":".94rem","lineHeight":"1.75","color":"var(--text)"}}>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa investasi paket monitoring untuk RO 50 m³/hari?</h3>
<p>Paket dasar (4 instrumen utama: TDS, flow, pressure, pH) sekitar Rp 50–80 juta. Paket lengkap dengan SCADA dan IoT cloud monitoring sekitar Rp 150–250 juta tergantung tingkat integrasi dan brand.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Bisakah upgrade instrumen di sistem RO existing?</h3>
<p>Bisa. TSM melakukan survey sistem existing, menentukan titik instalasi, dan melakukan retrofit tanpa mengganggu operasi (instalasi saat shutdown rutin). Cocok untuk sistem yang dirancang lama tanpa monitoring memadai.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah perlu kalibrasi instrumen rutin?</h3>
<p>Ya. Conductivity, pH, dan TOC analyzer butuh kalibrasi 3–6 bulan untuk akurasi. Flow meter dan pressure transmitter biasanya stabil 1–2 tahun. TSM menyediakan kontrak kalibrasi tahunan dengan dokumentasi compliance.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah data dari sistem monitoring bisa diakses jarak jauh?</h3>
<p>Ya. TSM menyediakan paket IoT dengan dashboard berbasis cloud yang dapat diakses dari laptop atau smartphone. Akses dapat diberi level berbeda untuk operator, supervisor, dan management.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Brand apa yang paling andal untuk industri Indonesia?</h3>
<p>Untuk water quality (TDS, pH, conductivity, TOC): Hach dan Yokogawa unggul. Untuk flow dan pressure: Endress+Hauser dan Rosemount. Untuk semua brand ini, TSM memiliki support local dan stok spare parts strategis.</p>
<p style={{"marginTop":"1.2rem"}}>Monitoring yang baik adalah investasi terkecil dengan dampak terbesar untuk sistem RO Anda — sebuah TDS meter Rp 5 juta dapat mendeteksi masalah sebelum membran Rp 50 juta rusak. Konsultasikan kebutuhan upgrade monitoring dengan tim engineer TSM untuk paket yang sesuai dengan kompleksitas sistem dan budget Anda.</p>
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
            <li><Link to="/artikel/monitoring-kualitas-air-ro">📊 Monitoring Kualitas Air RO Real-time</Link></li>
            <li><Link to="/produk/pompa"><Settings className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Pompa &amp; Pressure Vessel</Link></li>
            <li><Link to="/layanan"><Wrench className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Layanan Service &amp; Kalibrasi</Link></li>
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

export default ProdukInstrumen;
