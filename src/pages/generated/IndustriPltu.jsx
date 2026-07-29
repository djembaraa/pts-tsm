import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


const IndustriPltu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/industri">Industri</Link> › PLTU &amp; Pembangkit Listrik</div>
    <h1>Water Treatment untuk PLTU &amp; Pembangkit Listrik</h1>
    <p>Sistem demineralisasi RO+EDI dan cooling tower makeup untuk PLTU, PLTGU, dan IPP di seluruh Indonesia. Standar ASME, IAPWS, dan spesifikasi OEM boiler.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>
        <div className="prose max-w-none text-text">

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pembangkit Listrik Tenaga Uap (PLTU) adalah salah satu sektor industri dengan persyaratan kualitas air paling ketat di dunia. Air di PLTU bukan sekadar utilitas — air adalah <em>fluida kerja</em> yang langsung berinteraksi dengan turbin, boiler, dan superheater dengan tekanan ratusan bar dan suhu di atas 540°C. Kualitas air yang buruk bahkan dalam jumlah ppb (parts per billion) bisa berarti kerusakan turbin senilai puluhan miliar rupiah dan downtime berbulan-bulan.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">PT Tirta Sumber Makmur menyediakan <strong>solusi water treatment PLTU</strong> end-to-end: demin plant berbasis RO+EDI, cooling tower makeup water, condensate polishing, dan service treatment kimia. Kami melayani PLTU swasta (IPP), PLTU PLN, captive power plant industri, dan PLTGU di berbagai lokasi di Indonesia.</p>

          <h2 id="standar-air-pltu" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Standar Kualitas Air untuk PLTU</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Persyaratan kualitas air boiler feed water (BFW) ditentukan oleh tekanan operasi boiler dan rekomendasi OEM (manufaktur boiler). Standar internasional yang umum digunakan adalah <strong>ASME (American Society of Mechanical Engineers)</strong> dan <strong>IAPWS (International Association for the Properties of Water and Steam)</strong>.</p>

          <table className="w-full border-collapse my-[1.5rem] text-[0.9rem]">
            <tbody><tr><th>Parameter</th><th>Tekanan Rendah<br />(&lt;40 bar)</th><th>Tekanan Tinggi<br />(&gt;100 bar, Subcritical)</th><th>Supercritical<br />(&gt;220 bar)</th></tr>
            <tr><td>Konduktivitas (µS/cm)</td><td>&lt; 5</td><td>&lt; 0,2</td><td>&lt; 0,1</td></tr>
            <tr><td>Silica SiO₂ (ppb)</td><td>&lt; 100</td><td>&lt; 20</td><td>&lt; 10</td></tr>
            <tr><td>Total Iron Fe (ppb)</td><td>&lt; 50</td><td>&lt; 10</td><td>&lt; 5</td></tr>
            <tr><td>TOC (ppb)</td><td>&lt; 500</td><td>&lt; 100</td><td>&lt; 100</td></tr>
            <tr><td>Sodium Na (ppb)</td><td>&lt; 20</td><td>&lt; 5</td><td>&lt; 3</td></tr>
            <tr><td>Oksigen terlarut (ppb)</td><td>&lt; 7</td><td>&lt; 5</td><td>&lt; 5</td></tr>
          </tbody></table>

          <h2 id="solusi-demin-pltu" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Demin Plant RO+EDI untuk PLTU</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Pencapaian standar boiler feed water tekanan tinggi hanya mungkin dengan teknologi demineralisasi modern. TSM mengkonfigurasi sistem berdasarkan kualitas air baku dan persyaratan output:</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Konfigurasi Standar: 2-Pass RO + EDI</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk mayoritas PLTU subcritical, kombinasi <strong>RO 2-Pass + EDI (Electrodeionization)</strong> memberikan keseimbangan optimal antara kualitas, biaya operasional, dan keandalan:</p>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Pre-treatment:</strong> Multi-Media Filter (MMF), softener atau antiscalant dosing, cartridge filter 5 µm</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>1st Pass RO:</strong> Reduksi TDS &gt;97%, output 50–100 µS/cm</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>2nd Pass RO:</strong> Reduksi lanjutan, output 5–10 µS/cm</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/produk/demi">EDI Module</Link>:</strong> Polishing tanpa regenerasi kimia, output &lt;0,1 µS/cm, silica &lt;10 ppb</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Mixed Bed Polisher (opsional):</strong> Untuk supercritical atau persyaratan ekstra ketat</li>
          </ul>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Mengapa RO+EDI Mengganti Ion Exchange Klasik</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">PLTU lama umumnya menggunakan demin berbasis kation-anion-mixed bed dengan regenerasi asam-basa. Konfigurasi ini masih bekerja, namun memiliki kelemahan signifikan: <strong>biaya regenerasi tinggi</strong> (HCl dan NaOH konsumsi besar), <strong>limbah kimia berbahaya</strong> yang harus dinetralkan, <strong>downtime regenerasi</strong> rutin, dan <strong>risiko safety</strong> dari handling asam pekat.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">RO+EDI menghilangkan semua kelemahan ini: tidak ada regenerasi kimia, tidak ada limbah asam-basa, operasi kontinu 24/7, dan footprint plant lebih kecil. Untuk PLTU yang sedang merencanakan retrofit demin plant, ROI biasanya tercapai dalam 3–5 tahun dari penghematan biaya bahan kimia regenerasi saja.</p>

          <h2 id="cooling-tower-pltu" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Cooling Tower Makeup &amp; Treatment</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Selain demin water, PLTU membutuhkan air dalam volume sangat besar untuk sistem cooling tower (kondensor turbin). Kualitas air make-up cooling tower mempengaruhi efisiensi termal, konsumsi bahan kimia, dan umur peralatan heat exchanger.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM menyediakan paket lengkap: <strong>RO untuk cooling tower make-up</strong> (terutama untuk PLTU pesisir dengan air payau), program <strong>chemical treatment cooling tower</strong> (anti-scalant, dispersant, biocide), monitoring <strong>Cycles of Concentration (CoC)</strong> dan blowdown, hingga sistem <strong>RO Reclaim untuk daur ulang blowdown</strong> dan mengurangi konsumsi air baku.</p>

          <h2 id="condensate-polishing" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Condensate Polishing</h2>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk PLTU dengan persyaratan kualitas siklus uap-air yang sangat ketat (terutama supercritical dan once-through boiler), <strong>condensate polishing system</strong> wajib ada. Sistem ini me-treat kondensat yang kembali dari turbin sebelum masuk kembali ke boiler — menghilangkan kontaminan dari kebocoran kondensor (clorida, sulfat) dan produk korosi (besi, tembaga).</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM menyediakan condensate polishing dengan opsi <strong>Powdered Resin (PR)</strong> dan <strong>Deep Bed (DB)</strong> sesuai konfigurasi unit pembangkit Anda.</p>

          <h2 id="layanan-pltu" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Layanan TSM untuk PLTU</h2>
          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/layanan/feasibility">Feasibility Study</Link>:</strong> Untuk PLTU baru — analisis sumber air, kualitas air baku, sizing demin plant</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/layanan/desain">Engineering Design</Link>:</strong> Detailed engineering termasuk PFD, P&amp;ID, layout, dan equipment specification</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/layanan/epc">EPC Turnkey</Link>:</strong> Engineering, procurement, construction untuk demin plant lengkap</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Retrofit &amp; Upgrade:</strong> Konversi ion exchange ke RO+EDI tanpa shutdown unit pembangkit</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/layanan/maintenance">O&amp;M Contract</Link>:</strong> Long-term operation &amp; maintenance dengan availability guarantee</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Chemical Treatment Service:</strong> Program treatment kimia bulanan dengan technical support</li>
          </ul>

          <h2 id="faq-pltu" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa standar kualitas air boiler feed PLTU?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">PLTU dengan tekanan tinggi (&gt;40 bar) memerlukan boiler feed water dengan <strong>konduktivitas &lt;0,2 µS/cm, silica &lt;10 ppb, dan TOC &lt;100 ppb</strong> sesuai standar ASME dan IAPWS. PLTU supercritical (&gt;220 bar) membutuhkan persyaratan lebih ketat lagi. Pencapaian standar ini hanya mungkin dengan kombinasi RO + EDI atau RO + Mixed Bed Polisher.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa perbedaan demin plant berbasis ion exchange vs RO+EDI?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ion exchange klasik membutuhkan regenerasi rutin dengan asam (HCl) dan basa (NaOH) yang mahal dan menghasilkan limbah kimia. <strong>RO+EDI</strong> tidak butuh regenerasi kimia, lebih ramah lingkungan, footprint lebih kecil, dan biaya operasional 30–50% lebih rendah dalam jangka panjang. EDI menggantikan fungsi mixed bed dengan elektrodeionisasi kontinu — tanpa regenerasi.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa kapasitas demin plant untuk PLTU?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Demin plant PLTU bervariasi sesuai ukuran unit: PLTU kecil (10–50 MW) sekitar <strong>5–20 m³/jam</strong>, PLTU menengah (100–300 MW) sekitar <strong>30–80 m³/jam</strong>, dan PLTU besar (&gt;600 MW) bisa mencapai <strong>150–300 m³/jam</strong>. TSM mendesain custom dengan konfigurasi N+1 redundan untuk memastikan availability operasi 24/7.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah TSM bisa retrofit demin plant lama?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ya. Banyak PLTU eksisting masih menggunakan ion exchange klasik dan ingin upgrade ke RO+EDI untuk efisiensi. TSM menyediakan layanan <Link to="/layanan/audit">audit demin plant</Link>, desain retrofit, dan instalasi paralel sehingga unit pembangkit tetap beroperasi selama periode konstruksi. Cutover ke sistem baru biasanya dilakukan saat scheduled maintenance.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa downtime untuk maintenance demin plant?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Dengan desain redundan (N+1 train RO), maintenance rutin bisa dilakukan <strong>tanpa shutdown produksi air demin</strong>. Untuk maintenance major seperti penggantian membran (interval tipikal 5–7 tahun), downtime per train sekitar 2–3 hari. TSM menyediakan kontrak maintenance dengan availability guarantee &gt;99%.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah TSM punya pengalaman PLTU di lokasi remote?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ya. Banyak PLTU mulut tambang dan PLTU pesisir berada di lokasi yang sulit diakses (Kalimantan, Sulawesi, NTT). TSM berpengalaman menangani logistik instalasi remote, training operator lokal, dan menyediakan <Link to="/layanan/darurat">layanan darurat</Link> dengan respon cepat untuk lokasi terpencil. Untuk PLTU pesisir dengan air baku payau, kami juga punya pengalaman desain BWRO/SWRO sebagai pre-treatment demin plant.</p>

          <div style={{"marginTop":"2rem","padding":"2rem","background":"var(--ice)","borderRadius":"12px","borderLeft":"4px solid var(--accent)"}}>
            <h3 style={{"marginBottom":".75rem","color":"var(--navy)"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Konsultasi Demin Plant PLTU Anda</h3>
            <p style={{"marginBottom":"1.25rem","color":"var(--muted)","fontSize":".92rem"}} className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk PLTU baru, retrofit demin lama, atau optimasi cooling tower — tim engineering TSM siap memberikan technical study dan budgetary proposal sesuai spesifikasi OEM boiler Anda.</p>
            <Link style={{"display":"inline-block","padding":".85rem 2rem","background":"var(--blue)","color":"#fff","borderRadius":"8px","fontWeight":"700","fontSize":".96rem"}} to="/kontak">⚡ Hubungi Tim Power Plant TSM →</Link>
          </div>

        </div>
      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#standar-air-pltu">Standar Kualitas Air</Link></li>
            <li><Link href="#solusi-demin-pltu">Demin RO+EDI</Link></li>
            <li><Link href="#cooling-tower-pltu">Cooling Tower</Link></li>
            <li><Link href="#condensate-polishing">Condensate Polishing</Link></li>
            <li><Link href="#layanan-pltu">Layanan TSM</Link></li>
            <li><Link href="#faq-pltu">FAQ</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Produk Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/produk/demi">→ Demin RO+EDI</Link></li>
            <li><Link to="/produk/ro-industri">→ RO Industri</Link></li>
            <li><Link to="/produk/kimia">→ Chemical Treatment</Link></li>
            <li><Link to="/produk/instrumen">→ Instrumentasi &amp; SCADA</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Layanan Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/layanan/epc">→ EPC Turnkey</Link></li>
            <li><Link to="/layanan/feasibility">→ Feasibility Study</Link></li>
            <li><Link to="/layanan/maintenance">→ O&amp;M Contract</Link></li>
            <li><Link to="/layanan/darurat">→ Layanan Darurat</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Artikel Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/artikel/water-treatment-pltu">→ Water Treatment PLTU</Link></li>
            <li><Link to="/artikel/air-farmasi-ro-edi">→ RO+EDI Detail</Link></li>
            <li><Link to="/artikel/monitoring-kualitas-air-ro">→ Monitoring Air</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>

    </>
  );
};

export default IndustriPltu;
