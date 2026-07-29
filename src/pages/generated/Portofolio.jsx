import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Factory, Droplet, Waves, CheckCircle2, Shield, Package, Activity, Ship } from 'lucide-react';


const Portofolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › Portofolio</div>
    <h1>Portofolio Proyek</h1>
    <p>Lebih dari 500 proyek berhasil diselesaikan di seluruh Indonesia — dari sistem RO industri besar hingga desalinasi air laut untuk kapal dan kepulauan.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">

    {/*  STATS  */}
    <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(150px,1fr))","gap":"1rem","marginBottom":"3rem"}} className="">
      <div style={{"background":"var(--ice)","border":"1px solid var(--border)","borderRadius":"10px","padding":"1.2rem","textAlign":"center"}}><div style={{"fontFamily":"'Barlow Condensed',sans-serif","fontSize":"2rem","fontWeight":"900","color":"var(--blue)"}}>500+</div><div style={{"fontSize":".75rem","color":"var(--muted)","marginTop":".2rem"}}>Proyek Selesai</div></div>
      <div style={{"background":"var(--ice)","border":"1px solid var(--border)","borderRadius":"10px","padding":"1.2rem","textAlign":"center"}}><div style={{"fontFamily":"'Barlow Condensed',sans-serif","fontSize":"2rem","fontWeight":"900","color":"var(--blue)"}}>24+</div><div style={{"fontSize":".75rem","color":"var(--muted)","marginTop":".2rem"}}>Tahun Pengalaman</div></div>
      <div style={{"background":"var(--ice)","border":"1px solid var(--border)","borderRadius":"10px","padding":"1.2rem","textAlign":"center"}}><div style={{"fontFamily":"'Barlow Condensed',sans-serif","fontSize":"2rem","fontWeight":"900","color":"var(--blue)"}}>100+</div><div style={{"fontSize":".75rem","color":"var(--muted)","marginTop":".2rem"}}>Klien Aktif</div></div>
      <div style={{"background":"var(--ice)","border":"1px solid var(--border)","borderRadius":"10px","padding":"1.2rem","textAlign":"center"}}><div style={{"fontFamily":"'Barlow Condensed',sans-serif","fontSize":"2rem","fontWeight":"900","color":"var(--blue)"}}>34</div><div style={{"fontSize":".75rem","color":"var(--muted)","marginTop":".2rem"}}>Provinsi</div></div>
    </div>

    {/*  CATATAN  */}
    <div style={{"background":"#fff8e6","borderLeft":"4px solid #f59e0b","padding":"1rem 1.4rem","borderRadius":"0 8px 8px 0","marginBottom":"3rem","fontSize":".88rem","lineHeight":"1.6"}} className="">
      <strong>📌 Catatan:</strong> Angka <strong>500+ proyek</strong> mencakup proyek yang telah diselesaikan TSM sejak 2002. Daftar yang ditampilkan di halaman ini adalah <em>highlight</em> proyek besar dan studi kasus terpilih — masih banyak proyek lain yang tidak tercantum di halaman publik karena alasan kerahasiaan klien atau keterbatasan ruang.
    </div>

    {/*  PORTOFOLIO PER INDUSTRI  */}
    <div className="" style={{"marginBottom":"3rem"}}>
      <h2 style={{"fontFamily":"'Barlow Condensed',sans-serif","fontSize":"1.8rem","color":"var(--navy)","marginBottom":".4rem"}}>Jelajahi Portofolio per Sektor</h2>
      <p style={{"color":"var(--muted)","fontSize":".95rem","marginBottom":"1.5rem"}}>Lihat kompilasi proyek TSM yang lebih lengkap, dikelompokkan berdasarkan sektor industri klien.</p>
      <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(260px,1fr))","gap":"1rem"}}>

        <Link style={{"background":"linear-gradient(135deg,#0a2240,#1e4a7b)","color":"#fff","borderRadius":"12px","padding":"1.4rem","textDecoration":"none","display":"block","transition":"transform .25s"}} to="/portofolio/tni-al">
          <div style={{"fontSize":"1.8rem","marginBottom":".4rem"}}>⚓</div>
          <h3 style={{"color":"#fff","fontFamily":"'Barlow Condensed',sans-serif","fontSize":"1.25rem","marginBottom":".4rem"}}>TNI AL &amp; KRI</h3>
          <p style={{"color":"rgba(255,255,255,.85)","fontSize":".85rem","lineHeight":"1.5","marginBottom":".8rem"}}>15+ unit KRI &amp; pangkalan TNI dengan watermaker SWRO</p>
          <span style={{"fontSize":".78rem","fontWeight":"700","color":"#7dd3fc"}}>Lihat Portofolio →</span>
        </Link>

        <Link style={{"background":"linear-gradient(135deg,#065f46,#10b981)","color":"#fff","borderRadius":"12px","padding":"1.4rem","textDecoration":"none","display":"block"}} to="/portofolio/sinarmas-group">
          <div style={{"fontSize":"1.8rem","marginBottom":".4rem"}}>🌳</div>
          <h3 style={{"color":"#fff","fontFamily":"'Barlow Condensed',sans-serif","fontSize":"1.25rem","marginBottom":".4rem"}}>Sinarmas Forestry</h3>
          <p style={{"color":"rgba(255,255,255,.85)","fontSize":".85rem","lineHeight":"1.5","marginBottom":".8rem"}}>15+ unit BWRO untuk nursery di Palembang &amp; Kalimantan</p>
          <span style={{"fontSize":".78rem","fontWeight":"700","color":"#a7f3d0"}}>Lihat Portofolio →</span>
        </Link>

        <Link style={{"background":"linear-gradient(135deg,#991b1b,#dc2626)","color":"#fff","borderRadius":"12px","padding":"1.4rem","textDecoration":"none","display":"block"}} to="/portofolio/rumah-sakit">
          <div style={{"fontSize":"1.8rem","marginBottom":".4rem"}}><Activity className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div>
          <h3 style={{"color":"#fff","fontFamily":"'Barlow Condensed',sans-serif","fontSize":"1.25rem","marginBottom":".4rem"}}>Rumah Sakit &amp; Hemodialisis</h3>
          <p style={{"color":"rgba(255,255,255,.85)","fontSize":".85rem","lineHeight":"1.5","marginBottom":".8rem"}}>15+ RS &amp; klinik dengan sistem RO medical grade</p>
          <span style={{"fontSize":".78rem","fontWeight":"700","color":"#fecaca"}}>Lihat Portofolio →</span>
        </Link>

        <Link style={{"background":"linear-gradient(135deg,#4a3520,#92400e)","color":"#fff","borderRadius":"12px","padding":"1.4rem","textDecoration":"none","display":"block"}} to="/portofolio/pertambangan-energi">
          <div style={{"fontSize":"1.8rem","marginBottom":".4rem"}}>⛏️</div>
          <h3 style={{"color":"#fff","fontFamily":"'Barlow Condensed',sans-serif","fontSize":"1.25rem","marginBottom":".4rem"}}>Tambang &amp; Energi</h3>
          <p style={{"color":"rgba(255,255,255,.85)","fontSize":".85rem","lineHeight":"1.5","marginBottom":".8rem"}}>40+ site tambang &amp; 25+ PLTD/PLN seluruh Indonesia</p>
          <span style={{"fontSize":".78rem","fontWeight":"700","color":"#fde68a"}}>Lihat Portofolio →</span>
        </Link>

        <Link style={{"background":"linear-gradient(135deg,#1e3a8a,#3b82f6)","color":"#fff","borderRadius":"12px","padding":"1.4rem","textDecoration":"none","display":"block"}} to="/portofolio/amdk-pabrik">
          <div style={{"fontSize":"1.8rem","marginBottom":".4rem"}}><Droplet className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div>
          <h3 style={{"color":"#fff","fontFamily":"'Barlow Condensed',sans-serif","fontSize":"1.25rem","marginBottom":".4rem"}}>AMDK &amp; Beverages</h3>
          <p style={{"color":"rgba(255,255,255,.85)","fontSize":".85rem","lineHeight":"1.5","marginBottom":".8rem"}}>25+ brand AMDK dari Aceh sampai Papua</p>
          <span style={{"fontSize":".78rem","fontWeight":"700","color":"#bfdbfe"}}>Lihat Portofolio →</span>
        </Link>

        <Link style={{"background":"linear-gradient(135deg,#581c87,#9333ea)","color":"#fff","borderRadius":"12px","padding":"1.4rem","textDecoration":"none","display":"block"}} to="/portofolio/pendidikan">
          <div style={{"fontSize":"1.8rem","marginBottom":".4rem"}}>🎓</div>
          <h3 style={{"color":"#fff","fontFamily":"'Barlow Condensed',sans-serif","fontSize":"1.25rem","marginBottom":".4rem"}}>Sektor Pendidikan</h3>
          <p style={{"color":"rgba(255,255,255,.85)","fontSize":".85rem","lineHeight":"1.5","marginBottom":".8rem"}}>Universitas Airlangga, Atma Jaya &amp; kampus lainnya</p>
          <span style={{"fontSize":".78rem","fontWeight":"700","color":"#e9d5ff"}}>Lihat Portofolio →</span>
        </Link>

      </div>
    </div>

    {/*  HEADING HIGHLIGHT  */}
    <h2 className="" style={{"fontFamily":"'Barlow Condensed',sans-serif","fontSize":"1.8rem","color":"var(--navy)","marginBottom":".4rem"}}>Highlight Studi Kasus &amp; Proyek Besar</h2>
    <p className="" style={{"color":"var(--muted)","fontSize":".95rem","marginBottom":"1.5rem"}}>Pilihan proyek dengan studi kasus mendalam yang menggambarkan kapabilitas teknis dan skala TSM.</p>

    {/*  FILTER  */}
    <div className="filter-bar ">
      <button className="fb active" >Semua</button>
      <button className="fb" ><Waves className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Desalinasi SWRO</button>
      <button className="fb" ><Droplet className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> BWRO / RO Industri</button>
      <button className="fb" ><Ship className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Kapal &amp; Maritim</button>
      <button className="fb" >🏝️ Kepulauan</button>
      <button className="fb" ><Factory className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Industri &amp; F&amp;B</button>
    </div>

    <div className="porto-grid" id="portoGrid">

      {/*  1. PELINDO  */}
      <div className="porto-card " data-cat="swro">
        <div className="porto-img">
          <picture>
  <source srcSet="images/porto-pelindo-1.webp" type="image/webp" />
  <img src="images/porto-pelindo-1.jpg" alt="SWRO Pelindo Jakarta"  />
