/* ══════════════════════════════════════════════════
   PT TIRTA SUMBER MAKMUR  ·  Shared Nav & Footer
   ══════════════════════════════════════════════════ */
(function () {
  var pg = location.pathname.split('/').pop() || 'index.html';
  function a(f) { return pg === f ? ' class="active"' : ''; }

  /* ── KONFIGURASI — SILAKAN EDIT SESUAI AKUN SOSMED AKTIF ──
     Isi URL sosial media yang aktif. Jika masih kosong ('#'),
     link otomatis disembunyikan supaya tidak jadi broken link. */
  var SOCIAL = {
    linkedin:  '#',  // contoh: 'https://www.linkedin.com/company/tirta-sumber-makmur'
    facebook:  '#',  // contoh: 'https://www.facebook.com/tirtasumbermakmur'
    instagram: '#',  // contoh: 'https://www.instagram.com/tirtasumbermakmur'
    whatsapp:  'https://wa.me/62818719119'
  };
  function s(key, label, title) {
    if (!SOCIAL[key] || SOCIAL[key] === '#') return '';
    return '<a href="' + SOCIAL[key] + '" class="social-link" title="' + title + '" target="_blank" rel="noopener">' + label + '</a>';
  }

  /* ── TOPBAR ── */
  var tb =
    '<div class="topbar"><div class="container">' +
    '<div class="topbar-left">' +
    '<span>📞 <a href="tel:02188871689">021-88871689</a></span>' +
    '<span>📱 <a href="tel:+62818719119">+62 818-719-119</a></span>' +
    '<span>✉️ <a href="mailto:obed@tsm.or.id">obed@tsm.or.id</a></span>' +
    '</div>' +
    '<div class="topbar-right">' +
    '<span style="color:var(--accent);font-weight:600">ID</span>' +
    '<a href="kontak.html" class="tb-cta">Minta Penawaran</a>' +
    '</div>' +
    '</div></div>';

  /* ── NAVBAR ── */
  var nav =
    '<nav class="navbar" id="navbar"><div class="container"><div class="nav-inner">' +

    /* Logo */
    '<a href="index.html" class="logo">' +
    '<div class="logo-mark">TSM</div>' +
    '<div class="logo-text">' +
    '<div class="brand">PT Tirta Sumber Makmur</div>' +
    '<div class="tagline">Water Treatment Technology</div>' +
    '</div></a>' +

    /* Nav Links */
    '<ul class="nav-links">' +

    /* PRODUK */
    '<li class="nav-item">' +
    '<a href="produk.html"' + a('produk.html') + '>Produk &amp; Solusi <span class="arrow">▾</span></a>' +
    '<div class="mega-menu wide">' +
    '<div class="mega-col"><h4>Reverse Osmosis System</h4><ul>' +
    '<li><a href="produk-ro-industri.html">💧 Tap Water RO</a></li>' +
    '<li><a href="produk-bwro.html">💧 Brackish Water RO</a></li>' +
    '<li><a href="produk-desalinasi.html">🌊 Seawater RO</a></li>' +
    '<li><a href="produk-fresh-water-generator.html">🚢 Fresh Water Generator</a></li>' +
    '<li><a href="produk-ro-mobile.html">🚗 Water Maker</a></li>' +
    /* ── HALAMAN SEO (Keyword Bahasa Indonesia) ────────────────────────────
       Untuk MENYEMBUNYIKAN dari menu: tambahkan tanda /* sebelum baris pertama
       dan *\/ sesudah baris terakhir di bawah ini.
       Untuk MENAMPILKAN kembali: hapus tanda komentar tersebut. */
    '<li><a href="mesin-suling-air-laut.html">🌊 Mesin Suling Air Laut</a></li>' +
    '<li><a href="mesin-air-asin.html">💧 Mesin Air Asin</a></li>' +
    /* ── AKHIR HALAMAN SEO ──────────────────────────────────────────────── */
    '</ul></div>' +
    '<div class="mega-col"><h4>Water Treatment System</h4><ul>' +
    '<li><a href="produk-sand-filter.html">🔵 Sand Filter</a></li>' +
    '<li><a href="produk-carbon-filter.html">⚫ Activated Carbon Filter</a></li>' +
    '<li><a href="produk-softener.html">💧 Softener Filter</a></li>' +
    '<li><a href="produk-limbah.html">🏭 Wastewater Treatment</a></li>' +
    '<li><a href="produk-demi.html">⚗️ Demineralisasi System</a></li>' +
    '<li><a href="produk-uf.html">🔩 Ultrafiltration System</a></li>' +
    '<li><a href="produk-water-filter.html">🔵 Water Filter</a></li>' +
    '<li><a href="produk-bwms.html">⚓ Ballast Water Management</a></li>' +
    '</ul></div>' +
    '<div class="mega-col"><h4>Water Equipment</h4><ul>' +
    '<li><a href="produk-membran.html">🧪 Membrane RO</a></li>' +
    '<li><a href="produk-membran.html">🔩 Housing Membrane RO</a></li>' +
    '<li><a href="produk-uf.html">🔬 Ultrafiltration Membrane</a></li>' +
    '<li><a href="produk-frp-tank.html">🪣 FRP Tank (Tabung Filter)</a></li>' +
    '<li><a href="produk-zincalume-tank.html">🗂️ Stainless Steel Tank</a></li>' +
    '<li><a href="produk-instrumen.html">📊 Media Filter</a></li>' +
    '<li><a href="produk-uv.html">💡 UV Water Sterilizer</a></li>' +
    '<li><a href="produk-pompa.html">⚙️ Triple Plunger &amp; Multistage Pump</a></li>' +
    '</ul></div>' +
    '<div class="mega-feat">' +
    '<div class="mf-badge">Unggulan 2025</div>' +
    '<h3>Sistem RO Otomasi Penuh — Hemat Energi 40%</h3>' +
    '<a href="produk-ro-industri.html">Pelajari Selengkapnya →</a>' +
    '</div></div></li>' +

    /* LAYANAN */
    '<li class="nav-item">' +
    '<a href="layanan.html"' + a('layanan.html') + '>Layanan <span class="arrow">▾</span></a>' +
    '<div class="mega-menu">' +
    '<div class="mega-col"><h4>Engineering</h4><ul>' +
    '<li><a href="layanan-desain.html">📐 Desain &amp; Perancangan Sistem</a></li>' +
    '<li><a href="layanan-instalasi.html">🔧 Instalasi &amp; Komisioning</a></li>' +
    '<li><a href="layanan-maintenance.html">🛡️ Pemeliharaan Preventif</a></li>' +
    '<li><a href="layanan-darurat.html">🚨 Servis Darurat 24/7</a></li>' +
    '</ul></div>' +
    '<div class="mega-col"><h4>Konsultasi &amp; Proyek</h4><ul>' +
    '<li><a href="layanan-audit.html">📋 Audit Kualitas Air</a></li>' +
    '<li><a href="kalkulator.html">🧮 Kalkulator Kebutuhan Air</a></li>' +
    '<li><a href="layanan-feasibility.html">📊 Studi Kelayakan</a></li>' +
    '<li><a href="layanan-epc.html">🏗️ Turnkey EPC Project</a></li>' +
    '<li><a href="layanan-sertifikasi.html">📜 Sertifikasi &amp; Compliance</a></li>' +
    '</ul></div>' +
    '<div class="mega-feat">' +
    '<div class="mf-badge">Program Baru</div>' +
    '<h3>Kontrak Perawatan Tahunan — Prioritas Respons</h3>' +
    '<a href="layanan-maintenance.html">Daftar Sekarang →</a>' +
    '</div></div></li>' +

    /* INDUSTRI */
    '<li class="nav-item">' +
    '<a href="industri.html"' + a('industri.html') + '>Industri <span class="arrow">▾</span></a>' +
    '<div class="dropdown">' +
    '<a href="industri-manufaktur.html">🏭 Industri Manufaktur</a>' +
    '<a href="industri-hotel.html">🏨 Hotel &amp; Resort</a>' +
    '<a href="industri-rs.html">⚕️ Rumah Sakit &amp; Hemodialisis</a>' +
    '<a href="industri-farmasi.html">💊 Farmasi (CPOB BPOM)</a>' +
    '<a href="industri-agrikultur.html">🌾 Agrikultur &amp; Perkebunan</a>' +
    '<a href="industri-pltu.html">⚡ PLTU &amp; Pembangkit Listrik</a>' +
    '<a href="industri-properti.html">🏗️ Properti &amp; Apartemen</a>' +
    '<a href="industri-maritim.html">🚢 Maritim &amp; Offshore</a>' +
    '</div></li>' +

    /* PERUSAHAAN */
    '<li class="nav-item">' +
    '<a href="tentang.html"' + a('tentang.html') + '>Perusahaan <span class="arrow">▾</span></a>' +
    '<div class="dropdown">' +
    '<a href="tentang.html">🏢 Tentang Kami</a>' +
    '<a href="tentang.html#sejarah">🕰️ Sejarah Perusahaan</a>' +
    '<a href="tentang.html#nilai">💎 Visi, Misi &amp; Nilai</a>' +
    '<a href="tentang.html#sertifikasi">📜 Sertifikasi &amp; Penghargaan</a>' +
    '<a href="tentang.html#csr">🌱 CSR &amp; Lingkungan</a>' +
    '<a href="tentang.html#klien">🤝 Klien &amp; Mitra</a>' +
    '<a href="karir.html">💼 Karir</a>' +
    '<a href="kontak.html">📞 Kontak Kami</a>' +
    '</div></li>' +

    /* ARTIKEL */
    '<li class="nav-item">' +
    '<a href="artikel.html"' + a('artikel.html') + '>Artikel <span class="arrow">▾</span></a>' +
    '<div class="dropdown">' +
    '<a href="artikel.html">📰 Semua Artikel</a>' +
    '<a href="artikel.html#teknologi">📚 Artikel Teknologi</a>' +
    '<a href="artikel.html#desalinasi">🌊 Artikel Desalinasi</a>' +
    '<a href="artikel.html#perawatan">🔧 Tips &amp; Perawatan</a>' +
    '<a href="artikel.html#industri">🏭 Aplikasi Industri</a>' +
    '<a href="artikel.html#studi-kasus">📂 Studi Kasus Teknis</a>' +
    '<a href="portofolio.html">📁 Portofolio Proyek</a>' +
    '<a href="faq.html">❓ FAQ</a>' +
    '</div></li>' +

    '<li class="nav-item"><a href="portofolio.html"' + a('portofolio.html') + '>Portofolio</a></li>' +
    '<li class="nav-item"><a href="kontak.html"' + a('kontak.html') + '>Kontak</a></li>' +
    '</ul>' +

    '<a href="kontak.html" class="btn-nav">📞 Konsultasi Gratis</a>' +
    '<div class="hamburger" id="hamburger" onclick="toggleMobile()">' +
    '<span></span><span></span><span></span>' +
    '</div>' +
    '</div></div></nav>' +

    /* Mobile Nav */
    '<div class="mobile-nav" id="mobileNav">' +
    '<button class="close-btn" onclick="toggleMobile()">✕</button>' +
    '<a href="index.html">Beranda</a>' +
    '<a href="produk.html">Produk &amp; Solusi</a>' +
    '<a href="layanan.html">Layanan</a>' +
    '<a href="industri.html">Industri</a>' +
    '<a href="tentang.html">Perusahaan</a>' +
    '<a href="artikel.html">Artikel</a>' +
    '<a href="portofolio.html">Portofolio</a>' +
    '<a href="kontak.html">Kontak</a>' +
    '</div>';

  /* ── FOOTER ── */
  var ft =
    '<footer>' +
    '<div class="container"><div class="footer-grid">' +

    '<div class="footer-brand">' +
    '<div class="logo-mark">TSM</div>' +
    '<div class="brand">PT Tirta Sumber Makmur</div>' +
    '<div class="tagline">Water Treatment Technology</div>' +
    '<p>Penyedia solusi reverse osmosis dan desalinasi air terpercaya di Indonesia sejak 2002. Berkomitmen menghadirkan air bersih berkualitas untuk kehidupan lebih baik.</p>' +
    '<div class="social-links">' +
    s('linkedin', 'in', 'LinkedIn') +
    s('facebook', 'fb', 'Facebook') +
    s('instagram', 'ig', 'Instagram') +
    s('whatsapp', 'wa', 'WhatsApp') +
    '</div></div>' +

    '<div class="footer-col"><h4>Produk &amp; Solusi</h4><ul>' +
    '<li><a href="produk-ro-industri.html">RO Industri</a></li>' +
    '<li><a href="mesin-suling-air-laut.html">Mesin Suling Air Laut</a></li>' +
    '<li><a href="mesin-air-asin.html">Mesin Air Asin</a></li>' +
    '<li><a href="produk-desalinasi.html">Desalinasi Air Laut</a></li>' +
    '<li><a href="produk-bwms.html">Ballast Water Management</a></li>' +
    '<li><a href="produk-ro-komersial.html">RO Komersial</a></li>' +
    '<li><a href="produk-demi.html">Demineralisasi / EDI</a></li>' +
    '<li><a href="produk-uf.html">Ultrafiltrasi (UF)</a></li>' +
    '<li><a href="produk-kimia.html">Kimia Water Treatment</a></li>' +
    '</ul></div>' +

    '<div class="footer-col"><h4>Layanan</h4><ul>' +
    '<li><a href="layanan-desain.html">Desain Sistem</a></li>' +
    '<li><a href="layanan-instalasi.html">Instalasi &amp; Komisioning</a></li>' +
    '<li><a href="layanan-maintenance.html">Perawatan Berkala</a></li>' +
    '<li><a href="layanan-darurat.html">Servis Darurat 24/7</a></li>' +
    '<li><a href="layanan-audit.html">Audit Kualitas Air</a></li>' +
    '<li><a href="layanan-epc.html">Proyek EPC Turnkey</a></li>' +
    '</ul></div>' +

    '<div class="footer-col"><h4>Kontak</h4><ul>' +
    '<li><a href="tel:02188871689">📞 021-88871689</a></li>' +
    '<li><a href="tel:+62818719119">📱 +62 818-719-119</a></li>' +
    '<li><a href="mailto:obed@tsm.or.id">✉️ obed@tsm.or.id</a></li>' +
    '<li><a href="https://maps.app.goo.gl/XZ7mxwiZJ2Q3RiPp6" target="_blank">📍 Lihat Lokasi</a></li>' +
    '<li><a href="kontak.html">📋 Minta Penawaran</a></li>' +
    '<li><a href="faq.html">❓ FAQ</a></li>' +
    '</ul></div>' +

    '</div></div>' +
    '<div class="footer-bottom"><div class="container fb-inner">' +
    '<span>© 2026 PT Tirta Sumber Makmur. Seluruh hak dilindungi.</span>' +
    '<span>' +
    '<a href="kebijakan-privasi.html">Kebijakan Privasi</a> &nbsp;·&nbsp; ' +
    '<a href="syarat-ketentuan.html">Syarat &amp; Ketentuan</a> &nbsp;·&nbsp; ' +
    '<a href="sitemap.html">Peta Situs</a>' +
    '</span>' +
    '</div></div>' +
    '</footer>' +
    '<div class="back-top" id="backTop" onclick="window.scrollTo({top:0,behavior:\'smooth\'})">↑</div>';

  /* ── INJECT ── */
  // Wrap topbar + navbar in one sticky header block
  var header = '<div class="site-header" id="siteHeader">' + tb + nav + '</div>';
  document.body.insertAdjacentHTML('afterbegin', header);
  document.body.insertAdjacentHTML('beforeend', ft);

  /* ── SCROLL ── */
  var sh = document.getElementById('siteHeader');
  var bt = document.getElementById('backTop');
  window.addEventListener('scroll', function () {
    sh.classList.toggle('scrolled', window.scrollY > 80);
    bt.classList.toggle('show', window.scrollY > 300);
  });

  /* ── REVEAL ON SCROLL ── */
  setTimeout(function () {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e, i) {
        if (e.isIntersecting) {
          setTimeout(function () { e.target.classList.add('visible'); }, i * 70);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    els.forEach(function (el) { io.observe(el); });
  }, 100);


  /* ── MARQUEE INFINITE LOOP ── */
  var track = document.getElementById('clTrack');
  if (track) {
    // Duplicate items for seamless infinite scroll
    track.innerHTML = track.innerHTML + track.innerHTML;
  }

  /* ── ANCHOR SCROLL ── */
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (link) {
      var t = document.querySelector(link.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    }
  });

  // ── GOOGLE TAG MANAGER ──────────────────────────────────────────────────
  // Ganti GTM-XXXXXXX dengan Container ID dari akun GTM Anda.
  // Contoh: GTM-AB12CD3
  var GTM_ID = 'GTM-XXXXXXX';

  // 1. Inject <script> GTM ke <head> (harus secepat mungkin)
  (function(w,d,s,l,i){
    w[l]=w[l]||[];
    w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
    var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),
        dl=l!='dataLayer'?'&l='+l:'';
    j.async=true;
    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer',GTM_ID);

  // 2. Inject <noscript> GTM tepat setelah <body> terbuka
  //    (dipasang sebelum siteHeader agar urutan DOM sesuai panduan GTM)
  document.body.insertAdjacentHTML('afterbegin',
    '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=' + GTM_ID + '"' +
    ' height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>'
  );
  // ── END GOOGLE TAG MANAGER ──────────────────────────────────────────────

})();

function toggleMobile() {
  document.getElementById('mobileNav').classList.toggle('open');
}

// TAWK.TO LIVE CHAT

var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/69e8984547a5081c306487cc/1jmq95k4f';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

/* FLOATING WA BUTTON
document.body.insertAdjacentHTML('beforeend',
  '<a href="https://wa.me/62818719119" target="_blank" rel="noopener" class="wa-float" title="Chat WhatsApp">'+
  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>'+
  '</a>');
 */
