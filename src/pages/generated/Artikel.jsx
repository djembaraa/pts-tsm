import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Waves } from 'lucide-react';


const Artikel = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › Artikel</div>
    <h1>Artikel &amp; Edukasi</h1>
    <p>Wawasan terkini seputar teknologi reverse osmosis, desalinasi, tips perawatan, dan perkembangan industri water treatment Indonesia.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="layout-2col">

      {/*  MAIN  */}
      <div>
        <div className="filter-bar " id="filter-bar">
          <button className="fb-btn active" data-cat="semua" >Semua</button>
          <button className="fb-btn" data-cat="teknologi" id="teknologi" >📚 Teknologi</button>
          <button className="fb-btn" data-cat="desalinasi" id="desalinasi" ><Waves className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Desalinasi</button>
          <button className="fb-btn" data-cat="perawatan" id="perawatan" >🔧 Perawatan</button>
          <button className="fb-btn" data-cat="industri" id="industri" ><Factory className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Industri</button>
          <button className="fb-btn" data-cat="studi-kasus" id="studi-kasus" >📂 Studi Kasus</button>
        </div>

        <div className="art-grid" id="artGrid">

          <div className="bg-white rounded-[10px] overflow-hidden border border-border flex flex-col transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] hover:border-accent group " data-cat="industri" data-title="cara memilih vendor water treatment kriteria checklist tender">
            <div className="h-[192px] flex items-center justify-center text-[3.2rem] relative overflow-hidden shrink-0" style={{"background":"linear-gradient(135deg,#054a6e,#1e90d6)"}}><picture>
  <source srcSet="images/foto-pemasangan-lapangan.webp" type="image/webp" />
  <img alt="Tim PT TSM di lapangan instalasi water treatment" src="images/foto-pemasangan-lapangan.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".75"}} />
</picture><span className="absolute top-[0.88rem] left-[0.88rem] bg-accent text-white text-[0.62rem] font-bold tracking-[0.1em] uppercase py-[0.26rem] px-[0.68rem] rounded-[4px] z-10">Industri</span></div>
            <div className="p-[1.25rem] flex-1 flex flex-col">
              <div className="text-[0.72rem] text-muted mb-[0.52rem]">📅 4 Mei 2026 &nbsp;·&nbsp; ⏱ 8 menit baca &nbsp;·&nbsp; 👁 Baru</div>
              <h3><Link to="/artikel/cara-pilih-vendor-water-treatment">Cara Memilih Vendor Water Treatment: 8 Kriteria Wajib &amp; Checklist Tender</Link></h3>
              <p>Panduan praktis memilih vendor water treatment yang tepat — dari pengalaman, sertifikasi, garansi membran, hingga ketersediaan suku cadang dan layanan purna jual. Lengkap dengan checklist tender.</p>
            </div>
            <div className="flex items-center justify-between p-[0.82rem_1.25rem] border-t border-border mt-auto"><span className="text-[0.72rem] text-muted font-medium">✍️ Tim TSM</span><Link className="text-[0.72rem] font-bold text-blue tracking-[0.05em] uppercase flex items-center gap-[0.28rem] transition-all duration-300 group-hover:gap-[0.52rem]" to="/artikel/cara-pilih-vendor-water-treatment">Baca →</Link></div>
          </div>

          <div className="bg-white rounded-[10px] overflow-hidden border border-border flex flex-col transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] hover:border-accent group " data-cat="industri" data-title="biaya instalasi ro industri capex opex harga sistem reverse osmosis indonesia">
            <div className="h-[192px] flex items-center justify-center text-[3.2rem] relative overflow-hidden shrink-0" style={{"background":"linear-gradient(135deg,#0a2240,#0d5fa8)"}}><picture>
  <source srcSet="images/foto-pemasangan-kontainer.webp" type="image/webp" />
  <img alt="Sistem RO industri PT TSM dalam container skid" src="images/foto-pemasangan-kontainer.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".75"}} />
</picture><span className="absolute top-[0.88rem] left-[0.88rem] bg-accent text-white text-[0.62rem] font-bold tracking-[0.1em] uppercase py-[0.26rem] px-[0.68rem] rounded-[4px] z-10">Industri</span></div>
            <div className="p-[1.25rem] flex-1 flex flex-col">
              <div className="text-[0.72rem] text-muted mb-[0.52rem]">📅 4 Mei 2026 &nbsp;·&nbsp; ⏱ 10 menit baca &nbsp;·&nbsp; 👁 Baru</div>
              <h3><Link to="/artikel/biaya-instalasi-ro-industri">Biaya Instalasi RO Industri 2026: Breakdown Lengkap CAPEX &amp; OPEX</Link></h3>
              <p>Estimasi realistis biaya investasi sistem RO industri kapasitas 1–500 m³/hari — termasuk membran, pompa tekanan tinggi, instrumentasi, instalasi, dan biaya operasional bulanan.</p>
            </div>
            <div className="flex items-center justify-between p-[0.82rem_1.25rem] border-t border-border mt-auto"><span className="text-[0.72rem] text-muted font-medium">✍️ Tim TSM</span><Link className="text-[0.72rem] font-bold text-blue tracking-[0.05em] uppercase flex items-center gap-[0.28rem] transition-all duration-300 group-hover:gap-[0.52rem]" to="/artikel/biaya-instalasi-ro-industri">Baca →</Link></div>
          </div>

          <div className="bg-white rounded-[10px] overflow-hidden border border-border flex flex-col transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] hover:border-accent group " data-cat="perawatan" data-title="jadwal perawatan ro preventive maintenance harian mingguan bulanan tahunan">
            <div className="h-[192px] flex items-center justify-center text-[3.2rem] relative overflow-hidden shrink-0" style={{"background":"linear-gradient(135deg,#054a6e,#0a8e63)"}}><picture>
  <source srcSet="images/foto-bengkel.webp" type="image/webp" />
  <img alt="Bengkel perawatan dan service RO PT TSM" src="images/foto-bengkel.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".75"}} />
