import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-[10px]">TT</span>
              </div>
              <span className="font-heading font-bold text-sm tracking-tight">TithikhaTech</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
              Mechanics-first action games built on precision, intelligence, and long-term mastery.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-4">
              Navigation
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "The Game", path: "/game" },
                { label: "Pre-Launch", path: "/pre-launch" },
                { label: "TithikhaTech", path: "/studio" },
                { label: "Dev Logs", path: "/dev-logs" },
                { label: "Contact", path: "/contact" },
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
            <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-4">
              Legal
            </p>
            <div className="flex flex-col gap-2.5">
              <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-muted-foreground">
            © {new Date().getFullYear()} TITHIKHATECH. All rights reserved.
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
