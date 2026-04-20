import type { VercelRequest, VercelResponse } from "@vercel/node";

// ---------------------------------------------------------------------------
// POST /api/signin
//
// Proxies sign-in credentials to the CarbonConstruct API and returns the
// session token back to the browser.  When the upstream API is not yet
// configured a development token is returned so the rest of the UI remains
// fully functional during local development.
// ---------------------------------------------------------------------------

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, password } = (req.body ?? {}) as {
    email?: string;
    password?: string;
  };

  if (!email || !password) {
    return res.status(400).json({ error: "email and password are required" });
  }

  const apiUrl = process.env.CARBONCONSTRUCT_API_URL;

  // ---------------------------------------------------------------------------
  // Development / demo mode – no upstream API configured
  // ---------------------------------------------------------------------------
  if (!apiUrl) {
    // Accept any non-empty credentials in dev mode so the UI can be exercised
    // without a real backend.  A clearly-labelled dev token is returned.
    res.setHeader("X-Auth-Source", "dev");
    return res.status(200).json({ token: "dev-token", mode: "development" });
  }

  // ---------------------------------------------------------------------------
  // Production mode – proxy to CarbonConstruct auth endpoint
  // ---------------------------------------------------------------------------
  try {
    const upstream = await fetch(`${apiUrl}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const text = await upstream.text();
    let payload: unknown;
    try {
      payload = JSON.parse(text);
    } catch {
      payload = { error: `Upstream error ${upstream.status}: ${text.slice(0, 200)}` };
    }

    if (!upstream.ok) {
      return res.status(upstream.status).json(payload);
    }

    res.setHeader("X-Auth-Source", "live");
    return res.status(200).json(payload);
  } catch (err) {
    console.error("[signin] upstream error:", err);
    return res.status(502).json({ error: "Unable to reach authentication service" });
  }
}
