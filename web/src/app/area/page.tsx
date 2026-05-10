import Link from "next/link";
import { Placeholder, Icon } from "@/components/Placeholder";
import { Eyebrow } from "@/components/Eyebrow";

// 10 エリア情報 / route: "/area"
const VENUES = [
  {
    tag: "観light",
    label: "観光スポット",
    tagColor: "bg-earth-bg border-earth/40 text-earth-dark",
    distance: "🚶 元悪王子から徒歩約8分",
    name: "錦市場",
    body: "地元の人々が「京都の台所」と呼ぶアーケード商店街。食料品店、刃物屋、漬物店、そして三百年以上毎朝新鮮に作り続けられる豆腐——5ブロックにわたる生活の場。",
    address: "📍 錦小路、中京区、京都",
    variant: "default" as const,
    icon: <Icon.Food />,
  },
  {
    tag: "グルメ",
    label: "グルメ",
    tagColor: "bg-chigusa-bg border-chigusa/40 text-chigusa-dark",
    distance: "🚶 仏光寺から徒歩約5分",
    name: "吉泉",
    body: "中京区の静かな路地に佇む懐石料理店。カウンター席12席。予約は数ヶ月先まで埋まっているが、ホテルのチームが時折リクエストをサポートできることも。",
    address: "📍 岡崎、左京区、京都",
    variant: "chigusa" as const,
    icon: <Icon.Food />,
  },
  {
    tag: "美術館",
    label: "美術館・博物館",
    tagColor: "bg-warm-off border-light-line text-mid",
    distance: "🚶 元悪王子から徒歩約12分",
    name: "河井寬次郎記念館",
    body: "陶芸の巨匠・河井寬次郎の自宅と窯を保存した施設。1966年の没後も変わらず残るその空間は、京都で最も静かに非凡な場所のひとつ。",
    address: "📍 東山区、京都",
    variant: "earth" as const,
    icon: <Icon.Tea />,
  },
];

const NEAR = [
  { tag: "観光スポット", name: "仏光寺", distance: "🚶 両ホテルから徒歩約6分", variant: "chigusa" as const, icon: <Icon.Torii /> },
  { tag: "グルメ", name: "一保堂茶舗", distance: "🚶 元悪王子から徒歩約10分", variant: "earth" as const, icon: <Icon.Tea /> },
  { tag: "美術館・博物館", name: "京都工芸繊維大学美術工芸資料館", distance: "🚶 徒歩約15分", variant: "default" as const, icon: <Icon.Camera /> },
  { tag: "グルメ", name: "ウィークエンダーズコーヒー", distance: "🚶 仏光寺から徒歩約4分", variant: "chigusa" as const, icon: <Icon.Tea /> },
  { tag: "観光スポット", name: "六角堂", distance: "🚶 元悪王子から徒歩約9分", variant: "earth" as const, icon: <Icon.Torii /> },
  { tag: "美術館・博物館", name: "西陣織会館", distance: "🚶 元悪王子から徒歩約11分", variant: "default" as const, icon: <Icon.Camera /> },
];

