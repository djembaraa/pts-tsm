import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Ship } from 'lucide-react';


const Kalkulator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap">
      <Link to="/index">Beranda</Link> <span>›</span>
      <Link to="/layanan">Layanan</Link> <span>›</span>
      <span>Kalkulator Kebutuhan Air</span>
    </div>
    <h1>Kalkulator Kebutuhan Air</h1>
    <p>Temukan sistem water treatment yang tepat untuk bisnis Anda dalam 3 langkah mudah.</p>
  </div>
</div>
<section className="py-16">
  <div className="max-w-[1240px] mx-auto px-6">
    <div className="calc-wrap">

      {/*  Progress Steps  */}
      <div className="calc-steps">
        <div className="step active" id="step-ind">
          <div className="step-num">1</div>
          <div className="step-label">Jenis Industri</div>
        </div>
        <div className="step-line" id="line-1"></div>
        <div className="step" id="step-det">
          <div className="step-num">2</div>
          <div className="step-label">Detail Kebutuhan</div>
        </div>
        <div className="step-line" id="line-2"></div>
        <div className="step" id="step-res">
          <div className="step-num">3</div>
          <div className="step-label">Rekomendasi</div>
        </div>
      </div>

      <div className="calc-card">

        {/*  STEP 1: Pilih Industri  */}
        <div className="calc-section active" id="section-1">
          <div className="calc-title">Apa jenis bisnis Anda?</div>
          <div className="calc-sub">Pilih kategori industri yang paling sesuai untuk mendapatkan rekomendasi yang akurat.</div>

          <div className="ind-select">
            <div className="ind-btn"  data-ind="hotel">
              <div className="ico">🏨</div>
              <div className="lbl">Hotel &amp; Perhotelan</div>
            </div>
            <div className="ind-btn"  data-ind="rs">
              <div className="ico">⚕️</div>
              <div className="lbl">Rumah Sakit &amp; Klinik</div>
            </div>
            <div className="ind-btn"  data-ind="pabrik">
              <div className="ico"><Factory className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div>
              <div className="lbl">Pabrik &amp; Manufaktur</div>
            </div>
            <div className="ind-btn"  data-ind="farmasi">
              <div className="ico">💊</div>
              <div className="lbl">Farmasi &amp; Lab</div>
            </div>
            <div className="ind-btn"  data-ind="gedung">
              <div className="ico">🏢</div>
              <div className="lbl">Gedung &amp; Perkantoran</div>
            </div>
            <div className="ind-btn"  data-ind="agri">
              <div className="ico">🌾</div>
              <div className="lbl">Agrikultur &amp; Perkebunan</div>
            </div>
            <div className="ind-btn"  data-ind="pltu">
              <div className="ico">⚡</div>
              <div className="lbl">Pembangkit Listrik</div>
            </div>
            <div className="ind-btn"  data-ind="kapal">
              <div className="ico"><Ship className="w-[1.2em] h-[1.2em] inline-block -mt-1 mr-1 text-accent" /></div>
              <div className="lbl">Offshore &amp; Kapal</div>
            </div>
            <div className="ind-btn"  data-ind="lainnya">
              <div className="ico">🔧</div>
              <div className="lbl">Industri Lainnya</div>
            </div>
          </div>

          <div className="calc-nav">
            <span></span>
            <button className="btn-next" >Selanjutnya →</button>
          </div>
        </div>

        {/*  STEP 2: Detail  */}
        <div className="calc-section" id="section-2">
          <div className="calc-title" id="step2-title">Detail Kebutuhan</div>
          <div className="calc-sub" id="step2-sub">Isi informasi berikut untuk menghitung kapasitas yang dibutuhkan.</div>

          <div id="step2-fields"></div>

          <div className="field-group">
            <label>Sumber Air Baku</label>
            <select className="calc-select" id="source">
              <option value="pdam">Air PDAM / PAM</option>
              <option value="sumur">Air Sumur / Tanah</option>
              <option value="laut">Air Laut / Payau</option>
              <option value="sungai">Air Sungai / Danau</option>
            </select>
          </div>

          <div className="field-group">
            <label>Jam Operasional per Hari</label>
            <div className="range-wrap">
              <input type="range" className="calc-range" id="jam-ops" min="4" max="24" value="16"  />
              <div className="range-val"><span id="jam-ops-val">16</span> jam/hari</div>
            </div>
          </div>

          <div className="calc-nav">
            <button className="btn-prev" >← Kembali</button>
            <button className="btn-next" >Hitung Sekarang →</button>
          </div>
        </div>

        {/*  STEP 3: Hasil  */}
        <div className="calc-section" id="section-3">
          <div className="calc-title">Rekomendasi untuk Anda</div>
          <div className="calc-sub">Berdasarkan data yang Anda masukkan, berikut estimasi kebutuhan sistem water treatment Anda.</div>

          <div id="result-content"></div>

          <div className="disclaimer">
            ⚠️ <strong>Catatan:</strong> Hasil kalkulator ini bersifat estimasi awal. Kapasitas aktual dapat berbeda tergantung kualitas air baku, proses produksi, dan faktor teknis lainnya. Konsultasikan dengan tim ahli TSM untuk analisis lebih akurat dan penawaran resmi.
          </div>

          <div className="calc-nav">
            <button className="btn-reset" >🔄 Hitung Ulang</button>
            <Link className="btn-next" to="/kontak">📞 Minta Penawaran Resmi</Link>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Kalkulator;
