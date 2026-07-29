import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


const LayananDarurat = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap"><Link to="/index">Beranda</Link> › <Link to="/layanan">Layanan</Link> › Servis Darurat 24/7</div>
    <h1>Servis Darurat 24/7 Sistem Water Treatment</h1>
    <p>Tim emergency response TSM siap dipanggil 24 jam, 7 hari seminggu untuk klien yang menghadapi gangguan kritis pada sistem reverse osmosis dan water treatment industri.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="art-layout">
      <article>
        <div className="prose max-w-none text-text">

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sistem water treatment yang gagal mendadak dapat menghentikan operasi produksi senilai puluhan hingga ratusan juta rupiah per jam. Bagi industri continuous process — pembangkit listrik, pabrik makanan-minuman, fasilitas farmasi, hotel resort di pulau, atau kapal di laut — kegagalan sistem RO bukan sekadar inconvenience, tapi krisis bisnis yang menuntut respons profesional dalam hitungan jam.</p>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]"><strong>PT Tirta Sumber Makmur</strong> menyediakan layanan emergency response 24/7 dengan komitmen response time terukur, jaringan teknisi yang dapat di-dispatch ke berbagai lokasi di Indonesia, dan stok spare part standar yang siap kirim untuk meminimalkan downtime klien.</p>

          <div className="hotline-box">
            <strong>HOTLINE EMERGENCY 24/7</strong>
            <span className="hotline-num">+62 818-719-119</span>
            <p style={{"margin":"0","fontSize":".92rem","opacity":".92"}} className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">WhatsApp &amp; Phone — siap dihubungi kapan saja</p>
          </div>

          <h2 id="kapan-emergency" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Kapan Anda Butuh Emergency Call?</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tidak semua masalah sistem water treatment merupakan emergency. Berikut indikator yang masuk kategori darurat dan perlu segera respons:</p>

          <div className="alert-box">
            <strong>🚨 Situasi yang termasuk EMERGENCY</strong><br /><br />
            ✗ Sistem total stop dan tidak bisa di-restart<br />
            ✗ Kebocoran besar di piping high-pressure (&gt;15 bar)<br />
            ✗ Kontaminasi air output mendadak (TDS naik 5x normal)<br />
            ✗ Pompa terbakar atau mengalami kerusakan parah<br />
            ✗ Alarm safety berulang (overload, over-pressure, fire detection)<br />
            ✗ Kebocoran kimia (acid, antiscalant, biocide)<br />
            ✗ Banjir atau kebakaran di ruang water treatment<br />
            ✗ Quality compliance failure pada sistem regulated (PW/WFI farmasi, hemodialisis)
          </div>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Sebaliknya, situasi seperti penurunan performa bertahap, alarm tunggal yang clearable, atau spare part habis biasanya bukan emergency dan dapat dijadwalkan dalam kunjungan reguler.</p>

          <h2 id="response-tier" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Response Time Berdasarkan Tier</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Response time TSM dibedakan berdasarkan tier kontrak perawatan klien. Klien dengan kontrak aktif mendapat prioritas dispatch dan jaminan response time:</p>

          <table className="w-full border-collapse my-[1.5rem] text-[0.9rem]">
            <tbody><tr><th>Tier Klien</th><th>Phone Diagnostic</th><th>Teknisi On-Site (Jabodetabek)</th><th>Teknisi On-Site (Luar Jabodetabek)</th></tr>
            <tr><td>Premium Care</td><td>15 menit</td><td>4 jam</td><td>12 jam</td></tr>
            <tr><td>Standard Care</td><td>30 menit</td><td>8 jam</td><td>24 jam</td></tr>
            <tr><td>Basic Care</td><td>1 jam (hari kerja)</td><td>24 jam (hari kerja)</td><td>48 jam (hari kerja)</td></tr>
            <tr><td>Tanpa Kontrak</td><td>Best-effort</td><td>12–24 jam</td><td>24–72 jam</td></tr>
          </tbody></table>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk lokasi remote (kepulauan, offshore, daerah dengan akses transportasi terbatas), response time akan disesuaikan dengan availability transportasi. TSM dapat memanfaatkan tim teknisi lokal yang dilatih untuk klien-klien dengan banyak site.</p>

          <h2 id="proses-emergency" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Proses Emergency Response Step-by-Step</h2>

          <ol className="ml-[1.5rem] my-[1.05rem] list-decimal">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Call diterima</strong> — hotline 24/7 menerima call atau WhatsApp dari klien dengan informasi awal: lokasi, jenis sistem, gejala, kondisi visual</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Phone diagnostic (15–60 menit)</strong> — engineer senior melakukan tanya jawab terstruktur, meminta foto/video jika perlu, panduan tindakan stabilisasi awal</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Klasifikasi tingkat keparahan</strong> — menentukan apakah benar emergency, pre-emergency, atau dapat di-handle remote</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Dispatch decision</strong> — menentukan tim mana yang dispatch (junior engineer, senior, specialist), peralatan yang dibawa, dan estimated time of arrival (ETA)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Kunjungan on-site</strong> — diagnosa fisik, perbaikan tier-1 jika memungkinkan, atau pemasangan workaround sementara</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong>Resolution &amp; report</strong> — perbaikan permanen atau jadwal follow-up untuk perbaikan major. Service report ditandatangani klien dan di-archive</li>
          </ol>

          <h2 id="standby-parts" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Stok Standby Spare Part</h2>

          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">TSM memelihara stok spare part standar di workshop Bekasi yang dapat dikirim ekspres untuk emergency. Untuk klien Premium Care, sebagian spare part dapat dititipkan di lokasi klien sebagai "consignment stock" yang penagihannya hanya saat dipakai:</p>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Membran RO 4040, 8040 (multiple brand &amp; spec)</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Pre-filter cartridge (5μm, 1μm) berbagai ukuran</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">High-pressure pump multi-stage standby</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Sensor TDS, conductivity, pressure transmitter</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Solenoid valve dan motorized valve standar</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Antiscalant, biocide, CIP chemicals</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">Membrane housing seal kit</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]">VFD / soft starter standar 3–22 kW</li>
          </ul>

          <h2 id="industri-cocok" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Industri yang Paling Membutuhkan Layanan Darurat</h2>

          <ul className="ml-[1.5rem] my-[1.05rem] list-disc">
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/pltu">Pembangkit Listrik</Link></strong> — penalti dispatch dari PLN saat boiler trip mencapai miliaran per hari</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/hotel">Hotel Resort &amp; Pulau</Link></strong> — SWRO sebagai satu-satunya sumber air; kegagalan = guest evacuation</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/rs">Rumah Sakit</Link></strong> — sistem hemodialisis tidak boleh stop saat pasien sedang treatment</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/farmasi">Industri Farmasi</Link></strong> — quality compliance failure dapat mem-batalkan batch obat</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/maritim">Marine &amp; Offshore</Link></strong> — kapal di tengah laut tanpa air = situasi keselamatan</li>
            <li className="text-[0.94rem] leading-[1.75] text-text mb-[0.42rem]"><strong><Link to="/industri/manufaktur">F&amp;B Manufaktur</Link></strong> — production line yang berhenti = keterlambatan delivery dan reject</li>
          </ul>

          <h2 id="faq-darurat" className="font-condensed text-[1.85rem] font-black text-navy mt-[2.5rem] mb-[0.8rem] pt-[0.5rem]">Pertanyaan yang Sering Diajukan</h2>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa response time emergency call TSM?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Untuk klien dengan kontrak perawatan aktif: Tier Premium 4 jam on-site (24/7), Tier Standard 8 jam (24/7), Tier Basic 24 jam (hari kerja). Untuk klien tanpa kontrak: response best-effort, biasanya 12–48 jam tergantung lokasi dan availability tim. Phone diagnostic dimulai 30 menit setelah call diterima.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa saja yang termasuk emergency call?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Emergency call mencakup: sistem total stop, kebocoran besar, kontaminasi air output, kerusakan pompa, alarm berulang yang tidak teratasi, kualitas air output di luar spec, kebakaran/banjir di ruang water treatment, dan situasi force-majeure lainnya yang menghentikan produksi atau membahayakan keselamatan.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apakah TSM bisa servis sistem yang dipasang vendor lain?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Ya. Tim emergency TSM berpengalaman menangani sistem dari berbagai vendor (Veolia, GE, Suez, Aquaphor, lokal). Pendekatan kami: lakukan diagnostic dulu untuk mengidentifikasi root cause, kemudian opsi perbaikan disampaikan ke klien dengan estimasi biaya. Untuk sistem dengan komponen yang sulit didapat, TSM dapat merekomendasikan retrofit dengan part standar.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Berapa biaya emergency call tanpa kontrak perawatan?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Tarif emergency tanpa kontrak: call-out fee Rp 3,5–5 juta (Jabodetabek, di luar jam kerja), plus jasa teknisi Rp 250–500 ribu/jam (sesuai senioritas), plus biaya travel untuk lokasi luar kota. Spare part dibeli terpisah dengan harga ritel. Klien dengan kontrak Standard atau Premium mendapat call-out fee gratis dan diskon 30–50% untuk biaya teknisi.</p>

          <h3 className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Apa yang harus dilakukan saat sistem RO mengalami emergency?</h3>
          <p className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Langkah aman: (1) Aktifkan emergency stop pada panel control, (2) Isolasi sistem dari supply air dengan menutup valve inlet, (3) Buang tekanan sistem dengan membuka drain valve, (4) Catat parameter terakhir yang ditampilkan HMI dan kondisi alarm, (5) Foto kondisi  (kebocoran, kerusakan), (6) Hubungi hotline TSM dengan informasi lengkap. JANGAN coba reset alarm berulang tanpa diagnosis — bisa memperparah kerusakan.</p>

          <div style={{"marginTop":"2rem","padding":"2rem","background":"var(--ice)","borderRadius":"12px","borderLeft":"4px solid var(--accent)"}}>
            <h3 style={{"marginBottom":".75rem","color":"var(--navy)"}} className="text-[1.12rem] font-bold text-navy mt-[1.8rem] mb-[0.6rem]">Daftar Sebagai Klien Tier Premium</h3>
            <p style={{"marginBottom":"1.25rem","color":"var(--muted)","fontSize":".92rem"}} className="text-[0.97rem] leading-[1.88] text-text mb-[1.05rem]">Jaminan response 4 jam on-site dengan kontrak Premium Care. Kuota klien Premium dibatasi untuk menjaga kualitas response time.</p>
            <Link style={{"display":"inline-block","padding":".85rem 2rem","background":"var(--blue)","color":"#fff","borderRadius":"8px","fontWeight":"700","fontSize":".96rem","textDecoration":"none"}} to="/kontak">🚨 Diskusi Premium Care →</Link>
          </div>

        </div>
      </article>

      <aside className="art-sticky">
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Daftar Isi</h4>
          <ul className="flex flex-col">
            <li><Link href="#kapan-emergency">Kapan Butuh Emergency?</Link></li>
            <li><Link href="#response-tier">Response Time per Tier</Link></li>
            <li><Link href="#proses-emergency">Proses Response</Link></li>
            <li><Link href="#standby-parts">Standby Spare Part</Link></li>
            <li><Link href="#industri-cocok">Industri Critical</Link></li>
            <li><Link href="#faq-darurat">FAQ</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Layanan Lain</h4>
          <ul className="flex flex-col">
            <li><Link to="/layanan/maintenance">→ Kontrak Perawatan</Link></li>
            <li><Link to="/layanan/audit">→ Audit Kualitas Air</Link></li>
            <li><Link to="/layanan/instalasi">→ Instalasi &amp; Komisioning</Link></li>
            <li><Link to="/layanan/sertifikasi">→ Sertifikasi &amp; Compliance</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Produk Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/produk/membran">→ Membran RO</Link></li>
            <li><Link to="/produk/pompa">→ Pompa &amp; Pressure Vessel</Link></li>
            <li><Link to="/produk/instrumen">→ Instrumen &amp; Sensor</Link></li>
            <li><Link to="/produk/kimia">→ Antiscalant &amp; Biocide</Link></li>
          </ul>
        </div>
        <div className="bg-white border border-border rounded-[10px] p-[1.35rem] mb-[1.35rem] ">
          <h4>Artikel Terkait</h4>
          <ul className="flex flex-col">
            <li><Link to="/artikel/5-kesalahan-perawatan-ro">→ 5 Kesalahan Perawatan RO</Link></li>
            <li><Link to="/artikel/monitoring-kualitas-air-ro">→ Monitoring Kualitas Air</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>

    </>
  );
};

export default LayananDarurat;
