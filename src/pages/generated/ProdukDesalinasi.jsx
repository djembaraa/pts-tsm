import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, Wrench, Factory, Calculator } from 'lucide-react';


const ProdukDesalinasi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/produk">Produk &amp; Solusi</Link> › Desalinasi</div>
    <h1>SWRO — Desalinasi Air Laut</h1>
    <p>Sistem Sea Water Reverse Osmosis berkapasitas tinggi untuk kepulauan, resort pesisir, industri maritim, dan kawasan yang jauh dari sumber air tawar. Teknologi energy recovery modern.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[3rem] items-start">
      <div>
        <div className="h-[300px] rounded-[14px] flex items-center justify-center text-[8rem] mb-[2rem] text-white " style={{"background":"none","padding":"0","height":"auto","display":"block"}}><picture>
  <source srcSet="images/foto-mesin-swro.webp" type="image/webp" />
  <img src="images/foto-mesin-swro.jpg" alt="Sistem SWRO desalinasi air laut TSM untuk pulau dan resort di Indonesia" style={{"width":"100%","height":"auto","maxHeight":"480px","objectFit":"cover","borderRadius":"14px","display":"block"}} />
</picture></div>
        
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p><strong>Desalinasi air laut</strong> dengan teknologi Sea Water Reverse Osmosis (SWRO) adalah solusi paling efisien untuk menghasilkan air tawar dari sumber air laut yang tak terbatas. PT Tirta Sumber Makmur telah membangun lebih dari 50 sistem SWRO untuk kepulauan terpencil, resort pesisir, kapal perang KRI, platform offshore Wintermar, dan pemerintah daerah di seluruh Indonesia — dari Pulau Seribu hingga Maluku, dari Batam hingga Papua.</p>
<p>Sistem SWRO TSM mampu mengolah air laut dengan salinitas hingga 45.000 ppm menjadi air minum dengan TDS di bawah 500 ppm yang memenuhi Permenkes RI No. 492/2010. Kapasitas yang kami layani mulai dari <strong>5 m³/hari</strong> untuk pulau kecil atau kapal hingga <strong>1.000+ m³/hari</strong> untuk kawasan pesisir industri. Setiap sistem dilengkapi Energy Recovery Device (ERD) yang menurunkan konsumsi energi hingga 60% — membuat desalinasi modern jauh lebih ekonomis dibanding generasi sebelumnya.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Cara Kerja SWRO</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p>Air laut mengandung sekitar 35.000 ppm garam terlarut — jauh di atas batas air minum 1.000 ppm. SWRO bekerja dengan mendorong air laut melewati membran semipermeabel pada tekanan tinggi 55–80 bar. Membran ini hanya melewatkan molekul air, sementara ion garam, mikroorganisme, dan kontaminan tertahan dan dibuang sebagai brine.</p>
<p>Sistem SWRO modern TSM menggunakan tiga tahap utama: <strong>(1) pre-treatment</strong> dengan DAF (Dissolved Air Flotation) atau Ultrafiltrasi untuk menghilangkan ganggang dan koloid, <strong>(2) RO membrane stage</strong> dengan high-pressure pump dan ERD untuk efisiensi energi maksimal, dan <strong>(3) post-treatment</strong> berupa remineralisasi (kalsium dan magnesium) dan disinfeksi sebelum disimpan di tangki produk. Tanpa remineralisasi, air RO terasa hambar dan korosif terhadap pipa logam.</p>
</div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Spesifikasi Teknis</h2>
        <table className="w-full border-collapse my-[1.5rem] text-[0.9rem] ">
          <tbody><tr><td>Kapasitas</td><td>5 – 1000+ m³/hari</td></tr>
          <tr><td>Salinitas Feed</td><td>Hingga 45.000 ppm</td></tr>
          <tr><td>TDS Produk</td><td>&lt; 500 ppm (layak minum)</td></tr>
          <tr><td>Tekanan Operasi</td><td>55 – 80 bar</td></tr>
          <tr><td>Konsumsi Energi</td><td>2,5 – 4,5 kWh/m³ (dengan ERD)</td></tr>
          <tr><td>Recovery Rate</td><td>35 – 50%</td></tr>
        </tbody></table>
        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Fitur Utama</h2>
        <ul className="flex flex-col text-[0.9rem] text-text ">
          <li>Energy Recovery Device (ERD) efisiensi &gt;95%</li>
          <li>Membran SWRO khusus salinitas tinggi</li>
          <li>Pre-treatment: DAF, multi-media filter, cartridge 5µm</li>
          <li>Chemical dosing antiscalant dan antifouling</li>
          <li>Pompa high-pressure Danfoss / CAT Pumps</li>
          <li>Post-treatment: remineralisasi, pH adjustment, klorinasi</li>
          <li>SCADA dan remote monitoring</li>
          <li>Desain modular untuk ekspansi kapasitas</li>
        </ul>
        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt-sm">Aplikasi</h2>
        <div className="flex flex-wrap gap-2 mt-[0.8rem] ">
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Resort dan hotel di kepulauan</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Pulau berpenduduk tanpa sumber air tawar</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Platform offshore minyak &amp; gas</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Kapal pesiar dan ferry besar</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Industri di kawasan pesisir</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Fasilitas militer dan pertahanan</span>
        </div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Keunggulan SWRO TSM</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p>Pengalaman 24 tahun mendesain SWRO untuk kondisi tropis Indonesia memberi TSM keunggulan engineering yang sulit ditandingi:</p>
