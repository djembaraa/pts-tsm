import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, Factory, Calculator, Droplet } from 'lucide-react';


const ProdukWaterFilter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.prod-hero{height:300px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:8rem;margin-bottom:2rem;background:linear-gradient(135deg,#0a3d2e,#0d7a5f)}
.spec-table{width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:.9rem}
.spec-table tr:nth-child(odd) td{background:var(--gray)}
.spec-table td{padding:.7rem 1rem;border-bottom:1px solid var(--border)}
.spec-table td:first-child{font-weight:600;color:var(--navy);width:45%}
.filter-type-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.2rem 0}
.filter-card{background:var(--gray);border:1px solid var(--border);border-radius:10px;padding:1.1rem 1.25rem}
.filter-card h4{font-size:.92rem;font-weight:700;color:var(--navy);margin-bottom:.38rem}
.filter-card p{font-size:.82rem;color:var(--muted);line-height:1.6}
@media(max-width:640px){.filter-type-grid{grid-template-columns:1fr}}

` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/produk">Produk &amp; Solusi</Link> › Water Filter</div>
    <h1>Water Filter Industri &amp; Komersial</h1>
    <p>Sistem filtrasi air komprehensif meliputi sand filter, multimedia filter, carbon filter, bag filter, dan cartridge filter — pondasi pre-treatment RO yang andal sekaligus solusi mandiri pengolahan air baku untuk industri, gedung, dan fasilitas komersial di seluruh Indonesia.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[3rem] items-start">
      <div>
        <div className="h-[300px] rounded-[14px] flex items-center justify-center text-[8rem] mb-[2rem] text-white ">🔵</div>

        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p><strong>Water filter</strong> adalah komponen pertama dan terpenting dalam setiap sistem pengolahan air — baik sebagai pre-treatment sistem Reverse Osmosis maupun sebagai solusi mandiri penyediaan air bersih. Tanpa filtrasi yang tepat, membran RO akan cepat rusak, UV sterilizer kehilangan efektivitas, dan kualitas air akhir tidak akan konsisten. PT Tirta Sumber Makmur menyediakan rangkaian lengkap water filter industri dan komersial — dari sand filter sederhana hingga multimedia filter otomatis berkapasitas 200 m³/jam — yang dirancang khusus sesuai karakteristik air baku dan kebutuhan proses di Indonesia.</p>
        <p>Setiap sistem filter TSM dirancang dengan mempertimbangkan kualitas air baku lokal yang sering kali menantang: air sungai dengan turbiditas tinggi di musim hujan, air sumur dengan kandungan besi-mangan, dan air PDAM dengan sisa klorin yang bervariasi. Dengan pengalaman lebih dari 24 tahun dan ratusan instalasi dari Sabang sampai Merauke, kami memastikan konfigurasi filter yang tepat untuk setiap kondisi.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Jenis Water Filter yang Kami Sediakan</h2>
        <div className="filter-type-grid ">
          <div className="filter-card">
            <h4><Droplet className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Sand Filter (Pasir Kuarsa)</h4>
            <p>Filter media pasir kuarsa tunggal untuk menyaring partikel tersuspensi dan kekeruhan. Cocok untuk air baku dengan turbiditas rendah hingga sedang. Dilengkapi sistem backwash otomatis.</p>
          </div>
          <div className="filter-card">
            <h4>🔷 Multimedia Filter (MMF)</h4>
            <p>Filter 3–4 lapisan media (antrasit, pasir, garnet) dengan efisiensi penyaringan lebih tinggi. Ideal sebagai pre-treatment RO dan mampu menangani air baku dengan turbiditas lebih tinggi.</p>
          </div>
          <div className="filter-card">
            <h4>⚫ Carbon Filter (GAC/BAC)</h4>
            <p>Filter karbon aktif granular untuk menyerap klorin, bau, rasa, senyawa organik (THM, VOC), dan warna. Wajib sebelum membran RO untuk melindungi dari degradasi oksidatif.</p>
          </div>
          <div className="filter-card">
            <h4>🟤 Iron Removal Filter</h4>
            <p>Filter khusus untuk menghilangkan besi (Fe) dan mangan (Mn) dari air sumur menggunakan media greensand atau birm, dilengkapi sistem aerasi atau dosing oksidator terintegrasi.</p>
          </div>
          <div className="filter-card">
            <h4>🟡 Bag Filter</h4>
            <p>Filter kantung untuk penyaringan partikel kasar 1–500 mikron. Cocok sebagai pre-filter sebelum cartridge atau untuk aplikasi industri dengan padatan besar (coolant, proses kimia).</p>
          </div>
          <div className="filter-card">
            <h4>🔴 Cartridge Filter</h4>
            <p>Filter kartrid presisi 0,5–50 mikron sebagai tahap penyaringan akhir sebelum membran RO. Tersedia dalam berbagai material: PP, string wound, pleated, dan depth filter.</p>
          </div>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Spesifikasi Teknis</h2>
        <table className="w-full border-collapse my-[1.5rem] text-[0.9rem] ">
          <tbody><tr><td>Kapasitas Tersedia</td><td>0,5 – 200 m³/jam</td></tr>
          <tr><td>Ukuran Vessel</td><td>Ø10" – Ø84" (FRP atau SS-316L)</td></tr>
          <tr><td>Media Filtrasi</td><td>Pasir kuarsa, antrasit, garnet, GAC, greensand</td></tr>
          <tr><td>Turbiditas Output MMF</td><td>&lt; 1 NTU</td></tr>
          <tr><td>Removal Klorin (GAC)</td><td>&gt; 99%</td></tr>
          <tr><td>Sistem Backwash</td><td>Manual / Otomatis (timer / DP sensor)</td></tr>
          <tr><td>Koneksi Pipa</td><td>1" – 10" (BSP / Flange)</td></tr>
          <tr><td>Tekanan Operasi Maks.</td><td>6 – 10 bar (sesuai vessel)</td></tr>
        </tbody></table>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Fitur Utama</h2>
        <ul className="flex flex-col text-[0.9rem] text-text ">
          <li>Vessel FRP berkualitas tinggi atau SS-316L untuk aplikasi food-grade</li>
          <li>Multiport valve atau butterfly valve butterfly automated untuk kemudahan backwash</li>
          <li>Sistem backwash otomatis berbasis timer atau differential pressure sensor</li>
          <li>Media filter grade industri tersertifikasi NSF/ANSI 61</li>
          <li>Desain skid-mounted siap pasang, menghemat waktu instalasi</li>
          <li>Konfigurasi duplex (lead-lag) untuk operasi tanpa henti selama backwash</li>
          <li>Flow control valve untuk menjaga laju filtrasi konstan</li>
          <li>Pressure gauge inlet-outlet untuk monitoring differential pressure</li>
        </ul>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt-sm">Aplikasi</h2>
        <div className="flex flex-wrap gap-2 mt-[0.8rem] ">
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Pre-treatment sistem RO</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Pabrik makanan dan minuman</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Industri farmasi dan kosmetik</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Hotel dan resort</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Rumah sakit dan klinik</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Gedung perkantoran dan apartemen</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Sistem pendingin cooling tower</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Air sumur dengan besi-mangan</span>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Mengapa Pre-Treatment Filter Sangat Penting untuk RO</h2>
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p>Salah satu penyebab terbesar kegagalan sistem RO di Indonesia adalah pre-treatment yang tidak memadai. Membran RO adalah komponen paling mahal dalam sistem — harganya bisa mencapai puluhan hingga ratusan juta rupiah untuk sistem besar — dan sangat sensitif terhadap kekeruhan, sisa klorin, dan partikel kasar yang seharusnya ditangkap di tahap filtrasi hulu.</p>
        <ul style={{"paddingLeft":"1.4rem","margin":".8rem 0"}}>
          <li style={{"marginBottom":".55rem"}}><strong>Kekeruhan (turbiditas &gt; 1 NTU)</strong> akan menyebabkan fouling cepat pada membran RO, meningkatkan differential pressure, dan mempersingkat interval CIP dari 6 bulan menjadi hanya beberapa minggu.</li>
          <li style={{"marginBottom":".55rem"}}><strong>Sisa klorin</strong> dari PDAM akan mengoksidasi dan merusak membran RO berbasis polyamide secara permanen dalam hitungan bulan. Carbon filter GAC wajib dipasang sebelum membran.</li>
          <li style={{"marginBottom":".55rem"}}><strong>Besi dan mangan</strong> dari air sumur akan mengendap di membran, menyebabkan iron fouling yang sulit dibersihkan bahkan dengan CIP kimia.</li>
          <li style={{"marginBottom":".55rem"}}><strong>Silt Density Index (SDI)</strong> air umpan RO harus di bawah 5 — lebih baik di bawah 3 — untuk memastikan umur membran optimal. Multimedia filter yang dirancang tepat akan mencapai SDI ini secara konsisten.</li>
        </ul>
        <p>TSM selalu mendesain pre-treatment filter sebagai satu kesatuan sistem dengan RO — bukan sebagai tambahan afterthought — sehingga sistem berjalan optimal dan biaya total kepemilikan (TCO) menjadi serendah mungkin.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Studi Kasus Aplikasi</h2>
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p><strong>Pabrik Minuman di Bekasi</strong> — TSM merancang pre-treatment system untuk RO 50 m³/jam yang terdiri dari: dosing koagulan PAC otomatis → clarifier → multimedia filter duplex → carbon filter → cartridge 5 µm → RO. Air baku dari PDAM dengan turbiditas musiman hingga 30 NTU berhasil diturunkan menjadi &lt; 0,1 NTU secara konsisten, SDI &lt; 2. Membran RO tidak ada penggantian sama sekali dalam 4 tahun operasional.</p>
        <p><strong>Hotel Bintang 5 di Bali</strong> — Sistem multimedia filter 30 m³/jam untuk mengolah air sumur yang mengandung besi 1,2 mg/L dan mangan 0,4 mg/L. Konfigurasi aerasi paksa → iron removal filter dengan media greensand → carbon filter → softener → UV sterilizer menghasilkan air jernih bebas bau besi yang memenuhi standar air minum WHO. Komplain tamu tentang air noda-kuning di linen turun ke nol setelah instalasi.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Pertanyaan yang Sering Ditanyakan</h2>
        <div className="" style={{"fontSize":".94rem","lineHeight":"1.75","color":"var(--text)"}}>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apa perbedaan sand filter, multimedia filter, dan carbon filter?</h3>
        <p>Sand filter menggunakan lapisan pasir kuarsa tunggal untuk menyaring partikel dan kekeruhan. Multimedia filter menggunakan 3–4 lapisan media berbeda (antrasit, pasir, garnet) yang lebih efisien dan mampu menangani turbiditas lebih tinggi sebelum backwash. Carbon filter menggunakan karbon aktif granular (GAC) untuk menyerap klorin, bau, rasa, dan senyawa organik. Sistem pre-treatment RO yang baik biasanya menggunakan ketiganya secara seri.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Seberapa sering sand filter atau multimedia filter perlu backwash?</h3>
        <p>Untuk air PDAM dengan turbiditas 1–5 NTU, backwash biasanya dilakukan setiap 24–72 jam. Untuk air sumur atau sungai dengan turbiditas tinggi, bisa perlu backwash setiap 8–12 jam. Sistem otomatis TSM menggunakan timer atau differential pressure sensor untuk memicu backwash secara cerdas — menghemat air backwash hingga 40% dibanding timer kaku.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah water filter bisa menghilangkan besi dan mangan dari air sumur?</h3>
        <p>Sand filter biasa tidak efektif untuk besi/mangan terlarut. Dibutuhkan oksidasi terlebih dahulu (aerasi, dosing klorin/kalium permanganat, atau filter mangan greensand) agar besi/mangan mengendap menjadi partikel padat, baru dapat ditangkap oleh filter. TSM menyediakan sistem iron removal filter terintegrasi untuk air sumur dengan kadar besi &gt;0,3 mg/L dan mangan &gt;0,1 mg/L.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa kapasitas water filter yang cocok untuk pabrik saya?</h3>
        <p>Sizing filter ditentukan oleh laju alir yang dibutuhkan (m³/jam) dan kualitas air baku. Filter harus mampu mengalirkan air sesuai kebutuhan puncak ditambah margin 20–30%. Untuk pre-treatment RO, kapasitas filter minimal sama dengan kapasitas feed RO. TSM melayani water filter dari kapasitas 0,5 m³/jam hingga 200 m³/jam.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa lama media filter perlu diganti?</h3>
        <p>Pasir kuarsa dan antrasit umumnya bertahan 5–10 tahun jika backwash dilakukan dengan benar. Karbon aktif granular (GAC) perlu penggantian setiap 1–3 tahun tergantung kadar klorin air baku dan volume air yang diproses — dievaluasi dengan uji terobosan klorin atau TOC. TSM menyediakan media pengganti dan layanan penggantian di tempat.</p>

        <p style={{"marginTop":"1.2rem"}}>Pemilihan jenis dan konfigurasi water filter yang tepat adalah investasi jangka panjang yang melindungi seluruh sistem pengolahan air Anda. Konsultasikan kebutuhan Anda dengan engineer TSM — kami akan menganalisis air baku dan merekomendasikan sistem filter yang paling efisien dan ekonomis.</p>
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
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/uf">→ Ultrafiltrasi (UF)</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/uv">→ UV Sterilizer</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/kimia">→ Kimia Water Treatment</Link></li>
            <li><Link style={{"fontSize":".84rem","fontWeight":"600","color":"var(--blue)","display":"block"}} to="/produk">→ Semua Produk</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem]" style={{"background":"linear-gradient(145deg,var(--navy),var(--blue))","border":"none"}}>
          <h4 style={{"color":"rgba(255,255,255,.45)","borderColor":"rgba(255,255,255,.15)"}}>Konsultasi Teknis</h4>
          <p style={{"fontSize":".86rem","opacity":".84","color":"#fff","lineHeight":"1.65","marginBottom":"1rem"}}>Hubungi engineer kami untuk audit air baku gratis dan rekomendasi sistem filter yang optimal.</p>
          <Link href="tel:+62818719119" className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center","fontSize":".82rem"}}>📞 021-88871689</Link>
        </div>
      </aside>
    </div>
  </div>

  <div className="info-box" style={{"marginTop":"2rem"}}>
    <strong>📚 Baca Juga</strong>
    <ul style={{"marginTop":".75rem","paddingLeft":"1.2rem"}}>
      <li><Link to="/artikel/ro-prinsip-kerja">📘 Mengenal Teknologi Reverse Osmosis: Prinsip Kerja &amp; Pre-Treatment</Link></li>
      <li><Link to="/artikel/5-kesalahan-perawatan-ro">⚠️ 5 Kesalahan Perawatan RO yang Merusak Membran</Link></li>
      <li><Link to="/produk/ro-industri"><Factory className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Sistem RO Industri (Water Filter sebagai Pre-Treatment)</Link></li>
      <li><Link to="/produk/uf">🔩 Ultrafiltrasi UF – Alternatif Modern Multimedia Filter</Link></li>
      <li><Link to="/kalkulator"><Calculator className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Hitung Kebutuhan Sistem Filter Anda</Link></li>
    </ul>
  </div>

</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Pastikan Pre-Treatment Anda Melindungi Membran RO</h2>
    <p>Tim engineer TSM siap menganalisis air baku Anda dan merancang sistem filter yang tepat — agar membran RO tahan lama dan biaya operasional minimal.</p>
    <div className="flex gap-4 justify-center flex-wrap"><Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak"><ClipboardList className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Minta Penawaran Water Filter</Link><Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/layanan/audit">🔍 Audit Sistem Anda</Link></div>
  </div>
</div>

    </>
  );
};

export default ProdukWaterFilter;
