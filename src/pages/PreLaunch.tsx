import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
        <div className="container py-20 md:py-28">
          <AnimatedSection>
            <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.3em] mb-4">
              Status — Pre-Launch
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter">
              Coming Soon
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Collision Theory is in active development. Here's where things stand.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Status Card */}
      <section className="border-b border-border">
        <div className="container py-20">
          <AnimatedSection>
            <motion.div
              className="max-w-lg border border-border bg-card p-8 rounded-sm"
              whileHover={{ boxShadow: "0 8px 30px -10px hsl(4 80% 52% / 0.1)" }}
            >
              <div className="space-y-4">
                {[
                  { label: "Game", value: "COLLISION THEORY" },
                  { label: "Platform", value: "Android (Google Play)" },
                  { label: "Status", value: "In Development", accent: true },
                  { label: "Phase", value: "Internal Testing", accent: true },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-border pb-3 last:border-0 last:pb-0">
                    <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                      {item.label}
                    </span>
                    <span className={`text-sm font-heading font-medium ${item.accent ? "text-accent" : "text-foreground"}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* What's Coming */}
      <section className="border-b border-border">
        <div className="container py-20">
          <AnimatedSection>
            <p className="font-mono text-[11px] text-accent uppercase tracking-[0.3em] mb-3">
              What's Coming
            </p>
            <h2 className="font-heading font-bold text-2xl mb-8">Features in Development</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            {[
              "Precision collision-based gameplay",
              "Risk-reward physics arenas",
              "Impact Rating progression",
              "Offline analytics & performance review",
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <motion.div
                  className="flex items-center gap-4 border border-border bg-card p-5 rounded-sm"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-sm font-heading font-medium">{item}</span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Notification */}
      <section className="border-b border-border">
        <div className="container py-20">
          <AnimatedSection>
            <div className="max-w-lg">
              <p className="font-mono text-[11px] text-accent uppercase tracking-[0.3em] mb-3">
                Release Updates
              </p>
              <h2 className="font-heading font-bold text-2xl mb-6">Stay Informed</h2>

              {submitted ? (
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="border border-border bg-card rounded-sm p-8"
                >
                  <p className="font-heading font-bold text-lg mb-2">Noted.</p>
                  <p className="text-sm text-muted-foreground">
                    We'll notify you when Collision Theory enters public testing. No spam.
                  </p>
                </motion.div>
              ) : (
                <>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Enter your email for a single notification when public testing begins.
                  </p>
                  <form onSubmit={handleSubmit} className="flex gap-3">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="flex-1 bg-card border border-border rounded-sm px-4 py-3 text-sm font-mono placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 transition-shadow"
                    />
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-bold">
                        Notify Me
                      </Button>
                    </motion.div>
                  </form>
                  <p className="mt-3 font-mono text-[10px] text-muted-foreground">
                    Your email is stored only for notification purposes and will not be shared.
                  </p>
                </>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Developer Note */}
      <section>
        <div className="container py-20">
          <AnimatedSection>
            <div className="max-w-2xl border-l-4 border-l-accent pl-8">
              <p className="font-mono text-[11px] text-accent uppercase tracking-[0.3em] mb-4">
                Developer Note
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                COLLISION THEORY is currently in development at TithikhaTech.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The project focuses on precision physics, risk-reward decision-making, and mastery-driven progression.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Public release details will be announced once stability and balance targets are met.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default PreLaunch;
