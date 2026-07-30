import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building } from 'lucide-react';

const LayananEpc = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.art-layout{display:grid;grid-template-columns:1fr 290px;gap:3rem;align-items:start}
.art-sticky{position:sticky;top:88px}
@media(max-width:1024px){.art-layout{grid-template-columns:1fr}.art-sticky{position:static}}
.spec-table{width:100%;border-collapse:collapse;margin:1.5rem 0}
.spec-table th,.spec-table td{padding:.75rem 1rem;border:1px solid var(--border);font-size:.88rem;text-align:left;vertical-align:top}
.spec-table th{background:var(--navy);color:#fff;font-weight:700}
.spec-table tr:nth-child(even){background:var(--gray)}
.phase-card{background:var(--white);border:1px solid var(--border);border-radius:10px;padding:1.5rem;margin:1rem 0;border-left:4px solid var(--blue)}
.phase-card h4{color:var(--navy);font-size:1.05rem;margin-bottom:.5rem;display:flex;align-items:center;gap:.5rem}
.phase-card .phase-num{background:var(--blue);color:#fff;width:28px;height:28px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:.85rem;font-weight:700}

` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/layanan">Layanan</Link> › Turnkey EPC Project</div>
    <h1>Turnkey EPC Project Water Treatment</h1>
    <p>Layanan kontraktor EPC (Engineering, Procurement, Construction) terintegrasi untuk proyek water treatment industri di Indonesia — satu kontrak, satu pertanggungjawaban, satu komitmen performa.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>
        <div className="prose max-w-none text-text">

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Proyek water treatment industri yang melibatkan multiple disiplin (engineering, civil, mechanical, electrical, instrumentation, control system) dapat menjadi sumber stres besar bagi tim project klien jika dikelola dengan model multi-contractor — di mana setiap disiplin di-tender terpisah dan tim klien yang harus mengkoordinasikan interface antar mereka. Salah-koordinasi atau finger-pointing antar vendor saat ada masalah adalah realita yang sering terjadi dan menyebabkan keterlambatan signifikan.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Model <strong>EPC turnkey</strong> mengatasi masalah ini dengan menempatkan satu kontraktor sebagai single point of accountability dari kick-off hingga handover. <strong>PT Tirta Sumber Makmur</strong> sebagai EPC contractor untuk water treatment di Indonesia menyediakan model ini dengan kapasitas full-spectrum: dari engineering, procurement equipment global, civil &amp; mechanical erection, instalasi listrik dan kontrol, hingga commissioning dan after-sales support.</p>

          <h2 id="apa-itu-epc" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Memahami Model EPC Turnkey</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">EPC turnkey berarti TSM bertanggung jawab atas tiga fase utama proyek dengan single contract:</p>

          <div className="phase-card">
            <h4><span className="phase-num">E</span> Engineering</h4>
            <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Conceptual design, basic engineering (FEED), detail engineering, P&amp;ID, equipment datasheet, BoM, electrical single line, control narrative. Output yang sufficient untuk eksekusi.</p>
          </div>

          <div className="phase-card">
            <h4><span className="phase-num">P</span> Procurement</h4>
            <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Vendor selection, pengadaan equipment utama (membran, pompa, instrumen, panel), pengadaan komponen pendukung (piping, fitting, valve, kabel), expediting delivery, quality inspection at vendor, factory acceptance test.</p>
          </div>

          <div className="phase-card">
            <h4><span className="phase-num">C</span> Construction &amp; Commissioning</h4>
            <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Civil work koordinasi, mechanical erection, electrical installation, instrumentation termination, control system programming, pre-commissioning checks, wet commissioning, performance test, training operator, handover.</p>
          </div>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Model ini cocok terutama untuk klien yang: (1) tidak memiliki tim engineering internal yang memadai, (2) ingin certainty pada cost &amp; schedule, (3) ingin single point of warranty untuk seluruh sistem, (4) menjalankan proyek dengan compliance ketat (farmasi, pembangkit, marine).</p>

          <h2 id="cakupan-tsm" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Skala &amp; Kategori Proyek EPC TSM</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM telah mengeksekusi EPC project untuk berbagai skala dan industri:</p>

          <table className="w-full border-collapse my-[1.5rem] text-[0.9rem]">
            <tbody><tr><th>Kategori</th><th>Kapasitas Tipikal</th><th>Nilai Proyek</th><th>Durasi</th></tr>
            <tr><td>RO Industri Kecil</td><td>5–25 m³/jam</td><td>Rp 500 jt – 3 M</td><td>4–7 bulan</td></tr>
            <tr><td>RO Industri Besar</td><td>25–100 m³/jam</td><td>Rp 3 – 15 M</td><td>7–12 bulan</td></tr>
            <tr><td>SWRO Desalinasi</td><td>50–2.000 m³/hari</td><td>Rp 5 – 80 M</td><td>10–18 bulan</td></tr>
            <tr><td>RO+EDI PLTU/Farmasi</td><td>20–500 m³/jam</td><td>Rp 8 – 40 M</td><td>10–18 bulan</td></tr>
            <tr><td>Sistem ZLD Industri</td><td>30–200 m³/hari</td><td>Rp 25 – 150 M</td><td>15–30 bulan</td></tr>
            <tr><td>Watermaker Marine</td><td>5–30 m³/hari per unit</td><td>Rp 600 jt – 5 M</td><td>4–9 bulan</td></tr>
          </tbody></table>

          <h2 id="benefit" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Mengapa Memilih EPC Turnkey TSM?</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pertimbangan-pertimbangan kunci yang membuat klien memilih model EPC dengan TSM:</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Single Point Responsibility</strong> — saat ada masalah teknis di interface (misal: pompa beli dari vendor A vs piping yang dipasang vendor B), tidak ada perdebatan siapa yang harus tanggung. TSM bertanggung jawab penuh.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Performance Guarantee</strong> — TSM menjamin output kapasitas dan kualitas dengan retention 5–10% yang baru di-release setelah performance test selama 30–90 hari.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Cost Certainty</strong> — kontrak fixed-price dengan change order procedure formal. Variation di luar scope original dihitung transparan dengan unit rate yang sudah disepakati.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Schedule Certainty</strong> — milestone payment terkait dengan delivery, yang memberi insentif kuat bagi TSM untuk meet schedule. Liquidated damages untuk delay (max 10% kontrak).</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Local Capability + Global Quality</strong> — TSM workshop di Bekasi, tim engineering di Indonesia, dengan equipment dari supplier global terkemuka (Dow, Toray, Grundfos, Endress+Hauser).</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>After-Sales Continuity</strong> — kontraktor EPC adalah juga kontraktor maintenance — knowledge transfer mulus, tidak perlu re-onboarding vendor baru saat warranty habis.</li>
          </ul>

          <h2 id="risk-management" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Risk Management dalam EPC TSM</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">EPC adalah model di mana kontraktor mengambil banyak risiko. TSM mengelola risiko sistematis dengan framework formal:</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Technical risk</strong> — mitigated dengan FEED yang matang, conservative sizing, dan pemilihan vendor yang sudah terbukti</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Schedule risk</strong> — float 10–15% di critical path, parallel manufacturing untuk komponen long-lead</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Cost risk</strong> — sub-contracting fixed-price, FX hedging untuk komponen impor, contingency 5–10% sesuai kompleksitas</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Performance risk</strong> — performance bond, retention 5–10%, gradual ramp-up untuk validasi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Site risk</strong> — pre-construction site survey, force-majeure clause yang fair, koordinasi terjadwal dengan kontraktor lain</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Regulatory risk</strong> — review regulasi yang berlaku, koordinasi dengan otoritas terkait sejak tahap engineering</li>
          </ul>

          <h2 id="industri-cocok" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Industri yang Sering Memilih EPC Turnkey</h2>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/pltu">Pembangkit Listrik (PLTU)</Link></strong> — water treatment plant sebagai bagian dari overall plant EPC, biasanya sub-contracted ke specialist seperti TSM</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/farmasi">Industri Farmasi</Link></strong> — pabrik baru atau ekspansi besar dengan kebutuhan PW/WFI yang tervalidasi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/manufaktur">F&amp;B Manufaktur</Link></strong> — pabrik baru dengan integrated WTP-WWTP atau ZLD</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/properti">Real Estate Komersial</Link></strong> — gedung high-rise atau kompleks dengan central WTP &amp; STP terintegrasi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/maritim">Marine</Link></strong> — kapal komersial atau navy dengan watermaker SWRO terintegrasi</li>
          </ul>

          <h2 id="studi-kasus" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Studi Kasus EPC Lengkap</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Lihat contoh proyek EPC turnkey TSM yang telah diselesaikan:</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><Link to="/portofolio/pelindo"><strong>SWRO 1.100 m³/hari Pelindo Jakarta</strong></Link> — EPC turnkey dari engineering hingga handover, salah satu instalasi SWRO terbesar TSM</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><Link to="/portofolio/halliburton"><strong>UF System 47.000 LPD × 7 Set Halliburton Sarulla</strong></Link> — EPC untuk proyek geothermal di Sumatra Utara</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><Link to="/portofolio/pulau-ayer"><strong>SWRO 76 m³/hari Resort Pulau Ayer</strong></Link> — EPC turnkey untuk resort kepulauan dengan tantangan logistik</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><Link to="/portofolio/sinarmas-forestry"><strong>20+ Sistem WTP &amp; BWRO Sinarmas Forestry</strong></Link> — EPC multi-site untuk operasi reforestation</li>
          </ul>

          <h2 id="faq-epc" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa itu EPC turnkey dan apa bedanya dengan equipment supply?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">EPC (Engineering, Procurement, Construction) turnkey adalah model kontrak di mana satu kontraktor bertanggung jawab atas seluruh proyek dari desain awal hingga sistem siap dioperasikan, dengan performance guarantee. Berbeda dengan equipment supply yang hanya menyediakan peralatan, EPC mencakup civil work, electrical, instalasi, commissioning, training, dan handover. Klien menerima sistem yang sudah running pada kapasitas dan kualitas yang dijamin.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa skala proyek EPC yang TSM tangani?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM menangani EPC project dari skala kecil (RO industri 5–10 m³/jam, nilai Rp 500 juta–2 miliar) hingga skala besar (SWRO desalinasi 1.000+ m³/hari, ZLD pabrik tekstil, water treatment PLTU dengan boiler feed water plant — nilai puluhan miliar). Untuk proyek dengan kompleksitas tinggi atau lokasi remote, TSM dapat berkonsorsium dengan EPC contractor utama sebagai specialty contractor untuk water treatment package.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa keuntungan model EPC turnkey dibanding multi-contractor?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Keuntungan utama: (1) Single point responsibility — tidak ada finger-pointing antar vendor saat ada masalah, (2) Performance guarantee — TSM menjamin output kapasitas dan kualitas, (3) Schedule certainty — interface antar disiplin (mech, elec, civil, control) dikelola dalam satu kontraktor, (4) Cost certainty — fixed price kontrak dengan perubahan ditangani sebagai change order formal, (5) Lebih sedikit beban kepada tim klien untuk koordinasi. Trade-off: harga sedikit lebih tinggi dibanding multi-contractor karena kontraktor mengambil risiko interface.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa lama proyek EPC water treatment biasanya berjalan?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk EPC sistem RO industri 25–50 m³/jam: 6–10 bulan dari kontrak ditandatangani hingga handover. SWRO desalinasi 200–1.000 m³/hari: 12–18 bulan. Sistem multi-stream besar untuk PLTU atau pabrik tekstil ZLD: 18–30 bulan. Timeline mencakup engineering 2–4 bulan, procurement 3–6 bulan, manufacturing 3–8 bulan, instalasi 2–4 bulan, commissioning 1–3 bulan.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Bagaimana risiko proyek dikelola dalam EPC TSM?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM mengelola 6 kategori risiko: (1) Technical risk — melalui FEED rigorous, vendor benchmarking, conservative sizing, (2) Schedule risk — float 10–15% di critical path, parallel manufacturing, (3) Cost risk — fixed-price subcontract, hedging FX untuk komponen impor, (4) Performance risk — performance bond, retention payment hingga performance test lulus, (5) Site risk — pre-construction site survey, kontrak dengan force-majeure clause yang seimbang, (6) Regulatory risk — ahli regulasi internal untuk mengantisipasi perubahan.</p>

          <div style={{"marginTop":"2rem","padding":"2rem","background":"var(--ice)","borderRadius":"12px","borderLeft":"4px solid var(--accent)"}}>
            <h3 style={{"marginBottom":".75rem","color":"var(--navy)"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Diskusikan EPC Project Anda</h3>
            <p style={{"marginBottom":"1.25rem","color":"var(--muted)","fontSize":".92rem"}} className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kick-off meeting awal untuk membahas project requirements, scope EPC, dan timeline indicative. Initial budget estimate dapat diberikan dalam 7 hari kerja setelah brief.</p>
            <Link style={{"display":"inline-block","padding":".85rem 2rem","background":"var(--blue)","color":"#fff","borderRadius":"8px","fontWeight":"700","fontSize":".96rem","textDecoration":"none"}} to="/kontak"><Building className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Diskusi EPC Project →</Link>
          </div>

        </div>
      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#apa-itu-epc">Memahami EPC Turnkey</Link></li>
            <li><Link href="#cakupan-tsm">Skala &amp; Kategori</Link></li>
            <li><Link href="#benefit">Keuntungan EPC TSM</Link></li>
            <li><Link href="#risk-management">Risk Management</Link></li>
            <li><Link href="#industri-cocok">Industri Cocok</Link></li>
            <li><Link href="#studi-kasus">Studi Kasus EPC</Link></li>
            <li><Link href="#faq-epc">FAQ</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Layanan Lain</h4>
          <ul className="flex flex-col">
            <li><Link to="/layanan/feasibility">→ Studi Kelayakan</Link></li>
            <li><Link to="/layanan/desain">→ Desain &amp; Engineering</Link></li>
            <li><Link to="/layanan/instalasi">→ Instalasi &amp; Komisioning</Link></li>
            <li><Link to="/layanan/maintenance">→ Kontrak Perawatan</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Produk Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/produk/ro-industri">→ RO Industri</Link></li>
            <li><Link to="/produk/desalinasi">→ SWRO Desalinasi</Link></li>
            <li><Link to="/produk/demi">→ Demineralisasi/EDI</Link></li>
            <li><Link to="/produk/limbah">→ Sistem ZLD &amp; Limbah</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>

    </>
  );
};

export default LayananEpc;
