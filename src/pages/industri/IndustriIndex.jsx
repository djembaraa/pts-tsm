import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Factory, Building2, PlusSquare, FlaskConical, Leaf, 
  Zap, Building, Ship, Droplets, ArrowRight, MessageSquare, Phone,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import Button from '../../components/ui/Button';
import ClientMarquee from '../../components/ui/ClientMarquee';

const industryList = [
  {
    id: 'manufaktur',
    icon: <Factory size={28} />,
    title: 'Industri Manufaktur',
    subtitle: 'Tekstil, Otomotif, Elektronik, F&B',
    desc: 'Industri manufaktur membutuhkan air proses dengan kualitas konsisten. Sistem RO TSM menyediakan air bebas mineral untuk boiler, cooling tower, proses produksi, dan utilitas pabrik.',
    tags: ['Boiler Feed Water', 'Process Water', 'Cooling Water', 'Rinsing Water'],
    url: '/industri/manufaktur',
    capacity: '5–500 m³/hari'
  },
  {
    id: 'hotel',
    icon: <Building2 size={28} />,
    title: 'Hotel & Pariwisata',
    subtitle: 'Hotel Bintang, Resort, Vila',
    desc: 'Kualitas air yang prima adalah bagian dari pengalaman tamu yang tak terlupakan. Sistem RO TSM memastikan air minum, laundry, kolam renang, dan spa hotel memenuhi standar tertinggi.',
    tags: ['Air Minum', 'Laundry', 'Kolam Renang', 'Spa & Wellness'],
    url: '/industri/hotel',
    capacity: '1–50 m³/hari'
  },
  {
    id: 'rs',
    icon: <PlusSquare size={28} />,
    title: 'Rumah Sakit & Klinis',
    subtitle: 'RS, Klinik, Lab',
    desc: 'Industri medis memiliki standar kualitas air ketat. Sistem RO + EDI TSM menghasilkan Purified Water untuk kebutuhan sterilisasi dan hemodialisis.',
    tags: ['Purified Water', 'Hemodialisis', 'Sterilisasi', 'Lab Water'],
    url: '/kontak',
    capacity: '500L–20 m³/hari'
  },
  {
    id: 'farmasi',
    icon: <FlaskConical size={28} />,
    title: 'Industri Farmasi',
    subtitle: 'Pabrik Obat, Sediaan Steril, Biologi',
    desc: 'Purified Water, Water for Injection, Pure Steam dengan validasi IQ/OQ/PQ lengkap sesuai pedoman CPOB BPOM, USP, EP, dan JP.',
    tags: ['CPOB BPOM', 'Purified Water', 'WFI', 'Validasi IQ/OQ/PQ'],
    url: '/industri/farmasi',
    capacity: '200L–5 m³/jam'
  },
  {
    id: 'agrikultur',
    icon: <Leaf size={28} />,
    title: 'Agrikultur & Perkebunan',
    subtitle: 'Irigasi, Greenhouse, Aquakultur',
    desc: 'Kualitas air irigasi yang baik meningkatkan hasil panen. TSM menyediakan sistem filtrasi dan RO untuk greenhouse, hidroponik, dan fasilitas aquakultur modern.',
    tags: ['Irigasi Tetes', 'Hidroponik', 'Aquakultur', 'Pengolahan Limbah'],
    url: '/industri/agrikultur',
    capacity: '1–100 m³/hari'
  },
  {
    id: 'pltu',
    icon: <Zap size={28} />,
    title: 'Pembangkit Listrik',
    subtitle: 'PLTU, PLTG, PLTA, Geothermal',
    desc: 'Boiler bertekanan tinggi di pembangkit listrik membutuhkan air dengan kemurnian ekstrem. Sistem demineralisasi dan RO TSM memenuhi spesifikasi ASME/VGB.',
    tags: ['Boiler Makeup', 'Condensate Polishing', 'Cooling Tower', 'Demineralisasi'],
    url: '/kontak',
    capacity: '10–500 m³/hari'
  },
  {
    id: 'properti',
    icon: <Building size={28} />,
    title: 'Properti & Real Estate',
    subtitle: 'Apartemen, Gedung Perkantoran, Mall',
    desc: 'Gedung bertingkat dan kawasan perumahan semakin banyak yang mengintegrasikan sistem RO sentral untuk menyediakan air minum berkualitas langsung ke setiap unit.',
    tags: ['Air Minum Sentral', 'Cooling Tower', 'Air Bersih Penghuni', 'IPAL Gedung'],
    url: '/kontak',
    capacity: '5–100 m³/hari'
  },
  {
    id: 'maritim',
    icon: <Ship size={28} />,
    title: 'Maritim & Offshore',
    subtitle: 'Kapal, Platform, Pulau Terpencil',
    desc: 'Di tengah laut, air tawar adalah kebutuhan vital. Sistem SWRO compact dan desalinasi TSM telah digunakan di berbagai kapal, platform offshore, dan pulau terpencil.',
    tags: ['SWRO Compact', 'Desalinasi Portable', 'Air Minum Kru', 'Air Proses'],
    url: '/industri/maritim',
    capacity: '500L–50 m³/hari'
  },
  {
    id: 'fb',
    icon: <Droplets size={28} />,
    title: 'Minuman & F&B',
    subtitle: 'Pabrik Minuman, Industri Makanan',
    desc: 'Kualitas air secara langsung mempengaruhi rasa dan kualitas produk minuman. Sistem RO TSM menghasilkan air proses yang konsisten untuk memastikan standar produk.',
    tags: ['Air Proses Produksi', 'Air Minum Isi Ulang', 'CIP Cleaning', 'Boiler Steam'],
    url: '/kontak',
    capacity: '5–200 m³/hari'
  }
];

