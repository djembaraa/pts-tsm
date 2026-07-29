import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, Calculator, Ship } from 'lucide-react';


const ProdukBwms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/produk">Produk &amp; Solusi</Link> › Ballast Water Management System</div>
    <h1>Ballast Water Management System (BWMS)</h1>
    <p>Sistem pengolahan air ballast kapal sesuai IMO Ballast Water Management Convention 2004 (D-2 Standard). Tersedia tipe Integrated Mounting dan Distributed Mounting BSKY100 — kapasitas treat 100 m³/jam, teknologi hydrocyclone + UV chemical-free.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[3rem] items-start">
      <div>
        <div className="h-[300px] rounded-[14px] flex items-center justify-center text-[8rem] mb-[2rem] text-white " style={{"background":"none","padding":"0","height":"auto","display":"block"}}><picture>
  <source srcSet="images/bwms-integrated.webp" type="image/webp" />
  <img src="images/bwms-integrated.jpg" alt="Ballast Water Management System BWMS tipe Integrated Mounting PT TSM" style={{"width":"100%","height":"auto","objectFit":"contain","borderRadius":"14px","background":"#f4f7fb","padding":"1rem"}} />
</picture></div>

        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p><strong>Ballast Water Management System (BWMS)</strong> adalah sistem wajib bagi kapal yang berlayar internasional sejak IMO Ballast Water Management Convention berlaku efektif September 2017. Konvensi ini mensyaratkan semua kapal mengolah air ballast sebelum dibuang di pelabuhan tujuan, untuk mencegah perpindahan organisme invasif antar ekosistem laut yang dapat merusak lingkungan dan industri perikanan lokal.</p>
<p>PT Tirta Sumber Makmur menyediakan integrasi BWMS untuk kapal niaga, tanker minyak, kapal kontainer, kapal penumpang, dan offshore platform. Sistem yang kami integrasikan menggunakan kombinasi <strong>filtrasi mekanik (hydrocyclone + ultrasonic prefilter)</strong> dan <strong>disinfeksi UV bertekanan tinggi</strong> — sepenuhnya tanpa bahan kimia sehingga aman bagi lingkungan laut tujuan dan tidak meninggalkan residu di tangki ballast. Kapasitas standar 100 m³/jam, dengan opsi paralel untuk kebutuhan kapasitas lebih besar.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Dua Tipe Konfigurasi: Integrated &amp; Distributed</h2>
        <p style={{"fontSize":".95rem","lineHeight":"1.75","color":"var(--text)"}}>Pilihan konfigurasi disesuaikan dengan kondisi engine room dan tipe proyek (kapal baru atau retrofit). Keduanya menggunakan teknologi inti yang sama (hydrocyclone + UV) dan memenuhi standar IMO D-2.</p>

        <div className="type-grid ">
          <div className="type-card">
            <span className="badge">TIPE 1</span>
            <h3>Integrated Mounting</h3>
            <p style={{"fontSize":".88rem","color":"var(--muted)","marginBottom":".8rem"}}>Semua komponen dalam satu skid pre-assembled. Cepat dipasang, footprint padat. Direkomendasikan untuk kapal baru atau engine room dengan ruang yang masih luas.</p>
            <picture>
  <source srcSet="images/bwms-integrated.webp" type="image/webp" />
  <img src="images/bwms-integrated.jpg" alt="BWMS Integrated Mounting skid pre-assembled" style={{"width":"100%","height":"auto","borderRadius":"8px","background":"#f4f7fb","padding":".5rem"}} />
