import Layout from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="border-b border-border">
        <div className="container py-16 md:py-20">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em] mb-4">
            Legal
          </p>
          <h1 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
            Privacy Policy
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
              <h2 className="font-heading font-semibold text-base mb-3">What we collect</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                When you submit your email for launch notifications, we store your email address. When you play Collision Theory, we collect anonymized gameplay analytics including collision accuracy, chain depth, and session duration. We do not collect personal information beyond what you voluntarily provide.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-base mb-3">How we use it</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Email addresses are used exclusively to send launch notifications. Gameplay analytics are used to improve game balance and design. We do not sell, share, or transfer your data to third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-base mb-3">Data storage</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Data is stored on secure servers with industry-standard encryption. We retain email addresses until you request removal or until the notification has been sent, whichever comes first.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-base mb-3">Your rights</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You may request deletion of your data at any time by contacting us at contact@tithikha.tech. We will process deletion requests within 30 days.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-base mb-3">Third-party services</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Collision Theory is distributed through Google Play, which has its own privacy policy. We encourage you to review Google's privacy practices. We use minimal third-party services and will disclose any additions to this policy.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-base mb-3">Changes to this policy</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We will update this page if our privacy practices change. Material changes will be noted with an updated revision date.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-base mb-3">Contact</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                For privacy-related questions, email contact@tithikha.tech.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
