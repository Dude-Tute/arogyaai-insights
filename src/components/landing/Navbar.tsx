import { Activity } from "lucide-react";

export const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container mx-auto px-6 pt-5">
        <nav className="glass rounded-full px-5 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="relative grid place-items-center w-9 h-9 rounded-xl bg-gradient-primary glow-primary">
              <Activity className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
            </span>
            <span className="font-display font-semibold tracking-tight text-lg">
              Arogya<span className="text-gradient">AI</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
            <a href="#dashboard" className="hover:text-foreground transition-colors">Dashboard</a>
            <a href="#research" className="hover:text-foreground transition-colors">Research</a>
          </div>
          <a
            href="#cta"
            className="text-sm font-medium px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Launch Demo
          </a>
        </nav>
      </div>
    </header>
  );
};