</picture>
            <table className="w-full border-collapse my-[1.5rem] text-[0.9rem]" style={{"marginTop":".7rem"}}>
              <tbody><tr><td>Module Part (L×W×H)</td><td>1850 × 1200 × 2316 mm</td></tr>
              <tr><td>Berat total</td><td>1560 kg</td></tr>
              <tr><td>Kapasitas</td><td>100 m³/h</td></tr>
            </tbody></table>
          </div>

          <div className="type-card">
            <span className="badge">TIPE 2</span>
            <h3>Distributed BSKY100</h3>
            <p style={{"fontSize":".88rem","color":"var(--muted)","marginBottom":".8rem"}}>Komponen terpisah (CY module, US prefilter, UV module, control rack) — bisa dipasang di ruang berbeda yang tersedia. Ideal untuk <strong>retrofit kapal existing</strong> dengan keterbatasan ruang.</p>
            <picture>
  <source srcSet="images/bwms-distributed.webp" type="image/webp" />
  <img src="images/bwms-distributed.jpg" alt="BWMS Distributed Mounting BSKY100 komponen terpisah" style={{"width":"100%","height":"auto","borderRadius":"8px","background":"#f4f7fb","padding":".5rem"}} />
</picture>
            <table className="w-full border-collapse my-[1.5rem] text-[0.9rem]" style={{"marginTop":".7rem"}}>
              <tbody><tr><td>CY Module (L×W×H)</td><td>458 × 585 × 1533 mm</td></tr>
              <tr><td>Berat total</td><td>1020 kg</td></tr>
              <tr><td>Kapasitas</td><td>100 m³/h</td></tr>
            </tbody></table>
          </div>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Spesifikasi Teknis Lengkap</h2>
        <table className="w-full border-collapse my-[1.5rem] text-[0.9rem] ">
          <tbody><tr><td>Rated Treat Capacity</td><td>100 m³/jam</td></tr>
          <tr><td>BWMS Power Consumption</td><td>33,5 kW (saat treatment aktif)</td></tr>
          <tr><td>Inlet / Outlet Line Size</td><td>DN125</td></tr>
          <tr><td>Return Line Size</td><td>DN100</td></tr>
          <tr><td>Drain Pipe Size</td><td>DN65</td></tr>
          <tr><td>Control Rack (L×W×H)</td><td>845 × 700 × 1215 mm</td></tr>
          <tr><td>Local Control Panel (L×W×H)</td><td>800 × 300 × 1050 mm</td></tr>
          <tr><td>Remote Control Panel (L×W×H)</td><td>500 × 200 × 450 mm</td></tr>
          <tr><td>Inclined Installation</td><td>Vertikal atau miring hingga 45°</td></tr>
          <tr><td>Material Pipa Ballast</td><td>SCH40 hot-dip galvanized</td></tr>
          <tr><td>Sampling Port</td><td>SP1 + SP2 sesuai G2 IMO Sampling Guidelines</td></tr>
        </tbody></table>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Komponen Utama Sistem</h2>
        <div className="comp-grid ">
          <div className="comp-item"><strong>Hydrocyclone CY10</strong>Separator partikel kasar, sand &amp; sediment</div>
          <div className="comp-item"><strong>US Prefilter US35</strong>Filter ultrasonic, partikel ≥50 µm</div>
          <div className="comp-item"><strong>UV Module UV408</strong>Disinfeksi UV-C dosis tinggi</div>
          <div className="comp-item"><strong>Control Valve (CV ×5)</strong>Valve actuated jalur utama</div>
          <div className="comp-item"><strong>Solenoid Valve (SV ×3)</strong>Drain &amp; air vent line</div>
          <div className="comp-item"><strong>Y-Type Strainer (×2)</strong>Strainer sebelum drain pump</div>
          <div className="comp-item"><strong>Manual Ball Valve (×2)</strong>Isolation untuk maintenance</div>
          <div className="comp-item"><strong>Flow Meter</strong>Monitor flow real-time + logging</div>
          <div className="comp-item"><strong>Sampling Port</strong>Untuk Port State Control inspection</div>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Diagram P&amp;ID Sistem</h2>
        <div className="diagram-box ">
          <picture>
  <source srcSet="images/bwms-pid.webp" type="image/webp" />
  <img src="images/bwms-pid.jpg" alt="P&amp;ID Diagram BSKY Ballast Water Management System dengan return pipe" style={{"maxWidth":"100%"}} />
