"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavigationItem = {
  href: string;
  label: string;
};

type SiteHeaderProps = {
  navigation: NavigationItem[];
};

export function SiteHeader({ navigation }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="site-container site-header__inner">
        <Link href="/" className="brand-mark">
          <span className="brand-mark__eyebrow">Jobayer Hossan</span>
          <span className="brand-mark__name">Full-Stack Developer</span>
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="site-nav__link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <Link href="/contact" className="button button--primary button--compact site-header__cta">
            Start a Project
          </Link>

          <button
            type="button"
            className={`menu-toggle${isOpen ? " menu-toggle--open" : ""}`}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        className={`mobile-nav-overlay${isOpen ? " mobile-nav-overlay--open" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      <aside
        id="mobile-navigation"
        className={`mobile-nav${isOpen ? " mobile-nav--open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="mobile-nav__inner">
          <div className="mobile-nav__top">
            <p className="mobile-nav__eyebrow">Navigation</p>
            <button
              type="button"
              className="mobile-nav__close"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
            >
              <span />
              <span />
            </button>
          </div>

          <nav className="mobile-nav__links" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-nav__link"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="button button--primary mobile-nav__cta"
            onClick={() => setIsOpen(false)}
          >
            Start a Project
          </Link>
        </div>
      </aside>
    </header>
  );
}
