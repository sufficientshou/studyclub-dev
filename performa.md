# Standar Optimasi Performa Aset & Anti-Lag Website Study Club

## Context
Website memuat ~39.4 MB aset gambar pada initial page load landing page. Penyebab utama adalah penggunaan foto kamera resolusi tinggi (4624x3468 px hingga ~4.5 MB per file), foto mentor (hingga 2.76 MB), serta ikon dekorasi (4096x4096 px, ~2 MB). Kondisi ini menyebabkan GPU decode memori mentah > 500 MB di VRAM dan memicu stuttering/lag saat scrolling.

Tujuan optimasi:
1. Gambar dikompresi tanpa burem (tetap tajam/crisp untuk layar high-DPI/Retina).
2. Tampilan UI, layout, animasi 3D flip card, dan interaksi tidak berubah sama sekali (100% identik).
3. Reduksi total bobot aset dari ~39.4 MB menjadi < 2.7 MB (>93% hemat bandwidth) dan memori GPU decode < 50 MB agar halaman super lancar dan bebas lag.

---

## Standar Kualitas & Anti-Burem

### 1. Spesifikasi Kompresi WebP Kualitas Tinggi
Seluruh aset gambar raster dalam `public/images/` dikonversi menjadi `.webp` dengan parameter Pillow:
- **Resampling Filter:** `Image.Resampling.LANCZOS` (filter interpolasi 8-tap berkualitas tinggi untuk ketajaman garis dan teks detail).
- **Kualitas Kompresi:** `quality=90`, `method=6` (kualitas visual tinggi tanpa artifact kompresi, PSNR > 42 dB).
- **Format Transparansi:** Mode `RGBA` dipertahankan untuk gambar transparan, `RGB` untuk gambar tanpa transparansi.

### 2. Batas Resolusi Terukur (Retina Ready 2x–3x)
- **Foto Dokumentasi About (`web1-3`, `cy1-3`, `ui1-3`):** Maksimal lebar 1600 px (aslinya 4624 px). Resolusi ini memberi kerapatan pixel 3x lipat dari container card (~320–400 px), menjamin tampilan sangat tajam di layar Retina/4K.
- **Foto Mentor (`mentor desain`, `mentor webdev`, `mentor data`):** Maksimal tinggi 1600 px dengan format WebP RGBA transparan.
- **Ikon 3D (`html.webp`, `pituy.webp`, `pigmuy.webp`):** Maksimal dimensi 1024 px (aslinya 4096 px).
- **Background (`bg hero`, `bg bintang`, `bg learning`, `bg pendaftaran`):** Maksimal lebar 1920 px (Full HD asli).
- **Elemen Dekoratif Kecil (< 800 px):** Pertahankan dimensi asli tanpa downscale, hanya konversi WebP Q90.
- **Aset Vektor SVG (`logo studyclub.svg`):** Pertahankan format `.svg` asli, jangan dikonversi.

---

## Optimasi GPU Compositing & Animasi Bebas Stutter

Di `src/app/globals.css`:
1. `.about-card-circle`: Diberikan `will-change: transform` agar animasi blur 20px diproses di GPU composite layer terpisah tanpa membebani main thread CPU saat scroll.
2. `.animate-float`: Diberikan `transform: translateZ(0)` untuk akselerasi hardware penuh tanpa mengubah posisi visual atau durasi animasi.

---

## Aturan Integritas Tampilan Visual

1. **Struktur DOM 3D Card:** Seluruh markup 3D flip card di `About.tsx` dipertahankan lengkap (`-rotate-3`, `rotate-2`, `-rotate-2`, fade transition `opacity-100` / `opacity-0`).
2. **Tidak Ada Layout Shift:** Seluruh rasio aspek gambar dijaga presisi saat resize menggunakan perhitungan proporsional berbasis lebar/tinggi asli.

---

## Pembersihan Aset Tidak Terpakai (Dead Weight)

File gambar tidak terpakai yang dihapus dari `public/images/`:
- `bg learnuy.png` (1.13 MB)
- `hero sc.png` (434 KB)
- `bg bintang33.png` (381 KB)
- `img about.png` (263 KB)
- `planet pendaftaran.png` (239 KB)
- `mentor web.png` (184 KB)
- `sc orbit.png` (153 KB)
Seluruh file raster lama (`.png`, `.jpg`) yang telah dikonversi ke `.webp` dihapus dari direktori `public/images/`.

---

## Prosedur Verifikasi

1. **Bobot Folder:**
   ```bash
   python -c "import os; sz=sum(os.path.getsize('public/images/'+f) for f in os.listdir('public/images')); print(f'Total size: {sz/(1024*1024):.2f} MB')"
   ```
   Target lolos: Total folder `public/images/` < 2.7 MB.

2. **TypeScript & Build:**
   ```bash
   npx tsc --noEmit
   npm run build
   ```
   Target lolos: 0 error TypeScript, build static export selesai 100% tanpa error 404 missing asset.

3. **Integritas Visual:**
   Periksa tampilan pada browser di `http://localhost:3000/studyclub/`:
   - Gambar tetap tajam dan jernih pada layar high-DPI/Retina.
   - Semua animasi rotasi, floating, dan interaksi berjalan mulus tanpa lag.
