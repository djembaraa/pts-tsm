import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const IndustriHotel = () => {
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
.spec-table th,.spec-table td{padding:.75rem 1rem;border:1px solid var(--border);font-size:.88rem;text-align:left}
.spec-table th{background:var(--navy);color:#fff;font-weight:700}
.spec-table tr:nth-child(even){background:var(--gray)}
.use-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem;margin:1.5rem 0}
.use-card{padding:1.25rem;background:var(--gray);border-radius:10px;border-left:4px solid var(--accent)}
.use-card h4{margin-bottom:.4rem;color:var(--navy);font-size:.98rem}
.use-card p{font-size:.86rem;color:var(--muted);line-height:1.55;margin:0}

` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/industri">Industri</Link> › Hotel &amp; Resort</div>
    <h1>Water Treatment untuk Hotel &amp; Resort</h1>
    <p>Sistem RO dan SWRO desalinasi untuk hotel berbintang, resort pantai, dan resort kepulauan — termasuk pulau-pulau terpencil di seluruh Indonesia.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>
        <div className="prose max-w-none text-text">

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Industri perhotelan dan resort di Indonesia menghadapi tantangan air yang sangat unik. Berbeda dengan pabrik atau gedung perkantoran yang biasanya berada di kawasan dengan akses PDAM yang baik, banyak hotel berbintang dan resort wisata kelas atas justru berlokasi di area dengan akses air bersih yang terbatas: pulau-pulau terpencil, daerah pesisir dengan air tanah payau, atau kawasan wisata di mana sumber air baku berkualitas rendah dan tidak dapat diandalkan.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">PT Tirta Sumber Makmur memiliki pengalaman menyediakan <strong>solusi water treatment hotel</strong> dan <strong>SWRO desalinasi resort</strong> untuk berbagai properti — dari hotel bisnis di Jakarta hingga resort eksklusif di kepulauan terpencil. Setiap proyek mengajarkan kami satu hal: di industri perhotelan, air bukan hanya utilitas — air adalah bagian dari pengalaman tamu.</p>

          <h2 id="kebutuhan-hotel" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Kebutuhan Air di Industri Perhotelan</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Konsumsi air di hotel sangat bervariasi tergantung kelas, fasilitas, dan tingkat hunian. Sebagai panduan umum, hotel bintang 4–5 membutuhkan 400–650 liter air per kamar per hari, sementara resort dengan fasilitas spa dan kolam renang ekstensif bisa mencapai 800–1.200 liter per kamar per hari.</p>

          <div className="use-grid">
            <div className="use-card">
              <h4>Kebutuhan Tamu</h4>
              <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Mandi, toilet, drinking water, mini-bar — kualitas tinggi yang aman dan tidak meninggalkan noda atau bau.</p>
            </div>
            <div className="use-card">
              <h4>Food &amp; Beverage</h4>
              <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Dapur restoran, kopi, dan ice maker membutuhkan air dengan kualitas konsisten dan rendah mineral untuk konsistensi rasa.</p>
            </div>
            <div className="use-card">
              <h4>Laundry &amp; Housekeeping</h4>
              <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Air sadah merusak linen dan handuk. Laundry hotel berbintang membutuhkan air lunak (soft water) untuk hasil cucian premium.</p>
            </div>
            <div className="use-card">
              <h4>Kolam Renang &amp; Spa</h4>
              <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kolam renang membutuhkan make-up water berkualitas tinggi untuk mengurangi konsumsi klorin dan menjaga kejernihan.</p>
            </div>
            <div className="use-card">
              <h4>Landscaping &amp; Irigasi</h4>
              <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Taman tropis di resort membutuhkan air dengan TDS dan rasio sodium yang tepat agar tidak membakar tanaman.</p>
            </div>
            <div className="use-card">
              <h4>Cooling Tower &amp; HVAC</h4>
              <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem AC sentral hotel membutuhkan air make-up berkualitas untuk efisiensi pendinginan dan mencegah Legionella.</p>
            </div>
          </div>

          <h2 id="swro-resort-pulau" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">SWRO Desalinasi untuk Resort Kepulauan</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Resort di pulau-pulau terpencil di Indonesia — dari Kepulauan Seribu, Karimunjawa, Belitung, hingga Raja Ampat dan Wakatobi — menghadapi situasi yang sama: tidak ada akses PDAM, air tanah terbatas atau payau (intrusi air laut), dan biaya transportasi air tangki sangat mahal serta tidak berkelanjutan.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Solusinya adalah <strong>SWRO (Sea Water Reverse Osmosis)</strong> — desalinasi air laut menjadi air tawar berkualitas drinking water. Teknologi ini telah matang, ekonomis untuk skala resort, dan memberikan kemandirian air yang lengkap.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Studi Kasus: Pulau Ayer Resort</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM mengerjakan instalasi sistem SWRO untuk Pulau Ayer Resort di Kepulauan Seribu — salah satu kasus klasik bagaimana SWRO mengubah ekonomi operasi resort pulau. Detail lengkap tersedia di studi kasus <Link to="/portofolio/pulau-ayer">RO Air Laut Pulau Ayer Kepulauan Seribu</Link>.</p>

          <div className="info-box bg-ice border border-border rounded-[10px] p-[1.2rem_1.5rem] my-[1.75rem]">
            <strong className="block text-[0.7rem] font-bold uppercase tracking-[0.1em] text-accent mb-[0.38rem]">📊 Hasil Proyek Pulau Ayer Resort</strong><br />
            ✓ Sistem SWRO 30 m³/hari beroperasi 24/7<br />
            ✓ Eliminasi biaya tangki air dari mainland (sekitar Rp 6 juta/hari)<br />
            ✓ Payback period: 14 bulan<br />
            ✓ Kualitas drinking water memenuhi Permenkes 492/2010<br />
            ✓ Tidak ada lagi kekurangan air saat high season
          </div>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Studi Kasus: Wine Resort Bali</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk resort wine di Bali, kami merancang sistem RO+remineralisasi yang menghasilkan air dengan profil mineral spesifik untuk drinking water tamu sekaligus untuk irigasi kebun anggur. Lihat <Link to="/portofolio/wine-bali">studi kasus Wine Resort Bali</Link> untuk detail teknis.</p>

          <h2 id="solusi-tsm-hotel" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Solusi Water Treatment TSM untuk Hotel &amp; Resort</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM menyediakan paket end-to-end yang disesuaikan dengan jenis properti:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/produk/desalinasi">SWRO Desalinasi</Link>:</strong> Kapasitas 5–500 m³/hari untuk resort kepulauan dan resort pantai</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/produk/ro-komersial">RO Komersial</Link>:</strong> Untuk hotel kota dengan sumber PDAM atau air tanah</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Drinking Water Plant:</strong> Sistem botol galon mandiri untuk in-room drinking water tanpa biaya pembelian galon</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Water Softener:</strong> Untuk laundry, boiler, dan cooling tower</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/produk/uv">UV Sterilization</Link>:</strong> Disinfeksi tanpa rasa dan bau klorin</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sistem STP/IPAL:</strong> Pengolahan air limbah dengan opsi reuse untuk irigasi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Maintenance Contract:</strong> SLA respon cepat — kritikal untuk operasi hotel 24/7</li>
          </ul>

          <h2 id="spesifikasi-hotel" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Spesifikasi Teknis Sistem SWRO Resort</h2>
          <table className="w-full border-collapse my-[1.5rem] text-[0.9rem]">
            <tbody><tr><th>Parameter</th><th>Nilai Tipikal</th></tr>
            <tr><td>Kapasitas produksi</td><td>5 – 500 m³/hari (custom resort)</td></tr>
            <tr><td>Kualitas air baku</td><td>Air laut Indonesia, TDS 32.000–38.000 ppm</td></tr>
            <tr><td>Kualitas output (permeate)</td><td>TDS &lt;300 ppm, memenuhi Permenkes 492/2010</td></tr>
            <tr><td>Recovery rate</td><td>35 – 45% (SWRO)</td></tr>
            <tr><td>Tekanan operasi</td><td>55 – 70 bar</td></tr>
            <tr><td>Konsumsi energi</td><td>3,5 – 4,5 kWh/m³ (dengan ERD)</td></tr>
            <tr><td>Material kontak air</td><td>Duplex/Super Duplex SS, FRP pressure vessel</td></tr>
            <tr><td>Pre-treatment</td><td>MMF, cartridge, antiscalant — opsional UF</td></tr>
            <tr><td>Post-treatment</td><td>Remineralisasi kalsium, UV, opsional ozon</td></tr>
          </tbody></table>

          <h2 id="faq-hotel" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa kebutuhan air untuk hotel bintang 5?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Hotel berbintang 4–5 membutuhkan rata-rata <strong>400–650 liter per kamar per hari</strong>, mencakup keperluan tamu, F&amp;B, laundry, kolam renang, dan landscaping. Untuk hotel 200 kamar dengan tingkat hunian 70%, kebutuhan harian sekitar 80–130 m³. Resort dengan fasilitas spa dan kolam renang ekstensif bisa lebih tinggi lagi (hingga 1.200 liter/kamar/hari). Gunakan <Link to="/kalkulator">kalkulator kebutuhan air TSM</Link> untuk estimasi awal yang lebih akurat.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa biaya sistem SWRO desalinasi untuk resort?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem SWRO untuk resort umumnya berkisar <strong>Rp 1,2–4,5 miliar</strong> tergantung kapasitas (10–100 m³/hari), opsi Energy Recovery Device, dan kompleksitas instalasi. Investasi awal memang besar, namun untuk resort di pulau yang sebelumnya bergantung pada tangki air, payback period biasanya 3–5 tahun karena penghematan biaya operasional yang sangat besar.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah TSM bisa instalasi di pulau terpencil?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ya. TSM berpengalaman instalasi SWRO di Pulau Ayer, kawasan resort Bali, dan beberapa lokasi pulau di Indonesia Timur. Kami menangani logistik kompleks termasuk pengiriman peralatan dengan kapal, instalasi tanpa akses crane besar, dan training operator lokal. Lihat juga artikel <Link to="/artikel/desalinasi-pulau-terpencil">Desalinasi Air Laut untuk Pulau Terpencil</Link>.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa lama proses commissioning SWRO?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk SWRO kapasitas resort tipikal (20–50 m³/hari), commissioning dan stabilisasi membutuhkan <strong>2–4 minggu</strong> setelah instalasi mekanis selesai, termasuk membrane flushing, kalibrasi instrumen, performance test, dan training operator lokal. Kami juga menyediakan handover dokumentasi lengkap dan SOP operasional dalam Bahasa Indonesia.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah air SWRO aman untuk kolam renang dan spa?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Air dari SWRO sangat ideal untuk kolam renang karena TDS rendah secara dramatis mengurangi konsumsi bahan kimia (klorin, pH adjuster), scaling pada heater, dan frekuensi backwash filter pasir. Untuk drinking water tamu, kami menambahkan post-treatment remineralisasi sehingga air memiliki rasa yang baik dan profil mineral yang sehat sesuai Permenkes 492/2010.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa keunggulan TSM dibanding kontraktor SWRO lain?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kami fokus di tiga hal yang sangat penting untuk industri perhotelan: (1) <strong>service after-sales</strong> — hotel beroperasi 24/7 dan downtime air tidak bisa ditoleransi, kami menyediakan SLA respon cepat; (2) <strong>pengalaman pulau terpencil</strong> — kami sudah menangani logistik dan kondisi instalasi yang sulit; (3) <strong>desain yang ramah operator</strong> — sistem dirancang agar bisa dioperasikan oleh staff teknik lokal hotel tanpa perlu engineer khusus.</p>

          <div style={{"marginTop":"2rem","padding":"2rem","background":"var(--ice)","borderRadius":"12px","borderLeft":"4px solid var(--accent)"}}>
            <h3 style={{"marginBottom":".75rem","color":"var(--navy)"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Konsultasi Sistem Air Hotel atau Resort Anda</h3>
            <p style={{"marginBottom":"1.25rem","color":"var(--muted)","fontSize":".92rem"}} className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Setiap properti unik — kebutuhan hotel kota berbeda dengan resort pulau. Mulai dengan konsultasi gratis untuk memahami kondisi sumber air, profil konsumsi, dan opsi terbaik untuk properti Anda.</p>
            <Link style={{"display":"inline-block","padding":".85rem 2rem","background":"var(--blue)","color":"#fff","borderRadius":"8px","fontWeight":"700","fontSize":".96rem"}} to="/kontak">🏨 Hubungi Tim Hospitality TSM →</Link>
          </div>

        </div>
      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#kebutuhan-hotel">Kebutuhan Air Hotel</Link></li>
            <li><Link href="#swro-resort-pulau">SWRO Resort Kepulauan</Link></li>
            <li><Link href="#solusi-tsm-hotel">Solusi TSM</Link></li>
            <li><Link href="#spesifikasi-hotel">Spesifikasi Teknis</Link></li>
            <li><Link href="#faq-hotel">FAQ</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Studi Kasus Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/portofolio/pulau-ayer">→ SWRO Pulau Ayer</Link></li>
            <li><Link to="/portofolio/wine-bali">→ Wine Resort Bali</Link></li>
            <li><Link to="/portofolio/pelindo">→ Pelindo Pelabuhan</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Produk Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/produk/desalinasi">→ Sistem SWRO</Link></li>
            <li><Link to="/produk/ro-komersial">→ RO Komersial</Link></li>
            <li><Link to="/produk/uv">→ UV Sterilizer</Link></li>
            <li><Link to="/kalkulator">→ Kalkulator Kebutuhan Air</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Artikel Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/artikel/desalinasi-pulau-terpencil">→ Desalinasi Pulau Terpencil</Link></li>
            <li><Link to="/artikel/kapasitas-swro-resort">→ Kapasitas SWRO Resort</Link></li>
            <li><Link to="/artikel/ro-hotel-resort">→ RO Hotel &amp; Resort</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>

    </>
  );
};

export default IndustriHotel;
