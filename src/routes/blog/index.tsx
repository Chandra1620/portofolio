import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Clock, Calendar, ArrowUpRight, Tag } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BLOG_POSTS } from "@/data/portfolio-data";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Catatan Teknis & Blog | Chandra Apriyanto" },
      {
        name: "description",
        content:
          "Dokumentasi teknis dan artikel arsitektur software: Implementasi algoritma SPK SAW di Laravel, pengamanan webhook payment gateway, dan desain REST API PostgreSQL.",
      },
      { property: "og:title", content: "Catatan Teknis & Blog | Chandra Apriyanto" },
      {
        property: "og:description",
        content:
          "Berbagi pengalaman praktis seputar pengembangan backend Laravel, database relasional PostgreSQL, dan arsitektur sistem web.",
      },
    ],
  }),
  component: BlogCatalogPage,
});

function BlogCatalogPage() {
  useReveal();
  const [selectedTag, setSelectedTag] = useState<string>("Semua");

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    BLOG_POSTS.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return ["Semua", ...Array.from(tags)];
  }, []);

  const filteredPosts = useMemo(() => {
    if (selectedTag === "Semua") return BLOG_POSTS;
    return BLOG_POSTS.filter((p) => p.tags.includes(selectedTag));
  }, [selectedTag]);

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16 space-y-10">
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <div className="max-w-2xl">
        <SectionHeading
          badge="Catatan &amp; Dokumentasi"
          title="Tulisan Teknis &amp; Rekayasa Sistem"
          description="Dokumentasi implementasi teknis, analisis sistem dari proyek nyata, serta catatan arsitektur database dan backend."
        />
      </div>

      {/* ── TAGS FILTER ─────────────────────────────────────────────────────── */}
      <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-ink-raised">
        <span className="font-mono text-xs text-muted-ink flex items-center gap-1 mr-2">
          <Tag className="size-3.5 text-ember" /> Topik:
        </span>
        {allTags.map((tag) => {
          const isActive = selectedTag === tag;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-md font-mono text-xs transition-colors ${
                isActive
                  ? "bg-ember text-ink font-bold"
                  : "bg-ink-soft text-muted-ink hover:text-paper border border-ink-raised"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {/* ── BLOG LIST ───────────────────────────────────────────────────────── */}
      <div className="space-y-5">
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            className="p-6 sm:p-7 rounded-xl border border-ink-raised bg-ink-soft hover:border-paper/20 transition-colors flex flex-col justify-between"
          >
            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted-ink">
                <span className="text-ember font-medium uppercase tracking-wider">
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

              <h2 className="font-display font-bold text-xl sm:text-2xl text-paper hover:text-ember transition-colors">
                <Link to="/blog/$slug" params={{ slug: post.slug }}>
                  {post.title}
                </Link>
              </h2>

              <p className="text-muted-ink text-xs sm:text-sm leading-relaxed max-w-3xl">
                {post.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-2 py-0.5 rounded bg-ink text-muted-ink border border-ink-raised"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-ink-raised flex items-center justify-between">
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-paper font-medium hover:text-ember transition-colors"
              >
                <BookOpen className="size-3.5 text-muted-ink" />
                <span>Baca Artikel Lengkap</span>
                <ArrowUpRight className="size-3 text-muted-ink" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
