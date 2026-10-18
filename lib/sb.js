// Pembungkus REST Supabase (pakai service key, hanya jalan di server)
module.exports = async function sb(path, opts = {}) {
  const k = process.env.SUPABASE_SERVICE_KEY || "";
  const headers = { apikey: k, "Content-Type": "application/json", Prefer: "return=representation", ...opts.headers };
  // kunci lama (service_role) berbentuk JWT dan perlu header Authorization; kunci baru (sb_secret_...) tidak
  if (k.startsWith("eyJ")) headers.Authorization = `Bearer ${k}`;
  const r = await fetch(`${process.env.SUPABASE_URL}/rest/v1/${path}`, { ...opts, headers });
  return { ok: r.ok, data: await r.json().catch(() => null) };
};
