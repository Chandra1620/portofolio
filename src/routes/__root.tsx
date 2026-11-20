import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SkipToContent } from "@/components/layout/SkipToContent";
import { JsonLdPerson } from "@/components/seo/JsonLdPerson";
import { Toaster } from "@/components/ui/sonner";
import { TacticalPitchBackground } from "@/components/football/TacticalPitchBackground";
import { InteractiveBallWidget } from "@/components/football/InteractiveBallWidget";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-20">
      <div className="max-w-md text-center">
        <span className="font-mono text-xs uppercase tracking-wider text-muted-ink mb-2 block">
          Error 404: Halaman Tidak Ditemukan
        </span>
        <h1 className="text-7xl font-display font-extrabold text-paper">404</h1>
        <h2 className="mt-3 text-xl font-display font-bold text-paper">
          Halaman Tidak Ditemukan
        </h2>
        <p className="mt-2 text-sm text-muted-ink leading-relaxed">
          Halaman yang Anda cari mungkin telah dipindahkan atau tautan yang Anda tuju kurang tepat.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-ember px-5 py-2.5 font-mono text-xs uppercase tracking-wider font-bold text-ink transition-colors hover:bg-amber-400"
          >
            Kembali ke Beranda
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center justify-center rounded-lg border border-ink-raised bg-ink-soft px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-paper transition-colors hover:border-paper/30"
          >
            Lihat Proyek
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-20">
      <div className="max-w-md text-center">
        <span className="font-mono text-xs uppercase tracking-wider text-destructive mb-2 block">
          Kendala Sistem
        </span>
        <h1 className="text-2xl font-display font-bold tracking-tight text-paper">
          Halaman Gagal Dimuat
        </h1>
        <p className="mt-2 text-sm text-muted-ink leading-relaxed">
          Terjadi kesalahan saat memproses permintaan. Anda dapat mencoba memuat ulang halaman.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-lg bg-ember px-5 py-2.5 font-mono text-xs uppercase tracking-wider font-bold text-ink transition-colors hover:bg-amber-400"
          >
            Coba Lagi
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg border border-ink-raised bg-ink-soft px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-paper transition-colors hover:border-paper/30"
          >
            Ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Chandra Apriyanto — Fullstack Developer & Mobile Developer" },
      {
        name: "description",
        content:
          "Chandra Apriyanto — Fullstack Developer & Mobile Developer lulusan D4 Rekayasa Perangkat Lunak POLINDRA (IPK 3.80) & Founder Pepra Lab. Berpengalaman 8 proyek aplikasi web dan mobile (Laravel, Flutter, React, Vue.js, Supabase, PostgreSQL).",
      },
      { property: "og:title", content: "Chandra Apriyanto — Fullstack Developer & Mobile Developer" },
      {
        property: "og:description",
        content:
          "Website portofolio profesional Chandra Apriyanto. Studi kasus Cuplik.com, Buwuh.com, SIMPEG Mobile PERUMDAM, SPK SAW UKT POLINDRA, SuperApps MyBTP, dan catatan teknis.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap",
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth dark">
      <head>
        <HeadContent />
        <JsonLdPerson />
      </head>
      <body className="min-h-screen bg-ink text-paper font-sans antialiased selection:bg-ember selection:text-ink overflow-x-hidden">
        <SkipToContent />
        
        {/* Interactive Tactical Football Pitch Background Canvas */}
        <TacticalPitchBackground />
        
        {/* Ambient glow backgrounds */}
        <div className="ambient-glow pointer-events-none fixed inset-0 z-0 opacity-75" aria-hidden="true" />
        
        <Navbar />

        <main id="main-content" className="relative z-10">
          {children}
        </main>

        <Footer />
        <InteractiveBallWidget />
        <Toaster position="top-right" richColors />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
