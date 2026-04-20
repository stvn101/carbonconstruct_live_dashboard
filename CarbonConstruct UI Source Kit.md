# CarbonConstruct UI Source Kit

This file contains the exact code used to build the "Eco-Glass Futurism" interface for CarbonConstruct. You can provide this file to an AI coding assistant (like Lovable) to replicate the design pixel-perfectly.

## 1. Global Styles & Theme (`index.css`)
This defines the neon green color palette, dark glassmorphism variables, and font settings.

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

:root {
  /* Eco-Glass Futurism - Light Mode (Fallback) */
  --primary: oklch(0.75 0.2 145); /* Neon Green */
  --primary-foreground: oklch(0.15 0.05 145);
  --sidebar-primary: oklch(0.75 0.2 145);
  --sidebar-primary-foreground: oklch(0.15 0.05 145);
  --chart-1: oklch(0.75 0.2 145);
  --chart-2: oklch(0.65 0.18 150);
  --chart-3: oklch(0.55 0.15 155);
  --chart-4: oklch(0.45 0.12 160);
  --chart-5: oklch(0.35 0.1 165);
  --radius: 0.75rem;
  --background: oklch(0.98 0.01 145);
  --foreground: oklch(0.15 0.05 145);
  --card: oklch(1 0 0 / 0.6);
  --card-foreground: oklch(0.15 0.05 145);
  --popover: oklch(1 0 0 / 0.8);
  --popover-foreground: oklch(0.15 0.05 145);
  --secondary: oklch(0.95 0.02 145);
  --secondary-foreground: oklch(0.25 0.05 145);
  --muted: oklch(0.92 0.02 145);
  --muted-foreground: oklch(0.45 0.05 145);
  --accent: oklch(0.92 0.02 145);
  --accent-foreground: oklch(0.15 0.05 145);
  --destructive: oklch(0.6 0.2 25);
  --destructive-foreground: oklch(0.98 0 0);
  --border: oklch(0.2 0.05 145 / 0.1);
  --input: oklch(0.2 0.05 145 / 0.1);
  --ring: oklch(0.75 0.2 145);
  --sidebar: oklch(0.98 0.01 145);
  --sidebar-foreground: oklch(0.15 0.05 145);
  --sidebar-accent: oklch(0.95 0.02 145);
  --sidebar-accent-foreground: oklch(0.15 0.05 145);
  --sidebar-border: oklch(0.2 0.05 145 / 0.1);
  --sidebar-ring: oklch(0.75 0.2 145);
}

