/* ============================================================
   SERVER.JS — Server Node.js sederhana untuk CV Portfolio
   ============================================================

   CARA MENJALANKAN:
   1. Buka terminal di folder ini
   2. Jalankan: npm install
   3. Jalankan: node server.js
   4. Buka browser: http://localhost:3000

   ============================================================ */

const express = require('express');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3000; // ✏️ GANTI port jika perlu

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sajikan file statis (HTML, CSS, JS, gambar)
app.use(express.static(path.join(__dirname)));

/* ----------------------------------------------------------
   ENDPOINT: Terima pesan dari form kontak
   ✏️ KAMU BISA: Sambungkan ke email (Nodemailer) atau database
   ---------------------------------------------------------- */
app.post('/api/kontak', (req, res) => {
  const { nama, email, pesan } = req.body;

  // Validasi
  if (!nama || !email || !pesan) {
    return res.status(400).json({ sukses: false, pesan: 'Semua kolom wajib diisi.' });
  }

  // Log ke konsol (ganti ini dengan logika simpan ke DB / kirim email)
  console.log('\n📨 Pesan baru masuk:');
  console.log(`   Nama  : ${nama}`);
  console.log(`   Email : ${email}`);
  console.log(`   Pesan : ${pesan}`);
  console.log('─'.repeat(40));

  // ✏️ OPSIONAL: Kirim email dengan Nodemailer
  // const nodemailer = require('nodemailer');
  // const transporter = nodemailer.createTransport({ ... });
  // await transporter.sendMail({ from: email, to: 'kamu@email.com', subject: 'Pesan dari portfolio', text: pesan });

  res.json({ sukses: true, pesan: 'Pesan berhasil diterima!' });
});

/* ----------------------------------------------------------
   Fallback: Semua route lain → index.html
   ---------------------------------------------------------- */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

/* ----------------------------------------------------------
   Jalankan server
   ---------------------------------------------------------- */
app.listen(PORT, () => {
  console.log(`\n🚀 Portfolio berjalan di: http://localhost:${PORT}`);
  console.log('   Tekan Ctrl+C untuk menghentikan\n');
});
