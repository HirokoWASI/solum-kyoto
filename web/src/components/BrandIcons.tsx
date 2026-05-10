// ブランドアイコン集（SVG / 線画スタイル）。
// 提供いただいたアイコン集を SVG で再描画。
// - 背景は透明（SVG なので元から）
// - 線色は currentColor → 親要素の color で自在に変更可
// - 拡大しても劣化なし
// 使い方: <CalendarCheck className="w-8 h-8 text-charcoal" />

import type { SVGProps } from "react";

const stroke = "currentColor";
const base = (extra = "") => `inline-block ${extra}`.trim();

type Props = SVGProps<SVGSVGElement> & { className?: string };

const svgProps = {
  fill: "none",
  stroke,
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 64 64",
};

// 01 カレンダー + チェック（予約・空き状況）
export function CalendarCheck({ className = "", ...rest }: Props) {
  return (
    <svg {...svgProps} className={base(className)} {...rest}>
      <rect x="10" y="14" width="36" height="34" rx="2" />
      <path d="M10 22 H46" />
      <path d="M18 10 V18 M38 10 V18" />
      <circle cx="16" cy="30" r="1.2" />
      <circle cx="22" cy="30" r="1.2" />
      <circle cx="28" cy="30" r="1.2" />
      <circle cx="34" cy="30" r="1.2" />
      <circle cx="16" cy="38" r="1.2" />
      <circle cx="22" cy="38" r="1.2" />
      <circle cx="28" cy="38" r="1.2" />
      <circle cx="51" cy="44" r="7" />
      <path d="M48 44 L50.5 46.5 L54 42.5" />
    </svg>
  );
}

// 02 ベッド + ペンダントランプ（客室）
export function BedLamp({ className = "", ...rest }: Props) {
  return (
    <svg {...svgProps} className={base(className)} {...rest}>
      <path d="M40 12 V18" />
      <path d="M36 18 H44 L42 26 H38 Z" />
      <path d="M10 44 H54" />
      <path d="M14 44 V34 a4 4 0 0 1 4 -4 H50 a4 4 0 0 1 4 4 V44" />
      <path d="M14 34 H54" />
      <path d="M20 30 H32 V26 H20 Z" />
      <path d="M36 30 H48 V26 H36 Z" />
      <path d="M10 44 V52 M54 44 V52" />
    </svg>
  );
}

// 03 朝食（クロワッサン + カップ + ボウル）
export function Breakfast({ className = "", ...rest }: Props) {
  return (
    <svg {...svgProps} className={base(className)} {...rest}>
      {/* お皿 */}
      <ellipse cx="32" cy="48" rx="22" ry="3" />
      {/* クロワッサン */}
      <path d="M12 40 q4 -8 14 -6 q4 1 4 5 q-2 -2 -6 -1 q-6 1 -12 2 Z" />
      {/* カップ */}
      <path d="M36 32 H46 V42 q0 4 -5 4 q-5 0 -5 -4 Z" />
      <path d="M46 34 q4 0 4 4 q0 4 -4 4" />
      <path d="M38 28 q1 -2 0 -4 M42 28 q1 -2 0 -4" />
      {/* 葉のあしらい */}
      <path d="M14 32 q4 -6 10 -4" />
      <path d="M18 28 q1 -3 4 -3" />
    </svg>
  );
}

// 04 自転車（自転車レンタル）
export function Bicycle({ className = "", ...rest }: Props) {
  return (
    <svg {...svgProps} className={base(className)} {...rest}>
      <circle cx="16" cy="42" r="8" />
      <circle cx="48" cy="42" r="8" />
      <path d="M16 42 L28 26 L40 26" />
      <path d="M28 26 L36 42" />
      <path d="M40 26 L48 42" />
      <path d="M28 26 V22 H32" />
      <path d="M40 26 V22" />
      {/* かご */}
      <path d="M42 22 H50 V28 H42 Z" />
    </svg>
  );
}

// 05 陶芸 / 工芸品（壺 + 茶碗 + 葉）
export function Pottery({ className = "", ...rest }: Props) {
  return (
    <svg {...svgProps} className={base(className)} {...rest}>
      {/* トレイ */}
      <ellipse cx="32" cy="48" rx="22" ry="3" />
      {/* 壺 */}
      <path d="M22 24 q-4 6 -2 12 q1 6 6 8 q5 -2 6 -8 q2 -6 -2 -12 Z" />
      <path d="M22 24 q4 -2 8 0" />
      <path d="M24 20 q2 -2 4 0" />
      {/* 茶碗 */}
      <path d="M36 38 q0 6 6 6 q6 0 6 -6" />
      <path d="M34 38 H50" />
      {/* 葉 */}
      <path d="M48 32 q4 -8 6 -10" />
      <path d="M50 28 q2 -1 4 -1" />
    </svg>
  );
}

