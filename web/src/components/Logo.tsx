// ブランドロゴ。/public/ 配下の PNG を参照（透過済み）。
// basePath を考慮し、env から組み立てる。
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type Variant = "mark" | "full";

export function Logo({
  variant = "mark",
  className = "",
  alt = "solmu kyoto",
  invert = false,
}: {
  variant?: Variant;
  className?: string;
  alt?: string;
  /** 暗い背景上で白く反転表示するか（PNG なので filter で反転）。 */
  invert?: boolean;
}) {
  const src = variant === "mark" ? `${BASE}/logo-mark.png` : `${BASE}/logo.png`;
  const style = invert ? { filter: "brightness(0) invert(1)" } : undefined;
  return <img src={src} alt={alt} className={className} style={style} aria-label={alt} />;
}
