import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import ImpactCard from "@/components/ImpactCard";

const Contact = () => {
  return (
    <Layout>
      <section className="border-b border-border">
        <div className="container py-20 md:py-28">
          <AnimatedSection>
            <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.3em] mb-4">
              Get in Touch
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter">
              Contact
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section>
        <div className="container py-20">
          <div className="max-w-lg space-y-6">
            <AnimatedSection>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                For business inquiries, press requests, or platform-related questions.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <ImpactCard>
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-3">
                  Email
                </p>
                <a
                  href="mailto:contact@tithikhatech.com"
                  className="text-sm font-heading font-bold text-foreground hover:text-accent transition-colors"
                >
                  contact@tithikhatech.com
                </a>
              </ImpactCard>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <ImpactCard>
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-3">
                  Location
                </p>
                <p className="text-sm font-heading font-medium">India</p>
              </ImpactCard>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="font-mono text-[10px] text-muted-foreground leading-relaxed mt-4">
                We respond to relevant inquiries only. No unsolicited pitches or marketing.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
