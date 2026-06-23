/* ============================================================
   MAIN.JS — Logika Interaktivitas CV Portfolio
   ============================================================ */

/* ----------------------------------------------------------
   1. DARK / LIGHT MODE TOGGLE
   ---------------------------------------------------------- */
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Cek tema yang tersimpan di browser
const savedTheme = localStorage.getItem('tema') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('tema', next); // Simpan pilihan user
});

/* ----------------------------------------------------------
   2. BURGER MENU (MOBILE)
   ---------------------------------------------------------- */
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burger.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
});

// Tutup menu saat klik tautan
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.textContent = '☰';
  });
});

/* ----------------------------------------------------------
   3. ANIMASI SCROLL (FADE UP)
   ---------------------------------------------------------- */
// Tambahkan class fade-up ke semua elemen yang ingin dianimasikan
const animTargets = [
  '.section-title',
  '.skill-card',
  '.proyek-card',
  '.stat-card',
  '.timeline-item',
  '.tentang-text',
  '.kontak-info',
  '.kontak-form',
];

animTargets.forEach(selector => {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.classList.add('fade-up');
    // Delay berurutan untuk efek cascade
    el.style.transitionDelay = `${i * 0.07}s`;
  });
});

// IntersectionObserver: trigger animasi saat elemen masuk viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* ----------------------------------------------------------
   4. PROGRESS BAR KEAHLIAN
   ---------------------------------------------------------- */
// Trigger animasi bar ketika kartu keahlian masuk viewport
const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target.querySelector('.skill-fill');
        if (fill) {
          const pct = fill.getAttribute('data-pct');
          fill.style.width = pct + '%';
        }
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll('.skill-card').forEach(card => barObserver.observe(card));

/* ----------------------------------------------------------
   5. NAVBAR — Aktif saat scroll
   ---------------------------------------------------------- */
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.25)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

/* ----------------------------------------------------------
   6. FORM KONTAK (Simulasi Kirim)
   ---------------------------------------------------------- */
const form = document.getElementById('kontakForm');
const formStatus = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nama  = document.getElementById('nama').value.trim();
  const email = document.getElementById('email').value.trim();
  const pesan = document.getElementById('pesan').value.trim();

  // Validasi sederhana
  if (!nama || !email || !pesan) {
    formStatus.style.color = '#FF6B6B';
    formStatus.textContent = '⚠️ Harap isi semua kolom.';
    return;
  }

  // ✏️ GANTI: Di sini bisa dihubungkan ke backend Node.js / EmailJS / Formspree
  // Contoh fetch ke backend:
  // fetch('/api/kontak', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ nama, email, pesan })
  // }).then(...)

  // Simulasi loading
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.textContent = 'Mengirim...';
  submitBtn.disabled = true;

  setTimeout(() => {
    formStatus.style.color = '#43E97B';
    formStatus.textContent = '✅ Pesan terkirim! Saya akan segera menghubungi kamu.';
    form.reset();
    submitBtn.textContent = 'Kirim Pesan 🚀';
    submitBtn.disabled = false;
  }, 1500);
});

/* ----------------------------------------------------------
   7. SMOOTH HIGHLIGHT NAVBAR LINK AKTIF
   ---------------------------------------------------------- */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => a.style.color = '');
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.style.color = 'var(--accent)';
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(s => sectionObserver.observe(s));
