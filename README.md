# PT Tirta Sumber Makmur (TSM) - Corporate Website

Selamat datang di repositori *source code* resmi untuk *corporate website* **PT Tirta Sumber Makmur (TSM)**. 
TSM adalah perusahaan yang bergerak di bidang teknologi pengolahan air (*Water Treatment Technology*), menyediakan solusi *Reverse Osmosis*, Desalinasi, dan sistem pengolahan air lainnya untuk sektor industri, komersial, dan maritim di Indonesia.

Website ini merupakan hasil modernisasi (migrasi) dari desain statis lama (*legacy*) menjadi aplikasi web modern yang cepat, interaktif, dan responsif (berjalan mulus di Desktop maupun Mobile).

## Teknologi yang Digunakan

Website ini dibangun menggunakan *stack* teknologi modern untuk menjamin performa dan kemudahan *maintenance*:
- **React.js**: *Library* JavaScript utama untuk membangun antarmuka pengguna (UI) berbasis komponen.
- **Vite**: *Build tool* generasi baru yang membuat proses *development* sangat cepat (*Fast HMR*).
- **Tailwind CSS**: *Framework* CSS berbasis *utility-first* untuk *styling* yang konsisten, bersih, dan mempermudah pembuatan desain responsif.
- **React Router DOM**: Mengatur navigasi antar halaman (Routing) secara *Single Page Application* (SPA) tanpa perlu *reload* halaman.
- **Lucide React**: Kumpulan ikon SVG modern dan konsisten yang menggantikan penggunaan emoji lama.

## Cara Menjalankan Website di Komputer Lokal (Local Environment)

Untuk melihat dan menjalankan website ini di komputer Anda, ikuti langkah-langkah mudah berikut:

### Persyaratan Sistem (Prerequisites)
Pastikan komputer Anda sudah terinstal **Node.js** (direkomendasikan versi 18 atau terbaru). Anda bisa mengunduhnya di [nodejs.org](https://nodejs.org/).

### Langkah-langkah Instalasi
1. Buka terminal atau *command prompt* (CMD/PowerShell) dan arahkan ke dalam *folder* proyek ini.
2. Jalankan perintah berikut untuk mengunduh semua *library* (dependensi) yang dibutuhkan:
   ```bash
   npm install
   ```
3. Setelah instalasi selesai, jalankan *local server* (mode *development*) dengan perintah:
   ```bash
   npm run dev
   ```
4. Terminal akan memunculkan *link* (biasanya `http://localhost:5173/`). Buka *link* tersebut di *browser* Anda (Google Chrome, Firefox, Safari, dll).
5. Selesai! Website sudah berjalan dan siap ditelusuri.

## Proses Build untuk Production

Jika Anda ingin mengunggah (deploy) website ini ke *hosting* publik (seperti Vercel, Netlify, atau cPanel hosting tradisional), Anda harus melakukan proses *build*.
Jalankan perintah:
```bash
npm run build
```
Vite akan membuat folder baru bernama `dist/`. Folder `dist/` inilah yang berisi sekumpulan file HTML, CSS, dan JavaScript statis yang sudah dioptimalkan dan siap di-upload ke server *hosting* Anda.

---
*Dikembangkan secara khusus untuk memberikan pengalaman digital terbaik bagi mitra dan klien PT Tirta Sumber Makmur.*
