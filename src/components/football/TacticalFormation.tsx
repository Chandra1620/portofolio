import { useState } from "react";
import { Shield, Sparkles, CheckCircle2, Layers } from "lucide-react";

interface PlayerSkill {
  position: string;
  name: string;
  number: number;
  category: "FWD" | "MID" | "DEF" | "GK" | "SUB";
  roleDesc: string;
  experienceLevel: string;
  projectUsage: string;
}

const FORMATION_PLAYERS: PlayerSkill[] = [
  // Forwards (Frontend)
  {
    position: "LW",
    name: "Tailwind CSS",
    number: 11,
    category: "FWD",
    roleDesc: "Styling Utility Modern & Responsif",
    experienceLevel: "Mahir (4+ Proyek)",
    projectUsage: "SPK UKT POLINDRA & SuperApps MyBTP",
  },
  {
    position: "ST",
    name: "JavaScript",
    number: 9,
    category: "FWD",
    roleDesc: "Logika Interaktif & DOM Manipulation",
    experienceLevel: "Mahir (5 Proyek)",
    projectUsage: "Seluruh 5 Proyek Web",
  },
  {
    position: "RW",
    name: "Bootstrap & AJAX",
    number: 7,
    category: "FWD",
    roleDesc: "Komponen UI Cepat & Asynchronous Request",
    experienceLevel: "Mahir (3 Proyek)",
    projectUsage: "Presensi Pegawai & SPP Sekolah Alam",
  },

  // Midfield (Backend & Logic)
  {
    position: "CAM",
    name: "Laravel (PHP)",
    number: 10,
    category: "MID",
    roleDesc: "Core Backend MVC & Business Logic",
    experienceLevel: "Mahir (Keahlian Utama)",
    projectUsage: "SPK UKT, MyBTP, SPP Sekolah Alam",
  },
  {
    position: "CM",
    name: "RESTful API",
    number: 8,
    category: "MID",
    roleDesc: "Arsitektur Endpoint & Integrasi JSON",
    experienceLevel: "Mahir (Standar Industri)",
    projectUsage: "MyBTP Application Center & SPK UKT",
  },
  {
    position: "CDM",
    name: "Metode SAW (SPK)",
    number: 6,
    category: "MID",
    roleDesc: "Algoritma Normalisasi & Perankingan Keputusan",
    experienceLevel: "Teruji 32 Kasus Uji",
    projectUsage: "Proyek Akhir D4 RPL POLINDRA",
  },

  // Defense (Databases & Verification)
  {
    position: "LB",
    name: "Supabase / Cloud",
    number: 3,
    category: "DEF",
    roleDesc: "Cloud Database & Auth Services",
    experienceLevel: "Mahir (Implementasi Cloud)",
    projectUsage: "SPK Penentuan UKT Mahasiswa",
  },
  {
    position: "CB",
    name: "PostgreSQL",
    number: 4,
    category: "DEF",
    roleDesc: "Relasi Data Kompleks & DBeaver Tooling",
    experienceLevel: "Mahir (Magang Industri)",
    projectUsage: "Bandung Techno Park & Supabase",
  },
  {
    position: "CB",
    name: "MySQL",
    number: 5,
    category: "DEF",
    roleDesc: "Relasi Basis Data ACID & Transaction Wrapper",
    experienceLevel: "Mahir (3 Proyek)",
    projectUsage: "Sistem Pembayaran SPP Sekolah Alam",
  },
  {
    position: "RB",
    name: "Testing & Validasi",
    number: 2,
    category: "DEF",
    roleDesc: "Pengujian Alur End-to-End & Sanitasi Form",
    experienceLevel: "Mahir (Quality Assurance)",
    projectUsage: "Payment Gateway & Modul SPK",
  },

  // Goalkeeper (Security & Auth)
  {
    position: "GK",
    name: "Security & Auth",
    number: 1,
    category: "GK",
    roleDesc: "Role-Based Access Control, Hash & Token",
    experienceLevel: "Mahir (Standar Keamanan)",
    projectUsage: "Multi-Role Admin, User, & Verifikator",
  },
];

const BENCH_PLAYERS: PlayerSkill[] = [
  {
    position: "SUB",
    name: "Flutter & Dart",
    number: 17,
    category: "SUB",
    roleDesc: "Mobile Multi-Platform Android & iOS",
    experienceLevel: "Menengah (Aktif Riset)",
    projectUsage: "Pengembangan Aplikasi Mobile",
  },
  {
    position: "SUB",
    name: "Git & GitHub",
    number: 14,
    category: "SUB",
    roleDesc: "Version Control, Branching & Kolaborasi Tim",
    experienceLevel: "Mahir (Terbiasa di Tim)",
    projectUsage: "Seluruh Repository Proyek",
  },
  {
    position: "SUB",
    name: "Figma UI/UX",
    number: 12,
    category: "SUB",
    roleDesc: "Slicing Desain ke Kode Web Pixel-Perfect",
    experienceLevel: "Menengah",
    projectUsage: "Wireframe & Prototyping",
  },
  {
    position: "SUB",
    name: "Wokwi & IoT",
    number: 19,
    category: "SUB",
    roleDesc: "Simulasi Perangkat Keras & Embedded System",
    experienceLevel: "Menengah",
    projectUsage: "Eksperimen Hardware & Sensor",
  },
  {
    position: "SUB",
    name: "Python",
    number: 20,
    category: "SUB",
    roleDesc: "Scripting, Automasi & Logika Data Dasar",
    experienceLevel: "Dasar",
    projectUsage: "Automasi Tugas & Scripting",
  },
];

