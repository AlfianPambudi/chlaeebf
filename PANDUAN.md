# 📋 PANDUAN EDIT CV PORTFOLIO

## 🚀 Cara Menjalankan

```bash
# 1. Masuk ke folder
cd cv-portfolio

# 2. Install dependencies
npm install

# 3. Jalankan server
node server.js

# 4. Buka browser
# http://localhost:3000
```

---

## ✏️ DAFTAR LENGKAP YANG PERLU DIGANTI

### 📄 FILE: `index.html`

| Yang Diganti | Cari Teks Ini | Contoh Isinya |
|---|---|---|
| Inisial navbar | `<span>AK</span>` | `<span>JD</span>` |
| Jabatan / peran | `UI/UX Designer & Frontend Developer` | `Backend Developer` |
| Nama besar hero | `Andi<br><em>Kurniawan</em>` | `John<br><em>Doe</em>` |
| Tagline | teks di `hero-desc` | Ganti 1 kalimat |
| Foto | `assets/foto.jpg` | Taruh foto di folder `assets/` |
| Paragraf tentang | teks di `tentang-text` | Tulis tentang dirimu |
| Angka statistik | nilai `stat-num` | 5+, 20+, dst |
| Kartu keahlian | `skill-card` | Tambah/hapus kartu |
| % keahlian | `data-pct="90"` | Nilai 0–100 |
| Kartu proyek | `proyek-card` | Tambah/hapus kartu |
| Link proyek | `href="#"` | Isi URL proyek |
| Timeline | `timeline-item` | Tambah/hapus item |
| Email kontak | `kamu@email.com` | Email aslimu |
| Lokasi | `Jakarta, Indonesia` | Kotamu |
| LinkedIn | URL LinkedIn | URL profilmu |
| GitHub | URL GitHub | URL profilmu |
| Footer | nama di `<strong>` | Namamu |

---

### 🎨 FILE: `css/style.css` — Ubah Warna

Buka bagian paling atas file. Ubah nilai hex sesuai selera:

**Tema Gelap:**
```css
[data-theme="dark"] {
  --accent:  #7C6FFF;   /* Warna utama (ungu) */
  --accent2: #3ECFCF;   /* Warna kedua (cyan) */
  --bg:      #0D0D12;   /* Latar belakang */
}
```

**Tema Terang:**
```css
[data-theme="light"] {
  --accent:  #5A4FE0;   /* Warna utama */
  --accent2: #1AABAB;   /* Warna kedua */
  --bg:      #F5F5FF;   /* Latar belakang */
}
```

> **Tips:** Gunakan https://coolors.co untuk pilih kombinasi warna keren!

---

### ⚙️ FILE: `js/main.js` — Sambungkan Form ke Backend

Cari baris ini di `main.js`:
```js
// ✏️ GANTI: Di sini bisa dihubungkan ke backend Node.js
```

Ganti dengan:
```js
fetch('/api/kontak', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nama, email, pesan })
})
.then(r => r.json())
.then(data => console.log(data));
```

---

### 🖥️ FILE: `server.js` — Terima Data Form

Form otomatis terhubung ke `/api/kontak`. Tinggal tambahkan logika di sini:
- **Simpan ke database** → pakai `mysql2` atau `mongoose`
- **Kirim email** → pakai `nodemailer`
- **Log saja** → sudah berfungsi by default

---

## 📁 Struktur File

```
cv-portfolio/
├── index.html      ← Konten utama (ubah teks & data di sini)
├── server.js       ← Server Node.js
├── package.json    ← Daftar library
├── PANDUAN.md      ← File ini
├── css/
│   └── style.css   ← Semua tampilan & warna
├── js/
│   └── main.js     ← Logika interaktif
└── assets/
    └── foto.jpg    ← Taruh foto kamu di sini
```

---

## 💡 Tips Cepat

- **Tambah proyek baru:** Copy-paste satu blok `<div class="proyek-card">` di `index.html`
- **Hapus section:** Hapus seluruh blok `<section>` yang tidak diperlukan
- **Ganti font:** Ubah URL Google Fonts di `<head>` dan nama font di `css/style.css`
- **Port berbeda:** Ubah `PORT = 3000` di `server.js`
