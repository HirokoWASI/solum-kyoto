"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
export { Icon } from "./PlaceholderIcons";

// 画像差し替え前のプレイスホルダ。src が指定されていれば実画像を表示し、
// 画像が無ければ CSS グラデーション + SVG アイコン + ラベルにフォールバックする。
type Variant = "default" | "earth" | "chigusa" | "charcoal" | "night";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type Props = {
  label: string;
  ratio?: "16/9" | "4/5" | "3/4" | "4/3" | "1/1" | "21/9" | "3/2" | "5/4";
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
  rounded?: boolean;
  fill?: boolean;
  /** 実画像 src。public からの相対パス（先頭 / 付き）。例: "/images/rooms/moto-suite.jpg" */
  src?: string;
  /** object-position を制御したい時のクラス（例: "object-top"） */
  imgClass?: string;
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
  src,
  imgClass = "",
}: Props) {
  // 実画像が読み込めなかった時のみフォールバックを表示する
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = !!src && !imgFailed;

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
      {showImage ? (
        <img
          src={`${BASE}${src}`}
          alt={label}
          onError={() => setImgFailed(true)}
          className={`absolute inset-0 w-full h-full object-cover ${imgClass}`}
        />
      ) : (
        <>
          {icon ? <span className="ph__icon">{icon}</span> : null}
          <span className="ph__label">{label}</span>
        </>
      )}
    </div>
  );
}