</picture>
          <span className="porto-cat" style={{"background":"var(--blue)"}}>SWRO</span>
        </div>
        <div className="porto-body">
          <div className="porto-client">PT EPI – Pelindo Jakarta</div>
          <h3>SWRO Desalinasi Air Laut — 1.100 m³/hari</h3>
          <p>Sistem Sea Water Reverse Osmosis kapasitas sangat besar untuk mendukung operasional pelabuhan terbesar di Indonesia.</p>
          <div className="porto-stats">
            <div className="ps">⚡ <span>1.100 m³/hari</span></div>
            <div className="ps">📍 <span>Jakarta</span></div>
            <div className="ps"><CheckCircle2 className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> <span>Selesai 2023</span></div>
          <div style={{"marginTop":"1rem"}}>
            <Link style={{"display":"inline-flex","alignItems":"center","gap":".4rem","padding":".55rem 1.1rem","background":"var(--blue)","color":"#fff","borderRadius":"6px","fontSize":".82rem","fontWeight":"700","textDecoration":"none"}} to="/portofolio/pelindo">📄 Baca Studi Kasus Lengkap →</Link>
          </div>
          </div>
        </div>
        <div className="photo-grid g3" style={{"padding":"0 0 4px"}}>
          <picture>
  <source srcSet="images/porto-pelindo-1.webp" type="image/webp" />
  <img src="images/porto-pelindo-1.jpg" alt="Pelindo 1"  loading="lazy" decoding="async" />
</picture>
          <picture>
  <source srcSet="images/porto-pelindo-2.webp" type="image/webp" />
  <img src="images/porto-pelindo-2.jpg" alt="Pelindo 2"  loading="lazy" decoding="async" />
</picture>
          <picture>
  <source srcSet="images/porto-pelindo-3.webp" type="image/webp" />
  <img src="images/porto-pelindo-3.jpg" alt="Pelindo 3"  loading="lazy" decoding="async" />
