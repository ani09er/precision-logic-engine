import Layout from "@/components/Layout";

const Studio = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="border-b border-border">
        <div className="container py-16 md:py-20">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em] mb-4">
            About — Tithikha Tech
          </p>
          <h1 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
            Studio
          </h1>
          <p className="mt-4 text-base text-muted-foreground max-w-lg leading-relaxed">
            An independent studio building systems-driven games. One at a time.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="border-b border-border">
        <div className="container py-14">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
            <div>
              <p className="font-mono text-[10px] text-amber uppercase tracking-[0.3em]">
                Mission
              </p>
            </div>
            <div className="max-w-xl">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Tithikha Tech exists to build games where systems matter more than spectacle. We believe that the best games teach players to think — not just react.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We don't chase trends. We don't clone. We build from first principles, test rigorously, and ship when the system works — not when a deadline says so.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="border-b border-border">
        <div className="container py-14">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
            <div>
              <p className="font-mono text-[10px] text-amber uppercase tracking-[0.3em]">
                Design Philosophy
              </p>
            </div>
            <div className="max-w-xl space-y-6">
              {[
                {
                  principle: "Systems over stories",
                  detail: "Narrative emerges from how systems interact, not from scripted events. Players create meaning through decisions.",
                },
                {
                  principle: "Readability over beauty",
                  detail: "Every visual element must serve comprehension. If it doesn't help the player understand the system, it doesn't exist.",
                },
                {
                  principle: "Consequence over reward",
                  detail: "Players should feel the weight of their decisions — not be congratulated for participation.",
                },
                {
                  principle: "Transparency over mystery",
                  detail: "Game rules should be discoverable and verifiable. We don't hide mechanics behind obfuscation.",
                },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-border pl-6">
                  <p className="text-sm font-heading font-semibold mb-1">{item.principle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Systems Matter */}
      <section className="border-b border-border">
        <div className="container py-14">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
            <div>
              <p className="font-mono text-[10px] text-amber uppercase tracking-[0.3em]">
                Why Systems
              </p>
            </div>
            <div className="max-w-xl">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Most games are designed around content — levels, cutscenes, collectibles. Content is consumed and forgotten. Systems are learned and internalized.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A well-designed system creates replayability not through randomness but through depth. The player returns because they understand more — not because they haven't seen everything yet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Long-Term Direction */}
      <section>
        <div className="container py-14">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
            <div>
              <p className="font-mono text-[10px] text-amber uppercase tracking-[0.3em]">
                Direction
              </p>
            </div>
            <div className="max-w-xl">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Collision Theory is the first product. The studio's long-term interest is in the intersection of decision systems and interactive media.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We don't make promises about future titles. We focus on finishing what we've started — properly — and then deciding what's next based on what we've learned.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Studio;
