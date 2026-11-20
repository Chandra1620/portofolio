import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Briefcase, GraduationCap, Award, CheckCircle2, ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  EXPERIENCES,
  EDUCATIONS,
  CERTIFICATIONS,
  PERSONAL_INFO,
} from "@/data/portfolio-data";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Pengalaman & Linimasa Proyek | Chandra Apriyanto" },
      {
        name: "description",
        content:
          "Rekam jejak 8 proyek pengembangan aplikasi web dan mobile sejak 2023 serta startup Pepra Lab: Cuplik.com, Buwuh.com, SIMPEG Mobile PERUMDAM, Proyek Akhir SPK SAW POLINDRA, dan Magang Industri Bandung Techno Park.",
      },
      { property: "og:title", content: "Pengalaman & Linimasa Proyek | Chandra Apriyanto" },
      {
        property: "og:description",
        content:
          "Pengalaman nyata Chandra Apriyanto dalam pengembangan Laravel, Flutter, React 19, Supabase, REST API, basis data PostgreSQL/MySQL, dan kepemimpinan startup.",
      },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  useReveal();

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16 space-y-16 sm:space-y-20">
      {/* ── HEADER & CV ACTION ──────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-ink-raised">
        <div className="max-w-2xl">
          <SectionHeading
            badge="Linimasa Pengalaman"
            title="Riwayat Proyek, Startup &amp; Magang Industri"
            description="8 proyek pengembangan sistem web dan mobile sejak 2023, mencakup inisiatif startup Pepra Lab, proyek klien media, instansi BUMD, proyek akhir akademik, magang industri di Bandung Techno Park, hingga implementasi sistem untuk instansi dan UKM."
          />
        </div>

        <div className="pb-2">
          <a
            href={PERSONAL_INFO.cvFile}
            download="Chandra-Apriyanto-CV.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-ember px-5 py-2.5 font-mono text-xs uppercase tracking-wider font-bold text-ink hover:bg-amber-400 transition-colors shadow-sm shrink-0"
          >
            <Download className="size-4" />
            <span>Unduh CV (PDF)</span>
          </a>
        </div>
      </div>

      {/* ── PENGALAMAN PROYEK & KERJA ────────────────────────────────────────── */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-ink">
          <Briefcase className="size-4 text-ember" />
          <span>Linimasa Proyek &amp; Implementasi</span>
        </div>

        <div className="relative border-l border-ink-raised pl-6 sm:pl-8 space-y-10 ml-2 sm:ml-4">
          {EXPERIENCES.map((exp) => (
            <div key={exp.company + exp.period} className="relative">
              {/* Dot on timeline */}
              <div className="absolute -left-[30px] sm:-left-[38px] top-1.5 size-3 rounded-full bg-ink border-2 border-ember" />

              <div className="p-6 sm:p-7 rounded-xl border border-ink-raised bg-ink-soft space-y-4 hover:border-paper/20 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="font-mono text-xs text-ember font-medium">{exp.period}</span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-paper mt-0.5">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-muted-ink">
                      {exp.company}
                    </div>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded bg-ink border border-ink-raised text-paper self-start sm:self-auto">
                    {exp.type}
                  </span>
                </div>

                <p className="text-sm text-muted-ink leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Responsibilities & Achievements */}
                <div className="space-y-2 pt-2">
                  <div className="font-mono text-xs font-semibold text-paper">Tanggung Jawab &amp; Implementasi:</div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-paper/90">
                    {exp.achievements.map((ach) => (
                      <li key={ach} className="flex items-start gap-2.5">
                        <CheckCircle2 className="size-4 text-turf shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="pt-3 border-t border-ink-raised flex flex-wrap gap-1.5">
                  {exp.stack.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-ink text-muted-ink border border-ink-raised"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PENDIDIKAN & SERTIFIKASI ────────────────────────────────────────── */}
      <section className="border-t border-ink-raised pt-12 grid md:grid-cols-2 gap-8">
        {/* Pendidikan */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-ink">
            <GraduationCap className="size-4 text-ember" />
            <span>Pendidikan Formal</span>
          </div>

          <div className="space-y-4">
            {EDUCATIONS.map((edu) => (
              <div key={edu.institution} className="p-6 rounded-xl border border-ink-raised bg-ink-soft space-y-2">
                <span className="font-mono text-xs text-muted-ink">{edu.period}</span>
                <h3 className="font-display font-bold text-lg text-paper">{edu.degree}</h3>
                <div className="font-mono text-xs text-ember font-medium">{edu.institution}</div>
                <p className="text-xs text-muted-ink leading-relaxed pt-1">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sertifikasi */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-ink">
            <Award className="size-4 text-ember" />
            <span>Sertifikasi &amp; Pelatihan</span>
          </div>

          <div className="space-y-3">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                className="p-4 rounded-xl border border-ink-raised bg-ink-soft flex items-center justify-between gap-4"
              >
                <div>
                  <h4 className="font-display font-bold text-sm text-paper">{cert.name}</h4>
                  <div className="font-mono text-xs text-muted-ink mt-0.5">
                    {cert.issuer} ({cert.year})
                  </div>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-ink border border-ink-raised text-paper shrink-0">
                  Resmi
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="border-t border-ink-raised pt-12 text-center">
        <div className="max-w-xl mx-auto space-y-4">
          <h3 className="font-display font-bold text-2xl text-paper">Tertarik Mengajak Bergabung ke Tim Anda?</h3>
          <p className="text-sm text-muted-ink">
            Saya terbuka untuk posisi Fullstack Developer, Mobile Developer (Flutter), Backend Engineer (Laravel), maupun Frontend Developer (React).
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-lg bg-ember px-6 py-3 font-mono text-xs uppercase tracking-wider font-bold text-ink hover:bg-amber-400 transition-colors shadow-sm"
            >
              <span>Hubungi Chandra Apriyanto</span>
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