</picture>
        </div>
      </div>

      {/*  2. KONTAINER PT ENL  */}
      <div className="porto-card " data-cat="swro">
        <div className="porto-img">
          <picture>
  <source srcSet="images/porto-kontainer-1.webp" type="image/webp" />
  <img src="images/porto-kontainer-1.jpg" alt="SWRO Kontainer PT ENL"  loading="lazy" decoding="async" />
</picture>
          <span className="porto-cat" style={{"background":"var(--accent)"}}>SWRO Kontainer</span>
        </div>
        <div className="porto-body">
          <div className="porto-client">PT ENL</div>
          <h3>SWRO Sistem Kontainer — Mobile Desalinasi</h3>
          <p>Sistem desalinasi dalam kontainer yang dapat dipindahkan, ideal untuk lokasi offshore dan kepulauan yang membutuhkan fleksibilitas tinggi.</p>
          <div className="porto-stats">
            <div className="ps"><Package className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> <span>Kontainer</span></div>
            <div className="ps"><CheckCircle2 className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> <span>Selesai 2026</span></div>
          </div>
        </div>
        <div className="photo-grid g2" style={{"padding":"0 0 4px"}}>
          <picture>
  <source srcSet="images/porto-kontainer-1.webp" type="image/webp" />
  <img alt="Proyek SWRO kontainer PT TSM" src="images/porto-kontainer-1.jpg"  loading="lazy" decoding="async" />
</picture>
          <picture>
  <source srcSet="images/porto-kontainer-2.webp" type="image/webp" />
  <img alt="Proyek SWRO kontainer PT TSM" src="images/porto-kontainer-2.jpg"  loading="lazy" decoding="async" />
</picture>
          <picture>
  <source srcSet="images/porto-kontainer-3.webp" type="image/webp" />
  <img alt="Proyek SWRO kontainer PT TSM" src="images/porto-kontainer-3.jpg"  loading="lazy" decoding="async" />
</picture>
          <picture>
  <source srcSet="images/porto-kontainer-4.webp" type="image/webp" />
  <img alt="Proyek SWRO kontainer PT TSM" src="images/porto-kontainer-4.jpg"  loading="lazy" decoding="async" />
</picture>
        </div>
      </div>

      {/*  3. PULAU AYER  */}
      <div className="porto-card " data-cat="swro pulau">
        <div className="porto-img">
          <picture>
  <source srcSet="images/porto-pulau-ayer-1.webp" type="image/webp" />
  <img src="images/porto-pulau-ayer-1.jpg" alt="SWRO Pulau Ayer"  loading="lazy" decoding="async" />
</picture>
          <span className="porto-cat" style={{"background":"#0891b2"}}>SWRO Kepulauan</span>
        </div>
        <div className="porto-body">
          <div className="porto-client">Resort Pulau Ayer – Kepulauan Seribu</div>
          <h3>SWRO Desalinasi Air Laut — 76 m³/hari</h3>
          <p>Penyediaan air tawar bersih untuk resort dan penghuni Pulau Ayer di Kepulauan Seribu menggunakan teknologi SWRO compact.</p>
          <div className="porto-stats">
            <div className="ps">⚡ <span>76 m³/hari</span></div>
            <div className="ps">📍 <span>Pulau Seribu, Jakarta</span></div>
          <div style={{"marginTop":"1rem"}}>
            <Link style={{"display":"inline-flex","alignItems":"center","gap":".4rem","padding":".55rem 1.1rem","background":"var(--blue)","color":"#fff","borderRadius":"6px","fontSize":".82rem","fontWeight":"700","textDecoration":"none"}} to="/portofolio/pulau-ayer">📄 Baca Studi Kasus Lengkap →</Link>
          </div>
          </div>
        </div>
        <div className="photo-grid g3" style={{"padding":"0 0 4px"}}>
          <picture>
  <source srcSet="images/porto-pulau-ayer-1.webp" type="image/webp" />
  <img alt="Proyek RO Pulau Ayer TSM" src="images/porto-pulau-ayer-1.jpg"  loading="lazy" decoding="async" />
</picture>
          <picture>
  <source srcSet="images/porto-pulau-ayer-2.webp" type="image/webp" />
  <img alt="Proyek RO Pulau Ayer TSM" src="images/porto-pulau-ayer-2.jpg"  loading="lazy" decoding="async" />
</picture>
          <picture>
  <source srcSet="images/porto-pulau-ayer-3.webp" type="image/webp" />
  <img alt="Proyek RO Pulau Ayer TSM" src="images/porto-pulau-ayer-3.jpg"  loading="lazy" decoding="async" />
</picture>
        </div>
      </div>

      {/*  4. PAM JAYA Pulau Lancang  */}
      <div className="porto-card " data-cat="swro pulau">
        <div className="porto-img">
          <picture>
  <source srcSet="images/porto-pamjaya-1.webp" type="image/webp" />
  <img src="images/porto-pamjaya-1.jpg" alt="SWRO PAM JAYA Pulau Lancang"  loading="lazy" decoding="async" />
</picture>
          <span className="porto-cat" style={{"background":"#047857"}}>SWRO Pemerintah</span>
        </div>
        <div className="porto-body">
          <div className="porto-client">PAM JAYA – Pulau Lancang, Pulau Seribu</div>
          <h3>SWRO Air Minum Komunitas Pulau Seribu</h3>
          <p>Penyediaan air minum bersih untuk masyarakat Pulau Lancang oleh PAM JAYA menggunakan teknologi desalinasi SWRO TSM.</p>
          <div className="porto-stats">
            <div className="ps">👥 <span>Layanan Publik</span></div>
            <div className="ps">📍 <span>Pulau Seribu</span></div>
          </div>
        </div>
        <div className="photo-grid g2" style={{"padding":"0 0 4px"}}>
          <picture>
  <source srcSet="images/porto-pamjaya-1.webp" type="image/webp" />
  <img alt="Proyek PAM JAYA Pulau Lancang TSM" src="images/porto-pamjaya-1.jpg"  loading="lazy" decoding="async" />
</picture>
          <picture>
  <source srcSet="images/porto-pamjaya-2.webp" type="image/webp" />
  <img alt="Proyek PAM JAYA Pulau Lancang TSM" src="images/porto-pamjaya-2.jpg"  loading="lazy" decoding="async" />
