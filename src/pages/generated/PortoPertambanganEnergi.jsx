import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, Ship } from 'lucide-react';


const PortoPertambanganEnergi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.cs-hero{position:relative;border-radius:14px;overflow:hidden;margin-bottom:2rem;height:380px}
.cs-hero img{width:100%;height:100%;object-fit:cover}
.cs-hero .cs-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(10,34,64,.88),rgba(10,34,64,.2));display:flex;align-items:flex-end;padding:2rem;color:#fff}
.cs-hero .cs-overlay h2{font-family:'Barlow Condensed',sans-serif;font-size:2.2rem;font-weight:900;color:#fff;letter-spacing:.01em}
.cs-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1rem;margin:2rem 0}
.cs-stat{background:var(--ice);border:1px solid var(--border);border-radius:10px;padding:1.2rem 1rem;text-align:center}
.cs-stat .num{font-family:'Barlow Condensed',sans-serif;font-size:1.8rem;font-weight:900;color:var(--blue);line-height:1}
.cs-stat .lbl{font-size:.74rem;color:var(--muted);margin-top:.4rem;text-transform:uppercase;letter-spacing:.04em}
.proj-table{width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:.88rem;background:var(--white)}
.proj-table th,.proj-table td{padding:.7rem .9rem;border:1px solid var(--border);text-align:left;vertical-align:top}
.proj-table th{background:var(--navy);color:#fff;font-weight:700;font-size:.8rem;letter-spacing:.04em;text-transform:uppercase}
.proj-table tr:nth-child(even) td{background:var(--ice)}
.proj-table .yr{font-weight:700;color:var(--blue);white-space:nowrap}
.cat-section{background:var(--white);border:1px solid var(--border);border-radius:12px;padding:1.5rem;margin-bottom:1.5rem}
.cat-section h3{font-family:'Barlow Condensed',sans-serif;font-size:1.4rem;color:var(--navy);margin-bottom:1rem;padding-bottom:.6rem;border-bottom:2px solid var(--blue)}
.art-layout{display:grid;grid-template-columns:1fr 290px;gap:3rem;align-items:start}
.art-sticky{position:sticky;top:88px}
@media(max-width:1024px){.art-layout{grid-template-columns:1fr}.art-sticky{position:static}.cs-hero{height:260px}.proj-table{font-size:.78rem}.proj-table th,.proj-table td{padding:.5rem .55rem}}
.featured-card{background:linear-gradient(135deg,#0a2240 0%,#1e4a7b 100%);color:#fff;border-radius:12px;padding:1.5rem;margin-bottom:1.5rem}
.featured-card h4{color:#fff;font-family:'Barlow Condensed',sans-serif;font-size:1.3rem;margin-bottom:.5rem}
.featured-card p{color:rgba(255,255,255,.85);font-size:.9rem;line-height:1.6}

` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/portofolio">Portofolio</Link> › Pertambangan &amp; Energi</div>
    <h1>Portofolio Pertambangan &amp; Energi — WTP, BWRO &amp; Demineralisasi</h1>
    <p>Sejak 2009, TSM telah menjadi mitra water treatment untuk perusahaan tambang batubara, oil &amp; gas service, dan pembangkit listrik (PLTD/PLTU/PLN) di lokasi-lokasi terpencil seluruh Indonesia.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>

        <div className="cs-hero">
          <img src="images/foto-pemasangan-lapangan.jpg" alt="Water Treatment Tambang &amp; Energi" />
          <div className="cs-overlay">
            <h2>Mitra Water Treatment di Site Tambang &amp; PLTD Terpencil</h2>
          </div>
        </div>

        <div className="cs-stats">
          <div className="cs-stat"><div className="num">40+</div><div className="lbl">Site Tambang &amp; Energi</div></div>
          <div className="cs-stat"><div className="num">25+</div><div className="lbl">PLTD/PLN Site</div></div>
          <div className="cs-stat"><div className="num">17+</div><div className="lbl">Tahun Pengalaman Sektor</div></div>
          <div className="cs-stat"><div className="num">Sumatra-Papua</div><div className="lbl">Coverage Area</div></div>
        </div>

        <h2>Tentang Sektor Pertambangan &amp; Energi</h2>
        <p>Operasi tambang dan pembangkit di lokasi remote membutuhkan air bersih untuk kebutuhan operasional (boiler, cooling, washing, drinking water mess karyawan), sementara sumber air baku biasanya terbatas: air sungai keruh, air payau, atau bahkan air laut. TSM mendesain sistem terintegrasi WTP + Clarifier + UF + RO yang dapat beroperasi mandiri di site terpencil dengan minim perawatan.</p>

        <div className="featured-card">
          <h4>📌 Studi Kasus Lengkap: Halliburton Sarulla</h4>
          <p>Untuk studi kasus ultrafiltration system 47.000 LPD untuk proyek Halliburton di Sarulla, Sumatra Utara, baca <Link style={{"color":"#7dd3fc","fontWeight":"700","textDecoration":"underline"}} to="/portofolio/halliburton">studi kasus Halliburton →</Link></p>
        </div>

        <h2>Daftar Proyek per Sektor</h2>

        <div className="cat-section">
          <h3>⛏️ Tambang Batubara &amp; Mineral</h3>
          <table className="proj-table">
            <thead>
              <tr><th style={{"width":"14%"}}>Tahun</th><th>Sistem</th><th>Klien &amp; Lokasi</th></tr>
            </thead>
            <tbody>
              <tr><td className="yr">Mar 2026</td><td>RO System Cap. 1.000 LPH</td><td>PT Morowali Karya Gemilang — Morowali</td></tr>
              <tr><td className="yr">Agu 2025</td><td>RO Cap. 1.000 LPH</td><td>PT Morowali Sentra Mining — Morowali</td></tr>
              <tr><td className="yr">Sep 2024</td><td>BWRO Cap. 210 LPH</td><td>PT Baratama Putra Perkasa — Distrik Simpang Burung, Kalteng</td></tr>
              <tr><td className="yr">Mei-Okt 2023</td><td>WTP 5.000 LPH (4 Site) &amp; DWS 500 LPH</td><td>PT Hillconjaya Sakti — Site WBN, AKP, Whs Ibu, Whs Abbr (Sulawesi)</td></tr>
              <tr><td className="yr">Apr 2011</td><td>WTP &amp; BWRO System</td><td>International Prima Coal — Bantuas, Palaran, Samarinda</td></tr>
              <tr><td className="yr">Jan 2011-12</td><td>WTP &amp; BWRO System (5 Site)</td><td>PT Atlas Resources / PT Gorby Putra Utama — Palembang</td></tr>
              <tr><td className="yr">Mar 2012</td><td>Demineralisasi &amp; BWRO</td><td>PT Karya Borneo Agung — KBA Mining &amp; Port Project, Kutai Barat</td></tr>
              <tr><td className="yr">Mei 2011</td><td>BWRO System</td><td>Kayan Putra Utama Coal (KPUC) — Tenggarong Seberang</td></tr>
              <tr><td className="yr">Apr 2010</td><td>Demineralisasi &amp; BWRO</td><td>PT Madhani Talatah Nusantara — Teluk Bayur</td></tr>
              <tr><td className="yr">Feb 2009</td><td>WTP &amp; BWRO</td><td>PT Berau Bara Energi — Berau, Kaltim</td></tr>
              <tr><td className="yr">Feb 2009</td><td>WTP &amp; BWRO</td><td>PT Optima Persada Energi — DKB Project, Berau</td></tr>
              <tr><td className="yr">Jul 2012</td><td>SWRO Container 30 m³/day</td><td>PT Adani Global / PT Pinta Karya Makmur — Bunyu, Samarinda</td></tr>
              <tr><td className="yr">2010-2011</td><td>RO &amp; Demineralisasi</td><td>PT Energi Kaltim Persada — Berau</td></tr>
            </tbody>
          </table>
        </div>

        <div className="cat-section">
          <h3>⚡ Pembangkit Listrik (PLTD / PLTU / PLN)</h3>
          <table className="proj-table">
            <thead>
              <tr><th style={{"width":"14%"}}>Tahun</th><th>Sistem</th><th>Site / Lokasi</th></tr>
            </thead>
            <tbody>
              <tr><td className="yr">Jun 2024</td><td>SWRO Cap. 11.000 LPD</td><td>PLTD Makassar — PT Multindo Anugerah Perkasa</td></tr>
              <tr><td className="yr">Jul 2024</td><td>RO System Cap. 500 LPD</td><td>Pertamina Lampung — CV Lumas Multi Sarana</td></tr>
              <tr><td className="yr">Apr 2019</td><td>RO Seawater 1.000 LPD (2 unit)</td><td>PT Kapuas Tirta Sari — PLTD Pontianak</td></tr>
              <tr><td className="yr">Sep 2016</td><td>RO &amp; Demineralisasi 500 LPH</td><td>PLTD Ketapang — CV Kapuas Tirta Sari</td></tr>
              <tr><td className="yr">Jul 2016</td><td>RO Seawater &amp; Demineralisasi</td><td>PLTD Singkawang — CV Kapuas Tirta Sari</td></tr>
              <tr><td className="yr">Sep 2016</td><td>UF &amp; RO Cap. 1.000-1.500 LPH</td><td>PLTD Lopana &amp; PLTD Bitung — CV Sepakat Perdana Abadi</td></tr>
              <tr><td className="yr">Jul 2017</td><td>UF &amp; RO Cap. 1.000 LPH (3 Unit)</td><td>PLTD Kotaraya, PLTD Nopi, PLTD Tolitoli — Sulawesi Tengah</td></tr>
              <tr><td className="yr">Agu 2015</td><td>UF &amp; RO Cap. 1.500 LPH</td><td>PLTD Pringgabaya — Lombok Timur</td></tr>
              <tr><td className="yr">Des 2014</td><td>RO &amp; UF Cap. 1.000-1.500 LPH (3 Site)</td><td>PLTD Sungai Raya, PLTD Sukaharja, PLTD Menyurai — Kalimantan</td></tr>
              <tr><td className="yr">Des 2014</td><td>RO Seawater Cap. 10 m³/day &amp; RO 250 LPH (3 Site)</td><td>PLTD Siantan, PLTD Engkahan, PLTD Jasa — Kalimantan</td></tr>
              <tr><td className="yr">Jan 2018</td><td>UF &amp; RO Cap. 500 LPH</td><td>PLTD Paleleh — Tolitoli</td></tr>
              <tr><td className="yr">Okt 2013</td><td>RO &amp; Clarifier System (5 Site)</td><td>PLTD Sungai Raya, Sintang, Palu, Luwuk, Gorontalo</td></tr>
              <tr><td className="yr">Jul 2013</td><td>Clarifier &amp; BWRO System</td><td>PLN Manado — CV Sepakat Perdana Abadi</td></tr>
              <tr><td className="yr">Jan 2018</td><td>Softener Filter Cap. 25 m³/jam</td><td>PLTD Rengat — PT Berkat Manunggal Jaya</td></tr>
              <tr><td className="yr">Sep 2013</td><td>RO Cap. 500 LPH</td><td>Perumahan Wale — PLTD Sulutenggo</td></tr>
              <tr><td className="yr">Des 2016</td><td>RO Cap. 1.000 LPH &amp; UF System</td><td>PLTD Komatamubagu — CV Dianju Berkat</td></tr>
              <tr><td className="yr">Apr 2019</td><td>RO Seawater Cap. 1.000 LPD (2 unit)</td><td>PLTD Pontianak</td></tr>
            </tbody>
          </table>
        </div>

        <div className="cat-section">
          <h3>🛢️ Oil &amp; Gas / Petroleum Service</h3>
          <table className="proj-table">
            <thead>
              <tr><th style={{"width":"14%"}}>Tahun</th><th>Sistem</th><th>Klien &amp; Lokasi</th></tr>
            </thead>
            <tbody>
              <tr><td className="yr">Agu 2015</td><td>Ultrafiltration System Cap. 47.000 LPD (7 Set)</td><td>PT Halliburton — Sarulla, Sumatra Utara — <Link to="/portofolio/halliburton">studi kasus</Link></td></tr>
              <tr><td className="yr">Nov 2015</td><td>Ultrafiltration System</td><td>PT Exspan Petrogas Intranusa — EPI Project Sarulla, Medan</td></tr>
              <tr><td className="yr">Mei 2021</td><td>SWRO Cap. 40 m³/day &amp; RO Drinking 200 LPH</td><td>PT Petrocean Indo Pasific — Vessel Hendropriyono III</td></tr>
              <tr><td className="yr">Feb 2019</td><td>SWRO Cap. 12.000 LPD</td><td>PT Tridaya Patra Marine — Kapal Patra Offshore Batam</td></tr>
              <tr><td className="yr">Jul 2024</td><td>SWRO Cap. 24 TPD</td><td>PT Win Offshore — Kapal Winposh Resolve, Surabaya</td></tr>
            </tbody>
          </table>
        </div>

        <div className="cat-section">
          <h3><Ship className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Pelabuhan</h3>
          <table className="proj-table">
            <thead>
              <tr><th style={{"width":"14%"}}>Tahun</th><th>Sistem</th><th>Klien &amp; Lokasi</th></tr>
            </thead>
            <tbody>
              <tr><td className="yr">Agu 2023</td><td>Optimalisasi SWRO C Cap. 1.100 m³/day</td><td>PT Energi Pelabuhan Indonesia — Pelindo Tanjung Priok — <Link to="/portofolio/pelindo">studi kasus</Link></td></tr>
            </tbody>
          </table>
        </div>

        <h2>Mengapa TSM Cocok untuk Sektor Tambang &amp; Energi</h2>
        <ul>
          <li><strong>Pengalaman Site Terpencil</strong> — TSM telah memasang sistem di Berau, Tolitoli, Halmahera, Pontianak, Sintang, Luwuk, Gorontalo, dan banyak lokasi remote lainnya.</li>
          <li><strong>Sistem Terintegrasi</strong> — kombinasi Clarifier + UF + RO + Demineralisasi disesuaikan dengan kualitas air baku site dan kebutuhan operasional.</li>
          <li><strong>Skid &amp; Container Mounted</strong> — sistem dapat dikirim siap pasang dalam container 20'/40' untuk kemudahan logistik ke remote site.</li>
          <li><strong>Spare Parts &amp; After-Sales</strong> — TSM menyediakan suku cadang membran dan service untuk seluruh durasi operasi.</li>
          <li><strong>Support Multi-Stage Process</strong> — RO, Demineralisasi, Softener untuk berbagai aplikasi: drinking water mess, boiler feed, process water, washing.</li>
        </ul>

      </article>

      <aside className="art-sticky">
        <div style={{"background":"var(--ice)","border":"1px solid var(--border)","borderRadius":"10px","padding":"1.5rem","marginBottom":"1rem"}}>
          <h4 style={{"fontFamily":"'Barlow Condensed',sans-serif","fontSize":"1.2rem","color":"var(--navy)","marginBottom":".8rem"}}>Untuk Site Tambang / PLTD / Oil &amp; Gas</h4>
          <p style={{"fontSize":".85rem","color":"var(--muted)","lineHeight":"1.6","marginBottom":"1rem"}}>TSM menangani spesifikasi sampai instalasi turnkey untuk site terpencil dengan logistik kompleks.</p>
          <Link style={{"display":"block","textAlign":"center","padding":".7rem","background":"var(--blue)","color":"#fff","borderRadius":"6px","fontWeight":"700","textDecoration":"none","fontSize":".85rem"}} to="/kontak">📞 Konsultasi Site</Link>
        </div>

        <div style={{"background":"var(--white)","border":"1px solid var(--border)","borderRadius":"10px","padding":"1.5rem"}}>
          <h4 style={{"fontFamily":"'Barlow Condensed',sans-serif","fontSize":"1.1rem","color":"var(--navy)","marginBottom":".8rem"}}>Halaman Terkait</h4>
          <ul style={{"listStyle":"none","padding":"0","margin":"0","fontSize":".85rem"}}>
            <li style={{"padding":".5rem 0","borderBottom":"1px solid var(--border)"}}><Link style={{"color":"var(--text)","textDecoration":"none"}} to="/portofolio/halliburton">→ Studi Kasus Halliburton</Link></li>
            <li style={{"padding":".5rem 0","borderBottom":"1px solid var(--border)"}}><Link style={{"color":"var(--text)","textDecoration":"none"}} to="/portofolio/pelindo">→ Studi Kasus Pelindo</Link></li>
            <li style={{"padding":".5rem 0","borderBottom":"1px solid var(--border)"}}><Link style={{"color":"var(--text)","textDecoration":"none"}} to="/industri/pltu">→ Industri PLTU</Link></li>
            <li style={{"padding":".5rem 0","borderBottom":"1px solid var(--border)"}}><Link style={{"color":"var(--text)","textDecoration":"none"}} to="/produk/demi">→ Demineralisasi</Link></li>
            <li style={{"padding":".5rem 0"}}><Link style={{"color":"var(--text)","textDecoration":"none"}} to="/layanan/epc">→ Layanan EPC</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Site Anda Membutuhkan Air Bersih?</h2>
    <p>TSM siap survei lokasi, analisa air baku, dan menawarkan solusi water treatment yang andal di lingkungan operasi paling menantang.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak">📞 Diskusi Site</Link>
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/layanan/feasibility"><ClipboardList className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Studi Kelayakan</Link>
    </div>
  </div>
</div>

    </>
  );
};

export default PortoPertambanganEnergi;
