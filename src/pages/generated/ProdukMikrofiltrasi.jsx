import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, Droplet, Microscope } from 'lucide-react';
import Button from '../../components/ui/Button';

const ProdukMikrofiltrasi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.prod-hero{height:300px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:8rem;margin-bottom:2rem;background:linear-gradient(135deg,#004d40,#00897b)}
.spec-table{width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:.9rem}
.spec-table tr:nth-child(odd) td{background:var(--gray)}
.spec-table td{padding:.7rem 1rem;border-bottom:1px solid var(--border)}
.spec-table td:first-child{font-weight:600;color:var(--navy);width:45%}
.compare-table{width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:.88rem}
.compare-table th{background:var(--navy);color:#fff;padding:.65rem 1rem;text-align:left;font-weight:600}
.compare-table td{padding:.62rem 1rem;border-bottom:1px solid var(--border)}
.compare-table tr:nth-child(even) td{background:var(--gray)}
.compare-table td:first-child{font-weight:600;color:var(--navy)}

` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/produk">Produk &amp; Solusi</Link> › Mikrofiltrasi (MF)</div>
    <h1>Mikrofiltrasi (MF) – Membran Filter 0,1–10 Mikron</h1>
    <p>Teknologi filtrasi membran bertekanan rendah yang menyaring bakteri, protozoa, alga, padatan tersuspensi, dan partikel halus dari air industri, air proses, dan air minum. Solusi efisien sebagai sistem filtrasi mandiri maupun sebagai pre-treatment sebelum membran Ultrafiltrasi (UF) atau Reverse Osmosis (RO) di seluruh Indonesia.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[3rem] items-start">
      <div>
        <div className="h-[300px] rounded-[14px] flex items-center justify-center text-[8rem] mb-[2rem] text-white "><Microscope className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div>

        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p><strong>Mikrofiltrasi (MF)</strong> adalah teknologi filtrasi membran dengan ukuran pori <strong>0,1 hingga 10 mikron</strong> yang bekerja berdasarkan prinsip penyaringan fisik bertekanan rendah. Membran MF mampu menyisihkan semua partikel tersuspensi, bakteri patogen (0,2–10 µm), protozoa berbahaya seperti <em>Giardia lamblia</em> dan <em>Cryptosporidium parvum</em> (1–20 µm), alga, koloid, dan turbiditas — tanpa mengubah komposisi kimia atau kandungan mineral terlarut dalam air.</p>
        <p>Dengan tekanan operasi hanya <strong>0,1–2 bar</strong> dan konsumsi energi <strong>0,05–0,2 kWh/m³</strong>, Mikrofiltrasi adalah teknologi membran yang paling hemat energi. PT Tirta Sumber Makmur merancang sistem MF dari kapasitas <strong>1 hingga 500 m³/hari</strong> menggunakan modul membran hollow fiber PVDF atau PP dari merek Toray, Pall, atau Pentair X-Flow yang terbukti kehandalan dan ketahanannya dalam kondisi operasi Indonesia.</p>
        <p>Dalam rantai pengolahan air modern, MF berperan ganda: sebagai <strong>sistem filtrasi mandiri</strong> untuk air proses industri dan air irigasi, sekaligus sebagai <strong>pre-treatment yang sangat efektif</strong> untuk sistem Ultrafiltrasi (UF) atau Reverse Osmosis (RO) — menurunkan SDI (Silt Density Index) air umpan sehingga membran RO lebih awet dan interval perawatan lebih panjang.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Perbandingan Teknologi Filtrasi Membran</h2>
        <table className="compare-table ">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>MF</th>
              <th>UF</th>
              <th>NF</th>
              <th>RO</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Ukuran Pori</td><td>0,1–10 µm</td><td>0,01–0,1 µm</td><td>0,001–0,01 µm</td><td>&lt;0,001 µm</td></tr>
            <tr><td>Tekanan Operasi</td><td>0,1–2 bar</td><td>0,5–5 bar</td><td>5–20 bar</td><td>4–70 bar</td></tr>
            <tr><td>Konsumsi Energi</td><td>0,05–0,2 kWh/m³</td><td>0,1–0,5 kWh/m³</td><td>0,5–3 kWh/m³</td><td>0,2–5 kWh/m³</td></tr>
            <tr><td>Menyisihkan Partikel &amp; TSS</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr>
            <tr><td>Menyisihkan Bakteri</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr>
            <tr><td>Menyisihkan Virus</td><td>✗</td><td>✓</td><td>✓</td><td>✓</td></tr>
            <tr><td>Menyisihkan Garam Terlarut</td><td>✗</td><td>✗</td><td>Sebagian</td><td>96–99,7%</td></tr>
            <tr><td>Recovery Rate Tipikal</td><td>90–98%</td><td>85–95%</td><td>75–90%</td><td>35–90%</td></tr>
          </tbody>
        </table>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Spesifikasi Teknis</h2>
        <table className="w-full border-collapse my-[1.5rem] text-[0.9rem] ">
          <tbody><tr><td>Ukuran Pori Membran</td><td>0,1 – 10 mikron (µm)</td></tr>
          <tr><td>Kapasitas</td><td>1 – 500 m³/hari</td></tr>
          <tr><td>Tekanan Operasi</td><td>0,1 – 2 bar (sangat rendah)</td></tr>
          <tr><td>Konsumsi Energi</td><td>0,05 – 0,2 kWh/m³</td></tr>
          <tr><td>Recovery Rate</td><td>90 – 98%</td></tr>
          <tr><td>Penyisihan Bakteri</td><td>&gt;99,99% (4-log reduction)</td></tr>
          <tr><td>Penyisihan Protozoa</td><td>&gt;99,9999% (6-log reduction)</td></tr>
          <tr><td>Penyisihan TSS &amp; Turbiditas</td><td>&gt;99% — produk &lt;0,1 NTU</td></tr>
          <tr><td>Material Membran</td><td>PVDF (Polyvinylidene Fluoride) / PP (Polypropylene)</td></tr>
          <tr><td>Konfigurasi Membran</td><td>Hollow fiber (serat berongga)</td></tr>
          <tr><td>Merek Membran</td><td>Toray, Pall Microza, Pentair X-Flow, Koch</td></tr>
          <tr><td>Mode Backwash</td><td>Otomatis — berbasis waktu atau TMP (Trans Membrane Pressure)</td></tr>
          <tr><td>Chemical Enhanced Backwash</td><td>NaOCl / NaOH — terjadwal harian atau mingguan</td></tr>
          <tr><td>Konstruksi</td><td>Skid-mounted SS304, kompak, mudah dipasang</td></tr>
          <tr><td>Otomasi</td><td>PLC dengan HMI touchscreen, alarm TMP, logging data</td></tr>
        </tbody></table>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Fitur Utama</h2>
        <ul className="flex flex-col text-[0.9rem] text-text ">
          <li><strong>Penyisihan bakteri &gt;99,99%</strong> — Membran MF PVDF hollow fiber menyisihkan semua bakteri patogen secara fisik, tanpa bergantung pada dosis klorin yang berfluktuasi.</li>
          <li><strong>Barrier protozoa absolut</strong> — Giardia dan Cryptosporidium (penyebab diare massal) yang resisten klorin tertahan sempurna oleh membran MF 0,1–1 µm.</li>
          <li><strong>Tekanan operasi ultra-rendah</strong> — Hanya 0,1–2 bar, menghasilkan konsumsi energi paling rendah di antara semua teknologi membran — cocok untuk lokasi dengan sumber listrik terbatas.</li>
          <li><strong>Recovery rate 90–98%</strong> — Hampir seluruh volume air baku menjadi air produk, dengan volume reject/backwash yang sangat kecil.</li>
          <li><strong>Backwash otomatis terprogram</strong> — Sistem kontrol PLC menjalankan backwash fisik dan Chemical Enhanced Backwash (CEB) secara terjadwal tanpa campur tangan operator.</li>
          <li><strong>Tahan terhadap sumber air permukaan</strong> — Material membran PVDF tahan terhadap klorin, pH lebar (2–11), dan fluktuasi turbiditas yang umum pada air sungai dan danau.</li>
          <li><strong>Modular dan skalabel</strong> — Kapasitas dapat ditingkatkan dengan menambah modul membran tanpa mengganti sistem kontrol atau perpipaan utama.</li>
          <li><strong>Pre-treatment optimal untuk RO</strong> — MF menurunkan SDI air umpan menjadi di bawah 3, jauh di bawah batas maksimal 5 yang disyaratkan oleh membran RO — memperpanjang umur membran RO secara signifikan.</li>
        </ul>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Aplikasi &amp; Industri yang Dilayani</h2>
        <div className="" style={{"fontSize":".95rem","lineHeight":"1.78"}}>
        <p>Mikrofiltrasi digunakan di berbagai segmen industri dan infrastruktur pengolahan air:</p>
        <ul style={{"paddingLeft":"1.2rem","marginTop":".6rem"}}>
          <li><strong>Pre-treatment sistem RO/UF</strong> — Menurunkan SDI air umpan dari sumber air permukaan (sungai, danau, waduk) sebelum masuk membran RO atau UF, memperpanjang umur membran dan mengurangi frekuensi CIP.</li>
          <li><strong>Industri makanan &amp; minuman</strong> — Filtrasi air proses, air pencuci botol, dan air sanitasi jalur produksi. MF menghilangkan bakteri tanpa mengubah rasa atau komposisi mineral air.</li>
          <li><strong>Pengolahan air minum (WTP)</strong> — MF menggantikan atau melengkapi proses koagulasi-flokulasi-sedimentasi konvensional dengan hasil yang lebih konsisten dan footprint yang jauh lebih kecil.</li>
          <li><strong>Industri farmasi</strong> — Pre-filtrasi sebelum sterilisasi filtrasi (0,2 µm sterile filter) untuk memperpanjang umur filter steril dan mengurangi biaya penggantian.</li>
          <li><strong>Cooling tower dan sistem HVAC</strong> — Air make-up cooling tower yang telah melalui MF bebas dari alga, bakteri Legionella, dan padatan yang menyebabkan biofouling dan korosi pada heat exchanger.</li>
          <li><strong>Pengolahan air limbah (WWTP/MBR)</strong> — Dalam konfigurasi MBR (Membrane Bioreactor), membran MF direndam dalam tangki bioreaktor untuk memisahkan biomassa dari efluen yang jernih.</li>
          <li><strong>Air irigasi pertanian presisi</strong> — MF menyaring bakteri dan partikel yang dapat menyumbat nozzle atau emiter pada sistem irigasi tetes dan sprinkler.</li>
          <li><strong>Tambak udang dan akuakultur</strong> — Air laut atau air tawar yang telah melalui MF bebas patogen, mengurangi risiko penyakit dan meningkatkan kelangsungan hidup biota budidaya.</li>
        </ul>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Konfigurasi Sistem MF</h2>
        <div className="" style={{"fontSize":".95rem","lineHeight":"1.78"}}>
        <p>TSM merancang sistem MF dalam beberapa konfigurasi sesuai kebutuhan:</p>
        <ul style={{"paddingLeft":"1.2rem","marginTop":".6rem"}}>
          <li><strong>Pressure-driven (outside-in)</strong> — Air umpan dialirkan dari sisi luar ke dalam serat hollow fiber di bawah tekanan positif. Cocok untuk air baku dengan turbiditas sedang.</li>
          <li><strong>Suction-driven (inside-out / submerged)</strong> — Modul membran direndam dalam tangki dan air dipompa dari dalam serat ke luar dengan vakum rendah. Digunakan dalam konfigurasi MBR dan untuk air baku turbiditas sangat tinggi.</li>
          <li><strong>Dead-end filtration</strong> — Seluruh aliran melewati membran, tidak ada aliran reject yang kontinyu. Efisiensi sangat tinggi, cocok untuk air baku dengan turbiditas rendah-sedang.</li>
          <li><strong>Cross-flow filtration</strong> — Sebagian aliran mengalir paralel permukaan membran untuk menyapu padatan dan mencegah cake layer. Cocok untuk air baku turbiditas tinggi yang membutuhkan operasi kontinu tanpa backwash sering.</li>
        </ul>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Pertanyaan Umum (FAQ)</h2>
        <div className="">
        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apa itu Mikrofiltrasi (MF) dan bagaimana cara kerjanya?</h3>
        <p>Mikrofiltrasi adalah teknologi filtrasi membran dengan pori 0,1–10 mikron yang bekerja secara fisik — partikel lebih besar dari pori tertahan, sementara air dan molekul kecil lolos. MF beroperasi pada tekanan sangat rendah (0,1–2 bar) dan mampu menyisihkan bakteri, protozoa, alga, dan semua padatan tersuspensi, namun tidak menyisihkan virus atau garam terlarut.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apa perbedaan Mikrofiltrasi (MF) dan Ultrafiltrasi (UF)?</h3>
        <p>Ukuran pori MF (0,1–10 µm) lebih besar dari UF (0,01–0,1 µm). MF menyisihkan bakteri dan protozoa tapi tidak menyisihkan virus. UF menyisihkan semua yang dapat disaring MF ditambah virus dan makromolekul protein. MF lebih hemat energi dan biaya, UF memberikan barrier mikrobiologis lebih lengkap. Pilihan bergantung pada profil kontaminan dan standar kualitas air yang dibutuhkan.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Kapan sebaiknya menggunakan MF mandiri versus sebagai pre-treatment RO?</h3>
        <p>MF mandiri cocok bila tujuan utama menyisihkan bakteri, turbiditas, dan padatan tersuspensi untuk air proses industri atau air irigasi. Sebagai pre-treatment RO, MF digunakan untuk menurunkan SDI air umpan — sangat dibutuhkan untuk sumber air permukaan (sungai, danau) dengan turbiditas tinggi atau kandungan alga tinggi yang cepat merusak membran RO.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Bagaimana cara membersihkan membran Mikrofiltrasi?</h3>
        <p>Melalui dua mekanisme: backwash fisik (air bersih berlawanan arah, setiap 20–60 menit) untuk melepas cake layer, dan Chemical Enhanced Backwash (CEB) dengan NaOCl atau NaOH secara periodik untuk membersihkan fouling biologis. Sistem MF TSM menjalankan kedua proses ini secara otomatis via PLC — tanpa intervensi operator.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah sistem MF bisa digunakan untuk air sungai atau air hujan?</h3>
        <p>Ya. MF sangat efektif untuk air sungai dan air hujan yang turbid. Untuk air sungai dengan turbiditas di atas 100 NTU, TSM merekomendasikan pra-sedimentasi atau koagulasi sebelum MF untuk memperpanjang interval backwash. Air hujan yang melalui MF cocok sebagai air proses industri atau — dengan tambahan desinfeksi UV — sebagai sumber air minum cadangan.</p>

        <p style={{"marginTop":"1.2rem"}}>Hubungi tim engineer TSM untuk konsultasi pemilihan spesifikasi membran MF yang tepat berdasarkan kualitas air baku dan standar air produk yang Anda butuhkan. Konsultasi dan analisis awal gratis.</p>
        </div>
      </div>
      <aside className="lg:sticky lg:top-[88px]">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Minta Penawaran</h4>
          <p style={{"fontSize":".86rem","color":"var(--muted)","lineHeight":"1.65","marginBottom":"1rem"}}>Dapatkan spesifikasi detail dan harga terbaik dari tim kami.</p>
          <Button variant="primary" to="/kontak" >📋 Minta Penawaran</Button>
          <Button variant="primary" href="https://wa.me/62818719119" >💬 WhatsApp Kami</Button>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Produk Terkait</h4>
          <ul style={{"display":"flex","flexDirection":"column","gap":".65rem"}}>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/uf">→ Ultrafiltrasi (UF)</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/cartridge-mf">→ Cartridge MF</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/swro">→ SWRO Desalinasi Air Laut</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/bwro">→ BWRO Air Payau</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/twro">→ TWRO Tap Water RO</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/water-filter">→ Water Filter Pre-Treatment</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/wtp-wwtp-stp">→ WTP / WWTP / STP</Link></li>
            <li><Link style={{"fontSize":".84rem","fontWeight":"600","color":"var(--blue)","display":"block"}} to="/produk">→ Semua Produk</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem]" style={{"background":"linear-gradient(145deg,var(--navy),var(--blue))","border":"none"}}>
          <h4 style={{"color":"rgba(255,255,255,.45)","borderColor":"rgba(255,255,255,.15)"}}>Analisis Air Baku Gratis</h4>
          <p style={{"fontSize":".86rem","opacity":".84","color":"#fff","lineHeight":"1.65","marginBottom":"1rem"}}>Kirimkan data kualitas air baku atau sampel air Anda — tim engineer TSM akan merekomendasikan spesifikasi MF yang paling tepat, gratis.</p>
          <Button variant="white" to="/tel:+62818719119" >📞 021-88871689</Button>
        </div>
      </aside>
    </div>
  </div>

  <div className="info-box" style={{"marginTop":"2rem"}}>
    <strong>📚 Baca Juga</strong>
    <ul style={{"marginTop":".75rem","paddingLeft":"1.2rem"}}>
      <li><Link to="/produk/uf">🔵 Ultrafiltrasi (UF) – Penyisihan Virus &amp; Makromolekul</Link></li>
      <li><Link to="/produk/cartridge-mf">🔵 Cartridge MF – Filtrasi Presisi untuk Aliran Kecil</Link></li>
      <li><Link to="/produk/water-filter">🔵 Water Filter – Pre-Treatment Konvensional</Link></li>
      <li><Link to="/produk/twro"><Droplet className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> TWRO – Reverse Osmosis untuk Air PDAM &amp; Sumur</Link></li>
      <li><Link to="/kalkulator"><Calculator className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Kalkulator Kebutuhan Sistem Filtrasi Anda</Link></li>
    </ul>
  </div>

</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold leading-[1.15] mb-[0.65rem]">Air Baku Anda Keruh, Mengandung Bakteri, atau Penuh Padatan?</h2>
    <p className="text-[0.88rem] opacity-90 leading-[1.75] max-w-[600px] mx-auto mb-8">Sistem Mikrofiltrasi TSM menyaring hingga 99,99% bakteri dan semua padatan tersuspensi dengan konsumsi energi terendah — sempurna sebagai sistem filtrasi mandiri atau pre-treatment sebelum RO/UF. Konsultasikan kebutuhan Anda sekarang.</p>
    <div className="flex gap-4 justify-center flex-wrap"><Button variant="white" to="/kontak" >📋 Konsultasi MF Gratis</Button><Button variant="outline-white" to="/produk/uf" >🔵 Lihat Juga Ultrafiltrasi (UF)</Button></div>
  </div>
</div>

    </>
  );
};

export default ProdukMikrofiltrasi;