</picture>
        </div>
      </div>

      {/*  5. PEMASANGAN PULAU SERIBU  */}
      <div className="porto-card " data-cat="swro pulau">
        <div className="porto-img">
          <picture>
  <source srcSet="images/foto-pemasangan-pulauseribu.webp" type="image/webp" />
  <img src="images/foto-pemasangan-pulauseribu.jpg" alt="Pemasangan Pulau Seribu"  loading="lazy" decoding="async" />
</picture>
          <span className="porto-cat" style={{"background":"#7c3aed"}}>Instalasi</span>
        </div>
        <div className="porto-body">
          <div className="porto-client">Pulau Seribu – Jakarta</div>
          <h3>Pemasangan Sistem SWRO di Pulau Terpencil</h3>
          <p>Dokumentasi proses pemasangan sistem desalinasi di lokasi kepulauan yang membutuhkan koordinasi logistik khusus.</p>
          <div className="porto-stats">
            <div className="ps">🔧 <span>Instalasi Lapangan</span></div>
            <div className="ps">📍 <span>Kepulauan Seribu</span></div>
          </div>
        </div>
        <div className="photo-grid g2" style={{"padding":"0 0 4px"}}>
          <picture>
  <source srcSet="images/foto-pemasangan-pulauseribu.webp" type="image/webp" />
  <img alt="Instalasi RO di Pulau Seribu" src="images/foto-pemasangan-pulauseribu.jpg"  loading="lazy" decoding="async" />
</picture>
          <picture>
  <source srcSet="images/foto-pemasangan-pulauseribu2.webp" type="image/webp" />
  <img alt="Instalasi RO di Pulau Seribu" src="images/foto-pemasangan-pulauseribu2.jpg"  loading="lazy" decoding="async" />
</picture>
        </div>
      </div>

      {/*  6. PT SOSRO  */}
      <div className="porto-card " data-cat="bwro industri">
        <div className="porto-img">
          <picture>
  <source srcSet="images/porto-sosro-1.webp" type="image/webp" />
  <img src="images/porto-sosro-1.jpg" alt="BWRO PT Sosro"  loading="lazy" decoding="async" />
</picture>
          <span className="porto-cat" style={{"background":"#dc2626"}}>BWRO F&amp;B</span>
        </div>
        <div className="porto-body">
          <div className="porto-client">PT Sosro — Industri Minuman</div>
          <h3>BWRO + UF Sistem — 30 m³/jam</h3>
          <p>Sistem Brackish Water RO dan Ultrafiltrasi untuk produksi minuman teh botol Sosro, memastikan kualitas air proses yang konsisten sesuai standar pangan.</p>
          <div className="porto-stats">
            <div className="ps">⚡ <span>30 m³/jam</span></div>
            <div className="ps"><Factory className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> <span>F&amp;B / Minuman</span></div>
          <div style={{"marginTop":"1rem"}}>
            <Link style={{"display":"inline-flex","alignItems":"center","gap":".4rem","padding":".55rem 1.1rem","background":"var(--blue)","color":"#fff","borderRadius":"6px","fontSize":".82rem","fontWeight":"700","textDecoration":"none"}} to="/portofolio/sosro">📄 Baca Studi Kasus Lengkap →</Link>
          </div>
          </div>
        </div>
        <div className="photo-grid g2" style={{"padding":"0 0 4px"}}>
          <picture>
  <source srcSet="images/porto-sosro-1.webp" type="image/webp" />
  <img alt="Proyek instalasi RO PT Sosro TSM" src="images/porto-sosro-1.jpg"  loading="lazy" decoding="async" />
</picture>
          <picture>
  <source srcSet="images/porto-sosro-2.webp" type="image/webp" />
  <img alt="Proyek instalasi RO PT Sosro TSM" src="images/porto-sosro-2.jpg"  loading="lazy" decoding="async" />
</picture>
          <picture>
  <source srcSet="images/porto-sosro-3.webp" type="image/webp" />
  <img alt="Proyek instalasi RO PT Sosro TSM" src="images/porto-sosro-3.jpg"  loading="lazy" decoding="async" />
</picture>
          <picture>
  <source srcSet="images/porto-sosro-4.webp" type="image/webp" />
  <img alt="Proyek instalasi RO PT Sosro TSM" src="images/porto-sosro-4.jpg"  loading="lazy" decoding="async" />
</picture>
        </div>
      </div>

      {/*  7. BWRO PT SBAWI Palembang  */}
      <div className="porto-card " data-cat="bwro industri">
        <div className="porto-img">
          <picture>
  <source srcSet="images/porto-sbawi-1.webp" type="image/webp" />
  <img src="images/porto-sbawi-1.jpg" alt="BWRO PT SBAWI Palembang"  loading="lazy" decoding="async" />
</picture>
          <span className="porto-cat" style={{"background":"#b45309"}}>BWRO Industri</span>
        </div>
        <div className="porto-body">
          <div className="porto-client">PT SBAWI – Palembang, Sumatera Selatan</div>
          <h3>BWRO Industri Besar — 40 m³/jam</h3>
          <p>Sistem pengolahan air payau skala industri besar untuk kebutuhan proses produksi di Palembang dengan kapasitas 40 meter kubik per jam.</p>
          <div className="porto-stats">
            <div className="ps">⚡ <span>40 m³/jam</span></div>
            <div className="ps">📍 <span>Palembang</span></div>
          <div style={{"marginTop":"1rem"}}>
            <Link style={{"display":"inline-flex","alignItems":"center","gap":".4rem","padding":".55rem 1.1rem","background":"var(--blue)","color":"#fff","borderRadius":"6px","fontSize":".82rem","fontWeight":"700","textDecoration":"none"}} to="/portofolio/sinarmas-forestry">📄 Baca Studi Kasus Lengkap →</Link>
          </div>
          </div>
        </div>
        <div className="photo-grid g2" style={{"padding":"0 0 4px"}}>
          <picture>
  <source srcSet="images/porto-sbawi-1.webp" type="image/webp" />
  <img alt="Proyek sistem RO SBAWI TSM" src="images/porto-sbawi-1.jpg"  loading="lazy" decoding="async" />
</picture>
          <picture>
  <source srcSet="images/porto-sbawi-2.webp" type="image/webp" />
  <img alt="Proyek sistem RO SBAWI TSM" src="images/porto-sbawi-2.jpg"  loading="lazy" decoding="async" />