</picture><span className="absolute top-[0.88rem] left-[0.88rem] bg-accent text-white text-[0.62rem] font-bold tracking-[0.1em] uppercase py-[0.26rem] px-[0.68rem] rounded-[4px] z-10">Perawatan</span></div>
            <div className="p-[1.25rem] flex-1 flex flex-col">
              <div className="text-[0.72rem] text-muted mb-[0.52rem]">📅 4 Mei 2026 &nbsp;·&nbsp; ⏱ 9 menit baca &nbsp;·&nbsp; 👁 Baru</div>
              <h3><Link to="/artikel/jadwal-perawatan-ro">Jadwal Perawatan Sistem RO: Panduan Preventive Maintenance Lengkap</Link></h3>
              <p>Checklist perawatan RO harian, mingguan, bulanan, tahunan, dan multi-tahun — termasuk CIP, penggantian membran, kalibrasi instrumen, dan dokumentasi log book sesuai standar industri.</p>
            </div>
            <div className="flex items-center justify-between p-[0.82rem_1.25rem] border-t border-border mt-auto"><span className="text-[0.72rem] text-muted font-medium">✍️ Tim Teknis TSM</span><Link className="text-[0.72rem] font-bold text-blue tracking-[0.05em] uppercase flex items-center gap-[0.28rem] transition-all duration-300 group-hover:gap-[0.52rem]" to="/artikel/jadwal-perawatan-ro">Baca →</Link></div>
          </div>

          <div className="bg-white rounded-[10px] overflow-hidden border border-border flex flex-col transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] hover:border-accent group " data-cat="teknologi" data-title="mengenal teknologi reverse osmosis prinsip kerja keunggulan">
            <div className="h-[192px] flex items-center justify-center text-[3.2rem] relative overflow-hidden shrink-0" style={{"background":"linear-gradient(135deg,#054a6e,#1e90d6)"}}><picture>
  <source srcSet="images/foto-mesin-swro.webp" type="image/webp" />
  <img alt="Mesin SWRO PT Tirta Sumber Makmur" src="images/foto-mesin-swro.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".75"}} />
</picture><span className="absolute top-[0.88rem] left-[0.88rem] bg-accent text-white text-[0.62rem] font-bold tracking-[0.1em] uppercase py-[0.26rem] px-[0.68rem] rounded-[4px] z-10">Teknologi</span></div>
            <div className="p-[1.25rem] flex-1 flex flex-col">
              <div className="text-[0.72rem] text-muted mb-[0.52rem]">📅 28 Maret 2025 &nbsp;·&nbsp; ⏱ 5 menit baca &nbsp;·&nbsp; 👁 1.2k</div>
              <h3><Link to="/artikel/ro-prinsip-kerja">Mengenal Teknologi Reverse Osmosis: Prinsip Kerja dan Keunggulannya</Link></h3>
              <p>Panduan lengkap memahami cara kerja sistem RO, komponen utamanya, dan mengapa teknologi ini menjadi standar emas pengolahan air industri global.</p>
            </div>
            <div className="flex items-center justify-between p-[0.82rem_1.25rem] border-t border-border mt-auto"><span className="text-[0.72rem] text-muted font-medium">✍️ Tim TSM</span><Link className="text-[0.72rem] font-bold text-blue tracking-[0.05em] uppercase flex items-center gap-[0.28rem] transition-all duration-300 group-hover:gap-[0.52rem]" to="/artikel/ro-prinsip-kerja">Baca →</Link></div>
          </div>

          <div className="bg-white rounded-[10px] overflow-hidden border border-border flex flex-col transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] hover:border-accent group " data-cat="desalinasi" data-title="desalinasi air laut solusi krisis air bersih pulau terpencil swro">
            <div className="h-[192px] flex items-center justify-center text-[3.2rem] relative overflow-hidden shrink-0" style={{"background":"linear-gradient(135deg,#0a2240,#0d5fa8)"}}><picture>
  <source srcSet="images/porto-pamjaya-1.webp" type="image/webp" />
  <img alt="Proyek PAM JAYA Pulau Lancang TSM" src="images/porto-pamjaya-1.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".75"}} loading="lazy" decoding="async" />
</picture><span className="absolute top-[0.88rem] left-[0.88rem] bg-accent text-white text-[0.62rem] font-bold tracking-[0.1em] uppercase py-[0.26rem] px-[0.68rem] rounded-[4px] z-10">Desalinasi</span></div>
            <div className="p-[1.25rem] flex-1 flex flex-col">
              <div className="text-[0.72rem] text-muted mb-[0.52rem]">📅 15 Maret 2025 &nbsp;·&nbsp; ⏱ 6 menit baca &nbsp;·&nbsp; 👁 890</div>
              <h3><Link to="/artikel/desalinasi-solusi-pulau">Desalinasi Air Laut: Solusi Krisis Air Bersih di Pulau-Pulau Terpencil</Link></h3>
              <p>Indonesia memiliki 17.000+ pulau namun jutaan warganya kekurangan air tawar. Sistem SWRO hadir sebagai jawaban yang kini semakin terjangkau.</p>
            </div>
            <div className="flex items-center justify-between p-[0.82rem_1.25rem] border-t border-border mt-auto"><span className="text-[0.72rem] text-muted font-medium">✍️ Tim TSM</span><Link className="text-[0.72rem] font-bold text-blue tracking-[0.05em] uppercase flex items-center gap-[0.28rem] transition-all duration-300 group-hover:gap-[0.52rem]" to="/artikel/desalinasi-solusi-pulau">Baca →</Link></div>
          </div>

          <div className="bg-white rounded-[10px] overflow-hidden border border-border flex flex-col transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] hover:border-accent group " data-cat="perawatan" data-title="kesalahan perawatan membran ro fouling scaling cip">
            <div className="h-[192px] flex items-center justify-center text-[3.2rem] relative overflow-hidden shrink-0" style={{"background":"linear-gradient(135deg,#1a3a5c,#1e90d6)"}}><picture>
  <source srcSet="images/porto-sosro-5.webp" type="image/webp" />
  <img alt="Proyek instalasi RO PT Sosro TSM" src="images/porto-sosro-5.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".75"}} loading="lazy" decoding="async" />
