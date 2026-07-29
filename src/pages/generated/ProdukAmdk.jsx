import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, Wrench, Factory, Calculator } from 'lucide-react';


const ProdukAmdk = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/produk">Produk &amp; Solusi</Link> › Mesin AMDK</div>
    <h1>Mesin AMDK — Lini Produksi Air Minum Dalam Kemasan Indonesia</h1>
    <p>Solusi turnkey untuk pabrik Air Minum Dalam Kemasan: water treatment, ozonisasi, UV sterilization, dan mesin filling untuk cup, botol PET, dan gallon. Sistem yang siap memenuhi standar BPOM, SNI 3553, dan halal MUI.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[3rem] items-start">
      <div>
        <div className="h-[300px] rounded-[14px] flex items-center justify-center text-[8rem] mb-[2rem] text-white " style={{"background":"none","padding":"0","height":"auto","display":"block"}}><picture>
  <source srcSet="images/produk-ro-9m3-a.webp" type="image/webp" />
  <img src="images/produk-ro-9m3-a.jpg" alt="Lini produksi mesin AMDK Air Minum Dalam Kemasan Indonesia oleh TSM" style={{"width":"100%","height":"auto","maxHeight":"480px","objectFit":"cover","borderRadius":"14px","display":"block"}} />
</picture></div>

        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p>Industri <strong>Air Minum Dalam Kemasan (AMDK)</strong> di Indonesia tumbuh konsisten di atas 7% per tahun, didorong meningkatnya kesadaran konsumen akan kualitas air minum dan permintaan untuk produk regional. PT Tirta Sumber Makmur menyediakan <strong>solusi turnkey lini produksi AMDK</strong> — mulai dari air baku, water treatment, sampai mesin pengisian dan packaging — untuk pengusaha yang ingin memulai pabrik AMDK atau memperluas kapasitas existing.</p>
        <p>Berbeda dengan importir yang hanya menjual mesin filling generic dari China, TSM menyediakan paket lengkap: <strong>analisis air baku, desain water treatment kustom, integrasi mesin filling tier-1, ozonisasi dan UV sterilization, hingga dokumentasi teknis untuk perizinan BPOM dan SNI</strong>. Pengalaman 24 tahun kami di water treatment industri memastikan air produk Anda memenuhi standar BPOM dan terbukti aman untuk konsumen.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Komponen Lini Produksi AMDK</h2>
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p>Lini AMDK lengkap terdiri dari 6 zona utama yang harus terintegrasi dengan benar untuk menghasilkan produk yang aman dan compliant:</p>
        <ul style={{"paddingLeft":"1.4rem","margin":".8rem 0"}}>
          <li style={{"marginBottom":".5rem"}}><strong>Zona Air Baku &amp; Pre-treatment</strong> — Multi-media filter, karbon aktif, softener untuk menghilangkan kekeruhan, klorin, dan hardness.</li>
          <li style={{"marginBottom":".5rem"}}><strong>Zona Reverse Osmosis</strong> — Membran RO Dow Filmtec atau Toray menghasilkan air dengan TDS &lt; 50 ppm. Tahap ini mengeliminasi 95–99% padatan terlarut, virus, dan bakteri.</li>
          <li style={{"marginBottom":".5rem"}}><strong>Zona Remineralisasi (opsional)</strong> — Untuk produk premium, kalsium dan magnesium ditambahkan kembali agar TDS produk akhir di range 80–150 ppm dengan rasa nikmat.</li>
          <li style={{"marginBottom":".5rem"}}><strong>Zona Ozonisasi</strong> — Ozon 0,2–0,4 mg/L sebagai disinfektan bottling untuk menjamin shelf-life 12 bulan tanpa pengawet kimia. Memenuhi syarat BPOM untuk produk AMDK.</li>
          <li style={{"marginBottom":".5rem"}}><strong>Zona UV Sterilization</strong> — UV 254nm dosis ≥40 mJ/cm² sebagai disinfektan akhir sebelum filling. Backup dari ozonisasi untuk redundancy.</li>
          <li style={{"marginBottom":".5rem"}}><strong>Zona Filling &amp; Packaging</strong> — Mesin filling untuk cup 220ml (kapasitas 2.000–10.000 cup/jam), botol PET 330–1500ml (1.000–8.000 botol/jam), atau gallon 19L (200–600 gallon/jam).</li>
        </ul>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Spesifikasi Teknis</h2>
        <table className="w-full border-collapse my-[1.5rem] text-[0.9rem] ">
          <tbody><tr><td>Kapasitas Lini Cup</td><td>1.000 – 10.000 cup/jam</td></tr>
          <tr><td>Kapasitas Lini Botol PET</td><td>1.000 – 8.000 botol/jam</td></tr>
          <tr><td>Kapasitas Lini Gallon</td><td>200 – 600 gallon 19L/jam</td></tr>
          <tr><td>TDS Air Produk</td><td>50 – 150 ppm (sesuai SNI 3553)</td></tr>
          <tr><td>Konsentrasi Ozon</td><td>0,2 – 0,4 mg/L (residual)</td></tr>
          <tr><td>Dosis UV</td><td>≥ 40 mJ/cm² pada 254nm</td></tr>
          <tr><td>Material Kontak Air</td><td>SS-304 / SS-316L food grade</td></tr>
          <tr><td>Standar Compliance</td><td>BPOM, SNI 3553:2015, halal MUI</td></tr>
        </tbody></table>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Fitur Utama</h2>
        <ul className="flex flex-col text-[0.9rem] text-text ">
          <li>Paket turnkey: water treatment + ozonisasi + UV + filling terintegrasi</li>
          <li>Komponen kritis tier-1 (Dow Filmtec, Trojan UV, Ozonia/Wedeco)</li>
          <li>Mesin filling otomatis dengan PLC dan HMI sentuh</li>
          <li>SS-304 / SS-316L food grade untuk semua kontak air</li>
          <li>Dokumentasi teknis untuk perizinan BPOM, SNI, halal MUI</li>
          <li>SOP operasional dalam Bahasa Indonesia</li>
          <li>Training operator 5 hari termasuk dalam paket</li>
          <li>After-sales service nasional dengan stok spare parts</li>
        </ul>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt-sm">Aplikasi</h2>
        <div className="flex flex-wrap gap-2 mt-[0.8rem] ">
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Pabrik AMDK skala kecil-menengah</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Brand AMDK regional</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Hotel dengan brand sendiri (private label)</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Resort kepulauan</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Korporat untuk konsumsi internal</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Koperasi desa air minum</span>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Keunggulan Lini AMDK TSM vs Importir Generic</h2>
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p>Banyak pengusaha AMDK pemula tergiur paket murah dari importir mesin China. Yang mereka tidak ketahui — water treatment generic biasanya tidak cocok untuk air baku spesifik di lokasi mereka, dan setelah 6–12 bulan masalah kualitas mulai muncul: TDS tidak konsisten, kontaminasi mikroba, atau gagal audit BPOM.</p>
        <ul style={{"paddingLeft":"1.4rem","margin":".8rem 0"}}>
          <li style={{"marginBottom":".55rem"}}><strong>Water treatment custom untuk air baku Anda</strong> — Engineer TSM melakukan analisis air baku lengkap dan mendesain pre-treatment + RO yang spesifik untuk kondisi sumber air Anda — bukan paket generic.</li>
          <li style={{"marginBottom":".55rem"}}><strong>Komponen kritis dari merek tier-1</strong> — Membran Dow Filmtec/Toray, lampu UV Trojan/Atlantic, generator ozon Ozonia/Wedeco. Tidak ada penghematan di komponen yang menentukan kualitas produk dan keamanan konsumen.</li>
          <li style={{"marginBottom":".55rem"}}><strong>Dukungan dokumentasi BPOM &amp; SNI</strong> — TSM menyediakan dokumentasi teknis lengkap (P&amp;ID, spec sheet, sertifikat material food-grade, hasil uji laboratorium) yang dibutuhkan untuk pengajuan izin BPOM MD dan SNI 3553.</li>
          <li style={{"marginBottom":".55rem"}}><strong>Training mendalam untuk operator</strong> — Lima hari training mencakup operasi harian, pengujian kualitas in-process, troubleshooting, dan SOP keadaan darurat. Tidak ada operator yang ditinggalkan tanpa pemahaman penuh.</li>
          <li style={{"marginBottom":".55rem"}}><strong>After-sales nasional</strong> — Bila terjadi masalah, tim TSM dapat dijangkau via WhatsApp/telepon dan mengirim teknisi ke lokasi dalam 48 jam. Stok spare parts strategis di Bekasi, Jakarta, Surabaya.</li>
        </ul>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Studi Kasus Aplikasi</h2>
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p><strong>Brand AMDK Regional di Bekasi</strong> — TSM membangun lini produksi 5.000 cup/jam + 200 gallon/jam untuk brand AMDK regional yang memulai usaha pada 2023. Paket termasuk water treatment kustom (air baku sumur dalam dengan besi 1,5 mg/L), ozonisasi, UV, dan dokumentasi BPOM. Klien berhasil mendapatkan izin BPOM MD dalam 8 bulan dan SNI 3553 dalam 11 bulan.</p>
        <p><strong>Private Label AMDK Resort Pulau Seribu</strong> — Resort dengan SWRO TSM sebelumnya memutuskan menambah lini AMDK skala kecil 1.500 cup/jam untuk konsumsi tamu dan brand corporate. Lini ditempatkan dalam kontainer 20 ft, terintegrasi dengan SWRO existing. Compliance sertifikasi mengikuti standar internal hospitality, tanpa perlu BPOM publik.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Pertanyaan yang Sering Ditanyakan</h2>
        <div className="" style={{"fontSize":".94rem","lineHeight":"1.75","color":"var(--text)"}}>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apa saja izin yang dibutuhkan untuk usaha AMDK di Indonesia?</h3>
        <p>Usaha AMDK di Indonesia membutuhkan: (1) NIB (Nomor Induk Berusaha), (2) Izin Edar BPOM dengan kode MD untuk produksi dalam negeri, (3) Sertifikat SNI 3553:2015 wajib dari LSPro yang terakreditasi KAN, (4) Izin Lingkungan (UKL-UPL atau AMDAL tergantung skala), (5) Sertifikat Halal MUI, dan (6) Izin lokasi industri dari pemda. TSM membantu klien menyiapkan dokumentasi teknis untuk semua izin tersebut.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa investasi mesin AMDK skala kecil hingga menengah?</h3>
        <p>Investasi mesin AMDK bervariasi tergantung kapasitas dan tingkat otomasi. Skala kecil 1.000–3.000 cup/jam: Rp 350–650 juta. Skala menengah 5.000–10.000 cup/jam plus lini gallon: Rp 1,5–4 milyar. Skala besar dengan PET botol dan multi-line: Rp 5–15 milyar. Investasi termasuk water treatment, ozonisasi, UV sterilizer, mesin filling, dan packaging.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apa beda lini AMDK TSM dengan supplier mesin China?</h3>
        <p>Banyak importir menjual mesin filling China generic tanpa support lokal. TSM menyediakan paket turnkey dengan: (1) integrasi water treatment kustom sesuai air baku Anda, (2) komponen kritis dari merek tier-1 (membran Dow Filmtec, ozon dari Ozonia/Wedeco, UV dari Trojan), (3) instalasi dan commissioning oleh tim TSM, (4) training operator dan SOP dalam Bahasa Indonesia, dan (5) after-sales service nasional dengan stok spare parts.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa lama waktu setup pabrik AMDK dari nol?</h3>
        <p>Tahap teknis (mesin sampai siap produksi): 4–8 bulan untuk skala kecil-menengah, 8–14 bulan untuk skala besar. Tahap regulasi (BPOM, SNI, halal): umumnya 6–12 bulan paralel dengan instalasi mesin. Total dari pengambilan keputusan hingga commercial production sekitar 12–18 bulan untuk operasi yang fully compliant.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah TSM membantu desain pabrik AMDK secara keseluruhan?</h3>
        <p>Ya. Untuk klien yang baru memulai usaha AMDK, TSM menyediakan layanan engineering konsultatif: layout pabrik, P&amp;ID, utility sizing (listrik, kompresor, chiller), persyaratan ruangan steril (sesuai CPPB-IRT BPOM), dan koordinasi dengan kontraktor sipil. Kami fokus pada zona water treatment dan filling, dan dapat menjadi single point of contact untuk seluruh proyek pabrik.</p>

        <p style={{"marginTop":"1.2rem"}}>Memulai usaha AMDK adalah keputusan investasi besar yang menentukan reputasi brand Anda untuk dekade ke depan. Konsultasikan rencana bisnis dan target pasar Anda dengan tim TSM untuk mendapatkan rekomendasi konfigurasi lini, estimasi investasi yang akurat, dan timeline regulatory yang realistis.</p>
        </div>
      </div>
      <aside className="lg:sticky lg:top-[88px]">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Minta Penawaran</h4>
          <p style={{"fontSize":".86rem","color":"var(--muted)","lineHeight":"1.65","marginBottom":"1rem"}}>Konsultasi gratis untuk merancang lini AMDK sesuai kapasitas dan budget Anda.</p>
          <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-accent text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,180,216,0.32)] hover:bg-white hover:text-blue hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center","marginBottom":".6rem"}} to="/kontak"><ClipboardList className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Minta Penawaran</Link>
          <Link href="https://wa.me/62818719119" className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-blue text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-blue hover:text-white hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center"}} target="_blank" rel="noopener noreferrer">💬 WhatsApp Kami</Link>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Produk Terkait</h4>
          <ul style={{"display":"flex","flexDirection":"column","gap":".65rem"}}>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/ro-industri">→ Sistem RO Industri</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/ozon">→ Ozon Generator</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/uv">→ UV Sterilizer</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/membran">→ Membran RO Dow Filmtec</Link></li>
            <li><Link style={{"fontSize":".84rem","fontWeight":"600","color":"var(--blue)","display":"block"}} to="/produk">→ Semua Produk</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem]" style={{"background":"linear-gradient(145deg,var(--navy),var(--blue))","border":"none"}}>
          <h4 style={{"color":"rgba(255,255,255,.45)","borderColor":"rgba(255,255,255,.15)"}}>Konsultasi Lini AMDK</h4>
          <p style={{"fontSize":".86rem","opacity":".84","color":"#fff","lineHeight":"1.65","marginBottom":"1rem"}}>Diskusi awal gratis dengan engineer TSM untuk merencanakan pabrik AMDK Anda.</p>
          <Link href="tel:+62818719119" className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center","fontSize":".82rem"}}>📞 021-88871689</Link>
        </div>
      </aside>
    </div>
  </div>

        <div className="info-box" style={{"marginTop":"2rem"}}>
          <strong>📚 Baca Juga</strong>
          <ul style={{"marginTop":".75rem","paddingLeft":"1.2rem"}}>
            <li><Link to="/produk/ozon">⚡ Ozon Generator untuk Disinfeksi AMDK</Link></li>
            <li><Link to="/produk/uv">💡 UV Sterilizer untuk Air Minum</Link></li>
            <li><Link to="/produk/ro-industri"><Factory className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Sistem RO Industri</Link></li>
            <li><Link to="/industri/manufaktur"><Factory className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Solusi Industri Manufaktur</Link></li>
            <li><Link to="/kalkulator"><Calculator className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Hitung Kebutuhan Sistem Anda</Link></li>
          </ul>
        </div>

</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Siap Memulai Pabrik AMDK Anda?</h2>
    <p>Tim engineer TSM siap mendiskusikan rencana bisnis Anda dan merekomendasikan lini produksi yang tepat.</p>
    <div className="flex gap-4 justify-center flex-wrap"><Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak"><ClipboardList className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Konsultasi Gratis</Link><Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/layanan"><Wrench className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Lihat Layanan Kami</Link></div>
  </div>
</div>

    </>
  );
};

export default ProdukAmdk;
