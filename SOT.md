# Source of Truth (SOT)
**Proyek:** PT Tirta Sumber Makmur (Web Refactor)

## 1. Analisis Struktur HTML
Sebagian besar proyek adalah file HTML statis yang memiliki struktur dasar seragam. Elemen utamanya adalah:
- **Global Layout:** Menggunakan tag `<body>` yang berisi ID atau class khusus. Header (topbar & navbar) serta Footer di-*inject* secara dinamis menggunakan JavaScript.
- **Header & Navbar:** Ditangani oleh `.site-header`, `.topbar`, dan `.navbar`. Mengandung logo, menu drop-down (`.mega-menu`, `.dropdown`), link, dan *hamburger button* untuk tampilan mobile.
- **Section & Container:** Menggunakan `.section` dan `.container` untuk membatasi lebar konten (max 1240px) dan memberikan padding.
- **Komponen Spesifik:**
  - Hero Section (`.page-hero`, `.prod-hero`)
  - Kartu Artikel (`.art-card`)
  - Tabel Spesifikasi (`.spec-table`)
  - Marquee Klien (`.client-marquee-wrap`)

## 2. Analisis Styling (CSS)
File `assets/style.css` menggunakan **Pure CSS (Vanilla)** dengan arsitektur berikut:
- **CSS Variables (Custom Properties):** Mendefinisikan warna utama (navy, blue, sky, accent, dll.), shadow, border radius, dan transisi di `:root`.
- **Typography:** Menggunakan font Google Fonts yaitu `Barlow` (untuk teks umum) dan `Barlow Condensed` (untuk heading).
- **Flexbox & Grid:** Sangat dominan digunakan untuk layout, misalnya `.nav-inner`, `.mega-menu`, `.footer-grid`, dan `.prod-layout`.
- **Responsive Media Queries:** Breakpoints utama di `1100px`, `960px` (nav menjadi hamburger), dan `600px` (tumpukan kolom footer).
- **Sticky & Animations:** Navbar menggunakan `position: sticky`. Animasi *reveal* on scroll mengandalkan class `.reveal.visible`.

## 3. Analisis JavaScript
File `assets/nav.js` bertanggung jawab untuk:
- **DOM Injection:** Memasukkan `<div class="site-header">` (topbar + navbar) di awal `<body>`, dan `<footer>` di akhir `<body>`.
- **Scroll Effects:** Menambah class `.scrolled` pada header dan `.show` pada tombol back-to-top jika window di-scroll.
- **Intersection Observer:** Menambahkan class `.visible` pada elemen `.reveal` ketika masuk viewport (animasi scroll).
- **Mobile Menu Toggle:** Fungsi `toggleMobile()` untuk membuka/menutup menu navigasi mobile.
- **Marquee Duplication:** Menggandakan konten `#clTrack` untuk efek infinite scroll tanpa putus.

## 4. Alur Data & PHP
Satu-satunya file PHP adalah `kirim-pesan.php`, yang berfungsi sebagai pengelola form kontak.
- **Fungsi:** Menerima metode HTTP POST dari form di frontend.
- **Input:** Nama, Perusahaan, Email, Telepon, Topik, Kapasitas, dan Pesan.
- **Validasi:** Mengecek kelengkapan data dan format email di sisi server.
- **Output (Response):** Mengembalikan data JSON (`{"sukses": true/false, "pesan": "..."}`) serta kode HTTP.
- **Action:** Mengirim email menggunakan fungsi `mail()` bawaan PHP ke `obed@tsm.or.id`.
