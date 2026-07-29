import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList } from 'lucide-react';


const PortoPulauAyer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/portofolio">Portofolio</Link> › Studi Kasus</div>
    <h1>Resort Pulau Ayer: SWRO 76 m³/hari untuk Kemandirian Air di Kepulauan Seribu</h1>
    <p>Klien: <strong>Resort Pulau Ayer — Kepulauan Seribu</strong> &nbsp;·&nbsp; Kategori: SWRO Kepulauan — Hospitality Resort</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>

        <div className="cs-hero ">
          <picture>
            <source srcSet="images/porto-pulau-ayer-1.webp" type="image/webp" />
            <img src="images/porto-pulau-ayer-1.jpg" alt="Resort Pulau Ayer: SWRO 76 m³/hari untuk Kemandirian Air di Kepulauan Seribu" />
          </picture>
          <div className="cs-overlay">
            <h2>Resort Pulau Ayer — Kepulauan Seribu</h2>
          </div>
        </div>

        <div className="cs-stats">
      <div className="cs-stat "><div className="num">76</div><div className="lbl">m³/hari kapasitas</div></div>
      <div className="cs-stat "><div className="num">100%</div><div className="lbl">kemandirian air</div></div>
      <div className="cs-stat "><div className="num">Kontainer</div><div className="lbl">deployment</div></div>
      <div className="cs-stat "><div className="num">Resort</div><div className="lbl">kepulauan premium</div></div>
        </div>

        <table className="cs-meta-table ">
      <tbody><tr><th>Klien / Pengelola Proyek</th><td>PT Mako Anugerah Kreasindo (vendor pengelola), untuk fasilitas resort di Pulau Ayer Kepulauan Seribu, Provinsi DKI Jakarta</td></tr>
      <tr><th>Lokasi</th><td>Pulau Ayer, Kepulauan Seribu (sekitar 1,5 jam perjalanan kapal dari Jakarta)</td></tr>
      <tr><th>Tipe Sistem</th><td>Sea Water Reverse Osmosis (SWRO) — kontainer-mounted</td></tr>
      <tr><th>Kapasitas Produk</th><td>76 m³/hari — cukup untuk operasional resort 100+ kamar</td></tr>
      <tr><th>Sumber Air</th><td>Air laut Kepulauan Seribu (TDS ~33.000 ppm)</td></tr>
      <tr><th>Kualitas Output</th><td>TDS &lt; 200 ppm, layak minum tamu resort, taste optimal setelah remineralisasi</td></tr>
      <tr><th>Konfigurasi</th><td>Pre-treatment + UF + SWRO + ERD + Remineralisasi — semua dalam kontainer</td></tr>
      <tr><th>Deployment</th><td>Pengiriman via kapal dari Jakarta, instalasi 5 hari, commissioning 1 minggu</td></tr>
      <tr><th>Tahun Pengerjaan</th><td>Januari 2024</td></tr>
      <tr><th>Status</th><td>Aktif beroperasi</td></tr>
        </tbody></table>

        <div className="prose max-w-none text-text">


        <h2 id="latar-belakang" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Latar Belakang Proyek</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pulau Ayer adalah salah satu resort populer di Kepulauan Seribu, melayani wisatawan domestik dan internasional yang mencari pengalaman tropical island getaway dekat dengan Jakarta. Sebagai resort dengan kapasitas 100+ kamar plus restaurant, kolam renang, dan fasilitas pendukung, kebutuhan air harian sangat besar — namun pulau-pulau di Kepulauan Seribu <strong>tidak memiliki sumber air tawar alami</strong> yang dapat dimanfaatkan dalam volume komersial.</p>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sebelumnya, resort bergantung pada <strong>pengiriman air kapal mingguan dari Jakarta</strong> — solusi yang costly, fluktuatif, dan rentan terhadap cuaca buruk. Saat angin kencang atau gelombang tinggi, pengiriman air dapat tertunda, memaksa resort untuk meminta tamu menghemat penggunaan atau bahkan menutup sebagian fasilitas. Selain itu, biaya transportasi air dari daratan dapat mencapai <strong>ratusan juta rupiah per tahun</strong> hanya untuk satu pulau.</p>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Manajemen resort akhirnya memutuskan investasi sistem SWRO mandiri untuk membebaskan operasional dari ketergantungan pengiriman air. TSM dipilih sebagai vendor berdasarkan track record dengan resort kepulauan lain dan kemampuan delivery sistem kontainer plug-and-play yang ideal untuk kondisi pulau.</p>

        <h2 id="tantangan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Tantangan Pulau Terpencil</h2>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">1. Logistik Pengiriman ke Pulau</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Setiap komponen — dari sistem SWRO utama hingga sekrup terkecil — harus dikirim ke pulau via kapal. Sistem permanen yang dirakit di lokasi (membutuhkan pengiriman individual setiap komponen) sangat impractical karena <strong>setiap pengiriman tergantung cuaca dan kapasitas kapal</strong>. Solusi yang efektif adalah <strong>kontainer plug-and-play</strong> — sistem lengkap dirakit dan dites di workshop TSM Bekasi, kemudian dikirim sebagai satu unit kontainer 40 ft.</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">2. Tidak Ada Engineer Permanen di Pulau</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Resort memiliki staff engineering general untuk maintenance umum, tapi tidak ada water treatment specialist permanen. Sistem harus dirancang untuk <strong>operasi semi-otomatis</strong> dengan minimum supervisi, plus <strong>remote monitoring</strong> agar tim TSM di Jakarta dapat memantau kinerja dan memberikan support technical jarak jauh.</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">3. Power Supply Terbatas</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pulau Ayer mengandalkan <strong>genset diesel</strong> sebagai sumber listrik utama — tidak ada PLN. Sistem SWRO harus dirancang efisien (low kWh/m³) dan dapat beroperasi pada listrik genset yang variability voltage dan frequency-nya lebih lebar dari grid PLN.</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">4. Estetika untuk Resort Premium</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem SWRO biasanya berbentuk industrial — tidak cocok untuk dilihat tamu resort. Kontainer harus diposisikan di area servis tersembunyi, dan operating noise harus rendah agar tidak mengganggu pengalaman tamu di area sekitar.</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">5. Kualitas Output untuk Hospitality Premium</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tamu resort premium memiliki ekspektasi tinggi terhadap kualitas air — tidak hanya safe drinkable, tapi juga taste yang optimal. Air RO langsung dari membran terasa hambar (TDS &lt;30 ppm) dan korosif untuk pipa logam. Output harus <strong>direkalsifikasi (Ca + Mg ditambahkan)</strong> hingga TDS 80-150 ppm dengan taste segar.</p>

        <h2 id="solusi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Solusi yang Diimplementasikan</h2>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Sistem Kontainer 40 ft Plug-and-Play</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM merakit semua komponen sistem dalam <strong>kontainer 40 ft ISO standard</strong>: pre-treatment, RO, post-treatment, control panel, electrical distribution, dan piping internal. Kontainer dilengkapi:</p>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Insulation termal &amp; akustik untuk operasi senyap (&lt;65 dB pada 1m)</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Lighting LED dan ventilasi forced</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Drainage point dan eyewash station untuk safety</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Eksterior cat marine 3-layer untuk tahan salt-spray</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Window panel untuk inspection visual saat operasi</li>
        </ul>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pengiriman: kontainer dimuat ke kapal di Jakarta, di-offload di Pulau Ayer, dipindahkan ke lokasi instalasi dengan crane, kemudian disambung ke 3 koneksi: <strong>(1) intake air laut, (2) discharge air produk, (3) listrik genset</strong>. Total waktu dari delivery hingga sistem produksi air: 5 hari.</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Konfigurasi Teknis</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem 76 m³/hari (~3,2 m³/jam continuous) dengan konfigurasi:</p>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pre-treatment</strong> — Sea chest filter + multi-media filter + cartridge 5 µm + UF hollow fiber compact</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>SWRO</strong> — High-pressure pump Danfoss APP, vessel SS-316L dengan Dow Filmtec SW30HRLE-440i, ERD turbocharger</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Recovery</strong> — 38% — optimal balance antara efisiensi energi dan biaya membran</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Post-treatment</strong> — Calcite remineralizer, dosing CO₂, UV sterilizer 254nm</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Storage</strong> — Tank fiber 50 m³ untuk buffer 16 jam konsumsi resort</li>
        </ul>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Remote Monitoring 24/7</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem dilengkapi <strong>IoT gateway dengan modem 4G</strong> (sinyal Telkomsel di Pulau Ayer cukup baik) yang mengirim data ke cloud dashboard yang dapat diakses tim TSM di Jakarta. Parameter yang di-trend: TDS produk, recovery, pressure differential, flow rate, dan status alarm. Saat ada anomali, alert WhatsApp otomatis ke tim teknis on-call.</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Training Operator Resort</h3>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tim engineering resort menjalani training 5 hari intensif: operasi harian, sampling kualitas air, troubleshooting basic, dan SOP emergency. Plus dokumentasi O&amp;M lengkap dalam Bahasa Indonesia dan kontak hotline 24/7 ke TSM jika butuh support.</p>

        <h2 id="hasil" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Hasil &amp; Dampak Operasional</h2>

        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kemandirian air</strong> — Resort tidak lagi bergantung pada pengiriman air kapal sejak commissioning</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Penghematan biaya</strong> — Pemotongan biaya transportasi air signifikan; ROI tercapai dalam 3-4 tahun untuk pulau dengan biaya pengiriman air tinggi</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kualitas air</strong> — TDS produk konsisten 120-150 ppm, taste segar, mendapat positive feedback dari tamu</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Reliability</strong> — &gt;97% availability dengan service preventive 6-bulanan oleh tim TSM</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Footprint compact</strong> — Satu kontainer 40 ft + storage tank — area servis minimal yang tidak mengganggu lay-out resort</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Operability</strong> — Tim engineering resort dapat operasi mandiri, support TSM hanya untuk masalah complex (rare)</li>
        </ul>

        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Yang lebih penting dari angka teknis: <strong>kebebasan operasional resort dari ketergantungan eksternal</strong>. Saat cuaca buruk dan kapal pengirim tidak dapat menyeberang, resort tetap dapat beroperasi normal dengan air yang dihasilkan sendiri dari laut.</p>

        <h2 id="lessons-learned" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Lessons Learned untuk Resort Kepulauan</h2>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kontainer plug-and-play adalah game-changer</strong> untuk pulau terpencil — engineering quality workshop + delivery time minimal di lapangan.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Remote monitoring adalah mandatory</strong> — pulau yang tidak punya engineer water treatment permanen butuh "remote engineer" dari Jakarta yang dapat memantau dan support 24/7.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Genset compatibility</strong> — Sistem SWRO untuk pulau harus di-design untuk listrik genset yang tidak se-stable PLN. VFD dengan input voltage range lebar dan UPS untuk panel kontrol mencegah false alarm.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Remineralisasi untuk hospitality</strong> — Tamu resort tidak akan toleran air "hambar" RO langsung. Investasi remineralisasi terbayar dari guest satisfaction.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Acoustic isolation untuk lokasi sensitive</strong> — Sistem dengan operating noise &lt;65 dB pada 1 meter dapat ditempatkan dekat area tamu tanpa mengganggu.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Service contract jangka panjang</strong> — Pulau yang sulit dijangkau membutuhkan service contract dengan delivery membran, kimia, dan filter rutin sebagai bagian standar.</li>
        </ul>
    

          <h2 id="galeri" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Galeri Foto Proyek</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Foto sistem dan instalasi di lokasi:</p>
          <div className="cs-gallery ">
      <picture><source srcSet="images/porto-pulau-ayer-1.webp" type="image/webp" /><img src="images/porto-pulau-ayer-1.jpg" alt="Sistem SWRO Pulau Ayer — instalasi resort"  loading="lazy" /></picture>
      <picture><source srcSet="images/porto-pulau-ayer-2.webp" type="image/webp" /><img src="images/porto-pulau-ayer-2.jpg" alt="Detail vessel SWRO dan pre-treatment"  loading="lazy" /></picture>
      <picture><source srcSet="images/porto-pulau-ayer-3.webp" type="image/webp" /><img src="images/porto-pulau-ayer-3.jpg" alt="Panel kontrol dengan HMI sentuh"  loading="lazy" /></picture>
      <picture><source srcSet="images/porto-pulau-ayer-4.webp" type="image/webp" /><img src="images/porto-pulau-ayer-4.jpg" alt="High-pressure pump dan ERD compact"  loading="lazy" /></picture>
      <picture><source srcSet="images/porto-pulau-ayer-5.webp" type="image/webp" /><img src="images/porto-pulau-ayer-5.jpg" alt="Storage tank air produk siap distribusi"  loading="lazy" /></picture>
      <picture><source srcSet="images/porto-pulau-ayer-6.webp" type="image/webp" /><img src="images/porto-pulau-ayer-6.jpg" alt="Sistem remineralisasi dan UV polishing"  loading="lazy" /></picture>
      <picture><source srcSet="images/porto-pulau-ayer-7.webp" type="image/webp" /><img src="images/porto-pulau-ayer-7.jpg" alt="Pemandangan instalasi di area pulau"  loading="lazy" /></picture>
      <picture><source srcSet="images/porto-pulau-ayer-8.webp" type="image/webp" /><img src="images/porto-pulau-ayer-8.jpg" alt="Sistem secara keseluruhan terintegrasi"  loading="lazy" /></picture>
          </div>

