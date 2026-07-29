import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


const ArtikelRoKapalPerangBki = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/artikel">Artikel</Link> › Maritim &amp; Offshore</div>
    <h1>RO untuk Kapal Perang &amp; Vessel Offshore:<br />Memenuhi Standar BKI dan SOLAS</h1>
    <p>Panduan teknis lengkap watermaker SWRO untuk kapal perang TNI AL, vessel komersial, dan platform offshore — persyaratan klasifikasi, material, dan implementasi yang tahan kondisi laut.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">

      <article>
        <div className="art-hero-img">
          <picture>
            <source srcSet="images/porto-kri-amy-1.webp" type="image/webp" />
            <img src="images/porto-kri-amy-1.jpg" alt="Sistem watermaker RO untuk kapal perang dan vessel offshore standar BKI" />
          </picture>
        </div>

        <div className="art-meta-bar">
          <span className="am-tag">Maritim</span>
          <span className="am-info">📅 2 Mei 2026</span>
          <span className="am-info">✍️ Tim TSM</span>
          <span className="am-info">⏱ 9 menit baca</span>
        </div>

        <div className="prose max-w-none text-text">

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kapal yang beroperasi di laut lepas — baik kapal perang TNI AL, vessel komersial, kapal pendukung industri migas, maupun platform offshore — membutuhkan <strong>pasokan air tawar mandiri</strong> sepanjang misi operasinya. Bergantung pada pengisian air dari pelabuhan tidak praktis untuk operasi panjang dan tidak mungkin sama sekali untuk patroli laut, drilling offshore, atau misi militer di perairan jauh.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>Watermaker SWRO</strong> menjadi solusi standar untuk kebutuhan ini. Namun watermaker untuk kapal sangat berbeda dari sistem RO darat — ada persyaratan ketat dari klasifikasi (BKI, SOLAS, IMO), kondisi operasional yang ekstrem (getaran, salt-spray, sea state), dan persyaratan keandalan yang tidak bisa kompromi. Artikel ini membahas semua aspek tersebut untuk engineer kapal, designer EPC, dan pengelola fleet yang merencanakan instalasi watermaker.</p>

          <h2 id="kenapa-watermaker" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Kenapa Watermaker Wajib di Kapal Modern</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kapal modern membutuhkan air tawar untuk: konsumsi awak (minum, masak, sanitary), keperluan operasional (engine cooling, washing, deck cleaning), dan pada beberapa kapal khusus untuk fungsi misi (boiler feed kapal pembangkit, cooling sistem senjata, dll).</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Beberapa kapal kecil masih menyimpan air tawar dalam tank dan bergantung pada refill di pelabuhan. Strategi ini memiliki batasan serius: <strong>kapasitas tank terbatas oleh berat dan ruang, tidak bisa untuk operasi panjang, dan menjadikan kapal "captive" pada pelabuhan tertentu</strong>. Kapal perang yang harus standby untuk misi mendadak tidak boleh terkendala kebutuhan air. Vessel offshore yang berada di drilling site selama berbulan-bulan jelas membutuhkan watermaker.</p>

          <h2 id="standar-klasifikasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Standar Klasifikasi: BKI, SOLAS, IMO</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Setiap peralatan di kapal yang beroperasi di perairan internasional atau diklasifikasikan harus memenuhi standar klasifikasi:</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">BKI (Biro Klasifikasi Indonesia)</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk kapal yang beroperasi di perairan Indonesia atau dimiliki perusahaan Indonesia, BKI adalah klasifikasi default. Persyaratan BKI untuk peralatan watermaker meliputi:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Material certificate</strong> untuk semua pressure vessel dan piping (steel mill certificate dengan traceability)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Welding qualification</strong> sesuai standar BKI dan AWS, dengan welder bersertifikat</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Hydrostatic test</strong> pada 1,5x design pressure dengan dokumentasi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Electrical compliance</strong> dengan standar marine — IP66+ untuk junction box, EMC compliance</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Vibration testing</strong> sesuai standar marine vibration</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Approval drawing</strong> oleh BKI sebelum manufacturing</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Final inspection</strong> oleh surveyor BKI sebelum delivery</li>
          </ul>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">SOLAS (Safety of Life at Sea)</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk kapal yang beroperasi di perairan internasional, SOLAS adalah kerangka regulasi global yang ditegakkan oleh IMO (International Maritime Organization). Watermaker harus mematuhi:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>SOLAS Chapter II-1</strong> — Construction-related requirements</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>SOLAS Chapter II-2</strong> — Fire protection (untuk material yang dapat memicu kebakaran)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>MARPOL</strong> — Untuk pengelolaan brine discharge agar tidak mencemari laut (umumnya not an issue untuk SWRO karena brine diluted di laut)</li>
          </ul>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Standar Lain (Untuk Kapal Spesifik)</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>USCG (United States Coast Guard)</strong> — Untuk kapal yang masuk perairan AS</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Lloyd's Register, DNV, ABS</strong> — Klasifikasi alternatif untuk kapal komersial international</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>NATO STANAG</strong> — Untuk kapal perang yang beroperasi dengan armada NATO (terbatas untuk Indonesia)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>NORSOK</strong> — Untuk vessel offshore yang beroperasi di Norwegia/Eropa Utara (relevan untuk vessel charter ke operator Eropa)</li>
          </ul>

          <h2 id="kondisi-marine" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Tantangan Kondisi Marine yang Harus Diatasi</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">1. Vibration dari Engine Propulsi</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Mesin propulsi kapal menghasilkan vibrasi konstan yang ditransmisikan ke seluruh struktur kapal. Watermaker yang dirancang untuk darat akan mengalami: kerusakan piping connection, kebocoran flange, kegagalan sensor presisi, dan loosening dari mounting bolt.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Solusi: <strong>(1) Vibration mounting pad</strong> di bawah skid base untuk isolasi getaran, <strong>(2) Flexible coupling</strong> antara pompa dan motor, <strong>(3) Flexible piping connection</strong> di interface kritis, <strong>(4) Mechanical lock pada semua bolt</strong> (lock washer, threadlocker), dan <strong>(5) Cable strain relief</strong> di semua koneksi listrik.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">2. Salt-Spray Korosif Atmosfer</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Atmosfer kapal mengandung salt-spray dari ombak yang sangat korosif. Dalam waktu singkat (bulan, bukan tahun), komponen non-marine grade akan mengalami pitting corrosion yang signifikan.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Solusi material akan dibahas di section berikutnya, tapi prinsipnya: <strong>semua komponen yang terpapar atmosfer kapal harus marine-grade</strong> minimum SS-316L untuk metal, FRP atau plastik resistant untuk komponen non-load-bearing.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">3. Sea State (Gelombang Tinggi)</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kapal di sea state 3-4 (gelombang 1,5-2,5 m) sudah mengalami goyangan dan akselerasi vertikal yang substansial. Sea state 5-6 (gelombang 2,5-6 m) yang umum di pelayaran cuaca buruk memberikan akselerasi yang dapat membuat sistem cair (separator, settling tank) tidak berfungsi.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Watermaker SWRO untuk kapal sebaiknya <strong>menggunakan komponen yang continue beroperasi di sea state tinggi</strong>: cartridge filter (vs separator), pressure vessel orientasi vertikal (vs horizontal), pompa yang tahan momen lateral.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">4. Power Quality dari Genset</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Power di kapal adalah genset diesel atau gas turbine, yang memiliki <strong>voltage dan frequency yang lebih variabel</strong> dari grid darat. Voltage drop saat pump start, frequency variation saat load berubah, dan kemungkinan harmonics dari load lain di kapal.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Solusi: <strong>(1) Power Conditioning</strong> dengan UPS untuk panel kontrol, <strong>(2) VFD dengan input voltage range lebar</strong> untuk pump motor, dan <strong>(3) Motor IE3 atau IE4</strong> yang dirancang inverter-duty.</p>

          <h2 id="material-marine-grade" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Material Marine-Grade Wajib</h2>

          <table className="w-full border-collapse my-[1.5rem] text-[0.9rem]">
            <tbody><tr><th>Komponen</th><th>Material Recommended</th><th>Catatan</th></tr>
            <tr><td>Pressure Vessel SWRO</td><td>SS-316L atau Super Duplex (UNS S32750)</td><td>Super duplex untuk sea water langsung; SS-316L cukup untuk feed setelah pre-treatment</td></tr>
            <tr><td>High-pressure Piping</td><td>SS-316L atau super duplex</td><td>Schedule 80 minimum untuk SWRO 60-70 bar</td></tr>
            <tr><td>Low-pressure Piping</td><td>SS-316L atau CuNi 90/10</td><td>CuNi sangat tahan biofouling, alternatif untuk pre-treatment dan brine</td></tr>
            <tr><td>Pump Wetted Parts</td><td>Super duplex atau Ni-Al-Bronze</td><td>Untuk pompa yang langsung kontak air laut</td></tr>
            <tr><td>Skid Frame</td><td>Carbon steel + marine epoxy 3-layer</td><td>SS-316L lebih ideal tapi cost-prohibitive untuk frame besar</td></tr>
            <tr><td>Electrical Junction Box</td><td>SS-316L IP66+</td><td>Plastic non-recommended untuk salt environment</td></tr>
            <tr><td>Sensor &amp; Instrumentation</td><td>SS-316L wetted parts, IP65 housing</td><td>Pressure sensor, flow meter, conductivity probe</td></tr>
            <tr><td>Storage Tank</td><td>SS-316L atau FRP marine-grade</td><td>FRP lebih ringan tapi butuh inspeksi rutin</td></tr>
            <tr><td>Bolt &amp; Fastener</td><td>A4 (SS-316L) untuk eksterior, A2 (SS-304) ok untuk interior protected</td><td>Galvanized steel akan rust dalam bulan</td></tr>
          </tbody></table>

          <h2 id="konfigurasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Konfigurasi Watermaker untuk Kapal</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Kapasitas Tipikal</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kapal Patroli kecil (TNI AL/Polri/KKP)</strong>: 5-15 ton/hari</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kapal Perang menengah (KRI Frigate)</strong>: 20-40 ton/hari</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kapal Perang besar (KRI LPD, Destroyer)</strong>: 50-100 ton/hari</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Vessel Offshore Supply</strong>: 15-30 ton/hari</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Drilling Rig Offshore</strong>: 50-150 ton/hari (kebutuhan tinggi karena drilling fluid)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Cruise Ship Komersial</strong>: 200-1.000+ ton/hari</li>
          </ul>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Konfigurasi Standar</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Watermaker kapal modern umumnya menggunakan konfigurasi compact:</p>
          <ol className="ml-[1.5rem] my-[1.05rem] list-decimal">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sea chest intake</strong> dengan basket strainer SS-316L</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Cartridge filter dual-stage</strong> 25 µm + 5 µm (atau 50 µm + 5 µm)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Antiscalant dosing</strong> proportional dengan flow</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>High-pressure pump</strong> (CAT plunger atau Danfoss APP axial piston)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pressure vessel SWRO</strong> dengan elemen 4040 atau 8021 (compact)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>ERD</strong> turbocharger untuk recovery energi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Membran SWRO</strong> (Dow SW30HRLE-4040 atau Toray TM820-440)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Calcite remineralizer</strong> untuk netralisasi pH dan tambah Ca</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>UV sterilizer</strong> 254 nm</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Storage tank</strong> SS-316L dengan vent filter</li>
          </ol>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tidak menggunakan multi-media filter atau UF karena: (1) keterbatasan footprint, (2) air laut lepas relatif bersih, (3) cartridge filter ganda lebih praktis dirawat awak kapal.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Skid Frame Compact</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Semua komponen di-mount pada skid frame integral untuk: (1) memudahkan instalasi (tinggal connect 3 pipa: intake, output, listrik), (2) menjamin alignment komponen, (3) memudahkan transportasi dan loading ke kapal. Skid dimensi typical 2-3 m × 1-1,5 m × 1,8-2 m untuk kapasitas 20-40 ton/hari.</p>

          <h2 id="studi-kasus-kri" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Studi Kasus: Watermaker SWRO untuk KRI TNI AL</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM telah membangun watermaker untuk lebih dari 12 unit Kapal Perang Republik Indonesia dari berbagai kelas, termasuk: <Link to="/portofolio/kri">KRI AMY Surabaya (20 TPD), KRI Sultan Iskandar Muda 367 (30 TPD), KRI Kambani (30 TPD), KRI TSR 542 (30 TPD × 2 unit), KRI Dewa Kembar Pondok Dayung (24 TPD × 2 unit), serta unit-unit di Pangkalan Fasharkan Jakarta (KRI Patimura, KRI Cut Nyak Dien, KRI Sutanto, KRI Tengku Umar, KRI Sutedi Senoputra 378, KRI Silas Papare 386, KRI SPICA)</Link>.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Spesifikasi yang Diimplementasikan</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Konfigurasi</strong>: Compact skid SWRO dengan plunger pump CAT, vessel SS-316L, ERD turbocharger</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Material</strong>: Skid SS-304 frame dengan 3-layer marine epoxy, pressure vessel SS-316L, semua eksterior IP66+</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sertifikasi</strong>: BKI compliance dengan dokumentasi lengkap (material certs, weld qualification, hydrostatic test)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kontrol</strong>: PLC dengan HMI 7" sentuh marine-grade, semua kontrol dapat dioperasikan oleh awak kapal</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Training</strong>: 3 hari intensif di pangkalan + dokumentasi O&amp;M dalam Bahasa Indonesia</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Spare parts kit</strong>: Cartridge filter spare 6 bulan, O-ring set, plunger seal kit, 1 elemen membran spare</li>
          </ul>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Hasil Operasional</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kapasitas konsisten 24 ton/hari</strong> pada sea state hingga 5</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kualitas air TDS &lt;500 ppm</strong> memenuhi standar Permenkes 492/2010</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Awak kapal mengoperasikan secara mandiri</strong> setelah training awal</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Ribuan jam operasi tanpa kegagalan major</strong></li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Konsumsi energi 5-6 kWh/m³</strong> dalam batas kapasitas listrik kapal</li>
          </ul>

          <h2 id="offshore-vessel" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Watermaker untuk Vessel Offshore</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Watermaker untuk vessel offshore (anchor handling tug, supply vessel, accommodation barge) memiliki nuansa berbeda dari kapal perang:</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Persyaratan Khusus Offshore</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Operasi panjang di laut</strong> — tugas offshore bisa minggu hingga bulan tanpa port-call. Reliability lebih kritis dari kapal perang yang bisa kembali ke pangkalan</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kebutuhan air variable</strong> — saat anchor handling vs supply, demand air dapat sangat berbeda</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Standar charter operator</strong> — banyak operator EPC offshore (Pertamina, Halliburton, Schlumberger) memiliki spesifikasi internal selain BKI/SOLAS</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Integrasi dengan ship management system</strong> — modern vessel memiliki centralized monitoring; watermaker harus interface dengan SCADA kapal</li>
          </ul>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Konfigurasi Tipikal untuk Offshore</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Mirip kapal perang tapi dengan tambahan: (1) <strong>capacity range yang lebih lebar</strong> via VFD, (2) <strong>monitoring integrasi</strong> ke ship system, (3) <strong>data logging</strong> untuk reporting ke charter operator, dan (4) <strong>spare capacity 30-50%</strong> untuk operasi panjang tanpa support eksternal.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM telah membangun watermaker untuk vessel <strong>Wintermar Offshore</strong> dan kapal pendukung industri migas Indonesia. Lihat <Link to="/industri/maritim">solusi maritim &amp; offshore TSM</Link> untuk detail.</p>

          <h2 id="faq" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

        </div>

      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#kenapa-watermaker">Kenapa Watermaker Wajib</Link></li>
            <li><Link href="#standar-klasifikasi">Standar Klasifikasi: BKI, SOLAS, IMO</Link></li>
            <li><Link href="#kondisi-marine">Tantangan Kondisi Marine</Link></li>
            <li><Link href="#material-marine-grade">Material Marine-Grade</Link></li>
            <li><Link href="#konfigurasi">Konfigurasi Watermaker</Link></li>
            <li><Link href="#studi-kasus-kri">Studi Kasus KRI TNI AL</Link></li>
            <li><Link href="#offshore-vessel">Watermaker untuk Vessel Offshore</Link></li>
            <li><Link href="#faq">Pertanyaan Umum</Link></li>
          </ul>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Tentang Penulis</h4>
          <div className="author-box">
            <div className="author-av">TS</div>
            <div>
              <div className="author-av-name">Tim Editorial TSM</div>
              <div className="author-av-role">Divisi Teknik &amp; Edukasi</div>
            </div>
          </div>
          <p style={{"fontSize":".84rem","color":"var(--muted)","lineHeight":"1.65"}}>Tim engineering PT Tirta Sumber Makmur dengan pengalaman 24+ tahun di industri water treatment Indonesia.</p>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem]" style={{"background":"linear-gradient(145deg,var(--navy),var(--blue))","border":"none"}}>
          <h4 style={{"color":"rgba(255,255,255,.45)","borderColor":"rgba(255,255,255,.15)"}}>Butuh Konsultasi?</h4>
          <p style={{"fontSize":".86rem","lineHeight":"1.65","marginBottom":"1rem","opacity":".84","color":"#fff"}}>Dapatkan konsultasi gratis dan estimasi biaya dari tim ahli kami.</p>
          <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center","fontSize":".82rem"}} to="/kontak">📞 Konsultasi Sekarang</Link>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Artikel Lainnya</h4>
          <ul style={{"display":"flex","flexDirection":"column","gap":".65rem"}}>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/portofolio/kri">→ Studi Kasus: KRI TNI AL</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/desalinasi-solusi-pulau">→ Desalinasi untuk Pulau Terpencil</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/industri/maritim">→ Solusi Maritim &amp; Offshore</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/desalinasi">→ Sistem SWRO TSM</Link></li>
            <li><Link style={{"fontSize":".84rem","fontWeight":"600","color":"var(--blue)","display":"block"}} to="/artikel">→ Lihat Semua Artikel</Link></li>
          </ul>
        </div>
      </aside>

    </div>
  </div>
</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Membutuhkan Watermaker untuk Kapal atau Offshore?</h2>
    <p>Tim ahli kami siap membantu mulai dari analisis kebutuhan hingga instalasi.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak">📞 Hubungi Kami</Link>
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/industri/maritim">🔍 Solusi Maritim</Link>
    </div>
  </div>
</div>

    </>
  );
};

export default ArtikelRoKapalPerangBki;
