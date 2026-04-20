import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Chrome, Leaf, Zap, TrendingUp, Users, Award, CheckCircle2, Play } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

export default function Landing() {
  useScrollReveal();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success(`Welcome! Check your email at ${email}`);
      setEmail("");
      setLoading(false);
    }, 1000);
  };

  const installExtension = () => {
    toast.info("Extension coming soon to Chrome Web Store");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-green-950/20 to-black text-white font-sans overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold">CarbonConstruct</span>
          </div>
          <Button variant="default" className="bg-primary text-black hover:bg-primary/90" onClick={installExtension}>
            <Chrome className="w-4 h-4 mr-2" /> Install Extension
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            Real-Time Carbon Accountability
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Track Every Gram of Carbon Saved
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join 85+ construction projects across Australia. See live carbon savings from your projects in real-time. Prove your environmental impact to clients and stakeholders.
          </p>

          {/* Primary CTA - Email Capture */}
          <form onSubmit={handleEmailSubmit} className="mb-12">
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary/50"
              />
              <Button
                type="submit"
                disabled={loading}
                className="bg-primary text-black hover:bg-primary/90 whitespace-nowrap"
              >
                {loading ? "Sending..." : "Get Started Free"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">No credit card required • Instant access</p>
          </form>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-primary">1,240t</div>
              <div className="text-xs text-muted-foreground">CO2e Saved</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-primary">85</div>
              <div className="text-xs text-muted-foreground">Active Projects</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <div className="text-3xl font-bold text-primary">94%</div>
              <div className="text-xs text-muted-foreground">Efficiency</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-black hover:bg-primary/90"
              onClick={installExtension}
            >
              <Chrome className="w-5 h-5 mr-2" /> Install Chrome Extension
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/20 hover:text-primary"
            >
              <Play className="w-5 h-5 mr-2" /> Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 reveal opacity-0 translate-y-10 transition-all duration-700">Why CarbonConstruct?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 reveal opacity-0 translate-y-10 transition-all duration-700 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Live Dashboard</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Real-time carbon savings tracking with beautiful Vega charts. See your impact instantly.
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 reveal opacity-0 translate-y-10 transition-all duration-700 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Social Proof</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Share your carbon savings with clients. Build trust through transparency and accountability.
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 reveal opacity-0 translate-y-10 transition-all duration-700 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Chrome className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Chrome Extension</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                One-click access to your live data. Monitor carbon savings from anywhere, anytime.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Dashboard Preview Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">See It Live</h2>
          
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-black to-green-950/40 flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 text-primary mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground">Live Dashboard Preview</p>
                <p className="text-sm text-muted-foreground mt-2">Embed this on your landing page</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extension Features Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Chrome Extension Features</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Real-Time Monitoring</h3>
                  <p className="text-muted-foreground">Track carbon savings as they happen across all your projects.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Anonymous Public Feed</h3>
                  <p className="text-muted-foreground">Share impact with clients without revealing sensitive data.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Glassmorphism Design</h3>
                  <p className="text-muted-foreground">Beautiful, modern interface that looks premium on any device.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Live Activity Feed</h3>
                  <p className="text-muted-foreground">See every project update and carbon savings milestone in real-time.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Vega Charts</h3>
                  <p className="text-muted-foreground">Interactive data visualizations with trend analysis and breakdowns.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">One-Click Install</h3>
                  <p className="text-muted-foreground">Add to Chrome in seconds. No setup required.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Email Capture */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Track Your Impact?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of construction projects proving their environmental commitment.
          </p>

          <form onSubmit={handleEmailSubmit} className="mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary/50"
              />
              <Button
                type="submit"
                disabled={loading}
                className="bg-primary text-black hover:bg-primary/90 whitespace-nowrap"
              >
                {loading ? "Sending..." : "Get Started"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </form>

          <Button
            size="lg"
            className="bg-primary text-black hover:bg-primary/90 w-full sm:w-auto"
            onClick={installExtension}
          >
            <Chrome className="w-5 h-5 mr-2" /> Install Extension Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-5 h-5 text-primary" />
                <span className="font-bold">CarbonConstruct</span>
              </div>
              <p className="text-sm text-muted-foreground">Real-time carbon accountability for construction.</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">Dashboard</a></li>
                <li><a href="#" className="hover:text-primary transition">Extension</a></li>
                <li><a href="#" className="hover:text-primary transition">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">About</a></li>
                <li><a href="#" className="hover:text-primary transition">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <form onSubmit={handleEmailSubmit} className="space-y-2">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary/50 text-sm"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="w-full bg-primary text-black hover:bg-primary/90"
                  disabled={loading}
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 CarbonConstruct. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