export default function AreaPage() {
  return (
    <>
      <section className="relative h-[44vh] min-h-[340px] overflow-hidden">
        <Placeholder label="HERO — 京都の路地、夕暮れの灯り" fill variant="charcoal" icon={<Icon.Map />} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/15 to-black/55" />
        <div className="relative z-10 h-full max-w-content mx-auto px-5 md:px-10 flex flex-col justify-end pb-14 text-cream">
          <span className="self-start text-[10px] tracking-widest uppercase bg-cream/90 text-charcoal px-3 py-1">
            京都・下京 & 中京
          </span>
          <h1 className="mt-5 h-display text-5xl md:text-6xl">エリアを探索する</h1>
        </div>
      </section>

      {/* フィルタ */}
      <div className="border-b border-light-line bg-warm-off">
        <div className="max-w-content mx-auto px-5 md:px-10 py-5 flex gap-2 overflow-x-auto">
          {[
            { label: "すべて", active: true },
            { label: "観光スポット" },
            { label: "グルメ・地元レストラン" },
            { label: "美術館 & 文化施設" },
          ].map((c) => (
            <button
              key={c.label}
              className={`whitespace-nowrap px-4 py-2 text-[12px] tracking-wider border transition ${
                c.active
                  ? "bg-charcoal text-cream border-charcoal"
                  : "bg-cream text-charcoal border-light-line hover:border-charcoal"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* マップ + 主要スポット */}
      <section className="max-w-content mx-auto px-5 md:px-10 py-20 grid lg:grid-cols-[1.4fr_1fr] gap-10">
        <div className="lg:sticky lg:top-24 self-start">
          <div className="relative">
            <Placeholder label="下京区・中京区 京都 — エリアマップ" ratio="1/1" variant="default" className="!aspect-square" icon={<Icon.Map />} />
            {[
              { top: "20%", left: "30%", color: "bg-accent-red" },
              { top: "26%", left: "60%", color: "bg-accent-red" },
              { top: "36%", left: "45%", color: "bg-accent-red" },
              { top: "44%", left: "70%", color: "bg-accent-red" },
              { top: "58%", left: "30%", color: "bg-accent-red" },
              { top: "70%", left: "55%", color: "bg-accent-red" },
              { top: "48%", left: "37%", color: "bg-earth ring-2 ring-cream" },
              { top: "40%", left: "56%", color: "bg-chigusa ring-2 ring-cream" },
            ].map((p, i) => (
              <span
                key={i}
                className={`absolute w-3 h-3 rounded-full ${p.color}`}
                style={{ top: p.top, left: p.left }}
              />
            ))}
          </div>
          <div className="mt-4 flex gap-3 text-[11px]">
            <span className="inline-flex items-center gap-2 bg-charcoal text-cream px-3 py-1.5">
              <span className="w-2 h-2 rounded-full bg-earth" /> solmu ホテル
            </span>
            <span className="inline-flex items-center gap-2 bg-cream border border-light-line text-charcoal px-3 py-1.5">
              <span className="w-2 h-2 rounded-full bg-accent-red" /> 観光スポット
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {VENUES.map((v) => (
            <article key={v.name} className="flex flex-col md:flex-row gap-5 bg-cream border border-light-line p-5">
              <div className="md:w-56 shrink-0">
                <Placeholder label={v.name} ratio="4/3" variant={v.variant} icon={v.icon} />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] tracking-widest uppercase px-2 py-1 border ${v.tagColor}`}>
                    {v.label}
                  </span>
                  <span className="text-[11px] text-mid">{v.distance}</span>
                </div>
                <h3 className="h-display text-xl">{v.name}</h3>
                <p className="text-[13px] text-mid leading-relaxed">{v.body}</p>
                <span className="text-[11px] text-mid">{v.address}</span>
                <div className="flex gap-4 mt-2">
                  <a href="#" className="text-[11px] tracking-widest text-charcoal hover:text-mid">ウェブサイト →</a>
                  <a href="#" className="text-[11px] tracking-widest text-charcoal hover:text-mid">地図を見る →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 近隣スポット一覧 */}
      <section className="bg-shironeri">
        <div className="max-w-content mx-auto px-5 md:px-10 py-20">
          <div className="text-center eyebrow !text-[10px] mb-10">近隣スポット一覧</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {NEAR.map((n) => (
              <article key={n.name} className="bg-cream border border-light-line p-5 flex flex-col gap-3">
                <Placeholder label={n.name} ratio="4/3" variant={n.variant} icon={n.icon} />
                <span className="text-[10px] tracking-widest uppercase text-mid">{n.tag}</span>
                <h4 className="h-display text-base">{n.name}</h4>
                <span className="text-[11px] text-mid">{n.distance}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
