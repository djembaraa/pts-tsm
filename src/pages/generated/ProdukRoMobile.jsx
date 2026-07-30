import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, Wrench, Calculator, Waves, Ship } from 'lucide-react';


const ProdukRoMobile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.prod-hero{height:300px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:8rem;margin-bottom:2rem;background:linear-gradient(135deg,#1a3a5c,#0d5fa8)}
.spec-table{width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:.9rem}
.spec-table tr:nth-child(odd) td{background:var(--gray)}
.spec-table td{padding:.7rem 1rem;border-bottom:1px solid var(--border)}
.spec-table td:first-child{font-weight:600;color:var(--navy);width:45%}


` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/produk">Produk &amp; Solusi</Link> › Reverse Osmosis</div>
    <h1>RO Mobile / Portable</h1>
    <p>Unit RO mobile yang dapat dipindah-pindah, ideal untuk proyek konstruksi, penanganan bencana, event, dan lokasi temporer yang membutuhkan air bersih segera.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[3rem] items-start">
      <div>
        <div className="h-[300px] rounded-[14px] flex items-center justify-center text-[8rem] mb-[2rem] text-white " style={{"background":"none","padding":"0","height":"auto","display":"block"}}><picture>
  <source srcSet="images/foto-pemasangan-kontainer.webp" type="image/webp" />
  <img src="images/foto-pemasangan-kontainer.jpg" alt="RO mobile kontainer TSM untuk lokasi terpencil, offshore, dan tanggap darurat" style={{"width":"100%","height":"auto","maxHeight":"480px","objectFit":"cover","borderRadius":"14px","display":"block"}} />
</picture></div>
        
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p><strong>RO mobile</strong> dan <strong>RO kontainer</strong> adalah solusi water treatment yang dapat dipindah-pindahkan, dirancang untuk lokasi yang membutuhkan air bersih cepat tanpa instalasi permanen: penanganan bencana alam, kawasan tambang remote, platform offshore, kapal kerja, event berskala besar, hingga kepulauan terpencil yang sulit dipasok air tawar dari daratan.</p>
<p>PT Tirta Sumber Makmur menawarkan sistem RO mobile dalam berbagai konfigurasi: <strong>kontainer 20 ft atau 40 ft</strong> yang siap operasi setelah disambung listrik dan air baku, <strong>skid-mounted portable</strong> untuk lokasi indoor, dan <strong>trailer-mounted</strong> untuk mobilitas tinggi. Sistem mencakup BWRO untuk air payau/tanah, SWRO untuk air laut, dan TWRO untuk air ledeng. Kapasitas yang tersedia dari <strong>1 hingga 200 m³ per hari</strong>, sudah teruji di proyek-proyek strategis bersama PT Pelindo, Wintermar Offshore, KRI, dan operasi tanggap bencana BNPB.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Konfigurasi RO Mobile TSM</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p>Sistem RO mobile TSM dirancang plug-and-play: semua komponen — pompa, vessel, panel kontrol, instrumentasi, tangki, dan piping — terintegrasi dalam satu unit yang sudah ditest lengkap di workshop kami di Bekasi sebelum dikirim. Pengguna di lapangan cukup menyambung tiga koneksi: <strong>(1) input air baku</strong>, <strong>(2) output air produk</strong>, dan <strong>(3) sumber listrik</strong> — sistem siap beroperasi dalam hitungan jam.</p>
<p>Untuk lokasi tanpa listrik PLN, TSM dapat mengintegrasikan <strong>genset diesel</strong> atau bahkan <strong>panel surya</strong> dalam kontainer. Semua kontainer menggunakan struktur ISO standar sehingga dapat diangkut dengan truk, kapal, atau kereta tanpa modifikasi khusus. Kontainer 20 ft umumnya menampung kapasitas 5–30 m³/hari, sementara kontainer 40 ft dapat menampung 30–100 m³/hari atau dua sistem terpisah (BWRO dan SWRO) sebagai redundancy.</p>
</div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Spesifikasi Teknis</h2>
        <table className="w-full border-collapse my-[1.5rem] text-[0.9rem] ">
          <tbody><tr><td>Kapasitas</td><td>500 L/jam – 10 m³/jam</td></tr>
          <tr><td>Sumber Daya</td><td>Listrik / Generator / Solar Panel</td></tr>
          <tr><td>Berat</td><td>80 – 500 kg (tergantung model)</td></tr>
          <tr><td>Dimensi</td><td>Skid / Trailer / Container</td></tr>
          <tr><td>TDS Output</td><td>&lt; 200 ppm</td></tr>
          <tr><td>Mobilitas</td><td>Roda / Trailer / Kontainer</td></tr>
        </tbody></table>
        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Fitur Utama</h2>
        <ul className="flex flex-col text-[0.9rem] text-text ">
          <li>Rangka baja galvanis anti korosi dan tahan benturan</li>
          <li>Roda industrial untuk mobilitas mudah</li>
          <li>Koneksi cepat plug-and-play</li>
          <li>Bisa beroperasi dengan generator diesel</li>
          <li>Opsi panel surya untuk lokasi off-grid</li>
          <li>Tank air baku terintegrasi (opsional)</li>
          <li>Mudah dibongkar dan dirakit kembali</li>
          <li>Sertifikat kelayakan operasi</li>
        </ul>
        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt-sm">Aplikasi</h2>
        <div className="flex flex-wrap gap-2 mt-[0.8rem] ">
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Proyek konstruksi di lokasi terpencil</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Penanganan bencana dan darurat</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Event outdoor dan festival</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Militer dan ekspedisi</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Tambang dan perkebunan remote</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Pulau terpencil sementara</span>
        </div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Keunggulan RO Mobile TSM</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p>Mobilitas dan kecepatan deployment adalah inti dari sistem ini — namun TSM tidak mengkompromikan kualitas engineering:</p>
<ul style={{"paddingLeft":"1.4rem","margin":".8rem 0"}}>
  <li style={{"marginBottom":".55rem"}}><strong>Deployment cepat 24–72 jam</strong> — Kontainer kami dirancang untuk operasi penuh dalam 24 jam setelah tiba di lokasi, termasuk untuk skenario tanggap bencana.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Tahan kondisi tropis dan offshore</strong> — Eksterior kontainer cat marine grade dengan corrosion protection. Komponen internal SS-316 untuk aplikasi salt-spray.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Remote monitoring via 4G/satelit</strong> — Operator pusat dapat memantau kinerja sistem real-time, termasuk untuk lokasi remote tanpa SDM teknis di lapangan.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Insulasi termal dan akustik</strong> — Untuk operasi di lingkungan sensitif (hotel, area hunian), kontainer dapat dilengkapi sound attenuation hingga &lt; 65 dB pada 1 meter.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Skema sewa-jangka-pendek tersedia</strong> — Untuk kebutuhan event, proyek konstruksi, atau emergency, TSM menawarkan skema rental dengan operator dan service termasuk.</li>
</ul>
</div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Studi Kasus Aplikasi</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p><strong>SWRO Kontainer untuk Resort Pulau Ayer</strong> — TSM mengirim sistem SWRO 30 m³/hari dalam kontainer 40 ft yang dimuat ke kapal dari Jakarta. Sistem dipasang dan commissioned dalam 5 hari di pulau, langsung menggantikan ketergantungan resort pada pengiriman air kapal mingguan. Total waktu dari order hingga produksi air: 9 minggu.</p>
<p><strong>RO Mobile untuk Wintermar Offshore</strong> — Unit watermaker BWRO/SWRO 20 m³/hari dipasang di kapal offshore Wintermar yang melayani support platform migas. Sistem dirancang vibration-resistant dan dapat berpindah antar kapal sesuai kebutuhan operasional. Maintenance tetap dilakukan tim TSM saat kapal docking di Batam atau Jakarta.</p>
</div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Pertanyaan yang Sering Ditanyakan</h2>
<div className="" style={{"fontSize":".94rem","lineHeight":"1.75","color":"var(--text)"}}>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa cepat RO mobile bisa dideploy untuk tanggap bencana?</h3>
<p>Untuk skenario tanggap bencana, TSM mempertahankan beberapa unit kontainer SWRO/BWRO siap kirim dalam 48 jam ke lokasi yang dapat dijangkau truk atau kapal. Sistem dapat beroperasi dalam 24 jam setelah tiba dengan genset onboard.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Bisa untuk air sumur, air sungai, dan air laut?</h3>
<p>Ya. TSM merancang RO mobile dengan konfigurasi yang sesuai sumber air: TWRO untuk air PDAM/sumur dangkal, BWRO untuk air sumur dalam dengan TDS tinggi, dan SWRO untuk air laut. Beberapa unit dual-mode dapat beroperasi pada beberapa tipe sumber dengan penyesuaian setting.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah bisa rental jangka pendek?</h3>
<p>Ya, TSM menyediakan skema rental dengan periode minimum 1 bulan. Paket termasuk delivery, instalasi, operator on-site (opsional), maintenance, dan demobilisasi. Sangat cocok untuk proyek konstruksi, event, atau bridging sebelum sistem permanen siap.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Bagaimana power supply untuk lokasi tanpa PLN?</h3>
<p>Kontainer dapat dilengkapi genset diesel sesuai kebutuhan kapasitas (umumnya 30–80 kVA). Untuk lokasi off-grid jangka panjang, TSM menawarkan opsi hybrid solar + battery + genset yang menurunkan konsumsi solar 60–80%.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah TSM melayani pengiriman ke kepulauan terpencil?</h3>
<p>Ya. Kami sudah mengirim sistem ke Maluku, NTT, Papua, Kalimantan, dan kepulauan lain via kapal feeder dan kapal tradisional. Tim TSM ikut mendampingi instalasi dan training operator lokal sehingga sistem dapat dioperasikan secara mandiri.</p>

<p style={{"marginTop":"1.2rem"}}>Mobilitas, kecepatan deployment, dan kualitas engineering — itulah yang membedakan RO mobile TSM dari kompetitor. Tim kami siap membantu mendesain sistem yang tepat untuk lokasi Anda, baik untuk kebutuhan permanen di pulau terpencil, operasi offshore, maupun rental jangka pendek untuk proyek atau emergency.</p>
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
            <li><Link to="/artikel/desalinasi-solusi-pulau">🏝️ Desalinasi Solusi Pulau Terpencil</Link></li>
            <li><Link to="/artikel/ro-kapal-offshore">⚓ RO untuk Kapal &amp; Platform Offshore</Link></li>
            <li><Link to="/industri/maritim"><Ship className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Solusi Water Treatment untuk Maritim &amp; Offshore</Link></li>
            <li><Link to="/produk/desalinasi"><Waves className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> SWRO Desalinasi Air Laut</Link></li>
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

export default ProdukRoMobile;