</picture><span className="absolute top-[0.88rem] left-[0.88rem] bg-accent text-white text-[0.62rem] font-bold tracking-[0.1em] uppercase py-[0.26rem] px-[0.68rem] rounded-[4px] z-10">Perawatan</span></div>
            <div className="p-[1.25rem] flex-1 flex flex-col">
              <div className="text-[0.72rem] text-muted mb-[0.52rem]">📅 5 Maret 2025 &nbsp;·&nbsp; ⏱ 4 menit baca &nbsp;·&nbsp; 👁 650</div>
              <h3><Link to="/artikel/5-kesalahan-perawatan-ro">5 Kesalahan Umum Perawatan Membran RO yang Perlu Dihindari</Link></h3>
              <p>Membran RO adalah komponen paling kritis sekaligus mahal dalam sistem. Kenali kesalahan umum dan cara mencegahnya untuk memaksimalkan usia pakai.</p>
            </div>
            <div className="flex items-center justify-between p-[0.82rem_1.25rem] border-t border-border mt-auto"><span className="text-[0.72rem] text-muted font-medium">✍️ Tim Teknis TSM</span><Link className="text-[0.72rem] font-bold text-blue tracking-[0.05em] uppercase flex items-center gap-[0.28rem] transition-all duration-300 group-hover:gap-[0.52rem]" to="/artikel/5-kesalahan-perawatan-ro">Baca →</Link></div>
          </div>

          <div className="bg-white rounded-[10px] overflow-hidden border border-border flex flex-col transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] hover:border-accent group " data-cat="industri" data-title="standar kualitas air farmasi ro edi purified water bpom">
            <div className="h-[192px] flex items-center justify-center text-[3.2rem] relative overflow-hidden shrink-0" style={{"background":"linear-gradient(135deg,#0d3a6b,#0d5fa8)"}}><picture>
  <source srcSet="images/porto-sbawi-2.webp" type="image/webp" />
  <img alt="Proyek sistem RO SBAWI TSM" src="images/porto-sbawi-2.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".75"}} loading="lazy" decoding="async" />
</picture><span className="absolute top-[0.88rem] left-[0.88rem] bg-accent text-white text-[0.62rem] font-bold tracking-[0.1em] uppercase py-[0.26rem] px-[0.68rem] rounded-[4px] z-10">Industri</span></div>
            <div className="p-[1.25rem] flex-1 flex flex-col">
              <div className="text-[0.72rem] text-muted mb-[0.52rem]">📅 20 Feb 2025 &nbsp;·&nbsp; ⏱ 7 menit baca &nbsp;·&nbsp; 👁 740</div>
              <h3><Link to="/artikel/air-farmasi-ro-edi">Standar Kualitas Air untuk Industri Farmasi: Mengapa RO + EDI Wajib?</Link></h3>
              <p>Regulasi BPOM dan standar farmakope internasional menetapkan persyaratan ketat kualitas air untuk produksi obat. RO + EDI menjadi solusi wajib.</p>
            </div>
            <div className="flex items-center justify-between p-[0.82rem_1.25rem] border-t border-border mt-auto"><span className="text-[0.72rem] text-muted font-medium">✍️ Tim TSM</span><Link className="text-[0.72rem] font-bold text-blue tracking-[0.05em] uppercase flex items-center gap-[0.28rem] transition-all duration-300 group-hover:gap-[0.52rem]" to="/artikel/air-farmasi-ro-edi">Baca →</Link></div>
          </div>

          <div className="bg-white rounded-[10px] overflow-hidden border border-border flex flex-col transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] hover:border-accent group " data-cat="teknologi" data-title="zero liquid discharge zld daur ulang air limbah industri">
            <div className="h-[192px] flex items-center justify-center text-[3.2rem] relative overflow-hidden shrink-0" style={{"background":"linear-gradient(135deg,#054a6e,#00b4d8)"}}><picture>
  <source srcSet="images/porto-kontainer-1.webp" type="image/webp" />
  <img alt="Proyek SWRO kontainer PT TSM" src="images/porto-kontainer-1.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".75"}} loading="lazy" decoding="async" />
</picture><span className="absolute top-[0.88rem] left-[0.88rem] bg-accent text-white text-[0.62rem] font-bold tracking-[0.1em] uppercase py-[0.26rem] px-[0.68rem] rounded-[4px] z-10">Lingkungan</span></div>
            <div className="p-[1.25rem] flex-1 flex flex-col">
              <div className="text-[0.72rem] text-muted mb-[0.52rem]">📅 10 Feb 2025 &nbsp;·&nbsp; ⏱ 5 menit baca &nbsp;·&nbsp; 👁 510</div>
              <h3><Link to="/artikel/zld-zero-liquid">Zero Liquid Discharge (ZLD): Masa Depan Pengelolaan Air Limbah Industri</Link></h3>
              <p>Konsep ZLD mengharuskan industri mendaur ulang seluruh air limbahnya. TSM menghadirkan solusi terintegrasi untuk membantu industri mencapai target ZLD.</p>
            </div>
            <div className="flex items-center justify-between p-[0.82rem_1.25rem] border-t border-border mt-auto"><span className="text-[0.72rem] text-muted font-medium">✍️ Tim TSM</span><Link className="text-[0.72rem] font-bold text-blue tracking-[0.05em] uppercase flex items-center gap-[0.28rem] transition-all duration-300 group-hover:gap-[0.52rem]" to="/artikel/zld-zero-liquid">Baca →</Link></div>
          </div>

          <div className="bg-white rounded-[10px] overflow-hidden border border-border flex flex-col transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] hover:border-accent group " data-cat="studi-kasus" data-title="studi kasus ro 200 m3 pabrik tekstil karawang hemat air">
            <div className="h-[192px] flex items-center justify-center text-[3.2rem] relative overflow-hidden shrink-0" style={{"background":"linear-gradient(135deg,#1a2d42,#0a5c8a)"}}><picture>
  <source srcSet="images/foto-bengkel.webp" type="image/webp" />
  <img alt="Bengkel dan workshop PT Tirta Sumber Makmur" src="images/foto-bengkel.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".75"}} loading="lazy" decoding="async" />
