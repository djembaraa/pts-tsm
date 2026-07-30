import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


const ArtikelPompaTekananTinggiRo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
.art-layout{display:grid;grid-template-columns:1fr 290px;gap:3rem;align-items:start}
.art-sticky{position:sticky;top:88px}
.art-hero-img{height:320px;border-radius:12px;overflow:hidden;margin-bottom:2rem;position:relative}
.art-hero-img img{width:100%;height:100%;object-fit:cover}
.art-meta-bar{display:flex;flex-wrap:wrap;gap:.85rem;align-items:center;margin-bottom:1.5rem;padding-bottom:1.5rem;border-bottom:1px solid var(--border)}
.am-tag{background:var(--accent);color:#fff;font-size:.66rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:.26rem .72rem;border-radius:4px}
.am-info{font-size:.8rem;color:var(--muted);display:flex;align-items:center;gap:.36rem}
.author-box{display:flex;align-items:center;gap:.9rem;margin-bottom:.9rem}
.author-av{width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,var(--sky),var(--accent));display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;flex-shrink:0}
.author-av-name{font-weight:700;font-size:.92rem;color:var(--navy)}
.author-av-role{font-size:.76rem;color:var(--muted)}
.spec-table{width:100%;border-collapse:collapse;margin:1.5rem 0}
.spec-table th,.spec-table td{padding:.7rem 1rem;border:1px solid var(--border);font-size:.86rem;text-align:left}
.spec-table th{background:var(--navy);color:#fff;font-weight:700}
.spec-table tr:nth-child(even){background:var(--gray)}
@media(max-width:1024px){.art-layout{grid-template-columns:1fr}.art-sticky{position:static}}

` }} />
<div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/artikel">Artikel</Link> › Komponen RO</div>
    <h1>Cara Memilih Pompa Tekanan Tinggi<br />untuk Sistem RO Industri</h1>
    <p>Panduan teknis pemilihan high-pressure pump untuk RO — jenis pompa, sizing yang tepat, integrasi dengan Energy Recovery Device, dan brand-brand tier-1 yang andal.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">

      <article>
        <div className="art-hero-img">
          <picture>
            <source srcSet="images/foto-bengkel.webp" type="image/webp" />
            <img src="images/foto-bengkel.jpg" alt="Pompa tekanan tinggi high pressure pump untuk sistem RO industri" />
          </picture>
        </div>

        <div className="art-meta-bar">
          <span className="am-tag">Komponen</span>
          <span className="am-info">📅 2 Mei 2026</span>
          <span className="am-info">✍️ Tim TSM</span>
          <span className="am-info">⏱ 8 menit baca</span>
        </div>

        <div className="prose max-w-none text-text">

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pompa tekanan tinggi (high-pressure pump) adalah <strong>jantung sistem RO</strong>. Untuk BWRO, pompa harus menghasilkan tekanan 12-20 bar; untuk SWRO bisa mencapai 60-80 bar. Memilih pompa yang salah berarti: konsumsi listrik membengkak, membran cepat rusak akibat tekanan tidak stabil, atau sistem kerap berhenti karena pompa gagal di tengah operasi continuous.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Artikel ini membahas cara memilih pompa RO yang tepat: <strong>jenis-jenis pompa untuk aplikasi berbeda, sizing flow dan tekanan yang akurat, integrasi dengan Energy Recovery Device, brand tier-1 yang andal, dan kesalahan umum yang harus dihindari</strong>. Berdasarkan pengalaman TSM mendesain ratusan sistem RO untuk industri Indonesia.</p>

          <h2 id="kenapa-penting" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Kenapa Pemilihan Pompa Sangat Penting</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pompa RO menentukan tiga aspek kritis sistem:</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Konsumsi energi</strong> — Pompa adalah konsumen listrik terbesar di sistem RO (60-80% dari total). Perbedaan efisiensi 5% saja antara pompa berbeda berarti penghematan listrik puluhan-ratusan juta rupiah per tahun.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Reliability sistem</strong> — Pompa yang gagal = sistem RO down. Untuk operasi 24/7, ini berarti production loss yang mahal. Memilih pompa dengan track record dan support yang baik adalah keputusan strategis.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Umur membran</strong> — Tekanan yang fluktuatif atau pulsasi yang tinggi dapat merusak struktur membran prematur. Jenis pompa tertentu menghasilkan flow lebih smooth, lainnya lebih pulsatile.</li>
          </ul>

          <h2 id="jenis-pompa" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Jenis Pompa Tekanan Tinggi untuk RO</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tiga jenis pompa utama digunakan untuk sistem RO modern, masing-masing optimal untuk aplikasi tertentu:</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">1. Multi-Stage Centrifugal Pump (Pompa Sentrifugal Multi-Stage)</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pilihan default untuk <strong>BWRO dan TWRO</strong>. Pompa ini menggunakan beberapa impeller dalam satu housing, masing-masing menambah tekanan secara progressive.</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Range tekanan</strong>: 5-30 bar (cocok BW dan LP RO)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Range flow</strong>: 1-300 m³/jam</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Efisiensi</strong>: 75-82% (top tier seperti Grundfos CR)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kelebihan</strong>: smooth flow, low maintenance, durable, easily integrasi dengan VFD</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kekurangan</strong>: tidak cocok untuk SWRO (tekanan tidak cukup tinggi)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Brand tier-1</strong>: Grundfos CR/CRN, KSB Movitec, Sulzer MBN</li>
          </ul>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">2. Plunger Pump / Triplex Pump</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pilihan tradisional untuk <strong>SWRO compact dan watermaker kapal</strong>. Plunger bergerak reciprocating dalam silinder, memberikan tekanan konstan dengan flow pulsatile.</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Range tekanan</strong>: 50-200+ bar</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Range flow</strong>: 0,5-50 m³/jam (kecil-menengah)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Efisiensi</strong>: 88-92%</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kelebihan</strong>: efisiensi tinggi, kompak, harga relatif ekonomis untuk skala kecil</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kekurangan</strong>: flow pulsatile (butuh pulsation dampener), lebih banyak wear parts (plunger, seal, valve), maintenance interval lebih sering</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Brand tier-1</strong>: CAT Pumps, Hawk, KSB</li>
          </ul>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">3. Axial Piston Pump (Pompa Piston Aksial)</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pilihan modern untuk <strong>SWRO menengah-besar</strong>. Multiple piston tersusun aksial dalam swashplate housing memberikan flow lebih smooth dari plunger pump.</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Range tekanan</strong>: 60-100 bar (optimum SWRO)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Range flow</strong>: 5-200 m³/jam</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Efisiensi</strong>: 90-94%</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kelebihan</strong>: efisiensi tertinggi di kelas SWRO, integrasi mudah dengan ERD isobaric, durable, smooth operation</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kekurangan</strong>: investasi lebih tinggi vs plunger pump untuk skala kecil</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Brand tier-1</strong>: Danfoss APP series (paling populer untuk SWRO)</li>
          </ul>

          <h2 id="sizing" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Sizing Flow dan Tekanan yang Akurat</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tiga parameter utama untuk sizing pompa RO:</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">1. Flow Rate (Kapasitas)</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>Total feed flow = produk flow / recovery rate</strong>. Misalnya RO 50 m³/hari (~2,1 m³/jam produk) dengan recovery 75%: feed flow = 2,1/0,75 = 2,8 m³/jam. Tambahkan margin 10-15% untuk operasional: <strong>~3,2 m³/jam pompa</strong>.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk sistem multi-stage atau multi-train: hitung flow per train, tidak total sistem. Setiap pompa hanya melayani train-nya sendiri.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">2. Tekanan Operasi</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tekanan pompa harus melebihi total head yang dibutuhkan, yang terdiri dari:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Tekanan osmotik feed water</strong>: ~0,7 bar per 1.000 ppm TDS feed</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Tekanan osmotik di akhir membran</strong>: dengan recovery 75%, TDS feed di akhir naik 4x dari awal — tambah safety margin tekanan untuk ini</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pressure drop di membran dan piping</strong>: 1,5-3 bar tergantung konfigurasi</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pressure drop di pre-treatment</strong>: 0,5-2 bar dari cartridge filter dan piping</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Net Driving Pressure (NDP) pada membran</strong>: 5-10 bar tergantung target flux</li>
          </ul>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Software seperti ROSA (Dow), IMSDesign (Hydranautics), atau TorayDS3 menghitung ini secara akurat berdasarkan input air baku dan target output. <strong>Selalu gunakan software simulasi resmi</strong> — bukan rule of thumb yang sering tidak akurat.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">3. NPSH Available vs Required</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>Net Positive Suction Head Available (NPSHa)</strong> adalah tekanan absolut tersedia di sisi suction pompa. <strong>NPSHr</strong> adalah tekanan minimum yang dibutuhkan pompa untuk operasi tanpa kavitasi. <strong>NPSHa harus minimal 0,5-1 m lebih tinggi dari NPSHr</strong>.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kavitasi (formasi gelembung uap di dalam pompa) menyebabkan: erosi impeller/plunger, vibrasi tinggi, noise, dan ultimate failure pompa. Sumber utama kavitasi RO: cartridge filter clogged, suction piping terlalu panjang, atau air baku terlalu panas (kelarutan oksigen rendah).</p>

          <h2 id="erd" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Integrasi dengan Energy Recovery Device (ERD)</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk SWRO, ERD adalah <strong>game-changer</strong> yang menurunkan konsumsi energi pompa hingga 50-60%. ERD memanfaatkan tekanan tinggi pada brine (yang dibuang) untuk membantu mendorong feed water — sehingga pompa utama hanya perlu memompa volume produk, bukan total feed.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Dua Tipe ERD</h3>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>Turbocharger ERD</strong>: Brine high-pressure menggerakkan turbin yang langsung memberi boost ke feed water. Lebih sederhana mekanis, efisiensi 75-85%. Cocok untuk SWRO 5-50 m³/hari.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>Isobaric Chamber ERD</strong> (PX, iSave): Brine high-pressure langsung memindahkan tekanannya ke feed water dalam chamber yang berputar. Efisiensi 95-97%. Lebih kompleks tapi efisiensi maksimal. Cocok untuk SWRO menengah-besar (50+ m³/hari).</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Konfigurasi Pompa dengan ERD</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Dengan ERD, sistem SWRO membutuhkan <strong>dua pompa</strong>:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>High-pressure pump utama</strong>: ukuran lebih kecil (hanya untuk volume produk × recovery), tekanan tinggi 55-70 bar</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Booster pump ERD</strong>: ukuran lebih besar (untuk volume reject), tekanan rendah 1-3 bar untuk menutup pressure loss di ERD</li>
          </ul>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Kombinasi ini total konsumsi listrik 2,5-4 kWh/m³ — vs 6-8 kWh/m³ untuk SWRO tanpa ERD. ROI ERD biasanya 2-3 tahun untuk kapasitas &gt;30 m³/hari, dan bahkan lebih cepat untuk skala besar dengan biaya listrik tinggi.</p>

          <h2 id="brand-tier1" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Brand Tier-1 yang Direkomendasikan</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Centrifugal Multi-Stage (BWRO, TWRO)</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Grundfos CR/CRN series</strong> — Workhorse industri, sangat reliable, ketersediaan stok luas di Indonesia. Pilihan default untuk BWRO 5-200 m³/jam.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>KSB Movitec</strong> — Alternatif Eropa berkualitas, sering lebih kompetitif harga vs Grundfos pada konfigurasi tertentu.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sulzer MBN</strong> — Premium choice untuk aplikasi yang butuh material spesial atau high-temperature.</li>
          </ul>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Axial Piston (SWRO)</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Danfoss APP series</strong> — Industry standard untuk SWRO modern. APP 5.1-21.4 untuk 5-50 m³/hari, APP 36/53/86 untuk skala lebih besar. Efisiensi 92-94%, design modular dengan ERD.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>KSB pump SWRO line</strong> — Alternatif Jerman dengan kualitas tinggi.</li>
          </ul>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Plunger Pump (SWRO Compact)</h3>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>CAT Pumps</strong> — Standar industri untuk SWRO kompak 1-15 m³/hari, watermaker kapal kecil. Kualitas USA dengan track record puluhan tahun.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Hawk Pumps</strong> — Alternatif Italian quality, sering digunakan di SWRO Eropa.</li>
          </ul>

          <h2 id="vfd" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Manfaat Variable Frequency Drive (VFD)</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">VFD adalah inverter yang mengontrol kecepatan motor pompa berdasarkan kebutuhan sistem. Untuk RO, VFD memberikan beberapa keuntungan:</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Penghematan energi 25-40%</strong> — Saat demand turun (siang hari, weekend), pompa berjalan lebih lambat dengan konsumsi lebih rendah. Untuk centrifugal pump, hubungan kecepatan ke konsumsi adalah cubic — kecepatan turun 20% berarti konsumsi turun 50%.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Soft start</strong> — Mencegah surge listrik dan mechanical shock saat pompa start, memperpanjang umur motor dan komponen.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pressure control yang akurat</strong> — VFD dengan pressure feedback dapat menjaga tekanan output konstan meskipun feed condition berubah, melindungi membran dari fluktuasi.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Diagnostic data</strong> — VFD modern (Danfoss VLT, ABB ACS) memberikan data konsumsi listrik, temperatur motor, vibration analytics yang berguna untuk predictive maintenance.</li>
          </ul>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk sistem RO &gt;10 m³/jam, VFD hampir selalu cost-justified. Investment tambahan biasanya kembali dalam 1-2 tahun dari penghematan listrik.</p>

          <h2 id="kesalahan" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Kesalahan Pemilihan yang Sering Terjadi</h2>
          <ol className="ml-[1.5rem] my-[1.05rem] list-decimal">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Memilih pompa generic non-tier-1 untuk operasi 24/7</strong> — Hemat 20-30% di awal, tapi reliability rendah dan support service sulit. Total cost lebih tinggi dalam 5 tahun.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Tidak menggunakan ERD untuk SWRO &gt;30 m³/hari</strong> — ROI 2-3 tahun, no-brainer. Tidak ada alasan teknis untuk SWRO modern tanpa ERD.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Sizing terlalu pas tanpa margin</strong> — Saat membran mulai aging dan butuh tekanan lebih tinggi untuk produktivitas yang sama, pompa yang sized terlalu pas kehabisan kapasitas.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Mengabaikan NPSH</strong> — Cartridge filter yang clogged dapat membuat NPSHa turun di bawah NPSHr, menyebabkan kavitasi yang merusak pompa premium.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Mismatch antara pompa dan ERD</strong> — Pompa axial piston SWRO yang dibeli "general purpose" tanpa ERD-ready connection menyulitkan integrasi nanti. Selalu spesifikasi pompa SWRO sebagai paket dengan ERD.</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Tidak ada VFD untuk pompa &gt;5,5 kW</strong> — Penghematan energi yang ter-miss. Tambahkan VFD bahkan untuk retrofit di sistem existing.</li>
          </ol>

          <h2 id="faq" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

        </div>

      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#kenapa-penting">Kenapa Pompa Penting</Link></li>
            <li><Link href="#jenis-pompa">Jenis Pompa untuk RO</Link></li>
            <li><Link href="#sizing">Sizing Flow dan Tekanan</Link></li>
            <li><Link href="#erd">Energy Recovery Device</Link></li>
            <li><Link href="#brand-tier1">Brand Tier-1</Link></li>
            <li><Link href="#vfd">Manfaat VFD</Link></li>
            <li><Link href="#kesalahan">Kesalahan Pemilihan</Link></li>
            <li><Link href="#faq">Pertanyaan Umum</Link></li>
          </ul>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Tentang Penulis</h4>
          <div className="author-box">
            <div className="author-av">TS</div>
            <div>
              <div className="author-av-name">Tim Editorial TSM</div>
              <div className="author-av-role">Divisi Teknik &amp; Edukasi</div>
            </div>
          </div>
          <p style={{"fontSize":".84rem","color":"var(--muted)","lineHeight":"1.65"}}>Tim engineering PT Tirta Sumber Makmur dengan pengalaman 24+ tahun di industri water treatment Indonesia.</p>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem]" style={{"background":"linear-gradient(145deg,var(--navy),var(--blue))","border":"none"}}>
          <h4 style={{"color":"rgba(255,255,255,.45)","borderColor":"rgba(255,255,255,.15)"}}>Butuh Konsultasi?</h4>
          <p style={{"fontSize":".86rem","lineHeight":"1.65","marginBottom":"1rem","opacity":".84","color":"#fff"}}>Dapatkan konsultasi gratis dan estimasi biaya dari tim ahli kami.</p>
          <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" style={{"width":"100%","justifyContent":"center","fontSize":".82rem"}} to="/kontak">📞 Konsultasi Sekarang</Link>
        </div>

        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Artikel Lainnya</h4>
          <ul style={{"display":"flex","flexDirection":"column","gap":".65rem"}}>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/perbedaan-swro-bwro-twro">→ Perbedaan SWRO, BWRO, TWRO</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/perbandingan-membran-dow-toray">→ Perbandingan Membran</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/produk/pompa">→ Stok Pompa &amp; Pressure Vessel</Link></li>
            <li><Link className="related-link text-[0.84rem] font-semibold text-text transition-all duration-300 hover:text-blue block" to="/artikel/monitoring-kualitas-air-ro">→ Monitoring Kualitas Air</Link></li>
            <li><Link style={{"fontSize":".84rem","fontWeight":"600","color":"var(--blue)","display":"block"}} to="/artikel">→ Lihat Semua Artikel</Link></li>
          </ul>
        </div>
      </aside>

    </div>
  </div>
</section>
<div className="bg-gradient-to-r from-blue to-sky py-[3.2rem] text-center text-white">
  <div className="max-w-[1240px] mx-auto px-6">
    <h2>Butuh Pompa RO Tier-1 untuk Sistem Anda?</h2>
    <p>Tim ahli kami siap membantu mulai dari analisis kebutuhan hingga instalasi.</p>
    <div className="flex gap-4 justify-center flex-wrap">
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] bg-white text-blue font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-navy hover:text-white hover:-translate-y-[2px]" to="/kontak">📞 Hubungi Kami</Link>
      <Link className="inline-flex items-center gap-[0.46rem] py-[0.78rem] px-[1.75rem] border-2 border-white/55 text-white font-bold text-[0.86rem] tracking-[0.05em] uppercase rounded-[6px] transition-all duration-300 hover:bg-white/12 hover:border-white" to="/produk/pompa">🔍 Lihat Stok Pompa</Link>
    </div>
  </div>
</div>

    </>
  );
};

export default ArtikelPompaTekananTinggiRo;
