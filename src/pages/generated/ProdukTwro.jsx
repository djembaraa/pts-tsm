import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, Calculator, Droplet, Waves } from 'lucide-react';


const ProdukTwro = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/produk">Produk &amp; Solusi</Link> › TWRO Tap Water RO</div>
    <h1>TWRO – Tap Water Reverse Osmosis</h1>
    <p>Sistem Reverse Osmosis berteknologi tinggi untuk mengolah air PDAM, air keran, dan air sumur tawar menjadi air murni berkualitas tinggi. Solusi paling hemat energi, mudah dirawat, dan paling ekonomis untuk kebutuhan air bersih di gedung, perkantoran, klinik, sekolah, industri makanan-minuman, dan berbagai industri pengolahan di seluruh Indonesia.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[3rem] items-start">
      <div>
        <div className="h-[300px] rounded-[14px] flex items-center justify-center text-[8rem] mb-[2rem] text-white "><Droplet className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div>

        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p><strong>Tap Water Reverse Osmosis (TWRO)</strong> adalah sistem pengolahan air menggunakan teknologi membran semi-permeabel yang dirancang khusus untuk mengolah air dengan kadar garam terlarut (TDS) rendah — mulai dari 200 hingga 1.000 ppm — seperti air PDAM, air keran, dan air sumur tawar. Dengan tekanan operasi hanya <strong>4–10 bar</strong> dan konsumsi energi serendah <strong>0,2–0,5 kWh/m³</strong>, TWRO adalah teknologi RO paling hemat energi dan paling ekonomis untuk kebutuhan air murni dalam skala komersial dan industri.</p>
        <p>PT Tirta Sumber Makmur merancang dan membangun sistem TWRO dari kapasitas <strong>0,5 hingga 200 m³/hari</strong> menggunakan membran Dow Filmtec TW30, Toray TMG, atau Hydranautics CPA series dengan rejection rate 96–98%. Setiap sistem dilengkapi pre-treatment terintegrasi — sand filter, carbon filter, softener (bila diperlukan), dan cartridge filter — dalam satu desain kompak yang dapat disesuaikan dengan kebutuhan ruang instalasi Anda.</p>
        <p>Dari klinik kecil yang membutuhkan 500 liter per hari hingga pabrik minuman yang memerlukan 100 m³ per hari, TSM merancang solusi TWRO yang tepat sasaran: efisien dalam investasi, hemat dalam operasional, dan mudah dalam perawatan harian.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Perbandingan TWRO, BWRO, dan SWRO</h2>
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
            <tr><td>TDS Air Baku Ideal</td><td>200 – 1.000 ppm</td><td>1.000 – 10.000 ppm</td><td>30.000 – 45.000 ppm</td></tr>
            <tr><td>Tekanan Operasi</td><td>4 – 10 bar</td><td>8 – 20 bar</td><td>55 – 70 bar</td></tr>
            <tr><td>Konsumsi Energi</td><td>0,2 – 0,5 kWh/m³</td><td>0,5 – 2 kWh/m³</td><td>3 – 5 kWh/m³</td></tr>
            <tr><td>Recovery Rate</td><td>75 – 90%</td><td>70 – 85%</td><td>35 – 45%</td></tr>
            <tr><td>TDS Produk Tipikal</td><td>&lt;50 ppm (10–30 ppm)</td><td>&lt;500 ppm</td><td>&lt;500 ppm</td></tr>
            <tr><td>Flux Membran</td><td>Tinggi</td><td>Sedang</td><td>Rendah</td></tr>
            <tr><td>Biaya Investasi Relatif</td><td>Rendah</td><td>Sedang</td><td>Tinggi</td></tr>
            <tr><td>Sumber Air Tipikal</td><td>PDAM, sumur tawar</td><td>Sumur payau, pesisir</td><td>Air laut</td></tr>
          </tbody>
        </table>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Spesifikasi Teknis</h2>
        <table className="w-full border-collapse my-[1.5rem] text-[0.9rem] ">
          <tbody><tr><td>TDS Air Baku</td><td>200 – 1.000 ppm</td></tr>
          <tr><td>Kapasitas</td><td>0,5 – 200 m³/hari</td></tr>
          <tr><td>Tekanan Operasi</td><td>4 – 10 bar</td></tr>
          <tr><td>Rejection Rate</td><td>96 – 98%</td></tr>
          <tr><td>Recovery Rate</td><td>75 – 90%</td></tr>
          <tr><td>TDS Produk</td><td>&lt; 50 ppm (tipikal 10–30 ppm)</td></tr>
          <tr><td>Konsumsi Energi</td><td>0,2 – 0,5 kWh/m³</td></tr>
          <tr><td>Membran</td><td>Dow Filmtec TW30, Toray TMG, Hydranautics CPA</td></tr>
          <tr><td>Pre-Treatment Standar</td><td>Sand filter + carbon filter + cartridge 5µm</td></tr>
          <tr><td>Pre-Treatment Opsional</td><td>Water softener (hardness &gt;200 mg/L), dosing antiscalant</td></tr>
          <tr><td>Konstruksi</td><td>Stainless steel 304 / HDPE, skid-mounted kompak</td></tr>
          <tr><td>Otomasi</td><td>Auto flush, auto backwash, panel kontrol digital</td></tr>
          <tr><td>Polishing Opsional</td><td>EDI / Mixed-bed resin untuk TDS mendekati 0 ppm</td></tr>
        </tbody></table>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Fitur Utama</h2>
        <ul className="flex flex-col text-[0.9rem] text-text ">
          <li><strong>Membran flux tinggi TW30 / TMG</strong> — Dirancang untuk tekanan rendah dan flux tinggi, menghasilkan lebih banyak air produk dengan energi lebih sedikit dibanding membran BWRO/SWRO.</li>
          <li><strong>Pre-treatment karbon aktif terintegrasi</strong> — Menyerap klorin residual dari air PDAM yang dapat merusak membran, sekaligus menghilangkan bau dan rasa tidak sedap.</li>
          <li><strong>Sand filter media bertingkat</strong> — Menghilangkan turbiditas, besi, mangan, dan partikel tersuspensi sebelum membran untuk memperpanjang usia membran.</li>
          <li><strong>Water softener opsional</strong> — Untuk air baku dengan hardness (kesadahan) tinggi &gt;200 mg/L, softener mencegah scaling pada membran dan memperpanjang interval CIP.</li>
          <li><strong>Auto-flush otomatis</strong> — Sistem pembilasan membran otomatis saat start-up dan shut-down untuk mencegah scaling dan fouling permukaan membran.</li>
          <li><strong>Recovery rate tinggi 75–90%</strong> — Dari 100 liter air baku, 75–90 liter menjadi air produk dan hanya 10–25 liter menjadi reject — sangat efisien dibanding teknologi SWRO.</li>
          <li><strong>Desain kompak skid-mounted</strong> — Footprint kecil, mudah dipasang di ruang utilitas terbatas, tersedia dalam berbagai konfigurasi kapasitas.</li>
          <li><strong>Kombinasi EDI untuk ultra-murni</strong> — Dapat disambung dengan unit EDI (Electrodeionization) untuk menghasilkan air dengan konduktivitas &lt;0,1 µS/cm — standar air farmasi dan laboratorium.</li>
        </ul>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Aplikasi &amp; Industri yang Dilayani</h2>
        <div className="" style={{"fontSize":".95rem","lineHeight":"1.78"}}>
        <p>TWRO adalah pilihan pertama untuk hampir semua industri yang mendapat pasokan air dari PDAM atau sumur tawar dan membutuhkan air yang lebih murni dari kualitas air baku yang tersedia:</p>
        <ul style={{"paddingLeft":"1.2rem","marginTop":".6rem"}}>
          <li><strong>Industri makanan &amp; minuman</strong> — Air produksi minuman dalam kemasan (AMDK), air sirup, air untuk pencucian mesin dan peralatan, air boiler feed, serta air CIP (Clean-In-Place) jalur produksi pangan.</li>
          <li><strong>Industri farmasi &amp; kosmetik</strong> — Air untuk proses formulasi, bahan baku produk liquid, dan pencucian peralatan. Dengan tambahan EDI, dapat menghasilkan PW (Purified Water) sesuai standar Farmakope Indonesia.</li>
          <li><strong>Klinik, rumah sakit, dan fasilitas kesehatan</strong> — Air untuk hemodialisis, sterilisasi peralatan medis, laboratorium klinik, dan konsumsi staf serta pasien.</li>
          <li><strong>Laboratorium pengujian &amp; riset</strong> — Air reagen, air untuk kalibrasi instrumen, dan air preparasi sampel yang membutuhkan TDS &lt;10 ppm atau konduktivitas sangat rendah.</li>
          <li><strong>Gedung perkantoran &amp; apartemen</strong> — Air minum berkualitas tinggi untuk penghuni gedung tanpa bergantung pada galon atau depot air isi ulang.</li>
          <li><strong>Hotel &amp; restoran</strong> — Air untuk dapur, minuman tamu, kolam renang, dan laundri yang bebas mineral keras.</li>
          <li><strong>Industri manufaktur &amp; elektronik</strong> — Air bilas komponen elektronik, air untuk proses pelapisan logam (electroplating), dan air pendingin presisi.</li>
          <li><strong>Laundri industri &amp; tekstil</strong> — Air lunak bebas mineral untuk mencegah noda kapur pada kain dan meningkatkan efektivitas deterjen.</li>
        </ul>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Skema Sistem TWRO Lengkap</h2>
        <div className="" style={{"fontSize":".95rem","lineHeight":"1.8"}}>
        <p>Sistem TWRO TSM dirancang sebagai satu kesatuan aliran yang terintegrasi. Berikut skema tipikal dari hulu ke hilir:</p>
        <ol style={{"paddingLeft":"1.4rem","marginTop":".6rem","lineHeight":"2.2"}}>
          <li><strong>Sumber air baku</strong> — Air PDAM atau sumur dengan TDS 200–1.000 ppm masuk ke tangki penampung baku.</li>
          <li><strong>Sand filter / multimedia filter</strong> — Menyaring turbiditas, besi, mangan, dan partikel tersuspensi. Backwash otomatis terjadwal.</li>
          <li><strong>Carbon filter (activated carbon)</strong> — Menyerap klorin, bau, rasa, dan senyawa organik yang dapat merusak membran RO.</li>
          <li><strong>Water softener</strong> — (Opsional) Digunakan bila hardness air baku &gt;200 mg/L untuk mencegah scaling CaCO₃ dan MgCO₃ pada membran.</li>
          <li><strong>Cartridge filter 5 µm</strong> — Perlindungan terakhir sebelum membran, menangkap partikel halus lolos dari sand filter.</li>
          <li><strong>High-pressure pump &amp; membran RO</strong> — Pompa tekanan 4–10 bar mendorong air melewati membran TW30/TMG. Air produk (permeate) dialirkan ke tangki produk; reject/concentrate dibuang atau diresirkulasi sebagian.</li>
          <li><strong>Post-treatment</strong> — (Opsional) UV sterilisasi untuk membunuh sisa mikroorganisme, atau EDI/mixed-bed resin untuk polishing ultra-murni.</li>
          <li><strong>Tangki produk &amp; distribusi</strong> — Air produk ditampung di tangki SS316L/HDPE dan didistribusikan melalui pompa transfer ke titik penggunaan.</li>
        </ol>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Pertanyaan Umum (FAQ)</h2>
        <div className="">
        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apa itu TWRO dan apa bedanya dengan RO biasa?</h3>
        <p>TWRO adalah sistem RO khusus untuk air dengan TDS rendah seperti air PDAM atau sumur tawar (200–1.000 ppm). Membran TWRO beroperasi pada tekanan lebih rendah (4–10 bar) dengan flux lebih tinggi dibanding membran BWRO atau SWRO. Pada dasarnya istilah "RO biasa" di pasaran merujuk pada TWRO — bedanya TSM merancangnya dalam skala komersial dan industri yang jauh lebih besar dari unit rumahan.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah TWRO bisa digunakan untuk air PDAM yang berbau klorin?</h3>
        <p>Ya. Air PDAM mengandung klorin residual yang harus dihilangkan sebelum membran RO karena klorin merusak membran polisulfon. Sistem TWRO TSM dilengkapi carbon filter (karbon aktif) yang menyerap klorin, bau, dan rasa tidak sedap. Hasilnya air produk bebas klorin, bebas bau, dan TDS jauh lebih rendah — aman untuk konsumsi langsung maupun produksi.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa TDS air produk yang dihasilkan sistem TWRO?</h3>
        <p>Dengan air baku PDAM atau sumur tawar ber-TDS 200–500 ppm, sistem TWRO TSM menghasilkan air produk dengan TDS 10–30 ppm (rejection rate 96–98%). Untuk aplikasi ultra-murni seperti laboratorium atau produksi elektronik, sistem TWRO dapat dikombinasikan dengan EDI atau mixed-bed resin untuk TDS mendekati 0 ppm.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa lama usia pakai membran TWRO?</h3>
        <p>Dengan pre-treatment memadai dan perawatan rutin, membran TWRO bertahan 3–5 tahun. Faktor pemendek usia membran: paparan klorin berlebih (karbon aktif tidak diganti tepat waktu), scaling akibat hardness tinggi tanpa antiscalant, dan fouling biologis. TSM menyediakan program perawatan berkala untuk memastikan membran beroperasi optimal.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Industri apa saja yang cocok menggunakan TWRO?</h3>
        <p>TWRO cocok untuk semua industri yang mendapat pasokan air dari PDAM atau sumur tawar dan membutuhkan kualitas air yang lebih tinggi. Pengguna utama: industri makanan dan minuman, farmasi, kosmetik, klinik dan rumah sakit, laboratorium, gedung perkantoran dan apartemen, hotel, industri manufaktur dan elektronik, serta laundri industri.</p>

        <p style={{"marginTop":"1.2rem"}}>Dengan rekam jejak lebih dari ratusan instalasi di seluruh Indonesia, TSM siap merancang sistem TWRO yang tepat untuk kebutuhan spesifik Anda — mulai dari pemilihan membran, desain pre-treatment, hingga skema distribusi air produk. Konsultasikan kebutuhan Anda dengan engineer kami hari ini, gratis tanpa syarat.</p>
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
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/swro">→ SWRO Desalinasi Air Laut</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/bwro">→ BWRO Air Payau</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/mikrofiltrasi">→ Mikrofiltrasi MF</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/cartridge-mf">→ Cartridge MF</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/uf">→ Ultrafiltrasi (UF)</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/water-filter">→ Water Filter Pre-Treatment</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/wtp-wwtp-stp">→ WTP / WWTP / STP</Link></li>
            <li><Link style={{"fontSize":".84rem","fontWeight":"600","color":"var(--blue)","display":"block"}} to="/produk">→ Semua Produk</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem]" style={{"background":"linear-gradient(145deg,var(--navy),var(--blue))","border":"none"}}>
          <h4 style={{"color":"rgba(255,255,255,.45)","borderColor":"rgba(255,255,255,.15)"}}>Uji Kualitas Air Gratis</h4>
          <p style={{"fontSize":".86rem","opacity":".84","color":"#fff","lineHeight":"1.65","marginBottom":"1rem"}}>Kirimkan sampel air PDAM atau air sumur Anda untuk dianalisis tim engineer TSM — gratis, tanpa syarat.</p>
          <Link href="tel:+62818719119" className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center","fontSize":".82rem"}}>📞 021-88871689</Link>
        </div>
      </aside>
    </div>
  </div>

  <div className="info-box" style={{"marginTop":"2rem"}}>
    <strong>📚 Baca Juga</strong>
    <ul style={{"marginTop":".75rem","paddingLeft":"1.2rem"}}>
      <li><Link to="/artikel/5-kesalahan-perawatan-ro">⚠️ 5 Kesalahan Perawatan Sistem RO yang Sering Terjadi</Link></li>
      <li><Link to="/artikel/jadwal-perawatan-ro">🗓️ Jadwal Perawatan Sistem RO yang Ideal</Link></li>
      <li><Link to="/produk/bwro"><Waves className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> BWRO – Untuk Air Payau TDS 1.000–10.000 ppm</Link></li>
      <li><Link to="/produk/swro"><Waves className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> SWRO – Untuk Air Laut TDS 30.000–45.000 ppm</Link></li>
      <li><Link to="/kalkulator"><Calculator className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Kalkulator Kebutuhan Sistem RO Anda</Link></li>
    </ul>
  </div>

</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Air PDAM atau Sumur Anda Perlu Dimurnikan?</h2>
    <p>TWRO adalah solusi paling hemat energi dan paling ekonomis untuk mengolah air PDAM atau sumur tawar menjadi air murni berkualitas tinggi. TSM merancang sistem TWRO dari 0,5 hingga 200 m³/hari — tepat untuk kebutuhan Anda.</p>
    <div className="flex gap-4 justify-center flex-wrap"><Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak"><ClipboardList className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Konsultasi TWRO Gratis</Link><Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/kalkulator"><Calculator className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Hitung Kebutuhan Air Anda</Link></div>
  </div>
</div>

    </>
  );
};

export default ProdukTwro;