</picture><span className="absolute top-[0.88rem] left-[0.88rem] bg-accent text-white text-[0.62rem] font-bold tracking-[0.1em] uppercase py-[0.26rem] px-[0.68rem] rounded-[4px] z-10">Studi Kasus</span></div>
            <div className="p-[1.25rem] flex-1 flex flex-col">
              <div className="text-[0.72rem] text-muted mb-[0.52rem]">📅 25 Jan 2025 &nbsp;·&nbsp; ⏱ 8 menit baca &nbsp;·&nbsp; 👁 830</div>
              <h3><Link to="/artikel/studi-kasus-ro-tekstil">Studi Kasus: Sistem RO 200 m³/hari di Pabrik Tekstil Karawang</Link></h3>
              <p>Bagaimana TSM membantu sebuah pabrik tekstil besar mengurangi konsumsi air PDAM hingga 70% dan menghemat biaya operasional secara signifikan.</p>
            </div>
            <div className="flex items-center justify-between p-[0.82rem_1.25rem] border-t border-border mt-auto"><span className="text-[0.72rem] text-muted font-medium">✍️ Tim Proyek TSM</span><Link className="text-[0.72rem] font-bold text-blue tracking-[0.05em] uppercase flex items-center gap-[0.28rem] transition-all duration-300 group-hover:gap-[0.52rem]" to="/artikel/studi-kasus-ro-tekstil">Baca →</Link></div>
          </div>

          <div className="bg-white rounded-[10px] overflow-hidden border border-border flex flex-col transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] hover:border-accent group " data-cat="perawatan" data-title="monitoring kualitas air output ro tds meter mandiri">
            <div className="h-[192px] flex items-center justify-center text-[3.2rem] relative overflow-hidden shrink-0" style={{"background":"linear-gradient(135deg,#0a4060,#1e90d6)"}}><picture>
  <source srcSet="images/produk-ro-9m3-a.webp" type="image/webp" />
  <img alt="Sistem RO industri 9 m3 per jam TSM" src="images/produk-ro-9m3-a.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".75"}} loading="lazy" decoding="async" />
</picture><span className="absolute top-[0.88rem] left-[0.88rem] bg-accent text-white text-[0.62rem] font-bold tracking-[0.1em] uppercase py-[0.26rem] px-[0.68rem] rounded-[4px] z-10">Tips</span></div>
            <div className="p-[1.25rem] flex-1 flex flex-col">
              <div className="text-[0.72rem] text-muted mb-[0.52rem]">📅 12 Jan 2025 &nbsp;·&nbsp; ⏱ 4 menit baca &nbsp;·&nbsp; 👁 420</div>
              <h3><Link to="/artikel/monitoring-kualitas-air-ro">Cara Monitoring Kualitas Air Output Sistem RO Secara Mandiri</Link></h3>
              <p>Anda tidak perlu selalu memanggil teknisi untuk memeriksa kualitas output air RO. Berikut cara melakukannya sendiri dengan alat sederhana.</p>
            </div>
            <div className="flex items-center justify-between p-[0.82rem_1.25rem] border-t border-border mt-auto"><span className="text-[0.72rem] text-muted font-medium">✍️ Tim Teknis TSM</span><Link className="text-[0.72rem] font-bold text-blue tracking-[0.05em] uppercase flex items-center gap-[0.28rem] transition-all duration-300 group-hover:gap-[0.52rem]" to="/artikel/monitoring-kualitas-air-ro">Baca →</Link></div>
          </div>

          <div className="bg-white rounded-[10px] overflow-hidden border border-border flex flex-col transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] hover:border-accent group " data-cat="desalinasi" data-title="sistem ro kapal offshore platform maritim air tawar laut">
            <div className="h-[192px] flex items-center justify-center text-[3.2rem] relative overflow-hidden shrink-0" style={{"background":"linear-gradient(135deg,#093060,#0d5fa8)"}}><picture>
  <source srcSet="images/porto-kapal-prima-1.webp" type="image/webp" />
  <img alt="Proyek RO kapal PT Prima TSM" src="images/porto-kapal-prima-1.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".75"}} loading="lazy" decoding="async" />
</picture><span className="absolute top-[0.88rem] left-[0.88rem] bg-accent text-white text-[0.62rem] font-bold tracking-[0.1em] uppercase py-[0.26rem] px-[0.68rem] rounded-[4px] z-10">Maritim</span></div>
            <div className="p-[1.25rem] flex-1 flex flex-col">
              <div className="text-[0.72rem] text-muted mb-[0.52rem]">📅 3 Jan 2025 &nbsp;·&nbsp; ⏱ 5 menit baca &nbsp;·&nbsp; 👁 380</div>
              <h3><Link to="/artikel/ro-kapal-offshore">Sistem RO untuk Kapal dan Platform Offshore: Solusi Air Tawar di Laut</Link></h3>
              <p>Industri maritim dan offshore membutuhkan pasokan air tawar yang andal di tengah laut. Sistem RO compact menjadi solusi terbaik untuk lingkungan yang menantang ini.</p>
            </div>
            <div className="flex items-center justify-between p-[0.82rem_1.25rem] border-t border-border mt-auto"><span className="text-[0.72rem] text-muted font-medium">✍️ Tim TSM</span><Link className="text-[0.72rem] font-bold text-blue tracking-[0.05em] uppercase flex items-center gap-[0.28rem] transition-all duration-300 group-hover:gap-[0.52rem]" to="/artikel/ro-kapal-offshore">Baca →</Link></div>
          </div>

          <div className="bg-white rounded-[10px] overflow-hidden border border-border flex flex-col transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] hover:border-accent group " data-cat="industri" data-title="hotel bintang lima ro sistem air kualitas tamu laundry">
            <div className="h-[192px] flex items-center justify-center text-[3.2rem] relative overflow-hidden shrink-0" style={{"background":"linear-gradient(135deg,#1a3050,#0d5fa8)"}}><picture>
  <source srcSet="images/porto-pulau-ayer-7.webp" type="image/webp" />
  <img alt="Proyek RO Pulau Ayer TSM" src="images/porto-pulau-ayer-7.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".75"}} loading="lazy" decoding="async" />
