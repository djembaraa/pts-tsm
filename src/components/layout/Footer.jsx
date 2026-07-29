import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, MapPin, Phone, Mail, HelpCircle, FileText } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../../constants/data';

const Footer = () => {
  return (
    <footer className="bg-navy text-white/80 pt-16 mt-auto">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.55fr_1fr_1fr_1fr] gap-10 pb-12">
          
          <div className="flex flex-col">
            <div className="w-11 h-11 bg-gradient-to-br from-blue to-accent rounded-lg flex items-center justify-center text-white font-black text-base font-condensed mb-4 shrink-0">
              TSM
            </div>
            <div className="text-base font-bold text-white leading-tight">PT Tirta Sumber Makmur</div>
            <div className="text-[0.64rem] tracking-widest uppercase text-white/40 mb-3.5">Water Treatment Technology</div>
            <p className="text-[0.82rem] leading-relaxed text-white/55 mb-4.5 max-w-sm">
              Penyedia solusi reverse osmosis dan desalinasi air terpercaya di Indonesia sejak 2002. Berkomitmen menghadirkan air bersih berkualitas untuk kehidupan lebih baik.
            </p>
            <div className="flex gap-2">
              <a href={SOCIAL_LINKS.linkedin} className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center text-[0.8rem] font-bold transition-colors hover:bg-accent hover:text-white" target="_blank" rel="noopener noreferrer">in</a>
              <a href={SOCIAL_LINKS.facebook} className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center text-[0.8rem] font-bold transition-colors hover:bg-accent hover:text-white" target="_blank" rel="noopener noreferrer">fb</a>
              <a href={SOCIAL_LINKS.instagram} className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center text-[0.8rem] font-bold transition-colors hover:bg-accent hover:text-white" target="_blank" rel="noopener noreferrer">ig</a>
              <a href={SOCIAL_LINKS.whatsapp} className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center text-[0.8rem] transition-colors hover:bg-accent hover:text-white" target="_blank" rel="noopener noreferrer"><MessageCircle size={16} /></a>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-white/40 mb-4">Produk &amp; Solusi</h4>
            <ul className="flex flex-col gap-2">
              <li><Link to="/produk/ro-industri" className="text-[0.83rem] text-white/60 transition-all hover:text-accent hover:pl-1">RO Industri</Link></li>
              <li><Link to="/produk/suling-air-laut" className="text-[0.83rem] text-white/60 transition-all hover:text-accent hover:pl-1">Mesin Suling Air Laut</Link></li>
              <li><Link to="/produk/air-asin" className="text-[0.83rem] text-white/60 transition-all hover:text-accent hover:pl-1">Mesin Air Asin</Link></li>
              <li><Link to="/produk/desalinasi" className="text-[0.83rem] text-white/60 transition-all hover:text-accent hover:pl-1">Desalinasi Air Laut</Link></li>
              <li><Link to="/produk/bwms" className="text-[0.83rem] text-white/60 transition-all hover:text-accent hover:pl-1">Ballast Water Management</Link></li>
              <li><Link to="/produk/ro-komersial" className="text-[0.83rem] text-white/60 transition-all hover:text-accent hover:pl-1">RO Komersial</Link></li>
              <li><Link to="/produk/demi" className="text-[0.83rem] text-white/60 transition-all hover:text-accent hover:pl-1">Demineralisasi / EDI</Link></li>
              <li><Link to="/produk/uf" className="text-[0.83rem] text-white/60 transition-all hover:text-accent hover:pl-1">Ultrafiltrasi (UF)</Link></li>
              <li><Link to="/produk/kimia" className="text-[0.83rem] text-white/60 transition-all hover:text-accent hover:pl-1">Kimia Water Treatment</Link></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-white/40 mb-4">Layanan</h4>
            <ul className="flex flex-col gap-2">
              <li><Link to="/layanan/desain" className="text-[0.83rem] text-white/60 transition-all hover:text-accent hover:pl-1">Desain Sistem</Link></li>
              <li><Link to="/layanan/instalasi" className="text-[0.83rem] text-white/60 transition-all hover:text-accent hover:pl-1">Instalasi & Komisioning</Link></li>
              <li><Link to="/layanan/maintenance" className="text-[0.83rem] text-white/60 transition-all hover:text-accent hover:pl-1">Perawatan Berkala</Link></li>
              <li><Link to="/layanan/darurat" className="text-[0.83rem] text-white/60 transition-all hover:text-accent hover:pl-1">Servis Darurat 24/7</Link></li>
              <li><Link to="/layanan/audit" className="text-[0.83rem] text-white/60 transition-all hover:text-accent hover:pl-1">Audit Kualitas Air</Link></li>
              <li><Link to="/layanan/epc" className="text-[0.83rem] text-white/60 transition-all hover:text-accent hover:pl-1">Proyek EPC Turnkey</Link></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-white/40 mb-4">Kontak</h4>
            <ul className="flex flex-col gap-2">
              <li><a href={CONTACT_INFO.phone1Link} className="text-[0.83rem] text-white/60 flex items-center gap-2 transition-all hover:text-accent hover:pl-1"><Phone size={14} /> {CONTACT_INFO.phone1}</a></li>
              <li><a href={CONTACT_INFO.phone2Link} className="text-[0.83rem] text-white/60 flex items-center gap-2 transition-all hover:text-accent hover:pl-1"><Phone size={14} /> {CONTACT_INFO.phone2}</a></li>
              <li><a href={CONTACT_INFO.emailLink} className="text-[0.83rem] text-white/60 flex items-center gap-2 transition-all hover:text-accent hover:pl-1"><Mail size={14} /> {CONTACT_INFO.email}</a></li>
              <li><a href={CONTACT_INFO.mapUrl} target="_blank" rel="noopener noreferrer" className="text-[0.83rem] text-white/60 flex items-center gap-2 transition-all hover:text-accent hover:pl-1"><MapPin size={14} /> Lihat Lokasi</a></li>
              <li><Link to="/kontak" className="text-[0.83rem] text-white/60 flex items-center gap-2 transition-all hover:text-accent hover:pl-1"><FileText size={14} /> Minta Penawaran</Link></li>
              <li><Link to="/faq" className="text-[0.83rem] text-white/60 flex items-center gap-2 transition-all hover:text-accent hover:pl-1"><HelpCircle size={14} /> FAQ</Link></li>
            </ul>
          </div>

        </div>
      </div>
      
      <div className="border-t border-white/10 py-4">
        <div className="max-w-[1240px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2 text-[0.74rem] text-white/35">
          <span>© 2026 PT Tirta Sumber Makmur. Seluruh hak dilindungi.</span>
          <span>
            <Link to="/kebijakan-privasi" className="hover:text-accent transition-colors">Kebijakan Privasi</Link> &nbsp;·&nbsp; 
            <Link to="/syarat-ketentuan" className="hover:text-accent transition-colors">Syarat &amp; Ketentuan</Link> &nbsp;·&nbsp; 
            <Link to="/sitemap" className="hover:text-accent transition-colors">Peta Situs</Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
