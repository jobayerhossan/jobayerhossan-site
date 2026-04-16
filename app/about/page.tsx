import { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "../lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Jobayer Hossan",
  description:
    "Learn about Jobayer Hossan, a freelance full-stack developer helping businesses grow through polished WordPress and Laravel solutions.",
  path: "/about",
});

const principles = [
  "Every website should support a clear business goal, not just look attractive.",
  "Technical choices should make future maintenance easier, not harder.",
  "Good frontend work earns trust before a visitor reads a single paragraph.",
  "Reliable communication matters as much as clean code in freelance projects.",
];

export default function AboutPage() {
  return (
    <main className="page-main">
      <section className="page-hero">
        <div className="site-container page-hero__grid">
          <div className="page-hero__copy-block">
            <p className="eyebrow">About</p>
            <h1 className="page-title">Bringing ideas to life with strong code, practical thinking, and design awareness.</h1>
            <p className="page-intro">
              I&apos;m a full-stack website developer with extensive experience in
              WordPress, Laravel, frontend design, HTML, CSS, and JavaScript. My
              work is driven by the belief that a great website should feel clear,
              fast, and genuinely useful from the first click.
            </p>
          </div>
          <aside className="page-hero__panel">
            <p className="page-hero__panel-label">Working style</p>
            <p>
              Calm process, honest communication, and a strong bias toward clean,
              durable solutions instead of short-term hacks.
            </p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="site-container split-layout">
          <div className="section-heading section-heading--tight">
            <p className="eyebrow">Approach</p>
            <h2>I focus on building websites that are both visually polished and strategically useful.</h2>
            <p>
              My background spans frontend execution, backend development, and
              the business realities behind digital projects. That means I can
              help shape not only how a website is built, but also how it should
              communicate, convert, and support the long-term goals of the
              client behind it.
            </p>
            <p>
              Whether I&apos;m creating a simple company site or a more complex
              custom platform, I aim to deliver work that feels professional,
              dependable, and built with care.
            </p>
          </div>

          <div className="stacked-cards">
            {principles.map((item) => (
              <article key={item} className="content-card">
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="site-container section-heading">
          <p className="eyebrow">Working Style</p>
          <h2>A trusted partner for businesses that want thoughtful execution.</h2>
          <p>
            I care about clean implementation, strong user experience, and
            results that hold up after launch. If you&apos;re looking for someone
            who can turn ideas into a stable, professional online presence,
            I&apos;d be glad to collaborate.
          </p>
          <Link href="/contact" className="button button--primary">
            Let&apos;s Create Something Strong
          </Link>
        </div>
      </section>
    </main>
  );
}
