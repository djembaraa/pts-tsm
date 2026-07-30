
var selectedIndustry = '';

var industryConfig = {
  hotel: {
    title: 'Hotel & Perhotelan',
    sub: 'Kebutuhan air hotel dihitung berdasarkan jumlah kamar dan tingkat hunian rata-rata.',
    fields: [
      {id:'jumlah-kamar', label:'Jumlah Kamar', hint:'Total kamar yang tersedia', type:'number', placeholder:'Contoh: 150', unit:'kamar'},
      {id:'hunian', label:'Tingkat Hunian Rata-rata (%)', hint:'Persentase kamar yang terisi', type:'range', min:30, max:100, val:70, unit:'%'}
    ],
    calc: function(f, jam) {
      var kamar = parseInt(f['jumlah-kamar']) || 100;
      var hunian = parseInt(f['hunian']) || 70;
      var literPerKamar = 350;
      var totalLiter = kamar * (hunian/100) * literPerKamar;
      return { liter: totalLiter, jam: jam };
    },
    produk: 'RO Komersial & Gedung',
    produkLink: 'produk-ro-komersial.html',
    produkDesc: 'Sistem RO komersial TSM dirancang khusus untuk kebutuhan hotel dengan kapasitas fleksibel, dilengkapi panel kontrol otomatis dan monitoring real-time.'
  },
  rs: {
    title: 'Rumah Sakit & Klinik',
    sub: 'Kebutuhan air rumah sakit dihitung berdasarkan jumlah tempat tidur dan standar WHO.',
    fields: [
      {id:'tempat-tidur', label:'Jumlah Tempat Tidur', hint:'Total kapasitas tempat tidur pasien', type:'number', placeholder:'Contoh: 200', unit:'tempat tidur'},
      {id:'tipe-rs', label:'Tipe Fasilitas', type:'select', options:['Klinik Kecil','Rumah Sakit Umum','Rumah Sakit Khusus','RS dengan Lab Farmasi']}
    ],
    calc: function(f, jam) {
      var tt = parseInt(f['tempat-tidur']) || 100;
      var tipe = f['tipe-rs'] || 'Rumah Sakit Umum';
      var multiplier = tipe.includes('Farmasi') ? 800 : tipe.includes('Khusus') ? 600 : tipe.includes('Umum') ? 450 : 200;
      return { liter: tt * multiplier, jam: jam };
    },
    produk: 'RO Industri + Sistem EDI',
    produkLink: 'produk-demi.html',
    produkDesc: 'Untuk rumah sakit, TSM merekomendasikan sistem RO dengan EDI (Electrodeionization) untuk menghasilkan air purified sesuai standar farmakope Indonesia dan regulasi BPOM.'
  },
  pabrik: {
    title: 'Pabrik & Manufaktur',
    sub: 'Kebutuhan air pabrik dihitung berdasarkan kapasitas produksi dan jenis proses industri.',
    fields: [
      {id:'kapasitas-prod', label:'Kapasitas Produksi per Hari', hint:'Dalam ton atau unit produksi', type:'number', placeholder:'Contoh: 50', unit:'ton/hari'},
      {id:'jenis-proses', label:'Jenis Proses', type:'select', options:['Proses Basah (tekstil, kertas)', 'Proses Kering (elektronik, otomotif)', 'Boiler & Steam', 'Cooling Tower', 'Campuran']}
    ],
    calc: function(f, jam) {
      var kapasitas = parseInt(f['kapasitas-prod']) || 50;
      var proses = f['jenis-proses'] || '';
      var literPerTon = proses.includes('Basah') ? 15000 : proses.includes('Boiler') ? 8000 : proses.includes('Cooling') ? 10000 : 5000;
      return { liter: kapasitas * literPerTon, jam: jam };
    },
    produk: 'RO Industri Skala Besar',
    produkLink: 'produk-ro-industri.html',
    produkDesc: 'Sistem RO industri TSM tersedia dalam kapasitas 1.000 hingga 500.000 liter/hari, dengan teknologi otomasi penuh yang hemat energi hingga 40% dibanding sistem konvensional.'
  },
  farmasi: {
    title: 'Farmasi & Laboratorium',
    sub: 'Air untuk farmasi dan lab harus memenuhi standar Purified Water (PW) atau Water for Injection (WFI).',
    fields: [
      {id:'kebutuhan-harian', label:'Kebutuhan Air Murni per Hari (Liter)', hint:'Estimasi kebutuhan air berkualitas tinggi', type:'number', placeholder:'Contoh: 5000', unit:'liter/hari'},
      {id:'standar-air', label:'Standar Kualitas Air', type:'select', options:['Purified Water (USP/FI)', 'Water for Injection (WFI)', 'Ultra Pure Water (UPW)', 'Aqua Demineralisata']}
    ],
    calc: function(f, jam) {
      var kebutuhan = parseInt(f['kebutuhan-harian']) || 5000;
      return { liter: kebutuhan * 1.3, jam: jam }; // +30% safety factor
    },
    produk: 'Sistem EDI + RO Double Pass',
    produkLink: 'produk-demi.html',
    produkDesc: 'Untuk farmasi dan lab, TSM menyediakan sistem RO Double Pass + EDI yang menghasilkan air dengan resistivitas hingga 18.2 MÎ©Â·cm, sesuai standar USP dan Farmakope Indonesia.'
  },
  gedung: {
    title: 'Gedung & Perkantoran',
    sub: 'Kebutuhan air gedung dihitung berdasarkan jumlah penghuni dan fasilitas yang tersedia.',
    fields: [
      {id:'jumlah-penghuni', label:'Jumlah Penghuni / Karyawan', hint:'Rata-rata orang yang ada di gedung per hari', type:'number', placeholder:'Contoh: 500', unit:'orang'},
      {id:'fasilitas', label:'Fasilitas Tambahan', type:'select', options:['Kantor Standar','Kantor + Kantin','Apartemen / Hunian','Mall / Pusat Perbelanjaan']}
    ],
    calc: function(f, jam) {
      var penghuni = parseInt(f['jumlah-penghuni']) || 200;
      var fasilitas = f['fasilitas'] || '';
      var literPerOrang = fasilitas.includes('Mall') ? 50 : fasilitas.includes('Apartemen') ? 150 : fasilitas.includes('Kantin') ? 60 : 40;
      return { liter: penghuni * literPerOrang, jam: jam };
    },
    produk: 'RO Komersial & Gedung',
    produkLink: 'produk-ro-komersial.html',
    produkDesc: 'Sistem RO komersial TSM untuk gedung hadir dalam paket kompak yang hemat ruang, mudah dirawat, dan dilengkapi filter sedimen, karbon, dan UV untuk air minum berkualitas tinggi.'
  },
  agri: {
    title: 'Agrikultur & Perkebunan',
    sub: 'Kebutuhan air irigasi dan pertanian dihitung berdasarkan luas lahan dan jenis tanaman.',
    fields: [
      {id:'luas-lahan', label:'Luas Lahan (Hektar)', hint:'Total area yang membutuhkan pengairan', type:'number', placeholder:'Contoh: 10', unit:'hektar'},
      {id:'jenis-tanaman', label:'Jenis Penggunaan', type:'select', options:['Irigasi Tanaman Pangan','Greenhouse / Hidroponik','Peternakan','Pengolahan Hasil Pertanian']}
    ],
    calc: function(f, jam) {
      var lahan = parseInt(f['luas-lahan']) || 5;
      var jenis = f['jenis-tanaman'] || '';
      var literPerHektar = jenis.includes('Hidroponik') ? 50000 : jenis.includes('Peternakan') ? 30000 : 80000;
      return { liter: lahan * literPerHektar, jam: jam };
    },
    produk: 'Sistem Filtrasi & RO Mobile',
    produkLink: 'produk-ro-mobile.html',
    produkDesc: 'Untuk kebutuhan agrikultur, TSM menyediakan sistem filtrasi mobile yang fleksibel dan tahan kondisi lapangan, ideal untuk lokasi terpencil dengan sumber air terbatas.'
  },
  pltu: {
    title: 'Pembangkit Listrik',
    sub: 'Air umpan boiler dan cooling tower memerlukan kualitas air yang sangat tinggi.',
    fields: [
      {id:'kapasitas-mw', label:'Kapasitas Pembangkit (MW)', hint:'Total daya listrik yang dihasilkan', type:'number', placeholder:'Contoh: 100', unit:'MW'},
      {id:'tipe-pltu', label:'Tipe Pembangkit', type:'select', options:['PLTU Batubara','PLTG Gas','PLTP Panas Bumi','PLTD Diesel']}
    ],
    calc: function(f, jam) {
      var mw = parseInt(f['kapasitas-mw']) || 50;
      return { liter: mw * 50000, jam: jam };
    },
    produk: 'Demineralisasi / EDI Industri',
    produkLink: 'produk-demi.html',
    produkDesc: 'Untuk pembangkit listrik, TSM menyediakan sistem demineralisasi kapasitas besar dengan teknologi ion exchange dan EDI untuk menghasilkan air umpan boiler dengan konduktivitas <0.1 ÂµS/cm.'
  },
  kapal: {
    title: 'Offshore & Kapal',
    sub: 'Kebutuhan air bersih di laut menggunakan teknologi desalinasi air laut.',
    fields: [
      {id:'jumlah-awak', label:'Jumlah Awak / Personel', hint:'Total orang di atas kapal / platform', type:'number', placeholder:'Contoh: 50', unit:'orang'},
      {id:'tipe-kapal', label:'Tipe Vessel', type:'select', options:['Kapal Kargo / Tanker','Kapal Penumpang / Ferry','Platform Offshore','Kapal Riset / Survei']}
    ],
    calc: function(f, jam) {
      var awak = parseInt(f['jumlah-awak']) || 30;
      var tipe = f['tipe-kapal'] || '';
      var literPerOrang = tipe.includes('Penumpang') ? 200 : 150;
      return { liter: awak * literPerOrang, jam: jam };
    },
    produk: 'Desalinasi Air Laut (SWRO)',
    produkLink: 'produk-desalinasi.html',
    produkDesc: 'TSM menyediakan unit SWRO (Sea Water Reverse Osmosis) kompak untuk kapal dan platform offshore, dengan kapasitas 500 â€“ 50.000 liter/hari dan recovery rate hingga 45%.'
  },
  lainnya: {
    title: 'Industri Lainnya',
    sub: 'Masukkan estimasi kebutuhan air harian Anda secara langsung.',
    fields: [
      {id:'kebutuhan-langsung', label:'Estimasi Kebutuhan Air per Hari (Liter)', hint:'Perkiraan total kebutuhan air bersih', type:'number', placeholder:'Contoh: 10000', unit:'liter/hari'},
      {id:'kualitas', label:'Kualitas Air yang Dibutuhkan', type:'select', options:['Air Bersih Standar','Air Proses Industri','Air Murni (Low TDS)','Air Ultra Murni']}
    ],
    calc: function(f, jam) {
      var kebutuhan = parseInt(f['kebutuhan-langsung']) || 5000;
      return { liter: kebutuhan, jam: jam };
    },
    produk: 'Konsultasi Sistem Custom',
    produkLink: 'kontak.html',
    produkDesc: 'Tim ahli TSM siap merancang solusi water treatment yang disesuaikan dengan kebutuhan spesifik industri Anda, mulai dari survei lapangan hingga commissioning sistem.'
  }
};

