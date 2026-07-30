import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


const SyaratKetentuan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.legal-wrap{max-width:860px;margin:0 auto}
.legal-wrap .updated{font-size:.84rem;color:var(--muted);margin-bottom:2rem;padding-bottom:1.5rem;border-bottom:1px solid var(--border)}

` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › Syarat &amp; Ketentuan</div>
    <h1>Syarat &amp; Ketentuan</h1>
    <p>Ketentuan yang mengatur penggunaan website dan layanan PT Tirta Sumber Makmur oleh pengunjung dan klien kami.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="legal-wrap">
      <div className="prose max-w-none text-text">
        <p className="updated text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Terakhir diperbarui: 17 April 2026</p>

        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Dengan mengakses dan menggunakan website PT Tirta Sumber Makmur ("TSM", "kami"), Anda dianggap telah membaca, memahami, dan menyetujui Syarat &amp; Ketentuan berikut. Jika Anda tidak setuju dengan sebagian atau seluruh ketentuan ini, mohon untuk tidak menggunakan layanan kami.</p>

        <h2 id="definisi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">1. Definisi</h2>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>"Website"</strong> — situs web resmi PT Tirta Sumber Makmur dan seluruh sub-domainnya.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>"Layanan"</strong> — produk dan jasa pengolahan air (water treatment) yang ditawarkan TSM, termasuk desain, instalasi, komisioning, pemeliharaan, dan konsultasi.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>"Pengguna"</strong> — setiap orang yang mengakses website atau menggunakan layanan kami.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>"Konten"</strong> — seluruh materi yang terdapat di website, termasuk teks, gambar, logo, video, dan dokumentasi.</li>
        </ul>

        <h2 id="penggunaan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">2. Penggunaan Website</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Dengan menggunakan website ini, Anda menyetujui untuk:</p>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Menggunakan website hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Tidak melakukan tindakan yang dapat merusak, membebani, atau mengganggu fungsi website.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Tidak mencoba mengakses bagian website yang tidak diizinkan untuk publik.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Tidak menggunakan data kontak di website untuk tujuan spam atau kegiatan komersial tanpa izin.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Memberikan informasi yang akurat dan benar saat mengisi formulir di website kami.</li>
        </ul>

        <h2 id="hak-cipta" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">3. Hak Kekayaan Intelektual</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Seluruh konten di website ini — termasuk teks, foto produk, logo, tata letak, ikon, dan desain — adalah milik PT Tirta Sumber Makmur atau digunakan dengan izin pemegang haknya. Konten dilindungi oleh undang-undang hak cipta dan merek dagang Republik Indonesia.</p>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Anda diperbolehkan mengunduh dan mencetak bagian dari website untuk keperluan evaluasi produk atau layanan kami secara pribadi. Namun, Anda tidak diperbolehkan untuk:</p>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Memodifikasi atau menyalin konten untuk digunakan di website, publikasi, atau media lain tanpa izin tertulis.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Menggunakan logo, nama, atau merek dagang TSM untuk kepentingan komersial.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Mereproduksi konten sebagai bagian dari produk atau layanan komersial Anda sendiri.</li>
        </ul>

        <h2 id="akurasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">4. Akurasi Informasi</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kami berusaha memastikan informasi di website ini akurat dan mutakhir. Namun, spesifikasi teknis, harga, dan ketersediaan produk dapat berubah sewaktu-waktu tanpa pemberitahuan. Informasi final yang mengikat adalah yang tercantum dalam dokumen penawaran atau kontrak resmi yang ditandatangani kedua belah pihak.</p>

        <h2 id="penawaran" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">5. Penawaran dan Kontrak</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Informasi di website ini tidak merupakan penawaran mengikat. Penawaran resmi hanya sah melalui dokumen penawaran bertulis yang dikeluarkan oleh TSM dengan nomor referensi dan tanda tangan berwenang. Ketentuan berikut berlaku untuk setiap transaksi:</p>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Penawaran harga umumnya berlaku 30 hari kalender sejak diterbitkan, kecuali dinyatakan lain.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Pembayaran mengikuti termin yang disepakati dalam Purchase Order atau kontrak.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Jadwal pengiriman dan instalasi akan dikonfirmasi setelah Down Payment diterima.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Spesifikasi teknis dan scope of work hanya mencakup yang tercantum eksplisit dalam penawaran.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Perubahan scope setelah kontrak disepakati akan diproses melalui mekanisme Variation Order terpisah.</li>
        </ul>

        <h2 id="garansi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">6. Garansi Produk dan Layanan</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Garansi atas produk dan layanan kami mengikuti ketentuan yang tercantum dalam kontrak masing-masing proyek. Secara umum:</p>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Garansi sistem: 12 bulan sejak commissioning atau 18 bulan sejak pengiriman, mana yang lebih dulu.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Komponen pihak ketiga (membran, pompa, sensor) mengikuti garansi pabrikan.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Garansi tidak mencakup kerusakan akibat kesalahan operasi, kelalaian perawatan, force majeure, atau penggunaan di luar spesifikasi desain.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Garansi akan hilang jika sistem dimodifikasi tanpa persetujuan tertulis kami.</li>
        </ul>

        <h2 id="tanggung-jawab" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">7. Pembatasan Tanggung Jawab</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Dalam batas yang diperbolehkan hukum, TSM tidak bertanggung jawab atas:</p>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Kerugian tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan website atau layanan kami.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Kerugian akibat keputusan yang diambil berdasarkan informasi umum di website tanpa konsultasi dengan tim engineering kami.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Gangguan akses website akibat masalah teknis di luar kendali kami.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Kerusakan data akibat tindakan pihak ketiga seperti peretasan.</li>
        </ul>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tanggung jawab maksimum kami dalam setiap proyek dibatasi tidak melebihi nilai kontrak proyek tersebut.</p>

        <h2 id="tautan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">8. Tautan ke Website Eksternal</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Website kami dapat memuat tautan ke website pihak ketiga (misalnya Google Maps, WhatsApp, media sosial). Kami tidak bertanggung jawab atas konten, kebijakan privasi, atau praktik website-website tersebut. Mengakses tautan eksternal adalah tanggung jawab Anda sendiri.</p>

        <h2 id="privasi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">9. Privasi</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Penggunaan data pribadi Anda diatur dalam <Link style={{"color":"var(--blue)","textDecoration":"underline"}} to="/kebijakan/privasi">Kebijakan Privasi</Link> kami, yang merupakan bagian tidak terpisahkan dari Syarat &amp; Ketentuan ini.</p>

        <h2 id="hukum" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">10. Hukum yang Berlaku</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Syarat &amp; Ketentuan ini diatur dan ditafsirkan berdasarkan hukum Republik Indonesia. Setiap perselisihan yang timbul akan diselesaikan terlebih dahulu secara musyawarah. Jika tidak tercapai kesepakatan, para pihak sepakat memilih Pengadilan Negeri Bekasi sebagai tempat penyelesaian.</p>

        <h2 id="perubahan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">11. Perubahan Ketentuan</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kami berhak mengubah Syarat &amp; Ketentuan ini sewaktu-waktu. Versi terbaru akan selalu tersedia di halaman ini. Penggunaan website setelah pembaruan dianggap sebagai persetujuan Anda atas ketentuan yang diperbarui.</p>

        <h2 id="kontak" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">12. Kontak</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk pertanyaan atau klarifikasi terkait Syarat &amp; Ketentuan ini, silakan hubungi:</p>
        <div className="info-box bg-ice border border-border rounded-[10px] p-[1.2rem_1.5rem] my-[1.75rem]">
          <strong className="block text-[0.7rem] font-bold uppercase tracking-[0.1em] text-accent mb-[0.38rem]">PT Tirta Sumber Makmur</strong>
          Jl. Ruko Taman Cemara No.28, Pusaka Rakyat, Kec. Tarumajaya, Kabupaten Bekasi, Jawa Barat<br />
          Pusaka Rakyat, Kec. Tarumajaya, Kab. Bekasi, Jawa Barat 17214<br />
          Email: <Link href="mailto:obed@tsm.or.id">obed@tsm.or.id</Link><br />
          Telepon: <Link href="tel:02188871689">021-88871689</Link>
        </div>
      </div>
    </div>
  </div>
</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Siap Memulai Proyek Anda?</h2>
    <p>Hubungi tim kami untuk konsultasi dan penawaran proyek water treatment Anda.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak">📞 Hubungi Kami</Link>
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/kebijakan/privasi">🔒 Lihat Kebijakan Privasi</Link>
    </div>
  </div>
</div>

    </>
  );
};

export default SyaratKetentuan;
