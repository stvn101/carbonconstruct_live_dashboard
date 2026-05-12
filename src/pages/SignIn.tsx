import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Leaf, Lock, UserPlus } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

type Mode = "signin" | "signup";

export default function SignIn() {
  const [, setLocation] = useLocation();
  const [mode, setMode] = useState<Mode>("signin");

  // Sign-in state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Sign-up state
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpConfirm, setSignUpConfirm] = useState("");
  const [signUpError, setSignUpError] = useState("");

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

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setSignUpError("");
    if (signUpPassword !== signUpConfirm) {
      setSignUpError("Passwords do not match.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("carbon_auth", "true");
      setLoading(false);
      setLocation("/");
    }, 1500);
  };

  const switchMode = (next: Mode) => {
    setMode(next);
    setSignUpError("");
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
          <CardDescription className="text-center text-muted-foreground">
            {mode === "signin" ? "Sign in to view full project details and live data" : "Create your account to get started"}
          </CardDescription>

          {/* Tab toggle */}
          <div className="flex rounded-lg bg-white/5 border border-white/10 p-1 mt-2">
            <button
              type="button"
              onClick={() => switchMode("signin")}
              className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-colors ${
                mode === "signin"
                  ? "bg-primary text-black"
                  : "text-muted-foreground hover:text-white"
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => switchMode("signup")}
              className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-colors ${
                mode === "signup"
                  ? "bg-primary text-black"
                  : "text-muted-foreground hover:text-white"
              }`}
            >
              Sign Up
            </button>
          </div>
        </CardHeader>

        <CardContent>
          {mode === "signin" ? (
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
                {loading ? (<span className="flex items-center gap-2"><Lock className="w-4 h-4 animate-pulse" /> Authenticating...</span>) : "Sign In"}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signup-name" className="text-white">Full Name</Label>
                <Input id="signup-name" type="text" placeholder="Jane Smith" className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20" value={signUpName} onChange={(e) => setSignUpName(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-email" className="text-white">Email</Label>
                <Input id="signup-email" type="email" placeholder="name@company.com" className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20" value={signUpEmail} onChange={(e) => setSignUpEmail(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-password" className="text-white">Password</Label>
                <Input id="signup-password" type="password" placeholder="Min. 8 characters" className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20" value={signUpPassword} onChange={(e) => setSignUpPassword(e.target.value)} minLength={8} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-confirm" className="text-white">Confirm Password</Label>
                <Input id="signup-confirm" type="password" placeholder="Re-enter your password" className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20" value={signUpConfirm} onChange={(e) => setSignUpConfirm(e.target.value)} minLength={8} required />
              </div>
              {signUpError && (
                <p className="text-sm text-red-400">{signUpError}</p>
              )}
              <Button type="submit" className="w-full bg-primary text-black hover:bg-primary/90 font-medium" disabled={loading}>
                {loading ? (<span className="flex items-center gap-2"><Lock className="w-4 h-4 animate-pulse" /> Creating account...</span>) : (<span className="flex items-center gap-2"><UserPlus className="w-4 h-4" /> Create Account</span>)}
              </Button>
            </form>
          )}

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