</picture>
        </div>
      </div>

      {/*  8. KRI AMY Surabaya  */}
      <div className="porto-card " data-cat="kapal swro">
        <div className="porto-img">
          <picture>
  <source srcSet="images/porto-kri-amy-1.webp" type="image/webp" />
  <img src="images/porto-kri-amy-1.jpg" alt="SWRO KRI AMY Surabaya"  loading="lazy" decoding="async" />
</picture>
          <span className="porto-cat" style={{"background":"#1e3a5f"}}>SWRO TNI AL</span>
        </div>
        <div className="porto-body">
          <div className="porto-client">TNI AL – KRI AMY Surabaya</div>
          <h3>SWRO Kapal Perang TNI AL — 20 TPD</h3>
          <p>Sistem desalinasi air laut untuk kapal TNI Angkatan Laut KRI AMY di Surabaya. Memastikan pasokan air tawar segar untuk awak kapal selama operasi laut.</p>
          <div className="porto-stats">
            <div className="ps">⚡ <span>20 ton/hari</span></div>
            <div className="ps"><Ship className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> <span>Kapal Perang</span></div>
            <div className="ps">📍 <span>Surabaya</span></div>
          <div style={{"marginTop":"1rem"}}>
            <Link style={{"display":"inline-flex","alignItems":"center","gap":".4rem","padding":".55rem 1.1rem","background":"var(--blue)","color":"#fff","borderRadius":"6px","fontSize":".82rem","fontWeight":"700","textDecoration":"none"}} to="/portofolio/kri">📄 Baca Studi Kasus Lengkap →</Link>
          </div>
          </div>
        </div>
      </div>

      {/*  9. KRI Sultan Iskandar Muda 367  */}
      <div className="porto-card " data-cat="kapal swro">
        <div className="porto-img">
          <picture>
  <source srcSet="images/porto-kri-dkb-1.webp" type="image/webp" />
  <img src="images/porto-kri-dkb-1.jpg" alt="SWRO KRI Sultan Iskandar Muda 367"  loading="lazy" decoding="async" />
</picture>
          <span className="porto-cat" style={{"background":"#1e3a5f"}}>SWRO TNI AL</span>
        </div>
        <div className="porto-body">
          <div className="porto-client">TNI AL – KRI Sultan Iskandar Muda 367</div>
          <h3>SWRO Kapal Perang TNI AL — 30 TPD</h3>
          <p>Sistem desalinasi air laut untuk KRI Sultan Iskandar Muda 367. Watermaker compact dirancang untuk operasi laut yang menantang dengan kemudahan perawatan oleh awak kapal.</p>
          <div className="porto-stats">
            <div className="ps">⚡ <span>30 ton/hari</span></div>
            <div className="ps"><Ship className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> <span>Kapal Perang</span></div>
            <div className="ps">📅 <span>2024</span></div>
          </div>
          <div style={{"marginTop":"1rem"}}>
            <Link style={{"display":"inline-flex","alignItems":"center","gap":".4rem","padding":".55rem 1.1rem","background":"var(--blue)","color":"#fff","borderRadius":"6px","fontSize":".82rem","fontWeight":"700","textDecoration":"none"}} to="/portofolio/kri-fleet">📄 Baca Studi Kasus Lengkap →</Link>
          </div>
        </div>
        <div className="photo-grid g2" style={{"padding":"0 0 4px"}}>
          <picture>
  <source srcSet="images/porto-kri-dkb-1.webp" type="image/webp" />
  <img alt="Proyek RO Kapal Perang TNI AL TSM" src="images/porto-kri-dkb-1.jpg"  loading="lazy" decoding="async" />
</picture>
          <picture>
  <source srcSet="images/porto-kri-dkb-2.webp" type="image/webp" />
  <img alt="Proyek RO Kapal Perang TNI AL TSM" src="images/porto-kri-dkb-2.jpg"  loading="lazy" decoding="async" />
</picture>
        </div>
      </div>

      {/*  10. Kapal Prima Nusantara  */}
      <div className="porto-card " data-cat="kapal swro">
        <div className="porto-img">
          <picture>
  <source srcSet="images/porto-kapal-prima-1.webp" type="image/webp" />
  <img src="images/porto-kapal-prima-1.jpg" alt="SWRO Kapal Prima Nusantara"  loading="lazy" decoding="async" />
</picture>
          <span className="porto-cat" style={{"background":"#0369a1"}}>SWRO Kapal</span>
        </div>
        <div className="porto-body">
          <div className="porto-client">Kapal Prima Nusantara</div>
          <h3>SWRO Kapal — 15 Ton/hari</h3>
          <p>Instalasi sistem desalinasi di kapal Prima Nusantara. Sistem compact dan efisien untuk memenuhi kebutuhan air tawar seluruh awak kapal selama berlayar.</p>
          <div className="porto-stats">
            <div className="ps">⚡ <span>15 ton/hari</span></div>
            <div className="ps"><Ship className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> <span>Kapal Komersial</span></div>
          </div>
        </div>
        <div className="photo-grid g3" style={{"padding":"0 0 4px"}}>
          <picture>
  <source srcSet="images/porto-kapal-prima-1.webp" type="image/webp" />
  <img alt="Proyek RO kapal PT Prima TSM" src="images/porto-kapal-prima-1.jpg"  loading="lazy" decoding="async" />
</picture>
          <picture>
  <source srcSet="images/porto-kapal-prima-2.webp" type="image/webp" />
  <img alt="Proyek RO kapal PT Prima TSM" src="images/porto-kapal-prima-2.jpg"  loading="lazy" decoding="async" />
</picture>
          <picture>
  <source srcSet="images/porto-kapal-prima-3.webp" type="image/webp" />
  <img alt="Proyek RO kapal PT Prima TSM" src="images/porto-kapal-prima-3.jpg"  loading="lazy" decoding="async" />
</picture>
        </div>
      </div>

      {/*  11. Pemasangan Lapangan  */}
      <div className="porto-card " data-cat="bwro industri">
        <div className="porto-img">
          <picture>
  <source srcSet="images/foto-pemasangan-lapangan.webp" type="image/webp" />
  <img src="images/foto-pemasangan-lapangan.jpg" alt="Pemasangan sistem RO di lapangan"  loading="lazy" decoding="async" />
