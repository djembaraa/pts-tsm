import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Calculator } from 'lucide-react';


const PortoAmdkPabrik = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/portofolio">Portofolio</Link> › Industri AMDK &amp; F&amp;B</div>
    <h1>Portofolio AMDK &amp; F&amp;B — Sistem RO untuk 25+ Brand di Indonesia</h1>
    <p>TSM telah menjadi pemasok sistem RO untuk industri Air Minum Dalam Kemasan dan minuman dari Aceh sampai Papua. Mulai dari brand nasional seperti Sinar Sosro hingga AMDK lokal yang melayani komunitas daerah.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>

        <div className="cs-hero">
          <img src="images/porto-sosro-1.jpg" alt="RO untuk pabrik AMDK" />
          <div className="cs-overlay">
            <h2>25+ Brand AMDK Mempercayakan Pengolahan Air ke TSM</h2>
          </div>
        </div>

        <div className="cs-stats">
          <div className="cs-stat"><div className="num">25+</div><div className="lbl">Brand AMDK Klien</div></div>
          <div className="cs-stat"><div className="num">20</div><div className="lbl">Provinsi Sebaran</div></div>
          <div className="cs-stat"><div className="num">15+</div><div className="lbl">Tahun Pengalaman AMDK</div></div>
          <div className="cs-stat"><div className="num">SNI</div><div className="lbl">Compliance Ready</div></div>
        </div>

        <h2>Tentang Industri AMDK &amp; Beverages</h2>
        <p>Industri Air Minum Dalam Kemasan (AMDK) di Indonesia memiliki regulasi yang ketat — air produksi harus memenuhi <strong>SNI 3553:2015</strong> untuk air minum dalam kemasan, BPOM untuk produk akhir, dan halal untuk pasar mayoritas. Sistem RO yang baik adalah jantung dari operasi pabrik AMDK, menentukan konsistensi rasa, kemurnian air, dan biaya produksi.</p>
        <p>TSM menyediakan sistem RO terintegrasi mulai dari pre-treatment (multimedia, softener), reverse osmosis dengan kapasitas 1-30 m³/jam, ozonisasi untuk desinfeksi, hingga UV sterilizer untuk titik pengisian.</p>

        <div className="featured-card">
          <h4>📌 Studi Kasus Lengkap: PT Sinar Sosro &amp; Wine Bali</h4>
          <p>Untuk studi kasus mendalam tentang BWRO 30.000 LPH untuk Sinar Sosro Bekasi, baca <Link style={{"color":"#7dd3fc","fontWeight":"700","textDecoration":"underline"}} to="/portofolio/sosro">studi kasus Sosro →</Link>. Untuk RO food-grade pabrik wine di Bali, baca <Link style={{"color":"#7dd3fc","fontWeight":"700","textDecoration":"underline"}} to="/portofolio/wine-bali">studi kasus Wine Bali →</Link></p>
        </div>

        <h2>Brand AMDK yang Pernah Dilayani TSM</h2>
        <div className="brand-grid">
          <div className="brand-card"><div className="bn">SOSRO</div><div className="bl">Bekasi</div></div>
          <div className="brand-card"><div className="bn">SEJUK</div><div className="bl">Sukabumi</div></div>
          <div className="brand-card"><div className="bn">OHAYO</div><div className="bl">Bogor</div></div>
          <div className="brand-card"><div className="bn">SMS</div><div className="bl">Padang</div></div>
          <div className="brand-card"><div className="bn">ARBES</div><div className="bl">Jambi</div></div>
          <div className="brand-card"><div className="bn">AQUARNAS</div><div className="bl">Pontianak</div></div>
          <div className="brand-card"><div className="bn">VENQUA 99</div><div className="bl">Riau</div></div>
          <div className="brand-card"><div className="bn">AKA 36</div><div className="bl">Sumbar</div></div>
          <div className="brand-card"><div className="bn">SPRING</div><div className="bl">Balikpapan</div></div>
          <div className="brand-card"><div className="bn">YES</div><div className="bl">Makassar</div></div>
          <div className="brand-card"><div className="bn">LIGA</div><div className="bl">Sumut</div></div>
          <div className="brand-card"><div className="bn">AMIRA</div><div className="bl">Palembang</div></div>
          <div className="brand-card"><div className="bn">AIRBOS</div><div className="bl">Riau</div></div>
          <div className="brand-card"><div className="bn">KADOS</div><div className="bl">Nias, Sumut</div></div>
          <div className="brand-card"><div className="bn">AIRO</div><div className="bl">Timika, Papua</div></div>
          <div className="brand-card"><div className="bn">JAVA</div><div className="bl">Ungaran, Jateng</div></div>
          <div className="brand-card"><div className="bn">JR 88</div><div className="bl">Tembilahan</div></div>
          <div className="brand-card"><div className="bn">ANUGRAH TIRTA</div><div className="bl">Pangkalan Bun</div></div>
          <div className="brand-card"><div className="bn">WAYRAM</div><div className="bl">Lampung</div></div>
          <div className="brand-card"><div className="bn">MUTISQUA</div><div className="bl">NTT</div></div>
          <div className="brand-card"><div className="bn">HEXUA</div><div className="bl">Subang</div></div>
          <div className="brand-card"><div className="bn">ISAM</div><div className="bl">Bandung</div></div>
          <div className="brand-card"><div className="bn">GOVINDA</div><div className="bl">Bali</div></div>
        </div>

        <h2>Daftar Lengkap Proyek AMDK</h2>

        <div className="cat-section">
          <h3><Factory className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Proyek AMDK Skala Besar &amp; Brand Nasional</h3>
          <table className="proj-table">
            <thead>
              <tr><th style={{"width":"14%"}}>Tahun</th><th>Sistem</th><th>Klien &amp; Lokasi</th></tr>
            </thead>
            <tbody>
              <tr><td className="yr">Nov 2023</td><td>BWRO Cap. 30.000 LPH</td><td>PT Sinar Sosro — Bekasi — <Link to="/portofolio/sosro">studi kasus</Link></td></tr>
              <tr><td className="yr">Karawang</td><td>RO Cap. 10.000 LPH</td><td>PT Heinz ABC Karawang</td></tr>
              <tr><td className="yr">2011</td><td>RO AMDK 6.000 LPH</td><td>PT Industri Susu Alam Murni — Bandung</td></tr>
              <tr><td className="yr">Feb 2014</td><td>RO Cap. 7.500 LPH</td><td>PT Amanah Tirta Abadi — Sleman, Yogyakarta</td></tr>
              <tr><td className="yr">Feb 2021</td><td>RO Cap. 9 m³/jam</td><td>PT Merak Jaya Abadi — Solo, Jateng</td></tr>
              <tr><td className="yr">Nov 2022</td><td>RO Cap. 5.000 LPH</td><td>PT Yanuar Perkasa Samudera — Makassar</td></tr>
              <tr><td className="yr">Nov 2016</td><td>RO AMDK Cap. 7.900 LPH</td><td>Freedy Gony — Manado</td></tr>
              <tr><td className="yr">Jun 2015</td><td>RO Cap. 12 m³/jam (2 unit)</td><td>CV Sinar Abadi — Gorontalo</td></tr>
              <tr><td className="yr">Jun 2012</td><td>AMDK RO Cap. 5 m³/jam</td><td>PT Sinar Abadi Spark Plus — Palu, NTT</td></tr>
              <tr><td className="yr">2012</td><td>AMDK RO Cap. 5 m³/jam</td><td>PT Indaco Coatings — Surakarta</td></tr>
              <tr><td className="yr">Jan 2023</td><td>RO Cap. 5 m³/jam</td><td>Bp. H. Darmin — Lombok</td></tr>
              <tr><td className="yr">Mei 2015</td><td>RO Cap. 1.500 LPH</td><td>PT Mesona Sun Abadi — Bogor</td></tr>
              <tr><td className="yr">Apr 2016</td><td>AMDK 3.000 L/jam</td><td>Bp. Haryanto — Lampung</td></tr>
              <tr><td className="yr">Apr 2016</td><td>AMDK Ozon &amp; UV 3.500 LPH</td><td>Ibu Iswidiyarto — Jatiasih, Bekasi</td></tr>
            </tbody>
          </table>
        </div>

        <div className="cat-section">
          <h3>🍷 Industri Beverages (Wine, Minuman Lainnya)</h3>
          <table className="proj-table">
            <thead>
              <tr><th style={{"width":"14%"}}>Tahun</th><th>Sistem</th><th>Klien &amp; Lokasi</th></tr>
            </thead>
            <tbody>
              <tr><td className="yr">Jan 2021</td><td>RO Cap. 5 m³/jam</td><td>PT Karya Bali Indah — Pabrik Wine Gianyar — <Link to="/portofolio/wine-bali">studi kasus</Link></td></tr>
              <tr><td className="yr">Jan 2021</td><td>RO Cap. 2,5 m³/jam</td><td>PT Balindo Mitra Perkasa — Pabrik Wine Singaraja</td></tr>
              <tr><td className="yr">Des 2019</td><td>RO Cap. 1.100 L/jam</td><td>PT Balindo Mitra Perkasa — Buleleng Bali</td></tr>
              <tr><td className="yr">2012</td><td>RO Cap. 500 LPH</td><td>PT Aneka Pangan — Talaga Sampireun, Bintaro</td></tr>
            </tbody>
          </table>
        </div>

        <div className="cat-section">
          <h3><Factory className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Brand AMDK Daerah (2010-2017)</h3>
          <table className="proj-table">
            <thead>
              <tr><th style={{"width":"14%"}}>Brand</th><th>Klien</th><th>Lokasi</th></tr>
            </thead>
            <tbody>
              <tr><td className="yr">SEJUK</td><td>PT Cisalada Sejuk Sentosa</td><td>Cicurug, Sukabumi</td></tr>
              <tr><td className="yr">OHAYO</td><td>CV Centowin Multi Trading</td><td>Bogor, Jawa Barat</td></tr>
              <tr><td className="yr">SMS</td><td>PT Agri Mitra Utama Persada</td><td>Padang, Sumbar</td></tr>
              <tr><td className="yr">ARBES</td><td>PT Arbes Guntung Prakasa</td><td>Muara Bungo, Jambi</td></tr>
              <tr><td className="yr">AQUARNAS</td><td>PT Aquarnas</td><td>Pontianak, Kalbar</td></tr>
              <tr><td className="yr">VENQUA 99</td><td>CV Putra Kualo</td><td>Pangkalan Kerinci, Riau</td></tr>
              <tr><td className="yr">AKA 36</td><td>PT Roski Riski Pratama</td><td>Padang, Sumbar</td></tr>
              <tr><td className="yr">SPRING</td><td>PT Spring Adi Pradana</td><td>Balikpapan, Kaltim</td></tr>
              <tr><td className="yr">YES</td><td>CV Tunas Pratama</td><td>Makassar, Sulsel</td></tr>
              <tr><td className="yr">LIGA</td><td>—</td><td>Berastagi, Sumut</td></tr>
              <tr><td className="yr">AMIRA</td><td>PT Jarumas Unggul</td><td>Palembang, Sumsel</td></tr>
              <tr><td className="yr">AIRBOS</td><td>CV Imanuel</td><td>Pekanbaru, Riau</td></tr>
              <tr><td className="yr">KADOS</td><td>PT Kadoniasindo</td><td>Nias, Sumut</td></tr>
              <tr><td className="yr">AIRO</td><td>CV Nemangkawi Mulia</td><td>Timika, Papua</td></tr>
              <tr><td className="yr">JAVA</td><td>PT JAVA</td><td>Rawa Pening Ungaran, Jateng</td></tr>
              <tr><td className="yr">JR 88</td><td>PT JR.88</td><td>Tembilahan, Riau</td></tr>
              <tr><td className="yr">ANUGRAH TIRTA</td><td>CV Anugrah Tirta</td><td>Pangkalan Bun, Kalteng</td></tr>
              <tr><td className="yr">WAYRAM</td><td>PEMDA Lampung</td><td>Tulang Bawang Menggala, Lampung</td></tr>
              <tr><td className="yr">MUTISQUA</td><td>PT Timor Mutisqua</td><td>Gunung Mutis-Eban Kepah, NTT</td></tr>
              <tr><td className="yr">HEXUA</td><td>PT Puspita Agro Tirta</td><td>Subang, Jawa Barat</td></tr>
              <tr><td className="yr">GOVINDA</td><td>PT Govinda Tirta</td><td>Desa Nanglan, Bali</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Komponen Standar Sistem RO untuk AMDK</h2>
        <p>TSM menyediakan sistem terintegrasi yang umumnya terdiri dari tahap-tahap berikut: <strong>(1)</strong> Pre-treatment dengan multimedia filter dan softener, <strong>(2)</strong> Carbon filter untuk reduksi klorin dan bau, <strong>(3)</strong> Reverse Osmosis dengan membran Dow/Toray (BW4040 atau LE4040), <strong>(4)</strong> Storage tank dengan UV sterilizer, <strong>(5)</strong> Ozonisasi untuk produk akhir, dan <strong>(6)</strong> Mesin filling AMDK terintegrasi.</p>

        <h2>Mengapa TSM Cocok untuk Industri AMDK</h2>
        <ul>
          <li><strong>Pengalaman Multi-Brand</strong> — TSM telah membantu start-up AMDK mendirikan pabrik dari nol, dengan target SNI dan BPOM yang harus dipenuhi sejak awal.</li>
          <li><strong>Skalabilitas</strong> — sistem dapat dirancang dari 1 m³/jam (skala UMKM) hingga 30 m³/jam (skala pabrik nasional).</li>
          <li><strong>Food-Grade Material</strong> — semua komponen yang kontak dengan produk menggunakan material food-grade SS-304/SS-316L sesuai standar.</li>
          <li><strong>Konsultasi Teknis</strong> — TSM membantu pemilihan teknologi sesuai sumber air baku (sumur, mata air, PDAM) dan target produk.</li>
          <li><strong>One-Stop Service</strong> — RO + ozonisasi + UV + filling + after-sales dari satu vendor.</li>
        </ul>

      </article>

      <aside className="art-sticky">
        <div style={{"background":"var(--ice)","border":"1px solid var(--border)","borderRadius":"10px","padding":"1.5rem","marginBottom":"1rem"}}>
          <h4 style={{"fontFamily":"'Barlow Condensed',sans-serif","fontSize":"1.2rem","color":"var(--navy)","marginBottom":".8rem"}}>Membuka Pabrik AMDK?</h4>
          <p style={{"fontSize":".85rem","color":"var(--muted)","lineHeight":"1.6","marginBottom":"1rem"}}>TSM membantu mulai dari analisa air baku, desain sistem RO, hingga komisioning pabrik AMDK Anda.</p>
          <Link style={{"display":"block","textAlign":"center","padding":".7rem","background":"var(--blue)","color":"#fff","borderRadius":"6px","fontWeight":"700","textDecoration":"none","fontSize":".85rem"}} to="/kontak">📞 Konsultasi AMDK</Link>
        </div>

        <div style={{"background":"var(--white)","border":"1px solid var(--border)","borderRadius":"10px","padding":"1.5rem"}}>
          <h4 style={{"fontFamily":"'Barlow Condensed',sans-serif","fontSize":"1.1rem","color":"var(--navy)","marginBottom":".8rem"}}>Halaman Terkait</h4>
          <ul style={{"listStyle":"none","padding":"0","margin":"0","fontSize":".85rem"}}>
            <li style={{"padding":".5rem 0","borderBottom":"1px solid var(--border)"}}><Link style={{"color":"var(--text)","textDecoration":"none"}} to="/portofolio/sosro">→ Studi Kasus Sosro</Link></li>
            <li style={{"padding":".5rem 0","borderBottom":"1px solid var(--border)"}}><Link style={{"color":"var(--text)","textDecoration":"none"}} to="/portofolio/wine-bali">→ Studi Kasus Wine Bali</Link></li>
            <li style={{"padding":".5rem 0","borderBottom":"1px solid var(--border)"}}><Link style={{"color":"var(--text)","textDecoration":"none"}} to="/produk/amdk">→ Produk RO AMDK</Link></li>
            <li style={{"padding":".5rem 0","borderBottom":"1px solid var(--border)"}}><Link style={{"color":"var(--text)","textDecoration":"none"}} to="/produk/ozon">→ Produk Ozon</Link></li>
            <li style={{"padding":".5rem 0"}}><Link style={{"color":"var(--text)","textDecoration":"none"}} to="/produk/uv">→ Produk UV</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Mulai atau Upgrade Pabrik AMDK Anda</h2>
    <p>Tim TSM siap membantu mendesain sistem RO sesuai kapasitas, standar SNI/BPOM, dan budget Anda.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak">📞 Konsultasi</Link>
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/kalkulator"><Calculator className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Kalkulator RO</Link>
    </div>
  </div>
</div>

    </>
  );
};

export default PortoAmdkPabrik;