</picture><span className="absolute top-[0.88rem] left-[0.88rem] bg-accent text-white text-[0.62rem] font-bold tracking-[0.1em] uppercase py-[0.26rem] px-[0.68rem] rounded-[4px] z-10">Hotel</span></div>
            <div className="p-[1.25rem] flex-1 flex flex-col">
              <div className="text-[0.72rem] text-muted mb-[0.52rem]">📅 20 Des 2024 &nbsp;·&nbsp; ⏱ 4 menit baca &nbsp;·&nbsp; 👁 295</div>
              <h3><Link to="/artikel/ro-hotel-resort">Mengapa Hotel Berbintang Wajib Menggunakan Sistem RO?</Link></h3>
              <p>Standar kualitas air di hotel berbintang sangat tinggi, mulai dari air minum, laundry, hingga kolam renang. Sistem RO adalah jawabannya.</p>
            </div>
            <div className="flex items-center justify-between p-[0.82rem_1.25rem] border-t border-border mt-auto"><span className="text-[0.72rem] text-muted font-medium">✍️ Tim TSM</span><Link className="text-[0.72rem] font-bold text-blue tracking-[0.05em] uppercase flex items-center gap-[0.28rem] transition-all duration-300 group-hover:gap-[0.52rem]" to="/artikel/ro-hotel-resort">Baca →</Link></div>
          </div>

          {/*  ═══ ARTIKEL BARU BATCH 6 (10 artikel) ═══  */}

          <div className="bg-white rounded-[10px] overflow-hidden border border-border flex flex-col transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] hover:border-accent group " data-cat="teknologi" data-title="perbedaan swro bwro twro reverse osmosis air laut payau ledeng">
            <div className="h-[192px] flex items-center justify-center text-[3.2rem] relative overflow-hidden shrink-0" style={{"background":"linear-gradient(135deg,#054a6e,#1e90d6)"}}><picture>
  <source srcSet="images/foto-mesin-swro.webp" type="image/webp" />
  <img alt="Perbedaan SWRO BWRO TWRO" src="images/foto-mesin-swro.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".75"}} loading="lazy" decoding="async" />
</picture><span className="absolute top-[0.88rem] left-[0.88rem] bg-accent text-white text-[0.62rem] font-bold tracking-[0.1em] uppercase py-[0.26rem] px-[0.68rem] rounded-[4px] z-10">Teknologi</span></div>
            <div className="p-[1.25rem] flex-1 flex flex-col">
              <div className="text-[0.72rem] text-muted mb-[0.52rem]">📅 2 Mei 2026 &nbsp;·&nbsp; ⏱ 8 menit baca</div>
              <h3><Link to="/artikel/perbedaan-swro-bwro-twro">Perbedaan SWRO, BWRO, dan TWRO: Mana yang Tepat untuk Anda?</Link></h3>
              <p>Panduan lengkap perbedaan teknis SWRO, BWRO, dan TWRO — spesifikasi, tekanan, recovery, biaya, dan cara memilih yang tepat untuk kebutuhan Anda.</p>
            </div>
            <div className="flex items-center justify-between p-[0.82rem_1.25rem] border-t border-border mt-auto"><span className="text-[0.72rem] text-muted font-medium">✍️ Tim TSM</span><Link className="text-[0.72rem] font-bold text-blue tracking-[0.05em] uppercase flex items-center gap-[0.28rem] transition-all duration-300 group-hover:gap-[0.52rem]" to="/artikel/perbedaan-swro-bwro-twro">Baca →</Link></div>
          </div>

          <div className="bg-white rounded-[10px] overflow-hidden border border-border flex flex-col transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] hover:border-accent group " data-cat="industri" data-title="standar air farmasi bpom cpob ro edi purified water wfi">
            <div className="h-[192px] flex items-center justify-center text-[3.2rem] relative overflow-hidden shrink-0" style={{"background":"linear-gradient(135deg,#0d3a6b,#0d5fa8)"}}><picture>
  <source srcSet="images/foto-mesin-swro.webp" type="image/webp" />
  <img alt="Standar Air Farmasi BPOM CPOB" src="images/foto-mesin-swro.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".75"}} loading="lazy" decoding="async" />
</picture><span className="absolute top-[0.88rem] left-[0.88rem] bg-accent text-white text-[0.62rem] font-bold tracking-[0.1em] uppercase py-[0.26rem] px-[0.68rem] rounded-[4px] z-10">Farmasi</span></div>
            <div className="p-[1.25rem] flex-1 flex flex-col">
              <div className="text-[0.72rem] text-muted mb-[0.52rem]">📅 2 Mei 2026 &nbsp;·&nbsp; ⏱ 10 menit baca</div>
              <h3><Link to="/artikel/standar-air-farmasi-bpom">Standar Air Farmasi BPOM CPOB: RO+EDI untuk PW &amp; WFI</Link></h3>
              <p>Pedoman CPOB BPOM 2018, kategori air farmasi, mengapa RO+EDI menjadi standar emas, persyaratan loop distribusi sanitary, dan validasi 3 fase.</p>
            </div>
            <div className="flex items-center justify-between p-[0.82rem_1.25rem] border-t border-border mt-auto"><span className="text-[0.72rem] text-muted font-medium">✍️ Tim TSM</span><Link className="text-[0.72rem] font-bold text-blue tracking-[0.05em] uppercase flex items-center gap-[0.28rem] transition-all duration-300 group-hover:gap-[0.52rem]" to="/artikel/standar-air-farmasi-bpom">Baca →</Link></div>
          </div>

          <div className="bg-white rounded-[10px] overflow-hidden border border-border flex flex-col transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] hover:border-accent group " data-cat="teknologi" data-title="perbandingan membran ro dow filmtec toray hydranautics">
            <div className="h-[192px] flex items-center justify-center text-[3.2rem] relative overflow-hidden shrink-0" style={{"background":"linear-gradient(135deg,#1a3a5c,#1e90d6)"}}><picture>
  <source srcSet="images/produk-ro-industri-2.webp" type="image/webp" />
  <img alt="Perbandingan Membran Dow vs Toray" src="images/produk-ro-industri-2.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".75"}} loading="lazy" decoding="async" />