</picture>
          <span className="porto-cat" style={{"background":"#6d28d9"}}>Instalasi</span>
        </div>
        <div className="porto-body">
          <div className="porto-client">Proyek Instalasi TSM</div>
          <h3>Pemasangan Sistem RO di Lokasi Klien</h3>
          <p>Proses instalasi sistem water treatment oleh tim teknisi TSM di lokasi klien. Memastikan sistem terpasang dengan benar sesuai spesifikasi desain.</p>
          <div className="porto-stats">
            <div className="ps">🔧 <span>Instalasi Profesional</span></div>
            <div className="ps">⏱ <span>Tepat Waktu</span></div>
          </div>
        </div>
        <div className="photo-grid g2" style={{"padding":"0 0 4px"}}>
          <picture>
  <source srcSet="images/foto-pemasangan-lapangan.webp" type="image/webp" />
  <img alt="Pemasangan sistem water treatment di lapangan" src="images/foto-pemasangan-lapangan.jpg"  loading="lazy" decoding="async" />
</picture>
          <picture>
  <source srcSet="images/foto-pemasangan-kontainer.webp" type="image/webp" />
  <img alt="Pemasangan sistem RO kontainer TSM" src="images/foto-pemasangan-kontainer.jpg"  loading="lazy" decoding="async" />
</picture>
        </div>
      </div>

      {/*  12. Halliburton Sarulla  */}
      <div className="porto-card " data-cat="bwro industri">
        <div className="porto-img">
          <picture>
  <source srcSet="images/foto-pemasangan-lapangan.webp" type="image/webp" />
  <img src="images/foto-pemasangan-lapangan.jpg" alt="UF System Halliburton Sarulla"  loading="lazy" decoding="async" />
</picture>
          <span className="porto-cat" style={{"background":"#7c2d12"}}>UF Geothermal</span>
        </div>
        <div className="porto-body">
          <div className="porto-client">PT Halliburton – Sarulla, Sumatra Utara</div>
          <h3>UF System 47.000 LPD × 7 Set — Geothermal</h3>
          <p>Salah satu proyek ultrafiltrasi terbesar yang TSM kerjakan untuk industri energi. Tujuh set UF dengan kapasitas total 329.000 LPD untuk proyek geothermal Sarulla.</p>
          <div className="porto-stats">
            <div className="ps">⚡ <span>329.000 LPD</span></div>
            <div className="ps">📍 <span>Sumatra Utara</span></div>
            <div className="ps">🌋 <span>Geothermal</span></div>
          </div>
          <div style={{"marginTop":"1rem"}}>
            <Link style={{"display":"inline-flex","alignItems":"center","gap":".4rem","padding":".55rem 1.1rem","background":"var(--blue)","color":"#fff","borderRadius":"6px","fontSize":".82rem","fontWeight":"700","textDecoration":"none"}} to="/portofolio/halliburton">📄 Baca Studi Kasus Lengkap →</Link>
          </div>
        </div>
      </div>

      {/*  13. Eka Hospital  */}
      <div className="porto-card " data-cat="bwro industri">
        <div className="porto-img">
          <picture>
  <source srcSet="images/foto-mesin-swro.webp" type="image/webp" />
  <img src="images/foto-mesin-swro.jpg" alt="RO Hemodialisis Eka Hospital"  loading="lazy" decoding="async" />
</picture>
          <span className="porto-cat" style={{"background":"#be123c"}}>RO Medical</span>
        </div>
        <div className="porto-body">
          <div className="porto-client">Eka Hospital – Cibubur &amp; Bekasi</div>
          <h3>RO Hemodialisis Medical-Grade</h3>
          <p>Sistem RO medical-grade untuk treatment ginjal di dua cabang Eka Hospital. Compliance ANSI/AAMI RD52 dengan dokumentasi audit-ready untuk akreditasi rumah sakit.</p>
          <div className="porto-stats">
            <div className="ps">⚕️ <span>Hemodialisis</span></div>
            <div className="ps">📍 <span>Cibubur &amp; Bekasi</span></div>
            <div className="ps"><CheckCircle2 className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> <span>ANSI/AAMI RD52</span></div>
          </div>
          <div style={{"marginTop":"1rem"}}>
            <Link style={{"display":"inline-flex","alignItems":"center","gap":".4rem","padding":".55rem 1.1rem","background":"var(--blue)","color":"#fff","borderRadius":"6px","fontSize":".82rem","fontWeight":"700","textDecoration":"none"}} to="/portofolio/eka-hospital">📄 Baca Studi Kasus Lengkap →</Link>
          </div>
        </div>
      </div>

      {/*  14. Universitas Atma Jaya  */}
      <div className="porto-card " data-cat="bwro industri">
        <div className="porto-img">
          <picture>
  <source srcSet="images/foto-mesin-swro.webp" type="image/webp" />
  <img src="images/foto-mesin-swro.jpg" alt="RO Drinking Water Universitas Atma Jaya"  loading="lazy" decoding="async" />
</picture>
          <span className="porto-cat" style={{"background":"#1d4ed8"}}>RO Drinking Water</span>
        </div>
        <div className="porto-body">
          <div className="porto-client">Universitas Atma Jaya – BSD, Sudirman, Pluit</div>
          <h3>RO Drinking Water &amp; Drinking Fountain Multi-Kampus</h3>
          <p>Sistem RO Drinking Water dan Drinking Fountain untuk tiga kampus Universitas Atma Jaya. Akses air minum langsung untuk ribuan mahasiswa dan staff setiap harinya.</p>
          <div className="porto-stats">
            <div className="ps">🎓 <span>3 Kampus</span></div>
            <div className="ps">📍 <span>BSD · Sudirman · Pluit</span></div>
            <div className="ps"><Droplet className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> <span>Drinking Fountain</span></div>
          </div>
          <div style={{"marginTop":"1rem"}}>
            <Link style={{"display":"inline-flex","alignItems":"center","gap":".4rem","padding":".55rem 1.1rem","background":"var(--blue)","color":"#fff","borderRadius":"6px","fontSize":".82rem","fontWeight":"700","textDecoration":"none"}} to="/portofolio/atma-jaya">📄 Baca Studi Kasus Lengkap →</Link>
          </div>
        </div>
      </div>

      {/*  15. Pabrik Wine Bali  */}
      <div className="porto-card " data-cat="bwro industri">
        <div className="porto-img">
          <picture>
  <source srcSet="images/foto-pemasangan-sosro.webp" type="image/webp" />
  <img src="images/foto-pemasangan-sosro.jpg" alt="RO Pabrik Wine Bali"  loading="lazy" decoding="async" />
