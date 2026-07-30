import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Factory, Ship } from 'lucide-react';

const industryConfig = {
  hotel: {
    title: 'Hotel & Perhotelan',
    sub: 'Kebutuhan air hotel dihitung berdasarkan jumlah kamar dan tingkat hunian rata-rata.',
    fields: [
      {id:'jumlah-kamar', label:'Jumlah Kamar', hint:'Total kamar yang tersedia', type:'number', placeholder:'Contoh: 150', unit:'kamar'},
      {id:'hunian', label:'Tingkat Hunian Rata-rata (%)', hint:'Persentase kamar yang terisi', type:'range', min:30, max:100, val:70, unit:'%'}
    ],
    calc: (f, jam) => {
      const kamar = parseInt(f['jumlah-kamar']) || 100;
      const hunian = parseInt(f['hunian']) || 70;
      const literPerKamar = 350;
      return { liter: kamar * (hunian/100) * literPerKamar, jam };
    },
    produk: 'RO Komersial & Gedung',
    produkLink: '/produk/ro-komersial',
    produkDesc: 'Sistem RO komersial TSM dirancang khusus untuk kebutuhan hotel dengan kapasitas fleksibel, dilengkapi panel kontrol otomatis dan monitoring real-time.'
  },
  rs: {
    title: 'Rumah Sakit & Klinik',
    sub: 'Kebutuhan air rumah sakit dihitung berdasarkan jumlah tempat tidur dan standar WHO.',
    fields: [
      {id:'tempat-tidur', label:'Jumlah Tempat Tidur', hint:'Total kapasitas tempat tidur pasien', type:'number', placeholder:'Contoh: 200', unit:'tempat tidur'},
      {id:'tipe-rs', label:'Tipe Fasilitas', type:'select', options:['Klinik Kecil','Rumah Sakit Umum','Rumah Sakit Khusus','RS dengan Lab Farmasi']}
    ],
    calc: (f, jam) => {
      const tt = parseInt(f['tempat-tidur']) || 100;
      const tipe = f['tipe-rs'] || 'Rumah Sakit Umum';
      const multiplier = tipe.includes('Farmasi') ? 800 : tipe.includes('Khusus') ? 600 : tipe.includes('Umum') ? 450 : 200;
      return { liter: tt * multiplier, jam };
    },
    produk: 'RO Industri + Sistem EDI',
    produkLink: '/produk/demi',
    produkDesc: 'Untuk rumah sakit, TSM merekomendasikan sistem RO dengan EDI (Electrodeionization) untuk menghasilkan air purified sesuai standar farmakope Indonesia dan regulasi BPOM.'
  },
  pabrik: {
    title: 'Pabrik & Manufaktur',
    sub: 'Kebutuhan air pabrik dihitung berdasarkan kapasitas produksi dan jenis proses industri.',
    fields: [
      {id:'kapasitas-prod', label:'Kapasitas Produksi per Hari', hint:'Dalam ton atau unit produksi', type:'number', placeholder:'Contoh: 50', unit:'ton/hari'},
      {id:'jenis-proses', label:'Jenis Proses', type:'select', options:['Proses Basah (tekstil, kertas)', 'Proses Kering (elektronik, otomotif)', 'Boiler & Steam', 'Cooling Tower', 'Campuran']}
    ],
    calc: (f, jam) => {
      const kapasitas = parseInt(f['kapasitas-prod']) || 50;
      const proses = f['jenis-proses'] || '';
      const literPerTon = proses.includes('Basah') ? 15000 : proses.includes('Boiler') ? 8000 : proses.includes('Cooling') ? 10000 : 5000;
      return { liter: kapasitas * literPerTon, jam };
    },
    produk: 'RO Industri Skala Besar',
    produkLink: '/produk/ro-industri',
    produkDesc: 'Sistem RO industri TSM tersedia dalam kapasitas 1.000 hingga 500.000 liter/hari, dengan teknologi otomasi penuh yang hemat energi hingga 40% dibanding sistem konvensional.'
  },
  farmasi: {
    title: 'Farmasi & Laboratorium',
    sub: 'Air untuk farmasi dan lab harus memenuhi standar Purified Water (PW) atau Water for Injection (WFI).',
    fields: [
      {id:'kebutuhan-harian', label:'Kebutuhan Air Murni per Hari (Liter)', hint:'Estimasi kebutuhan air berkualitas tinggi', type:'number', placeholder:'Contoh: 5000', unit:'liter/hari'},
      {id:'standar-air', label:'Standar Kualitas Air', type:'select', options:['Purified Water (USP/FI)', 'Water for Injection (WFI)', 'Ultra Pure Water (UPW)', 'Aqua Demineralisata']}
    ],
    calc: (f, jam) => {
      const kebutuhan = parseInt(f['kebutuhan-harian']) || 5000;
      return { liter: kebutuhan * 1.3, jam };
    },
    produk: 'Sistem EDI + RO Double Pass',
    produkLink: '/produk/demi',
    produkDesc: 'Untuk farmasi dan lab, TSM menyediakan sistem RO Double Pass + EDI yang menghasilkan air dengan resistivitas hingga 18.2 MΩ·cm, sesuai standar USP dan Farmakope Indonesia.'
  },
  gedung: {
    title: 'Gedung & Perkantoran',
    sub: 'Kebutuhan air gedung dihitung berdasarkan jumlah penghuni dan fasilitas yang tersedia.',
    fields: [
      {id:'jumlah-penghuni', label:'Jumlah Penghuni / Karyawan', hint:'Rata-rata orang yang ada di gedung per hari', type:'number', placeholder:'Contoh: 500', unit:'orang'},
      {id:'fasilitas', label:'Fasilitas Tambahan', type:'select', options:['Kantor Standar','Kantor + Kantin','Apartemen / Hunian','Mall / Pusat Perbelanjaan']}
    ],
    calc: (f, jam) => {
      const penghuni = parseInt(f['jumlah-penghuni']) || 200;
      const fasilitas = f['fasilitas'] || '';
      const literPerOrang = fasilitas.includes('Mall') ? 50 : fasilitas.includes('Apartemen') ? 150 : fasilitas.includes('Kantin') ? 60 : 40;
      return { liter: penghuni * literPerOrang, jam };
    },
    produk: 'RO Komersial & Gedung',
    produkLink: '/produk/ro-komersial',
    produkDesc: 'Sistem RO komersial TSM untuk gedung hadir dalam paket kompak yang hemat ruang, mudah dirawat, dan dilengkapi filter sedimen, karbon, dan UV untuk air minum berkualitas tinggi.'
  },
  agri: {
    title: 'Agrikultur & Perkebunan',
    sub: 'Kebutuhan air irigasi dan pertanian dihitung berdasarkan luas lahan dan jenis tanaman.',
    fields: [
      {id:'luas-lahan', label:'Luas Lahan (Hektar)', hint:'Total area yang membutuhkan pengairan', type:'number', placeholder:'Contoh: 10', unit:'hektar'},
      {id:'jenis-tanaman', label:'Jenis Penggunaan', type:'select', options:['Irigasi Tanaman Pangan','Greenhouse / Hidroponik','Peternakan','Pengolahan Hasil Pertanian']}
    ],
    calc: (f, jam) => {
      const lahan = parseInt(f['luas-lahan']) || 5;
      const jenis = f['jenis-tanaman'] || '';
      const literPerHektar = jenis.includes('Hidroponik') ? 50000 : jenis.includes('Peternakan') ? 30000 : 80000;
      return { liter: lahan * literPerHektar, jam };
    },
    produk: 'Sistem RO Mobile / Kontainer',
    produkLink: '/produk/ro-mobile',
    produkDesc: 'Untuk area pertanian terpencil, sistem RO dalam kontainer dari TSM menawarkan solusi siap pakai yang mudah dipindahkan dan tahan terhadap kondisi lingkungan ekstrem.'
  },
  pltu: {
    title: 'Pembangkit Listrik (PLTU)',
    sub: 'Air umpan boiler (boiler feed water) membutuhkan air sangat murni dengan konduktivitas mendekati nol.',
    fields: [
      {id:'kapasitas-pltu', label:'Kapasitas Pembangkit (MW)', hint:'Total kapasitas terpasang', type:'number', placeholder:'Contoh: 100', unit:'MW'},
      {id:'tekanan-boiler', label:'Tekanan Boiler', type:'select', options:['Low Pressure (<30 bar)', 'Medium Pressure (30-60 bar)', 'High Pressure (>60 bar)']}
    ],
    calc: (f, jam) => {
      const mw = parseInt(f['kapasitas-pltu']) || 50;
      return { liter: mw * 50000, jam };
    },
    produk: 'Demineralisasi / EDI Industri',
    produkLink: '/produk/demi',
    produkDesc: 'Untuk pembangkit listrik, TSM menyediakan sistem demineralisasi kapasitas besar dengan teknologi ion exchange dan EDI untuk menghasilkan air umpan boiler dengan konduktivitas <0.1 μS/cm.'
  },
  kapal: {
    title: 'Offshore & Kapal',
    sub: 'Kebutuhan air bersih di laut menggunakan teknologi desalinasi air laut.',
    fields: [
      {id:'jumlah-awak', label:'Jumlah Awak / Personel', hint:'Total orang di atas kapal / platform', type:'number', placeholder:'Contoh: 50', unit:'orang'},
      {id:'tipe-kapal', label:'Tipe Vessel', type:'select', options:['Kapal Kargo / Tanker','Kapal Penumpang / Ferry','Platform Offshore','Kapal Riset / Survei']}
    ],
    calc: (f, jam) => {
      const awak = parseInt(f['jumlah-awak']) || 30;
      const tipe = f['tipe-kapal'] || '';
      const literPerOrang = tipe.includes('Penumpang') ? 200 : 150;
      return { liter: awak * literPerOrang, jam };
    },
    produk: 'Desalinasi Air Laut (SWRO)',
    produkLink: '/produk/desalinasi',
    produkDesc: 'TSM menyediakan unit SWRO (Sea Water Reverse Osmosis) kompak untuk kapal dan platform offshore, dengan kapasitas 500 - 50.000 liter/hari dan recovery rate hingga 45%.'
  },
  lainnya: {
    title: 'Industri Lainnya',
    sub: 'Masukkan estimasi kebutuhan air harian Anda secara langsung.',
    fields: [
      {id:'kebutuhan-langsung', label:'Estimasi Kebutuhan Air per Hari (Liter)', hint:'Perkiraan total kebutuhan air bersih', type:'number', placeholder:'Contoh: 10000', unit:'liter/hari'},
      {id:'kualitas', label:'Kualitas Air yang Dibutuhkan', type:'select', options:['Air Bersih Standar','Air Proses Industri','Air Murni (Low TDS)','Air Ultra Murni']}
    ],
    calc: (f, jam) => {
      const kebutuhan = parseInt(f['kebutuhan-langsung']) || 5000;
      return { liter: kebutuhan, jam };
    },
    produk: 'Konsultasi Sistem Custom',
    produkLink: '/kontak',
    produkDesc: 'Tim ahli TSM siap merancang solusi water treatment yang disesuaikan dengan kebutuhan spesifik industri Anda, mulai dari survei lapangan hingga commissioning sistem.'
  }
};

