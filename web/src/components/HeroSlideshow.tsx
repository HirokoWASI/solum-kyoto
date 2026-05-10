"use client";

import { useEffect, useState } from "react";

// ヒーロー画像をフェードしながらローテーションするコンポーネント。
// 画像が無い（404）場合は onError で非表示にし、背景グラデーション + label のみ残す。
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type Slide = {
  src: string; // public/ からの相対パス（先頭スラッシュあり）。例: "/images/hero/home-01.jpg"
  alt: string;
};

type Props = {
  slides: Slide[];
  /** 1枚あたりの表示秒数（既定 6 秒）。 */
  intervalMs?: number;
  /** スライド数のドットを描画するか。 */
  showDots?: boolean;
  /** 画像が無いときの背景に使うフォールバックグラデのクラス。 */
  fallbackClass?: string;
  /** プレイスホルダ ラベル（画像未着の時に表示）。 */
  fallbackLabel?: string;
  /** 子要素（テキスト等）。スライドの上に被さる。 */
  children?: React.ReactNode;
  /** 上に重ねるオーバーレイ（暗いグラデなど）の className。 */
  overlayClass?: string;
};

export function HeroSlideshow({
  slides,
  intervalMs = 6000,
  showDots = true,
  fallbackClass = "ph ph--night",
  fallbackLabel,
  children,
  overlayClass = "absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/55",
}: Props) {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(() => slides.map(() => true));

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [slides.length, intervalMs]);

  const onImgError = (i: number) => {
    setLoaded((prev) => {
      const next = [...prev];
      next[i] = false;
      return next;
    });
  };

  const allFailed = loaded.every((v) => !v);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* フォールバック（全画像エラー時 or 表示中スライドが未到着のとき）。 */}
      <div className={`${fallbackClass} absolute inset-0 flex items-center justify-center`}>
        {fallbackLabel && allFailed ? <span className="ph__label">{fallbackLabel}</span> : null}
      </div>

      {/* スライド本体 */}
      {slides.map((s, i) => (
        <img
          key={s.src}
          src={`${BASE}${s.src}`}
          alt={s.alt}
          onError={() => onImgError(i)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1600ms] ease-in-out ${
            i === active && loaded[i] ? "opacity-100" : "opacity-0"
          }`}
          // ローテーション中のケンバーンズ（じわっとズーム）
          style={{
            transform: i === active ? "scale(1.04)" : "scale(1.0)",
            transition: "opacity 1.6s ease-in-out, transform 8s ease-in-out",
          }}
        />
      ))}

      {/* オーバーレイ */}
      <div className={overlayClass} />

      {/* ドット */}
      {showDots && slides.length > 1 && (
        <div className="absolute z-10 left-1/2 -translate-x-1/2 bottom-6 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`スライド ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-[3px] rounded transition-all ${i === active ? "w-8 bg-cream" : "w-2 bg-cream/40 hover:bg-cream/70"}`}
            />
          ))}
        </div>
      )}

      {/* 子要素（テキスト等）は呼び出し側で position する想定 */}
      {children}
    </div>
  );
}
