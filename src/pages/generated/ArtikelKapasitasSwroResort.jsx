import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../../components/ui/Button';

const ArtikelKapasitasSwroResort = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.art-layout{display:grid;grid-template-columns:1fr 290px;gap:3rem;align-items:start}
.art-sticky{position:sticky;top:88px}
.art-hero-img{height:320px;border-radius:12px;overflow:hidden;margin-bottom:2rem;position:relative}
.art-hero-img img{width:100%;height:100%;object-fit:cover}
.art-meta-bar{display:flex;flex-wrap:wrap;gap:.85rem;align-items:center;margin-bottom:1.5rem;padding-bottom:1.5rem;border-bottom:1px solid var(--border)}
.am-tag{background:var(--accent);color:#fff;font-size:.66rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:.26rem .72rem;border-radius:4px}
.am-info{font-size:.8rem;color:var(--muted);display:flex;align-items:center;gap:.36rem}
.author-box{display:flex;align-items:center;gap:.9rem;margin-bottom:.9rem}
.author-av{width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,var(--sky),var(--accent));display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;flex-shrink:0}
.author-av-name{font-weight:700;font-size:.92rem;color:var(--navy)}
.author-av-role{font-size:.76rem;color:var(--muted)}
.spec-table{width:100%;border-collapse:collapse;margin:1.5rem 0}
.spec-table th,.spec-table td{padding:.7rem 1rem;border:1px solid var(--border);font-size:.86rem;text-align:left}
.spec-table th{background:var(--navy);color:#fff;font-weight:700}
.spec-table tr:nth-child(even){background:var(--gray)}
@media(max-width:1024px){.art-layout{grid-template-columns:1fr}.art-sticky{position:static}}

` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/artikel">Artikel</Link> › Hospitality</div>
    <h1>Berapa Kapasitas SWRO yang Dibutuhkan<br />untuk Resort Kepulauan 100 Kamar?</h1>
    <p>Panduan teknis menghitung kapasitas SWRO yang tepat untuk resort kepulauan — konsumsi per tamu, peak demand, buffer storage, dan strategi redundancy.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">

      <article>
        <div className="art-hero-img">
          <picture>
            <source srcSet="images/porto-pulau-ayer-1.webp" type="image/webp" />
            <img src="images/porto-pulau-ayer-1.jpg" alt="Sistem SWRO untuk resort kepulauan dengan kapasitas yang dirancang tepat" />
          </picture>
        </div>

        <div className="art-meta-bar">
          <span className="am-tag">Hospitality</span>
          <span className="am-info">📅 2 Mei 2026</span>
          <span className="am-info">✍️ Tim TSM</span>
          <span className="am-info">⏱ 8 menit baca</span>
        </div>

        <div className="prose max-w-none text-text">

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Salah satu pertanyaan tersulit yang dihadapi pengembang resort kepulauan: <strong>berapa kapasitas SWRO yang sebenarnya saya butuhkan?</strong> Salah pilih ke arah under-spec berarti tamu mengeluh kekurangan air, terutama saat occupancy tinggi. Salah pilih ke arah over-spec berarti investasi miliaran rupiah yang tidak optimal dan biaya operasional terlalu mahal.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Artikel ini memberikan kerangka praktis untuk menghitung kapasitas SWRO yang tepat — berdasarkan jumlah kamar, jenis resort, pola occupancy, dan persyaratan operasional. Dengan pengalaman TSM membangun SWRO untuk Pulau Ayer, Pulau Seribu, dan resort kepulauan lainnya, kami membagikan formula sizing yang sudah teruji.</p>

          <h2 id="kenapa-tepat" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Mengapa Sizing yang Tepat Sangat Penting</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Berbeda dengan resort di daratan yang dapat menambah pasokan air sewaktu-waktu (PDAM, sumur baru, atau truk tangki), resort kepulauan memiliki pilihan terbatas saat air kurang: <strong>(1) batasi penggunaan tamu</strong> — yang merusak guest experience, atau <strong>(2) impor air via kapal</strong> — yang mahal dan rentan cuaca buruk. Karena itu, sizing SWRO harus dilakukan dengan margin keamanan yang cukup sejak awal.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sebaliknya, over-sizing SWRO juga punya konsekuensi: investasi awal yang lebih besar, konsumsi listrik yang lebih tinggi (sistem berjalan di bawah kapasitas optimal), dan space footprint yang lebih besar. Untuk resort yang baru memulai operasi, sizing tepat dengan strategi <strong>modular expansion</strong> sering lebih ekonomis dari beli kapasitas besar di awal.</p>

          <h2 id="konsumsi-air" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Konsumsi Air per Tamu Resort Kepulauan</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Konsumsi air resort bervariasi sangat luas tergantung tipe resort:</p>

          <table className="w-full border-collapse my-[1.5rem] text-[0.9rem]">
            <tbody><tr><th>Tipe Resort</th><th>Konsumsi per Tamu/Hari</th><th>Catatan</th></tr>
            <tr><td>Eco-resort / hostel</td><td>200–350 liter</td><td>Fasilitas sederhana, no-frills</td></tr>
            <tr><td>Resort budget standar</td><td>350–500 liter</td><td>AC, kolam renang sharing</td></tr>
            <tr><td>Resort premium 4★</td><td>500–800 liter</td><td>Pool villa, spa, restaurant</td></tr>
            <tr><td>Luxury 5★ / private island</td><td>800–1.500 liter</td><td>Private pool per villa, spa intensif, F&amp;B premium</td></tr>
            <tr><td>Resort all-villa dengan pool</td><td>1.000–2.000 liter</td><td>Tertinggi karena private pool maintenance</td></tr>
          </tbody></table>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Konsumsi ini termasuk: <strong>(1) konsumsi langsung tamu</strong> (mandi, toilet, minum) sekitar 30%, <strong>(2) F&amp;B operations</strong> (dapur, restaurant) sekitar 20%, <strong>(3) laundry</strong> 15-20%, <strong>(4) kolam renang &amp; spa</strong> evaporation makeup 10-15%, <strong>(5) landscaping &amp; gardens</strong> 5-10% (jika dapat air payau diirigasi pakai air laut tanpa treatment, ini bisa diabaikan), dan <strong>(6) staff &amp; back-of-house</strong> 10-15%.</p>

          <h2 id="peak-demand" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Menghitung Peak Demand</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Konsumsi rata-rata bukan satu-satunya angka yang penting. Resort memiliki <strong>peak demand</strong> di periode tertentu yang melebihi rata-rata harian:</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Peak Hours dalam Sehari</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Konsumsi tidak terdistribusi merata 24 jam — ada peak pagi (mandi tamu 06:00-09:00), peak makan siang/sore (laundry siang, dapur), dan peak malam (mandi sebelum tidur 19:00-22:00). Peak hour dapat 1,5-2x dari rata-rata harian. Sistem SWRO biasanya beroperasi kontinu dan filling storage tank, jadi peak hour ditangani oleh storage capacity, bukan output instan SWRO.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Peak Season Tahunan</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Resort mengalami high season (liburan akhir tahun, libur sekolah, weekend) dengan occupancy mendekati 100%, dan low season dengan occupancy 30-50%. <strong>Sizing harus berdasarkan high season</strong> — jangan mengira-ngira dari okupansi rata-rata. Jika resort 100 kamar dengan occupancy rata-rata 60% tapi high season 95%, sizing harus untuk 95 kamar penuh terisi.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Peak Event</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Resort yang melayani wedding, MICE (Meeting Incentive Conference Exhibition), atau event besar dapat mengalami peak event dengan demand 1,5-2x normal. Jika resort regular menerima wedding 200-300 tamu, kapasitas harus mencakup ini.</p>

          <h2 id="buffer-storage" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Buffer Storage Tank: Tidak Boleh Diabaikan</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>Storage tank adalah elemen sizing yang sama pentingnya dengan kapasitas SWRO</strong>. Storage tank berperan: (1) buffer antara produksi continuous SWRO dengan konsumsi yang berfluktuasi, (2) cadangan saat SWRO down untuk maintenance, dan (3) emergency reserve saat SWRO gagal.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Sizing Storage Tank yang Tepat</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Minimum 12 jam konsumsi rata-rata</strong> — Untuk resort kecil-menengah, 12 jam buffer sudah cukup untuk handle peak hour dan minor maintenance</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>24-36 jam konsumsi rata-rata</strong> — Untuk resort premium yang tidak boleh kekurangan air sama sekali, atau resort yang lokasinya sangat sulit di-service jika SWRO bermasalah</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>48-72 jam emergency tank</strong> — Untuk luxury resort dengan tamu high-profile, butuh tank dedicated khusus untuk emergency</li>
          </ul>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Storage tank biasanya menggunakan tank fiber FRP atau stainless steel SS-304. Untuk resort tropis, tank harus terlindung dari sinar matahari langsung untuk mencegah pertumbuhan algae dan kenaikan suhu air.</p>

          <h2 id="redundancy" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Redundancy &amp; Reliability Strategy</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Redundancy meningkatkan reliability tapi juga menaikkan investasi. Beberapa pilihan strategi:</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Single Train, Storage Buffer Besar</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Satu unit SWRO + storage tank besar 36-72 jam. Cocok untuk resort kecil-menengah dengan budget terbatas dan toleransi maintenance scheduled. Risiko: jika SWRO gagal mendadak, hanya storage tank yang melindungi.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Dua Train Paralel (50% + 50%)</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Dua unit SWRO masing-masing 50% dari kebutuhan total, beroperasi paralel. Saat satu maintenance, satu lagi tetap produksi (50% kapasitas). Storage tank dapat lebih kecil. Cocok untuk resort menengah-besar dan luxury.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Dua Train Independen (100% + Backup)</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Satu unit utama 100% kebutuhan, satu unit backup 100% (biasanya 50-70% kapasitas utama untuk emergency). Maximum reliability tapi investasi tertinggi. Cocok untuk luxury resort dengan tamu high-profile.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Modular Expansion-Ready</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk resort yang baru memulai operasi dengan rencana ekspansi: install 1 train sesuai kebutuhan saat ini, dengan space dan electrical untuk menambah train kedua nanti saat occupancy naik atau ekspansi kamar. Strategi sizing yang bijak untuk mengelola cashflow di awal operasi.</p>

          <h2 id="contoh-100-kamar" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Contoh Konkret: Resort 100 Kamar Premium 4★</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Mari kita hitung step-by-step kapasitas SWRO untuk resort hipotetis berikut:</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Profil Resort</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kapasitas</strong>: 100 kamar (200 tamu maksimal saat full double occupancy)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Tipe</strong>: Resort premium 4★ dengan pool, spa, 2 restaurant</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Occupancy rata-rata</strong>: 65% tahun penuh</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Occupancy peak season</strong>: 92%</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Occupancy peak event (wedding/MICE)</strong>: 95% + 100 tamu eksternal event</li>
          </ul>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Step 1: Konsumsi Rata-Rata Harian</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Premium 4★ ~600 liter/tamu/hari × 200 tamu × 65% occupancy = <strong>78 m³/hari rata-rata</strong></p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Step 2: Peak Season Daily</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">600 liter × 200 × 92% = <strong>110 m³/hari peak season</strong></p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Step 3: Peak Event Daily</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">600 × 190 (occupancy 95%) + 200 (event tamu eksternal × 100 liter) = 114 + 20 = <strong>134 m³/hari peak event</strong></p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Step 4: Sizing SWRO</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sizing harus untuk peak event dengan margin 15-20%: <strong>134 × 1,18 = ~158 m³/hari kapasitas SWRO</strong>. Pembulatan ke konfigurasi standar: SWRO 160 m³/hari atau 2× train 80 m³/hari.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Step 5: Sizing Storage Tank</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk reliability premium, tank 30 jam konsumsi rata-rata: 78 × (30/24) = <strong>~98 m³ tank</strong>. Bisa dibulatkan ke 100 m³ tank fiber FRP, atau 2× 50 m³ untuk redundancy.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Total Investasi Estimasi</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">SWRO 160 m³/hari (2 train 80 m³/hari) berkisar Rp 3,5–5,5 milyar tergantung level otomasi dan sertifikasi. Plus storage tank 100 m³ Rp 200-400 juta. Plus instalasi, pengiriman, commissioning. Total investasi sekitar Rp 4-6,5 milyar untuk sistem SWRO lengkap pada resort ini.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Bandingkan dengan biaya pengiriman air kapal — untuk resort yang konsumsi rata-rata 78 m³/hari, biaya transport bisa Rp 800 juta - 1,5 milyar per tahun di Kepulauan Seribu. ROI 3-5 tahun adalah angka yang masuk akal untuk investasi SWRO.</p>

          <h2 id="kesalahan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Kesalahan Sizing yang Sering Terjadi</h2>
          <ol className="ml-[1.5rem] my-[1.05rem] list-decimal">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sizing berdasarkan occupancy rata-rata, bukan peak</strong> — Hampir pasti underserve di peak season. Always size untuk occupancy peak.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Menggunakan angka konsumsi air yang terlalu rendah</strong> — Banyak benchmark online berbasis hotel kota yang konsumsinya lebih rendah. Resort kepulauan dengan pool dan landscaping butuh lebih banyak.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Mengabaikan landscape irrigation</strong> — Beberapa resort meng-irigasi taman dengan air SWRO yang lebih murni dari yang dibutuhkan tanaman. Pilih: sumur dangkal khusus irigasi, atau air payau dengan minimal treatment.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Storage tank terlalu kecil</strong> — Storage adalah backup utama saat SWRO maintenance. Minimum 12 jam, ideal 24-36 jam untuk resort menengah.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Tidak ada redundancy plan</strong> — Single train tanpa backup adalah single point of failure. Minimal punya plan untuk emergency air (truk tanker dari daratan) saat SWRO gagal lama.</li>
          </ol>

          <h2 id="faq" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

        </div>

      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#kenapa-tepat">Kenapa Sizing Tepat Penting</Link></li>
            <li><Link href="#konsumsi-air">Konsumsi Air per Tamu</Link></li>
            <li><Link href="#peak-demand">Menghitung Peak Demand</Link></li>
            <li><Link href="#buffer-storage">Buffer Storage Tank</Link></li>
            <li><Link href="#redundancy">Redundancy &amp; Reliability</Link></li>
            <li><Link href="#contoh-100-kamar">Contoh: Resort 100 Kamar</Link></li>
            <li><Link href="#kesalahan">Kesalahan Sizing yang Sering</Link></li>
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
          <Button variant="white" to="/kontak" >📞 Konsultasi Sekarang</Button>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Artikel Lainnya</h4>
          <ul style={{"display":"flex","flexDirection":"column","gap":".65rem"}}>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/desalinasi-solusi-pulau">→ Desalinasi untuk Pulau Terpencil</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/ro-hotel-resort">→ RO untuk Hotel &amp; Resort</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/portofolio/pulau-ayer">→ Studi Kasus: Pulau Ayer</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/desalinasi">→ Solusi SWRO TSM</Link></li>
            <li><Link style={{"fontSize":".84rem","fontWeight":"600","color":"var(--blue)","display":"block"}} to="/artikel">→ Lihat Semua Artikel</Link></li>
          </ul>
        </div>
      </aside>

    </div>
  </div>
</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold leading-[1.15] mb-[0.65rem]">Merencanakan SWRO untuk Resort Anda?</h2>
    <p className="text-[0.88rem] opacity-90 leading-[1.75] max-w-[600px] mx-auto mb-8">Tim ahli kami siap membantu mulai dari analisis kebutuhan hingga instalasi.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Button variant="white" to="/kontak" >📞 Hubungi Kami</Button>
      <Button variant="outline-white" to="/produk/desalinasi" >🔍 Lihat Solusi SWRO</Button>
    </div>
  </div>
</div>

    </>
  );
};

export default ArtikelKapasitasSwroResort;
