import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, MapPin, ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TacticalFormation } from "@/components/football/TacticalFormation";
import {
  PERSONAL_INFO,
  WORK_PRINCIPLES,
  SKILL_CATEGORIES,
  FUN_FACTS,
  EDUCATIONS,
} from "@/data/portfolio-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Tentang Chandra Apriyanto | Profil & Keahlian Fullstack" },
      {
        name: "description",
        content:
          "Profil lengkap Chandra Apriyanto — Lulusan D4 Rekayasa Perangkat Lunak POLINDRA. Pengalaman 5 proyek web dan mobile dengan fokus backend Laravel, REST API, PostgreSQL, MySQL, dan Flutter.",
      },
      { property: "og:title", content: "Tentang Chandra Apriyanto | Profil & Keahlian" },
      {
        property: "og:description",
        content:
          "Kenali latar belakang pendidikan D4 RPL POLINDRA, prinsip kerja, dan penguasaan teknologi Chandra Apriyanto.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  useReveal();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16 space-y-20 sm:space-y-24">
      {/* ── PROFIL UTAMA ────────────────────────────────────────────────────── */}
      <section className="grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 space-y-5">
          <div className="relative rounded-xl overflow-hidden border border-ink-raised bg-ink-soft">
            <img
              src={PERSONAL_INFO.portraitImage}
              alt="Foto Chandra Apriyanto"
              width={912}
              height={1104}
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="p-4 bg-ink border-t border-ink-raised">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-lg text-paper">Chandra Apriyanto</span>
                <span className="font-mono text-xs text-muted-ink">Indramayu, Jawa Barat</span>
              </div>
              <div className="font-mono text-xs text-muted-ink mt-1 flex items-center gap-1.5">
                <MapPin className="size-3.5 text-ember" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <a
              href={PERSONAL_INFO.cvFile}
              download="Chandra-Apriyanto-CV.pdf"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-ember font-mono text-xs uppercase tracking-wider font-bold text-ink hover:bg-amber-400 transition-colors shadow-sm"
            >
              <Download className="size-4" />
              <span>Unduh Dokumen CV (PDF)</span>
            </a>
            <Link
              to="/contact"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-ink-raised font-mono text-xs uppercase tracking-wider text-paper hover:bg-ink-soft transition-colors"
            >
              <span>Hubungi Langsung</span>
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-ink">
              Profil Lengkap &bull; D4 RPL POLINDRA
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-paper tracking-tight leading-tight">
              Rekayasa perangkat lunak berbasis logika terstruktur dan kebutuhan nyata.
            </h1>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-muted-ink leading-relaxed">
            <p className="text-paper p-4 rounded-lg bg-ink-soft border border-ink-raised leading-relaxed font-medium">
              “{PERSONAL_INFO.summary}”
            </p>

            <p>
              Bagi saya, software engineering adalah seni menyatukan presisi logika dengan kepraktisan dunia nyata. Mengawali pendidikan di bidang teknik kejuruan (SMK TKR), saya terbiasa memahami cara kerja sistem mekanis dari setiap komponen terkecilnya. Pola pikir sistematis tersebut kemudian saya kembangkan saat menempuh studi D4 Rekayasa Perangkat Lunak di Politeknik Negeri Indramayu (POLINDRA).
            </p>

            <p>
              Fokus utama saya berada pada pengembangan backend menggunakan Laravel dan PHP, pengelolaan basis data relasional PostgreSQL (Supabase/DBeaver) dan MySQL, perancangan REST API yang aman, integrasi payment gateway, serta implementasi algoritma pengambilan keputusan SPK metode Simple Additive Weighting (SAW).
            </p>

            <p>
              Di sisi antarmuka, saya merancang pengalaman pengguna yang responsif dan cepat menggunakan Tailwind CSS, JavaScript, dan Flutter/Dart. Saya selalu mengedepankan pengujian alur kerja menyeluruh, struktur kode bersih, dan komunikasi yang terbuka saat berkolaborasi dalam tim.
            </p>
          </div>
        </div>
      </section>

      {/* ── TACTICAL BOARD ──────────────────────────────────────────────────── */}
      <section className="border-t border-ink-raised pt-12">
        <TacticalFormation />
      </section>

      {/* ── SKILLS CATEGORIES ───────────────────────────────────────────────── */}
      <section className="border-t border-ink-raised pt-12">
        <SectionHeading
          badge="Keahlian Teknis"
          title="Kompetensi &amp; Penguasaan Alat"
          description="Daftar keahlian backend, basis data, antarmuka web, aplikasi mobile, dan penguasaan tooling yang saya gunakan pada proyek nyata."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="rounded-xl border border-ink-raised bg-ink-soft p-5 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display font-bold text-base text-paper pb-3 border-b border-ink-raised mb-3">
                  {cat.category}
                </h3>
                <div className="space-y-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2 rounded bg-ink border border-ink-raised"
                    >
                      <span className="text-xs sm:text-sm text-paper">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded font-semibold bg-ink-raised text-muted-ink">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PENDIDIKAN ──────────────────────────────────────────────────────── */}
      <section className="border-t border-ink-raised pt-12">
        <SectionHeading
          badge="Pendidikan Formal"
          title="Riwayat Pendidikan &amp; Kualifikasi"
          description="Latar belakang akademik yang membentuk dasar pemikiran rekayasa perangkat lunak dan analisis sistem saya."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {EDUCATIONS.map((edu) => (
            <div key={edu.institution} className="p-6 rounded-xl border border-ink-raised bg-ink-soft space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-ember font-medium">{edu.period}</span>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-ink border border-ink-raised text-paper">
                  {edu.gpa}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-paper">{edu.degree}</h3>
              <div className="font-display font-medium text-sm text-muted-ink">{edu.institution}</div>
              <p className="text-xs sm:text-sm text-muted-ink leading-relaxed pt-1">{edu.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRINSIP KERJA ───────────────────────────────────────────────────── */}
      <section className="border-t border-ink-raised pt-12">
        <SectionHeading
          badge="Prinsip Profesional"
          title="Standar &amp; Etika Kerja"
          description="Nilai-nilai yang saya pegang saat mengembangkan sistem mandiri maupun berkolaborasi dalam tim teknis."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {WORK_PRINCIPLES.map((principle) => (
            <div
              key={principle.title}
              className="p-6 rounded-xl border border-ink-raised bg-ink-soft"
            >
              <h3 className="font-display font-bold text-lg text-paper">{principle.title}</h3>
              <p className="text-muted-ink text-xs sm:text-sm leading-relaxed mt-2">{principle.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MINAT & AKTIVITAS PERSONAL ──────────────────────────────────────── */}
      <section className="border-t border-ink-raised pt-12">
        <SectionHeading
          badge="Aktivitas"
          title="Minat &amp; Eksplorasi di Luar Kode"
          description="Aktivitas yang melengkapi perspektif saya dalam memecahkan masalah sistematis."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FUN_FACTS.map((fact) => (
            <div
              key={fact.fact}
              className="p-5 rounded-xl border border-ink-raised bg-ink-soft flex flex-col justify-between"
            >
              <div className="text-2xl mb-3">{fact.icon}</div>
              <p className="text-xs sm:text-sm text-paper/90 leading-relaxed">{fact.fact}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────────────── */}
      <section className="border-t border-ink-raised pt-12 text-center">
        <div className="max-w-xl mx-auto space-y-4">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-paper">
            Tertarik Merekrut atau Berdiskusi Proyek?
          </h2>
          <p className="text-muted-ink text-sm sm:text-base">
            Saya siap berkontribusi pada tim software engineering Anda atau mendiskusikan kebutuhan sistem aplikasi Anda.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-ember px-6 py-3 font-mono text-xs uppercase tracking-wider font-bold text-ink hover:bg-amber-400 transition-colors shadow-sm"
            >
              Hubungi Sekarang
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-lg border border-ink-raised bg-ink-soft px-5 py-3 font-mono text-xs uppercase tracking-wider text-paper hover:border-paper/30 transition-colors"
            >
              Lihat 5 Proyek Saya
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
