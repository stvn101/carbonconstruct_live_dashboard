import type { VercelRequest, VercelResponse } from "@vercel/node";

// ---------------------------------------------------------------------------
// Types – mirrors the shape used throughout the frontend
// ---------------------------------------------------------------------------

interface LiveFeedItem {
  user: string;
  anonUser: string;
  action: string;
  time: string;
}

interface CarbonData {
  totalSaved: number;
  activeProjects: number;
  efficiency: number;
  trend: { day: string; savings: number }[];
  materials: { category: string; value: number }[];
  liveFeed: LiveFeedItem[];
}

// ---------------------------------------------------------------------------
// Mock fallback – returned when the upstream API is not yet configured
// ---------------------------------------------------------------------------

function mockData(): CarbonData {
  return {
    totalSaved: 1240 + Math.floor(Math.random() * 10),
    activeProjects: 85,
    efficiency: 94,
    trend: [
      { day: "Mon", savings: 120 },
      { day: "Tue", savings: 132 },
      { day: "Wed", savings: 101 },
      { day: "Thu", savings: 154 },
      { day: "Fri", savings: 190 },
      { day: "Sat", savings: 230 },
      { day: "Sun", savings: 210 },
    ],
    materials: [
      { category: "Concrete", value: 45 },
      { category: "Steel", value: 25 },
      { category: "Timber", value: 20 },
      { category: "Glass", value: 10 },
    ],
    liveFeed: [
      { user: "BuildCorp QLD", anonUser: "Tier 1 Builder (QLD)", action: "Saved 12t CO2e", time: "Just now" },
      { user: "EcoStruct NSW", anonUser: "Commercial Project (NSW)", action: "Optimized concrete mix", time: "2m ago" },
      { user: "GreenHomes VIC", anonUser: "Residential Developer (VIC)", action: "Switched to timber frame", time: "5m ago" },
      { user: "UrbanDevelop", anonUser: "Infrastructure Project", action: "Reduced transport emissions", time: "12m ago" },
      { user: "SustainableLiving", anonUser: "Green Star Builder", action: "Saved 5t CO2e", time: "18m ago" },
    ],
  };
}

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow GET requests
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiUrl = process.env.CARBONCONSTRUCT_API_URL;
  const apiKey = process.env.CARBONCONSTRUCT_API_KEY;

  // If no upstream API is configured, serve mock data
  if (!apiUrl) {
    res.setHeader("X-Data-Source", "mock");
    return res.status(200).json(mockData());
  }

  // Forward the caller's Authorization header (or use the server-side API key)
  const authHeader = req.headers.authorization;
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  if (authHeader) {
    headers["Authorization"] = authHeader;
  } else if (apiKey) {
    headers["Authorization"] = `Bearer ${apiKey}`;
  }

  try {
    const upstream = await fetch(`${apiUrl}/dashboard`, { headers });

    if (!upstream.ok) {
      // If upstream returns an auth error, propagate it so the frontend can
      // redirect to the sign-in page rather than silently showing stale data.
      if (upstream.status === 401 || upstream.status === 403) {
        return res.status(upstream.status).json({ error: "Unauthorized" });
      }
      throw new Error(`Upstream responded with ${upstream.status}`);
    }

    const payload = (await upstream.json()) as CarbonData;

    res.setHeader("Cache-Control", "no-store");
    res.setHeader("X-Data-Source", "live");
    return res.status(200).json(payload);
  } catch (err) {
    console.error("[carbon-data] upstream error, falling back to mock:", err);
    res.setHeader("X-Data-Source", "mock-fallback");
    return res.status(200).json(mockData());
  }
}
