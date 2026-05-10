import Link from "next/link";
import { Placeholder, Icon } from "@/components/Placeholder";
import { Eyebrow } from "@/components/Eyebrow";

// 14 アクセス / route: "/access"
const ROUTES = [
  {
    origin: { icon: "✈", label: "関西国際空港" },
    legs: [
      { mode: "はるか号", time: "約75分" },
      { mode: "🚉 京都駅", time: "" },
      { mode: "烏丸線", time: "約10分" },
    ],
  },
  {
    origin: { icon: "✈", label: "伊丹空港" },
    legs: [
      { mode: "リムジンバス", time: "約60分" },
      { mode: "🚉 京都駅", time: "" },
      { mode: "烏丸線", time: "約10分" },
    ],
  },
  {
    origin: { icon: "🚅", label: "新大阪駅" },
    legs: [
      { mode: "新幹線", time: "約15分" },
      { mode: "🚉 京都駅", time: "" },
      { mode: "烏丸線", time: "約10分" },
    ],
  },
  {
    origin: { icon: "🚉", label: "京都駅" },
    legs: [{ mode: "烏丸線（北行2駅）", time: "約10分" }],
  },
];

export default function AccessPage() {
  return (
    <>
      <section className="relative h-[36vh] min-h-[280px] overflow-hidden">
        <Placeholder label="HERO — 京都駅から、宿への道" fill variant="charcoal" icon={<Icon.Map />} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/15 to-black/55" />
        <div className="relative z-10 h-full max-w-content mx-auto px-5 md:px-10 flex flex-col justify-end pb-14 text-cream">
          <Eyebrow tone="light">アクセス</Eyebrow>
          <h1 className="mt-4 h-display text-5xl md:text-6xl">アクセス</h1>
        </div>
      </section>

      <section className="max-w-content mx-auto px-5 md:px-10 py-20 grid lg:grid-cols-2 gap-12">
        {/* 左：住所 + マップ */}
        <div className="flex flex-col gap-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <article className="bg-cream border border-earth/40 p-6">
              <div className="flex items-baseline gap-3">
                <h3 className="h-display text-xl">元悪王子</h3>
                <span className="h-latin text-sm text-mid">moto-akuoji</span>
              </div>
              <div className="mt-4 text-[13px] leading-relaxed">
                〒 600-8XXX
                <br />
                京都市下京区 仏光寺通 [番地]
              </div>
              <div className="mt-3 text-[12px] text-mid">Tel: +81 75 — — ——</div>
              <Link href="/hotels/moto-akuoji" className="btn btn--earth mt-5 self-start">
                施設ページ
              </Link>
            </article>
            <article className="bg-cream border border-chigusa/40 p-6">
              <div className="flex items-baseline gap-3">
                <h3 className="h-display text-xl">仏光寺</h3>
                <span className="h-latin text-sm text-mid">bukkoji</span>
              </div>
              <div className="mt-4 text-[13px] leading-relaxed">
                〒 604-8XXX
                <br />
                京都市中京区 [町名・番地]
              </div>
              <div className="mt-3 text-[12px] text-mid">Tel: +81 75 — — ——</div>
              <Link href="/hotels/bukkoji" className="btn btn--chigusa mt-5 self-start">
                施設ページ
              </Link>
            </article>
          </div>

          <div className="relative">
            <Placeholder label="下京区・中京区 京都 — マップ" ratio="4/5" className="!aspect-[4/3]" icon={<Icon.Map />} />
            <div className="absolute top-[48%] left-[37%]">
              <div className="w-3 h-3 rounded-full bg-earth ring-2 ring-cream" />
            </div>
            <div className="absolute top-[40%] left-[56%]">
              <div className="w-3 h-3 rounded-full bg-chigusa ring-2 ring-cream" />
            </div>
          </div>

          <p className="text-[13px] text-mid leading-relaxed">
            両施設とも烏丸線から徒歩圏内。最寄り駅は五条駅（烏丸線）で、徒歩約8〜10分です。
          </p>
        </div>

        {/* 右：ルート + 出口 */}
        <div className="flex flex-col gap-10">
          <div>
            <Eyebrow>アクセスルート</Eyebrow>
            <div className="mt-6 space-y-3">
              {ROUTES.map((r, ri) => (
                <div key={ri} className="bg-cream border border-light-line p-4 flex flex-wrap items-center gap-3 text-[12px]">
                  <span className="px-3 py-2 bg-warm-off border border-light-line whitespace-nowrap">
                    <span className="mr-1">{r.origin.icon}</span>
                    {r.origin.label}
                  </span>
                  {r.legs.map((leg, li) => (
                    <span key={li} className="flex items-center gap-2">
                      <span className="text-mid">›</span>
                      <span className="px-3 py-2 bg-warm-off border border-light-line whitespace-nowrap">
                        {leg.mode}
                        {leg.time && <span className="ml-1 text-mid">/ {leg.time}</span>}
                      </span>
                    </span>
                  ))}
                  <span className="text-mid">›</span>
                  <span className="px-3 py-2 bg-earth-bg border border-earth/40 text-earth-dark whitespace-nowrap">
                    📍 五条駅
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-cream border border-light-line">
            <div className="px-6 py-5 border-b border-light-line flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-earth text-cream grid place-items-center text-[11px] font-serif">地</span>
              <h3 className="h-display text-lg">五条駅 出口・エレベーターのご案内</h3>
            </div>
            <div className="p-6 grid sm:grid-cols-2 gap-4">
              <div className="bg-warm-off p-5">
                <div className="text-[11px] text-mid">🚪 地上出口</div>
                <div className="mt-2 h-display text-3xl text-earth-dark">6番出口</div>
                <div className="mt-2 text-[12px]">エレベーターあり / スーツケース対応</div>
              </div>
              <div className="bg-warm-off p-5">
                <div className="text-[11px] text-mid">🛗 ホームエレベーター</div>
                <div className="mt-2 text-[13px]">竹田・奈良方面 / ホーム先頭付近</div>
                <div className="my-3 h-px bg-light-line" />
                <div className="text-[11px] text-mid">大きなお荷物のある方はこちら</div>
              </div>
            </div>
            <div className="px-6 pb-6 text-[12px] text-mid">
              五条駅を出たら徒歩約8〜10分。両ホテルとも案内サインに従ってお越しください。
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
