import Layout from "@/components/Layout";

const Terms = () => {
  return (
    <Layout>
      <section className="border-b border-border">
        <div className="container py-16 md:py-20">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em] mb-4">
            Legal
          </p>
          <h1 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-4 font-mono text-[11px] text-muted-foreground">
            Last updated: February 2026
          </p>
        </div>
      </section>

      <section>
        <div className="container py-14">
          <div className="max-w-2xl space-y-10">
            <div>
              <h2 className="font-heading font-semibold text-base mb-3">Acceptance</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                By accessing this website or using Collision Theory, you agree to these terms. If you do not agree, do not use our services.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-base mb-3">Use of the game</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Collision Theory is provided for personal, non-commercial use. You may not reverse engineer, decompile, or extract source code from the game. You may not use automated tools to interact with the game or its systems.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-base mb-3">Intellectual property</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All content, code, design, and assets related to Collision Theory and the Tithikha Tech brand are the property of Tithikha Tech. You may not reproduce, distribute, or create derivative works without written permission.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-base mb-3">User conduct</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You agree not to use our services for any unlawful purpose, to attempt to gain unauthorized access to our systems, or to interfere with other users' experience.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-base mb-3">Disclaimer</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Collision Theory is provided "as is" without warranties of any kind. We do not guarantee uninterrupted or error-free operation. Use at your own discretion.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-base mb-3">Limitation of liability</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tithikha Tech is not liable for any indirect, incidental, or consequential damages arising from the use of our services.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-base mb-3">Changes</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We may update these terms. Continued use of our services after changes constitutes acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-base mb-3">Contact</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Questions about these terms should be directed to contact@tithikha.tech.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
