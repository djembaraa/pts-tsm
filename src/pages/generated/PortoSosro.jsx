import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList } from 'lucide-react';


const PortoSosro = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/portofolio">Portofolio</Link> › Studi Kasus</div>
    <h1>PT Sosro: BWRO + UF 30 m³/jam untuk Industri Minuman Berskala Nasional</h1>
    <p>Klien: <strong>PT Sinar Sosro</strong> &nbsp;·&nbsp; Kategori: BWRO + UF — Industri Minuman</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>

        <div className="cs-hero ">
          <picture>
            <source srcSet="images/porto-sosro-1.webp" type="image/webp" />
            <img src="images/porto-sosro-1.jpg" alt="PT Sosro: BWRO + UF 30 m³/jam untuk Industri Minuman Berskala Nasional" />
          </picture>
          <div className="cs-overlay">
            <h2>PT Sinar Sosro</h2>
          </div>
        </div>

        <div className="cs-stats">
      <div className="cs-stat "><div className="num">30</div><div className="lbl">m³/jam kapasitas</div></div>
      <div className="cs-stat "><div className="num">99%</div><div className="lbl">rejection rate</div></div>
      <div className="cs-stat "><div className="num">24/7</div><div className="lbl">operasi kontinu</div></div>
      <div className="cs-stat "><div className="num">Decade+</div><div className="lbl">kemitraan</div></div>
        </div>

        <table className="cs-meta-table ">
      <tbody><tr><th>Klien</th><td>PT Sinar Sosro — Produsen teh botol terbesar di Indonesia</td></tr>
      <tr><th>Lokasi</th><td>Pabrik PT Sinar Sosro — Bekasi, Jawa Barat</td></tr>
      <tr><th>Tipe Sistem</th><td>Brackish Water RO + Ultrafiltrasi (UF) — air proses produksi</td></tr>
      <tr><th>Kapasitas Produk</th><td>30 m³/jam (~720 m³/hari operasi 24 jam)</td></tr>
      <tr><th>Sumber Air</th><td>Air sumur dalam dengan TDS dan hardness fluktuatif musiman</td></tr>
      <tr><th>Kualitas Output</th><td>TDS &lt; 30 ppm, mikroba 0 CFU/100 mL — sesuai standar food grade</td></tr>
      <tr><th>Konfigurasi</th><td>Pre-treatment + UF + BWRO 2-pass + UV polishing</td></tr>
      <tr><th>Tahun Pengerjaan</th><td>November 2023 (sistem terbaru); kemitraan TSM-Sosro berlangsung lebih dari satu dekade</td></tr>
      <tr><th>Status</th><td>Aktif dengan kontrak service jangka panjang dan suplai membran rutin</td></tr>
        </tbody></table>

        <div className="prose max-w-none text-text">


        <h2 id="latar-belakang" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Latar Belakang Proyek</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">PT Sinar Sosro adalah produsen teh botol terbesar di Indonesia dan telah menjadi salah satu brand minuman ikonik nasional sejak 1974. Skala produksi yang sangat besar membutuhkan <strong>pasokan air proses dengan kualitas konsisten 24/7</strong> — air bukan sekadar utilitas, tapi bahan baku yang langsung mempengaruhi rasa, aroma, dan kualitas produk akhir.</p>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Dalam industri minuman teh, air mendominasi produk akhir (&gt;95% volume produk adalah air). Variasi sekecil apapun pada kualitas air — TDS yang fluktuatif, hardness yang mempengaruhi ekstraksi tanin, atau klorin sisa yang mengubah aroma teh — dapat berdampak signifikan pada konsistensi rasa antar batch. Inilah mengapa Sosro memilih membangun sistem water treatment dedicated dengan engineering tier-1.</p>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kemitraan TSM dengan Sosro telah berlangsung lebih dari satu dekade. Selama periode ini, TSM telah membangun, meng-upgrade, dan mendukung beberapa unit sistem RO di pabrik-pabrik Sosro, dengan suplai membran dan kimia rutin sebagai bagian dari kontrak service jangka panjang.</p>

        <h2 id="tantangan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Tantangan Industri Minuman</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Industri minuman F&amp;B memiliki persyaratan water treatment yang unik dan berbeda dari industri lain:</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">1. Konsistensi Kualitas Lintas Musim</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Air sumur Indonesia mengalami fluktuasi musiman — TDS dan hardness biasanya naik di musim kemarau ketika muka air tanah turun, dan turun di musim hujan. Sistem treatment harus mampu memberikan output yang konsisten meskipun kualitas feed berubah ±30%. Ini berarti pre-treatment yang adaptif dan kontrol RO yang pintar.</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">2. Standar Mikrobiologi Food Grade</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Produk minuman tidak boleh mengandung mikroba patogen. Sistem air proses harus mencegah biofilm di pipa distribusi, tangki, dan valve. Material kontak air harus food-grade (SS-304/316L), dan layout pipa harus dirancang untuk drainability lengkap saat sanitasi.</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">3. Operasi 24/7 dengan Tolerance Minimum Downtime</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Lini produksi minuman beroperasi continuously dengan sangat sedikit toleransi untuk shutdown air. Penghentian pasokan air tengah produksi berarti batch reject dan kerugian besar. Sistem harus dirancang dengan redundancy yang memungkinkan maintenance tanpa shutdown total.</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">4. Tidak Ada Klorin Sisa di Air Produk</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Klorin yang umumnya berfungsi sebagai disinfektan dapat bereaksi dengan polifenol teh menghasilkan rasa dan aroma yang tidak diinginkan. Sistem disinfeksi harus mengandalkan UV atau ozon yang tidak meninggalkan residu di air produk.</p>

        <h2 id="solusi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Solusi yang Diimplementasikan</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM merancang sistem BWRO + UF terintegrasi yang memenuhi semua persyaratan tersebut:</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Pre-treatment Bertingkat</h3>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Aerasi + iron-manganese removal</strong> — Untuk air sumur dengan kandungan Fe dan Mn</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Multi-media filter</strong> dual-bed pasir-antrasit dengan automatic backwash</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Karbon aktif</strong> untuk dechlorination dan penghilangan organik</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Softener duplex</strong> untuk hardness control — kritis untuk umur membran RO</li>
        </ul>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Ultrafiltrasi (UF)</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sebagai pre-treatment akhir sebelum RO, UF hollow fiber PVDF memberikan SDI &lt;3 yang konsisten dan menahan bakteri serta virus. Auto backwash setiap 30 menit dan CEB harian dengan klorin (yang kemudian di-dechlorinate sebelum RO) menjaga produktivitas membran UF stabil.</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">BWRO 2-Pass</h3>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pass 1</strong> — Membran Dow Filmtec BW30-400 dengan recovery 75% dan rejection ~99%</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pass 2</strong> — Polishing membran LPRO untuk mengejar TDS &lt;30 ppm konsisten</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>High-pressure pump</strong> Grundfos CR multi-stage dengan VFD untuk efisiensi energi</li>
        </ul>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">UV Polishing &amp; Distribution</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Output RO melewati UV sterilizer 254nm dengan dosis 60 mJ/cm² sebelum distribusi ke lini produksi. Loop distribusi menggunakan SS-316L sanitary dengan velocity 1,5-2 m/s untuk mencegah biofilm. Tidak ada dead-leg yang memungkinkan stagnasi.</p>

        <h2 id="hasil" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Hasil &amp; Dampak Operasional</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem BWRO + UF di pabrik Sosro telah beroperasi konsisten dengan hasil sebagai berikut:</p>

        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Konsistensi kualitas</strong> — TDS output 25-30 ppm year-round, tidak ada variasi yang dapat dideteksi rasa antar batch produk</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Mikrobiologi</strong> — 0 CFU/100 mL di semua user point selama operasi, lulus audit sanitasi rutin Sosro</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Availability</strong> — &gt;99% — kontrak service preventive memastikan tidak ada unplanned downtime</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Penghematan biaya</strong> — Konfigurasi 2-pass dengan recovery tinggi menurunkan konsumsi air baku dibanding sistem RO biasa</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Umur membran</strong> — 6-7 tahun konsisten, dengan suplai membran rutin oleh TSM sebagai bagian dari kontrak</li>
        </ul>

        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Yang lebih penting dari angka teknis: <strong>kemitraan jangka panjang yang stabil</strong>. TSM tidak hanya menjadi vendor sistem, tetapi <strong>partner teknologi water treatment</strong> Sosro yang membantu mereka mempertahankan kualitas brand selama lebih dari satu dekade.</p>

        <h2 id="lessons-learned" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Lessons Learned untuk Industri Minuman</h2>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>UF sebagai pre-treatment standar untuk F&amp;B</strong> — UF menggantikan multi-media filter konvensional + cartridge filter dengan kualitas yang jauh lebih konsisten dan SDI yang lebih rendah.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>2-pass RO untuk konsistensi rasa</strong> — Untuk industri minuman premium, investasi tambahan untuk pass 2 RO terbayar dari konsistensi rasa antar batch dan menurunnya rework batch yang gagal QC.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>UV bukan ozon untuk teh dan kopi</strong> — Ozon dapat oksidasi polifenol yang menjadi citra teh; UV adalah pilihan disinfeksi yang lebih netral untuk produk berbasis ekstraksi tanaman.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kontrak service jangka panjang</strong> — Untuk industri 24/7, nilai utama bukan hanya peralatan tapi keandalan operasional. Service contract dengan SLA tegas dan suplai consumable rutin adalah investment yang masuk akal.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Audit-ready documentation</strong> — Industri F&amp;B besar di-audit rutin (internal QA, BPOM, customer audit). Sistem yang dibangun TSM datang dengan dokumentasi lengkap yang siap untuk audit.</li>
        </ul>
    

          <h2 id="galeri" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Galeri Foto Proyek</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Foto sistem dan instalasi di lokasi:</p>
          <div className="cs-gallery ">
      <picture><source srcSet="images/porto-sosro-1.webp" type="image/webp" /><img src="images/porto-sosro-1.jpg" alt="Sistem BWRO PT Sosro tampak depan"  loading="lazy" /></picture>
      <picture><source srcSet="images/porto-sosro-2.webp" type="image/webp" /><img src="images/porto-sosro-2.jpg" alt="Modul UF hollow fiber untuk pre-treatment"  loading="lazy" /></picture>
      <picture><source srcSet="images/porto-sosro-3.webp" type="image/webp" /><img src="images/porto-sosro-3.jpg" alt="Pressure vessel BWRO 8040 multi-stage"  loading="lazy" /></picture>
      <picture><source srcSet="images/porto-sosro-4.webp" type="image/webp" /><img src="images/porto-sosro-4.jpg" alt="High-pressure pump dan piping stainless steel"  loading="lazy" /></picture>
      <picture><source srcSet="images/porto-sosro-5.webp" type="image/webp" /><img src="images/porto-sosro-5.jpg" alt="Panel kontrol dengan HMI sentuh"  loading="lazy" /></picture>
      <picture><source srcSet="images/porto-sosro-6.webp" type="image/webp" /><img src="images/porto-sosro-6.jpg" alt="Ruang sistem RO terintegrasi"  loading="lazy" /></picture>
          </div>