// 06 五重塔（寺院・エリア・観光）
export function Pagoda({ className = "", ...rest }: Props) {
  return (
    <svg {...svgProps} className={base(className)} {...rest}>
      <path d="M28 8 V14" />
      <path d="M22 14 H34 L32 20 H24 Z" />
      <path d="M20 24 H36 L34 30 H22 Z" />
      <path d="M18 34 H38 L36 40 H20 Z" />
      <path d="M16 44 H40" />
      <path d="M22 44 V52 H34 V44" />
      {/* 松の木 */}
      <path d="M48 36 q-4 -4 -4 -10 q0 -6 4 -10 q4 4 4 10 q0 6 -4 10" />
      <path d="M48 36 V52" />
    </svg>
  );
}

// 07 ラウンジ（チェア + フロアランプ + 観葉植物）
export function Lounge({ className = "", ...rest }: Props) {
  return (
    <svg {...svgProps} className={base(className)} {...rest}>
      {/* チェア */}
      <path d="M14 28 q0 -4 4 -4 H26 q4 0 4 4 V40 H14 Z" />
      <path d="M14 40 V48 M30 40 V48" />
      <path d="M18 40 H26" />
      {/* フロアランプ */}
      <path d="M38 12 H48 L46 18 H40 Z" />
      <path d="M43 18 V44" />
      <path d="M40 48 H46" />
      {/* 観葉植物 */}
      <path d="M52 36 q-2 -8 0 -16 q2 8 0 16" />
      <path d="M48 38 H56 V46 H48 Z" />
    </svg>
  );
}

// 08 マップピン（位置・アクセス）
export function MapPin({ className = "", ...rest }: Props) {
  return (
    <svg {...svgProps} className={base(className)} {...rest}>
      <path d="M32 10 a12 12 0 0 1 12 12 c0 9 -12 24 -12 24 s-12 -15 -12 -24 a12 12 0 0 1 12 -12 Z" />
      <circle cx="32" cy="22" r="4" />
      <ellipse cx="32" cy="52" rx="8" ry="1.4" />
    </svg>
  );
}

// 09 FAQ（吹き出し + ?）
export function FaqBubbles({ className = "", ...rest }: Props) {
  return (
    <svg {...svgProps} className={base(className)} {...rest}>
      <path d="M10 16 H42 a4 4 0 0 1 4 4 V34 a4 4 0 0 1 -4 4 H22 L14 46 V38 a4 4 0 0 1 -4 -4 V20 a4 4 0 0 1 4 -4 Z" />
      <path d="M22 24 q4 -4 8 0 q2 2 -2 4 V30" />
      <circle cx="28" cy="34" r="0.8" />
      {/* 小さな吹き出し */}
      <path d="M44 32 H54 a4 4 0 0 1 4 4 V44 a4 4 0 0 1 -4 4 H50 L46 52 V48 a4 4 0 0 1 -4 -4 V36 a4 4 0 0 1 2 -4" />
      <circle cx="48" cy="40" r="0.8" />
      <circle cx="51" cy="40" r="0.8" />
      <circle cx="54" cy="40" r="0.8" />
    </svg>
  );
}

// 10 電車（アクセス）
export function Train({ className = "", ...rest }: Props) {
  return (
    <svg {...svgProps} className={base(className)} {...rest}>
      <rect x="14" y="10" width="36" height="36" rx="6" />
      <rect x="18" y="16" width="12" height="8" />
      <rect x="34" y="16" width="12" height="8" />
      <path d="M14 32 H50" />
      <circle cx="22" cy="38" r="2" />
      <circle cx="42" cy="38" r="2" />
      <path d="M10 54 H54" />
      <path d="M16 46 L12 54" />
      <path d="M48 46 L52 54" />
    </svg>
  );
}

// まとめてインポートしたい場合用
export const BrandIcon = {
  CalendarCheck,
  BedLamp,
  Breakfast,
  Bicycle,
  Pottery,
  Pagoda,
  Lounge,
  MapPin,
  FaqBubbles,
  Train,
};
