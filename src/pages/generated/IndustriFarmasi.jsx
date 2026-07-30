import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const IndustriFarmasi = () => {
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

` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/industri">Industri</Link> › Industri Farmasi</div>
    <h1>Sistem Air Farmasi: Purified Water, WFI &amp; Pure Steam</h1>
    <p>Sistem produksi air farmasi sesuai BPOM CPOB 2018, USP, dan EU GMP Annex 15 — dengan validasi IQ/OQ/PQ lengkap untuk pabrik farmasi, kosmetik, dan biotech di Indonesia.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>
        <div className="prose max-w-none text-text">


          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Industri farmasi adalah salah satu industri paling teregulasi di dunia, dan air adalah salah satu raw material yang paling kritis dalam proses produksinya. Air kontak langsung dengan API (Active Pharmaceutical Ingredient) selama formulasi, menjadi bagian dari produk akhir untuk sediaan injeksi, dan digunakan untuk membersihkan equipment yang akan kontak dengan produk berikutnya. Kontaminasi sekecil apa pun dapat menyebabkan recall batch atau worse — masalah keselamatan pasien.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>PT Tirta Sumber Makmur</strong> menyediakan sistem Purified Water (PW), Water for Injection (WFI), dan Pure Steam untuk industri farmasi di Indonesia, dengan dokumentasi validasi lengkap sesuai BPOM CPOB 2018 dan referensi ke EU GMP Annex 15, USP, EP, dan JP.</p>

          <h2 id="standar-air-farmasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Standar Air untuk Industri Farmasi</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Industri farmasi mengenal beberapa kelas air dengan persyaratan kualitas yang berbeda:</p>

          <table className="w-full border-collapse my-[1.5rem] text-[0.9rem]">
            <tbody><tr><th>Kelas Air</th><th>Conductivity</th><th>TOC</th><th>Mikrobiologi</th><th>Endotoxin</th><th>Penggunaan</th></tr>
            <tr><td>Purified Water (PW)</td><td>&lt;1,3 µS/cm</td><td>&lt;500 ppb</td><td>&lt;100 cfu/mL</td><td>N/A</td><td>Solid &amp; topikal non-injeksi</td></tr>
            <tr><td>Highly Purified Water (HPW)</td><td>&lt;1,3 µS/cm</td><td>&lt;500 ppb</td><td>&lt;10 cfu/100mL</td><td>&lt;0,25 EU/mL</td><td>Sediaan steril non-injeksi</td></tr>
            <tr><td>Water for Injection (WFI)</td><td>&lt;1,3 µS/cm</td><td>&lt;500 ppb</td><td>&lt;10 cfu/100mL</td><td>&lt;0,25 EU/mL</td><td>Injeksi, ophthalmic</td></tr>
            <tr><td>Pure Steam</td><td>Conductivity setara WFI</td><td>—</td><td>Sterile</td><td>&lt;0,25 EU/mL</td><td>Sterilisasi equipment</td></tr>
          </tbody></table>

          <h2 id="teknologi-pw-wfi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Teknologi Sistem PW &amp; WFI</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem produksi PW &amp; WFI yang modern di Indonesia umumnya menggunakan kombinasi teknologi membran dan elektrik (cold WFI) atau distilasi multiple effect (hot WFI). TSM mendukung kedua pendekatan:</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Cold WFI (Membrane-Based)</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Konfigurasi: Pre-treatment (multimedia, softener, carbon, dechlorination) → RO Stage 1 → RO Stage 2 → EDI (Electrodeionization) → UV → 0,2 μm sterile filter → ultrafiltration ceramic untuk endotoxin removal → storage tank dengan loop hot sanitization. Cocok untuk pabrik dengan demand WFI moderate dan ingin menghindari boiler steam besar untuk distilasi.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Hot WFI (Distillation-Based)</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Konfigurasi: Pre-treatment → RO+EDI → Multiple Effect Distillation (4–6 effect) → storage hot 80°C → distribusi loop hot atau cycled. Standar de facto historis untuk WFI farmasi. Modal lebih tinggi tapi kemurnian sangat reliable, dengan steam sebagai tambahan output.</p>

          <h2 id="validasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Validasi IQ/OQ/PQ untuk Sistem PW/WFI</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem PW dan WFI di farmasi WAJIB di-validasi formal mengikuti CPOB 2018 dan EU GMP Annex 15:</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>IQ (Installation Qualification)</strong> — verifikasi instalasi sesuai design, kelengkapan komponen, material certificate (316L stainless steel pharma grade), as-built P&amp;ID</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>OQ (Operational Qualification)</strong> — testing operasi pada multiple skenario: minimum flow, maximum flow, sanitization cycle, recovery dari power failure</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>PQ Phase I (2–4 minggu)</strong> — daily intensive sampling untuk membuktikan sistem dapat memenuhi spec setiap hari</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>PQ Phase II (4 minggu)</strong> — daily sampling untuk menetapkan baseline statistical untuk operasi rutin</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>PQ Phase III (12 bulan)</strong> — monthly sampling untuk capture variasi musim, dokumentasi sebagai bagian Annual Product Review</li>
          </ul>

          <h2 id="material-grade" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Material Pharma-Grade</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Komponen yang kontak dengan air pharma harus menggunakan material yang tidak melepaskan kontaminan:</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>316L stainless steel</strong> dengan electropolish (Ra &lt;0,5 μm) untuk piping dan tank</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>EPDM atau PTFE</strong> untuk gasket dan o-ring (FDA 21 CFR 177)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>PVDF</strong> untuk piping cold WFI dan PW polishing loop</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sanitary fittings</strong> Tri-Clamp untuk kemudahan dismantling dan sanitasi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Slope piping</strong> 1% untuk drainage gravity dengan zero dead leg</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Diaphragm valve</strong> untuk loop sterile (no crevice, full drainage)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Material certificate (3.1 mill cert)</strong> wajib untuk semua komponen kontak</li>
          </ul>

          <h2 id="solusi-tsm" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Layanan TSM untuk Industri Farmasi</h2>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Engineering, Procurement &amp; Construction (EPC)</strong> turnkey untuk sistem PW/WFI</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Validasi IQ/OQ/PQ</strong> dengan protocol writing dan execution lengkap</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sanitization system design</strong> — hot water (80°C), ozone, atau chemical</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Instrumentasi online</strong> TOC, conductivity, microbial monitoring</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Annual Product Review support</strong> — sampling, analisa, trending report</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Audit eksternal preparation</strong> — gap analysis sebelum inspeksi BPOM</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Material upgrade &amp; retrofit</strong> sistem existing dari ion exchange ke RO+EDI</li>
          </ul>

          <h2 id="referensi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Referensi Industri Farmasi</h2>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pabrik farmasi Bekasi &amp; Cikampek</strong> — sistem PW 3–8 m³/jam dengan validasi BPOM</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pabrik kosmetik Jakarta</strong> — RO+EDI untuk product-contact water</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Klinik bedah minor &amp; ophthalmology</strong> — sistem WFI compact untuk rinsing</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Manufaktur produk eksport ke Jepang &amp; Eropa</strong> — sistem dengan compliance dual-jurisdiction</li>
          </ul>


          <h2 id="faq" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

<h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa beda Purified Water (PW) dan Water for Injection (WFI)?</h3>
<p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">PW dan WFI memiliki spesifikasi kimia yang sama (conductivity &lt;1,3 µS/cm, TOC &lt;500 ppb), bedanya pada parameter mikrobiologi: PW &lt;100 cfu/mL alert level, WFI &lt;10 cfu/100mL plus endotoxin &lt;0,25 EU/mL. WFI dipakai untuk produk injeksi yang masuk langsung ke darah, sehingga harus bebas pyrogen. Cara produksi WFI yang accepted: multiple effect distillation atau membrane process tervalidasi (RO+EDI+UF dengan validasi mikrobiologi).</p>
<h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah BPOM Indonesia menerima sistem WFI berbasis membran (cold WFI)?</h3>
<p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ya, BPOM CPOB 2018 mengikuti EU GMP yang sejak 2017 menerima cold WFI berbasis membran (RO+EDI+UF dengan validasi). Pabrik baru di Indonesia umumnya memilih cold WFI karena energy efficiency lebih baik dan tidak butuh boiler steam besar. Validasi lebih intensive (perlu menunjukkan endotoxin removal yang konsisten), tapi setelah validated dapat dioperasikan dengan opex jauh lebih rendah dari distilasi.</p>
<h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa lama validasi IQ/OQ/PQ sistem PW/WFI?</h3>
<p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">IQ 5–10 hari setelah instalasi selesai, OQ 2–4 minggu, PQ Phase I 2–4 minggu intensive sampling, PQ Phase II 4 minggu daily sampling. Total dari IQ hingga PQ Phase II selesai: 3–4 bulan. PQ Phase III dilakukan paralel dengan operasi normal selama 1 tahun. Sistem dapat mulai dipakai untuk produksi (dengan release authorization) setelah PQ Phase II positive — biasanya 3–4 bulan setelah commissioning.</p>
<h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa biaya sistem PW farmasi?</h3>
<p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Capex turnkey: PW 1 m³/jam (klinik &amp; pabrik kecil) Rp 580 juta–1,1 miliar, PW 3 m³/jam (pabrik medium) Rp 1,8–3,2 miliar, PW 8 m³/jam dengan WFI distillation 1 m³/jam (pabrik tier-1) Rp 7–14 miliar. Biaya termasuk engineering, equipment 316L pharma-grade, instalasi, validasi IQ/OQ/PQ, training, dan dokumentasi compliance. Tidak termasuk civil work dan utility (listrik, steam, chilled water).</p>
<h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah TSM bisa membantu retrofit sistem farmasi existing?</h3>
<p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ya. Banyak pabrik farmasi yang dibangun 15+ tahun lalu menggunakan sistem ion exchange yang kini tidak compliant dengan CPOB 2018 (TOC tidak terukur online, konduktivitas tidak konsisten). TSM melakukan retrofit dengan upgrade ke RO+EDI, install online TOC analyzer, redesign distribution loop, dan re-validasi IQ/OQ/PQ. Retrofit phasing dapat di-plan sehingga produksi tidak terhenti.</p>

          <div style={{"marginTop":"2rem","padding":"2rem","background":"var(--ice)","borderRadius":"12px","borderLeft":"4px solid var(--accent)"}}>
            <h3 style={{"marginBottom":".75rem","color":"var(--navy)"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Konsultasi Farmasi</h3>
            <p style={{"marginBottom":"1.25rem","color":"var(--muted)","fontSize":".92rem"}} className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tim TSM siap membantu menyusun proposal teknis &amp; komersial sesuai kebutuhan Anda. Site visit gratis untuk lokasi Jabodetabek.</p>
            <Link style={{"display":"inline-block","padding":".85rem 2rem","background":"var(--blue)","color":"#fff","borderRadius":"8px","fontWeight":"700","fontSize":".96rem","textDecoration":"none"}} to="/kontak">💊 Konsultasi Farmasi →</Link>
          </div>

        </div>
      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#standar-air-farmasi">Standar Air Farmasi</Link></li>
            <li><Link href="#teknologi-pw-wfi">Teknologi PW &amp; WFI</Link></li>
            <li><Link href="#validasi">Validasi IQ/OQ/PQ</Link></li>
            <li><Link href="#material-grade">Material Pharma-Grade</Link></li>
            <li><Link href="#solusi-tsm">Layanan TSM</Link></li>
            <li><Link href="#referensi">Referensi</Link></li>
            <li><Link href="#faq">FAQ</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Industri Lain</h4>
          <ul className="flex flex-col">
            <li><Link to="/industri/rs">→ Rumah Sakit</Link></li>
            <li><Link to="/industri/manufaktur">→ Manufaktur F&amp;B</Link></li>
            <li><Link to="/industri/maritim">→ Maritim Marine</Link></li>
            <li><Link to="/industri/properti">→ Properti</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Produk Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/produk/ro-industri">→ RO Industri</Link></li>
            <li><Link to="/produk/demi">→ Demineralisasi/EDI</Link></li>
            <li><Link to="/produk/uf">→ Ultrafiltrasi</Link></li>
            <li><Link to="/produk/membran">→ Membran RO</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Layanan Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/layanan/sertifikasi">→ Sertifikasi &amp; Compliance</Link></li>
            <li><Link to="/layanan/audit">→ Audit Sistem</Link></li>
            <li><Link to="/layanan/epc">→ EPC Turnkey</Link></li>
            <li><Link to="/layanan/desain">→ Desain &amp; Engineering</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Artikel Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/artikel/standar-air-farmasi-bpom">→ Standar Air Farmasi BPOM</Link></li>
            <li><Link to="/artikel/air-farmasi-ro-edi">→ Teknologi RO+EDI Farmasi</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>

    </>
  );
};

export default IndustriFarmasi;
