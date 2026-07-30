import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, Droplet } from 'lucide-react';

const IndustriProperti = () => {
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
.app-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem;margin:1.5rem 0}
.app-card{background:var(--white);border:1px solid var(--border);border-radius:10px;padding:1.2rem;border-top:3px solid var(--accent)}
.app-card h4{color:var(--navy);font-size:1rem;margin-bottom:.5rem}
.app-card p{font-size:.85rem;color:var(--muted);margin:0}

` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/industri">Industri</Link> › Properti &amp; Gedung</div>
    <h1>Water Treatment untuk Apartemen, Gedung Perkantoran &amp; Properti</h1>
    <p>Solusi terintegrasi untuk developer, property manager, dan facility management — sistem RO drinking water, softener cooling tower, STP biological, dan greywater recycling untuk kompleks properti modern di Indonesia.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>
        <div className="prose max-w-none text-text">

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Properti modern bukan sekadar bangunan — sebuah apartemen high-rise atau gedung perkantoran adalah ekosistem kompleks yang membutuhkan beberapa sistem water treatment terintegrasi: drinking water untuk penghuni, softener untuk cooling tower AC/chiller, STP untuk limbah domestik, dan kadang greywater recycling untuk efisiensi air. Ketiadaan atau kegagalan salah satu komponen dapat menimbulkan komplain penghuni, downtime AC sentral, sanksi regulasi, hingga penurunan nilai properti.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>PT Tirta Sumber Makmur</strong> menyediakan solusi water treatment end-to-end untuk sektor properti — dari konsultasi tahap design development (DD) bersama konsultan MEP, instalasi saat konstruksi, hingga kontrak perawatan jangka panjang setelah hand-over ke property manager. TSM telah melayani developer, property management firm, dan kontraktor MEP di proyek apartemen, gedung perkantoran, mixed-use, dan kompleks komersial di Jabodetabek dan kota-kota besar.</p>

          <h2 id="kebutuhan-properti" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Kebutuhan Water Treatment di Sektor Properti</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Berbeda dengan industri manufaktur yang fokus pada satu jenis air olahan, properti modern membutuhkan beberapa sistem yang berjalan paralel dengan SLA reliability tinggi karena terkait dengan kenyamanan penghuni dan compliance regulasi:</p>

          <div className="app-grid">
            <div className="app-card"><h4><Droplet className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Drinking Water RO</h4><p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Air minum bebas kontaminan untuk penghuni — distribusi sentral atau refill station per lantai.</p></div>
            <div className="app-card"><h4>❄️ Softener Cooling Tower</h4><p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Penurunan kesadahan untuk makeup cooling tower chiller AC sentral, mencegah scaling dan korosi.</p></div>
            <div className="app-card"><h4>🚿 STP Biological</h4><p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pengolahan limbah domestik (toilet, kamar mandi, dapur) sesuai PermenLHK 68/2016.</p></div>
            <div className="app-card"><h4>♻️ Greywater Recycling</h4><p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Daur ulang air bekas wudhu, AC condensate, atau effluent STP untuk flushing dan irigasi.</p></div>
            <div className="app-card"><h4>🏊 Treatment Kolam Renang</h4><p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem filtrasi pasir + dosing kimia untuk kolam renang clubhouse atau rooftop.</p></div>
            <div className="app-card"><h4>🔥 Boiler Feed Water</h4><p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Treatment untuk boiler air panas (laundry, MEP) di hotel residensial atau hotel apartment.</p></div>
          </div>

          <h2 id="apartemen" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Sistem Water Treatment untuk Apartemen High-Rise</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Apartemen high-rise dengan 100-500 unit memiliki profil kebutuhan water treatment yang konsisten. Distribusi air bersih dilakukan via tangki bawah (raw water tank) → pompa booster → tangki atas tiap zona → distribusi gravitasi ke unit. Treatment dilakukan di tahap raw water (multi-media + softener) dan pada cabang khusus drinking water (RO sentral atau RO + UV per unit).</p>

          <table className="w-full border-collapse my-[1.5rem] text-[0.9rem]">
            <tbody><tr><th>Skala Apartemen</th><th>RO Drinking</th><th>Softener Cooling</th><th>STP Biological</th></tr>
            <tr><td>100-150 unit</td><td>250-500 L/jam</td><td>5-8 m³/jam</td><td>50-100 m³/hari</td></tr>
            <tr><td>150-300 unit</td><td>500-1.000 L/jam</td><td>8-15 m³/jam</td><td>100-200 m³/hari</td></tr>
            <tr><td>300-500 unit</td><td>1.000-2.000 L/jam</td><td>15-25 m³/jam</td><td>200-400 m³/hari</td></tr>
            <tr><td>500+ unit (multi-tower)</td><td>2.000+ L/jam</td><td>25+ m³/jam</td><td>400+ m³/hari</td></tr>
          </tbody></table>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk drinking water, dua pendekatan distribusi yang umum: <strong>sentralisasi penuh</strong> dengan jalur stainless steel terpisah ke kran khusus di tiap unit (positioning premium), atau <strong>refill station</strong> per lantai/lobby yang lebih cost-efficient untuk proyek mid-market.</p>

          <h2 id="perkantoran" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Sistem untuk Gedung Perkantoran</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Gedung perkantoran memiliki kebutuhan berbeda dari apartemen: konsumsi air baku lebih rendah per orang, namun cooling tower load jauh lebih besar karena AC central beroperasi 8-12 jam tiap hari kerja. Drinking water umumnya dilayani melalui dispenser galon atau water station di pantry tiap lantai.</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Cooling tower softener</strong> menjadi sistem paling kritikal — kebocoran TDS atau scaling pada chiller berdampak langsung ke konsumsi listrik (5-15% penurunan efisiensi)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>STP capacity</strong> dihitung berdasarkan rasio karyawan per m² leasable area (umumnya 1 orang per 8-10 m²)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Drinking water station</strong> di tiap lantai mengurangi konsumsi botol plastik — banyak gedung mengejar sertifikasi LEED atau Greenship</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Greywater recycling</strong> dari AC condensate dan air bekas wudhu (untuk gedung dengan musholla) dapat menghemat air bersih 8-15%</li>
          </ul>

          <h2 id="stp-compliance" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">STP &amp; Compliance Lingkungan untuk Properti</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sewage Treatment Plant adalah aspek water treatment di properti yang paling regulated. Permen LHK 68/2016 menetapkan baku mutu air limbah domestik nasional, sementara Pergub di setiap provinsi mengatur ambang batas kapasitas yang wajib STP, frekuensi pelaporan, dan parameter pemantauan. <Link to="/layanan/sertifikasi">Compliance dokumentasi</Link> menjadi tanggung jawab developer dan dilanjutkan ke property manager.</p>

          <div className="info-box bg-ice border border-border rounded-[10px] p-[1.2rem_1.5rem] my-[1.75rem]">
            <strong className="block text-[0.7rem] font-bold uppercase tracking-[0.1em] text-accent mb-[0.38rem]"><ClipboardList className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Parameter baku mutu STP domestik (Permen LHK 68/2016)</strong><br />
            ✓ pH: 6-9 | BOD: max 30 mg/L | COD: max 100 mg/L<br />
            ✓ TSS: max 30 mg/L | Minyak &amp; lemak: max 5 mg/L<br />
            ✓ Amoniak: max 10 mg/L | Total Coliform: max 3.000/100 mL<br />
            ✓ Pelaporan: setiap 3 bulan ke DLH provinsi/kota
          </div>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Teknologi STP yang umum dipasang TSM untuk properti: <strong>Extended Aeration</strong> (aerobic, kompak, suitable apartemen mid-rise), <strong>MBBR</strong> (Moving Bed Biofilm Reactor — efisien lahan, ideal untuk lokasi terbatas), dan <strong>MBR</strong> (Membrane Bio-Reactor — output siap untuk reuse, premium positioning). Pemilihan teknologi tergantung kapasitas, keterbatasan lahan, dan strategi reuse.</p>

          <h2 id="design-considerations" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertimbangan Design &amp; Koordinasi MEP</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Water treatment untuk properti perlu dikoordinasikan sejak tahap Design Development (DD) bersama konsultan MEP, arsitek, dan struktur — bukan tambahan setelah konstruksi. Beberapa pertimbangan kritis:</p>

          <ol className="ml-[1.5rem] my-[1.05rem] list-decimal">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Alokasi ruang plant</strong> — mechanical room di basement biasanya 60-150 m² untuk WTP, plus area STP di belakang gedung 80-300 m²</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Beban listrik</strong> — STP biological konsumsi 6-12 kW/100 m³, harus masuk dalam perhitungan kapasitas genset cadangan</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Akses maintenance</strong> — service hatch, crane access, dan path untuk hauling sludge harus disediakan</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Bunyi &amp; getaran</strong> — blower STP dan pompa harus diisolasi akustik bila berdekatan dengan unit residensial</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Buffer tank</strong> — minimum 8 jam storage untuk drinking water RO untuk peak morning demand</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Distribusi backup</strong> — bypass connection untuk supply darurat bila sistem RO sentral down</li>
          </ol>

          <h2 id="studi-kasus" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Studi Kasus: Apartemen Bekasi 280 Unit</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sebuah developer menengah di Bekasi memberikan <Link to="/layanan/epc">turnkey EPC</Link> water treatment untuk proyek apartemen 280 unit (2 tower) kepada TSM. Lingkup: drinking water RO sentral 800 L/jam dengan distribusi ke 14 refill station (2 per lantai), softener cooling tower 12 m³/jam untuk chiller 250 TR, dan STP MBBR 180 m³/hari.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Beberapa highlight pelaksanaan:</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Engineering &amp; design integration dengan konsultan MEP selama 5 minggu, termasuk koordinasi lokasi pipa stainless ke 14 titik refill</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Manufacturing lokal di workshop TSM Bekasi — lead time 8 minggu (vs 14-16 minggu jika import sistem terpasang)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Instalasi paralel dengan kontraktor MEP utama: WTP plant room dan STP di-handover untuk testing 2 minggu sebelum target operational</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Commissioning + operator training 2 minggu untuk tim property management</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Kontrak perawatan Standard tier 3 tahun setelah hand-over (sekarang berjalan tahun ke-2)</li>
          </ul>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Hasil setelah 18 bulan operasi: zero downtime drinking water, kualitas air STP konsisten lulus Permen LHK 68/2016, refill station dipakai rata-rata 480 galon/hari (jauh di atas estimasi 350), dan tim management berhasil mengurangi konsumsi air PAM 12% via greywater integration tahap 2 yang ditambahkan TSM.</p>

          <h2 id="faq-properti" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa saja sistem water treatment yang dibutuhkan apartemen modern?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Apartemen modern umumnya membutuhkan empat sistem terintegrasi: (1) Filtrasi air baku PAM/sumur untuk distribusi domestik, (2) Sistem RO sentral untuk drinking water, (3) Softener untuk cooling tower AC/chiller dan boiler air panas, (4) STP untuk pengolahan limbah domestik. Beberapa proyek juga mengintegrasikan greywater recycling untuk flushing toilet dan irigasi taman.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa kapasitas drinking water RO untuk apartemen 200 unit?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Estimasi kebutuhan drinking water apartemen: 5-10 liter/orang/hari × jumlah penghuni. Apartemen 200 unit dengan asumsi 2,5 orang/unit = 500 penghuni × 8 L = 4.000 liter/hari. Dengan safety factor 50% untuk peak demand: kapasitas RO sentral 6.000 L/hari (250 L/jam) sudah cukup. Sistem dilengkapi tangki penyimpanan 3.000-5.000 L untuk buffer dan distribusi via pompa booster.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah developer wajib memasang STP di apartemen baru?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ya. Berdasarkan Peraturan Menteri LHK No. 68/2016 dan Pergub di setiap provinsi, kompleks properti dengan beban hidrolik tertentu wajib memiliki IPAL/STP. Untuk apartemen, ambang biasanya &gt;50 unit hunian atau &gt;100 m³/hari air limbah. STP harus mendapat izin operasional dari DLH setempat dan effluent dipantau berkala. Tanpa STP, IMB/PBG dapat ditangguhkan.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa biaya investasi water treatment untuk apartemen baru?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Apartemen mid-rise 150-250 unit: Sistem RO drinking water 250-500 L/jam Rp 180-350 juta, softener cooling tower 5-10 m³/jam Rp 80-150 juta, STP biological 75-150 m³/hari Rp 850 juta - Rp 1,8 miliar. Total investasi water treatment 0,3-0,8% dari nilai konstruksi proyek. Investasi ini wajib dialokasikan dalam BoQ MEP sejak tahap DED.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Bagaimana drinking water RO sentral didistribusikan ke unit?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tiga skema distribusi: (1) Sentralisasi penuh — RO output dipompa via jalur stainless steel terpisah ke kran khusus drinking water di tiap unit (premium project), (2) Refill station per lantai/lobby (cost-efficient), (3) Hybrid — dispenser di amenities plus delivery galon ke unit. Pilihan tergantung positioning proyek dan SOP operasional management.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa umur pakai STP biological untuk apartemen?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tank beton bertulang STP umumnya didesain untuk 25-30 tahun selama struktur tidak retak/bocor. Komponen mekanis (blower, pompa, diffuser): blower 5-7 tahun, pompa submersible 4-6 tahun, diffuser membrane 3-5 tahun. Komponen elektronik 7-10 tahun. Total cost of ownership rata-rata Rp 35-65 juta/tahun untuk STP 100 m³/hari.</p>

          <div style={{"marginTop":"2rem","padding":"2rem","background":"var(--ice)","borderRadius":"12px","borderLeft":"4px solid var(--accent)"}}>
            <h3 style={{"marginBottom":".75rem","color":"var(--navy)"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Konsultasi Water Treatment Proyek Properti Anda</h3>
            <p style={{"marginBottom":"1.25rem","color":"var(--muted)","fontSize":".92rem"}} className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tim TSM siap berdiskusi dengan konsultan MEP, kontraktor, atau langsung dengan developer/property manager — mulai dari konsep design hingga BoQ siap tender. Site survey gratis untuk Jabodetabek.</p>
            <Link style={{"display":"inline-block","padding":".85rem 2rem","background":"var(--blue)","color":"#fff","borderRadius":"8px","fontWeight":"700","fontSize":".96rem","textDecoration":"none"}} to="/kontak">🏢 Konsultasi Proyek Properti →</Link>
          </div>

        </div>
      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#kebutuhan-properti">Kebutuhan Properti</Link></li>
            <li><Link href="#apartemen">Apartemen High-Rise</Link></li>
            <li><Link href="#perkantoran">Gedung Perkantoran</Link></li>
            <li><Link href="#stp-compliance">STP &amp; Compliance</Link></li>
            <li><Link href="#design-considerations">Design &amp; MEP</Link></li>
            <li><Link href="#studi-kasus">Studi Kasus</Link></li>
            <li><Link href="#faq-properti">FAQ</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Industri Lain</h4>
          <ul className="flex flex-col">
            <li><Link to="/industri/hotel">→ Hotel &amp; Resort</Link></li>
            <li><Link to="/industri/rs">→ Rumah Sakit</Link></li>
            <li><Link to="/industri/manufaktur">→ Manufaktur</Link></li>
            <li><Link to="/industri/pltu">→ PLTU</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Produk Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/produk/ro-industri">→ RO Industri</Link></li>
            <li><Link to="/produk/limbah">→ STP &amp; IPAL</Link></li>
            <li><Link to="/produk/membran">→ Water Softener &amp; Filter</Link></li>
            <li><Link to="/produk/uf">→ Ultrafiltrasi</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Layanan Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/layanan/desain">→ Desain &amp; Engineering</Link></li>
            <li><Link to="/layanan/epc">→ Turnkey EPC</Link></li>
            <li><Link to="/layanan/maintenance">→ Kontrak Perawatan</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>

    </>
  );
};

export default IndustriProperti;
