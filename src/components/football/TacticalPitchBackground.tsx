import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  role: "FWD" | "MID" | "DEF";
}

export function TacticalPitchBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Mouse tracking for subtle tactical reaction
    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Generate tactical player nodes
    const nodeCount = Math.min(20, Math.max(12, Math.floor(width / 95)));
    const nodes: Node[] = [];
    const roles: ("FWD" | "MID" | "DEF")[] = ["FWD", "MID", "DEF"];

    for (let i = 0; i < nodeCount; i++) {
      const selectedRole = roles[i % 3] ?? "MID";
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 2,
        role: selectedRole,
      });
    }

    let pulseAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      pulseAngle += 0.02;
      const pulse = (Math.sin(pulseAngle) + 1) * 0.5;

      // ── Draw Tactical Pitch Watermark Lines ─────────────────────────────
      ctx.save();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.035)";
      ctx.lineWidth = 1.5;

      const centerX = width / 2;
      const centerY = height / 2;
      const centerRadius = Math.min(width, height) * 0.18;

      // Center circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, centerRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Center spot
      ctx.fillStyle = "rgba(245, 158, 11, 0.25)";
      ctx.beginPath();
      ctx.arc(centerX, centerY, 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Half-way line
      ctx.beginPath();
      ctx.moveTo(centerX, 0);
      ctx.lineTo(centerX, height);
      ctx.stroke();

      // Tactical Penalty Areas (Faint Outline)
      const penaltyWidth = Math.min(width * 0.22, 280);
      const penaltyHeight = Math.min(height * 0.45, 360);

      // Left Penalty Box
      ctx.strokeRect(0, centerY - penaltyHeight / 2, penaltyWidth, penaltyHeight);
      // Right Penalty Box
      ctx.strokeRect(width - penaltyWidth, centerY - penaltyHeight / 2, penaltyWidth, penaltyHeight);

      ctx.restore();

      // ── Update & Draw Tactical Passing Nodes ────────────────────────────
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (!node) continue;

        // Move node
        node.x += node.vx;
        node.y += node.vy;

        // Bounce on boundary
        if (node.x < 20 || node.x > width - 20) node.vx *= -1;
        if (node.y < 20 || node.y > height - 20) node.vy *= -1;

        // React to mouse proximity (pass avoidance)
        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          const force = (140 - dist) / 140;
          node.x += (dx / dist) * force * 1.8;
          node.y += (dy / dist) * force * 1.8;
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle =
          node.role === "MID"
            ? `rgba(245, 158, 11, ${0.4 + pulse * 0.2})`
            : node.role === "FWD"
            ? `rgba(16, 185, 129, ${0.35 + pulse * 0.2})`
            : `rgba(142, 158, 175, 0.25)`;
        ctx.fill();

        // Connect passing lines to nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          if (!other) continue;
          const distBetween = Math.hypot(node.x - other.x, node.y - other.y);

          if (distBetween < 160) {
            const alpha = (1 - distBetween / 160) * 0.08;
            ctx.save();
            ctx.setLineDash([4, 6]);
            ctx.strokeStyle = `rgba(142, 158, 175, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Stadium Pitch Grid & Dark Ambient Overlay */}
      <div className="absolute inset-0 bg-ink" />
      <div className="absolute inset-0 pitch-stripes opacity-40" />
      <div className="absolute inset-0 pitch-grid opacity-30" />
      
      {/* Tactical Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 size-full" />

      {/* Stadium Floodlight Ambient Vignettes */}
      <div className="absolute -top-40 -left-40 size-96 rounded-full bg-ember/10 blur-[120px] stadium-glow" />
      <div className="absolute top-1/3 -right-40 size-[450px] rounded-full bg-gold/5 blur-[140px] stadium-glow" style={{ animationDelay: "3s" }} />
      <div className="absolute -bottom-40 left-1/3 size-[500px] rounded-full bg-ember/8 blur-[160px] stadium-glow" style={{ animationDelay: "1.5s" }} />
    </div>
  );
}
