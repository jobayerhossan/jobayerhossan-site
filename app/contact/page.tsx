import { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "./contact-form";

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
            <h2>Send a quick message</h2>
            <p>
              You can also email me directly at{" "}
              <Link href="mailto:info@jobayerhossan.com" className="contact-inline-link">
                info@jobayerhossan.com
              </Link>
              .
            </p>
            <ContactForm />
          </div>

          <div className="content-card contact-card">
            <p className="eyebrow">What to send</p>
            <h2>Helpful details for a faster reply</h2>
            <ul className="bullet-list">
              {contactSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
            <p>
              I work remotely with clients who value strong execution, honest
              communication, and a website that supports real business goals.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
