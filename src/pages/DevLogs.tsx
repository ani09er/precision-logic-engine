import Layout from "@/components/Layout";

const devLogEntries = [
  {
    date: "2026-02-08",
    title: "Collision chain system — depth limiter implemented",
    content:
      "Added a configurable depth limiter to prevent infinite beneficial collision chains. After testing, uncapped chains led to exponential HP recovery that broke level pacing. Current cap is set at 8 — subject to tuning during closed testing.",
    tags: ["systems", "balance"],
  },
  {
    date: "2026-02-01",
    title: "Enemy behavior table — Splitter entity finalized",
    content:
      "The Splitter entity now fragments into 2–4 sub-entities on collision, each inheriting a fraction of the parent's trajectory vector. Fragment count is deterministic based on player approach angle. This creates a high-risk, high-consequence interaction that rewards precise positioning.",
    tags: ["enemies", "design"],
  },
  {
    date: "2026-01-22",
    title: "Analytics pipeline — collision accuracy tracking",
    content:
      "Implemented collision accuracy tracking: intentional vs accidental contact classification based on trajectory alignment at point of impact. If player trajectory deviation exceeds 15° from the collision vector at T-200ms, the contact is classified as accidental. Early data shows ~62% accuracy in internal playtesting.",
    tags: ["analytics", "infrastructure"],
  },
  {
    date: "2026-01-14",
    title: "HP model revision — passive regen removed",
    content:
      "Removed passive HP regeneration entirely. Previous build included a slow passive regen (0.5 HP/s) that undermined the core design principle: every point of health must be earned. Testing confirms that the removal makes chain-building significantly more important and creates clearer risk/reward decisions.",
    tags: ["systems", "balance"],
  },
  {
    date: "2026-01-05",
    title: "Level design framework — constraint-based generation",
    content:
      "Established the constraint-based level design framework. Each level defines: entity types available, maximum entity density, trajectory boundary limits, and target collision accuracy for par performance. Levels are authored as constraint definitions, not hand-placed entity maps.",
    tags: ["level-design", "architecture"],
  },
];

const DevLogs = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="border-b border-border">
        <div className="container py-16 md:py-20">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em] mb-4">
            Engineering Journal
          </p>
          <h1 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
            Development Logs
          </h1>
          <p className="mt-4 text-base text-muted-foreground max-w-lg leading-relaxed">
            Chronological record of design decisions, system changes, and development progress.
          </p>
        </div>
      </section>

      {/* Log Entries */}
      <section>
        <div className="container py-14">
          <div className="max-w-2xl space-y-0">
            {devLogEntries.map((entry, i) => (
              <article key={i} className="border-b border-border py-10 first:pt-0 last:border-b-0">
                <div className="flex items-center gap-3 mb-4">
                  <time className="font-mono text-[11px] text-muted-foreground">
                    {entry.date}
                  </time>
                  <span className="w-px h-3 bg-border" />
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest border border-border px-2 py-0.5 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="font-heading font-semibold text-base mb-3">
                  {entry.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {entry.content}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DevLogs;
