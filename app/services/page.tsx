import { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "../lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Web Development Services",
  description:
    "Explore WordPress development, Laravel applications, website redesigns, and technical consulting services tailored for business growth.",
  path: "/services",
});

const services = [
  {
    title: "Business Website Development",
    text: "Professional websites designed to establish trust, explain your offer clearly, and drive more inquiries from the right clients.",
  },
  {
    title: "Custom WordPress Development",
    text: "Tailored WordPress builds with custom layouts, plugin integrations, advanced functionality, and a clean editing experience.",
  },
  {
    title: "E-commerce Solutions",
    text: "Online stores with strong UX, secure checkout flows, and the content structure needed to support sales and scale.",
  },
  {
    title: "Blog and Content Platforms",
    text: "Publishing-focused websites that are easy to manage, mobile-friendly, and optimized for performance and readability.",
  },
  {
    title: "Custom Integrations",
    text: "Payment gateways, CRMs, APIs, third-party tools, and custom functionality designed to fit how your business actually works.",
  },
  {
    title: "Website Redesign and Optimization",
    text: "Refreshing outdated websites with better structure, stronger messaging, responsive layouts, and faster performance.",
  },
  {
    title: "WordPress Maintenance and Support",
    text: "Ongoing updates, troubleshooting, hardening, backups, and technical support to keep your site dependable over time.",
  },
  {
    title: "Laravel Web Applications",
    text: "Robust custom systems for businesses that need secure workflows, user management, dashboards, or specialized functionality.",
  },
  {
    title: "Laravel API Development",
    text: "Structured APIs for internal systems, external integrations, and scalable application architecture.",
  },
  {
    title: "Consultation and Planning",
    text: "Technical guidance to help you choose the right stack, avoid expensive mistakes, and move forward with a clear roadmap.",
  },
];

export default function ServicesPage() {
  return (
    <main className="page-main">
      <section className="page-hero">
        <div className="site-container page-hero__grid">
          <div className="page-hero__copy-block">
            <p className="eyebrow">Services</p>
            <h1 className="page-title">Development services designed for businesses that want quality and clarity.</h1>
            <p className="page-intro">
              Whether you need a polished WordPress website, a Laravel-powered
              application, or a redesign that finally reflects your business well,
              I focus on building solutions that are practical, scalable, and easy
              to trust.
            </p>
          </div>
          <aside className="page-hero__panel">
            <p className="page-hero__panel-label">Best fit</p>
            <p>
              Ideal for businesses that want a stronger visual presence without
              sacrificing stability, speed, or maintainability.
            </p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="site-container card-grid">
          {services.map((service) => (
            <article key={service.title} className="content-card">
              <h2>{service.title}</h2>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section cta-band">
        <div className="site-container cta-band__inner">
          <div>
            <p className="eyebrow">Project Fit</p>
            <h2>If you need a dependable developer who can own the work, I&apos;m ready to help.</h2>
          </div>
          <Link href="/contact" className="button button--primary">
            Discuss Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}
