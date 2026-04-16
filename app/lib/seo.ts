import type { Metadata } from "next";

const SITE_URL = "https://jobayerhossan.com";
const SITE_NAME = "Jobayer Hossan";

type SeoOptions = {
  title: string;
  description: string;
  path?: string;
};

function withLeadingSlash(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}

export function buildPageMetadata({ title, description, path = "/" }: SeoOptions): Metadata {
  const normalizedPath = withLeadingSlash(path);
  const url = new URL(normalizedPath, SITE_URL).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
