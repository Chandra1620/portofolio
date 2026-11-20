import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight, Download, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "Experience", to: "/experience" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-md border-b border-paper/10 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-paper/5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Brand Logo & Playmaker Badge */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <span className="grid place-items-center size-10 rounded-xl bg-ink-raised border border-ink-raised text-ember font-display font-black text-lg leading-none group-hover:border-ember/60 transition-colors shadow-sm">
              CA
            </span>
            <span className="absolute -top-1 -right-1 px-1 py-0.2 rounded bg-ember text-ink font-mono text-[9px] font-black shadow">
              #10
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold tracking-tight text-base text-paper group-hover:text-ember transition-colors flex items-center gap-1.5">
              <span>Chandra Apriyanto</span>
              <span className="size-1.5 rounded-full bg-turf" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-ink font-medium -mt-0.5 hidden sm:block">
              Fullstack Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 font-mono text-xs uppercase tracking-[0.16em]">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.to === "/"
                ? currentPath === "/"
                : currentPath.startsWith(link.to);

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative py-1.5 transition-colors duration-200 ${
                  isActive
                    ? "text-ember font-bold"
                    : "text-muted-ink hover:text-paper"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-ember rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={PERSONAL_INFO.cvFile}
            download="Chandra-Apriyanto-CV.pdf"
            className="inline-flex items-center gap-1.5 rounded-full border border-paper/15 px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-paper/90 hover:bg-paper/10 transition-colors duration-200"
            title="Download CV Chandra Apriyanto (PDF)"
          >
            <Download className="size-3.5 text-ember" />
            <span>CV</span>
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-ember px-5 py-2 font-mono text-xs uppercase tracking-[0.14em] font-semibold text-ink hover:bg-ember-soft transition-all duration-300 shadow-md shadow-ember/20 hover:scale-[1.02]"
          >
            <span>Diskusi Proyek</span>
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg border border-paper/10 text-paper hover:bg-paper/5 transition-colors"
          aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="size-6 text-ember" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-ink/95 backdrop-blur-xl border-t border-paper/10 z-50 p-6 flex flex-col justify-between overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-paper/5 border border-paper/10 font-mono text-xs text-muted-ink mb-2">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{PERSONAL_INFO.availability}</span>
            </div>

            {NAV_LINKS.map((link) => {
              const isActive =
                link.to === "/"
                  ? currentPath === "/"
                  : currentPath.startsWith(link.to);

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl font-mono text-sm uppercase tracking-widest transition-all ${
                    isActive
                      ? "bg-ember/15 text-ember font-bold border border-ember/30"
                      : "text-paper/80 hover:bg-paper/5 hover:text-paper"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <Sparkles className="size-4 text-ember" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-paper/10 flex flex-col gap-3">
            <a
              href={PERSONAL_INFO.cvFile}
              download="Chandra-Apriyanto-CV.pdf"
              className="w-full flex items-center justify-center gap-2 rounded-xl border border-paper/20 py-3.5 font-mono text-xs uppercase tracking-widest text-paper hover:bg-paper/10 transition-colors"
            >
              <Download className="size-4 text-ember" />
              <span>Download CV (PDF)</span>
            </a>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-ember py-3.5 font-mono text-xs uppercase tracking-widest font-bold text-ink hover:bg-ember-soft transition-colors shadow-md shadow-ember/20"
            >
              <span>Mulai Diskusi Proyek</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
