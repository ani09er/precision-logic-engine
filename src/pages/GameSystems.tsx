import Layout from "@/components/Layout";

const GameSystems = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="border-b border-border">
        <div className="container py-16 md:py-20">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em] mb-4">
            Collision Theory — System Reference
          </p>
          <h1 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
            Game / Systems
          </h1>
          <p className="mt-4 text-base text-muted-foreground max-w-lg leading-relaxed">
            How the game works, explained like a system — not a pitch.
          </p>
        </div>
      </section>

      {/* Core Movement */}
      <section className="border-b border-border">
        <div className="container py-14">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
            <div>
              <p className="font-mono text-[10px] text-amber uppercase tracking-[0.3em]">
                Section 01
              </p>
              <h2 className="font-heading font-semibold text-lg mt-2">
                Core Movement Logic
              </h2>
            </div>
            <div className="max-w-xl">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The player entity moves automatically along a primary axis. The player's role is to adjust trajectory — not to initiate motion. This creates a persistent state of controlled drift where inputs are corrective, not propulsive.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Movement precision is the foundation of all other systems. Without accurate trajectory control, collision outcomes become random — and the game punishes randomness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collision Types */}
      <section className="border-b border-border">
        <div className="container py-14">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
            <div>
              <p className="font-mono text-[10px] text-amber uppercase tracking-[0.3em]">
                Section 02
              </p>
              <h2 className="font-heading font-semibold text-lg mt-2">
                Collision Types
              </h2>
            </div>
            <div className="max-w-xl">
              <div className="border border-border rounded-sm overflow-hidden">
                <div className="grid grid-cols-3 bg-muted">
                  <div className="px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Type</div>
                  <div className="px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Effect</div>
                  <div className="px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Outcome</div>
                </div>
                {[
                  { type: "Beneficial", effect: "HP Recovery", outcome: "Sustains chain" },
                  { type: "Punitive", effect: "HP Drain", outcome: "Breaks chain" },
                  { type: "Neutral", effect: "Trajectory Shift", outcome: "Repositions" },
                  { type: "Chain", effect: "Multiplied", outcome: "Compounds benefit" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 border-t border-border">
                    <div className="px-4 py-3 text-xs font-heading font-medium">{row.type}</div>
                    <div className="px-4 py-3 text-xs text-muted-foreground">{row.effect}</div>
                    <div className="px-4 py-3 text-xs text-muted-foreground">{row.outcome}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enemy Logic */}
      <section className="border-b border-border">
        <div className="container py-14">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
            <div>
              <p className="font-mono text-[10px] text-amber uppercase tracking-[0.3em]">
                Section 03
              </p>
              <h2 className="font-heading font-semibold text-lg mt-2">
                Enemy Logic
              </h2>
            </div>
            <div className="max-w-xl">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Enemy entities follow deterministic patterns with variance introduced through level context — not randomness. Each enemy type has a defined behavior table:
              </p>
              <div className="border border-border rounded-sm overflow-hidden">
                <div className="grid grid-cols-3 bg-muted">
                  <div className="px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Entity</div>
                  <div className="px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Pattern</div>
                  <div className="px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Threat</div>
                </div>
                {[
                  { entity: "Drifter", pattern: "Linear, predictable", threat: "Low" },
                  { entity: "Seeker", pattern: "Follows trajectory", threat: "Medium" },
                  { entity: "Blocker", pattern: "Static, area denial", threat: "Contextual" },
                  { entity: "Splitter", pattern: "Fragments on collision", threat: "High" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 border-t border-border">
                    <div className="px-4 py-3 text-xs font-heading font-medium">{row.entity}</div>
                    <div className="px-4 py-3 text-xs text-muted-foreground">{row.pattern}</div>
                    <div className="px-4 py-3 text-xs text-muted-foreground">{row.threat}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HP Model */}
      <section className="border-b border-border">
        <div className="container py-14">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
            <div>
              <p className="font-mono text-[10px] text-amber uppercase tracking-[0.3em]">
                Section 04
              </p>
              <h2 className="font-heading font-semibold text-lg mt-2">
                HP Model
              </h2>
            </div>
            <div className="max-w-xl">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Health is quality-based, not quantity-based. Recovery comes from beneficial collision chains. Drain comes from punitive impacts and missed opportunities.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                There is no passive regeneration. Every point of HP is earned through deliberate play. The system makes visible the cost of every mistake and the reward of every correct decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Level Design */}
      <section className="border-b border-border">
        <div className="container py-14">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
            <div>
              <p className="font-mono text-[10px] text-amber uppercase tracking-[0.3em]">
                Section 05
              </p>
              <h2 className="font-heading font-semibold text-lg mt-2">
                Level Design Philosophy
              </h2>
            </div>
            <div className="max-w-xl">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Levels are designed as constraint systems, not obstacle courses. Each level introduces a specific set of variables — entity types, density, trajectory limits — and asks the player to optimize within those constraints.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Progression is defined by the player's ability to read the system, not by time spent or items collected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section>
        <div className="container py-14">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
            <div>
              <p className="font-mono text-[10px] text-amber uppercase tracking-[0.3em]">
                Section 06
              </p>
              <h2 className="font-heading font-semibold text-lg mt-2">
                Analytics Tracked
              </h2>
            </div>
            <div className="max-w-xl">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The game tracks performance metrics that reflect decision quality, not just outcomes:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { metric: "Collision Accuracy", desc: "% of intentional vs accidental contacts" },
                  { metric: "Chain Depth", desc: "Longest beneficial collision sequence" },
                  { metric: "Damage Source", desc: "Breakdown of HP drain by cause" },
                  { metric: "Recovery Ratio", desc: "HP gained vs HP available" },
                ].map((item, i) => (
                  <div key={i} className="border border-border rounded-sm p-4">
                    <p className="font-mono text-[10px] text-amber uppercase tracking-widest mb-1">
                      {item.metric}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GameSystems;
