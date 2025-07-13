<!DOCTYPE html>
<html>
<head>
</head>
<body>
<h1>Aplikasi Berita - Proyek React</h1>

<div class="highlight">
    Aplikasi berita modern yang dibangun dengan React.js untuk menampilkan artikel berita dari berbagai sumber menggunakan NewsAPI.
</div>

<h2>Fitur Utama</h2>
<ul>
    <li>📰 Menampilkan berita utama terbaru</li>
    <li>🔍 Pencarian berita berdasarkan kata kunci</li>
    <li>🗂 Filter berita berdasarkan kategori (bisnis, hiburan, olahraga, dll)</li>
    <li>📱 Desain responsif untuk semua perangkat</li>
    <li>🔢 Dukungan paginasi</li>
    <li>🔒 Manajemen API key yang aman</li>
</ul>

<h2>Persyaratan Sistem</h2>
<ul>
    <li>Node.js (versi 22 atau lebih baru)</li>
    <li>API key dari NewsAPI (tersedia versi gratis)</li>
</ul>

<h2>Panduan Instalasi</h2>
<ol>
    <li>Clone repository:
        <pre><code>git clone https://github.com/KuroXSub/news-api.git
cd news-api</code></pre>
    </li>
    <li>Instal dependensi:
        <pre><code>npm install</code></pre>
    </li>
    <li>Buat file <code>.env</code> di direktori utama:
        <pre><code>REACT_APP_NEWS_API_KEY=api_key_anda_disini</code></pre>
    </li>
    <li>Mulai server pengembangan:
        <pre><code>npm start</code></pre>
    </li>
</ol>

<div class="note">
    <strong>Catatan:</strong> Dapatkan API key gratis dari <a href="https://newsapi.org" target="_blank">newsapi.org</a>
</div>

<h2>Cara Penggunaan</h2>
<h3>Mode Pengembangan</h3>
<p>Untuk menjalankan aplikasi dalam mode pengembangan:</p>
<pre><code>npm start</code></pre>
<p>Buka <a href="http://localhost:3000">http://localhost:3000</a> di browser.</p>

<h2>Struktur Proyek</h2>
<pre><code>src/
├── components/       # Komponen React
│   ├── NewsItem.js   # Komponen artikel berita
│   ├── NewsList.js   # Daftar berita
│   ├── SearchBar.js  # Komponen pencarian
│   ├── CategoryFilter.js # Filter kategori
│   └── Pagination.js # Kontrol paginasi
├── services/
│   └── newsApi.js    # Layanan API
├── App.js           # Komponen utama
├── App.css          # Style utama
└── index.js         # Entry point</code></pre>

</body>
</html>