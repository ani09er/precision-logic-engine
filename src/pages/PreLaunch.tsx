import Layout from "@/components/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const PreLaunch = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <Layout>
      {/* Header */}
      <section className="border-b border-border">
        <div className="container py-16 md:py-20">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em] mb-4">
            Status — Pre-Launch
          </p>
          <h1 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
            Coming Soon
          </h1>
          <p className="mt-4 text-base text-muted-foreground max-w-lg leading-relaxed">
            Collision Theory is in active development. This page provides current status and next steps.
          </p>
        </div>
      </section>

      {/* Development Status */}
      <section className="border-b border-border">
        <div className="container py-14">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
            <div>
              <p className="font-mono text-[10px] text-amber uppercase tracking-[0.3em]">
                Current Phase
              </p>
            </div>
            <div className="max-w-xl">
              <div className="space-y-6">
                {[
                  { phase: "Core Systems", status: "Complete", active: false },
                  { phase: "Level Design", status: "In Progress", active: true },
                  { phase: "Internal Testing", status: "Upcoming", active: false },
                  { phase: "Closed Beta", status: "Planned", active: false },
                  { phase: "Public Launch", status: "Planned", active: false },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className={`w-2 h-2 rounded-full ${item.active ? "bg-amber" : item.status === "Complete" ? "bg-foreground" : "bg-border"}`} />
                    <div className="flex-1">
                      <p className={`text-sm font-heading font-medium ${item.active ? "text-foreground" : "text-muted-foreground"}`}>
                        {item.phase}
                      </p>
                    </div>
                    <span className={`font-mono text-[10px] uppercase tracking-widest ${item.active ? "text-amber" : "text-muted-foreground"}`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform & Testing */}
      <section className="border-b border-border">
        <div className="container py-14">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
            <div>
              <p className="font-mono text-[10px] text-amber uppercase tracking-[0.3em]">
                Platform
              </p>
            </div>
            <div className="max-w-xl space-y-4">
              <div className="border border-border rounded-sm p-4">
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Target Platform</p>
                <p className="text-sm font-heading font-medium">Android — Google Play</p>
              </div>
              <div className="border border-border rounded-sm p-4">
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Testing Plan</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Internal QA → Closed testing group → Open beta → Public release. Each phase requires passing defined quality gates before progression.
                </p>
              </div>
              <div className="border border-border rounded-sm p-4">
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Monetization</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Monetization strategy will be disclosed prior to public launch. No predatory mechanics. No pay-to-win. Details will be documented transparently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Note */}
      <section className="border-b border-border">
        <div className="container py-14">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
            <div>
              <p className="font-mono text-[10px] text-amber uppercase tracking-[0.3em]">
                Developer Note
              </p>
            </div>
            <div className="max-w-xl border-l-2 border-amber pl-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                To reviewers and platform evaluators:
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Collision Theory is being developed with full awareness of Google Play's policies regarding content, monetization, and user safety. All testing phases are designed to surface and resolve compliance issues before public availability.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If you have questions about any aspect of this product, please contact us directly via the contact page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notify */}
      <section>
        <div className="container py-14">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
            <div>
              <p className="font-mono text-[10px] text-amber uppercase tracking-[0.3em]">
                Notify Me
              </p>
            </div>
            <div className="max-w-xl">
              {submitted ? (
                <div className="border border-border rounded-sm p-6">
                  <p className="text-sm font-heading font-medium mb-1">Noted.</p>
                  <p className="text-xs text-muted-foreground">
                    We'll notify you when Collision Theory enters public testing. No spam. No marketing.
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Enter your email to receive a single notification when public testing begins. No marketing emails. No third-party sharing.
                  </p>
                  <form onSubmit={handleSubmit} className="flex gap-3">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="flex-1 bg-card border border-border rounded-sm px-4 py-2.5 text-sm font-mono placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                    />
                    <Button variant="amber" type="submit">
                      Notify
                    </Button>
                  </form>
                  <p className="mt-3 font-mono text-[10px] text-muted-foreground">
                    Your email is stored only for notification purposes and will not be shared.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PreLaunch;
