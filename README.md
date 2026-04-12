# KuroNews - Aplikasi Pencarian Berita Modern

<div align="center">

[![GitHub stars](https://img.shields.io/github/stars/KuroXSub/news-api?style=for-the-badge)](https://github.com/KuroXSub/news-api/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/KuroXSub/news-api?style=for-the-badge)](https://github.com/KuroXSub/news-api/network)
[![GitHub issues](https://img.shields.io/github/issues/KuroXSub/news-api?style=for-the-badge)](https://github.com/KuroXSub/news-api/issues)

</div>


> Aplikasi berita modern yang dibangun dengan React.js dan Tailwind CSS untuk menampilkan artikel berita dari berbagai sumber menggunakan NewsAPI.

## Fitur Utama
* Menampilkan berita utama terbaru dengan layout asimetris (Bento Grid)
* Mendukung tema dinamis (*Dark Mode* dan *Light Mode*)
* Filter berita instan berdasarkan kategori (Teknologi, Bisnis, Sains, dll)
* Transisi dan performa mulus menggunakan caching `SWR` dan animasi Skeleton
* Manajemen API key yang 100% aman (tersembunyi dari browser pengguna)

## Persyaratan Sistem
* Node.js (versi 22 atau lebih baru)
* API key dari [NewsAPI](https://newsapi.org) (tersedia versi gratis)

## Panduan Instalasi
1. **Clone repository:**
   ```bash
   git clone https://github.com/KuroXSub/news-api.git
   cd news-api
   ```

2. **Instal dependensi:**
    ```bash
    npm install
    ```

3. **Konfigurasi API Key (Environment Variables):**
    
    Buat file bernama `.dev.vars` di direktori paling luar (sejajar dengan `package.json`):
    ```bash
    NEWS_API_KEY=api_key_anda_disini
    ```
    > **Catatan:** Jangan gunakan file `.env` dan awalan `REACT_APP_` lagi, karena API key kini diproses oleh server backend, bukan di frontend.

## Cara Penggunaan (Mode Development)

>Karena aplikasi ini dipisah menjadi **Frontend (React)** dan **Backend (Functions)**, perlu menjalankan dua server secara bersamaan di terminal yang berbeda.

**Terminal 1 (Menjalankan Frontend React):**
```bash
npm start
```
Ini akan menjalankan server React di port 3000.

**Terminal 2 (Menjalankan Backend Cloudflare Wrangler):**
Buka tab terminal baru di folder yang sama, lalu jalankan:
```bash
npx wrangler pages dev --proxy 3000
```
Ini akan menjalankan server proxy yang menggabungkan API backend dan UI React.

**Akses Aplikasi:**

Buka `http://localhost:8788` di browser. (Abaikan alamat `localhost:3000` karena alamat tersebut tidak memiliki akses ke backend API).

## Struktur Proyek
```
news-api/
├── .dev.vars              # File rahasia untuk API Key (Lokal Wrangler)
├── functions/
│   └── api/
│       └── news.js        # Backend Serverless (Cloudflare Pages Function)
├── src/
│   ├── components/
│   │   ├── layout/        # Navbar.js, Footer.js
│   │   ├── news/          # NewsCard.js
│   │   └── ui/            # Skeleton.js
│   ├── hooks/
│   │   └── useNews.js     # Logika fetching & caching menggunakan SWR
│   ├── services/
│   │   └── newsApi.js     # Konfigurasi endpoint (mengarah ke /api/news)
│   ├── utils/
│   │   └── formatDate.js  # Fungsi pembantu format tanggal
│   ├── App.js             # Komponen utama (Layout & State Kategori)
│   ├── index.css          # Core CSS, Tailwind Layers, & CSS Variables
│   └── index.js           # Entry point React
├── package.json
└── README.md
```

## Pengembang

Dikembangkan oleh Qurrota sebagai bagian dari ekosistem KuroSapa Labs.

Website Pengembang: [kuroxsub.my.id](https://kuroxsub.my.id)

GitHub: @KuroXSub