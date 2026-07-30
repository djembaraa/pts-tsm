import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory } from 'lucide-react';


const IndustriManufaktur = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.art-layout{display:grid;grid-template-columns:1fr 290px;gap:3rem;align-items:start}
.art-sticky{position:sticky;top:88px}
@media(max-width:1024px){.art-layout{grid-template-columns:1fr}.art-sticky{position:static}}
.spec-table{width:100%;border-collapse:collapse;margin:1.5rem 0}
.spec-table th,.spec-table td{padding:.75rem 1rem;border:1px solid var(--border);font-size:.88rem;text-align:left}
.spec-table th{background:var(--navy);color:#fff;font-weight:700}
.spec-table tr:nth-child(even){background:var(--gray)}

` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/industri">Industri</Link> › Manufaktur</div>
    <h1>Water Treatment untuk Industri Manufaktur</h1>
    <p>Solusi sistem RO terintegrasi untuk boiler feed water, cooling tower, dan air proses di pabrik manufaktur Anda.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>
        <div className="prose max-w-none text-text">

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Industri manufaktur adalah salah satu konsumen air terbesar di Indonesia, sekaligus sektor yang paling sensitif terhadap kualitas air. Air bukan hanya bahan baku atau utilitas — dalam banyak proses manufaktur, kualitas air secara langsung menentukan kualitas produk akhir, efisiensi peralatan, dan biaya operasional jangka panjang.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">PT Tirta Sumber Makmur, berbasis di Bekasi dan melayani kawasan industri di seluruh Indonesia, memiliki pengalaman lebih dari dua dekade menyediakan solusi <strong>sistem RO industri</strong> untuk pabrik-pabrik dari berbagai sektor: tekstil, makanan dan minuman, kimia, logam, kertas, dan lainnya.</p>

          <h2 id="tantangan-manufaktur" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Tantangan Air di Industri Manufaktur</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Setiap pabrik memiliki tantangan air yang unik, namun beberapa masalah umum yang sering kami temui dalam audit sistem water treatment di kawasan industri Bekasi, Karawang, Cikarang, dan Purwakarta meliputi:</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Boiler Feed Water: Musuh Utama adalah Scaling</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Boiler adalah jantung dari banyak proses manufaktur — menghasilkan steam untuk pemanasan, proses produksi, dan utilitas lainnya. Air keras (dengan kandungan kalsium dan magnesium tinggi) yang masuk ke boiler tanpa pengolahan yang tepat akan mengendap sebagai kerak keras (scaling) pada permukaan perpindahan panas. Dampaknya mengerikan: setiap milimeter kerak meningkatkan konsumsi bahan bakar 3–5%, risiko hot spot yang bisa menyebabkan ledakan, hingga kerusakan total tube boiler yang biayanya mencapai ratusan juta rupiah. <Link to="/produk/ro-industri">Sistem RO industri TSM</Link> menghasilkan air dengan TDS sangat rendah (biasanya &lt;50 ppm) yang ideal sebagai boiler feed water — memperpanjang umur boiler dan menghemat biaya bahan bakar secara signifikan.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Cooling Tower: Antara Efisiensi dan Biofouling</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Cooling tower untuk sistem pendingin AC sentral, proses produksi, atau kompresor adalah sistem yang kompleks secara kimia. Air make-up yang buruk kualitasnya menyebabkan: scaling pada heat exchanger (mengurangi efisiensi pendinginan), biofouling termasuk risiko Legionella (ancaman kesehatan serius), dan korosi pada komponen logam. Sistem RO sebagai pre-treatment air make-up cooling tower secara dramatis mengurangi kebutuhan bahan kimia anti-scaling dan biocide, memperpanjang interval blowdown, dan meningkatkan Cycles of Concentration (CoC) — artinya lebih sedikit air yang terbuang.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Air Proses: Kualitas Menentukan Produk</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Di industri tekstil, warna dan kualitas finishing kain sangat dipengaruhi oleh kesadahan dan kandungan besi dalam air proses. Di industri makanan dan minuman, air adalah bahan baku langsung yang mempengaruhi rasa, kejernihan, dan keamanan produk. Di industri elektronik, ultra-pure water dengan resistivitas &gt;10 MΩ·cm diperlukan untuk membersihkan komponen sensitif. Memahami persyaratan kualitas air spesifik untuk setiap proses adalah langkah pertama yang wajib dalam desain sistem <strong>water treatment untuk pabrik</strong>.</p>

          <h2 id="studi-kasus-manufaktur" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Studi Kasus: Pabrik Tekstil Karawang</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Salah satu implementasi sistem water treatment industri terbesar yang dikerjakan TSM adalah untuk sebuah pabrik tekstil besar di kawasan industri Karawang, Jawa Barat. Detail lengkap tersedia di artikel <Link to="/artikel/studi-kasus-ro-tekstil">Studi Kasus: Sistem RO 200 m³/hari di Pabrik Tekstil Karawang</Link>, namun berikut ringkasan pencapaian kunci:</p>

          <div className="info-box bg-ice border border-border rounded-[10px] p-[1.2rem_1.5rem] my-[1.75rem]">
            <strong className="block text-[0.7rem] font-bold uppercase tracking-[0.1em] text-accent mb-[0.38rem]">📊 Hasil Proyek Pabrik Tekstil Karawang</strong><br />
            ✓ Konsumsi air PDAM berkurang 70% (dari 280 m³/hari → 84 m³/hari)<br />
            ✓ Penghematan biaya air Rp 80 juta/bulan<br />
            ✓ Payback period: 20 bulan<br />
            ✓ Kualitas pewarnaan lebih konsisten, reject rate turun 8%<br />
            ✓ Sistem beroperasi dengan availability &gt;97% selama 2 tahun
          </div>

          <h2 id="solusi-tsm-manufaktur" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Solusi Water Treatment TSM untuk Manufaktur</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM menyediakan solusi terintegrasi yang mencakup seluruh siklus air di pabrik Anda:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pre-treatment:</strong> Multi-media filter, softener, iron removal, cartridge filter</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/produk/ro-industri">Sistem RO Industri</Link>:</strong> Kapasitas 1–500 m³/hari, custom sesuai kebutuhan</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Post-treatment:</strong> Remineralisasi, pH adjustment, UV sterilization, EDI untuk ultra-pure</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/produk/limbah">Pengolahan Air Limbah:</Link></strong> MBR, RO Reclaim untuk daur ulang internal</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sistem ZLD:</strong> Untuk pabrik yang menuju zero liquid discharge</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>SCADA &amp; Monitoring:</strong> Real-time monitoring konsumsi dan kualitas air seluruh pabrik</li>
          </ul>

          <h2 id="spesifikasi-manufaktur" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Spesifikasi Teknis Umum Sistem RO Industri</h2>
          <table className="w-full border-collapse my-[1.5rem] text-[0.9rem]">
            <tbody><tr><th>Parameter</th><th>Nilai Tipikal</th></tr>
            <tr><td>Kapasitas produksi</td><td>1 – 500 m³/hari (custom)</td></tr>
            <tr><td>Kualitas air baku</td><td>TDS hingga 5.000 ppm (BWRO) atau air sumur/PDAM</td></tr>
            <tr><td>Kualitas output (permeate)</td><td>TDS &lt;50 ppm, rejection rate ≥97%</td></tr>
            <tr><td>Recovery rate</td><td>60 – 80% (tergantung kualitas air baku)</td></tr>
            <tr><td>Tekanan operasi</td><td>8 – 20 bar (BWRO standar)</td></tr>
            <tr><td>Konsumsi energi</td><td>0,3 – 1,5 kWh/m³ (dengan VFD)</td></tr>
            <tr><td>Material frame</td><td>Stainless steel 304/316L atau powder-coated carbon steel</td></tr>
            <tr><td>Sistem kontrol</td><td>PLC Siemens/Allen-Bradley, HMI touchscreen, SCADA optional</td></tr>
            <tr><td>Sertifikasi</td><td>SNI, CE, UL (sesuai permintaan)</td></tr>
          </tbody></table>

          <h2 id="faq-manufaktur" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa biaya operasional sistem RO industri per m³ air yang diproduksi?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Biaya produksi air RO industri di Indonesia umumnya berkisar <strong>Rp 500–2.500 per m³</strong>, tergantung tarif listrik lokal, kualitas air baku (menentukan intensitas pre-treatment), dan biaya bahan kimia. Bandingkan dengan tarif air PDAM kawasan industri yang umumnya Rp 12.000–25.000 per m³ — penghematan yang sangat signifikan untuk pabrik dengan konsumsi ratusan m³ per hari.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa lama proses dari konsultasi hingga sistem beroperasi?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk sistem RO industri menengah (20–100 m³/hari): water audit 2–3 minggu, desain dan engineering 2–4 minggu, fabrikasi 4–8 minggu, instalasi 1–3 minggu, commissioning 1–2 minggu. Total: <strong>3–5 bulan</strong> dari kick-off hingga operasi penuh. Untuk sistem yang lebih besar atau kompleks (EPC turnkey), timeline bisa 6–12 bulan.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah TSM melayani pabrik di luar Jabodetabek?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ya. TSM melayani proyek di seluruh Indonesia, dengan tim engineering yang siap mobilisasi ke lokasi manapun. Kami memiliki pengalaman di kawasan industri Surabaya, Bandung, Semarang, Medan, dan berbagai kota di Kalimantan dan Sulawesi. Untuk area Jabodetabek, respons waktu kami lebih cepat berkat kedekatan lokasi dari Bekasi.</p>

          <div style={{"marginTop":"2rem","padding":"2rem","background":"var(--ice)","borderRadius":"12px","borderLeft":"4px solid var(--accent)"}}>
            <h3 style={{"marginBottom":".75rem","color":"var(--navy)"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Konsultasi Kebutuhan Pabrik Anda</h3>
            <p style={{"marginBottom":"1.25rem","color":"var(--muted)","fontSize":".92rem"}} className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Mulai dengan water audit gratis. Tim engineering TSM akan menganalisis kondisi air baku, pemetaan konsumsi, dan merancang solusi optimal sesuai proses dan anggaran Anda.</p>
            <Link style={{"display":"inline-block","padding":".85rem 2rem","background":"var(--blue)","color":"#fff","borderRadius":"8px","fontWeight":"700","fontSize":".96rem"}} to="/kontak"><Factory className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Mulai Water Audit Gratis →</Link>
          </div>

        </div>
      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#tantangan-manufaktur">Tantangan Air di Manufaktur</Link></li>
            <li><Link href="#studi-kasus-manufaktur">Studi Kasus Karawang</Link></li>
            <li><Link href="#solusi-tsm-manufaktur">Solusi TSM</Link></li>
            <li><Link href="#spesifikasi-manufaktur">Spesifikasi Teknis</Link></li>
            <li><Link href="#faq-manufaktur">FAQ</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Produk Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/produk/ro-industri">→ Sistem RO Industri</Link></li>
            <li><Link to="/produk/limbah">→ Pengolahan Air Limbah</Link></li>
            <li><Link to="/produk/demi">→ Demineralisasi / EDI</Link></li>
            <li><Link to="/kalkulator">→ Kalkulator Kebutuhan Air</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Artikel Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/artikel/studi-kasus-ro-tekstil">→ Studi Kasus Pabrik Tekstil</Link></li>
            <li><Link to="/artikel/zld-zero-liquid">→ Zero Liquid Discharge</Link></li>
            <li><Link to="/artikel/ro-prinsip-kerja">→ Prinsip Kerja RO</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>

    </>
  );
};

export default IndustriManufaktur;
