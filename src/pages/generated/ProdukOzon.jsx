import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, Wrench, Calculator } from 'lucide-react';


const ProdukOzon = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/produk">Produk &amp; Solusi</Link> › Ozon Generator</div>
    <h1>Ozon Generator — Disinfeksi Air Industri Indonesia</h1>
    <p>Sistem ozon generator industrial untuk disinfeksi AMDK, kolam renang premium, water treatment industri, dan pengolahan air limbah. Teknologi korona discharge dengan PSA oksigen — efektif, tanpa residu kimia.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[3rem] items-start">
      <div>
        <div className="h-[300px] rounded-[14px] flex items-center justify-center text-[8rem] mb-[2rem] text-white " style={{"background":"none","padding":"0","height":"auto","display":"block"}}><picture>
  <source srcSet="images/produk-ro-industri-2.webp" type="image/webp" />
  <img src="images/produk-ro-industri-2.jpg" alt="Ozon generator industrial untuk disinfeksi air AMDK dan industri Indonesia" style={{"width":"100%","height":"auto","maxHeight":"480px","objectFit":"cover","borderRadius":"14px","display":"block"}} />
</picture></div>

        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p><strong>Ozon (O₃)</strong> adalah disinfektan terkuat yang aman untuk pengolahan air minum — 3.000 kali lebih reaktif dari klorin dan tidak meninggalkan residu kimia setelah waktu kontak. Industri AMDK Indonesia menggunakan ozonisasi sebagai standar wajib BPOM untuk menjamin shelf-life produk 12 bulan tanpa pengawet kimia tambahan. Selain AMDK, ozon banyak diaplikasikan di kolam renang premium hotel, cooling tower, oksidasi besi-mangan, dan disinfeksi air limbah industri.</p>
        <p>PT Tirta Sumber Makmur menyediakan <strong>ozon generator industrial</strong> dengan kapasitas <strong>1 g/jam hingga 10 kg/jam</strong> menggunakan teknologi korona discharge tier-1. Sistem dapat dikonfigurasi dengan PSA (Pressure Swing Adsorption) untuk memproduksi oksigen sendiri — menghilangkan ketergantungan pada pasokan oksigen tabung yang merepotkan untuk lokasi remote. Setiap sistem dilengkapi kontrol PLC, sensor ozon residual untuk monitoring otomatis, dan venturi/diffuser injector untuk pencampuran efisien dengan aliran air.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Cara Kerja Ozon Generator</h2>
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p>Ozon dihasilkan dengan memecah molekul oksigen (O₂) menjadi atom oksigen yang kemudian bergabung kembali menjadi ozon (O₃). Tiga komponen utama sistem ozon generator TSM:</p>
        <ul style={{"paddingLeft":"1.4rem","margin":".8rem 0"}}>
          <li style={{"marginBottom":".5rem"}}><strong>Sumber Oksigen</strong> — Untuk efisiensi optimal, ozon generator membutuhkan oksigen kering (&gt;90% O₂). Pilihan: <strong>PSA oxygen generator</strong> (paling ekonomis untuk operasi kontinu), <strong>LOX (Liquid Oxygen)</strong> untuk kapasitas besar, atau <strong>oksigen tabung</strong> untuk kapasitas kecil.</li>
          <li style={{"marginBottom":".5rem"}}><strong>Sel Korona Discharge</strong> — Oksigen mengalir melalui sel yang mengandung dua elektroda dipisahkan oleh dielektrik (kaca atau keramik). Tegangan tinggi 5–15 kV pada frekuensi 500–1.000 Hz menghasilkan corona electric yang memecah O₂ menjadi O₃. Efisiensi konversi 5–15% (tergantung desain sel).</li>
          <li style={{"marginBottom":".5rem"}}><strong>Sistem Kontak Ozon-Air</strong> — Ozon dilarutkan ke air menggunakan venturi injector (untuk flow tinggi) atau bubble diffuser di tangki kontak. Waktu kontak 4–10 menit biasanya cukup untuk disinfeksi 4-log.</li>
        </ul>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Spesifikasi Teknis</h2>
        <table className="w-full border-collapse my-[1.5rem] text-[0.9rem] ">
          <tbody><tr><td>Kapasitas Produksi</td><td>1 g/jam – 10 kg/jam</td></tr>
          <tr><td>Konsentrasi Ozon</td><td>5 – 15% wt (dengan oksigen)</td></tr>
          <tr><td>Sumber Oksigen</td><td>PSA, LOX, atau tabung</td></tr>
          <tr><td>Konsumsi Listrik</td><td>8 – 15 kWh/kg O₃</td></tr>
          <tr><td>Tipe Sel</td><td>Korona discharge tubular / planar</td></tr>
          <tr><td>Kontrol</td><td>PLC dengan HMI sentuh</td></tr>
          <tr><td>Sensor Ozon</td><td>UV photometric residual analyzer</td></tr>
          <tr><td>Sistem Injection</td><td>Venturi atau bubble diffuser</td></tr>
        </tbody></table>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Fitur Utama</h2>
        <ul className="flex flex-col text-[0.9rem] text-text ">
          <li>Sel korona discharge tier-1 dengan dielektrik keramik premium</li>
          <li>PSA oksigen generator opsional (mandiri tanpa tabung)</li>
          <li>Kontrol PLC dengan HMI sentuh dan dashboard</li>
          <li>Monitoring ozon residual otomatis dengan alarm batas</li>
          <li>Sistem cooling water terintegrasi untuk efisiensi sel</li>
          <li>Material kontak SS-316L (tahan oksidasi ozon)</li>
          <li>Off-gas destructor untuk safety lingkungan kerja</li>
          <li>Sertifikasi CE dan compliance Permenkes 492/2010</li>
        </ul>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt-sm">Aplikasi</h2>
        <div className="flex flex-wrap gap-2 mt-[0.8rem] ">
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Disinfeksi AMDK (cup, botol, gallon)</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Kolam renang hotel premium</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Cooling tower water</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Oksidasi besi-mangan</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Disinfeksi air limbah industri</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Industri makanan &amp; farmasi</span>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Keunggulan Ozon Generator TSM</h2>
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p>Ozon generator yang baik tidak hanya soal output gram per jam — efisiensi, reliability, dan integrasi dengan sistem hilir sama pentingnya. Berikut pendekatan engineering TSM:</p>
        <ul style={{"paddingLeft":"1.4rem","margin":".8rem 0"}}>
          <li style={{"marginBottom":".55rem"}}><strong>Integrasi sistem lengkap</strong> — Bukan hanya generator, tapi paket dengan sumber oksigen, kontak chamber, sensor residual, dan off-gas destructor. Semua komponen dirancang bekerja bersama dengan optimal.</li>
          <li style={{"marginBottom":".55rem"}}><strong>PSA O₂ untuk operasi mandiri</strong> — Untuk operasi 24/7 atau lokasi remote, PSA oxygen generator menghilangkan handling tabung oksigen yang merepotkan dan berbahaya. Modul Atlas Copco atau Oxymat dengan kemurnian &gt;93%.</li>
          <li style={{"marginBottom":".55rem"}}><strong>Material food-grade untuk AMDK</strong> — Semua kontak air dengan ozon menggunakan SS-316L atau PTFE — material yang tahan oksidasi ozon dan tidak melepaskan kontaminan ke air produk.</li>
          <li style={{"marginBottom":".55rem"}}><strong>Safety K3 lengkap</strong> — Off-gas destructor (catalyst-based) menghancurkan ozon sisa sebelum ke atmosfer. Sensor ambient ozon di ruang generator dengan alarm di 0,1 ppm. Sesuai standar OSHA dan K3 Indonesia.</li>
          <li style={{"marginBottom":".55rem"}}><strong>Validasi performa untuk audit</strong> — Untuk klien AMDK dan farmasi, TSM menyediakan dokumentasi commissioning dengan data uji performance — penting untuk audit BPOM dan internal QA.</li>
        </ul>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Studi Kasus Aplikasi</h2>
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p><strong>Lini AMDK Brand Regional</strong> — TSM memasok ozon generator 8 g/jam dengan PSA oxygen untuk lini produksi AMDK 5.000 cup/jam di Bekasi. Sistem mempertahankan ozon residual 0,3 mg/L pada saat filling secara konsisten, lulus audit BPOM dengan data shelf-life test 12 bulan tanpa kontaminasi mikroba.</p>
        <p><strong>Kolam Renang Resort Premium</strong> — Resort di kawasan Jakarta Selatan mengganti sistem klorinasi konvensional dengan ozon generator 50 g/jam untuk kolam Olympic-size. Hasil: tidak ada bau klorin, mata tamu tidak iritasi, kualitas air kristal jernih, dan konsumsi klorin turun 80% (klorin tetap dipakai sebagai residual minimal).</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Pertanyaan yang Sering Ditanyakan</h2>
        <div className="" style={{"fontSize":".94rem","lineHeight":"1.75","color":"var(--text)"}}>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apa keunggulan ozon dibanding klorinasi?</h3>
        <p>Ozon adalah disinfektan 3.000x lebih reaktif dibanding klorin dan tidak meninggalkan residu rasa atau bau setelah 20–30 menit. Ozon juga efektif terhadap virus, kista (Cryptosporidium, Giardia), dan oksidasi besi-mangan yang tidak dapat ditangani klorin. Tidak ada produk samping berbahaya seperti THM (trihalomethanes) yang muncul pada klorinasi air dengan organik tinggi.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa konsentrasi ozon yang aman untuk AMDK?</h3>
        <p>BPOM mensyaratkan ozon residual 0,2–0,4 mg/L pada saat filling untuk menjamin shelf-life 12 bulan. Setelah 20 menit, ozon terurai menjadi oksigen sehingga produk akhir tidak mengandung ozon. Konsentrasi ini aman untuk konsumsi manusia dan menjadi standar global industri AMDK.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apa beda ozon generator korona discharge dengan UV?</h3>
        <p>Korona discharge: efisiensi tinggi (5–15% O₂ ke O₃), output tinggi 1 g/jam–10 kg/jam, butuh oksigen kering, biaya operasional lebih tinggi tapi kapasitas besar. UV ozone: efisiensi rendah (~0,1%), output kecil &lt; 5 g/jam, lebih sederhana, cocok untuk kolam renang rumah atau aplikasi sangat kecil. Untuk AMDK industrial, korona discharge adalah pilihan standar.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Aplikasi apa saja yang cocok untuk ozon generator?</h3>
        <p>Aplikasi utama: (1) Disinfeksi AMDK sebagai alternatif klorinasi, (2) Kolam renang hotel/resort dengan kandungan klorin minimal, (3) Cooling tower water untuk kontrol biofilm, (4) Pre-treatment air untuk oksidasi besi-mangan, (5) Disinfeksi air limbah industri sebelum reuse, (6) Industri makanan untuk sanitasi peralatan dan air proses, (7) Pengolahan air kolam terapi atau spa premium.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa biaya operasional ozon generator?</h3>
        <p>Konsumsi listrik ozon generator korona discharge sekitar 8–15 kWh per kg ozon yang dihasilkan. Untuk AMDK 5.000 cup/jam (kebutuhan ozon ~5 g/jam), konsumsi listrik hanya ~0,1 kWh/jam — sangat ekonomis. Biaya tambahan: penggantian sel ozon setiap 5–7 tahun (Rp 10–30 juta tergantung kapasitas) dan oksigen jika menggunakan PSA atau LOX.</p>

        <p style={{"marginTop":"1.2rem"}}>Ozon adalah teknologi disinfeksi modern yang memberikan kualitas air superior tanpa kompromi rasa atau aroma. Konsultasikan kebutuhan disinfeksi Anda dengan tim engineer TSM untuk mendapatkan rekomendasi kapasitas dan konfigurasi yang tepat untuk aplikasi AMDK, kolam premium, atau industri Anda.</p>
        </div>
      </div>
      <aside className="lg:sticky lg:top-[88px]">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Minta Penawaran</h4>
          <p style={{"fontSize":".86rem","color":"var(--muted)","lineHeight":"1.65","marginBottom":"1rem"}}>Dapatkan rekomendasi kapasitas dan konfigurasi ozon generator yang tepat.</p>
          <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-accent text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,180,216,0.32)] hover:bg-white hover:text-blue hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center","marginBottom":".6rem"}} to="/kontak"><ClipboardList className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Minta Penawaran</Link>
          <Link href="https://wa.me/62818719119" className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-blue text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-blue hover:text-white hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center"}} target="_blank" rel="noopener noreferrer">💬 WhatsApp Kami</Link>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Produk Terkait</h4>
          <ul style={{"display":"flex","flexDirection":"column","gap":".65rem"}}>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/amdk">→ Mesin AMDK</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/uv">→ UV Sterilizer</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/ro-industri">→ RO Industri</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/kimia">→ Kimia Water Treatment</Link></li>
            <li><Link style={{"fontSize":".84rem","fontWeight":"600","color":"var(--blue)","display":"block"}} to="/produk">→ Semua Produk</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem]" style={{"background":"linear-gradient(145deg,var(--navy),var(--blue))","border":"none"}}>
          <h4 style={{"color":"rgba(255,255,255,.45)","borderColor":"rgba(255,255,255,.15)"}}>Konsultasi Teknis</h4>
          <p style={{"fontSize":".86rem","opacity":".84","color":"#fff","lineHeight":"1.65","marginBottom":"1rem"}}>Hubungi engineer kami untuk rekomendasi sistem ozon yang tepat untuk aplikasi Anda.</p>
          <Link href="tel:+62818719119" className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center","fontSize":".82rem"}}>📞 021-88871689</Link>
        </div>
      </aside>
    </div>
  </div>

        <div className="info-box" style={{"marginTop":"2rem"}}>
          <strong>📚 Baca Juga</strong>
          <ul style={{"marginTop":".75rem","paddingLeft":"1.2rem"}}>
            <li><Link to="/produk/amdk">🥤 Mesin AMDK &amp; Lini Produksi Air Minum</Link></li>
            <li><Link to="/produk/uv">💡 UV Sterilizer untuk Air Minum</Link></li>
            <li><Link to="/industri/hotel">🏨 Solusi untuk Hotel &amp; Resort</Link></li>
            <li><Link to="/produk/ro-komersial">🏢 RO Komersial Hotel &amp; Gedung</Link></li>
            <li><Link to="/kalkulator"><Calculator className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Hitung Kebutuhan Sistem Anda</Link></li>
          </ul>
        </div>

</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Tertarik dengan Ozon Generator?</h2>
    <p>Tim engineer kami siap membantu Anda menentukan kapasitas ozon yang tepat untuk aplikasi Anda.</p>
    <div className="flex gap-4 justify-center flex-wrap"><Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak"><ClipboardList className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Minta Penawaran Harga</Link><Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/layanan"><Wrench className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Lihat Layanan Kami</Link></div>
  </div>
</div>

    </>
  );
};

export default ProdukOzon;
