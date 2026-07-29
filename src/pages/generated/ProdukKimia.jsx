import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, Wrench, Factory, Calculator, Microscope } from 'lucide-react';


const ProdukKimia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/produk">Produk &amp; Solusi</Link> › Kimia</div>
    <h1>Kimia Water Treatment Indonesia</h1>
    <p>Bahan kimia water treatment berkualitas tinggi: antiscalant, biocide, CIP chemicals, pH adjustment, dan koagulan untuk berbagai aplikasi sistem pengolahan air.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[3rem] items-start">
      <div>
        <div className="h-[300px] rounded-[14px] flex items-center justify-center text-[8rem] mb-[2rem] text-white " style={{"background":"none","padding":"0","height":"auto","display":"block"}}><picture>
  <source srcSet="images/produk-bwro-industri.webp" type="image/webp" />
  <img src="images/produk-bwro-industri.jpg" alt="Kimia water treatment antiscalant, biocide, dan CIP cleaner untuk industri Indonesia" style={{"width":"100%","height":"auto","maxHeight":"480px","objectFit":"cover","borderRadius":"14px","display":"block"}} />
</picture></div>
        
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p>Kimia water treatment yang tepat adalah penentu umur dan performa sistem RO Anda. PT Tirta Sumber Makmur menyediakan rangkaian lengkap <strong>kimia water treatment industri</strong>: antiscalant, biocide, CIP (Clean-in-Place) cleaner, koagulan, flokulan, pH adjuster, dan dechlorinator — semuanya dengan dokumentasi MSDS, certificate of analysis (CoA), dan rekomendasi dosis spesifik untuk aplikasi Anda.</p>
<p>TSM tidak menjual kimia generic — kami merekomendasikan formula yang sudah teruji untuk kondisi air Indonesia: hardness tinggi air sumur Jawa, silika tinggi air permukaan Sumatra, organik tinggi air gambut Kalimantan, hingga fouling biologis tinggi air laut tropis. Pelanggan kami mencakup PT Sosro, APP, Pelindo, hingga fasilitas farmasi bersertifikat CPOB yang membutuhkan dokumentasi kimia food-grade dan pharma-grade.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Jenis Kimia &amp; Aplikasinya</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p>Setiap masalah air membutuhkan solusi kimia yang berbeda. Berikut kategori utama kimia water treatment yang TSM suplai:</p>
<ul style={{"paddingLeft":"1.4rem","margin":".8rem 0"}}>
  <li style={{"marginBottom":".5rem"}}><strong>Antiscalant</strong> — Mencegah pengendapan kalsium karbonat, kalsium sulfat, dan silika di permukaan membran RO. Dosis tipikal 2–6 mg/L tergantung Langelier Saturation Index air baku. Tanpa antiscalant, scaling dapat merusak membran dalam beberapa bulan.</li>
  <li style={{"marginBottom":".5rem"}}><strong>Biocide / Anti-microbial</strong> — Mengontrol pertumbuhan bakteri dan biofilm di membran dan tangki. Ada non-oxidizing (DBNPA, isothiazolinone) untuk membran sensitif dan oxidizing (klorin, kloramin, monokloramin) untuk pre-treatment.</li>
  <li style={{"marginBottom":".5rem"}}><strong>CIP Chemicals</strong> — Untuk pembersihan periodik membran yang sudah ter-fouled. Alkali (NaOH + EDTA) untuk fouling organik dan biofilm; asam (HCl + asam sitrat) untuk scaling mineral.</li>
  <li style={{"marginBottom":".5rem"}}><strong>Koagulan &amp; Flokulan</strong> — PAC (Poli Aluminium Klorida) atau FeCl₃ untuk pre-treatment air keruh; polimer kationik/anionik untuk floktulasi.</li>
  <li style={{"marginBottom":".5rem"}}><strong>pH Adjuster</strong> — NaOH (caustic) atau H₂SO₄/HCl untuk koreksi pH air baku atau air produk sesuai kebutuhan downstream.</li>
  <li style={{"marginBottom":".5rem"}}><strong>Dechlorinator</strong> — SMBS (Sodium Metabisulfite) untuk menghilangkan klorin sisa sebelum membran RO (klorin merusak membran polyamide).</li>
</ul>
</div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Spesifikasi Teknis</h2>
        <table className="w-full border-collapse my-[1.5rem] text-[0.9rem] ">
          <tbody><tr><td>Antiscalant</td><td>Liquid / Powder, dosing 2–5 ppm</td></tr>
          <tr><td>Biocide</td><td>Non-oksidatif, kompatibel membran</td></tr>
          <tr><td>CIP Acid</td><td>pH 2–3, menghilangkan scaling mineral</td></tr>
          <tr><td>CIP Alkaline</td><td>pH 11–12, menghilangkan fouling organik</td></tr>
          <tr><td>pH Adjustment</td><td>H2SO4, NaOH, CO2 food grade</td></tr>
          <tr><td>Packaging</td><td>Jerigen 20L, Drum 200L, IBC 1000L</td></tr>
        </tbody></table>
        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Fitur Utama</h2>
        <ul className="flex flex-col text-[0.9rem] text-text ">
          <li>Formulasi khusus untuk sistem membran RO</li>
          <li>Antiscalant broad-spectrum (CaCO3, CaSO4, BaSO4, SiO2)</li>
          <li>Biocide non-oksidatif aman untuk membran TFC</li>
          <li>CIP chemicals siap pakai dengan panduan penggunaan</li>
          <li>Konsultasi dosis oleh engineer berpengalaman</li>
          <li>MSDS dan COA tersedia untuk setiap produk</li>
          <li>Pengujian kompatibilitas kimia tersedia</li>
          <li>Pengiriman ke seluruh Indonesia</li>
        </ul>
        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt-sm">Aplikasi</h2>
        <div className="flex flex-wrap gap-2 mt-[0.8rem] ">
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Sistem RO industri dan komersial</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Pre-treatment dan post-treatment</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Cooling tower water treatment</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Boiler water treatment</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Sistem UF dan NF</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Sistem desalinasi SWRO</span>
        </div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Keunggulan Kimia TSM</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p>Yang membedakan TSM dari supplier kimia generic adalah pendekatan engineering bukan sekadar perdagangan:</p>
