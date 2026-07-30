import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, Wrench, Factory, Calculator } from 'lucide-react';


const ProdukRoKomersial = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.prod-hero{height:300px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:8rem;margin-bottom:2rem;background:linear-gradient(135deg,#0d3a6b,#1e90d6)}
.spec-table{width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:.9rem}
.spec-table tr:nth-child(odd) td{background:var(--gray)}
.spec-table td{padding:.7rem 1rem;border-bottom:1px solid var(--border)}
.spec-table td:first-child{font-weight:600;color:var(--navy);width:45%}


` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/produk">Produk &amp; Solusi</Link> › Reverse Osmosis</div>
    <h1>RO Komersial &amp; Gedung</h1>
    <p>Sistem RO terintegrasi untuk gedung bertingkat, hotel berbintang, pusat perbelanjaan, dan rumah sakit. Desain compact, mudah dioperasikan, dan hemat energi.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[3rem] items-start">
      <div>
        <div className="h-[300px] rounded-[14px] flex items-center justify-center text-[8rem] mb-[2rem] text-white " style={{"background":"none","padding":"0","height":"auto","display":"block"}}><picture>
  <source srcSet="images/produk-ro-9m3-a.webp" type="image/webp" />
  <img src="images/produk-ro-9m3-a.jpg" alt="RO komersial TSM untuk hotel, gedung perkantoran, dan rumah sakit di Indonesia" style={{"width":"100%","height":"auto","maxHeight":"480px","objectFit":"cover","borderRadius":"14px","display":"block"}} />
</picture></div>
        
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p><strong>Sistem RO komersial</strong> dirancang khusus untuk kebutuhan air bersih dan air minum di gedung bertingkat, hotel berbintang, pusat perbelanjaan, rumah sakit, kampus, dan fasilitas komersial lainnya. Berbeda dari RO industri yang dirancang untuk satu proses produksi tunggal, RO komersial harus melayani banyak titik penggunaan secara simultan: air minum, dapur, laundry, kolam renang, cooling tower, hingga sistem ozonisasi spa.</p>
<p>PT Tirta Sumber Makmur telah memasang sistem RO komersial di Ritz-Carlton, Eka Hospital, Universitas Atma Jaya, Universitas Airlangga, dan banyak hotel berbintang serta gedung komersial di Jabodetabek dan kota-kota besar Indonesia. Kapasitas yang kami sediakan dari <strong>1 hingga 100 m³ per hari</strong>, dengan desain compact, hemat energi, dan estetika presentable yang cocok untuk ruang servis gedung.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Cara Kerja RO Komersial</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p>RO komersial bekerja dengan prinsip sama seperti RO industri — mendorong air melewati membran semipermeabel untuk menghilangkan ion garam, mikroorganisme, dan kontaminan terlarut. Yang membedakan adalah <strong>konfigurasi dan tingkat otomasi</strong>: RO komersial dirancang untuk operasi semi-otomatis dengan minimal supervisor teknis, sementara RO industri membutuhkan operator dedicated.</p>
<p>Sistem RO komersial TSM standar terdiri dari: <strong>(1) pre-treatment</strong> berupa multi-media filter dan softener untuk menghilangkan kekeruhan dan hardness PDAM, <strong>(2) cartridge filter 5 mikron</strong>, <strong>(3) high-pressure pump</strong> dengan VFD untuk efisiensi, <strong>(4) membran RO 4-inch atau 8-inch</strong> tergantung kapasitas, <strong>(5) tangki produk dengan pompa distribusi</strong>, dan <strong>(6) UV sterilizer atau ozonisasi</strong> di outlet untuk menjamin kualitas mikrobiologis. Semua dikontrol PLC dengan HMI sentuh yang intuitif.</p>
</div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Spesifikasi Teknis</h2>
        <table className="w-full border-collapse my-[1.5rem] text-[0.9rem] ">
          <tbody><tr><td>Kapasitas</td><td>100 L/jam – 5 m³/jam</td></tr>
          <tr><td>Rejection Rate</td><td>95 – 99%</td></tr>
          <tr><td>Recovery Rate</td><td>60 – 75%</td></tr>
          <tr><td>Tekanan Operasi</td><td>6 – 12 bar</td></tr>
          <tr><td>TDS Output</td><td>&lt; 100 ppm</td></tr>
          <tr><td>Dimensi</td><td>Compact / Wall-mounted tersedia</td></tr>
        </tbody></table>
        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Fitur Utama</h2>
        <ul className="flex flex-col text-[0.9rem] text-text ">
          <li>Desain compact dan estetis untuk ruang terbatas</li>
          <li>Operasi otomatis dengan timer dan sensor</li>
          <li>Membran RO premium dengan usia pakai panjang</li>
          <li>Pre-filter multi-stage terintegrasi</li>
          <li>Indikator penggantian filter dan peringatan dini</li>
          <li>Sertifikasi food-grade untuk semua material kontak air</li>
          <li>Pemasangan mudah dan cepat</li>
          <li>Garansi sistem 1 tahun</li>
        </ul>
        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt-sm">Aplikasi</h2>
        <div className="flex flex-wrap gap-2 mt-[0.8rem] ">
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Hotel bintang 3–5</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Gedung perkantoran</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Rumah sakit dan klinik</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Pusat perbelanjaan dan restoran</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Apartemen dan kondominium</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Sekolah dan kampus</span>
        </div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Keunggulan RO Komersial TSM</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p>Setelah membangun sistem untuk hotel bintang 5 hingga rumah sakit besar, TSM mengoptimasi desain untuk kebutuhan operasional gedung komersial:</p>
<ul style={{"paddingLeft":"1.4rem","margin":".8rem 0"}}>
  <li style={{"marginBottom":".55rem"}}><strong>Desain compact untuk ruang servis</strong> — Sistem 5–20 m³/hari dapat ditempatkan di area mekanikal seluas 4×3 meter, mudah diintegrasikan dengan layout gedung existing.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Operasi senyap (&lt; 65 dB)</strong> — Pompa dengan acoustic enclosure dan vibration isolator agar tidak mengganggu area tamu hotel atau kamar pasien.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Efisiensi energi tinggi</strong> — VFD pada high-pressure pump menyesuaikan konsumsi listrik dengan kebutuhan, menghemat 25–40% biaya listrik vs sistem konstan.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Service contract untuk kepastian operasi</strong> — Untuk hotel dan rumah sakit yang tidak boleh kehabisan air, TSM menawarkan contract preventive maintenance dengan response time terjamin.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Sertifikasi air minum (opsional)</strong> — Sistem dapat dikonfigurasi memenuhi Permenkes 492/2010 dengan dokumentasi audit lengkap untuk inspeksi Dinas Kesehatan.</li>
</ul>
</div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Studi Kasus Aplikasi</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p><strong>Hotel Ritz-Carlton Jakarta</strong> — TSM memasang sistem RO komersial untuk kebutuhan air minum tamu, dapur, dan spa. Air baku PDAM yang TDS-nya berfluktuasi musiman (200–600 ppm) di-treat menjadi konsisten &lt; 50 ppm. Sistem dilengkapi remineralisasi untuk taste yang nikmat dan memenuhi standar luxury hospitality.</p>
<p><strong>Eka Hospital</strong> — Sistem RO komersial 25 m³/hari melayani kebutuhan pharmacy, dialisis ringan, dapur pasien, dan dispenser di area rawat inap. Sistem dilengkapi UV sterilizer dan rangkaian polishing untuk menjamin kualitas mikrobiologis. Tidak ada kasus kontaminasi mikroba sejak instalasi 2022.</p>
</div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Pertanyaan yang Sering Ditanyakan</h2>
<div className="" style={{"fontSize":".94rem","lineHeight":"1.75","color":"var(--text)"}}>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apa beda RO komersial dengan RO rumah tangga?</h3>
<p>RO rumah tangga umumnya 50–500 GPD (0,2–2 m³/hari), pakai membran 50–500 GPD ukuran kecil, dan dirancang untuk satu titik tap. RO komersial 1–100 m³/hari, pakai membran 4–8 inci industrial, dan distribusi multi-titik dengan tangki dan pompa booster.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah air RO aman diminum tamu hotel?</h3>
<p>Sangat aman dan jauh lebih aman daripada air galon umumnya — asalkan setelah RO ditambahkan tahap remineralisasi (Ca, Mg) dan disinfeksi (UV atau ozon). Sistem TSM standar untuk hospitality selalu termasuk kedua tahap ini.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa lama waktu instalasi RO komersial di gedung?</h3>
<p>Untuk sistem standar 5–20 m³/hari, instalasi 5–10 hari setelah ruang servis siap. Sistem yang lebih besar atau yang harus diintegrasikan dengan BAS gedung butuh 2–4 minggu.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Bagaimana skema pembayaran dan harga?</h3>
<p>TSM menawarkan beberapa opsi: pembelian langsung (CapEx), leasing 3–5 tahun, atau model BOO (Build-Own-Operate) di mana TSM memiliki dan mengoperasikan sistem dan klien membayar per m³ air. Tim sales akan membantu memilih skema paling sesuai.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah TSM menyediakan training operator gedung?</h3>
<p>Ya. Setiap instalasi disertai training 2–3 hari untuk tim engineering gedung, mencakup operasi harian, troubleshooting dasar, dan SOP emergency. Plus dokumentasi O&amp;M lengkap dalam Bahasa Indonesia.</p>

<p style={{"marginTop":"1.2rem"}}>Setiap gedung dan fasilitas komersial memiliki kebutuhan air yang unik — pola konsumsi, tingkat kualitas yang dibutuhkan, kendala ruang, dan budget operasional yang berbeda. TSM mendesain setiap sistem berdasarkan analisis kebutuhan spesifik klien, bukan dari katalog standar. Konsultasikan rencana Anda dengan tim engineer TSM untuk mendapatkan solusi yang tepat dan ekonomis dalam jangka panjang.</p>
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
            <li><Link to="/artikel/ro-hotel-resort">📘 Mengapa Hotel Berbintang Wajib Menggunakan Sistem RO</Link></li>
<li><Link to="/artikel/monitoring-kualitas-air-ro">📊 Cara Monitoring Kualitas Air RO Mandiri</Link></li>
<li><Link to="/industri/hotel"><Factory className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Solusi Water Treatment untuk Hotel &amp; Perhotelan</Link></li>
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

export default ProdukRoKomersial;
