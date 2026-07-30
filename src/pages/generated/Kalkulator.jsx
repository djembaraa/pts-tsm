import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Ship } from 'lucide-react';

const Kalkulator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <style dangerouslySetInnerHTML={{ __html: `
/* ── KALKULATOR PAGE ── */
.calc-wrap{max-width:860px;margin:0 auto}
.calc-card{background:var(--white);border:1px solid var(--border);border-radius:16px;padding:2.5rem;box-shadow:var(--sh);margin-bottom:1.5rem}
.calc-steps{display:flex;align-items:center;gap:0;margin-bottom:2.5rem;overflow-x:auto}
.step{display:flex;align-items:center;gap:.5rem;flex-shrink:0}
.step-num{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:700;background:var(--border);color:var(--muted);transition:var(--t);flex-shrink:0}
.step.active .step-num{background:var(--blue);color:#fff}
.step.done .step-num{background:var(--accent);color:#fff}
.step-label{font-size:.72rem;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;white-space:nowrap}
.step.active .step-label{color:var(--blue)}
.step.done .step-label{color:var(--accent)}
.step-line{flex:1;height:2px;background:var(--border);min-width:24px;margin:0 .5rem}
.step-line.done{background:var(--accent)}

/* Form */
.calc-section{display:none}
.calc-section.active{display:block}
.calc-title{font-family:'Barlow Condensed',sans-serif;font-size:1.6rem;font-weight:900;color:var(--navy);margin-bottom:.4rem}
.calc-sub{font-size:.9rem;color:var(--muted);margin-bottom:1.8rem;line-height:1.6}

/* Industry grid */
.ind-select{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:.9rem;margin-bottom:1.5rem}
.ind-btn{border:2px solid var(--border);border-radius:10px;padding:1.2rem .9rem;text-align:center;cursor:pointer;transition:var(--t);background:var(--white)}
.ind-btn:hover{border-color:var(--blue);background:var(--ice)}
.ind-btn.selected{border-color:var(--blue);background:var(--ice)}
.ind-btn .ico{font-size:1.8rem;margin-bottom:.5rem}
.ind-btn .lbl{font-size:.78rem;font-weight:700;color:var(--navy);line-height:1.3}

/* Input fields */
.field-group{margin-bottom:1.4rem}
.field-group label{display:block;font-size:.82rem;font-weight:700;color:var(--navy);margin-bottom:.44rem}
.field-group .hint{font-size:.76rem;color:var(--muted);margin-bottom:.44rem}
.calc-input{width:100%;padding:.7rem 1rem;border:1.5px solid var(--border);border-radius:var(--r);font-family:'Barlow',sans-serif;font-size:.9rem;color:var(--text);transition:var(--t);background:var(--white)}
.calc-input:focus{outline:none;border-color:var(--blue);box-shadow:0 0 0 3px rgba(13,95,168,.08)}
.calc-select{width:100%;padding:.7rem 1rem;border:1.5px solid var(--border);border-radius:var(--r);font-family:'Barlow',sans-serif;font-size:.9rem;color:var(--text);background:var(--white);cursor:pointer;transition:var(--t)}
.calc-select:focus{outline:none;border-color:var(--blue)}
.field-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem}

/* Range slider */
.range-wrap{position:relative}
.calc-range{width:100%;-webkit-appearance:none;height:6px;border-radius:3px;background:var(--border);outline:none;margin:.5rem 0}
.calc-range::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;border-radius:50%;background:var(--blue);cursor:pointer;box-shadow:0 2px 8px rgba(13,95,168,.3)}
.range-val{font-size:.9rem;font-weight:700;color:var(--blue);margin-top:.3rem}

/* Navigation buttons */
.calc-nav{display:flex;justify-content:space-between;align-items:center;margin-top:2rem;padding-top:1.5rem;border-top:1px solid var(--border)}
.btn-prev{display:inline-flex;align-items:center;gap:.4rem;padding:.62rem 1.4rem;border:2px solid var(--border);border-radius:var(--r);font-size:.82rem;font-weight:700;color:var(--muted);cursor:pointer;background:none;font-family:'Barlow',sans-serif;transition:var(--t)}
.btn-prev:hover{border-color:var(--navy);color:var(--navy)}
.btn-next{display:inline-flex;align-items:center;gap:.4rem;padding:.62rem 1.75rem;background:var(--blue);border:none;border-radius:var(--r);font-size:.82rem;font-weight:700;color:#fff;cursor:pointer;font-family:'Barlow',sans-serif;transition:var(--t)}
.btn-next:hover{background:var(--navy);transform:translateY(-1px)}

/* Result */
.result-hero{background:linear-gradient(135deg,var(--navy),var(--blue));border-radius:12px;padding:2rem;color:#fff;margin-bottom:1.5rem;text-align:center}
.result-hero .rh-label{font-size:.7rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);margin-bottom:.5rem}
.result-hero .rh-capacity{font-family:'Barlow Condensed',sans-serif;font-size:3.5rem;font-weight:900;line-height:1;color:#fff;margin-bottom:.3rem}
.result-hero .rh-unit{font-size:1rem;opacity:.72}
.result-hero .rh-desc{font-size:.88rem;opacity:.8;margin-top:.8rem;line-height:1.6}

.result-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.5rem}
.result-item{background:var(--gray);border-radius:10px;padding:1.2rem;border:1px solid var(--border)}
.result-item .ri-label{font-size:.7rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-bottom:.3rem}
.result-item .ri-val{font-size:1.05rem;font-weight:700;color:var(--navy)}

.prod-rec{border:2px solid var(--accent);border-radius:12px;padding:1.5rem;margin-bottom:1.5rem;background:linear-gradient(135deg,rgba(0,180,216,.04),rgba(13,95,168,.04))}
.prod-rec .pr-tag{font-size:.68rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);margin-bottom:.5rem}
.prod-rec h3{font-family:'Barlow Condensed',sans-serif;font-size:1.3rem;font-weight:900;color:var(--navy);margin-bottom:.5rem}
.prod-rec p{font-size:.85rem;color:var(--muted);line-height:1.65;margin-bottom:1rem}
.prod-rec-actions{display:flex;gap:.8rem;flex-wrap:wrap}

.disclaimer{font-size:.76rem;color:var(--muted);line-height:1.65;padding:1rem 1.2rem;background:var(--gray);border-radius:8px;border-left:3px solid var(--border)}

/* Reset button */
.btn-reset{display:inline-flex;align-items:center;gap:.4rem;padding:.5rem 1.1rem;border:1.5px solid var(--border);border-radius:var(--r);font-size:.78rem;font-weight:600;color:var(--muted);cursor:pointer;background:none;font-family:'Barlow',sans-serif;transition:var(--t)}
.btn-reset:hover{border-color:var(--blue);color:var(--blue)}

@media(max-width:640px){
  .calc-card{padding:1.5rem}
  .field-row{grid-template-columns:1fr}
  .result-grid{grid-template-columns:1fr}
  .ind-select{grid-template-columns:repeat(auto-fill,minmax(130px,1fr))}
}

` }} />
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
