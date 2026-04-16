import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "./lib/seo";
import { featuredMetrics, serviceHighlights, testimonials } from "./lib/site-content";

export const metadata: Metadata = buildPageMetadata({
  title: "Freelance Full-Stack Developer & WordPress Expert",
  description:
    "Jobayer Hossan builds high-converting business websites with WordPress, Laravel, and modern frontend development for serious brands.",
  path: "/",
});

const engagementSteps = [
  "Discovery call to understand your goals, audience, and current bottlenecks.",
  "Clear scope and execution focused on speed, credibility, and usability.",
  "Launch support and ongoing refinement so the site keeps working for your business.",
];

export default function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="site-container">
          <div className="freelancer-hero">
            <div className="freelancer-hero__copy">
              <div className="hero-badge-row">
                <p className="eyebrow">Full-Stack Developer / WordPress Expert</p>
                <span className="hero-status">Currently available</span>
              </div>

              <h1 className="hero-title">
                Refined websites and web systems built to help serious businesses
                look trustworthy and convert better.
              </h1>

              <p className="hero-copy">
                I&apos;m Jobayer Hossan, a freelance full-stack developer focused
                on WordPress, Laravel, and clean frontend execution. I help
                businesses replace average digital experiences with polished,
                high-performing websites that support credibility, growth, and
                better client acquisition.
              </p>

              <div className="button-row">
                <Link href="/contact" className="button button--primary">
                  Book a Project Call
                </Link>
                <Link href="/services" className="button button--secondary button--dark">
                  View Services
                </Link>
              </div>

              <div className="hero-points">
                <span>WordPress websites</span>
                <span>Laravel applications</span>
                <span>Premium frontend polish</span>
              </div>
            </div>

            <aside className="freelancer-hero__panel">
              <div className="hero-spotlight">
                <p className="hero-spotlight__eyebrow">Why clients choose me</p>
                <h2>Minimal design, strong structure, and delivery you can rely on.</h2>
                <p>
                  I work best with agencies, founders, and businesses that need
                  someone who can improve both how a website looks and how well
                  it performs once real users start interacting with it.
                </p>
              </div>

              <div className="hero-stack">
                {featuredMetrics.map((item) => (
                  <article key={item.label} className="hero-stack__card">
                    <p className="hero-stack__value">{item.value}</p>
                    <p className="hero-stack__label">{item.label}</p>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section--top-tight">
        <div className="site-container">
          <div className="impact-strip">
            <div className="impact-strip__intro">
              <p className="eyebrow">What I Bring</p>
              <h2>A minimal approach shaped by strategy, execution, and presentation quality.</h2>
            </div>

            <div className="impact-strip__grid">
              <article className="impact-card impact-card--accent">
                <span>01</span>
                <h3>Websites that look expensive</h3>
                <p>
                  Strong visual hierarchy, cleaner messaging, and a more
                  credible presence from the first screen.
                </p>
              </article>
              <article className="impact-card">
                <span>02</span>
                <h3>Development that stays maintainable</h3>
                <p>
                  Thoughtful WordPress and Laravel builds that don&apos;t become
                  fragile after launch.
                </p>
              </article>
              <article className="impact-card">
                <span>03</span>
                <h3>Delivery with business context</h3>
                <p>
                  Not just code. I think about trust, conversion, usability, and
                  long-term value.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="site-container">
          <div className="section-heading">
            <p className="eyebrow">How I Help</p>
            <h2>Services built to make your online presence stronger and more effective.</h2>
          </div>

          <div className="card-grid card-grid--bold">
            {serviceHighlights.map((service, index) => (
              <article key={service.title} className="content-card content-card--bold">
                <span className="card-index">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container process-layout">
          <div className="section-heading section-heading--tight">
            <p className="eyebrow">Process</p>
            <h2>A simple workflow designed to keep projects moving and outcomes clear.</h2>
            <p>
              I keep the process focused, collaborative, and practical so you
              always know what&apos;s happening and why it matters.
            </p>
          </div>

          <div className="process-list">
            {engagementSteps.map((step, index) => (
              <article key={step} className="process-step">
                <span className="process-step__number">0{index + 1}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="site-container split-layout">
          <div className="section-heading section-heading--tight">
            <p className="eyebrow">Why Clients Hire Me</p>
            <h2>I combine technical depth with the level of polish clients actually notice.</h2>
            <p>
              Businesses hire me when they want a developer who can improve both
              the frontend impression and the backend reliability of their site.
            </p>
          </div>

          <div className="stacked-cards">
            {testimonials.map((item, index) => (
              <article key={item.quote} className="quote-card quote-card--bold">
                <span className="card-index">0{index + 1}</span>
                <p>{item.quote}</p>
                <span>{item.author}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="site-container cta-band__inner">
          <div>
            <p className="eyebrow">Open to New Opportunities</p>
            <h2>Need a website that looks sharp and works hard for your business?</h2>
          </div>
          <Link href="/contact" className="button button--primary">
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </main>
  );
}
