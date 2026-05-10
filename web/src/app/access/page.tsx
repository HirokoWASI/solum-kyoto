import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { Placeholder } from "@/components/Placeholder";
import { Icon } from "@/components/PlaceholderIcons";
import { Train, MapPin } from "@/components/BrandIcons";
import { IMG } from "@/lib/assets";

// 14 アクセス / route: "/access"
// 京都の実際の街路構造（烏丸線・四条駅・五条駅・仏光寺通）をベースに、両ホテルの位置を視覚化する。
const ROUTES = [
  {
    origin: { icon: "✈", label: "関西国際空港", note: "KIX" },
    legs: [
      { mode: "JR はるか号", time: "約75分" },
      { mode: "京都駅", node: true },
      { mode: "地下鉄 烏丸線", time: "約3分" },
    ],
    dest: "五条駅",
  },
  {
    origin: { icon: "✈", label: "大阪国際空港", note: "ITM" },
    legs: [
      { mode: "リムジンバス", time: "約60分" },
      { mode: "京都駅", node: true },
      { mode: "地下鉄 烏丸線", time: "約3分" },
    ],
    dest: "五条駅",
  },
  {
    origin: { icon: "🚄", label: "新大阪駅", note: "" },
    legs: [
      { mode: "新幹線", time: "約15分" },
      { mode: "京都駅", node: true },
      { mode: "地下鉄 烏丸線", time: "約3分" },
    ],
    dest: "五条駅",
  },
  {
    origin: { icon: "🚉", label: "京都駅", note: "Kyoto Station" },
    legs: [{ mode: "地下鉄 烏丸線（国際会館行）", time: "約3分" }],
    dest: "五条駅",
  },
];

