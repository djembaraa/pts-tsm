import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const LayananFeasibility = () => {
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
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/layanan">Layanan</Link> › Studi Kelayakan</div>
    <h1>Studi Kelayakan Proyek Water Treatment</h1>
    <p>Asesmen technical dan financial yang independen untuk membantu Anda mengambil keputusan investasi water treatment yang tepat — dari instalasi RO baru, SWRO, ZLD, hingga proyek water reuse skala industri.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>
        <div className="prose max-w-none text-text">

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Investasi water treatment adalah keputusan capex yang signifikan — biasanya 0,5–5% dari nilai pabrik atau gedung yang dilayani. Keputusan teknologi yang salah pada tahap perencanaan akan menghasilkan operating cost 30–60% lebih tinggi sepanjang umur sistem (10–15 tahun). Studi kelayakan yang berkualitas menjadi instrumen krusial untuk menghindari pilihan investasi yang costly to reverse.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>PT Tirta Sumber Makmur</strong> menyediakan jasa studi kelayakan komprehensif untuk proyek water treatment industri di Indonesia. Sebagai engineering firm yang juga merupakan kontraktor EPC dan equipment supplier, TSM memiliki insight realistis tentang biaya, lead time, dan operating pattern yang sering tidak akurat dalam studi yang dibuat konsultan murni.</p>

          <h2 id="kenapa-fs" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Mengapa Studi Kelayakan Krusial?</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Beberapa skenario di mana studi kelayakan menyelamatkan klien dari keputusan investasi yang buruk:</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pilihan teknologi multi-option</strong> — RO+EDI vs Mixed Bed Polisher, SWRO vs hauling air dari mainland, ZLD full vs partial — semua berdampak besar ke capex/opex</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sizing capacity</strong> — over-capacity 50% menambah capex 30%, under-capacity menyebabkan bottleneck produksi setelah expansion</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Lokasi optimal</strong> — untuk SWRO, jarak intake ke laut, ketinggian elevasi, dan akses transportasi mempengaruhi capex significant</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Build vs buy decision</strong> — apakah lebih ekonomis own-and-operate, BOO (build-own-operate dari pihak ke-3), atau service contract</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Regulatory feasibility</strong> — apakah proyek dapat memenuhi izin lingkungan dan compliance yang berlaku, dengan biaya yang reasonable</li>
          </ul>

          <h2 id="cakupan-fs" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Cakupan Studi Kelayakan TSM</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Studi kelayakan komprehensif TSM mencakup 5 dimensi utama yang harus semua positive untuk proyek dinyatakan "feasible":</p>

          <table className="w-full border-collapse my-[1.5rem] text-[0.9rem]">
            <tbody><tr><th>Dimensi</th><th>Pertanyaan Utama</th><th>Output</th></tr>
            <tr><td>Technical Feasibility</td><td>Apakah teknologi tersedia dan terbukti untuk skala dan kondisi spesifik proyek?</td><td>Technology evaluation matrix, vendor benchmarking</td></tr>
            <tr><td>Financial Feasibility</td><td>Apakah investasi memberikan return yang acceptable (NPV positive, IRR &gt; hurdle rate)?</td><td>Financial model, NPV/IRR/payback, sensitivity</td></tr>
            <tr><td>Environmental Feasibility</td><td>Apakah proyek dapat memperoleh izin lingkungan? Bagaimana dampak terhadap ekosistem?</td><td>Environmental impact statement, mitigation plan</td></tr>
            <tr><td>Regulatory Feasibility</td><td>Apakah memenuhi semua regulasi yang berlaku (KLHK, BPOM, BKI, daerah)?</td><td>Regulatory compliance matrix</td></tr>
            <tr><td>Operational Feasibility</td><td>Apakah klien memiliki/dapat membangun kapasitas untuk operate?</td><td>Operational readiness assessment</td></tr>
          </tbody></table>

          <h2 id="metodologi-fs" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Metodologi Studi Kelayakan</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pendekatan TSM berbasis pada framework yang diakui internasional, di-tailor untuk konteks industri Indonesia:</p>

          <ol className="ml-[1.5rem] my-[1.05rem] list-decimal">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Project initiation</strong> (1 minggu) — kick-off meeting, definisi scope, MOU dan kerahasiaan, pembentukan working group</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Data gathering</strong> (1–2 minggu) — pengumpulan data klien, site visit, interview stakeholder, water analysis</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Demand &amp; supply analysis</strong> (1 minggu) — proyeksi kebutuhan air, supply available, gap analysis</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Technology screening</strong> (1 minggu) — long list 5–10 teknologi opsi, screened ke short list 2–3 untuk detail evaluation</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Detail technical evaluation</strong> (1–2 minggu) — preliminary design tiap opsi, cost estimate ±30%</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Financial modeling</strong> (1–2 minggu) — DCF model 15 tahun, NPV/IRR/payback, sensitivity untuk variabel kritis</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Risk &amp; environmental review</strong> (1 minggu) — identifikasi risiko proyek, mitigasi, environmental compliance</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Reporting &amp; presentation</strong> (1 minggu) — penyusunan laporan, executive summary, sesi presentasi ke management</li>
          </ol>

          <h2 id="financial-model" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Komponen Financial Model</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Financial model TSM meliputi semua line item yang relevan untuk proyek water treatment, sehingga decision-maker memiliki pegangan yang lengkap:</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Capex</strong> — equipment, civil, electrical, instrumentation, installation, FAT/SAT, owner cost, contingency</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Opex</strong> — listrik, air baku, kimia (antiscalant, biocide, NaOH/HCl), spare part, labor, management overhead</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Replacement reserve</strong> — membran (5 tahunan), pompa overhaul (10 tahunan), instrumen (8 tahunan)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Revenue side</strong> (untuk proyek yang menghasilkan saving) — penghematan PDAM, penghematan disposal limbah, water reuse value</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Tax &amp; financing</strong> — pajak, bunga pinjaman, depresiasi tax-saving</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sensitivity</strong> — variasi 10–30% pada variabel kritis: harga listrik, water tariff, capex inflation</li>
          </ul>

          <h2 id="industri-cocok" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Industri yang Sering Membutuhkan FS</h2>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/pltu">Pembangkit Listrik</Link></strong> — proyek PLTU baru atau revamp, harus melibatkan FS untuk water treatment plant sebagai bagian dari overall plant FS</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/maritim">Marine &amp; Offshore</Link></strong> — keputusan watermaker SWRO vs hauling air dari mainland untuk pulau remote</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/manufaktur">F&amp;B Manufaktur</Link></strong> — keputusan ZLD vs disposal konvensional, water reuse loop</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/farmasi">Industri Farmasi</Link></strong> — capacity expansion sistem PW/WFI, atau migrasi dari ion exchange ke RO+EDI</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/properti">Real Estate</Link></strong> — keputusan central WTP vs distributed POU, build-vs-buy untuk drinking water service</li>
          </ul>

          <h2 id="faq-fs" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa lama proses feasibility study water treatment?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Studi kelayakan untuk proyek RO industri standar memakan waktu 4–6 minggu dari kick-off hingga laporan final. Proyek kompleks (ZLD, water reuse multi-stream, desalinasi laut skala besar) butuh 8–12 minggu. Studi kelayakan parsial (technical only atau financial only) dapat diselesaikan dalam 2–3 minggu.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa beda FEED (Front End Engineering Design) dengan studi kelayakan?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Studi kelayakan menjawab pertanyaan "Apakah proyek ini layak dilakukan?" dengan multiple opsi teknologi dan analisa go/no-go berbasis financial dan technical. FEED adalah tahap berikutnya yang menjawab "Bagaimana proyek ini dieksekusi?" dengan satu opsi terpilih, mendetail dengan akurasi cost ±25%. Klien biasanya mulai dengan studi kelayakan, kemudian FEED jika hasilnya positive.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa output deliverable studi kelayakan TSM?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Deliverable mencakup: Feasibility Study Report (50–120 halaman), technical evaluation matrix untuk multi-option, financial model dengan NPV/IRR/payback analysis, sensitivity analysis untuk variabel kritis (harga energi, water tariff, capex), environmental impact statement, regulatory compliance matrix, recommended option dengan rationale, action plan &amp; milestone, dan executive summary.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah studi kelayakan TSM dapat digunakan untuk proposal pendanaan bank?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ya. Format laporan TSM dirancang untuk dapat di-review oleh komite kredit bank atau investor. Untuk pendanaan multilateral (World Bank, ADB, KfW, AFD), TSM dapat menyusun laporan mengikuti format spesifik lender. Klien bertanggung jawab atas validasi asumsi makro (forex, inflasi, demand projection) yang relevan dengan industri klien.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa biaya studi kelayakan water treatment?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Biaya feasibility study bervariasi: studi parsial (technical only) Rp 25–60 juta, studi komprehensif untuk proyek RO industri Rp 75–180 juta, dan untuk proyek besar (SWRO desalinasi skala kota, ZLD pabrik tekstil) Rp 250–500 juta. Klien yang melanjutkan ke EPC atau pengadaan dengan TSM mendapat 50% dari biaya FS sebagai credit ke harga proyek.</p>

          <div style={{"marginTop":"2rem","padding":"2rem","background":"var(--ice)","borderRadius":"12px","borderLeft":"4px solid var(--accent)"}}>
            <h3 style={{"marginBottom":".75rem","color":"var(--navy)"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Mulai Studi Kelayakan Proyek Anda</h3>
            <p style={{"marginBottom":"1.25rem","color":"var(--muted)","fontSize":".92rem"}} className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Konsultasi awal untuk membahas project brief, scope FS yang sesuai, dan timeline. Proposal FS disiapkan dalam 7 hari kerja.</p>
            <Link style={{"display":"inline-block","padding":".85rem 2rem","background":"var(--blue)","color":"#fff","borderRadius":"8px","fontWeight":"700","fontSize":".96rem","textDecoration":"none"}} to="/kontak">📊 Diskusi Studi Kelayakan →</Link>
          </div>

        </div>
      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#kenapa-fs">Mengapa FS Krusial?</Link></li>
            <li><Link href="#cakupan-fs">Cakupan FS</Link></li>
            <li><Link href="#metodologi-fs">Metodologi</Link></li>
            <li><Link href="#financial-model">Financial Model</Link></li>
            <li><Link href="#industri-cocok">Industri Membutuhkan</Link></li>
            <li><Link href="#faq-fs">FAQ</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Layanan Lain</h4>
          <ul className="flex flex-col">
            <li><Link to="/layanan/desain">→ Desain &amp; Engineering</Link></li>
            <li><Link to="/layanan/epc">→ Turnkey EPC Project</Link></li>
            <li><Link to="/layanan/audit">→ Audit Sistem</Link></li>
            <li><Link to="/layanan/sertifikasi">→ Sertifikasi &amp; Compliance</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Produk Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/produk/ro-industri">→ RO Industri</Link></li>
            <li><Link to="/produk/desalinasi">→ SWRO Desalinasi</Link></li>
            <li><Link to="/produk/limbah">→ Pengolahan Air Limbah</Link></li>
            <li><Link to="/kalkulator">→ Kalkulator Kapasitas</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>

    </>
  );
};

export default LayananFeasibility;
