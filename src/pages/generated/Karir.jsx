import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, Wrench, Building, Activity } from 'lucide-react';


const Karir = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.job-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:1.5rem}
.job-card{background:var(--white);border:1px solid var(--border);border-radius:12px;padding:1.8rem;transition:var(--t);position:relative}
.job-card:hover{transform:translateY(-4px);box-shadow:var(--shh);border-color:var(--accent)}
.job-type{font-size:.66rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#fff;padding:.22rem .7rem;border-radius:4px;display:inline-block;margin-bottom:.8rem}
.job-card h3{font-size:1.05rem;font-weight:700;color:var(--navy);margin-bottom:.4rem}
.job-dept{font-size:.8rem;color:var(--muted);margin-bottom:.9rem;display:flex;align-items:center;gap:.4rem}
.job-tags{display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1rem}
.job-tag{font-size:.72rem;font-weight:600;padding:.2rem .65rem;background:var(--ice);border:1px solid var(--border);border-radius:20px;color:var(--text)}
.job-footer{display:flex;align-items:center;justify-content:space-between;padding-top:1rem;border-top:1px solid var(--border)}
.job-footer span{font-size:.76rem;color:var(--muted)}
.benefit-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:1.2rem}
.ben-card{background:var(--white);border:1px solid var(--border);border-radius:10px;padding:1.5rem;text-align:center;transition:var(--t)}
.ben-card:hover{border-color:var(--accent);transform:translateY(-3px)}
.ben-ico{font-size:2rem;margin-bottom:.7rem}
.ben-card h4{font-size:.9rem;font-weight:700;color:var(--navy);margin-bottom:.35rem}
.ben-card p{font-size:.8rem;color:var(--muted);line-height:1.6}
.apply-form{background:var(--gray);border:1px solid var(--border);border-radius:14px;padding:2.5rem;max-width:700px;margin:0 auto}
.apply-form h3{font-size:1.2rem;font-weight:700;color:var(--navy);margin-bottom:.4rem}
.apply-form p{font-size:.88rem;color:var(--muted);margin-bottom:1.8rem}

` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › Perusahaan › Karir</div>
    <h1>Bergabunglah dengan Tim TSM</h1>
    <p>Kami selalu mencari talenta terbaik yang bersemangat untuk berkontribusi dalam misi kami menyediakan air bersih berkualitas bagi Indonesia.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-center max-w-[600px] mx-auto mb-[3rem] "><span className="inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-ice px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem] border border-border">Lowongan Terbuka</span><h2>Posisi yang Tersedia</h2><p>Temukan peluang karir yang sesuai dengan keahlian dan passion Anda.</p><div className="w-[36px] h-[3px] bg-gradient-to-r from-blue to-accent rounded-[2px] mx-auto mt-[0.85rem]"></div></div>
    <div className="job-grid">
      <div className="job-card ">
        <span className="job-type" style={{"background":"var(--blue)"}}>Full Time</span>
        <h3>Field Service Engineer</h3>
        <div className="job-dept">🔧 Engineering &amp; After Sales &nbsp;·&nbsp; 📍 Bekasi (Jakarta &amp; Sekitarnya)</div>
        <p style={{"fontSize":".86rem","color":"var(--muted)","lineHeight":"1.65","marginBottom":".9rem"}}>Bertanggung jawab atas instalasi, komisioning, perawatan, dan perbaikan sistem RO dan water treatment di lokasi klien di wilayah Jabodetabek dan sekitarnya.</p>
        <div className="job-tags"><span className="job-tag">RO System</span><span className="job-tag">Instalasi</span><span className="job-tag">Troubleshooting</span><span className="job-tag">Komisioning</span></div>
        <div className="job-footer"><span>Min. D3 Teknik Mesin/Kimia</span><Link href="#apply" className="btn-nav" style={{"fontSize":".72rem","padding":".38rem .9rem"}}>Lamar →</Link></div>
      </div>
      <div className="job-card ">
        <span className="job-type" style={{"background":"var(--accent)"}}>Full Time</span>
        <h3>Sales Engineer</h3>
        <div className="job-dept">💼 Sales &amp; Marketing &nbsp;·&nbsp; 📍 Bekasi / Remote</div>
        <p style={{"fontSize":".86rem","color":"var(--muted)","lineHeight":"1.65","marginBottom":".9rem"}}>Membangun dan menjaga hubungan dengan klien industri, mempresentasikan solusi water treatment, dan menyusun proposal teknis yang memenangkan kontrak baru.</p>
        <div className="job-tags"><span className="job-tag">B2B Sales</span><span className="job-tag">Technical Proposal</span><span className="job-tag">Industri</span><span className="job-tag">Presentasi</span></div>
        <div className="job-footer"><span>Min. S1 Teknik / Sains</span><Link href="#apply" className="btn-nav" style={{"fontSize":".72rem","padding":".38rem .9rem"}}>Lamar →</Link></div>
      </div>
      <div className="job-card ">
        <span className="job-type" style={{"background":"var(--navy)"}}>Full Time</span>
        <h3>Process Engineer / Desain RO</h3>
        <div className="job-dept">📐 Engineering &nbsp;·&nbsp; 📍 Bekasi</div>
        <p style={{"fontSize":".86rem","color":"var(--muted)","lineHeight":"1.65","marginBottom":".9rem"}}>Merancang sistem water treatment dari analisis air baku, sizing equipment, pembuatan P&amp;ID, hingga pemilihan komponen yang optimal untuk berbagai skala proyek.</p>
        <div className="job-tags"><span className="job-tag">AutoCAD / P&amp;ID</span><span className="job-tag">ROSA / IMSDesign</span><span className="job-tag">Teknik Kimia</span><span className="job-tag">Desain Sistem</span></div>
        <div className="job-footer"><span>Min. S1 Teknik Kimia/Lingkungan</span><Link href="#apply" className="btn-nav" style={{"fontSize":".72rem","padding":".38rem .9rem"}}>Lamar →</Link></div>
      </div>
      <div className="job-card ">
        <span className="job-type" style={{"background":"var(--sky)"}}>Part Time / Kontrak</span>
        <h3>Teknisi Lapangan</h3>
        <div className="job-dept"><Wrench className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> After Sales &nbsp;·&nbsp; 📍 Jabodetabek</div>
        <p style={{"fontSize":".86rem","color":"var(--muted)","lineHeight":"1.65","marginBottom":".9rem"}}>Melaksanakan perawatan preventif, penggantian filter dan komponen, serta troubleshooting dasar sistem RO dan water treatment di lokasi klien.</p>
        <div className="job-tags"><span className="job-tag">Mekanik</span><span className="job-tag">Listrik Dasar</span><span className="job-tag">Perpipaan</span><span className="job-tag">Field Work</span></div>
        <div className="job-footer"><span>Min. SMK Teknik</span><Link href="#apply" className="btn-nav" style={{"fontSize":".72rem","padding":".38rem .9rem"}}>Lamar →</Link></div>
      </div>
      <div className="job-card ">
        <span className="job-type" style={{"background":"var(--blue)"}}>Full Time</span>
        <h3>Project Manager</h3>
        <div className="job-dept"><Building className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Proyek &nbsp;·&nbsp; 📍 Bekasi</div>
        <p style={{"fontSize":".86rem","color":"var(--muted)","lineHeight":"1.65","marginBottom":".9rem"}}>Memimpin pelaksanaan proyek EPC water treatment dari perencanaan, pengadaan material, koordinasi tim lapangan, hingga serah terima proyek kepada klien.</p>
        <div className="job-tags"><span className="job-tag">Project Management</span><span className="job-tag">EPC</span><span className="job-tag">Pengadaan</span><span className="job-tag">Koordinasi Tim</span></div>
        <div className="job-footer"><span>Min. S1 Teknik, pengalaman 3 thn</span><Link href="#apply" className="btn-nav" style={{"fontSize":".72rem","padding":".38rem .9rem"}}>Lamar →</Link></div>
      </div>
      <div className="job-card ">
        <span className="job-type" style={{"background":"var(--accent)"}}>Full Time</span>
        <h3>Admin &amp; Customer Service</h3>
        <div className="job-dept"><ClipboardList className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Administrasi &nbsp;·&nbsp; 📍 Bekasi</div>
        <p style={{"fontSize":".86rem","color":"var(--muted)","lineHeight":"1.65","marginBottom":".9rem"}}>Menangani administrasi perkantoran, koordinasi jadwal teknisi, komunikasi dengan klien, dan memastikan kelancaran operasional harian perusahaan.</p>
        <div className="job-tags"><span className="job-tag">Administrasi</span><span className="job-tag">Customer Service</span><span className="job-tag">MS Office</span><span className="job-tag">Komunikasi</span></div>
        <div className="job-footer"><span>Min. D3 semua jurusan</span><Link href="#apply" className="btn-nav" style={{"fontSize":".72rem","padding":".38rem .9rem"}}>Lamar →</Link></div>
      </div>
    </div>
  </div>
</section>
<section className="py-16" style={{"background":"var(--gray)"}}>
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-center max-w-[600px] mx-auto mb-[3rem] "><span className="inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-ice px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem] border border-border">Mengapa TSM?</span><h2>Benefit Bergabung dengan Kami</h2><p>Kami berkomitmen untuk menjadi tempat kerja yang mendukung pertumbuhan dan kesejahteraan setiap karyawan.</p><div className="w-[36px] h-[3px] bg-gradient-to-r from-blue to-accent rounded-[2px] mx-auto mt-[0.85rem]"></div></div>
    <div className="benefit-grid">
      <div className="ben-card "><div className="ben-ico">💰</div><h4>Gaji Kompetitif</h4><p>Kompensasi yang kompetitif dengan review berkala berdasarkan performa dan kontribusi</p></div>
      <div className="ben-card "><div className="ben-ico">📚</div><h4>Training &amp; Sertifikasi</h4><p>Program pelatihan teknis dan sertifikasi profesional yang didanai perusahaan</p></div>
      <div className="ben-card "><div className="ben-ico"><Activity className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div><h4>Asuransi Kesehatan</h4><p>BPJS Kesehatan dan Ketenagakerjaan plus asuransi tambahan untuk karyawan tetap</p></div>
      <div className="ben-card "><div className="ben-ico">📈</div><h4>Jenjang Karir</h4><p>Jalur karir yang jelas dengan kesempatan promosi berdasarkan kompetensi</p></div>
      <div className="ben-card "><div className="ben-ico">🚗</div><h4>Tunjangan Lapangan</h4><p>Uang transport, makan, dan akomodasi untuk penugasan di luar kota</p></div>
      <div className="ben-card "><div className="ben-ico">🤝</div><h4>Lingkungan Kerja Positif</h4><p>Tim yang solid dan suportif dengan budaya kerja yang profesional namun kekeluargaan</p></div>
    </div>
  </div>
</section>
<section className="py-16" id="apply">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="apply-form ">
      <h3>📨 Kirim Lamaran Anda</h3>
      <p>Isi formulir di bawah atau kirim CV Anda langsung ke <strong><Link href="mailto:obed@tsm.or.id">obed@tsm.or.id</Link></strong> dengan subject: <em>Lamaran – [Nama Posisi]</em></p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[0.92rem]"><div className="mb-[0.92rem]"><label>Nama Lengkap *</label><input type="text" placeholder="Nama Anda" /></div><div className="mb-[0.92rem]"><label>Email *</label><input type="email" placeholder="email@anda.com" /></div></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[0.92rem]"><div className="mb-[0.92rem]"><label>Nomor HP / WA *</label><input type="tel" placeholder="+62 ..." /></div><div className="mb-[0.92rem]"><label>Posisi yang Dilamar *</label><select><option value="">— Pilih Posisi —</option><option>Field Service Engineer</option><option>Sales Engineer</option><option>Process Engineer / Desain RO</option><option>Teknisi Lapangan</option><option>Project Manager</option><option>Admin &amp; Customer Service</option><option>Posisi Lain / Umum</option></select></div></div>
      <div className="mb-[0.92rem]"><label>Pendidikan Terakhir</label><select><option value="">— Pilih —</option><option>SMK / SMA</option><option>D3</option><option>S1</option><option>S2/S3</option></select></div>
      <div className="mb-[0.92rem]"><label>Ceritakan tentang diri Anda dan motivasi bergabung</label><textarea placeholder="Pengalaman kerja relevan, keahlian teknis, dan alasan ingin bergabung dengan PT Tirta Sumber Makmur..."></textarea></div>
      <div className="mb-[0.92rem]"><label>Link CV (Google Drive, LinkedIn, dll)</label><input type="url" placeholder="https://drive.google.com/..." /></div>
      <button className="w-full py-[0.82rem] bg-blue text-white font-barlow font-bold text-[0.9rem] tracking-[0.08em] uppercase rounded-[6px] cursor-pointer transition-all duration-300 hover:bg-navy hover:-translate-y-[1px]" >📨 Kirim Lamaran</button>
    </div>
  </div>
</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Tidak Ada Posisi yang Cocok?</h2>
    <p>Kirimkan CV Anda sebagai open application. Kami selalu mencari talenta terbaik untuk bergabung dengan tim TSM.</p>
    <div className="flex gap-4 justify-center flex-wrap"><Link href="mailto:obed@tsm.or.id" className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]">📧 Kirim CV ke Email</Link><Link href="https://wa.me/62818719119" className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" target="_blank" rel="noopener noreferrer">💬 Tanya via WhatsApp</Link></div>
  </div>
</div>

    </>
  );
};

export default Karir;
