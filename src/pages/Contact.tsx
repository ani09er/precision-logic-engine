import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="border-b border-border">
        <div className="container py-16 md:py-20">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em] mb-4">
            Get in Touch
          </p>
          <h1 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
            Contact
          </h1>
        </div>
      </section>

      <section>
        <div className="container py-14">
          <div className="max-w-xl">
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              For business inquiries, press requests, or platform-related questions. We respond to relevant inquiries only.
            </p>

            <div className="space-y-6">
              <div className="border border-border rounded-sm p-6">
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-2">
                  General & Business
                </p>
                <a
                  href="mailto:contact@tithikha.tech"
                  className="text-sm font-heading font-medium text-foreground hover:text-amber transition-colors"
                >
                  contact@tithikha.tech
                </a>
              </div>

              <div className="border border-border rounded-sm p-6">
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-2">
                  Press & Media
                </p>
                <a
                  href="mailto:press@tithikha.tech"
                  className="text-sm font-heading font-medium text-foreground hover:text-amber transition-colors"
                >
                  press@tithikha.tech
                </a>
              </div>
            </div>

            <p className="mt-8 font-mono text-[10px] text-muted-foreground leading-relaxed">
              We do not accept unsolicited pitches, partnerships, or marketing proposals.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
