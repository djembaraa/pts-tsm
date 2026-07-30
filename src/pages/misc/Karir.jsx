import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, Wrench, Building, Activity } from 'lucide-react';
import Button from '../../components/ui/Button';

const Karir = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      
<div className="page-hero bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="container max-w-[1240px] mx-auto px-6">
    <div className="breadcrumb text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › Perusahaan › Karir</div>
    <h1 className="font-condensed text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold leading-[1.1] mb-[0.65rem]">Bergabunglah dengan Tim TSM</h1>
    <p className="text-[0.9rem] opacity-80 max-w-[540px] leading-[1.72]">Kami selalu mencari talenta terbaik yang bersemangat untuk berkontribusi dalam misi kami menyediakan air bersih berkualitas bagi Indonesia.</p>
  </div>
</div>
<section className="section py-16">
  <div className="container max-w-[1240px] mx-auto px-6">
    <div className="sec-header text-center max-w-[600px] mx-auto mb-[3rem] "><span className="sec-tag inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-ice px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem] border border-border">Lowongan Terbuka</span><h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold text-navy leading-[1.15] mb-[0.65rem]">Posisi yang Tersedia</h2><p className="text-[0.88rem] text-muted leading-[1.75]">Temukan peluang karir yang sesuai dengan keahlian dan passion Anda.</p><div className="divider w-[36px] h-[3px] bg-gradient-to-r from-blue to-accent rounded-[2px] mx-auto mt-[0.85rem]"></div></div>
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
<section className="section py-16" style={{"background":"var(--gray)"}}>
  <div className="container max-w-[1240px] mx-auto px-6">
    <div className="sec-header text-center max-w-[600px] mx-auto mb-[3rem] "><span className="sec-tag inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-ice px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem] border border-border">Mengapa TSM?</span><h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold text-navy leading-[1.15] mb-[0.65rem]">Benefit Bergabung dengan Kami</h2><p className="text-[0.88rem] text-muted leading-[1.75]">Kami berkomitmen untuk menjadi tempat kerja yang mendukung pertumbuhan dan kesejahteraan setiap karyawan.</p><div className="divider w-[36px] h-[3px] bg-gradient-to-r from-blue to-accent rounded-[2px] mx-auto mt-[0.85rem]"></div></div>
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
<section className="section py-16" id="apply">
  <div className="container max-w-[1240px] mx-auto px-6">
    <div className="apply-form ">
      <h3>📨 Kirim Lamaran Anda</h3>
      <p>Isi formulir di bawah atau kirim CV Anda langsung ke <strong><Link href="mailto:obed@tsm.or.id">obed@tsm.or.id</Link></strong> dengan subject: <em>Lamaran – [Nama Posisi]</em></p>
      <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-[0.92rem]"><div className="form-group mb-[0.92rem]"><label className="block text-[0.74rem] font-bold uppercase tracking-[0.06em] text-muted mb-[0.36rem]">Nama Lengkap *</label><input type="text" placeholder="Nama Anda" className="w-full py-[0.66rem] px-[0.96rem] bg-white border border-border rounded-[6px] font-barlow text-[0.88rem] text-text outline-none transition-all duration-300 focus:border-blue focus:ring-[3px] focus:ring-blue/10" /></div><div className="form-group mb-[0.92rem]"><label className="block text-[0.74rem] font-bold uppercase tracking-[0.06em] text-muted mb-[0.36rem]">Email *</label><input type="email" placeholder="email@anda.com" className="w-full py-[0.66rem] px-[0.96rem] bg-white border border-border rounded-[6px] font-barlow text-[0.88rem] text-text outline-none transition-all duration-300 focus:border-blue focus:ring-[3px] focus:ring-blue/10" /></div></div>
      <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-[0.92rem]"><div className="form-group mb-[0.92rem]"><label className="block text-[0.74rem] font-bold uppercase tracking-[0.06em] text-muted mb-[0.36rem]">Nomor HP / WA *</label><input type="tel" placeholder="+62 ..." className="w-full py-[0.66rem] px-[0.96rem] bg-white border border-border rounded-[6px] font-barlow text-[0.88rem] text-text outline-none transition-all duration-300 focus:border-blue focus:ring-[3px] focus:ring-blue/10" /></div><div className="form-group mb-[0.92rem]"><label className="block text-[0.74rem] font-bold uppercase tracking-[0.06em] text-muted mb-[0.36rem]">Posisi yang Dilamar *</label><select className="w-full py-[0.66rem] px-[0.96rem] bg-white border border-border rounded-[6px] font-barlow text-[0.88rem] text-text outline-none transition-all duration-300 focus:border-blue focus:ring-[3px] focus:ring-blue/10"><option value="">— Pilih Posisi —</option><option>Field Service Engineer</option><option>Sales Engineer</option><option>Process Engineer / Desain RO</option><option>Teknisi Lapangan</option><option>Project Manager</option><option>Admin &amp; Customer Service</option><option>Posisi Lain / Umum</option></select></div></div>
      <div className="form-group mb-[0.92rem]"><label className="block text-[0.74rem] font-bold uppercase tracking-[0.06em] text-muted mb-[0.36rem]">Pendidikan Terakhir</label><select className="w-full py-[0.66rem] px-[0.96rem] bg-white border border-border rounded-[6px] font-barlow text-[0.88rem] text-text outline-none transition-all duration-300 focus:border-blue focus:ring-[3px] focus:ring-blue/10"><option value="">— Pilih —</option><option>SMK / SMA</option><option>D3</option><option>S1</option><option>S2/S3</option></select></div>
      <div className="form-group mb-[0.92rem]"><label className="block text-[0.74rem] font-bold uppercase tracking-[0.06em] text-muted mb-[0.36rem]">Ceritakan tentang diri Anda dan motivasi bergabung</label><textarea placeholder="Pengalaman kerja relevan, keahlian teknis, dan alasan ingin bergabung dengan PT Tirta Sumber Makmur..." className="w-full py-[0.66rem] px-[0.96rem] bg-white border border-border rounded-[6px] font-barlow text-[0.88rem] text-text outline-none transition-all duration-300 focus:border-blue focus:ring-[3px] focus:ring-blue/10"></textarea></div>
      <div className="form-group mb-[0.92rem]"><label className="block text-[0.74rem] font-bold uppercase tracking-[0.06em] text-muted mb-[0.36rem]">Link CV (Google Drive, LinkedIn, dll)</label><input type="url" placeholder="https://drive.google.com/..." className="w-full py-[0.66rem] px-[0.96rem] bg-white border border-border rounded-[6px] font-barlow text-[0.88rem] text-text outline-none transition-all duration-300 focus:border-blue focus:ring-[3px] focus:ring-blue/10" /></div>
      <Button variant="primary"  type="submit" className="w-full text-[0.9rem] tracking-[0.08em]">📨 Kirim Lamaran</Button>
    </div>
  </div>
</section>
<div className="cta-band bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="container max-w-[1240px] mx-auto px-6">
    <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold leading-[1.15] mb-[0.65rem]">Tidak Ada Posisi yang Cocok?</h2>
    <p className="text-[0.88rem] opacity-90 leading-[1.75] max-w-[600px] mx-auto mb-8">Kirimkan CV Anda sebagai open application. Kami selalu mencari talenta terbaik untuk bergabung dengan tim TSM.</p>
    <div className="cta-actions flex gap-4 justify-center flex-wrap"><Button variant="white" href="mailto:obed@tsm.or.id" >📧 Kirim CV ke Email</Button><Button variant="outline-white" href="https://wa.me/62818719119" >💬 Tanya via WhatsApp</Button></div>
  </div>
</div>

    </>
  );
};

export default Karir;

