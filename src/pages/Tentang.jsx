import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Target, Rocket, Handshake, Lightbulb, Trophy, Users, Leaf, Zap, Award, BookOpen, ShieldCheck, FileBadge, Microscope, Droplets, SunMedium, Recycle, GraduationCap, Hospital, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import ClientMarquee from '../components/ui/ClientMarquee';

const Tentang = () => {
  const revealRefs = useRef([]);
  const nilaiRef = useRef(null);
  const csrRef = useRef(null);

  const scrollNilai = (direction) => {
    if (nilaiRef.current) {
      const scrollAmount = 280;
      nilaiRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollCsr = (direction) => {
    if (csrRef.current) {
      const scrollAmount = 300;
      csrRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, i * 70);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div>
      {/* ══ PAGE HERO ══ */}
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[4rem] pb-[3.5rem] relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 relative z-10 text-center">
          <div className="text-[0.75rem] opacity-70 mb-[1rem] flex items-center justify-center gap-[0.42rem] flex-wrap">
            <Link to="/" className="hover:text-ice transition-colors">Beranda</Link> › Perusahaan › Tentang Kami
          </div>
          <h1 className="font-condensed text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.1] mb-[1rem]">Tentang PT Tirta Sumber Makmur</h1>
          <p className="text-[0.95rem] opacity-90 max-w-[700px] mx-auto leading-relaxed">Lebih dari dua dekade berdedikasi menghadirkan solusi air bersih berkualitas tinggi untuk industri dan masyarakat Indonesia.</p>
        </div>
      </div>

      {/* ══ ABOUT INTRO ══ */}
      <section className="py-[4.5rem]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center">
            <div ref={addToRefs} className="relative rounded-[14px] overflow-hidden opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0">
              <img src="/images/foto-bengkel.jpg" alt="Fasilitas PT Tirta Sumber Makmur" className="w-full h-[440px] max-[1024px]:h-[300px] object-cover block" />
              <div className="absolute bottom-[1.5rem] right-[-1rem] max-[1024px]:right-[0.8rem] bg-blue text-white rounded-[10px] p-[1.1rem_1.4rem] text-center shadow-[0_8px_44px_rgba(10,34,64,0.18)]">
                <div className="font-condensed text-[2.2rem] font-black leading-none text-accent">2002</div>
                <div className="text-[0.7rem] tracking-[0.1em] uppercase opacity-85 mt-1">Berdiri Sejak</div>
              </div>
            </div>
            <div ref={addToRefs} className="opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0">
              <span className="inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-ice px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem] border border-border">Siapa Kami</span>
              <h2 className="font-condensed text-[2.4rem] font-black text-navy leading-[1.1] my-[1rem]">Penyedia Solusi Air Bersih Terpercaya Sejak 2002</h2>
              <p className="text-[0.96rem] text-muted leading-[1.82] mb-[1rem]">PT Tirta Sumber Makmur (TSM) adalah perusahaan Indonesia yang telah berdiri sejak tahun 2002, berkomitmen menghadirkan solusi reverse osmosis dan desalinasi air berkualitas tinggi untuk memenuhi kebutuhan air bersih berbagai sektor industri dan komersial di seluruh tanah air.</p>
              <p className="text-[0.96rem] text-muted leading-[1.82] mb-[1.5rem]">Berlokasi strategis di Kabupaten Bekasi, Jawa Barat, kami melayani pelanggan dari Sabang hingga Merauke dengan tim insinyur berpengalaman, teknologi mutakhir, dan dukungan purna jual yang komprehensif selama lebih dari 24 tahun.</p>
              
              <div className="grid grid-cols-2 gap-[1rem] mb-[1.5rem]">
                <div className="bg-ice border border-border rounded-[10px] p-[1.1rem] text-center">
                  <div className="font-condensed text-[2rem] font-black text-blue">500+</div>
                  <div className="text-[0.78rem] text-muted mt-[0.2rem]">Proyek Selesai</div>
                </div>
                <div className="bg-ice border border-border rounded-[10px] p-[1.1rem] text-center">
                  <div className="font-condensed text-[2rem] font-black text-blue">100+</div>
                  <div className="text-[0.78rem] text-muted mt-[0.2rem]">Klien Aktif</div>
                </div>
                <div className="bg-ice border border-border rounded-[10px] p-[1.1rem] text-center">
                  <div className="font-condensed text-[2rem] font-black text-blue">24+</div>
                  <div className="text-[0.78rem] text-muted mt-[0.2rem]">Tahun Pengalaman</div>
                </div>
                <div className="bg-ice border border-border rounded-[10px] p-[1.1rem] text-center">
                  <div className="font-condensed text-[2rem] font-black text-blue">24/7</div>
                  <div className="text-[0.78rem] text-muted mt-[0.2rem]">Dukungan Teknis</div>
                </div>
              </div>
              <Link to="/kontak" className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-blue text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,180,216,0.32)] hover:bg-navy hover:-translate-y-[2px]">
                Hubungi Kami Sekarang &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VISI MISI ══ */}
      <section className="py-[4.5rem] bg-gray">
        <div className="max-w-[1240px] mx-auto px-6">
          <div ref={addToRefs} className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0">
            <div className="bg-white border border-border rounded-[14px] p-[2.5rem]">
              <div className="text-[2.5rem] mb-[1rem] text-accent"><Target size={40} /></div>
              <h3 className="font-condensed text-[1.6rem] font-black text-navy mb-[0.8rem]">Visi Kami</h3>
              <p className="text-[0.96rem] text-muted leading-[1.82]">Menjadi perusahaan penyedia solusi water treatment terkemuka dan terpercaya di Indonesia, yang berkontribusi nyata dalam mewujudkan akses air bersih berkualitas untuk seluruh lapisan masyarakat dan industri nusantara.</p>
            </div>
            <div className="bg-gradient-to-br from-navy to-blue rounded-[14px] p-[2.5rem] text-white">
              <div className="text-[2.5rem] mb-[1rem] text-accent"><Rocket size={40} /></div>
              <h3 className="font-condensed text-[1.6rem] font-black mb-[0.8rem] text-white">Misi Kami</h3>
              <ul className="flex flex-col gap-[0.7rem]">
                {[
                  'Menghadirkan teknologi water treatment terbaik yang sesuai dengan kebutuhan spesifik setiap klien',
                  'Memberikan layanan purna jual yang andal dan responsif untuk keberlangsungan operasional klien',
                  'Terus berinovasi mengadopsi teknologi terkini yang ramah lingkungan dan efisien energi',
                  'Membangun kemitraan jangka panjang yang saling menguntungkan dengan seluruh pemangku kepentingan'
                ].map((item, idx) => (
                  <li key={idx} className="text-[0.9rem] opacity-90 leading-[1.65] flex gap-[0.6rem]">
                    <span className="text-accent font-bold shrink-0">✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ NILAI ══ */}
      <section className="py-[4.5rem] bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div ref={addToRefs} className="text-center max-w-[600px] mx-auto mb-12 opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0">
            <span className="inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-ice px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem] border border-border">Nilai Perusahaan</span>
            <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold text-navy leading-[1.15] mb-[0.65rem]">Nilai-Nilai yang Kami Pegang</h2>
            <p className="text-[0.88rem] text-muted leading-[1.75]">Nilai-nilai ini menjadi landasan dalam setiap keputusan dan tindakan yang kami ambil.</p>
            <div className="w-[36px] h-[3px] bg-gradient-to-r from-blue to-accent rounded-[2px] mx-auto mt-[0.85rem]"></div>
          </div>
          
          <div ref={nilaiRef} className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-[1.3rem] overflow-x-auto snap-x snap-mandatory pb-4 sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] scroll-smooth">
            {[
              { icon: Handshake, title: 'Integritas', desc: 'Kami berkomitmen pada kejujuran, transparansi, dan tanggung jawab dalam setiap aspek bisnis kami.' },
              { icon: Lightbulb, title: 'Inovasi', desc: 'Terus mengadopsi teknologi terdepan untuk menghadirkan solusi yang lebih baik dan efisien bagi klien.' },
              { icon: Trophy, title: 'Kualitas', desc: 'Standar kualitas tertinggi diterapkan pada setiap produk, layanan, dan proyek yang kami kerjakan.' },
              { icon: Users, title: 'Kemitraan', desc: 'Membangun hubungan jangka panjang yang saling menguntungkan dengan klien, pemasok, dan mitra bisnis.' },
              { icon: Leaf, title: 'Keberlanjutan', desc: 'Berkomitmen pada solusi yang ramah lingkungan dan mendukung pengelolaan air yang berkelanjutan.' },
              { icon: Zap, title: 'Responsif', desc: 'Cepat dan tanggap dalam merespons kebutuhan dan permasalahan yang dihadapi klien kami.' }
            ].map((val, idx) => (
              <div key={idx} ref={addToRefs} className="bg-white border border-border rounded-[12px] p-[1.75rem] text-center transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] hover:border-accent opacity-0 translate-y-[22px] [&.visible]:opacity-100 [&.visible]:translate-y-0 group min-w-[280px] max-[640px]:w-[85vw] snap-center shrink-0 sm:min-w-0 sm:w-auto">
                <div className="text-[2.2rem] mb-[0.8rem] flex justify-center text-blue group-hover:text-accent transition-colors"><val.icon size={36} /></div>
                <h3 className="text-[0.98rem] font-bold text-navy mb-[0.45rem]">{val.title}</h3>
                <p className="text-[0.83rem] text-muted leading-[1.65]">{val.desc}</p>
              </div>
            ))}
          </div>

          {/* Nilai Arrows (Mobile Only) */}
          <div className="flex sm:hidden justify-center gap-4 mt-2">
            <button onClick={() => scrollNilai('left')} aria-label="Previous card" className="w-[42px] h-[42px] rounded-full bg-white border border-border flex items-center justify-center text-navy hover:bg-accent hover:text-white hover:-translate-y-[2px] transition-all duration-300 shadow-sm">
              <ChevronLeft size={22} />
            </button>
            <button onClick={() => scrollNilai('right')} aria-label="Next card" className="w-[42px] h-[42px] rounded-full bg-white border border-border flex items-center justify-center text-navy hover:bg-accent hover:text-white hover:-translate-y-[2px] transition-all duration-300 shadow-sm">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </section>

      {/* ══ SEJARAH ══ */}
      <section className="py-[4.5rem] bg-gray">
        <div className="max-w-[1240px] mx-auto px-6">
          <div ref={addToRefs} className="text-center max-w-[600px] mx-auto mb-12 opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0">
            <span className="inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-ice px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem] border border-border">Perjalanan Kami</span>
            <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold text-navy leading-[1.15] mb-[0.65rem]">Sejarah Perusahaan</h2>
            <p className="text-[0.88rem] text-muted leading-[1.75]">Empat dekade perjalanan panjang membangun kepercayaan dan keahlian di industri water treatment Indonesia.</p>
            <div className="w-[36px] h-[3px] bg-gradient-to-r from-blue to-accent rounded-[2px] mx-auto mt-[0.85rem]"></div>
          </div>
          
          <div className="max-w-[680px] mx-auto">
            <div ref={addToRefs} className="relative pl-[2rem] before:content-[''] before:absolute before:left-[0.5rem] before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-blue before:to-accent opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0">
              {[
                { year: '2002', title: 'Pendirian Perusahaan', desc: 'PT Tirta Sumber Makmur didirikan di Bekasi, Jawa Barat, dengan fokus awal pada distribusi dan instalasi sistem filtrasi air untuk industri lokal.' },
                { year: '1990-an', title: 'Ekspansi ke Teknologi RO', desc: 'Memperkenalkan teknologi Reverse Osmosis pertama di lini produk kami, menjawab kebutuhan industri manufaktur yang berkembang pesat di kawasan Jabodetabek.' },
                { year: '2000-an', title: 'Penetrasi Nasional', desc: 'Memperluas jangkauan pelayanan ke seluruh Indonesia, termasuk proyek-proyek pertama di kawasan kepulauan terpencil menggunakan teknologi desalinasi.' },
                { year: '2010-an', title: 'Inovasi & Sertifikasi', desc: 'Memperoleh berbagai sertifikasi internasional dan memperkenalkan sistem RO berteknologi tinggi dengan otomasi penuh untuk industri farmasi dan pembangkit listrik.' },
                { year: '2020-an', title: 'Era Digital & Keberlanjutan', desc: 'Mengintegrasikan sistem monitoring IoT real-time, mengembangkan solusi Zero Liquid Discharge (ZLD), dan memperkuat komitmen pada teknologi ramah lingkungan.' },
                { year: 'Kini', title: '24+ Tahun Melayani Indonesia', desc: 'Dengan lebih dari 500 proyek selesai dan 100+ klien aktif, TSM terus tumbuh sebagai mitra water treatment terpercaya untuk masa depan air bersih Indonesia.' }
              ].map((tl, idx) => (
                <div key={idx} className="relative mb-[2rem] pl-[1.5rem]">
                  <div className="absolute left-[-1.85rem] top-[0.25rem] w-[14px] h-[14px] bg-accent rounded-full border-[3px] border-white shadow-[0_0_0_2px_#00b4d8]"></div>
                  <div className="text-[0.72rem] font-bold tracking-[0.1em] uppercase text-accent mb-[0.25rem]">{tl.year}</div>
                  <h4 className="text-[0.98rem] font-bold text-navy mb-[0.3rem]">{tl.title}</h4>
                  <p className="text-[0.85rem] text-muted leading-[1.65]">{tl.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERTIFIKASI ══ */}
      <section className="py-[4.5rem] bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div ref={addToRefs} className="text-center max-w-[600px] mx-auto mb-12 opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0">
            <span className="inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-ice px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem] border border-border">Sertifikasi &amp; Penghargaan</span>
            <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold text-navy leading-[1.15] mb-[0.65rem]">Diakui Standar Internasional</h2>
            <p className="text-[0.88rem] text-muted leading-[1.75]">Komitmen kami terhadap kualitas dibuktikan dengan berbagai sertifikasi dan pengakuan resmi.</p>
            <div className="w-[36px] h-[3px] bg-gradient-to-r from-blue to-accent rounded-[2px] mx-auto mt-[0.85rem]"></div>
          </div>
          
          <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-[1.2rem]">
            {[
              { icon: Award, title: 'ISO 9001:2015', desc: 'Sistem Manajemen Mutu internasional' },
              { icon: Leaf, title: 'ISO 14001:2015', desc: 'Sistem Manajemen Lingkungan' },
              { icon: ShieldCheck, title: 'ISO 45001:2018', desc: 'Keselamatan dan Kesehatan Kerja' },
              { icon: FileBadge, title: 'SIUP & TDP', desc: 'Izin usaha resmi Republik Indonesia' },
              { icon: BookOpen, title: 'GMP Compliance', desc: 'Standar Good Manufacturing Practice' },
              { icon: Microscope, title: 'Rekanan BPOM', desc: 'Pemasok sistem air untuk industri farmasi' }
            ].map((cert, idx) => (
              <div key={idx} ref={addToRefs} className="bg-white border border-border rounded-[10px] p-[1.5rem] text-center transition-all duration-300 hover:border-blue hover:-translate-y-[3px] opacity-0 translate-y-[22px] [&.visible]:opacity-100 [&.visible]:translate-y-0 text-navy hover:text-blue">
                <div className="flex justify-center mb-[0.7rem]"><cert.icon size={32} /></div>
                <h4 className="text-[0.9rem] font-bold mb-[0.3rem] text-navy">{cert.title}</h4>
                <p className="text-[0.78rem] text-muted">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ══ CSR & LINGKUNGAN ══ */}
      <section className="py-[4.5rem] bg-gray">
        <div className="max-w-[1240px] mx-auto px-6">
          <div ref={addToRefs} className="text-center max-w-[700px] mx-auto mb-12 opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0">
            <span className="inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-white border border-border px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem]">CSR &amp; Lingkungan</span>
            <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold text-navy leading-[1.15] mb-[0.65rem]">Komitmen Sosial &amp; Lingkungan</h2>
            <p className="text-[0.88rem] text-muted leading-[1.75]">Sebagai perusahaan yang bergerak di bidang pengelolaan air, kami percaya tanggung jawab kami melampaui transaksi bisnis — untuk lingkungan, masyarakat, dan keberlanjutan sumber daya air Indonesia.</p>
            <div className="w-[36px] h-[3px] bg-gradient-to-r from-blue to-accent rounded-[2px] mx-auto mt-[0.85rem]"></div>
          </div>

          <div ref={csrRef} className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] mb-[2rem] overflow-x-auto snap-x snap-mandatory pb-4 sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] scroll-smooth">
            {/* Card 1 */}
            <div ref={addToRefs} className="bg-gradient-to-br from-emerald-800 to-emerald-500 text-white rounded-[14px] p-[2rem] opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0 group hover:-translate-y-[4px] hover:shadow-lg min-w-[280px] max-[640px]:w-[85vw] snap-center shrink-0 sm:min-w-0 sm:w-auto">
              <div className="text-[2.2rem] mb-[0.8rem] text-white/90 group-hover:scale-110 transition-transform"><Droplets size={36} /></div>
              <h3 className="font-condensed text-[1.4rem] font-bold text-white mb-[0.6rem]">Akses Air Bersih untuk Pulau Terpencil</h3>
              <p className="text-[0.92rem] leading-[1.65] text-white/90">Bersama pemerintah daerah dan kementerian terkait, kami terlibat dalam program penyediaan SWRO untuk pulau-pulau kecil di Indonesia Timur, NTT, dan Maluku — memberi akses air minum aman ke komunitas yang sebelumnya bergantung pada air hujan atau air laut yang tercemar.</p>
            </div>

            {/* Card 2 */}
            <div ref={addToRefs} className="bg-gradient-to-br from-[#0a2240] to-blue text-white rounded-[14px] p-[2rem] opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0 group hover:-translate-y-[4px] hover:shadow-lg min-w-[280px] max-[640px]:w-[85vw] snap-center shrink-0 sm:min-w-0 sm:w-auto">
              <div className="text-[2.2rem] mb-[0.8rem] text-white/90 group-hover:scale-110 transition-transform"><SunMedium size={36} /></div>
              <h3 className="font-condensed text-[1.4rem] font-bold text-white mb-[0.6rem]">Sistem Bertenaga Surya</h3>
              <p className="text-[0.92rem] leading-[1.65] text-white/90">Kami telah mengembangkan dan memasang sistem RO bertenaga panel surya untuk lokasi yang tidak terjangkau jaringan listrik PLN — termasuk untuk Kementerian LHK di Padang Sidempuan dan beberapa fasilitas masjid serta pesantren di daerah terpencil.</p>
            </div>

            {/* Card 3 */}
            <div ref={addToRefs} className="bg-gradient-to-br from-purple-800 to-purple-600 text-white rounded-[14px] p-[2rem] opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0 group hover:-translate-y-[4px] hover:shadow-lg min-w-[280px] max-[640px]:w-[85vw] snap-center shrink-0 sm:min-w-0 sm:w-auto">
              <div className="text-[2.2rem] mb-[0.8rem] text-white/90 group-hover:scale-110 transition-transform"><Recycle size={36} /></div>
              <h3 className="font-condensed text-[1.4rem] font-bold text-white mb-[0.6rem]">Efisiensi Energi &amp; Daur Ulang</h3>
              <p className="text-[0.92rem] leading-[1.65] text-white/90">Sistem RO modern yang kami pasang menggunakan Energy Recovery Device (ERD) yang mengurangi konsumsi listrik hingga 40%. Untuk industri tekstil dan F&amp;B, kami menyediakan sistem ZLD (Zero Liquid Discharge) yang mendaur-ulang air limbah untuk dipakai kembali.</p>
            </div>

            {/* Card 4 */}
            <div ref={addToRefs} className="bg-gradient-to-br from-red-800 to-red-600 text-white rounded-[14px] p-[2rem] opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0 group hover:-translate-y-[4px] hover:shadow-lg min-w-[280px] max-[640px]:w-[85vw] snap-center shrink-0 sm:min-w-0 sm:w-auto">
              <div className="text-[2.2rem] mb-[0.8rem] text-white/90 group-hover:scale-110 transition-transform"><GraduationCap size={36} /></div>
              <h3 className="font-condensed text-[1.4rem] font-bold text-white mb-[0.6rem]">Air Minum Sehat untuk Kampus</h3>
              <p className="text-[0.92rem] leading-[1.65] text-white/90">Drinking fountain dan sistem RO kampus yang kami pasang di Universitas Airlangga, Atma Jaya, dan kampus lain berkontribusi pada pengurangan ribuan botol plastik sekali pakai per hari di lingkungan akademis.</p>
            </div>

            {/* Card 5 */}
            <div ref={addToRefs} className="bg-gradient-to-br from-amber-900 to-amber-600 text-white rounded-[14px] p-[2rem] opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0 group hover:-translate-y-[4px] hover:shadow-lg min-w-[280px] max-[640px]:w-[85vw] snap-center shrink-0 sm:min-w-0 sm:w-auto">
              <div className="text-[2.2rem] mb-[0.8rem] text-white/90 group-hover:scale-110 transition-transform"><Hospital size={36} /></div>
              <h3 className="font-condensed text-[1.4rem] font-bold text-white mb-[0.6rem]">Dukungan untuk Layanan Kesehatan</h3>
              <p className="text-[0.92rem] leading-[1.65] text-white/90">Kami mendukung Dinas Kesehatan dan rumah sakit pemerintah (RSUD) di berbagai daerah dengan sistem RO medical-grade untuk hemodialisis dan sterilisasi — termasuk Dinkes Aceh, Halmahera, dan Makassar.</p>
            </div>

            {/* Card 6 */}
            <div ref={addToRefs} className="bg-gradient-to-br from-blue-900 to-blue-500 text-white rounded-[14px] p-[2rem] opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0 group hover:-translate-y-[4px] hover:shadow-lg min-w-[280px] max-[640px]:w-[85vw] snap-center shrink-0 sm:min-w-0 sm:w-auto">
              <div className="text-[2.2rem] mb-[0.8rem] text-white/90 group-hover:scale-110 transition-transform"><Shield size={36} /></div>
              <h3 className="font-condensed text-[1.4rem] font-bold text-white mb-[0.6rem]">Dukungan untuk Pertahanan Negara</h3>
              <p className="text-[0.92rem] leading-[1.65] text-white/90">Memasok watermaker SWRO kepada TNI AL untuk 15+ unit KRI memberi jaminan ketersediaan air tawar untuk awak kapal selama operasi laut — bagian kontribusi kami pada kemandirian armada nasional.</p>
            </div>
          </div>

          {/* CSR Arrows (Mobile Only) */}
          <div className="flex sm:hidden justify-center gap-4 mt-2 mb-[3rem]">
            <button onClick={() => scrollCsr('left')} aria-label="Previous card" className="w-[42px] h-[42px] rounded-full bg-white border border-border flex items-center justify-center text-navy hover:bg-accent hover:text-white hover:-translate-y-[2px] transition-all duration-300 shadow-sm">
              <ChevronLeft size={22} />
            </button>
            <button onClick={() => scrollCsr('right')} aria-label="Next card" className="w-[42px] h-[42px] rounded-full bg-white border border-border flex items-center justify-center text-navy hover:bg-accent hover:text-white hover:-translate-y-[2px] transition-all duration-300 shadow-sm">
              <ChevronRight size={22} />
            </button>
          </div>

          {/* ISO 14001 highlight */}
          <div ref={addToRefs} className="bg-white border border-border rounded-[12px] p-[2rem] grid grid-cols-1 md:grid-cols-[80px_1fr] gap-[1.5rem] items-center opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0 hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] hover:-translate-y-[2px]">
            <div className="text-[3rem] text-center text-emerald-500 flex justify-center md:justify-start"><Leaf size={48} /></div>
            <div className="text-center md:text-left">
              <h3 className="font-condensed text-[1.3rem] font-bold text-navy mb-[0.4rem]">Tersertifikasi ISO 14001:2015 — Sistem Manajemen Lingkungan</h3>
              <p className="text-[0.9rem] text-muted leading-[1.65] m-0">Kami berkomitmen mengelola dampak lingkungan dari operasi kami secara terukur dan terus diperbaiki — dari pengelolaan limbah workshop, pemakaian bahan kimia, hingga pemilihan komponen yang efisien energi. <a href="#sertifikasi" className="text-blue font-bold hover:text-navy transition-colors">Lihat sertifikasi &rarr;</a></p>
            </div>
          </div>
        </div>
      </section>
      
      {/* ══ KLIEN & BRANDS ══ */}
      <section className="py-[4rem] bg-white border-t border-border">
        <div className="max-w-[1240px] mx-auto px-6 mb-12">
          <div ref={addToRefs} className="text-center max-w-[600px] mx-auto opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0">
            <span className="inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-ice px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem] border border-border">Klien &amp; Mitra</span>
            <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold text-navy leading-[1.15] mb-[0.65rem]">Dipercaya oleh Perusahaan Terkemuka</h2>
            <div className="w-[36px] h-[3px] bg-gradient-to-r from-blue to-accent rounded-[2px] mx-auto mt-[0.85rem]"></div>
          </div>
        </div>
        <ClientMarquee />
      </section>

      {/* ══ CTA ══ */}
      <div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <h2 className="font-condensed text-[clamp(1.5rem,2.4vw,2.1rem)] font-extrabold mb-[0.7rem]">Bergabunglah dengan 100+ Klien Puas Kami</h2>
          <p className="text-[0.88rem] opacity-90 mb-[1.5rem]">Kepercayaan ratusan klien adalah bukti nyata dedikasi kami selama lebih dari 24 tahun.</p>
          <div className="flex gap-[1rem] justify-center flex-wrap">
            <Link to="/kontak" className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]">
              Hubungi Kami
            </Link>
            <Link to="/layanan" className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/10 hover:border-white">
              Lihat Layanan Kami
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
