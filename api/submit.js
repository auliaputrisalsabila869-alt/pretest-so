const sb = require("../lib/sb");
const { FULL, DURATION_MS, GRACE_MS } = require("../lib/data");

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).end();
  const npm = String(req.body?.npm || "").trim().toUpperCase();
  const answers = Array.isArray(req.body?.answers) ? req.body.answers : [];
  const row = (await sb(`attempts?npm=eq.${encodeURIComponent(npm)}&select=*`)).data?.[0];
  if (!row) return res.status(404).json({ error: "Data peserta tidak ditemukan." });
  if (row.submitted_at) return res.status(409).json({ error: "Jawaban sudah pernah dikirim." });
  if (Date.now() > new Date(row.started_at).getTime() + DURATION_MS + GRACE_MS)
    return res.status(410).json({ error: "Waktu habis, jawaban tidak dapat diterima." });

  const picked = FULL.map((_, i) => (Number.isInteger(answers[i]) ? answers[i] : null));
  const score = FULL.reduce((s, q, i) => s + (picked[i] === q.answer ? q.points : 0), 0);
  // filter submitted_at=is.null mencegah kirim ganda secara bersamaan
  const upd = await sb(`attempts?id=eq.${row.id}&submitted_at=is.null`, {
    method: "PATCH",
    body: JSON.stringify({ answers: picked, score, submitted_at: new Date().toISOString() }),
  });
  if (!upd.data?.length) return res.status(409).json({ error: "Jawaban sudah pernah dikirim." });

  res.json({
    score, total: FULL.reduce((s, q) => s + q.points, 0),
    review: FULL.map((q, i) => ({ ...q, picked: picked[i] })),
  });
};
