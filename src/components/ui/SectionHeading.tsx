interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div className={`mb-10 md:mb-12 ${isCentered ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}`}>
      {badge && (
        <span className="text-xs font-mono text-ember font-medium mb-2 block">
          {badge}
        </span>
      )}

      <h2 className="font-display font-bold text-3xl sm:text-4xl text-paper tracking-tight leading-[1.15]">
        {title}
      </h2>

      {description && (
        <p className="mt-3 text-base text-muted-ink leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
