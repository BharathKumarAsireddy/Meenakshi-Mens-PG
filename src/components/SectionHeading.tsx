type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={`flex flex-col ${isCenter ? "items-center text-center" : "items-start text-left"}`}>
      {eyebrow && (
        <span
          className={`mb-3 text-xs md:text-sm font-semibold uppercase tracking-[0.25em] ${
            light ? "text-gold-300" : "text-gold-600"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight ${
          light ? "text-cream" : "text-maroon-900"
        }`}
      >
        {title}
      </h2>
      <div className={`gold-divider my-5 ${isCenter ? "" : "ml-0"}`} />
      {subtitle && (
        <p
          className={`max-w-2xl text-base md:text-lg leading-relaxed ${
            light ? "text-cream-soft/85" : "text-ink-soft"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
