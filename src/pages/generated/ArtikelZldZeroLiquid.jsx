import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Droplet } from 'lucide-react';
import Button from '../../components/ui/Button';

const ArtikelZldZeroLiquid = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.art-layout{display:grid;grid-template-columns:1fr 290px;gap:3rem;align-items:start}
.art-sticky{position:sticky;top:88px}
.art-hero-img{height:320px;background:linear-gradient(135deg,#0a2240,#0d5fa8);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:8rem;margin-bottom:2rem}
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
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/artikel">Artikel</Link> › Teknologi</div>
    <h1>Zero Liquid Discharge (ZLD):<br />Masa Depan Pengelolaan Air Limbah Industri</h1>
    <p>Konsep ZLD mengharuskan industri mendaur ulang seluruh air limbahnya — tanpa ada buangan cair ke lingkungan. Sebuah paradigma baru yang semakin wajib dipatuhi.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">

      <article>
        <div className="art-hero-img">♻️</div>

        <div className="art-meta-bar">
          <span className="am-tag">Teknologi</span>
          <span className="am-info">📅 10 Februari 2025</span>
          <span className="am-info">✍️ Tim TSM</span>
          <span className="am-info">⏱ 5 menit baca</span>
          <span className="am-info">👁 510 views</span>
        </div>

        <div className="prose max-w-none text-text">

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tekanan regulasi lingkungan di Indonesia dan dunia semakin meningkat. Banyak sungai sudah melewati batas daya tampung pencemaran, dan pemerintah mulai memperketat izin pembuangan air limbah ke badan air. Dalam situasi ini, konsep <strong>Zero Liquid Discharge (ZLD)</strong> tidak lagi menjadi opsi futuristik — melainkan keharusan yang mendekat.</p>

          <h2 id="definisi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Apa Itu Zero Liquid Discharge?</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">ZLD adalah pendekatan pengelolaan air limbah di mana <strong>seluruh air limbah didaur ulang menjadi air yang dapat digunakan kembali</strong>, dan padatan yang tersisa ditangani secara terpisah. Tidak ada satu tetes pun air limbah yang dibuang ke lingkungan.</p>

          <div className="info-box bg-ice border border-border rounded-[10px] p-[1.2rem_1.5rem] my-[1.75rem]">
            <strong className="block text-[0.7rem] font-bold uppercase tracking-[0.1em] text-accent mb-[0.38rem]">💡 Prinsip Dasar ZLD</strong>
            "Semua air yang masuk ke fasilitas industri akan keluar sebagai: (a) air yang diolah dan digunakan kembali, atau (b) uap air yang diuapkan ke atmosfer. Tidak ada output cair ke badan air."
          </div>

          <h2 id="pendorong" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Faktor Pendorong Adopsi ZLD</h2>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Regulasi ketat</strong> — Pemerintah Indonesia melalui KLHK dan Permen LHK semakin menurunkan baku mutu air limbah industri. Di beberapa daerah, izin buangan bahkan tidak lagi diberikan.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kelangkaan air baku</strong> — Industri di kawasan dengan krisis air (Jawa bagian tengah, kawasan industri padat) semakin sulit mendapatkan sumber air baku.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Tekanan ESG dan investor</strong> — Investor internasional, terutama dari Eropa dan Jepang, mulai mensyaratkan program water stewardship untuk perusahaan yang mereka danai.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Efisiensi ekonomi</strong> — Saat harga air baku meningkat dan denda lingkungan semakin mahal, ZLD menjadi solusi yang juga ekonomis.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Lisensi sosial</strong> — Masyarakat sekitar pabrik semakin vokal menuntut industri tidak mencemari lingkungan.</li>
          </ul>

          <h2 id="tahapan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Tahapan Teknologi Sistem ZLD</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem ZLD yang komplet umumnya terdiri dari rangkaian proses berjenjang:</p>
          <ol className="ml-[1.5rem] my-[1.05rem] list-decimal">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pre-treatment</strong> — Clarifier, DAF (Dissolved Air Flotation), dan biological treatment untuk menghilangkan padatan dan senyawa organik.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Membrane Bioreactor (MBR)</strong> — Kombinasi biological treatment dan ultrafiltrasi dalam satu unit kompak.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Ultrafiltrasi / Microfiltrasi</strong> — Menghilangkan partikel halus dan mikroorganisme sisa.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Reverse Osmosis (RO)</strong> — Tahap utama konsentrasi, menghasilkan permeate berkualitas tinggi untuk reuse dan brine yang lebih pekat.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>High Efficiency RO (HERO)</strong> — RO kedua dengan recovery sangat tinggi, biasanya 85–95%.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Brine Concentrator / Evaporator</strong> — Mengurangi volume brine hingga 90% melalui penguapan.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Crystallizer</strong> — Mengubah brine sisa menjadi padatan kering yang dapat dikelola sebagai limbah padat.</li>
          </ol>

          <h2 id="industri" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Industri yang Menerapkan ZLD</h2>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Tekstil &amp; pewarnaan</strong> — Salah satu industri paling pencemar yang mulai wajib ZLD di banyak negara.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pembangkit listrik (PLTU)</strong> — Cooling tower blowdown dan FGD wastewater ideal untuk ZLD.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kimia &amp; petrokimia</strong> — Air proses dengan kandungan spesifik yang tidak bisa dibuang.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pertambangan</strong> — Air asam tambang (AMD) dengan beban logam berat tinggi.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Farmasi</strong> — Air limbah dengan residu API (Active Pharmaceutical Ingredient).</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pulp &amp; kertas</strong> — Air limbah dengan beban COD tinggi.</li>
          </ul>

          <h2 id="tantangan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Tantangan Implementasi ZLD</h2>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Capex tinggi</strong> — Investasi awal bisa 3–5 kali lebih besar dari sistem pengolahan konvensional.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Opex signifikan</strong> — Evaporator dan crystallizer membutuhkan energi panas besar.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kompleksitas operasi</strong> — Membutuhkan operator terlatih dan sistem kontrol canggih.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Manajemen solid waste</strong> — Padatan hasil crystallizer harus dikelola sesuai regulasi limbah B3.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Variabilitas karakter limbah</strong> — Sistem harus dirancang untuk menangani fluktuasi kualitas influent.</li>
          </ul>

          <h2 id="pendekatan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pendekatan TSM untuk ZLD</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pendekatan TSM dalam menerapkan ZLD di fasilitas klien selalu bertahap, tidak sekaligus:</p>
          <ol className="ml-[1.5rem] my-[1.05rem] list-decimal">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Water audit</strong> untuk memetakan seluruh aliran air masuk dan keluar fasilitas.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Optimasi sumber</strong> — mengurangi konsumsi air baku melalui praktik produksi yang efisien.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Recycle &amp; reuse bertingkat</strong> — menggunakan air olahan untuk aplikasi yang kurang kritis.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Konsentrasi dengan membran</strong> (RO + HERO) hingga mencapai 95–98% reuse.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>ZLD final stage</strong> hanya jika ekonomis dan regulasi mengharuskan.</li>
          </ol>

          <blockquote className="border-l-4 border-accent p-[0.78rem_1.4rem] bg-ice rounded-r-md my-[1.5rem] italic text-muted">
            "ZLD bukan sekadar teknologi — melainkan filosofi pengelolaan air yang holistik. Industri yang mengadopsi ZLD lebih dini akan memiliki keunggulan kompetitif saat regulasi semakin ketat."<br />
            <strong>— Tim Sustainability PT Tirta Sumber Makmur</strong>
          </blockquote>

          <h2 id="konsultasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Tertarik dengan Solusi ZLD?</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM menawarkan konsultasi komprehensif untuk menuju ZLD — dari water audit awal, desain sistem bertahap, hingga implementasi penuh. Setiap solusi kami rancang sesuai karakter air limbah dan target yang realistis untuk kondisi fasilitas klien.</p>
        </div>

        
        <div className="prose max-w-none text-text">

          <h2 id="faktor-zld" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Faktor yang Menentukan Kelayakan ZLD untuk Industri Anda</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">ZLD bukan solusi "satu ukuran untuk semua". Apakah ZLD layak secara teknis dan ekonomis untuk fasilitas Anda sangat bergantung pada beberapa faktor kunci. <strong>Water treatment untuk pabrik</strong> yang menuju ZLD membutuhkan analisis mendalam sebelum komitmen investasi besar:</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">1. Karakteristik Air Limbah</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">ZLD paling efektif untuk air limbah dengan kandungan garam tinggi, organik rendah-sedang, dan volume yang dapat diprediksi. Air limbah yang sangat kompleks — mengandung surfaktan, minyak, atau senyawa refrakter dalam konsentrasi tinggi — membutuhkan pre-treatment yang lebih intensif dan mahal sebelum membran RO dapat beroperasi efektif. Analisis komposisi lengkap air limbah eksisting adalah langkah pertama yang tidak bisa dilewati.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">2. Volume dan Variabilitas Limbah</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem ZLD didesain untuk kondisi operasi tertentu. Variasi volume limbah yang besar (misalnya, volume naik 5× saat peak production) membutuhkan sistem dengan fleksibilitas tinggi dan biaya yang lebih tinggi. Industri dengan limbah volume relatif konstan dan konsisten — seperti PLTU, refinery, atau pabrik pupuk — umumnya memiliki kelayakan ZLD yang lebih kuat dibandingkan industri musiman.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">3. Nilai Ekonomis Air Baku</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Semakin mahal dan langka air baku di lokasi Anda, semakin kuat argumen ekonomi untuk ZLD. Di kawasan industri Jawa yang sudah menghadapi tekanan ketersediaan air tanah, harga air baku (baik dari PDAM kawasan maupun sumur dalam) terus naik. ZLD yang memungkinkan reuse 90–98% air secara dramatis mengurangi ketergantungan pada sumber eksternal — dan keterpaparan terhadap kenaikan tarif air di masa depan. Untuk analisis kasus nyata, lihat studi kasus <Link to="/artikel/studi-kasus-ro-tekstil">implementasi sistem RO dan recycle di pabrik tekstil Karawang</Link>.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">4. Regulasi Lingkungan Lokal dan Timeline Penegakan</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kerangka regulasi terus berubah. Permen LHK No. 68 Tahun 2016 tentang baku mutu air limbah domestik sudah diperketat, dan baku mutu industri juga menuju arah yang sama. Memahami timeline penegakan regulasi di sektor dan wilayah Anda akan membantu menentukan kapan investasi ZLD harus dilakukan — lebih baik proaktif dan mendapat keunggulan kompetitif daripada reaktif dan terkejar regulasi.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">5. Skenario Penanganan Padatan</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">ZLD mengkonsentrasi semua kontaminan air limbah menjadi padatan. Padatan ini harus dikelola — apakah sebagai produk bernilai (misalnya, salt recovery dari limbah NaCl pekat), sebagai limbah B3, atau sebagai limbah non-B3 biasa. Analisis komposisi padatan dan opsi pengelolaannya harus menjadi bagian integral dari desain sistem ZLD, bukan afterthought. Lihat produk <Link to="/produk/limbah">sistem pengolahan air limbah dan ZLD</Link> dari TSM untuk opsi teknologi yang tersedia.</p>

          <h2 id="faq-zld" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan tentang ZLD</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa biaya investasi sistem ZLD untuk industri menengah di Indonesia?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Biaya sangat bervariasi tergantung volume, karakteristik limbah, dan tingkat teknologi. Sebagai gambaran: sistem ZLD menengah untuk industri dengan limbah 100–500 m³/hari berkisar <strong>Rp 10–80 miliar</strong>. Biaya operasional tambahan (listrik, kimia, pengelolaan padatan) biasanya 2–5× lebih tinggi dari IPAL konvensional. Namun, ROI dihitung dari penghematan air baku, penghindaran denda lingkungan, dan premium "green certification" dari industri ekspor. Konsultasi dengan tim TSM untuk analisis kelayakan yang lebih akurat sesuai kondisi spesifik pabrik Anda.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah ada pendekatan bertahap menuju ZLD yang tidak membutuhkan investasi besar sekaligus?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ya, dan ini yang kami rekomendasikan untuk sebagian besar industri. <strong>Pendekatan bertahap</strong> dimulai dari optimasi IPAL eksisting dan identifikasi peluang reuse internal, dilanjutkan dengan penambahan modul membran (UF/MBR/RO) secara bertahap, dan baru pada tahap akhir menambahkan teknologi konsentrasi tinggi seperti HERO atau MVC jika diperlukan. Setiap tahap menghasilkan penghematan nyata yang dapat membiayai tahap berikutnya — membuat transisi menuju ZLD lebih terkelola secara finansial.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Industri apa saja yang paling cocok untuk implementasi ZLD di Indonesia saat ini?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Secara umum, industri dengan profil limbah yang cocok untuk ZLD mencakup: industri tekstil dan garmen (volume besar, kandungan warna dan organik), industri makanan dan minuman tertentu (limbah dengan kadar BOD/COD dapat diprediksi), industri kimia dan petrokimia (limbah spesifik dengan nilai recovery), PLTU dan pembangkit listrik (blowdown air pendingin bervolume besar), serta industri farmasi dan kosmetik (standar pembuangan sangat ketat). Untuk industri di sektor manufaktur, lihat juga halaman <Link href="industri.html#manufaktur">solusi water treatment untuk industri manufaktur</Link>.</p>

          <h2 id="kesimpulan-zld" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Kesimpulan &amp; Langkah Selanjutnya</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Zero Liquid Discharge adalah perjalanan, bukan tujuan instan. Industri yang paling sukses mengimplementasikan ZLD adalah mereka yang mulai dengan water audit yang jujur, menetapkan target yang realistis secara bertahap, dan memilih mitra teknologi yang memahami konteks regulasi dan kondisi operasi Indonesia.</p>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM siap mendampingi perjalanan ZLD Anda — dari water audit komprehensif, analisis kelayakan teknis-finansial, hingga desain dan implementasi sistem yang tepat sasaran. Langkah pertama tidak harus besar; yang penting dimulai.</p>
          <div style={{"marginTop":"1.5rem"}}>
            <Link className="btn" style={{"display":"inline-block","padding":".85rem 2rem","background":"var(--blue)","color":"#fff","borderRadius":"8px","fontWeight":"700","fontSize":".96rem"}} to="/kontak">🌱 Konsultasi Solusi ZLD Pabrik Anda →</Link>
          </div>

        </div>
    

        <div className="share-row">
          <span>Bagikan:</span>
          <Link className="sh-btn" style={{"background":"#0a66c2"}} target="_blank" rel="noopener" to="/https://www.linkedin.com/sharing/share/offsite/?url=https%3A%2F%2Fpttsm.co.id%2Fartikel-zld-zero-liquid">LinkedIn</Link>
          <Link className="sh-btn" style={{"background":"#1877f2"}} target="_blank" rel="noopener" to="/https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpttsm.co.id%2Fartikel/zld-zero-liquid">Facebook</Link>
          <Link href="https://wa.me/?text=Artikel%20TSM%3A%20Zero%20Liquid%20Discharge" className="sh-btn" style={{"background":"#25d366"}} target="_blank" rel="noopener noreferrer">WhatsApp</Link>
        </div>

        <div style={{"marginTop":"3rem"}}>
          <h3 style={{"fontFamily":"'Barlow Condensed',sans-serif","fontSize":"1.4rem","fontWeight":"900","color":"var(--navy)","marginBottom":"1rem"}}>Artikel Terkait</h3>
          <div className="related-grid">
            <Link className="rel-card" to="/artikel/ro-prinsip-kerja"><div className="rel-img" style={{"background":"linear-gradient(135deg,#054a6e,#1e90d6)"}}><Droplet className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div><div className="rel-body"><p>Mengenal Teknologi Reverse Osmosis</p><span>28 Mar 2025 · 5 mnt</span></div></Link>
            <Link className="rel-card" to="/artikel/studi-kasus-ro-tekstil"><div className="rel-img" style={{"background":"linear-gradient(135deg,#1a2d42,#0a5c8a)"}}><Factory className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div><div className="rel-body"><p>Studi Kasus: RO 200 m³/hari Pabrik Tekstil</p><span>25 Jan 2025 · 8 mnt</span></div></Link>
          </div>
        </div>
      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#definisi">Apa Itu ZLD?</Link></li>
            <li><Link href="#pendorong">Faktor Pendorong</Link></li>
            <li><Link href="#tahapan">Tahapan Teknologi</Link></li>
            <li><Link href="#industri">Industri yang Menerapkan</Link></li>
            <li><Link href="#tantangan">Tantangan Implementasi</Link></li>
            <li><Link href="#pendekatan">Pendekatan TSM</Link></li>
            <li><Link href="#konsultasi">Butuh Solusi ZLD?</Link></li>
          </ul>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Tentang Penulis</h4>
          <div className="author-box">
            <div className="author-av">TS</div>
            <div>
              <div className="author-av-name">Tim TSM</div>
              <div className="author-av-role">Divisi Sustainability</div>
            </div>
          </div>
          <p style={{"fontSize":".84rem","color":"var(--muted)","lineHeight":"1.65"}}>Tim engineering TSM dengan fokus pada solusi water reuse dan zero liquid discharge untuk industri.</p>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem]" style={{"background":"linear-gradient(145deg,var(--navy),var(--blue))","border":"none"}}>
          <h4 style={{"color":"rgba(255,255,255,.45)","borderColor":"rgba(255,255,255,.15)"}}>Water Audit Gratis</h4>
          <p style={{"fontSize":".86rem","lineHeight":"1.65","marginBottom":"1rem","opacity":".84","color":"#fff"}}>Konsultasikan potensi penerapan ZLD di fasilitas Anda bersama tim kami.</p>
          <Button variant="white" to="/kontak" >📞 Konsultasi Sekarang</Button>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Artikel Lainnya</h4>
          <ul style={{"display":"flex","flexDirection":"column","gap":".65rem"}}>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/ro-prinsip-kerja">→ Mengenal Teknologi Reverse Osmosis</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/air-farmasi-ro-edi">→ Standar Air Farmasi RO + EDI</Link></li>
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
    <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold leading-[1.15] mb-[0.65rem]">Menuju Pengelolaan Air yang Berkelanjutan</h2>
    <p className="text-[0.88rem] opacity-90 leading-[1.75] max-w-[600px] mx-auto mb-8">TSM siap membantu industri Anda menuju Zero Liquid Discharge dengan pendekatan bertahap yang realistis dan ekonomis.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Button variant="white" to="/kontak" >📞 Hubungi Kami</Button>
      <Button variant="outline-white" to="/produk/limbah" >🔍 Lihat Solusi Limbah</Button>
    </div>
  </div>
</div>

    </>
  );
};

export default ArtikelZldZeroLiquid;
