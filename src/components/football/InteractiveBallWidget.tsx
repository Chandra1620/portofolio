import { useState } from "react";
import { toast } from "sonner";
import { Trophy } from "lucide-react";
import { PROJECTS } from "@/data/portfolio-data";

export function InteractiveBallWidget() {
  const [goals, setGoals] = useState(0);
  const [isShooting, setIsShooting] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const handleShoot = () => {
    if (isShooting) return;
    setIsShooting(true);
    const newScore = goals + 1;
    setGoals(newScore);

    // Trigger celebration toast with dynamic project count
    toast.success(`⚽ Gol ke-${newScore}!`, {
      description:
        newScore === 1
          ? `Terima kasih sudah mampir! Silakan jelajahi ${PROJECTS.length} proyek dan studi kasus saya.`
          : "Tendangan tepat sasaran. Chandra siap berkontribusi pada proyek web & mobile Anda.",
      duration: 3500,
    });

    setShowCelebration(true);

    setTimeout(() => {
      setIsShooting(false);
    }, 700);

    setTimeout(() => {
      setShowCelebration(false);
    }, 2400);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Celebration Banner */}
      {showCelebration && (
        <div className="animate-in fade-in zoom-in-95 slide-in-from-bottom-3 duration-300 rounded-xl border border-ink-raised bg-ink-soft/95 backdrop-blur-xl p-3 shadow-xl flex items-center gap-2.5">
          <span className="p-1.5 rounded-lg bg-ink text-ember border border-ink-raised">
            <Trophy className="size-4" />
          </span>
          <div className="text-xs">
            <div className="font-display font-bold text-ember uppercase tracking-wider">
              GOL #{goals}
            </div>
            <div className="font-mono text-[11px] text-paper">
              Interaksi Sepak Bola Aktif
            </div>
          </div>
        </div>
      )}

      {/* Interactive Ball Button */}
      <button
        type="button"
        onClick={handleShoot}
        title="Klik untuk menendang bola!"
        className={`group relative size-13 sm:size-14 rounded-full border border-ink-raised bg-ink-soft p-2.5 shadow-lg transition-all duration-300 hover:scale-105 hover:border-ember active:scale-95 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember ${
          isShooting ? "animate-bounce" : ""
        }`}
        aria-label={`Tendang bola sepak interaktif, saat ini ${goals} gol`}
      >
        {/* Soccer Ball Graphic (SVG) */}
        <svg
          viewBox="0 0 100 100"
          className={`size-full text-paper group-hover:text-ember transition-colors ${
            isShooting ? "ball-spin" : ""
          }`}
          fill="currentColor"
        >
          {/* Soccer Ball Outer Circle */}
          <circle cx="50" cy="50" r="46" fill="#16202e" stroke="currentColor" strokeWidth="4" />
          
          {/* Central Pentagon */}
          <polygon
            points="50,30 65,41 59,59 41,59 35,41"
            fill="#f59e0b"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          
          {/* Surrounding Patches */}
          <line x1="50" y1="30" x2="50" y2="10" stroke="currentColor" strokeWidth="3" />
          <line x1="65" y1="41" x2="82" y2="30" stroke="currentColor" strokeWidth="3" />
          <line x1="59" y1="59" x2="72" y2="78" stroke="currentColor" strokeWidth="3" />
          <line x1="41" y1="59" x2="28" y2="78" stroke="currentColor" strokeWidth="3" />
          <line x1="35" y1="41" x2="18" y2="30" stroke="currentColor" strokeWidth="3" />

          <polygon points="50,10 65,14 65,4" fill="currentColor" />
          <polygon points="82,30 90,44 94,36" fill="currentColor" />
          <polygon points="72,78 84,70 88,80" fill="currentColor" />
          <polygon points="28,78 16,70 12,80" fill="currentColor" />
          <polygon points="18,30 10,44 6,36" fill="currentColor" />
        </svg>

        {/* Floating Goal Counter Badge */}
        {goals > 0 && (
          <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-ember font-mono text-[10px] font-bold text-ink shadow">
            {goals}
          </span>
        )}
      </button>
    </div>
  );
}

