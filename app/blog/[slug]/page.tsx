import { Metadata } from "next";
import Link from "next/link";
import { getBlogPostBySlug, getBlogPosts } from "../../lib/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  return {
    title: post?.title ?? "Blog Post",
    description: post?.excerpt ?? "Read the latest article from Jobayer Hossan.",
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return (
      <main className="page-main">
        <section className="page-hero">
          <div className="site-container">
            <p className="eyebrow">Blog</p>
            <h1 className="page-title">Article not found.</h1>
            <p className="page-intro">
              This route is ready for your API content, but the requested post
              is not available in the current dataset.
            </p>
            <Link href="/blog" className="button button--primary">
              Back to Blog
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="page-main">
      <section className="page-hero">
        <div className="site-container">
          <p className="eyebrow">Blog</p>
          <h1 className="page-title">{post.title}</h1>
          <p className="page-intro">{post.excerpt}</p>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <article className="content-card blog-article">
            {post.featuredImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={post.featuredImage}
                alt={post.title}
                className="blog-article__hero-image"
              />
            ) : null}
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <p>
                This post is available in the feed, but there was no full article
                content to render for this route.
              </p>
            )}
            <Link href="/blog" className="text-link">
              Back to all articles
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