function selectIndustry(el, ind) {
  document.querySelectorAll('.ind-btn').forEach(function(b){ b.classList.remove('selected'); });
  el.classList.add('selected');
  selectedIndustry = ind;
}

function goStep(step) {
  if (step === 2 && !selectedIndustry) {
    alert('Silakan pilih jenis industri terlebih dahulu.');
    return;
  }
  // Update steps UI
  [1,2,3].forEach(function(i) {
    var s = document.getElementById('section-' + i);
    s.classList.remove('active');
    var stepEl = document.getElementById('step-' + ['ind','det','res'][i-1]);
    stepEl.classList.remove('active','done');
    if (i < step) stepEl.classList.add('done');
    else if (i === step) stepEl.classList.add('active');
  });
  if (step >= 2) document.getElementById('line-1').classList.add('done');
  else document.getElementById('line-1').classList.remove('done');
  if (step >= 3) document.getElementById('line-2').classList.add('done');
  else document.getElementById('line-2').classList.remove('done');

  document.getElementById('section-' + step).classList.add('active');

  if (step === 2) buildStep2();
  window.scrollTo({top: 300, behavior: 'smooth'});
}

function buildStep2() {
  var cfg = industryConfig[selectedIndustry];
  document.getElementById('step2-title').textContent = cfg.title;
  document.getElementById('step2-sub').textContent = cfg.sub;
  var html = '';
  cfg.fields.forEach(function(f) {
    html += '<div class="field-group">';
    html += '<label>' + f.label + '</label>';
    if (f.hint) html += '<div class="hint">' + f.hint + '</div>';
    if (f.type === 'number') {
      html += '<input type="number" class="calc-input" id="' + f.id + '" placeholder="' + f.placeholder + '" min="1"/>';
    } else if (f.type === 'range') {
      html += '<div class="range-wrap"><input type="range" class="calc-range" id="' + f.id + '" min="' + f.min + '" max="' + f.max + '" value="' + f.val + '" oninput="updateRange(this,\'' + f.id + '-val\',\'' + f.unit + '\')"/><div class="range-val"><span id="' + f.id + '-val">' + f.val + '</span> ' + f.unit + '</div></div>';
    } else if (f.type === 'select') {
      html += '<select class="calc-select" id="' + f.id + '">';
      f.options.forEach(function(o){ html += '<option>' + o + '</option>'; });
      html += '</select>';
    }
    html += '</div>';
  });
  document.getElementById('step2-fields').innerHTML = html;
}

