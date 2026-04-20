export interface CarbonData {
  totalSaved: number;
  activeProjects: number;
  efficiency: number;
  trend: { day: string; savings: number }[];
  materials: { category: string; value: number }[];
  liveFeed: { user: string; anonUser: string; action: string; time: string }[];
}

export interface SignInResult {
  token: string;
  mode?: string;
}

// ---------------------------------------------------------------------------
// fetchCarbonData
// Calls the /api/carbon-data serverless endpoint. If an auth token is stored
// in localStorage it is forwarded so the upstream API can return the
// authenticated (non-anonymised) data set.
// ---------------------------------------------------------------------------
export const fetchCarbonData = async (): Promise<CarbonData> => {
  const headers: Record<string, string> = { Accept: "application/json" };

  const token = localStorage.getItem("carbon_token");
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch("/api/carbon-data", { headers });

  if (!res.ok) {
    if (res.status === 401 || res.status === 403) {
      // Token is invalid – clear local state so the UI can re-prompt
      localStorage.removeItem("carbon_auth");
      localStorage.removeItem("carbon_token");
    }
    throw new Error(`Failed to fetch carbon data (${res.status})`);
  }

  return res.json() as Promise<CarbonData>;
};

// ---------------------------------------------------------------------------
// signIn
// Calls the /api/signin serverless endpoint which proxies credentials to the
// CarbonConstruct API. On success the returned JWT is persisted in
// localStorage for subsequent authenticated requests.
// ---------------------------------------------------------------------------
export const signIn = async (email: string, password: string): Promise<void> => {
  const res = await fetch("/api/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const body = (await res.json().catch(() => ({}))) as { error?: string };
    throw new Error(body.error ?? "Sign-in failed");
  }

  const data = (await res.json()) as SignInResult;
  localStorage.setItem("carbon_token", data.token);
  localStorage.setItem("carbon_auth", "true");
};
