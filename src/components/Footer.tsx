import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-heading font-bold text-sm tracking-wide uppercase mb-3">
              <span className="text-foreground">Tithikha</span>
              <span className="text-steel ml-1">Tech</span>
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
              Independent game development studio focused on systems-driven design and deliberate gameplay.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-3">
              Navigation
            </p>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "Game / Systems", path: "/game" },
                { label: "Pre-Launch", path: "/pre-launch" },
                { label: "Studio", path: "/studio" },
                { label: "Dev Logs", path: "/dev-logs" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-3">
              Legal
            </p>
            <div className="flex flex-col gap-2">
              <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-muted-foreground">
            © {new Date().getFullYear()} TITHIKHA TECH. All rights reserved.
          </p>
          <p className="font-mono text-[10px] text-muted-foreground">
            Collision Theory — Android · In Development
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
