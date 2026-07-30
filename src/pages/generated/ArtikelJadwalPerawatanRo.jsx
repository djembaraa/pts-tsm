import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ArtikelJadwalPerawatanRo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.art-layout{display:grid;grid-template-columns:1fr 290px;gap:3rem;align-items:start}
.art-sticky{position:sticky;top:88px}
.art-meta-bar{display:flex;flex-wrap:wrap;gap:.85rem;align-items:center;margin-bottom:1.5rem;padding-bottom:1.5rem;border-bottom:1px solid var(--border)}
.am-tag{background:var(--accent);color:#fff;font-size:.66rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:.26rem .72rem;border-radius:4px}
.am-info{font-size:.8rem;color:var(--muted);display:flex;align-items:center;gap:.36rem}
.maint-table{width:100%;border-collapse:collapse;margin:1.25rem 0;font-size:.88rem}
.maint-table th,.maint-table td{padding:.7rem .9rem;border:1px solid var(--border);text-align:left;vertical-align:top}
.maint-table th{background:var(--navy);color:#fff;font-weight:700}
.maint-table tr:nth-child(even){background:var(--gray)}
.freq-badge{display:inline-block;padding:.2rem .6rem;background:var(--accent);color:#fff;border-radius:4px;font-size:.72rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase}
.warn-box{background:#fff4e5;border-left:4px solid #f39c12;padding:1.25rem;border-radius:8px;margin:1.5rem 0}
.warn-box h4{color:#9c5510;margin-bottom:.5rem;font-size:1rem}
.warn-box p{margin:0;font-size:.92rem;color:#7a4408}
@media(max-width:1024px){.art-layout{grid-template-columns:1fr}.art-sticky{position:static}}

` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/artikel">Artikel</Link> › Jadwal Perawatan RO</div>
    <h1>Jadwal Perawatan Sistem RO Industri yang Lengkap</h1>
    <p>Sistem RO yang dirawat dengan baik bisa beroperasi dengan efisiensi tinggi selama 15–20 tahun. Yang tidak dirawat? Bermasalah dalam 18 bulan. Berikut jadwal lengkapnya.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>
        <div className="prose max-w-none text-text">

          <div className="art-meta-bar">
            <span className="am-tag">Maintenance</span>
            <span className="am-info">📅 4 Mei 2026</span>
            <span className="am-info">⏱️ 7 menit baca</span>
          </div>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem reverse osmosis industri adalah peralatan presisi yang bekerja non-stop di kondisi kimia agresif — air yang melewati membran setiap detik mengandung mineral, mikroba, dan kontaminan yang siap merusak komponen jika tidak dikontrol dengan baik. Perbedaan antara sistem RO yang beroperasi optimal selama 15–20 tahun dan sistem yang harus dibongkar dalam 3 tahun bukanlah merek atau harga — tetapi <strong>disiplin perawatan</strong>.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Artikel ini adalah panduan lengkap jadwal perawatan preventif sistem RO industri berdasarkan praktik <Link to="/layanan/maintenance">tim service TSM</Link> yang menangani ratusan sistem di Indonesia. Anda bisa adaptasi jadwal ini sebagai SOP internal pabrik, atau gunakan sebagai checklist evaluasi vendor maintenance.</p>

          <h2 id="filosofi-pm" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Filosofi Preventive Maintenance</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ada dua pendekatan ekstrem dalam merawat sistem RO: <strong>reactive maintenance</strong> (perbaiki saat rusak) dan <strong>predictive maintenance</strong> (data-driven dengan IoT monitoring). Untuk mayoritas pabrik di Indonesia, jalan tengah <strong>preventive maintenance</strong> adalah yang paling cost-effective — perawatan terjadwal berdasarkan jam operasi, dengan logbook konsisten dan respons proaktif terhadap tren parameter.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Aturan sederhana: setiap menit perawatan terjadwal menghemat 10 menit perbaikan emergency. Setiap rupiah maintenance kontrak menghemat 5–10 rupiah biaya breakdown.</p>

          <h2 id="harian" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Inspeksi Harian <span className="freq-badge">Setiap Hari</span></h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Inspeksi harian harus dilakukan oleh operator plant pada setiap shift. Tujuannya: deteksi dini abnormalitas. Estimasi waktu: 10–15 menit per shift.</p>

          <table className="maint-table">
            <tbody><tr><th>Parameter</th><th>Yang Dicatat</th><th>Range Normal Tipikal</th></tr>
            <tr><td>Tekanan feed</td><td>Reading PI feed water</td><td>2 – 4 bar</td></tr>
            <tr><td>Tekanan operasi RO</td><td>Reading PI sebelum membran</td><td>10 – 16 bar (BWRO)<br />55 – 70 bar (SWRO)</td></tr>
            <tr><td>Tekanan reject</td><td>Reading PI line concentrate</td><td>0,5 – 1,5 bar di bawah feed</td></tr>
            <tr><td>Flow permeate</td><td>Reading FI line permeate</td><td>±5% dari design flow</td></tr>
            <tr><td>Flow reject</td><td>Reading FI line concentrate</td><td>Sesuai recovery rate</td></tr>
            <tr><td>Konduktivitas permeate</td><td>Reading conductivity meter</td><td>&lt; 50 µS/cm (BWRO)<br />&lt; 600 µS/cm (SWRO)</td></tr>
            <tr><td>pH permeate</td><td>Reading pH meter</td><td>5,5 – 6,5 (sebelum remineralisasi)</td></tr>
            <tr><td>Suhu air</td><td>Reading TI</td><td>20 – 30°C</td></tr>
            <tr><td>Visual inspeksi</td><td>Kebocoran, suara abnormal, getaran</td><td>Tidak ada</td></tr>
          </tbody></table>

          <div className="warn-box">
            <h4>⚠️ Trigger untuk Action Segera</h4>
            <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Jika konduktivitas permeate naik &gt;15% dari baseline, atau differential pressure (feed - reject) naik &gt;15%, ini indikasi membran fouling atau kerusakan. Jangan abaikan — segera analisa dan ambil tindakan korektif.</p>
          </div>

          <h2 id="mingguan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Maintenance Mingguan <span className="freq-badge">Setiap Minggu</span></h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Perawatan mingguan biasanya dilakukan oleh operator senior atau teknisi maintenance, durasi 1–2 jam:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Cleaning panel kontrol &amp; HMI:</strong> Bersihkan dari debu, cek tampilan tidak ada error</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Inspeksi cartridge filter:</strong> Cek differential pressure, ganti jika &gt;1 bar dari kondisi baru</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Cek dosing kimia:</strong> Antiscalant, pH adjuster, biocide — pastikan reservoir tidak habis</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sampling air baku &amp; permeate:</strong> Test TDS, hardness, free chlorine untuk monitoring tren</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Cek logbook:</strong> Review tren parameter mingguan, dokumentasikan deviasi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Inspeksi area plant:</strong> Genangan air, korosi, label peringatan, lighting</li>
          </ul>

          <h2 id="bulanan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Maintenance Bulanan <span className="freq-badge">Setiap Bulan</span></h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Maintenance bulanan biasanya dilakukan oleh teknisi berpengalaman, durasi 4–6 jam (sistem menengah). Aktivitas utama:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Penggantian cartridge filter:</strong> Tipikal 5 µm, brand seperti Pentek atau setara</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kalibrasi instrumen:</strong> pH meter, conductivity meter, ORP meter (jika ada)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Inspeksi pompa HP:</strong> Vibrasi, suara, suhu motor, level oli (jika applicable)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Cek koneksi listrik panel:</strong> Tidak ada kabel longgar atau tanda-tanda overheating</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Test fungsi safety:</strong> Low pressure switch, high pressure switch, level switch</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Backup data SCADA:</strong> Export historical trend untuk analisis</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Lab analysis:</strong> Sampel air ke lab untuk parameter lengkap (jika kritikal)</li>
          </ul>

          <h2 id="kuartalan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Maintenance Kuartalan <span className="freq-badge">Setiap 3 Bulan</span></h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Setiap 3 bulan, lakukan maintenance yang lebih mendalam:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>CIP (Clean-In-Place) preventif:</strong> Cleaning kimia membran dengan asam dan basa untuk menghilangkan scaling dan fouling biologis ringan</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sanitasi sistem distribusi:</strong> Khususnya untuk sistem RO drinking water, hemodialisis, atau farmasi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Inspeksi tangki:</strong> Tangki feed dan permeate — cek korosi, biofilm, sedimen</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Tightening &amp; greasing:</strong> Baut-baut frame, bearing pompa, motor</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Penggantian membran cartridge halus:</strong> Filter 1 µm atau 0,2 µm jika ada</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Performance test:</strong> Bandingkan output aktual dengan design — recovery rate, salt rejection, flux</li>
          </ul>

          <h2 id="tahunan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Maintenance Tahunan <span className="freq-badge">Setiap Tahun</span></h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Maintenance tahunan adalah overhaul mendalam, biasanya dilakukan saat scheduled shutdown. Durasi 1–3 hari, melibatkan tim service vendor:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>CIP intensif:</strong> Cleaning kimia mendalam dengan dosis dan waktu kontak lebih lama</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Inspeksi membran (membrane autopsy):</strong> Untuk membran yang menunjukkan penurunan performa, lakukan autopsy untuk identifikasi root cause</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Servis pompa HP:</strong> Penggantian seal, plunger, valve — sesuai rekomendasi pabrik</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Penggantian instrumen kalibrasi tahunan:</strong> Sensor pH dan conductivity biasanya perlu diganti setiap 12–18 bulan</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Update software PLC/HMI:</strong> Patch keamanan, firmware update jika applicable</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Audit dokumentasi:</strong> Review SOP, training records, calibration certificates</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Re-training operator:</strong> Refresh training pada SOP, troubleshooting, dan emergency response</li>
          </ul>

          <h2 id="multi-tahun" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Maintenance Multi-Tahun <span className="freq-badge">Setiap 3-7 Tahun</span></h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Beberapa komponen punya umur lebih panjang dan diganti dalam interval multi-tahun:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Membran RO (3–7 tahun):</strong> Tergantung kualitas air baku, intensitas operasi, dan disiplin maintenance. BWRO tipikal 5–7 tahun, SWRO 4–6 tahun.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pompa HP overhaul (5 tahun):</strong> Bukan penggantian total, tapi rebuild dengan parts baru.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pressure vessel inspection (5 tahun):</strong> Hydrostatic test untuk memastikan masih dalam batas safety.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Tangki cleaning &amp; recoating (5–10 tahun):</strong> Untuk tangki carbon steel atau tangki yang menunjukkan tanda korosi.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Panel listrik refurbishment (8–12 tahun):</strong> Penggantian relay, MCB, dan komponen aging.</li>
          </ul>

          <h2 id="logbook" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pentingnya Logbook &amp; Dokumentasi</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Maintenance tanpa dokumentasi sama dengan tidak maintenance. Setiap aktivitas harus dicatat dalam logbook (digital atau fisik) yang berisi: tanggal, jam, nama operator/teknisi, parameter terbaca, aktivitas yang dilakukan, parts yang diganti, dan observasi. Logbook ini adalah aset penting saat:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Troubleshooting masalah yang muncul</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Klaim warranty ke vendor</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Audit eksternal (CPOB, ISO, KARS)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Handover ke operator baru</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Evaluasi penggantian membran atau komponen</li>
          </ul>

          <h2 id="kontrak" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Kontrak Maintenance vs In-House</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk pabrik dengan sistem RO menengah-besar atau yang kritikal untuk operasi, <Link to="/layanan/maintenance">kontrak maintenance dengan vendor</Link> biasanya lebih cost-effective dibanding membangun tim in-house. Vendor menyediakan akses ke engineer berpengalaman, stock spare parts, dan tools yang tidak ekonomis dimiliki sendiri (misalnya membrane autopsy equipment). TSM menyediakan paket maintenance Basic, Standard, dan Premium dengan SLA respons yang berbeda — sesuai tingkat kritikalitas operasi pabrik Anda.</p>

          <div style={{"marginTop":"2rem","padding":"2rem","background":"var(--ice)","borderRadius":"12px","borderLeft":"4px solid var(--accent)"}}>
            <h3 style={{"marginBottom":".75rem","color":"var(--navy)"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Butuh Bantuan Setup PM Schedule?</h3>
            <p style={{"marginBottom":"1.25rem","color":"var(--muted)","fontSize":".92rem"}} className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM menyediakan paket setup preventive maintenance untuk sistem RO yang sudah ada (terlepas dari brand asli). Termasuk: SOP custom, training operator, dan opsi maintenance contract.</p>
            <Link style={{"display":"inline-block","padding":".85rem 2rem","background":"var(--blue)","color":"#fff","borderRadius":"8px","fontWeight":"700","fontSize":".96rem"}} to="/layanan/maintenance">🔧 Lihat Layanan Maintenance →</Link>
          </div>

        </div>
      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#filosofi-pm">Filosofi PM</Link></li>
            <li><Link href="#harian">Inspeksi Harian</Link></li>
            <li><Link href="#mingguan">Mingguan</Link></li>
            <li><Link href="#bulanan">Bulanan</Link></li>
            <li><Link href="#kuartalan">Kuartalan</Link></li>
            <li><Link href="#tahunan">Tahunan</Link></li>
            <li><Link href="#multi-tahun">Multi-Tahun</Link></li>
            <li><Link href="#logbook">Logbook</Link></li>
            <li><Link href="#kontrak">Kontrak vs In-House</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Layanan Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/layanan/maintenance">→ Maintenance Contract</Link></li>
            <li><Link to="/layanan/darurat">→ Layanan Darurat</Link></li>
            <li><Link to="/layanan/audit">→ Audit Sistem</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Artikel Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/artikel/5-kesalahan-perawatan-ro">→ 5 Kesalahan Perawatan</Link></li>
            <li><Link to="/artikel/monitoring-kualitas-air-ro">→ Monitoring Kualitas Air</Link></li>
            <li><Link to="/artikel/cara-pilih-vendor-water-treatment">→ Cara Pilih Vendor</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>

    </>
  );
};

export default ArtikelJadwalPerawatanRo;
