import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  CheckCircle2,
  Clock,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

import { useReveal } from "@/hooks/use-reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MatchTicker } from "@/components/football/MatchTicker";
import { TacticalFormation } from "@/components/football/TacticalFormation";
import { PlayerCard } from "@/components/football/PlayerCard";
import {
  PERSONAL_INFO,
  HIGHLIGHT_STATS,
  PROJECTS,
  SERVICE_PACKAGES,
  TESTIMONIALS,
  BLOG_POSTS,
} from "@/data/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chandra Apriyanto | Fullstack Developer & Mobile Developer" },
      {
        name: "description",
        content:
          "Portfolio Chandra Apriyanto — Fullstack Developer & Mobile Developer lulusan D4 Rekayasa Perangkat Lunak POLINDRA (IPK 3.80) & Founder Pepra Lab. Berpengalaman 8 proyek web & mobile berbasis Laravel, Flutter, React, Vue.js, Supabase, dan PostgreSQL.",
      },
      { property: "og:title", content: "Chandra Apriyanto | Fullstack Developer & Mobile Developer" },
      {
        property: "og:description",
        content:
          "Studi kasus sistem nyata: Portal Berita Cuplik.com, Buwuh.com, SIMPEG Mobile PERUMDAM, SPK SAW UKT POLINDRA, SuperApps MyBTP, dan catatan teknis.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: IndexPage,
});

const TECH_LOGOS = [
  "Laravel",
  "PHP",
  "Flutter",
  "MySQL",
  "PostgreSQL",
  "REST API",
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "Tailwind",
  "AJAX",
  "Vite",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Dart",
  "Supabase",
  "Firebase",
  "OneSignal",
  "Git",
  "Python",
  "Figma",
  "Wokwi",
  "RBAC",
];

