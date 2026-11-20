import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Calendar, Clock, BookOpen, Share2, CheckCircle2, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { useReveal } from "@/hooks/use-reveal";
import { BLOG_POSTS, PERSONAL_INFO } from "@/data/portfolio-data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    if (!post) {
      throw notFound();
    }
    const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === params.slug);
    const nextPost =
      currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : BLOG_POSTS[0];

    return { post, nextPost };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.post) {
      return { meta: [{ title: "Artikel Tidak Ditemukan" }] };
    }
    return {
      meta: [
        { title: `${loaderData.post.title} | Chandra Apriyanto` },
        { name: "description", content: loaderData.post.description },
        { property: "og:title", content: loaderData.post.title },
        { property: "og:description", content: loaderData.post.description },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: BlogDetailPage,
});

function BlogDetailPage() {
  useReveal();
  const { post, nextPost } = Route.useLoaderData();

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Tautan artikel disalin ke clipboard.");
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10 py-10 sm:py-14 space-y-10">
      {/* ── BACK BUTTON ────────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-ink hover:text-paper transition-colors"
        >
          <ArrowLeft className="size-3.5 text-ember" />
          <span>Kembali ke Daftar Tulisan</span>
        </Link>

        <button
          type="button"
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-ink-raised bg-ink-soft text-xs font-mono text-muted-ink hover:text-paper transition-colors"
        >
          <Share2 className="size-3.5 text-ember" />
          <span>Bagikan</span>
        </button>
      </div>

      {/* ── ARTICLE HEADER ──────────────────────────────────────────────────── */}
      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted-ink">
          <span className="text-paper font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-ink-raised border border-ink-raised">
            {post.category}
          </span>
          <span className="text-muted-ink/40">/</span>
          <span className="flex items-center gap-1 text-muted-ink">
            <Calendar className="size-3 text-muted-ink" />
            {post.publishedAt}
          </span>
          <span className="text-muted-ink/40">/</span>
          <span className="flex items-center gap-1 text-muted-ink">
            <Clock className="size-3 text-muted-ink" />
            {post.readTime}
          </span>
        </div>

        <h1 className="font-display font-extrabold text-2xl sm:text-4xl text-paper tracking-tight leading-tight">
          {post.title}
        </h1>

        <p className="text-sm sm:text-base text-muted-ink leading-relaxed pt-1">
          {post.description}
        </p>
      </header>

      {/* ── TABLE OF CONTENTS ───────────────────────────────────────────────── */}
      {post.content.tableOfContents.length > 0 && (
        <nav className="p-5 rounded-xl border border-ink-raised bg-ink-soft space-y-2.5">
          <div className="font-mono text-xs uppercase tracking-wider text-muted-ink font-semibold flex items-center gap-2">
            <BookOpen className="size-3.5 text-ember" />
            <span>Daftar Bahasan</span>
          </div>
          <ul className="space-y-1 font-mono text-xs text-muted-ink">
            {post.content.tableOfContents.map((toc) => (
              <li key={toc.id}>
                <a
                  href={`#${toc.id}`}
                  className="hover:text-paper transition-colors block py-0.5"
                >
                  {toc.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* ── ARTICLE BODY CONTENT ────────────────────────────────────────────── */}
      <div className="space-y-10 text-paper font-sans text-sm sm:text-base leading-relaxed">
        {/* Intro */}
        <p className="text-paper/95 p-4 rounded-lg bg-ink-soft border border-ink-raised leading-relaxed font-normal">
          {post.content.intro}
        </p>

        {/* Sections */}
        {post.content.sections.map((section) => (
          <section key={section.id} id={section.id} className="space-y-3 pt-2">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-paper tracking-tight">
              {section.heading}
            </h2>
            <p className="text-muted-ink leading-relaxed">
              {section.body}
            </p>

            {section.codeSnippet && (
              <div className="rounded-xl overflow-hidden border border-ink-raised bg-ink my-4 font-mono text-xs">
                <div className="px-4 py-2 bg-ink-raised/50 border-b border-ink-raised flex items-center justify-between text-[11px] text-muted-ink">
                  <span>{section.codeSnippet.language.toUpperCase()}</span>
                  <span>Snippet</span>
                </div>
                <pre className="p-4 overflow-x-auto text-paper">
                  <code>{section.codeSnippet.code}</code>
                </pre>
              </div>
            )}
          </section>
        ))}

        {/* Key Takeaways */}
        {post.content.takeaways && post.content.takeaways.length > 0 && (
          <div className="p-6 rounded-xl border border-ink-raised bg-ink-soft space-y-3 my-6">
            <div className="font-mono text-xs uppercase tracking-wider text-paper font-bold">
              Poin Kunci &amp; Kesimpulan
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-paper/90">
              {post.content.takeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 text-turf shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* ── AUTHOR BIO CARD ─────────────────────────────────────────────────── */}
      <div className="p-6 rounded-xl border border-ink-raised bg-ink-soft flex flex-col sm:flex-row items-center gap-5">
        <img
          src={PERSONAL_INFO.portraitImage}
          alt={PERSONAL_INFO.name}
          className="size-16 rounded-full object-cover border border-ink-raised shrink-0"
        />
        <div className="space-y-1.5 text-center sm:text-left">
          <div className="font-display font-bold text-base text-paper">Ditulis oleh {PERSONAL_INFO.name}</div>
          <p className="text-xs text-muted-ink leading-relaxed">
            Fullstack Developer lulusan D4 RPL POLINDRA. Berfokus pada backend Laravel, REST API, dan optimasi basis data PostgreSQL/MySQL.
          </p>
          <div className="pt-1 flex flex-wrap justify-center sm:justify-start gap-4 text-xs font-mono text-muted-ink">
            <a href={PERSONAL_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-paper flex items-center gap-1">
              <MessageCircle className="size-3.5 text-turf" /> Diskusikan topik ini via WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── NEXT ARTICLE LINK ───────────────────────────────────────────────── */}
      {nextPost && (
        <div className="pt-6 border-t border-ink-raised">
          <Link
            to="/blog/$slug"
            params={{ slug: nextPost.slug }}
            className="p-5 rounded-xl border border-ink-raised bg-ink-soft hover:border-paper/30 transition-colors flex items-center justify-between group"
          >
            <div>
              <div className="font-mono text-[10px] uppercase text-muted-ink">Artikel Selanjutnya</div>
              <div className="font-display font-semibold text-base text-paper group-hover:text-ember transition-colors">
                {nextPost.title}
              </div>
            </div>
            <ArrowRight className="size-4 text-ember group-hover:translate-x-0.5 transition-transform shrink-0 ml-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