</picture>
          <span className="porto-cat" style={{"background":"#9d174d"}}>RO Food-Grade</span>
        </div>
        <div className="porto-body">
          <div className="porto-client">PT Karya Bali Indah &amp; PT Balindo Mitra Perkasa</div>
          <h3>RO Food-Grade untuk Pabrik Wine Premium</h3>
          <p>Sistem RO food-grade untuk dua pabrik wine di Bali: PT Karya Bali Indah Gianyar (5 m³/jam) dan PT Balindo Mitra Perkasa Singaraja (2,5 m³/jam, 1.100 LPH).</p>
          <div className="porto-stats">
            <div className="ps">⚡ <span>7,5 m³/jam total</span></div>
            <div className="ps">📍 <span>Gianyar &amp; Singaraja</span></div>
            <div className="ps">🍷 <span>Food-Grade</span></div>
          </div>
          <div style={{"marginTop":"1rem"}}>
            <Link style={{"display":"inline-flex","alignItems":"center","gap":".4rem","padding":".55rem 1.1rem","background":"var(--blue)","color":"#fff","borderRadius":"6px","fontSize":".82rem","fontWeight":"700","textDecoration":"none"}} to="/portofolio/wine-bali">📄 Baca Studi Kasus Lengkap →</Link>
          </div>
        </div>
      </div>

      {/*  16. Bengkel Produksi TSM  */}
      <div className="porto-card " data-cat="bwro industri">
        <div className="porto-img">
          <picture>
  <source srcSet="images/foto-bengkel.webp" type="image/webp" />
  <img src="images/foto-bengkel.jpg" alt="Bengkel produksi TSM"  loading="lazy" decoding="async" />
