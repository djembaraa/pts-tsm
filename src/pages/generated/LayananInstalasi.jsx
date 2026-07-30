import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


const LayananInstalasi = () => {
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
.timeline-item{position:relative;padding-left:2.5rem;padding-bottom:1.4rem;border-left:2px solid var(--border);margin-left:1rem}
.timeline-item:last-child{border-left:2px solid transparent}
.timeline-item::before{content:'';position:absolute;left:-9px;top:.3rem;width:16px;height:16px;background:var(--accent);border-radius:50%;border:3px solid var(--white);box-shadow:0 0 0 1px var(--accent)}
.timeline-item h4{color:var(--navy);font-size:1rem;margin-bottom:.4rem}
.timeline-item p{font-size:.88rem;color:var(--muted);margin:0;line-height:1.65}

` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/layanan">Layanan</Link> › Instalasi &amp; Komisioning</div>
    <h1>Instalasi &amp; Komisioning Sistem RO Industri</h1>
    <p>Layanan profesional untuk instalasi sistem reverse osmosis dan water treatment industri di seluruh Indonesia — dari pre-commissioning, FAT, SAT, performance test, hingga training operator.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>
        <div className="prose max-w-none text-text">

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Instalasi yang baik adalah jembatan antara desain yang sempurna dan operasi yang andal. Sistem reverse osmosis sebaik apa pun rancangannya akan gagal mencapai performa target jika instalasi dilakukan asal-asalan: kebocoran piping yang tidak terdeteksi, kalibrasi instrumen yang dilewati, atau training operator yang sekadar formalitas — semua ini akan muncul sebagai masalah operasi dalam 6–12 bulan pertama.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>PT Tirta Sumber Makmur</strong> menyediakan layanan instalasi dan komisioning sistem water treatment dengan standar industri profesional, didukung tim field engineer berpengalaman dan workshop pre-fabrication di Bekasi yang memungkinkan sebagian besar pekerjaan dilakukan dalam kondisi terkontrol sebelum dikirim ke site.</p>

          <h2 id="cakupan-instalasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Cakupan Layanan Instalasi &amp; Komisioning</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Layanan instalasi TSM mencakup seluruh siklus dari mobilisasi hingga handover, dengan jaminan performa yang ditandatangani:</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Mobilisasi peralatan &amp; tim</strong> — pengiriman skid-mounted equipment, tools, dan personnel ke lokasi klien</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Instalasi mekanikal</strong> — positioning equipment, piping connection, pemasangan instrumen, support &amp; bracketing</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Instalasi elektrikal</strong> — termination kabel, koneksi MCC, panel control, grounding system</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pre-commissioning checks</strong> — leak test, electrical continuity test, instrument calibration, dry run</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Wet commissioning</strong> — flushing, chemical conditioning, ramp-up bertahap dengan monitoring parameter</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Performance test</strong> — verifikasi output kapasitas, kualitas, energy consumption sesuai design specification</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Operator training</strong> — sesi training teori dan hands-on untuk operator klien</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Documentation handover</strong> — penyerahan paket dokumen as-built dan manual operasi</li>
          </ul>

          <h2 id="timeline-instalasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Timeline Khas Proyek Instalasi</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Berikut ringkasan timeline standar untuk instalasi sistem RO industri kapasitas 10–50 m³/jam dari kedatangan equipment hingga handover:</p>

          <div className="timeline-item">
            <h4>Hari 1–3: Mobilisasi &amp; Persiapan</h4>
            <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Equipment delivery ke site, unloading dengan crane atau forklift, positioning ke ruang yang sudah disiapkan klien. Verifikasi kelengkapan mengacu packing list. Briefing safety dengan tim kontraktor klien.</p>
          </div>

          <div className="timeline-item">
            <h4>Hari 4–10: Instalasi Mekanikal</h4>
            <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pemasangan piping interconnect, koneksi ke utility (air baku, drain, listrik, kompresi udara), instalasi sensor di lokasi yang benar, support struktur untuk pipa large-diameter, anti-vibration mounting untuk pompa.</p>
          </div>

          <div className="timeline-item">
            <h4>Hari 11–14: Instalasi Elektrikal &amp; Control</h4>
            <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kabel power dari MCC ke pompa dan panel, kabel signal dari instrumen ke PLC, terminasi sesuai single line drawing, megger test setiap circuit, configuration PLC dan HMI sesuai control narrative yang sudah dibuat di tahap engineering.</p>
          </div>

          <div className="timeline-item">
            <h4>Hari 15–18: Pre-Commissioning</h4>
            <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Leak test pneumatik dan hydrostatic, kalibrasi sensor TDS dengan larutan standar, kalibrasi pH meter, kalibrasi flow meter, fungsi test seluruh control loop tanpa air, simulasi alarm. Semua hasil dicatat di formulir QA/QC.</p>
          </div>

          <div className="timeline-item">
            <h4>Hari 19–25: Wet Commissioning</h4>
            <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Flushing dengan air baku untuk membuang debu konstruksi, instal membran sesuai prosedur manufacturer, ramp-up bertahap (50% → 75% → 100% kapasitas), pengamatan tekanan diferensial, conductivity, dan recovery rate selama minimum 72 jam stabil.</p>
          </div>

          <div className="timeline-item">
            <h4>Hari 26–28: Performance Test &amp; SAT</h4>
            <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tes performa formal disaksikan klien: pengukuran output kapasitas pada beberapa skenario, sampling air permeate dan concentrate untuk dianalisa di lab independen, pencocokan dengan kriteria penerimaan di kontrak. Penandatanganan Site Acceptance Certificate.</p>
          </div>

          <div className="timeline-item">
            <h4>Hari 29–30: Training &amp; Handover</h4>
            <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sesi training operator klien (1–3 hari sesuai kompleksitas), drilling skenario emergency, penyerahan dokumen as-built, manual O&amp;M, sertifikat training, dan warranty document. Sistem resmi diserahkan ke klien.</p>
          </div>

          <h2 id="fat-sat" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Factory Acceptance Test (FAT) &amp; Site Acceptance Test (SAT)</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk proyek di mana risiko fitness-for-purpose perlu diminimalisir sebelum mobilisasi (terutama lokasi remote), TSM melakukan Factory Acceptance Test (FAT) di workshop Bekasi. Klien diundang menyaksikan langsung atau review via video call. Setelah lulus FAT, equipment dikirim ke site dan menjalani Site Acceptance Test (SAT) dengan air baku aktual.</p>

          <table className="w-full border-collapse my-[1.5rem] text-[0.9rem]">
            <tbody><tr><th>Parameter</th><th>FAT (Workshop Bekasi)</th><th>SAT (Site Klien)</th></tr>
            <tr><td>Lokasi</td><td>Workshop TSM Bekasi</td><td>Lokasi instalasi final</td></tr>
            <tr><td>Air uji</td><td>Air uji standar (TDS terkontrol)</td><td>Air baku aktual klien</td></tr>
            <tr><td>Fokus</td><td>Functional, kelengkapan, kebocoran</td><td>Performa pada kondisi nyata</td></tr>
            <tr><td>Durasi</td><td>1–2 hari</td><td>1–3 hari (tergantung sistem)</td></tr>
            <tr><td>Output</td><td>FAT Certificate</td><td>SAT Certificate &amp; Handover</td></tr>
          </tbody></table>

          <h2 id="training" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Operator Training: Tidak Sekadar Formalitas</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Banyak sistem water treatment gagal beroperasi optimal bukan karena masalah desain atau instalasi, tapi karena operator tidak memahami sistem dengan benar. TSM menerapkan training berbasis kompetensi, bukan sekadar presentasi:</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sesi 1 (3 jam)</strong>: Overview proses, flow diagram, fungsi tiap unit operation</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sesi 2 (3 jam)</strong>: Prosedur start-up, shut-down normal, dan emergency shut-down</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sesi 3 (4 jam, hands-on)</strong>: Pembacaan HMI, identifikasi alarm, response tier-1</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sesi 4 (3 jam)</strong>: Jadwal perawatan harian/mingguan, sampling air, pengisian logbook</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sesi 5 (2 jam)</strong>: Tes tertulis dan praktik untuk validasi kompetensi</li>
          </ul>

          <h2 id="industri-cocok" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Industri yang Telah Kami Layani</h2>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/farmasi">Industri Farmasi</Link></strong> — instalasi PW/WFI dengan validasi IQ/OQ/PQ untuk audit BPOM</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/pltu">Pembangkit Listrik</Link></strong> — boiler feed water plant dengan acceptance test ASME BPE</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/maritim">Marine &amp; Offshore</Link></strong> — watermaker SWRO dengan sertifikasi BKI on-board</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/rs">Rumah Sakit</Link></strong> — sistem RO hemodialisis dengan compliance ANSI/AAMI RD52</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/manufaktur">Manufaktur F&amp;B</Link></strong> — sistem food-grade dengan material 316L stainless steel</li>
          </ul>

          <h2 id="faq-instalasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa lama proses instalasi sistem RO industri?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk sistem RO industri 10–50 m³/jam dengan civil yang sudah siap, durasi instalasi mekanikal 2–3 minggu, ditambah commissioning 5–10 hari. Sistem yang lebih kompleks (SWRO dengan intake laut, multi-stage RO+EDI, atau sistem dengan struktur penyangga khusus) membutuhkan 4–8 minggu. Sistem skid-mounted yang sudah pre-fabricated di workshop TSM memangkas waktu instalasi on-site hingga 50%.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa beda Factory Acceptance Test (FAT) dan Site Acceptance Test (SAT)?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">FAT dilakukan di workshop TSM Bekasi sebelum sistem dikirim — klien menyaksikan tes tekanan, simulasi operasi dengan air uji, verifikasi kelengkapan komponen, dan pengukuran parameter dasar. SAT dilakukan di lokasi klien setelah instalasi dengan air baku aktual — verifikasi performa pada kondisi nyata, output kualitas air, dan validasi semua control loop. Setelah lulus SAT, sistem diserahterimakan ke klien.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah TSM menyediakan training operator setelah instalasi?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ya, training operator adalah bagian standar dari paket instalasi TSM. Sesi training mencakup: (1) overview sistem dan flow proses, (2) prosedur start-up dan shut-down, (3) pembacaan parameter operasi normal vs alarm, (4) prosedur emergency dan troubleshooting tier-1, (5) jadwal perawatan harian/mingguan/bulanan. Total durasi 1–3 hari sesuai kompleksitas sistem. Sertifikat training diberikan ke peserta.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Bagaimana TSM menjamin kualitas instalasi di lokasi remote?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk lokasi remote (offshore platform, pulau terpencil, kawasan industri di luar Jawa), TSM mengadopsi pendekatan pre-fabrication: sebanyak mungkin pekerjaan dilakukan di workshop Bekasi (skid mounting, piping di-route, panel listrik wired), sehingga pekerjaan on-site hanya finishing dan koneksi. Tim instalasi bekerja dengan checklist QA/QC yang ditandatangani per milestone. Inspector TSM dapat ditugaskan menetap di site untuk proyek besar.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa saja dokumen yang diserahkan setelah commissioning selesai?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Paket dokumen handover mencakup: As-Built Drawing (PFD, P&amp;ID, GA actual hasil instalasi), Manual Operasi &amp; Maintenance, hasil FAT dan SAT report, performance test certificate, kalibrasi instrumen certificate, daftar spare part recommendation, sertifikat training operator, dan warranty certificate. Untuk industri regulated (farmasi, RS), paket ditambah validation document IQ/OQ/PQ.</p>

          <div style={{"marginTop":"2rem","padding":"2rem","background":"var(--ice)","borderRadius":"12px","borderLeft":"4px solid var(--accent)"}}>
            <h3 style={{"marginBottom":".75rem","color":"var(--navy)"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Rencanakan Instalasi Sistem Anda</h3>
            <p style={{"marginBottom":"1.25rem","color":"var(--muted)","fontSize":".92rem"}} className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Diskusi awal untuk site assessment, schedule planning, dan koordinasi dengan kontraktor civil Anda. Tim TSM dapat memberikan timeline indikatif dalam 3 hari kerja.</p>
            <Link style={{"display":"inline-block","padding":".85rem 2rem","background":"var(--blue)","color":"#fff","borderRadius":"8px","fontWeight":"700","fontSize":".96rem","textDecoration":"none"}} to="/kontak">🔧 Diskusi Instalasi →</Link>
          </div>

        </div>
      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#cakupan-instalasi">Cakupan Layanan</Link></li>
            <li><Link href="#timeline-instalasi">Timeline Instalasi</Link></li>
            <li><Link href="#fat-sat">FAT vs SAT</Link></li>
            <li><Link href="#training">Training Operator</Link></li>
            <li><Link href="#industri-cocok">Industri Dilayani</Link></li>
            <li><Link href="#faq-instalasi">FAQ</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Layanan Lain</h4>
          <ul className="flex flex-col">
            <li><Link to="/layanan/desain">→ Desain &amp; Engineering</Link></li>
            <li><Link to="/layanan/maintenance">→ Kontrak Perawatan</Link></li>
            <li><Link to="/layanan/darurat">→ Servis Darurat 24/7</Link></li>
            <li><Link to="/layanan/epc">→ Turnkey EPC</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Produk Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/produk/ro-industri">→ RO Industri</Link></li>
            <li><Link to="/produk/ro-mobile">→ RO Mobile / Skid</Link></li>
            <li><Link to="/produk/desalinasi">→ Sistem Desalinasi</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Studi Kasus Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/portofolio/pelindo">→ Instalasi SWRO Pelindo</Link></li>
            <li><Link to="/portofolio/pulau-ayer">→ Instalasi Resort Pulau Ayer</Link></li>
            <li><Link to="/portofolio/halliburton">→ Instalasi UF Halliburton</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>

    </>
  );
};

export default LayananInstalasi;