export default function AccessPage() {
  return (
    <>
      {/* ───────── ヒーロー ───────── */}
      <section className="bg-warm-off pt-32 pb-16 border-b border-light-line">
        <div className="max-w-content mx-auto px-5 md:px-10">
          <Eyebrow>アクセス</Eyebrow>
          <h1 className="mt-4 h-display text-5xl md:text-6xl">
            京都の中心へ、
            <br />
            <em className="h-latin not-italic">静かに着く。</em>
          </h1>
          <p className="mt-6 max-w-xl text-[14px] md:text-[15px] text-mid leading-relaxed">
            元悪王子・仏光寺はいずれも京都市下京区。烏丸線「五条駅」が最寄りで、
            京都駅から地下鉄でわずか3分。新幹線・空港バス・はるか号いずれからも、
            一度の乗り換えで宿に着きます。
          </p>
        </div>
      </section>

      {/* ───────── マップ + 住所カード ───────── */}
      <section className="max-w-content mx-auto px-5 md:px-10 py-20 grid lg:grid-cols-[1.6fr_1fr] gap-10">
        <div className="flex flex-col gap-4">
          <Eyebrow>エリアマップ</Eyebrow>
          <h2 className="h-display text-2xl md:text-3xl">下京区 元悪王子・仏光寺</h2>
          <p className="text-[13px] text-mid leading-relaxed max-w-lg">
            京都の中心、四条と五条の間。烏丸通を背骨に、仏光寺通・高辻通の格子が両ホテルを繋ぎます。
          </p>
          <div className="mt-2 bg-cream border border-light-line overflow-hidden">
            {/* 公式エリアマップ画像。提供画像。 */}
            <Placeholder
              label="solmu kyoto エリアマップ"
              src={IMG.areaMap}
              ratio="4/3"
              icon={<Icon.Map />}
            />
          </div>
        </div>

        <aside className="flex flex-col gap-5">
          <article className="bg-cream border border-earth/40 p-6">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-earth-dark text-cream grid place-items-center text-sm font-serif">
                元
              </span>
              <div>
                <h3 className="h-display text-xl leading-none">元悪王子</h3>
                <span className="h-latin text-xs text-mid">moto-akuoji</span>
              </div>
            </div>
            <dl className="mt-5 space-y-2 text-[13px]">
              <div className="flex gap-3">
                <dt className="w-16 text-mid text-[11px] tracking-widest">住所</dt>
                <dd>京都府京都市下京区 元悪王子町</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-16 text-mid text-[11px] tracking-widest">最寄駅</dt>
                <dd>
                  烏丸線「五条駅」<span className="text-mid">／ 徒歩 約 8 分</span>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-16 text-mid text-[11px] tracking-widest">電話</dt>
                <dd className="text-mid">+81 75 — — ——</dd>
              </div>
            </dl>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link href="/hotels/moto-akuoji" className="btn btn--earth !py-2.5 !px-4 !text-[10px]">
                施設ページ
              </Link>
              <a
                href="https://maps.google.com/?q=元悪王子町+京都市下京区"
                target="_blank"
                rel="noreferrer"
                className="btn btn--ghost !py-2.5 !px-4 !text-[10px]"
              >
                Google Maps
              </a>
            </div>
          </article>

          <article className="bg-cream border border-chigusa/40 p-6">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-chigusa-dark text-cream grid place-items-center text-sm font-serif">
                仏
              </span>
              <div>
                <h3 className="h-display text-xl leading-none">仏光寺</h3>
                <span className="h-latin text-xs text-mid">bukkoji</span>
              </div>
            </div>
            <dl className="mt-5 space-y-2 text-[13px]">
              <div className="flex gap-3">
                <dt className="w-16 text-mid text-[11px] tracking-widest">住所</dt>
                <dd>京都府京都市下京区 仏光寺通</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-16 text-mid text-[11px] tracking-widest">最寄駅</dt>
                <dd>
                  烏丸線「五条駅」<span className="text-mid">／ 徒歩 約 7 分</span>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-16 text-mid text-[11px] tracking-widest">電話</dt>
                <dd className="text-mid">+81 75 — — ——</dd>
              </div>
            </dl>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link href="/hotels/bukkoji" className="btn btn--chigusa !py-2.5 !px-4 !text-[10px]">
                施設ページ
              </Link>
              <a
                href="https://maps.google.com/?q=仏光寺通+京都市下京区"
                target="_blank"
                rel="noreferrer"
                className="btn btn--ghost !py-2.5 !px-4 !text-[10px]"
              >
                Google Maps
              </a>
            </div>
          </article>

          <div className="bg-shironeri p-6 border-l-2 border-earth">
            <div className="eyebrow !text-[10px]">徒歩で行き来できます</div>
            <p className="mt-3 text-[13px] leading-relaxed">
              元悪王子 — 仏光寺の二宿は、下京区の格子状の路地を <strong className="font-medium">徒歩 約 7 分</strong>。
              自転車レンタルでも気軽に行き来できます。
            </p>
          </div>
        </aside>
      </section>

      {/* ───────── アクセスルート ───────── */}
      <section className="bg-shironeri border-y border-light-line">
        <div className="max-w-content mx-auto px-5 md:px-10 py-20">
          <div className="flex items-center gap-3">
            <Train className="w-8 h-8 text-charcoal/70" />
            <Eyebrow>アクセスルート</Eyebrow>
          </div>
          <h2 className="mt-4 h-display text-3xl md:text-4xl">
            主要拠点から
            <em className="h-latin not-italic">五条駅</em>まで
          </h2>
          <p className="mt-4 max-w-xl text-[13px] text-mid leading-relaxed">
            五条駅 6 番出口から、元悪王子・仏光寺いずれも徒歩 10 分以内。
          </p>

          {/* 公式の4ルート図 */}
          <div className="mt-10 bg-cream border border-light-line overflow-hidden">
            <Placeholder
              label="五条駅6番出口までの4つのアクセス"
              src={IMG.accessRoutes}
              ratio="16/9"
              icon={<Icon.Map />}
            />
          </div>

          <div className="mt-8 flex flex-col gap-3">
            {ROUTES.map((r, i) => (
              <RouteRow key={i} route={r} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 五条駅 出口案内 ───────── */}
      <section className="max-w-content mx-auto px-5 md:px-10 py-20 grid lg:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <MapPin className="w-7 h-7 text-charcoal/70" />
            <Eyebrow>五条駅 出口・エレベーター</Eyebrow>
          </div>
          <h2 className="mt-4 h-display text-3xl md:text-4xl">
            <em className="h-latin not-italic">6 番出口</em>から、
            <br />
            下京の路地へ。
          </h2>
          <p className="mt-4 max-w-md text-[13px] text-mid leading-relaxed">
            五条駅 6 番出口にはエレベーターがあり、スーツケースのままお越しいただけます。
            竹田・奈良方面のホーム先頭付近のエレベーターをご利用ください。
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="bg-cream border border-light-line p-5">
              <div className="text-[11px] text-mid tracking-widest">🚪 地上出口</div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="h-display text-5xl text-earth-dark">6</span>
                <span className="text-base">番出口</span>
              </div>
              <div className="mt-3 text-[12px] text-mid leading-relaxed">
                エレベーターあり<br />
                大きな荷物でも安心
              </div>
            </div>
            <div className="bg-cream border border-light-line p-5">
              <div className="text-[11px] text-mid tracking-widest">🛗 ホームエレベーター</div>
              <div className="mt-3 text-[13px] leading-relaxed">
                竹田・奈良方面
                <br />
                ホーム先頭付近
              </div>
              <div className="my-4 h-px bg-light-line" />
              <div className="text-[11px] text-mid">大きなお荷物のある方はこちら</div>
            </div>
          </div>
        </div>

        <div className="lg:pt-12">
          <Placeholder
            label="五条駅 6番出口 — 街路の眺め"
            ratio="4/5"
            variant="earth"
            icon={<Icon.Lantern />}
            className="!aspect-[4/3]"
            rounded
          />
          <ul className="mt-6 space-y-3 text-[13px]">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-earth shrink-0" />
              <span>五条駅から元悪王子まで、烏丸通を北へ → 西洞院通を西へ。徒歩 約 8 分。</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-chigusa shrink-0" />
              <span>五条駅から仏光寺まで、烏丸通を北へ → 仏光寺通を東へ。徒歩 約 7 分。</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-charcoal shrink-0" />
              <span>京都駅から直接タクシーをご利用の場合、約 10 分・目安 1,200 円前後。</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ───────── タクシー / 駐車場 ───────── */}
      <section className="bg-warm-off border-t border-light-line">
        <div className="max-w-content mx-auto px-5 md:px-10 py-16 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "タクシーをご利用の場合",
              body: "京都駅八条口・烏丸口どちらからも約10分。「下京区 仏光寺通 高倉」「下京区 西洞院通 高辻」とお伝えください。",
            },
            {
              title: "お車でお越しの場合",
              body: "提携駐車場をご案内しております（有料・1泊あたりの定額制）。ご到着前にお電話または予約フォームよりご連絡ください。",
            },
            {
              title: "自転車でのご移動",
              body: "両ホテルとも自転車レンタルをご用意。錦市場・河原町・京都駅まで、いずれも自転車 10〜15 分圏内です。",
            },
          ].map((c) => (
            <article key={c.title} className="border-t border-light-line pt-6">
              <h3 className="h-display text-lg">{c.title}</h3>
              <p className="mt-3 text-[13px] text-mid leading-relaxed">{c.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

// 1経路を可視化する小コンポーネント。出発地 → 経由 → 到着駅 までの流れ。
function RouteRow({ route }: { route: (typeof ROUTES)[number] }) {
  return (
    <div className="bg-cream border border-light-line p-5 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {/* 出発地 */}
        <div className="flex items-center gap-3 md:min-w-[180px]">
          <span className="w-10 h-10 grid place-items-center text-lg bg-warm-off border border-light-line rounded">
            {route.origin.icon}
          </span>
          <div>
            <div className="h-display text-base leading-none">{route.origin.label}</div>
            {route.origin.note && (
              <div className="h-latin text-[10px] text-mid mt-1 tracking-widest">{route.origin.note}</div>
            )}
          </div>
        </div>

        {/* 経由 */}
        <div className="flex-1 flex flex-wrap items-center gap-2 md:gap-3">
          {route.legs.map((leg, li) => (
            <div key={li} className="flex items-center gap-2 md:gap-3">
              <span className="text-mid text-lg leading-none">›</span>
              <div
                className={`px-3 py-2 text-[11px] tracking-wide ${
                  leg.node
                    ? "bg-charcoal text-cream"
                    : "bg-shironeri border border-light-line"
                }`}
              >
                <span>{leg.mode}</span>
                {leg.time && <span className="ml-2 text-mid">{leg.time}</span>}
              </div>
            </div>
          ))}
          <span className="text-mid text-lg leading-none">›</span>
        </div>

        {/* 到着駅 */}
        <div className="flex items-center gap-2 px-4 py-2 bg-earth-bg border border-earth/50 text-earth-dark">
          <span className="w-2 h-2 rounded-full bg-earth-dark" />
          <span className="h-display text-base">{route.dest}</span>
          <span className="text-[10px] tracking-widest">6番出口</span>
        </div>
      </div>
    </div>
  );
}
