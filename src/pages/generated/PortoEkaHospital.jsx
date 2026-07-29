import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList } from 'lucide-react';


const PortoEkaHospital = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/portofolio">Portofolio</Link> › Studi Kasus</div>
    <h1>Eka Hospital Cibubur &amp; Bekasi:<br />Sistem RO Medical-Grade untuk Layanan Hemodialisis</h1>
    <p>Klien: <strong>Eka Hospital (Sinarmas Group)</strong> &nbsp;·&nbsp; Kategori: Rumah Sakit — RO Hemodialisis</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>

        <div className="cs-hero ">
          <picture>
            <source srcSet="images/foto-mesin-swro.webp" type="image/webp" />
            <img src="images/foto-mesin-swro.jpg" alt="Sistem RO untuk hemodialisis Eka Hospital medical grade" />
          </picture>
          <div className="cs-overlay">
            <h2>Eka Hospital (Sinarmas Group)</h2>
          </div>
        </div>

        <div className="client-logo ">
          <picture>
            <source srcSet="images/logo-ekahospital.webp" type="image/webp" />
            <img src="images/logo-ekahospital.png" alt="Logo Eka Hospital (Sinarmas Group)" loading="lazy" />
          </picture>
        </div>

        <div className="cs-stats">
      <div className="cs-stat "><div className="num">2 lokasi</div><div className="lbl">Cibubur &amp; Bekasi</div></div>
      <div className="cs-stat "><div className="num">1.500</div><div className="lbl">GPD per unit</div></div>
      <div className="cs-stat "><div className="num">99,9%</div><div className="lbl">rejection rate</div></div>
      <div className="cs-stat "><div className="num">AAMI RD52</div><div className="lbl">compliance</div></div>
        </div>

        <table className="cs-meta-table ">
      <tbody><tr><th>Klien</th><td>Eka Hospital (Sinarmas Group) — Cibubur &amp; Bekasi</td></tr>
      <tr><th>Vendor / Kontraktor</th><td>PT Suryatata Internusa (Jakarta)</td></tr>
      <tr><th>Tipe Sistem</th><td>Reverse Osmosis Medical Grade untuk Hemodialisis</td></tr>
      <tr><th>Kapasitas</th><td>1.500 GPD (~5,7 m³/hari) per unit, dengan unit upgrade 2.000 GPD pada 2018</td></tr>
      <tr><th>Aplikasi</th><td>Pasokan air murni untuk mesin dialisis (treatment gagal ginjal)</td></tr>
      <tr><th>Standar</th><td>ANSI/AAMI RD52 atau ISO 13959 untuk Water for Hemodialysis</td></tr>
      <tr><th>Tahun Pengerjaan</th><td>September 2018 (RO 2.000 GPD untuk Bekasi &amp; Cibubur), April 2019 (RO 1.500 GPD untuk Hemodialisis di kedua lokasi)</td></tr>
      <tr><th>Status</th><td>Aktif beroperasi dengan kontrak service jangka panjang</td></tr>
        </tbody></table>

        <div className="prose max-w-none text-text">

        <h2 id="latar-belakang" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Latar Belakang Proyek</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Eka Hospital adalah salah satu jaringan rumah sakit premium di Jabodetabek, bagian dari Sinarmas Group. Dengan dua lokasi utama di <strong>Cibubur</strong> dan <strong>Bekasi</strong>, Eka Hospital melayani ribuan pasien — termasuk pasien yang membutuhkan <strong>layanan hemodialisis (cuci darah)</strong> rutin.</p>

        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Hemodialisis adalah layanan medical kritis yang membutuhkan <strong>air dengan kemurnian sangat tinggi</strong>. Setiap pasien dialisis terkontak dengan ratusan liter air yang bercampur dengan dialisat, langsung ke aliran darah melalui membran dialyzer. Kontaminan sekecil apapun di air dapat memberikan dampak serius — dari reaksi pirogenik akibat endotoksin hingga keracunan logam berat dan kontaminan kimia.</p>

        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM dipercaya melalui <strong>PT Suryatata Internusa</strong> sebagai kontraktor untuk memasok dan menginstalasi sistem RO medical-grade untuk kedua lokasi Eka Hospital, dengan total beberapa unit selama 2018-2019.</p>

        <h2 id="standar-medical" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Standar Air untuk Hemodialisis</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Standar internasional untuk Water for Hemodialysis ditetapkan oleh <strong>ANSI/AAMI RD52</strong> (USA) dan <strong>ISO 13959</strong> (global). Indonesia mengadopsi standar serupa melalui Kementerian Kesehatan untuk fasilitas dialisis. Persyaratan kunci:</p>

        <table className="cs-meta-table">
          <tbody><tr><th>Parameter</th><th>Limit (AAMI RD52)</th></tr>
          <tr><td>Konduktivitas</td><td>&lt; 2 µS/cm</td></tr>
          <tr><td>Bakteri (CFU/mL)</td><td>&lt; 200</td></tr>
          <tr><td>Endotoksin (EU/mL)</td><td>&lt; 2</td></tr>
          <tr><td>Aluminium</td><td>&lt; 0,01 mg/L</td></tr>
          <tr><td>Klorin total</td><td>&lt; 0,1 mg/L</td></tr>
          <tr><td>Logam berat (Pb, Cd, Hg, As)</td><td>jejak (ppb level)</td></tr>
          <tr><td>Nitrat</td><td>&lt; 2 mg/L</td></tr>
          <tr><td>Sulfat</td><td>&lt; 100 mg/L</td></tr>
          <tr><td>Total Hardness</td><td>&lt; 2 mg/L (sebagai CaCO₃)</td></tr>
        </tbody></table>

        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk fasilitas Indonesia, dilakukan <strong>monitoring rutin bulanan</strong> dengan dokumentasi yang harus tersedia untuk audit Kementerian Kesehatan dan akreditasi rumah sakit (KARS).</p>

        <h2 id="konfigurasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Konfigurasi Sistem RO Medical-Grade</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Konfigurasi yang diimplementasikan untuk Eka Hospital adalah RO 2-pass dengan polishing tambahan:</p>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Pre-treatment</h3>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Multi-media filter untuk removal padatan tersuspensi</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Karbon aktif dual-stage untuk dechlorination — kritis karena membran RO sangat sensitif terhadap klorin</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Softener duplex untuk hardness control (mencegah scaling membran)</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Cartridge filter 5 µm sebagai protection sebelum RO</li>
        </ul>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">RO 2-Pass</h3>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Pass 1 — RO BWRO dengan recovery 75% dan rejection ~99,5%</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Pass 2 — Polishing membran untuk mengejar konduktivitas &lt;2 µS/cm</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">High-pressure pump multi-stage SS-316L</li>
        </ul>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Polishing &amp; Distribution</h3>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">UV sterilizer 254 nm untuk disinfeksi terminal</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Loop distribusi sanitary SS-316L dengan velocity 1,5-2 m/s konstan</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Continuous recirculation untuk mencegah biofilm</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Sample point di setiap dialisis machine untuk monitoring</li>
        </ul>

        <h2 id="kemitraan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Kemitraan dengan PT Suryatata Internusa</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">PT Suryatata Internusa adalah kontraktor terpercaya yang melayani fasilitas medical Eka Hospital. Sinergi TSM-Suryatata mencakup:</p>

        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>September 2018</strong> — RO 2.000 GPD untuk Eka Hospital Bekasi dan Cibubur</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>April 2019</strong> — RO 1.500 GPD spesifik untuk Hemodialisis di Cibubur</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>April 2019</strong> — RO 1.500 GPD spesifik untuk Hemodialisis di Bekasi</li>
        </ul>

        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Setelah commissioning, TSM menyediakan kontrak service jangka panjang yang mencakup: penggantian membran rutin, suplai cartridge filter dan karbon aktif, dan response engineer untuk troubleshooting. Eka Hospital adalah salah satu client TSM yang konsisten mempercayakan sistem water treatment medical-grade pada kami.</p>

        <h2 id="ekspansi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Hemodialisis sebagai Specialization TSM</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Selain Eka Hospital, TSM telah membangun sistem RO untuk hemodialisis di berbagai rumah sakit:</p>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>RS Melinda Bandung</strong> — RO 5.000 GPD untuk Hemodialisis (Mei 2023, melalui PT Melinda Kasih Ibu Tiga)</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>RSUD Cengkareng</strong> — BWRO 1.000 LPH skidmounted (Januari 2019)</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>RSUD Pasar Minggu</strong> — RO 1.500 LPH</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>RSUD Cianjur</strong> — RO 8.000 GPD (September 2024)</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>RS Lira Medika Karawang</strong> — RO 6.000 LPD (Juni 2014)</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>RS Puri Indah Kembangan Jakarta</strong> — RO untuk medical (2011)</li>
        </ul>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pengalaman ini menempatkan TSM sebagai <strong>vendor RO medical-grade berpengalaman</strong> untuk fasilitas hemodialisis di Indonesia.</p>
    