<h2 id="faq-sosro" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa beda BWRO untuk Sosro dengan RO industri biasa?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tiga perbedaan utama: (1) Material food-grade — semua kontak air SS-304/316L sanitary, gasket FKM food-grade. (2) Konfigurasi 2-pass untuk konsistensi rasa — RO biasa cukup 1-pass. (3) Disinfeksi UV bukan klorin/ozon karena residual bisa mempengaruhi rasa teh. Plus dokumentasi food safety yang siap untuk audit BPOM dan customer audit.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa lama umur membran RO di sistem F&amp;B yang beroperasi 24/7?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Dengan pre-treatment lengkap (UF + softener) dan kimia anti-scalant tepat, membran Dow Filmtec di sistem Sosro bertahan 6-7 tahun konsisten — di atas rata-rata industri yang typical 4-5 tahun. Kunci: pre-treatment yang tidak under-designed dan operating condition yang stabil.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Bagaimana TSM menangani fluktuasi kualitas air sumur musiman?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tiga lapis: (1) Pre-treatment yang dirancang dengan margin untuk worst-case (musim kemarau dengan TDS dan hardness tertinggi). (2) Antiscalant dosing yang otomatis disesuaikan berdasarkan reading conductivity. (3) Recovery RO yang dapat di-adjust antara 70-80% sesuai kualitas feed. Operator hanya perlu input hasil analisis air bulanan dan sistem otomatis menyesuaikan.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah sistem ini cocok untuk pabrik minuman/F&amp;B lain?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sangat cocok untuk produk yang sensitif terhadap kualitas air: teh, kopi, sari buah, jus, susu, kecap, saus. Untuk produk yang lebih toleran terhadap variasi air (mineral water, bir), konfigurasi dapat lebih sederhana. Setiap proyek F&amp;B kami dimulai dengan analisis spesifik produk dan target sensorik.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa biaya investasi sistem ini untuk pabrik F&amp;B menengah?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk kapasitas 10-30 m³/jam dengan pre-treatment lengkap, UF, BWRO 2-pass, dan UV polishing: investasi sekitar Rp 1,5-3,5 milyar tergantung level otomasi dan brand komponen. ROI biasanya 4-6 tahun dari penghematan biaya treatment kimia, peningkatan konsistensi produk, dan pengurangan reject batch.</p>


          <div style={{"marginTop":"2rem","padding":"2rem","background":"var(--ice)","borderRadius":"12px","borderLeft":"4px solid var(--accent)"}}>
            <h3 style={{"marginBottom":".75rem","color":"var(--navy)"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Tertarik Solusi Serupa untuk Operasi Anda?</h3>
            <p style={{"marginBottom":"1.25rem","color":"var(--muted)","fontSize":".92rem"}} className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tim engineering TSM siap mendiskusikan kebutuhan water treatment Anda dengan referensi proyek serupa yang sudah terbukti. Konsultasi awal gratis tanpa komitmen.</p>
            <Link style={{"display":"inline-block","padding":".85rem 2rem","background":"var(--blue)","color":"#fff","borderRadius":"8px","fontWeight":"700","fontSize":".96rem"}} to="/kontak"><ClipboardList className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Konsultasi Proyek Anda →</Link>
          </div>

        </div>
      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#latar-belakang">Latar Belakang</Link></li>
            <li><Link href="#tantangan">Tantangan Industri Minuman</Link></li>
            <li><Link href="#solusi">Solusi Implementasi</Link></li>
            <li><Link href="#hasil">Hasil &amp; Dampak</Link></li>
            <li><Link href="#lessons-learned">Lessons Learned</Link></li>
            <li><Link href="#faq-sosro">FAQ</Link></li>
            <li><Link href="#galeri">Galeri Foto</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Produk Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/produk/ro-industri">→ Sistem RO Industri</Link></li>
            <li><Link to="/produk/uf">→ Ultrafiltrasi (UF)</Link></li>
            <li><Link to="/produk/uv">→ UV Sterilizer</Link></li>
            <li><Link to="/produk/membran">→ Membran BWRO</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Artikel &amp; Industri Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/artikel/studi-kasus-ro-tekstil">→ Studi Kasus: RO untuk Tekstil</Link></li>
            <li><Link to="/industri/manufaktur">→ Solusi Industri Manufaktur</Link></li>
            <li><Link to="/portofolio">→ Lihat Semua Portfolio</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>
<div className="lb" id="lightbox" >
  <button className="lb-close" >×</button>
  <img id="lbImg" src="/images/placeholder.webp" alt="" />
</div>

    </>
  );
};

export default PortoSosro;
