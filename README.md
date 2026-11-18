# RG Ecoprint — React Frontend

Frontend katalog dan pengelolaan produk RG Ecoprint menggunakan React, Vite, React Router (dependensi proyek), dan Tailwind CSS v4. Arah visual mengikuti versi `Tailwind-version`: warna paper/forest/rust, tipografi Fraunces + Work Sans + IBM Plex Mono, serta aset produk asli.

## Menjalankan aplikasi

```bash
npm install
npm run dev
```

Buka alamat yang ditampilkan Vite (umumnya http://localhost:5173).

## Fitur

- Katalog produk ecoprint dengan data awal yang relevan.
- Ringkasan jumlah produk, total stok, dan kategori.
- Form controlled input untuk menambahkan produk.
- Pencarian dan filter kategori.
- Hapus produk dari daftar.
- Conditional rendering untuk pesan `Belum ada data Produk` jika hasil daftar kosong.
- Layout responsif untuk desktop dan perangkat mobile.

Data masih disimpan di state React sehingga kembali ke data awal setelah halaman dimuat ulang. Integrasi backend/API dapat ditambahkan pada tahap pengembangan berikutnya.

## Komponen

Komponen UI katalog dipisah pada `src/components/products/`: `ProductIntro`, `ProductStats`, `ProductForm`, `ProductList`, dan `ProductCard`. State array utama dan fungsi interaksi berada di `src/App.jsx`.

## Checklist pengumpulan tugas

1. Jalankan `npm run dev` dan ambil screenshot browser pada localhost:5173.
2. Ambil screenshot tampilan katalog, form tambah produk, dan kondisi daftar kosong.
3. Buat repository GitHub dan lakukan setidaknya dua commit, misalnya `Initial React project` dan `Build responsive RG Ecoprint catalog and product form`.
4. Push perubahan ke repository milik sendiri dan kumpulkan link repository serta screenshot.