</picture>
          <span className="porto-cat" style={{"background":"#0f766e"}}>Bengkel TSM</span>
        </div>
        <div className="porto-body">
          <div className="porto-client">PT Tirta Sumber Makmur</div>
          <h3>Bengkel Produksi &amp; Perakitan Sistem RO</h3>
          <p>Fasilitas bengkel dan produksi milik TSM di Bekasi. Semua sistem RO dirancang, dirakit, dan diuji di bengkel sendiri sebelum dikirim ke lokasi klien.</p>
          <div className="porto-stats">
            <div className="ps"><Factory className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> <span>Produksi Sendiri</span></div>
            <div className="ps">📍 <span>Bekasi, Jawa Barat</span></div>
            <div className="ps"><CheckCircle2 className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> <span>Quality Tested</span></div>
          </div>
        </div>
      </div>

    </div>{/*  /#portoGrid  */}

    {/*  KLIEN NOTABLE  */}
    <div className="" style={{"marginTop":"4rem"}}>
      <h2 style={{"fontFamily":"'Barlow Condensed',sans-serif","fontSize":"1.8rem","color":"var(--navy)","marginBottom":".4rem"}}>Klien Korporasi &amp; Lembaga Notable</h2>
      <p style={{"color":"var(--muted)","fontSize":".95rem","marginBottom":"1.5rem"}}>Beberapa nama besar yang pernah dan masih mempercayakan kebutuhan water treatment kepada TSM:</p>

      <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(200px,1fr))","gap":".8rem"}}>

        <div style={{"background":"var(--white)","border":"1px solid var(--border)","borderRadius":"10px","padding":"1rem 1.2rem"}}>
          <div style={{"fontSize":".7rem","color":"var(--accent)","fontWeight":"700","letterSpacing":".1em","textTransform":"uppercase","marginBottom":".4rem"}}><Shield className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Pemerintah &amp; Militer</div>
          <ul style={{"listStyle":"none","padding":"0","margin":"0","fontSize":".85rem","lineHeight":"1.8","color":"var(--text)"}}>
            <li>• TNI AL — 12+ unit KRI</li>
            <li>• DISLITBANGAD TNI AD</li>
            <li>• Dislitbang TNI AL</li>
            <li>• PEMDA DKI Jakarta</li>
            <li>• PEMDA Lampung &amp; Tegal</li>
            <li>• Kementerian LHK</li>
            <li>• Departemen Kehutanan</li>
            <li>• Pemda Kab. Rote &amp; Dobo</li>
          </ul>
        </div>

        <div style={{"background":"var(--white)","border":"1px solid var(--border)","borderRadius":"10px","padding":"1rem 1.2rem"}}>
          <div style={{"fontSize":".7rem","color":"var(--accent)","fontWeight":"700","letterSpacing":".1em","textTransform":"uppercase","marginBottom":".4rem"}}><Factory className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Korporasi Multinasional</div>
          <ul style={{"listStyle":"none","padding":"0","margin":"0","fontSize":".85rem","lineHeight":"1.8","color":"var(--text)"}}>
            <li>• PT Halliburton (Sarulla)</li>
            <li>• Pertamina Lampung</li>
            <li>• PT Heinz ABC Karawang</li>
            <li>• PT Sinar Sosro</li>
            <li>• Ritz-Carlton SCBD &amp; Kuningan</li>
            <li>• Pelindo (PT EPI) Tanjung Priok</li>
            <li>• PT Diamond Cold Storage</li>
            <li>• PT Hon Chuan Indonesia</li>
          </ul>
        </div>

        <div style={{"background":"var(--white)","border":"1px solid var(--border)","borderRadius":"10px","padding":"1rem 1.2rem"}}>
          <div style={{"fontSize":".7rem","color":"var(--accent)","fontWeight":"700","letterSpacing":".1em","textTransform":"uppercase","marginBottom":".4rem"}}>🌳 Grup Sinarmas Forestry</div>
          <ul style={{"listStyle":"none","padding":"0","margin":"0","fontSize":".85rem","lineHeight":"1.8","color":"var(--text)"}}>
            <li>• PT Bumi Andalas Permai</li>
            <li>• PT Bumi Mekar Hijau</li>
            <li>• PT SBA Wood Industries</li>
            <li>• PT Surya Hutani Jaya</li>
            <li>• PT Ciptamas Bumi Subur</li>
          </ul>
        </div>

        <div style={{"background":"var(--white)","border":"1px solid var(--border)","borderRadius":"10px","padding":"1rem 1.2rem"}}>
          <div style={{"fontSize":".7rem","color":"var(--accent)","fontWeight":"700","letterSpacing":".1em","textTransform":"uppercase","marginBottom":".4rem"}}><Activity className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Rumah Sakit</div>
          <ul style={{"listStyle":"none","padding":"0","margin":"0","fontSize":".85rem","lineHeight":"1.8","color":"var(--text)"}}>
            <li>• Eka Hospital (Bekasi &amp; Cibubur)</li>
            <li>• RS Melinda Bandung</li>
            <li>• RSUD Cengkareng</li>
            <li>• RSUD Pasar Minggu</li>
            <li>• RSUD Cianjur, Manado, Makassar</li>
            <li>• RS Lira Medika Karawang</li>
            <li>• RS Puri Indah</li>
            <li>• RSUD Balaraja, Cibitung</li>
          </ul>
        </div>

        <div style={{"background":"var(--white)","border":"1px solid var(--border)","borderRadius":"10px","padding":"1rem 1.2rem"}}>
          <div style={{"fontSize":".7rem","color":"var(--accent)","fontWeight":"700","letterSpacing":".1em","textTransform":"uppercase","marginBottom":".4rem"}}>🎓 Pendidikan</div>
          <ul style={{"listStyle":"none","padding":"0","margin":"0","fontSize":".85rem","lineHeight":"1.8","color":"var(--text)"}}>
            <li>• Universitas Airlangga (multi kampus)</li>
            <li>• Yayasan/UKI Atma Jaya</li>
            <li>• Sekolah Tinggi Sandi Negara</li>
          </ul>
        </div>

        <div style={{"background":"var(--white)","border":"1px solid var(--border)","borderRadius":"10px","padding":"1rem 1.2rem"}}>
          <div style={{"fontSize":".7rem","color":"var(--accent)","fontWeight":"700","letterSpacing":".1em","textTransform":"uppercase","marginBottom":".4rem"}}>⛏️ Pertambangan</div>
          <ul style={{"listStyle":"none","padding":"0","margin":"0","fontSize":".85rem","lineHeight":"1.8","color":"var(--text)"}}>
            <li>• PT Hillconjaya Sakti</li>
            <li>• PT Madhani Talatah Nusantara</li>
            <li>• PT Berau Bara Energi</li>
            <li>• PT Atlas Resources</li>
            <li>• PT Energi Kaltim Persada</li>
            <li>• Kayan Putra Utama Coal</li>
            <li>• PT Karya Borneo Agung</li>
            <li>• PT International Prima Coal</li>
          </ul>
        </div>

        <div style={{"background":"var(--white)","border":"1px solid var(--border)","borderRadius":"10px","padding":"1rem 1.2rem"}}>
          <div style={{"fontSize":".7rem","color":"var(--accent)","fontWeight":"700","letterSpacing":".1em","textTransform":"uppercase","marginBottom":".4rem"}}><Factory className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Manufaktur &amp; F&amp;B</div>
          <ul style={{"listStyle":"none","padding":"0","margin":"0","fontSize":".85rem","lineHeight":"1.8","color":"var(--text)"}}>
            <li>• PT Ferron Pharmaceutical</li>
            <li>• PT Federal Food Intranusa</li>
            <li>• PT SASA Inti</li>
            <li>• PT Multi Arthamas Glass</li>
            <li>• PT Sanwa Engineering Indonesia</li>
            <li>• PT Indaco Coatings</li>
            <li>• PT Timuraya Tunggal</li>
            <li>• PT Excellence Qualities Yarn</li>
            <li>• PT Cemindo Gemilang</li>
            <li>• PT Industri Susu Alam Murni</li>
            <li>• PT Olderon (Saos &amp; Kecap)</li>
            <li>• PT Nyonya Meneer</li>
            <li>• PT Reckit (Soap)</li>
            <li>• PT Bethafarmacon</li>
          </ul>
        </div>

        <div style={{"background":"var(--white)","border":"1px solid var(--border)","borderRadius":"10px","padding":"1rem 1.2rem"}}>
          <div style={{"fontSize":".7rem","color":"var(--accent)","fontWeight":"700","letterSpacing":".1em","textTransform":"uppercase","marginBottom":".4rem"}}><Ship className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Maritim &amp; Shipping</div>
          <ul style={{"listStyle":"none","padding":"0","margin":"0","fontSize":".85rem","lineHeight":"1.8","color":"var(--text)"}}>
            <li>• PT Wintermar</li>
            <li>• PT Win Offshore</li>
            <li>• PT Solusi Pelayaran Nusantara</li>
            <li>• PT Eka Nusantara Line</li>
            <li>• PT Berkat Samudera Bersama</li>
            <li>• PT Sukses Maritime Line</li>
            <li>• PT Anugerah Maritim Indonesia Raya</li>
            <li>• PT Indoliziz Marine</li>
            <li>• PT Mitra Swire CTM</li>
            <li>• PT Trijaya Global Marindo</li>
            <li>• PT Noahtu Shipyard</li>
            <li>• PT Berlian Keruktama Indonesia</li>
            <li>• PT Petrocean Indo Pasific</li>
          </ul>
        </div>

      </div>

      <div style={{"background":"var(--ice)","borderLeft":"4px solid var(--blue)","padding":"1.2rem 1.5rem","marginTop":"2rem","borderRadius":"0 8px 8px 0"}}>
        <p style={{"margin":"0","fontSize":".92rem","lineHeight":"1.7"}}><strong>Tidak menemukan klien Anda?</strong> Banyak proyek tidak ditampilkan publik karena perjanjian kerahasiaan dengan klien. <Link style={{"color":"var(--blue)","fontWeight":"700"}} to="/kontak">Hubungi tim TSM</Link> untuk melihat referensi proyek yang lebih relevan dengan industri Anda.</p>
      </div>
    </div>

  </div>
</section>
<div className="lb" id="lb" >
  <div className="lb-inner">
    <span className="lb-close" >✕</span>
    <img id="lbImg" src="/images/placeholder.webp" alt="" loading="lazy" decoding="async" />
    <div className="lb-caption" id="lbCap"></div>
  </div>
</div>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Proyek Anda Berikutnya?</h2>
    <p>Tim TSM siap menangani proyek water treatment skala apapun — dari perencanaan hingga serah terima.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak">📞 Diskusi Proyek</Link>
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/layanan"><Wrench className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Lihat Layanan Kami</Link>
    </div>
  </div>
</div>

    </>
  );
};

export default Portofolio;
