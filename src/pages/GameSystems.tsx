import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import ImpactCard from "@/components/ImpactCard";
import { motion } from "framer-motion";

const GameSystems = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="border-b border-border">
        <div className="container py-20 md:py-28">
          <AnimatedSection>
            <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.3em] mb-4">
              Collision Theory — System Reference
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter">
              The Game
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Understand the system. Master the collisions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Gameplay */}
      <section className="border-b border-border">
        <div className="container py-20">
          <AnimatedSection>
            <p className="font-mono text-[11px] text-accent uppercase tracking-[0.3em] mb-3">
              Core Gameplay
            </p>
            <h2 className="font-heading font-bold text-2xl mb-8">How It Works</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Auto-Motion", desc: "The ball moves automatically. You don't control speed — only direction." },
              { title: "Trajectory Adjustment", desc: "Slight player inputs alter the collision path. Precision is everything." },
              { title: "Contextual Outcomes", desc: "Every collision produces a different result based on what you hit and how." },
              { title: "Beneficial Impacts", desc: "Some collisions restore health, extend chains, or unlock advantages." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <ImpactCard>
                  <h3 className="font-heading font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </ImpactCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enemies — Impact Logic */}
      <section className="border-b border-border">
        <div className="container py-20">
          <AnimatedSection>
            <p className="font-mono text-[11px] text-accent uppercase tracking-[0.3em] mb-3">
              Impact Logic
            </p>
            <h2 className="font-heading font-bold text-2xl mb-8">Enemies</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                type: "Fragile",
                desc: "Reward collision. Shatter on impact, granting HP and chain extension.",
                color: "border-l-4 border-l-green-500",
              },
              {
                type: "Armored",
                desc: "Punish collision. Drain HP on contact. Require avoidance or precise chaining.",
                color: "border-l-4 border-l-accent",
              },
              {
                type: "Chain",
                desc: "Require combo impacts. Multiple sequential hits unlock their reward.",
                color: "border-l-4 border-l-amber",
              },
            ].map((enemy, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  className={`border border-border bg-card p-8 ${enemy.color}`}
                  whileHover={{ x: 4, boxShadow: "0 4px 20px -8px hsl(4 80% 52% / 0.1)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <h3 className="font-heading font-bold text-lg mb-2">{enemy.type}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{enemy.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* HP System — Impact Meter */}
      <section className="border-b border-border">
        <div className="container py-20">
          <AnimatedSection>
            <p className="font-mono text-[11px] text-accent uppercase tracking-[0.3em] mb-3">
              Impact Quality
            </p>
            <h2 className="font-heading font-bold text-2xl mb-8">HP System</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="max-w-2xl">
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                Health depends on collision quality. There is no passive regeneration — every point of HP is earned through deliberate play.
              </p>

              {/* Impact Meter visualization */}
              <div className="space-y-4">
                {[
                  { label: "Perfect Impact", value: 95, color: "bg-green-500" },
                  { label: "Good Impact", value: 70, color: "bg-amber" },
                  { label: "Glancing Impact", value: 40, color: "bg-muted-foreground" },
                  { label: "Bad Collision", value: 15, color: "bg-accent" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="font-mono text-[10px] text-muted-foreground w-28 text-right uppercase tracking-wide">
                      {item.label}
                    </span>
                    <div className="flex-1 h-3 bg-secondary rounded-sm overflow-hidden">
                      <motion.div
                        className={`h-full ${item.color} rounded-sm`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                    <span className="font-mono text-[11px] text-foreground font-medium w-10">
                      +{item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Obstacles */}
      <section className="border-b border-border">
        <div className="container py-20">
          <AnimatedSection>
            <p className="font-mono text-[11px] text-accent uppercase tracking-[0.3em] mb-3">
              Environment
            </p>
            <h2 className="font-heading font-bold text-2xl mb-8">Obstacles</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Reactive Surfaces", icon: "◈" },
              { name: "Collision Amplifiers", icon: "◉" },
              { name: "Damage Multipliers", icon: "◆" },
              { name: "Safe Impact Zones", icon: "○" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <motion.div
                  className="border border-border bg-card p-6 text-center"
                  whileHover={{
                    scale: 0.97,
                    boxShadow: "inset 0 0 20px hsl(4 80% 52% / 0.05)",
                  }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                >
                  <span className="text-2xl block mb-3">{item.icon}</span>
                  <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                    {item.name}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Collision Types Table */}
      <section className="border-b border-border">
        <div className="container py-20">
          <AnimatedSection>
            <p className="font-mono text-[11px] text-accent uppercase tracking-[0.3em] mb-3">
              Reference
            </p>
            <h2 className="font-heading font-bold text-2xl mb-8">Collision Types</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="max-w-2xl border border-border rounded-sm overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary">
                <div className="px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Type</div>
                <div className="px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Effect</div>
                <div className="px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Outcome</div>
              </div>
              {[
                { type: "Beneficial", effect: "HP Recovery", outcome: "Sustains chain" },
                { type: "Punitive", effect: "HP Drain", outcome: "Breaks chain" },
                { type: "Neutral", effect: "Trajectory Shift", outcome: "Repositions" },
                { type: "Chain", effect: "Multiplied", outcome: "Compounds benefit" },
              ].map((row, i) => (
                <motion.div
                  key={i}
                  className="grid grid-cols-3 border-t border-border"
                  whileHover={{ backgroundColor: "hsl(4 80% 52% / 0.02)" }}
                >
                  <div className="px-5 py-3.5 text-sm font-heading font-medium">{row.type}</div>
                  <div className="px-5 py-3.5 text-sm text-muted-foreground">{row.effect}</div>
                  <div className="px-5 py-3.5 text-sm text-muted-foreground">{row.outcome}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Analytics */}
      <section>
        <div className="container py-20">
          <AnimatedSection>
            <p className="font-mono text-[11px] text-accent uppercase tracking-[0.3em] mb-3">
              Performance
            </p>
            <h2 className="font-heading font-bold text-2xl mb-8">Analytics Tracked</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            {[
              { metric: "Collision Accuracy", desc: "% of intentional vs accidental contacts" },
              { metric: "Chain Depth", desc: "Longest beneficial collision sequence" },
              { metric: "Damage Source", desc: "Breakdown of HP drain by cause" },
              { metric: "Recovery Ratio", desc: "HP gained vs HP available" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <ImpactCard className="p-6">
                  <p className="font-mono text-[11px] text-accent uppercase tracking-widest mb-2 font-medium">
                    {item.metric}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </ImpactCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GameSystems;
