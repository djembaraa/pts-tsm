# Migration Notes

Dokumen ini berisi panduan teknis konversi proyek Vanilla (HTML/CSS/JS/PHP) menjadi aplikasi React.js dengan Tailwind CSS sesuai *strict constraints* yang diberikan.

## 1. Konversi CSS ke Tailwind CSS (Zero Design Degradation)
- **Akurasi 1:1:** Semua styling Vanilla akan diterjemahkan ke dalam utilitas Tailwind tanpa merusak hierarki, margin, padding, atau layout visual (Zero Design Degradation).
- **Penghapusan Border Tidak Perlu:** Sesuai permintaan, border yang hanya menambah visual *noise* dan tidak sesuai desain asli akan dihapus menggunakan class seperti `border-none` atau `border-0`.
- **Konfigurasi Tema (`tailwind.config.js`):**
  Untuk memastikan warna dan gaya kustom sama persis, kita mendefinisikan warna dari variabel root CSS sebelumnya:
  ```js
  module.exports = {
    theme: {
      extend: {
        colors: {
          navy: '#0a2240',
          blue: '#0d5fa8',
          sky: '#1e90d6',
          accent: '#00b4d8',
          ice: '#e8f4fd',
          gray: '#f4f8fc',
          text: '#1a2d42',
          muted: '#5c7a96',
          border: '#cde3f3'
        },
        fontFamily: {
          // Perintah ketat: Navbar menggunakan Montserrat secara menyeluruh
          montserrat: ['Montserrat', 'sans-serif'], 
          barlow: ['Barlow', 'sans-serif'],
          condensed: ['Barlow Condensed', 'sans-serif'],
        }
      }
    }
  }
  ```

## 2. Refactoring JavaScript ke Paradigma React (Zero Logic Alteration)
Alur logika dipertahankan, namun dipindah dari manipulasi DOM langsung ke pendekatan React yang deklaratif:
- **Sticky Header & Scroll Effects:**
  Event Listener `scroll` pada window akan dikonversi menggunakan hook `useEffect` untuk mengatur state `isScrolled`, yang akan secara dinamis menyematkan class bayangan/shadow di Tailwind (`shadow-[0_4px_28px_rgba(10,34,64,0.14)]`).
- **Mobile Menu Toggle:**
  Fungsi toggle akan disimpan dalam state lokal `const [isMobileOpen, setIsMobileOpen] = useState(false)`.
- **Responsivitas Mobile:**
  Tombol pada mobile (misal: tombol CTA Topbar) akan dikonfigurasi dengan utilitas Tailwind untuk tidak menumpuk atas-bawah (hindari `flex-col`), melainkan `flex-row items-center flex-shrink` agar proporsinya mengecil bersisian di kiri-kanan.

## 3. Strategi Integrasi PHP & React (PHP Decoupling)
Mengingat proyek ini nantinya di-deploy di Hostinger dengan spesifikasi minim (oleh karena itu dihindari penggunaan Next.js), maka tidak disarankan memigrasi backend ke Node.js/Express.js sekalian.
**Rencana:**
- File `kirim-pesan.php` akan dibiarkan menjadi **REST API murni**. Hostinger memiliki native support PHP yang sangat ringan dan efisien.
- Kita cukup menaruh file PHP tersebut di direktori publik *build* React (atau di-*host* di server secara independen).
- Komponen Form di React (misal: `ContactForm.jsx`) akan dihubungkan menggunakan `fetch` API:
  ```javascript
  const submitData = async (formData) => {
    const res = await fetch('/kirim-pesan.php', {
      method: 'POST',
      body: formData
    });
    return res.json();
  };
  ```

## 4. Icon Replacement
Semua icon teks emoji/vanilla lama diganti sepenuhnya menggunakan library modern `lucide-react`. 
Misalnya teks panah dropdown `▾` diganti `<ChevronDown size={16} />`, dan penempatan *centering* dilakukan secara absolut dan presisi menggunakan class Tailwind `flex items-center justify-center`.
