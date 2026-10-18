const sb = require("../lib/sb");

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  if (!process.env.ADMIN_KEY || req.headers["x-admin-key"] !== process.env.ADMIN_KEY)
    return res.status(401).json({ error: "Kunci admin salah." });
  const { data } = await sb("attempts?select=nama,npm,kelas,score,started_at,submitted_at&order=kelas.asc,npm.asc");
  if (req.query.format === "csv") {
    const esc = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const rows = [["Nama", "NPM", "Kelas", "Skor", "Mulai", "Selesai"], ...data.map((r) => [r.nama, r.npm, r.kelas, r.score, r.started_at, r.submitted_at])];
    res.setHeader("Content-Type", "text/csv; charset=utf-8");
    return res.send("\ufeff" + rows.map((r) => r.map(esc).join(",")).join("\n"));
  }
  res.json(data);
};
