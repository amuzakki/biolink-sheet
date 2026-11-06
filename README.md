# Biolink dengan Sveltia CMS

Halaman bio link modern, ringan, dan cepat dengan dukungan manajemen konten melalui **Sveltia CMS** (Git-based headless CMS).

## Fitur Utama

- **Integrasi Sveltia CMS**: Kelola profil, bio, avatar, media sosial, tautan disematkan (*pinned*), dan daftar link langsung dari browser tanpa perlu Google Sheets API atau database server.
- **Pinned Link (Opsional)**: Bagian link khusus yang disematkan di atas navigasi paginasi dengan label **Pinned Link**. Bagian ini bersifat opsional; jika dikosongkan di CMS, section ini otomatis tidak akan dimunculkan di halaman utama (*frontend*).
- **Paginasi Tab Ganda**: Paginasi tab otomatis berada di atas dan di bawah daftar tautan dengan sinkronisasi aktif dua arah dan scroll otomatis ke awal daftar saat berganti tab dari bawah.
- **Struktur Kode Terpisah & Bersih**: File CSS dan JavaScript dipisahkan ke dalam folder `assets/` untuk kemudahan pemeliharaan (*maintainability*).
- **Dukungan Media & Upload**: Upload gambar avatar dan thumbnail langsung ke folder `assets/images/`.
- **Dukungan Offline / Fallback**: Terdapat fallback data default jika dibuka secara langsung atau offline.

## Struktur File

```text
├── index.html            # Halaman utama bio link
├── README.md             # Dokumentasi proyek
├── admin/
│   ├── index.html        # Entrypoint panel admin Sveltia CMS
│   └── config.yml        # Konfigurasi skema koleksi Sveltia CMS
├── data/
│   └── content.json      # File data utama (dibaca & ditulis oleh CMS)
└── assets/
    ├── css/
    │   └── style.css     # File stylesheet utama
    ├── js/
    │   └── main.js       # File JavaScript logika aplikasi & render
    └── images/           # Folder penyimpanan upload gambar/avatar
```

## Cara Menggunakan Sveltia CMS

### 1. Membuka Panel Admin
Buka URL `/admin/` di browser (misalnya `http://localhost/biolink-sheet/admin/` atau `https://<username>.github.io/biolink-sheet/admin/`).

### 2. Login ke Sveltia CMS
- **GitHub Personal Access Token (PAT)**: Anda dapat membuat token di GitHub (dengan izin repo) dan menempelkannya saat login untuk menyimpan perubahan langsung ke repositori Git.
- **Local Development**: Di browser berbasis Chromium (Chrome/Edge), Sveltia CMS dapat langsung terhubung ke folder lokal repositori Anda menggunakan File System Access API tanpa perlu server backend khusus.

### 3. Mengedit Konten
- **Pengaturan Profil**: Ubah nama, bio, avatar, jumlah tautan per tab paginasi, teks hak cipta, dan meta SEO.
- **Media Sosial**: Masukkan tautan akun sosial (Instagram, WhatsApp, TikTok, YouTube, X, Facebook, Telegram, GitHub, LinkedIn, atau Email).
- **Pinned Link**: Tambah atau urutkan link penting yang disematkan di atas paginasi. Jika semua item dihapus/dikosongkan, section ini tidak akan tampil di halaman depan.
- **Daftar Link**: Tambah, ubah urutan, atau hapus link biasa yang akan dibagi ke dalam tab paginasi.
- Klik **Save** / **Simpan**, dan perubahan akan otomatis di-commit ke Git / file `data/content.json`.