export function TacticalFormation() {
  const [activePlayer, setActivePlayer] = useState<PlayerSkill>(FORMATION_PLAYERS[3]!); // Default: Laravel #10

  return (
    <div className="rounded-3xl border border-ember/30 bg-gradient-to-b from-ink-soft/90 via-ink/90 to-ink p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-paper/10">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ember font-bold mb-1">
            <Shield className="size-4" />
            <span>Formasi Taktis 4-3-3: Fullstack Stack Lineup</span>
          </div>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-paper">
            Distribusi Keahlian &amp; Penempatan Posisi
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-mono text-xs px-3 py-1.5 rounded-lg bg-ember/20 text-ember border border-ember/30 font-semibold">
            Formasi: 4-3-3 Fullstack
          </span>
          <span className="font-mono text-xs px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold">
            Status: Siap Produksi
          </span>
        </div>
      </div>

      {/* Main Pitch & Detail Grid */}
      <div className="grid lg:grid-cols-12 gap-8 pt-8 items-center">
        {/* Tactical Pitch Visual (7 Cols) */}
        <div className="lg:col-span-7 relative rounded-2xl border border-white/10 bg-[#0c141f] p-4 sm:p-6 shadow-2xl overflow-hidden aspect-[4/3] flex flex-col justify-between">
          {/* Pitch Lines */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Center Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2" />
            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 size-28 sm:size-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
            {/* Center Dot */}
            <div className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/60" />
            {/* Top Penalty Box */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 sm:w-60 h-16 sm:h-20 border-b border-x border-white/10" />
            {/* Bottom Penalty Box */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 sm:w-60 h-16 sm:h-20 border-t border-x border-white/10" />
          </div>

          {/* Row 1: Attackers (FWD) */}
          <div className="relative z-10 flex justify-around items-center pt-2">
            {FORMATION_PLAYERS.filter((p) => p.category === "FWD").map((player) => (
              <button
                key={player.name}
                type="button"
                onClick={() => setActivePlayer(player)}
                className={`group flex flex-col items-center transition-all ${
                  activePlayer.name === player.name ? "scale-110" : "hover:scale-105 opacity-85 hover:opacity-100"
                }`}
              >
                <div
                  className={`size-10 sm:size-12 rounded-full flex items-center justify-center font-mono font-extrabold text-xs sm:text-sm border-2 transition-all shadow-lg ${
                    activePlayer.name === player.name
                      ? "bg-gold text-ink border-white shadow-gold/40 scale-110"
                      : "bg-ink-soft text-paper border-gold/60 group-hover:border-gold"
                  }`}
                >
                  #{player.number}
                </div>
                <span className="font-mono text-[10px] sm:text-xs font-bold text-paper mt-1 px-1.5 py-0.5 rounded bg-ink/80 border border-paper/10">
                  {player.name}
                </span>
                <span className="text-[9px] font-mono text-gold">{player.position}</span>
              </button>
            ))}
          </div>

          {/* Row 2: Midfielders (MID) */}
          <div className="relative z-10 flex justify-around items-center py-2">
            {FORMATION_PLAYERS.filter((p) => p.category === "MID").map((player) => (
              <button
                key={player.name}
                type="button"
                onClick={() => setActivePlayer(player)}
                className={`group flex flex-col items-center transition-all ${
                  activePlayer.name === player.name ? "scale-110" : "hover:scale-105 opacity-85 hover:opacity-100"
                }`}
              >
                <div
                  className={`size-10 sm:size-12 rounded-full flex items-center justify-center font-mono font-extrabold text-xs sm:text-sm border-2 transition-all shadow-lg ${
                    activePlayer.name === player.name
                      ? "bg-ember text-ink border-white shadow-ember/40 scale-110"
                      : "bg-ink-soft text-ember border-ember/60 group-hover:border-ember"
                  }`}
                >
                  #{player.number}
                </div>
                <span className="font-mono text-[10px] sm:text-xs font-bold text-paper mt-1 px-1.5 py-0.5 rounded bg-ink/80 border border-paper/10">
                  {player.name}
                </span>
                <span className="text-[9px] font-mono text-ember font-bold">{player.position}</span>
              </button>
            ))}
          </div>

          {/* Row 3: Defenders (DEF) */}
          <div className="relative z-10 flex justify-around items-center py-2">
            {FORMATION_PLAYERS.filter((p) => p.category === "DEF").map((player) => (
              <button
                key={player.name}
                type="button"
                onClick={() => setActivePlayer(player)}
                className={`group flex flex-col items-center transition-all ${
                  activePlayer.name === player.name ? "scale-110" : "hover:scale-105 opacity-85 hover:opacity-100"
                }`}
              >
                <div
                  className={`size-9 sm:size-10 rounded-full flex items-center justify-center font-mono font-extrabold text-xs border-2 transition-all shadow-lg ${
                    activePlayer.name === player.name
                      ? "bg-cyan-400 text-ink border-white shadow-cyan-400/40 scale-110"
                      : "bg-ink-soft text-cyan-300 border-cyan-400/50 group-hover:border-cyan-300"
                  }`}
                >
                  #{player.number}
                </div>
                <span className="font-mono text-[9px] sm:text-[11px] font-semibold text-paper mt-1 px-1.5 py-0.5 rounded bg-ink/80 border border-paper/10">
                  {player.name}
                </span>
                <span className="text-[9px] font-mono text-cyan-400">{player.position}</span>
              </button>
            ))}
          </div>

          {/* Row 4: Goalkeeper (GK) */}
          <div className="relative z-10 flex justify-center items-center pb-2">
            {FORMATION_PLAYERS.filter((p) => p.category === "GK").map((player) => (
              <button
                key={player.name}
                type="button"
                onClick={() => setActivePlayer(player)}
                className={`group flex flex-col items-center transition-all ${
                  activePlayer.name === player.name ? "scale-110" : "hover:scale-105 opacity-85 hover:opacity-100"
                }`}
              >
                <div
                  className={`size-9 sm:size-10 rounded-full flex items-center justify-center font-mono font-extrabold text-xs border-2 transition-all shadow-lg ${
                    activePlayer.name === player.name
                      ? "bg-rose-500 text-white border-white shadow-rose-500/40 scale-110"
                      : "bg-ink-soft text-rose-400 border-rose-500/60 group-hover:border-rose-400"
                  }`}
                >
                  #{player.number}
                </div>
                <span className="font-mono text-[9px] sm:text-[11px] font-semibold text-paper mt-1 px-1.5 py-0.5 rounded bg-ink/80 border border-paper/10">
                  {player.name}
                </span>
                <span className="text-[9px] font-mono text-rose-400 font-bold">{player.position}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tactical Scouting Card for Selected Skill (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl border border-ember/40 bg-ink-soft/90 p-6 sm:p-7 backdrop-blur-xl relative overflow-hidden shadow-xl">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-ember font-bold flex items-center gap-1.5">
                <Sparkles className="size-3.5" />
                <span>Profil Spesifikasi Teknologi</span>
              </span>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-ember/20 text-ember font-extrabold">
                NO. {activePlayer.number}
              </span>
            </div>

            <div className="mt-4">
              <h4 className="font-display font-bold text-3xl text-paper">
                {activePlayer.name}
              </h4>
              <p className="font-mono text-xs text-gold mt-1">
                Posisi: {activePlayer.position} &bull; {activePlayer.roleDesc}
              </p>
            </div>

            {/* Performance Stat Cards */}
            <div className="mt-6 space-y-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-black/40 border border-paper/10 flex items-center justify-between">
                <span className="text-muted-ink">Tingkat Kemahiran:</span>
                <span className="text-emerald-400 font-bold">{activePlayer.experienceLevel}</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-paper/10 flex items-center justify-between">
                <span className="text-muted-ink">Implementasi Nyata:</span>
                <span className="text-paper font-semibold truncate max-w-[200px]">{activePlayer.projectUsage}</span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-paper/10 flex items-center gap-2 text-xs font-mono text-muted-ink">
              <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
              <span>Teruji pada 5 proyek produksi &amp; magang industri</span>
            </div>
          </div>

          {/* Bench / Substitutes Lineup */}
          <div className="rounded-2xl border border-paper/10 bg-ink-soft/40 p-5">
            <div className="font-mono text-xs uppercase tracking-wider text-muted-ink mb-3 flex items-center gap-1.5">
              <Layers className="size-3.5 text-ember" />
              <span>Tooling Tambahan &amp; Kemampuan Pendukung:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {BENCH_PLAYERS.map((sub) => (
                <button
                  key={sub.name}
                  type="button"
                  onClick={() => setActivePlayer(sub)}
                  className={`px-3 py-1.5 rounded-lg font-mono text-xs border transition-all flex items-center gap-1.5 ${
                    activePlayer.name === sub.name
                      ? "bg-ember/20 text-ember border-ember font-bold"
                      : "bg-paper/5 text-paper/80 border-paper/10 hover:border-paper/30"
                  }`}
                >
                  <span className="text-ember font-bold">#{sub.number}</span>
                  <span>{sub.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

