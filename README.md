# Pretest Sistem Operasi (Vercel + Supabase)

## 1. Supabase (gratis)
1. Buat project di supabase.com
2. SQL Editor: jalankan isi `schema.sql`
3. Project Settings > API: salin **Project URL** dan **service_role key** (rahasia, jangan dipublikasikan)

## 2. Deploy ke Vercel
1. Upload folder ini ke repository GitHub
2. Vercel > Add New Project > pilih repo (Framework: Other, biarkan default)
3. Environment Variables:
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_KEY`
   - `ADMIN_KEY` (kata sandi bebas untuk halaman admin)
4. Deploy

## Pemakaian
- Peserta: `https://domain-anda.vercel.app/`
- Admin (lihat nilai & unduh CSV): `https://domain-anda.vercel.app/admin.html`
- Ubah soal: edit `lib/data.js` (jawaban benar = `answer`, indeks mulai dari 0)
- Ubah durasi: `DURATION_MS` di `lib/data.js`
