import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, Shield } from 'lucide-react';


const LayananMaintenance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/layanan">Layanan</Link> › Pemeliharaan Preventif</div>
    <h1>Kontrak Perawatan &amp; Maintenance Sistem RO Industri</h1>
    <p>Layanan preventive maintenance terjadwal untuk sistem reverse osmosis, SWRO, BWRO, ultrafiltrasi, dan demineralisasi — menjaga performa, memperpanjang usia membran, dan mencegah downtime mahal.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>
        <div className="prose max-w-none text-text">

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem reverse osmosis adalah investasi jangka panjang yang membutuhkan perawatan terjadwal untuk mempertahankan performa, kualitas output, dan umur komponen. Sistem RO industri yang dirawat dengan baik dapat beroperasi 8–12 tahun dengan biaya operasional stabil; tanpa perawatan rutin, sistem yang sama bisa rusak parah dalam 18–24 bulan, dengan biaya perbaikan mencapai 40–60% dari nilai sistem baru.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>PT Tirta Sumber Makmur</strong> menyediakan layanan kontrak perawatan sistem reverse osmosis untuk klien industri di seluruh Indonesia, dari Jabodetabek hingga lokasi remote di Kalimantan, Sumatra, Sulawesi, dan kepulauan terpencil. Tim field service engineer kami berpengalaman menangani sistem dari berbagai vendor, bukan hanya sistem yang TSM pasok.</p>

          <h2 id="mengapa-perawatan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Mengapa Preventive Maintenance Sistem RO Krusial?</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Membran RO adalah komponen termahal dalam sistem (15–35% dari nilai total) dan juga komponen yang paling rentan terhadap kelalaian operasional. Berbeda dengan komponen mekanis yang gagal mendadak, kerusakan membran RO bersifat <em>progressive</em> — fouling, scaling, dan oksidasi terjadi bertahap dan baru terdeteksi ketika kerusakan sudah ireversibel.</p>

          <div className="info-box bg-ice border border-border rounded-[10px] p-[1.2rem_1.5rem] my-[1.75rem]">
            <strong className="block text-[0.7rem] font-bold uppercase tracking-[0.1em] text-accent mb-[0.38rem]">📉 Konsekuensi tanpa preventive maintenance</strong><br />
            ✗ Umur membran turun dari 5+ tahun menjadi 1–2 tahun<br />
            ✗ Konsumsi energi naik 15–30% akibat tekanan kompensasi<br />
            ✗ Salt rejection menurun, mengkompromikan kualitas produk<br />
            ✗ Risiko downtime tak terjadwal saat peak production<br />
            ✗ Garansi membran manufacturer hangus tanpa log perawatan
          </div>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kontrak perawatan TSM dirancang untuk menangkap masalah pada tahap dini melalui inspeksi terjadwal, monitoring parameter operasi, dan analisa tren — sebelum berkembang menjadi kerusakan mahal. Pendekatan ini selaras dengan praktik <Link to="/artikel/monitoring-kualitas-air-ro">monitoring kualitas air RO</Link> yang menjadi standar industri.</p>

          <h2 id="cakupan-layanan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Cakupan Layanan Kontrak Perawatan</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Layanan perawatan sistem RO industri TSM mencakup tiga pilar utama: <strong>preventive maintenance</strong> (pemeriksaan terjadwal), <strong>predictive maintenance</strong> (analisa tren parameter), dan <strong>corrective response</strong> (penanganan saat ada gangguan). Setiap kunjungan tim akan melakukan tindakan berikut sesuai frekuensi yang ditetapkan dalam kontrak:</p>

          <table className="w-full border-collapse my-[1.5rem] text-[0.9rem]">
            <tbody><tr><th>Frekuensi</th><th>Tindakan</th><th>Output Dokumen</th></tr>
            <tr><td>Bulanan</td><td>Inspeksi visual, pencatatan parameter operasi (TDS, tekanan, flow, recovery), kalibrasi sensor cepat, top-up kimia</td><td>Monthly Service Report</td></tr>
            <tr><td>3 Bulanan</td><td>Penggantian filter cartridge, pembersihan kimia (CIP) jika diperlukan, analisa SDI air baku, performance test</td><td>Quarterly Performance Report</td></tr>
            <tr><td>6 Bulanan</td><td>Pembersihan housing dan flushing membran, kalibrasi instrumen lengkap, audit chemical consumption</td><td>Semi-Annual Audit Report</td></tr>
            <tr><td>Tahunan</td><td>Overhaul lengkap: leak test, replacement membran sesuai jadwal, kalibrasi pompa, dokumentasi audit-ready</td><td>Annual Maintenance Report + Compliance Document</td></tr>
          </tbody></table>

          <h2 id="tier-kontrak" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Tier Kontrak Perawatan TSM</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk mengakomodasi kebutuhan dan budget yang berbeda, TSM menawarkan tiga tier kontrak perawatan dengan service-level yang ditingkatkan secara bertahap. Kontrak dapat disesuaikan untuk sistem multi-site, multi-unit, atau spesifik per industri (farmasi, F&amp;B, hospitality, marine).</p>

          <div className="tier-grid">
            <div className="tier-card">
              <div className="tier-tag">Tier 1</div>
              <h4>Basic Care</h4>
              <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
                <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">4 kunjungan/tahun (kuartal)</li>
                <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Inspeksi standar &amp; pencatatan</li>
                <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Response 24 jam (hari kerja)</li>
                <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Diskon 5% spare part</li>
                <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Monthly report digital</li>
              </ul>
            </div>
            <div className="tier-card featured">
              <div className="tier-tag">Tier 2</div>
              <h4>Standard Care</h4>
              <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
                <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">12 kunjungan/tahun (bulanan)</li>
                <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">CIP kuartalan included</li>
                <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Response 8 jam (24/7)</li>
                <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Diskon 10-15% spare part</li>
                <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Audit kualitas air semi-annual</li>
                <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Hotline teknis prioritas</li>
              </ul>
            </div>
            <div className="tier-card">
              <div className="tier-tag">Tier 3</div>
              <h4>Premium Care</h4>
              <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
                <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Kunjungan bulanan + on-call</li>
                <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">1 set membran/tahun included*</li>
                <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Response 4 jam (24/7) on-site</li>
                <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Diskon 20% spare part</li>
                <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Audit triwulan + dokumentasi compliance</li>
                <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Operator training tahunan</li>
                <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Dedicated account engineer</li>
              </ul>
            </div>
          </div>
          <p style={{"fontSize":".82rem","color":"var(--muted)","marginTop":"-.5rem"}} className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">*Untuk sistem ≤50 elemen membran. Sistem lebih besar dihitung pro-rata.</p>

          <h2 id="industri-cocok" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Industri yang Paling Diuntungkan dari Kontrak Perawatan</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Setiap industri yang mengandalkan air olahan untuk operasinya akan mendapat manfaat dari kontrak perawatan, namun beberapa industri memiliki cost-of-downtime yang sangat tinggi sehingga kontrak preventive maintenance secara finansial sangat strategis:</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/farmasi">Industri Farmasi &amp; Rumah Sakit</Link></strong> — sistem Purified Water/WFI butuh dokumentasi audit-ready untuk inspeksi BPOM. Kegagalan sistem dapat menyebabkan batch obat di-reject senilai miliaran.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/pltu">Pembangkit Listrik (PLTU)</Link></strong> — boiler feed water yang tidak sesuai spec menyebabkan deposit silika di turbin, downtime tak terjadwal mahal dengan penalti dispatch dari PLN.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/manufaktur">Manufaktur F&amp;B</Link></strong> — sistem RO yang fouling menyebabkan kualitas produk inkonsisten dan risiko reject batch dari QC internal atau audit BPOM.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/hotel">Hotel &amp; Resort</Link></strong> — terutama resort di pulau yang mengandalkan SWRO sebagai satu-satunya sumber air tawar. Kegagalan sistem = penghentian operasional total.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/maritim">Marine &amp; Offshore</Link></strong> — watermaker SWRO di kapal jauh dari layanan teknisi; preventive maintenance saat docking adalah satu-satunya cara realistis menjaga keandalan.</li>
          </ul>

          <h2 id="audit-checklist" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Audit Awal &amp; Baseline Establishment</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sebelum kontrak perawatan dimulai, TSM melakukan audit komprehensif untuk menetapkan <em>baseline performance</em> sistem. Audit ini juga mengidentifikasi masalah laten yang mungkin sudah ada — sehingga kontrak dimulai dari kondisi sistem yang terukur dan terdokumentasi, bukan asumsi.</p>

          <div className="info-box bg-ice border border-border rounded-[10px] p-[1.2rem_1.5rem] my-[1.75rem]">
            <strong className="block text-[0.7rem] font-bold uppercase tracking-[0.1em] text-accent mb-[0.38rem]"><ClipboardList className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Cakupan audit awal (1–2 hari kerja per site)</strong><br />
            ✓ Pengukuran parameter operasi pada kondisi normal &amp; peak<br />
            ✓ Pengambilan sampel air baku, RO permeate, RO concentrate untuk analisa lab<br />
            ✓ Inspeksi visual seluruh komponen: pompa, housing, panel, instrumen<br />
            ✓ Pengecekan log historis dan dokumentasi maintenance sebelumnya<br />
            ✓ Identifikasi modifikasi tidak terdokumentasi (deviasi dari desain awal)<br />
            ✓ Rekomendasi perbaikan, upgrade, atau penggantian komponen kritis<br />
            ✓ Penyusunan baseline parameter sebagai acuan trending bulanan
          </div>

          <h2 id="studi-kasus" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Studi Kasus: Pabrik F&amp;B Karawang — Penghematan 38% via Kontrak Perawatan</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Salah satu klien TSM, pabrik F&amp;B di Karawang dengan sistem RO 60 m³/jam, sebelumnya melakukan perawatan ad-hoc oleh teknisi internal. Dalam 18 bulan terakhir, mereka mengalami 3 kali downtime tak terjadwal dengan total kehilangan produksi setara Rp 1,2 miliar, plus penggantian 2 set membran prematur senilai Rp 320 juta.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Setelah pindah ke kontrak Standard Care TSM (Rp 84 juta/tahun), dalam 24 bulan operasi:</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Zero downtime tak terjadwal terkait sistem RO</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Konsumsi antiscalant turun 22% setelah optimasi dosing</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Membran extended life — set yang dipasang tetap berfungsi pada year 3 (vs replacement sebelumnya tiap 18 bulan)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Total saving estimasi: Rp 410 juta/tahun setelah dikurangi biaya kontrak</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Compliance audit BPOM tahunan dilewati tanpa observasi pada sistem air</li>
          </ul>

          <h2 id="cara-mulai" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Cara Memulai Kontrak Perawatan dengan TSM</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Proses onboarding kontrak perawatan dirancang sederhana dan transparan:</p>

          <ol className="ml-[1.5rem] my-[1.05rem] list-decimal">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Site survey gratis</strong> — tim TSM datang untuk asesmen 1–2 hari (Jabodetabek tanpa biaya, lokasi luar dengan biaya travel saja)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Proposal teknis &amp; komersial</strong> — diberikan dalam 5 hari kerja, termasuk rekomendasi tier, ruang lingkup, jadwal, dan harga</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Audit awal &amp; baseline</strong> — dilakukan setelah kontrak ditandatangani, sebagai foundation untuk monitoring tren</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kunjungan reguler dimulai</strong> — sesuai jadwal yang disepakati, dengan dokumentasi digital yang dapat diakses klien kapan saja</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Quarterly business review</strong> — pertemuan tinjauan kinerja sistem, rekomendasi optimasi, dan rencana tahun berjalan</li>
          </ol>

          <h2 id="faq-maintenance" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa frekuensi perawatan sistem RO industri yang ideal?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk sistem RO industri yang beroperasi 24/7, kunjungan preventif minimum 1x per bulan untuk inspeksi visual, pencatatan parameter operasi (TDS, tekanan, flow, conductivity), dan kalibrasi cepat. Kunjungan komprehensif setiap 3 bulan untuk pembersihan kimia (CIP), penggantian filter cartridge, dan analisa membran. Overhaul tahunan dilakukan setiap 12 bulan termasuk leak test, replacement membran sesuai jadwal, dan dokumentasi audit. Frekuensi disesuaikan kapasitas dan kondisi air baku.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah kontrak perawatan TSM mencakup penggantian membran RO?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tergantung tier kontrak. Tier Basic mencakup biaya jasa pemasangan saja — membran dibeli terpisah. Tier Standard memberikan diskon 10–15% untuk pembelian membran original Dow Filmtec/Toray. Tier Premium meliputi 1 set penggantian membran per tahun dalam paket kontrak (untuk sistem dengan ≤50 elemen). TSM hanya menggunakan membran original dari distributor resmi untuk menjaga warranty manufacturer.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa response time untuk emergency call dengan kontrak perawatan?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk klien dengan kontrak perawatan aktif, response time TSM: Tier Basic 24 jam (hari kerja), Tier Standard 8 jam (24/7), Tier Premium 4 jam (24/7) dengan teknisi on-site. Response time mencakup phone diagnostic dalam 30 menit dan dispatch teknisi sesuai tier. Lokasi di luar Jabodetabek mendapat additional travel time sesuai jarak.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa saja yang diperiksa saat preventive maintenance bulanan?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Checklist inspeksi bulanan mencakup minimum 18 item: pembacaan TDS feed dan permeate, conductivity output, tekanan inlet/outlet/concentrate, flow permeate dan reject, recovery rate, salt rejection, kondisi pre-filter (pressure drop), level tangki kimia (antiscalant, biocide), kondisi pompa (vibrasi, suara, suhu), kebocoran fitting, kondisi panel listrik, kalibrasi sensor TDS dan pH, log alarm, kondisi membran (pengamatan visual housing), kebersihan ruang, dokumentasi temuan, dan rekomendasi tindak lanjut.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa indikator sistem RO perlu segera dilakukan service?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tanda-tanda kritis: (1) Salt rejection turun &gt;5% dari baseline, (2) Differential pressure naik &gt;15% — indikasi fouling membran, (3) Permeate flow turun &gt;10% pada tekanan operasi sama, (4) TDS permeate naik mendadak, (5) Suara pompa berubah atau vibrasi tidak normal, (6) Alarm berulang dari sensor, (7) Konsumsi antiscalant meningkat tanpa perubahan flow. Jika 2 atau lebih indikator muncul bersamaan, jangan ditunda — kerusakan membran ireversibel bila dibiarkan.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa biaya kontrak perawatan sistem RO industri?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Biaya bervariasi berdasarkan kapasitas sistem, jumlah unit, lokasi, dan tier kontrak. Sebagai gambaran, kontrak Standard untuk sistem RO industri 10 m³/jam di Jabodetabek mulai dari Rp 36 juta/tahun (kunjungan bulanan + overhaul tahunan). Sistem skala kecil &lt;5 m³/jam mulai Rp 18 juta/tahun. Sistem besar &gt;50 m³/jam atau multi-unit dengan service-level 24/7 dapat mencapai Rp 200 juta/tahun. Kontrak biasanya berdurasi 1–3 tahun dengan diskon untuk komitmen jangka panjang.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah TSM bisa merawat sistem RO yang dipasok vendor lain?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ya. Tim field service TSM memiliki pengalaman menangani sistem dari berbagai vendor — termasuk sistem yang sudah berumur, sistem second-hand, atau sistem hasil modifikasi. Audit awal akan mengidentifikasi spesifikasi membran, jenis pompa, dan kompatibilitas spare part. Untuk sistem yang menggunakan komponen non-standar atau obsolete, TSM dapat merekomendasikan upgrade path yang ekonomis.</p>

          <div style={{"marginTop":"2rem","padding":"2rem","background":"var(--ice)","borderRadius":"12px","borderLeft":"4px solid var(--accent)"}}>
            <h3 style={{"marginBottom":".75rem","color":"var(--navy)"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Mulai Kontrak Perawatan Sistem RO Anda</h3>
            <p style={{"marginBottom":"1.25rem","color":"var(--muted)","fontSize":".92rem"}} className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Site survey gratis untuk klien Jabodetabek. Proposal teknis &amp; komersial dalam 5 hari kerja. Diskon komitmen 3 tahun. Hubungi TSM untuk diskusi awal tanpa komitmen.</p>
            <Link style={{"display":"inline-block","padding":".85rem 2rem","background":"var(--blue)","color":"#fff","borderRadius":"8px","fontWeight":"700","fontSize":".96rem","textDecoration":"none"}} to="/kontak"><Shield className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Konsultasi Kontrak Perawatan →</Link>
          </div>

        </div>
      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#mengapa-perawatan">Mengapa Preventive Maintenance?</Link></li>
            <li><Link href="#cakupan-layanan">Cakupan Layanan</Link></li>
            <li><Link href="#tier-kontrak">Tier Kontrak</Link></li>
            <li><Link href="#industri-cocok">Industri Cocok</Link></li>
            <li><Link href="#audit-checklist">Audit Awal</Link></li>
            <li><Link href="#studi-kasus">Studi Kasus</Link></li>
            <li><Link href="#cara-mulai">Cara Memulai</Link></li>
            <li><Link href="#faq-maintenance">FAQ</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Layanan Lain</h4>
          <ul className="flex flex-col">
            <li><Link to="/layanan/darurat">→ Servis Darurat 24/7</Link></li>
            <li><Link to="/layanan/audit">→ Audit Kualitas Air</Link></li>
            <li><Link to="/layanan/instalasi">→ Instalasi &amp; Komisioning</Link></li>
            <li><Link to="/layanan/sertifikasi">→ Sertifikasi &amp; Compliance</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Produk Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/produk/membran">→ Membran RO Original</Link></li>
            <li><Link to="/produk/kimia">→ Antiscalant &amp; Biocide</Link></li>
            <li><Link to="/produk/instrumen">→ Sensor &amp; Online Analyzer</Link></li>
            <li><Link to="/produk/pompa">→ Pompa Tekanan Tinggi</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Artikel Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/artikel/5-kesalahan-perawatan-ro">→ 5 Kesalahan Perawatan RO</Link></li>
            <li><Link to="/artikel/monitoring-kualitas-air-ro">→ Monitoring Kualitas Air</Link></li>
            <li><Link to="/artikel/pompa-tekanan-tinggi-ro">→ Pompa Tekanan Tinggi</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>

    </>
  );
};

export default LayananMaintenance;
