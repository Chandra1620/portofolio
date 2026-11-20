import { Trophy, Activity, ShieldCheck, Zap, Code2 } from "lucide-react";

export function MatchTicker() {
  const TICKER_ITEMS = [
    { icon: Activity, text: "STATUS: TERSEDIA UNTUK FULL-TIME, KONTRAK & FREELANCE" },
    { icon: Trophy, text: "REKAM JEJAK: 8 PROYEK APLIKASI WEB & MOBILE SEJAK 2023" },
    { icon: Zap, text: "FOUNDER: PEPRA LAB — STARTUP TEKNOLOGI & DIGITAL AGENCY" },
    { icon: Code2, text: "KEAHLIAN: LARAVEL, FLUTTER, REACT, VUE.JS, SUPABASE & REST API" },
    { icon: ShieldCheck, text: "AKADEMIK: LULUSAN D4 RPL POLINDRA (IPK 3.80)" },
    { icon: Trophy, text: "KEAMANAN: RBAC, SANITASI INPUT ANTI-XSS & NOTIFIKASI MULTI-KANAL" },
  ];

  return (
    <div className="relative border-y border-ember/20 bg-ink-soft/80 backdrop-blur-md overflow-hidden py-3 font-mono text-xs uppercase tracking-widest text-paper/90 select-none shadow-inner">
      <div className="flex w-max marquee-track">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-3 px-8 shrink-0">
              <span className="flex size-5 items-center justify-center rounded-md bg-ember/20 text-ember">
                <Icon className="size-3.5" />
              </span>
              <span className="font-semibold">{item.text}</span>
              <span className="text-ember/40 font-bold mx-2">///</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