const IndustriIndex = () => {
  const revealRefs = useRef([]);
  const industriRef = useRef(null);
  
  const scrollIndustri = (direction) => {
    if (industriRef.current) {
      const scrollAmount = 300;
      industriRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
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
            <Link to="/" className="hover:text-ice transition-colors">Beranda</Link> › Industri
          </div>
          <h1 className="font-condensed text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.1] mb-[1rem]">Solusi Water Treatment untuk Setiap Industri</h1>
          <p className="text-[0.95rem] opacity-90 max-w-[700px] mx-auto leading-relaxed">
            PT Tirta Sumber Makmur memiliki pengalaman mendalam melayani berbagai sektor industri dengan solusi yang disesuaikan untuk kebutuhan spesifik masing-masing.
          </p>
        </div>
      </div>

      {/* ══ INDUSTRI GRID ══ */}
      <section className="py-[4rem] bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div ref={addToRefs} className="text-center max-w-[600px] mx-auto mb-12 opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0">
            <span className="inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-ice px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem] border border-border">Sektor yang Kami Layani</span>
            <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold text-navy leading-[1.15] mb-[0.65rem]">Industri yang Kami Tangani</h2>
            <p className="text-[0.88rem] text-muted leading-[1.75]">Setiap industri memiliki standar kualitas air yang berbeda. Kami memahami dan memenuhi semua kebutuhan tersebut.</p>
            <div className="w-[36px] h-[3px] bg-gradient-to-r from-blue to-accent rounded-[2px] mx-auto mt-[0.85rem]"></div>
          </div>

          <div ref={industriRef} className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] overflow-x-auto snap-x snap-mandatory pb-4 sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] scroll-smooth">
            {industryList.map((item, idx) => (
              <div key={item.id} ref={addToRefs} className="bg-white border border-border rounded-xl p-8 flex flex-col transition-all duration-300 relative overflow-hidden group hover:-translate-y-[4px] hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] opacity-0 translate-y-[22px] [&.visible]:opacity-100 [&.visible]:translate-y-0 min-w-[280px] max-[640px]:w-[85vw] snap-center shrink-0 sm:min-w-0 sm:w-auto">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue to-accent origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 shrink-0 bg-ice rounded-xl flex items-center justify-center text-accent transition-colors duration-300 group-hover:bg-blue group-hover:text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-[1.1rem] font-bold text-navy leading-snug">{item.title}</h3>
                    <span className="text-[0.78rem] text-muted">{item.subtitle}</span>
                  </div>
                </div>

                <p className="text-[0.88rem] text-muted leading-[1.7] mb-[1.2rem] flex-1">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="text-[0.72rem] font-semibold px-3 py-1 bg-ice border border-border rounded-full text-text">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                  <span className="text-[0.78rem] text-muted">{item.capacity}</span>
                  <Link to={item.url} className="inline-flex items-center gap-1 text-accent font-bold text-[0.86rem] group-hover:text-blue transition-colors">
                    Pelajari <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Industri Arrows (Mobile Only) */}
          <div className="flex sm:hidden justify-center gap-4 mt-2">
            <button onClick={() => scrollIndustri('left')} aria-label="Previous card" className="w-[42px] h-[42px] rounded-full bg-white border border-border flex items-center justify-center text-navy hover:bg-accent hover:text-white hover:-translate-y-[2px] transition-all duration-300 shadow-sm">
              <ChevronLeft size={22} />
            </button>
            <button onClick={() => scrollIndustri('right')} aria-label="Next card" className="w-[42px] h-[42px] rounded-full bg-white border border-border flex items-center justify-center text-navy hover:bg-accent hover:text-white hover:-translate-y-[2px] transition-all duration-300 shadow-sm">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </section>

      {/* ══ PORTOFOLIO ══ */}
      <section className="py-[5rem] bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
        <div className="max-w-[1240px] mx-auto px-6 relative z-10">
          <div ref={addToRefs} className="text-center max-w-[600px] mx-auto mb-14 opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0">
            <span className="inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-white/10 border border-white/20 px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem]">Portofolio</span>
            <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold text-white leading-[1.15] mb-[0.65rem]">Proyek yang Telah Kami Kerjakan</h2>
            <p className="text-[0.88rem] text-white/70 leading-[1.75]">Sekilas beberapa proyek nyata yang berhasil kami selesaikan untuk klien di berbagai industri.</p>
            <div className="w-[36px] h-[3px] bg-gradient-to-r from-blue to-accent rounded-[2px] mx-auto mt-[0.85rem]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1.5rem]">
            {/* Case 1 */}
            <div ref={addToRefs} className="rounded-xl overflow-hidden relative group opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0 h-full">
              <img src="/images/foto-pemasangan-lapangan.jpg" alt="Proyek Manufaktur" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/30"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <span className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-accent mb-2 block">Manufaktur · Karawang</span>
                <h3 className="text-[1.1rem] font-bold text-white mb-3 leading-snug">Sistem RO Pabrik Tekstil — 200 m³/hari</h3>
                <p className="text-[0.84rem] text-white/80 leading-[1.65] mb-6">Instalasi sistem RO industri lengkap dengan pre-treatment untuk menggantikan suplai PDAM dan menurunkan biaya operasional.</p>
                <div className="flex gap-6 flex-wrap border-t border-white/10 pt-4">
                  <div>
                    <div className="font-condensed text-2xl font-black text-accent leading-none">70%</div>
                    <div className="text-[0.7rem] text-white/60 mt-1 uppercase tracking-wider">Hemat Air PDAM</div>
                  </div>
                  <div>
                    <div className="font-condensed text-2xl font-black text-accent leading-none">18<span className="text-sm">bln</span></div>
                    <div className="text-[0.7rem] text-white/60 mt-1 uppercase tracking-wider">Payback Period</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div ref={addToRefs} className="bg-gradient-to-br from-[#0a2240] to-blue rounded-xl p-8 relative overflow-hidden group opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0">
              <span className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-accent mb-2 block">Pariwisata · Raja Ampat</span>
              <h3 className="text-[1.1rem] font-bold text-white mb-3 leading-snug">Desalinasi Air Laut Resort Mewah — 30 m³/hari</h3>
              <p className="text-[0.84rem] text-white/80 leading-[1.65] mb-6">Sistem SWRO untuk resort terpencil di kepulauan Papua Barat, menggantikan distribusi air tangki yang mahal dan tidak andal.</p>
              <div className="flex gap-6 flex-wrap border-t border-white/10 pt-4 mt-auto">
                <div>
                  <div className="font-condensed text-2xl font-black text-accent leading-none">100%</div>
                  <div className="text-[0.7rem] text-white/60 mt-1 uppercase tracking-wider">Mandiri Air Tawar</div>
                </div>
                <div>
                  <div className="font-condensed text-2xl font-black text-accent leading-none">60%</div>
                  <div className="text-[0.7rem] text-white/60 mt-1 uppercase tracking-wider">Hemat Biaya Air</div>
                </div>
              </div>
            </div>

            {/* Case 3 */}
            <div ref={addToRefs} className="bg-gradient-to-br from-[#0a2240] to-blue rounded-xl p-8 relative overflow-hidden group opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0">
              <span className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-accent mb-2 block">Farmasi · Tangerang</span>
              <h3 className="text-[1.1rem] font-bold text-white mb-3 leading-snug">Purified Water System GMP — 5 m³/hari</h3>
              <p className="text-[0.84rem] text-white/80 leading-[1.65] mb-6">Sistem produksi Purified Water sesuai standar CPOB BPOM dan USP untuk fasilitas produksi obat generik.</p>
              <div className="flex gap-6 flex-wrap border-t border-white/10 pt-4 mt-auto">
                <div>
                  <div className="font-condensed text-2xl font-black text-accent leading-none">USP</div>
                  <div className="text-[0.7rem] text-white/60 mt-1 uppercase tracking-wider">Standar Terpenuhi</div>
                </div>
                <div>
                  <div className="font-condensed text-2xl font-black text-accent leading-none">100%</div>
                  <div className="text-[0.7rem] text-white/60 mt-1 uppercase tracking-wider">Lolos Audit BPOM</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button to="/artikel" variant="white">
              Lihat Semua Studi Kasus
            </Button>
          </div>
        </div>
      </section>

      {/* ══ KLIEN ══ */}
      <section className="py-[4rem] bg-gray">
        <div className="max-w-[1240px] mx-auto px-6 mb-12">
          <div ref={addToRefs} className="text-center max-w-[600px] mx-auto opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0">
            <span className="inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-ice px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem] border border-border">Klien &amp; Mitra</span>
            <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold text-navy leading-[1.15] mb-[0.65rem]">Dipercaya oleh Perusahaan Terkemuka</h2>
            <p className="text-[0.88rem] text-muted leading-[1.75]">Lebih dari 24 tahun kami telah melayani berbagai perusahaan besar, institusi, dan lembaga pemerintah di seluruh Indonesia.</p>
            <div className="w-[36px] h-[3px] bg-gradient-to-r from-blue to-accent rounded-[2px] mx-auto mt-[0.85rem]"></div>
          </div>
        </div>
        <ClientMarquee />
        <p className="text-center text-[0.8rem] text-muted mt-[1.5rem] italic">dan masih banyak klien lainnya di seluruh Indonesia</p>
      </section>

      {/* ══ CTA BAND ══ */}
      <section className="bg-gradient-to-r from-blue to-accent py-14">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <h2 className="font-condensed text-3xl font-extrabold text-white mb-4">Industri Anda Belum Terdaftar?</h2>
          <p className="text-white/90 mb-8 max-w-[600px] mx-auto">Kami melayani hampir semua sektor yang membutuhkan air berkualitas. Konsultasikan kebutuhan spesifik Anda dengan tim ahli kami.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/kontak" variant="white" className="w-full sm:w-auto">
              <MessageSquare size={18} /> Konsultasi Sekarang
            </Button>
            <Button to="/produk" variant="outline-white" className="w-full sm:w-auto">
              Lihat Produk Kami <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustriIndex;