</picture>
          <p className="caption">P&amp;ID lengkap BSKY BWMS dengan return pipe — menunjukkan jalur ballast pump, hydrocyclone, US prefilter, UV module, sampling port, dan return-overboard line.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Layout Distributed Mounting (Top &amp; Side View)</h2>
        <div className="diagram-box ">
          <picture>
  <source srcSet="images/bwms-layout.webp" type="image/webp" />
  <img src="images/bwms-layout.jpg" alt="Layout BSKY100 BWMS Distributed Mounting top view dan side view" />
</picture>
          <p className="caption">Layout drawing tipe distributed BSKY100 — penyusunan komponen US prefilter dan UV module dapat menyesuaikan ruang yang tersedia di engine room kapal, termasuk instalasi miring hingga 45°.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Cara Kerja Pengolahan Air Ballast</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p>Ada dua siklus operasi: <strong>ballasting</strong> (saat menerima air laut ke tangki) dan <strong>deballasting</strong> (saat membuang air ballast di pelabuhan tujuan). Pada kedua siklus, air harus diolah agar memenuhi standar IMO D-2.</p>
<ol style={{"paddingLeft":"1.4rem","margin":".8rem 0"}}>
  <li style={{"marginBottom":".55rem"}}><strong>Tahap 1 — Hydrocyclone (CY10):</strong> Air dari ballast pump masuk ke hydrocyclone yang memutar air dengan gaya sentrifugal, memisahkan pasir, sedimen kasar, dan partikel berat ke bagian bawah untuk dibuang ke bilge.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Tahap 2 — Ultrasonic Prefilter (US35):</strong> Air pre-filtered melewati saringan otomatis yang menggunakan gelombang ultrasonic untuk mencegah clogging. Filter menahan partikel ≥50 µm — dimana sebagian besar zooplankton, larva, dan organisme bertahan.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Tahap 3 — UV Disinfection (UV408):</strong> Air melewati chamber UV-C dengan dosis tinggi (&gt;250 mJ/cm²) yang merusak DNA bakteri, virus, alga, dan mikroorganisme planktonik agar tidak dapat bereproduksi.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Tahap 4 — Sampling &amp; Discharge:</strong> Sampling port (SP1, SP2) dipasang sesuai G2 Guidelines IMO untuk Port State Control inspection. Air yang sudah ditreat masuk ke ballast tank atau dibuang ke laut tujuan.</li>
</ol>
<p>Sistem dapat di-bypass via Bypass V/V untuk kondisi darurat (mis. perairan dengan kandungan sedimen ekstrem) — namun bypass ini harus dilaporkan dalam Ballast Water Record Book sesuai BWM Convention.</p>
</div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Aplikasi &amp; Tipe Kapal</h2>
        <div className="flex flex-wrap gap-2 mt-[0.8rem] ">
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Kapal niaga &amp; bulk carrier</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Tanker minyak &amp; LPG carrier</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Kapal kontainer</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Kapal penumpang &amp; ferry</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Offshore supply vessel (OSV)</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">FPSO &amp; drilling platform</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Kapal patroli &amp; KRI</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Retrofit kapal existing</span>
        </div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Standar &amp; Sertifikasi</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<ul style={{"paddingLeft":"1.4rem","margin":".8rem 0"}}>
  <li style={{"marginBottom":".55rem"}}><strong>IMO BWM Convention 2004</strong> — sistem dirancang memenuhi Regulation D-2 (Performance Standard) yang menjadi rujukan global sejak 2017.</li>
  <li style={{"marginBottom":".55rem"}}><strong>IMO G8 Type Approval Guidelines</strong> — tahapan testing &amp; approval untuk equipment BWMS, termasuk land-based test dan shipboard test.</li>
  <li style={{"marginBottom":".55rem"}}><strong>BKI (Biro Klasifikasi Indonesia)</strong> — sistem dapat di-class oleh BKI untuk kapal berbendera Indonesia. TSM mendampingi proses class survey hingga sertifikat terbit.</li>
  <li style={{"marginBottom":".55rem"}}><strong>Class Society lain</strong> — kompatibel dengan ABS, DNV, Lloyd's Register, BV, RINA, NK untuk kapal yang ber-class IACS member.</li>
  <li style={{"marginBottom":".55rem"}}><strong>SCH40 hot-dip galvanized piping</strong> — material pipa ballast sesuai best practice maritime engineering, tahan korosi air laut jangka panjang.</li>
