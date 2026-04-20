import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-8">Page not found</p>
      <Button onClick={() => setLocation("/")} className="bg-primary text-black hover:bg-primary/90">
        Go Home
      </Button>
    </div>
  );
}
