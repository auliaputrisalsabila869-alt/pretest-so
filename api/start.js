const sb = require("../lib/sb");
const { PUBLIC, DURATION_MS, GRACE_MS } = require("../lib/data");

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).end();
  const nama = String(req.body?.nama || "").trim().slice(0, 100);
  const npm = String(req.body?.npm || "").trim().toUpperCase();
  const kelas = String(req.body?.kelas || "").trim();
  if (!nama || !/^[A-Za-z0-9]{5,20}$/.test(npm) || !kelas)
    return res.status(400).json({ error: "Data identitas belum valid. NPM hanya huruf/angka (5-20 karakter)." });

  let row = (await sb(`attempts?npm=eq.${encodeURIComponent(npm)}&select=*`)).data?.[0];
  if (row?.submitted_at) return res.status(409).json({ error: "NPM ini sudah mengerjakan pretest." });
  if (!row) {
    const ins = await sb("attempts", { method: "POST", body: JSON.stringify({ npm, nama, kelas }) });
    row = ins.data?.[0] || (await sb(`attempts?npm=eq.${encodeURIComponent(npm)}&select=*`)).data?.[0]; // jika dua permintaan bersamaan
    if (!row) return res.status(500).json({ error: "Gagal memulai. Coba lagi." });
  }
  if (row.submitted_at) return res.status(409).json({ error: "NPM ini sudah mengerjakan pretest." });
  const deadline = new Date(row.started_at).getTime() + DURATION_MS;
  if (Date.now() > deadline + GRACE_MS)
    return res.status(410).json({ error: "Waktu pengerjaan untuk NPM ini sudah habis." });
  res.json({ questions: PUBLIC, deadline, serverNow: Date.now() });
};
