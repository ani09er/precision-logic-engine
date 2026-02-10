import Layout from "@/components/Layout";

const Terms = () => {
  return (
    <Layout>
      <section className="border-b border-border">
        <div className="container py-20 md:py-28">
          <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.3em] mb-4">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tighter">
            Terms of Service
          </h1>
          <p className="mt-4 font-mono text-[11px] text-muted-foreground">
            Last updated: February 2026
          </p>
        </div>
      </section>

      <section>
        <div className="container py-16">
          <div className="max-w-2xl space-y-10">
            {[
              {
                title: "Acceptance",
                body: "By accessing this website or using Collision Theory, you agree to these terms. If you do not agree, do not use our services.",
              },
              {
                title: "Use of the game",
                body: "Collision Theory is provided for personal, non-commercial use. You may not reverse engineer, decompile, or extract source code from the game.",
              },
              {
                title: "Intellectual property",
                body: "All content, code, design, and assets related to Collision Theory and the TithikhaTech brand are the property of TithikhaTech. You may not reproduce or create derivative works without written permission.",
              },
              {
                title: "User conduct",
                body: "You agree not to use our services for any unlawful purpose, to attempt to gain unauthorized access to our systems, or to interfere with other users' experience.",
              },
              {
                title: "Disclaimer",
                body: "Collision Theory is provided \"as is\" without warranties of any kind. We do not guarantee uninterrupted or error-free operation.",
              },
              {
                title: "Limitation of liability",
                body: "TithikhaTech is not liable for any indirect, incidental, or consequential damages arising from the use of our services.",
              },
              {
                title: "Changes",
                body: "We may update these terms. Continued use of our services after changes constitutes acceptance of the updated terms.",
              },
              {
                title: "Contact",
                body: "Questions about these terms should be directed to contact@tithikhatech.com.",
              },
            ].map((section, i) => (
              <div key={i}>
                <h2 className="font-heading font-bold text-base mb-3">{section.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
