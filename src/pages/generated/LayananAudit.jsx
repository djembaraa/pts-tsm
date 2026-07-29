import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList } from 'lucide-react';


const LayananAudit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/layanan">Layanan</Link> › Audit Kualitas Air</div>
    <h1>Audit Kualitas Air &amp; Sistem Water Treatment</h1>
    <p>Layanan asesmen profesional untuk mengevaluasi performa sistem reverse osmosis, kualitas air olahan, dan kompatibilitas terhadap regulasi industri yang berlaku.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>
        <div className="prose max-w-none text-text">

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem water treatment yang sudah beroperasi tahunan sering mengalami "performance drift" — penurunan bertahap performa yang tidak terlalu kentara dari hari ke hari, tetapi kumulatif menjadi inefisiensi besar. Membran yang fouling pelan, pompa yang derate, sensor yang drift kalibrasinya, atau dosing kimia yang tidak optimal — semua ini biasanya tertangkap saat audit komprehensif, bukan saat kunjungan rutin.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>PT Tirta Sumber Makmur</strong> menyediakan layanan audit kualitas air dan sistem water treatment yang independen, profesional, dan berbasis data laboratorium. Audit kami berguna untuk: persiapan audit BPOM/KLHK, evaluasi sistem yang akan dibeli (due diligence M&amp;A), benchmarking efisiensi operasional, atau diagnosa masalah yang sudah berlangsung lama.</p>

          <h2 id="kenapa-audit" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Kapan Anda Perlu Audit Kualitas Air?</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Beberapa skenario di mana audit terstruktur memberikan nilai tinggi:</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Persiapan audit eksternal</strong> — gap analysis terhadap CPOB, KLHK Permen 5/2014, ANSI/AAMI RD52, atau standar industri lain</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sistem yang dibeli dari pihak lain</strong> — due diligence saat akuisisi pabrik atau gedung dengan sistem water treatment terpasang</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Performance drift yang dicurigai</strong> — energy bill naik, recovery turun, kualitas tidak stabil — tapi penyebab pasti belum jelas</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sebelum keputusan upgrade besar</strong> — apakah retrofit cukup atau butuh replacement total — audit memberi data untuk keputusan</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Compliance recurring</strong> — beberapa sertifikasi (CPOB, ISO 14001) mengharuskan audit periodik dengan dokumentasi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Resolusi dispute</strong> — antara klien dan vendor sebelumnya, atau antara unit operasi dan engineering corporate</li>
          </ul>

          <h2 id="cakupan-audit" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Cakupan Audit Komprehensif TSM</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Audit standar TSM mencakup 5 dimensi yang saling melengkapi untuk memberikan gambaran holistik kondisi sistem:</p>

          <table className="w-full border-collapse my-[1.5rem] text-[0.9rem]">
            <tbody><tr><th>Dimensi Audit</th><th>Aktivitas</th><th>Output</th></tr>
            <tr><td>1. Water Quality Analysis</td><td>Sampling 4–8 titik, analisa lab terakreditasi, parameter fisika-kimia-mikrobiologi</td><td>Lab Report &amp; Compliance Matrix</td></tr>
            <tr><td>2. Performance Benchmarking</td><td>Pengukuran parameter operasi vs design spec, recovery, salt rejection, energy consumption</td><td>Performance Gap Report</td></tr>
            <tr><td>3. Equipment Condition</td><td>Inspeksi visual pompa, membran housing, instrumen, panel, piping, support structure</td><td>Equipment Health Score</td></tr>
            <tr><td>4. Documentation Review</td><td>Review log operasi, maintenance record, calibration record, training record</td><td>Documentation Compliance Audit</td></tr>
            <tr><td>5. Regulatory Gap Analysis</td><td>Pemetaan kondisi aktual vs standar regulasi yang relevan (CPOB, KLHK, BKI, dll)</td><td>Gap Analysis Matrix &amp; Risk Score</td></tr>
          </tbody></table>

          <h2 id="parameter" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Parameter Air yang Diukur</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pengambilan sampel dilakukan di multiple titik untuk membangun mass balance lengkap dan mengidentifikasi performa tiap stage:</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Feed water (sumber)</strong> — TDS, conductivity, pH, hardness, alkalinitas, ion-ion utama, SDI, TOC, mikrobiologi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Setelah pre-treatment</strong> — turbidity, SDI (untuk validasi kinerja filter), residual chlorine</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>RO permeate</strong> — TDS, conductivity, pH, parameter spesifik produk akhir</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>RO concentrate</strong> — TDS, scaling indices (LSI, S&amp;DSI), untuk evaluasi recovery rate</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Storage tank</strong> — mikrobiologi, residual disinfectant, TDS untuk verifikasi kontaminasi balik</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Point of use</strong> — kualitas air pada keran terjauh untuk validasi distribusi</li>
          </ul>

          <h2 id="metodologi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Metodologi Audit Berbasis Standar Internasional</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Audit TSM mengikuti pendekatan terstruktur yang mengacu pada framework internasional:</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>ISO 19011:2018</strong> — guidelines untuk auditing management systems</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>ASTM D3739</strong> — standard practice for calculation and adjustment of LSI for reverse osmosis</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>USP &lt;645&gt;</strong> — water conductivity untuk farmasi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>ANSI/AAMI RD52</strong> — water quality untuk hemodialisis</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>SNI 6989</strong> — metoda pengambilan sampel air untuk pengujian</li>
          </ul>

          <h2 id="industri-cocok" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Industri yang Sering Membutuhkan Audit</h2>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/farmasi">Industri Farmasi</Link></strong> — annual product review untuk sistem PW/WFI sebagai bagian dari Quality Management System</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/rs">Rumah Sakit</Link></strong> — audit periodik sistem hemodialisis untuk akreditasi rumah sakit</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/manufaktur">F&amp;B Manufaktur</Link></strong> — audit BPOM POM-CPPOB tahunan</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Real estate komersial</strong> — building handover audit saat akuisisi atau lease renewal</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kawasan industri</strong> — common WTP audit untuk regulasi KLHK</li>
          </ul>

          <h2 id="studi-kasus" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Studi Kasus: Audit Pra-Inspeksi BPOM</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sebuah pabrik farmasi di Bekasi yang sebelumnya beroperasi sebagai pabrik OEM (kontraktor) hendak naik kelas menjadi pabrik dengan sertifikat CPOB sendiri untuk produk OTC. TSM melakukan audit komprehensif sistem PW yang sudah ada (kapasitas 3 m³/jam, dipasang 8 tahun lalu).</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Temuan audit:</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Konduktivitas PW rata-rata 1,8 µS/cm — lewat batas USP 1,3 µS/cm</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">TOC tidak diukur online — hanya sampling bulanan (tidak compliant CPOB 2018)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Loop distribusi tidak ada UV inline — risiko kontaminasi mikrobiologi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Sanitasi loop tidak ada SOP terdokumentasi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Membran RO sudah berumur 6 tahun — sudah kehilangan rejection untuk bicarbonate</li>
          </ul>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Rekomendasi action plan dari TSM, total biaya Rp 280 juta:</p>

          <ol className="ml-[1.5rem] my-[1.05rem] list-decimal">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Replace membran RO dengan Dow Filmtec BW30-365 (Rp 85 juta)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Tambah EDI module setelah RO untuk konduktivitas konsisten &lt;0,5 µS/cm (Rp 110 juta)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Install online TOC analyzer (Rp 45 juta)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Retrofit UV inline di loop distribusi (Rp 18 juta)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Penyusunan SOP sanitasi dan training operator (Rp 22 juta)</li>
          </ol>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Setelah implementasi, pabrik lulus inspeksi CPOB BPOM tanpa observasi pada sistem air. Audit TSM menjadi dokumen pendukung dalam dossier yang dipresentasikan ke inspektur.</p>

          <h2 id="faq-audit" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa lama proses audit kualitas air dan sistem RO?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Audit on-site untuk sistem RO industri standar memakan waktu 1–2 hari kerja, mencakup pengukuran parameter, pengambilan sampel, dan inspeksi visual. Analisa laboratorium memakan 5–10 hari. Penyusunan audit report dan rekomendasi 7–14 hari setelah hasil lab keluar. Total 3–5 minggu dari kunjungan pertama hingga laporan final.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Parameter apa saja yang diukur dalam audit kualitas air?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Parameter standar mencakup: TDS, conductivity, pH, hardness (CaCO3, Ca, Mg), alkalinitas, klorida, sulfat, silika, nitrat, besi, mangan, TOC, SDI, mikrobiologi (TPC, coliform), serta parameter spesifik per industri seperti endotoksin (farmasi/RS) atau heavy metal (manufaktur). Sample diambil di multiple titik: feed water, after pre-treatment, RO permeate, dan RO concentrate.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa output deliverable audit TSM?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Paket deliverable audit TSM mencakup: Audit Report 30–60 halaman, hasil analisa laboratorium independen, performance benchmarking vs design specification, gap analysis terhadap regulasi yang relevan (BPOM/KLHK/BKI), root cause analysis untuk setiap masalah teridentifikasi, prioritized action plan dengan estimasi biaya, dan executive summary 2–4 halaman untuk manajemen.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah audit TSM diakui untuk audit eksternal BPOM atau KLHK?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Audit TSM bersifat technical assessment yang membantu klien menyiapkan diri menghadapi audit eksternal — bukan pengganti audit oleh otoritas. Hasil audit TSM dapat menjadi bagian dokumen pendukung saat audit BPOM (untuk kompatibilitas CPOB), KLHK (untuk compliance baku mutu air limbah), atau BKI (untuk sertifikasi watermaker kapal). Lab yang TSM gunakan adalah lab terakreditasi KAN.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa biaya audit kualitas air dan sistem RO?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Biaya audit standar untuk sistem RO industri di Jabodetabek: Rp 18–45 juta tergantung kompleksitas dan jumlah titik sampling. Sistem multi-stream (RO + UF + EDI) atau sistem skala besar (&gt;50 m³/jam) Rp 50–120 juta. Sistem multi-site dengan benchmarking antar lokasi negotiable. Biaya travel di luar Jabodetabek dihitung terpisah dengan rate at-cost.</p>

          <div style={{"marginTop":"2rem","padding":"2rem","background":"var(--ice)","borderRadius":"12px","borderLeft":"4px solid var(--accent)"}}>
            <h3 style={{"marginBottom":".75rem","color":"var(--navy)"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Jadwalkan Audit untuk Sistem Anda</h3>
            <p style={{"marginBottom":"1.25rem","color":"var(--muted)","fontSize":".92rem"}} className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Diskusi awal untuk menentukan scope audit yang sesuai kebutuhan: persiapan audit BPOM, due diligence akuisisi, atau performance benchmarking. Proposal audit disiapkan dalam 5 hari kerja.</p>
            <Link style={{"display":"inline-block","padding":".85rem 2rem","background":"var(--blue)","color":"#fff","borderRadius":"8px","fontWeight":"700","fontSize":".96rem","textDecoration":"none"}} to="/kontak"><ClipboardList className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Diskusi Audit Sistem →</Link>
          </div>

        </div>
      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#kenapa-audit">Kapan Perlu Audit?</Link></li>
            <li><Link href="#cakupan-audit">Cakupan Audit</Link></li>
            <li><Link href="#parameter">Parameter Air</Link></li>
            <li><Link href="#metodologi">Metodologi</Link></li>
            <li><Link href="#industri-cocok">Industri yang Membutuhkan</Link></li>
            <li><Link href="#studi-kasus">Studi Kasus</Link></li>
            <li><Link href="#faq-audit">FAQ</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Layanan Lain</h4>
          <ul className="flex flex-col">
            <li><Link to="/layanan/sertifikasi">→ Sertifikasi &amp; Compliance</Link></li>
            <li><Link to="/layanan/feasibility">→ Studi Kelayakan</Link></li>
            <li><Link to="/layanan/maintenance">→ Kontrak Perawatan</Link></li>
            <li><Link to="/layanan/desain">→ Desain &amp; Engineering</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Produk Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/produk/instrumen">→ Instrumen &amp; Sensor</Link></li>
            <li><Link to="/produk/membran">→ Membran RO</Link></li>
            <li><Link to="/produk/kimia">→ Antiscalant &amp; Biocide</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Artikel Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/artikel/monitoring-kualitas-air-ro">→ Monitoring Kualitas Air</Link></li>
            <li><Link to="/artikel/standar-air-farmasi-bpom">→ Standar Air Farmasi BPOM</Link></li>
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

export default LayananAudit;
