// Solum Kyoto のアクセスマップ。下京区の実際の街路構造をベースに、両ホテルの位置を描画する。
// - 縦：烏丸通（地下に烏丸線）
// - 横：四条通 / 仏光寺通 / 五条通
// - 駅：四条駅、五条駅
// - 元悪王子：高辻通×西洞院通の付近（下京区元悪王子町）
// - 仏光寺：仏光寺通×高倉通の付近
export function AccessMap() {
  return (
    <div className="relative bg-cream border border-light-line overflow-hidden">
      <svg
        viewBox="0 0 600 720"
        className="w-full h-auto block"
        role="img"
        aria-label="Solum Kyoto エリアマップ — 下京区 元悪王子・仏光寺"
      >
        {/* 背景の街区パターン */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="#F0EDE6" />
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D5CECC" strokeWidth="0.5" />
          </pattern>
          <pattern id="blocks" width="60" height="60" patternUnits="userSpaceOnUse">
            <rect width="60" height="60" fill="rgba(216, 208, 196, 0.25)" />
          </pattern>
          <filter id="pinShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#3A3530" floodOpacity="0.25" />
          </filter>
        </defs>

        <rect width="600" height="720" fill="url(#grid)" />

        {/* 街区（薄いブロック） */}
        {[
          [40, 120, 200, 120],
          [260, 120, 140, 120],
          [420, 120, 140, 120],
          [40, 280, 200, 120],
          [260, 280, 140, 120],
          [420, 280, 140, 120],
          [40, 440, 200, 120],
          [260, 440, 140, 120],
          [420, 440, 140, 120],
        ].map(([x, y, w, h], i) => (
          <rect key={i} x={x} y={y} width={w} height={h} fill="rgba(216, 208, 196, 0.45)" />
        ))}

        {/* 横通り（東西） */}
        {/* 四条通 */}
        <line x1="0" y1="100" x2="600" y2="100" stroke="#6E6560" strokeWidth="14" opacity="0.18" />
        <line x1="0" y1="100" x2="600" y2="100" stroke="#6E6560" strokeWidth="2" opacity="0.5" />
        <text x="14" y="92" className="fill-mid" fontSize="11" letterSpacing="0.08em" style={{ fontFamily: "'Shippori Mincho', serif" }}>
          四条通 SHIJO-DORI
        </text>

        {/* 仏光寺通 */}
        <line x1="0" y1="260" x2="600" y2="260" stroke="#6E6560" strokeWidth="10" opacity="0.16" />
        <line x1="0" y1="260" x2="600" y2="260" stroke="#6E6560" strokeWidth="1.5" opacity="0.5" strokeDasharray="2 4" />
        <text x="14" y="252" className="fill-mid" fontSize="10" letterSpacing="0.08em" style={{ fontFamily: "'Shippori Mincho', serif" }}>
          仏光寺通 BUKKOJI-DORI
        </text>

        {/* 高辻通 */}
        <line x1="0" y1="420" x2="600" y2="420" stroke="#6E6560" strokeWidth="10" opacity="0.16" />
        <line x1="0" y1="420" x2="600" y2="420" stroke="#6E6560" strokeWidth="1.5" opacity="0.5" strokeDasharray="2 4" />
        <text x="14" y="412" className="fill-mid" fontSize="10" letterSpacing="0.08em" style={{ fontFamily: "'Shippori Mincho', serif" }}>
          高辻通 TAKATSUJI-DORI
        </text>

        {/* 五条通 */}
        <line x1="0" y1="580" x2="600" y2="580" stroke="#6E6560" strokeWidth="14" opacity="0.18" />
        <line x1="0" y1="580" x2="600" y2="580" stroke="#6E6560" strokeWidth="2" opacity="0.5" />
        <text x="14" y="572" className="fill-mid" fontSize="11" letterSpacing="0.08em" style={{ fontFamily: "'Shippori Mincho', serif" }}>
          五条通 GOJO-DORI
        </text>

        {/* 縦通り（南北） */}
        {/* 烏丸通（メイン） */}
        <line x1="320" y1="0" x2="320" y2="720" stroke="#6E6560" strokeWidth="16" opacity="0.2" />
        <line x1="320" y1="0" x2="320" y2="720" stroke="#6E6560" strokeWidth="2" opacity="0.5" />
        <text
          x="334"
          y="60"
          className="fill-mid"
          fontSize="11"
          letterSpacing="0.12em"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          烏丸通
        </text>
        <text x="334" y="74" className="fill-mid" fontSize="9" letterSpacing="0.16em">
          KARASUMA-DORI
        </text>

        {/* 烏丸線（地下鉄） */}
        <line
          x1="320"
          y1="0"
          x2="320"
          y2="720"
          stroke="#7A9E8E"
          strokeWidth="2"
          strokeDasharray="6 4"
          opacity="0.55"
        />

        {/* 西洞院通 */}
        <line x1="200" y1="0" x2="200" y2="720" stroke="#6E6560" strokeWidth="8" opacity="0.14" />
        <line x1="200" y1="0" x2="200" y2="720" stroke="#6E6560" strokeWidth="1" opacity="0.5" strokeDasharray="2 4" />
        <text x="208" y="60" className="fill-mid" fontSize="9" letterSpacing="0.1em" style={{ fontFamily: "'Shippori Mincho', serif" }}>
          西洞院通
        </text>

        {/* 高倉通 */}
        <line x1="440" y1="0" x2="440" y2="720" stroke="#6E6560" strokeWidth="8" opacity="0.14" />
        <line x1="440" y1="0" x2="440" y2="720" stroke="#6E6560" strokeWidth="1" opacity="0.5" strokeDasharray="2 4" />
        <text x="448" y="60" className="fill-mid" fontSize="9" letterSpacing="0.1em" style={{ fontFamily: "'Shippori Mincho', serif" }}>
          高倉通
        </text>

        {/* 駅：四条駅 */}
        <g>
          <rect x="306" y="86" width="28" height="28" fill="#3A3530" rx="2" />
          <text x="320" y="105" textAnchor="middle" fill="#F0EDE6" fontSize="13" style={{ fontFamily: "'Shippori Mincho', serif" }}>
            M
          </text>
          <text
            x="346"
            y="106"
            fill="#3A3530"
            fontSize="13"
            style={{ fontFamily: "'Shippori Mincho', serif" }}
            letterSpacing="0.06em"
          >
            四条駅
          </text>
          <text x="346" y="120" fill="#6E6560" fontSize="9" letterSpacing="0.14em">
            SHIJO STATION
          </text>
        </g>

        {/* 駅：五条駅 */}
        <g>
          <rect x="306" y="566" width="28" height="28" fill="#3A3530" rx="2" />
          <text x="320" y="585" textAnchor="middle" fill="#F0EDE6" fontSize="13" style={{ fontFamily: "'Shippori Mincho', serif" }}>
            M
          </text>
          <text
            x="346"
            y="586"
            fill="#3A3530"
            fontSize="13"
            style={{ fontFamily: "'Shippori Mincho', serif" }}
            letterSpacing="0.06em"
          >
            五条駅
          </text>
          <text x="346" y="600" fill="#6E6560" fontSize="9" letterSpacing="0.14em">
            GOJO STATION
          </text>
          {/* 6番出口の印 */}
          <circle cx="340" cy="612" r="9" fill="#B89C84" />
          <text x="340" y="616" textAnchor="middle" fill="#F0EDE6" fontSize="10" fontWeight="500">
            6
          </text>
          <text x="354" y="616" fill="#8A6E56" fontSize="9" letterSpacing="0.1em">
            6番出口
          </text>
        </g>

        {/* 仏光寺 (寺) */}
        <g>
          <rect x="416" y="244" width="32" height="32" fill="rgba(122,158,142,0.18)" stroke="#5A7E6E" strokeWidth="1" />
          <text
            x="432"
            y="266"
            textAnchor="middle"
            fill="#5A7E6E"
            fontSize="14"
            style={{ fontFamily: "'Shippori Mincho', serif" }}
          >
            寺
          </text>
          <text
            x="454"
            y="260"
            fill="#5A7E6E"
            fontSize="11"
            style={{ fontFamily: "'Shippori Mincho', serif" }}
            letterSpacing="0.04em"
          >
            仏光寺
          </text>
          <text x="454" y="272" fill="#6E6560" fontSize="8" letterSpacing="0.12em">
            BUKKOJI TEMPLE
          </text>
        </g>

        {/* 歩行ルート — 五条駅 → 元悪王子 */}
        <path
          d="M 320 600 Q 320 560 280 530 Q 240 500 200 480 Q 180 470 160 460"
          fill="none"
          stroke="#B89C84"
          strokeWidth="2.5"
          strokeDasharray="5 5"
          opacity="0.85"
        />

        {/* 歩行ルート — 五条駅 → 仏光寺ホテル */}
        <path
          d="M 320 600 Q 320 540 360 440 Q 380 380 410 320 Q 425 290 432 270"
          fill="none"
          stroke="#5A7E6E"
          strokeWidth="2.5"
          strokeDasharray="5 5"
          opacity="0.85"
        />

        {/* ホテル：元悪王子（高辻通×西洞院通あたり） */}
        <g filter="url(#pinShadow)">
          <circle cx="160" cy="450" r="22" fill="#8A6E56" />
          <circle cx="160" cy="450" r="22" fill="#8A6E56" stroke="#F0EDE6" strokeWidth="3" />
          <text
            x="160"
            y="455"
            textAnchor="middle"
            fill="#F0EDE6"
            fontSize="13"
            style={{ fontFamily: "'Shippori Mincho', serif" }}
            letterSpacing="0.04em"
          >
            元
          </text>
        </g>
        <g>
          <rect x="60" y="478" width="200" height="50" fill="#F0EDE6" stroke="#B89C84" strokeWidth="1" />
          <text x="72" y="496" fill="#8A6E56" fontSize="11" style={{ fontFamily: "'Shippori Mincho', serif" }} letterSpacing="0.04em">
            元悪王子
          </text>
          <text x="72" y="496" textAnchor="end" />
          <text x="246" y="496" textAnchor="end" fill="#6E6560" fontSize="9" letterSpacing="0.12em">
            MOTO-AKUOJI
          </text>
          <text x="72" y="514" fill="#6E6560" fontSize="10">
            下京区 元悪王子町
          </text>
          <text x="246" y="514" textAnchor="end" fill="#6E6560" fontSize="10">
            五条駅 徒歩 約8分
          </text>
        </g>

        {/* ホテル：仏光寺（仏光寺通×高倉通あたり） */}
        <g filter="url(#pinShadow)">
          <circle cx="432" cy="240" r="22" fill="#5A7E6E" stroke="#F0EDE6" strokeWidth="3" />
          <text
            x="432"
            y="245"
            textAnchor="middle"
            fill="#F0EDE6"
            fontSize="13"
            style={{ fontFamily: "'Shippori Mincho', serif" }}
            letterSpacing="0.04em"
          >
            仏
          </text>
        </g>
        <g>
          <rect x="330" y="180" width="200" height="50" fill="#F0EDE6" stroke="#5A7E6E" strokeWidth="1" />
          <text x="342" y="198" fill="#5A7E6E" fontSize="11" style={{ fontFamily: "'Shippori Mincho', serif" }} letterSpacing="0.04em">
            仏光寺
          </text>
          <text x="516" y="198" textAnchor="end" fill="#6E6560" fontSize="9" letterSpacing="0.12em">
            BUKKOJI
          </text>
          <text x="342" y="216" fill="#6E6560" fontSize="10">
            下京区 仏光寺通
          </text>
          <text x="516" y="216" textAnchor="end" fill="#6E6560" fontSize="10">
            五条駅 徒歩 約7分
          </text>
        </g>

        {/* 方位 */}
        <g transform="translate(548, 32)">
          <circle r="22" fill="#F0EDE6" stroke="#D5CECC" strokeWidth="1" />
          <path d="M 0 -14 L 5 0 L 0 14 L -5 0 Z" fill="#3A3530" />
          <text y="-26" textAnchor="middle" fill="#6E6560" fontSize="10" letterSpacing="0.1em">
            N
          </text>
        </g>

        {/* スケール */}
        <g transform="translate(20, 690)">
          <line x1="0" y1="0" x2="80" y2="0" stroke="#3A3530" strokeWidth="2" />
          <line x1="0" y1="-4" x2="0" y2="4" stroke="#3A3530" strokeWidth="2" />
          <line x1="80" y1="-4" x2="80" y2="4" stroke="#3A3530" strokeWidth="2" />
          <text y="16" fontSize="10" fill="#6E6560" letterSpacing="0.1em">
            約 200m
          </text>
        </g>
      </svg>

      {/* 凡例 */}
      <div className="px-5 py-4 border-t border-light-line flex flex-wrap gap-4 text-[11px] bg-warm-off">
        <span className="inline-flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-earth-dark border-2 border-cream" />
          元悪王子
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-chigusa-dark border-2 border-cream" />
          仏光寺
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="w-3 h-3 bg-charcoal" />
          地下鉄駅（烏丸線）
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="w-6 h-0.5 bg-chigusa" style={{ backgroundImage: "repeating-linear-gradient(90deg, #7A9E8E 0 4px, transparent 4px 8px)" }} />
          烏丸線
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="w-6 h-0.5" style={{ backgroundImage: "repeating-linear-gradient(90deg, #6E6560 0 3px, transparent 3px 6px)" }} />
          徒歩ルート
        </span>
      </div>
    </div>
  );
}