<ul style={{"paddingLeft":"1.4rem","margin":".8rem 0"}}>
  <li style={{"marginBottom":".55rem"}}><strong>Rekomendasi berbasis analisis air</strong> — Kami tidak akan menjual antiscalant tertentu sebelum tahu hasil analisis air baku Anda. Dosis dan jenis kimia harus disesuaikan, bukan satu-formula-untuk-semua.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Sertifikat &amp; dokumentasi lengkap</strong> — MSDS, CoA, dan halal/food-grade certificate untuk klien yang membutuhkan. Penting untuk industri makanan-minuman dan farmasi.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Konsultasi dosing optimal</strong> — Tim TSM memantau performa kimia melalui parameter sistem (TDS rejection, pressure differential, recovery) dan menyesuaikan dosis untuk efisiensi maksimal.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Stok regional</strong> — Stok tersedia di Bekasi untuk Jawa, plus jaringan supply ke Sumatra, Kalimantan, dan Sulawesi.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Layanan CIP on-site</strong> — Untuk membran yang sudah severe fouling, TSM menyediakan tim teknisi yang melakukan CIP on-site dengan kimia dan SOP yang tepat — recovery membran biasanya kembali 90%+ dari kondisi baru.</li>
</ul>
</div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Kasus Penggunaan</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p><strong>Antiscalant Custom untuk Air Sumur Hardness Tinggi</strong> — Pabrik di Karawang dengan hardness air baku 600 ppm dan silika 80 ppm sebelumnya mengalami scaling membran setiap 6 bulan. TSM merekomendasikan antiscalant berbasis fosfonat dengan dosis 4 mg/L. Setelah 18 bulan, tidak ada scaling signifikan dan recovery sistem stabil di 75%.</p>
<p><strong>CIP Recovery di PT Sosro</strong> — Sistem RO Sosro mengalami penurunan recovery dari 75% ke 58% akibat fouling organik dari air baku PDAM yang berfluktuasi musiman. CIP dengan alkali + EDTA + biocide oleh tim TSM mengembalikan recovery ke 73% — vs alternatif penggantian membran yang biayanya 5x lebih besar.</p>
</div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Pertanyaan yang Sering Ditanyakan</h2>
<div className="" style={{"fontSize":".94rem","lineHeight":"1.75","color":"var(--text)"}}>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Bagaimana cara memilih antiscalant yang tepat?</h3>
<p>Pilihan tergantung pada ion yang menjadi kendala scaling. Untuk CaCO₃ dominan: antiscalant fosfonat. Untuk silika tinggi: antiscalant khusus silica-stabilizer. Untuk recovery sangat tinggi (&gt;80%): blended antiscalant. TSM menggunakan software simulasi (ROSA, IMSDesign, Toray DS3) untuk menentukan formula tepat.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah kimia TSM food-grade untuk industri makanan?</h3>
<p>Ya, untuk klien makanan-minuman dan farmasi, TSM menyediakan kimia bersertifikat NSF/ANSI 60 (drinking water) atau food-grade dari produsen yang sudah teregistrasi. Sertifikat lengkap diserahkan dengan setiap pengiriman.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa biaya kimia operasional rata-rata sistem RO?</h3>
<p>Untuk RO industri 100 m³/hari, biaya kimia rata-rata Rp 8–15 juta per bulan: antiscalant 60%, biocide 20%, CIP chemicals 15%, lainnya 5%. Variasi tergantung kualitas air baku — semakin sulit, semakin mahal.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah bisa beli kimia tanpa sistem dari TSM?</h3>
<p>Bisa. Banyak klien yang sistem RO-nya bukan dari TSM tetap membeli kimia dari kami karena kualitas dan dukungan teknis. Kami tetap memberikan konsultasi dosing berdasarkan analisis air dan parameter sistem yang Anda berikan.</p>

<h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah TSM bisa supply kontrak jangka panjang?</h3>
<p>Ya. Untuk pelanggan dengan kebutuhan rutin, TSM menawarkan kontrak suplai 1–3 tahun dengan harga tetap, jaminan stok, dan delivery scheduled. Termasuk monitoring kinerja kimia dan penyesuaian formula jika kondisi air berubah.</p>
<p style={{"marginTop":"1.2rem"}}>Kimia water treatment yang tepat menentukan apakah sistem RO Anda akan beroperasi optimal selama 7 tahun atau bermasalah dalam 7 bulan. Konsultasikan analisis air baku dan kebutuhan kimia Anda dengan tim TSM untuk mendapatkan rekomendasi formula yang akurat dan harga distributor.</p>
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
            <li><Link to="/produk/membran"><Microscope className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Elemen Membran RO, NF, UF</Link></li>
            <li><Link to="/produk/ro-industri"><Factory className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Sistem RO Industri</Link></li>
            <li><Link to="/artikel/5-kesalahan-perawatan-ro">⚠️ 5 Kesalahan Umum dalam Perawatan RO</Link></li>
            <li><Link to="/layanan"><Wrench className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Layanan Servis &amp; CIP</Link></li>
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

export default ProdukKimia;
