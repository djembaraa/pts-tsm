import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, Wrench, Factory, Calculator, Waves } from 'lucide-react';


const ProdukMembran = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/produk">Produk &amp; Solusi</Link> › Suku Cadang</div>
    <h1>Membran RO, NF &amp; UF — Distributor Indonesia</h1>
    <p>Stok lengkap membran RO, Nanofiltration (NF), dan Ultrafiltrasi (UF) dari merek terkemuka dunia. Tersedia untuk semua ukuran dan aplikasi sistem water treatment.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[3rem] items-start">
      <div>
        <div className="h-[300px] rounded-[14px] flex items-center justify-center text-[8rem] mb-[2rem] text-white " style={{"background":"none","padding":"0","height":"auto","display":"block"}}><picture>
  <source srcSet="images/produk-ro-industri-2.webp" type="image/webp" />
  <img src="images/produk-ro-industri-2.jpg" alt="Elemen membran RO, NF, UF Dow Filmtec, Toray, Hydranautics untuk industri Indonesia" style={{"width":"100%","height":"auto","maxHeight":"480px","objectFit":"cover","borderRadius":"14px","display":"block"}} />
</picture></div>
        
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p>PT Tirta Sumber Makmur adalah <strong>distributor resmi membran RO, NF, dan UF</strong> di Indonesia untuk merek-merek tier-1 dunia: <strong>Dow Filmtec</strong>, <strong>Toray</strong>, <strong>Hydranautics</strong>, dan <strong>Koch Membrane</strong>. Stok kami lengkap untuk ukuran standar industri 4040 (4-inch) dan 8040 (8-inch), dengan opsi 2521 dan 4021 untuk aplikasi komersial dan laboratorium. Setiap elemen membran datang dengan garansi produsen dan sertifikat asli — bukan rekondisi.</p>
<p>Selain menjual, tim TSM membantu pelanggan memilih membran yang paling tepat untuk aplikasi spesifik mereka: <strong>BW</strong> (Brackish Water) untuk air payau dan air sumur, <strong>SW</strong> (Sea Water) untuk desalinasi, <strong>LPRO</strong> (Low Pressure RO) untuk hemat energi, atau <strong>fouling-resistant</strong> untuk air dengan kandungan organik tinggi. Pengiriman ke seluruh Indonesia dengan packing standar pabrikan untuk menjaga kualitas membran selama transit.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Memilih Membran yang Tepat</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p>Memilih membran RO yang tepat menentukan performa sistem, biaya operasional, dan umur sistem secara keseluruhan. Tiga parameter utama yang dipertimbangkan engineer TSM saat merekomendasikan membran:</p>
<ul style={{"paddingLeft":"1.4rem","margin":".8rem 0"}}>
  <li style={{"marginBottom":".5rem"}}><strong>Kualitas air baku</strong> — TDS, suhu, hardness, silika, organik (TOC), besi-mangan, dan SDI menentukan tipe membran. Air laut butuh SW membrane (tahan tekanan tinggi); air sumur dengan organik tinggi butuh fouling-resistant membrane.</li>
  <li style={{"marginBottom":".5rem"}}><strong>Recovery target</strong> — Recovery tinggi (75–80%) butuh membran dengan rejection lebih tinggi untuk mengkompensasi konsentrasi feed yang meningkat. Air payau LPRO biasanya recovery 60–75%.</li>
  <li style={{"marginBottom":".5rem"}}><strong>Konsumsi energi</strong> — LPRO membrane bekerja pada tekanan 7–10 bar (vs 12–15 bar standar BW), menghemat listrik 30–40% untuk aplikasi air payau ringan.</li>
</ul>
<p>Untuk perbandingan dua membran tier-1: <strong>Dow Filmtec</strong> umumnya unggul dalam stabilitas jangka panjang dan ketahanan klorin sesaat (akibat upset chlorination), sementara <strong>Toray</strong> sering lebih baik untuk aplikasi salinitas tinggi dengan rejection lebih tinggi pada konsumsi energi sama. Tim TSM dapat memberikan rekomendasi spesifik berdasarkan analisis air baku Anda.</p>
</div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Spesifikasi Teknis</h2>
        <table className="w-full border-collapse my-[1.5rem] text-[0.9rem] ">
          <tbody><tr><td>Ukuran Standar</td><td>2521, 4040, 4021, 8040</td></tr>
          <tr><td>Merek</td><td>Dow Filmtec, Toray, Hydranautics, Koch</td></tr>
          <tr><td>Tipe</td><td>BW (Brackish Water), SW (Sea Water), LPRO</td></tr>
          <tr><td>Rejection</td><td>99 – 99,7% (tergantung tipe)</td></tr>
          <tr><td>Tekanan Maks</td><td>41 – 82 bar</td></tr>
          <tr><td>Garansi Produk</td><td>Sesuai garansi produsen</td></tr>
        </tbody></table>
        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Fitur Utama</h2>
        <ul className="flex flex-col text-[0.9rem] text-text ">
          <li>Stok tersedia untuk ukuran 2521, 4040, dan 8040</li>
          <li>Membran BW, LPRO, ULPRO, SW, dan NF</li>
          <li>Merek Dow Filmtec (BW30, SW30, XLE, NF90)</li>
          <li>Merek Toray (TM series, TMG, TMH)</li>
          <li>Merek Hydranautics (SWC, ESPA, LFC)</li>
          <li>Konsultasi pemilihan membran oleh engineer kami</li>
          <li>Jaminan keaslian produk (bukan palsu)</li>
          <li>Pengiriman ke seluruh Indonesia</li>
        </ul>
        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt-sm">Aplikasi</h2>
        <div className="flex flex-wrap gap-2 mt-[0.8rem] ">
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Penggantian membran sistem RO eksisting</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Upgrade performa sistem lama</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Proyek instalasi baru</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Stok spare part preventive maintenance</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Riset dan pengembangan sistem</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Laboratorium pengujian membran</span>
        </div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Keunggulan Beli Membran dari TSM</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p>Banyak supplier menjual membran, tapi tidak semua memberikan dukungan teknis dan jaminan keaslian:</p>