function updateRange(el, valId, unit) {
  document.getElementById(valId).textContent = el.value;
}

function getFields() {
  var cfg = industryConfig[selectedIndustry];
  var result = {};
  cfg.fields.forEach(function(f) {
    var el = document.getElementById(f.id);
    if (el) result[f.id] = el.value;
  });
  return result;
}

function formatAngka(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function calculate() {
  var cfg = industryConfig[selectedIndustry];
  var fields = getFields();
  var jam = parseInt(document.getElementById('jam-ops').value) || 16;
  var source = document.getElementById('source').value;

  var res = cfg.calc(fields, jam);
  var totalLiter = Math.round(res.liter);
  var lph = Math.round(totalLiter / jam); // liter per hour
  var m3perhari = (totalLiter / 1000).toFixed(1);

  // Tentukan kapasitas sistem dalam GPD atau LPH
  var gpd = Math.round(totalLiter * 0.264172);
  var kapasitasLabel, kapasitasSistem;
  if (totalLiter < 5000) {
    kapasitasSistem = totalLiter + ' L/hari';
    kapasitasLabel = 'Skala Kecil';
  } else if (totalLiter < 50000) {
    kapasitasSistem = m3perhari + ' mÂ³/hari';
    kapasitasLabel = 'Skala Menengah';
  } else {
    kapasitasSistem = m3perhari + ' mÂ³/hari';
    kapasitasLabel = 'Skala Besar';
  }

  // Source label
  var sourceLabel = {pdam:'Air PDAM', sumur:'Air Sumur', laut:'Air Laut/Payau', sungai:'Air Sungai'}[source];

  var html = '';
  html += '<div class="result-hero">';
  html += '<div class="rh-label">Estimasi Kapasitas Sistem yang Dibutuhkan</div>';
  html += '<div class="rh-capacity">' + kapasitasSistem + '</div>';
  html += '<div class="rh-unit">(' + kapasitasLabel + ' Â· ' + formatAngka(lph) + ' liter/jam)</div>';
  html += '<div class="rh-desc">Berdasarkan ' + jam + ' jam operasional/hari dengan sumber ' + sourceLabel + '</div>';
  html += '</div>';

  html += '<div class="result-grid">';
  html += '<div class="result-item"><div class="ri-label">Total Kebutuhan Air/Hari</div><div class="ri-val">' + formatAngka(totalLiter) + ' Liter</div></div>';
  html += '<div class="result-item"><div class="ri-label">Kapasitas Produksi/Jam</div><div class="ri-val">' + formatAngka(lph) + ' Liter/jam</div></div>';
  html += '<div class="result-item"><div class="ri-label">Setara GPD</div><div class="ri-val">' + formatAngka(gpd) + ' GPD</div></div>';
  html += '<div class="result-item"><div class="ri-label">Sumber Air Baku</div><div class="ri-val">' + sourceLabel + '</div></div>';
  html += '</div>';

  html += '<div class="prod-rec">';
  html += '<div class="pr-tag">â­ Rekomendasi Produk TSM</div>';
  html += '<h3>' + cfg.produk + '</h3>';
  html += '<p>' + cfg.produkDesc + '</p>';
  html += '<div class="prod-rec-actions">';
  html += '<a href="' + cfg.produkLink + '" class="btn-next" style="font-size:.8rem;padding:.52rem 1.2rem">ðŸ” Lihat Produk</a>';
  html += '<a href="kontak.html" class="btn-blue" style="font-size:.8rem;padding:.52rem 1.2rem">ðŸ“‹ Minta Penawaran</a>';
  html += '</div></div>';

  document.getElementById('result-content').innerHTML = html;
  goStep(3);
}

function resetCalc() {
  selectedIndustry = '';
  document.querySelectorAll('.ind-btn').forEach(function(b){ b.classList.remove('selected'); });
  document.getElementById('step2-fields').innerHTML = '';
  document.getElementById('result-content').innerHTML = '';
  goStep(1);
}

