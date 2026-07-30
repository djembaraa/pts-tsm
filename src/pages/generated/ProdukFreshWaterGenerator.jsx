import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, Waves, Ship } from 'lucide-react';
import Button from '../../components/ui/Button';

const ProdukFreshWaterGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.prod-hero{height:300px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:8rem;margin-bottom:2rem;background:linear-gradient(135deg,#003d5b,#0a7aa8)}
.spec-table{width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:.9rem}
.spec-table tr:nth-child(odd) td{background:var(--gray)}
.spec-table td{padding:.7rem 1rem;border-bottom:1px solid var(--border)}
.spec-table td:first-child{font-weight:600;color:var(--navy);width:45%}

` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/produk">Produk &amp; Solusi</Link> › Fresh Water Generator</div>
    <h1>Fresh Water Generator (FWG)</h1>
    <p>Sistem pembuat air tawar dari air laut menggunakan teknologi evaporasi vakum bertenaga waste heat mesin. Solusi mandiri untuk kapal laut, platform offshore, pulau terpencil, dan fasilitas maritim yang jauh dari sumber air tawar.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[3rem] items-start">
      <div>
        <div className="h-[300px] rounded-[14px] flex items-center justify-center text-[8rem] mb-[2rem] text-white "><Ship className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div>

        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p><strong>Fresh Water Generator (FWG)</strong> adalah sistem produksi air tawar dari air laut menggunakan prinsip evaporasi vakum — sebuah solusi mandiri yang telah menjadi kebutuhan vital kapal laut komersial, kapal perang, platform offshore, dan fasilitas di kepulauan terpencil. FWG memanfaatkan panas buangan dari jacket cooling water mesin utama kapal (60–80°C) untuk menguapkan air laut pada tekanan vakum rendah, kemudian uap tersebut dikondensasikan menjadi air distilat murni berstandar air minum dengan TDS di bawah 10 ppm.</p>
        <p>PT Tirta Sumber Makmur adalah mitra resmi suplai dan instalasi FWG untuk TNI AL, armada kapal komersial Pelindo, dan platform offshore di perairan Indonesia. Kami menyediakan FWG dari merek terkemuka seperti <strong>Alfa Laval, Sasakura, dan Norwater</strong> dengan kapasitas 1 hingga 100 ton/hari, lengkap dengan layanan instalasi, komisioning, dan purna jual di seluruh pelabuhan Indonesia.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Cara Kerja Fresh Water Generator</h2>
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p>Prinsip kerja FWG mengeksploitasi fakta fisika bahwa titik didih air turun drastis seiring penurunan tekanan. Pada tekanan vakum 0,05–0,1 bar, air laut sudah mendidih pada suhu 40–65°C — jauh di bawah titik didih normal 100°C. Panas yang dibutuhkan cukup dipasok dari jacket cooling water mesin utama yang biasanya terbuang sia-sia ke heat exchanger seawater.</p>
        <p>Alur proses FWG: <strong>(1)</strong> Air laut masuk sebagai feed sekaligus media kondenser — mendinginkan uap yang terbentuk sebelum memanas sendiri. <strong>(2)</strong> Feed air laut panas masuk ke evaporator dan menguap dalam kondisi vakum. <strong>(3)</strong> Uap bersih (tanpa garam) naik ke kondenser di bagian atas. <strong>(4)</strong> Kondenser mendinginkan uap menjadi air distilat murni. <strong>(5)</strong> Pompa distilat mengalirkan air ke tangki penyimpanan. <strong>(6)</strong> Brine (air laut pekat) dibuang kembali ke laut. Siklus ini berjalan kontinu selama mesin kapal beroperasi.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Spesifikasi Teknis</h2>
        <table className="w-full border-collapse my-[1.5rem] text-[0.9rem] ">
          <tbody><tr><td>Prinsip Kerja</td><td>Evaporasi vakum (single/multi-effect)</td></tr>
          <tr><td>Kapasitas</td><td>1 – 100 ton/hari</td></tr>
          <tr><td>Sumber Panas</td><td>Jacket cooling water mesin, 60–80°C</td></tr>
          <tr><td>Tekanan Operasi</td><td>Vakum 0,05 – 0,1 bar</td></tr>
          <tr><td>TDS Output Distilat</td><td>&lt; 10 ppm</td></tr>
          <tr><td>Konsumsi Listrik</td><td>0,5 – 1 kW per ton output</td></tr>
          <tr><td>Material</td><td>Titanium plate / Cupro-Nickel</td></tr>
          <tr><td>Sertifikasi</td><td>BKI, DNV, Lloyd's Register, ABS tersedia</td></tr>
        </tbody></table>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Fitur Utama</h2>
        <ul className="flex flex-col text-[0.9rem] text-text ">
          <li>Memanfaatkan waste heat mesin — konsumsi energi listrik minimal</li>
          <li>Konstruksi titanium plate evaporator tahan korosi air laut</li>
          <li>Desain compact skid untuk instalasi di engine room terbatas</li>
          <li>Kontrol otomatis dengan salinometer digital — alarm jika TDS melewati batas</li>
          <li>Sistem dump valve otomatis: produksi dibuang jika salinitas melebihi batas aman</li>
          <li>Tersedia konfigurasi single-effect hingga multi-effect untuk efisiensi maksimal</li>
          <li>Post-treatment terintegrasi: remineralisasi + UV sterilizer + klorinasi</li>
          <li>Sertifikasi BKI, DNV, ABS sesuai kebutuhan kelas kapal</li>
        </ul>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt-sm">Aplikasi</h2>
        <div className="flex flex-wrap gap-2 mt-[0.8rem] ">
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Kapal kargo dan bulk carrier</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Kapal tanker dan LNG carrier</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Kapal perang (KRI) TNI AL</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Platform offshore minyak &amp; gas</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Kapal penumpang dan ferry</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Resort dan hotel di pulau terpencil</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Kapal riset dan survei hidrografi</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Fasilitas pangkalan militer maritim</span>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Keunggulan FWG TSM</h2>
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p>Sebagai spesialis water treatment maritim dengan pengalaman lebih dari 24 tahun di Indonesia, TSM memahami kondisi operasional unik kapal dan offshore: ruang terbatas, vibrasi mesin, variasi beban panas, dan kebutuhan reliability tinggi karena jauh dari fasilitas perbaikan.</p>
        <ul style={{"paddingLeft":"1.4rem","margin":".8rem 0"}}>
          <li style={{"marginBottom":".55rem"}}><strong>Plate evaporator titanium grade 1</strong> — Material titanium murni memberikan ketahanan korosi air laut superior dibanding material lain, dengan ketebalan panas yang efisien. Umur operasional mencapai 15–20 tahun dengan perawatan minimal.</li>
          <li style={{"marginBottom":".55rem"}}><strong>Salinometer real-time dengan auto-dump</strong> — Sensor konduktivitas terus-menerus memantau TDS distilat. Jika melewati ambang batas (biasanya 10 ppm), sistem otomatis membuang produksi ke laut sebelum masuk tangki — melindungi kru dari air yang tidak layak minum.</li>
          <li style={{"marginBottom":".55rem"}}><strong>Kompatibel dengan berbagai tipe mesin</strong> — FWG TSM dapat diintegrasikan dengan jacket water cooling dari mesin diesel MAN, Wärtsilä, Caterpillar, Mitsubishi, maupun mesin lokal. Tim engineer kami melakukan heat balance calculation untuk memastikan kapasitas output sesuai waste heat yang tersedia.</li>
          <li style={{"marginBottom":".55rem"}}><strong>Commissioning dan training ABK</strong> — Setiap instalasi FWG TSM disertai komisioning penuh dan pelatihan ABK minimal 8 jam, termasuk prosedur operasional, penanganan alarm, dan jadwal perawatan preventif rutin.</li>
          <li style={{"marginBottom":".55rem"}}><strong>Suku cadang tersedia di Indonesia</strong> — TSM menyimpan stok suku cadang FWG strategis (gasket, seal, salinometer probe, impeller) yang dapat dikirim ke pelabuhan seluruh Indonesia dalam 24–48 jam untuk meminimalkan downtime.</li>
        </ul>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Studi Kasus Aplikasi</h2>
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p><strong>Armada KRI TNI Angkatan Laut</strong> — TSM menyuplai dan menginstalasi FWG 30 ton/hari untuk beberapa unit KRI kelas fregat. Sistem dilengkapi auto-dump salinometer dan post-treatment klorinasi untuk memenuhi standar air minum militer. Integrasi dilakukan di galangan kapal PT PAL Surabaya dengan supervisi perwakilan BKI dan TNI AL. Operasional tanpa kendala selama lebih dari 5 tahun.</p>
        <p><strong>Platform Offshore di Selat Makassar</strong> — FWG 50 ton/hari menggantikan pengiriman air tawar dengan supply boat yang biayanya mencapai Rp 800 juta/tahun. Dengan FWG memanfaatkan waste heat turbin gas platform, biaya produksi air tawar turun ke Rp 15.000/ton — payback period dicapai dalam 14 bulan dari investasi awal.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Pertanyaan yang Sering Ditanyakan</h2>
        <div className="" style={{"fontSize":".94rem","lineHeight":"1.75","color":"var(--text)"}}>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apa perbedaan Fresh Water Generator dengan SWRO (Desalinasi RO)?</h3>
        <p>FWG menggunakan evaporasi vakum: air laut dipanaskan oleh panas buangan mesin kapal, menguap pada tekanan rendah, lalu uapnya dikondensasikan menjadi air tawar. Tidak butuh listrik besar karena memakai waste heat. SWRO menggunakan tekanan osmosis tinggi (60–70 bar) yang memerlukan pompa berdaya besar. FWG lebih cocok untuk kapal besar yang punya banyak waste heat mesin; SWRO lebih fleksibel untuk sumber energi variatif termasuk surya.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah air dari Fresh Water Generator aman diminum langsung?</h3>
        <p>Air distilat FWG sangat murni (TDS &lt; 10 ppm), tapi perlu post-treatment sebelum dikonsumsi: remineralisasi dengan CaCO3 cartridge, dosing klorin residual, dan UV sterilizer. TSM selalu menyertakan post-treatment wajib ini dalam paket instalasi FWG untuk keamanan kru.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa konsumsi energi Fresh Water Generator?</h3>
        <p>FWG evaporasi vakum hanya membutuhkan listrik untuk pompa sirkulasi dan vakum, sekitar 0,5–1 kW per ton output. Energi panas yang digunakan adalah waste heat dari jacket cooling water mesin utama yang sebelumnya terbuang sia-sia. FWG tidak dapat dioperasikan saat kapal berhenti dan mesin mati, sehingga kapal perlu cadangan air di tangki.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Kapasitas FWG berapa yang cocok untuk kapal saya?</h3>
        <p>Kapasitas FWG ditentukan jumlah kru dikali konsumsi per orang: 15–30 liter/hari untuk minimal, hingga 150 liter/hari untuk kapal penumpang mewah. Kapal kargo 20 kru biasanya cukup FWG 5–10 ton/hari. Kapal corvette TNI AL kami suplai FWG 20–30 ton/hari. Platform offshore 100 personel bisa butuh 50–80 ton/hari. TSM membantu kalkulasi ini di tahap konsultasi awal.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apakah FWG bisa dipasang di kapal lama (retrofit)?</h3>
        <p>Ya, FWG dapat dipasang sebagai retrofit selama kapal memiliki jacket water cooling engine yang cukup (≥60°C) dan ruang di engine room. TSM melakukan survei teknis ke kapal untuk menilai kelayakan retrofit, termasuk kapasitas heat engine, jalur perpipaan yang ada, dan space yang tersedia. Waktu instalasi retrofit biasanya 3–7 hari.</p>

        <p style={{"marginTop":"1.2rem"}}>Dengan rekam jejak pengerjaan FWG untuk TNI AL, Pelindo, dan operator offshore nasional, TSM adalah mitra terpercaya untuk kebutuhan air tawar maritim Anda di seluruh perairan Indonesia. Hubungi tim marine engineer kami untuk konsultasi teknis dan penawaran tanpa biaya.</p>
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
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/desalinasi">→ Desalinasi SWRO Air Laut</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/bwms">→ Ballast Water Management</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/ro-industri">→ RO Industri Skala Besar</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/uv">→ UV Sterilizer</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/industri/maritim">→ Solusi Industri Maritim</Link></li>
            <li><Link style={{"fontSize":".84rem","fontWeight":"600","color":"var(--blue)","display":"block"}} to="/produk">→ Semua Produk</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem]" style={{"background":"linear-gradient(145deg,var(--navy),var(--blue))","border":"none"}}>
          <h4 style={{"color":"rgba(255,255,255,.45)","borderColor":"rgba(255,255,255,.15)"}}>Konsultasi Teknis</h4>
          <p style={{"fontSize":".86rem","opacity":".84","color":"#fff","lineHeight":"1.65","marginBottom":"1rem"}}>Hubungi marine engineer kami untuk rekomendasi FWG yang tepat untuk kapal atau platform Anda.</p>
          <Button variant="white" to="/tel:+62818719119" >📞 021-88871689</Button>
        </div>
      </aside>
    </div>
  </div>

  <div className="info-box" style={{"marginTop":"2rem"}}>
    <strong>📚 Baca Juga</strong>
    <ul style={{"marginTop":".75rem","paddingLeft":"1.2rem"}}>
      <li><Link to="/artikel/desalinasi-pulau-terpencil">🏝️ Desalinasi untuk Pulau Terpencil: Pilihan Teknologi</Link></li>
      <li><Link to="/artikel/ro-kapal-offshore">⚓ Sistem RO untuk Kapal dan Offshore</Link></li>
      <li><Link to="/industri/maritim"><Ship className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Solusi Water Treatment Industri Maritim</Link></li>
      <li><Link to="/produk/desalinasi"><Waves className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> SWRO Desalinasi Air Laut – Alternatif FWG</Link></li>
      <li><Link to="/kalkulator"><Calculator className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Kalkulator Kebutuhan Air Tawar Kapal</Link></li>
    </ul>
  </div>

</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold leading-[1.15] mb-[0.65rem]">Butuh Pasokan Air Tawar Mandiri di Kapal atau Offshore?</h2>
    <p className="text-[0.88rem] opacity-90 leading-[1.75] max-w-[600px] mx-auto mb-8">Tim marine engineer TSM siap membantu menghitung kapasitas FWG yang tepat dan merancang sistem post-treatment untuk keamanan air minum kru Anda.</p>
    <div className="flex gap-4 justify-center flex-wrap"><Button variant="white" to="/kontak" >📋 Minta Penawaran FWG</Button><Button variant="outline-white" to="/industri/maritim" >🚢 Solusi Maritim Lainnya</Button></div>
  </div>
</div>

    </>
  );
};

export default ProdukFreshWaterGenerator;
