import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Jobayer Hossan for WordPress development, Laravel applications, website redesigns, and freelance collaboration.",
};

const contactSteps = [
  "Tell me what you need built, improved, or fixed.",
  "Share your timeline, goals, and any important references.",
  "I'll review the scope and reply with the best next step.",
];

export default function ContactPage() {
  return (
    <main className="page-main">
      <section className="page-hero">
        <div className="site-container page-hero__grid">
          <div className="page-hero__copy-block">
            <p className="eyebrow">Contact</p>
            <h1 className="page-title">Let&apos;s talk about your website or web application.</h1>
            <p className="page-intro">
              I&apos;m available for freelance development, website improvements,
              redesign projects, and long-term support work. If you have a clear
              brief or even just an early idea, I&apos;m happy to review it.
            </p>
          </div>
          <aside className="page-hero__panel">
            <p className="page-hero__panel-label">Response style</p>
            <p>
              Clear communication, realistic timelines, and practical advice on
              the right next step for your project.
            </p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="site-container split-layout">
          <div className="content-card contact-card">
            <p className="eyebrow">Project Enquiries</p>
            <h2>What to send</h2>
            <ul className="bullet-list">
              {contactSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>

          <div className="content-card contact-card">
            <p className="eyebrow">Availability</p>
            <h2>Open to selected projects</h2>
            <p>
              I work remotely with clients who value strong execution, honest
              communication, and a website that supports real business goals.
            </p>
            <p>
              Add your preferred contact method, email address, phone number, or
              scheduling link here when you&apos;re ready to connect this page to
              your actual enquiry workflow.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