<ul style={{"paddingLeft":"1.4rem","margin":".8rem 0"}}>
  <li style={{"marginBottom":".55rem"}}><strong>Distributor resmi, bukan reseller</strong> — TSM menjalin hubungan langsung dengan principal Dow, Toray, Hydranautics. Setiap membran disertai sertifikat keaslian dan garansi penuh produsen.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Stok ready di Bekasi</strong> — Untuk ukuran umum (4040, 8040), pengiriman 1–3 hari kerja ke Jabodetabek, 3–7 hari ke luar Jawa.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Konsultasi pemilihan gratis</strong> — Tim engineer TSM membantu memilih membran tepat berdasarkan analisis air baku dan kondisi sistem existing — sebelum Anda membeli.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Layanan instalasi &amp; training</strong> — Untuk klien yang tidak memiliki tim teknis berpengalaman, TSM dapat melakukan re-membrane on-site dan memberikan training operator.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Disposal membran lama (opsional)</strong> — TSM membantu pengelolaan membran bekas sesuai regulasi limbah B3 — penting untuk industri yang membutuhkan compliance lingkungan ketat.</li>
</ul>
</div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Aplikasi Tipikal Membran TSM</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p><strong>Re-membrane SWRO untuk Wintermar Offshore</strong> — TSM memasok membran SW30HRLE-440i Dow Filmtec untuk mengganti membran lama yang mengalami penurunan rejection di kapal offshore. Setelah re-membrane, rejection garam kembali ke 99,4% dan TDS produk turun ke 350 ppm dari sebelumnya 800 ppm.</p>
<p><strong>Suplai Membran BWRO untuk PT Sosro</strong> — TSM secara berkala menyuplai membran BW30-400 untuk perawatan rutin sistem RO di pabrik Sosro. Sistem ini sudah dipasang TSM lebih dari satu dekade, dengan kontrak suplai membran dan kimia jangka panjang sebagai bagian dari kemitraan.</p>
</div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Pertanyaan yang Sering Ditanyakan</h2>
<div className="" style={{"fontSize":".94rem","lineHeight":"1.75","color":"var(--text)"}}>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah membran TSM 100% asli?</h3>
<p>Ya. TSM adalah distributor resmi yang membeli langsung dari principal/agen sah. Setiap membran disertai serial number yang dapat diverifikasi di portal produsen, plus sertifikat dan garansi penuh.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Bisakah saya beli 1–2 elemen saja, atau hanya pembelian besar?</h3>
<p>TSM melayani pembelian retail mulai dari 1 elemen hingga ratusan elemen untuk proyek besar. Untuk pembelian rutin (perawatan sistem), TSM menawarkan kontrak suplai dengan harga lebih kompetitif.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa lama umur membran RO yang seharusnya?</h3>
<p>Umur membran tergantung pre-treatment dan operating condition: 5–7 tahun untuk BWRO dengan pre-treatment baik; 5–7 tahun untuk SWRO; bisa lebih singkat (2–3 tahun) jika fouling/scaling tidak dikontrol. Membran TSM datang dengan garansi 1–3 tahun tergantung tipe.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah TSM bisa kirim ke kepulauan terpencil?</h3>
<p>Ya. TSM memiliki pengalaman pengiriman membran ke Maluku, NTT, Papua, Kalimantan, dan kepulauan lain via kargo udara dan kapal feeder. Packing tetap dijaga untuk mencegah membran kering atau terkontaminasi.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah bisa konsultasi sebelum beli?</h3>
<p>Sangat dianjurkan. Banyak klien membeli membran salah karena tidak tahu kondisi air baku-nya. Kirim hasil analisis air baku Anda ke TSM, dan kami berikan rekomendasi tipe membran spesifik gratis sebelum pembelian.</p>
<p style={{"marginTop":"1.2rem"}}>Membilan membran yang tepat dan menjaganya dengan benar adalah investasi terbaik untuk sistem RO Anda. Konsultasikan kebutuhan re-membrane atau pembelian baru dengan tim TSM untuk mendapatkan harga distributor dan rekomendasi yang sesuai dengan air baku Anda.</p>
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
            <li><Link to="/produk/desalinasi"><Waves className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> SWRO Desalinasi Air Laut</Link></li>
            <li><Link to="/artikel/5-kesalahan-perawatan-ro">⚠️ 5 Kesalahan Umum dalam Perawatan RO</Link></li>
            <li><Link to="/produk/kimia">🧪 Kimia Water Treatment</Link></li>
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

export default ProdukMembran;
