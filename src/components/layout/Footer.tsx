import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Instagram, Mail, MessageCircle, Heart } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-ink-raised bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="relative">
                <span className="grid place-items-center size-10 rounded-xl bg-ink-raised border border-ink-raised text-ember font-display font-black text-lg leading-none shadow-sm">
                  CA
                </span>
                <span className="absolute -top-1 -right-1 px-1 py-0.2 rounded bg-ember text-ink font-mono text-[8px] font-black">
                  #10
                </span>
              </div>
              <span className="font-display font-extrabold tracking-tight text-xl text-paper">
                Chandra Apriyanto
              </span>
            </Link>
            <p className="text-muted-ink text-sm leading-relaxed max-w-sm">
              Fullstack Developer &amp; Mobile Developer lulusan D4 Rekayasa Perangkat Lunak POLINDRA (IPK 3.80) &amp; Founder Pepra Lab. Terbiasa membangun sistem berbasis Laravel, Flutter, React, Vue.js, Supabase, dan PostgreSQL.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-ink mt-2">
              <span className="size-2 rounded-full bg-turf" />
              <span className="text-paper/80 font-medium">Domisili: {PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Col 2: Navigation Sitemap */}
          <div className="lg:col-span-3 flex flex-col gap-3 font-mono text-xs uppercase tracking-widest">
            <span className="text-ember font-bold text-sm mb-1 font-display">Navigasi</span>
            <Link to="/" className="text-muted-ink hover:text-paper transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-muted-ink hover:text-paper transition-colors">
              Tentang Saya
            </Link>
            <Link to="/projects" className="text-muted-ink hover:text-paper transition-colors">
              Semua Proyek
            </Link>
            <Link to="/services" className="text-muted-ink hover:text-paper transition-colors">
              Layanan &amp; Harga
            </Link>
            <Link to="/experience" className="text-muted-ink hover:text-paper transition-colors">
              Timeline Karier
            </Link>
            <Link to="/blog" className="text-muted-ink hover:text-paper transition-colors">
              Blog &amp; Catatan Teknis
            </Link>
            <Link to="/contact" className="text-muted-ink hover:text-paper transition-colors">
              Kontak &amp; Konsultasi
            </Link>
          </div>

          {/* Col 3: Social & Contact */}
          <div className="lg:col-span-4 flex flex-col gap-3 font-mono text-xs uppercase tracking-widest">
            <span className="text-ember font-bold text-sm mb-1 font-display">Hubungi Langsung</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-2 text-muted-ink hover:text-paper transition-colors group"
            >
              <Mail className="size-4 text-ember group-hover:scale-110 transition-transform" />
              <span className="lowercase font-mono text-xs">{PERSONAL_INFO.email}</span>
            </a>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-ink hover:text-paper transition-colors group"
            >
              <MessageCircle className="size-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>WhatsApp: {PERSONAL_INFO.phone}</span>
              <ArrowUpRight className="size-3 opacity-60" />
            </a>
            <div className="pt-3 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-paper/10 text-muted-ink hover:text-paper hover:border-paper/30 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="size-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-paper/10 text-muted-ink hover:text-paper hover:border-paper/30 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-paper/10 text-muted-ink hover:text-paper hover:border-paper/30 transition-all"
                aria-label="Instagram Profile"
              >
                <Instagram className="size-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-paper/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-muted-ink">
          <div>
            © {currentYear} Chandra Apriyanto — Hak Cipta Dilindungi.
          </div>
          <div className="flex items-center gap-1.5">
            <span>D4 Rekayasa Perangkat Lunak POLINDRA (IPK 3.80)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
