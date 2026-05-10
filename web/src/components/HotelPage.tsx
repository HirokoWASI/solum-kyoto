import Link from "next/link";
import { Placeholder } from "@/components/Placeholder";
import { Icon } from "@/components/PlaceholderIcons";
import { Eyebrow } from "@/components/Eyebrow";
import { IMG } from "@/lib/assets";
import { CalendarCheck, BedLamp, MapPin, FaqBubbles, Pottery, Bicycle, Breakfast, Pagoda } from "@/components/BrandIcons";

// 各ホテル個別ページの共通レイアウト。パレットと文言を差し替えて利用する。
type Palette = "earth" | "chigusa";

export type HotelPageData = {
  slug: string;
  name: string;
  area: string;
  badge: string;
  tagline: string;
  overviewTitle: React.ReactNode;
  overviewBody: string[];
  highlightTags: string[];
  palette: Palette;
  rooms: { eyebrow: string; title: string; body: string }[];
  features: { title: string; body: string }[];
  experiences: { tag: string; title: string; body: string }[];
};

const accent = (p: Palette) =>
  p === "earth"
    ? {
        ring: "border-earth/40",
        tint: "bg-earth-bg",
        chip: "bg-earth-bg border-earth/40 text-earth-dark",
        rule: "bg-earth",
        emphasize: "text-earth-dark",
        btn: "btn--earth",
        outlineBtn: "btn--ghost",
        heroVariant: "earth" as const,
        nextHotel: { slug: "bukkoji", name: "仏光寺" },
      }
    : {
        ring: "border-chigusa/40",
        tint: "bg-chigusa-bg",
        chip: "bg-chigusa-bg border-chigusa/40 text-chigusa-dark",
        rule: "bg-chigusa",
        emphasize: "text-chigusa-dark",
        btn: "btn--chigusa",
        outlineBtn: "btn--ghost",
        heroVariant: "chigusa" as const,
        nextHotel: { slug: "moto-akuoji", name: "元悪王子" },
      };