<h2 id="faq-eka" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa beda RO medical untuk hemodialisis dengan RO untuk farmasi?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Standar referensinya berbeda: hemodialisis ANSI/AAMI RD52 atau ISO 13959, farmasi USP atau Pharmacopeia BPOM CPOB. Persyaratan kunci yang umum: konduktivitas rendah, mikrobiologi terkontrol, endotoksin terkontrol. Beberapa parameter berbeda: hemodialisis lebih ketat untuk logam berat (langsung kontak dengan darah pasien), farmasi lebih ketat untuk endotoksin (untuk produk parenteral). Sistem RO 2-pass + UV adalah standar untuk keduanya.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa biaya investasi RO untuk fasilitas hemodialisis?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk kapasitas 1.500-2.000 GPD (~5,7-7,5 m³/hari) cocok untuk 4-6 mesin dialisis: investasi sekitar Rp 250-500 juta termasuk RO 2-pass + UV + loop distribusi sanitary. Untuk fasilitas yang lebih besar (5.000+ GPD untuk 15+ mesin dialisis): Rp 600-1.200 juta. Investasi ini relatif kecil dibanding investasi total fasilitas dialisis (mesin, ruangan, SDM).</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Bagaimana monitoring rutin sistem RO untuk hemodialisis?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Monitoring multi-level: (1) Online — konduktivitas dan suhu di outlet RO dimonitor 24/7 dengan alarm jika out-of-spec. (2) Harian — sampling untuk klorin sisa di feed (memastikan dechlorination berfungsi) dan konduktivitas di setiap user point. (3) Mingguan — sampling untuk bakteri di setiap dialisis machine. (4) Bulanan — sampling lengkap untuk semua parameter AAMI RD52 oleh laboratorium tersertifikasi. Dokumentasi disimpan 5+ tahun untuk audit.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa risiko jika air RO untuk hemodialisis tidak compliance?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Risiko serius bagi pasien: (1) Reaksi pirogenik akibat endotoksin (demam, menggigil, syok), (2) Keracunan kronis logam berat (akumulasi di pasien yang menjalani dialisis bertahun-tahun), (3) Kerusakan jaringan akibat klorin atau kloramine residual, (4) Reaksi imunologi akibat bakteri atau LPS bakteri. Karena pasien dialisis rentan, standar harus dipertahankan ketat sepanjang waktu. Sistem yang gagal compliance biasanya memerlukan shutdown facility hemodialisis sementara hingga remediasi selesai.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah TSM dapat membangun RO hemodialisis untuk RS baru?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ya, dengan paket lengkap: site survey untuk evaluasi air baku dan layout fasilitas, engineering design sesuai AAMI RD52, manufacturing &amp; FAT di workshop Bekasi, instalasi onsite dengan minimal disrupsi operasi RS, commissioning &amp; validasi, dan training operator. Plus dokumentasi lengkap untuk audit KARS dan Kemenkes. Lead time tipikal 3-5 bulan dari kontrak ke commissioning untuk sistem 1.500-2.000 GPD.</p>


          <div style={{"marginTop":"2rem","padding":"2rem","background":"var(--ice)","borderRadius":"12px","borderLeft":"4px solid var(--accent)"}}>
            <h3 style={{"marginBottom":".75rem","color":"var(--navy)"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Membutuhkan RO Medical untuk Hemodialisis?</h3>
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
            <li><Link href="#standar-medical">Standar AAMI RD52</Link></li>
            <li><Link href="#konfigurasi">Konfigurasi Sistem</Link></li>
            <li><Link href="#kemitraan">Kemitraan PT Suryatata</Link></li>
            <li><Link href="#ekspansi">Hemodialisis di RS Lain</Link></li>
            <li><Link href="#faq-eka">FAQ</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Produk Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/produk/ro-lab">→ RO Lab &amp; Medical</Link></li>
            <li><Link to="/produk/ro-komersial">→ RO Komersial</Link></li>
            <li><Link to="/produk/uv">→ UV Sterilizer</Link></li>
            <li><Link to="/produk/membran">→ Membran RO Medical-Grade</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Studi Kasus &amp; Industri</h4>
          <ul className="flex flex-col">
            <li><Link to="/industri/rs">→ Solusi Rumah Sakit</Link></li>
            <li><Link to="/artikel/standar-air-farmasi-bpom">→ Standar Air Medical</Link></li>
            <li><Link to="/artikel/monitoring-kualitas-air-ro">→ Monitoring Kualitas Air</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>

    </>
  );
};

export default PortoEkaHospital;
