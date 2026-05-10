import Link from "next/link";
import { Placeholder } from "@/components/Placeholder";
import { Icon } from "@/components/PlaceholderIcons";
import { SectionHeading } from "@/components/SectionHeading";
import { Eyebrow } from "@/components/Eyebrow";
import { IMG } from "@/lib/assets";

// 02 コンセプト / route: "/about"
export default function AboutPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <Placeholder label="HERO — 京の朝、しろねりの暖簾" variant="earth" fill icon={<Icon.Townhouse />} src={IMG.heroAbout} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50" />
        <div className="relative z-10 h-full max-w-content mx-auto px-5 md:px-10 flex flex-col justify-end pb-20 text-cream">
          <Eyebrow tone="light">私たちの哲学</Eyebrow>
          <h1 className="mt-5 h-display text-5xl md:text-6xl">solmu kyotoについて</h1>
        </div>
      </section>

      {/* コンセプトギャラリー */}
      <section className="border-b border-light-line">
        <div className="max-w-content mx-auto px-5 md:px-10 py-16">
          <div className="text-center eyebrow !text-[10px] mb-6">コンセプトギャラリー</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "町家の縁側",
              "土壁のテクスチャ",
              "茶釜の湯気",
              "夕暮れの路地",
            ].map((l) => (
              <Placeholder key={l} label={l} ratio="3/4" rounded icon={<Icon.Camera />} />
            ))}
          </div>
        </div>
      </section>

      {/* ストーリー */}
      <section className="max-w-content mx-auto px-5 md:px-10 py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-start">
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="私たちのストーリー"
            title={
              <>
                ゆっくりと、
                <br />
                ここに<em className="h-latin not-italic">在ること。</em>
              </>
            }
          />
          <div className="space-y-5 text-[14px] md:text-[15px] text-mid leading-relaxed">
            <p>海外資本のホテルのように観光名所へ誘うのではなく、solmu kyotoは「生きた紹介装置」として機能します——地元の人々と旅人が予期せぬ出会いを紡ぐ場所として。</p>
            <p>両施設は下京区と中京区に位置します。寺院巡りや観光バスの京都ではなく、町のパン屋、老舗の織物工房、四代続く豆腐屋のある、京都の日常の中に。</p>
            <p>ゲストはホテルを通じて街に出会い、街を通じてホテルを記憶する。</p>
          </div>
          <Link href="#hotels" className="btn btn--solid self-start mt-4">ホテルを探索する</Link>
        </div>
        <div className="flex flex-col gap-6">
          <Placeholder label="コンセプト画像 — 縁側に注ぐ朝光" ratio="3/2" variant="charcoal" icon={<Icon.Tea />} rounded />
          <blockquote className="border-l-2 border-charcoal pl-6 py-2 h-display text-xl md:text-2xl leading-relaxed">
            「仏光寺から徒歩2分、街の表情が変わります。
            その出会いを届けるために、私たちはここにいる。」
          </blockquote>
        </div>
      </section>

      {/* バリュー */}
      <section className="bg-shironeri">
        <div className="max-w-content mx-auto px-5 md:px-10 py-24 md:py-32">
          <SectionHeading
            align="center"
            eyebrow="価値観"
            title={
              <>
                私たちが<em className="h-latin not-italic">大切にする</em>こと
              </>
            }
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: "01", title: "縁 — つながり", body: "人と人、場所と世代の間に自然と生まれる絆を大切に。すべてのデザインの決断は、この見えない糸を強くするために。" },
              { n: "02", title: "アクティブ × ローカル", body: "京都を「観る」のではなく、「動きながら発見する」旅人のために。リピーターも初めての方も同じく。" },
              { n: "03", title: "時間を過ごす", body: "宿泊は「泊まる」ではなく「住む」感覚。朝食、ラウンジ、館内ウェアや自転車レンタルも、コミュニティへの窓口として。" },
              { n: "04", title: "アーバン モダン", body: "余剰なき上質さ。京都の既存デザインの型から一線を画す。" },
            ].map((v) => (
              <article key={v.n} className="bg-cream border border-light-line p-8 flex flex-col gap-3">
                <span className="h-latin text-2xl text-mid">{v.n}</span>
                <h3 className="h-display text-lg">{v.title}</h3>
                <p className="text-[13px] text-mid leading-relaxed">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 二つの宿カード */}
      <section id="hotels" className="max-w-content mx-auto px-5 md:px-10 py-24 md:py-32">
        <SectionHeading
          align="center"
          eyebrow="二つの宿"
          title={
            <>
              moto-akuoji &<em className="h-latin not-italic"> bukkoji</em>
            </>
          }
          body="それぞれ異なる世界観を持つ二つの宿。どちらも京都の日常に根ざし、旅人を街へと繋ぐ。"
        />
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          {[
            {
              slug: "moto-akuoji",
              tag: "moto-akuoji",
              name: "元悪王子",
              body: "温かな大地。町家建築の美学。陶芸家、織り職人、そして毎朝顔なじみの豆腐屋が暮らす、人情の街。",
              variant: "earth" as const,
              btn: "btn--earth",
              icon: <Icon.Townhouse />,
            },
            {
              slug: "bukkoji",
              tag: "bukkoji",
              name: "仏光寺",
              body: "鼠青色と静謐。古寺の鐘が夕暮れに鳴り響き、街が目覚める前から個人経営のカフェが開く路地。",
              variant: "chigusa" as const,
              btn: "btn--chigusa",
              icon: <Icon.Torii />,
            },
          ].map((h) => (
            <Link
              key={h.slug}
              href={`/hotels/${h.slug}`}
              className="relative aspect-[4/5] md:aspect-[5/6] block overflow-hidden group"
            >
              <Placeholder label={`${h.name} — フィーチャー`} variant={h.variant} fill icon={h.icon} />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/65" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-cream">
                <span className="self-start text-[10px] tracking-[0.18em] uppercase bg-cream text-charcoal px-3 py-1">
                  {h.tag}
                </span>
                <h3 className="mt-6 h-display text-4xl md:text-5xl">{h.name}</h3>
                <p className="mt-4 text-sm text-cream/85 max-w-sm leading-relaxed">{h.body}</p>
                <span className={`mt-6 inline-flex btn ${h.btn} self-start`}>
                  {h.tag} を探索
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
