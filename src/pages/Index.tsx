import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container py-24 md:py-32">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em] mb-6">
            Tithikha Tech — Game 001
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight leading-[1.1] max-w-2xl">
            Collision Theory
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            A precision action game where every collision has a consequence.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <span className="font-mono text-[11px] text-muted-foreground border border-border px-3 py-1.5 rounded-sm">
              Android
            </span>
            <span className="font-mono text-[11px] text-amber border border-amber/30 px-3 py-1.5 rounded-sm">
              In Development
            </span>
          </div>
          <div className="mt-10">
            <Button variant="amber" size="lg" asChild>
              <Link to="/game">
                Explore the System
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What Makes It Different */}
      <section className="border-b border-border">
        <div className="container py-20 md:py-24">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em] mb-10">
            System Statements
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {[
              {
                id: "01",
                title: "Every collision is a decision",
                body: "There are no random encounters. Each impact is the result of trajectory, timing, and intent. The system rewards deliberate control, not reflexive spam.",
              },
              {
                id: "02",
                title: "Consequences compound",
                body: "Beneficial collisions restore. Punitive collisions drain. Chain depth determines whether you're gaining ground or losing it. The math is visible.",
              },
              {
                id: "03",
                title: "Precision over speed",
                body: "The game moves fast but rewards accuracy. Analytics track collision accuracy, chain depth, and damage source — not just score.",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="bg-card p-8 md:p-10"
              >
                <span className="font-mono text-[10px] text-amber tracking-widest">
                  {item.id}
                </span>
                <h3 className="font-heading font-semibold text-base mt-4 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Anchor */}
      <section>
        <div className="container py-20 md:py-24">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em] mb-3">
                Built by
              </p>
              <h2 className="font-heading font-bold text-2xl md:text-3xl">
                Tithikha Tech
              </h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-md leading-relaxed">
                An independent studio focused on systems-driven game design. 
                One game at a time. No shortcuts.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/studio">
                About the Studio
                <ArrowRight size={14} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
