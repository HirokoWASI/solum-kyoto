type Props = { children: React.ReactNode; tone?: "default" | "earth" | "chigusa" | "light"; className?: string };

// セクション上部に置く小さな英文ラベル。罫線つき。
export function Eyebrow({ children, tone = "default", className = "" }: Props) {
  const lineColor =
    tone === "earth" ? "bg-earth" : tone === "chigusa" ? "bg-chigusa" : tone === "light" ? "bg-cream/60" : "bg-charcoal/40";
  const textColor = tone === "light" ? "text-cream/85" : "text-mid";
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className={`h-px w-8 ${lineColor}`} />
      <span className={`eyebrow !text-[10px] ${textColor}`}>{children}</span>
    </div>
  );
}
