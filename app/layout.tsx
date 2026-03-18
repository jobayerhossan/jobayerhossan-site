import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "./site-header";
import "./globals.css";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Skills" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const metadata: Metadata = {
  metadataBase: new URL("https://jobayerhossan.com"),
  title: {
    default: "Jobayer Hossan | Full-Stack Developer & WordPress Expert",
    template: "%s | Jobayer Hossan",
  },
  description:
    "Professional portfolio website for Jobayer Hossan, a full-stack developer specializing in WordPress, Laravel, React, and conversion-focused business websites.",
  keywords: [
    "Jobayer Hossan",
    "Full Stack Developer",
    "WordPress Expert",
    "Laravel Developer",
    "React Developer",
    "Freelance Web Developer",
  ],
  openGraph: {
    title: "Jobayer Hossan | Full-Stack Developer & WordPress Expert",
    description:
      "Helping businesses launch fast, polished, and scalable websites with WordPress, Laravel, and modern frontend development.",
    url: "https://jobayerhossan.com",
    siteName: "Jobayer Hossan",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://jobayerhossan.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <SiteHeader navigation={navigation} />

          {children}

          <footer className="site-footer">
            <div className="site-container site-footer__inner">
              <div>
                <p className="site-footer__title">Jobayer Hossan</p>
                <p className="site-footer__text">
                  Freelance developer building high-performing business websites,
                  WordPress solutions, and Laravel applications.
                </p>
              </div>

              <div className="site-footer__links">
                {navigation.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
