import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, ChevronDown, Menu, X, Droplet, Waves, Ship, Truck, CheckCircle2, Shield, Settings, Factory, Calculator, FileText, FlaskConical, Award, Building2, Activity, Pill, Leaf, Zap, Building, Clock, Gem, Handshake, Briefcase, Newspaper, BookOpen, Folder, FolderOpen, HelpCircle } from 'lucide-react';
import Button from '../ui/Button';

const CONTACT_INFO = {
  phone1: "021-88871689",
  phone1Link: "tel:02188871689",
  phone2: "+62 818-719-119",
  phone2Link: "tel:+62818719119",
  email: "obed@tsm.or.id",
  emailLink: "mailto:obed@tsm.or.id",
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div className={`font-montserrat sticky top-0 z-[1000] w-full bg-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
      isScrolled ? 'shadow-[0_4px_28px_rgba(10,34,64,0.14)]' : ''
    }`}>
      
      {/* TOPBAR */}
      <div className="bg-navy text-white/70 text-[0.79rem] tracking-wide py-2 relative z-10">
        <div className="max-w-[1240px] mx-auto px-6 flex justify-between items-center gap-4 flex-wrap">
          
          <div className="hidden lg:flex items-center gap-4">
            <span className="flex items-center justify-center gap-1">
              <Phone size={14} className="inline mr-1" /> 
              <a href={CONTACT_INFO.phone1Link} className="hover:text-accent transition-colors duration-300">{CONTACT_INFO.phone1}</a>
            </span>
            <span className="flex items-center justify-center gap-1">
              <Phone size={14} className="inline mr-1" /> 
              <a href={CONTACT_INFO.phone2Link} className="hover:text-accent transition-colors duration-300">{CONTACT_INFO.phone2}</a>
            </span>
            <span className="flex items-center justify-center gap-1">
              <Mail size={14} className="inline mr-1" /> 
              <a href={CONTACT_INFO.emailLink} className="hover:text-accent transition-colors duration-300">{CONTACT_INFO.email}</a>
            </span>
          </div>

          <div className="flex flex-row items-center justify-end w-full lg:w-auto gap-4 shrink">
            <span className="text-accent font-semibold">ID</span>
            <Link to="/kontak" className="bg-accent/20 px-3 py-1 rounded-[4px] text-accent border border-accent/30 hover:bg-accent/30 transition-colors whitespace-nowrap text-xs sm:text-[0.79rem]">
              Minta Penawaran
            </Link>
          </div>

        </div>
      </div>

      {/* NAVBAR MAIN */}
      <nav className={`relative z-10 bg-white border-b border-border transition-shadow duration-300 ${
        !isScrolled ? 'shadow-[0_1px_12px_rgba(10,34,64,0.06)]' : 'border-b-transparent'
      }`}>
        <div className="max-w-[1240px] mx-auto px-6 h-[72px] flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-blue to-accent rounded-lg flex items-center justify-center text-white font-black text-lg font-condensed shrink-0 shadow-[0_4px_12px_rgba(13,95,168,0.3)]">
              TSM
            </div>
            <div className="flex flex-col lg:hidden xl:flex">
              <div className="font-bold text-[1.1rem] text-navy leading-tight tracking-tight whitespace-nowrap">PT Tirta Sumber Makmur</div>
              <div className="text-[0.65rem] text-muted tracking-[0.12em] uppercase font-semibold mt-[2px] whitespace-nowrap">Water Treatment Technology</div>
            </div>
          </Link>

          {/* Nav Links */}
          <ul className="hidden lg:flex items-stretch h-full">
            
            {/* PRODUK MEGA MENU */}
            <li className="relative flex items-center group">
              <Link to="/produk" className={`flex items-center gap-1 px-[0.6rem] whitespace-nowrap h-full text-[0.8rem] font-bold tracking-[0.04em] uppercase transition-all ${isActive('/produk') ? 'text-blue border-b-2 border-accent' : 'text-text border-b-2 border-transparent group-hover:text-blue group-hover:border-accent'}`}>
                Produk &amp; Solusi <ChevronDown size={14} className="mt-[1px] group-hover:rotate-180 transition-transform duration-250" />
              </Link>
              <div className="hidden group-hover:flex absolute top-full left-1/2 -translate-x-[45%] bg-white border border-border border-t-[3px] border-t-blue shadow-[0_18px_56px_rgba(10,34,64,0.18)] rounded-b-[10px] w-max min-w-[980px] p-[2rem] gap-[2.5rem] z-[9999] animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex-1 min-w-0">
                  <h4 className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-accent mb-[1rem] pb-[0.6rem] border-b border-border">Reverse Osmosis System</h4>
                  <ul className="flex flex-col gap-3">
                    <li><Link to="/produk/ro-industri" className="text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:text-blue hover:pl-[0.25rem] transition-all"><Droplet size={16} /> Tap Water RO</Link></li>
                    <li><Link to="/produk/bwro" className="text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:text-blue hover:pl-[0.25rem] transition-all"><Droplet size={16} /> Brackish Water RO</Link></li>
                    <li><Link to="/produk/desalinasi" className="text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:text-blue hover:pl-[0.25rem] transition-all"><Waves size={16} /> Seawater RO</Link></li>
                    <li><Link to="/produk/fresh-water-generator" className="text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:text-blue hover:pl-[0.25rem] transition-all"><Ship size={16} /> Fresh Water Generator</Link></li>
                    <li><Link to="/produk/ro-mobile" className="text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:text-blue hover:pl-[0.25rem] transition-all"><Truck size={16} /> Water Maker</Link></li>
                  </ul>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-accent mb-[1rem] pb-[0.6rem] border-b border-border">Water Treatment System</h4>
                  <ul className="flex flex-col gap-3">
                    <li><Link to="/produk/sand-filter" className="text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:text-blue hover:pl-[0.25rem] transition-all"><Droplet size={16} /> Sand Filter</Link></li>
                    <li><Link to="/produk/carbon-filter" className="text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:text-blue hover:pl-[0.25rem] transition-all"><Droplet size={16} /> Activated Carbon Filter</Link></li>
                    <li><Link to="/produk/softener" className="text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:text-blue hover:pl-[0.25rem] transition-all"><Droplet size={16} /> Softener Filter</Link></li>
                    <li><Link to="/produk/limbah" className="text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:text-blue hover:pl-[0.25rem] transition-all"><Factory size={16} /> Wastewater Treatment</Link></li>
                    <li><Link to="/produk/demi" className="text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:text-blue hover:pl-[0.25rem] transition-all"><FlaskConical size={16} /> Demineralisasi System</Link></li>
                    <li><Link to="/produk/uf" className="text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:text-blue hover:pl-[0.25rem] transition-all"><Settings size={16} /> Ultrafiltration System</Link></li>
                    <li><Link to="/produk/water-filter" className="text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:text-blue hover:pl-[0.25rem] transition-all"><Droplet size={16} /> Water Filter</Link></li>
                    <li><Link to="/produk/bwms" className="text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:text-blue hover:pl-[0.25rem] transition-all"><Ship size={16} /> Ballast Water Management</Link></li>
                  </ul>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-accent mb-[1rem] pb-[0.6rem] border-b border-border">Water Equipment</h4>
                  <ul className="flex flex-col gap-3">
                    <li><Link to="/produk/membran" className="text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:text-blue hover:pl-[0.25rem] transition-all"><FlaskConical size={16} /> Membrane RO</Link></li>
                    <li><Link to="/produk/membran" className="text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:text-blue hover:pl-[0.25rem] transition-all"><Settings size={16} /> Housing Membrane RO</Link></li>
                    <li><Link to="/produk/uf" className="text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:text-blue hover:pl-[0.25rem] transition-all"><FlaskConical size={16} /> Ultrafiltration Membrane</Link></li>
                    <li><Link to="/produk/frp-tank" className="text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:text-blue hover:pl-[0.25rem] transition-all"><Droplet size={16} /> FRP Tank (Tabung Filter)</Link></li>
                    <li><Link to="/produk/zincalume-tank" className="text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:text-blue hover:pl-[0.25rem] transition-all"><FileText size={16} /> Stainless Steel Tank</Link></li>
                    <li><Link to="/produk/instrumen" className="text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:text-blue hover:pl-[0.25rem] transition-all"><Calculator size={16} /> Media Filter</Link></li>
                    <li><Link to="/produk/uv" className="text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:text-blue hover:pl-[0.25rem] transition-all"><CheckCircle2 size={16} /> UV Water Sterilizer</Link></li>
                    <li><Link to="/produk/pompa" className="text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:text-blue hover:pl-[0.25rem] transition-all"><Settings size={16} /> Multistage Pump</Link></li>
                  </ul>
                </div>
                <div className="flex-[0_0_240px] bg-gradient-to-br from-navy to-blue rounded-[8px] p-[1.5rem] text-white flex flex-col justify-end shadow-inner relative overflow-hidden group/feat">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-accent"></div>
                  <div className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-accent bg-white/10 w-fit px-2 py-1 rounded-[4px] mb-[1rem]">Unggulan 2025</div>
                  <h3 className="text-[1.05rem] font-condensed font-bold leading-[1.25] mb-[0.85rem]">Sistem RO Otomasi Penuh — Hemat Energi 40%</h3>
                  <Link to="/produk/ro-industri" className="text-[0.78rem] font-bold text-accent tracking-[0.05em] inline-flex items-center gap-[0.3rem] transition-all duration-300 group-hover/feat:gap-[0.52rem] uppercase">Pelajari Selengkapnya &rarr;</Link>
                </div>
              </div>
            </li>

            {/* LAYANAN MEGA MENU */}
            <li className="relative flex items-center group">
              <Link to="/layanan" className={`flex items-center gap-1 px-[0.6rem] whitespace-nowrap h-full text-[0.8rem] font-bold tracking-[0.04em] uppercase transition-all ${isActive('/layanan') ? 'text-blue border-b-2 border-accent' : 'text-text border-b-2 border-transparent group-hover:text-blue group-hover:border-accent'}`}>
                Layanan <ChevronDown size={14} className="mt-[1px] group-hover:rotate-180 transition-transform duration-250" />
              </Link>
              <div className="hidden group-hover:flex absolute top-full left-1/2 -translate-x-[40%] bg-white border border-border border-t-[3px] border-t-blue shadow-[0_18px_56px_rgba(10,34,64,0.18)] rounded-b-[10px] w-max min-w-[780px] p-[2rem] gap-[2.5rem] z-[9999] animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex-1 min-w-0">
                  <h4 className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-accent mb-[1rem] pb-[0.6rem] border-b border-border">Engineering</h4>
                  <ul className="flex flex-col gap-3">
                    <li><Link to="/layanan/desain" className="text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:text-blue hover:pl-[0.25rem] transition-all"><Calculator size={16} /> Desain &amp; Perancangan Sistem</Link></li>
                    <li><Link to="/layanan/instalasi" className="text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:text-blue hover:pl-[0.25rem] transition-all"><Settings size={16} /> Instalasi &amp; Komisioning</Link></li>
                    <li><Link to="/layanan/maintenance" className="text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:text-blue hover:pl-[0.25rem] transition-all"><Shield size={16} /> Pemeliharaan Preventif</Link></li>
                    <li><Link to="/layanan/darurat" className="text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:text-blue hover:pl-[0.25rem] transition-all"><CheckCircle2 size={16} /> Servis Darurat 24/7</Link></li>
                  </ul>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-accent mb-[1rem] pb-[0.6rem] border-b border-border">Konsultasi & Proyek</h4>
                  <ul className="flex flex-col gap-3">
                    <li><Link to="/layanan/audit" className="text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:text-blue hover:pl-[0.25rem] transition-all"><FileText size={16} /> Audit Kualitas Air</Link></li>
                    <li><Link to="/kalkulator" className="text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:text-blue hover:pl-[0.25rem] transition-all"><Calculator size={16} /> Kalkulator Kebutuhan Air</Link></li>
                    <li><Link to="/layanan/feasibility" className="text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:text-blue hover:pl-[0.25rem] transition-all"><Calculator size={16} /> Studi Kelayakan</Link></li>
                    <li><Link to="/layanan/epc" className="text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:text-blue hover:pl-[0.25rem] transition-all"><Factory size={16} /> Turnkey EPC Project</Link></li>
                    <li><Link to="/layanan/sertifikasi" className="text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:text-blue hover:pl-[0.25rem] transition-all"><Award size={16} /> Sertifikasi &amp; Compliance</Link></li>
                  </ul>
                </div>
                <div className="flex-[0_0_240px] bg-gradient-to-br from-navy to-blue rounded-[8px] p-[1.5rem] text-white flex flex-col justify-end shadow-inner relative overflow-hidden group/feat">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-accent"></div>
                  <div className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-accent bg-white/10 w-fit px-2 py-1 rounded-[4px] mb-[1rem]">Program Baru</div>
                  <h3 className="text-[1.05rem] font-condensed font-bold leading-[1.25] mb-[0.85rem]">Kontrak Perawatan Tahunan — Prioritas Respons</h3>
                  <Link to="/layanan/maintenance" className="text-[0.78rem] font-bold text-accent tracking-[0.05em] inline-flex items-center gap-[0.3rem] transition-all duration-300 group-hover/feat:gap-[0.52rem] uppercase">Daftar Sekarang &rarr;</Link>
                </div>
              </div>
            </li>

            {/* INDUSTRI DROPDOWN */}
            <li className="relative flex items-center group">
              <Link to="/industri" className={`flex items-center gap-1 px-[0.6rem] whitespace-nowrap h-full text-[0.8rem] font-bold tracking-[0.04em] uppercase transition-all ${isActive('/industri') ? 'text-blue border-b-2 border-accent' : 'text-text border-b-2 border-transparent group-hover:text-blue group-hover:border-accent'}`}>
                Industri <ChevronDown size={14} className="mt-[1px] group-hover:rotate-180 transition-transform duration-250" />
              </Link>
              <div className="hidden group-hover:flex flex-col absolute top-full left-0 bg-white border border-border border-t-[3px] border-t-blue shadow-[0_18px_56px_rgba(10,34,64,0.18)] min-w-[280px] rounded-b-[10px] z-[9999] animate-in fade-in slide-in-from-top-2 duration-200 py-[0.8rem]">
                <Link to="/industri/manufaktur" className="px-[1.5rem] py-[0.6rem] text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:bg-ice hover:text-blue hover:pl-[1.8rem] transition-all"><Factory size={16} /> Industri Manufaktur</Link>
                <Link to="/industri/hotel" className="px-[1.5rem] py-[0.6rem] text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:bg-ice hover:text-blue hover:pl-[1.8rem] transition-all"><Building2 size={16} /> Hotel &amp; Resort</Link>
                <Link to="/industri/rs" className="px-[1.5rem] py-[0.6rem] text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:bg-ice hover:text-blue hover:pl-[1.8rem] transition-all"><Activity size={16} /> Rumah Sakit &amp; Hemodialisis</Link>
                <Link to="/industri/farmasi" className="px-[1.5rem] py-[0.6rem] text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:bg-ice hover:text-blue hover:pl-[1.8rem] transition-all"><Pill size={16} /> Farmasi (CPOB BPOM)</Link>
                <Link to="/industri/agrikultur" className="px-[1.5rem] py-[0.6rem] text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:bg-ice hover:text-blue hover:pl-[1.8rem] transition-all"><Leaf size={16} /> Agrikultur &amp; Perkebunan</Link>
                <Link to="/industri/pltu" className="px-[1.5rem] py-[0.6rem] text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:bg-ice hover:text-blue hover:pl-[1.8rem] transition-all"><Zap size={16} /> PLTU &amp; Pembangkit Listrik</Link>
                <Link to="/industri/properti" className="px-[1.5rem] py-[0.6rem] text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:bg-ice hover:text-blue hover:pl-[1.8rem] transition-all"><Factory size={16} /> Properti &amp; Apartemen</Link>
                <Link to="/industri/maritim" className="px-[1.5rem] py-[0.6rem] text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:bg-ice hover:text-blue hover:pl-[1.8rem] transition-all"><Ship size={16} /> Maritim &amp; Offshore</Link>
              </div>
            </li>

            {/* PERUSAHAAN DROPDOWN */}
            <li className="relative flex items-center group">
              <Link to="/tentang" className={`flex items-center gap-1 px-[0.6rem] whitespace-nowrap h-full text-[0.8rem] font-bold tracking-[0.04em] uppercase transition-all ${isActive('/tentang') ? 'text-blue border-b-2 border-accent' : 'text-text border-b-2 border-transparent group-hover:text-blue group-hover:border-accent'}`}>
                Perusahaan <ChevronDown size={14} className="mt-[1px] group-hover:rotate-180 transition-transform duration-250" />
              </Link>
              <div className="hidden group-hover:flex flex-col absolute top-full left-0 bg-white border border-border border-t-[3px] border-t-blue shadow-[0_18px_56px_rgba(10,34,64,0.18)] min-w-[260px] rounded-b-[10px] z-[9999] animate-in fade-in slide-in-from-top-2 duration-200 py-[0.8rem]">
                <Link to="/tentang" className="px-[1.5rem] py-[0.6rem] text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:bg-ice hover:text-blue hover:pl-[1.8rem] transition-all"><Building size={16} /> Tentang Kami</Link>
                <Link to="/tentang#sejarah" className="px-[1.5rem] py-[0.6rem] text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:bg-ice hover:text-blue hover:pl-[1.8rem] transition-all"><Clock size={16} /> Sejarah Perusahaan</Link>
                <Link to="/tentang#nilai" className="px-[1.5rem] py-[0.6rem] text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:bg-ice hover:text-blue hover:pl-[1.8rem] transition-all"><Gem size={16} /> Visi, Misi &amp; Nilai</Link>
                <Link to="/tentang#sertifikasi" className="px-[1.5rem] py-[0.6rem] text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:bg-ice hover:text-blue hover:pl-[1.8rem] transition-all"><Award size={16} /> Sertifikasi &amp; Penghargaan</Link>
                <Link to="/tentang#csr" className="px-[1.5rem] py-[0.6rem] text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:bg-ice hover:text-blue hover:pl-[1.8rem] transition-all"><Leaf size={16} /> CSR &amp; Lingkungan</Link>
                <Link to="/tentang#klien" className="px-[1.5rem] py-[0.6rem] text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:bg-ice hover:text-blue hover:pl-[1.8rem] transition-all"><Handshake size={16} /> Klien &amp; Mitra</Link>
                <div className="h-[1px] bg-border my-[0.4rem] mx-[1.5rem]"></div>
                <Link to="/karir" className="px-[1.5rem] py-[0.6rem] text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:bg-ice hover:text-blue hover:pl-[1.8rem] transition-all"><Briefcase size={16} /> Karir</Link>
                <Link to="/kontak" className="px-[1.5rem] py-[0.6rem] text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:bg-ice hover:text-blue hover:pl-[1.8rem] transition-all"><Phone size={16} /> Kontak Kami</Link>
              </div>
            </li>

            {/* ARTIKEL DROPDOWN */}
            <li className="relative flex items-center group">
              <Link to="/artikel" className={`flex items-center gap-1 px-[0.6rem] whitespace-nowrap h-full text-[0.8rem] font-bold tracking-[0.04em] uppercase transition-all ${isActive('/artikel') ? 'text-blue border-b-2 border-accent' : 'text-text border-b-2 border-transparent group-hover:text-blue group-hover:border-accent'}`}>
                Artikel <ChevronDown size={14} className="mt-[1px] group-hover:rotate-180 transition-transform duration-250" />
              </Link>
              <div className="hidden group-hover:flex flex-col absolute top-full left-0 bg-white border border-border border-t-[3px] border-t-blue shadow-[0_18px_56px_rgba(10,34,64,0.18)] min-w-[260px] rounded-b-[10px] z-[9999] animate-in fade-in slide-in-from-top-2 duration-200 py-[0.8rem]">
                <Link to="/artikel" className="px-[1.5rem] py-[0.6rem] text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:bg-ice hover:text-blue hover:pl-[1.8rem] transition-all"><Newspaper size={16} /> Semua Artikel</Link>
                <Link to="/artikel#teknologi" className="px-[1.5rem] py-[0.6rem] text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:bg-ice hover:text-blue hover:pl-[1.8rem] transition-all"><BookOpen size={16} /> Artikel Teknologi</Link>
                <Link to="/artikel#desalinasi" className="px-[1.5rem] py-[0.6rem] text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:bg-ice hover:text-blue hover:pl-[1.8rem] transition-all"><Waves size={16} /> Artikel Desalinasi</Link>
                <Link to="/artikel#perawatan" className="px-[1.5rem] py-[0.6rem] text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:bg-ice hover:text-blue hover:pl-[1.8rem] transition-all"><Settings size={16} /> Tips &amp; Perawatan</Link>
                <Link to="/artikel#industri" className="px-[1.5rem] py-[0.6rem] text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:bg-ice hover:text-blue hover:pl-[1.8rem] transition-all"><Factory size={16} /> Aplikasi Industri</Link>
                <Link to="/artikel#studi-kasus" className="px-[1.5rem] py-[0.6rem] text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:bg-ice hover:text-blue hover:pl-[1.8rem] transition-all"><Folder size={16} /> Studi Kasus Teknis</Link>
                <div className="h-[1px] bg-border my-[0.4rem] mx-[1.5rem]"></div>
                <Link to="/portofolio" className="px-[1.5rem] py-[0.6rem] text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:bg-ice hover:text-blue hover:pl-[1.8rem] transition-all"><FolderOpen size={16} /> Portofolio Proyek</Link>
                <Link to="/faq" className="px-[1.5rem] py-[0.6rem] text-[0.85rem] font-medium text-text flex items-center gap-[0.6rem] hover:bg-ice hover:text-blue hover:pl-[1.8rem] transition-all"><HelpCircle size={16} /> FAQ</Link>
              </div>
            </li>
            
            {/* PORTFOLIO & KONTAK */}
            <li className="relative flex items-center group">
              <Link to="/portofolio" className={`flex items-center gap-1 px-[0.6rem] whitespace-nowrap h-full text-[0.8rem] font-bold tracking-[0.04em] uppercase transition-all ${isActive('/portofolio') ? 'text-blue border-b-2 border-accent' : 'text-text border-b-2 border-transparent group-hover:text-blue group-hover:border-accent'}`}>
                Portofolio
              </Link>
            </li>
            <li className="relative flex items-center group">
              <Link to="/kontak" className={`flex items-center gap-1 px-[0.6rem] whitespace-nowrap h-full text-[0.8rem] font-bold tracking-[0.04em] uppercase transition-all ${isActive('/kontak') ? 'text-blue border-b-2 border-accent' : 'text-text border-b-2 border-transparent group-hover:text-blue group-hover:border-accent'}`}>
                Kontak
              </Link>
            </li>
          </ul>

          {/* CTA & Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden lg:block">
              <Button to="/kontak" variant="solid-blue" className="px-[1.2rem] py-[0.65rem] text-[0.78rem]" icon={<Phone size={16} />}>
                Konsultasi Gratis
              </Button>
            </div>
            <button 
              className="lg:hidden flex flex-col items-center justify-center p-2 cursor-pointer shrink-0 text-navy hover:text-blue transition-colors" 
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu size={28} />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-navy z-[9999] flex flex-col p-6 overflow-y-auto animate-in fade-in duration-200">
          <button 
            className="self-end text-white/80 p-1 mb-4 hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <X size={32} />
          </button>
          <div className="flex flex-col gap-2">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block py-4 border-b border-white/10 text-white/90 text-lg font-bold hover:text-accent hover:pl-2 transition-all">Beranda</Link>
            <Link to="/produk" onClick={() => setIsMobileMenuOpen(false)} className="block py-4 border-b border-white/10 text-white/90 text-lg font-bold hover:text-accent hover:pl-2 transition-all">Produk &amp; Solusi</Link>
            <Link to="/layanan" onClick={() => setIsMobileMenuOpen(false)} className="block py-4 border-b border-white/10 text-white/90 text-lg font-bold hover:text-accent hover:pl-2 transition-all">Layanan</Link>
            <Link to="/industri" onClick={() => setIsMobileMenuOpen(false)} className="block py-4 border-b border-white/10 text-white/90 text-lg font-bold hover:text-accent hover:pl-2 transition-all">Industri</Link>
            <Link to="/tentang" onClick={() => setIsMobileMenuOpen(false)} className="block py-4 border-b border-white/10 text-white/90 text-lg font-bold hover:text-accent hover:pl-2 transition-all">Perusahaan</Link>
            <Link to="/artikel" onClick={() => setIsMobileMenuOpen(false)} className="block py-4 border-b border-white/10 text-white/90 text-lg font-bold hover:text-accent hover:pl-2 transition-all">Artikel</Link>
            <Link to="/portofolio" onClick={() => setIsMobileMenuOpen(false)} className="block py-4 border-b border-white/10 text-white/90 text-lg font-bold hover:text-accent hover:pl-2 transition-all">Portofolio</Link>
            <Link to="/kontak" onClick={() => setIsMobileMenuOpen(false)} className="block py-4 border-b border-white/10 text-white/90 text-lg font-bold hover:text-accent hover:pl-2 transition-all">Kontak</Link>
          </div>
          
          <div className="mt-8">
            <Button to="/kontak" variant="solid-blue" className="w-full justify-center" onClick={() => setIsMobileMenuOpen(false)} icon={<Phone size={18} />}>
              Konsultasi Gratis
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-white/60 text-sm mb-4">Hubungi Kami:</p>
            <a href={CONTACT_INFO.phone1Link} className="text-accent text-xl font-bold block mb-2">{CONTACT_INFO.phone1}</a>
            <a href={CONTACT_INFO.emailLink} className="text-white/80 block">{CONTACT_INFO.email}</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
