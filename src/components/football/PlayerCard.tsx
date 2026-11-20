import { Award, ShieldCheck, Code, Database, Server, Smartphone, Layers, Cpu } from "lucide-react";
import portrait from "@/assets/portrait.jpg";

export function PlayerCard() {
  const TECHNICAL_PILLARS = [
    { label: "BACKEND", name: "Laravel (PHP)", icon: Server, exp: "Mahir" },
    { label: "API", name: "RESTful API", icon: Code, exp: "Mahir" },
    { label: "DATABASE", name: "PostgreSQL & MySQL", icon: Database, exp: "Mahir" },
    { label: "MOBILE", name: "Flutter & Dart", icon: Smartphone, exp: "Menengah" },
    { label: "FRONTEND", name: "Tailwind CSS", icon: Layers, exp: "Mahir" },
    { label: "ALGORITMA", name: "SPK Metode SAW", icon: Cpu, exp: "Teruji" },
  ];

  return (
    <div className="relative group mx-auto w-full max-w-sm sm:max-w-md">
      {/* Subtle Outer Glow */}
      <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-b from-emerald-500/20 via-gold/15 to-transparent opacity-60 blur-xl group-hover:opacity-100 transition-opacity duration-700" />

      {/* Engineer Squad Card Container */}
      <div className="relative rounded-[28px] border border-gold/40 bg-gradient-to-b from-[#161f2c] via-[#0f1622] to-[#090d14] p-6 sm:p-7 shadow-2xl text-paper overflow-hidden">
        {/* Card Header Subtle Floodlight Texture */}
        <div className="absolute top-0 right-0 left-0 h-28 bg-gradient-to-b from-gold/10 to-transparent pointer-events-none" />

        {/* Top Badges: Jersey Number & Institution Origin */}
        <div className="flex items-start justify-between relative z-10">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="font-mono text-gold text-2xl font-bold">#</span>
              <span className="font-mono font-black text-5xl sm:text-6xl text-gold tracking-tighter leading-none drop-shadow-md">
                10
              </span>
            </div>
            <div className="font-mono font-extrabold text-xs sm:text-sm text-ember uppercase tracking-widest mt-1">
              FULLSTACK PLAYMAKER
            </div>
            <div className="font-mono text-[10px] text-paper/70 mt-0.5">
              POLINDRA &bull; D4 RPL
            </div>
          </div>

          {/* National & Origin Badges */}
          <div className="flex flex-col items-end gap-1 font-mono text-[10px] text-paper/80">
            <span className="px-2.5 py-0.5 rounded bg-black/60 border border-gold/40 text-gold font-bold">
              ID // INDONESIA
            </span>
            <span className="px-2.5 py-0.5 rounded bg-black/60 border border-paper/15 text-paper/90">
              INDRAMAYU, JABAR
            </span>
          </div>
        </div>

        {/* Player Photo */}
        <div className="relative my-4 flex justify-center">
          <div className="relative size-36 sm:size-44 rounded-2xl overflow-hidden border-2 border-gold/40 shadow-2xl shadow-gold/20 bg-ink">
            <img
              src={portrait}
              alt="Foto Chandra Apriyanto"
              className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
            <div className="absolute bottom-2 left-2 right-2 text-center">
              <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-ink/80 text-emerald-300 border border-emerald-500/30">
                5 Proyek Produksi
              </span>
            </div>
          </div>
        </div>

        {/* Player Name & Title */}
        <div className="text-center relative z-10">
          <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-wider text-paper drop-shadow">
            CHANDRA APRIYANTO
          </h3>
          <p className="font-mono text-xs text-gold font-semibold tracking-wider mt-0.5">
            Fullstack Web &amp; Mobile Developer
          </p>
        </div>

        {/* 6 Technical Pillars Grid */}
        <div className="mt-5 pt-4 border-t border-gold/20 grid grid-cols-3 gap-2.5 font-mono text-center">
          {TECHNICAL_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.label}
                className="p-2 rounded-xl bg-black/40 border border-gold/15 backdrop-blur-sm flex flex-col items-center justify-between min-h-[64px]"
              >
                <div className="flex items-center gap-1 text-[10px] text-ember font-bold">
                  <Icon className="size-3 text-gold" />
                  <span>{pillar.label}</span>
                </div>
                <div className="font-sans font-semibold text-xs text-paper truncate w-full mt-0.5">
                  {pillar.name}
                </div>
                <div className="text-[9px] text-emerald-400 font-semibold mt-0.5">
                  {pillar.exp}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Verification Footer */}
        <div className="mt-4 pt-3 border-t border-paper/10 flex items-center justify-between font-mono text-[11px] text-paper/80">
          <span className="flex items-center gap-1.5 text-gold font-semibold">
            <Award className="size-3.5" />
            <span>Lulusan D4 RPL Polindra</span>
          </span>
          <span className="flex items-center gap-1.5 text-emerald-400">
            <ShieldCheck className="size-3.5" />
            <span>Siap Kerja &amp; Proyek</span>
          </span>
        </div>
      </div>
    </div>
  );
}

