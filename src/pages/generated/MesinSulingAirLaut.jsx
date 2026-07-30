import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, Calculator, Droplet, Waves, Microscope, Ship } from 'lucide-react';


const MesinSulingAirLaut = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.prod-hero{height:300px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:8rem;margin-bottom:2rem;background:linear-gradient(135deg,#001f4d,#0066cc)}
.spec-table{width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:.9rem}
.spec-table tr:nth-child(odd) td{background:var(--gray)}
.spec-table td{padding:.7rem 1rem;border-bottom:1px solid var(--border)}
.spec-table td:first-child{font-weight:600;color:var(--navy);width:45%}
.compare-table{width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:.88rem}
.compare-table th{background:var(--navy);color:#fff;padding:.65rem 1rem;text-align:left;font-weight:600}
.compare-table td{padding:.62rem 1rem;border-bottom:1px solid var(--border)}
.compare-table tr:nth-child(even) td{background:var(--gray)}
.compare-table td:first-child{font-weight:600;color:var(--navy)}
.prod-layout{display:grid;grid-template-columns:1fr 300px;gap:2.5rem;align-items:start}
.prod-sticky{position:sticky;top:90px}
.prod-h2{font-family:'Barlow Condensed',sans-serif;font-size:1.55rem;font-weight:800;color:var(--navy);margin-bottom:.75rem}
.mt{margin-top:2.2rem}
.feat-list{padding-left:0;list-style:none;margin:.75rem 0}
.feat-list li{padding:.55rem 0 .55rem 1.2rem;border-bottom:1px solid var(--border);font-size:.92rem;line-height:1.65;position:relative}
.feat-list li::before{content:'✔';position:absolute;left:0;color:var(--accent);font-weight:700}
.related-link{font-size:.86rem;color:var(--blue);font-weight:600;transition:var(--t);display:block}
.related-link:hover{color:var(--navy);padding-left:.3rem}
.seo-note{background:var(--ice);border-left:4px solid var(--accent);padding:1rem 1.4rem;border-radius:0 8px 8px 0;font-size:.88rem;color:var(--muted);margin:1.5rem 0;line-height:1.7}
@media(max-width:900px){.prod-layout{grid-template-columns:1fr}.prod-sticky{position:static}}

` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/produk">Produk &amp; Solusi</Link> › Mesin Suling Air Laut</div>
    <h1>Mesin Suling Air Laut</h1>
    <p>Mengubah air laut menjadi air tawar bersih berkualitas tinggi dengan teknologi Sea Water Reverse Osmosis (SWRO). Solusi andal untuk pulau terpencil, kapal, platform offshore, dan kawasan industri pesisir di seluruh Indonesia — sejak 2002.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[3rem] items-start">
      <div>
        <div className="h-[300px] rounded-[14px] flex items-center justify-center text-[8rem] mb-[2rem] text-white "><Waves className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div>

        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p><strong>Mesin suling air laut</strong> adalah solusi untuk lokasi yang hanya memiliki akses ke air laut namun membutuhkan air tawar bersih — baik untuk kebutuhan minum, sanitasi, maupun proses industri. Teknologi yang digunakan adalah <strong>Sea Water Reverse Osmosis (SWRO)</strong>, yang memompa air laut bertekanan sangat tinggi (55–70 bar) melewati membran khusus berukuran 0,0001 mikron. Membran ini menyaring hingga 99,7% kandungan garam, mineral, bakteri, dan kontaminan lainnya, menghasilkan air tawar bersih dengan TDS di bawah 500 ppm.</p>
        <p>PT Tirta Sumber Makmur (TSM) telah merancang dan memasang mesin suling air laut dari kapasitas <strong>1 hingga 1.000 m³/hari</strong> di berbagai lokasi di seluruh Indonesia — dari kapal TNI-AL dan kapal supply offshore, resor di kepulauan Nusa Tenggara dan Sulawesi, hingga fasilitas pertambangan di kawasan pesisir Kalimantan dan Sumatra. Setiap unit menggunakan membran premium Dow Filmtec SW30HR, Toray TM820, atau Hydranautics SWC yang diuji khusus untuk air laut.</p>
        <p>Dengan integrasi <strong>Energy Recovery Device (ERD)</strong>, konsumsi energi mesin suling air laut TSM dapat ditekan hingga <strong>3–4 kWh per m³</strong> air yang dihasilkan — salah satu angka paling efisien yang tersedia untuk teknologi desalinasi skala industri.</p>
        </div>

        <div className="seo-note ">
          💡 <strong>Istilah lain yang sering digunakan:</strong> mesin desalinasi air laut, alat suling air laut, water desalination machine, SWRO system, mesin air laut jadi air tawar, sistem desalinasi. Semua merujuk pada teknologi yang sama — Sea Water Reverse Osmosis (SWRO).
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Spesifikasi Teknis</h2>
        <table className="w-full border-collapse my-[1.5rem] text-[0.9rem] ">
          <tbody><tr><td>Teknologi</td><td>Sea Water Reverse Osmosis (SWRO)</td></tr>
          <tr><td>Sumber Air</td><td>Air laut (TDS 30.000 – 45.000 ppm)</td></tr>
          <tr><td>Kapasitas</td><td>1 – 1.000 m³/hari (dapat dikustomisasi)</td></tr>
          <tr><td>Tekanan Operasi</td><td>55 – 70 bar</td></tr>
          <tr><td>Rejection Rate</td><td>99,3 – 99,7%</td></tr>
          <tr><td>Recovery Rate</td><td>35 – 45%</td></tr>
          <tr><td>TDS Air Produk</td><td>&lt; 500 ppm (tipikal &lt; 200 ppm)</td></tr>
          <tr><td>Konsumsi Energi</td><td>3 – 4 kWh/m³ (dengan ERD) | 6–8 kWh/m³ (tanpa ERD)</td></tr>
          <tr><td>Membran</td><td>Dow Filmtec SW30HR, Toray TM820, Hydranautics SWC</td></tr>
          <tr><td>Energy Recovery Device</td><td>iSave / PX Pressure Exchanger (dianjurkan untuk ≥ 50 m³/hari)</td></tr>
          <tr><td>Konstruksi</td><td>Skid-mounted SS316L / FRP, dapat dikontainerisasi</td></tr>
          <tr><td>Otomasi</td><td>PLC / SCADA, remote monitoring via GPRS/LTE tersedia</td></tr>
          <tr><td>Standar Pre-Treatment</td><td>Sand filter + cartridge 5µm + antiscalant + UF (opsional)</td></tr>
        </tbody></table>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Keunggulan Mesin Suling Air Laut TSM</h2>
        <ul className="flex flex-col text-[0.9rem] text-text ">
          <li><strong>Membran kualitas premium</strong> — Menggunakan Dow Filmtec SW30HR, Toray TM820, dan Hydranautics SWC dengan rejection rate 99,3–99,7%, dirancang khusus untuk tekanan dan salinitas air laut.</li>
          <li><strong>Pompa tahan korosi air laut</strong> — Material SS316L dan duplex stainless steel yang tahan paparan garam dan klorida tinggi untuk operasi jangka panjang.</li>
          <li><strong>Energy Recovery Device (ERD)</strong> — Menghemat konsumsi energi hingga 60% pada kapasitas ≥ 50 m³/hari, menekan biaya operasional secara signifikan.</li>
          <li><strong>Desain kompak kontainerisasi</strong> — Mesin dapat dimuat ke kontainer 20 atau 40 feet, mudah dikirim dan dipasang di pulau terpencil, kapal, atau lokasi offshore.</li>
          <li><strong>Pre-treatment terintegrasi</strong> — Sistem lengkap dari intake, koagulasi, sand filter, cartridge filter, hingga dosing kimia dalam satu paket terpadu.</li>
          <li><strong>Monitoring jarak jauh</strong> — SCADA dan remote monitoring via LTE untuk lokasi terpencil, memudahkan pemantauan kondisi mesin dari mana saja.</li>
          <li><strong>CIP (Clean-In-Place) otomatis</strong> — Sistem pencucian membran terjadwal secara otomatis untuk menjaga performa dan memperpanjang usia pakai membran.</li>
          <li><strong>Purna jual &amp; suku cadang</strong> — Tim teknisi berpengalaman dan stok suku cadang membran siap mendukung operasional mesin di seluruh Indonesia.</li>
        </ul>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Cocok untuk Siapa?</h2>
        <div className="" style={{"fontSize":".95rem","lineHeight":"1.78"}}>
        <p>Mesin suling air laut TSM telah digunakan di berbagai sektor dan lokasi:</p>
        <ul style={{"paddingLeft":"1.2rem","marginTop":".6rem"}}>
          <li><strong>Pulau dan kepulauan terpencil</strong> — Resor wisata bahari, pemukiman warga, fasilitas TNI/Polri di pulau terdepan yang tidak terjangkau jaringan PDAM.</li>
          <li><strong>Kapal dan armada laut</strong> — Kapal penumpang, kapal supply, kapal ikan besar, kapal riset, dan kapal perang membutuhkan mesin suling air laut yang kompak dan tahan getaran.</li>
          <li><strong>Platform offshore dan FPSO</strong> — Platform minyak dan gas di lepas pantai yang memerlukan air tawar untuk pendingin, boiler, dan konsumsi kru.</li>
          <li><strong>Kawasan industri pesisir</strong> — Industri perikanan, pengolahan ikan, galangan kapal, dan pabrik di kawasan pesisir yang akuifernya terinterusi air laut.</li>
          <li><strong>PLTU dan pembangkit energi pesisir</strong> — Pembangkit listrik yang membutuhkan air demin berkualitas tinggi sebagai air umpan boiler.</li>
          <li><strong>Fasilitas pertambangan pesisir</strong> — Tambang nikel, bauksit, dan batu bara di kepulauan yang jauh dari sumber air tawar.</li>
          <li><strong>Hotel dan resort pesisir</strong> — Properti wisata di lokasi tanpa akses air PDAM yang membutuhkan pasokan air tawar mandiri.</li>
        </ul>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Perbandingan dengan Teknologi Lain</h2>
        <table className="compare-table ">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Mesin Suling Air Laut (SWRO)</th>
              <th>Mesin Air Asin / BWRO</th>
              <th>RO Air Tawar (TWRO)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Sumber Air</td><td>Air laut (TDS 30.000–45.000 ppm)</td><td>Air payau/asin (TDS 1.000–10.000 ppm)</td><td>Air PDAM/sumur tawar (TDS &lt;1.000 ppm)</td></tr>
            <tr><td>Tekanan Operasi</td><td>55–70 bar</td><td>8–20 bar</td><td>4–10 bar</td></tr>
            <tr><td>Konsumsi Energi</td><td>3–5 kWh/m³</td><td>0,5–2 kWh/m³</td><td>0,2–0,5 kWh/m³</td></tr>
            <tr><td>Recovery Rate</td><td>35–45%</td><td>70–85%</td><td>75–90%</td></tr>
            <tr><td>Cocok untuk</td><td>Pulau, kapal, offshore, pesisir</td><td>Pesisir dengan sumur asin, tambang</td><td>Industri, gedung, hotel</td></tr>
          </tbody>
        </table>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Pertanyaan yang Sering Ditanyakan</h2>
        <div className="">
        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apa itu mesin suling air laut dan bagaimana cara kerjanya?</h3>
        <p>Mesin suling air laut mengubah air laut menjadi air tawar menggunakan tekanan tinggi yang mendorong air melewati membran semi-permeabel (Sea Water Reverse Osmosis / SWRO). Membran ini menahan 99,7% garam dan kontaminan — hasilnya air tawar bersih TDS di bawah 500 ppm dari air laut yang semula 30.000–45.000 ppm.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah bisa dipasang di pulau tanpa listrik PLN?</h3>
        <p>Ya. TSM merancang mesin suling air laut yang dapat beroperasi dengan genset diesel. Untuk lokasi terpencil, tersedia juga opsi hybrid solar-genset untuk efisiensi bahan bakar. Sistem juga dapat dilengkapi monitoring jarak jauh via satelit atau LTE untuk pemantauan dari pusat.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa biaya investasi mesin suling air laut?</h3>
        <p>Biaya bervariasi tergantung kapasitas, lokasi pemasangan, dan spesifikasi teknis. TSM menyediakan konsultasi gratis untuk menghitung kebutuhan kapasitas dan estimasi biaya yang tepat sesuai kondisi lokasi Anda. Hubungi tim kami untuk mendapatkan penawaran tanpa komitmen.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa lama proses pemasangan?</h3>
        <p>Untuk unit mesin suling air laut skala kecil (1–10 m³/hari), proses dari order hingga komisioning umumnya 4–8 minggu. Untuk skala menengah hingga besar (50–1.000 m³/hari), proses termasuk fabrikasi dan instalasi bisa memakan 3–6 bulan tergantung kompleksitas lokasi.</p>
        </div>

        <div className="info-box" style={{"marginTop":"2rem"}}>
          <strong>📚 Baca Juga</strong>
          <ul style={{"marginTop":".75rem","paddingLeft":"1.2rem"}}>
            <li><Link to="/artikel/desalinasi-solusi-pulau">🏝️ Desalinasi SWRO: Solusi Air Bersih untuk Pulau Terpencil</Link></li>
            <li><Link to="/artikel/ro-kapal-offshore"><Ship className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Sistem RO untuk Kapal dan Platform Offshore</Link></li>
            <li><Link to="/mesin/air-asin"><Droplet className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Mesin Air Asin (BWRO) – Untuk Air Payau TDS 1.000–10.000 ppm</Link></li>
            <li><Link to="/produk/swro"><Microscope className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Spesifikasi Teknis Lengkap SWRO</Link></li>
            <li><Link to="/kalkulator"><Calculator className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Kalkulator Kebutuhan Sistem RO Anda</Link></li>
          </ul>
        </div>
      </div>

      <aside className="lg:sticky lg:top-[88px]">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Minta Penawaran</h4>
          <p style={{"fontSize":".86rem","color":"var(--muted)","lineHeight":"1.65","marginBottom":"1rem"}}>Konsultasikan kebutuhan mesin suling air laut Anda dengan tim engineer kami — gratis, tanpa komitmen.</p>
          <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-accent text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,180,216,0.32)] hover:bg-white hover:text-blue hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center","marginBottom":".6rem"}} to="/kontak"><ClipboardList className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Minta Penawaran</Link>
          <Link href="https://wa.me/62818719119" className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-blue text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-blue hover:text-white hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center"}} target="_blank" rel="noopener noreferrer">💬 WhatsApp Kami</Link>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Produk Terkait</h4>
          <ul style={{"display":"flex","flexDirection":"column","gap":".65rem"}}>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/mesin/air-asin">→ Mesin Air Asin (BWRO)</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/swro">→ SWRO – Spesifikasi Teknis Lengkap</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/desalinasi">→ Desalinasi – Kepulauan &amp; Offshore</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/bwro">→ BWRO Air Payau</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/ro-mobile">→ RO Mobile / Kontainer</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/uf">→ Ultrafiltrasi (UF) Pre-treatment</Link></li>
            <li><Link style={{"fontSize":".84rem","fontWeight":"600","color":"var(--blue)","display":"block"}} to="/produk">→ Semua Produk</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem]" style={{"background":"linear-gradient(145deg,var(--navy),var(--blue))","border":"none"}}>
          <h4 style={{"color":"rgba(255,255,255,.45)","borderColor":"rgba(255,255,255,.15)"}}>Konsultasi Desain Gratis</h4>
          <p style={{"fontSize":".86rem","opacity":".84","color":"#fff","lineHeight":"1.65","marginBottom":"1rem"}}>Tim engineer TSM siap menganalisis kebutuhan dan kondisi lokasi Anda — merancang mesin suling air laut yang paling efisien sesuai budget.</p>
          <Link href="tel:+62818719119" className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center","fontSize":".82rem"}}>📞 021-88871689</Link>
        </div>
      </aside>
    </div>
  </div>
</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Butuh Mesin Suling Air Laut untuk Lokasi Anda?</h2>
    <p>TSM merancang mesin suling air laut dari kapasitas 1 hingga 1.000 m³/hari — kompak untuk kapal dan pulau, bertenaga untuk kawasan industri. Konsultasi gratis bersama engineer kami hari ini.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak"><ClipboardList className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Konsultasi Gratis</Link>
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/produk/swro"><Microscope className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Lihat Spesifikasi SWRO</Link>
    </div>
  </div>
</div>

    </>
  );
};

export default MesinSulingAirLaut;
