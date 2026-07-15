import type { LucideIcon } from "lucide-react";
import { ImageIcon } from "lucide-react";

type ImagePlaceholderProps = {
  label?: string;
  icon?: LucideIcon;
  gradient?: string;
  className?: string;
};

// Decorative stand-in used until real photography is supplied.
// Swap for next/image once photos are available in /public.
export default function ImagePlaceholder({
  label,
  icon: Icon = ImageIcon,
  gradient = "from-maroon-700 via-maroon-600 to-gold-600",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-linear-to-br ${gradient} ${className}`}
    >
      <div className="absolute inset-0 bg-ornate opacity-25" />
      <div className="absolute inset-3 rounded-lg border border-white/25" />
      <div className="relative flex flex-col items-center gap-3 px-4 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
          <Icon className="h-6 w-6 text-cream" strokeWidth={1.75} />
        </span>
        {label && (
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/90">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
