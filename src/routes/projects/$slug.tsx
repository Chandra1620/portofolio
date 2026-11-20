import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Layers,
  Calendar,
  User,
  Users,
  Briefcase,
} from "lucide-react";

import { useReveal } from "@/hooks/use-reveal";
import { PROJECTS } from "@/data/portfolio-data";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) {
      throw notFound();
    }
    const currentIndex = PROJECTS.findIndex((p) => p.slug === params.slug);
    const prevProject =
      currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
    const nextProject =
      currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];

    return { project, prevProject, nextProject };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.project) {
      return { meta: [{ title: "Proyek Tidak Ditemukan" }] };
    }
    return {
      meta: [
        { title: `${loaderData.project.title} | Studi Kasus Chandra Apriyanto` },
        { name: "description", content: loaderData.project.summary },
        { property: "og:title", content: `${loaderData.project.title} | Studi Kasus` },
        { property: "og:description", content: loaderData.project.summary },
      ],
    };
  },
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  useReveal();
  const { project, prevProject, nextProject } = Route.useLoaderData();
  const caseStudy = project.caseStudy;

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10 py-10 sm:py-14 space-y-12 sm:space-y-16">
      {/* ── BACK BUTTON ────────────────────────────────────────────────────── */}
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-ink hover:text-paper transition-colors"
        >
          <ArrowLeft className="size-3.5 text-ember" />
          <span>Kembali ke Daftar Proyek</span>
        </Link>
      </div>

      {/* ── HERO PROYEK ────────────────────────────────────────────────────── */}
      <div className="space-y-5">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-wider px-2.5 py-0.5 rounded bg-ink-raised text-paper font-semibold border border-ink-raised">
            {project.category}
          </span>
          <span className="font-mono text-xs text-muted-ink">Tahun {project.year}</span>
        </div>

        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-paper tracking-tight leading-tight">
          {project.title}
        </h1>

        <p className="text-base sm:text-xl text-muted-ink font-normal">
          {project.tagline}
        </p>

        {/* Large Cover Image */}
        <div className="relative overflow-hidden rounded-xl border border-ink-raised bg-ink-soft aspect-[16/9] mt-6">
          <img
            src={project.thumbnail}
            alt={`Tangkapan layar proyek ${project.title}`}
            className="size-full object-cover"
          />
        </div>
      </div>

      {/* ── METADATA TABLE & ACTIONS ────────────────────────────────────────── */}
      <div className="grid md:grid-cols-12 gap-6 p-6 rounded-xl border border-ink-raised bg-ink-soft">
        <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-5 font-mono text-xs">
          <div>
            <div className="text-muted-ink uppercase tracking-wider flex items-center gap-1.5 mb-1">
              <User className="size-3.5 text-ember" /> Peran
            </div>
            <div className="text-paper font-medium font-sans text-sm">{project.role}</div>
          </div>
          <div>
            <div className="text-muted-ink uppercase tracking-wider flex items-center gap-1.5 mb-1">
              <Briefcase className="size-3.5 text-ember" /> Institusi / Klien
            </div>
            <div className="text-paper font-medium font-sans text-sm">{project.client}</div>
          </div>
          <div>
            <div className="text-muted-ink uppercase tracking-wider flex items-center gap-1.5 mb-1">
              <Calendar className="size-3.5 text-ember" /> Durasi
            </div>
            <div className="text-paper font-medium font-sans text-sm">{project.duration}</div>
          </div>
          <div>
            <div className="text-muted-ink uppercase tracking-wider flex items-center gap-1.5 mb-1">
              <Users className="size-3.5 text-ember" /> Tim
            </div>
            <div className="text-paper font-medium font-sans text-sm">{project.team}</div>
          </div>
          <div className="col-span-2">
            <div className="text-muted-ink uppercase tracking-wider flex items-center gap-1.5 mb-1">
              <Layers className="size-3.5 text-ember" /> Tech Stack
            </div>
            <div className="flex flex-wrap gap-1 mt-1">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded bg-ink border border-ink-raised text-[11px] text-muted-ink"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="md:col-span-4 flex flex-col justify-center gap-2.5 border-t md:border-t-0 md:border-l border-ink-raised pt-4 md:pt-0 md:pl-6">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-ember py-2.5 font-mono text-xs uppercase tracking-wider font-bold text-ink hover:bg-amber-400 transition-colors shadow-sm"
            >
              <span>Buka Demo Aktif</span>
              <ExternalLink className="size-3.5" />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-ink-raised bg-ink py-2.5 font-mono text-xs uppercase tracking-wider text-paper hover:border-paper/30 transition-colors"
            >
              <Github className="size-3.5" />
              <span>Lihat Repositori GitHub</span>
            </a>
          )}
        </div>
      </div>

      {/* ── CASE STUDY CONTENT ──────────────────────────────────────────────── */}
      {caseStudy ? (
        <div className="space-y-12 sm:space-y-14 text-paper">
          {/* Latar Belakang & Masalah */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-paper">
              Latar Belakang &amp; Tantangan Operasional
            </h2>
            <p className="text-sm sm:text-base text-muted-ink leading-relaxed">
              {caseStudy.overview}
            </p>

            <div className="p-5 rounded-xl border border-ink-raised bg-ink space-y-1.5">
              <div className="font-mono text-xs uppercase tracking-wider text-ember font-semibold flex items-center gap-2">
                <AlertTriangle className="size-4" /> Masalah Awal Klien
              </div>
              <p className="text-muted-ink text-xs sm:text-sm leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>
          </section>

          {/* Sasaran Terukur */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-paper">
              Sasaran Sistem (Objectives)
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {caseStudy.objectives.map((obj) => (
                <div
                  key={obj}
                  className="p-4 rounded-xl border border-ink-raised bg-ink-soft flex items-start gap-2.5"
                >
                  <CheckCircle2 className="size-4 text-turf shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-paper/90">{obj}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Proses Pengerjaan */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-paper">
              Tahapan Eksekusi &amp; Pengembangan
            </h2>
            <div className="space-y-3">
              {caseStudy.process.map((step) => (
                <div
                  key={step.step}
                  className="p-5 rounded-xl border border-ink-raised bg-ink-soft space-y-1.5"
                >
                  <div className="font-mono text-xs text-ember font-semibold">
                    Tahap {step.step}: {step.title}
                  </div>
                  <p className="text-muted-ink text-xs sm:text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Keputusan Teknis */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-paper flex items-center gap-2">
              <Cpu className="size-5 text-ember" />
              <span>Keputusan Arsitektur &amp; Basis Data</span>
            </h2>
            <div className="space-y-3">
              {caseStudy.technicalDecisions.map((tech) => (
                <div
                  key={tech.decision}
                  className="p-5 rounded-xl border border-ink-raised bg-ink-soft space-y-2"
                >
                  <div className="font-display font-bold text-base text-paper">{tech.decision}</div>
                  <div className="text-xs sm:text-sm text-muted-ink">
                    <strong className="text-paper">Alasan:</strong> {tech.reason}
                  </div>
                  <div className="text-xs font-mono text-muted-ink pt-1.5 border-t border-ink-raised">
                    <span>Alternatif yang dipertimbangkan: {tech.alternative}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Fitur Utama */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-paper">
              Fitur Kunci yang Diimplementasikan
            </h2>
            <div className="grid sm:grid-cols-2 gap-3.5">
              {caseStudy.keyFeatures.map((f) => (
                <div key={f.title} className="p-4 rounded-xl border border-ink-raised bg-ink-soft">
                  <h3 className="font-display font-semibold text-sm sm:text-base text-paper">{f.title}</h3>
                  <p className="text-xs text-muted-ink mt-1.5 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Tantangan & Solusi */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-paper">
              Kendala Teknis &amp; Penyelesaian
            </h2>
            <div className="space-y-3">
              {caseStudy.challenges.map((c) => (
                <div key={c.issue} className="p-5 rounded-xl border border-ink-raised bg-ink-soft space-y-1.5">
                  <div className="text-xs sm:text-sm font-semibold text-paper flex items-center gap-2">
                    <AlertTriangle className="size-3.5 text-ember shrink-0" />
                    <span>Tantangan: {c.issue}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-muted-ink pl-5">
                    <strong className="text-turf">Solusi:</strong> {c.solution}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Hasil & Metrik Nyata */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-paper">
              Hasil &amp; Metrik Terukur
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {caseStudy.results.map((res) => (
                <div key={res.metric} className="p-4 rounded-xl border border-ink-raised bg-ink-soft">
                  <div className="font-mono font-bold text-lg text-paper">
                    {res.metric}
                  </div>
                  <p className="text-xs text-muted-ink mt-1 leading-relaxed">{res.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pelajaran yang Dipetik */}
          <section className="p-6 rounded-xl border border-ink-raised bg-ink space-y-2">
            <div className="font-mono text-xs uppercase tracking-wider text-muted-ink flex items-center gap-2 font-semibold">
              <Lightbulb className="size-3.5 text-ember" /> Refleksi &amp; Pelajaran Teknis
            </div>
            <p className="text-xs sm:text-sm text-paper/90 leading-relaxed">
              “{caseStudy.lessonsLearned}”
            </p>
          </section>

          {/* Galeri Screenshot */}
          {caseStudy.gallery && caseStudy.gallery.length > 0 && (
            <section className="space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-paper">
                Dokumentasi Antarmuka Sistem
              </h2>
              <div className="grid md:grid-cols-2 gap-5">
                {caseStudy.gallery.map((item) => (
                  <div key={item.title} className="rounded-xl overflow-hidden border border-ink-raised bg-ink">
                    <img src={item.image} alt={item.title} className="w-full aspect-[16/10] object-cover" />
                    <div className="p-4 bg-ink-soft">
                      <div className="font-display font-semibold text-sm text-paper">{item.title}</div>
                      <div className="font-mono text-xs text-muted-ink mt-0.5">{item.caption}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      ) : (
        <div className="p-6 rounded-xl border border-ink-raised bg-ink-soft space-y-3">
          <h2 className="font-display font-bold text-xl text-paper">Ringkasan Proyek</h2>
          <p className="text-sm text-muted-ink leading-relaxed">{project.summary}</p>
        </div>
      )}

      {/* ── PREV / NEXT PROJECT NAVIGATION ───────────────────────────────────── */}
      <div className="pt-10 border-t border-ink-raised grid sm:grid-cols-2 gap-4">
        {prevProject && (
          <Link
            to="/projects/$slug"
            params={{ slug: prevProject.slug }}
            className="p-4 rounded-xl border border-ink-raised bg-ink-soft hover:border-paper/30 transition-colors flex items-center gap-3 text-left group"
          >
            <ArrowLeft className="size-4 text-ember group-hover:-translate-x-0.5 transition-transform" />
            <div>
              <div className="font-mono text-[10px] uppercase text-muted-ink">Proyek Sebelumnya</div>
              <div className="font-display font-semibold text-sm sm:text-base text-paper group-hover:text-ember transition-colors">
                {prevProject.title}
              </div>
            </div>
          </Link>
        )}

        {nextProject && (
          <Link
            to="/projects/$slug"
            params={{ slug: nextProject.slug }}
            className="p-4 rounded-xl border border-ink-raised bg-ink-soft hover:border-paper/30 transition-colors flex items-center justify-between text-right group sm:col-start-2"
          >
            <div className="w-full">
              <div className="font-mono text-[10px] uppercase text-muted-ink">Proyek Berikutnya</div>
              <div className="font-display font-semibold text-sm sm:text-base text-paper group-hover:text-ember transition-colors">
                {nextProject.title}
              </div>
            </div>
            <ArrowRight className="size-4 text-ember group-hover:translate-x-0.5 transition-transform shrink-0 ml-3" />
          </Link>
        )}
      </div>
    </div>
  );
}
