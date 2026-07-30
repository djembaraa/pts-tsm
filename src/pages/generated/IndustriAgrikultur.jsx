import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


const IndustriAgrikultur = () => {
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
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/industri">Industri</Link> › Agrikultur &amp; Forestry</div>
    <h1>Water Treatment untuk Hidroponik, Hatchery, &amp; Perkebunan</h1>
    <p>Sistem RO &amp; SWRO untuk hidroponik komersial, hatchery udang/perikanan, perkebunan, dan operasi reforestation skala besar di Indonesia.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>
        <div className="prose max-w-none text-text">


          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sektor agrikultur modern di Indonesia — dari hidroponik komersial, perkebunan kelapa sawit, hatchery udang, hingga peternakan modern — semakin sadar pentingnya kualitas air sebagai input produksi. Air dengan TDS tinggi mengganggu nutrisi hidroponik, hardness berlebih merusak sistem irigasi tetes, parameter fisika-kimia yang tidak ideal mengurangi survival rate hatchery, dan bakteri di air minum ternak menurunkan produktivitas.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>PT Tirta Sumber Makmur</strong> menyediakan solusi water treatment untuk agrikultur skala komersial di seluruh Indonesia — dari sistem RO compact untuk greenhouse hidroponik 1 hektar hingga sistem skala besar untuk perkebunan dan operasi reforestation seluas ratusan ribu hektar.</p>

          <h2 id="hidroponik" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Water Treatment untuk Hidroponik Komersial</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Hidroponik mengandalkan kontrol presisi nutrisi dalam larutan air. Air baku dengan TDS tinggi (sumur dengan kandungan mineral atau air PDAM dengan klorin) langsung mempengaruhi formulasi nutrisi dan dapat menyebabkan defisiensi atau toxicity. Standar yang umum dipakai untuk hidroponik komersial:</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>TDS air baku</strong> &lt;100 ppm (idealnya &lt;30 ppm dengan RO) sehingga nutrisi yang ditambahkan sepenuhnya terkontrol</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sodium (Na)</strong> &lt;25 ppm — kelebihan sodium mengganggu uptake potassium</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Chloride (Cl)</strong> &lt;75 ppm — toxic untuk tanaman tertentu (tomat, strawberry, lettuce premium)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Boron (B)</strong> &lt;0,5 ppm — toxic pada level yang lebih tinggi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Free chlorine</strong> 0 ppm — racun untuk akar dan beneficial microbes</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>EC (electrical conductivity)</strong> baseline 0,1–0,3 mS/cm untuk dapat dikontrol presisi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>pH</strong> 5,5–6,5 (dapat di-adjust di nutrient mixing tank, tapi air baku idealnya stable)</li>
          </ul>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM menyediakan sistem RO compact 1–10 m³/jam untuk greenhouse hidroponik komersial, dengan storage tank dan distribusi otomatis ke nutrient mixing system.</p>

          <h2 id="hatchery" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Sistem RO untuk Hatchery Udang &amp; Perikanan</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Hatchery udang dan ikan komersial sangat sensitif terhadap parameter air. Air laut yang digunakan sebagai sumber harus di-pra-treatment untuk menghilangkan padatan, senyawa organik, dan patogen. Beberapa hatchery juga menggunakan SWRO untuk menghasilkan air tawar untuk fasilitas dan staff:</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pre-treatment air laut</strong> — sand filter + UV untuk hatchery feed water</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>SWRO compact</strong> — untuk air tawar staff &amp; cleaning</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pengaturan salinitas</strong> — blending untuk fase larva yang membutuhkan salinitas spesifik</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Disinfeksi UV/ozon</strong> — untuk preventif disease outbreak</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sistem RAS (Recirculating Aquaculture System)</strong> — untuk operasi inland dengan keterbatasan air</li>
          </ul>

          <h2 id="perkebunan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Perkebunan &amp; Reforestation Skala Besar</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM telah berpengalaman menangani sistem WTP &amp; BWRO multi-site untuk operasi reforestation dan perkebunan kelapa sawit di Sumatra dan Kalimantan. Tantangan unik:</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Lokasi remote</strong> — instalasi di area tanpa akses kota, butuh logistik khusus</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Air baku challenging</strong> — sumur dengan iron, manganese, atau gambut tinggi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Multi-site coordination</strong> — operasi tersebar di 20+ lokasi dalam satu kawasan</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Operator availability terbatas</strong> — sistem harus reliable dengan minimal intervention</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Power constraint</strong> — beberapa lokasi mengandalkan genset, sistem harus energy-efficient</li>
          </ul>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Lihat studi kasus <Link to="/portofolio/sinarmas-forestry">Sinarmas Forestry</Link> untuk pendekatan TSM dalam multi-site WTP &amp; BWRO operations.</p>

          <h2 id="solusi-tsm" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Paket Solusi Agrikultur</h2>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/produk/ro-industri">RO Industri</Link></strong> — kapasitas 1–50 m³/jam untuk greenhouse, hatchery, atau farming facility</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/produk/desalinasi">SWRO Marine-Grade</Link></strong> — untuk hatchery yang menggunakan air laut atau lokasi pesisir</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/produk/uf">Ultrafiltrasi</Link></strong> — untuk air dari sungai atau permukaan dengan turbidity tinggi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/produk/kimia">Chemical Dosing</Link></strong> — untuk kontrol pH, antiscalant, dan disinfeksi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>BWRO compact mobile</strong> — untuk lokasi sementara atau operasi yang berpindah</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sistem terintegrasi dengan fertigation</strong> — kombinasi water treatment + nutrient mixing</li>
          </ul>

          <h2 id="referensi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Referensi Agrikultur &amp; Forestry</h2>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><Link to="/portofolio/sinarmas-forestry"><strong>Sinarmas Forestry</strong></Link> — multi-site WTP &amp; BWRO untuk operasi reforestation di Sumatra</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Hatchery udang vannamei</strong> — Banyuwangi, Lampung, Sulawesi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Greenhouse hidroponik komersial</strong> — multiple lokasi Bogor, Bandung, Malang</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pabrik penggilingan tepung tapioka</strong> — process water dan limbah organik</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Peternakan ayam petelur skala besar</strong> — drinking water dengan softener</li>
          </ul>


          <h2 id="faq" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

<h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Mengapa hidroponik komersial perlu sistem RO?</h3>
<p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Air baku dengan TDS &gt;100 ppm mengganggu kontrol nutrisi yang menjadi inti praktik hidroponik. Mineral pre-existing di air baku berinteraksi dengan nutrient yang ditambahkan, menyebabkan presipitasi nutrisi dan deficiency tertentu pada tanaman. RO memberikan air baseline TDS &lt;30 ppm sehingga formulasi nutrisi dapat 100% dikontrol. Selain itu, RO menghilangkan klorin yang racun untuk akar dan beneficial microbes.</p>
<h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa kapasitas RO untuk greenhouse hidroponik 1 hektar?</h3>
<p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Konsumsi air hidroponik bervariasi: lettuce/sayuran daun 1,5–2,5 m³/hari per 1.000 m² (10–25 m³/hari per hektar), tomat &amp; cabai 3–5 m³/hari per 1.000 m² (30–50 m³/hari per hektar), strawberry NFT 2–4 m³/hari per 1.000 m². Untuk greenhouse 1 hektar tomat: RO 5 m³/jam dengan storage 30 m³ memberikan margin yang cukup untuk peak demand.</p>
<h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah air hatchery udang harus di-RO?</h3>
<p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tidak harus full RO untuk semua kebutuhan, tapi untuk fase larva yang sensitif (Z, M stages) air laut harus di-pre-treatment dengan UV dan sand filter, plus blending dengan air tawar berkualitas untuk salinity control. SWRO digunakan untuk: (1) air tawar untuk staff &amp; cleaning, (2) air untuk dilution salinity di fase tertentu, (3) preventif disease pada hatchery dengan history wabah. Hatchery dengan konsumsi air tawar &gt;10 m³/hari biasanya economically optimal dengan SWRO.</p>
<h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Bagaimana TSM menangani lokasi reforestation/perkebunan remote?</h3>
<p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pendekatan untuk site remote: (1) Pre-fabrication maksimal di workshop Bekasi sehingga pekerjaan on-site cepat, (2) Sistem skid-mounted yang dapat ditransportasi dengan truk biasa atau lori, (3) Instrumentasi simpel dengan parameter monitoring yang dapat dibaca operator dengan training basic, (4) Spare part minimal yang di-stock di lokasi, (5) Kontrak perawatan dengan kunjungan terjadwal sesuai logistik akses ke lokasi. Lihat case study Sinarmas Forestry untuk pendekatan multi-site.</p>
<h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa biaya sistem water treatment untuk perkebunan skala besar?</h3>
<p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sangat bervariasi tergantung jumlah lokasi dan kapasitas per lokasi. Indikasi: WTP per lokasi 5–15 m³/jam dengan iron filter + softener + RO Rp 280–650 juta. Untuk operasi 20 lokasi: total Rp 5,6–13 miliar dengan economies of scale 15–25%. Plus sistem distribusi internal di tiap lokasi (pipa, tangki) yang biasanya dilakukan kontraktor lokal.</p>

          <div style={{"marginTop":"2rem","padding":"2rem","background":"var(--ice)","borderRadius":"12px","borderLeft":"4px solid var(--accent)"}}>
            <h3 style={{"marginBottom":".75rem","color":"var(--navy)"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Konsultasi Agri</h3>
            <p style={{"marginBottom":"1.25rem","color":"var(--muted)","fontSize":".92rem"}} className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tim TSM siap membantu menyusun proposal teknis &amp; komersial sesuai kebutuhan Anda. Site visit gratis untuk lokasi Jabodetabek.</p>
            <Link style={{"display":"inline-block","padding":".85rem 2rem","background":"var(--blue)","color":"#fff","borderRadius":"8px","fontWeight":"700","fontSize":".96rem","textDecoration":"none"}} to="/kontak">🌱 Konsultasi Agri →</Link>
          </div>

        </div>
      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#hidroponik">Hidroponik Komersial</Link></li>
            <li><Link href="#hatchery">Hatchery Udang/Perikanan</Link></li>
            <li><Link href="#perkebunan">Perkebunan &amp; Reforestation</Link></li>
            <li><Link href="#solusi-tsm">Solusi TSM</Link></li>
            <li><Link href="#referensi">Referensi</Link></li>
            <li><Link href="#faq">FAQ</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Industri Lain</h4>
          <ul className="flex flex-col">
            <li><Link to="/industri/manufaktur">→ Manufaktur F&amp;B</Link></li>
            <li><Link to="/industri/pltu">→ PLTU</Link></li>
            <li><Link to="/industri/hotel">→ Hotel/Resort</Link></li>
            <li><Link to="/industri/maritim">→ Maritim Marine</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Produk Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/produk/ro-industri">→ RO Industri</Link></li>
            <li><Link to="/produk/desalinasi">→ SWRO Desalinasi</Link></li>
            <li><Link to="/produk/uf">→ Ultrafiltrasi</Link></li>
            <li><Link to="/produk/ro-mobile">→ RO Mobile/Skid</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Studi Kasus</h4>
          <ul className="flex flex-col">
            <li><Link to="/portofolio/sinarmas-forestry">→ Sinarmas Forestry</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>

    </>
  );
};

export default IndustriAgrikultur;
