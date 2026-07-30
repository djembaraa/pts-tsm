import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Microscope } from 'lucide-react';
import Button from '../../components/ui/Button';
import Accordion from '../../components/ui/Accordion';

const FaqPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.faq-layout{display:grid;grid-template-columns:1fr 280px;gap:3rem;align-items:start}
.faq-sticky{position:sticky;top:88px}
.faq-cat{margin-bottom:3rem}
.faq-cat-title{font-family:'Barlow Condensed',sans-serif;font-size:1.3rem;font-weight:900;color:var(--navy);margin-bottom:1.2rem;padding-bottom:.6rem;border-bottom:2px solid var(--border);display:flex;align-items:center;gap:.6rem}
.faq-item{border:1px solid var(--border);border-radius:10px;margin-bottom:.8rem;overflow:hidden;transition:var(--t)}
.faq-item.open{border-color:var(--blue);box-shadow:0 2px 12px rgba(13,95,168,.1)}
.faq-q{padding:1.1rem 1.3rem;cursor:pointer;display:flex;justify-content:space-between;align-items:flex-start;gap:1rem;background:var(--white);transition:var(--t)}
.faq-item.open .faq-q{background:var(--ice)}
.faq-q span{font-size:.93rem;font-weight:600;color:var(--text);line-height:1.4}
.faq-item.open .faq-q span{color:var(--blue)}
.faq-icon{width:22px;height:22px;border-radius:50%;background:var(--ice);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:.75rem;flex-shrink:0;transition:var(--t);margin-top:.1rem}
.faq-item.open .faq-icon{background:var(--blue);color:#fff;border-color:var(--blue);transform:rotate(45deg)}
.faq-a{display:none;padding:0 1.3rem 1.2rem;font-size:.88rem;color:var(--muted);line-height:1.78;background:var(--white)}
.faq-item.open .faq-a{display:block}
.cat-nav-list li{margin-bottom:.4rem}
.cat-nav-list a{font-size:.86rem;font-weight:600;color:var(--text);display:flex;align-items:center;gap:.5rem;padding:.38rem .6rem;border-radius:6px;transition:var(--t)}
.cat-nav-list a:hover{background:var(--ice);color:var(--blue)}
.cat-nav-list a.active{background:var(--ice);color:var(--blue)}

` }} />
<div className="page-hero bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="container max-w-[1240px] mx-auto px-6">
    <div className="breadcrumb text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › FAQ</div>
    <h1 className="font-condensed text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold leading-[1.1] mb-[0.65rem]">Pertanyaan yang Sering Ditanyakan</h1>
    <p className="text-[0.9rem] opacity-80 max-w-[540px] leading-[1.72]">Temukan jawaban atas pertanyaan umum seputar teknologi RO, desalinasi, perawatan sistem, dan layanan PT Tirta Sumber Makmur.</p>
  </div>
</div>
<section className="section py-16">
  <div className="container max-w-[1240px] mx-auto px-6">
    <div className="faq-layout">
      <div>

        {/*  UMUM  */}
        <div className="faq-cat" id="umum">
          <div className="faq-cat-title">❓ Pertanyaan Umum</div>
          <Accordion question="Apa itu Reverse Osmosis (RO) dan bagaimana cara kerjanya?" answer={<>Reverse Osmosis (RO) adalah teknologi penyaringan air menggunakan tekanan tinggi untuk memaksa air melewati membran semi-permeabel berukuran sangat kecil (0,0001 mikron). Membran ini menolak kontaminan seperti garam, bakteri, virus, logam berat, dan senyawa organik — menghasilkan air yang sangat bersih. Efisiensi penyaringan RO bisa mencapai 95–99,5% untuk Total Dissolved Solids (TDS).</>} />
          <Accordion question="Berapa lama proses konsultasi hingga sistem RO terpasang?" answer={<>Waktu dari konsultasi awal hingga instalasi bervariasi tergantung kompleksitas sistem. Untuk sistem RO komersial kecil (1–5 m³/hari), biasanya 2–4 minggu. Sistem industri menengah membutuhkan 1–3 bulan, sementara proyek EPC besar bisa memakan waktu 3–12 bulan. TSM selalu memberikan timeline yang realistis sejak awal.</>} />
          <Accordion question="Apakah TSM melayani seluruh wilayah Indonesia?" answer={<>Ya, PT Tirta Sumber Makmur melayani proyek di seluruh Indonesia, dari Aceh hingga Papua. Untuk area Jabodetabek kami dapat merespons lebih cepat, namun untuk proyek di luar Jawa kami tetap menyediakan tim teknis yang berpengalaman dengan koordinasi penuh.</>} />
          <Accordion question="Apakah ada garansi untuk sistem yang dipasang?" answer={<>Ya, semua sistem yang kami pasang dilengkapi garansi. Garansi workmanship (pekerjaan instalasi) berlaku 1 tahun. Garansi komponen mengikuti garansi produsen masing-masing (umumnya 1–2 tahun untuk pompa dan panel, dan garansi performa untuk membran). Detail garansi akan tercantum dalam kontrak perjanjian.</>} />
        </div>

        {/*  TEKNIS  */}
        <div className="faq-cat" id="teknis">
          <div className="faq-cat-title"><Microscope className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Teknis Sistem RO</div>
          <Accordion question="Berapa lama umur pakai membran RO?" answer={<>Dengan perawatan yang benar, membran RO berkualitas tinggi dapat bertahan 3–7 tahun. Faktor yang mempengaruhi meliputi kualitas air baku (TDS, SDI, kandungan organik), konsistensi pre-treatment, frekuensi CIP (Chemical Cleaning In-Place), dan kondisi operasi (tekanan, suhu, recovery rate). Membran yang dioperasikan tanpa pre-treatment memadai bisa rusak dalam waktu kurang dari setahun.</>} />
          <Accordion question="Seberapa banyak air yang terbuang dalam proses RO?" answer={<>Sistem RO tipikal memiliki recovery rate 50–80%, artinya 20–50% air input menjadi reject/brine. Misalnya, dari 100 liter air baku, dihasilkan 70–80 liter air bersih dan 20–30 liter reject. Recovery rate dapat dioptimalkan melalui desain sistem yang tepat. Air reject bisa dimanfaatkan untuk irigasi atau diproses lebih lanjut dalam sistem Zero Liquid Discharge (ZLD).</>} />
          <Accordion question="Apakah sistem RO aman untuk menghasilkan air minum?" answer={<>Ya, sistem RO yang dirancang dan dioperasikan dengan benar sangat aman untuk air minum. Membran RO menyaring bakteri, virus, logam berat, pestisida, dan kontaminan lainnya jauh di bawah batas aman WHO dan standar nasional. Umumnya ditambahkan post-treatment berupa re-mineralisasi (mengembalikan mineral esensial) dan sterilisasi UV untuk keamanan tambahan.</>} />
          <Accordion question="Berapa konsumsi listrik sistem RO?" answer={<>Konsumsi listrik sistem RO bervariasi tergantung tekanan operasi dan kapasitas. Untuk RO air tawar/payau: 0,3–1,5 kWh/m³. Untuk SWRO (desalinasi air laut): 2,5–4,5 kWh/m³ (dengan Energy Recovery Device modern). Sistem RO industri modern dilengkapi Variable Frequency Drive (VFD) dan Energy Recovery Device untuk meminimalkan konsumsi energi.</>} />
          <Accordion question="Apakah sistem RO bisa beroperasi dengan air sumur atau sumber air selain PDAM?" answer={<>Ya, sistem RO bisa mengolah berbagai sumber air: air sumur, air sungai, air payau, bahkan air laut. Yang penting adalah desain pre-treatment yang sesuai dengan kualitas sumber air tersebut. Misalnya, air sumur dengan kandungan besi tinggi membutuhkan unit de-ironing sebelum masuk ke sistem RO. Analisis kualitas air baku adalah langkah pertama yang wajib dilakukan.</>} />
        </div>

        {/*  PERAWATAN  */}
        <div className="faq-cat" id="perawatan">
          <div className="faq-cat-title">🔧 Perawatan &amp; Operasional</div>
          <Accordion question="Seberapa sering sistem RO perlu diservis?" answer={<>Frekuensi servis tergantung intensitas penggunaan dan kualitas air baku. Secara umum: filter sedimen dan karbon diganti setiap 1–3 bulan; inspeksi teknis dilakukan setiap 3–6 bulan; CIP membran dilakukan sesuai data performa (normalnya 6–12 bulan sekali); dan membran RO diganti setiap 3–7 tahun. Memiliki program preventive maintenance terjadwal sangat direkomendasikan.</>} />
          <Accordion question="Bagaimana cara mengetahui kalau sistem RO perlu diservis?" answer={<>Tanda-tanda sistem perlu diservis: (1) debit air produk menurun signifikan, (2) TDS/conductivity output meningkat, (3) pressure drop meningkat, (4) sistem sering alarm, (5) ada perubahan warna atau bau pada air output. Pemantauan parameter harian dan normalisasi data mingguan adalah cara terbaik untuk mendeteksi masalah lebih awal.</>} />
          <Accordion question="Apakah kami bisa melakukan perawatan sendiri atau harus memanggil teknisi TSM?" answer={<>Beberapa perawatan rutin sederhana bisa dilakukan operator yang terlatih, seperti penggantian cartridge filter pre-treatment, pembacaan dan pencatatan parameter operasi harian, dan flushing sistem saat shutdown. Namun untuk CIP membran, perbaikan komponen teknis, dan troubleshooting performa, sangat disarankan memanggil teknisi berpengalaman seperti dari TSM untuk menghindari kerusakan yang lebih parah.</>} />
        </div>

        {/*  HARGA  */}
        <div className="faq-cat" id="harga">
          <div className="faq-cat-title">💰 Investasi &amp; Biaya</div>
          <Accordion question="Berapa kisaran harga sistem RO industri?" answer={<>Harga sistem RO sangat bervariasi tergantung kapasitas, kualitas komponen, dan kompleksitas instalasi. Sebagai gambaran umum: sistem RO komersial kecil (500L–2 m³/hari) mulai Rp 30–100 juta; sistem RO industri menengah (5–20 m³/hari) Rp 100–500 juta; sistem RO industri besar (50–500 m³/hari) Rp 500 juta – 5 miliar. Hubungi kami untuk penawaran yang akurat sesuai kebutuhan spesifik Anda.</>} />
          <Accordion question="Berapa biaya operasional sistem RO per bulan?" answer={<>Biaya operasional utama mencakup: listrik (terbesar, tergantung kapasitas dan jam operasi), bahan kimia antiscalant dan biocide, penggantian filter cartridge berkala, dan biaya perawatan. Sebagai gambaran, sistem RO 10 m³/hari yang beroperasi 16 jam/hari membutuhkan biaya listrik sekitar Rp 1–3 juta/bulan. Tim TSM dapat memberikan estimasi biaya operasional yang lebih akurat.</>} />
          <Accordion question="Apakah investasi sistem RO menguntungkan?" answer={<>Dalam banyak kasus, ya. Investasi sistem RO biasanya memiliki payback period 1,5–4 tahun tergantung skenario penggunaan. Manfaatnya: mengurangi ketergantungan pada air PDAM, mengurangi biaya pembelian air tangki (untuk daerah terpencil), meningkatkan kualitas produk (industri makanan, farmasi), mengurangi biaya scaling boiler, dan meningkatkan value properti. TSM dapat membantu melakukan studi kelayakan finansial untuk kasus Anda.</>} />
        </div>

      </div>

      {/*  SIDEBAR  */}
      <aside className="faq-sticky">
        <div className="sidebar-box bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4 className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-muted mb-[0.95rem] pb-[0.48rem] border-b border-border">Navigasi FAQ</h4>
          <ul className="cat-nav-list">
            <li><Link href="#umum">❓ Pertanyaan Umum</Link></li>
            <li><Link href="#teknis"><Microscope className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Teknis Sistem RO</Link></li>
            <li><Link href="#perawatan">🔧 Perawatan &amp; Operasional</Link></li>
            <li><Link href="#harga">💰 Investasi &amp; Biaya</Link></li>
          </ul>
        </div>
        <div className="sidebar-box bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem]" style={{"background":"linear-gradient(145deg,var(--navy),var(--blue))","border":"none"}}>
          <h4 style={{"color":"rgba(255,255,255,.45)","borderColor":"rgba(255,255,255,.15)"}} className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-muted mb-[0.95rem] pb-[0.48rem] border-b border-border">Pertanyaan Lain?</h4>
          <p style={{"fontSize":".86rem","opacity":".84","color":"#fff","lineHeight":"1.65","marginBottom":"1rem"}}>Tidak menemukan jawaban yang Anda cari? Hubungi tim ahli kami langsung.</p>
          <Button variant="white" to="/kontak" >💬 Hubungi Kami</Button>
        </div>
        <div className="sidebar-box bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4 className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-muted mb-[0.95rem] pb-[0.48rem] border-b border-border">Artikel Terkait</h4>
          <ul style={{"display":"flex","flexDirection":"column","gap":".65rem"}}>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/ro-prinsip-kerja">→ Cara Kerja Reverse Osmosis</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/5-kesalahan-perawatan-ro">→ 5 Kesalahan Perawatan RO</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/desalinasi-solusi-pulau">→ Desalinasi Air Laut</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>
<div className="cta-band bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="container max-w-[1240px] mx-auto px-6">
    <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold leading-[1.15] mb-[0.65rem]">Masih Ada Pertanyaan?</h2>
    <p className="text-[0.88rem] opacity-90 leading-[1.75] max-w-[600px] mx-auto mb-8">Tim ahli kami siap menjawab pertanyaan spesifik Anda tentang teknologi water treatment.</p>
    <div className="cta-actions flex gap-4 justify-center flex-wrap"><Button variant="white" to="/kontak" >📞 Hubungi Kami</Button><Button variant="outline-white" to="/artikel" >📚 Baca Artikel Teknis</Button></div>
  </div>
</div>

    </>
  );
};

export default FaqPage;
