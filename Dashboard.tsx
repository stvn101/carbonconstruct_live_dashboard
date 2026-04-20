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
    // Check auth status
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
    const interval = setInterval(loadData, 5000); // Poll every 5 seconds
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
      {/* Header */}
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
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-white hover:bg-white/10"
              onClick={handleSignOut}
            >
              <LogOut className="w-4 h-4 mr-2" /> Sign Out
            </Button>
          ) : (
            <Button
              variant="outline"
              className="border-primary/30 hover:bg-primary/20 hover:text-primary backdrop-blur-sm"
              onClick={() => setLocation("/signin")}
            >
              <LogIn className="w-4 h-4 mr-2" /> Sign In
            </Button>
          )}
          <Button variant="default" className="bg-primary text-black hover:bg-primary/90">
            Connect SaaS <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Key Metrics - Glass Cards */}
        <Card className="bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Wind className="w-4 h-4 text-primary" /> Total CO2e Saved
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-white tracking-tighter">{data.totalSaved}t</div>
            <p className="text-xs text-primary mt-1 flex items-center">
              +12% from last month
            </p>
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

        {/* Charts Section */}
        <Card className="col-span-1 md:col-span-2 bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl">
          <CardHeader>
            <CardTitle>Carbon Savings Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <VegaChart spec={trendSpec} className="w-full" />
          </CardContent>
        </Card>

        {/* Live Feed */}
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
              <Badge variant="outline" className="border-primary/50 text-primary animate-pulse">
                LIVE
              </Badge>
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

        {/* Material Breakdown Chart */}
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
