import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import ImpactCard from "@/components/ImpactCard";

const Studio = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="border-b border-border">
        <div className="container py-20 md:py-28">
          <AnimatedSection>
            <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.3em] mb-4">
              About the Studio
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter">
              TithikhaTech
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Mechanics-first action games that reward intelligence, precision, and long-term mastery.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* About */}
      <section className="border-b border-border">
        <div className="container py-20">
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="text-lg text-foreground leading-relaxed font-heading font-medium mb-6">
                TithikhaTech is a game studio focused on building mechanics-first action games that reward intelligence, precision, and long-term mastery.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We don't chase trends. We don't clone. We build from first principles, test rigorously, and ship when the system works — not when a deadline says so.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Studio Values */}
      <section className="border-b border-border">
        <div className="container py-20">
          <AnimatedSection>
            <p className="font-mono text-[11px] text-accent uppercase tracking-[0.3em] mb-3">
              Principles
            </p>
            <h2 className="font-heading font-bold text-2xl mb-8">Studio Values</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            {[
              {
                title: "Design over spectacle",
                desc: "Systems that work matter more than effects that impress. Depth over decoration.",
              },
              {
                title: "Precision over chaos",
                desc: "Every mechanic serves a purpose. No random elements, no filler content.",
              },
              {
                title: "Systems over gimmicks",
                desc: "Replayability comes from depth, not novelty. Players return because they understand more.",
              },
              {
                title: "Respect for player skill",
                desc: "Reward mastery. Punish carelessness. Never patronize with hand-holding.",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <ImpactCard>
                  <h3 className="font-heading font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </ImpactCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Direction */}
      <section>
        <div className="container py-20">
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] text-accent uppercase tracking-[0.3em] mb-3">
                Direction
              </p>
              <h2 className="font-heading font-bold text-2xl mb-6">Long-Term Vision</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Collision Theory is the first product. The studio's long-term interest is in the intersection of decision systems and interactive media.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We focus on finishing what we've started — properly — and then deciding what's next based on what we've learned.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Studio;
