import { Metadata } from "next";
import { coreSkills } from "../lib/site-content";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Explore the technical skills of Jobayer Hossan across WordPress, Laravel, React, frontend development, and performance optimization.",
};

const skillGroups = [
  {
    title: "Frontend Development",
    description:
      "Fast, responsive, and well-structured interfaces with strong attention to interaction design and mobile usability.",
    items: ["HTML", "CSS", "JavaScript", "Responsive design", "Animations", "Interactive layouts"],
  },
  {
    title: "Backend and CMS",
    description:
      "Reliable build foundations for content-driven sites, custom functionality, and business workflows.",
    items: ["WordPress", "Custom themes", "Custom plugins", "Laravel", "API development", "CMS integrations"],
  },
  {
    title: "Modern Development Tools",
    description:
      "Practical use of current frameworks and workflows to keep projects maintainable and ready to evolve.",
    items: ["React", "Next.js", "Performance optimization", "SEO fundamentals", "Website audits", "Technical consulting"],
  },
];

export default function SkillsPage() {
  return (
    <main className="page-main">
      <section className="page-hero">
        <div className="site-container page-hero__grid">
          <div className="page-hero__copy-block">
            <p className="eyebrow">Skills</p>
            <h1 className="page-title">Technical depth shaped by a decade of freelance delivery.</h1>
            <p className="page-intro">
              I&apos;ve worked with agencies, startups, and business owners to
              create websites and digital products that balance visual quality,
              maintainable code, and real-world business needs.
            </p>
          </div>
          <aside className="page-hero__panel">
            <p className="page-hero__panel-label">Core profile</p>
            <p>
              Frontend polish, WordPress depth, Laravel capability, and practical
              technical decision-making for real business projects.
            </p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="skill-pillars">
            {skillGroups.map((group) => (
              <article key={group.title} className="content-card">
                <h2>{group.title}</h2>
                <p>{group.description}</p>
                <ul className="tag-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="site-container section-heading">
          <p className="eyebrow">Core Strengths</p>
          <h2>The capabilities clients usually hire me for first.</h2>
          <ul className="bullet-grid">
            {coreSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
