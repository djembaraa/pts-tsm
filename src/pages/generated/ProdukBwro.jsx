import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, Calculator, Settings, Waves } from 'lucide-react';


const ProdukBwro = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/produk">Produk &amp; Solusi</Link> › BWRO Air Payau</div>
    <h1>BWRO – Brackish Water Reverse Osmosis</h1>
    <p>Sistem Reverse Osmosis khusus air payau untuk mengolah air sumur asin, air tanah TDS tinggi, dan sumber air payau pesisir menjadi air bersih berkualitas tinggi. Solusi paling efisien dan ekonomis untuk wilayah dengan intrusi air laut atau akuifer mineral tinggi di seluruh Indonesia.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[3rem] items-start">
      <div>
        <div className="h-[300px] rounded-[14px] flex items-center justify-center text-[8rem] mb-[2rem] text-white "><Waves className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div>

        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p><strong>Brackish Water Reverse Osmosis (BWRO)</strong> adalah teknologi pengolahan air payau — air dengan kadar garam (TDS) antara 1.000 hingga 10.000 ppm — menjadi air bersih yang memenuhi standar air minum atau air proses industri. BWRO menjadi solusi vital bagi ribuan industri dan komunitas di Indonesia yang berada di wilayah pesisir, bekas lahan tambang, atau daerah dengan kondisi geologi yang menyebabkan air tanah memiliki kandungan mineral dan garam terlarut sangat tinggi.</p>
        <p>PT Tirta Sumber Makmur merancang dan membangun sistem BWRO dari kapasitas <strong>1 hingga 500 m³/hari</strong> dengan menggunakan membran Dow Filmtec BW series, Toray TM series, atau Hydranautics ESPA yang dioptimalkan khusus untuk air payau. Dengan tekanan operasi 8–20 bar dan konsumsi energi hanya <strong>0,5–2 kWh per m³ produk</strong>, BWRO memberikan biaya operasional 3–5 kali lebih rendah dibandingkan teknologi desalinasi air laut (SWRO).</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Perbandingan BWRO, TWRO, dan SWRO</h2>
        <table className="compare-table ">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>TWRO</th>
              <th>BWRO</th>
              <th>SWRO</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>TDS Air Baku</td><td>200–1.000 ppm</td><td>1.000–10.000 ppm</td><td>30.000–45.000 ppm</td></tr>
            <tr><td>Tekanan Operasi</td><td>4–10 bar</td><td>8–20 bar</td><td>55–70 bar</td></tr>
            <tr><td>Konsumsi Energi</td><td>0,2–0,5 kWh/m³</td><td>0,5–2 kWh/m³</td><td>3–5 kWh/m³</td></tr>
            <tr><td>Recovery Rate</td><td>75–90%</td><td>70–85%</td><td>35–45%</td></tr>
            <tr><td>TDS Produk</td><td>&lt;50 ppm</td><td>&lt;500 ppm</td><td>&lt;500 ppm</td></tr>
            <tr><td>Sumber Air Tipikal</td><td>PDAM, sumur tawar</td><td>Sumur payau, pesisir</td><td>Air laut</td></tr>
          </tbody>
        </table>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Spesifikasi Teknis</h2>
        <table className="w-full border-collapse my-[1.5rem] text-[0.9rem] ">
          <tbody><tr><td>TDS Air Baku</td><td>1.000 – 10.000 ppm</td></tr>
          <tr><td>Kapasitas</td><td>1 – 500 m³/hari</td></tr>
          <tr><td>Tekanan Operasi</td><td>8 – 20 bar</td></tr>
          <tr><td>Rejection Rate</td><td>96 – 99%</td></tr>
          <tr><td>Recovery Rate</td><td>70 – 85%</td></tr>
          <tr><td>TDS Produk</td><td>&lt; 500 ppm (dapat &lt; 50 ppm dengan 2-pass)</td></tr>
          <tr><td>Konsumsi Energi</td><td>0,5 – 2 kWh/m³</td></tr>
          <tr><td>Membran</td><td>Dow Filmtec BW30, Toray TM720, Hydranautics ESPA</td></tr>
          <tr><td>Otomasi</td><td>PLC / SCADA tersedia</td></tr>
        </tbody></table>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Fitur Utama</h2>
        <ul className="flex flex-col text-[0.9rem] text-text ">
          <li>Membran BWRO grade khusus air payau — rejection rate 96–99% untuk ion Na, Cl, Ca, Mg</li>
          <li>High-pressure pump efisiensi tinggi dengan inverter (VFD) untuk penghematan energi</li>
          <li>Pre-treatment terintegrasi: multimedia filter, softener, antiscalant dosing, cartridge 5 µm</li>
          <li>Sistem antiscalant dosing otomatis untuk mencegah scaling CaCO₃, CaSO₄, dan silika</li>
          <li>Monitoring online TDS, konduktivitas, pH, flow, dan pressure secara real-time</li>
          <li>Opsi 2-pass RO untuk menghasilkan TDS produk &lt; 50 ppm jika diperlukan</li>
          <li>Desain modular skid-mounted — commissioning di lapangan lebih cepat</li>
          <li>Sistem flush otomatis saat shutdown untuk melindungi membran dari scaling</li>
        </ul>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt-sm">Aplikasi</h2>
        <div className="flex flex-wrap gap-2 mt-[0.8rem] ">
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Air sumur payau di pesisir pantai</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Air tanah TDS tinggi (mineral)</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Industri di daerah kekeringan air tawar</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Pabrik di kawasan industri pesisir</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Air proses industri makanan &amp; minuman</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Boiler feed water (low-pressure)</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Pengolahan air untuk pertanian hidroponik</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Air minum komunitas daerah terpencil</span>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Wilayah Indonesia yang Membutuhkan BWRO</h2>
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p>Masalah air payau bukan isu kecil di Indonesia. Berdasarkan data Kementerian PUPR, lebih dari 5,7 juta orang di wilayah pesisir Indonesia menghadapi masalah intrusi air laut ke akuifer air tawar — khususnya di musim kemarau saat muka air tanah turun drastis. Beberapa wilayah dengan kebutuhan BWRO tertinggi:</p>
        <ul style={{"paddingLeft":"1.4rem","margin":".8rem 0"}}>
          <li style={{"marginBottom":".55rem"}}><strong>Pesisir Utara Jawa</strong> — Jakarta Utara, Semarang, Demak, Pekalongan, Brebes mengalami penurunan muka tanah (land subsidence) yang memperparah intrusi air laut ke akuifer. Air sumur di banyak lokasi memiliki TDS 2.000–8.000 ppm.</li>
          <li style={{"marginBottom":".55rem"}}><strong>Kalimantan Timur &amp; Selatan</strong> — Air tanah di beberapa kawasan pertambangan dan pesisir Kalimantan mengandung mineral tinggi dengan TDS 1.500–5.000 ppm. BWRO menjadi solusi utama untuk air proses industri di sana.</li>
          <li style={{"marginBottom":".55rem"}}><strong>Kepulauan Nusa Tenggara</strong> — NTB dan NTT memiliki kondisi geologi dengan akuifer air payau di banyak daerah, serta musim kering panjang yang memperburuk kualitas air sumur.</li>
          <li style={{"marginBottom":".55rem"}}><strong>Kawasan Industri Pesisir</strong> — KIIC (Karawang), KIEC (Cilegon), PIER (Pasuruan), dan berbagai kawasan industri pesisir lainnya membutuhkan BWRO untuk air proses karena air sumur lokal terpengaruh intrusi.</li>
        </ul>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Studi Kasus Aplikasi</h2>
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p><strong>Pabrik Pengolahan Udang di Sidoarjo</strong> — Air sumur artesis di lokasi pabrik memiliki TDS 4.200 ppm dengan kandungan klorida tinggi. TSM merancang sistem BWRO 80 m³/hari dengan pre-treatment softener untuk hardness dan antiscalant dosing. Air produk mencapai TDS 180 ppm, memenuhi standar air proses pengolahan hasil laut. Penghematan biaya dibanding membeli air tangki: Rp 1,2 miliar per tahun.</p>
        <p><strong>RSUD di Pesisir Kalimantan Selatan</strong> — Rumah sakit dengan 150 tempat tidur bergantung pada air tangki dari kota dengan biaya logistik sangat tinggi. TSM menginstalasi BWRO 30 m³/hari menggunakan air sumur payau setempat (TDS 3.800 ppm). Post-treatment meliputi UV sterilizer dan remineralisasi. Rumah sakit kini mandiri air bersih dan menghemat Rp 480 juta per tahun dari biaya pengiriman air.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Pertanyaan yang Sering Ditanyakan</h2>
        <div className="" style={{"fontSize":".94rem","lineHeight":"1.75","color":"var(--text)"}}>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apa itu air payau dan mengapa perlu BWRO?</h3>
        <p>Air payau adalah air dengan TDS antara 1.000–10.000 ppm — lebih asin dari air tawar biasa tapi jauh lebih rendah dari air laut (35.000 ppm). Air ini banyak ditemukan di pesisir pantai, daerah dengan intrusi air laut ke akuifer, bekas tambang, dan beberapa wilayah di Jawa, Kalimantan, dan Sumatra. Air ini tidak layak diminum dan merusak proses industri. BWRO adalah teknologi paling efisien dan ekonomis untuk mengolahnya — jauh lebih hemat energi dibanding SWRO.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa perbedaan tekanan operasi BWRO vs SWRO?</h3>
        <p>BWRO untuk air payau beroperasi pada tekanan 8–20 bar, jauh lebih rendah dari SWRO air laut yang membutuhkan 55–70 bar. Dampaknya langsung pada energi: BWRO hanya butuh 0,5–2 kWh/m³, sedangkan SWRO membutuhkan 3–5 kWh/m³ — 3 hingga 5 kali lebih hemat.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah BWRO bisa mengolah air sumur yang asin di pesisir pantai?</h3>
        <p>Ya, BWRO sangat tepat untuk mengolah air sumur di pesisir yang mengalami intrusi air laut, selama TDS air sumur di bawah 10.000 ppm. Jika TDS mendekati atau di atas 10.000 ppm, kami merekomendasikan membran SWRO tekanan menengah atau kombinasi BWRO dua pass. TSM menganalisis sampel air sumur Anda secara gratis sebelum merekomendasikan solusi.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa recovery rate sistem BWRO?</h3>
        <p>Recovery rate BWRO umumnya 70–85% — dari 100 liter air payau, 70–85 liter menjadi air produk bersih dan hanya 15–30 liter menjadi brine. Recovery ini jauh lebih tinggi dibanding SWRO yang biasanya 35–45%. Recovery tinggi berarti penggunaan air baku lebih efisien dan volume brine yang perlu dibuang lebih sedikit.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apa perbedaan BWRO dengan TWRO (Tap Water RO)?</h3>
        <p>TWRO dirancang untuk air dengan TDS rendah 200–1.000 ppm seperti air PDAM. BWRO dirancang untuk air dengan TDS 1.000–10.000 ppm menggunakan membran khusus air payau dengan rejection rate lebih tinggi dan tekanan operasi lebih besar. Menggunakan membran TWRO untuk air payau akan menghasilkan kualitas produk buruk dan mempercepat kerusakan membran.</p>

        <p style={{"marginTop":"1.2rem"}}>TSM memiliki rekam jejak panjang dalam menyelesaikan masalah air payau di seluruh Indonesia — dari Jawa Utara hingga pesisir Kalimantan dan Nusa Tenggara. Kirimkan sampel air Anda untuk analisis gratis, dan tim engineer kami akan merancang solusi BWRO yang paling efisien untuk kondisi spesifik Anda.</p>
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
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/ro-komersial">→ RO Komersial &amp; Gedung</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/desalinasi">→ Desalinasi SWRO Air Laut</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/twro">→ TWRO Tap Water RO</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/water-filter">→ Water Filter Pre-Treatment</Link></li>
            <li><Link style={{"fontSize":".84rem","fontWeight":"600","color":"var(--blue)","display":"block"}} to="/produk">→ Semua Produk</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem]" style={{"background":"linear-gradient(145deg,var(--navy),var(--blue))","border":"none"}}>
          <h4 style={{"color":"rgba(255,255,255,.45)","borderColor":"rgba(255,255,255,.15)"}}>Analisis Air Gratis</h4>
          <p style={{"fontSize":".86rem","opacity":".84","color":"#fff","lineHeight":"1.65","marginBottom":"1rem"}}>Kirim sampel air sumur atau air baku Anda untuk dianalisis tim engineer TSM — gratis, tanpa syarat.</p>
          <Link href="tel:+62818719119" className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center","fontSize":".82rem"}}>📞 021-88871689</Link>
        </div>
      </aside>
    </div>
  </div>

  <div className="info-box" style={{"marginTop":"2rem"}}>
    <strong>📚 Baca Juga</strong>
    <ul style={{"marginTop":".75rem","paddingLeft":"1.2rem"}}>
      <li><Link to="/artikel/perbedaan-swro-bwro-twro">📘 Perbedaan SWRO, BWRO, dan TWRO: Panduan Memilih</Link></li>
      <li><Link to="/artikel/ro-prinsip-kerja"><Settings className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Prinsip Kerja Reverse Osmosis dari Hulu ke Hilir</Link></li>
      <li><Link to="/produk/water-filter">🔵 Water Filter – Pre-Treatment Wajib Sebelum Membran BWRO</Link></li>
      <li><Link to="/produk/desalinasi"><Waves className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> SWRO Desalinasi – Untuk Air Laut TDS &gt; 10.000 ppm</Link></li>
      <li><Link to="/kalkulator"><Calculator className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Kalkulator Kebutuhan Sistem RO Anda</Link></li>
    </ul>
  </div>

</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Air Sumur Anda Asin atau TDS-nya Terlalu Tinggi?</h2>
    <p>Kami siap menganalisis air baku Anda secara gratis dan merancang sistem BWRO yang paling efisien — agar Anda mendapatkan air bersih berkualitas dengan biaya operasional serendah mungkin.</p>
    <div className="flex gap-4 justify-center flex-wrap"><Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak"><ClipboardList className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Minta Analisis Air Gratis</Link><Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/artikel/perbedaan-swro-bwro-twro">📖 Baca Panduan BWRO vs SWRO</Link></div>
  </div>
</div>

    </>
  );
};

export default ProdukBwro;
