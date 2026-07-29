import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, Wrench, Calculator } from 'lucide-react';


const ProdukUv = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/produk">Produk &amp; Solusi</Link> › UV Sterilizer</div>
    <h1>UV Sterilizer — Disinfeksi Air Ultraviolet Indonesia</h1>
    <p>Sistem disinfeksi UV-C untuk air minum, output RO, AMDK, kolam renang, dan air limbah. Lampu UV tier-1 dengan dosis tervalidasi 40-100 mJ/cm² — efektif terhadap bakteri, virus, protozoa, tanpa residu kimia.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[3rem] items-start">
      <div>
        <div className="h-[300px] rounded-[14px] flex items-center justify-center text-[8rem] mb-[2rem] text-white " style={{"background":"none","padding":"0","height":"auto","display":"block"}}><picture>
  <source srcSet="images/produk-ro-9m3-d.webp" type="image/webp" />
  <img src="images/produk-ro-9m3-d.jpg" alt="UV sterilizer ultraviolet untuk disinfeksi air minum dan industri Indonesia" style={{"width":"100%","height":"auto","maxHeight":"480px","objectFit":"cover","borderRadius":"14px","display":"block"}} />
</picture></div>

        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p><strong>Disinfeksi UV (Ultraviolet)</strong> adalah teknologi penghilang mikroorganisme tanpa kimia yang menjadi standar global untuk air minum, AMDK, dan air proses industri. Cahaya UV pada panjang gelombang 254nm merusak DNA bakteri, virus, dan protozoa sehingga mereka tidak dapat bereproduksi — efektif menonaktifkan E.coli, Salmonella, Legionella, Cryptosporidium, Giardia, dan ratusan patogen waterborne lainnya dengan dosis tepat.</p>
        <p>PT Tirta Sumber Makmur menyediakan <strong>UV sterilizer industrial</strong> dengan kapasitas dari <strong>0,5 hingga 500 m³/jam</strong>, menggunakan lampu UV-C dari brand tier-1: <strong>Trojan UV</strong>, <strong>Atlantic Ultraviolet</strong>, dan <strong>Wedeco/Xylem</strong>. Setiap sistem dilengkapi sensor UV intensity, sleeve cleaner otomatis untuk lampu yang dipasang di air berkalsium tinggi, dan kontrol PLC untuk monitoring dan alarm — memastikan dosis disinfeksi terjamin secara konsisten, bukan hanya saat lampu baru.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Cara Kerja UV Sterilizer</h2>
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p>Disinfeksi UV bekerja secara fisik (bukan kimia) — cahaya UV-C menembus dinding sel mikroorganisme dan merusak struktur DNA/RNA mereka. Mikroba tidak dibunuh secara harfiah, tetapi tidak dapat lagi bereproduksi sehingga aman bagi konsumen. Tiga komponen utama sistem UV TSM:</p>
        <ul style={{"paddingLeft":"1.4rem","margin":".8rem 0"}}>
          <li style={{"marginBottom":".5rem"}}><strong>Lampu UV-C</strong> — Lampu uap merkuri low-pressure menghasilkan output 254nm yang optimal untuk germicidal action. Untuk kapasitas besar, lampu medium-pressure dapat menggantikan beberapa lampu LP dengan satu unit.</li>
          <li style={{"marginBottom":".5rem"}}><strong>Reactor Chamber SS-316L</strong> — Tabung tempat air mengalir melewati lampu UV. Permukaan dalam dipoles untuk memantulkan UV (meningkatkan efisiensi), dengan sleeve quartz yang melindungi lampu dari kontak langsung dengan air.</li>
          <li style={{"marginBottom":".5rem"}}><strong>Kontrol &amp; Monitoring</strong> — Ballast electronic untuk kestabilan output, UV intensity sensor untuk pengukuran dosis real-time, jam meter untuk tracking umur lampu, dan alarm jika intensity turun di bawah threshold.</li>
        </ul>
        <p>Yang membedakan dosis disinfeksi efektif dengan placebo adalah <strong>UVT (UV Transmittance)</strong> air baku — semakin keruh atau berwarna, semakin sedikit UV yang menembus. Sistem TSM mengukur UVT saat commissioning dan mendesain reactor dengan margin cukup untuk fluktuasi UVT musiman.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Spesifikasi Teknis</h2>
        <table className="w-full border-collapse my-[1.5rem] text-[0.9rem] ">
          <tbody><tr><td>Panjang Gelombang</td><td>254 nm (UV-C germicidal)</td></tr>
          <tr><td>Dosis Disinfeksi</td><td>40 – 100 mJ/cm² (end-of-lamp)</td></tr>
          <tr><td>Kapasitas Flow</td><td>0,5 – 500 m³/jam</td></tr>
          <tr><td>Tipe Lampu</td><td>Low-pressure / Medium-pressure</td></tr>
          <tr><td>Umur Lampu</td><td>9.000 – 12.000 jam (LP); 4.000 – 8.000 jam (MP)</td></tr>
          <tr><td>Material Reactor</td><td>SS-316L food-grade</td></tr>
          <tr><td>Material Sleeve</td><td>Quartz Heraeus (high-purity)</td></tr>
          <tr><td>Standar Validasi</td><td>USEPA UVDGM, NSF/ANSI 55, DVGW</td></tr>
        </tbody></table>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Fitur Utama</h2>
        <ul className="flex flex-col text-[0.9rem] text-text ">
          <li>Lampu UV tier-1 (Trojan, Atlantic, Wedeco) dengan output stabil</li>
          <li>Ballast electronic untuk efisiensi dan umur lampu maksimal</li>
          <li>Sensor UV intensity dengan dosis monitoring real-time</li>
          <li>Reactor SS-316L food-grade dengan permukaan poles UV-reflective</li>
          <li>Sleeve quartz Heraeus tahan panas dan thermal shock</li>
          <li>Auto-cleaner mekanis untuk air dengan hardness tinggi (opsional)</li>
          <li>Kontrol PLC dengan alarm umur lampu dan UV low</li>
          <li>Validated dosis sesuai USEPA UVDGM untuk air minum</li>
        </ul>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt-sm">Aplikasi</h2>
        <div className="flex flex-wrap gap-2 mt-[0.8rem] ">
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Output RO untuk air minum</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Lini produksi AMDK</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Air PDAM/sumur untuk gedung</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Kolam renang hotel premium</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Air proses farmasi &amp; makanan</span>
          <span className="text-[0.8rem] font-semibold py-[0.28rem] px-[0.8rem] bg-ice border border-border rounded-[20px] text-text">Air daur ulang industri &amp; limbah</span>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Keunggulan UV Sterilizer TSM</h2>
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p>Banyak supplier menjual "UV sterilizer" murah yang kelihatan sama dari luar — namun dosis disinfeksi nyata yang dihasilkan jauh berbeda. Berikut yang membedakan sistem UV TSM:</p>
        <ul style={{"paddingLeft":"1.4rem","margin":".8rem 0"}}>
          <li style={{"marginBottom":".55rem"}}><strong>Dosis tervalidasi, bukan klaim</strong> — Reactor TSM dirancang dengan CFD modeling dan tervalidasi sesuai USEPA UVDGM. Dosis 40 mJ/cm² adalah dosis nyata pada akhir umur lampu, bukan saat lampu baru.</li>
          <li style={{"marginBottom":".55rem"}}><strong>Sensor UV intensity wajib</strong> — Setiap unit dilengkapi sensor untuk monitoring dosis real-time. Operator tahu persis kapan lampu perlu diganti, bukan sekadar berdasarkan jam meter.</li>
          <li style={{"marginBottom":".55rem"}}><strong>Material food-grade lengkap</strong> — Reactor SS-316L, sleeve quartz Heraeus, gasket FKM food-grade. Kompatibel dengan audit BPOM untuk AMDK dan farmasi.</li>
          <li style={{"marginBottom":".55rem"}}><strong>Auto-cleaner untuk hardness tinggi</strong> — Air dengan hardness tinggi (PDAM Jabodetabek, sumur dalam) menyebabkan scaling di sleeve dan menurunkan dosis UV. Auto-wiper mekanis menjaga sleeve tetap bersih tanpa shutdown.</li>
          <li style={{"marginBottom":".55rem"}}><strong>Kontrak penggantian lampu</strong> — Untuk klien yang ingin "set and forget", TSM menyediakan kontrak penggantian lampu tahunan dengan stok lampu pabrikan asli. Tidak ada lampu generic yang menurunkan dosis.</li>
        </ul>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Studi Kasus Aplikasi</h2>
        <div className="" style={{"fontSize":".96rem","lineHeight":"1.78","color":"var(--text)"}}>
        <p><strong>UV Polishing untuk Lab Universitas Airlangga</strong> — TSM mengintegrasikan UV sterilizer 254nm dengan polishing system Type I untuk lab biologi molekuler. Output mikroba &lt; 1 CFU/100 mL secara konsisten — kritis untuk preparasi sampel PCR dan kultur sel mamalia.</p>
        <p><strong>UV untuk RO Hotel Bintang 5</strong> — TSM memasang UV 20 m³/jam di outlet sistem RO komersial Ritz-Carlton untuk distribusi air minum, dapur, dan dispenser kamar tamu. UV menjadi safety layer terhadap potensi rekontaminasi pada jalur distribusi panjang. Tidak ada kasus kontaminasi mikroba sejak instalasi.</p>
        </div>

        <h2 className="font-condensed text-[1.6rem] font-black text-navy mb-[1rem] mt">Pertanyaan yang Sering Ditanyakan</h2>
        <div className="" style={{"fontSize":".94rem","lineHeight":"1.75","color":"var(--text)"}}>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa dosis UV yang dibutuhkan untuk disinfeksi air minum?</h3>
        <p>USEPA dan Permenkes 492/2010 mensyaratkan dosis UV minimum 40 mJ/cm² pada panjang gelombang 254nm untuk inaktivasi 4-log bakteri dan virus. Untuk patogen tertentu seperti Cryptosporidium, dibutuhkan dosis 12-22 mJ/cm². Sistem TSM standar dirancang dengan dosis 40-60 mJ/cm² pada akhir umur lampu untuk safety margin yang cukup.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apa beda UV-C dengan UV-A dan UV-B?</h3>
        <p>UV-C (200-280nm) adalah satu-satunya yang efektif untuk disinfeksi karena merusak DNA mikroorganisme. UV-A (315-400nm) untuk tanning/curing, tidak efektif untuk disinfeksi. UV-B (280-315nm) digunakan untuk fototerapi medis, juga tidak untuk disinfeksi air. Lampu UV TSM beroperasi pada 254nm — tepat di puncak germicidal effectiveness UV-C.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Berapa lama umur lampu UV?</h3>
        <p>Lampu UV low-pressure: 9.000-12.000 jam (kira-kira 12-15 bulan operasi 24/7). Lampu medium-pressure: 4.000-8.000 jam tapi output lebih tinggi per unit lampu. TSM menyediakan kontrak penggantian lampu tahunan dengan stok pabrikan asli (Trojan, Atlantic Ultraviolet, atau Philips/Signify) untuk memastikan dosis disinfeksi tetap di spesifikasi.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Kenapa air RO tetap butuh UV sterilizer?</h3>
        <p>Membran RO sangat efektif menahan bakteri (&gt;99,9%), tapi pada permeate side dapat terjadi rekontaminasi dari biofilm di pipa, tangki, atau valve downstream. UV sterilizer di outlet RO memberikan disinfeksi terminal yang menjamin air tetap steril sampai point of use. Untuk AMDK dan farmasi, UV adalah safety layer wajib selain RO dan ozon.</p>

        <h3 style={{"fontSize":"1.05rem","color":"var(--navy)","margin":"1rem 0 .4rem"}}>Apa beda UV TSM dengan UV import murah?</h3>
        <p>Banyak UV import murah menggunakan ballast magnetic basic dengan output UV yang menurun cepat, sleeve quartz biasa yang mudah pecah, dan tanpa sensor UV intensity. UV TSM menggunakan ballast electronic dengan output stabil, sleeve quartz Heraeus tahan panas, sensor UV intensity dengan alarm jika dosis turun di bawah threshold, plus konstruksi SS-316L food-grade. Hasil: dosis disinfeksi terjamin secara konsisten — bukan hanya saat lampu baru.</p>

        <p style={{"marginTop":"1.2rem"}}>UV sterilizer adalah safety layer terakhir yang memisahkan air kualitas tinggi dari risiko kontaminasi mikroba. Konsultasikan kebutuhan disinfeksi UV Anda dengan tim engineer TSM — kami akan memilih reactor dengan dosis tervalidasi yang tepat untuk UVT air baku Anda dan kapasitas operasi yang dibutuhkan.</p>
        </div>
      </div>
      <aside className="lg:sticky lg:top-[88px]">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Minta Penawaran</h4>
          <p style={{"fontSize":".86rem","color":"var(--muted)","lineHeight":"1.65","marginBottom":"1rem"}}>Dapatkan rekomendasi UV sterilizer yang sesuai untuk aplikasi Anda.</p>
          <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-accent text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,180,216,0.32)] hover:bg-white hover:text-blue hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center","marginBottom":".6rem"}} to="/kontak"><ClipboardList className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Minta Penawaran</Link>
          <Link href="https://wa.me/62818719119" className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-blue text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-blue hover:text-white hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center"}} target="_blank" rel="noopener noreferrer">💬 WhatsApp Kami</Link>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Produk Terkait</h4>
          <ul style={{"display":"flex","flexDirection":"column","gap":".65rem"}}>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/ozon">→ Ozon Generator</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/amdk">→ Mesin AMDK</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/ro-industri">→ RO Industri</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/ro-komersial">→ RO Komersial</Link></li>
            <li><Link style={{"fontSize":".84rem","fontWeight":"600","color":"var(--blue)","display":"block"}} to="/produk">→ Semua Produk</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem]" style={{"background":"linear-gradient(145deg,var(--navy),var(--blue))","border":"none"}}>
          <h4 style={{"color":"rgba(255,255,255,.45)","borderColor":"rgba(255,255,255,.15)"}}>Konsultasi Teknis</h4>
          <p style={{"fontSize":".86rem","opacity":".84","color":"#fff","lineHeight":"1.65","marginBottom":"1rem"}}>Hubungi engineer kami untuk pemilihan UV yang tepat untuk kebutuhan Anda.</p>
          <Link href="tel:+62818719119" className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center","fontSize":".82rem"}}>📞 021-88871689</Link>
        </div>
      </aside>
    </div>
  </div>

        <div className="info-box" style={{"marginTop":"2rem"}}>
          <strong>📚 Baca Juga</strong>
          <ul style={{"marginTop":".75rem","paddingLeft":"1.2rem"}}>
            <li><Link to="/produk/ozon">⚡ Ozon Generator untuk Disinfeksi</Link></li>
            <li><Link to="/produk/amdk">🥤 Mesin AMDK &amp; Air Minum Dalam Kemasan</Link></li>
            <li><Link to="/produk/ro-komersial">🏢 RO Komersial Hotel &amp; Gedung</Link></li>
            <li><Link to="/industri/rs">⚕️ Solusi untuk Rumah Sakit</Link></li>
            <li><Link to="/kalkulator"><Calculator className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Hitung Kebutuhan Sistem Anda</Link></li>
          </ul>
        </div>

</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Tertarik dengan UV Sterilizer?</h2>
    <p>Tim engineer kami siap membantu Anda memilih reactor UV dengan dosis tervalidasi yang tepat.</p>
    <div className="flex gap-4 justify-center flex-wrap"><Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak"><ClipboardList className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Minta Penawaran Harga</Link><Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/layanan"><Wrench className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /> Lihat Layanan Kami</Link></div>
  </div>
</div>

    </>
  );
};

export default ProdukUv;
