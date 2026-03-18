import { unstable_cache } from "next/cache";
import { blogFallbackPosts } from "./site-content";

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  slug: string;
  link?: string;
  featuredImage?: string | null;
};

type WordPressRenderedField = {
  rendered?: string;
};

type WordPressMedia = {
  source_url?: string;
};

type WordPressEmbedded = {
  "wp:featuredmedia"?: WordPressMedia[];
};

type ApiPost = Partial<BlogPost> & {
  publishedAt?: string;
  summary?: string;
  title?: string | WordPressRenderedField;
  excerpt?: string | WordPressRenderedField;
  content?: string | WordPressRenderedField;
  link?: string;
  jetpack_featured_media_url?: string | null;
  _embedded?: WordPressEmbedded;
};

const DEFAULT_BLOG_API_URL =
  "https://blog.jobayerhossan.com/wp-json/wp/v2/posts?_embed";
const BLOG_REVALIDATE_SECONDS = 900;

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function getRendered(field?: string | WordPressRenderedField) {
  if (typeof field === "string") {
    return field;
  }

  return field?.rendered ?? "";
}

function normalizePost(post: ApiPost, index: number): BlogPost {
  const title = getRendered(post.title) || "Untitled article";
  const excerptHtml = getRendered(post.excerpt);
  const contentHtml = getRendered(post.content);
  const excerpt =
    stripHtml(excerptHtml || contentHtml).slice(0, 180) ||
    "Read the latest article from Jobayer Hossan.";

  return {
    id: String(post.id ?? `${post.slug ?? "post"}-${index}`),
    title,
    excerpt: post.summary ?? excerpt,
    content: contentHtml || undefined,
    date: post.date ?? post.publishedAt ?? new Date().toISOString(),
    slug: post.slug ?? `post-${index + 1}`,
    link: post.link,
    featuredImage:
      post.jetpack_featured_media_url ??
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
      null,
  };
}

async function fetchWordPressPosts(apiUrl: string): Promise<BlogPost[]> {
  const separator = apiUrl.includes("?") ? "&" : "?";
  const requestUrl = `${apiUrl}${separator}per_page=100&page=1`;

  const response = await fetch(requestUrl, {
    next: { revalidate: BLOG_REVALIDATE_SECONDS },
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.status}`);
  }

  const firstPageData = await response.json();
  const firstPagePosts: ApiPost[] = Array.isArray(firstPageData)
    ? firstPageData
    : Array.isArray(firstPageData?.posts)
      ? firstPageData.posts
      : [];

  const totalPages = Number(response.headers.get("X-WP-TotalPages") ?? "1");

  if (totalPages <= 1) {
    return firstPagePosts.map((post, index) => normalizePost(post, index));
  }

  const remainingPages = await Promise.all(
    Array.from({ length: totalPages - 1 }, async (_, index) => {
      const page = index + 2;
      const pagedUrl = `${apiUrl}${separator}per_page=100&page=${page}`;
      const pagedResponse = await fetch(pagedUrl, {
        next: { revalidate: BLOG_REVALIDATE_SECONDS },
        headers: { Accept: "application/json" },
      });

      if (!pagedResponse.ok) {
        return [];
      }

      const pagedData = await pagedResponse.json();
      return Array.isArray(pagedData)
        ? pagedData
        : Array.isArray(pagedData?.posts)
          ? pagedData.posts
          : [];
    }),
  );

  const allPosts = firstPagePosts.concat(...remainingPages);
  return allPosts.map((post, index) => normalizePost(post, index));
}

const getCachedWordPressPosts = unstable_cache(
  async (apiUrl: string) => fetchWordPressPosts(apiUrl),
  ["wordpress-blog-posts"],
  { revalidate: BLOG_REVALIDATE_SECONDS },
);

export async function getBlogPosts(): Promise<BlogPost[]> {
  const apiUrl = process.env.BLOG_API_URL ?? DEFAULT_BLOG_API_URL;

  if (!apiUrl) {
    return blogFallbackPosts;
  }

  try {
    const posts = await getCachedWordPressPosts(apiUrl);

    if (posts.length === 0) {
      return blogFallbackPosts;
    }

    return posts;
  } catch {
    return blogFallbackPosts;
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const posts = await getBlogPosts();
    return posts.find((post) => post.slug === slug) ?? null;
  } catch {
    return blogFallbackPosts.find((post) => post.slug === slug) ?? null;
  }
}
