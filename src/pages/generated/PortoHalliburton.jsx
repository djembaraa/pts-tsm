import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList } from 'lucide-react';


const PortoHalliburton = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/portofolio">Portofolio</Link> › Studi Kasus</div>
    <h1>PT Halliburton Sarulla:<br />UF System 47.000 LPD × 7 Set untuk Proyek Geothermal SUMUT</h1>
    <p>Klien: <strong>PT Halliburton — Proyek Geothermal Sarulla</strong> &nbsp;·&nbsp; Kategori: UF Industri Energi — Geothermal &amp; Migas</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>

        <div className="cs-hero ">
          <picture>
            <source srcSet="images/foto-pemasangan-lapangan.webp" type="image/webp" />
            <img src="images/foto-pemasangan-lapangan.jpg" alt="Sistem Ultrafiltrasi UF 47000 LPD untuk Halliburton Sarulla geothermal SUMUT" />
          </picture>
          <div className="cs-overlay">
            <h2>PT Halliburton — Proyek Geothermal Sarulla</h2>
          </div>
        </div>

        

        <div className="cs-stats">
      <div className="cs-stat "><div className="num">7 set</div><div className="lbl">modul UF</div></div>
      <div className="cs-stat "><div className="num">47.000</div><div className="lbl">LPD per modul</div></div>
      <div className="cs-stat "><div className="num">329.000</div><div className="lbl">LPD total kapasitas</div></div>
      <div className="cs-stat "><div className="num">2015</div><div className="lbl">tahun pengerjaan</div></div>
        </div>

        <table className="cs-meta-table ">
      <tbody><tr><th>Klien</th><td>PT Halliburton — kantor operasional di Taman Tekno BSD Tangerang</td></tr>
      <tr><th>Lokasi Proyek</th><td>Proyek Geothermal Sarulla, Sumatra Utara</td></tr>
      <tr><th>Tipe Sistem</th><td>Ultrafiltrasi (UF) System untuk industri energi geothermal</td></tr>
      <tr><th>Kapasitas Per Modul</th><td>47.000 LPD (~47 m³/hari atau ~2 m³/jam continuous)</td></tr>
      <tr><th>Jumlah Modul</th><td>7 set modul UF independen</td></tr>
      <tr><th>Total Kapasitas</th><td>329.000 LPD (~329 m³/hari)</td></tr>
      <tr><th>Aplikasi</th><td>Pre-treatment air proses untuk operasi geothermal — penghilangan koloid, padatan tersuspensi, dan mikroba</td></tr>
      <tr><th>Tahun Pengerjaan</th><td>Agustus 2015</td></tr>
      <tr><th>Status</th><td>Beroperasi sukses untuk operasional geothermal Sarulla</td></tr>
        </tbody></table>

        <div className="prose max-w-none text-text">

        <h2 id="latar-belakang" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Latar Belakang Proyek</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pada Agustus 2015, TSM dipercaya oleh <strong>PT Halliburton Indonesia</strong> untuk memasok <strong>7 set modul Ultrafiltrasi (UF) System</strong> dengan kapasitas <strong>47.000 LPD per modul</strong> — total kapasitas 329.000 LPD — untuk mendukung proyek geothermal Sarulla di Sumatra Utara.</p>

        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>PT Halliburton</strong> adalah salah satu raksasa global di industri energi (oilfield services), dengan kantor operasional Indonesia di Taman Tekno BSD Tangerang. Proyek Sarulla adalah salah satu proyek geothermal terbesar di Indonesia yang berkontribusi signifikan terhadap kapasitas pembangkit panas bumi nasional.</p>

        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Bagi TSM, dipercayanya kami sebagai vendor untuk proyek strategis Halliburton adalah <strong>validasi quality dan engineering capability di tingkat klien internasional</strong>. Halliburton memiliki vendor qualification process yang sangat ketat, dengan persyaratan technical specification, QA/QC documentation, dan delivery timeline yang harus konsisten dipenuhi.</p>

        <h2 id="aplikasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Aplikasi UF di Proyek Geothermal</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Industri geothermal membutuhkan air proses dengan kualitas spesifik untuk berbagai keperluan operasional:</p>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Cooling water make-up</strong> untuk turbin geothermal — air harus bebas koloid dan padatan tersuspensi yang dapat menyebabkan scaling</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Process water</strong> untuk operasional plant dengan persyaratan kualitas mikrobiologi</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Boiler feed water pre-treatment</strong> sebagai feed untuk demineralisasi atau RO downstream</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Domestic water</strong> untuk fasilitas operator dan komunitas pekerja</li>
        </ul>

        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ultrafiltrasi (UF) dipilih sebagai teknologi utama karena: <strong>(1) Removal kontaminan fisik dan mikroba sangat tinggi</strong> dengan pori membran 0,01-0,03 µm, <strong>(2) Output kualitas konsisten</strong> tanpa variasi musiman, <strong>(3) Footprint kompak</strong> dibanding multi-media filter konvensional dengan kapasitas setara, dan <strong>(4) Operasi otomatis</strong> dengan auto backwash dan CEB yang minim supervisi.</p>

        <h2 id="konfigurasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Konfigurasi 7 Set Modul</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pendekatan multi-modul (7 set independen 47.000 LPD masing-masing) bukan satu sistem terpusat memberikan beberapa keuntungan strategis untuk proyek geothermal:</p>

        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Distribusi spatial</strong> — Modul UF dapat ditempatkan di berbagai lokasi strategis di seluruh area proyek, mengurangi panjang piping distribusi air olahan</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Redundancy operasional</strong> — Jika satu modul memerlukan maintenance, 6 modul lain tetap beroperasi memenuhi kebutuhan operasional</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Modular scalability</strong> — Modul tambahan dapat ditambahkan jika kebutuhan ekspansi muncul di masa depan</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Risk mitigation</strong> — Tidak ada single point of failure yang dapat menghentikan operasi seluruh proyek</li>
        </ul>

        <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Spesifikasi Modul UF</h3>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Membran hollow fiber PVDF dengan MWCO ~100 kDa</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Konfigurasi outside-in dengan auto backwash setiap 30-60 menit</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Chemically Enhanced Backwash (CEB) harian untuk pencegahan biofouling</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Auto Cleaning In Place (CIP) terjadwal untuk pemulihan flux</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">SDI output &lt;3 konsisten — fit untuk RO downstream jika diperlukan</li>
        </ul>

        <h2 id="signifikansi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Signifikansi Proyek</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Proyek Halliburton Sarulla adalah salah satu <strong>proyek terbesar dan paling kompleks</strong> yang TSM kerjakan untuk industri energi. Beberapa milestone yang membuat proyek ini berkesan:</p>

        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Skala — </strong> 329.000 LPD total adalah salah satu instalasi UF terbesar yang TSM kerjakan</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Klien tier-1 internasional</strong> — Halliburton sebagai pelanggan menvalidasi quality TSM di mata pasar global</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Industri strategis nasional</strong> — Geothermal Sarulla berkontribusi pada kemandirian energi Indonesia</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Lokasi remote</strong> — Pengiriman peralatan ke Sarulla SUMUT membutuhkan koordinasi logistik yang detail</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Schedule sensitivity</strong> — Proyek geothermal memiliki critical path schedule, delay penyediaan UF dapat berdampak pada total project</li>
        </ul>

        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Setelah Halliburton Sarulla, TSM telah dipercaya untuk berbagai proyek industri energi lain (PLTU, oilfield support, dan lainnya). Proyek 2015 ini menjadi <strong>fondasi kredensial TSM di sektor energi Indonesia</strong>.</p>
    

