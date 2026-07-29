import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


const ArtikelWaterTreatmentPltu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/artikel">Artikel</Link> › Pembangkit Listrik</div>
    <h1>Water Treatment untuk PLTU:<br />Boiler Feed Water &amp; Cooling Tower</h1>
    <p>Panduan teknis lengkap kualitas air boiler dan cooling tower untuk pembangkit listrik — dari spesifikasi EPRI/ASME hingga optimasi cycle of concentration.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">

      <article>
        <div className="art-hero-img">
          <picture>
            <source srcSet="images/foto-pemasangan-lapangan.webp" type="image/webp" />
            <img src="images/foto-pemasangan-lapangan.jpg" alt="Sistem water treatment untuk PLTU dengan boiler feed water dan cooling tower" />
          </picture>
        </div>

        <div className="art-meta-bar">
          <span className="am-tag">PLTU</span>
          <span className="am-info">📅 2 Mei 2026</span>
          <span className="am-info">✍️ Tim TSM</span>
          <span className="am-info">⏱ 10 menit baca</span>
        </div>

        <div className="prose max-w-none text-text">

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pembangkit listrik thermal (PLTU batubara, PLTGU, PLTG) adalah salah satu konsumen air industri terbesar — sebuah <strong>PLTU 600 MW dapat membutuhkan 1.000+ m³ air per jam</strong> untuk berbagai sirkuit operasinya. Yang lebih penting dari volume adalah kualitas: kualitas air yang buruk dapat menyebabkan scaling tube boiler, korosi steam line, deposit silika di turbin, dan kegagalan equipment dengan biaya perbaikan miliaran rupiah dan kehilangan generasi listrik berhari-hari.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Artikel ini membahas water treatment untuk PLTU secara teknis: <strong>kebutuhan air per sirkuit, spesifikasi boiler feed water sesuai EPRI/ASME guidelines, perbandingan RO+EDI vs demineralisasi konvensional, optimasi cooling tower water reuse, dan strategi monitoring online</strong>. Cocok untuk engineer pembangkit, project manager EPC, atau decision maker yang merencanakan WTP untuk PLTU baru atau revamp.</p>

          <h2 id="dua-sirkuit" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Dua Sirkuit Air Utama di PLTU</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">PLTU memiliki dua sirkuit air utama dengan kebutuhan kualitas dan volume yang sangat berbeda:</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">1. Boiler Feed Water Loop (kualitas paling tinggi, volume sedang)</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Air yang dipompa ke boiler untuk diubah menjadi steam yang menggerakkan turbin. Volume 50-200 m³/jam untuk PLTU 100-300 MW. Kualitas tertinggi dibutuhkan karena: (1) impurities terkonsentrasi di boiler drum dan dapat menyebabkan deposit/korosi, (2) silika menguap dengan steam dan terdeposit di turbin sebagai SiO₂ hard scale, (3) klorida menyebabkan stress corrosion cracking, (4) total iron mengindikasikan korosi sistem dan dapat membentuk magnetite deposit di tube.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">2. Cooling Tower Makeup (volume sangat besar, kualitas medium)</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Air untuk cooling tower yang mendinginkan steam keluar turbin. Volume 10-50x lebih besar dari boiler feed water — 500-2.000 m³/jam untuk PLTU menengah. Kualitas tidak setinggi boiler feed water, tapi treatment fokus pada: penghilangan kekeruhan, hardness control untuk meningkatkan cycle of concentration, dan dosing kimia untuk corrosion/scale/biological control.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">3. Service Water (kualitas air bersih biasa)</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Volume kecil. Untuk pembersihan, pendinginan auxiliary, dan kebutuhan general service. Standar setara air industri biasa.</p>

          <h2 id="spesifikasi-boiler" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Spesifikasi Boiler Feed Water</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Persyaratan kualitas boiler feed water mengikuti tekanan operasi boiler. Standar EPRI (Electric Power Research Institute) dan ASME memberikan threshold yang sangat spesifik:</p>

          <table className="w-full border-collapse my-[1.5rem] text-[0.9rem]">
            <tbody><tr><th>Parameter</th><th>LP (&lt;30 bar)</th><th>MP (30-90 bar)</th><th>HP (90-160 bar)</th><th>Supercritical (&gt;220 bar)</th></tr>
            <tr><td>Konduktivitas</td><td>&lt;10 µS/cm</td><td>&lt;1 µS/cm</td><td>&lt;0,2 µS/cm</td><td>&lt;0,1 µS/cm</td></tr>
            <tr><td>Cation Conductivity</td><td>&lt;5 µS/cm</td><td>&lt;0,5 µS/cm</td><td>&lt;0,2 µS/cm</td><td>&lt;0,15 µS/cm</td></tr>
            <tr><td>Silica</td><td>&lt;30 mg/L</td><td>&lt;0,3 mg/L</td><td>&lt;0,02 mg/L</td><td>&lt;0,01 mg/L</td></tr>
            <tr><td>Total Iron</td><td>&lt;0,1 mg/L</td><td>&lt;0,02 mg/L</td><td>&lt;0,01 mg/L</td><td>&lt;0,005 mg/L</td></tr>
            <tr><td>Chloride</td><td>&lt;5 mg/L</td><td>&lt;0,5 mg/L</td><td>&lt;0,02 mg/L</td><td>&lt;0,005 mg/L</td></tr>
            <tr><td>TOC</td><td>&lt;1 mg/L</td><td>&lt;0,5 mg/L</td><td>&lt;0,1 mg/L</td><td>&lt;0,05 mg/L</td></tr>
            <tr><td>Dissolved Oxygen</td><td>&lt;7 µg/L</td><td>&lt;7 µg/L</td><td>&lt;5 µg/L</td><td>&lt;5 µg/L</td></tr>
          </tbody></table>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk mencapai persyaratan ini, hampir semua PLTU modern menggunakan kombinasi <strong>pre-treatment + RO + EDI atau Mixed Bed Polisher</strong>. Konfigurasi sistem dipilih berdasarkan tekanan boiler, kualitas air baku, dan economic trade-off antara CAPEX dan OPEX.</p>

          <h2 id="ro-edi-mb" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">RO+EDI vs Mixed Bed: Perbandingan Strategis</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pertanyaan utama saat merencanakan WTP boiler PLTU baru: konfigurasi tradisional <strong>Cation-Anion-Mixed Bed (CAMB)</strong> dengan resin yang diregenerasi kimia, atau pendekatan modern <strong>RO + EDI + Mixed Bed Polisher</strong>?</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Demineralisasi Konvensional CAMB</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>+ Investasi awal lebih rendah</strong> — sekitar 60-70% dari RO+EDI setara</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>+ Teknologi familiar</strong> — operator yang sudah trained dengan kolom resin</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>− Storage HCl, H₂SO₄, NaOH</strong> dengan persyaratan K3 ketat dan izin lingkungan</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>− Limbah regenerasi 5-10% volume air olahan</strong> harus dinetralisasi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>− Output tidak kontinu</strong> — siklus regenerasi 4-6 jam setiap 8-24 jam</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>− Operating cost tinggi</strong> karena konsumsi kimia rutin (1-3 ton HCl + NaOH per bulan untuk 100 m³/jam)</li>
          </ul>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">RO + EDI Modern</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>+ Output kontinu</strong> tanpa siklus regenerasi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>+ Tidak ada storage kimia regenerasi</strong> — hanya antiscalant dan dosing minor</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>+ Limbah hanya brine RO 25-30%</strong> tanpa netralisasi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>+ Operating cost 30-50% lebih rendah</strong> jangka panjang</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>+ Footprint lebih kompak</strong> 30-40% vs CAMB setara</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>− Investasi awal 20-40% lebih tinggi</strong></li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>− Membran perlu diganti 5-7 tahun</strong></li>
          </ul>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Tren Industri Indonesia</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk PLTU baru di Indonesia sejak 2015, mayoritas memilih <strong>RO+EDI</strong> karena: (1) compliance lingkungan lebih mudah, (2) reliability operasi 24/7 tanpa downtime regenerasi, (3) tidak perlu storage dan handling kimia berbahaya, (4) economic case menarik dalam jangka 10-15 tahun life cycle. Investasi tambahan awal terbayar dalam 3-5 tahun dari penghematan kimia regenerasi dan biaya pengelolaan limbah.</p>

          <h2 id="cooling-tower" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Optimasi Cooling Tower: Memaksimalkan Cycle of Concentration</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Cooling tower PLTU adalah konsumen air baku terbesar dan target utama optimasi water efficiency. Konsep kunci: <strong>cycle of concentration (CoC)</strong> — rasio konsentrasi terlarut antara basin water dan makeup water.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Mengapa CoC Penting</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Saat air evaporasi dari cooling tower (~1-2% dari sirkulasi per pass), garam terlarut tertinggal dan terkonsentrasi di basin. Untuk mencegah scaling dan fouling, sebagian basin water dibuang sebagai blowdown. CoC tinggi = lebih sedikit blowdown = lebih sedikit makeup water dibutuhkan = lebih hemat.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk cooling tower 1.500 m³/jam dengan evaporation rate 1,2%:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>CoC 3</strong>: makeup ~27 m³/jam, blowdown ~9 m³/jam (total 36 m³/jam)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>CoC 5</strong>: makeup ~22,5 m³/jam, blowdown ~4,5 m³/jam (total 27 m³/jam — hemat 25%)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>CoC 8</strong>: makeup ~20,6 m³/jam, blowdown ~2,6 m³/jam (total 23,2 m³/jam — hemat 35%)</li>
          </ul>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Strategi Mencapai CoC Tinggi</h3>
          <ol className="ml-[1.5rem] my-[1.05rem] list-decimal">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pre-treatment makeup water</strong> — Multi-media filter + softener mengurangi hardness dan TSS yang menjadi pembatas CoC</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Side-stream filtration</strong> — Sebagian aliran basin water (1-5% dari sirkulasi) di-filter untuk menghilangkan padatan tersuspensi yang terakumulasi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Side-stream RO</strong> — Untuk PLTU yang sangat membutuhkan water efficiency, side-stream RO menghilangkan ion terlarut dari basin, memungkinkan CoC 8-10</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Chemical treatment program</strong> — Scale inhibitor (HEDP, PBTC, polyacrylate), dispersant, corrosion inhibitor, dan biocide rotation</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>pH control</strong> — Operasi pH 7,5-8,5 dengan asam dosing untuk menjaga kalsium tetap larut</li>
          </ol>

          <h2 id="kontrol-silica" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Mengapa Silica Sangat Kritis untuk Boiler Tekanan Tinggi</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk PLTU subcritical (&gt;90 bar) dan supercritical (&gt;220 bar), silica adalah parameter yang paling kritis di-monitor. Alasannya unik dan berbeda dari kontaminan lain:</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>Silica dapat menguap bersama steam pada tekanan tinggi</strong>. Pada tekanan &gt;40 bar, kelarutan silica di steam meningkat signifikan. Steam yang membawa silica kemudian masuk ke turbin, di mana terjadi: (1) penurunan suhu dan tekanan saat steam berekspansi, (2) silica mengkristal kembali sebagai SiO₂ deposit di sudu turbin, dan (3) deposit ini mengganggu aerodinamika sudu.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Konsekuensi Deposit Silica di Turbin</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Penurunan efisiensi 5-15%</strong> — sudu yang dideposit tidak optimal mengkonversi steam energy ke rotasi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Peningkatan thrust load</strong> — distribusi pressure yang tidak merata merusak bearing</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Vibration tinggi</strong> — imbalance akibat deposit yang tidak merata</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Cleaning yang mahal</strong> — pembersihan deposit silica turbin butuh chemical cleaning specialist atau abrasive blasting, biaya bisa milyaran rupiah dengan downtime berhari-hari</li>
          </ul>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk supercritical PLTU, batas silica boiler feed water adalah <strong>&lt;20 ppb</strong> — jauh di bawah deteksi laboratorium konvensional. Diperlukan online silica analyzer (seperti Hach 5500) yang mengukur kontinu dengan deteksi limit &lt;5 ppb.</p>

          <h2 id="studi-kasus" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Studi Kasus PLTU</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Sistem RO+EDI 100 m³/jam untuk PLTU Subcritical</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM merancang sistem boiler feed water lengkap untuk PLTU subcritical 200 MW yang sebelumnya menggunakan demineralisasi konvensional. Sistem baru: <strong>multi-media filter → ultrafiltrasi → RO 2-pass → EDI → Mixed Bed Polisher</strong> sebagai safety polishing untuk silica dan TOC.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Hasil: konduktivitas &lt;0,1 µS/cm, silica &lt;15 ppb, TOC &lt;100 ppb — memenuhi spesifikasi turbin OEM. Setelah commissioning, konsumsi kimia regenerasi turun &gt;90% (dari 1,8 ton HCl/NaOH per bulan menjadi hanya antiscalant 50 kg/bulan), dan kebutuhan operator water treatment berkurang dari 4 shift menjadi 2 shift.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Side-Stream RO untuk Cooling Tower</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">PLTU di kawasan industri Karawang mengalami keterbatasan supply air baku saat musim kemarau. TSM menambahkan side-stream RO 50 m³/jam pada loop cooling tower 1.500 m³/jam, meningkatkan CoC dari 3,5 menjadi 7,0. Hasil: penghematan makeup water 35% dan pengurangan blowdown waste 50%.</p>

          <h2 id="monitoring" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Online Monitoring untuk PLTU</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem WTP PLTU yang baik dirancang dengan monitoring online lengkap karena: (1) operasi 24/7 yang tidak boleh terputus, (2) kualitas air kritis untuk reliability turbin, (3) early detection mencegah kerusakan equipment yang miliaran rupiah. Instrumen online wajib:</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Konduktivitas</strong> di feed, post-RO, post-EDI, dan boiler feed</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Cation conductivity</strong> setelah cation exchanger (sangat sensitif terhadap CO₂ dan klorida)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Online silica analyzer</strong> di outlet WTP dan boiler feed (Hach 5500 atau setara)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Online sodium analyzer</strong> di boiler drum dan steam (kritis untuk supercritical)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Total iron analyzer</strong> di feed water (early indicator korosi)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Dissolved oxygen meter</strong> di deaerator outlet</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>pH meter</strong> di multiple titik untuk dosing control</li>
          </ul>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Semua data terintegrasi ke <strong>SCADA atau DCS pembangkit</strong>. Trend analysis memungkinkan early detection ketika parameter mulai drift sebelum mencapai action level. Integrasi dengan CMMS untuk preventive maintenance dan automated alert ke water treatment operator.</p>

          <h2 id="faq" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

        </div>

      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#dua-sirkuit">Dua Sirkuit Air di PLTU</Link></li>
            <li><Link href="#spesifikasi-boiler">Spesifikasi Boiler Feed Water</Link></li>
            <li><Link href="#ro-edi-mb">RO+EDI vs Mixed Bed</Link></li>
            <li><Link href="#cooling-tower">Optimasi Cooling Tower</Link></li>
            <li><Link href="#kontrol-silica">Mengapa Silica Kritis</Link></li>
            <li><Link href="#studi-kasus">Studi Kasus PLTU</Link></li>
            <li><Link href="#monitoring">Online Monitoring</Link></li>
            <li><Link href="#faq">Pertanyaan Umum</Link></li>
          </ul>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Tentang Penulis</h4>
          <div className="author-box">
            <div className="author-av">TS</div>
            <div>
              <div className="author-av-name">Tim Editorial TSM</div>
              <div className="author-av-role">Divisi Teknik &amp; Edukasi</div>
            </div>
          </div>
          <p style={{"fontSize":".84rem","color":"var(--muted)","lineHeight":"1.65"}}>Tim engineering PT Tirta Sumber Makmur dengan pengalaman 24+ tahun di industri water treatment Indonesia.</p>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem]" style={{"background":"linear-gradient(145deg,var(--navy),var(--blue))","border":"none"}}>
          <h4 style={{"color":"rgba(255,255,255,.45)","borderColor":"rgba(255,255,255,.15)"}}>Butuh Konsultasi?</h4>
          <p style={{"fontSize":".86rem","lineHeight":"1.65","marginBottom":"1rem","opacity":".84","color":"#fff"}}>Dapatkan konsultasi gratis dan estimasi biaya dari tim ahli kami.</p>
          <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center","fontSize":".82rem"}} to="/kontak">📞 Konsultasi Sekarang</Link>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Artikel Lainnya</h4>
          <ul style={{"display":"flex","flexDirection":"column","gap":".65rem"}}>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/air-farmasi-ro-edi">→ Teknologi RO + EDI</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/industri/pltu">→ Solusi Industri PLTU</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/demi">→ Demineralisasi &amp; EDI</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/monitoring-kualitas-air-ro">→ Monitoring Kualitas Air</Link></li>
            <li><Link style={{"fontSize":".84rem","fontWeight":"600","color":"var(--blue)","display":"block"}} to="/artikel">→ Lihat Semua Artikel</Link></li>
          </ul>
        </div>
      </aside>

    </div>
  </div>
</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Membutuhkan WTP untuk Pembangkit Listrik?</h2>
    <p>Tim ahli kami siap membantu mulai dari analisis kebutuhan hingga instalasi.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak">📞 Hubungi Kami</Link>
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/industri/pltu">🔍 Solusi PLTU</Link>
    </div>
  </div>
</div>

    </>
  );
};

export default ArtikelWaterTreatmentPltu;