</picture><span className="absolute top-[0.88rem] left-[0.88rem] bg-accent text-white text-[0.62rem] font-bold tracking-[0.1em] uppercase py-[0.26rem] px-[0.68rem] rounded-[4px] z-10">Membran</span></div>
            <div className="p-[1.25rem] flex-1 flex flex-col">
              <div className="text-[0.72rem] text-muted mb-[0.52rem]">📅 2 Mei 2026 &nbsp;·&nbsp; ⏱ 9 menit baca</div>
              <h3><Link to="/artikel/perbandingan-membran-dow-toray">Perbandingan Membran RO Dow Filmtec vs Toray untuk Indonesia</Link></h3>
              <p>Karakteristik teknis, ketahanan klorin, harga, ketersediaan, dan rekomendasi pemilihan membran untuk SWRO, BWRO, dan TWRO sesuai air baku Indonesia.</p>
            </div>
            <div className="flex items-center justify-between p-[0.82rem_1.25rem] border-t border-border mt-auto"><span className="text-[0.72rem] text-muted font-medium">✍️ Tim TSM</span><Link className="text-[0.72rem] font-bold text-blue tracking-[0.05em] uppercase flex items-center gap-[0.28rem] transition-all duration-300 group-hover:gap-[0.52rem]" to="/artikel/perbandingan-membran-dow-toray">Baca →</Link></div>
          </div>

          <div className="bg-white rounded-[10px] overflow-hidden border border-border flex flex-col transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] hover:border-accent group " data-cat="industri" data-title="kapasitas swro resort kepulauan pulau hotel sizing kebutuhan">
            <div className="h-[192px] flex items-center justify-center text-[3.2rem] relative overflow-hidden shrink-0" style={{"background":"linear-gradient(135deg,#1a3050,#0d5fa8)"}}><picture>
  <source srcSet="images/porto-pulau-ayer-1.webp" type="image/webp" />
  <img alt="Kapasitas SWRO Resort Kepulauan" src="images/porto-pulau-ayer-1.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".75"}} loading="lazy" decoding="async" />
</picture><span className="absolute top-[0.88rem] left-[0.88rem] bg-accent text-white text-[0.62rem] font-bold tracking-[0.1em] uppercase py-[0.26rem] px-[0.68rem] rounded-[4px] z-10">Hospitality</span></div>
            <div className="p-[1.25rem] flex-1 flex flex-col">
              <div className="text-[0.72rem] text-muted mb-[0.52rem]">📅 2 Mei 2026 &nbsp;·&nbsp; ⏱ 8 menit baca</div>
              <h3><Link to="/artikel/kapasitas-swro-resort">Kapasitas SWRO untuk Resort Kepulauan: Cara Menghitungnya</Link></h3>
              <p>Panduan menghitung kapasitas SWRO yang tepat untuk resort 100+ kamar — konsumsi per tamu, peak demand, buffer storage, dan strategi redundancy.</p>
            </div>
            <div className="flex items-center justify-between p-[0.82rem_1.25rem] border-t border-border mt-auto"><span className="text-[0.72rem] text-muted font-medium">✍️ Tim TSM</span><Link className="text-[0.72rem] font-bold text-blue tracking-[0.05em] uppercase flex items-center gap-[0.28rem] transition-all duration-300 group-hover:gap-[0.52rem]" to="/artikel/kapasitas-swro-resort">Baca →</Link></div>
          </div>

          <div className="bg-white rounded-[10px] overflow-hidden border border-border flex flex-col transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] hover:border-accent group " data-cat="industri" data-title="water treatment pltu pembangkit listrik boiler feed cooling tower">
            <div className="h-[192px] flex items-center justify-center text-[3.2rem] relative overflow-hidden shrink-0" style={{"background":"linear-gradient(135deg,#0a2240,#0d5fa8)"}}><picture>
  <source srcSet="images/foto-pemasangan-lapangan.webp" type="image/webp" />
  <img alt="Water Treatment PLTU" src="images/foto-pemasangan-lapangan.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".75"}} loading="lazy" decoding="async" />
</picture><span className="absolute top-[0.88rem] left-[0.88rem] bg-accent text-white text-[0.62rem] font-bold tracking-[0.1em] uppercase py-[0.26rem] px-[0.68rem] rounded-[4px] z-10">PLTU</span></div>
            <div className="p-[1.25rem] flex-1 flex flex-col">
              <div className="text-[0.72rem] text-muted mb-[0.52rem]">📅 2 Mei 2026 &nbsp;·&nbsp; ⏱ 10 menit baca</div>
              <h3><Link to="/artikel/water-treatment-pltu">Water Treatment PLTU: Boiler Feed Water &amp; Cooling Tower</Link></h3>
              <p>Spesifikasi boiler feed water per tekanan operasi, RO+EDI vs Mixed Bed, optimasi cooling tower cycle of concentration, dan kontrol silica untuk turbin.</p>
            </div>
            <div className="flex items-center justify-between p-[0.82rem_1.25rem] border-t border-border mt-auto"><span className="text-[0.72rem] text-muted font-medium">✍️ Tim TSM</span><Link className="text-[0.72rem] font-bold text-blue tracking-[0.05em] uppercase flex items-center gap-[0.28rem] transition-all duration-300 group-hover:gap-[0.52rem]" to="/artikel/water-treatment-pltu">Baca →</Link></div>
          </div>

          <div className="bg-white rounded-[10px] overflow-hidden border border-border flex flex-col transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] hover:border-accent group " data-cat="teknologi" data-title="pompa tekanan tinggi high pressure ro grundfos danfoss cat">
            <div className="h-[192px] flex items-center justify-center text-[3.2rem] relative overflow-hidden shrink-0" style={{"background":"linear-gradient(135deg,#054a6e,#1e90d6)"}}><picture>
  <source srcSet="images/foto-bengkel.webp" type="image/webp" />
  <img alt="Pompa Tekanan Tinggi RO" src="images/foto-bengkel.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".75"}} loading="lazy" decoding="async" />
