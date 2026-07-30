import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplet, Waves, Ship } from 'lucide-react';


const ArtikelDesalinasiSolusiPulau = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.art-layout{display:grid;grid-template-columns:1fr 290px;gap:3rem;align-items:start}
.art-sticky{position:sticky;top:88px}
.art-hero-img{height:310px;background:linear-gradient(135deg,#0a2240,#0d5fa8,#00b4d8);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:8rem;margin-bottom:2rem}
.art-meta-bar{display:flex;flex-wrap:wrap;gap:.85rem;align-items:center;margin-bottom:1.5rem;padding-bottom:1.5rem;border-bottom:1px solid var(--border)}
.am-tag{background:var(--navy);color:#fff;font-size:.66rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:.26rem .72rem;border-radius:4px}
.am-info{font-size:.8rem;color:var(--muted)}
.share-row{display:flex;align-items:center;gap:.72rem;margin-top:2.5rem;padding-top:1.5rem;border-top:1px solid var(--border);flex-wrap:wrap}
.share-row span{font-size:.78rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.06em}
.sh-btn{padding:.38rem .95rem;border-radius:6px;font-size:.78rem;font-weight:600;color:#fff;transition:var(--t)}
.sh-btn:hover{opacity:.82}
.stats-row{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin:2rem 0}
.stat-box{background:var(--ice);border:1px solid var(--border);border-radius:10px;padding:1.15rem;text-align:center}
.stat-box .sn{font-family:'Barlow Condensed',sans-serif;font-size:1.9rem;font-weight:900;color:var(--blue);line-height:1}
.stat-box .sl{font-size:.74rem;color:var(--muted);margin-top:.25rem}
.related-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:.8rem}
.rel-card{border:1px solid var(--border);border-radius:8px;overflow:hidden;transition:var(--t);display:block}
.rel-card:hover{transform:translateY(-3px);box-shadow:var(--sh);border-color:var(--accent)}
.rel-img{height:88px;display:flex;align-items:center;justify-content:center;font-size:1.9rem}
.rel-body{padding:.9rem}
.rel-body p{font-size:.82rem;font-weight:600;color:var(--navy);line-height:1.4;margin-bottom:.25rem}
.rel-body span{font-size:.7rem;color:var(--muted)}
@media(max-width:1024px){.art-layout{grid-template-columns:1fr}.art-sticky{position:static}.related-grid{grid-template-columns:1fr}.stats-row{grid-template-columns:1fr 1fr}}

` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden" style={{"background":"linear-gradient(135deg,#0a2240,#0d5fa8)"}}>
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/artikel">Artikel</Link> › Desalinasi</div>
    <h1>Desalinasi Air Laut: Solusi Krisis Air Bersih<br />di Pulau-Pulau Terpencil Indonesia</h1>
    <p>Indonesia memiliki lebih dari 17.000 pulau, namun jutaan warganya masih kesulitan mendapatkan air tawar layak konsumsi. Teknologi SWRO hadir sebagai solusi.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>
        <div className="art-hero-img"><Waves className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div>

        <div className="art-meta-bar">
          <span className="am-tag">Desalinasi</span>
          <span className="am-info">📅 15 Maret 2025</span>
          <span className="am-info">✍️ Tim TSM</span>
          <span className="am-info">⏱ 6 menit baca</span>
          <span className="am-info">👁 890 views</span>
        </div>

        <div className="prose max-w-none text-text">
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Indonesia, sebagai negara kepulauan terbesar di dunia, menghadapi paradoks yang menggelitik: dikelilingi lautan namun kekurangan air tawar. Bagi jutaan warga yang tinggal di pulau-pulau terpencil, mendapatkan air bersih layak konsumsi adalah tantangan nyata sehari-hari.</p>

          <div className="stats-row">
            <div className="stat-box"><div className="sn">17.508</div><div className="sl">Pulau di Indonesia</div></div>
            <div className="stat-box"><div className="sn">~28 jt</div><div className="sl">Jiwa tanpa akses air bersih layak</div></div>
            <div className="stat-box"><div className="sn">97%</div><div className="sl">Air di bumi adalah air asin</div></div>
          </div>

          <h2 id="tantangan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Tantangan Air Tawar di Kepulauan Indonesia</h2>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Tidak ada sumber air tanah memadai</strong> — Pulau karang kecil tidak memiliki akuifer yang cukup untuk memenuhi kebutuhan penduduk.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Curah hujan tidak merata</strong> — Banyak daerah di Indonesia timur mengalami musim kering panjang dengan curah hujan sangat minim.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Intrusi air laut</strong> — Pengambilan air tanah berlebihan di pulau kecil dan daerah pesisir menyebabkan intrusi air laut ke akuifer.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Logistik mahal dan tidak berkelanjutan</strong> — Distribusi air tawar ke pulau terpencil menggunakan kapal tangki bisa mencapai Rp 50.000–100.000/m³.</li>
          </ul>

          <h2 id="apa-desalinasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Apa Itu Desalinasi dan Cara Kerjanya?</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Desalinasi adalah proses menghilangkan garam dan mineral terlarut dari air laut atau air payau untuk menghasilkan air tawar layak konsumsi. Teknologi yang paling banyak digunakan secara global adalah <strong>Sea Water Reverse Osmosis (SWRO)</strong>.</p>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Dalam sistem SWRO, air laut dipompa dengan tekanan sangat tinggi (55–80 bar) melalui membran semi-permeabel khusus yang menahan salinitas air laut (kadar garam ~35.000 ppm). Air yang lolos melewati membran memiliki TDS sangat rendah (&lt;500 ppm, bahkan &lt;50 ppm) dan layak konsumsi setelah proses remineralisasi.</p>

          <div className="info-box bg-ice border border-border rounded-[10px] p-[1.2rem_1.5rem] my-[1.75rem]">
            <strong className="block text-[0.7rem] font-bold uppercase tracking-[0.1em] text-accent mb-[0.38rem]">💡 Fakta: Dominasi SWRO Secara Global</strong>
            SWRO saat ini mendominasi &gt;65% kapasitas desalinasi dunia karena konsumsi energi yang jauh lebih rendah dibandingkan teknologi thermal seperti MSF dan MED. Biaya produksi SWRO modern sudah turun hingga di bawah USD 0,50 per m³ untuk instalasi skala besar.
          </div>

          <h2 id="aplikasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Aplikasi Desalinasi di Indonesia</h2>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kepulauan wisata</strong> — Resort mewah di Raja Ampat, Lombok, dan Labuan Bajo menggunakan sistem SWRO untuk menyediakan air berkualitas tinggi bagi tamu dan operasional.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pulau berpenduduk</strong> — Pemerintah daerah di Kepulauan Riau, Maluku, dan NTT mulai mengadopsi SWRO sebagai infrastruktur air minum komunitas.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Platform offshore dan kapal</strong> — Industri minyak &amp; gas dan operator kapal pesiar menggunakan sistem SWRO compact untuk kebutuhan kru dan operasional di laut.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Industri perikanan pesisir</strong> — Fasilitas pengolahan ikan dan budidaya menggunakan air desalinasi untuk memastikan kualitas produk ekspor.</li>
          </ul>

          <h2 id="biaya" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Berapa Biaya Sistem Desalinasi?</h2>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Skala kecil (1–5 m³/hari)</strong> — Ideal untuk unit keluarga atau fasilitas kecil di pulau terpencil. Investasi awal Rp 80–250 juta.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Skala menengah (5–100 m³/hari)</strong> — Cocok untuk resort, fasilitas komunitas kecil, dan kapal. Investasi Rp 200 juta – 2 miliar.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Skala besar (100–1.000+ m³/hari)</strong> — Untuk instalasi komunitas besar, industri, dan pembangkit listrik. Investasi mulai Rp 2 miliar.</li>
          </ul>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Biaya operasional utama adalah listrik untuk high-pressure pump (3–8 kWh per m³ air yang diproduksi) dan perawatan membran secara berkala.</p>

          <blockquote className="border-l-4 border-accent p-[0.78rem_1.4rem] bg-ice rounded-r-md my-[1.5rem] italic text-muted">
            "Dalam jangka panjang, investasi di sistem SWRO jauh lebih ekonomis dibandingkan terus-menerus membeli air dari kapal tangki, yang harganya bisa mencapai Rp 50.000–100.000 per meter kubik di daerah terpencil."
            <br /><strong>— Tim TSM, Senior Engineer PT Tirta Sumber Makmur</strong>
          </blockquote>

          <h2 id="memilih" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Cara Memilih Sistem Desalinasi yang Tepat</h2>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Analisis kualitas air laut</strong> — Salinitas, suhu, kandungan biologi (silt, alga), dan kontaminan khusus sangat mempengaruhi desain pre-treatment.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sumber energi yang tersedia</strong> — Listrik PLN, solar panel, atau generator? Kombinasi dengan energi terbarukan bisa sangat menghemat biaya operasional.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kapasitas yang dibutuhkan</strong> — Perhitungan kebutuhan air harian yang akurat sangat penting untuk sizing sistem yang tepat dan ekonomis.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Dukungan purna jual</strong> — Pilih vendor yang memiliki dukungan teknis dan stok suku cadang yang mudah dijangkau di Indonesia.</li>
          </ul>

          <h2 id="solusi-tsm" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Solusi Desalinasi dari PT Tirta Sumber Makmur</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">PT Tirta Sumber Makmur telah mengerjakan berbagai proyek desalinasi di seluruh Indonesia, dari unit portabel kecil untuk pulau terpencil hingga instalasi besar untuk resort dan industri. Layanan lengkap kami meliputi:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Survei lokasi dan analisis kualitas air laut setempat</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Desain dan engineering sistem sesuai kebutuhan spesifik</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Pengadaan, pemasangan, dan komisioning unit SWRO</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Pelatihan operator dan transfer pengetahuan</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Kontrak perawatan jangka panjang dan ketersediaan suku cadang</li>
          </ul>
        </div>

        
        <div className="prose max-w-none text-text">

          <h2 id="faktor-desalinasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Faktor yang Perlu Dipertimbangkan dalam Proyek Desalinasi</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Proyek desalinasi — terutama di kepulauan dan daerah terpencil Indonesia — memiliki kompleksitas unik yang berbeda dari instalasi RO darat biasa. Berikut faktor-faktor yang wajib dipertimbangkan secara matang sebelum memulai proyek:</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">1. Karakteristik Air Laut Setempat</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Air laut Indonesia tidak seragam. Salinitas, suhu, kandungan biologi (alga, plankton, bakteri), dan polutan berbeda signifikan antara wilayah. Air laut di perairan Natuna berbeda dengan Selat Lombok atau Laut Banda. Survei kualitas air laut minimal 3 bulan di musim berbeda sangat direkomendasikan sebelum desain sistem dimulai, terutama untuk memastikan pre-treatment yang tepat terhadap biofouling — salah satu tantangan terbesar <strong>desalinasi air laut Indonesia</strong>.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">2. Sumber Energi dan Biaya Listrik</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">SWRO adalah konsumen energi besar — 3–5 kWh per m³ air yang diproduksi. Untuk pulau terpencil, sumber energi menentukan kelayakan finansial proyek. Tiga skenario umum: listrik PLN (jika tersedia dan andal), genset diesel (biaya tinggi tapi fleksibel), atau hybrid solar-diesel (investasi awal lebih besar, namun biaya operasional jauh lebih rendah jangka panjang). Sistem hybrid solar-SWRO saat ini semakin kompetitif dengan penurunan harga panel surya yang signifikan. Untuk estimasi biaya sistem, gunakan <Link to="/kalkulator">kalkulator kebutuhan air TSM</Link> sebagai titik awal.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">3. Logistik dan Akses Layanan Purna Jual</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>Harga desalinasi air laut Indonesia</strong> tidak hanya ditentukan oleh investasi awal, tetapi juga oleh biaya operasional dan perawatan jangka panjang. Untuk pulau terpencil, biaya logistik suku cadang bisa sangat signifikan. Rancang sistem dengan komponen yang tersedia di pasar lokal Indonesia, dan pilih vendor yang memiliki jaringan distribusi nasional. TSM memiliki stok membran, pompa, dan kimia di Bekasi yang dapat dikirimkan ke seluruh Indonesia.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">4. Kapasitas dan Redundansi</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk komunitas atau industri yang bergantung penuh pada desalinasi sebagai satu-satunya sumber air, redundansi sistem wajib dibangun. Sistem dengan dua train paralel (masing-masing 50% kapasitas penuh) memungkinkan perawatan satu train tanpa gangguan pasokan. Untuk resort mewah atau fasilitas medis di kepulauan, standar ini bukan pilihan — melainkan keharusan.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">5. Pengelolaan Brine</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Setiap sistem SWRO menghasilkan brine (air buangan berkonsentrasi tinggi). Di lepas pantai, brine umumnya dibuang ke laut dengan diffuser untuk memastikan pengenceran cepat dan meminimalkan dampak ekologis. Di wilayah ekosistem sensitif seperti terumbu karang atau padang lamun, analisis dampak lingkungan dan desain diffuser yang tepat adalah kewajiban regulasi dan etis.</p>

          <div className="info-box bg-ice border border-border rounded-[10px] p-[1.2rem_1.5rem] my-[1.75rem]">
            <strong className="block text-[0.7rem] font-bold uppercase tracking-[0.1em] text-accent mb-[0.38rem]">🔗 Referensi:</strong>
            Untuk aplikasi SWRO pada kapal dan platform offshore, baca juga artikel kami tentang <Link to="/artikel/ro-kapal-offshore">sistem RO untuk kapal dan platform offshore</Link>. Lihat juga halaman produk <Link to="/produk/desalinasi">sistem desalinasi SWRO</Link> dari TSM untuk spesifikasi teknis lengkap.
          </div>

          <h2 id="faq-desalinasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan tentang Desalinasi</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa biaya investasi sistem SWRO untuk pulau kecil di Indonesia?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Biaya sangat bervariasi tergantung kapasitas, lokasi, dan kompleksitas instalasi. Sebagai gambaran umum: sistem SWRO 5–10 m³/hari untuk desa kecil berkisar Rp 500 juta – 1,5 miliar. Sistem untuk resort 50–100 m³/hari berkisar Rp 2–6 miliar. Sistem komunitas besar atau industri 200–500 m³/hari bisa mencapai Rp 8–25 miliar. Biaya logistik ke pulau terpencil menambah 15–40% dari biaya peralatan. Hubungi tim TSM untuk estimasi yang lebih akurat sesuai lokasi dan kebutuhan spesifik Anda.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa lama sistem SWRO bisa beroperasi tanpa gangguan?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem SWRO yang dirawat dengan baik dapat beroperasi <strong>8.000–8.500 jam per tahun</strong> (availability &gt;95%). Downtime terencana untuk perawatan preventif biasanya 2–4 hari per kuartal. Downtime tidak terencana umumnya terkait fouling membran (diatasi dengan CIP) atau kerusakan pompa. Desain sistem dengan komponen berulang dan protokol perawatan yang ketat adalah kunci keandalan jangka panjang.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah air hasil desalinasi aman untuk diminum langsung?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Air permeate SWRO memenuhi standar kemurnian kimia yang sangat tinggi — jauh di bawah batas WHO dan SNI. Namun, sebelum konsumsi langsung, diperlukan post-treatment: <strong>remineralisasi</strong> (menambahkan kembali mineral seperti kalsium dan magnesium yang diperlukan tubuh), penyesuaian pH, dan sterilisasi UV. Sistem air minum yang lengkap dan tervalidasi menghasilkan air berkualitas tinggi yang aman dan lezat.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Mengapa TSM dipilih untuk proyek desalinasi di Indonesia?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM memiliki rekam jejak proyek SWRO di berbagai lokasi kepulauan Indonesia, termasuk Kepulauan Seribu dan pulau-pulau di luar Jawa. Kami memahami tantangan logistik, kondisi air laut lokal, dan regulasi Indonesia. Tim kami juga berpengalaman dalam sistem hybrid solar-SWRO yang semakin relevan untuk pulau-pulau tanpa koneksi PLN yang andal. Lihat <Link href="industri.html#maritim">solusi water treatment maritim</Link> kami untuk detail lebih lanjut.</p>

          <h2 id="kesimpulan-desalinasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Kesimpulan &amp; Langkah Selanjutnya</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Desalinasi air laut bukan lagi teknologi masa depan — ia adalah solusi nyata yang saat ini menghadirkan air bersih bagi jutaan orang di kepulauan dan wilayah pesisir Indonesia. Dengan penurunan biaya yang signifikan dalam satu dekade terakhir dan meningkatnya kehandalan teknologi SWRO, investasi ini semakin dapat dipertanggungjawabkan secara ekonomis.</p>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Apakah Anda mengelola resort kepulauan, mewakili pemerintah daerah kepulauan, atau memimpin fasilitas industri di kawasan pesisir? TSM siap membantu dari tahap survei awal hingga sistem beroperasi penuh dan terpelihara.</p>
          <div style={{"marginTop":"1.5rem"}}>
            <Link className="btn" style={{"display":"inline-block","padding":".85rem 2rem","background":"var(--blue)","color":"#fff","borderRadius":"8px","fontWeight":"700","fontSize":".96rem"}} to="/kontak"><Waves className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Konsultasikan Proyek Desalinasi Anda →</Link>
          </div>

        </div>
    

        <div className="share-row">
          <span>Bagikan:</span>
          <Link className="sh-btn" style={{"background":"#0a66c2"}} target="_blank" rel="noopener" to="/https://www.linkedin.com/sharing/share/offsite/?url=https%3A%2F%2Fpttsm.co.id%2Fartikel-desalinasi-solusi-pulau">LinkedIn</Link>
          <Link className="sh-btn" style={{"background":"#1877f2"}} target="_blank" rel="noopener" to="/https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpttsm.co.id%2Fartikel/desalinasi-solusi-pulau">Facebook</Link>
          <Link href="https://wa.me/?text=Desalinasi+Air+Laut+Indonesia+TSM" className="sh-btn" style={{"background":"#25d366"}} target="_blank" rel="noopener noreferrer">WhatsApp</Link>
        </div>

        <div style={{"marginTop":"3rem"}}>
          <h3 style={{"fontFamily":"'Barlow Condensed',sans-serif","fontSize":"1.4rem","fontWeight":"900","color":"var(--navy)","marginBottom":"1rem"}}>Artikel Terkait</h3>
          <div className="related-grid">
            <Link className="rel-card" to="/artikel/ro-prinsip-kerja"><div className="rel-img" style={{"background":"linear-gradient(135deg,#054a6e,#1e90d6)"}}><Droplet className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div><div className="rel-body"><p>Mengenal Teknologi Reverse Osmosis: Prinsip Kerja</p><span>28 Mar 2025</span></div></Link>
            <Link className="rel-card" to="/artikel/ro-kapal-offshore"><div className="rel-img" style={{"background":"linear-gradient(135deg,#093060,#0d5fa8)"}}><Ship className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div><div className="rel-body"><p>Sistem RO untuk Kapal dan Platform Offshore</p><span>3 Jan 2025</span></div></Link>
          </div>
        </div>
      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem]">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#tantangan">Tantangan Air di Kepulauan</Link></li>
            <li><Link href="#apa-desalinasi">Apa Itu Desalinasi?</Link></li>
            <li><Link href="#aplikasi">Aplikasi di Indonesia</Link></li>
            <li><Link href="#biaya">Berapa Biayanya?</Link></li>
            <li><Link href="#memilih">Cara Memilih Sistem</Link></li>
            <li><Link href="#solusi-tsm">Solusi dari TSM</Link></li>
          </ul>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem]" style={{"background":"linear-gradient(145deg,var(--navy),var(--blue))","border":"none"}}>
          <h4 style={{"color":"rgba(255,255,255,.45)","borderColor":"rgba(255,255,255,.15)"}}>Butuh Sistem Desalinasi?</h4>
          <p style={{"fontSize":".86rem","lineHeight":"1.65","marginBottom":"1rem","opacity":".84","color":"#fff"}}>Konsultasikan kebutuhan desalinasi Anda dengan engineer TSM secara gratis.</p>
          <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center","fontSize":".82rem"}} to="/kontak">📞 Konsultasi Gratis</Link>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem]">
          <h4>Artikel Lainnya</h4>
          <ul style={{"display":"flex","flexDirection":"column","gap":".65rem"}}>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/ro-prinsip-kerja">→ Prinsip Kerja Reverse Osmosis</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/5-kesalahan-perawatan-ro">→ 5 Kesalahan Perawatan Membran RO</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/studi-kasus-ro-tekstil">→ Studi Kasus Pabrik Tekstil</Link></li>
            <li><Link style={{"fontSize":".84rem","fontWeight":"600","color":"var(--blue)","display":"block"}} to="/artikel">→ Lihat Semua Artikel</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Butuh Solusi Desalinasi untuk Proyek Anda?</h2>
    <p>Dari kepulauan wisata hingga platform offshore — TSM siap menghadirkan solusi terbaik.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak">📞 Hubungi Kami</Link>
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/produk/desalinasi"><Waves className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Produk Desalinasi</Link>
    </div>
  </div>
</div>

    </>
  );
};

export default ArtikelDesalinasiSolusiPulau;
