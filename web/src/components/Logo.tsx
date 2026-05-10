// ブランドロゴ。差し替え可能な /public/logo.svg / logo-mark.svg を参照する。
// basePath を考慮し、env から組み立てる。
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type Variant = "mark" | "full";

export function Logo({
  variant = "mark",
  className = "",
  alt = "solmu kyoto",
}: {
  variant?: Variant;
  className?: string;
  alt?: string;
}) {
  const src = variant === "mark" ? `${BASE}/logo-mark.svg` : `${BASE}/logo.svg`;
  // SVG は currentColor を採用しているため、parent 要素の color を継承する。
  return <img src={src} alt={alt} className={className} aria-label={alt} />;
}
