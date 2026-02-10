import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Game / Systems", path: "/game" },
  { label: "Pre-Launch", path: "/pre-launch" },
  { label: "Studio", path: "/studio" },
  { label: "Dev Logs", path: "/dev-logs" },
  { label: "Contact", path: "/contact" },
];

const Navigation = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between h-14">
        <Link to="/" className="font-heading font-bold text-sm tracking-wide uppercase">
          <span className="text-foreground">Tithikha</span>
          <span className="text-steel ml-1">Tech</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xs font-heading font-medium tracking-wide uppercase transition-colors ${
                location.pathname === item.path
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-6 py-3 text-xs font-heading font-medium tracking-wide uppercase border-b border-border transition-colors ${
                location.pathname === item.path
                  ? "text-foreground bg-muted"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
