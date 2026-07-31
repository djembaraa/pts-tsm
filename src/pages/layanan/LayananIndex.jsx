import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ClipboardList, TestTube2, PenTool, FileText, Wrench, CheckCircle, ShieldCheck, 
  CheckCircle2, Phone, MessageSquare, ClipboardCheck, AlertTriangle, Building2, LineChart, Award,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import Button from '../../components/ui/Button';
import { services } from '../../data/mockData_services';

const serviceIcons = {
  audit: <ClipboardCheck size={28} />,
  darurat: <AlertTriangle size={28} />,
  desain: <PenTool size={28} />,
  epc: <Building2 size={28} />,
  feasibility: <LineChart size={28} />,
  instalasi: <Wrench size={28} />,
  maintenance: <ShieldCheck size={28} />,
  sertifikasi: <Award size={28} />
};

const LayananIndex = () => {
  const revealRefs = useRef([]);
  const layananRef = useRef(null);
  
  const scrollLayanan = (direction) => {
    if (layananRef.current) {
      const scrollAmount = 300;
      layananRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };
  
  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    revealRefs.current.forEach(ref => observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ══ HERO SECTION ══ */}
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[4rem] pb-[3.5rem] relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 relative z-10 text-center">
          <div className="text-[0.75rem] opacity-70 mb-[1rem] flex items-center justify-center gap-[0.42rem] flex-wrap">
            <Link to="/" className="hover:text-ice transition-colors">Beranda</Link> › Layanan
          </div>
          <h1 className="font-condensed text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.1] mb-[1rem]">Layanan Lengkap Water Treatment</h1>
          <p className="text-[0.95rem] opacity-90 max-w-[700px] mx-auto leading-relaxed">
            Dari desain sistem hingga perawatan jangka panjang — PT Tirta Sumber Makmur hadir sebagai mitra terpercaya di setiap tahap proyek Anda.
          </p>
        </div>
      </div>

      {/* ══ LAYANAN UTAMA (ICON CARDS) ══ */}
      <section className="py-[4rem] bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div ref={addToRefs} className="text-center max-w-[600px] mx-auto mb-12 opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0">
            <span className="inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-ice px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem] border border-border">Layanan & Konsultasi</span>
            <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold text-navy leading-[1.15] mb-[0.65rem]">Solusi End-to-End</h2>
            <p className="text-[0.88rem] text-muted leading-[1.75]">Layanan terpadu kami dirancang untuk memastikan sistem Anda beroperasi pada efisiensi maksimal dengan standar kualitas tertinggi.</p>
            <div className="w-[36px] h-[3px] bg-gradient-to-r from-blue to-accent rounded-[2px] mx-auto mt-[0.85rem]"></div>
          </div>

          <div ref={layananRef} className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-[1.5rem] overflow-x-auto snap-x snap-mandatory pb-4 sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] scroll-smooth">
            {services.map((item, idx) => (
              <div key={item.id} ref={addToRefs} className="bg-white border border-border rounded-xl p-8 flex flex-col transition-all duration-300 relative overflow-hidden group hover:-translate-y-[4px] hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] opacity-0 translate-y-[22px] [&.visible]:opacity-100 [&.visible]:translate-y-0 min-w-[280px] max-[640px]:w-[85vw] snap-center shrink-0 sm:min-w-0 sm:w-auto">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue to-accent origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
                <div className="w-14 h-14 bg-ice rounded-xl flex items-center justify-center text-accent mb-5 transition-colors duration-300 group-hover:bg-blue group-hover:text-white">
                  {serviceIcons[item.slug] || <Wrench size={28} />}
                </div>
                <h3 className="text-[1.05rem] font-bold text-navy mb-[0.5rem] leading-snug">{item.title}</h3>
                <p className="text-[0.87rem] text-muted leading-[1.7] mb-[0.8rem] flex-1">
                  {item.description || item.excerpt}
                </p>
                {item.specs && (
                  <ul className="space-y-[0.35rem] mb-5">
                    {item.specs.slice(0, 4).map((spec, i) => (
                      <li key={i} className="flex items-start gap-[0.5rem] text-[0.83rem] text-text">
                        <span className="text-accent mt-[0.1rem] font-bold shrink-0">✓</span>
                        <span className="line-clamp-2">{spec.split(':')[0].replace(/^\d+\.\s*/, '')}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <Link to={`/layanan/${item.slug}`} className="inline-block mt-auto text-accent font-bold text-[0.86rem] group-hover:text-blue transition-colors">
                  Pelajari Selengkapnya →
                </Link>
              </div>
            ))}
          </div>

          {/* Layanan Arrows (Mobile Only) */}
          <div className="flex sm:hidden justify-center gap-4 mt-2">
            <button onClick={() => scrollLayanan('left')} aria-label="Previous card" className="w-[42px] h-[42px] rounded-full bg-white border border-border flex items-center justify-center text-navy hover:bg-accent hover:text-white hover:-translate-y-[2px] transition-all duration-300 shadow-sm">
              <ChevronLeft size={22} />
            </button>
            <button onClick={() => scrollLayanan('right')} aria-label="Next card" className="w-[42px] h-[42px] rounded-full bg-white border border-border flex items-center justify-center text-navy hover:bg-accent hover:text-white hover:-translate-y-[2px] transition-all duration-300 shadow-sm">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </section>

      {/* ══ ALUR KERJA (PROSES LAYANAN) ══ */}
      <section className="py-[4rem] bg-gray">
        <div className="max-w-[1240px] mx-auto px-6">
          <div ref={addToRefs} className="text-center max-w-[600px] mx-auto mb-12 opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0">
            <span className="inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-ice px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem] border border-border">Alur Kerja</span>
            <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold text-navy leading-[1.15] mb-[0.65rem]">Proses Layanan TSM</h2>
            <p className="text-[0.88rem] text-muted leading-[1.75]">Proses terstruktur untuk memastikan setiap proyek berjalan lancar dan sesuai ekspektasi Anda.</p>
            <div className="w-[36px] h-[3px] bg-gradient-to-r from-blue to-accent rounded-[2px] mx-auto mt-[0.85rem]"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {[
              { icon: <ClipboardList />, title: 'Konsultasi', desc: 'Diskusi kebutuhan dan survei lokasi' },
              { icon: <TestTube2 />, title: 'Analisis Air', desc: 'Uji lab kualitas air baku' },
              { icon: <PenTool />, title: 'Desain Sistem', desc: 'Perancangan teknis lengkap' },
              { icon: <FileText />, title: 'Penawaran', desc: 'Proposal transparan' },
              { icon: <Wrench />, title: 'Instalasi', desc: 'Pemasangan oleh ahlinya' },
              { icon: <CheckCircle />, title: 'Komisioning', desc: 'Performance test' },
              { icon: <ShieldCheck />, title: 'After Sales', desc: 'Dukungan jangka panjang' }
            ].map((step, idx) => (
              <div key={idx} ref={addToRefs} className="bg-white border border-border rounded-xl p-5 text-center relative transition-all duration-300 hover:-translate-y-[4px] hover:shadow-lg hover:border-accent opacity-0 translate-y-[22px] [&.visible]:opacity-100 [&.visible]:translate-y-0">
                <div className="w-8 h-8 bg-gradient-to-br from-blue to-accent text-white rounded-full flex items-center justify-center font-bold text-[0.8rem] mx-auto mb-3 shadow-md">
                  {idx + 1}
                </div>
                <div className="text-accent flex justify-center mb-3 opacity-90 scale-125">
                  {step.icon}
                </div>
                <h4 className="font-bold text-[0.9rem] text-navy mb-2">{step.title}</h4>
                <p className="text-[0.75rem] text-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PAKET PERAWATAN ══ */}
      <section className="py-[5rem] bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div ref={addToRefs} className="text-center max-w-[600px] mx-auto mb-14 opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0">
            <span className="inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-ice px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem] border border-border">Paket Perawatan</span>
            <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold text-navy leading-[1.15] mb-[0.65rem]">Pilih Paket Perawatan Anda</h2>
            <p className="text-[0.88rem] text-muted leading-[1.75]">Kontrak perawatan tahunan yang memberikan ketenangan pikiran dan kepastian biaya operasional.</p>
            <div className="w-[36px] h-[3px] bg-gradient-to-r from-blue to-accent rounded-[2px] mx-auto mt-[0.85rem]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1000px] mx-auto items-center">
            {/* Basic Package */}
            <div ref={addToRefs} className="border border-border rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 opacity-0 translate-y-[22px] [&.visible]:opacity-100 [&.visible]:translate-y-0">
              <div className="p-8 bg-gray border-b border-border text-center">
                <span className="text-[0.65rem] font-bold tracking-[0.1em] text-accent uppercase block mb-2">Basic</span>
                <h3 className="text-2xl font-extrabold text-navy">Paket Basic</h3>
                <p className="text-[0.8rem] text-muted mt-2">Untuk sistem RO skala kecil & komersial</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {['2x kunjungan teknisi per tahun', 'Penggantian cartridge filter', 'Analisis kualitas air (2x / tahun)', 'Laporan kondisi sistem', 'Hotline teknis jam kerja'].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-[0.85rem] text-text">
                      <CheckCircle2 size={18} className="text-accent shrink-0 mt-[1px]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button to="/kontak" variant="outline" className="w-full text-center justify-center">Minta Penawaran</Button>
              </div>
            </div>

            {/* Standard Package (Featured) */}
            <div ref={addToRefs} className="border-2 border-accent rounded-2xl overflow-hidden bg-white shadow-2xl scale-100 md:scale-105 relative z-10 opacity-0 translate-y-[22px] [&.visible]:opacity-100 [&.visible]:translate-y-0">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue to-accent"></div>
              <div className="p-8 bg-gradient-to-br from-navy to-blue text-white text-center">
                <span className="text-[0.65rem] font-bold tracking-[0.1em] text-ice uppercase block mb-2">⭐ Paling Populer</span>
                <h3 className="text-2xl font-extrabold text-white">Paket Standard</h3>
                <p className="text-[0.8rem] text-white/80 mt-2">Untuk sistem RO industri menengah</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {['4x kunjungan teknisi per tahun', 'CIP membran 1x per tahun', 'Penggantian semua filter berkala', 'Analisis air komprehensif (4x)', 'Laporan performa bulanan', 'Hotline darurat 24/7', 'Diskon 15% suku cadang'].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-[0.85rem] text-text">
                      <CheckCircle2 size={18} className="text-accent shrink-0 mt-[1px]" />
                      <span className={i >= 5 ? 'font-bold text-navy' : ''}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button to="/kontak" variant="blue" className="w-full text-center justify-center shadow-lg hover:shadow-xl">Minta Penawaran</Button>
              </div>
            </div>

            {/* Premium Package */}
            <div ref={addToRefs} className="border border-border rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 opacity-0 translate-y-[22px] [&.visible]:opacity-100 [&.visible]:translate-y-0">
              <div className="p-8 bg-gray border-b border-border text-center">
                <span className="text-[0.65rem] font-bold tracking-[0.1em] text-accent uppercase block mb-2">Premium</span>
                <h3 className="text-2xl font-extrabold text-navy">Paket Premium</h3>
                <p className="text-[0.8rem] text-muted mt-2">Untuk sistem RO industri besar & kritis</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {['12x kunjungan teknisi per tahun', 'CIP membran terjadwal penuh', 'Semua penggantian filter included', 'Monitoring online real-time', 'Dedicated teknisi PIC', 'Respons darurat prioritas', 'Diskon 25% suku cadang', 'Garansi uptime 95%'].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-[0.85rem] text-text">
                      <CheckCircle2 size={18} className="text-accent shrink-0 mt-[1px]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button to="/kontak" variant="outline" className="w-full text-center justify-center">Minta Penawaran</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA BAND ══ */}
      <section className="bg-gradient-to-r from-blue to-accent py-14">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <h2 className="font-condensed text-3xl font-extrabold text-white mb-4">Butuh Layanan Segera?</h2>
          <p className="text-white/90 mb-8 max-w-[600px] mx-auto">Tim kami siap membantu Anda 24/7. Hubungi sekarang untuk konsultasi gratis atau penjadwalan survei lokasi.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/kontak" className="inline-flex items-center gap-2 bg-white text-blue font-bold px-8 py-3 rounded-lg hover:bg-ice transition-colors w-full sm:w-auto justify-center">
              <Phone size={18} /> Hubungi Kami
            </Link>
            <a href="https://wa.me/62818719119" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors w-full sm:w-auto justify-center">
              <MessageSquare size={18} /> WhatsApp Sekarang
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default LayananIndex;
