import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Clock, ArrowUpRight, MessageCircle, HelpCircle } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SERVICE_PACKAGES, WORKFLOW_STEPS, FAQS, PERSONAL_INFO } from "@/data/portfolio-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Layanan & Biaya Pengembangan | Chandra Apriyanto" },
      {
        name: "description",
        content:
          "Layanan pengembangan aplikasi web Laravel, sistem pendukung keputusan (SPK), integrasi REST API, dan aplikasi mobile Flutter oleh Chandra Apriyanto. Alur kerja transparan dan bergaransi.",
      },
      { property: "og:title", content: "Layanan & Biaya Pengembangan | Chandra Apriyanto" },
      {
        property: "og:description",
        content:
          "Solusi pengembangan sistem web kustom berbasis Laravel, implementasi algoritma SPK (SAW/AHP), slicing UI responsif, dan aplikasi mobile Flutter.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  useReveal();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16 space-y-20 sm:space-y-24">
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <div className="max-w-3xl">
        <SectionHeading
          badge="Layanan Teknis"
          title="Paket Pengembangan Sistem &amp; Kolaborasi"
          description="Pilihan layanan terstruktur untuk kebutuhan institusi, bisnis, maupun perorangan. Setiap proyek dikerjakan dengan arsitektur backend yang rapi, skema database teroptimasi, dan masa garansi perbaikan bug."
        />
      </div>

      {/* ── 4 SERVICE CARDS ─────────────────────────────────────────────────── */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
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
              <div className="font-mono text-xs text-muted-ink">
                {pkg.targetAudience}
              </div>
              <h3 className="font-display font-bold text-lg text-paper mt-1">{pkg.title}</h3>
              <p className="text-xs text-muted-ink mt-2 leading-relaxed">
                {pkg.description}
              </p>

              <div className="mt-5 pt-4 border-t border-ink-raised">
                <div className="font-mono text-[10px] uppercase text-muted-ink tracking-wider">
                  Mulai Dari
                </div>
                <div className="font-display font-bold text-xl text-paper mt-0.5">
                  {pkg.startingPrice}
                </div>
                <div className="font-mono text-xs text-muted-ink mt-1 flex items-center gap-1.5">
                  <Clock className="size-3.5 text-ember" />
                  <span>Estimasi {pkg.duration}</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-ink-raised">
                <div className="font-mono text-xs font-semibold text-paper mb-2.5">
                  Cakupan Layanan:
                </div>
                <ul className="space-y-2 text-xs text-paper/90">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="size-3.5 text-turf shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
                <span>Pilih Paket Ini</span>
                <ArrowUpRight className="size-3" />
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* ── 5-STEP WORKFLOW ─────────────────────────────────────────────────── */}
      <section className="border-t border-ink-raised pt-12">
        <SectionHeading
          badge="Alur Kerja"
          title="Tahapan Kolaborasi &amp; Eksekusi"
          description="Dari sesi diskusi awal hingga serah terima sistem aktif, alur kerja berjalan transparan dengan laporan berkala."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {WORKFLOW_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="p-5 rounded-xl border border-ink-raised bg-ink-soft flex flex-col justify-between"
            >
              <div>
                <div className="size-7 rounded bg-ink text-ember font-mono font-bold text-xs grid place-items-center mb-3 border border-ink-raised">
                  {step.stepNumber}
                </div>
                <h3 className="font-display font-bold text-base text-paper">{step.title}</h3>
                <p className="text-xs text-muted-ink mt-2 leading-relaxed">{step.description}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-ink-raised font-mono text-xs text-muted-ink">
                <span className="text-paper font-medium">Output:</span> {step.deliverable}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INTERACTIVE FAQS ────────────────────────────────────────────────── */}
      <section className="border-t border-ink-raised pt-12">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-muted-ink flex items-center gap-1.5">
              <HelpCircle className="size-4 text-ember" />
              <span>Pertanyaan Umum</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-paper leading-snug">
              Hal yang Sering Ditanyakan seputar Kerja Sama
            </h2>
            <p className="text-muted-ink text-xs sm:text-sm leading-relaxed">
              Memiliki pertanyaan khusus di luar daftar ini? Silakan kirimkan pertanyaan melalui WhatsApp atau formulir kontak.
            </p>
            <div className="pt-2">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-ink-raised bg-ink-soft px-4 py-2 font-mono text-xs uppercase tracking-wider text-paper hover:border-paper/30 transition-colors"
              >
                <MessageCircle className="size-3.5 text-turf" />
                <span>Chat via WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full space-y-2.5">
              {FAQS.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="rounded-xl border border-ink-raised bg-ink-soft px-5 data-[state=open]:border-paper/30 transition-colors"
                >
                  <AccordionTrigger className="font-display font-semibold text-sm sm:text-base text-paper py-4 hover:text-ember hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm text-muted-ink leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <section className="border-t border-ink-raised pt-12 text-center">
        <div className="max-w-xl mx-auto space-y-4">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-paper">
            Siap Memulai Proyek Website atau Sistem Anda?
          </h2>
          <p className="text-muted-ink text-xs sm:text-sm">
            Konsultasikan kebutuhan Anda. Saya siap membantu menyusun estimasi linimasa dan proposal teknis yang sesuai.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-ember px-6 py-3 font-mono text-xs uppercase tracking-wider font-bold text-ink hover:bg-amber-400 transition-colors shadow-sm"
            >
              Ajukan Proyek Sekarang
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