function IndexPage() {
  useReveal();
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 4);
  const recentArticles = BLOG_POSTS.slice(0, 2);

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* ── HERO SECTION ────────────────────────────────────────────────────── */}
      <section className="relative pt-6 sm:pt-12 pb-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          {/* Availability Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-ink-soft border border-ink-raised font-mono text-xs text-paper mb-6">
            <span className="size-2 rounded-full bg-turf" />
            <span className="text-muted-ink">Status:</span>
            <span className="text-paper font-medium">{PERSONAL_INFO.availability}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Hero Text */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-ink block">
                  Fullstack Developer &bull; Mobile Developer &bull; Founder Pepra Lab
                </span>
                <h1 className="font-display font-extrabold tracking-tight text-4xl sm:text-6xl text-paper leading-[1.08]">
                  Membangun sistem web dan aplikasi mobile yang andal untuk kebutuhan nyata.
                </h1>
              </div>

              <p className="text-base sm:text-lg text-muted-ink leading-relaxed max-w-2xl">
                Lulusan D4 Rekayasa Perangkat Lunak POLINDRA (IPK 3.80) dengan rekam jejak mengerjakan 8 proyek aplikasi web dan mobile sejak 2023, dari frontend developer hingga fullstack dan mobile developer. Terbiasa membangun sistem berbasis Laravel, Flutter, dan React dengan REST API, PostgreSQL/MySQL, dan Supabase, termasuk dashboard analitik real-time, CMS multi-peran, dan notifikasi multi-kanal.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center rounded-lg bg-ember px-6 py-3 font-mono text-xs uppercase tracking-wider font-bold text-ink hover:bg-amber-400 transition-colors shadow-sm"
                >
                  Lihat Studi Kasus Proyek
                </Link>

                <a
                  href={PERSONAL_INFO.cvFile}
                  download="Chandra-Apriyanto-CV.pdf"
                  className="inline-flex items-center gap-2 rounded-lg border border-ink-raised bg-ink-soft px-5 py-3 font-mono text-xs uppercase tracking-wider text-paper hover:border-paper/30 transition-colors"
                >
                  <Download className="size-3.5 text-ember" />
                  <span>Unduh CV (PDF)</span>
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-muted-ink hover:text-paper px-3 py-3 transition-colors"
                >
                  <span>Hubungi Saya</span>
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>

              {/* Quick Contacts */}
              <div className="flex items-center gap-3 pt-2 font-mono text-xs text-muted-ink">
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-md border border-ink-raised bg-ink-soft hover:border-paper/30 hover:text-paper transition-all flex items-center gap-2 text-paper font-medium"
                >
                  <MessageCircle className="size-3.5 text-turf" />
                  <span>WhatsApp: {PERSONAL_INFO.phone}</span>
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2 rounded-md border border-ink-raised bg-ink-soft hover:border-paper/30 hover:text-paper transition-all"
                  aria-label="Email Chandra"
                >
                  <Mail className="size-3.5" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md border border-ink-raised bg-ink-soft hover:border-paper/30 hover:text-paper transition-all"
                  aria-label="GitHub Chandra"
                >
                  <Github className="size-3.5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md border border-ink-raised bg-ink-soft hover:border-paper/30 hover:text-paper transition-all"
                  aria-label="LinkedIn Chandra"
                >
                  <Linkedin className="size-3.5" />
                </a>
              </div>
            </div>

            {/* Hero Visual: Tactical Squad Card */}
            <div className="lg:col-span-5 flex justify-center">
              <PlayerCard />
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ──────────────────────────────────────────────────────────── */}
      <MatchTicker />

      {/* ── HIGHLIGHT STATS ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {HIGHLIGHT_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-ink-raised bg-ink-soft p-5 transition-colors hover:border-paper/20"
            >
              <div className="font-mono font-bold text-2xl sm:text-3xl text-paper tracking-tight">
                {stat.value}
              </div>
              <div className="font-display font-semibold text-sm text-paper mt-1">
                {stat.label}
              </div>
              <div className="font-mono text-xs text-muted-ink mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TACTICAL FORMATION BOARD ────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <TacticalFormation />
      </section>

      {/* ── FEATURED PROJECTS ───────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <SectionHeading
            badge="Portofolio Proyek"
            title="Studi Kasus Sistem Nyata"
            description="8 aplikasi web dan mobile yang dibangun untuk memecahkan kebutuhan operasional nyata: portal berita Cuplik.com, platform undangan Buwuh.com, SIMPEG Mobile PERUMDAM, sistem SPK UKT, SuperApps BTP, dan lainnya."
          />
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-muted-ink hover:text-paper font-medium transition-colors pb-1"
          >
            <span>Semua Proyek ({PROJECTS.length})</span>
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        <div className="space-y-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} featuredLayout={true} />
          ))}
        </div>
      </section>

      {/* ── PROFILE & BACKGROUND ────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="rounded-2xl border border-ink-raised bg-ink-soft p-8 sm:p-12 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-ink">
              Latar Belakang &amp; Disiplin Kerja
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-paper tracking-tight leading-snug">
              Ketelitian diagnosis mekanis dipadukan dengan rekayasa perangkat lunak modern.
            </h2>
            <p className="text-muted-ink text-sm sm:text-base leading-relaxed">
              Latar belakang kejuruan otomotif melatih logika pemecahan masalah yang sistematis dan teliti hingga level komponen terkecil. Di bangku perkuliahan D4 RPL POLINDRA (IPK 3.80), magang industri di Bandung Techno Park, serta inisiatif mendirikan Pepra Lab, prinsip ini saya terapkan untuk merancang arsitektur database relasional, REST API yang aman, serta antarmuka responsif web dan mobile.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-lg bg-ember px-5 py-2.5 font-mono text-xs uppercase tracking-wider font-bold text-ink hover:bg-amber-400 transition-colors"
              >
                <span>Baca Profil Lengkap</span>
              </Link>
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 rounded-lg border border-ink-raised px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-paper hover:bg-ink-raised transition-colors"
              >
                <span>Riwayat Pengalaman</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl border border-ink-raised bg-ink">
              <div className="font-display font-semibold text-base text-paper">Utama</div>
              <p className="text-xs text-muted-ink mt-1.5 leading-relaxed">
                Laravel, PHP, Flutter, MySQL, PostgreSQL, dan REST API.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-ink-raised bg-ink">
              <div className="font-display font-semibold text-base text-paper">Frontend</div>
              <p className="text-xs text-muted-ink mt-1.5 leading-relaxed">
                HTML, CSS, JS, Bootstrap, Tailwind, AJAX, Vite, TS, React, Next.js, dan Vue.js.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-ink-raised bg-ink">
              <div className="font-display font-semibold text-base text-paper">Mobile &amp; Cloud</div>
              <p className="text-xs text-muted-ink mt-1.5 leading-relaxed">
                Dart, Supabase, Firebase, dan OneSignal.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-ink-raised bg-ink">
              <div className="font-display font-semibold text-base text-paper">Tools &amp; Lainnya</div>
              <p className="text-xs text-muted-ink mt-1.5 leading-relaxed">
                Git, Python, Figma, Wokwi, dan RBAC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH STACK ──────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          badge="Teknologi"
          title="Alat &amp; Bahasa Pemrograman"
          description="Teknologi yang saya gunakan secara langsung dalam membangun aplikasi dan sistem data."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {TECH_LOGOS.map((tech) => (
            <div
              key={tech}
              className="p-4 rounded-lg border border-ink-raised bg-ink-soft hover:border-paper/20 transition-colors flex flex-col items-center justify-center text-center"
            >
              <span className="font-display font-medium text-sm text-paper">
                {tech}
              </span>
              <span className="font-mono text-[10px] text-muted-ink mt-1">Terpakai di Proyek</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES / PACKAGES ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <SectionHeading
            badge="Layanan Teknis"
            title="Paket Pengembangan &amp; Solusi"
            description="Pilihan lingkup kerja untuk pembangunan website kustom, sistem pendukung keputusan, integrasi backend, dan aplikasi mobile."
          />
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-muted-ink hover:text-paper font-medium transition-colors pb-1"
          >
            <span>Rincian Layanan &amp; FAQ</span>
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICE_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-xl border p-6 flex flex-col justify-between transition-colors ${
                pkg.popular
                  ? "border-ember bg-ink-soft shadow-sm"
                  : "border-ink-raised bg-ink-soft hover:border-paper/20"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-5 font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded bg-ember text-ink font-bold">
                  {pkg.badge}
                </div>
              )}

              <div>
                <div className="font-mono text-xs text-muted-ink">{pkg.targetAudience}</div>
                <h3 className="font-display font-bold text-lg text-paper mt-1">{pkg.title}</h3>
                <p className="text-xs text-muted-ink mt-2 leading-relaxed">{pkg.description}</p>

                <div className="mt-5 pt-4 border-t border-ink-raised">
                  <div className="font-mono text-[10px] text-muted-ink uppercase tracking-wider">Mulai dari</div>
                  <div className="font-display font-bold text-xl text-paper mt-0.5">
                    {pkg.startingPrice}
                  </div>
                  <div className="font-mono text-xs text-muted-ink mt-1 flex items-center gap-1.5">
                    <Clock className="size-3.5 text-ember" />
                    <span>Estimasi {pkg.duration}</span>
                  </div>
                </div>

                <ul className="mt-5 space-y-2 text-xs text-paper/90">
                  {pkg.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="size-3.5 text-turf shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3">
                <Link
                  to="/contact"
                  className={`w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider font-bold transition-colors ${
                    pkg.popular
                      ? "bg-ember text-ink hover:bg-amber-400"
                      : "border border-ink-raised text-paper hover:bg-ink-raised"
                  }`}
                >
                  <span>Konsultasikan</span>
                  <ArrowUpRight className="size-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          badge="Rekomendasi"
          title="Ulasan Dosen &amp; Supervisor"
          description="Evaluasi kinerja dan catatan kerja sama dari pembimbing akademik dan mentor magang industri."
        />

        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="rounded-xl border border-ink-raised bg-ink-soft p-6 flex flex-col justify-between hover:border-paper/20 transition-colors"
            >
              <blockquote className="text-sm text-paper/90 leading-relaxed">
                “{t.quote}”
              </blockquote>

              <figcaption className="mt-6 pt-4 border-t border-ink-raised">
                <div className="font-display font-bold text-sm text-paper">{t.name}</div>
                <div className="font-mono text-xs text-ember mt-0.5">{t.role}</div>
                <div className="font-mono text-[11px] text-muted-ink">{t.company}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ── RECENT ARTICLES ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <SectionHeading
            badge="Catatan Teknis"
            title="Dokumentasi &amp; Pembelajaran"
            description="Catatan implementasi algoritma SPK SAW, integrasi Midtrans payment gateway, dan manajemen query SQL."
          />
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-muted-ink hover:text-paper font-medium transition-colors pb-1"
          >
            <span>Semua Catatan</span>
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {recentArticles.map((post) => (
            <article
              key={post.slug}
              className="rounded-xl border border-ink-raised bg-ink-soft p-6 hover:border-paper/20 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-muted-ink mb-3">
                  <span className="text-ember font-medium">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-display font-bold text-xl text-paper hover:text-ember transition-colors">
                  <Link to="/blog/$slug" params={{ slug: post.slug }}>{post.title}</Link>
                </h3>

                <p className="text-xs sm:text-sm text-muted-ink mt-2 leading-relaxed line-clamp-2">
                  {post.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-ink-raised flex items-center justify-between">
                <span className="font-mono text-xs text-muted-ink">{post.publishedAt}</span>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-paper font-medium hover:text-ember transition-colors"
                >
                  <BookOpen className="size-3.5 text-muted-ink" />
                  <span>Baca Selengkapnya</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CLOSING CTA ─────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="rounded-2xl border border-ink-raised bg-ink-soft p-8 sm:p-14 text-center relative">
          <span className="font-mono text-xs uppercase tracking-wider text-muted-ink mb-2 block">
            Kemitraan &amp; Peluang Kerja
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-paper tracking-tight max-w-2xl mx-auto leading-snug">
            Siap mendiskusikan kebutuhan sistem perangkat lunak Anda?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-ink max-w-lg mx-auto leading-relaxed">
            Terbuka untuk posisi full-time software engineer, backend developer, maupun proyek pengembangan aplikasi web dan mobile.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-ember px-6 py-3 font-mono text-xs uppercase tracking-wider font-bold text-ink hover:bg-amber-400 transition-colors shadow-sm"
            >
              Kirim Pesan / Konsultasi
            </Link>

            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-ink-raised bg-ink px-5 py-3 font-mono text-xs uppercase tracking-wider text-paper hover:border-paper/30 transition-colors"
            >
              <MessageCircle className="size-4 text-turf" />
              <span>WhatsApp ({PERSONAL_INFO.phone})</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
