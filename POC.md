# Proof of Concept (POC) - Navbar Component

Sebagai bukti konsep penerapan React.js, Tailwind CSS, serta library ikon Lucide React, kami telah membuat satu file purwarupa (prototype) untuk komponen Navbar, yaitu `NavbarPOC.jsx` di dalam folder ini.

## Poin Utama dalam POC
1. **Font Montserrat:** Sesuai instruksi, font telah di-set untuk digunakan secara khusus di Navbar (class `font-montserrat`).
2. **Utilitas Tailwind 1:1:** Dropdown, mega-menu, shadow, dan hover effects menggunakan class group-hover Tailwind sehingga tidak ada degradasi desain. Transisi CSS lama ditulis dalam class `transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]`.
3. **Ikon Presisi Tengah:** Penggunaan ikon dari `lucide-react` (seperti `ChevronDown`, `Phone`, `Mail`) diposisikan *center* menggunakan `flex items-center justify-center gap-1`.
4. **Responsivitas Mobile Proporsional:** Di tampilan mobile, elemen CTA tidak *stack* vertikal, tetapi dirender secara berjejer menyamping (`flex-row shrink`) agar menyesuaikan container dengan baik.
5. **Logic Hooks:** Animasi *scrolled* (sticky shadow) dan fungsi Hamburger menu telah dikonversi menggunakan React Hooks (`useState` dan `useEffect`).

Silakan tinjau `NavbarPOC.jsx` untuk melihat kode komponennya. Setelah Anda me-review ketiga dokumen (SOT, Migration Notes, POC) dan menyetujuinya, kami akan melanjutkan refactoring penuh menjadi project Vite React secara komprehensif.