</picture><span className="absolute top-[0.88rem] left-[0.88rem] bg-accent text-white text-[0.62rem] font-bold tracking-[0.1em] uppercase py-[0.26rem] px-[0.68rem] rounded-[4px] z-10">Komponen</span></div>
            <div className="p-[1.25rem] flex-1 flex flex-col">
              <div className="text-[0.72rem] text-muted mb-[0.52rem]">📅 2 Mei 2026 &nbsp;·&nbsp; ⏱ 8 menit baca</div>
              <h3><Link to="/artikel/pompa-tekanan-tinggi-ro">Cara Memilih Pompa Tekanan Tinggi untuk Sistem RO Industri</Link></h3>
              <p>Jenis pompa (centrifugal, plunger, axial piston), sizing flow dan tekanan, integrasi dengan ERD, manfaat VFD, dan brand tier-1 yang andal.</p>
            </div>
            <div className="flex items-center justify-between p-[0.82rem_1.25rem] border-t border-border mt-auto"><span className="text-[0.72rem] text-muted font-medium">✍️ Tim TSM</span><Link className="text-[0.72rem] font-bold text-blue tracking-[0.05em] uppercase flex items-center gap-[0.28rem] transition-all duration-300 group-hover:gap-[0.52rem]" to="/artikel/pompa-tekanan-tinggi-ro">Baca →</Link></div>
          </div>

          <div className="bg-white rounded-[10px] overflow-hidden border border-border flex flex-col transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] hover:border-accent group " data-cat="studi-kasus" data-title="zld zero liquid discharge tekstil dyeing limbah klhk compliance">
            <div className="h-[192px] flex items-center justify-center text-[3.2rem] relative overflow-hidden shrink-0" style={{"background":"linear-gradient(135deg,#1a2d42,#0a5c8a)"}}><picture>
  <source srcSet="images/foto-pemasangan-lapangan.webp" type="image/webp" />
  <img alt="ZLD untuk Industri Tekstil" src="images/foto-pemasangan-lapangan.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".75"}} loading="lazy" decoding="async" />
</picture><span className="absolute top-[0.88rem] left-[0.88rem] bg-accent text-white text-[0.62rem] font-bold tracking-[0.1em] uppercase py-[0.26rem] px-[0.68rem] rounded-[4px] z-10">Tekstil</span></div>
            <div className="p-[1.25rem] flex-1 flex flex-col">
              <div className="text-[0.72rem] text-muted mb-[0.52rem]">📅 2 Mei 2026 &nbsp;·&nbsp; ⏱ 9 menit baca</div>
              <h3><Link to="/artikel/zld-tekstil">ZLD untuk Industri Tekstil: Solusi Compliance &amp; Daur Ulang Air</Link></h3>
              <p>Tahapan teknis MBR+RO+evaporator, biaya investasi dan ROI, regulasi KLHK Permen 5/2014, studi kasus Karawang, dan alternatif tier yang lebih ekonomis.</p>
            </div>
            <div className="flex items-center justify-between p-[0.82rem_1.25rem] border-t border-border mt-auto"><span className="text-[0.72rem] text-muted font-medium">✍️ Tim TSM</span><Link className="text-[0.72rem] font-bold text-blue tracking-[0.05em] uppercase flex items-center gap-[0.28rem] transition-all duration-300 group-hover:gap-[0.52rem]" to="/artikel/zld-tekstil">Baca →</Link></div>
          </div>

          <div className="bg-white rounded-[10px] overflow-hidden border border-border flex flex-col transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] hover:border-accent group " data-cat="desalinasi" data-title="ro kapal perang vessel offshore tni al bki solas marine watermaker">
            <div className="h-[192px] flex items-center justify-center text-[3.2rem] relative overflow-hidden shrink-0" style={{"background":"linear-gradient(135deg,#0a2240,#1a3a5c)"}}><picture>
  <source srcSet="images/porto-kri-amy-1.webp" type="image/webp" />
  <img alt="RO Kapal Perang TNI AL" src="images/porto-kri-amy-1.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".75"}} loading="lazy" decoding="async" />
</picture><span className="absolute top-[0.88rem] left-[0.88rem] bg-accent text-white text-[0.62rem] font-bold tracking-[0.1em] uppercase py-[0.26rem] px-[0.68rem] rounded-[4px] z-10">Maritim</span></div>
            <div className="p-[1.25rem] flex-1 flex flex-col">
              <div className="text-[0.72rem] text-muted mb-[0.52rem]">📅 2 Mei 2026 &nbsp;·&nbsp; ⏱ 9 menit baca</div>
              <h3><Link to="/artikel/ro-kapal-perang-bki">RO untuk Kapal Perang &amp; Vessel Offshore: Standar BKI</Link></h3>
              <p>Watermaker SWRO untuk kapal TNI AL dan vessel offshore — persyaratan BKI/SOLAS/IMO, material marine-grade, kondisi operasional ekstrem, studi kasus KRI.</p>
            </div>
            <div className="flex items-center justify-between p-[0.82rem_1.25rem] border-t border-border mt-auto"><span className="text-[0.72rem] text-muted font-medium">✍️ Tim TSM</span><Link className="text-[0.72rem] font-bold text-blue tracking-[0.05em] uppercase flex items-center gap-[0.28rem] transition-all duration-300 group-hover:gap-[0.52rem]" to="/artikel/ro-kapal-perang-bki">Baca →</Link></div>
          </div>

          <div className="bg-white rounded-[10px] overflow-hidden border border-border flex flex-col transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] hover:border-accent group " data-cat="industri" data-title="water treatment air gambut kalimantan sumatra peat humik fulvik toc">
            <div className="h-[192px] flex items-center justify-center text-[3.2rem] relative overflow-hidden shrink-0" style={{"background":"linear-gradient(135deg,#1a3050,#0d5fa8)"}}><picture>
  <source srcSet="images/foto-pemasangan-lapangan.webp" type="image/webp" />
  <img alt="Water Treatment Air Gambut Kalimantan" src="images/foto-pemasangan-lapangan.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".75"}} loading="lazy" decoding="async" />