.dark {
  /* Eco-Glass Futurism - Dark Mode (Primary) */
  --primary: oklch(0.85 0.22 145); /* Bright Neon Green */
  --primary-foreground: oklch(0.1 0.05 145);
  --sidebar-primary: oklch(0.85 0.22 145);
  --sidebar-primary-foreground: oklch(0.1 0.05 145);
  --background: oklch(0.12 0.05 145); /* Deep Forest Green/Black */
  --foreground: oklch(0.95 0.02 145);
  --card: oklch(0.15 0.05 145 / 0.4); /* Translucent Dark Glass */
  --card-foreground: oklch(0.95 0.02 145);
  --popover: oklch(0.15 0.05 145 / 0.8);
  --popover-foreground: oklch(0.95 0.02 145);
  --secondary: oklch(0.2 0.05 145 / 0.5);
  --secondary-foreground: oklch(0.9 0.05 145);
  --muted: oklch(0.2 0.05 145 / 0.3);
  --muted-foreground: oklch(0.7 0.05 145);
  --accent: oklch(0.25 0.08 145 / 0.5);
  --accent-foreground: oklch(0.95 0.02 145);
  --destructive: oklch(0.6 0.2 25);
  --destructive-foreground: oklch(0.98 0 0);
  --border: oklch(0.95 0.02 145 / 0.1); /* Subtle Frost Border */
  --input: oklch(0.95 0.02 145 / 0.1);
  --ring: oklch(0.85 0.22 145);
  --chart-1: oklch(0.85 0.22 145);
  --chart-2: oklch(0.75 0.2 150);
  --chart-3: oklch(0.65 0.18 155);
  --chart-4: oklch(0.55 0.15 160);
  --chart-5: oklch(0.45 0.12 165);
  --sidebar: oklch(0.12 0.05 145);
  --sidebar-foreground: oklch(0.95 0.02 145);
  --sidebar-accent: oklch(0.25 0.08 145 / 0.5);
  --sidebar-accent-foreground: oklch(0.95 0.02 145);
  --sidebar-border: oklch(0.95 0.02 145 / 0.1);
  --sidebar-ring: oklch(0.85 0.22 145);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground font-sans;
    font-family: 'Inter', sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Space Grotesk', sans-serif;
  }
}
```

## 2. Dashboard Component (`Dashboard.tsx`)
The main dashboard layout with glass cards, live feed, and charts.

```tsx
import VegaChart from "@/components/VegaChart";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { CarbonData, fetchCarbonData } from "@/lib/api";
import { ArrowUpRight, Eye, EyeOff, Leaf, Loader2, LogIn, LogOut, Wind, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { VisualizationSpec } from "vega-embed";
import { useLocation } from "wouter";

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const [data, setData] = useState<CarbonData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("carbon_auth") === "true";
    setIsAuthenticated(auth);

    const loadData = async () => {
      try {
        const result = await fetchCarbonData();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
    const interval = setInterval(loadData, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("carbon_auth");
    setIsAuthenticated(false);
  };

  if (loading && !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-primary">
        <Loader2 className="w-10 h-10 animate-spin" />
      </div>
    );
  }

  if (!data) return null;

  const trendSpec: VisualizationSpec = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    width: "container",
    height: 200,
    data: { values: data.trend },
    mark: {
      type: "area",
      line: { color: "#39FF14" },
      color: {
        x1: 1,
        y1: 1,
        x2: 1,
        y2: 0,
        gradient: "linear",
        stops: [
          { offset: 0, color: "rgba(57, 255, 20, 0)" },
          { offset: 1, color: "rgba(57, 255, 20, 0.5)" },
        ],
      },
    },
    encoding: {
      x: { field: "day", type: "ordinal", axis: { labelAngle: 0, title: null } },
      y: { field: "savings", type: "quantitative", axis: { title: null, grid: false } },
      tooltip: [{ field: "day" }, { field: "savings", title: "CO2e Saved (t)" }],
    },
  };

  const materialSpec: VisualizationSpec = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    width: "container",
    height: 200,
    data: { values: data.materials },
    mark: { type: "arc", innerRadius: 50, outerRadius: 80 },
    encoding: {
      theta: { field: "value", type: "quantitative" },
      color: {
        field: "category",
        type: "nominal",
        scale: { range: ["#39FF14", "#00E676", "#87BC87", "#2E7D32"] },
        legend: { title: null, orient: "bottom" },
      },
      tooltip: [{ field: "category" }, { field: "value", title: "Percentage" }],
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-green-950/20 to-black text-white p-4 font-sans selection:bg-primary selection:text-black">
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/20 rounded-full backdrop-blur-md border border-primary/30">
            <Leaf className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">CarbonConstruct</h1>
            <div className="flex items-center gap-2">
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Live Dashboard</p>
              <Badge variant="outline" className="text-[10px] h-4 px-1 border-white/20 text-muted-foreground">
                {isAuthenticated ? "PRIVATE VIEW" : "PUBLIC VIEW"}
              </Badge>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <Button variant="ghost" className="text-muted-foreground hover:text-white hover:bg-white/10" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" /> Sign Out
            </Button>
          ) : (
            <Button variant="outline" className="border-primary/30 hover:bg-primary/20 hover:text-primary backdrop-blur-sm" onClick={() => setLocation("/signin")}>
              <LogIn className="w-4 h-4 mr-2" /> Sign In
            </Button>
          )}
          <Button variant="default" className="bg-primary text-black hover:bg-primary/90">
            Connect SaaS <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Wind className="w-4 h-4 text-primary" /> Total CO2e Saved
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-white tracking-tighter">{data.totalSaved}t</div>
            <p className="text-xs text-primary mt-1 flex items-center">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" /> Active Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-white tracking-tighter">{data.activeProjects}</div>
            <p className="text-xs text-muted-foreground mt-1">Across Australia</p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Leaf className="w-4 h-4 text-primary" /> Material Efficiency
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-white tracking-tighter">{data.efficiency}%</div>
            <p className="text-xs text-primary mt-1">Top 5% of industry</p>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-2 bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl">
          <CardHeader>
            <CardTitle>Carbon Savings Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <VegaChart spec={trendSpec} className="w-full" />
          </CardContent>
        </Card>

        <Card className="row-span-2 bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                Live Activity
                {!isAuthenticated && (
                  <Badge variant="secondary" className="bg-white/10 text-xs font-normal">
                    <EyeOff className="w-3 h-3 mr-1" /> Anonymized
                  </Badge>
                )}
              </div>
              <Badge variant="outline" className="border-primary/50 text-primary animate-pulse">LIVE</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] pr-4">
              <div className="space-y-6">
                {data.liveFeed.map((item, i) => (
                  <div key={i} className="flex flex-col gap-1 group">
                    <div className="flex items-center justify-between">
                      <span className={`font-medium text-sm transition-colors ${isAuthenticated ? "text-white group-hover:text-primary" : "text-muted-foreground italic"}`}>
                        {isAuthenticated ? item.user : item.anonUser}
                      </span>
                      <span className="text-xs text-muted-foreground">{item.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.action}</p>
                    <Separator className="bg-white/5 mt-2" />
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-2 bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl">
          <CardHeader>
            <CardTitle>Material Impact Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <VegaChart spec={materialSpec} className="w-full" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
```

## 3. Sign In Page (`SignIn.tsx`)
The glassmorphism login screen.

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Leaf, Lock } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function SignIn() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("carbon_auth", "true");
      setLoading(false);
      setLocation("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-green-950/40 to-black p-4 font-sans">
      <Card className="w-full max-w-md bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-primary/20 rounded-full backdrop-blur-md border border-primary/30">
              <Leaf className="w-8 h-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center text-white tracking-tight">CarbonConstruct</CardTitle>
          <CardDescription className="text-center text-muted-foreground">Sign in to view full project details and live data</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input id="email" type="email" placeholder="name@company.com" className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">Password</Label>
              <Input id="password" type="password" className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <Button type="submit" className="w-full bg-primary text-black hover:bg-primary/90 font-medium" disabled={loading}>
              {loading ? <span className="flex items-center gap-2"><Lock className="w-4 h-4 animate-pulse" /> Authenticating...</span> : "Sign In"}
            </Button>
          </form>
          <div className="mt-6 text-center">
            <Button variant="link" className="text-muted-foreground hover:text-primary" onClick={() => setLocation("/")}>
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Public Dashboard
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
```

## 4. Vega Chart Component (`VegaChart.tsx`)
The wrapper for rendering the glowing charts.

```tsx
import { useEffect, useRef } from "react";
import embed, { VisualizationSpec } from "vega-embed";

interface VegaChartProps {
  spec: VisualizationSpec;
  className?: string;
}

export default function VegaChart({ spec, className }: VegaChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      embed(containerRef.current, spec, {
        mode: "vega-lite",
        actions: false,
        theme: "dark",
        renderer: "svg",
        config: {
          background: "transparent",
          view: { stroke: "transparent" },
          axis: {
            domainColor: "rgba(255, 255, 255, 0.2)",
            gridColor: "rgba(255, 255, 255, 0.1)",
            labelColor: "rgba(255, 255, 255, 0.7)",
            titleColor: "rgba(255, 255, 255, 0.9)",
            labelFont: "Inter, sans-serif",
            titleFont: "Space Grotesk, sans-serif",
          },
          legend: {
            labelColor: "rgba(255, 255, 255, 0.7)",
            titleColor: "rgba(255, 255, 255, 0.9)",
            labelFont: "Inter, sans-serif",
            titleFont: "Space Grotesk, sans-serif",
          },
          title: {
            color: "rgba(255, 255, 255, 0.9)",
            font: "Space Grotesk, sans-serif",
          },
        },
      }).catch(console.error);
    }
  }, [spec]);

  return <div ref={containerRef} className={className} />;
}
```