<ul style={{"paddingLeft":"1.4rem","margin":".8rem 0"}}>
  <li style={{"marginBottom":".55rem"}}><strong>Pre-treatment yang tepat untuk laut Indonesia</strong> — Air laut tropis kaya alga, plankton, dan padatan tersuspensi tinggi terutama di musim hujan. Sistem TSM mengintegrasikan DAF + UF yang efektif menjaga SDI air masuk membran tetap di bawah 3.</li>
  <li style={{"marginBottom":".55rem"}}><strong>ERD efisiensi &gt;95%</strong> — Energy Recovery Device kelas isobarik dari Danfoss/Energy Recovery Inc. Konsumsi energi total turun ke 2,5–4,5 kWh/m³, vs 6–8 kWh/m³ pada SWRO konvensional.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Material tahan korosi</strong> — Semua komponen yang kontak air laut menggunakan SS-316L, super duplex, atau FRP. Vessel high-pressure dengan sertifikasi ASME atau PED.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Versi kontainer untuk lokasi terpencil</strong> — Sistem dapat dikemas dalam kontainer 20 ft atau 40 ft, plug-and-play, ideal untuk Pulau Seribu, Maluku, NTT, dan kepulauan lain yang sulit dijangkau.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Service nasional via jalur laut</strong> — Tim TSM memiliki jaringan logistik ke seluruh kepulauan, termasuk lokasi yang hanya dapat dijangkau dengan kapal tradisional.</li>
</ul>
</div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Studi Kasus Aplikasi</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p><strong>Resort di Pulau Ayer, Kepulauan Seribu</strong> — TSM mendesain SWRO 30 m³/hari berbasis kontainer untuk resort yang sebelumnya bergantung pada pasokan air kapal. Sistem dirancang fully automatic dengan remote monitoring sehingga tidak butuh operator on-site. Setelah commissioning 2023, resort menghemat lebih dari Rp 400 juta per tahun dari biaya transportasi air.</p>
<p><strong>SWRO untuk Kapal Perang Republik Indonesia (KRI)</strong> — TSM telah memasang sistem watermaker SWRO di beberapa unit KRI dengan kapasitas 10–20 ton per hari. Sistem dirancang sesuai standar BKI dan kebutuhan operasional militer: footprint kompak, vibration-resistant, dan dapat beroperasi pada kondisi laut tinggi. Output memenuhi standar air minum personel kapal.</p>
</div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Pertanyaan yang Sering Ditanyakan</h2>
<div className="" style={{"fontSize":".94rem","lineHeight":"1.75","color":"var(--text)"}}>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa biaya per m³ air desalinasi?</h3>
<p>Biaya operasional SWRO modern dengan ERD berkisar Rp 12.000–25.000 per m³ tergantung skala kapasitas, biaya listrik lokal, dan kondisi air laut. Investasi awal kembali dalam 3–6 tahun untuk pulau-pulau yang sebelumnya bergantung pada pengiriman air.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Bisakah air SWRO langsung diminum?</h3>
<p>Ya, setelah remineralisasi dan disinfeksi yang merupakan bagian standar sistem TSM. Air output memenuhi Permenkes 492/2010 dan WHO Drinking Water Guidelines. Beberapa klien resort bahkan mengemasnya dalam botol untuk konsumsi tamu.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apa saja yang mempengaruhi kapasitas SWRO?</h3>
<p>Faktor utama: salinitas air laut (Laut Jawa lebih rendah, Laut Banda lebih tinggi), suhu air (semakin panas semakin produktif), dan SDI air baku. Engineer TSM memperhitungkan semua faktor ini dalam desain dan memberikan kurva produksi tahunan di proposal.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa lama umur membran SWRO?</h3>
<p>Dengan pre-treatment yang baik dan kimia anti-scalant tepat, membran SWRO Dow Filmtec atau Toray bertahan 5–7 tahun. TSM menyediakan kontrak servis termasuk monitoring kinerja membran dan rekomendasi penggantian sebelum performance terganggu.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah TSM melayani SWRO untuk pulau yang sulit dijangkau?</h3>
<p>Ya. TSM telah menangani proyek di Maluku, NTT, Papua, dan Kepulauan Seribu. Kami memiliki sistem kontainer plug-and-play yang dikirim siap operasi via kapal, plus tim mobile yang dapat dimobilisasi untuk commissioning dan training operator lokal.</p>
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
            <li><Link to="/artikel/desalinasi-solusi-pulau">📘 Desalinasi Air Laut: Solusi Krisis Air di Kepulauan Indonesia</Link></li>
<li><Link to="/artikel/ro-kapal-offshore">📊 Sistem RO untuk Kapal &amp; Platform Offshore</Link></li>
<li><Link to="/industri/maritim"><Factory className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Solusi SWRO Marine untuk Kapal &amp; Platform Offshore</Link></li>
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

export default ProdukDesalinasi;