</ul>
</div>

<h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Studi Kasus &amp; Referensi</h2>
<div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
<p><strong>Kapal Patroli &amp; KRI</strong> — TSM telah berpengalaman lebih dari 24 tahun mengintegrasikan sistem pengolahan air di atas kapal, termasuk SWRO watermaker untuk Kapal Republik Indonesia (KRI). Pengalaman engineering yang sama kami gunakan untuk integrasi BWMS — memahami constraints ruang engine room, vibration tolerance, dan standar BKI yang berlaku.</p>
<p><strong>Offshore Platform &amp; OSV</strong> — Untuk klien seperti Halliburton dan Wintermar di sektor offshore, kebutuhan ballast treatment menjadi makin penting seiring tightening regulation IMO. TSM menawarkan retrofit BWMS yang minim downtime dengan pre-fabrication di workshop dan modular installation di galangan.</p>
</div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Pertanyaan yang Sering Ditanyakan</h2>
        <div className="" style={{"fontSize":".94rem","lineHeight":"1.75","color":"var(--text)"}}>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apa itu BWMS dan kenapa kapal saya wajib pasang?</h3>
          <p>BWMS (Ballast Water Management System) adalah sistem yang mengolah air ballast kapal sebelum dibuang ke laut tujuan. Sejak IMO BWM Convention berlaku efektif 2017 dengan standar D-2, semua kapal yang berlayar internasional dengan kapasitas ballast lebih dari 8 m³ wajib memasang BWMS. Tujuannya mencegah perpindahan organisme invasif antar ekosistem laut.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apa perbedaan tipe Integrated dan Distributed BSKY100?</h3>
          <p>Tipe Integrated menyatukan semua komponen dalam satu skid berdimensi 1850×1200×2316 mm, berat 1560 kg — cocok untuk kapal baru atau ruang mesin yang masih luas. Tipe Distributed BSKY100 memisahkan komponen sehingga bisa dipasang di ruang terpisah, total berat 1020 kg — ideal untuk retrofit kapal lama dengan ruang terbatas. Keduanya berkapasitas treat 100 m³/jam.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah BWMS PT TSM bersertifikat BKI dan IMO?</h3>
          <p>Ya. Sistem BWMS yang kami integrasikan dirancang sesuai persyaratan IMO BWM Convention 2004 (D-2 standard) dan dapat di-class oleh BKI maupun societies lain seperti ABS, DNV, atau Lloyd's Register. Tim TSM mendampingi proses Type Approval dan Commissioning Test sesuai G8 Guidelines IMO.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa konsumsi listrik BWMS dan apakah genset kapal cukup?</h3>
          <p>Konsumsi BWMS 100 m³/h adalah 33,5 kW saat treatment aktif. Karena BWMS hanya menyala saat ballast/deballast operation (biasanya di pelabuhan), demand-nya tidak constant. Genset kapal niaga umumnya cukup, namun engineer TSM melakukan power balance check sebelum instalasi untuk memastikan tidak ada konflik dengan beban kritis lain.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Bagaimana cara kerja teknologi UV+filtrasi pada BWMS ini?</h3>
          <p>Air ballast masuk melalui Hydrocyclone (CY10) untuk memisahkan pasir dan partikel kasar, kemudian melewati Ultrasonic prefilter (US35) yang membersihkan partikel ≥50 µm, lalu disinari UV dengan dosis tinggi pada modul UV408 untuk membunuh bakteri, virus, dan organisme planktonik. Sistem tidak menggunakan bahan kimia (chemical-free) sehingga aman untuk lingkungan laut tujuan.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah TSM menyediakan instalasi dan service untuk BWMS?</h3>
          <p>Ya. TSM menyediakan paket lengkap: studi kelayakan retrofit, desain piping integration, supply equipment, supervisi instalasi di galangan, commissioning + IMO Type Approval Test, training crew, hingga maintenance contract berkala. Tim service kami bisa dimobilisasi ke seluruh galangan utama Indonesia (Surabaya, Batam, Jakarta, Semarang).</p>
        </div>
      </div>

      <aside className="lg:sticky lg:top-[88px]">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Minta Penawaran</h4>
          <p style={{"fontSize":".86rem","color":"var(--muted)","lineHeight":"1.65","marginBottom":"1rem"}}>Konsultasikan kebutuhan BWMS kapal Anda — engineer kami siap bantu spesifikasi.</p>
          <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-accent text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,180,216,0.32)] hover:bg-white hover:text-blue hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center","marginBottom":".6rem"}} to="/kontak"><ClipboardList className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Minta Penawaran</Link>
          <Link href="https://wa.me/62818719119" className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-blue text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-blue hover:text-white hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center"}} target="_blank" rel="noopener noreferrer">💬 WhatsApp Kami</Link>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Industri Maritim</h4>
          <ul style={{"display":"flex","flexDirection":"column","gap":".65rem"}}>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/industri/maritim">→ Solusi Maritim &amp; Offshore</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/desalinasi">→ SWRO Watermaker Kapal</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/portofolio/kri">→ Studi Kasus KRI</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/portofolio/kri-fleet">→ Armada KRI Fleet</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/portofolio/halliburton">→ Halliburton Offshore</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Layanan Terkait</h4>
          <ul style={{"display":"flex","flexDirection":"column","gap":".65rem"}}>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/layanan/feasibility">→ Studi Kelayakan Retrofit</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/layanan/instalasi">→ Instalasi &amp; Commissioning</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/layanan/sertifikasi">→ Pendampingan Sertifikasi BKI</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/layanan/maintenance">→ Maintenance Contract</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem]" style={{"background":"linear-gradient(145deg,var(--navy),var(--blue))","border":"none"}}>
          <h4 style={{"color":"rgba(255,255,255,.45)","borderColor":"rgba(255,255,255,.15)"}}>Konsultasi Teknis</h4>
          <p style={{"fontSize":".86rem","opacity":".84","color":"#fff","lineHeight":"1.65","marginBottom":"1rem"}}>Hubungi engineer maritim kami untuk diskusi BWMS retrofit atau new building.</p>
          <Link href="tel:+62818719119" className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center","fontSize":".82rem"}}>📞 021-88871689</Link>
        </div>
      </aside>
    </div>
  </div>

        <div className="max-w-[1240px] mx-auto px-6">
          <div className="info-box" style={{"marginTop":"2rem"}}>
            <strong>📚 Baca Juga</strong>
            <ul style={{"marginTop":".75rem","paddingLeft":"1.2rem"}}>
              <li><Link to="/artikel/ro-kapal-offshore">📘 Sistem RO untuk Kapal &amp; Platform Offshore</Link></li>
              <li><Link to="/artikel/ro-kapal-perang-bki">⚓ RO Kapal Perang Sertifikasi BKI</Link></li>
              <li><Link to="/industri/maritim"><Ship className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Solusi Lengkap Industri Maritim</Link></li>
              <li><Link to="/kalkulator"><Calculator className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Hitung Kebutuhan Sistem Anda</Link></li>
            </ul>
          </div>
        </div>

</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Kapal Anda Butuh BWMS?</h2>
    <p>Tim engineer maritim kami siap membantu — dari studi kelayakan retrofit, desain integration, hingga commissioning &amp; sertifikasi BKI.</p>
    <div className="flex gap-4 justify-center flex-wrap"><Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak"><ClipboardList className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Minta Penawaran Harga</Link><Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/industri/maritim"><Ship className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Lihat Solusi Maritim</Link></div>
  </div>
</div>

    </>
  );
};

export default ProdukBwms;