</picture><span className="absolute top-[0.88rem] left-[0.88rem] bg-accent text-white text-[0.62rem] font-bold tracking-[0.1em] uppercase py-[0.26rem] px-[0.68rem] rounded-[4px] z-10">Air Gambut</span></div>
            <div className="p-[1.25rem] flex-1 flex flex-col">
              <div className="text-[0.72rem] text-muted mb-[0.52rem]">📅 2 Mei 2026 &nbsp;·&nbsp; ⏱ 8 menit baca</div>
              <h3><Link to="/artikel/water-treatment-kalimantan">Water Treatment Air Gambut Kalimantan: Tantangan &amp; Solusi</Link></h3>
              <p>Karakteristik air gambut, tantangan TOC tinggi dan THM precursor, solusi pre-oksidasi + UF + RO, konfigurasi WTP standar, dan studi kasus Kalimantan.</p>
            </div>
            <div className="flex items-center justify-between p-[0.82rem_1.25rem] border-t border-border mt-auto"><span className="text-[0.72rem] text-muted font-medium">✍️ Tim TSM</span><Link className="text-[0.72rem] font-bold text-blue tracking-[0.05em] uppercase flex items-center gap-[0.28rem] transition-all duration-300 group-hover:gap-[0.52rem]" to="/artikel/water-treatment-kalimantan">Baca →</Link></div>
          </div>

          <div className="bg-white rounded-[10px] overflow-hidden border border-border flex flex-col transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] hover:border-accent group " data-cat="desalinasi" data-title="desalinasi pulau terpencil indonesia bsps spam program pemerintah">
            <div className="h-[192px] flex items-center justify-center text-[3.2rem] relative overflow-hidden shrink-0" style={{"background":"linear-gradient(135deg,#0a2240,#0d5fa8)"}}><picture>
  <source srcSet="images/porto-pulau-ayer-1.webp" type="image/webp" />
  <img alt="Desalinasi Pulau Terpencil" src="images/porto-pulau-ayer-1.jpg" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":".75"}} loading="lazy" decoding="async" />
</picture><span className="absolute top-[0.88rem] left-[0.88rem] bg-accent text-white text-[0.62rem] font-bold tracking-[0.1em] uppercase py-[0.26rem] px-[0.68rem] rounded-[4px] z-10">Pulau</span></div>
            <div className="p-[1.25rem] flex-1 flex flex-col">
              <div className="text-[0.72rem] text-muted mb-[0.52rem]">📅 2 Mei 2026 &nbsp;·&nbsp; ⏱ 9 menit baca</div>
              <h3><Link to="/artikel/desalinasi-pulau-terpencil">Desalinasi Pulau Terpencil Indonesia: Solusi &amp; Program BSPS</Link></h3>
              <p>Tantangan logistik pulau, solusi SWRO kontainer plug-and-play, program pemerintah (SPAM, BSPS, DAK), model partnership, dan studi kasus pulau Indonesia.</p>
            </div>
            <div className="flex items-center justify-between p-[0.82rem_1.25rem] border-t border-border mt-auto"><span className="text-[0.72rem] text-muted font-medium">✍️ Tim TSM</span><Link className="text-[0.72rem] font-bold text-blue tracking-[0.05em] uppercase flex items-center gap-[0.28rem] transition-all duration-300 group-hover:gap-[0.52rem]" to="/artikel/desalinasi-pulau-terpencil">Baca →</Link></div>
          </div>

          <div className="no-results" id="noResults">Tidak ada artikel yang sesuai dengan pencarian Anda.</div>

        </div>{/*  /#artGrid  */}
      </div>{/*  /main  */}

      {/*  SIDEBAR  */}
      <aside className="sticky-side">

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Cari Artikel</h4>
          <div className="search-wrap">
            <span className="search-ico">🔍</span>
            <input type="text" id="searchInput" placeholder="Kata kunci..."  />
          </div>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Artikel Populer</h4>
          <div className="pop-item">
            <div className="pop-num">01</div>
            <div><Link className="pop-title" to="/artikel/ro-prinsip-kerja">Mengenal Teknologi Reverse Osmosis: Prinsip Kerja dan Keunggulannya</Link><div className="pop-meta">28 Mar 2025 · 1.2k views</div></div>
          </div>
          <div className="pop-item">
            <div className="pop-num">02</div>
            <div><Link className="pop-title" to="/artikel/studi-kasus-ro-tekstil">Studi Kasus: RO 200 m³/hari di Pabrik Tekstil Karawang</Link><div className="pop-meta">25 Jan 2025 · 830 views</div></div>
          </div>
          <div className="pop-item">
            <div className="pop-num">03</div>
            <div><Link className="pop-title" to="/artikel/desalinasi-solusi-pulau">Desalinasi Air Laut: Solusi Krisis Air Bersih di Pulau Terpencil</Link><div className="pop-meta">15 Mar 2025 · 890 views</div></div>
          </div>
          <div className="pop-item">
            <div className="pop-num">04</div>
            <div><Link className="pop-title" to="/artikel/air-farmasi-ro-edi">Standar Kualitas Air Farmasi: Mengapa RO + EDI Wajib?</Link><div className="pop-meta">20 Feb 2025 · 740 views</div></div>
          </div>
          <div className="pop-item">
            <div className="pop-num">05</div>
            <div><Link className="pop-title" to="/artikel/5-kesalahan-perawatan-ro">5 Kesalahan Umum Perawatan Membran RO</Link><div className="pop-meta">5 Mar 2025 · 650 views</div></div>
          </div>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Topik Populer</h4>
          <div className="tag-cloud">
            <button className="tag-chip" >Reverse Osmosis</button>
            <button className="tag-chip" >Desalinasi</button>
            <button className="tag-chip" >Perawatan RO</button>
            <button className="tag-chip" >Farmasi</button>
            <button className="tag-chip" >ZLD</button>
            <button className="tag-chip" >SWRO</button>
            <button className="tag-chip" >Membran</button>
            <button className="tag-chip" >Studi Kasus</button>
          </div>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] sb-cta ">
          <h4>Butuh Bantuan?</h4>
          <p>Konsultasikan kebutuhan water treatment Anda dengan tim ahli kami secara gratis.</p>
          <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center"}} to="/kontak">📞 Konsultasi Gratis</Link>
        </div>

      </aside>
    </div>
  </div>
</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Punya Pertanyaan Teknis?</h2>
    <p>Tim ahli kami siap menjawab pertanyaan seputar teknologi water treatment.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak">💬 Tanya Tim Ahli</Link>
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/faq">❓ Lihat FAQ</Link>
    </div>
  </div>
</div>

    </>
  );
};

export default Artikel;
