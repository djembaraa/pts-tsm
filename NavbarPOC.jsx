import React, { useState, useEffect } from 'react';
import { Phone, Mail, ChevronDown, Menu, X } from 'lucide-react';

const NavbarPOC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`font-montserrat sticky top-0 z-[1000] w-full bg-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
      isScrolled ? 'shadow-[0_4px_28px_rgba(10,34,64,0.14)]' : ''
    }`}>
      
      {/* TOPBAR */}
      <div className="bg-[#0a2240] text-white/70 text-[0.79rem] tracking-wide py-2 relative z-10">
        <div className="max-w-[1240px] mx-auto px-6 flex justify-between items-center gap-4 flex-wrap">
          
          {/* Topbar Left (Hidden di mobile) */}
          <div className="hidden lg:flex items-center gap-4">
            <span className="flex items-center justify-center gap-1">
              <Phone size={14} /> 
              <a href="tel:02188871689" className="hover:text-[#00b4d8] transition-colors duration-300">021-88871689</a>
            </span>
            <span className="flex items-center justify-center gap-1">
              <Phone size={14} /> 
              <a href="tel:+62818719119" className="hover:text-[#00b4d8] transition-colors duration-300">+62 818-719-119</a>
            </span>
            <span className="flex items-center justify-center gap-1">
              <Mail size={14} /> 
              <a href="mailto:obed@tsm.or.id" className="hover:text-[#00b4d8] transition-colors duration-300">obed@tsm.or.id</a>
            </span>
          </div>

          {/* Topbar Right (Proporsional di mobile, flex-row) */}
          <div className="flex flex-row items-center justify-end w-full lg:w-auto gap-4 shrink">
            <span className="text-[#00b4d8] font-semibold">ID</span>
            <a href="/kontak" className="bg-[#00b4d8]/20 px-3 py-1 rounded-[4px] text-[#00b4d8] border border-[#00b4d8]/30 hover:bg-[#00b4d8]/30 transition-colors whitespace-nowrap text-xs sm:text-[0.79rem]">
              Minta Penawaran
            </a>
          </div>

        </div>
      </div>

      {/* NAVBAR MAIN */}
      <nav className={`relative z-10 bg-white border-b border-[#cde3f3] transition-shadow duration-300 ${
        !isScrolled ? 'shadow-[0_1px_12px_rgba(10,34,64,0.06)]' : 'border-b-transparent'
      }`}>
        <div className="max-w-[1240px] mx-auto px-6 h-[62px] flex items-center justify-between gap-4">
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-11 h-11 bg-gradient-to-br from-[#0d5fa8] to-[#00b4d8] rounded-lg flex items-center justify-center text-white font-black text-base font-condensed shrink-0">
              TSM
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-[0.98rem] text-[#0a2240] leading-tight">PT Tirta Sumber Makmur</div>
              <div className="text-[0.62rem] text-[#5c7a96] tracking-wider uppercase">Water Treatment Technology</div>
            </div>
          </a>

          {/* Nav Links (Desktop) */}
          <ul className="hidden lg:flex items-stretch h-full">
            
            {/* Mega Menu Produk */}
            <li className="relative flex items-center group">
              <a href="/produk" className="flex items-center gap-1 px-3 h-full text-xs font-semibold tracking-wide uppercase text-[#1a2d42] border-b-2 border-transparent group-hover:text-[#0d5fa8] group-hover:border-[#00b4d8] transition-all">
                Produk &amp; Solusi <ChevronDown size={14} className="mt-[1px] group-hover:rotate-180 transition-transform duration-250" />
              </a>
              {/* Mega Menu Dropdown */}
              <div className="hidden group-hover:flex absolute top-full left-1/2 -translate-x-[30%] bg-white border border-[#cde3f3] border-t-[3px] border-t-[#0d5fa8] shadow-[0_18px_56px_rgba(10,34,64,0.18)] rounded-b-lg min-w-[860px] p-7 gap-7 z-[9999] animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex-1 min-w-0">
                  <h4 className="text-[0.68rem] font-bold tracking-widest uppercase text-[#00b4d8] mb-3 pb-2 border-b border-[#cde3f3]">Reverse Osmosis System</h4>
                  <ul>
                    <li className="mb-2"><a href="#" className="text-[0.85rem] text-[#1a2d42] flex items-center gap-2 py-1 hover:text-[#0d5fa8] hover:pl-1 transition-all">💧 Tap Water RO</a></li>
                    <li className="mb-2"><a href="#" className="text-[0.85rem] text-[#1a2d42] flex items-center gap-2 py-1 hover:text-[#0d5fa8] hover:pl-1 transition-all">🌊 Seawater RO</a></li>
                  </ul>
                </div>
                {/* Feature Box */}
                <div className="flex-[0_0_210px] bg-gradient-to-br from-[#0a2240] to-[#0d5fa8] rounded-lg p-5 text-white flex flex-col justify-end">
                  <div className="text-[0.6rem] font-bold tracking-widest uppercase text-[#00b4d8] mb-2">Unggulan 2025</div>
                  <h3 className="text-[0.92rem] font-bold leading-snug mb-3">Sistem RO Otomasi Penuh — Hemat Energi 40%</h3>
                  <a href="#" className="text-[0.78rem] font-semibold text-[#00b4d8] inline-flex items-center gap-1 hover:gap-2 transition-all">Pelajari Selengkapnya &rarr;</a>
                </div>
              </div>
            </li>

            <li className="relative flex items-center group">
              <a href="/portofolio" className="flex items-center gap-1 px-3 h-full text-xs font-semibold tracking-wide uppercase text-[#1a2d42] border-b-2 border-transparent group-hover:text-[#0d5fa8] group-hover:border-[#00b4d8] transition-all">
                Portofolio
              </a>
            </li>
          </ul>

          {/* CTA & Hamburger */}
          <div className="flex items-center gap-2 shrink-0">
            <a href="/kontak" className="hidden lg:inline-flex items-center justify-center gap-1 px-4 py-2 bg-[#0d5fa8] text-white text-xs font-bold tracking-wide uppercase rounded-[6px] hover:bg-[#0a2240] hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(13,95,168,0.3)] transition-all whitespace-nowrap">
              <Phone size={14} /> Konsultasi Gratis
            </a>
            <button 
              className="lg:hidden flex flex-col gap-[5px] p-2 cursor-pointer shrink-0" 
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} className="text-[#0a2240]" />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0a2240] z-[9999] flex flex-col p-6 overflow-y-auto animate-in fade-in duration-200">
          <button 
            className="self-end text-white p-1 mb-6 hover:text-[#00b4d8] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={28} />
          </button>
          <div className="flex flex-col">
            <a href="/" className="block py-4 border-b border-white/10 text-white/85 text-base font-semibold hover:text-[#00b4d8] hover:pl-2 transition-all">Beranda</a>
            <a href="/produk" className="block py-4 border-b border-white/10 text-white/85 text-base font-semibold hover:text-[#00b4d8] hover:pl-2 transition-all">Produk &amp; Solusi</a>
            <a href="/kontak" className="block py-4 border-b border-white/10 text-white/85 text-base font-semibold hover:text-[#00b4d8] hover:pl-2 transition-all">Kontak</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarPOC;
