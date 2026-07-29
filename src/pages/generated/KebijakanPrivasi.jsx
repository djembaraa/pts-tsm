import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


const KebijakanPrivasi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › Kebijakan Privasi</div>
    <h1>Kebijakan Privasi</h1>
    <p>Komitmen kami untuk melindungi privasi dan data pribadi Anda saat menggunakan layanan dan website PT Tirta Sumber Makmur.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="legal-wrap">
      <div className="prose max-w-none text-text">
        <p className="updated text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Terakhir diperbarui: 17 April 2026</p>

        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">PT Tirta Sumber Makmur ("Perusahaan", "kami", atau "TSM") menghormati privasi Anda dan berkomitmen melindungi data pribadi yang Anda berikan kepada kami. Kebijakan Privasi ini menjelaskan jenis informasi yang kami kumpulkan, bagaimana kami menggunakannya, dan hak-hak Anda atas informasi tersebut.</p>

        <h2 id="pengumpulan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">1. Informasi yang Kami Kumpulkan</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kami dapat mengumpulkan informasi berikut saat Anda berinteraksi dengan kami:</p>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Informasi identitas</strong> — nama lengkap, jabatan, nama perusahaan, NPWP perusahaan (untuk keperluan penawaran dan kontrak).</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Informasi kontak</strong> — alamat email, nomor telepon, WhatsApp, alamat fisik perusahaan Anda.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Informasi teknis kebutuhan</strong> — kapasitas, jenis air baku, parameter operasi, dan detail teknis lain yang Anda bagikan untuk keperluan desain sistem.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Data penggunaan website</strong> — alamat IP, jenis browser, halaman yang dikunjungi, dan durasi kunjungan, dikumpulkan melalui cookie dan alat analitik standar.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Informasi karir</strong> — CV, riwayat pendidikan, dan pengalaman kerja saat Anda melamar pekerjaan di TSM.</li>
        </ul>

        <h2 id="penggunaan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">2. Bagaimana Kami Menggunakan Informasi</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Informasi yang kami kumpulkan digunakan untuk:</p>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Merespons permintaan penawaran, pertanyaan, dan konsultasi teknis Anda.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Merancang, memasang, dan memberikan layanan purna jual atas sistem yang Anda pesan.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Mengirimkan informasi produk, layanan baru, dan pembaruan teknis yang relevan dengan kebutuhan Anda.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Memproses lamaran kerja untuk posisi yang terbuka di TSM.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Meningkatkan kualitas website dan layanan kami melalui analisis penggunaan.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Memenuhi kewajiban hukum dan regulasi yang berlaku di Indonesia.</li>
        </ul>

        <h2 id="berbagi" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">3. Pembagian Informasi</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kami tidak menjual, menyewakan, atau memperdagangkan data pribadi Anda kepada pihak ketiga. Kami hanya dapat membagikan informasi dalam keadaan berikut:</p>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Mitra pelaksana proyek</strong> — kontraktor atau sub-kontraktor yang terlibat langsung dalam eksekusi proyek yang Anda kontrakkan dengan kami, dan hanya sebatas yang diperlukan.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Prinsipal atau produsen</strong> — untuk klaim garansi atau dukungan teknis produk tertentu.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kewajiban hukum</strong> — kepada pihak berwenang jika diwajibkan oleh hukum atau putusan pengadilan.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Persetujuan eksplisit</strong> — kapan pun Anda secara eksplisit menyetujui pembagian informasi tertentu.</li>
        </ul>

        <h2 id="keamanan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">4. Keamanan Data</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi data Anda dari akses tidak sah, pengubahan, atau kebocoran. Ini mencakup pembatasan akses internal hanya bagi karyawan yang berkepentingan, penggunaan koneksi terenkripsi, dan penyimpanan dokumen kontrak dalam sistem yang diproteksi.</p>

        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Meski demikian, tidak ada metode transmisi data melalui internet yang 100% aman. Kami menganjurkan Anda untuk juga berhati-hati dalam berbagi informasi sensitif melalui saluran digital.</p>

        <h2 id="cookie" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">5. Cookie dan Pelacakan</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Website kami dapat menggunakan cookie untuk meningkatkan pengalaman pengguna, menyimpan preferensi bahasa, dan menganalisis lalu lintas website. Anda dapat menonaktifkan cookie melalui pengaturan browser Anda, namun beberapa fitur website mungkin tidak berfungsi optimal.</p>

        <h2 id="hak" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">6. Hak Anda</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Anda memiliki hak untuk:</p>
        <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Meminta akses dan salinan data pribadi yang kami simpan tentang Anda.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Meminta koreksi jika data yang kami simpan tidak akurat atau usang.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Meminta penghapusan data pribadi Anda, sepanjang tidak bertentangan dengan kewajiban hukum kami.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Menolak atau membatalkan persetujuan untuk menerima komunikasi pemasaran.</li>
          <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Mengajukan keluhan terkait penanganan data pribadi Anda.</li>
        </ul>

        <h2 id="penyimpanan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">7. Penyimpanan Data</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kami menyimpan data pribadi Anda selama hubungan bisnis kami berlangsung, dan untuk jangka waktu yang wajar setelahnya sesuai dengan kewajiban hukum (misalnya dokumen keuangan, arsip proyek garansi). Data lamaran kerja yang tidak diterima akan dihapus dalam 12 bulan.</p>

        <h2 id="anak" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">8. Perlindungan Anak</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Website dan layanan kami tidak ditujukan untuk anak-anak di bawah usia 18 tahun. Kami tidak secara sadar mengumpulkan data pribadi dari anak-anak.</p>

        <h2 id="perubahan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">9. Perubahan Kebijakan</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kami dapat memperbarui Kebijakan Privasi ini sewaktu-waktu. Versi terbaru akan selalu tersedia di halaman ini dengan tanggal pembaruan yang jelas. Jika perubahan bersifat material, kami akan menginformasikan Anda melalui email atau pengumuman di website.</p>

        <h2 id="kontak" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">10. Hubungi Kami</h2>
        <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk pertanyaan, keluhan, atau permintaan terkait data pribadi Anda, silakan hubungi kami:</p>
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
    <h2>Ada Pertanyaan Lebih Lanjut?</h2>
    <p>Tim kami siap membantu menjawab pertanyaan Anda terkait privasi dan penanganan data.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak">📞 Hubungi Kami</Link>
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/syarat/ketentuan">📄 Lihat Syarat &amp; Ketentuan</Link>
    </div>
  </div>
</div>

    </>
  );
};

export default KebijakanPrivasi;