export function HotelPage({ data }: { data: HotelPageData }) {
  const a = accent(data.palette);
  const isMoto = data.palette === "earth";
  const heroSrc = isMoto ? IMG.heroMoto : IMG.heroBukko;
  const lobbySrc = isMoto ? IMG.motoLobby : IMG.bukkoLobby;
  const bento = isMoto
    ? [IMG.motoBento1, IMG.motoBento2, IMG.motoBento3]
    : [IMG.bukkoBento1, IMG.bukkoBento2, IMG.bukkoBento3];

  return (
    <>
      {/* カラーインジケータ */}
      <div
        className="h-1 fixed top-0 inset-x-0 z-[60]"
        style={{
          background:
            data.palette === "earth"
              ? "linear-gradient(90deg,#D4C8AE,#B89C84,#8A6E56)"
              : "linear-gradient(90deg,#A8C4B7,#7A9E8E,#5A7E6E)",
        }}
      />

      {/* セカンダリナビ（このホテル内の見出し） */}
      <nav className={`pt-16 md:pt-20 border-b ${a.ring} ${a.tint}`}>
        <div className="max-w-content mx-auto px-5 md:px-10 flex items-center gap-1 overflow-x-auto h-12">
          {[
            { label: "概要", href: "#overview" },
            { label: "客室", href: "#rooms" },
            { label: "施設・サービス", href: "#facilities" },
            { label: "体験プログラム", href: "#experiences" },
          ].map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-4 py-2 text-[11px] tracking-widest whitespace-nowrap transition ${
                i === 0 ? "bg-charcoal text-cream" : "text-mid hover:text-charcoal"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ヒーロー */}
      <section className="relative h-[80vh] min-h-[560px] overflow-hidden">
        <Placeholder
          label={`${data.name} — ヒーロー / 外観 or 内観`}
          fill
          variant={a.heroVariant}
          icon={<Icon.Townhouse />}
          src={heroSrc}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-black/65" />
        <div className="relative z-10 h-full max-w-content mx-auto px-5 md:px-10 flex flex-col justify-end pb-20 text-cream">
          <span className="self-start text-[10px] tracking-[0.22em] uppercase bg-cream/90 text-charcoal px-3 py-1">
            {data.badge}
          </span>
          <h1 className="mt-6 h-display text-6xl md:text-7xl">{data.name}</h1>
          <span className="mt-1 h-latin text-sm text-cream/55">{data.slug}</span>
          <p className="mt-5 text-[14px] md:text-[15px] text-cream/85 max-w-lg leading-relaxed">
            {data.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#book" className={`btn ${a.btn}`}>ご予約はこちら</a>
            <a href="#overview" className="btn !text-cream !border-cream/70 hover:!bg-cream hover:!text-charcoal">
              探索する
            </a>
          </div>
        </div>
      </section>

      {/* 概要 */}
      <section id="overview" className={`${a.tint} border-b ${a.ring}`}>
        <div className="max-w-content mx-auto px-5 md:px-10 py-24 md:py-28 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Eyebrow tone={data.palette}>ホテル概要</Eyebrow>
            <h2 className="h-display text-3xl md:text-5xl leading-tight">{data.overviewTitle}</h2>
            <div className="space-y-4 text-[14px] md:text-[15px] text-mid leading-relaxed">
              {data.overviewBody.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className={`h-px w-16 ${a.rule}`} />
            <div className="flex flex-wrap gap-2 mt-2">
              {data.highlightTags.map((t) => (
                <span key={t} className={`text-[11px] px-3 py-2 border ${a.chip}`}>{t}</span>
              ))}
            </div>
          </div>
          <aside className="flex flex-col gap-5">
            <Placeholder
              label={`${data.name} — ロビー / 内観`}
              ratio="4/5"
              variant={a.heroVariant}
              icon={<Icon.Room />}
              rounded
              src={lobbySrc}
            />
            <div className="bg-cream border border-light-line p-6 flex flex-col gap-4">
              <div className="eyebrow !text-[10px]">一目でわかる</div>
              {[
                { l: "チェックイン / チェックアウト", v: "15:00 / 11:00", I: CalendarCheck },
                { l: "客室タイプ", v: "スペリオール・デラックス・スイート", I: BedLamp },
                { l: "ロケーション", v: data.area, I: MapPin },
                { l: "対応言語", v: "日本語・英語・中国語", I: FaqBubbles },
              ].map((r) => {
                const I = r.I;
                return (
                  <div key={r.l} className="flex items-start gap-3 border-b border-light-line/70 pb-3 last:border-none">
                    <I className={`mt-0.5 w-5 h-5 ${data.palette === "earth" ? "text-earth-dark" : "text-chigusa-dark"}`} />
                    <div className="flex-1">
                      <div className="text-[12px] font-medium tracking-wide">{r.l}</div>
                      <div className="text-[12px] text-mid">{r.v}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      {/* 客室プレビュー */}
      <section id="rooms" className={`border-b ${a.ring}`}>
        <div className="max-w-content mx-auto px-5 md:px-10 py-24 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <Eyebrow tone={data.palette}>お部屋</Eyebrow>
              <h2 className="mt-4 h-display text-3xl md:text-4xl">
                客室 & <em className={`h-latin not-italic ${a.emphasize}`}>スイート</em>
              </h2>
            </div>
            <Link href="/rooms" className="btn btn--ghost self-start md:self-end">全客室を見る</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {data.rooms.map((r, i) => {
              const tier = ["superior", "deluxe", "suite"][i] ?? "superior";
              const prefix = isMoto ? "moto" : "bukko";
              const roomSlug = `${prefix}-${tier}`;
              return (
              <Link
                key={r.title}
                href={`/rooms/${roomSlug}`}
                className="group bg-cream border border-light-line overflow-hidden flex flex-col"
              >
                <Placeholder label={`${r.title} — 客室画像`} ratio="3/2" variant={a.heroVariant} icon={<Icon.Room />} src={IMG.rooms[roomSlug]} />
                <div className="p-6 flex flex-col gap-3">
                  <span className="text-[10px] tracking-[0.18em] uppercase text-mid">{r.eyebrow}</span>
                  <h3 className="h-display text-xl">{r.title}</h3>
                  <p className="text-[13px] text-mid leading-relaxed">{r.body}</p>
                  <span className="mt-2 self-start text-[11px] tracking-widest text-charcoal group-hover:text-mid transition">
                    客室を詳しく見る →
                  </span>
                </div>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 施設 */}
      <section id="facilities" className={`${a.tint} border-b ${a.ring}`}>
        <div className="max-w-content mx-auto px-5 md:px-10 py-24 md:py-28">
          <Eyebrow tone={data.palette}>施設・サービス</Eyebrow>
          <h2 className="mt-4 h-display text-3xl md:text-5xl">
            ホテルの特徴 & <em className={`h-latin not-italic ${a.emphasize}`}>施設案内</em>
          </h2>

          {/* ベントーギャラリー */}
          <div className="mt-12 grid grid-cols-3 gap-2 h-[420px]">
            <Placeholder label="施設画像 — ラウンジ" variant={a.heroVariant} fill className="!aspect-auto col-span-2 row-span-2 !relative" icon={<Icon.Tea />} src={bento[0]} />
            <Placeholder label="施設画像 — 朝食" variant={a.heroVariant} fill className="!aspect-auto !relative" icon={<Icon.Food />} src={bento[1]} />
            <Placeholder label={data.palette === "earth" ? "施設画像 — 浴室" : "施設画像 — 中庭"} variant={a.heroVariant} fill className="!aspect-auto !relative" icon={<Icon.Garden />} src={bento[2]} />
          </div>

          {/* リスト */}
          <ul className="mt-10 bg-cream border border-light-line divide-y divide-light-line">
            {data.features.map((f) => (
              <li key={f.title} className="p-6 flex gap-5 items-start hover:bg-warm-off transition">
                <span className={`mt-1.5 w-2 h-2 rounded-full ${data.palette === "earth" ? "bg-earth" : "bg-chigusa"}`} />
                <div className="flex-1">
                  <div className="text-[14px] font-medium">{f.title}</div>
                  <p className="text-[13px] text-mid leading-relaxed mt-1">{f.body}</p>
                </div>
                <span className="text-mid text-lg">›</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 体験 */}
      <section id="experiences" className={`border-b ${a.ring}`}>
        <div className="max-w-content mx-auto px-5 md:px-10 py-24 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <Eyebrow tone={data.palette}>体験プログラム</Eyebrow>
              <h2 className="mt-4 h-display text-3xl md:text-4xl">
                厳選された <em className={`h-latin not-italic ${a.emphasize}`}>体験プログラム</em>
              </h2>
              <p className="mt-3 text-sm text-mid max-w-md">
                {data.palette === "earth"
                  ? "下京区に住み続けたくなる、人々と場所への紹介。"
                  : "仏光寺の路地を歩き続けたくなる、人々と場所への紹介。"}
              </p>
            </div>
            <a href="#" className="btn btn--ghost self-start md:self-end">すべての体験を見る</a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {data.experiences.map((e) => {
              // タイトルキーワードから体験画像を推定する。
              const t = e.title;
              const expSrc =
                t.includes("陶芸") ? IMG.expPottery :
                t.includes("自転車") ? IMG.expBike :
                t.includes("朝食") ? IMG.expBreakfast :
                t.includes("寺院") || t.includes("散歩") ? IMG.expTempleWalk :
                t.includes("織") ? IMG.expWeaving :
                t.includes("藍") ? IMG.expIndigo :
                undefined;
              return (
              <article key={e.title} className="bg-cream border border-light-line flex flex-col">
                <Placeholder label={e.title} ratio="3/2" variant={a.heroVariant} icon={<Icon.Tea />} src={expSrc} />
                <div className="p-6 flex flex-col gap-3">
                  <span className={`self-start text-[10px] tracking-[0.18em] uppercase px-2 py-1 border ${a.chip}`}>{e.tag}</span>
                  <h3 className="h-display text-lg">{e.title}</h3>
                  <p className="text-[13px] text-mid leading-relaxed">{e.body}</p>
                  <span className="mt-2 self-start text-[11px] tracking-widest text-charcoal">詳しく見る →</span>
                </div>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* もう一つの宿 */}
      <section className="bg-charcoal text-cream">
        <div className="max-w-content mx-auto px-5 md:px-10 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Eyebrow tone="light">もうひとつの宿</Eyebrow>
            <h3 className="mt-4 h-display text-3xl md:text-4xl">
              {a.nextHotel.name}も<em className="h-latin not-italic">訪れる</em>
            </h3>
          </div>
          <Link href={`/hotels/${a.nextHotel.slug}`} className="btn !text-cream !border-cream/70 hover:!bg-cream hover:!text-charcoal self-start md:self-center">
            {a.nextHotel.name} を見る
          </Link>
        </div>
      </section>
    </>
  );
}
