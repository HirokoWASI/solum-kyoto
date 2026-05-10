import Link from "next/link";
import { Placeholder } from "@/components/Placeholder";
import { Icon } from "@/components/PlaceholderIcons";
import { SectionHeading } from "@/components/SectionHeading";
import { Eyebrow } from "@/components/Eyebrow";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { IMG } from "@/lib/assets";

// 01 ホーム / route: "/"
export default function HomePage() {
  return (
    <>
      {/* ───────── ヒーロー（ローテーション） ───────── */}
      <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
        <HeroSlideshow
          slides={IMG.heroHome}
          intervalMs={6500}
          fallbackLabel="HERO — 京町家の路地（画像未着）"
        />

        <div className="relative z-10 h-full max-w-content mx-auto px-5 md:px-10 flex flex-col justify-end pb-24 md:pb-32 text-cream">
          <div className="max-w-xl">
            <Eyebrow tone="light">優しい縁を編む、京の結び目</Eyebrow>
            <h1 className="mt-6 h-display text-5xl md:text-7xl leading-[1.1]">
              この街が、
              <br />
              <em className="h-latin not-italic text-cream/95">あなたのものになる。</em>
            </h1>
            <p className="mt-6 text-[14px] md:text-[15px] text-cream/85 max-w-md leading-relaxed">
              下京区に佇む二つの宿。それぞれが独自の世界を持ち、
              <br className="hidden md:inline" />
              京都への生きた入口となる。
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/about" className="btn !text-cream !border-cream/70 hover:!bg-cream hover:!text-charcoal">
                コンセプトを読む
              </Link>
              <Link href="#book" className="btn btn--solid !bg-cream !text-charcoal !border-cream">
                予約する
              </Link>
            </div>
          </div>
        </div>

        {/* スライドドットは HeroSlideshow が描画する */}

        {/* スクロール表示 */}
        <div className="absolute z-10 right-6 md:right-10 bottom-10 hidden md:flex flex-col items-center gap-3 text-cream/70">
          <span className="h-latin text-[10px] tracking-[0.3em] rotate-90 origin-bottom-right translate-y-12">
            SCROLL
          </span>
          <span className="w-px h-16 bg-cream/40" />
        </div>
      </section>

      {/* ───────── ブランドコンセプト引用 ───────── */}
      <section className="bg-warm-off border-y border-light-line">
        <div className="max-w-content mx-auto px-5 md:px-10 py-20 md:py-28 text-center">
          <Eyebrow className="!justify-center">solmu kyoto について</Eyebrow>
          <p className="mt-8 h-display text-3xl md:text-5xl leading-[1.45]">
            「優しい縁を編む、
            <br className="md:hidden" />
            京の結び目。」
          </p>
          <p className="mt-8 text-sm md:text-[15px] text-mid max-w-xl mx-auto leading-relaxed">
            下京区と中京区に佇む二つの宿。地元の人々と旅人が予期せぬ出会いを紡ぐ場所として、
            旅人を京都の日常へと繋ぐ。観光案内には載らない路地が、ここにある。
          </p>
          <Link href="/about" className="mt-10 inline-flex btn btn--ghost">
            コンセプトを読む
          </Link>
        </div>
      </section>

      {/* ───────── 体験テaser ───────── */}
      <section className="max-w-content mx-auto px-5 md:px-10 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="厳選された体験"
            title={
              <>
                solmuで
                <em className="h-latin not-italic text-chigusa-dark">過ごす時間</em>
              </>
            }
            body="自転車レンタルや季節の朝食から、地元職人との陶芸ワークショップまで——すべての体験が、あなたを京都の奥深くへと繋ぐ。"
          />
          <Link href="#" className="btn btn--ghost self-start md:self-end">
            すべての体験を見る
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "自転車レンタル", body: "下京区・中京区を、厳選されたルートマップを手にお好きなペースで探索できます。", variant: "default" as const, tag: "両ホテル", icon: <Icon.Map />, src: IMG.expBike },
            { label: "陶芸ワークショップ", body: "四十年間この地で土を捏ねてきた下京の陶芸家との、朝のひとときを共に。", variant: "earth" as const, tag: "moto-akuoji", icon: <Icon.Tea />, src: IMG.expPottery },
            { label: "季節の朝食", body: "錦市場の馴染みの生産者から仕入れた食材で丁寧に仕立てる朝食。", variant: "default" as const, tag: "両ホテル", icon: <Icon.Food />, src: IMG.expBreakfast },
            { label: "寺院の朝散歩", body: "観光客が来る前の仏光寺界隈を、ガイドとともに歩く40分間のモーニングウォーク。", variant: "chigusa" as const, tag: "bukkoji", icon: <Icon.Garden />, src: IMG.expTempleWalk },
          ].map((it) => (
            <article key={it.label} className="flex flex-col gap-4">
              <Placeholder label={it.label} ratio="4/5" variant={it.variant} icon={it.icon} rounded src={it.src} />
              <span className="self-start text-[10px] tracking-[0.18em] uppercase text-mid border border-light-line px-2 py-1">
                {it.tag}
              </span>
              <h3 className="h-display text-xl">{it.label}</h3>
              <p className="text-[13px] text-mid leading-relaxed">{it.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ───────── 二つの宿 ───────── */}
      <section className="bg-shironeri">
        <div className="max-w-content mx-auto px-5 md:px-10 py-24 md:py-32">
          <SectionHeading
            align="center"
            eyebrow="二つの宿"
            title={
              <>
                あなたの<em className="h-latin not-italic">京都</em>を選ぶ
              </>
            }
          />

          <div className="mt-16 grid lg:grid-cols-2 gap-8">
            {[
              {
                slug: "moto-akuoji",
                name: "元悪王子",
                area: "下京区",
                body: "温かな土の色と、町家のやわらかなリズム。陶芸家、織り職人、そして毎朝顔なじみの豆腐屋が暮らす街。",
                variant: "earth" as const,
                accent: "border-earth text-earth-dark",
                btn: "btn--earth",
                icon: <Icon.Townhouse />,
                src: IMG.motoExterior,
              },
              {
                slug: "bukkoji",
                name: "仏光寺",
                area: "中京区",
                body: "鼠青色と静けさ。古寺の鐘が夕暮れに響き、街が目覚める前から小さなカフェが扉を開く路地。",
                variant: "chigusa" as const,
                accent: "border-chigusa text-chigusa-dark",
                btn: "btn--chigusa",
                icon: <Icon.Torii />,
                src: IMG.bukkoExterior,
              },
            ].map((h) => (
              <article key={h.slug} className="group bg-cream border border-light-line overflow-hidden">
                <div className="relative">
                  <Placeholder label={`${h.name} — 外観 / 路地`} ratio="3/2" variant={h.variant} icon={h.icon} src={h.src} />
                </div>
                <div className="p-8 md:p-10 flex flex-col gap-5">
                  <div className="flex items-baseline gap-3">
                    <h3 className="h-display text-3xl">{h.name}</h3>
                    <span className="h-latin text-sm text-mid">{h.slug}</span>
                  </div>
                  <span className={`self-start text-[10px] tracking-[0.18em] uppercase border ${h.accent} px-3 py-1`}>
                    {h.area}
                  </span>
                  <p className="text-sm text-mid leading-relaxed">{h.body}</p>
                  <Link href={`/hotels/${h.slug}`} className={`btn ${h.btn} self-start mt-2`}>
                    {h.slug} を探索する
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── エリア ───────── */}
      <section className="bg-warm-off">
        <div className="max-w-content mx-auto px-5 md:px-10 py-24 md:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <SectionHeading
            eyebrow="町の記憶"
            title={
              <>
                エリアを
                <br />
                <em className="h-latin not-italic">探索する</em>
              </>
            }
            body="下京区・中京区こそが、京都の日常が息づく場所。錦市場や烏丸御池から徒歩5分以内——観光案内には載らない路地が、ここにある。"
          />
          <div className="relative">
            <Placeholder
              label="エリアマップ — 下京区"
              ratio="4/5"
              icon={<Icon.Map />}
              className="!aspect-[4/3]"
              src={IMG.areaMap}
            />
          </div>
        </div>
        <div className="max-w-content mx-auto px-5 md:px-10 -mt-12 pb-24">
          <Link href="/area" className="btn btn--solid">
            エリア情報を見る
          </Link>
        </div>
      </section>

      {/* ───────── ニュース ───────── */}
      <section className="max-w-content mx-auto px-5 md:px-10 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="お知らせ"
            title={
              <>
                ニュース &<em className="h-latin not-italic"> ストーリー</em>
              </>
            }
          />
          <Link href="/news" className="btn btn--ghost self-start md:self-end">
            すべてのニュース
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { variant: "default" as const, tag: "solmu kyoto", date: "2024年12月", title: "下京の冬の光：四度の訪問で見えてきた街の素顔", icon: <Icon.Camera />, src: IMG.news["shimogyo-winter-light"], slug: "shimogyo-winter-light" },
            { variant: "earth" as const, tag: "moto-akuoji", date: "2024年11月", title: "下京の窯元との新たな陶芸ワークショップ提携、スタート", icon: <Icon.Tea />, src: IMG.news["shimogyo-pottery-workshop"], slug: "shimogyo-pottery-workshop" },
            { variant: "chigusa" as const, tag: "bukkoji", date: "2024年10月", title: "仏光寺の鐘の音：住職との対話", icon: <Icon.Lantern />, src: IMG.news["bukkoji-bell"], slug: "bukkoji-bell" },
          ].map((n) => (
            <Link key={n.title} href={`/news/${n.slug}`} className="group">
              <Placeholder label={n.title} ratio="3/2" variant={n.variant} icon={n.icon} src={n.src} />
              <div className="mt-5 flex flex-col gap-2">
                <span className="text-[10px] tracking-[0.18em] uppercase text-mid">{n.tag}</span>
                <span className="h-latin text-sm text-mid">{n.date}</span>
                <h3 className="text-base font-medium leading-relaxed group-hover:text-mid transition">
                  {n.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ───────── 予約バンド ───────── */}
      <section id="book" className="bg-charcoal text-cream">
        <div className="max-w-content mx-auto px-5 md:px-10 py-20 md:py-24 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <Eyebrow tone="light">予約</Eyebrow>
            <h2 className="mt-5 h-display text-3xl md:text-5xl">
              静かな京都の夜を、
              <br />
              <em className="h-latin not-italic">いま予約する</em>
            </h2>
          </div>
          <form className="md:col-span-5 grid gap-3 bg-cream/[0.04] border border-cream/15 p-6">
            <label className="text-[11px] tracking-widest text-cream/70">宿を選ぶ</label>
            <select className="bg-transparent border border-cream/20 px-4 py-3 text-sm">
              <option className="text-charcoal">solmu kyoto / 元悪王子</option>
              <option className="text-charcoal">solmu kyoto / 仏光寺</option>
            </select>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] tracking-widest text-cream/70">チェックイン</label>
                <input type="date" className="mt-1 w-full bg-transparent border border-cream/20 px-3 py-3 text-sm" />
              </div>
              <div>
                <label className="text-[11px] tracking-widest text-cream/70">チェックアウト</label>
                <input type="date" className="mt-1 w-full bg-transparent border border-cream/20 px-3 py-3 text-sm" />
              </div>
            </div>
            <button className="btn btn--solid !bg-cream !text-charcoal !border-cream mt-2">
              空室を確認する
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
