import { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROJECTS } from "@/data/portfolio-data";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Daftar Proyek & Studi Kasus | Chandra Apriyanto" },
      {
        name: "description",
        content:
          "Koleksi 8 studi kasus proyek nyata: Portal Berita Cuplik.com, Buwuh.com, SIMPEG Mobile PERUMDAM, Sistem SPK SAW UKT POLINDRA, SuperApps MyBTP Bandung Techno Park, dan lainnya.",
      },
      { property: "og:title", content: "Daftar Proyek | Chandra Apriyanto" },
      {
        property: "og:description",
        content:
          "Jelajahi arsitektur dan studi kasus 8 proyek aplikasi web dan mobile yang dibangun oleh Chandra Apriyanto.",
      },
    ],
  }),
  component: ProjectsCatalogPage,
});

const CATEGORIES = [
  "Semua",
  "Web App",
  "Mobile App",
  "SPK & Algoritma",
  "Magang Industri",
  "Frontend & UI",
] as const;

function ProjectsCatalogPage() {
  useReveal();
  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchCategory =
        activeCategory === "Semua" || p.category === activeCategory;
      const matchSearch =
        searchQuery === "" ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.stack.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16 space-y-10">
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <div className="max-w-3xl">
        <SectionHeading
          badge="Portofolio Proyek"
          title="Studi Kasus &amp; Sistem Produksi"
          description="Dokumentasi lengkap 8 sistem web dan mobile yang saya rancang dan kembangkan, mencakup arsitektur backend Laravel, aplikasi mobile Flutter, frontend React 19, perancangan database PostgreSQL/MySQL, integrasi REST API, hingga pengujian end-to-end."
        />
      </div>

      {/* ── FILTERS & SEARCH ────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-ink-raised">
        {/* Category Buttons */}
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter kategori proyek">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-md font-mono text-xs uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember ${
                  isActive
                    ? "bg-ember text-ink font-bold"
                    : "bg-ink-soft text-muted-ink hover:text-paper border border-ink-raised"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="w-full sm:w-64">
          <label htmlFor="project-search" className="sr-only">
            Cari proyek berdasarkan judul, ringkasan, atau teknologi
          </label>
          <input
            id="project-search"
            type="search"
            placeholder="Cari stack atau judul..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3.5 py-2 rounded-md bg-ink border border-ink-raised text-xs font-mono text-paper placeholder:text-muted-ink focus:outline-none focus:border-ember focus-visible:ring-2 focus-visible:ring-ember"
            aria-label="Cari proyek berdasarkan judul atau teknologi"
          />
        </div>
      </div>

      {/* ── PROJECTS GRID ───────────────────────────────────────────────────── */}
      {filteredProjects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center rounded-xl border border-dashed border-ink-raised bg-ink-soft">
          <p className="font-mono text-sm text-muted-ink">
            Tidak ada proyek yang sesuai dengan filter atau kata kunci pencarian.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory("Semua");
              setSearchQuery("");
            }}
            className="mt-3 px-3.5 py-1.5 rounded-md bg-ink-raised text-xs font-mono text-paper hover:bg-ink-soft border border-ink-raised transition-colors"
          >
            Reset Filter
          </button>
        </div>
      )}
    </div>
  );
}
