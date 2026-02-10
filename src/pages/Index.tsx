import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ImpactCard from "@/components/ImpactCard";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Kinetic background element */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full border border-accent/10"
          animate={{
            x: ["-50%", "-45%", "-55%", "-50%"],
            y: ["-50%", "-45%", "-55%", "-50%"],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full border border-accent/20"
          animate={{
            x: ["-50%", "-55%", "-45%", "-50%"],
            y: ["-50%", "-55%", "-45%", "-50%"],
            scale: [1, 0.95, 1.05, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-accent"
          animate={{
            x: ["-50%", "-30%", "-70%", "-50%"],
            y: ["-50%", "-70%", "-30%", "-50%"],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.3em] mb-8">
              TithikhaTech — Game 001
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold tracking-tighter leading-[0.9] max-w-4xl">
              COLLISION
              <br />
              <span className="text-accent">THEORY</span>
            </h1>
          </motion.div>

          <motion.p
            className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-md leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Every collision matters.
          </motion.p>

          <motion.div
            className="mt-8 flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-mono text-[11px] text-muted-foreground border border-border px-3 py-1.5 rounded-sm">
              Android
            </span>
            <span className="font-mono text-[11px] text-accent border border-accent/30 px-3 py-1.5 rounded-sm">
              In Development
            </span>
          </motion.div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button variant="default" size="lg" asChild className="group">
              <Link to="/game">
                <span>Explore the System</span>
                <motion.span
                  className="inline-block"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Core Fantasy */}
      <section className="border-t border-border">
        <div className="container py-24 md:py-32">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg md:text-xl text-foreground leading-relaxed font-heading font-medium mb-6">
                COLLISION THEORY is a precision action game where survival depends on choosing the right collisions.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                You don't avoid impact.
                <br />
                <span className="text-accent font-medium">You decide which ones are worth it.</span>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* System Statements */}
      <section className="border-t border-border">
        <div className="container py-24 md:py-28">
          <AnimatedSection>
            <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em] mb-12">
              Impact Principles
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: "01",
                title: "Every collision is a decision",
                body: "There are no random encounters. Each impact is the result of trajectory, timing, and intent. The system rewards deliberate control.",
              },
              {
                id: "02",
                title: "Consequences compound",
                body: "Beneficial collisions restore. Punitive collisions drain. Chain depth determines whether you're gaining ground or losing it.",
              },
              {
                id: "03",
                title: "Precision over speed",
                body: "The game moves fast but rewards accuracy. Analytics track collision accuracy, chain depth, and damage source — not just score.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.id} delay={i * 0.1}>
                <ImpactCard>
                  <span className="font-mono text-[11px] text-accent tracking-widest font-medium">
                    {item.id}
                  </span>
                  <h3 className="font-heading font-bold text-lg mt-4 mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.body}
                  </p>
                </ImpactCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Anchor */}
      <section className="border-t border-border">
        <div className="container py-24 md:py-28">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em] mb-3">
                  Built by
                </p>
                <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-tight">
                  TithikhaTech
                </h2>
                <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
                  A game studio focused on building mechanics-first action games that reward intelligence, precision, and long-term mastery.
                </p>
              </div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/studio">
                    About the Studio
                    <ArrowRight size={14} />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
