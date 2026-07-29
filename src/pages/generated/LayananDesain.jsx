import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


const LayananDesain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/layanan">Layanan</Link> › Desain &amp; Engineering</div>
    <h1>Layanan Desain &amp; Engineering Sistem Water Treatment</h1>
    <p>Engineering komprehensif untuk sistem reverse osmosis, SWRO, ultrafiltrasi, dan demineralisasi — dari site survey, hydraulic calculation, hingga deliverable P&amp;ID dan BoM siap eksekusi.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>
        <div className="prose max-w-none text-text">

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kualitas desain adalah faktor terbesar yang menentukan keberhasilan jangka panjang sebuah sistem water treatment industri. Sistem yang dirancang dengan asumsi yang salah, sizing yang tidak tepat, atau spek pre-treatment yang under-designed akan menghadirkan masalah bertahun-tahun: konsumsi kimia berlebih, fouling membran prematur, downtime tak terjadwal, dan operating cost yang membengkak.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>PT Tirta Sumber Makmur</strong> menyediakan jasa engineering design profesional untuk sistem reverse osmosis, SWRO, BWRO, ultrafiltrasi, demineralisasi, dan zero liquid discharge (ZLD). Tim engineering kami berpengalaman menangani proyek water treatment dari skala kecil 1 m³/jam hingga sistem multi-stream skala industri besar 1.000+ m³/jam, untuk berbagai industri di Indonesia.</p>

          <h2 id="kenapa-engineering-penting" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Mengapa Engineering Berkualitas Krusial?</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem water treatment yang sama dapat memiliki cost-of-ownership yang berbeda hingga 40% antara desain optimal dan desain biasa-biasa saja. Perbedaan ini muncul dari banyak detail engineering yang sering diabaikan: pemilihan recovery rate yang tepat, sizing pre-treatment sesuai SDI air baku, kalkulasi pressure drop yang akurat, hingga pemilihan material valve dan piping yang sesuai dengan kimia air olahan.</p>

          <div className="info-box bg-ice border border-border rounded-[10px] p-[1.2rem_1.5rem] my-[1.75rem]">
            <strong className="block text-[0.7rem] font-bold uppercase tracking-[0.1em] text-accent mb-[0.38rem]">💡 Dampak engineering berkualitas vs. desain "asal jadi"</strong><br />
            ✓ Konsumsi energi 15–25% lebih rendah dari sizing pompa yang tepat<br />
            ✓ Umur membran 30–60% lebih panjang dengan pre-treatment proper<br />
            ✓ Konsumsi kimia 20–40% berkurang dengan dosing yang dihitung benar<br />
            ✓ Downtime tak terjadwal hampir nol pada tahun-tahun awal<br />
            ✓ Sertifikasi compliance (BPOM, KLHK, BKI) lebih mudah didapat
          </div>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Inilah mengapa TSM tidak menggunakan pendekatan template untuk desain. Setiap sistem dimulai dari karakteristik air baku spesifik lokasi klien, dan disesuaikan dengan kebutuhan output, profil operasi, dan constraint site (ruang, listrik, civil).</p>

          <h2 id="proses-desain" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Proses Desain &amp; Engineering Step-by-Step</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Engineering yang baik dimulai jauh sebelum gambar pertama digambar. Berikut alur kerja standar TSM dari brief klien hingga deliverable final:</p>

          <div className="process-step">
            <div className="ps-num">1</div>
            <div><h4>Brief &amp; Requirements Gathering</h4>
            <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sesi diskusi dengan klien untuk menentukan output kapasitas, kualitas yang dibutuhkan, profil operasi (continuous vs intermittent), dan constraint site. Klien diminta menyediakan layout calon lokasi, single line listrik, dan informasi air baku jika tersedia.</p></div>
          </div>

          <div className="process-step">
            <div className="ps-num">2</div>
            <div><h4>Site Survey &amp; Sampling</h4>
            <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tim engineering datang ke lokasi untuk pengukuran fisik (luas, tinggi langit-langit, akses peralatan), pemeriksaan utility existing, dan pengambilan sampel air baku untuk analisa lengkap di laboratorium independen (TDS, conductivity, pH, hardness, ion-ion utama, SDI, TOC, mikrobiologi).</p></div>
          </div>

          <div className="process-step">
            <div className="ps-num">3</div>
            <div><h4>Conceptual Design &amp; Process Selection</h4>
            <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Berdasarkan data air baku dan target output, tim memilih konfigurasi proses optimal: kombinasi pre-treatment (multi-media filter, softener, UF, antiscalant), RO single/double pass, dan post-treatment (UV, ozon, mineralizer). Output: Process Flow Diagram dengan mass balance.</p></div>
          </div>

          <div className="process-step">
            <div className="ps-num">4</div>
            <div><h4>Hydraulic &amp; Membrane Calculation</h4>
            <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kalkulasi detail menggunakan software membrane projection (DOW WAVE, Toray DS2) untuk menentukan jumlah elemen, konfigurasi vessel, recovery rate optimal, dan kebutuhan tekanan operasi. Pompa di-size berdasarkan curve characteristic dan derating untuk margin operasi.</p></div>
          </div>

          <div className="process-step">
            <div className="ps-num">5</div>
            <div><h4>Detail Engineering &amp; Drawing Production</h4>
            <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Produksi P&amp;ID lengkap dengan numbering tag standar industri, General Arrangement drawing, equipment datasheet (pompa, membran, instrumen), single line elektrikal, control narrative, dan Bill of Materials komplet siap procurement.</p></div>
          </div>

          <div className="process-step">
            <div className="ps-num">6</div>
            <div><h4>Design Review &amp; Client Approval</h4>
            <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sesi review formal dengan klien untuk presentasi desain, tanya jawab teknis, dan persetujuan. Revisi minor dilakukan dalam 1 putaran. Setelah klien menyetujui, dokumen di-freeze sebagai "Issued for Construction" (IFC) yang menjadi acuan eksekusi.</p></div>
          </div>

          <h2 id="deliverable" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Engineering Deliverable Standar TSM</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Setiap proyek engineering diakhiri dengan paket dokumen lengkap yang dapat digunakan untuk pengadaan, konstruksi, sertifikasi, dan dokumentasi audit. Format diserahkan dalam PDF (siap distribusi) plus native CAD (untuk modifikasi di masa depan):</p>

          <table className="w-full border-collapse my-[1.5rem] text-[0.9rem]">
            <tbody><tr><th>Kategori Dokumen</th><th>Isi Utama</th><th>Use Case</th></tr>
            <tr><td>Process Flow Diagram (PFD)</td><td>Aliran proses, mass balance, parameter operasi tiap stage</td><td>Overview sistem, audit BPOM/KLHK</td></tr>
            <tr><td>Piping &amp; Instrumentation Diagram (P&amp;ID)</td><td>Detail piping, instrumen, valve, control loop</td><td>Konstruksi, troubleshooting</td></tr>
            <tr><td>General Arrangement (GA)</td><td>Layout fisik equipment, footprint, akses servis</td><td>Civil planning, ergonomi operator</td></tr>
            <tr><td>Equipment Datasheet</td><td>Spesifikasi teknis pompa, membran, instrumen</td><td>Procurement, vendor selection</td></tr>
            <tr><td>Bill of Materials (BoM)</td><td>List komponen lengkap dengan quantity dan spec</td><td>Pengadaan, kontrol biaya</td></tr>
            <tr><td>Electrical Single Line Diagram</td><td>Distribusi listrik, motor sizing, control panel</td><td>Instalasi listrik, MCC design</td></tr>
            <tr><td>Control Narrative</td><td>Logic operasi, alarm, interlock, sequencing</td><td>Programming PLC, training operator</td></tr>
            <tr><td>Hydraulic Calculation Report</td><td>Pressure drop tiap segmen, validasi pump curve</td><td>Verifikasi performa, troubleshooting</td></tr>
          </tbody></table>

          <h2 id="standar-engineering" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Standar Engineering yang Dipenuhi</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Engineering deliverable TSM disusun mengacu pada standar industri yang relevan, sehingga dapat diterima dalam audit, sertifikasi, atau review oleh konsultan independen:</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>SNI ISO 9001:2015</strong> — quality management system untuk dokumentasi traceable</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>ASME B31.3</strong> — process piping untuk piping high-pressure RO</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>ASTM A312/A276</strong> — material spec stainless steel untuk fitting RO</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>ISA S5.1</strong> — symbol standar untuk P&amp;ID</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>BPOM CPOB 2018</strong> — untuk sistem Purified Water/WFI farmasi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>KLHK Permen 5/2014</strong> — baku mutu air limbah untuk integrasi WTP-WWTP</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>BKI Marine Code</strong> — untuk sistem watermaker kapal</li>
          </ul>

          <h2 id="industri-cocok" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Industri yang Memerlukan Engineering Profesional</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Beberapa industri tidak memiliki opsi untuk "shortcut" engineering — desain yang tidak proper dapat menyebabkan kegagalan compliance, recall produk, atau bahkan risiko keselamatan:</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/farmasi">Industri Farmasi</Link></strong> — sistem PW/WFI butuh validasi IQ/OQ/PQ yang dimulai dari design qualification (DQ)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/pltu">Pembangkit Listrik</Link></strong> — boiler feed water spec ketat butuh kalkulasi water chemistry detail</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/maritim">Marine &amp; Offshore</Link></strong> — sistem watermaker kapal butuh review BKI dan certifying authority</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/rs">Rumah Sakit</Link></strong> — sistem hemodialisis butuh dokumentasi compliance ANSI/AAMI RD52</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/manufaktur">F&amp;B Manufaktur</Link></strong> — sistem food-grade butuh material certification dan layout sanitasi yang benar</li>
          </ul>

          <h2 id="studi-kasus" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Studi Kasus: Re-Engineering Sistem 25 m³/jam</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Salah satu klien manufaktur F&amp;B di Bekasi memiliki sistem RO 25 m³/jam yang dipasang vendor lain pada 2019 dengan masalah kronis: konsumsi listrik tinggi (45 kWh/m³ vs benchmark 18 kWh/m³), recovery rendah (52% vs target 75%), dan membran ganti tiap 14 bulan. Site survey TSM mengidentifikasi 4 kesalahan engineering original:</p>

          <ol className="ml-[1.5rem] my-[1.05rem] list-decimal">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Pre-treatment under-designed — multi-media filter terlalu kecil sehingga SDI inlet RO chronicly tinggi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Tidak ada antiscalant dosing — pure mechanical filtration untuk air dengan hardness 380 ppm</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Pompa over-sized — VFD diset constant pada 100% padahal hanya butuh 70%</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Recovery dipaksa rendah karena concentrate tidak punya outlet ke drain yang benar</li>
          </ol>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM melakukan re-engineering parsial dengan budget Rp 280 juta (vs replacement total Rp 950 juta): upgrade multi-media filter, install softener pre-RO, install antiscalant skid, retrofit VFD dengan PID control, dan modifikasi piping concentrate. Hasil setelah commissioning: konsumsi listrik turun ke 21 kWh/m³ (-53%), recovery naik ke 73%, dan estimasi umur membran tembus 4+ tahun. Payback investasi: 9 bulan.</p>

          <h2 id="faq-desain" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa lama proses desain sistem RO industri di TSM?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk sistem RO industri standar 5–50 m³/jam dari site survey hingga design review final memakan waktu 3–6 minggu kerja. Sistem kompleks dengan multi-stage, ZLD, atau integrasi dengan utility existing membutuhkan 6–10 minggu. Engineering fast-track 2 minggu tersedia untuk emergency replacement sistem rusak, dengan trade-off pada level optimasi desain.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa saja deliverable engineering yang TSM berikan?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Deliverable lengkap meliputi: Process Flow Diagram (PFD), Piping &amp; Instrumentation Diagram (P&amp;ID), General Arrangement (GA) drawing, equipment datasheet untuk pompa/membran/instrumen, Bill of Materials (BoM), electrical single line diagram, control narrative, hydraulic calculation report, water balance, dan operational philosophy document. Format diserahkan dalam PDF + native CAD (DWG).</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah TSM bisa membuat desain untuk dipasang vendor lain?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ya. TSM dapat menyediakan layanan engineering-only (FEED atau detail engineering) tanpa keharusan instalasi oleh TSM. Banyak klien menggunakan jasa engineering kami untuk tender material atau procurement separately. Engineering deliverable kami bersifat vendor-neutral kecuali diminta khusus oleh klien.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Bagaimana TSM menangani site dengan kualitas air baku tidak stabil?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Site dengan air baku fluktuatif (sumur dengan musim hujan/kemarau, sungai dengan TDS bervariasi) memerlukan desain robust. Pendekatan TSM: (1) ambil sampel air pada minimal 2 musim berbeda, (2) desain pre-treatment dengan margin yang lebih besar (multi-media filter dengan iron filter dan softener inline), (3) RO disesuaikan dengan kondisi worst-case bukan rata-rata, (4) chemical dosing dengan ratio adjustable, (5) instrumentasi untuk auto-flushing saat parameter melewati threshold.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa biaya jasa engineering design TSM?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Biaya engineering bervariasi berdasarkan kompleksitas. Sebagai gambaran: FEED untuk sistem RO industri 10 m³/jam mulai Rp 35 juta, detail engineering Rp 60–150 juta. Untuk klien yang melanjutkan ke pengadaan equipment dengan TSM, biaya engineering biasanya di-credit ke harga sistem. Engineering-only project dilakukan dengan kontrak terpisah.</p>

          <div style={{"marginTop":"2rem","padding":"2rem","background":"var(--ice)","borderRadius":"12px","borderLeft":"4px solid var(--accent)"}}>
            <h3 style={{"marginBottom":".75rem","color":"var(--navy)"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Mulai Proyek Engineering Anda</h3>
            <p style={{"marginBottom":"1.25rem","color":"var(--muted)","fontSize":".92rem"}} className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Konsultasi awal gratis untuk membahas brief proyek, scope engineering, dan estimasi timeline. Engineering proposal dapat disiapkan dalam 5–7 hari kerja setelah site visit.</p>
            <Link style={{"display":"inline-block","padding":".85rem 2rem","background":"var(--blue)","color":"#fff","borderRadius":"8px","fontWeight":"700","fontSize":".96rem","textDecoration":"none"}} to="/kontak">📐 Konsultasi Engineering →</Link>
          </div>

        </div>
      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#kenapa-engineering-penting">Mengapa Engineering Penting?</Link></li>
            <li><Link href="#proses-desain">Proses Desain</Link></li>
            <li><Link href="#deliverable">Deliverable</Link></li>
            <li><Link href="#standar-engineering">Standar yang Dipenuhi</Link></li>
            <li><Link href="#industri-cocok">Industri yang Membutuhkan</Link></li>
            <li><Link href="#studi-kasus">Studi Kasus</Link></li>
            <li><Link href="#faq-desain">FAQ</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Layanan Lain</h4>
          <ul className="flex flex-col">
            <li><Link to="/layanan/instalasi">→ Instalasi &amp; Komisioning</Link></li>
            <li><Link to="/layanan/feasibility">→ Studi Kelayakan</Link></li>
            <li><Link to="/layanan/epc">→ Turnkey EPC Project</Link></li>
            <li><Link to="/layanan/maintenance">→ Kontrak Perawatan</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Produk Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/produk/ro-industri">→ Sistem RO Industri</Link></li>
            <li><Link to="/produk/desalinasi">→ Sistem SWRO</Link></li>
            <li><Link to="/produk/demi">→ Demineralisasi / EDI</Link></li>
            <li><Link to="/produk/uf">→ Ultrafiltrasi (UF)</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Artikel Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/artikel/ro-prinsip-kerja">→ Prinsip Kerja RO</Link></li>
            <li><Link to="/artikel/pompa-tekanan-tinggi-ro">→ Pompa Tekanan Tinggi</Link></li>
            <li><Link to="/artikel/perbandingan-membran-dow-toray">→ Membran Dow vs Toray</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>

    </>
  );
};

export default LayananDesain;
