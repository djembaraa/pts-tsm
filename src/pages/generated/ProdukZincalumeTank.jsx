import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Calculator, Settings, Building } from 'lucide-react';
import Button from '../../components/ui/Button';

const ProdukZincalumeTank = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.prod-hero{height:300px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:8rem;margin-bottom:2rem;background:linear-gradient(135deg,#1a2e1a,#2d6a2d)}
.spec-table{width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:.9rem}
.spec-table tr:nth-child(odd) td{background:var(--gray)}
.spec-table td{padding:.7rem 1rem;border-bottom:1px solid var(--border)}
.spec-table td:first-child{font-weight:600;color:var(--navy);width:45%}
.compare-table{width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:.88rem}
.compare-table th{background:var(--navy);color:#fff;padding:.65rem 1rem;text-align:left;font-weight:600}
.compare-table td{padding:.62rem 1rem;border-bottom:1px solid var(--border)}
.compare-table tr:nth-child(even) td{background:var(--gray)}
.compare-table td:first-child{font-weight:600;color:var(--navy)}
.badge-good{color:#1a7a1a;font-weight:700}
.badge-mid{color:#8a6200;font-weight:700}
.badge-bad{color:#a00;font-weight:700}

` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/produk">Produk &amp; Solusi</Link> › Zincalume Water Tank</div>
    <h1>Zincalume Water Tank</h1>
    <p>Tangki air panel baja berlapis Zincalume — solusi penyimpanan air bersih kapasitas besar yang tahan karat, higienis, dan cepat dipasang. Tersedia kapasitas 5.000 hingga 5.000.000 liter untuk industri, gedung bertingkat, kawasan perumahan, dan fasilitas komunitas di seluruh Indonesia.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[3rem] items-start">
      <div>
        <div className="h-[300px] rounded-[14px] flex items-center justify-center text-[8rem] mb-[2rem] text-white "><Building className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div>

        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p><strong>Zincalume Water Tank</strong> adalah tangki penyimpanan air berbasis panel baja yang dilapisi paduan logam Zincalume — komposisi 55% aluminium, 43,5% zinc, dan 1,5% silikon yang memberikan ketahanan korosi 2–4 kali lebih tinggi dibanding baja galvanis konvensional. Sistem tangki panel ini dirakit langsung di lokasi pemasangan dari panel-panel terstandarisasi yang dibaut satu sama lain, sehingga mampu menghasilkan kapasitas penyimpanan dari 5.000 hingga 5.000.000 liter tanpa batasan lokasi — cocok untuk area yang tidak dapat dijangkau tangki cor atau tangki prefabrikasi ukuran besar.</p>
        <p>PT Tirta Sumber Makmur menyuplai dan menginstalasi Zincalume Water Tank lengkap dengan <strong>liner EPDM atau PE food-grade</strong> di bagian dalam, fondasi beton, sistem perpipaan, tangga akses, dan manhole inspeksi. Sebagai bagian dari solusi water treatment terintegrasi, kami juga menghubungkan tangki Zincalume dengan sistem RO, UV sterilizer, pompa distribusi, dan panel kontrol — sehingga Anda mendapatkan sistem penyimpanan dan distribusi air yang lengkap dari satu mitra.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Perbandingan Jenis Tangki Air Kapasitas Besar</h2>
        <table className="compare-table ">
          <thead>
            <tr><th>Kriteria</th><th>Zincalume</th><th>Beton</th><th>GRP / Fiberglass</th><th>Stainless Steel</th></tr>
          </thead>
          <tbody>
            <tr><td>Kecepatan Instalasi</td><td className="badge-good">1–5 hari</td><td className="badge-bad">2–8 minggu</td><td className="badge-mid">3–7 hari</td><td className="badge-mid">3–7 hari</td></tr>
            <tr><td>Dapat Dipindah</td><td className="badge-good">✓ Ya</td><td className="badge-bad">✗ Tidak</td><td className="badge-good">✓ Ya</td><td className="badge-good">✓ Ya</td></tr>
            <tr><td>Ekspansi Kapasitas</td><td className="badge-good">✓ Tambah panel</td><td className="badge-bad">✗ Tidak</td><td className="badge-bad">✗ Tidak</td><td className="badge-bad">✗ Tidak</td></tr>
            <tr><td>Biaya per m³ (besar)</td><td className="badge-good">Paling ekonomis</td><td className="badge-mid">Sedang</td><td className="badge-mid">Sedang</td><td className="badge-bad">Paling mahal</td></tr>
            <tr><td>Umur Pakai</td><td className="badge-good">25–30 tahun</td><td className="badge-good">30–50 tahun</td><td className="badge-mid">15–25 tahun</td><td className="badge-good">25–30 tahun</td></tr>
            <tr><td>Ketahanan Korosi</td><td className="badge-good">Sangat baik</td><td className="badge-good">Baik</td><td className="badge-good">Sangat baik</td><td className="badge-good">Sangat baik</td></tr>
            <tr><td>Keamanan Air Minum</td><td className="badge-good">✓ Dengan liner</td><td className="badge-mid">Perlu coating</td><td className="badge-good">✓ Food-grade</td><td className="badge-good">✓ Food-grade</td></tr>
          </tbody>
        </table>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Spesifikasi Teknis</h2>
        <table className="w-full border-collapse my-[1.5rem] text-[0.9rem] ">
          <tbody><tr><td>Material Panel</td><td>Baja G550 lapis Zincalume AZ150 (150 g/m²)</td></tr>
          <tr><td>Komposisi Lapisan</td><td>55% Al, 43,5% Zn, 1,5% Si</td></tr>
          <tr><td>Ketebalan Panel</td><td>0,42 – 0,6 mm</td></tr>
          <tr><td>Liner Interior</td><td>EPDM food-grade atau PE liner (NSF/ANSI 61)</td></tr>
          <tr><td>Kapasitas</td><td>5.000 – 5.000.000 liter</td></tr>
          <tr><td>Diameter Tersedia</td><td>2,4 m – 22,7 m</td></tr>
          <tr><td>Tinggi Tersedia</td><td>1,0 m – 4,8 m (multi-ring)</td></tr>
          <tr><td>Standar</td><td>AS/NZS 2179.1, NSF/ANSI 61 (liner)</td></tr>
          <tr><td>Garansi Panel</td><td>20 tahun anti-karat (dari produsen)</td></tr>
        </tbody></table>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Fitur Utama</h2>
        <ul className="flex flex-col text-[0.9rem] text-text ">
          <li>Panel baja G550 dengan lapisan Zincalume AZ150 — ketahanan korosi 2–4× galvanis biasa</li>
          <li>Liner EPDM atau PE food-grade NSF/ANSI 61 — aman untuk air minum</li>
          <li>Sistem panel modular — kapasitas dapat diperluas dengan menambah ring panel</li>
          <li>Rakitan di lokasi — tidak ada batasan akses jalan sempit atau ruang terbatas</li>
          <li>Fondasi beton ringan — tidak butuh konstruksi sipil besar</li>
          <li>Aksesoris lengkap: tangga, manhole, overflow, drain, vent, level indicator</li>
          <li>Sistem perpipaan stainless steel atau HDPE terintegrasi</li>
          <li>Tersedia atap flat atau cone roof dari bahan Zincalume atau polycarbonate</li>
        </ul>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt-sm">Aplikasi</h2>
        <div className="flex flex-wrap gap-2 mt-[0.8rem] ">
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Cadangan air industri dan pabrik</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Gedung bertingkat dan apartemen</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Kawasan perumahan dan cluster</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Sistem PDAM dan distribusi air komunal</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Fasilitas rumah sakit dan pendidikan</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Fire fighting water reserve</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Sistem irigasi pertanian skala besar</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Fasilitas militer dan pemerintahan</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Tambang dan area terpencil</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Penampung air hujan (rainwater harvesting)</span>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Mengapa Kapasitas Penyimpanan yang Tepat Sangat Penting</h2>
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p>Sistem pengolahan air terbaik pun tidak akan optimal jika kapasitas penyimpanannya tidak memadai. Tangki penyimpanan berfungsi sebagai <em>buffer</em> antara laju produksi sistem RO atau WTP yang konstan dengan fluktuasi kebutuhan air yang bervariasi sepanjang hari. Kapasitas penyimpanan yang cukup memungkinkan:</p>
        <ul style={{"paddingLeft":"1.4rem","margin":".8rem 0"}}>
          <li style={{"marginBottom":".55rem"}}><strong>Sistem RO beroperasi pada titik efisiensi optimal</strong> — RO berjalan kontinu pada kapasitas desain, bukan on-off mengikuti demand puncak yang merusak membran dan pompa.</li>
          <li style={{"marginBottom":".55rem"}}><strong>Cadangan saat pemadaman listrik atau maintenance</strong> — Kapasitas tangki 1–2 hari konsumsi memberikan buffer yang cukup untuk pemeliharaan rutin atau gangguan pasokan listrik.</li>
          <li style={{"marginBottom":".55rem"}}><strong>Pemenuhan kebutuhan demand puncak</strong> — Pabrik dengan shift produksi atau gedung dengan jam sibuk yang kebutuhan airnya naik drastis dapat terpenuhi dari tangki buffer.</li>
          <li style={{"marginBottom":".55rem"}}><strong>Redaman tekanan jaringan distribusi</strong> — Tangki elevated atau ground tank dengan pompa booster memastikan tekanan air konsisten di seluruh titik distribusi.</li>
        </ul>
        <p>TSM membantu menghitung kapasitas tangki yang optimal berdasarkan profil konsumsi harian, kapasitas sistem RO/WTP, dan kebutuhan cadangan operasional.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Studi Kasus Aplikasi</h2>
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p><strong>Kawasan Industri di Cikarang</strong> — TSM memasang Zincalume tank 500.000 liter (diameter 14,6 m, tinggi 3,0 m) sebagai ground reservoir untuk sistem distribusi air bersih kawasan dengan 35 tenant pabrik. Tangki dirakit dalam 3 hari kerja, dilengkapi liner EPDM food-grade, sistem level sensor otomatis, dan koneksi ke pompa booster variable speed. Proyek selesai tepat waktu tanpa mengganggu operasional kawasan.</p>
        <p><strong>RSUD Kabupaten di Kalimantan Tengah</strong> — Dua unit Zincalume tank 100.000 liter masing-masing dipasang sebagai buffer setelah sistem RO 30 m³/hari. Konfigurasi dua tangki (satu operasional, satu cadangan) memastikan pasokan air tidak pernah terputus bahkan saat salah satu tangki dalam jadwal pembersihan rutin 6 bulanan. Rumah sakit tidak pernah mengalami gangguan pasokan air sejak sistem beroperasi.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Pertanyaan yang Sering Ditanyakan</h2>
        <div className="" style={{"fontSize":".94rem","lineHeight":"1.75","color":"var(--text)"}}>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apa itu Zincalume dan mengapa lebih baik dari baja galvanis biasa?</h3>
        <p>Zincalume adalah baja yang dilapisi paduan 55% aluminium, 43,5% zinc, dan 1,5% silikon. Kombinasi ini memberikan ketahanan korosi 2–4 kali lebih baik dibanding galvanis biasa karena aluminium membentuk lapisan oksida pelindung yang sangat stabil. Panel baja Zincalume juga lebih tahan terhadap suhu tinggi dan lebih ringan — cocok untuk tangki berkapasitas besar di iklim tropis Indonesia.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah Zincalume water tank aman untuk menyimpan air minum?</h3>
        <p>Ya, aman untuk air minum dengan syarat bagian dalam tangki dilapisi food-grade liner — EPDM atau liner plastik PE food-grade. Liner ini mencegah kontak langsung antara air dengan logam Zincalume. Semua tangki Zincalume TSM untuk air minum menggunakan liner food-grade yang memenuhi standar NSF/ANSI 61 dan SNI.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa lama umur pakai Zincalume water tank?</h3>
        <p>Dengan perawatan yang benar dan liner yang terjaga kondisinya, Zincalume water tank dapat bertahan 25–30 tahun. Panel baja Zincalume memiliki garansi anti-karat dari produsen hingga 20 tahun. Liner EPDM biasanya perlu penggantian setiap 10–15 tahun dan dapat diganti tanpa membongkar seluruh tangki.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apa keunggulan Zincalume tank dibanding tangki beton atau GRP/fiberglass?</h3>
        <p>Dibanding beton: pemasangan jauh lebih cepat (hari vs minggu), dapat dipindah, dan tidak butuh pekerjaan sipil besar. Dibanding GRP: lebih kuat menahan tekanan, lebih mudah diperluas kapasitasnya dengan menambah panel, dan lebih ekonomis untuk ukuran besar. Dibanding stainless steel: harga jauh lebih terjangkau untuk kapasitas di atas 50.000 liter.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah tangki Zincalume bisa dipasang di daerah pesisir atau lingkungan korosif?</h3>
        <p>Zincalume memiliki ketahanan korosi yang baik untuk lingkungan pesisir. Namun untuk area dengan paparan kabut air laut sangat tinggi, kami merekomendasikan pelapis tambahan (coating epoxy) pada bagian luar panel, atau mempertimbangkan tangki GRP/SS-316 untuk ketahanan maksimal. Tim TSM akan melakukan survei lokasi untuk menentukan spesifikasi yang tepat.</p>

        <p style={{"marginTop":"1.2rem"}}>Dengan pengalaman memasang ratusan unit Zincalume tank dari kapasitas 5.000 hingga lebih dari satu juta liter di seluruh Indonesia, TSM siap membantu Anda menentukan ukuran, konfigurasi, dan spesifikasi tangki yang paling tepat dan ekonomis untuk kebutuhan Anda.</p>
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
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/ro-komersial">→ RO Komersial &amp; Gedung</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/pompa">→ Pompa &amp; Pressure Vessel</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/uv">→ UV Sterilizer</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/layanan/instalasi">→ Layanan Instalasi</Link></li>
            <li><Link style={{"fontSize":".84rem","fontWeight":"600","color":"var(--blue)","display":"block"}} to="/produk">→ Semua Produk</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem]" style={{"background":"linear-gradient(145deg,var(--navy),var(--blue))","border":"none"}}>
          <h4 style={{"color":"rgba(255,255,255,.45)","borderColor":"rgba(255,255,255,.15)"}}>Konsultasi Teknis</h4>
          <p style={{"fontSize":".86rem","opacity":".84","color":"#fff","lineHeight":"1.65","marginBottom":"1rem"}}>Hubungi engineer kami untuk menghitung kapasitas tangki yang optimal sesuai profil konsumsi air Anda.</p>
          <Button variant="white" to="/tel:+62818719119" >📞 021-88871689</Button>
        </div>
      </aside>
    </div>
  </div>

  <div className="info-box" style={{"marginTop":"2rem"}}>
    <strong>📚 Baca Juga</strong>
    <ul style={{"marginTop":".75rem","paddingLeft":"1.2rem"}}>
      <li><Link to="/produk/ro-industri"><Factory className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Sistem RO Industri – Pasangan Ideal Zincalume Tank</Link></li>
      <li><Link to="/layanan/desain">📐 Layanan Desain Sistem Water Treatment Terintegrasi</Link></li>
      <li><Link to="/layanan/instalasi">🔧 Layanan Instalasi &amp; Komisioning TSM</Link></li>
      <li><Link to="/produk/pompa"><Settings className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Pompa Distribusi &amp; Pressure Vessel</Link></li>
      <li><Link to="/kalkulator"><Calculator className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Kalkulator Kapasitas Tangki dan Sistem Air</Link></li>
    </ul>
  </div>

</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold leading-[1.15] mb-[0.65rem]">Butuh Tangki Penyimpanan Air Kapasitas Besar?</h2>
    <p className="text-[0.88rem] opacity-90 leading-[1.75] max-w-[600px] mx-auto mb-8">Tim engineer TSM siap menghitung kapasitas yang tepat, merancang fondasi, dan menginstalasi Zincalume tank lengkap dengan sistem perpipaan dan kontrol — dari satu mitra terpercaya.</p>
    <div className="flex gap-4 justify-center flex-wrap"><Button variant="white" to="/kontak" >📋 Minta Penawaran Tangki</Button><Button variant="outline-white" to="/layanan/desain" >📐 Konsultasi Desain Sistem</Button></div>
  </div>
</div>

    </>
  );
};

export default ProdukZincalumeTank;
