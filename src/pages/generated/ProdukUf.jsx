import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Calculator, Waves } from 'lucide-react';
import Button from '../../components/ui/Button';

const ProdukUf = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.prod-hero{height:300px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:8rem;margin-bottom:2rem;background:linear-gradient(135deg,#054a6e,#0d5fa8)}
.spec-table{width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:.9rem}
.spec-table tr:nth-child(odd) td{background:var(--gray)}
.spec-table td{padding:.7rem 1rem;border-bottom:1px solid var(--border)}
.spec-table td:first-child{font-weight:600;color:var(--navy);width:45%}


` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/produk">Produk &amp; Solusi</Link> › Ultrafiltrasi</div>
    <h1>Ultrafiltrasi (UF) &amp; Microfiltration</h1>
    <p>Sistem penyaringan membran UF dan Microfiltration untuk pre-treatment RO, pengolahan air minum, dan berbagai aplikasi industri yang membutuhkan penghilangan partikel, koloid, dan mikroorganisme.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[3rem] items-start">
      <div>
        <div className="h-[300px] rounded-[14px] flex items-center justify-center text-[8rem] mb-[2rem] text-white " style={{"background":"none","padding":"0","height":"auto","display":"block"}}><picture>
  <source srcSet="images/porto-sosro-1.webp" type="image/webp" />
  <img src="images/porto-sosro-1.jpg" alt="Sistem ultrafiltrasi UF TSM untuk pre-treatment RO dan air bersih industri" style={{"width":"100%","height":"auto","maxHeight":"480px","objectFit":"cover","borderRadius":"14px","display":"block"}} />
</picture></div>
        
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p><strong>Ultrafiltrasi (UF)</strong> adalah teknologi penyaringan membran yang menjadi standar pre-treatment RO modern dan solusi mandiri untuk pengolahan air bersih. Membran UF dengan ukuran pori 0,01–0,1 mikron mampu menahan bakteri, virus, koloid, dan padatan tersuspensi dengan removal hingga 6-log (99,9999%) — tanpa membutuhkan koagulan kimia seperti pada filter konvensional.</p>
<p>PT Tirta Sumber Makmur menggunakan modul UF hollow fiber PVDF kelas industri dari Pentair, Toray, dan Koch Membrane untuk berbagai aplikasi: pre-treatment SWRO/BWRO, pengolahan air minum perkotaan, klarifikasi industri minuman dan dairy, hingga pengolahan kolam renang. Kapasitas yang kami layani dari <strong>1 hingga 500 m³/jam</strong> dengan footprint hingga 60% lebih kecil dibanding multi-media filter konvensional.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Cara Kerja Ultrafiltrasi</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p>Membran UF terdiri dari ribuan serat berongga (hollow fiber) berukuran sub-milimeter. Air baku didorong dari luar ke dalam serat (outside-in) atau sebaliknya pada tekanan rendah 1–3 bar. Pori membran 0,01–0,1 mikron menahan semua partikel berukuran lebih besar — termasuk bakteri (≥0,2 µm), virus (0,02–0,3 µm), koloid, dan padatan tersuspensi.</p>
<p>Tidak seperti filter konvensional yang menumpuk kotoran terus-menerus, sistem UF TSM menggunakan <strong>backwash otomatis</strong> setiap 30–60 menit untuk membersihkan serat membran. Ditambah <strong>Chemical Enhanced Backwash (CEB)</strong> harian dengan klorin atau NaOH/HCl untuk menghilangkan kontaminan organik dan biofilm. Hasilnya: kualitas filtrat konsisten selama 7–10 tahun usia membran.</p>
</div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Spesifikasi Teknis</h2>
        <table className="w-full border-collapse my-[1.5rem] text-[0.9rem] ">
          <tbody><tr><td>Ukuran Pori UF</td><td>0,01 – 0,1 µm</td></tr>
          <tr><td>Ukuran Pori MF</td><td>0,1 – 10 µm</td></tr>
          <tr><td>Turbiditas Output</td><td>&lt; 0,1 NTU</td></tr>
          <tr><td>Removal Bakteri</td><td>≥ 6 log</td></tr>
          <tr><td>Kapasitas</td><td>1 – 500 m³/jam</td></tr>
          <tr><td>Konfigurasi</td><td>Hollow fiber / Spiral wound</td></tr>
        </tbody></table>
        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Fitur Utama</h2>
        <ul className="flex flex-col text-[0.9rem] text-text ">
          <li>Modul hollow fiber PVDF ultra-kuat</li>
          <li>Sistem backwash otomatis terjadwal</li>
          <li>Chemical Enhanced Backwash (CEB) otomatis</li>
          <li>Sistem CIP terintegrasi</li>
          <li>Footprint lebih kecil vs konvensional</li>
          <li>Tidak membutuhkan koagulan untuk kekeruhan rendah</li>
          <li>Kualitas filtrat konsisten tanpa tergantung feed</li>
          <li>Usia membran 7–10 tahun dengan perawatan benar</li>
        </ul>
        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt-sm">Aplikasi</h2>
        <div className="flex flex-wrap gap-2 mt-[0.8rem] ">
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Pre-treatment sistem RO</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Pengolahan air minum perkotaan</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Industri susu dan dairy</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Klarifikasi produk bioteknologi</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Pengolahan air kolam renang</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Industri minuman dan bir</span>
        </div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Keunggulan UF TSM</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p>UF bukan sekadar pengganti pasir kuarsa — ia adalah pondasi sistem RO yang andal. Berikut keunggulan engineering yang membuat sistem UF TSM tahan lama dan mudah dioperasikan:</p>
<ul style={{"paddingLeft":"1.4rem","margin":".8rem 0"}}>
  <li style={{"marginBottom":".55rem"}}><strong>Modul PVDF tahan kondisi tropis</strong> — Material PVDF dengan iradiasi cross-linked tahan terhadap variasi pH 2–13 dan klorin hingga 200 mg/L untuk CEB intensif.</li>
  <li style={{"marginBottom":".55rem"}}><strong>SDI &lt; 3 untuk pre-treatment RO</strong> — Output UF konsisten memberikan air dengan Silt Density Index di bawah 3, syarat ideal untuk membran RO. Ini memperpanjang umur membran RO 2–3 kali lipat dibanding pre-treatment konvensional.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Tidak butuh koagulan untuk turbiditas rendah</strong> — Untuk air baku kekeruhan &lt; 50 NTU, sistem UF dapat beroperasi tanpa dosing koagulan PAC atau alum, menghemat biaya kimia.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Otomasi PLC dengan logika cerdas</strong> — Frekuensi backwash dan CEB diatur otomatis berdasarkan transmembrane pressure (TMP), bukan timer kaku. Ini menghemat air backwash dan kimia hingga 30%.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Footprint compact</strong> — Sistem UF 100 m³/jam hanya butuh ruang sekitar 6×4 meter — sepertiga dari multi-media filter setara.</li>
</ul>
</div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Studi Kasus Aplikasi</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p><strong>Pre-treatment SWRO Resort Pulau Seribu</strong> — TSM memasang UF 50 m³/jam sebagai pre-treatment SWRO 30 m³/hari di resort Pulau Ayer. Air laut yang sebelumnya butuh DAF + multi-media filter + cartridge filter kini cukup ditangani UF compact. Membran SWRO menunjukkan tidak ada penurunan flux selama 2 tahun pertama operasi.</p>
<p><strong>Pengolahan Air Minum PT Sosro</strong> — Sistem UF 100 m³/jam mengolah air baku PDAM untuk lini produksi minuman. UF menghilangkan sisa klorin organik, koloid, dan menjamin kualitas mikrobiologis sebelum masuk ke tahap produksi. Tidak ada kasus kontaminasi mikroba sejak instalasi 2021.</p>
</div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Pertanyaan yang Sering Ditanyakan</h2>
<div className="" style={{"fontSize":".94rem","lineHeight":"1.75","color":"var(--text)"}}>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apa beda UF dengan microfiltration (MF) dan RO?</h3>
<p>MF: pori 0,1–10 µm, hanya menahan bakteri dan partikel besar. UF: pori 0,01–0,1 µm, menahan virus dan koloid. RO: pori ~0,0001 µm, menahan ion garam dan molekul kecil. Untuk pre-treatment RO, UF adalah pilihan standar modern karena memberikan SDI rendah konsisten.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa konsumsi energi sistem UF?</h3>
<p>Sistem UF beroperasi pada tekanan rendah 1–3 bar. Konsumsi energi sekitar 0,1–0,3 kWh/m³ — hanya seperdua puluh dari RO. Ini membuat UF sangat ekonomis sebagai stand-alone treatment untuk air bersih.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah UF bisa menggantikan klorinasi?</h3>
<p>UF efektif menahan bakteri dan virus secara fisik (≥6-log removal), tapi tidak memberikan residu disinfektan untuk distribusi pipa. Untuk pengolahan air minum, kami merekomendasikan UF + klorinasi residual atau UV sterilizer di akhir proses.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa lama backwash dan apakah mengganggu produksi?</h3>
<p>Backwash UF berlangsung 30–60 detik setiap 30–60 menit. Karena sistem TSM menggunakan konfigurasi multi-train, satu unit dapat backwash sementara unit lain tetap memproduksi — tidak ada interupsi pasokan.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Membran UF TSM cocok untuk air sumur dengan besi-mangan tinggi?</h3>
<p>Bisa, dengan catatan: jika besi/mangan terlarut &gt; 0,3 mg/L, kami merekomendasikan oksidasi (aerasi atau dosing oksidator) sebelum UF agar besi-mangan terendapkan dan tertahan membran. Tanpa oksidasi, mereka akan ter-fouled di membran.</p>

<p style={{"marginTop":"1.2rem"}}>Dengan pengalaman 24 tahun mengintegrasikan UF di sistem water treatment industri Indonesia, TSM dapat membantu menentukan apakah UF cocok untuk kebutuhan Anda — sebagai pre-treatment RO, atau sebagai stand-alone treatment untuk air bersih. Hubungi tim engineer kami untuk analisis air baku gratis dan rekomendasi konfigurasi yang optimal.</p>
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
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/desalinasi">→ Desalinasi Air Laut</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/membran">→ Elemen Membran RO</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/kimia">→ Kimia Water Treatment</Link></li>
            <li><Link style={{"fontSize":".84rem","fontWeight":"600","color":"var(--blue)","display":"block"}} to="/produk">→ Semua Produk</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem]" style={{"background":"linear-gradient(145deg,var(--navy),var(--blue))","border":"none"}}>
          <h4 style={{"color":"rgba(255,255,255,.45)","borderColor":"rgba(255,255,255,.15)"}}>Konsultasi Teknis</h4>
          <p style={{"fontSize":".86rem","opacity":".84","color":"#fff","lineHeight":"1.65","marginBottom":"1rem"}}>Hubungi engineer kami untuk rekomendasi sistem yang tepat untuk kebutuhan Anda.</p>
          <Button variant="white" to="/tel:+62818719119" >📞 021-88871689</Button>
        </div>
      </aside>
    </div>
  </div>
        <div className="info-box" style={{"marginTop":"2rem"}}>
          <strong>📚 Baca Juga</strong>
          <ul style={{"marginTop":".75rem","paddingLeft":"1.2rem"}}>
            <li><Link to="/artikel/ro-prinsip-kerja">📘 Mengenal Teknologi Reverse Osmosis: Prinsip Kerja</Link></li>
            <li><Link to="/artikel/monitoring-kualitas-air-ro">📊 Monitoring Kualitas Air RO Real-time</Link></li>
            <li><Link to="/produk/ro-industri"><Factory className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Sistem RO Industri (UF sebagai pre-treatment)</Link></li>
            <li><Link to="/produk/desalinasi"><Waves className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> SWRO Desalinasi (UF sebagai pre-treatment SWRO)</Link></li>
            <li><Link to="/kalkulator"><Calculator className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Hitung Kebutuhan Sistem Anda (Kalkulator)</Link></li>
          </ul>
        </div>

</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold leading-[1.15] mb-[0.65rem]">Tertarik dengan Produk Ini?</h2>
    <p className="text-[0.88rem] opacity-90 leading-[1.75] max-w-[600px] mx-auto mb-8">Tim engineer kami siap membantu Anda menentukan spesifikasi yang tepat sesuai kebutuhan.</p>
    <div className="flex gap-4 justify-center flex-wrap"><Button variant="white" to="/kontak" >📋 Minta Penawaran Harga</Button><Button variant="outline-white" to="/layanan" >🛠️ Lihat Layanan Kami</Button></div>
  </div>
</div>

    </>
  );
};

export default ProdukUf;