const formatAngka = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const KalkulatorPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [step, setStep] = useState(1);
  const [selectedIndustry, setSelectedIndustry] = useState('');
  
  // Step 2 Form State
  const [formValues, setFormValues] = useState({});
  const [source, setSource] = useState('pdam');
  const [jamOps, setJamOps] = useState(16);

  // Step 3 Result State
  const [resultData, setResultData] = useState(null);

  const handleIndustrySelect = (ind) => {
    setSelectedIndustry(ind);
  };

  const goToStep = (targetStep) => {
    if (targetStep === 2 && !selectedIndustry) {
      alert('Silakan pilih jenis industri terlebih dahulu.');
      return;
    }
    
    // Initialize form defaults when going to step 2
    if (targetStep === 2 && step === 1) {
      const defaults = {};
      industryConfig[selectedIndustry].fields.forEach(f => {
        if (f.type === 'range') defaults[f.id] = f.val;
        if (f.type === 'select') defaults[f.id] = f.options[0];
        if (f.type === 'number') defaults[f.id] = '';
      });
      setFormValues(defaults);
    }

    setStep(targetStep);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleFieldChange = (id, value) => {
    setFormValues(prev => ({ ...prev, [id]: value }));
  };

  const calculate = () => {
    const cfg = industryConfig[selectedIndustry];
    const res = cfg.calc(formValues, jamOps);
    
    const totalLiter = Math.round(res.liter);
    const lph = Math.round(totalLiter / jamOps);
    const m3perhari = (totalLiter / 1000).toFixed(1);
    const gpd = Math.round(totalLiter * 0.264172);

    let kapasitasLabel, kapasitasSistem;
    if (totalLiter < 5000) {
      kapasitasSistem = totalLiter + ' L/hari';
      kapasitasLabel = 'Skala Kecil';
    } else if (totalLiter < 50000) {
      kapasitasSistem = m3perhari + ' m³/hari';
      kapasitasLabel = 'Skala Menengah';
    } else {
      kapasitasSistem = m3perhari + ' m³/hari';
      kapasitasLabel = 'Skala Besar';
    }

    const sourceLabel = {pdam:'Air PDAM', sumur:'Air Sumur', laut:'Air Laut/Payau', sungai:'Air Sungai'}[source];

    setResultData({
      kapasitasSistem, kapasitasLabel, lph, totalLiter, gpd, sourceLabel, cfg
    });
    
    goToStep(3);
  };

  const resetCalc = () => {
    setSelectedIndustry('');
    setResultData(null);
    goToStep(1);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
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

.calc-title{font-family:'Barlow Condensed',sans-serif;font-size:1.6rem;font-weight:900;color:var(--navy);margin-bottom:.4rem}
.calc-sub{font-size:.9rem;color:var(--muted);margin-bottom:1.8rem;line-height:1.6}

.ind-select{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:.9rem;margin-bottom:1.5rem}
.ind-btn{border:2px solid var(--border);border-radius:10px;padding:1.2rem .9rem;text-align:center;cursor:pointer;transition:var(--t);background:var(--white)}
.ind-btn:hover{border-color:var(--blue);background:var(--ice)}
.ind-btn.selected{border-color:var(--blue);background:var(--ice)}
.ind-btn .ico{font-size:1.8rem;margin-bottom:.5rem}
.ind-btn .lbl{font-size:.78rem;font-weight:700;color:var(--navy);line-height:1.3}

.field-group{margin-bottom:1.4rem}
.field-group label{display:block;font-size:.82rem;font-weight:700;color:var(--navy);margin-bottom:.44rem}
.field-group .hint{font-size:.76rem;color:var(--muted);margin-bottom:.44rem}
.calc-input{width:100%;padding:.7rem 1rem;border:1.5px solid var(--border);border-radius:var(--r);font-family:'Barlow',sans-serif;font-size:.9rem;color:var(--text);transition:var(--t);background:var(--white)}
.calc-input:focus{outline:none;border-color:var(--blue);box-shadow:0 0 0 3px rgba(13,95,168,.08)}
.calc-select{width:100%;padding:.7rem 1rem;border:1.5px solid var(--border);border-radius:var(--r);font-family:'Barlow',sans-serif;font-size:.9rem;color:var(--text);background:var(--white);cursor:pointer;transition:var(--t)}
.calc-select:focus{outline:none;border-color:var(--blue)}

.range-wrap{position:relative}
.calc-range{width:100%;-webkit-appearance:none;height:6px;border-radius:3px;background:var(--border);outline:none;margin:.5rem 0}
.calc-range::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;border-radius:50%;background:var(--blue);cursor:pointer;box-shadow:0 2px 8px rgba(13,95,168,.3)}
.range-val{font-size:.9rem;font-weight:700;color:var(--blue);margin-top:.3rem}

.calc-nav{display:flex;justify-content:space-between;align-items:center;margin-top:2rem;padding-top:1.5rem;border-top:1px solid var(--border)}
.btn-prev{display:inline-flex;align-items:center;gap:.4rem;padding:.62rem 1.4rem;border:2px solid var(--border);border-radius:var(--r);font-size:.82rem;font-weight:700;color:var(--muted);cursor:pointer;background:none;font-family:'Barlow',sans-serif;transition:var(--t)}
.btn-prev:hover{border-color:var(--navy);color:var(--navy)}
.btn-next{display:inline-flex;align-items:center;gap:.4rem;padding:.62rem 1.75rem;background:var(--blue);border:none;border-radius:var(--r);font-size:.82rem;font-weight:700;color:#fff;cursor:pointer;font-family:'Barlow',sans-serif;transition:var(--t)}
.btn-next:hover{background:var(--navy);transform:translateY(-1px)}

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
.btn-blue{display:inline-flex;align-items:center;padding:.52rem 1.2rem;border:2px solid var(--blue);color:var(--blue);font-weight:700;border-radius:var(--r);font-size:.8rem;transition:var(--t)}
.btn-blue:hover{background:var(--blue);color:#fff}

.disclaimer{font-size:.76rem;color:var(--muted);line-height:1.65;padding:1rem 1.2rem;background:var(--gray);border-radius:8px;border-left:3px solid var(--border)}
.btn-reset{display:inline-flex;align-items:center;gap:.4rem;padding:.5rem 1.1rem;border:1.5px solid var(--border);border-radius:var(--r);font-size:.78rem;font-weight:600;color:var(--muted);cursor:pointer;background:none;font-family:'Barlow',sans-serif;transition:var(--t)}
.btn-reset:hover{border-color:var(--blue);color:var(--blue)}
      `}} />

      <div className="page-hero bg-gradient-to-br from-navy to-blue text-white py-[3rem] pb-[2.5rem] relative overflow-hidden">
        <div className="container max-w-[1240px] mx-auto px-6">
          <div className="breadcrumb text-[0.72rem] opacity-55 mb-[0.65rem] flex items-center gap-[0.42rem] flex-wrap">
            <Link to="/">Beranda</Link> <span>›</span>
            <Link to="/layanan">Layanan</Link> <span>›</span>
            <span>Kalkulator Kebutuhan Air</span>
          </div>
          <h1 className="font-condensed text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold leading-[1.1] mb-[0.65rem]">Kalkulator Kebutuhan Air</h1>
          <p className="text-[0.9rem] opacity-80 max-w-[540px] leading-[1.72]">Temukan sistem water treatment yang tepat untuk bisnis Anda dalam 3 langkah mudah.</p>
        </div>
      </div>

      <section className="section py-16">
        <div className="container max-w-[1240px] mx-auto px-6">
          <div className="calc-wrap">
            
            <div className="calc-steps">
              <div className={`step ${step >= 1 ? (step > 1 ? 'done' : 'active') : ''}`}>
                <div className="step-num">1</div>
                <div className="step-label">Jenis Industri</div>
              </div>
              <div className={`step-line ${step > 1 ? 'done' : ''}`}></div>
              <div className={`step ${step >= 2 ? (step > 2 ? 'done' : 'active') : ''}`}>
                <div className="step-num">2</div>
                <div className="step-label">Detail Kebutuhan</div>
              </div>
              <div className={`step-line ${step > 2 ? 'done' : ''}`}></div>
              <div className={`step ${step >= 3 ? 'active' : ''}`}>
                <div className="step-num">3</div>
                <div className="step-label">Rekomendasi</div>
              </div>
            </div>

            <div className="calc-card">
              
              {step === 1 && (
                <div className="calc-section active">
                  <div className="calc-title">Apa jenis bisnis Anda?</div>
                  <div className="calc-sub">Pilih kategori industri yang paling sesuai untuk mendapatkan rekomendasi yang akurat.</div>
                  <div className="ind-select">
                    {Object.entries(industryConfig).map(([key, cfg]) => (
                      <div key={key} className={`ind-btn ${selectedIndustry === key ? 'selected' : ''}`} onClick={() => handleIndustrySelect(key)}>
                        <div className="ico">{key === 'pabrik' ? <Factory className="w-[1.2em] h-[1.2em] inline-block -mt-1 mx-auto text-accent" /> : key === 'kapal' ? <Ship className="w-[1.2em] h-[1.2em] inline-block -mt-1 mx-auto text-accent" /> : 
                          {hotel:'🏨',rs:'⚕️',farmasi:'💊',gedung:'🏢',agri:'🌾',pltu:'⚡',lainnya:'🔧'}[key]}</div>
                        <div className="lbl">{cfg.title}</div>
                      </div>
                    ))}
                  </div>
                  <div className="calc-nav">
                    <span></span>
                    <button className="btn-next" onClick={() => goToStep(2)}>Selanjutnya →</button>
                  </div>
                </div>
              )}

              {step === 2 && selectedIndustry && (
                <div className="calc-section active">
                  <div className="calc-title">{industryConfig[selectedIndustry].title}</div>
                  <div className="calc-sub">{industryConfig[selectedIndustry].sub}</div>
                  
                  {industryConfig[selectedIndustry].fields.map(f => (
                    <div className="field-group" key={f.id}>
                      <label>{f.label}</label>
                      {f.hint && <div className="hint">{f.hint}</div>}
                      
                      {f.type === 'number' && (
                        <input type="number" className="calc-input" placeholder={f.placeholder} min="1" 
                               value={formValues[f.id] || ''} onChange={(e) => handleFieldChange(f.id, e.target.value)} />
                      )}
                      
                      {f.type === 'select' && (
                        <select className="calc-select" value={formValues[f.id] || f.options[0]} onChange={(e) => handleFieldChange(f.id, e.target.value)}>
                          {f.options.map(o => <option key={o} value={o}>{o}</option>)}
                        </select>
                      )}
                      
                      {f.type === 'range' && (
                        <div className="range-wrap">
                          <input type="range" className="calc-range" min={f.min} max={f.max} 
                                 value={formValues[f.id] || f.val} onChange={(e) => handleFieldChange(f.id, e.target.value)} />
                          <div className="range-val"><span>{formValues[f.id] || f.val}</span> {f.unit}</div>
                        </div>
                      )}
                    </div>
                  ))}

                  <div className="field-group">
                    <label>Sumber Air Baku</label>
                    <select className="calc-select" value={source} onChange={(e) => setSource(e.target.value)}>
                      <option value="pdam">Air PDAM / PAM</option>
                      <option value="sumur">Air Sumur / Tanah</option>
                      <option value="laut">Air Laut / Payau</option>
                      <option value="sungai">Air Sungai / Danau</option>
                    </select>
                  </div>

                  <div className="field-group">
                    <label>Jam Operasional per Hari</label>
                    <div className="range-wrap">
                      <input type="range" className="calc-range" min="4" max="24" value={jamOps} onChange={(e) => setJamOps(parseInt(e.target.value))} />
                      <div className="range-val"><span>{jamOps}</span> jam/hari</div>
                    </div>
                  </div>

                  <div className="calc-nav">
                    <button className="btn-prev" onClick={() => goToStep(1)}>← Kembali</button>
                    <button className="btn-next" onClick={calculate}>Hitung Sekarang →</button>
                  </div>
                </div>
              )}

              {step === 3 && resultData && (
                <div className="calc-section active">
                  <div className="calc-title">Rekomendasi untuk Anda</div>
                  <div className="calc-sub">Berdasarkan data yang Anda masukkan, berikut estimasi kebutuhan sistem water treatment Anda.</div>
                  
                  <div className="result-hero">
                    <div className="rh-label">Estimasi Kapasitas Sistem yang Dibutuhkan</div>
                    <div className="rh-capacity">{resultData.kapasitasSistem}</div>
                    <div className="rh-unit">({resultData.kapasitasLabel} — {formatAngka(resultData.lph)} liter/jam)</div>
                    <div className="rh-desc">Berdasarkan {jamOps} jam operasional/hari dengan sumber {resultData.sourceLabel}</div>
                  </div>
                  
                  <div className="result-grid">
                    <div className="result-item"><div className="ri-label">Total Kebutuhan Air/Hari</div><div className="ri-val">{formatAngka(resultData.totalLiter)} Liter</div></div>
                    <div className="result-item"><div className="ri-label">Kapasitas Produksi/Jam</div><div className="ri-val">{formatAngka(resultData.lph)} Liter/jam</div></div>
                    <div className="result-item"><div className="ri-label">Setara GPD</div><div className="ri-val">{formatAngka(resultData.gpd)} GPD</div></div>
                    <div className="result-item"><div className="ri-label">Sumber Air Baku</div><div className="ri-val">{resultData.sourceLabel}</div></div>
                  </div>

                  <div className="prod-rec">
                    <div className="pr-tag">✅ Rekomendasi Produk TSM</div>
                    <h3>{resultData.cfg.produk}</h3>
                    <p>{resultData.cfg.produkDesc}</p>
                    <div className="prod-rec-actions">
                      <Link to={resultData.cfg.produkLink} className="btn-next" style={{fontSize:'.8rem',padding:'.52rem 1.2rem'}}>🔍 Lihat Produk</Link>
                      <Link to="/kontak" className="btn-blue">💬 Minta Penawaran</Link>
                    </div>
                  </div>

                  <div className="disclaimer">
                    ⚠️ <strong>Catatan:</strong> Hasil kalkulator ini bersifat estimasi awal. Kapasitas aktual dapat berbeda tergantung kualitas air baku, proses produksi, dan faktor teknis lainnya. Konsultasikan dengan tim ahli TSM untuk analisis lebih akurat dan penawaran resmi.
                  </div>

                  <div className="calc-nav">
                    <button className="btn-reset" onClick={resetCalc}>🔄 Hitung Ulang</button>
                    <Link className="btn-next" to="/kontak">📞 Minta Penawaran Resmi</Link>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KalkulatorPage;
