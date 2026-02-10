import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const devLogEntries = [
  {
    version: "0.4.2",
    date: "2026-02-08",
    focus: "Collision Tuning",
    title: "Collision chain system — depth limiter implemented",
    content:
      "Added a configurable depth limiter to prevent infinite beneficial collision chains. After testing, uncapped chains led to exponential HP recovery that broke level pacing. Current cap is set at 8 — subject to tuning during closed testing.",
  },
  {
    version: "0.4.1",
    date: "2026-02-01",
    focus: "Enemy Design",
    title: "Enemy behavior table — Splitter entity finalized",
    content:
      "The Splitter entity now fragments into 2–4 sub-entities on collision, each inheriting a fraction of the parent's trajectory vector. Fragment count is deterministic based on player approach angle.",
  },
  {
    version: "0.3.8",
    date: "2026-01-22",
    focus: "Analytics",
    title: "Analytics pipeline — collision accuracy tracking",
    content:
      "Implemented collision accuracy tracking: intentional vs accidental contact classification based on trajectory alignment at point of impact. Early data shows ~62% accuracy in internal playtesting.",
  },
  {
    version: "0.3.5",
    date: "2026-01-14",
    focus: "Risk Balance",
    title: "HP model revision — passive regen removed",
    content:
      "Removed passive HP regeneration entirely. Testing confirms that the removal makes chain-building significantly more important and creates clearer risk/reward decisions.",
  },
  {
    version: "0.3.0",
    date: "2026-01-05",
    focus: "Arena Design",
    title: "Level design framework — constraint-based generation",
    content:
      "Established the constraint-based level design framework. Each level defines entity types, density, trajectory limits, and target collision accuracy for par performance.",
  },
];

const DevLogs = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="border-b border-border">
        <div className="container py-20 md:py-28">
          <AnimatedSection>
            <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.3em] mb-4">
              Engineering Journal
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter">
              Development Logs
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Chronological record of system changes and design decisions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Log Entries */}
      <section>
        <div className="container py-16">
          <div className="max-w-2xl space-y-0">
            {devLogEntries.map((entry, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <motion.article
                  className="border-b border-border py-10 first:pt-0"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className="font-mono text-[11px] text-accent font-medium">
                      v{entry.version}
                    </span>
                    <span className="w-px h-3 bg-border" />
                    <time className="font-mono text-[11px] text-muted-foreground">
                      {entry.date}
                    </time>
                    <span className="w-px h-3 bg-border" />
                    <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest border border-border px-2 py-0.5 rounded-sm">
                      {entry.focus}
                    </span>
                  </div>
                  <h2 className="font-heading font-bold text-base mb-3">
                    {entry.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {entry.content}
                  </p>
                </motion.article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DevLogs;
