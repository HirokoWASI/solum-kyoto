import { Eyebrow } from "./Eyebrow";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  align?: "left" | "center";
  tone?: "default" | "earth" | "chigusa" | "light";
};

// 各セクション共通の見出しブロック。
export function SectionHeading({ eyebrow, title, body, align = "left", tone = "default" }: Props) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";
  const titleColor = tone === "light" ? "text-cream" : "text-charcoal";
  const bodyColor = tone === "light" ? "text-cream/70" : "text-mid";
  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignCls} ${align === "center" ? "mx-auto" : ""}`}>
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2 className={`h-display text-3xl md:text-4xl lg:text-5xl ${titleColor}`}>{title}</h2>
      {body ? <p className={`text-[14px] md:text-[15px] leading-relaxed ${bodyColor}`}>{body}</p> : null}
    </div>
  );
}
