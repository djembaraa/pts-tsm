import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Microscope, Wrench, Focus, Leaf, ScrollText, Droplet, Waves, Building2, Droplets, Ship, Settings, Factory, Calendar, Clock, User, ChevronLeft, ChevronRight } from 'lucide-react';
import ClientMarquee from '../components/ui/ClientMarquee';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';

  const Home = () => {
  const revealRefs = useRef([]);
  const testimoRef = useRef(null);

  const scrollTestimo = (direction) => {
    if (testimoRef.current) {
      const scrollAmount = 320;
      testimoRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
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
      {/* ══ HERO ══ */}
      <section className="relative h-[480px] min-h-[420px] max-h-[520px] max-[900px]:h-auto max-[900px]:min-h-[340px] max-[900px]:max-h-none flex flex-col overflow-hidden">
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet="/images/foto-pemasangan-lapangan.webp" type="image/webp" />
            <img 
              src="/images/foto-pemasangan-lapangan.jpg" 
              alt="Water Treatment Plant PT Tirta Sumber Makmur" 
              className="w-full h-full object-cover object-[center_40%] brightness-75 saturate-110 contrast-110 animate-[hZoom_24s_ease-in-out_infinite_alternate]"
            />
          </picture>
        </div>
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(105deg,rgba(6,18,38,0.97)_0%,rgba(6,18,38,0.93)_28%,rgba(6,18,38,0.75)_40%,rgba(6,18,38,0.22)_52%,rgba(6,18,38,0.06)_100%)]"></div>
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[length:44px_44px] [mask-image:linear-gradient(to_right,black_0%,black_30%,transparent_50%)]"></div>
        <div className="hidden min-[900px]:block absolute top-0 bottom-0 left-[44%] w-[1px] z-[2] bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,200,240,0.25)_20%,rgba(0,200,240,0.45)_50%,rgba(0,200,240,0.25)_80%,transparent_100%)] -skew-x-[6deg] origin-center"></div>
        <div className="absolute left-0 top-0 bottom-0 w-[3px] z-[2] bg-[linear-gradient(to_bottom,transparent_10%,#00b4d8_50%,transparent_90%)] animate-[glowLine_3s_ease-in-out_infinite_alternate]"></div>
        
        <div className="relative z-[3] flex-1 flex items-center">
          <div className="max-w-[1240px] mx-auto px-6 w-full">
            <div className="max-w-[520px] max-[900px]:max-w-[80%] max-[640px]:max-w-full">
              <div className="inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.22em] uppercase text-accent mb-4 opacity-0 animate-[fadeUp_0.7s_0.15s_ease_forwards] before:content-[''] before:block before:w-5 before:h-[1.5px] before:bg-accent before:shrink-0">
                Trusted Water Technology Since 2002
              </div>
              <h1 className="font-condensed text-[clamp(1.55rem,2.3vw,2.05rem)] max-[900px]:text-[clamp(1.3rem,4vw,1.75rem)] font-bold leading-[1.2] tracking-[0.02em] text-white mb-[0.85rem] whitespace-nowrap max-[900px]:whitespace-normal opacity-0 animate-[fadeUp_0.7s_0.32s_ease_forwards]">
                Water Treatment Technology &mdash; <em className="not-italic text-accent">From Indonesia to the World</em>
              </h1>
              <p className="text-[0.82rem] font-normal leading-[1.78] text-white/65 max-w-[420px] mb-[1.6rem] opacity-0 animate-[fadeUp_0.7s_0.50s_ease_forwards]">
                Engineered water treatment solutions for industry, marine, hospitality, and infrastructure &mdash; trusted by leading companies across Indonesia.
              </p>
              <div className="flex gap-[0.65rem] flex-wrap opacity-0 animate-[fadeUp_0.7s_0.68s_ease_forwards]">
                <Link to="/kontak" className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-accent text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,180,216,0.32)] hover:bg-white hover:text-blue hover:-translate-y-[2px]">
                  Konsultasi Gratis
                </Link>
                <Link to="/produk" className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/10 hover:border-white">
                  Lihat Produk
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[14px] right-[20px] z-[3] text-[0.6rem] text-white/35 tracking-[0.08em] italic pointer-events-none">
          Water Treatment Plant &mdash; PT Tirta Sumber Makmur
        </div>
      </section>

      {/* Hero Stats Bar */}
      <div className="relative z-[3] bg-[rgba(5,14,30,0.97)] border-t border-white/5 backdrop-blur-[8px]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex items-stretch h-[64px] overflow-x-auto max-[640px]:h-auto max-[640px]:flex-wrap">
            <div className="flex-1 min-w-[90px] max-[640px]:min-w-[50%] max-[640px]:border-b flex flex-col items-center justify-center p-[0.45rem] border-r border-white/5 text-white">
              <div className="font-condensed text-[1.35rem] font-black text-accent leading-none">24+</div>
              <div className="text-[0.56rem] opacity-52 tracking-[0.07em] uppercase mt-[0.1rem] text-center">Tahun Pengalaman</div>
            </div>
            <div className="flex-1 min-w-[90px] max-[640px]:min-w-[50%] max-[640px]:border-b flex flex-col items-center justify-center p-[0.45rem] border-r border-white/5 text-white">
              <div className="font-condensed text-[1.35rem] font-black text-accent leading-none">500+</div>
              <div className="text-[0.56rem] opacity-52 tracking-[0.07em] uppercase mt-[0.1rem] text-center">Proyek Selesai</div>
            </div>
            <div className="flex-1 min-w-[90px] max-[640px]:min-w-[50%] max-[640px]:border-b flex flex-col items-center justify-center p-[0.45rem] border-r border-white/5 text-white">
              <div className="font-condensed text-[1.35rem] font-black text-accent leading-none">100+</div>
              <div className="text-[0.56rem] opacity-52 tracking-[0.07em] uppercase mt-[0.1rem] text-center">Klien Aktif</div>
            </div>
            <div className="flex-1 min-w-[90px] max-[640px]:min-w-[50%] max-[640px]:border-b flex flex-col items-center justify-center p-[0.45rem] border-r border-white/5 text-white">
              <div className="font-condensed text-[1.35rem] font-black text-accent leading-none">24/7</div>
              <div className="text-[0.56rem] opacity-52 tracking-[0.07em] uppercase mt-[0.1rem] text-center">Dukungan Teknis</div>
            </div>
            <div className="flex-1 min-w-[90px] max-[640px]:min-w-[50%] flex flex-col items-center justify-center p-[0.45rem] text-white">
              <div className="font-condensed text-[1.35rem] font-black text-accent leading-none">ISO</div>
              <div className="text-[0.56rem] opacity-52 tracking-[0.07em] uppercase mt-[0.1rem] text-center">Bersertifikasi</div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ HIGHLIGHTS ══ */}
      <section className="py-[4rem] bg-gray">
        <div className="max-w-[1240px] mx-auto px-6">
          <div ref={addToRefs} className="text-center max-w-[600px] mx-auto mb-12 opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0">
            <span className="inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-ice px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem] border border-border">Keunggulan Kami</span>
            <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold text-navy leading-[1.15] mb-[0.65rem]">Mengapa Memilih TSM?</h2>
            <p className="text-[0.88rem] text-muted leading-[1.75]">Lebih dari dua dekade melayani industri air bersih Indonesia dengan dedikasi, inovasi, dan keahlian teknis terbaik.</p>
            <div className="w-[36px] h-[3px] bg-gradient-to-r from-blue to-accent rounded-[2px] mx-auto mt-[0.85rem]"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.1rem]">
            {[
              { icon: Trophy, title: 'Berpengalaman Sejak 2002', desc: 'Lebih dari 24 tahun menjadi mitra solusi air bersih terpercaya bagi ratusan industri di seluruh Indonesia.' },
              { icon: Microscope, title: 'Teknologi Mutakhir', desc: 'Menggunakan membran RO dan komponen berteknologi terkini dari produsen terkemuka dunia untuk efisiensi optimal.' },
              { icon: Wrench, title: 'Layanan Purna Jual', desc: 'Tim teknisi berpengalaman siap memberikan dukungan perawatan, suku cadang, dan respons darurat 24 jam.' },
              { icon: Focus, title: 'Solusi Custom', desc: 'Setiap sistem dirancang khusus sesuai kebutuhan kapasitas, kualitas air sumber, dan anggaran klien.' },
              { icon: Leaf, title: 'Ramah Lingkungan', desc: 'Solusi hemat energi dan sistem recovery air tinggi untuk meminimalkan dampak lingkungan dan biaya operasional.' },
              { icon: ScrollText, title: 'Bersertifikasi Resmi', desc: 'Seluruh produk dan layanan memenuhi standar nasional dan internasional dengan sertifikasi yang diakui.' }
            ].map((hl, idx) => (
              <div key={idx} ref={addToRefs} className="bg-white border border-border rounded-lg p-[1.5rem_1.35rem] transition-all duration-300 relative overflow-hidden group hover:-translate-y-[3px] hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] opacity-0 translate-y-[22px] [&.visible]:opacity-100 [&.visible]:translate-y-0 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-gradient-to-r before:from-blue before:to-accent before:scale-x-0 before:origin-left before:transition-all before:duration-300 group-hover:before:scale-x-100">
                <div className="w-[40px] h-[40px] bg-ice rounded-lg flex items-center justify-center text-[1.2rem] text-accent mb-[0.85rem] transition-all duration-300 group-hover:bg-blue group-hover:text-white">
                  <hl.icon size={20} />
                </div>
                <h3 className="text-[0.87rem] font-bold mb-[0.32rem] text-navy">{hl.title}</h3>
                <p className="text-[0.79rem] text-muted leading-[1.65]">{hl.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRODUCTS ══ */}
      <section className="py-[4rem] bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div ref={addToRefs} className="text-center max-w-[600px] mx-auto mb-12 opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0">
            <span className="inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-ice px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem] border border-border">Produk &amp; Solusi</span>
            <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold text-navy leading-[1.15] mb-[0.65rem]">Sistem Pengolahan Air Kami</h2>
            <p className="text-[0.88rem] text-muted leading-[1.75]">Rangkaian lengkap solusi water treatment dari skala kecil hingga industri besar, dirancang untuk keandalan dan efisiensi maksimal.</p>
            <div className="w-[36px] h-[3px] bg-gradient-to-r from-blue to-accent rounded-[2px] mx-auto mt-[0.85rem]"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.25rem]">
            {[
              { img: 'foto-mesin-swro.jpg', cat: 'Reverse Osmosis', title: 'Sistem RO Industri', desc: 'Kapasitas 1–500 m³/hari untuk pabrik, pembangkit listrik, dan fasilitas industri besar yang butuh air proses berkualitas tinggi.', url: '/produk/ro-industri' },
              { img: 'porto-pelindo-1.jpg', cat: 'Desalinasi', title: 'SWRO — Desalinasi Air Laut', desc: 'Sea Water Reverse Osmosis berkapasitas tinggi untuk kepulauan, resort pesisir, dan industri maritim.', url: '/produk/desalinasi' },
              { img: 'produk-ro-9m3-a.jpg', cat: 'Komersial', title: 'RO Gedung & Hotel', desc: 'Sistem RO terintegrasi untuk gedung bertingkat, hotel berbintang, pusat perbelanjaan, dan rumah sakit.', url: '/produk/ro-komersial' },
              { img: 'porto-sosro-5.jpg', cat: 'Ultrafiltrasi', title: 'Sistem UF & MF', desc: 'Penyaringan Ultrafiltration dan Microfiltration sebagai pre-treatment RO maupun unit pengolahan air mandiri.', url: '/produk/uf' },
              { img: 'porto-kontainer-1.jpg', cat: 'Mobile / Portable', title: 'RO Mobile — Sistem Kontainer', desc: 'Unit RO dalam kontainer atau mobile yang dapat dipindah, ideal untuk offshore, kepulauan, dan lokasi terpencil.', url: '/produk/ro-mobile' },
              { img: 'foto-bengkel.jpg', cat: 'Produksi & Workshop', title: 'Bengkel Produksi TSM', desc: 'Setiap sistem dirancang, dirakit, dan diuji di bengkel sendiri di Bekasi sebelum dikirim ke lokasi klien.', url: '/tentang' }
            ].map((pc, idx) => (
              <ProductCard 
                key={idx}
                ref={addToRefs}
                className="opacity-0 translate-y-[22px] [&.visible]:opacity-100 [&.visible]:translate-y-0"
                {...pc}
              />
            ))}
          </div>
          
          <div className="text-center mt-[2.5rem]">
            <Button to="/produk" variant="primary">
              Lihat Semua Produk &amp; Solusi &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* ══ INDUSTRIES ══ */}
      <section className="py-[4rem] bg-navy">
        <div className="max-w-[1240px] mx-auto px-6">
          <div ref={addToRefs} className="text-center max-w-[600px] mx-auto mb-12 opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0">
            <span className="inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-white/10 px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem] border border-white/20">Sektor Industri</span>
            <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold text-white leading-[1.15] mb-[0.65rem]">Melayani Berbagai Industri</h2>
            <p className="text-[0.88rem] text-white/70 leading-[1.75]">Solusi TSM telah dipercaya oleh beragam sektor industri di seluruh Indonesia.</p>
            <div className="w-[36px] h-[3px] bg-gradient-to-r from-blue to-accent rounded-[2px] mx-auto mt-[0.85rem]"></div>
          </div>
          <div ref={addToRefs} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-[0.85rem] opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0">
            {[
              { icon: Factory, title: 'Manufaktur', url: '/industri/manufaktur' },
              { icon: Building2, title: 'Hotel & Pariwisata', url: '/industri/hotel' },
              { icon: Building2, title: 'Rumah Sakit', url: '/industri/rs' },
              { icon: Droplets, title: 'Farmasi', url: '/industri/farmasi' },
              { icon: Leaf, title: 'Agrikultur', url: '/industri/agrikultur' },
              { icon: Building2, title: 'Pembangkit Listrik', url: '/industri/pltu' },
              { icon: Building2, title: 'Properti', url: '/industri/properti' },
              { icon: Ship, title: 'Maritim & Offshore', url: '/industri/maritim' },
              { icon: Droplets, title: 'Minuman & F&B', url: '/industri/manufaktur' },
              { icon: Settings, title: 'Elektronik', url: '/industri/manufaktur' }
            ].map((ind, idx) => (
              <Link key={idx} to={ind.url} className="bg-white/5 border border-white/10 rounded-lg p-[1.35rem_0.85rem] text-center transition-all duration-300 block text-white hover:bg-accent/10 hover:border-accent hover:-translate-y-[3px]">
                <div className="flex justify-center mb-[0.55rem] text-accent"><ind.icon size={28} /></div>
                <span className="text-[0.75rem] font-semibold tracking-[0.02em] block">{ind.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section className="py-[4rem] bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[3.5rem] items-center">
            <div ref={addToRefs} className="relative rounded-[10px] overflow-visible opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0">
              <picture>
                <source srcSet="/images/foto-mesin-swro.webp" type="image/webp" />
                <img src="/images/foto-mesin-swro.jpg" alt="Fasilitas PT Tirta Sumber Makmur" loading="lazy" className="w-full h-[400px] max-[1024px]:h-[280px] object-cover rounded-[10px] block" />
              </picture>
              <div className="absolute bottom-[1.5rem] right-[-0.8rem] max-[1024px]:right-[0.6rem] bg-blue text-white rounded-lg p-[0.9rem_1.2rem] text-center shadow-[0_8px_44px_rgba(10,34,64,0.18)]">
                <div className="font-condensed text-[1.9rem] font-black leading-none text-accent">2002</div>
                <div className="text-[0.62rem] tracking-[0.1em] uppercase opacity-80 mt-1">Berdiri Sejak</div>
              </div>
            </div>
            <div ref={addToRefs} className="opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0">
              <span className="inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-ice px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem] border border-border">Tentang Kami</span>
              <h2 className="font-condensed text-[clamp(1.6rem,2.4vw,2.1rem)] font-extrabold text-navy leading-[1.12] mb-[0.9rem]">Dedikasi Dua Dekade untuk Air Bersih Indonesia</h2>
              <p className="text-[0.88rem] text-muted leading-[1.8] mb-[0.8rem]">PT Tirta Sumber Makmur (TSM) adalah perusahaan Indonesia yang telah berdiri sejak tahun 2002, berkomitmen menghadirkan solusi reverse osmosis dan desalinasi air berkualitas tinggi untuk berbagai sektor industri dan komersial di tanah air.</p>
              <p className="text-[0.88rem] text-muted leading-[1.8] mb-[0.8rem]">Berlokasi strategis di kawasan Bekasi, Jawa Barat, kami melayani pelanggan dari Sabang hingga Merauke dengan tim insinyur berpengalaman dan dukungan purna jual yang komprehensif.</p>
              <ul className="mt-[1rem] mb-[1.5rem] flex flex-col gap-[0.6rem]">
                {[
                  'Lebih dari 24 tahun pengalaman di bidang water treatment',
                  'Tim engineering bersertifikasi dan terlatih internasional',
                  'Portofolio lebih dari 500 proyek yang berhasil diselesaikan',
                  'Solusi turnkey dari desain, instalasi, hingga commissioning',
                  'Garansi sistem dan dukungan teknis jangka panjang'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-[0.6rem] text-[0.84rem] text-text">
                    <span className="text-accent font-bold shrink-0 mt-[0.1rem]">✔</span> {item}
                  </li>
                ))}
              </ul>
              <Link to="/tentang" className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-blue text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-blue hover:text-white hover:-translate-y-[2px]">
                Pelajari Lebih Lanjut &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ARTICLE PREVIEW ══ */}
      <section className="py-[4rem] bg-gray">
        <div className="max-w-[1240px] mx-auto px-6">
          <div ref={addToRefs} className="text-center max-w-[600px] mx-auto mb-12 opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0">
            <span className="inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-ice px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem] border border-border">Artikel Terbaru</span>
            <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold text-navy leading-[1.15] mb-[0.65rem]">Wawasan Dunia Water Treatment</h2>
            <p className="text-[0.88rem] text-muted leading-[1.75]">Pelajari teknologi terkini, tips perawatan sistem, dan perkembangan industri pengolahan air dari para ahli kami.</p>
            <div className="w-[36px] h-[3px] bg-gradient-to-r from-blue to-accent rounded-[2px] mx-auto mt-[0.85rem]"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.25rem]">
            {[
              { cat: 'Teknologi', img: 'foto-mesin-swro.jpg', bg: 'from-[#054a6e] to-[#1e90d6]', date: '28 Maret 2025', read: '5 menit baca', title: 'Mengenal Teknologi Reverse Osmosis: Prinsip Kerja dan Keunggulannya', desc: 'RO menggunakan tekanan tinggi untuk memaksa air melewati membran semi-permeabel, menyisihkan kontaminan hingga 99%. Simak cara kerjanya secara mendalam.', url: '/artikel/ro-prinsip-kerja', author: 'Tim TSM' },
              { cat: 'Desalinasi', img: 'porto-pulau-ayer-1.jpg', bg: 'from-[#0a2240] to-[#0d5fa8]', date: '15 Maret 2025', read: '6 menit baca', title: 'Desalinasi Air Laut: Solusi Krisis Air Bersih di Pulau-Pulau Terpencil', desc: 'Kawasan pesisir dan kepulauan Indonesia menghadapi tantangan air tawar yang serius. Sistem SWRO hadir sebagai jawaban yang kini semakin terjangkau.', url: '/artikel/desalinasi-solusi-pulau', author: 'Tim TSM' },
              { cat: 'Perawatan', img: 'porto-sosro-1.jpg', bg: 'from-[#1a3a5c] to-[#1e90d6]', date: '5 Maret 2025', read: '4 menit baca', title: '5 Kesalahan Umum Perawatan Membran RO yang Perlu Dihindari', desc: 'Membran RO adalah komponen paling kritis sekaligus mahal. Kenali kesalahan umum dan cara mencegahnya untuk memaksimalkan usia pakai membran.', url: '/artikel/5-kesalahan-perawatan-ro', author: 'Tim Teknis TSM' }
            ].map((art, idx) => (
              <div key={idx} ref={addToRefs} className="bg-white border border-border rounded-[10px] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_44px_rgba(10,34,64,0.18)] hover:border-accent group opacity-0 translate-y-[22px] [&.visible]:opacity-100 [&.visible]:translate-y-0">
                <div className={`h-[192px] bg-gradient-to-br ${art.bg} relative overflow-hidden shrink-0`}>
                  <img src={`/images/${art.img}`} alt={art.cat} className="w-full h-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <span className="absolute top-[0.88rem] left-[0.88rem] bg-accent text-white text-[0.62rem] font-bold tracking-[0.1em] uppercase py-[0.26rem] px-[0.68rem] rounded-[4px] z-10">{art.cat}</span>
                </div>
                <div className="p-[1.25rem] flex-1 flex flex-col">
                  <div className="text-[0.72rem] text-muted mb-[0.52rem] flex items-center gap-[0.35rem]">
                    <Calendar size={13} className="text-accent" /> {art.date} &nbsp;·&nbsp; <Clock size={13} className="text-accent" /> {art.read}
                  </div>
                  <h3 className="text-[0.96rem] font-bold text-navy leading-[1.42] mb-[0.52rem]">
                    <Link to={art.url} className="hover:text-blue transition-colors">{art.title}</Link>
                  </h3>
                  <p className="text-[0.83rem] text-muted leading-[1.65] flex-1">{art.desc}</p>
                </div>
                <div className="flex items-center justify-between p-[0.82rem_1.25rem] border-t border-border mt-auto">
                  <span className="text-[0.72rem] text-muted font-medium flex items-center gap-[0.25rem]">
                    <User size={13} /> {art.author}
                  </span>
                  <Link to={art.url} className="text-[0.72rem] font-bold text-blue tracking-[0.05em] uppercase flex items-center gap-[0.28rem] transition-all duration-300 group-hover:gap-[0.52rem]">Baca &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-[2.5rem]">
            <Link to="/artikel" className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-blue text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-blue hover:text-white hover:-translate-y-[2px]">
              Lihat Semua Artikel &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="py-[4rem] bg-gradient-to-br from-navy to-[#0d3a6b]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div ref={addToRefs} className="text-center max-w-[600px] mx-auto mb-12 opacity-0 translate-y-[22px] transition-all duration-[620ms] ease-out [&.visible]:opacity-100 [&.visible]:translate-y-0">
            <span className="inline-block text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent bg-white/10 border-white/20 px-[0.82rem] py-[0.24rem] rounded-[20px] mb-[0.75rem] border">Testimoni Klien</span>
            <h2 className="font-condensed text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold text-white leading-[1.15] mb-[0.65rem]">Dipercaya Ratusan Klien</h2>
            <p className="text-[0.88rem] text-white/70 leading-[1.75]">Kepercayaan klien adalah amanah terbesar kami dalam setiap proyek yang kami kerjakan.</p>
            <div className="w-[36px] h-[3px] bg-gradient-to-r from-blue to-accent rounded-[2px] mx-auto mt-[0.85rem]"></div>
          </div>
          
          <div ref={testimoRef} className="flex gap-[1.2rem] overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] scroll-smooth">
            {[
              { quote: '"Sistem RO industri yang dipasang TSM sudah berjalan 3 tahun tanpa masalah berarti. Tim teknisnya responsif dan profesional. Sangat merekomendasikan untuk kebutuhan water treatment industri."', initial: 'PM', name: 'Plant Manager', company: 'PT Maju Jaya Industri' },
              { quote: '"Kami menggunakan sistem desalinasi TSM untuk resort di kepulauan. Kualitas air sangat baik, dan layanan purna jualnya luar biasa. Investasi terbaik untuk operasional resort kami."', initial: 'GM', name: 'GM Operations', company: 'Raja Ampat Resort' },
              { quote: '"TSM membantu rumah sakit kami memenuhi standar air untuk instalasi farmasi sesuai regulasi BPOM. Proses dari survei hingga commissioning sangat terstruktur dan profesional."', initial: 'KI', name: 'Kepala IFRS', company: 'RSUD Bekasi' },
              { quote: '"Filter air TSM sangat membantu efisiensi penggunaan air tanah di pabrik makanan kami. Hasil air jernih dan sesuai baku mutu kesehatan."', initial: 'DA', name: 'Direktur Operasional', company: 'PT Food Makmur' },
              { quote: '"Kami sangat puas dengan layanan maintenance rutin dari tim TSM. Kapasitas RO kami tetap stabil meskipun sudah bertahun-tahun beroperasi."', initial: 'EN', name: 'Chief Engineer', company: 'Hotel Bintang Lima Jakarta' },
              { quote: '"Instalasi Sewage Treatment Plant (STP) dari TSM bekerja sangat baik. Limbah yang dihasilkan sudah aman dan lolos uji KLHK."', initial: 'HS', name: 'HSE Manager', company: 'PT Manufaktur Global' },
              { quote: '"Sistem ultrafiltrasi yang disediakan TSM berhasil mengatasi masalah kekeruhan air sungai yang kami gunakan sebagai sumber baku."', initial: 'TM', name: 'Technical Manager', company: 'PLTU Jawa' },
              { quote: '"Sangat membantu! Respon tim emergency TSM sangat cepat saat kami mengalami kendala pompa RO jam 2 pagi. Produksi tidak terganggu lama."', initial: 'SP', name: 'Supervisor Produksi', company: 'Pabrik Tekstil Nasional' },
              { quote: '"Kualitas membran dan suku cadang yang digunakan TSM terbukti original dan tahan lama. Biaya operasional kami jadi lebih hemat."', initial: 'PA', name: 'Procurement', company: 'PT Kimia Farma' },
              { quote: '"Water treatment mobile dari TSM sangat praktis dan diandalkan untuk proyek konstruksi lepas pantai kami. Tangguh di segala cuaca."', initial: 'PM', name: 'Project Manager', company: 'Offshore Construction Inc.' }
            ].map((tc, idx) => (
              <div key={idx} ref={addToRefs} className="bg-white/5 border border-white/10 rounded-[8px] p-[1.5rem] transition-all duration-300 hover:bg-white/10 hover:-translate-y-[3px] opacity-0 translate-y-[22px] [&.visible]:opacity-100 [&.visible]:translate-y-0 min-w-[300px] max-w-[320px] snap-center shrink-0 flex flex-col">
                <div className="text-[#ffd700] mb-[0.65rem] tracking-[0.08em] text-[0.82rem]">★★★★★</div>
                <p className="text-[0.82rem] leading-[1.75] opacity-80 mb-[1rem] italic text-white flex-1">{tc.quote}</p>
                <div className="flex items-center gap-[0.65rem] mt-auto">
                  <div className="w-[34px] h-[34px] rounded-full bg-gradient-to-br from-sky to-accent flex items-center justify-center font-bold text-[0.76rem] text-white shrink-0">
                    {tc.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-[0.82rem] text-white">{tc.name}</div>
                    <div className="text-[0.68rem] opacity-60 text-white">{tc.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button onClick={() => scrollTestimo('left')} aria-label="Previous testimonial" className="w-[42px] h-[42px] rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:-translate-y-[2px] transition-all duration-300">
              <ChevronLeft size={22} />
            </button>
            <button onClick={() => scrollTestimo('right')} aria-label="Next testimonial" className="w-[42px] h-[42px] rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:-translate-y-[2px] transition-all duration-300">
              <ChevronRight size={22} />
            </button>
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

      {/* ══ BRANDS ══ */}
      <section className="py-10 bg-white border-t border-border">
        <div className="max-w-[1240px] mx-auto px-6">
          <p className="text-center text-[0.72rem] font-bold tracking-[0.14em] uppercase text-muted mb-[1.65rem]">Brand Komponen yang Kami Gunakan</p>
          <div className="flex flex-wrap justify-center items-center gap-[2.5rem] max-[768px]:gap-[1.5rem]">
            {['Dow Filmtec', 'Toray', 'Grundfos', 'Hydranautics', 'Koch Membrane', 'Pentair', 'Veolia'].map((brand, idx) => (
              <div key={idx} className="text-[1.1rem] font-condensed font-bold text-muted/60 tracking-wider hover:text-blue transition-colors duration-300">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <h2 className="font-condensed text-[clamp(1.5rem,2.4vw,2.1rem)] font-extrabold mb-[0.7rem]">Siap Memulai Proyek Water Treatment Anda?</h2>
          <p className="text-[0.88rem] opacity-90 mb-[1.5rem]">Konsultasikan kebutuhan air bersih Anda dengan tim ahli kami — gratis, tanpa komitmen.</p>
          <div className="flex gap-[1rem] justify-center flex-wrap">
            <Link to="/kontak" className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]">
              Hubungi Kami Sekarang
            </Link>
            <Link to="/produk" className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/10 hover:border-white">
              Lihat Semua Solusi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