<h2 id="faq-halliburton" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Mengapa Halliburton memilih TSM sebagai vendor untuk proyek Sarulla?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Beberapa faktor: (1) Track record TSM untuk proyek industri skala besar di Indonesia, (2) Kemampuan engineering dan documentation sesuai standar klien internasional, (3) Lokasi workshop di Bekasi yang memungkinkan pre-assembly dan factory acceptance test (FAT) sebelum delivery, (4) After-sales support yang dapat diandalkan untuk klien di lokasi remote, (5) Technical proposal yang detail dan kompetitif.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa tantangan logistik mengirim 7 set UF ke Sarulla?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sarulla terletak di Sumatra Utara, jauh dari pelabuhan besar. Logistik melibatkan: pengiriman dari workshop Bekasi via truk container ke Pelabuhan Tanjung Priok, pelayaran ke Belawan Medan, transportasi darat dari Belawan ke site Sarulla yang medan-nya menantang. Setiap modul UF ditransportasikan sebagai unit pre-assembled untuk minimisasi assembly onsite. Total durasi delivery sekitar 6-8 minggu dengan koordinasi cuaca dan road condition.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah TSM melayani proyek geothermal lain di Indonesia?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ya. Selain Sarulla, TSM telah melayani berbagai proyek industri energi termasuk PLTU dengan boiler feed water dan cooling tower (lihat solusi <Link to="/industri/pltu">industri PLTU TSM</Link>), PLTD di lokasi remote dengan UF + RO, serta dukungan untuk oilfield offshore. Indonesia memiliki potensi geothermal terbesar dunia, dan TSM siap untuk proyek-proyek lanjutan di sektor ini.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa beda UF untuk geothermal vs UF untuk industri lain?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Perbedaan utama: (1) Material — geothermal sering memiliki air baku dengan H2S atau silica yang membutuhkan material resistant; (2) Pre-treatment — air dari sumur geothermal mungkin perlu cooling sebelum UF karena suhu tinggi merusak membran PVDF; (3) Schedule operational — geothermal beroperasi 24/7 dengan toleransi downtime sangat rendah; (4) Documentation — klien internasional seperti Halliburton mensyaratkan QA/QC documentation yang lebih ekstensif.</p>

          <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa investasi dan ROI untuk sistem UF skala industri energi?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk sistem multi-modul setara proyek Halliburton (~330 m³/hari total), investasi berkisar Rp 8-15 milyar tergantung level otomasi, brand membran, dan persyaratan dokumentasi. ROI dihitung berdasarkan: (1) Penghematan biaya treatment kimia karena UF menggantikan multi-media filter + cartridge konvensional, (2) Pengurangan downtime operasional, (3) Umur RO downstream yang lebih panjang karena feed quality lebih baik. ROI tipikal 3-5 tahun untuk proyek industri energi.</p>


          <div style={{"marginTop":"2rem","padding":"2rem","background":"var(--ice)","borderRadius":"12px","borderLeft":"4px solid var(--accent)"}}>
            <h3 style={{"marginBottom":".75rem","color":"var(--navy)"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Membutuhkan UF / RO untuk Industri Energi Skala Besar?</h3>
            <p style={{"marginBottom":"1.25rem","color":"var(--muted)","fontSize":".92rem"}} className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tim engineering TSM siap mendiskusikan kebutuhan water treatment Anda dengan referensi proyek serupa yang sudah terbukti. Konsultasi awal gratis tanpa komitmen.</p>
            <Link style={{"display":"inline-block","padding":".85rem 2rem","background":"var(--blue)","color":"#fff","borderRadius":"8px","fontWeight":"700","fontSize":".96rem"}} to="/kontak"><ClipboardList className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Konsultasi Proyek Anda →</Link>
          </div>

        </div>
      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#latar-belakang">Latar Belakang</Link></li>
            <li><Link href="#aplikasi">Aplikasi UF di Geothermal</Link></li>
            <li><Link href="#konfigurasi">Konfigurasi 7 Modul</Link></li>
            <li><Link href="#signifikansi">Signifikansi Proyek</Link></li>
            <li><Link href="#faq-halliburton">FAQ</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Produk Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/produk/uf">→ Sistem Ultrafiltrasi (UF)</Link></li>
            <li><Link to="/produk/ro-industri">→ Sistem RO Industri</Link></li>
            <li><Link to="/produk/instrumen">→ Instrumentation &amp; SCADA</Link></li>
            <li><Link to="/produk/membran">→ Membran UF &amp; RO</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Studi Kasus &amp; Industri</h4>
          <ul className="flex flex-col">
            <li><Link to="/artikel/water-treatment-pltu">→ Water Treatment PLTU</Link></li>
            <li><Link to="/industri/pltu">→ Solusi Industri Energi</Link></li>
            <li><Link to="/industri/manufaktur">→ Solusi Industri Berat</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>

    </>
  );
};

export default PortoHalliburton;
