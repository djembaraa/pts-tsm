import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Droplet } from 'lucide-react';


const ArtikelMonitoringKualitasAirRo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.art-layout{display:grid;grid-template-columns:1fr 290px;gap:3rem;align-items:start}
.art-sticky{position:sticky;top:88px}
.art-hero-img{height:320px;background:linear-gradient(135deg,#0d5fa8,#00b4d8);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:8rem;margin-bottom:2rem}
.art-meta-bar{display:flex;flex-wrap:wrap;gap:.85rem;align-items:center;margin-bottom:1.5rem;padding-bottom:1.5rem;border-bottom:1px solid var(--border)}
.am-tag{background:var(--accent);color:#fff;font-size:.66rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:.26rem .72rem;border-radius:4px}
.am-info{font-size:.8rem;color:var(--muted);display:flex;align-items:center;gap:.36rem}
.share-row{display:flex;align-items:center;gap:.72rem;margin-top:2.5rem;padding-top:1.5rem;border-top:1px solid var(--border);flex-wrap:wrap}
.share-row span{font-size:.78rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.06em}
.sh-btn{padding:.38rem .95rem;border-radius:6px;font-size:.78rem;font-weight:600;color:#fff;transition:var(--t)}
.sh-btn:hover{opacity:.82;transform:translateY(-1px)}
.related-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:.8rem}
.rel-card{border:1px solid var(--border);border-radius:8px;overflow:hidden;transition:var(--t);display:block}
.rel-card:hover{transform:translateY(-3px);box-shadow:var(--sh);border-color:var(--accent)}
.rel-img{height:88px;display:flex;align-items:center;justify-content:center;font-size:1.9rem}
.rel-body{padding:.9rem}
.rel-body p{font-size:.82rem;font-weight:600;color:var(--navy);line-height:1.4;margin-bottom:.25rem}
.rel-body span{font-size:.7rem;color:var(--muted)}
.author-box{display:flex;align-items:center;gap:.9rem;margin-bottom:.9rem}
.author-av{width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,var(--sky),var(--accent));display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;flex-shrink:0}
.author-av-name{font-weight:700;font-size:.92rem;color:var(--navy)}
.author-av-role{font-size:.76rem;color:var(--muted)}
@media(max-width:1024px){.art-layout{grid-template-columns:1fr}.art-sticky{position:static}.related-grid{grid-template-columns:1fr}}

` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/artikel">Artikel</Link> › Perawatan</div>
    <h1>Cara Monitoring Kualitas Air Output<br />Sistem RO Secara Mandiri</h1>
    <p>Anda tidak perlu selalu memanggil teknisi untuk memeriksa kualitas output air RO. Berikut cara melakukannya sendiri dengan alat sederhana dan murah.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">

      <article>
        <div className="art-hero-img">📊</div>

        <div className="art-meta-bar">
          <span className="am-tag">Perawatan</span>
          <span className="am-info">📅 12 Januari 2025</span>
          <span className="am-info">✍️ Tim Teknis TSM</span>
          <span className="am-info">⏱ 4 menit baca</span>
          <span className="am-info">👁 420 views</span>
        </div>

        <div className="prose max-w-none text-text">

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Salah satu pertanyaan paling sering kami terima dari klien adalah: "Bagaimana saya tahu sistem RO saya masih bekerja dengan baik?" Jawabannya: dengan monitoring rutin. Kabar baiknya, Anda tidak perlu alat laboratorium mahal untuk melakukan monitoring dasar sehari-hari.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Artikel ini memandu operator dan teknisi internal Anda melakukan pemeriksaan kualitas air RO secara mandiri — kapan pun dibutuhkan, tanpa menunggu kunjungan teknisi dari vendor.</p>

          <h2 id="parameter" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Parameter yang Perlu Dimonitor</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk sistem RO standar, ada 5 parameter utama yang sebaiknya dimonitor secara rutin:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>TDS (Total Dissolved Solids)</strong> — Indikator utama kemurnian air. Diukur dengan TDS meter murah.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Conductivity</strong> — Indikator ionik, lebih presisi dari TDS. Umumnya TDS = Conductivity × 0,5.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>pH</strong> — Penting untuk aplikasi tertentu, terutama farmasi dan minuman.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pressure drop (ΔP)</strong> — Selisih tekanan masuk dan keluar modul, indikator fouling membran.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Recovery rate</strong> — Persentase air yang berhasil menjadi permeate dibanding air baku.</li>
          </ul>

          <div className="info-box bg-ice border border-border rounded-[10px] p-[1.2rem_1.5rem] my-[1.75rem]">
            <strong className="block text-[0.7rem] font-bold uppercase tracking-[0.1em] text-accent mb-[0.38rem]">💡 Rule of Thumb</strong>
            Untuk RO industri yang sehat, TDS output umumnya &lt; 50 ppm dari air baku PDAM/sumur biasa. Jika tiba-tiba naik ke 100+ ppm, membran mungkin mulai bermasalah.
          </div>

          <h2 id="alat" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Alat yang Dibutuhkan</h2>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>TDS Meter digital</strong> — Harga Rp 100 ribu–500 ribu. Cukup akurat untuk monitoring harian.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Conductivity meter</strong> — Harga Rp 500 ribu–2 juta. Lebih presisi untuk aplikasi sensitif.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>pH meter digital</strong> — Harga Rp 200 ribu–1 juta.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pressure gauge</strong> — Biasanya sudah terpasang di sistem.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Flow meter</strong> — Biasanya sudah terpasang, atau gunakan stopwatch + ember untuk pengukuran manual.</li>
          </ul>

          <h2 id="prosedur" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Prosedur Monitoring Harian</h2>
          <ol className="ml-[1.5rem] my-[1.05rem] list-decimal">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kalibrasi alat dulu</strong> — TDS/conductivity meter perlu dikalibrasi dengan larutan standar minimal sebulan sekali.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Ukur air baku</strong> — Ambil sampel dari inlet RO, catat TDS dan pH.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Ukur air permeate</strong> — Ambil sampel dari outlet permeate, catat TDS dan pH.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Hitung rejection rate</strong> — Rumus: (TDS_inlet - TDS_permeate) / TDS_inlet × 100%. Target minimal 95%.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Catat tekanan</strong> — Catat tekanan inlet, outlet permeate, dan outlet reject.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Catat flow</strong> — Flow permeate dan reject, hitung recovery rate.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Dokumentasikan</strong> — Catat semua nilai di log harian dengan tanggal, jam, dan nama operator.</li>
          </ol>

          <h2 id="tanda-bahaya" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Tanda Bahaya yang Harus Diwaspadai</h2>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>TDS output naik tiba-tiba</strong> &gt; 50% dari nilai normal → Kemungkinan membran bocor atau O-ring rusak.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Rejection rate turun</strong> di bawah 93% → Membran mulai degradasi atau fouling berat.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pressure drop naik</strong> &gt; 15% dari kondisi baru → Fouling atau scaling pada membran.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Flow permeate turun</strong> &gt; 10% → Membran mengalami fouling atau pompa melemah.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>pH tiba-tiba berubah drastis</strong> → Kemungkinan kontaminasi atau kerusakan resin.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Bau tidak wajar</strong> — Jika air output tiba-tiba berbau, bisa ada kontaminasi bakteri.</li>
          </ul>

          <h2 id="log" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Contoh Log Monitoring Sederhana</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Buatlah tabel harian sederhana dengan kolom:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Tanggal &amp; jam pengukuran</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Operator yang melakukan</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">TDS inlet / permeate / reject (ppm)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">pH inlet / permeate</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Tekanan inlet / outlet permeate / reject (bar)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Flow permeate / reject (liter/menit)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Recovery rate (%)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Rejection rate (%)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Catatan khusus (suara aneh, getaran, kebocoran, dll)</li>
          </ul>

          <div className="info-box bg-ice border border-border rounded-[10px] p-[1.2rem_1.5rem] my-[1.75rem]">
            <strong className="block text-[0.7rem] font-bold uppercase tracking-[0.1em] text-accent mb-[0.38rem]">📱 Tips Digital</strong>
            Gunakan Google Sheets atau spreadsheet sederhana. Dengan data beberapa bulan, Anda bisa membuat grafik tren yang membantu memprediksi kapan perlu cleaning atau ganti membran.
          </div>

          <h2 id="kapan-panggil" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Kapan Harus Memanggil Teknisi?</h2>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Jika rejection rate turun di bawah 90% — membutuhkan analisis mendalam.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Jika pressure drop meningkat signifikan walau baru selesai cleaning.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Jika ada kebocoran yang tidak bisa diidentifikasi sumbernya.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Jika sistem kontrol/SCADA mengeluarkan alarm abnormal.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Untuk CIP (Cleaning in Place) terjadwal setiap 3–6 bulan.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Untuk penggantian membran setiap 3–5 tahun.</li>
          </ul>

          <blockquote className="border-l-4 border-accent p-[0.78rem_1.4rem] bg-ice rounded-r-md my-[1.5rem] italic text-muted">
            "Operator yang paham sistemnya sendiri adalah investasi terbaik. Mereka bisa mendeteksi masalah jauh sebelum menjadi kerusakan mahal."<br />
            <strong>— Tim Service PT Tirta Sumber Makmur</strong>
          </blockquote>

          <h2 id="konsultasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Butuh Pelatihan Operator?</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM menyediakan program pelatihan operator untuk klien-klien kami. Pelatihan mencakup monitoring dasar, troubleshooting, dan perawatan ringan. Dengan operator yang terlatih, sistem RO Anda akan lebih awet dan biaya perawatan lebih rendah.</p>
        </div>

        
        <div className="prose max-w-none text-text">

          <h2 id="faktor-monitoring" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Faktor yang Menentukan Efektivitas Program Monitoring</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Monitoring yang efektif bukan hanya tentang alat yang digunakan — tetapi tentang membangun sistem dan budaya yang memastikan data dikumpulkan, dianalisis, dan ditindaklanjuti secara konsisten. Berikut faktor-faktor yang membedakan program monitoring yang berhasil dari yang sekadar formalitas:</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">1. Konsistensi Waktu dan Titik Pengukuran</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Agar data dapat di-trend secara akurat, pengukuran harus dilakukan pada waktu yang sama setiap hari (misalnya, selalu jam 08.00 setelah sistem beroperasi minimal 30 menit dalam kondisi stabil), dari titik yang sama, dan dengan prosedur yang sama. Variasi dalam kondisi pengukuran menciptakan "noise" dalam data yang membuat deteksi tren menjadi lebih sulit. Untuk <strong>pemeliharaan sistem RO di Jakarta</strong> dan area lainnya, TSM menyediakan form monitoring standar yang membantu operator menjaga konsistensi ini.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">2. Kalibrasi Alat yang Terjadwal</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TDS meter dan conductivity meter yang tidak dikalibrasi memberikan data yang tidak dapat dipercaya. Kalibrasi dengan larutan standar (NaCl 1413 µS/cm atau KCl 84 µS/cm) harus dilakukan minimal bulanan, atau setiap kali alat terjatuh, terendam, atau menunjukkan pembacaan yang mencurigakan. Simpan sertifikat kalibrasi sebagai bagian dari dokumentasi sistem. Lihat juga halaman produk <Link to="/produk/instrumen">instrumen dan sensor monitoring water treatment</Link> dari TSM untuk pilihan peralatan yang tepat.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">3. Normalisasi Data (Bukan Hanya Data Mentah)</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Data mentah dari TDS meter atau flow meter dipengaruhi oleh suhu, tekanan umpan, dan recovery rate yang berubah setiap hari. <strong>Normalisasi data</strong> — mengkoreksi data mentah ke kondisi referensi standar — memungkinkan perbandingan yang adil antar periode. Software normalisasi sederhana tersedia gratis dari produsen membran (mis. ROSA dari Dow, IMSDesign dari Hydranautics). Pelajari lebih lanjut tentang program <Link href="layanan.html#maintenance">pemeliharaan preventif dari TSM</Link> yang sudah termasuk analisis data normalisasi berkala.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">4. Dokumentasi dan Tindak Lanjut</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Data yang tidak didokumentasikan dengan baik tidak berguna. Data yang didokumentasikan tetapi tidak ditindaklanjuti juga sia-sia. Buat prosedur yang jelas: siapa yang membaca data, siapa yang melakukan analisis mingguan, dan siapa yang memutuskan tindakan ketika ada penyimpangan. Rantai eskalasi yang jelas — dari operator ke supervisor ke vendor — memastikan masalah tidak "hilang" dalam birokrasi internal.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">5. Monitoring Berbasis Data vs. Berbasis Jadwal</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Program perawatan yang lebih maju bergerak dari pendekatan <em>calendar-based</em> (ganti filter setiap 3 bulan) ke <em>condition-based</em> (ganti filter ketika pressure drop meningkat X psi). Ini membutuhkan monitoring yang lebih konsisten, namun menghasilkan penghematan biaya yang signifikan dengan menghindari penggantian komponen yang sebenarnya masih layak pakai.</p>

          <h2 id="faq-monitoring" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan tentang Monitoring Sistem RO</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa nilai TDS yang normal untuk output sistem RO industri?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tidak ada nilai "normal" universal — yang relevan adalah <strong>rejection rate</strong> (persentase TDS yang ditolak membran). Sistem RO yang sehat memiliki rejection rate minimal 95%, idealnya 98–99%. Jika TDS air baku Anda 500 ppm, output RO seharusnya ≤25 ppm. Jika tiba-tiba naik ke 50+ ppm, artinya rejection rate turun ke 90% — sebuah sinyal peringatan yang harus diselidiki. Untuk panduan troubleshooting lebih lanjut, baca artikel kami tentang <Link to="/artikel/5-kesalahan-perawatan-ro">5 kesalahan umum perawatan membran RO</Link>.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah perlu menganalisis air secara laboratorium, atau TDS meter sudah cukup?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TDS meter cukup untuk monitoring harian rutin. Namun, <strong>analisis laboratorium</strong> lengkap (termasuk hardness, silika, logam, ion spesifik) direkomendasikan setidaknya dua kali setahun. Analisis lengkap ini penting untuk mendeteksi perubahan kualitas air baku yang tidak tercermin dalam TDS saja, memvalidasi efektivitas antiscalant, dan menentukan apakah ada masalah kontaminasi dari komponen sistem itu sendiri (mis., leaching dari material pipa).</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa yang dimaksud dengan "normalized permeate flow" dan bagaimana menghitungnya?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Normalized Permeate Flow (NPF) adalah koreksi matematis dari flow aktual terhadap variasi suhu, tekanan umpan, dan recovery rate. Formula dasar: NPF = Qp_actual × (TCF_ref/TCF_actual) × (NDP_ref/NDP_actual), di mana TCF adalah temperature correction factor dan NDP adalah net driving pressure. Penurunan NPF lebih dari 10–15% dari baseline awal adalah sinyal untuk mempertimbangkan CIP. Produsen membran menyediakan spreadsheet normalisasi gratis yang memudahkan perhitungan ini.</p>

          <h2 id="kesimpulan-monitoring" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Kesimpulan &amp; Langkah Selanjutnya</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Monitoring sistem RO yang efektif adalah fondasi dari program pemeliharaan yang sukses. Dengan data yang konsisten, terkalibrasi, dan dinormalisasi, masalah dapat dideteksi jauh sebelum menjadi kerusakan yang mahal. Investasi dalam alat monitoring yang baik dan sistem pencatatan yang disiplin akan terbayar berlipat ganda dalam umur sistem yang lebih panjang dan biaya perawatan yang lebih rendah.</p>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM siap membantu Anda membangun program monitoring yang sesuai dengan skala dan kebutuhan sistem Anda — dari panduan operator sederhana hingga implementasi SCADA real-time. Hubungi tim kami untuk konsultasi awal tanpa biaya.</p>
          <div style={{"marginTop":"1.5rem"}}>
            <Link className="btn" style={{"display":"inline-block","padding":".85rem 2rem","background":"var(--blue)","color":"#fff","borderRadius":"8px","fontWeight":"700","fontSize":".96rem"}} to="/kontak">📊 Konsultasi Program Monitoring RO →</Link>
          </div>

        </div>
    

        <div className="share-row">
          <span>Bagikan:</span>
          <Link className="sh-btn" style={{"background":"#0a66c2"}} target="_blank" rel="noopener" to="/https://www.linkedin.com/sharing/share/offsite/?url=https%3A%2F%2Fpttsm.co.id%2Fartikel-monitoring-kualitas-air-ro">LinkedIn</Link>
          <Link className="sh-btn" style={{"background":"#1877f2"}} target="_blank" rel="noopener" to="/https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpttsm.co.id%2Fartikel/monitoring-kualitas-air-ro">Facebook</Link>
          <Link href="https://wa.me/?text=Artikel%20TSM%3A%20Monitoring%20Kualitas%20RO" className="sh-btn" style={{"background":"#25d366"}} target="_blank" rel="noopener noreferrer">WhatsApp</Link>
        </div>

        <div style={{"marginTop":"3rem"}}>
          <h3 style={{"fontFamily":"'Barlow Condensed',sans-serif","fontSize":"1.4rem","fontWeight":"900","color":"var(--navy)","marginBottom":"1rem"}}>Artikel Terkait</h3>
          <div className="related-grid">
            <Link className="rel-card" to="/artikel/5-kesalahan-perawatan-ro"><div className="rel-img" style={{"background":"linear-gradient(135deg,#1a3a5c,#1e90d6)"}}>🔧</div><div className="rel-body"><p>5 Kesalahan Umum Perawatan Membran RO</p><span>5 Mar 2025 · 4 mnt</span></div></Link>
            <Link className="rel-card" to="/artikel/ro-prinsip-kerja"><div className="rel-img" style={{"background":"linear-gradient(135deg,#054a6e,#1e90d6)"}}><Droplet className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div><div className="rel-body"><p>Mengenal Teknologi Reverse Osmosis</p><span>28 Mar 2025 · 5 mnt</span></div></Link>
          </div>
        </div>
      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#parameter">Parameter yang Dimonitor</Link></li>
            <li><Link href="#alat">Alat yang Dibutuhkan</Link></li>
            <li><Link href="#prosedur">Prosedur Monitoring</Link></li>
            <li><Link href="#tanda-bahaya">Tanda Bahaya</Link></li>
            <li><Link href="#log">Contoh Log Monitoring</Link></li>
            <li><Link href="#kapan-panggil">Kapan Panggil Teknisi?</Link></li>
          </ul>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Tentang Penulis</h4>
          <div className="author-box">
            <div className="author-av">TT</div>
            <div>
              <div className="author-av-name">Tim Teknis TSM</div>
              <div className="author-av-role">Field Service</div>
            </div>
          </div>
          <p style={{"fontSize":".84rem","color":"var(--muted)","lineHeight":"1.65"}}>Tim field service engineer TSM yang setiap hari menangani operasi dan perawatan sistem RO di lapangan.</p>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem]" style={{"background":"linear-gradient(145deg,var(--navy),var(--blue))","border":"none"}}>
          <h4 style={{"color":"rgba(255,255,255,.45)","borderColor":"rgba(255,255,255,.15)"}}>Pelatihan Operator</h4>
          <p style={{"fontSize":".86rem","lineHeight":"1.65","marginBottom":"1rem","opacity":".84","color":"#fff"}}>Dapatkan pelatihan operator sistem RO untuk tim Anda dari engineer kami.</p>
          <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center","fontSize":".82rem"}} to="/kontak">📞 Konsultasi Sekarang</Link>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Artikel Lainnya</h4>
          <ul style={{"display":"flex","flexDirection":"column","gap":".65rem"}}>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/5-kesalahan-perawatan-ro">→ 5 Kesalahan Perawatan RO</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/ro-prinsip-kerja">→ Mengenal Teknologi RO</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/air-farmasi-ro-edi">→ Standar Air Farmasi</Link></li>
            <li><Link style={{"fontSize":".84rem","fontWeight":"600","color":"var(--blue)","display":"block"}} to="/artikel">→ Lihat Semua Artikel</Link></li>
          </ul>
        </div>
      </aside>

    </div>
  </div>
</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Sistem RO Anda Butuh Perhatian?</h2>
    <p>Tim service TSM siap membantu audit, perawatan, dan training operator untuk sistem Anda.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak">📞 Hubungi Kami</Link>
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/layanan"><Wrench className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Lihat Layanan Kami</Link>
    </div>
  </div>
</div>

    </>
  );
};

export default ArtikelMonitoringKualitasAirRo;
