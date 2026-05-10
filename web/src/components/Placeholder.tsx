import type { CSSProperties, ReactNode } from "react";

// 画像差し替え前のプレイスホルダ。CSS グラデーション + 任意の SVG アイコンで「絵の入る場所」を示す。
// 後で nano banana / GPT image2 で生成した画像と差し替える。
type Variant = "default" | "earth" | "chigusa" | "charcoal" | "night";

type Props = {
  label: string;
  ratio?: "16/9" | "4/5" | "3/4" | "4/3" | "1/1" | "21/9" | "3/2" | "5/4";
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
  rounded?: boolean;
  fill?: boolean;
};

const variantClass: Record<Variant, string> = {
  default: "ph",
  earth: "ph ph--earth",
  chigusa: "ph ph--chigusa",
  charcoal: "ph ph--charcoal",
  night: "ph ph--night",
};

export function Placeholder({
  label,
  ratio = "16/9",
  variant = "default",
  icon,
  className = "",
  rounded = false,
  fill = false,
}: Props) {
  const style: CSSProperties = fill
    ? { position: "absolute", inset: 0 }
    : { aspectRatio: ratio.replace("/", " / ") };

  return (
    <div
      className={`${variantClass[variant]} ${rounded ? "rounded-md" : ""} ${className}`}
      style={style}
      role="img"
      aria-label={label}
    >
      {icon ? <span className="ph__icon">{icon}</span> : null}
      <span className="ph__label">{label}</span>
    </div>
  );
}

// よく使うアイコン (SVG)。差し替え前の画像の意味を伝えるためのもの。
const baseSvg = "w-1/3 h-1/3 max-w-[120px] max-h-[120px]";

export const Icon = {
  Townhouse: () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" className={baseSvg}>
      <path d="M8 30 L32 14 L56 30" />
      <path d="M12 30 V52 H52 V30" />
      <path d="M24 52 V40 H40 V52" />
      <path d="M16 36 H22 M16 42 H22 M42 36 H48 M42 42 H48" />
    </svg>
  ),
  Room: () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" className={baseSvg}>
      <rect x="10" y="20" width="44" height="28" />
      <path d="M10 32 H54" />
      <path d="M18 40 H30" />
      <path d="M34 28 H46" />
    </svg>
  ),
  Tea: () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" className={baseSvg}>
      <path d="M16 28 H44 V42 a8 8 0 0 1 -8 8 H24 a8 8 0 0 1 -8 -8 Z" />
      <path d="M44 32 h6 a4 4 0 0 1 0 8 h-6" />
      <path d="M22 22 q2 -6 8 -6 q6 0 8 -6" />
    </svg>
  ),
  Garden: () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" className={baseSvg}>
      <circle cx="20" cy="44" r="6" />
      <circle cx="44" cy="44" r="10" />
      <circle cx="32" cy="50" r="3" />
      <path d="M8 56 H56" />
    </svg>
  ),
  Map: () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" className={baseSvg}>
      <path d="M8 16 L24 12 L40 16 L56 12 V48 L40 52 L24 48 L8 52 Z" />
      <path d="M24 12 V48 M40 16 V52" />
    </svg>
  ),
  Camera: () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" className={baseSvg}>
      <rect x="8" y="18" width="48" height="32" />
      <circle cx="32" cy="34" r="9" />
      <path d="M22 18 L26 12 H38 L42 18" />
    </svg>
  ),
  Lantern: () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" className={baseSvg}>
      <path d="M22 20 H42 V44 H22 Z" />
      <path d="M22 26 H42 M22 32 H42 M22 38 H42" />
      <path d="M32 12 V20 M32 44 V52" />
    </svg>
  ),
  Torii: () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" className={baseSvg}>
      <path d="M8 18 H56" />
      <path d="M10 24 H54" />
      <path d="M18 24 V52 M46 24 V52" />
      <path d="M14 52 H50" />
    </svg>
  ),
  Food: () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" className={baseSvg}>
      <circle cx="32" cy="34" r="18" />
      <circle cx="32" cy="34" r="10" />
      <path d="M20 18 V8 M28 18 V8 M36 18 V8" />
    </svg>
  ),
  News: () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" className={baseSvg}>
      <rect x="10" y="14" width="44" height="36" />
      <path d="M16 22 H40 M16 30 H40 M16 38 H32" />
    </svg>
  ),
};
