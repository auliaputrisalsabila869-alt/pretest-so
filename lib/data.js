// Dibuat otomatis dari file Gemini. Kunci jawaban HANYA ada di server.
const FULL=[
 {
  "id": 1,
  "points": 7,
  "question": "Di bawah hierarki direktori Linux manakah file krusial sistem seperti kernel (vmlinuz), initramfs, serta konfigurasi bootloader dimuat saat tahap awal inisiasi?",
  "options": [
   "/lib",
   "/etc",
   "/bin",
   "/boot"
  ],
  "answer": 3,
  "explanation": "Direktori /boot menyimpan semua file yang dibutuhkan untuk proses booting sistem Linux, termasuk kernel (vmlinuz) dan ramdisk (initramfs)."
 },
 {
  "id": 2,
  "points": 7,
  "question": "Direktori mana yang digunakan untuk menyimpan seluruh file konfigurasi sistem dan aplikasi pihak ketiga secara global?",
  "options": [
   "/var",
   "/etc",
   "/usr",
   "/sys"
  ],
  "answer": 1,
  "explanation": "Direktori /etc memuat file konfigurasi global sistem (misal: /etc/passwd, /etc/fstab) yang mengontrol perilaku sistem operasi dan layanannya."
 },
 {
  "id": 3,
  "points": 7,
  "question": "Direktori manakah yang berisi file executable/binary dari perintah-perintah dasar Linux yang esensial untuk seluruh pengguna (seperti ls, cp, mv)?",
  "options": [
   "/sbin",
   "/bin",
   "/opt",
   "/dev"
  ],
  "answer": 1,
  "explanation": "Direktori /bin (Essential User Binaries) menyimpan file eksekusi perintah dasar yang siap digunakan baik oleh pengguna biasa maupun superuser."
 },
 {
  "id": 4,
  "points": 7,
  "question": "Di direktori manakah file catat sistem (log files) seperti aktivitas kernel, autentikasi, dan aplikasi disimpan secara dinamis?",
  "options": [
   "/var/log",
   "/tmp",
   "/usr/log",
   "/etc/log"
  ],
  "answer": 0,
  "explanation": "Direktori /var/log menyimpan log historis sistem yang terus bertambah (variable data) untuk keperluan monitoring dan troubleshooting."
 },
 {
  "id": 5,
  "points": 7,
  "question": "Direktori apakah yang berfungsi sebagai direktori 'home' khusus untuk akun administrator/superuser (root)?",
  "options": [
   "/home/root",
   "/root",
   "/admin",
   "/usr/root"
  ],
  "answer": 1,
  "explanation": "Tidak seperti pengguna biasa yang memiliki direktori di /home/username, akun superuser memiliki direktori khusus terpisah yaitu /root."
 },
 {
  "id": 6,
  "points": 7,
  "question": "Manakah direktori filesystem virtual yang menyajikan informasi runtime sistem, status proses, dan konfigurasi kernel secara real-time?",
  "options": [
   "/sys",
   "/dev",
   "/proc",
   "/mnt"
  ],
  "answer": 2,
  "explanation": "Direktori /proc adalah pseudo-filesystem yang tidak memakan ruang harddisk fisik, melainkan digenerate oleh kernel untuk memberikan informasi proses yang berjalan."
 },
 {
  "id": 7,
  "points": 7,
  "question": "Perintah dasar Linux manakah yang digunakan untuk menampilkan lokasi path direktori kerja yang sedang aktif saat ini (Print Working Directory)?",
  "options": [
   "dir",
   "pwd",
   "cd",
   "whereami"
  ],
  "answer": 1,
  "explanation": "Perintah 'pwd' singkatan dari Print Working Directory, digunakan untuk menampilkan path absolut direktori tempat pengguna berada."
 },
 {
  "id": 8,
  "points": 7,
  "question": "Opsi parameter apa yang harus ditambahkan pada perintah 'mkdir' agar direktori baru beserta sub-direktori induknya (parent directory) dapat dibuat sekaligus jika belum ada?",
  "options": [
   "mkdir -r",
   "mkdir -f",
   "mkdir -p",
   "mkdir -a"
  ],
  "answer": 2,
  "explanation": "Flag '-p' (parents) memungkinkan pembuat direktori bercabang/bertingkat sekaligus tanpa error jika parent directory belum ada."
 },
 {
  "id": 9,
  "points": 7,
  "question": "Perintah dasar Linux manakah yang digunakan untuk mencari file atau direktori dalam hierarki sistem berdasarkan nama, ukuran, atau waktu modifikasi?",
  "options": [
   "search",
   "locate",
   "find",
   "grep"
  ],
  "answer": 2,
  "explanation": "Perintah 'find' adalah alat pencarian fleksibel yang memindai pohon direktori fisik berdasarkan atribut file seperti nama (-name), tipe (-type), dll."
 },
 {
  "id": 10,
  "points": 7,
  "question": "Perintah utilitas Linux manakah yang sangat efisien digunakan untuk mencari string teks atau pola karakter tertentu di dalam baris-baris file?",
  "options": [
   "grep",
   "cat",
   "echo",
   "sed"
  ],
  "answer": 0,
  "explanation": "Perintah 'grep' (Global Regular Expression Print) digunakan untuk memfilter dan menampilkan baris teks yang cocok dengan kata/pola yang dicari."
 },
 {
  "id": 11,
  "points": 6,
  "question": "Perintah Linux manakah yang digunakan untuk menyalin (copy) satu atau beberapa file maupun direktori ke lokasi lain?",
  "options": [
   "mv",
   "cp",
   "copy",
   "rsync"
  ],
  "answer": 1,
  "explanation": "Perintah 'cp' digunakan untuk menyalin file atau direktori (gunakan opsi -r untuk menyalin direktori beserta isinya)."
 },
 {
  "id": 12,
  "points": 6,
  "question": "Perintah manakah yang digunakan untuk memindahkan (move) file ke lokasi baru atau untuk mengubah nama file (rename)?",
  "options": [
   "mv",
   "rn",
   "transfer",
   "shift"
  ],
  "answer": 0,
  "explanation": "Perintah 'mv' (move) memiliki fungsi ganda di Linux, yaitu memindahkan lokasi file/direktori atau mengganti namanya jika tujuan berada di lokasi yang sama."
 },
 {
  "id": 13,
  "points": 6,
  "question": "Perintah Linux apa yang digunakan untuk menghapus file atau direktori secara permanen dari sistem?",
  "options": [
   "del",
   "rm",
   "unlink",
   "erase"
  ],
  "answer": 1,
  "explanation": "Perintah 'rm' (remove) digunakan untuk menghapus file. Untuk menghapus direktori non-kosong, digunakan opsi rekursif 'rm -r'."
 },
 {
  "id": 14,
  "points": 6,
  "question": "Manakah kombinasi perintah 'ls' yang digunakan untuk menampilkan seluruh daftar isi direktori, termasuk file atau direktori tersembunyi (hidden files yang diawali titik .)?",
  "options": [
   "ls -l",
   "ls -h",
   "ls -a",
   "ls -s"
  ],
  "answer": 2,
  "explanation": "Opsi '-a' (all) pada perintah 'ls' akan menampilkan semua item dalam direktori tanpa menyembunyikan file dot (seperti .bashrc)."
 },
 {
  "id": 15,
  "points": 6,
  "question": "Perintah manakah yang dapat dijalankan di terminal Linux untuk membuka dokumen dokumentasi/manual petunjuk penggunaan dari suatu perintah?",
  "options": [
   "help",
   "info",
   "guide",
   "man"
  ],
  "answer": 3,
  "explanation": "Perintah 'man' (manual) digunakan untuk menampilkan halaman manual lengkap terkait syntax, fungsi, dan argumen dari suatu perintah di Linux."
 }
];
const PUBLIC=FULL.map(({id,points,question,options})=>({id,points,question,options}));
module.exports={FULL,PUBLIC,DURATION_MS:15*60*1000,GRACE_MS:20*1000};
