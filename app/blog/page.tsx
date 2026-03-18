import { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "../lib/blog";

const POSTS_PER_PAGE = 9;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read development insights, WordPress guidance, and practical web strategy articles from Jobayer Hossan.",
};

type BlogPageProps = {
  searchParams?: Promise<{
    page?: string;
  }>;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const posts = await getBlogPosts();
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const currentPage = Math.max(1, Number(resolvedSearchParams.page ?? "1") || 1);
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <main className="page-main">
      <section className="page-hero">
        <div className="site-container page-hero__grid">
          <div className="page-hero__copy-block">
            <p className="eyebrow">Blog</p>
            <h1 className="page-title">Insights on WordPress, Laravel, performance, and practical web development.</h1>
            <p className="page-intro">
              This blog now supports your WordPress feed directly. If
              `BLOG_API_URL` is set it will use that value; otherwise it falls
              back to your public WordPress posts endpoint automatically.
            </p>
          </div>
          <aside className="page-hero__panel">
            <p className="page-hero__panel-label">Content setup</p>
            <p>
              Posts are pulled from WordPress, normalized for the site design,
              and linked into full article pages inside this Next.js app.
            </p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="site-container blog-grid">
          {paginatedPosts.map((post) => (
            <article key={post.id} className="blog-card">
              {post.featuredImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="blog-card__image"
                />
              ) : null}
              <p className="blog-card__date">{formatDate(post.date)}</p>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-link">
                Read article
              </Link>
            </article>
          ))}
        </div>

        {totalPages > 1 ? (
          <nav className="pagination" aria-label="Blog pagination">
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              const href = page === 1 ? "/blog" : `/blog?page=${page}`;

              return (
                <Link
                  key={page}
                  href={href}
                  className={`pagination__link${page === safePage ? " pagination__link--active" : ""}`}
                >
                  {page}
                </Link>
              );
            })}
          </nav>
        ) : null}
      </section>
    </main>
  );
}
