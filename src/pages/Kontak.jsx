import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants/data';

const Kontak = () => {
  const [formData, setFormData] = useState({
    nama: '',
    perusahaan: '',
    email: '',
    telepon: '',
    topik: '',
    kapasitas: '',
    pesan: ''
  });
  
  const [status, setStatus] = useState({ type: '', message: '', loading: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '', loading: true });

    try {
      const data = new FormData();
      for (const key in formData) {
        data.append(key, formData[key]);
      }

      const response = await fetch('/kirim-pesan.php', {
        method: 'POST',
        body: data
      });

      const result = await response.json();

      if (response.ok && result.sukses) {
        setStatus({ type: 'success', message: result.pesan });
        setFormData({ nama: '', perusahaan: '', email: '', telepon: '', topik: '', kapasitas: '', pesan: '' });
      } else {
        setStatus({ type: 'error', message: result.pesan || 'Gagal mengirim pesan.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Terjadi kesalahan jaringan. Silakan coba lagi atau hubungi via WhatsApp.' });
    }
  };

  return (
    <div className="py-12 bg-gray min-h-screen">
      <div className="max-w-[1240px] mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-ice text-accent border border-border px-3 py-1 rounded-full text-[0.65rem] font-bold tracking-[0.16em] uppercase mb-3">Hubungi Kami</span>
          <h1 className="font-condensed text-3xl md:text-4xl font-extrabold text-navy mb-4">Konsultasikan Kebutuhan Proyek Anda</h1>
          <p className="text-muted text-[0.9rem] leading-relaxed">Tim engineering kami siap membantu Anda merancang sistem pengolahan air yang efisien dan sesuai dengan standar industri.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">
          
          {/* Info Kontak */}
          <div className="flex flex-col gap-4">
            <div className="bg-white border border-border rounded-xl p-6 flex items-center gap-4 hover:-translate-y-1 transition-all hover:border-blue">
              <div className="w-12 h-12 bg-ice rounded-lg flex items-center justify-center text-blue shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-bold text-navy text-[0.9rem]">Telepon</h4>
                <a href={CONTACT_INFO.phone1Link} className="text-muted text-[0.85rem] block hover:text-blue">{CONTACT_INFO.phone1}</a>
                <a href={CONTACT_INFO.phone2Link} className="text-muted text-[0.85rem] block hover:text-blue">{CONTACT_INFO.phone2}</a>
              </div>
            </div>

            <div className="bg-white border border-border rounded-xl p-6 flex items-center gap-4 hover:-translate-y-1 transition-all hover:border-blue">
              <div className="w-12 h-12 bg-ice rounded-lg flex items-center justify-center text-blue shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-bold text-navy text-[0.9rem]">Email</h4>
                <a href={CONTACT_INFO.emailLink} className="text-muted text-[0.85rem] block hover:text-blue">{CONTACT_INFO.email}</a>
              </div>
            </div>

            <div className="bg-white border border-border rounded-xl p-6 flex items-center gap-4 hover:-translate-y-1 transition-all hover:border-blue">
              <div className="w-12 h-12 bg-ice rounded-lg flex items-center justify-center text-blue shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-bold text-navy text-[0.9rem]">Lokasi Kantor</h4>
                <a href={CONTACT_INFO.mapUrl} target="_blank" rel="noopener noreferrer" className="text-muted text-[0.85rem] block hover:text-blue">
                  Lihat di Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Form Kontak */}
          <div className="bg-white border border-border rounded-xl p-6 md:p-10 shadow-[0_4px_28px_rgba(10,34,64,0.06)]">
            <h3 className="font-condensed text-2xl font-bold text-navy mb-6">Kirim Pesan / Minta Penawaran</h3>
            
            {status.message && (
              <div className={`p-4 rounded-lg mb-6 flex items-start gap-3 ${status.type === 'success' ? 'bg-[#f0fdf4] text-[#166534] border border-[#bbf7d0]' : 'bg-[#fef2f2] text-[#991b1b] border border-[#fecaca]'}`}>
                {status.type === 'success' ? <CheckCircle size={20} className="shrink-0 mt-0.5" /> : <AlertCircle size={20} className="shrink-0 mt-0.5" />}
                <p className="text-[0.85rem] leading-snug font-medium">{status.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.74rem] font-bold uppercase tracking-wider text-muted">Nama Lengkap *</label>
                  <input required type="text" name="nama" value={formData.nama} onChange={handleChange} className="w-full px-4 py-2.5 bg-white border border-border rounded-md text-[0.88rem] text-text outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-all" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.74rem] font-bold uppercase tracking-wider text-muted">Perusahaan</label>
                  <input type="text" name="perusahaan" value={formData.perusahaan} onChange={handleChange} className="w-full px-4 py-2.5 bg-white border border-border rounded-md text-[0.88rem] text-text outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.74rem] font-bold uppercase tracking-wider text-muted">Email *</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2.5 bg-white border border-border rounded-md text-[0.88rem] text-text outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-all" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.74rem] font-bold uppercase tracking-wider text-muted">Telepon / WA</label>
                  <input type="text" name="telepon" value={formData.telepon} onChange={handleChange} className="w-full px-4 py-2.5 bg-white border border-border rounded-md text-[0.88rem] text-text outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.74rem] font-bold uppercase tracking-wider text-muted">Topik Pertanyaan</label>
                  <select name="topik" value={formData.topik} onChange={handleChange} className="w-full px-4 py-2.5 bg-white border border-border rounded-md text-[0.88rem] text-text outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-all">
                    <option value="">Pilih Topik...</option>
                    <option value="Minta Penawaran">Minta Penawaran (Quotation)</option>
                    <option value="Konsultasi Teknis">Konsultasi Teknis</option>
                    <option value="Permintaan Brosur">Permintaan Brosur / Katalog</option>
                    <option value="Servis & Maintenance">Servis & Maintenance</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.74rem] font-bold uppercase tracking-wider text-muted">Kapasitas Air (Opsional)</label>
                  <input type="text" name="kapasitas" value={formData.kapasitas} onChange={handleChange} placeholder="Contoh: 10.000 Liter / Hari" className="w-full px-4 py-2.5 bg-white border border-border rounded-md text-[0.88rem] text-text outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-all" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.74rem] font-bold uppercase tracking-wider text-muted">Pesan Detail *</label>
                <textarea required name="pesan" value={formData.pesan} onChange={handleChange} rows="4" className="w-full px-4 py-2.5 bg-white border border-border rounded-md text-[0.88rem] text-text outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-all resize-y"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status.loading}
                className="w-full bg-blue text-white py-3.5 rounded-md font-bold uppercase tracking-wider text-[0.9rem] hover:bg-navy transition-all flex justify-center items-center gap-2 mt-2 disabled:opacity-70"
              >
                {status.loading ? 'Mengirim...' : <><Send size={16} /> Kirim Pesan</>}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Kontak;
