import Layout from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="border-b border-border">
        <div className="container py-20 md:py-28">
          <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.3em] mb-4">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tighter">
            Privacy Policy
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
                title: "What we collect",
                body: "When you submit your email for launch notifications, we store your email address. When you play Collision Theory, we collect anonymized gameplay analytics including collision accuracy, chain depth, and session duration. We do not collect personal information beyond what you voluntarily provide.",
              },
              {
                title: "How we use it",
                body: "Email addresses are used exclusively to send launch notifications. Gameplay analytics are used to improve game balance and design. We do not sell, share, or transfer your data to third parties for marketing purposes.",
              },
              {
                title: "Data storage",
                body: "Data is stored on secure servers with industry-standard encryption. We retain email addresses until you request removal or until the notification has been sent.",
              },
              {
                title: "Your rights",
                body: "You may request deletion of your data at any time by contacting us at contact@tithikhatech.com. We will process deletion requests within 30 days.",
              },
              {
                title: "Third-party services",
                body: "Collision Theory is distributed through Google Play, which has its own privacy policy. We use minimal third-party services and will disclose any additions to this policy.",
              },
              {
                title: "Changes to this policy",
                body: "We will update this page if our privacy practices change. Material changes will be noted with an updated revision date.",
              },
              {
                title: "Contact",
                body: "For privacy-related questions, email contact@tithikhatech.com.",
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

export default Privacy;
