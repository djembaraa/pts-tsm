import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const IndustriMaritim = () => {
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
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/industri">Industri</Link> › Maritim &amp; Offshore</div>
    <h1>SWRO Marine untuk Kapal &amp; Industri Maritim</h1>
    <p>Sistem SWRO desalinasi marine untuk kapal niaga, kapal perang KRI, kapal offshore, dan rig pengeboran. Bersertifikasi BKI dan klasifikasi internasional.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>
        <div className="prose max-w-none text-text">

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Industri maritim adalah salah satu lingkungan operasi paling berat untuk sistem water treatment. Air laut yang sangat korosif, getaran konstan dari mesin kapal, ruang yang sangat terbatas di kamar mesin, fluktuasi tegangan listrik kapal, dan persyaratan keandalan yang ekstrem (kru tidak bisa "memesan air" di tengah laut) — semua ini menjadikan SWRO marine sebagai kategori produk yang sangat berbeda dari SWRO darat.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">PT Tirta Sumber Makmur memiliki pengalaman dua dekade memasok <strong>sistem SWRO marine</strong> untuk berbagai jenis kapal di Indonesia: kapal niaga, kapal pesiar dan ferry, kapal pendukung offshore (OSV, AHTS), rig pengeboran, hingga kapal perang Republik Indonesia (KRI). Setiap proyek menuntut sertifikasi BKI dan dalam banyak kasus juga klasifikasi internasional seperti ABS, DNV, atau Lloyd's Register.</p>

          <h2 id="aplikasi-maritim" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Aplikasi SWRO di Industri Maritim</h2>

          <div className="use-grid">
            <div className="use-card">
              <h4>Kapal Niaga &amp; Tanker</h4>
              <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kapal cargo, container, dan tanker membutuhkan SWRO 2–8 m³/hari untuk drinking water, sanitasi ABK, dan boiler make-up.</p>
            </div>
            <div className="use-card">
              <h4>Kapal Perang KRI</h4>
              <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kapal perang TNI AL membutuhkan SWRO yang ringkas, andal di kondisi misi, dan tahan beban operasi tinggi. Sertifikasi militer.</p>
            </div>
            <div className="use-card">
              <h4>Kapal Penumpang &amp; Ferry</h4>
              <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kapal cruise, ferry penumpang, dan kapal Pelni membutuhkan kapasitas tinggi (20–50 m³/hari) untuk ratusan penumpang.</p>
            </div>
            <div className="use-card">
              <h4>Kapal Offshore (OSV/AHTS)</h4>
              <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kapal pendukung pengeboran lepas pantai membutuhkan SWRO andal untuk operasi panjang di laut tanpa akses port.</p>
            </div>
            <div className="use-card">
              <h4>Rig Pengeboran</h4>
              <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Rig offshore dengan 100–200 personel memerlukan kapasitas besar 30–80 m³/hari, sistem redundan untuk safety.</p>
            </div>
            <div className="use-card">
              <h4>FPSO &amp; Floating Asset</h4>
              <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Floating Production Storage Offloading membutuhkan SWRO marine dengan availability &gt;99% untuk operasi multi-tahun di laut.</p>
            </div>
          </div>

          <h2 id="standar-marine" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Standar &amp; Sertifikasi Marine</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Berbeda dengan SWRO darat, SWRO marine harus memenuhi persyaratan klasifikasi maritim. TSM bekerja dengan badan klasifikasi berikut:</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>BKI (Biro Klasifikasi Indonesia):</strong> Wajib untuk kapal berbendera Indonesia. TSM memiliki track record sertifikasi BKI pada banyak proyek kapal niaga dan kapal TNI AL.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>ABS (American Bureau of Shipping):</strong> Untuk kapal yang beroperasi internasional atau owner internasional.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>DNV (Det Norske Veritas):</strong> Klasifikasi Eropa, umum untuk kapal offshore.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Lloyd's Register:</strong> Klasifikasi tradisional Inggris, banyak digunakan untuk kapal niaga.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>NK (Nippon Kaiji Kyokai):</strong> Klasifikasi Jepang, untuk kapal-kapal yang dibangun di galangan Jepang atau owner Jepang.</li>
          </ul>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sertifikasi mensyaratkan kepatuhan pada pemilihan material (duplex/super duplex stainless steel untuk kontak air laut), desain pressure vessel sesuai code (ASME atau setara), dokumentasi factory acceptance test (FAT), dan witness inspection oleh surveyor klasifikasi.</p>

          <h2 id="bwms-ballast" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Ballast Water Management System (BWMS)</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Selain watermaker SWRO, kapal yang berlayar internasional juga wajib memasang <strong><Link to="/produk/bwms">Ballast Water Management System (BWMS)</Link></strong> sesuai IMO Ballast Water Management Convention 2004 yang berlaku efektif sejak 2017. Sistem BWMS mengolah air ballast dengan kombinasi <strong>hydrocyclone, ultrasonic prefilter, dan UV disinfection</strong> sehingga organisme laut tidak ikut terbawa ke ekosistem pelabuhan tujuan.</p>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM mengintegrasikan BWMS tipe Integrated Mounting (skid pre-assembled) dan Distributed Mounting BSKY100 (komponen terpisah untuk retrofit kapal lama dengan ruang terbatas). Kapasitas standar 100 m³/jam, konsumsi listrik 33,5 kW saat treatment aktif, sepenuhnya chemical-free. Sistem dapat di-class oleh BKI dan compatible dengan IACS member societies. <Link to="/produk/bwms">Lihat spesifikasi lengkap BWMS →</Link></p>

          <h2 id="studi-kasus-maritim" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Studi Kasus Proyek Maritim TSM</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Studi Kasus: KRI Wintermar</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM mengerjakan instalasi SWRO marine untuk KRI dan kapal-kapal milik PT Wintermar Offshore Marine. Detail lengkap tersedia di <Link to="/portofolio/kri">studi kasus RO Air Laut KRI Wintermar</Link>.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Studi Kasus: Armada KRI Sultan Iskandar Muda</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk armada kapal perang KRI Sultan Iskandar Muda, TSM menyediakan SWRO dengan sertifikasi BKI dan dokumentasi militer lengkap. Lihat <Link to="/portofolio/kri-fleet">studi kasus armada KRI Sultan Iskandar Muda</Link> untuk detail teknis dan dokumentasi.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Studi Kasus: Pelindo Multi Terminal</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk fasilitas pelabuhan Pelindo, TSM menyediakan SWRO darat sebagai backup kebutuhan air bersih pelabuhan dan supply ke kapal yang berlabuh. Detail di <Link to="/portofolio/pelindo">studi kasus Pelindo</Link>.</p>

          <h2 id="spesifikasi-marine" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Spesifikasi Teknis SWRO Marine</h2>
          <table className="w-full border-collapse my-[1.5rem] text-[0.9rem]">
            <tbody><tr><th>Parameter</th><th>Spesifikasi Marine</th></tr>
            <tr><td>Kapasitas tipikal</td><td>1 – 80 m³/hari (kapal kecil hingga rig)</td></tr>
            <tr><td>Material kontak air laut</td><td>Duplex SS 2205 / Super Duplex SS 2507</td></tr>
            <tr><td>Frame &amp; skid</td><td>Stainless steel 316L marine grade dengan epoxy coating</td></tr>
            <tr><td>Tekanan operasi</td><td>55 – 70 bar</td></tr>
            <tr><td>Pompa HP</td><td>Cat Pumps / Danfoss APP / Grundfos BMS marine</td></tr>
            <tr><td>Energy Recovery</td><td>Pressure Exchanger (PX) atau Turbocharger</td></tr>
            <tr><td>Konsumsi energi</td><td>3,5 – 4,5 kWh/m³ (dengan ERD)</td></tr>
            <tr><td>Resistance tegangan</td><td>Toleransi ±10% dari nominal listrik kapal (tipikal 380V/440V/690V)</td></tr>
            <tr><td>Vibration test</td><td>IEC 60068-2-6, sesuai persyaratan klasifikasi</td></tr>
            <tr><td>IP Rating</td><td>IP54 minimum, IP65 untuk komponen exposed</td></tr>
            <tr><td>Sertifikasi</td><td>BKI / ABS / DNV / Lloyd's Register / NK (sesuai permintaan)</td></tr>
          </tbody></table>

          <h2 id="layanan-maritim" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Layanan TSM untuk Industri Maritim</h2>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>New Build SWRO:</strong> Desain dan supply SWRO untuk kapal yang sedang dibangun di galangan</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Retrofit:</strong> Penggantian SWRO eksisting yang sudah aging atau bermasalah</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sertifikasi BKI:</strong> Penyiapan dokumentasi dan koordinasi dengan surveyor BKI</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>FAT &amp; Commissioning:</strong> Factory Acceptance Test di workshop TSM Bekasi, lalu commissioning di kapal</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Crew Training:</strong> Training operator dan teknisi kapal dalam Bahasa Indonesia</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/layanan/maintenance">Service Visit:</Link></strong> Kunjungan service ke pelabuhan utama Indonesia</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Spare Parts Supply:</strong> Membran, cartridge, chemical, dan komponen kritis dengan stock di Bekasi</li>
          </ul>

          <h2 id="faq-maritim" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa itu SWRO marine dan apa bedanya dengan SWRO darat?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">SWRO marine dirancang khusus untuk operasi di kapal: tahan getaran konstan, korosi air laut yang sangat agresif, ruang kamar mesin yang sempit, dan listrik kapal yang fluktuatif. Material wajib <strong>duplex atau super duplex stainless steel</strong>, dengan sertifikasi BKI atau klasifikasi internasional seperti ABS, DNV, atau Lloyd's Register. SWRO darat dengan material biasa tidak akan bertahan lama di lingkungan kapal.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah TSM bersertifikat BKI?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ya, sistem SWRO TSM telah lolos sertifikasi BKI (Biro Klasifikasi Indonesia) untuk berbagai proyek <strong>kapal niaga dan kapal perang TNI AL</strong>. Kami juga bisa menyiapkan dokumentasi untuk klasifikasi ABS, DNV, dan Lloyd's Register sesuai kebutuhan owner kapal. Tim engineering kami sudah terbiasa dengan dokumen seperti material certificates, NDT reports, dan welding qualification.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa kapasitas SWRO untuk kapal niaga tipikal?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kebutuhan tergantung jumlah personel dan jenis operasi. Sebagai panduan: kapal niaga dengan 25–40 ABK biasanya butuh kapasitas <strong>2–5 m³/hari</strong>. Kapal cruise atau ferry penumpang besar <strong>20–50 m³/hari</strong>. Rig offshore dengan 100–200 personel mencapai <strong>30–80 m³/hari</strong>. TSM mendesain custom sesuai jumlah personel, durasi misi, dan profil operasi kapal.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa biaya SWRO marine?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">SWRO marine kapasitas kecil (2–5 m³/hari) berkisar <strong>Rp 350–650 juta</strong> termasuk frame skid dan instrumentasi marine grade. Kapasitas menengah (10–20 m³/hari) <strong>Rp 800 juta – Rp 1,8 miliar</strong>. Sertifikasi BKI menambah biaya 8–12% dibanding non-sertifikasi karena dokumentasi, witness test, dan upgrade material tertentu.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah TSM service untuk SWRO yang sudah dipasang?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ya. TSM menyediakan <strong>service kunjungan kapal</strong>, training ulang kru, dan supply spare parts untuk SWRO marine yang sudah dipasang — termasuk SWRO yang aslinya dibuat oleh manufaktur lain. Tim service kami sudah mengunjungi kapal di pelabuhan Tanjung Priok, Tanjung Perak, Belawan, Makassar, Sorong, dan beberapa floating asset offshore.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa lama lead time untuk SWRO marine?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk SWRO marine standar tanpa modifikasi besar, lead time tipikal <strong>10–14 minggu</strong> dari PO hingga FAT siap. Untuk sistem dengan sertifikasi BKI lengkap dan witness test, tambahkan 2–4 minggu untuk koordinasi surveyor. Untuk kapal yang sedang dibangun di galangan, kami bisa menyesuaikan jadwal dengan milestone galangan.</p>

          <div style={{"marginTop":"2rem","padding":"2rem","background":"var(--ice)","borderRadius":"12px","borderLeft":"4px solid var(--accent)"}}>
            <h3 style={{"marginBottom":".75rem","color":"var(--navy)"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Konsultasi SWRO Marine untuk Kapal Anda</h3>
            <p style={{"marginBottom":"1.25rem","color":"var(--muted)","fontSize":".92rem"}} className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Apakah Anda owner kapal, galangan kapal, atau ship designer — TSM siap memberikan technical proposal SWRO marine yang sesuai dengan klasifikasi target dan budget.</p>
            <Link style={{"display":"inline-block","padding":".85rem 2rem","background":"var(--blue)","color":"#fff","borderRadius":"8px","fontWeight":"700","fontSize":".96rem"}} to="/kontak">⚓ Hubungi Tim Marine TSM →</Link>
          </div>

        </div>
      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#aplikasi-maritim">Aplikasi Maritim</Link></li>
            <li><Link href="#standar-marine">Standar &amp; Sertifikasi</Link></li>
            <li><Link href="#studi-kasus-maritim">Studi Kasus</Link></li>
            <li><Link href="#spesifikasi-marine">Spesifikasi Teknis</Link></li>
            <li><Link href="#layanan-maritim">Layanan TSM</Link></li>
            <li><Link href="#faq-maritim">FAQ</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Studi Kasus Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/portofolio/kri">→ KRI Wintermar</Link></li>
            <li><Link to="/portofolio/kri-fleet">→ KRI Sultan Iskandar Muda</Link></li>
            <li><Link to="/portofolio/pelindo">→ Pelindo Multi Terminal</Link></li>
            <li><Link to="/portofolio/halliburton">→ Halliburton Offshore</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Produk Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/produk/desalinasi">→ Sistem SWRO</Link></li>
            <li><Link to="/produk/bwms">→ Ballast Water Management (BWMS)</Link></li>
            <li><Link to="/produk/membran">→ Membran SWRO</Link></li>
            <li><Link to="/produk/pompa">→ Pompa Tekanan Tinggi</Link></li>
            <li><Link to="/produk/instrumen">→ Instrumentasi Marine</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Artikel Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/artikel/ro-kapal-perang-bki">→ RO Kapal Perang &amp; BKI</Link></li>
            <li><Link to="/artikel/ro-kapal-offshore">→ RO Kapal Offshore</Link></li>
            <li><Link to="/artikel/pompa-tekanan-tinggi-ro">→ Pompa HP RO</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>

    </>
  );
};

export default IndustriMaritim;
