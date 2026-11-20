import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  MessageCircle,
  MapPin,
  Copy,
  Check,
  Send,
  Calendar,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PERSONAL_INFO, SERVICE_PACKAGES } from "@/data/portfolio-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontak & Diskusi Proyek | Chandra Apriyanto" },
      {
        name: "description",
        content:
          "Hubungi Chandra Apriyanto untuk diskusi proyek sistem web Laravel, konsultasi SPK, integrasi API, atau peluang karier software engineer. Respon cepat via WhatsApp dan Email.",
      },
      { property: "og:title", content: "Kontak & Konsultasi | Chandra Apriyanto" },
      {
        property: "og:description",
        content:
          "Formulir kontak langsung, WhatsApp, email, dan penjadwalan konsultasi teknis dengan Chandra Apriyanto.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  useReveal();
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: SERVICE_PACKAGES[0]?.title || "Sistem Web Kustom (Laravel / REST API)",
    budget: "Rp 4jt - 8jt",
    message: "",
    honeypot: "",
  });

  const handleCopyEmail = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      toast.success("Alamat email disalin ke clipboard.");
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Mohon lengkapi formulir yang diperlukan.");
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSuccess(true);
      toast.success("Pesan telah siap diteruskan.");

      const mailtoSubject = encodeURIComponent(
        `[Brief Proyek] ${formData.name} - ${formData.service}`
      );
      const mailtoBody = encodeURIComponent(
        `Halo Chandra,\n\nNama: ${formData.name}\nEmail: ${formData.email}\nLayanan: ${formData.service}\nEstimasi Anggaran: ${formData.budget}\n\nKebutuhan:\n${formData.message}`
      );
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    } catch (err) {
      toast.error("Terjadi kendala. Silakan gunakan WhatsApp untuk menghubungi langsung.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16 space-y-12">
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <div className="max-w-3xl">
        <SectionHeading
          badge="Saluran Komunikasi"
          title="Mulai Diskusi atau Konsultasi Sistem"
          description="Saya biasanya merespons pesan dalam waktu 24 jam. Ceritakan kebutuhan sistem Anda atau jadwalkan panggilan diskusi online."
        />
      </div>

      <div className="grid lg:grid-cols-12 gap-10 items-start">
        {/* ── LEFT: CONTACT DETAILS & AVAILABILITY ────────────────────────────── */}
        <div className="lg:col-span-5 space-y-6">
          {/* Status Card */}
          <div className="p-5 rounded-xl border border-ink-raised bg-ink-soft space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-muted-ink">
              <span className="size-2 rounded-full bg-turf" />
              <span>Status Ketersediaan</span>
            </div>
            <div className="font-display font-semibold text-base text-paper">
              {PERSONAL_INFO.availability}
            </div>
            <p className="text-xs text-muted-ink leading-relaxed">
              Menerima proyek pengembangan website baru dan terbuka untuk proses rekrutmen posisi full-time.
            </p>
          </div>

          {/* Quick Direct Actions */}
          <div className="space-y-3 font-mono text-xs">
            {/* Email Card with 1-Click Copy */}
            <div className="p-4 rounded-xl border border-ink-raised bg-ink-soft flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-lg bg-ink border border-ink-raised text-ember grid place-items-center shrink-0">
                  <Mail className="size-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-muted-ink">Email Langsung</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-sans text-sm font-medium text-paper hover:text-ember transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-md border border-ink-raised text-muted-ink hover:text-paper hover:bg-ink-raised transition-colors"
                title="Salin alamat email"
                aria-label="Salin email ke clipboard"
              >
                {copied ? <Check className="size-3.5 text-turf" /> : <Copy className="size-3.5" />}
              </button>
            </div>

            {/* WhatsApp Card */}
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-ink-raised bg-ink-soft flex items-center justify-between gap-4 hover:border-paper/30 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-lg bg-ink border border-ink-raised text-turf grid place-items-center shrink-0">
                  <MessageCircle className="size-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-muted-ink">WhatsApp Chat</div>
                  <div className="font-sans text-sm font-medium text-paper group-hover:text-ember transition-colors">
                    {PERSONAL_INFO.phone}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="size-4 text-muted-ink group-hover:text-ember transition-colors" />
            </a>

            {/* Calendly Consultation */}
            <a
              href={PERSONAL_INFO.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-ink-raised bg-ink-soft flex items-center justify-between gap-4 hover:border-paper/30 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-lg bg-ink border border-ink-raised text-ember grid place-items-center shrink-0">
                  <Calendar className="size-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-muted-ink">Konsultasi Daring 30 Menit</div>
                  <div className="font-sans text-sm font-medium text-paper group-hover:text-ember transition-colors">
                    Jadwalkan via Calendly
                  </div>
                </div>
              </div>
              <ArrowUpRight className="size-4 text-muted-ink group-hover:text-ember transition-colors" />
            </a>
          </div>

          {/* Location */}
          <div className="pt-1 flex items-center gap-2 text-xs font-mono text-muted-ink">
            <MapPin className="size-3.5 text-ember" />
            <span>Lokasi: {PERSONAL_INFO.location}</span>
          </div>
        </div>

        {/* ── RIGHT: CONTACT FORM ─────────────────────────────────────────────── */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-xl border border-ink-raised bg-ink-soft space-y-5">
            <div className="pb-3 border-b border-ink-raised">
              <h3 className="font-display font-bold text-xl text-paper">Formulir Pesan &amp; Brief Singkat</h3>
            </div>

            {isSuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="size-12 rounded-full bg-turf/10 text-turf grid place-items-center mx-auto border border-turf/30">
                  <Check className="size-6" />
                </div>
                <h4 className="font-display font-bold text-lg text-paper">Pesan Siap Dikirim</h4>
                <p className="text-xs sm:text-sm text-muted-ink max-w-md mx-auto leading-relaxed">
                  Terima kasih, {formData.name}. Klien email Anda telah disiapkan dengan ringkasan brief ini.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="mt-3 px-4 py-2 rounded-md bg-ink-raised font-mono text-xs uppercase tracking-wider text-paper hover:bg-ink transition-colors"
                >
                  Tulis Pesan Baru
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1">
                    <label htmlFor="name" className="font-mono text-xs text-muted-ink">
                      Nama Lengkap <span className="text-ember">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Budi Santoso"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-ink border border-ink-raised text-xs sm:text-sm text-paper placeholder:text-muted-ink/50 focus:outline-none focus:border-ember"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1">
                    <label htmlFor="email" className="font-mono text-xs text-muted-ink">
                      Alamat Email <span className="text-ember">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. budi@perusahaan.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-ink border border-ink-raised text-xs sm:text-sm text-paper placeholder:text-muted-ink/50 focus:outline-none focus:border-ember"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Service Selection */}
                  <div className="space-y-1">
                    <label htmlFor="service" className="font-mono text-xs text-muted-ink">
                      Layanan / Topik
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-ink border border-ink-raised text-xs sm:text-sm text-paper focus:outline-none focus:border-ember"
                    >
                      {SERVICE_PACKAGES.map((pkg) => (
                        <option key={pkg.id} value={pkg.title} className="bg-ink text-paper">
                          {pkg.title} ({pkg.startingPrice})
                        </option>
                      ))}
                      <option value="Peluang Kerja Full-time" className="bg-ink text-paper">
                        Peluang Kerja Full-time / Rekrutmen
                      </option>
                      <option value="Konsultasi Teknis Lainnya" className="bg-ink text-paper">
                        Konsultasi Teknis Lainnya
                      </option>
                    </select>
                  </div>

                  {/* Budget Estimate */}
                  <div className="space-y-1">
                    <label htmlFor="budget" className="font-mono text-xs text-muted-ink">
                      Estimasi Anggaran
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-ink border border-ink-raised text-xs sm:text-sm text-paper focus:outline-none focus:border-ember"
                    >
                      <option value="Rp 2jt - 4jt" className="bg-ink text-paper">Rp 2jt - 4jt</option>
                      <option value="Rp 4jt - 8jt" className="bg-ink text-paper">Rp 4jt - 8jt</option>
                      <option value="Rp 8jt - 15jt+" className="bg-ink text-paper">Rp 8jt - 15jt+</option>
                      <option value="Penawaran Rekrutmen" className="bg-ink text-paper">Penawaran Rekrutmen Full-time</option>
                    </select>
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-1">
                  <label htmlFor="message" className="font-mono text-xs text-muted-ink">
                    Detail Kebutuhan / Cerita Singkat <span className="text-ember">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Jelaskan kebutuhan sistem, target jadwal, atau informasi posisi yang ingin didiskusikan..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-ink border border-ink-raised text-xs sm:text-sm text-paper placeholder:text-muted-ink/50 focus:outline-none focus:border-ember resize-none"
                  />
                </div>

                <div className="flex items-center gap-2 font-mono text-[11px] text-muted-ink">
                  <ShieldCheck className="size-3.5 text-turf" />
                  <span>Informasi kontak hanya digunakan untuk keperluan komunikasi profesional.</span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-ember font-mono text-xs uppercase tracking-wider font-bold text-ink hover:bg-amber-400 disabled:opacity-50 transition-colors shadow-sm"
                >
                  {isSubmitting ? (
                    <span>Menyiapkan...</span>
                  ) : (
                    <>
                      <span>Kirim Pesan</span>
                      <Send className="size-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