<h2 id="faq-pulau-ayer" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa investasi awal sistem SWRO untuk resort pulau?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk resort 100+ kamar dengan kebutuhan 50-100 m³/hari (mirip Pulau Ayer), investasi sistem SWRO kontainer berkisar Rp 2,5-5 milyar tergantung level otomasi dan brand komponen. Termasuk: pengiriman ke pulau, instalasi, commissioning, training operator, dan dokumentasi. ROI typical 3-5 tahun dari penghematan biaya transportasi air.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa lama proses dari pemesanan hingga sistem produksi air?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Total waktu sekitar 8-12 minggu: engineering &amp; procurement (3 minggu), assembly &amp; FAT di workshop Bekasi (4 minggu), pengiriman ke pulau (1-2 minggu tergantung cuaca dan kapal), instalasi &amp; commissioning di lokasi (1-2 minggu). Untuk pulau yang lebih jauh (Maluku, NTT, Papua), tambahan waktu pengiriman 2-4 minggu.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah sistem dapat beroperasi sepenuhnya pada listrik genset?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ya. Sistem dirancang untuk operasi pada listrik genset dengan auto-restart saat genset menyala dan graceful shutdown saat genset off. UPS 30 menit mempertahankan panel kontrol selama transition genset switching. Untuk operasi off-grid jangka panjang, opsi hybrid solar + battery + genset dapat dipertimbangkan untuk pulau dengan investasi awal lebih tinggi tapi opex lebih rendah.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Bagaimana jika sistem rusak di pulau dan butuh repair?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tiga lapis support: (1) Tim engineering resort dapat troubleshoot basic dengan training dan dokumentasi yang TSM berikan. (2) Remote support TSM via WhatsApp dan teleconference dapat diagnose 80% masalah dan guide repair. (3) Untuk repair major, tim TSM dapat dimobilisasi ke pulau dalam 2-5 hari tergantung lokasi. Spare parts kit onboard mengcover kebutuhan repair minor.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah cocok untuk pulau yang lebih kecil (10-30 m³/hari)?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sangat cocok. Untuk kebutuhan 10-30 m³/hari, sistem dapat dikemas dalam kontainer 20 ft (lebih kecil dari 40 ft). Investasi proporsional lebih rendah (Rp 1,2-2,5 milyar). Konfigurasi sama: kontainer plug-and-play, remote monitoring, training operator. Cocok untuk villa, eco-resort, atau pulau dengan kapasitas kamar lebih kecil.</p>


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
            <li><Link href="#tantangan">Tantangan Pulau</Link></li>
            <li><Link href="#solusi">Solusi Implementasi</Link></li>
            <li><Link href="#hasil">Hasil &amp; Dampak</Link></li>
            <li><Link href="#lessons-learned">Lessons Learned</Link></li>
            <li><Link href="#faq-pulau-ayer">FAQ</Link></li>
            <li><Link href="#galeri">Galeri Foto</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Produk Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/produk/desalinasi">→ SWRO Desalinasi</Link></li>
            <li><Link to="/produk/ro-mobile">→ RO Mobile / Kontainer</Link></li>
            <li><Link to="/produk/uf">→ Ultrafiltrasi (UF)</Link></li>
            <li><Link to="/produk/uv">→ UV Sterilizer</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Artikel &amp; Industri Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/artikel/desalinasi-solusi-pulau">→ Desalinasi Solusi Pulau Terpencil</Link></li>
            <li><Link to="/artikel/ro-hotel-resort">→ RO untuk Hotel &amp; Resort</Link></li>
            <li><Link to="/industri/hotel">→ Solusi Hotel &amp; Pariwisata</Link></li>
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

export default PortoPulauAyer;
